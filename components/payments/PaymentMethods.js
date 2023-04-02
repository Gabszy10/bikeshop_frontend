import React, { useEffect, useState } from "react";
import OrderSummary from "../checkout/OrderSummary";
import Link from "next/link";
import ShippingSummary from "../checkout/ShippingSummary";
import {
  decryptData,
  clearData,
  encryptData,
} from "../../store/actions/cartActions";
import {
  decryptInfoData,
  encryptString,
} from "../../store/actions/infoActions";
import axios from "axios";
import Router from "next/router";
import Paypal from "./Paypal";
import cookie from "js-cookie";
import { formatDate } from "../../helpers/function";
import { Slide, toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";

let host = process.env.API_URL;

function PaymentMethods() {
  const dispatch = useDispatch();
  const [selectedPayment, setselectedPayment] = useState("");
  const [isCampaign, setisCampaign] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [isCodOn, setisCodOn] = useState(false);

  useEffect(() => {
    let encryptedInfoData = localStorage.getItem(process.env.INFO_COOKIE);
    let stateSchema = decryptInfoData(encryptedInfoData);

    if (
      stateSchema.shipping_city.value.toLowerCase().includes("makati") ||
      stateSchema.shipping_address.value.toLowerCase().includes("makati") ||
      [
        1226, 1233, 1209, 1214, 1217, 1221, 1222, 1219, 1220, 1202, 1201, 1228,
        1212, 1211, 1206, 1204, 1229, 1232, 1224, 1200, 1207, 1235, 1231, 1218,
        1213, 1230, 1210, 1216, 1215, 1227, 1203, 1234, 1223, 1205, 1225, 1208,
      ].includes(parseInt(stateSchema.shipping_zip.value))
    ) {
      setisCodOn(true);
    }

    let decryptedData = decryptInfoData();

    if (decryptedData) {
      if (decryptedData.delivery_date.value == "2023-02-14") {
        setisCampaign(true);
      }
    }
    // toast.error(err.response.data[0].message);
    // console.log(, "HEYYYY");
  }, []);

  const handleChange = (value) => {
    setselectedPayment(value);
  };

  const fetchUser = async (token) => {
    try {
      let res = await axios.get(`${host}/api/user/user/details`, {
        headers: {
          Authorization: token,
        },
      });
      if (res.data.userDetails) {
        return res.data.userDetails["id"];
      } else {
        return 0;
      }
    } catch (error) {
      localStorage.removeItem("token");
      this.props.history.push("/login");
      toast.error("Your token is invalid or expired.");
    }
  };

  const handleChangePrice = (products) => {
    let cartStorage = localStorage.getItem(process.env.CART_COOKIE);
    let cartArray = decryptData(cartStorage);

    for (let i = 0; i < products.length; i++) {
      const el = products[i];

      var index = cartArray.findIndex((item) => item.id === el.productId);

      if (index > -1) {
        cartArray[index]["campaign_price"] = el.campaign_price;
        cartArray[index]["discount_price"] = el.discount_price;
      }

      let encryptedData = encryptData(JSON.stringify(cartArray));

      localStorage.setItem(process.env.CART_COOKIE, encryptedData);

      dispatch(
        (() => {
          return {
            type: "UPDATE_CART",
          };
        })()
      );
    }
  };

  const handleSubmit = async (paymentMethod) => {
    let userId = 0;
    let token = cookie.get("_wus_BJK");
    if (token) {
      try {
        userId = await fetchUser(token);
      } catch (error) {}
    }

    setisLoading(true);
    let encryptedData = localStorage.getItem(process.env.CART_COOKIE);
    let encryptedInfoData = localStorage.getItem(process.env.INFO_COOKIE);
    let cart = decryptData(encryptedData);
    let stateSchema = decryptInfoData(encryptedInfoData);

    let orderItems = [];
    for (let i = 0; i < cart.length; i++) {
      let obj = null;
      if (isCampaign) {
        obj = {
          productId: cart[i].id,
          name: cart[i].name,
          quantity: cart[i].quantity,
          itemPrice: cart[i].campaign_price,
        };
      } else {
        obj = {
          productId: cart[i].id,
          name: cart[i].name,
          quantity: cart[i].quantity,
          itemPrice: cart[i].discount_price,
        };
      }

      orderItems.push(obj);
    }

    let order = {
      orderItems: orderItems,
      userId: userId,
      shippingFirstName: stateSchema.shipping_firstName.value,
      shippingLastName: stateSchema.shipping_lastName.value,
      shippingPhone: stateSchema.shipping_phone.value,
      shippingAddress: stateSchema.shipping_address.value,
      shippingCity: stateSchema.shipping_city.value,
      shippingProvince: "Metro Manila",
      shippingZip: stateSchema.shipping_zip.value,
      deliveryInstructions: stateSchema.note.value,
      message: stateSchema.message.value,
      billingFirstName: stateSchema.billing_firstName.value,
      billingLastName: stateSchema.billing_lastName.value,
      billingPhone: stateSchema.billing_phone.value,
      billingEmail: stateSchema.billing_email.value,
      deliveryDate: stateSchema.delivery_date.value,
      deliveryTime: stateSchema.delivery_time.value,
      paymentMethod: paymentMethod,
      isCampaign: isCampaign,
    };

    try {
      const res = await axios.post(`${host}/api/user/order`, order);
      if (res) {
        let encryptedData = encryptString(res.data.order_name);

        // return console.log(encryptedData, encryptedData);

        let sendEmailRes = await axios.post(
          `${host}/api/user/order/sendEmail`,
          {
            billingEmail: order.billingEmail,
            billingFirstName: order.billingFirstName,
            orderName: res.data.order_name,
            cryptoStr: encryptedData,
            orderItems: orderItems,
            paymentMethod: paymentMethod,
            deliveryDate: formatDate(stateSchema.delivery_date.value),
          }
        );

        if (sendEmailRes) {
          clearData();
          Router.push(`/thankyou/${encryptedData}`);
        }
      }
    } catch (err) {
      setisLoading(false);
      console.log(err.response.data);
      console.log(err.response.data[0].message);
      if (err.response) {
        if (err.response.data) {
          if (err.response.data[0]) {
            if (err.response.data[0].updatedOrderItems) {
              handleChangePrice(err.response.data[0].updatedOrderItems);
            }
            return toast.error(err.response.data[0].message);
          }
        }
      } else {
        toast.error("Something went wrong, Please try again or contact us.");
      }
    }
  };

  return (
    <div className="pt-40">
      <ToastContainer transition={Slide} />
      <div className="row" style={{ marginLeft: "0px", marginRight: "0px" }}>
        <div className="col-lg-5 col-md-5">
          <div>
            <div className="d-flex">
              <h5>User Details</h5>
              <Link href="/checkout">
                <a className="ml-auto btn btn-link text-danger">Edit</a>
              </Link>
            </div>
            <ShippingSummary />
          </div>

          <div>
            <div className="d-flex">
              <h5>Order Details</h5>
              <Link href="/cart">
                <a className="ml-auto btn btn-link text-danger">Edit</a>
              </Link>
            </div>
            <OrderSummary />
          </div>
        </div>
        <div className="col-lg-7 col-md-7">
          <h5 className="text-center">Select Payment Method</h5>
          <div className="order-details">
            <div
              className="payment-method"
              style={{
                paddingTop: 0,
                marginTop: "20px",
                marginLeft: "0.5rem",
                marginRight: "0.5rem",
              }}
            >
              <div>
                <p>
                  <input
                    type="radio"
                    id="direct-bank-transfer"
                    name="radio-button"
                    onChange={() => handleChange("bank")}
                  />
                  <label htmlFor="direct-bank-transfer">
                    Direct Bank Transfer
                  </label>
                  {selectedPayment == "bank" ? (
                    <>
                      <hr />
                      <img
                        src={require("../../images/logos/banks2.jpg")}
                        alt="image"
                        height="150"
                      />
                      <p style={{ paddingTop: "20px" }}>
                        Once the order is completed, you can settle the amount
                        into our BPI account (via deposit or bank transfer)
                      </p>
                      <div>
                        <div
                          className="d-flex justify-content-between"
                          style={{ maxWidth: "300px" }}
                        >
                          <h6>Bank:</h6>
                          <h6>BPI</h6>
                        </div>
                        <div
                          className="d-flex justify-content-between"
                          style={{ maxWidth: "300px" }}
                        >
                          <h6>Account Name:</h6>
                          <h6>I-Wheels</h6>
                        </div>
                        <div
                          className="d-flex justify-content-between"
                          style={{ maxWidth: "300px" }}
                        >
                          <h6>Account Number:</h6>
                          <h6>3039022566</h6>
                        </div>
                      </div>
                      <p style={{ color: "red", paddingTop: "20px" }}>
                        <b>Note:</b> Please send proof of payment (screenshot,
                        printscreen) to{" "}
                        <span style={{ color: "#33bd33" }}>
                          i-Wheels26@gmail.com
                        </span>{" "}
                        or send a message to our{" "}
                        <a
                          className="d-inline"
                          href="https://www.facebook.com/i-Wheelsph-127061742122440/"
                        >
                          Facebook Page
                        </a>
                        .
                      </p>
                      <br />
                      <br />
                      {!isLoading ? (
                        <button
                          onClick={() => handleSubmit("Bank - BPI")}
                          className="btn btn-light mb-3"
                        >
                          Confirm Order
                        </button>
                      ) : (
                        <div className="lds-ring">
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      )}

                      <hr />
                    </>
                  ) : null}
                </p>
              </div>
              <div>
                <p>
                  <input
                    type="radio"
                    id="cash-on-delivery"
                    name="radio-button"
                    onChange={() => handleChange("cod")}
                  />
                  <label htmlFor="cash-on-delivery">Cash on Delivery</label>
                  {selectedPayment == "cod" ? (
                    <>
                      <hr />
                      <img
                        src={require("../../images/logos/cod.jpg")}
                        alt="image"
                        height="100"
                      />
                      <p style={{ paddingTop: "10px" }}>
                        When using our Cash on Delivery service, payment is
                        given to our delivery rider upon receipt of item.
                      </p>
                      <br />
                      {!isLoading ? (
                        <button
                          onClick={() => handleSubmit("COD")}
                          className="btn btn-light mb-3"
                        >
                          Confirm Order
                        </button>
                      ) : (
                        <div className="lds-ring">
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      )}
                      <hr />
                    </>
                  ) : null}
                </p>
              </div>

              <div>
                <p>
                  <input
                    type="radio"
                    id="gcash"
                    name="radio-button"
                    onChange={() => handleChange("gcash")}
                  />

                  <label htmlFor="gcash">GCash</label>
                  {selectedPayment == "gcash" ? (
                    <>
                      <hr />
                      <img
                        src={require("../../images/logos/gcash.png")}
                        alt="image"
                        height="70"
                      />
                      <p style={{ paddingTop: "20px" }}>
                        Once the order is completed, you can settle the amount
                        into our Gcash account (via deposit or bank transfer)
                      </p>
                      <div>
                        <div
                          className="d-flex justify-content-between"
                          style={{ maxWidth: "300px" }}
                        >
                          <h6>E-Wallet:</h6>
                          <h6>GCash</h6>
                        </div>
                        <div
                          className="d-flex justify-content-between"
                          style={{ maxWidth: "300px" }}
                        >
                          <h6>Account Name:</h6>
                          <h6>Marxs Joshua</h6>
                        </div>
                        <div
                          className="d-flex justify-content-between"
                          style={{ maxWidth: "300px" }}
                        >
                          <h6>Mobile Number:</h6>
                          <h6>09214430131</h6>
                        </div>
                      </div>
                      <p style={{ color: "red", paddingTop: "20px" }}>
                        <b>Note:</b> Please send proof of payment (screenshot,
                        printscreen) to{" "}
                        <span style={{ color: "#33bd33" }}>
                          i-Wheels26@gmail.com
                        </span>{" "}
                        or send a message to our{" "}
                        <a
                          className="d-inline"
                          href="https://www.facebook.com/i-Wheelsph-127061742122440/"
                        >
                          Facebook Page
                        </a>
                        .
                      </p>
                      <br />
                      {!isLoading ? (
                        <button
                          onClick={() => handleSubmit("GCash")}
                          className="btn btn-light mb-3"
                        >
                          Confirm Order
                        </button>
                      ) : (
                        <div className="lds-ring">
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      )}
                      <hr />
                    </>
                  ) : null}
                </p>
              </div>
              <div>
                <p>
                  <input
                    type="radio"
                    id="paymaya"
                    name="radio-button"
                    onChange={() => handleChange("paymaya")}
                  />
                  <label htmlFor="paymaya">Paymaya</label>
                  {selectedPayment == "paymaya" ? (
                    <>
                      <hr />
                      <img
                        src={require("../../images/logos/paymaya.jpg")}
                        alt="image"
                        height="50"
                      />
                      <p style={{ paddingTop: "20px" }}>
                        Once the order is completed, you can settle the amount
                        into our Paymaya account (via deposit or bank transfer)
                      </p>
                      <div>
                        <div
                          className="d-flex justify-content-between"
                          style={{ maxWidth: "300px" }}
                        >
                          <h6>E-Wallet:</h6>
                          <h6>Paymaya</h6>
                        </div>
                        <div
                          className="d-flex justify-content-between"
                          style={{ maxWidth: "300px" }}
                        >
                          <h6>Account Name:</h6>
                          <h6>I-Wheels</h6>
                        </div>
                        <div
                          className="d-flex justify-content-between"
                          style={{ maxWidth: "300px" }}
                        >
                          <h6>Mobile Number:</h6>
                          <h6>0916 509 1083</h6>
                        </div>
                      </div>
                      <p style={{ color: "red", paddingTop: "20px" }}>
                        <b>Note:</b> Please send proof of payment (screenshot,
                        printscreen) to{" "}
                        <span style={{ color: "#33bd33" }}>
                          i-Wheels26@gmail.com
                        </span>{" "}
                        or send a message to our{" "}
                        <a
                          className="d-inline"
                          href="https://www.facebook.com/i-Wheelsph-127061742122440/"
                        >
                          Facebook Page
                        </a>
                        .
                      </p>
                      <br />
                      {!isLoading ? (
                        <button
                          onClick={() => handleSubmit("Paymaya")}
                          className="btn btn-light mb-3"
                        >
                          Confirm Order
                        </button>
                      ) : (
                        <div className="lds-ring">
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      )}
                      <hr />
                    </>
                  ) : null}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethods;

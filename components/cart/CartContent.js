import React, { useEffect, useState } from "react";
import Link from "next/link";
import Router from "next/router";
import { connect } from "react-redux";
import CartProduct from "./CartProduct";
import { ToastContainer, toast, Slide } from "react-toastify";
import { formatNumber, isDateBeforeToday } from "../../helpers/function";
import { addToCartAddons, decryptData } from "../../store/actions/cartActions";
import Calendar from "../calendar/Calendar";
import {
  decryptInfoData,
  encryptInfoData,
} from "../../store/actions/infoActions";
import ForceAddon from "../shop-style-one/ForceAddon";

function CartContent(props) {
  const [cart, setcart] = useState([]);
  const [total, settotal] = useState(0);
  const [addon, setAddon] = useState([]);
  const [isCampaign, setisCampaign] = useState(false);
  const [state, setstate] = useState({
    delivery_date: "",
    delivery_time: "",
    note: "",
    message: "",
  });

  useEffect(() => {
    let decryptedData = decryptInfoData();

    if (decryptedData) {
      if (decryptedData.delivery_date.value == "2023-02-14") {
        setisCampaign(true);
      }

      setstate({
        delivery_date: decryptedData.delivery_date.value,
        delivery_time: decryptedData.delivery_time.value,
        note: decryptedData.note.value,
        message: decryptedData.message.value,
      });
    }
  }, []);

  useEffect(() => {}, [addon]);

  useEffect(() => {
    let encryptedData = localStorage.getItem(process.env.CART_COOKIE)
      ? localStorage.getItem(process.env.CART_COOKIE)
      : [];

    let myProd = decryptData(encryptedData);

    if (myProd.length <= 0) {
      alert("You dont have any items in your cart.");
      return (window.location.href = "/");
    }

    var myTotal = 0;
    for (var i = 0; i < myProd.length; i++) {
      if (isCampaign) {
        myTotal = myTotal + myProd[i].campaign_price * myProd[i].quantity;
      } else {
        myTotal = myTotal + myProd[i].discount_price * myProd[i].quantity;
      }
    }

    let addonTotal = 0;
    addon.forEach((item, i) => {
      addonTotal += item.discount_price;
    });

    settotal(myTotal + addonTotal);
  }, [cart, isCampaign, addon]);

  function handleOnChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    console.log(name, value);

    setstate((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // handleStateChange(event);
  }

  function handleCalendarChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    if (value == "2023-02-14") {
      setisCampaign(true);
    } else {
      setisCampaign(false);
    }

    setstate((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const isValid = () => {
    // if (!state.delivery_date) {
    //   toast.error("Please select delivery date.", {
    //     position: "bottom-left",
    //     autoClose: 2000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //   });
    //   return false;
    // } else if (!state.delivery_time) {
    //   toast.error("Please select delivery time.", {
    //     position: "bottom-left",
    //     autoClose: 2000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //   });
    //   return false;
    // } else if (isDateBeforeToday(state.delivery_date)) {
    //   toast.error("Please select present date.", {
    //     position: "bottom-left",
    //     autoClose: 2000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //   });
    //   return false;
    // } else {
    //   return true;
    // }

    return true;
  };

  const proceedToCheckout = () => {
    if (isValid()) {
      if (addon.length) {
        props.addToCartAddons(addon, 1);
      }

      const { delivery_date, delivery_time, note, message } = state;
      let decryptedData = decryptInfoData();
      if (decryptedData) {
        let obj = {
          ...decryptedData,
          note: { value: note, error: "" },
          message: { value: message, error: "" },
          delivery_date: { value: delivery_date, error: "" },
          delivery_time: { value: delivery_time, error: "" },
        };
        encryptInfoData(obj);
      } else {
        let obj = {
          shipping_firstName: { value: "", error: "" },
          shipping_lastName: { value: "", error: "" },
          shipping_address: { value: "", error: "" },
          shipping_city: { value: "", error: "" },
          shipping_zip: { value: "", error: "" },
          billing_email: { value: "", error: "" },
          shipping_phone: { value: "", error: "" },
          billing_firstName: { value: "", error: "" },
          billing_lastName: { value: "", error: "" },
          billing_phone: { value: "", error: "" },
          note: { value: note, error: "" },
          message: { value: message, error: "" },
          delivery_date: { value: delivery_date, error: "" },
          delivery_time: { value: delivery_time, error: "" },
        };

        encryptInfoData(obj);
      }

      Router.push(`/checkout`);
    }
  };

  const getDate = (num) => {
    let date = new Date();
    date.setDate(date.getDate() + num);

    return date;
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <section className="cart-area ptb-60">
      <ToastContainer transition={Slide} />
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <form>
              <div className="cart-table table-responsive">
                <CartProduct setcart={setcart} isCampaign={isCampaign} />
              </div>

              <br />

              <div className="container text-center">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div>
                      <h4>Provinces</h4>
                      <h5>(5 - 14 Days)</h5>
                      <h5>
                        Get By: {months[getDate(0).getMonth()]}{" "}
                        {getDate(5).getDate()} - {getDate(14).getDate()}{" "}
                      </h5>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div>
                      <h4>Metro Manila</h4>
                      <h5>(1 - 7 Days)</h5>
                      <h5>
                        Get By: {months[getDate(0).getMonth()]}{" "}
                        {getDate(1).getDate()} - {getDate(7).getDate()}{" "}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              <br />

              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <label>
                    Delivery Instruction (Optional){" "}
                    <span className="required">*</span>
                  </label>
                  <textarea
                    name="note"
                    id="notes"
                    cols="30"
                    rows="6"
                    value={state.note}
                    onChange={handleOnChange}
                    placeholder="Instruction to delivery rider"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <label>
                    Message (Optional) <span className="required">*</span>
                  </label>
                  <textarea
                    name="message"
                    id="messages"
                    cols="30"
                    rows="6"
                    value={state.message}
                    onChange={handleOnChange}
                    placeholder="Your message to receiver"
                    className="form-control"
                  />
                </div>
              </div>

              <ForceAddon setAddon={setAddon} />

              <div className="cart-totals">
                <h3>Cart Totals</h3>

                <ul>
                  <li>
                    Subtotal <span>₱{formatNumber(total)}</span>
                  </li>
                  {/* <li>
                    Shipping <span>₱150.00</span>
                  </li> */}
                  <li>
                    Total{" "}
                    <span>
                      <b>₱{formatNumber(total)}</b>
                    </span>
                  </li>
                </ul>

                {total > 10000000 && (
                  <p style={{ color: "red" }}>
                    Minimum order is ₱800. If order is below ₱800, you will be
                    charge to get to the 800 limit.
                 </p>
                )}
                <div className="row">
                  <div className="col-md-6">
                    <Link href="/">
                      <a style={{ marginBottom: "0.5rem" }}>
                        <i
                          className="fas fa-angle-double-left"
                          style={{ marginRight: "5px" }}
                        ></i>
                        Back to Shop
                      </a>
                    </Link>
                  </div>

                  <div className="col-md-6">
                    <button
                      type="button"
                      onClick={proceedToCheckout}
                      className="btn btn-light proceed-checkout"
                    >
                      CONTINUE
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.addedItems,
    total: state.total,
    shipping: state.shipping,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addShipping: () => {
      dispatch({ type: "ADD_SHIPPING" });
    },
    substractShipping: () => {
      dispatch({ type: "SUB_SHIPPING" });
    },
    addToCartAddons: (products, qty) => {
      dispatch(addToCartAddons(products, qty));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContent);

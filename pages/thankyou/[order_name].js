import React, { useEffect } from "react";
import Link from "next/link";
import Navbar from "../../components/Layout/Navbar";
import Facility from "../../components/shop-style-one/Facility";
import Subscribe from "../../components/Common/Subscribe";
import Partner from "../../components/Common/Partner";
import InstagramPhoto from "../../components/Common/InstagramPhoto";
import Footer from "../../components/Layout/Footer";
import { decryptString } from "../../store/actions/infoActions";
import { fetchOrder } from "../../store/actions/orderActions";
import { formatNumber } from "../../helpers/function";

let host = process.env.API_URL;

function Thankyou(props) {
  let { order } = props;
  console.log(order);
  return (
    <React.Fragment>
      <div className="boxed-layout-wrapper">
        <div className="boxed-layout-content">
          <Navbar />

          <div
            className="thank-you-area m-auto"
            style={{
              paddingTop: "20px",
              paddingBottom: "20px",
              maxWidth: "650px",
            }}
          >
            <div className="container">
              <h3>Thank You!</h3>
              <h4>Your order has been processed.</h4>
              <hr />
              <div
                className="order-summary m-auto"
                style={{ maxWidth: "400px" }}
              >
                <div className="d-flex">
                  <p>Order Name:</p>
                  <p className="ml-auto">{order["order_name"]}</p>
                </div>
                {/* <div className="d-flex">
                  <p>Delivery Date:</p>
                  <p className="ml-auto">{order["delivery_date"]}</p>
                </div>
                <div className="d-flex">
                  <p>Delivery Time:</p>
                  <p className="ml-auto">{order["delivery_time"]}</p>
                </div> */}
                <div className="d-flex">
                  <p>Contact Email:</p>
                  <p className="ml-auto">
                    {order["order_detail"]["billing_email"]}
                  </p>
                </div>
                <div className="d-flex">
                  <p>Customer:</p>
                  <p className="ml-auto">
                    {" "}
                    {order["order_detail"]["billing_first_name"]}{" "}
                    {order["order_detail"]["billing_last_name"]}
                  </p>
                </div>
                <div className="d-flex">
                  <p>Payment:</p>
                  <p className="ml-auto">{order["payment_method"]}</p>
                </div>
                <div className="d-flex">
                  <p>Instruction:</p>
                  <p className="ml-auto">
                    {" "}
                    {order["order_detail"]["delivery_instructions"]}
                  </p>
                </div>
                <div className="d-flex">
                  <p>Message:</p>
                  <p className="ml-auto"> {order["order_detail"]["message"]}</p>
                </div>
                <hr />
              </div>
              <div className="d-flex mb-3 m-auto" style={{ maxWidth: "500px" }}>
                <div className="shipping-summary">
                  <h5>Shipping Info</h5>
                  <h6 className="mb-minus-12">
                    {order["order_detail"]["shipping_first_name"]}{" "}
                    {order["order_detail"]["shipping_last_name"]}
                  </h6>
                  <p className="mb-minus-12">
                    {order["order_detail"]["shipping_phone"]}
                  </p>
                  <p className="mb-minus-12">
                    {order["order_detail"]["shipping_address"]}
                  </p>
                  <p className="mb-minus-12">
                    {order["order_detail"]["shipping_province"]}, Philippines
                  </p>
                  <p className="mb-minus-12">
                    {order["order_detail"]["shipping_zip"]}
                  </p>
                </div>
                <p className="ml-auto">
                  {" "}
                  <div className="shipping-summary">
                    <h5>Billing Info</h5>
                    <h6 className="mb-minus-12">
                      {order["order_detail"]["billing_first_name"]}{" "}
                      {order["order_detail"]["billing_last_name"]}
                    </h6>
                    <p className="mb-minus-12">
                      {order["order_detail"]["billing_phone"]}
                    </p>
                  </div>
                </p>
              </div>
              <hr />
              <div
                className="order-summary m-auto"
                style={{ maxWidth: "500px" }}
              >
                <div className="d-flex mb-3">
                  <h5>Order Summary</h5>
                </div>
                {order["order_items"].map((item, i) => {
                  return (
                    <div className="d-flex mb-2" key={i}>
                      <div className="d-flex">
                        <img
                          src={`${host}/products/${item.product.product_images[0]["file_name"]}`}
                          alt=""
                          height="110"
                        />
                        <div className="align-self-center">
                          <p style={{ marginBottom: "-5px" }}>
                            <b>{item["product"].name}</b>
                          </p>
                          <p style={{ marginBottom: "-5px" }}>
                            Quantity: {item.quantity}
                          </p>
                          <p>Price: P{formatNumber(item.item_price)}</p>
                        </div>
                      </div>
                      <h6 className="ml-auto align-self-center">
                        P{formatNumber(item.total)}
                      </h6>
                    </div>
                  );
                })}
              </div>
              <hr />
              <div
                className="order-summary ml-auto"
                style={{ maxWidth: "400px" }}
              >
                <div className="d-flex justify-content-around">
                  <p>Sub total</p>
                  <p>P{formatNumber(order["sub_total"])}</p>
                </div>
                {order["charge_fee"] ? (
                  <div className="d-flex justify-content-around">
                    <p>Charge Fee</p>
                    <p>P{formatNumber(order["charge_fee"])}</p>
                  </div>
                ) : null}
                <div className="d-flex justify-content-around">
                  <p>Shipping</p>
                  <p>P{formatNumber(order["shipping_fee"])}</p>
                </div>

                <hr />
                <div className="d-flex justify-content-around">
                  <h6>Grand Total</h6>

                  <h6>P{formatNumber(order["total"])}</h6>
                </div>
              </div>
              <hr />
              <div>An email confirmation has been sent to you.</div>
              <br />
              <div>
                {" "}
                If you need further assistance, feel free to Contact Us.
              </div>
              <br />
              Thank you for choosing i-Wheels.shop!
            </div>
          </div>

          <Facility />
          {/* <Subscribe /> */}
          {/* <Partner /> */}
          {/* <InstagramPhoto /> */}
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}

Thankyou.getInitialProps = ({ query }) => {
  // console.log(decryptString(query.order_name));
  return fetchOrder(decryptString(query.order_name)).then((data) => {
    if (data.error) {
    } else {
      console.log(data);
      return { order: data["orderByName"], query };
    }
  });
};

export default Thankyou;

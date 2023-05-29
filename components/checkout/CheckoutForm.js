import React, { useState, useEffect } from "react";
import Router from "next/router";
import { connect } from "react-redux";
import OrderSummary from "./OrderSummary";
import Payment from "../payments/Payment";
import useForm from "./userForm";
import Calendar from "../calendar/Calendar";
import axios from "axios";
import { ToastContainer, toast, Zoom } from "react-toastify";
import { encryptInfoData } from "../../store/actions/infoActions";
import cookie from "js-cookie";
import { clearData } from "../../store/actions/cartActions";
import Cookies from "js-cookie";

function CheckoutForm({ total, shipping }) {
  let host = process.env.API_URL;

  const [user, setuser] = useState(null);

  useEffect(() => {
    let token = cookie.get("_wus_BJK");
    console.log(token);
    if (token) {
      setuser(token);
    }
  }, []);

  const handleSubmit = async () => {
    console.log("Form submitted.");
    let cart = JSON.parse(localStorage.getItem(process.env.CART_COOKIE));
    console.log(state, cart);
    let order = {
      orderItems: cart,
      shippingFirstName: stateSchema.shipping_firstName.value,
      shippingLastName: stateSchema.shipping_lastName.value,
      shippingPhone: stateSchema.shipping_phone.value,
      shippingAddress: stateSchema.shipping_address.value,
      shippingCity: stateSchema.shipping_city.value,
      shippingProvince: "Metro Manila",
      shippingZip: stateSchema.shipping_zip.value,
      deliveryInstructions: stateSchema.note.value,
      billingFirstName: stateSchema.billing_firstName.value,
      billingLastName: stateSchema.billing_lastName.value,
      billingPhone: stateSchema.billing_phone.value,
      billingEmail: stateSchema.billing_email.value,
      deliveryDate: stateSchema.delivery_date.value,
      deliveryTime: "Anytime",
      paymentMethod: "COD",
    };

    try {
      const res = await axios.post(`${host}/api/user/order`, order);
      if (res) {
        clearData();
        window.location.href = "/thankyou";
        console.log(res, "RES");
      }
    } catch (err) {
      console.log(err.response);
    }
  };

  let totalAmount = (total + shipping).toFixed(2);

  const [stateSchema, setstateSchema] = useState({
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
    note: { value: "", error: "" },
    message: { value: "", error: "" },
    delivery_date: { value: "", error: "" },
    delivery_time: { value: "", error: "" },
  });

  const handleStateChange = (e) => {
    setstateSchema({
      ...stateSchema,
      [e.target.name]: { value: e.target.value, error: "" },
    });
  };

  const handleToast = (message) => {
    toast.error(message, {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const isValid = () => {
    if (!state.shipping_lastName.value) {
      handleToast("Please input receiver last name.");
      return false;
    } else if (!state.shipping_firstName.value) {
      handleToast("Please input receiver first name.");
      return false;
    } else if (!state.shipping_address.value) {
      handleToast("Please input receiver address.");
      return false;
    } else if (!state.shipping_city.value) {
      handleToast("Please input receiver city.");
      return false;
    } else if (!state.shipping_zip.value) {
      handleToast("Please input receiver zip.");
      return false;
    } else if (!state.billing_email.value) {
      handleToast("Please input your email info.");
      return false;
    } else if (!state.shipping_phone.value) {
      handleToast("Please input receiver contact number.");
      return false;
    } else if (!state.billing_phone.value) {
      handleToast("Please input your contact number.");
      return false;
    } else if (!state.billing_firstName.value) {
      handleToast("Please input your first name.");
      return false;
    } else if (!state.billing_lastName.value) {
      handleToast("Please input your last name.");
      return false;
    } else if (!state.shipping_address.value) {
      handleToast("Please input receiver address.");
      return false;
    } else {
      return true;
    }
  };

  const validationStateSchema = {
    shipping_firstName: {
      required: true,
      validator: {
        regEx: /^[a-zA-Z]+$/,
        error: "Invalid first name format",
      },
    },

    delivery_date: {
      required: true,
    },

    delivery_time: {
      required: true,
    },

    shipping_lastName: {
      required: true,
      validator: {
        regEx: /^[a-zA-Z]+$/,
        error: "Invalid last name format.",
      },
    },

    shipping_address: {
      required: true,
      validator: {
        error: "Invalid address format.",
      },
    },

    shipping_city: {
      required: true,
      validator: {
        error: "Invalid last name format.",
      },
    },

    shipping_zip: {
      required: true,
      validator: {
        regEx: /^\d{4}$|^\d{4}-\d{4}$/,
        error: "Invalid zip format, use like 1234.",
      },
    },

    billing_email: {
      required: true,
      validator: {
        regEx:
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        error: "Invalid email format, use like example@gmail.com",
      },
    },

    shipping_phone: {
      required: true,
      validator: {
        regEx: /^(09|\+639)\d{9}$/,
        error: "Invalid phone number format use like 09343243243.",
      },
    },

    billing_firstName: {
      required: true,
      validator: {
        regEx: /^[a-zA-Z]+$/,
        error: "Invalid first name format.",
      },
    },

    billing_lastName: {
      required: true,
      validator: {
        regEx: /^[a-zA-Z]+$/,
        error: "Invalid last name format.",
      },
    },

    billing_phone: {
      required: true,
      validator: {
        regEx: /^(09|\+639)\d{9}$/,
        error: "Invalid phone number format use like 09343243243.",
      },
    },

    note: {
      required: false,
      validator: {
        regEx: /^[a-zA-Z]+$/,
        error: "Invalid note format.",
      },
    },

    message: {
      required: false,
      validator: {
        regEx: /^[a-zA-Z]+$/,
        error: "Invalid message format.",
      },
    },
  };

  const { state, handleOnChange, handleOnSubmit, disable, setState } = useForm(
    stateSchema,
    validationStateSchema,
    handleSubmit,
    handleStateChange
  );

  const errorStyle = {
    color: "red",
    fontSize: "13px",
  };
  // console.log(state);
  const proceedToPayment = () => {
    if (isValid()) {
      console.log(state);
      if (encryptInfoData(state)) {
        Router.push("/payment");
      }
    }
  };

  const handleCheckBox = (e) => {
    if (e.target.checked) {
      if (Cookies.get("user")) {
        const userInfo = JSON.parse(Cookies.get("user"));
        setState({
          ...stateSchema,
          shipping_firstName: { value: userInfo.first_name, error: "" },
          shipping_lastName: { value: userInfo.last_name, error: "" },
          shipping_address: { value: userInfo.address, error: "" },
          shipping_city: { value: userInfo.city, error: "" },
          shipping_zip: { value: userInfo.zip, error: "" },
        });
      }
    } else {
      setState({
        ...stateSchema,
        shipping_firstName: { value: "", error: "" },
        shipping_lastName: { value: "", error: "" },
        shipping_address: { value: "", error: "" },
        shipping_city: { value: "", error: "" },
        shipping_zip: { value: "", error: "" },
      });
    }
  };
  
  return (
    <>
      <ToastContainer transition={Zoom} />
      <section className="checkout-area ptb-60">
        <div className="container">
          <form onSubmit={handleOnSubmit}>
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="shipping-details">
                  {user ? (
                    <>
                      <div class="form-check float-right">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          onChange={handleCheckBox}
                        />
                        <label class="form-check-label" for="exampleCheck1">
                          Same as my user address
                        </label>
                      </div>
                      <br />
                      <hr />
                    </>
                  ) : null}
                  <h3 className="title">Send my orders to</h3>

                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>
                          First Name <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="shipping_firstName"
                          className="form-control"
                          onChange={handleOnChange}
                          value={state.shipping_firstName.value}
                          required
                        />
                        {state.shipping_firstName.error && (
                          <p style={errorStyle}>
                            {state.shipping_firstName.error}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>
                          Last Name <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="shipping_lastName"
                          className="form-control"
                          onChange={handleOnChange}
                          value={state.shipping_lastName.value}
                          required
                        />
                        {state.shipping_lastName.error && (
                          <p style={errorStyle}>
                            {state.shipping_lastName.error}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Phone</label>
                        <input
                          type="text"
                          className="form-control"
                          name="shipping_phone"
                          onChange={handleOnChange}
                          value={state.shipping_phone.value}
                          required
                        />
                        {state.shipping_phone.error && (
                          <p style={errorStyle}>{state.shipping_phone.error}</p>
                        )}
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <label>
                          Address <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="shipping_address"
                          className="form-control"
                          onChange={handleOnChange}
                          value={state.shipping_address.value}
                          placeholder="Street address, House Number / Company name, Baranggay"
                          required
                        />
                        {state.shipping_address.error && (
                          <p style={errorStyle}>
                            {state.shipping_address.error}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <label>
                          Town / City <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="shipping_city"
                          className="form-control"
                          onChange={handleOnChange}
                          value={state.shipping_city.value}
                          required
                        />
                        {state.shipping_city.error && (
                          <p style={errorStyle}>{state.shipping_city.error}</p>
                        )}
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>
                          Postcode / Zip <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="shipping_zip"
                          className="form-control"
                          onChange={handleOnChange}
                          value={state.shipping_zip.value}
                          required
                        />
                        {state.shipping_zip.error && (
                          <p style={errorStyle}>{state.shipping_zip.error}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="dividerClass" />

                <div className="billing-details">
                  <h3 className="title">Your Info</h3>

                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>
                          First Name <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="billing_firstName"
                          className="form-control"
                          onChange={handleOnChange}
                          value={state.billing_firstName.value}
                          placeholder="Your Firstname"
                          required
                        />
                        {state.billing_firstName.error && (
                          <p style={errorStyle}>
                            {state.billing_firstName.error}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>
                          Last Name <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="billing_lastName"
                          className="form-control"
                          onChange={handleOnChange}
                          value={state.billing_lastName.value}
                          placeholder="Your Lastname"
                          required
                        />
                        {state.billing_lastName.error && (
                          <p style={errorStyle}>
                            {state.billing_lastName.error}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>
                          Email Address <span className="required">*</span>
                        </label>
                        <input
                          type="email"
                          name="billing_email"
                          className="form-control"
                          onChange={handleOnChange}
                          value={state.billing_email.value}
                          placeholder="Your email (For Order Confirmation)"
                          required
                        />
                        {state.billing_email.error && (
                          <p style={errorStyle}>{state.billing_email.error}</p>
                        )}
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Phone</label>
                        <input
                          type="text"
                          className="form-control"
                          name="billing_phone"
                          onChange={handleOnChange}
                          value={state.billing_phone.value}
                          required
                        />
                        {state.billing_phone.error && (
                          <p style={errorStyle}>{state.billing_phone.error}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="my-3 dividerClass" />
              <div className="col-lg-6 col-md-12">
                <div className="order-details">
                  <h3 className="title">Your Order</h3>
                  <OrderSummary />

                  {/* <div className="payment-method">
                  <p>
                    <input
                      type="radio"
                      id="direct-bank-transfer"
                      name="radio-group"
                      defaultChecked={true}
                    />
                    <label htmlFor="direct-bank-transfer">
                      Direct Bank Transfer
                    </label>
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </p>
                  <p>
                    <input type="radio" id="paypal" name="radio-group" />
                    <label htmlFor="paypal">PayPal</label>
                  </p>
                  <p>
                    <input
                      type="radio"
                      id="cash-on-delivery"
                      name="radio-group"
                    />
                    <label htmlFor="cash-on-delivery">Cash on Delivery</label>
                  </p>
                </div>

                <Payment
                  handleSubmit={handleSubmit}
                  amount={totalAmount * 100}
                  disabled={disable}
                  isValid={isValid}
                /> */}

                  <div
                    className="order-btn"
                    style={{ textAlign: "center", paddingTop: "20px" }}
                  >
                    <button
                      className="btn btn-light"
                      style={{ width: "90%" }}
                      onClick={proceedToPayment}
                    >
                      Proceed to Payment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    total: state.total,
    shipping: state.shipping,
  };
};

export default connect(mapStateToProps)(CheckoutForm);

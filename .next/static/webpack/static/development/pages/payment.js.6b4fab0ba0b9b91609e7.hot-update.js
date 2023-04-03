webpackHotUpdate("static\\development\\pages\\payment.js",{

/***/ "./components/payments/PaymentMethods.js":
/*!***********************************************!*\
  !*** ./components/payments/PaymentMethods.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _checkout_OrderSummary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../checkout/OrderSummary */ "./components/checkout/OrderSummary.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _checkout_ShippingSummary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../checkout/ShippingSummary */ "./components/checkout/ShippingSummary.js");
/* harmony import */ var _store_actions_cartActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions/cartActions */ "./store/actions/cartActions.js");
/* harmony import */ var _store_actions_infoActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions/infoActions */ "./store/actions/infoActions.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Paypal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Paypal */ "./components/payments/Paypal.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _helpers_function__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../helpers/function */ "./helpers/function.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");



var _jsxFileName = "C:\\Users\\corde\\Desktop\\New folder\\bikeshop\\gabszy-flower-frontend\\components\\payments\\PaymentMethods.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;













var host = "http://localhost:8080";

function PaymentMethods() {
  _s();

  var _this = this;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_14__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      selectedPayment = _useState[0],
      setselectedPayment = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isCampaign = _useState2[0],
      setisCampaign = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isLoading = _useState3[0],
      setisLoading = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isCodOn = _useState4[0],
      setisCodOn = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var encryptedInfoData = localStorage.getItem("kri_MUK");
    var stateSchema = Object(_store_actions_infoActions__WEBPACK_IMPORTED_MODULE_7__["decryptInfoData"])(encryptedInfoData);

    if (stateSchema.shipping_city.value.toLowerCase().includes("makati") || stateSchema.shipping_address.value.toLowerCase().includes("makati") || [1226, 1233, 1209, 1214, 1217, 1221, 1222, 1219, 1220, 1202, 1201, 1228, 1212, 1211, 1206, 1204, 1229, 1232, 1224, 1200, 1207, 1235, 1231, 1218, 1213, 1230, 1210, 1216, 1215, 1227, 1203, 1234, 1223, 1205, 1225, 1208].includes(parseInt(stateSchema.shipping_zip.value))) {
      setisCodOn(true);
    }

    var decryptedData = Object(_store_actions_infoActions__WEBPACK_IMPORTED_MODULE_7__["decryptInfoData"])();

    if (decryptedData) {
      if (decryptedData.delivery_date.value == "2021-02-14") {
        setisCampaign(true);
      }
    } // toast.error(err.response.data[0].message);
    // console.log(, "HEYYYY");

  }, []);

  var handleChange = function handleChange(value) {
    setselectedPayment(value);
  };

  var fetchUser = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(token) {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("".concat(host, "/api/user/user/details"), {
                headers: {
                  Authorization: token
                }
              });

            case 3:
              res = _context.sent;

              if (!res.data.userDetails) {
                _context.next = 8;
                break;
              }

              return _context.abrupt("return", res.data.userDetails["id"]);

            case 8:
              return _context.abrupt("return", 0);

            case 9:
              _context.next = 16;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              localStorage.removeItem("token");

              _this.props.history.push("/login");

              react_toastify__WEBPACK_IMPORTED_MODULE_13__["toast"].error("Your token is invalid or expired.");

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 11]]);
    }));

    return function fetchUser(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleChangePrice = function handleChangePrice(products) {
    var cartStorage = localStorage.getItem("_bik_EKL");
    var cartArray = Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_6__["decryptData"])(cartStorage);

    var _loop = function _loop(i) {
      var el = products[i];
      index = cartArray.findIndex(function (item) {
        return item.id === el.productId;
      });

      if (index > -1) {
        cartArray[index]["campaign_price"] = el.campaign_price;
        cartArray[index]["discount_price"] = el.discount_price;
      }

      var encryptedData = Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_6__["encryptData"])(JSON.stringify(cartArray));
      localStorage.setItem("_bik_EKL", encryptedData);
      dispatch(function () {
        return {
          type: "UPDATE_CART"
        };
      }());
    };

    for (var i = 0; i < products.length; i++) {
      var index;

      _loop(i);
    }
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(paymentMethod) {
      var userId, token, encryptedData, encryptedInfoData, cart, stateSchema, orderItems, i, obj, order, res, _encryptedData, sendEmailRes;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              userId = 0;
              token = js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.get("_wus_BJK");

              if (!token) {
                _context2.next = 11;
                break;
              }

              _context2.prev = 3;
              _context2.next = 6;
              return fetchUser(token);

            case 6:
              userId = _context2.sent;
              _context2.next = 11;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](3);

            case 11:
              setisLoading(true);
              encryptedData = localStorage.getItem("_bik_EKL");
              encryptedInfoData = localStorage.getItem("kri_MUK");
              cart = Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_6__["decryptData"])(encryptedData);
              stateSchema = Object(_store_actions_infoActions__WEBPACK_IMPORTED_MODULE_7__["decryptInfoData"])(encryptedInfoData);
              orderItems = [];

              for (i = 0; i < cart.length; i++) {
                obj = null;

                if (isCampaign) {
                  obj = {
                    productId: cart[i].id,
                    name: cart[i].name,
                    quantity: cart[i].quantity,
                    itemPrice: cart[i].campaign_price
                  };
                } else {
                  obj = {
                    productId: cart[i].id,
                    name: cart[i].name,
                    quantity: cart[i].quantity,
                    itemPrice: cart[i].discount_price
                  };
                }

                orderItems.push(obj);
              }

              order = {
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
                isCampaign: isCampaign
              };
              _context2.prev = 19;
              _context2.next = 22;
              return axios__WEBPACK_IMPORTED_MODULE_8___default.a.post("".concat(host, "/api/user/order"), order);

            case 22:
              res = _context2.sent;

              if (!res) {
                _context2.next = 29;
                break;
              }

              _encryptedData = Object(_store_actions_infoActions__WEBPACK_IMPORTED_MODULE_7__["encryptString"])(res.data.order_name); // return console.log(encryptedData, encryptedData);

              _context2.next = 27;
              return axios__WEBPACK_IMPORTED_MODULE_8___default.a.post("".concat(host, "/api/user/order/sendEmail"), {
                billingEmail: order.billingEmail,
                billingFirstName: order.billingFirstName,
                orderName: res.data.order_name,
                cryptoStr: _encryptedData,
                orderItems: orderItems,
                paymentMethod: paymentMethod,
                deliveryDate: Object(_helpers_function__WEBPACK_IMPORTED_MODULE_12__["formatDate"])(stateSchema.delivery_date.value)
              });

            case 27:
              sendEmailRes = _context2.sent;

              if (sendEmailRes) {
                Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_6__["clearData"])();
                next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push("/thankyou/".concat(_encryptedData));
              }

            case 29:
              _context2.next = 44;
              break;

            case 31:
              _context2.prev = 31;
              _context2.t1 = _context2["catch"](19);
              setisLoading(false);
              console.log(_context2.t1.response.data);
              console.log(_context2.t1.response.data[0].message);

              if (!_context2.t1.response) {
                _context2.next = 43;
                break;
              }

              if (!_context2.t1.response.data) {
                _context2.next = 41;
                break;
              }

              if (!_context2.t1.response.data[0]) {
                _context2.next = 41;
                break;
              }

              if (_context2.t1.response.data[0].updatedOrderItems) {
                handleChangePrice(_context2.t1.response.data[0].updatedOrderItems);
              }

              return _context2.abrupt("return", react_toastify__WEBPACK_IMPORTED_MODULE_13__["toast"].error(_context2.t1.response.data[0].message));

            case 41:
              _context2.next = 44;
              break;

            case 43:
              react_toastify__WEBPACK_IMPORTED_MODULE_13__["toast"].error("Something went wrong, Please try again or contact us.");

            case 44:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[3, 9], [19, 31]]);
    }));

    return function handleSubmit(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  return __jsx("div", {
    className: "pt-40",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 5
    }
  }, __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_13__["ToastContainer"], {
    transition: react_toastify__WEBPACK_IMPORTED_MODULE_13__["Slide"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "row",
    style: {
      marginLeft: "0px",
      marginRight: "0px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "col-lg-5 col-md-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "d-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 13
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 15
    }
  }, "User Details"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/checkout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "ml-auto btn btn-link text-danger",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 17
    }
  }, "Edit"))), __jsx(_checkout_ShippingSummary__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "d-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 13
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 15
    }
  }, "Order Details"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/cart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "ml-auto btn btn-link text-danger",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 17
    }
  }, "Edit"))), __jsx(_checkout_OrderSummary__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "col-lg-7 col-md-7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 9
    }
  }, __jsx("h5", {
    className: "text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 11
    }
  }, "Select Payment Method"), __jsx("div", {
    className: "order-details",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "payment-method",
    style: {
      paddingTop: 0,
      marginTop: "20px",
      marginLeft: "0.5rem",
      marginRight: "0.5rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 15
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "radio",
    id: "direct-bank-transfer",
    name: "radio-button",
    onChange: function onChange() {
      return handleChange("bank");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 19
    }
  }), __jsx("label", {
    htmlFor: "direct-bank-transfer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 19
    }
  }, "Direct Bank Transfer"), selectedPayment == "bank" ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 23
    }
  }), __jsx("img", {
    src: __webpack_require__(/*! ../../images/logos/banks2.jpg */ "./images/logos/banks2.jpg"),
    alt: "image",
    height: "150",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 23
    }
  }), __jsx("p", {
    style: {
      paddingTop: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 23
    }
  }, "Once the order is completed, you can settle the amount into our BPI account (via deposit or bank transfer)"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "d-flex justify-content-between",
    style: {
      maxWidth: "300px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 25
    }
  }, __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 27
    }
  }, "Bank:"), __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 27
    }
  }, "BPI")), __jsx("div", {
    className: "d-flex justify-content-between",
    style: {
      maxWidth: "300px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 25
    }
  }, __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 27
    }
  }, "Account Name:"), __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 27
    }
  }, "I-Wheels")), __jsx("div", {
    className: "d-flex justify-content-between",
    style: {
      maxWidth: "300px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 25
    }
  }, __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 27
    }
  }, "Account Number:"), __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 27
    }
  }, "3039022566"))), __jsx("p", {
    style: {
      color: "red",
      paddingTop: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 23
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 25
    }
  }, "Note:"), " Please send proof of payment (screenshot, printscreen) to", " ", __jsx("span", {
    style: {
      color: "#33bd33"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 25
    }
  }, "i-Wheels26@gmail.com"), " ", "or send a message to our", " ", __jsx("a", {
    className: "d-inline",
    href: "https://www.facebook.com/i-Wheelsph-127061742122440/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 25
    }
  }, "Facebook Page"), "."), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 23
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 23
    }
  }), !isLoading ? __jsx("button", {
    onClick: function onClick() {
      return handleSubmit("Bank - BPI");
    },
    className: "btn btn-light mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 25
    }
  }, "Confirm Order") : __jsx("div", {
    className: "lds-ring",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 25
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 27
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 27
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 27
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 27
    }
  })), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 23
    }
  })) : null)), isCodOn ? __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 19
    }
  }, __jsx("input", {
    type: "radio",
    id: "cash-on-delivery",
    name: "radio-button",
    onChange: function onChange() {
      return handleChange("cod");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 21
    }
  }), __jsx("label", {
    htmlFor: "cash-on-delivery",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 21
    }
  }, "Cash on Delivery"), selectedPayment == "cod" ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 25
    }
  }), __jsx("img", {
    src: __webpack_require__(/*! ../../images/logos/cod.jpg */ "./images/logos/cod.jpg"),
    alt: "image",
    height: "100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 25
    }
  }), __jsx("p", {
    style: {
      paddingTop: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 25
    }
  }, "When using our Cash on Delivery service, payment is given to our delivery rider upon receipt of item."), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 25
    }
  }), !isLoading ? __jsx("button", {
    onClick: function onClick() {
      return handleSubmit("COD");
    },
    className: "btn btn-light mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 27
    }
  }, "Confirm Order") : __jsx("div", {
    className: "lds-ring",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 27
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 29
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 29
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 29
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 29
    }
  })), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 25
    }
  })) : null)) : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 17
    }
  }, __jsx("p", {
    style: {
      fontWeight: "bold"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "cash-on-delivery",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 21
    }
  }, "Cash on Delivery -", " ", __jsx("span", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 23
    }
  }, "ONLY AVAILABLE IN MAKATI AND BATANGAS"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 23
    }
  }), __jsx("span", {
    style: {
      fontSize: "0.7rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 23
    }
  }, "(Feel free to contact us if you have questions)")), selectedPayment == "cod" ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 25
    }
  }), __jsx("img", {
    src: __webpack_require__(/*! ../../images/logos/cod.jpg */ "./images/logos/cod.jpg"),
    alt: "image",
    height: "100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 25
    }
  }), __jsx("p", {
    style: {
      paddingTop: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 25
    }
  }, "When using our Cash on Delivery service, payment is given to our delivery rider upon receipt of item."), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 25
    }
  }), !isLoading ? __jsx("button", {
    onClick: function onClick() {
      return handleSubmit("COD");
    },
    className: "btn btn-light mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 27
    }
  }, "Confirm Order") : __jsx("div", {
    className: "lds-ring",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 27
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 29
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 29
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 29
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447,
      columnNumber: 29
    }
  })), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450,
      columnNumber: 25
    }
  })) : null)), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457,
      columnNumber: 15
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "radio",
    id: "gcash",
    name: "radio-button",
    onChange: function onChange() {
      return handleChange("gcash");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459,
      columnNumber: 19
    }
  }), __jsx("label", {
    htmlFor: "gcash",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 466,
      columnNumber: 19
    }
  }, "GCash"), selectedPayment == "gcash" ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469,
      columnNumber: 23
    }
  }), __jsx("img", {
    src: __webpack_require__(/*! ../../images/logos/gcash.png */ "./images/logos/gcash.png"),
    alt: "image",
    height: "70",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 23
    }
  }), __jsx("p", {
    style: {
      paddingTop: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475,
      columnNumber: 23
    }
  }, "Once the order is completed, you can settle the amount into our Gcash account (via deposit or bank transfer)"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "d-flex justify-content-between",
    style: {
      maxWidth: "300px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480,
      columnNumber: 25
    }
  }, __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484,
      columnNumber: 27
    }
  }, "E-Wallet:"), __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485,
      columnNumber: 27
    }
  }, "GCash")), __jsx("div", {
    className: "d-flex justify-content-between",
    style: {
      maxWidth: "300px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487,
      columnNumber: 25
    }
  }, __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491,
      columnNumber: 27
    }
  }, "Account Name:"), __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492,
      columnNumber: 27
    }
  }, "Marxs Joshua")), __jsx("div", {
    className: "d-flex justify-content-between",
    style: {
      maxWidth: "300px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494,
      columnNumber: 25
    }
  }, __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 27
    }
  }, "Mobile Number:"), __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499,
      columnNumber: 27
    }
  }, "09214430131"))), __jsx("p", {
    style: {
      color: "red",
      paddingTop: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502,
      columnNumber: 23
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503,
      columnNumber: 25
    }
  }, "Note:"), " Please send proof of payment (screenshot, printscreen) to", " ", __jsx("span", {
    style: {
      color: "#33bd33"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505,
      columnNumber: 25
    }
  }, "i-Wheels26@gmail.com"), " ", "or send a message to our", " ", __jsx("a", {
    className: "d-inline",
    href: "https://www.facebook.com/i-Wheelsph-127061742122440/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 25
    }
  }, "Facebook Page"), "."), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517,
      columnNumber: 23
    }
  }), !isLoading ? __jsx("button", {
    onClick: function onClick() {
      return handleSubmit("GCash");
    },
    className: "btn btn-light mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 519,
      columnNumber: 25
    }
  }, "Confirm Order") : __jsx("div", {
    className: "lds-ring",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526,
      columnNumber: 25
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527,
      columnNumber: 27
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 528,
      columnNumber: 27
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529,
      columnNumber: 27
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530,
      columnNumber: 27
    }
  })), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533,
      columnNumber: 23
    }
  })) : null)), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538,
      columnNumber: 15
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "radio",
    id: "paymaya",
    name: "radio-button",
    onChange: function onChange() {
      return handleChange("paymaya");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540,
      columnNumber: 19
    }
  }), __jsx("label", {
    htmlFor: "paymaya",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546,
      columnNumber: 19
    }
  }, "Paymaya"), selectedPayment == "paymaya" ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 549,
      columnNumber: 23
    }
  }), __jsx("img", {
    src: __webpack_require__(/*! ../../images/logos/paymaya.jpg */ "./images/logos/paymaya.jpg"),
    alt: "image",
    height: "50",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550,
      columnNumber: 23
    }
  }), __jsx("p", {
    style: {
      paddingTop: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555,
      columnNumber: 23
    }
  }, "Once the order is completed, you can settle the amount into our Paymaya account (via deposit or bank transfer)"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "d-flex justify-content-between",
    style: {
      maxWidth: "300px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 560,
      columnNumber: 25
    }
  }, __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564,
      columnNumber: 27
    }
  }, "E-Wallet:"), __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565,
      columnNumber: 27
    }
  }, "Paymaya")), __jsx("div", {
    className: "d-flex justify-content-between",
    style: {
      maxWidth: "300px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567,
      columnNumber: 25
    }
  }, __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 571,
      columnNumber: 27
    }
  }, "Account Name:"), __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572,
      columnNumber: 27
    }
  }, "I-Wheels")), __jsx("div", {
    className: "d-flex justify-content-between",
    style: {
      maxWidth: "300px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 574,
      columnNumber: 25
    }
  }, __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 578,
      columnNumber: 27
    }
  }, "Mobile Number:"), __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 579,
      columnNumber: 27
    }
  }, "0916 509 1083"))), __jsx("p", {
    style: {
      color: "red",
      paddingTop: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 582,
      columnNumber: 23
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 583,
      columnNumber: 25
    }
  }, "Note:"), " Please send proof of payment (screenshot, printscreen) to", " ", __jsx("span", {
    style: {
      color: "#33bd33"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 585,
      columnNumber: 25
    }
  }, "i-Wheels26@gmail.com"), " ", "or send a message to our", " ", __jsx("a", {
    className: "d-inline",
    href: "https://www.facebook.com/i-Wheelsph-127061742122440/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 589,
      columnNumber: 25
    }
  }, "Facebook Page"), "."), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 597,
      columnNumber: 23
    }
  }), !isLoading ? __jsx("button", {
    onClick: function onClick() {
      return handleSubmit("Paymaya");
    },
    className: "btn btn-light mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 599,
      columnNumber: 25
    }
  }, "Confirm Order") : __jsx("div", {
    className: "lds-ring",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 606,
      columnNumber: 25
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 607,
      columnNumber: 27
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 608,
      columnNumber: 27
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 609,
      columnNumber: 27
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 610,
      columnNumber: 27
    }
  })), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 613,
      columnNumber: 23
    }
  })) : null)))))));
}

_s(PaymentMethods, "TpNHLnYbadfs8vhm10KEyxrw3Ng=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_14__["useDispatch"]];
});

_c = PaymentMethods;
/* harmony default export */ __webpack_exports__["default"] = (PaymentMethods);

var _c;

$RefreshReg$(_c, "PaymentMethods");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./images/logos/credit_card.jpg":
false,

/***/ "./images/logos/paypal.jpg":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BheW1lbnRzL1BheW1lbnRNZXRob2RzLmpzIl0sIm5hbWVzIjpbImhvc3QiLCJwcm9jZXNzIiwiUGF5bWVudE1ldGhvZHMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU3RhdGUiLCJzZWxlY3RlZFBheW1lbnQiLCJzZXRzZWxlY3RlZFBheW1lbnQiLCJpc0NhbXBhaWduIiwic2V0aXNDYW1wYWlnbiIsImlzTG9hZGluZyIsInNldGlzTG9hZGluZyIsImlzQ29kT24iLCJzZXRpc0NvZE9uIiwidXNlRWZmZWN0IiwiZW5jcnlwdGVkSW5mb0RhdGEiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic3RhdGVTY2hlbWEiLCJkZWNyeXB0SW5mb0RhdGEiLCJzaGlwcGluZ19jaXR5IiwidmFsdWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwic2hpcHBpbmdfYWRkcmVzcyIsInBhcnNlSW50Iiwic2hpcHBpbmdfemlwIiwiZGVjcnlwdGVkRGF0YSIsImRlbGl2ZXJ5X2RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJmZXRjaFVzZXIiLCJ0b2tlbiIsImF4aW9zIiwiZ2V0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJyZXMiLCJkYXRhIiwidXNlckRldGFpbHMiLCJyZW1vdmVJdGVtIiwicHJvcHMiLCJoaXN0b3J5IiwicHVzaCIsInRvYXN0IiwiZXJyb3IiLCJoYW5kbGVDaGFuZ2VQcmljZSIsInByb2R1Y3RzIiwiY2FydFN0b3JhZ2UiLCJjYXJ0QXJyYXkiLCJkZWNyeXB0RGF0YSIsImkiLCJlbCIsImluZGV4IiwiZmluZEluZGV4IiwiaXRlbSIsImlkIiwicHJvZHVjdElkIiwiY2FtcGFpZ25fcHJpY2UiLCJkaXNjb3VudF9wcmljZSIsImVuY3J5cHRlZERhdGEiLCJlbmNyeXB0RGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXRJdGVtIiwidHlwZSIsImxlbmd0aCIsImhhbmRsZVN1Ym1pdCIsInBheW1lbnRNZXRob2QiLCJ1c2VySWQiLCJjb29raWUiLCJjYXJ0Iiwib3JkZXJJdGVtcyIsIm9iaiIsIm5hbWUiLCJxdWFudGl0eSIsIml0ZW1QcmljZSIsIm9yZGVyIiwic2hpcHBpbmdGaXJzdE5hbWUiLCJzaGlwcGluZ19maXJzdE5hbWUiLCJzaGlwcGluZ0xhc3ROYW1lIiwic2hpcHBpbmdfbGFzdE5hbWUiLCJzaGlwcGluZ1Bob25lIiwic2hpcHBpbmdfcGhvbmUiLCJzaGlwcGluZ0FkZHJlc3MiLCJzaGlwcGluZ0NpdHkiLCJzaGlwcGluZ1Byb3ZpbmNlIiwic2hpcHBpbmdaaXAiLCJkZWxpdmVyeUluc3RydWN0aW9ucyIsIm5vdGUiLCJtZXNzYWdlIiwiYmlsbGluZ0ZpcnN0TmFtZSIsImJpbGxpbmdfZmlyc3ROYW1lIiwiYmlsbGluZ0xhc3ROYW1lIiwiYmlsbGluZ19sYXN0TmFtZSIsImJpbGxpbmdQaG9uZSIsImJpbGxpbmdfcGhvbmUiLCJiaWxsaW5nRW1haWwiLCJiaWxsaW5nX2VtYWlsIiwiZGVsaXZlcnlEYXRlIiwiZGVsaXZlcnlUaW1lIiwiZGVsaXZlcnlfdGltZSIsInBvc3QiLCJlbmNyeXB0U3RyaW5nIiwib3JkZXJfbmFtZSIsIm9yZGVyTmFtZSIsImNyeXB0b1N0ciIsImZvcm1hdERhdGUiLCJzZW5kRW1haWxSZXMiLCJjbGVhckRhdGEiLCJSb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJ1cGRhdGVkT3JkZXJJdGVtcyIsIlNsaWRlIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwicGFkZGluZ1RvcCIsIm1hcmdpblRvcCIsInJlcXVpcmUiLCJtYXhXaWR0aCIsImNvbG9yIiwiZm9udFdlaWdodCIsImZvbnRTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLElBQUksR0FB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QUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBMURKLEVBaUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqRUYsQ0FERCxHQW9FRyxJQTVFTixDQURGLENBelFGLENBREYsQ0FGRixDQXRCRixDQUZGLENBREY7QUEyWEQ7O0dBeGxCUWhFLGM7VUFDVUUsd0Q7OztLQURWRixjO0FBMGxCTUEsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHBheW1lbnQuanMuNmI0ZmFiMGJhMGI5YjkxNjA5ZTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBPcmRlclN1bW1hcnkgZnJvbSBcIi4uL2NoZWNrb3V0L09yZGVyU3VtbWFyeVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBTaGlwcGluZ1N1bW1hcnkgZnJvbSBcIi4uL2NoZWNrb3V0L1NoaXBwaW5nU3VtbWFyeVwiO1xyXG5pbXBvcnQge1xyXG4gIGRlY3J5cHREYXRhLFxyXG4gIGNsZWFyRGF0YSxcclxuICBlbmNyeXB0RGF0YSxcclxufSBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9jYXJ0QWN0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG4gIGRlY3J5cHRJbmZvRGF0YSxcclxuICBlbmNyeXB0U3RyaW5nLFxyXG59IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2luZm9BY3Rpb25zXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFBheXBhbCBmcm9tIFwiLi9QYXlwYWxcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9mdW5jdGlvblwiO1xyXG5pbXBvcnQgeyBTbGlkZSwgdG9hc3QsIFRvYXN0Q29udGFpbmVyIH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5sZXQgaG9zdCA9IHByb2Nlc3MuZW52LkFQSV9VUkw7XHJcblxyXG5mdW5jdGlvbiBQYXltZW50TWV0aG9kcygpIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgW3NlbGVjdGVkUGF5bWVudCwgc2V0c2VsZWN0ZWRQYXltZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpc0NhbXBhaWduLCBzZXRpc0NhbXBhaWduXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRpc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0NvZE9uLCBzZXRpc0NvZE9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBlbmNyeXB0ZWRJbmZvRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2Nlc3MuZW52LklORk9fQ09PS0lFKTtcclxuICAgIGxldCBzdGF0ZVNjaGVtYSA9IGRlY3J5cHRJbmZvRGF0YShlbmNyeXB0ZWRJbmZvRGF0YSk7XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICBzdGF0ZVNjaGVtYS5zaGlwcGluZ19jaXR5LnZhbHVlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJtYWthdGlcIikgfHxcclxuICAgICAgc3RhdGVTY2hlbWEuc2hpcHBpbmdfYWRkcmVzcy52YWx1ZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwibWFrYXRpXCIpIHx8XHJcbiAgICAgIFtcclxuICAgICAgICAxMjI2LFxyXG4gICAgICAgIDEyMzMsXHJcbiAgICAgICAgMTIwOSxcclxuICAgICAgICAxMjE0LFxyXG4gICAgICAgIDEyMTcsXHJcbiAgICAgICAgMTIyMSxcclxuICAgICAgICAxMjIyLFxyXG4gICAgICAgIDEyMTksXHJcbiAgICAgICAgMTIyMCxcclxuICAgICAgICAxMjAyLFxyXG4gICAgICAgIDEyMDEsXHJcbiAgICAgICAgMTIyOCxcclxuICAgICAgICAxMjEyLFxyXG4gICAgICAgIDEyMTEsXHJcbiAgICAgICAgMTIwNixcclxuICAgICAgICAxMjA0LFxyXG4gICAgICAgIDEyMjksXHJcbiAgICAgICAgMTIzMixcclxuICAgICAgICAxMjI0LFxyXG4gICAgICAgIDEyMDAsXHJcbiAgICAgICAgMTIwNyxcclxuICAgICAgICAxMjM1LFxyXG4gICAgICAgIDEyMzEsXHJcbiAgICAgICAgMTIxOCxcclxuICAgICAgICAxMjEzLFxyXG4gICAgICAgIDEyMzAsXHJcbiAgICAgICAgMTIxMCxcclxuICAgICAgICAxMjE2LFxyXG4gICAgICAgIDEyMTUsXHJcbiAgICAgICAgMTIyNyxcclxuICAgICAgICAxMjAzLFxyXG4gICAgICAgIDEyMzQsXHJcbiAgICAgICAgMTIyMyxcclxuICAgICAgICAxMjA1LFxyXG4gICAgICAgIDEyMjUsXHJcbiAgICAgICAgMTIwOCxcclxuICAgICAgXS5pbmNsdWRlcyhwYXJzZUludChzdGF0ZVNjaGVtYS5zaGlwcGluZ196aXAudmFsdWUpKVxyXG4gICAgKSB7XHJcbiAgICAgIHNldGlzQ29kT24odHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGRlY3J5cHRlZERhdGEgPSBkZWNyeXB0SW5mb0RhdGEoKTtcclxuXHJcbiAgICBpZiAoZGVjcnlwdGVkRGF0YSkge1xyXG4gICAgICBpZiAoZGVjcnlwdGVkRGF0YS5kZWxpdmVyeV9kYXRlLnZhbHVlID09IFwiMjAyMS0wMi0xNFwiKSB7XHJcbiAgICAgICAgc2V0aXNDYW1wYWlnbih0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gdG9hc3QuZXJyb3IoZXJyLnJlc3BvbnNlLmRhdGFbMF0ubWVzc2FnZSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZygsIFwiSEVZWVlZXCIpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHZhbHVlKSA9PiB7XHJcbiAgICBzZXRzZWxlY3RlZFBheW1lbnQodmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICh0b2tlbikgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtob3N0fS9hcGkvdXNlci91c2VyL2RldGFpbHNgLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW4sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChyZXMuZGF0YS51c2VyRGV0YWlscykge1xyXG4gICAgICAgIHJldHVybiByZXMuZGF0YS51c2VyRGV0YWlsc1tcImlkXCJdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRva2VuXCIpO1xyXG4gICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIi9sb2dpblwiKTtcclxuICAgICAgdG9hc3QuZXJyb3IoXCJZb3VyIHRva2VuIGlzIGludmFsaWQgb3IgZXhwaXJlZC5cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlUHJpY2UgPSAocHJvZHVjdHMpID0+IHtcclxuICAgIGxldCBjYXJ0U3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2Nlc3MuZW52LkNBUlRfQ09PS0lFKTtcclxuICAgIGxldCBjYXJ0QXJyYXkgPSBkZWNyeXB0RGF0YShjYXJ0U3RvcmFnZSk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9kdWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBlbCA9IHByb2R1Y3RzW2ldO1xyXG5cclxuICAgICAgdmFyIGluZGV4ID0gY2FydEFycmF5LmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gZWwucHJvZHVjdElkKTtcclxuXHJcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgY2FydEFycmF5W2luZGV4XVtcImNhbXBhaWduX3ByaWNlXCJdID0gZWwuY2FtcGFpZ25fcHJpY2U7XHJcbiAgICAgICAgY2FydEFycmF5W2luZGV4XVtcImRpc2NvdW50X3ByaWNlXCJdID0gZWwuZGlzY291bnRfcHJpY2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBlbmNyeXB0ZWREYXRhID0gZW5jcnlwdERhdGEoSlNPTi5zdHJpbmdpZnkoY2FydEFycmF5KSk7XHJcblxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9jZXNzLmVudi5DQVJUX0NPT0tJRSwgZW5jcnlwdGVkRGF0YSk7XHJcblxyXG4gICAgICBkaXNwYXRjaChcclxuICAgICAgICAoKCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdHlwZTogXCJVUERBVEVfQ0FSVFwiLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9KSgpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKHBheW1lbnRNZXRob2QpID0+IHtcclxuICAgIGxldCB1c2VySWQgPSAwO1xyXG4gICAgbGV0IHRva2VuID0gY29va2llLmdldChcIl93dXNfQkpLXCIpO1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgdXNlcklkID0gYXdhaXQgZmV0Y2hVc2VyKHRva2VuKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHt9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0aXNMb2FkaW5nKHRydWUpO1xyXG4gICAgbGV0IGVuY3J5cHRlZERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9jZXNzLmVudi5DQVJUX0NPT0tJRSk7XHJcbiAgICBsZXQgZW5jcnlwdGVkSW5mb0RhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9jZXNzLmVudi5JTkZPX0NPT0tJRSk7XHJcbiAgICBsZXQgY2FydCA9IGRlY3J5cHREYXRhKGVuY3J5cHRlZERhdGEpO1xyXG4gICAgbGV0IHN0YXRlU2NoZW1hID0gZGVjcnlwdEluZm9EYXRhKGVuY3J5cHRlZEluZm9EYXRhKTtcclxuXHJcbiAgICBsZXQgb3JkZXJJdGVtcyA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJ0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBvYmogPSBudWxsO1xyXG4gICAgICBpZiAoaXNDYW1wYWlnbikge1xyXG4gICAgICAgIG9iaiA9IHtcclxuICAgICAgICAgIHByb2R1Y3RJZDogY2FydFtpXS5pZCxcclxuICAgICAgICAgIG5hbWU6IGNhcnRbaV0ubmFtZSxcclxuICAgICAgICAgIHF1YW50aXR5OiBjYXJ0W2ldLnF1YW50aXR5LFxyXG4gICAgICAgICAgaXRlbVByaWNlOiBjYXJ0W2ldLmNhbXBhaWduX3ByaWNlLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgb2JqID0ge1xyXG4gICAgICAgICAgcHJvZHVjdElkOiBjYXJ0W2ldLmlkLFxyXG4gICAgICAgICAgbmFtZTogY2FydFtpXS5uYW1lLFxyXG4gICAgICAgICAgcXVhbnRpdHk6IGNhcnRbaV0ucXVhbnRpdHksXHJcbiAgICAgICAgICBpdGVtUHJpY2U6IGNhcnRbaV0uZGlzY291bnRfcHJpY2UsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgb3JkZXJJdGVtcy5wdXNoKG9iaik7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG9yZGVyID0ge1xyXG4gICAgICBvcmRlckl0ZW1zOiBvcmRlckl0ZW1zLFxyXG4gICAgICB1c2VySWQ6IHVzZXJJZCxcclxuICAgICAgc2hpcHBpbmdGaXJzdE5hbWU6IHN0YXRlU2NoZW1hLnNoaXBwaW5nX2ZpcnN0TmFtZS52YWx1ZSxcclxuICAgICAgc2hpcHBpbmdMYXN0TmFtZTogc3RhdGVTY2hlbWEuc2hpcHBpbmdfbGFzdE5hbWUudmFsdWUsXHJcbiAgICAgIHNoaXBwaW5nUGhvbmU6IHN0YXRlU2NoZW1hLnNoaXBwaW5nX3Bob25lLnZhbHVlLFxyXG4gICAgICBzaGlwcGluZ0FkZHJlc3M6IHN0YXRlU2NoZW1hLnNoaXBwaW5nX2FkZHJlc3MudmFsdWUsXHJcbiAgICAgIHNoaXBwaW5nQ2l0eTogc3RhdGVTY2hlbWEuc2hpcHBpbmdfY2l0eS52YWx1ZSxcclxuICAgICAgc2hpcHBpbmdQcm92aW5jZTogXCJNZXRybyBNYW5pbGFcIixcclxuICAgICAgc2hpcHBpbmdaaXA6IHN0YXRlU2NoZW1hLnNoaXBwaW5nX3ppcC52YWx1ZSxcclxuICAgICAgZGVsaXZlcnlJbnN0cnVjdGlvbnM6IHN0YXRlU2NoZW1hLm5vdGUudmFsdWUsXHJcbiAgICAgIG1lc3NhZ2U6IHN0YXRlU2NoZW1hLm1lc3NhZ2UudmFsdWUsXHJcbiAgICAgIGJpbGxpbmdGaXJzdE5hbWU6IHN0YXRlU2NoZW1hLmJpbGxpbmdfZmlyc3ROYW1lLnZhbHVlLFxyXG4gICAgICBiaWxsaW5nTGFzdE5hbWU6IHN0YXRlU2NoZW1hLmJpbGxpbmdfbGFzdE5hbWUudmFsdWUsXHJcbiAgICAgIGJpbGxpbmdQaG9uZTogc3RhdGVTY2hlbWEuYmlsbGluZ19waG9uZS52YWx1ZSxcclxuICAgICAgYmlsbGluZ0VtYWlsOiBzdGF0ZVNjaGVtYS5iaWxsaW5nX2VtYWlsLnZhbHVlLFxyXG4gICAgICBkZWxpdmVyeURhdGU6IHN0YXRlU2NoZW1hLmRlbGl2ZXJ5X2RhdGUudmFsdWUsXHJcbiAgICAgIGRlbGl2ZXJ5VGltZTogc3RhdGVTY2hlbWEuZGVsaXZlcnlfdGltZS52YWx1ZSxcclxuICAgICAgcGF5bWVudE1ldGhvZDogcGF5bWVudE1ldGhvZCxcclxuICAgICAgaXNDYW1wYWlnbjogaXNDYW1wYWlnbixcclxuICAgIH07XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHtob3N0fS9hcGkvdXNlci9vcmRlcmAsIG9yZGVyKTtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIGxldCBlbmNyeXB0ZWREYXRhID0gZW5jcnlwdFN0cmluZyhyZXMuZGF0YS5vcmRlcl9uYW1lKTtcclxuXHJcbiAgICAgICAgLy8gcmV0dXJuIGNvbnNvbGUubG9nKGVuY3J5cHRlZERhdGEsIGVuY3J5cHRlZERhdGEpO1xyXG5cclxuICAgICAgICBsZXQgc2VuZEVtYWlsUmVzID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICAgIGAke2hvc3R9L2FwaS91c2VyL29yZGVyL3NlbmRFbWFpbGAsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJpbGxpbmdFbWFpbDogb3JkZXIuYmlsbGluZ0VtYWlsLFxyXG4gICAgICAgICAgICBiaWxsaW5nRmlyc3ROYW1lOiBvcmRlci5iaWxsaW5nRmlyc3ROYW1lLFxyXG4gICAgICAgICAgICBvcmRlck5hbWU6IHJlcy5kYXRhLm9yZGVyX25hbWUsXHJcbiAgICAgICAgICAgIGNyeXB0b1N0cjogZW5jcnlwdGVkRGF0YSxcclxuICAgICAgICAgICAgb3JkZXJJdGVtczogb3JkZXJJdGVtcyxcclxuICAgICAgICAgICAgcGF5bWVudE1ldGhvZDogcGF5bWVudE1ldGhvZCxcclxuICAgICAgICAgICAgZGVsaXZlcnlEYXRlOiBmb3JtYXREYXRlKHN0YXRlU2NoZW1hLmRlbGl2ZXJ5X2RhdGUudmFsdWUpLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmIChzZW5kRW1haWxSZXMpIHtcclxuICAgICAgICAgIGNsZWFyRGF0YSgpO1xyXG4gICAgICAgICAgUm91dGVyLnB1c2goYC90aGFua3lvdS8ke2VuY3J5cHRlZERhdGF9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgc2V0aXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YVswXS5tZXNzYWdlKTtcclxuICAgICAgaWYgKGVyci5yZXNwb25zZSkge1xyXG4gICAgICAgIGlmIChlcnIucmVzcG9uc2UuZGF0YSkge1xyXG4gICAgICAgICAgaWYgKGVyci5yZXNwb25zZS5kYXRhWzBdKSB7XHJcbiAgICAgICAgICAgIGlmIChlcnIucmVzcG9uc2UuZGF0YVswXS51cGRhdGVkT3JkZXJJdGVtcykge1xyXG4gICAgICAgICAgICAgIGhhbmRsZUNoYW5nZVByaWNlKGVyci5yZXNwb25zZS5kYXRhWzBdLnVwZGF0ZWRPcmRlckl0ZW1zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdG9hc3QuZXJyb3IoZXJyLnJlc3BvbnNlLmRhdGFbMF0ubWVzc2FnZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0LmVycm9yKFwiU29tZXRoaW5nIHdlbnQgd3JvbmcsIFBsZWFzZSB0cnkgYWdhaW4gb3IgY29udGFjdCB1cy5cIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwdC00MFwiPlxyXG4gICAgICA8VG9hc3RDb250YWluZXIgdHJhbnNpdGlvbj17U2xpZGV9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIwcHhcIiwgbWFyZ2luUmlnaHQ6IFwiMHB4XCIgfX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNSBjb2wtbWQtNVwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICA8aDU+VXNlciBEZXRhaWxzPC9oNT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NoZWNrb3V0XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtbC1hdXRvIGJ0biBidG4tbGluayB0ZXh0LWRhbmdlclwiPkVkaXQ8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFNoaXBwaW5nU3VtbWFyeSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICA8aDU+T3JkZXIgRGV0YWlsczwvaDU+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jYXJ0XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtbC1hdXRvIGJ0biBidG4tbGluayB0ZXh0LWRhbmdlclwiPkVkaXQ8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPE9yZGVyU3VtbWFyeSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNyBjb2wtbWQtN1wiPlxyXG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+U2VsZWN0IFBheW1lbnQgTWV0aG9kPC9oNT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXItZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGF5bWVudC1tZXRob2RcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiAwLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMC41cmVtXCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCIwLjVyZW1cIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZGlyZWN0LWJhbmstdHJhbnNmZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpby1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBoYW5kbGVDaGFuZ2UoXCJiYW5rXCIpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRpcmVjdC1iYW5rLXRyYW5zZmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgRGlyZWN0IEJhbmsgVHJhbnNmZXJcclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAge3NlbGVjdGVkUGF5bWVudCA9PSBcImJhbmtcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9sb2dvcy9iYW5rczIuanBnXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE1MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgcGFkZGluZ1RvcDogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9uY2UgdGhlIG9yZGVyIGlzIGNvbXBsZXRlZCwgeW91IGNhbiBzZXR0bGUgdGhlIGFtb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRvIG91ciBCUEkgYWNjb3VudCAodmlhIGRlcG9zaXQgb3IgYmFuayB0cmFuc2ZlcilcclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiBcIjMwMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5CYW5rOjwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkJQSTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogXCIzMDBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+QWNjb3VudCBOYW1lOjwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkktV2hlZWxzPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiBcIjMwMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5BY2NvdW50IE51bWJlcjo8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj4zMDM5MDIyNTY2PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiLCBwYWRkaW5nVG9wOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGI+Tm90ZTo8L2I+IFBsZWFzZSBzZW5kIHByb29mIG9mIHBheW1lbnQgKHNjcmVlbnNob3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW50c2NyZWVuKSB0b3tcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiIzMzYmQzM1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGktV2hlZWxzMjZAZ21haWwuY29tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yIHNlbmQgYSBtZXNzYWdlIHRvIG91cntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWlubGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9pLVdoZWVsc3BoLTEyNzA2MTc0MjEyMjQ0MC9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgRmFjZWJvb2sgUGFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7IWlzTG9hZGluZyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVN1Ym1pdChcIkJhbmsgLSBCUElcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saWdodCBtYi0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpcm0gT3JkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxkcy1yaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7aXNDb2RPbiA/IChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY2FzaC1vbi1kZWxpdmVyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW8tYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBoYW5kbGVDaGFuZ2UoXCJjb2RcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNhc2gtb24tZGVsaXZlcnlcIj5DYXNoIG9uIERlbGl2ZXJ5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRQYXltZW50ID09IFwiY29kXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9sb2dvcy9jb2QuanBnXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBwYWRkaW5nVG9wOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBXaGVuIHVzaW5nIG91ciBDYXNoIG9uIERlbGl2ZXJ5IHNlcnZpY2UsIHBheW1lbnQgaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBnaXZlbiB0byBvdXIgZGVsaXZlcnkgcmlkZXIgdXBvbiByZWNlaXB0IG9mIGl0ZW0uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHshaXNMb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVN1Ym1pdChcIkNPRFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tbGlnaHQgbWItM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlybSBPcmRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGRzLXJpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNhc2gtb24tZGVsaXZlcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIENhc2ggb24gRGVsaXZlcnkgLXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBPTkxZIEFWQUlMQUJMRSBJTiBNQUtBVEkgQU5EIEJBVEFOR0FTXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBcIjAuN3JlbVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoRmVlbCBmcmVlIHRvIGNvbnRhY3QgdXMgaWYgeW91IGhhdmUgcXVlc3Rpb25zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkUGF5bWVudCA9PSBcImNvZFwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvbG9nb3MvY29kLmpwZ1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgcGFkZGluZ1RvcDogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgV2hlbiB1c2luZyBvdXIgQ2FzaCBvbiBEZWxpdmVyeSBzZXJ2aWNlLCBwYXltZW50IGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZ2l2ZW4gdG8gb3VyIGRlbGl2ZXJ5IHJpZGVyIHVwb24gcmVjZWlwdCBvZiBpdGVtLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IWlzTG9hZGluZyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdWJtaXQoXCJDT0RcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWxpZ2h0IG1iLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpcm0gT3JkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxkcy1yaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJnY2FzaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IGhhbmRsZUNoYW5nZShcImdjYXNoXCIpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJnY2FzaFwiPkdDYXNoPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAge3NlbGVjdGVkUGF5bWVudCA9PSBcImdjYXNoXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvbG9nb3MvZ2Nhc2gucG5nXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjcwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBwYWRkaW5nVG9wOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgT25jZSB0aGUgb3JkZXIgaXMgY29tcGxldGVkLCB5b3UgY2FuIHNldHRsZSB0aGUgYW1vdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludG8gb3VyIEdjYXNoIGFjY291bnQgKHZpYSBkZXBvc2l0IG9yIGJhbmsgdHJhbnNmZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogXCIzMDBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+RS1XYWxsZXQ6PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+R0Nhc2g8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMzAwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkFjY291bnQgTmFtZTo8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5NYXJ4cyBKb3NodWE8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMzAwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2Pk1vYmlsZSBOdW1iZXI6PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+MDkyMTQ0MzAxMzE8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIsIHBhZGRpbmdUb3A6IFwiMjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yj5Ob3RlOjwvYj4gUGxlYXNlIHNlbmQgcHJvb2Ygb2YgcGF5bWVudCAoc2NyZWVuc2hvdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpbnRzY3JlZW4pIHRve1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjMzNiZDMzXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaS1XaGVlbHMyNkBnbWFpbC5jb21cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb3Igc2VuZCBhIG1lc3NhZ2UgdG8gb3Vye1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtaW5saW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2ktV2hlZWxzcGgtMTI3MDYxNzQyMTIyNDQwL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBGYWNlYm9vayBQYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7IWlzTG9hZGluZyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVN1Ym1pdChcIkdDYXNoXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tbGlnaHQgbWItM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBDb25maXJtIE9yZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZHMtcmluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXltYXlhXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW8tYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gaGFuZGxlQ2hhbmdlKFwicGF5bWF5YVwiKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXltYXlhXCI+UGF5bWF5YTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFBheW1lbnQgPT0gXCJwYXltYXlhXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvbG9nb3MvcGF5bWF5YS5qcGdcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IHBhZGRpbmdUb3A6IFwiMjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBPbmNlIHRoZSBvcmRlciBpcyBjb21wbGV0ZWQsIHlvdSBjYW4gc2V0dGxlIHRoZSBhbW91bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW50byBvdXIgUGF5bWF5YSBhY2NvdW50ICh2aWEgZGVwb3NpdCBvciBiYW5rIHRyYW5zZmVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMzAwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkUtV2FsbGV0OjwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PlBheW1heWE8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMzAwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkFjY291bnQgTmFtZTo8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5JLVdoZWVsczwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogXCIzMDBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+TW9iaWxlIE51bWJlcjo8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj4wOTE2IDUwOSAxMDgzPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiLCBwYWRkaW5nVG9wOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGI+Tm90ZTo8L2I+IFBsZWFzZSBzZW5kIHByb29mIG9mIHBheW1lbnQgKHNjcmVlbnNob3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW50c2NyZWVuKSB0b3tcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiIzMzYmQzM1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGktV2hlZWxzMjZAZ21haWwuY29tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yIHNlbmQgYSBtZXNzYWdlIHRvIG91cntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWlubGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9pLVdoZWVsc3BoLTEyNzA2MTc0MjEyMjQ0MC9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgRmFjZWJvb2sgUGFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgeyFpc0xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdWJtaXQoXCJQYXltYXlhXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tbGlnaHQgbWItM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBDb25maXJtIE9yZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZHMtcmluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXltZW50TWV0aG9kcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
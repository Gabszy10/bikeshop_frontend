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
      lineNumber: 213,
      columnNumber: 5
    }
  }, __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_13__["ToastContainer"], {
    transition: react_toastify__WEBPACK_IMPORTED_MODULE_13__["Slide"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
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
      lineNumber: 215,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "col-lg-5 col-md-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "d-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 13
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 15
    }
  }, "User Details"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/checkout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "ml-auto btn btn-link text-danger",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 17
    }
  }, "Edit"))), __jsx(_checkout_ShippingSummary__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "d-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 13
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 15
    }
  }, "Order Details"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/cart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "ml-auto btn btn-link text-danger",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 17
    }
  }, "Edit"))), __jsx(_checkout_OrderSummary__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "col-lg-7 col-md-7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 9
    }
  }, __jsx("h5", {
    className: "text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 11
    }
  }, "Select Payment Method"), __jsx("div", {
    className: "order-details",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
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
      lineNumber: 240,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 15
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
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
      lineNumber: 251,
      columnNumber: 19
    }
  }), __jsx("label", {
    htmlFor: "direct-bank-transfer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 19
    }
  }, "Direct Bank Transfer"), selectedPayment == "bank" ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 23
    }
  }), __jsx("img", {
    src: __webpack_require__(/*! ../../images/logos/banks2.jpg */ "./images/logos/banks2.jpg"),
    alt: "image",
    height: "150",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 23
    }
  }), __jsx("p", {
    style: {
      paddingTop: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 23
    }
  }, "Once the order is completed, you can settle the amount into our BPI account (via deposit or bank transfer)"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
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
      lineNumber: 273,
      columnNumber: 25
    }
  }, __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 27
    }
  }, "Bank:"), __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
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
      lineNumber: 280,
      columnNumber: 25
    }
  }, __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 27
    }
  }, "Account Name:"), __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
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
      lineNumber: 287,
      columnNumber: 25
    }
  }, __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 27
    }
  }, "Account Number:"), __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
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
      lineNumber: 295,
      columnNumber: 23
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 25
    }
  }, "Note:"), " Please send proof of payment (screenshot, printscreen) to", " ", __jsx("span", {
    style: {
      color: "#33bd33"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 25
    }
  }, "i-Wheels26@gmail.com"), " ", "or send a message to our", " ", __jsx("a", {
    className: "d-inline",
    href: "https://www.facebook.com/i-Wheelsph-127061742122440/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 25
    }
  }, "Facebook Page"), "."), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 23
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
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
      lineNumber: 313,
      columnNumber: 25
    }
  }, "Confirm Order") : __jsx("div", {
    className: "lds-ring",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 25
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 27
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 27
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 27
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 27
    }
  })), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 23
    }
  })) : null)), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 15
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 17
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
      lineNumber: 335,
      columnNumber: 19
    }
  }), __jsx("label", {
    htmlFor: "cash-on-delivery",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 19
    }
  }, "Cash on Delivery"), selectedPayment == "cod" ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 23
    }
  }), __jsx("img", {
    src: __webpack_require__(/*! ../../images/logos/cod.jpg */ "./images/logos/cod.jpg"),
    alt: "image",
    height: "100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 23
    }
  }), __jsx("p", {
    style: {
      paddingTop: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 23
    }
  }, "When using our Cash on Delivery service, payment is given to our delivery rider upon receipt of item."), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 23
    }
  }), !isLoading ? __jsx("button", {
    onClick: function onClick() {
      return handleSubmit("COD");
    },
    className: "btn btn-light mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 25
    }
  }, "Confirm Order") : __jsx("div", {
    className: "lds-ring",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 25
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 27
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 27
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 27
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 27
    }
  })), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 23
    }
  })) : null)), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 15
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
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
      lineNumber: 378,
      columnNumber: 19
    }
  }), __jsx("label", {
    htmlFor: "gcash",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 19
    }
  }, "GCash"), selectedPayment == "gcash" ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 23
    }
  }), __jsx("img", {
    src: __webpack_require__(/*! ../../images/logos/gcash.png */ "./images/logos/gcash.png"),
    alt: "image",
    height: "70",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 23
    }
  }), __jsx("p", {
    style: {
      paddingTop: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 23
    }
  }, "Once the order is completed, you can settle the amount into our Gcash account (via deposit or bank transfer)"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
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
      lineNumber: 399,
      columnNumber: 25
    }
  }, __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 27
    }
  }, "E-Wallet:"), __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
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
      lineNumber: 406,
      columnNumber: 25
    }
  }, __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 27
    }
  }, "Account Name:"), __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
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
      lineNumber: 413,
      columnNumber: 25
    }
  }, __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 27
    }
  }, "Mobile Number:"), __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
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
      lineNumber: 421,
      columnNumber: 23
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 25
    }
  }, "Note:"), " Please send proof of payment (screenshot, printscreen) to", " ", __jsx("span", {
    style: {
      color: "#33bd33"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 25
    }
  }, "i-Wheels26@gmail.com"), " ", "or send a message to our", " ", __jsx("a", {
    className: "d-inline",
    href: "https://www.facebook.com/i-Wheelsph-127061742122440/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 25
    }
  }, "Facebook Page"), "."), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
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
      lineNumber: 438,
      columnNumber: 25
    }
  }, "Confirm Order") : __jsx("div", {
    className: "lds-ring",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 25
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 27
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447,
      columnNumber: 27
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448,
      columnNumber: 27
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449,
      columnNumber: 27
    }
  })), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 23
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
    id: "paymaya",
    name: "radio-button",
    onChange: function onChange() {
      return handleChange("paymaya");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459,
      columnNumber: 19
    }
  }), __jsx("label", {
    htmlFor: "paymaya",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465,
      columnNumber: 19
    }
  }, "Paymaya"), selectedPayment == "paymaya" ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468,
      columnNumber: 23
    }
  }), __jsx("img", {
    src: __webpack_require__(/*! ../../images/logos/paymaya.jpg */ "./images/logos/paymaya.jpg"),
    alt: "image",
    height: "50",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469,
      columnNumber: 23
    }
  }), __jsx("p", {
    style: {
      paddingTop: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474,
      columnNumber: 23
    }
  }, "Once the order is completed, you can settle the amount into our Paymaya account (via deposit or bank transfer)"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478,
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
      lineNumber: 479,
      columnNumber: 25
    }
  }, __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483,
      columnNumber: 27
    }
  }, "E-Wallet:"), __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484,
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
      lineNumber: 486,
      columnNumber: 25
    }
  }, __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490,
      columnNumber: 27
    }
  }, "Account Name:"), __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491,
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
      lineNumber: 493,
      columnNumber: 25
    }
  }, __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497,
      columnNumber: 27
    }
  }, "Mobile Number:"), __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
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
      lineNumber: 501,
      columnNumber: 23
    }
  }, __jsx("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502,
      columnNumber: 25
    }
  }, "Note:"), " Please send proof of payment (screenshot, printscreen) to", " ", __jsx("span", {
    style: {
      color: "#33bd33"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 25
    }
  }, "i-Wheels26@gmail.com"), " ", "or send a message to our", " ", __jsx("a", {
    className: "d-inline",
    href: "https://www.facebook.com/i-Wheelsph-127061742122440/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 25
    }
  }, "Facebook Page"), "."), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516,
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
      lineNumber: 518,
      columnNumber: 25
    }
  }, "Confirm Order") : __jsx("div", {
    className: "lds-ring",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525,
      columnNumber: 25
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526,
      columnNumber: 27
    }
  }), __jsx("div", {
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
  })), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BheW1lbnRzL1BheW1lbnRNZXRob2RzLmpzIl0sIm5hbWVzIjpbImhvc3QiLCJwcm9jZXNzIiwiUGF5bWVudE1ldGhvZHMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU3RhdGUiLCJzZWxlY3RlZFBheW1lbnQiLCJzZXRzZWxlY3RlZFBheW1lbnQiLCJpc0NhbXBhaWduIiwic2V0aXNDYW1wYWlnbiIsImlzTG9hZGluZyIsInNldGlzTG9hZGluZyIsImlzQ29kT24iLCJzZXRpc0NvZE9uIiwidXNlRWZmZWN0IiwiZW5jcnlwdGVkSW5mb0RhdGEiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic3RhdGVTY2hlbWEiLCJkZWNyeXB0SW5mb0RhdGEiLCJzaGlwcGluZ19jaXR5IiwidmFsdWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwic2hpcHBpbmdfYWRkcmVzcyIsInBhcnNlSW50Iiwic2hpcHBpbmdfemlwIiwiZGVjcnlwdGVkRGF0YSIsImRlbGl2ZXJ5X2RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJmZXRjaFVzZXIiLCJ0b2tlbiIsImF4aW9zIiwiZ2V0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJyZXMiLCJkYXRhIiwidXNlckRldGFpbHMiLCJyZW1vdmVJdGVtIiwicHJvcHMiLCJoaXN0b3J5IiwicHVzaCIsInRvYXN0IiwiZXJyb3IiLCJoYW5kbGVDaGFuZ2VQcmljZSIsInByb2R1Y3RzIiwiY2FydFN0b3JhZ2UiLCJjYXJ0QXJyYXkiLCJkZWNyeXB0RGF0YSIsImkiLCJlbCIsImluZGV4IiwiZmluZEluZGV4IiwiaXRlbSIsImlkIiwicHJvZHVjdElkIiwiY2FtcGFpZ25fcHJpY2UiLCJkaXNjb3VudF9wcmljZSIsImVuY3J5cHRlZERhdGEiLCJlbmNyeXB0RGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXRJdGVtIiwidHlwZSIsImxlbmd0aCIsImhhbmRsZVN1Ym1pdCIsInBheW1lbnRNZXRob2QiLCJ1c2VySWQiLCJjb29raWUiLCJjYXJ0Iiwib3JkZXJJdGVtcyIsIm9iaiIsIm5hbWUiLCJxdWFudGl0eSIsIml0ZW1QcmljZSIsIm9yZGVyIiwic2hpcHBpbmdGaXJzdE5hbWUiLCJzaGlwcGluZ19maXJzdE5hbWUiLCJzaGlwcGluZ0xhc3ROYW1lIiwic2hpcHBpbmdfbGFzdE5hbWUiLCJzaGlwcGluZ1Bob25lIiwic2hpcHBpbmdfcGhvbmUiLCJzaGlwcGluZ0FkZHJlc3MiLCJzaGlwcGluZ0NpdHkiLCJzaGlwcGluZ1Byb3ZpbmNlIiwic2hpcHBpbmdaaXAiLCJkZWxpdmVyeUluc3RydWN0aW9ucyIsIm5vdGUiLCJtZXNzYWdlIiwiYmlsbGluZ0ZpcnN0TmFtZSIsImJpbGxpbmdfZmlyc3ROYW1lIiwiYmlsbGluZ0xhc3ROYW1lIiwiYmlsbGluZ19sYXN0TmFtZSIsImJpbGxpbmdQaG9uZSIsImJpbGxpbmdfcGhvbmUiLCJiaWxsaW5nRW1haWwiLCJiaWxsaW5nX2VtYWlsIiwiZGVsaXZlcnlEYXRlIiwiZGVsaXZlcnlUaW1lIiwiZGVsaXZlcnlfdGltZSIsInBvc3QiLCJlbmNyeXB0U3RyaW5nIiwib3JkZXJfbmFtZSIsIm9yZGVyTmFtZSIsImNyeXB0b1N0ciIsImZvcm1hdERhdGUiLCJzZW5kRW1haWxSZXMiLCJjbGVhckRhdGEiLCJSb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJ1cGRhdGVkT3JkZXJJdGVtcyIsIlNsaWRlIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwicGFkZGluZ1RvcCIsIm1hcmdpblRvcCIsInJlcXVpcmUiLCJtYXhXaWR0aCIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLElBQUksR0FBR0MsdUJBQVg7O0FBRUEsU0FBU0MsY0FB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QXlnQk1BLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwYXltZW50LmpzLjYxMDI4YzUwOWQ5OGExM2YwOWU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgT3JkZXJTdW1tYXJ5IGZyb20gXCIuLi9jaGVja291dC9PcmRlclN1bW1hcnlcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgU2hpcHBpbmdTdW1tYXJ5IGZyb20gXCIuLi9jaGVja291dC9TaGlwcGluZ1N1bW1hcnlcIjtcclxuaW1wb3J0IHtcclxuICBkZWNyeXB0RGF0YSxcclxuICBjbGVhckRhdGEsXHJcbiAgZW5jcnlwdERhdGEsXHJcbn0gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvY2FydEFjdGlvbnNcIjtcclxuaW1wb3J0IHtcclxuICBkZWNyeXB0SW5mb0RhdGEsXHJcbiAgZW5jcnlwdFN0cmluZyxcclxufSBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9pbmZvQWN0aW9uc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBQYXlwYWwgZnJvbSBcIi4vUGF5cGFsXCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvZnVuY3Rpb25cIjtcclxuaW1wb3J0IHsgU2xpZGUsIHRvYXN0LCBUb2FzdENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxubGV0IGhvc3QgPSBwcm9jZXNzLmVudi5BUElfVVJMO1xyXG5cclxuZnVuY3Rpb24gUGF5bWVudE1ldGhvZHMoKSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFBheW1lbnQsIHNldHNlbGVjdGVkUGF5bWVudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaXNDYW1wYWlnbiwgc2V0aXNDYW1wYWlnbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0aXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNDb2RPbiwgc2V0aXNDb2RPbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgZW5jcnlwdGVkSW5mb0RhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9jZXNzLmVudi5JTkZPX0NPT0tJRSk7XHJcbiAgICBsZXQgc3RhdGVTY2hlbWEgPSBkZWNyeXB0SW5mb0RhdGEoZW5jcnlwdGVkSW5mb0RhdGEpO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgc3RhdGVTY2hlbWEuc2hpcHBpbmdfY2l0eS52YWx1ZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwibWFrYXRpXCIpIHx8XHJcbiAgICAgIHN0YXRlU2NoZW1hLnNoaXBwaW5nX2FkZHJlc3MudmFsdWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcIm1ha2F0aVwiKSB8fFxyXG4gICAgICBbXHJcbiAgICAgICAgMTIyNiwgMTIzMywgMTIwOSwgMTIxNCwgMTIxNywgMTIyMSwgMTIyMiwgMTIxOSwgMTIyMCwgMTIwMiwgMTIwMSwgMTIyOCxcclxuICAgICAgICAxMjEyLCAxMjExLCAxMjA2LCAxMjA0LCAxMjI5LCAxMjMyLCAxMjI0LCAxMjAwLCAxMjA3LCAxMjM1LCAxMjMxLCAxMjE4LFxyXG4gICAgICAgIDEyMTMsIDEyMzAsIDEyMTAsIDEyMTYsIDEyMTUsIDEyMjcsIDEyMDMsIDEyMzQsIDEyMjMsIDEyMDUsIDEyMjUsIDEyMDgsXHJcbiAgICAgIF0uaW5jbHVkZXMocGFyc2VJbnQoc3RhdGVTY2hlbWEuc2hpcHBpbmdfemlwLnZhbHVlKSlcclxuICAgICkge1xyXG4gICAgICBzZXRpc0NvZE9uKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBkZWNyeXB0ZWREYXRhID0gZGVjcnlwdEluZm9EYXRhKCk7XHJcblxyXG4gICAgaWYgKGRlY3J5cHRlZERhdGEpIHtcclxuICAgICAgaWYgKGRlY3J5cHRlZERhdGEuZGVsaXZlcnlfZGF0ZS52YWx1ZSA9PSBcIjIwMjEtMDItMTRcIikge1xyXG4gICAgICAgIHNldGlzQ2FtcGFpZ24odHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHRvYXN0LmVycm9yKGVyci5yZXNwb25zZS5kYXRhWzBdLm1lc3NhZ2UpO1xyXG4gICAgLy8gY29uc29sZS5sb2coLCBcIkhFWVlZWVwiKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgc2V0c2VsZWN0ZWRQYXltZW50KHZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAodG9rZW4pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7aG9zdH0vYXBpL3VzZXIvdXNlci9kZXRhaWxzYCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAocmVzLmRhdGEudXNlckRldGFpbHMpIHtcclxuICAgICAgICByZXR1cm4gcmVzLmRhdGEudXNlckRldGFpbHNbXCJpZFwiXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlblwiKTtcclxuICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvbG9naW5cIik7XHJcbiAgICAgIHRvYXN0LmVycm9yKFwiWW91ciB0b2tlbiBpcyBpbnZhbGlkIG9yIGV4cGlyZWQuXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVByaWNlID0gKHByb2R1Y3RzKSA9PiB7XHJcbiAgICBsZXQgY2FydFN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9jZXNzLmVudi5DQVJUX0NPT0tJRSk7XHJcbiAgICBsZXQgY2FydEFycmF5ID0gZGVjcnlwdERhdGEoY2FydFN0b3JhZ2UpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvZHVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgZWwgPSBwcm9kdWN0c1tpXTtcclxuXHJcbiAgICAgIHZhciBpbmRleCA9IGNhcnRBcnJheS5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGVsLnByb2R1Y3RJZCk7XHJcblxyXG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgIGNhcnRBcnJheVtpbmRleF1bXCJjYW1wYWlnbl9wcmljZVwiXSA9IGVsLmNhbXBhaWduX3ByaWNlO1xyXG4gICAgICAgIGNhcnRBcnJheVtpbmRleF1bXCJkaXNjb3VudF9wcmljZVwiXSA9IGVsLmRpc2NvdW50X3ByaWNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgZW5jcnlwdGVkRGF0YSA9IGVuY3J5cHREYXRhKEpTT04uc3RyaW5naWZ5KGNhcnRBcnJheSkpO1xyXG5cclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvY2Vzcy5lbnYuQ0FSVF9DT09LSUUsIGVuY3J5cHRlZERhdGEpO1xyXG5cclxuICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgKCgpID0+IHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiVVBEQVRFX0NBUlRcIixcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSkoKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChwYXltZW50TWV0aG9kKSA9PiB7XHJcbiAgICBsZXQgdXNlcklkID0gMDtcclxuICAgIGxldCB0b2tlbiA9IGNvb2tpZS5nZXQoXCJfd3VzX0JKS1wiKTtcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHVzZXJJZCA9IGF3YWl0IGZldGNoVXNlcih0b2tlbik7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxyXG4gICAgfVxyXG5cclxuICAgIHNldGlzTG9hZGluZyh0cnVlKTtcclxuICAgIGxldCBlbmNyeXB0ZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvY2Vzcy5lbnYuQ0FSVF9DT09LSUUpO1xyXG4gICAgbGV0IGVuY3J5cHRlZEluZm9EYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvY2Vzcy5lbnYuSU5GT19DT09LSUUpO1xyXG4gICAgbGV0IGNhcnQgPSBkZWNyeXB0RGF0YShlbmNyeXB0ZWREYXRhKTtcclxuICAgIGxldCBzdGF0ZVNjaGVtYSA9IGRlY3J5cHRJbmZvRGF0YShlbmNyeXB0ZWRJbmZvRGF0YSk7XHJcblxyXG4gICAgbGV0IG9yZGVySXRlbXMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FydC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgb2JqID0gbnVsbDtcclxuICAgICAgaWYgKGlzQ2FtcGFpZ24pIHtcclxuICAgICAgICBvYmogPSB7XHJcbiAgICAgICAgICBwcm9kdWN0SWQ6IGNhcnRbaV0uaWQsXHJcbiAgICAgICAgICBuYW1lOiBjYXJ0W2ldLm5hbWUsXHJcbiAgICAgICAgICBxdWFudGl0eTogY2FydFtpXS5xdWFudGl0eSxcclxuICAgICAgICAgIGl0ZW1QcmljZTogY2FydFtpXS5jYW1wYWlnbl9wcmljZSxcclxuICAgICAgICB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG9iaiA9IHtcclxuICAgICAgICAgIHByb2R1Y3RJZDogY2FydFtpXS5pZCxcclxuICAgICAgICAgIG5hbWU6IGNhcnRbaV0ubmFtZSxcclxuICAgICAgICAgIHF1YW50aXR5OiBjYXJ0W2ldLnF1YW50aXR5LFxyXG4gICAgICAgICAgaXRlbVByaWNlOiBjYXJ0W2ldLmRpc2NvdW50X3ByaWNlLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG9yZGVySXRlbXMucHVzaChvYmopO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBvcmRlciA9IHtcclxuICAgICAgb3JkZXJJdGVtczogb3JkZXJJdGVtcyxcclxuICAgICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICAgIHNoaXBwaW5nRmlyc3ROYW1lOiBzdGF0ZVNjaGVtYS5zaGlwcGluZ19maXJzdE5hbWUudmFsdWUsXHJcbiAgICAgIHNoaXBwaW5nTGFzdE5hbWU6IHN0YXRlU2NoZW1hLnNoaXBwaW5nX2xhc3ROYW1lLnZhbHVlLFxyXG4gICAgICBzaGlwcGluZ1Bob25lOiBzdGF0ZVNjaGVtYS5zaGlwcGluZ19waG9uZS52YWx1ZSxcclxuICAgICAgc2hpcHBpbmdBZGRyZXNzOiBzdGF0ZVNjaGVtYS5zaGlwcGluZ19hZGRyZXNzLnZhbHVlLFxyXG4gICAgICBzaGlwcGluZ0NpdHk6IHN0YXRlU2NoZW1hLnNoaXBwaW5nX2NpdHkudmFsdWUsXHJcbiAgICAgIHNoaXBwaW5nUHJvdmluY2U6IFwiTWV0cm8gTWFuaWxhXCIsXHJcbiAgICAgIHNoaXBwaW5nWmlwOiBzdGF0ZVNjaGVtYS5zaGlwcGluZ196aXAudmFsdWUsXHJcbiAgICAgIGRlbGl2ZXJ5SW5zdHJ1Y3Rpb25zOiBzdGF0ZVNjaGVtYS5ub3RlLnZhbHVlLFxyXG4gICAgICBtZXNzYWdlOiBzdGF0ZVNjaGVtYS5tZXNzYWdlLnZhbHVlLFxyXG4gICAgICBiaWxsaW5nRmlyc3ROYW1lOiBzdGF0ZVNjaGVtYS5iaWxsaW5nX2ZpcnN0TmFtZS52YWx1ZSxcclxuICAgICAgYmlsbGluZ0xhc3ROYW1lOiBzdGF0ZVNjaGVtYS5iaWxsaW5nX2xhc3ROYW1lLnZhbHVlLFxyXG4gICAgICBiaWxsaW5nUGhvbmU6IHN0YXRlU2NoZW1hLmJpbGxpbmdfcGhvbmUudmFsdWUsXHJcbiAgICAgIGJpbGxpbmdFbWFpbDogc3RhdGVTY2hlbWEuYmlsbGluZ19lbWFpbC52YWx1ZSxcclxuICAgICAgZGVsaXZlcnlEYXRlOiBzdGF0ZVNjaGVtYS5kZWxpdmVyeV9kYXRlLnZhbHVlLFxyXG4gICAgICBkZWxpdmVyeVRpbWU6IHN0YXRlU2NoZW1hLmRlbGl2ZXJ5X3RpbWUudmFsdWUsXHJcbiAgICAgIHBheW1lbnRNZXRob2Q6IHBheW1lbnRNZXRob2QsXHJcbiAgICAgIGlzQ2FtcGFpZ246IGlzQ2FtcGFpZ24sXHJcbiAgICB9O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7aG9zdH0vYXBpL3VzZXIvb3JkZXJgLCBvcmRlcik7XHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICBsZXQgZW5jcnlwdGVkRGF0YSA9IGVuY3J5cHRTdHJpbmcocmVzLmRhdGEub3JkZXJfbmFtZSk7XHJcblxyXG4gICAgICAgIC8vIHJldHVybiBjb25zb2xlLmxvZyhlbmNyeXB0ZWREYXRhLCBlbmNyeXB0ZWREYXRhKTtcclxuXHJcbiAgICAgICAgbGV0IHNlbmRFbWFpbFJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgICBgJHtob3N0fS9hcGkvdXNlci9vcmRlci9zZW5kRW1haWxgLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBiaWxsaW5nRW1haWw6IG9yZGVyLmJpbGxpbmdFbWFpbCxcclxuICAgICAgICAgICAgYmlsbGluZ0ZpcnN0TmFtZTogb3JkZXIuYmlsbGluZ0ZpcnN0TmFtZSxcclxuICAgICAgICAgICAgb3JkZXJOYW1lOiByZXMuZGF0YS5vcmRlcl9uYW1lLFxyXG4gICAgICAgICAgICBjcnlwdG9TdHI6IGVuY3J5cHRlZERhdGEsXHJcbiAgICAgICAgICAgIG9yZGVySXRlbXM6IG9yZGVySXRlbXMsXHJcbiAgICAgICAgICAgIHBheW1lbnRNZXRob2Q6IHBheW1lbnRNZXRob2QsXHJcbiAgICAgICAgICAgIGRlbGl2ZXJ5RGF0ZTogZm9ybWF0RGF0ZShzdGF0ZVNjaGVtYS5kZWxpdmVyeV9kYXRlLnZhbHVlKSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZiAoc2VuZEVtYWlsUmVzKSB7XHJcbiAgICAgICAgICBjbGVhckRhdGEoKTtcclxuICAgICAgICAgIFJvdXRlci5wdXNoKGAvdGhhbmt5b3UvJHtlbmNyeXB0ZWREYXRhfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHNldGlzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhKTtcclxuICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGFbMF0ubWVzc2FnZSk7XHJcbiAgICAgIGlmIChlcnIucmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAoZXJyLnJlc3BvbnNlLmRhdGEpIHtcclxuICAgICAgICAgIGlmIChlcnIucmVzcG9uc2UuZGF0YVswXSkge1xyXG4gICAgICAgICAgICBpZiAoZXJyLnJlc3BvbnNlLmRhdGFbMF0udXBkYXRlZE9yZGVySXRlbXMpIHtcclxuICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2VQcmljZShlcnIucmVzcG9uc2UuZGF0YVswXS51cGRhdGVkT3JkZXJJdGVtcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRvYXN0LmVycm9yKGVyci5yZXNwb25zZS5kYXRhWzBdLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0b2FzdC5lcnJvcihcIlNvbWV0aGluZyB3ZW50IHdyb25nLCBQbGVhc2UgdHJ5IGFnYWluIG9yIGNvbnRhY3QgdXMuXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNDBcIj5cclxuICAgICAgPFRvYXN0Q29udGFpbmVyIHRyYW5zaXRpb249e1NsaWRlfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMHB4XCIsIG1hcmdpblJpZ2h0OiBcIjBweFwiIH19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTUgY29sLW1kLTVcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgPGg1PlVzZXIgRGV0YWlsczwvaDU+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jaGVja291dFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibWwtYXV0byBidG4gYnRuLWxpbmsgdGV4dC1kYW5nZXJcIj5FZGl0PC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxTaGlwcGluZ1N1bW1hcnkgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgPGg1Pk9yZGVyIERldGFpbHM8L2g1PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2FydFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibWwtYXV0byBidG4gYnRuLWxpbmsgdGV4dC1kYW5nZXJcIj5FZGl0PC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxPcmRlclN1bW1hcnkgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTcgY29sLW1kLTdcIj5cclxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlNlbGVjdCBQYXltZW50IE1ldGhvZDwvaDU+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBheW1lbnQtbWV0aG9kXCJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogMCxcclxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjAuNXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMC41cmVtXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImRpcmVjdC1iYW5rLXRyYW5zZmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW8tYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gaGFuZGxlQ2hhbmdlKFwiYmFua1wiKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkaXJlY3QtYmFuay10cmFuc2ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIERpcmVjdCBCYW5rIFRyYW5zZmVyXHJcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFBheW1lbnQgPT0gXCJiYW5rXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvbG9nb3MvYmFua3MyLmpwZ1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IHBhZGRpbmdUb3A6IFwiMjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBPbmNlIHRoZSBvcmRlciBpcyBjb21wbGV0ZWQsIHlvdSBjYW4gc2V0dGxlIHRoZSBhbW91bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW50byBvdXIgQlBJIGFjY291bnQgKHZpYSBkZXBvc2l0IG9yIGJhbmsgdHJhbnNmZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogXCIzMDBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+QmFuazo8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5CUEk8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMzAwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkFjY291bnQgTmFtZTo8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5JLVdoZWVsczwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogXCIzMDBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+QWNjb3VudCBOdW1iZXI6PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+MzAzOTAyMjU2NjwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiwgcGFkZGluZ1RvcDogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPk5vdGU6PC9iPiBQbGVhc2Ugc2VuZCBwcm9vZiBvZiBwYXltZW50IChzY3JlZW5zaG90LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmludHNjcmVlbikgdG97XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiMzM2JkMzNcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpLVdoZWVsczI2QGdtYWlsLmNvbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvciBzZW5kIGEgbWVzc2FnZSB0byBvdXJ7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1pbmxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vaS1XaGVlbHNwaC0xMjcwNjE3NDIxMjI0NDAvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEZhY2Vib29rIFBhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgeyFpc0xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdWJtaXQoXCJCYW5rIC0gQlBJXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tbGlnaHQgbWItM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBDb25maXJtIE9yZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZHMtcmluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY2FzaC1vbi1kZWxpdmVyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IGhhbmRsZUNoYW5nZShcImNvZFwiKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjYXNoLW9uLWRlbGl2ZXJ5XCI+Q2FzaCBvbiBEZWxpdmVyeTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFBheW1lbnQgPT0gXCJjb2RcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9sb2dvcy9jb2QuanBnXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgcGFkZGluZ1RvcDogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFdoZW4gdXNpbmcgb3VyIENhc2ggb24gRGVsaXZlcnkgc2VydmljZSwgcGF5bWVudCBpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnaXZlbiB0byBvdXIgZGVsaXZlcnkgcmlkZXIgdXBvbiByZWNlaXB0IG9mIGl0ZW0uXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIHshaXNMb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU3VibWl0KFwiQ09EXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tbGlnaHQgbWItM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBDb25maXJtIE9yZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZHMtcmluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZ2Nhc2hcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpby1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBoYW5kbGVDaGFuZ2UoXCJnY2FzaFwiKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZ2Nhc2hcIj5HQ2FzaDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFBheW1lbnQgPT0gXCJnY2FzaFwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL2xvZ29zL2djYXNoLnBuZ1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI3MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgcGFkZGluZ1RvcDogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9uY2UgdGhlIG9yZGVyIGlzIGNvbXBsZXRlZCwgeW91IGNhbiBzZXR0bGUgdGhlIGFtb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRvIG91ciBHY2FzaCBhY2NvdW50ICh2aWEgZGVwb3NpdCBvciBiYW5rIHRyYW5zZmVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMzAwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkUtV2FsbGV0OjwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkdDYXNoPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiBcIjMwMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5BY2NvdW50IE5hbWU6PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+TWFyeHMgSm9zaHVhPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiBcIjMwMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5Nb2JpbGUgTnVtYmVyOjwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PjA5MjE0NDMwMTMxPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiLCBwYWRkaW5nVG9wOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGI+Tm90ZTo8L2I+IFBsZWFzZSBzZW5kIHByb29mIG9mIHBheW1lbnQgKHNjcmVlbnNob3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW50c2NyZWVuKSB0b3tcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiIzMzYmQzM1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGktV2hlZWxzMjZAZ21haWwuY29tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yIHNlbmQgYSBtZXNzYWdlIHRvIG91cntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWlubGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9pLVdoZWVsc3BoLTEyNzA2MTc0MjEyMjQ0MC9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgRmFjZWJvb2sgUGFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgeyFpc0xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdWJtaXQoXCJHQ2FzaFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWxpZ2h0IG1iLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlybSBPcmRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGRzLXJpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwicGF5bWF5YVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IGhhbmRsZUNoYW5nZShcInBheW1heWFcIil9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGF5bWF5YVwiPlBheW1heWE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRQYXltZW50ID09IFwicGF5bWF5YVwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL2xvZ29zL3BheW1heWEuanBnXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjUwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBwYWRkaW5nVG9wOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgT25jZSB0aGUgb3JkZXIgaXMgY29tcGxldGVkLCB5b3UgY2FuIHNldHRsZSB0aGUgYW1vdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludG8gb3VyIFBheW1heWEgYWNjb3VudCAodmlhIGRlcG9zaXQgb3IgYmFuayB0cmFuc2ZlcilcclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiBcIjMwMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5FLVdhbGxldDo8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5QYXltYXlhPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiBcIjMwMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5BY2NvdW50IE5hbWU6PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+SS1XaGVlbHM8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMzAwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2Pk1vYmlsZSBOdW1iZXI6PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+MDkxNiA1MDkgMTA4MzwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiwgcGFkZGluZ1RvcDogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPk5vdGU6PC9iPiBQbGVhc2Ugc2VuZCBwcm9vZiBvZiBwYXltZW50IChzY3JlZW5zaG90LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmludHNjcmVlbikgdG97XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiMzM2JkMzNcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpLVdoZWVsczI2QGdtYWlsLmNvbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvciBzZW5kIGEgbWVzc2FnZSB0byBvdXJ7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1pbmxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vaS1XaGVlbHNwaC0xMjcwNjE3NDIxMjI0NDAvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEZhY2Vib29rIFBhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIHshaXNMb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU3VibWl0KFwiUGF5bWF5YVwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWxpZ2h0IG1iLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlybSBPcmRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGRzLXJpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGF5bWVudE1ldGhvZHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
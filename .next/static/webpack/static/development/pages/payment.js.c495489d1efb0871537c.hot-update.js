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
/* harmony import */ var _CreditCard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./CreditCard */ "./components/payments/CreditCard.js");
/* harmony import */ var _Gcash__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Gcash */ "./components/payments/Gcash.js");
/* harmony import */ var _Grabpay__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Grabpay */ "./components/payments/Grabpay.js");



var _jsxFileName = "C:\\Users\\corde\\Desktop\\New folder\\bikeshop\\bikeshop_frontend\\components\\payments\\PaymentMethods.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
















var host = "http://127.0.0.1:8080";

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

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      total = _useState5[0],
      setTotal = _useState5[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var encryptedInfoData = localStorage.getItem("kri_MUK");
    var stateSchema = Object(_store_actions_infoActions__WEBPACK_IMPORTED_MODULE_7__["decryptInfoData"])(encryptedInfoData);

    if (stateSchema.shipping_city.value.toLowerCase().includes("makati") || stateSchema.shipping_address.value.toLowerCase().includes("makati") || [1226, 1233, 1209, 1214, 1217, 1221, 1222, 1219, 1220, 1202, 1201, 1228, 1212, 1211, 1206, 1204, 1229, 1232, 1224, 1200, 1207, 1235, 1231, 1218, 1213, 1230, 1210, 1216, 1215, 1227, 1203, 1234, 1223, 1205, 1225, 1208].includes(parseInt(stateSchema.shipping_zip.value))) {
      setisCodOn(true);
    }

    var decryptedData = Object(_store_actions_infoActions__WEBPACK_IMPORTED_MODULE_7__["decryptInfoData"])();

    if (decryptedData) {
      if (decryptedData.delivery_date.value == "2023-02-14") {
        setisCampaign(true);
      }
    } // toast.error(err.response.data[0].message);
    // console.log(, "HEYYYY");

  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var encryptedData = localStorage.getItem("_bik_EKL");
    var cart = Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_6__["decryptData"])(encryptedData);
    var amount = 0;

    for (var i = 0; i < cart.length; i++) {
      amount = amount + cart[i].discount_price * cart[i].quantity;
    }

    setTotal(amount < 100 ? 100 : amount);
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
      lineNumber: 229,
      columnNumber: 5
    }
  }, __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_13__["ToastContainer"], {
    transition: react_toastify__WEBPACK_IMPORTED_MODULE_13__["Slide"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
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
      lineNumber: 231,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "col-lg-5 col-md-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "d-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 13
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 15
    }
  }, "User Details"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/checkout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "ml-auto btn btn-link text-danger",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 17
    }
  }, "Edit"))), __jsx(_checkout_ShippingSummary__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "d-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 13
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 15
    }
  }, "Order Details"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/cart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "ml-auto btn btn-link text-danger",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 17
    }
  }, "Edit"))), __jsx(_checkout_OrderSummary__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "col-lg-7 col-md-7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 9
    }
  }, __jsx("h5", {
    className: "text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 11
    }
  }, "Select Payment Method"), __jsx("div", {
    className: "order-details",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
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
      lineNumber: 256,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 15
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
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
      lineNumber: 267,
      columnNumber: 19
    }
  }), __jsx("label", {
    htmlFor: "direct-bank-transfer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 19
    }
  }, "Credit Card"), selectedPayment == "bank" ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 23
    }
  }), __jsx("img", {
    src: __webpack_require__(/*! ../../images/logos/banks2.jpg */ "./images/logos/banks2.jpg"),
    alt: "image",
    height: "150",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 23
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 23
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 23
    }
  }), __jsx(_CreditCard__WEBPACK_IMPORTED_MODULE_15__["default"], {
    amount: total,
    handleSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 23
    }
  }), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 23
    }
  })) : null)), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 15
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
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
      lineNumber: 293,
      columnNumber: 19
    }
  }), __jsx("label", {
    htmlFor: "cash-on-delivery",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 19
    }
  }, "Cash on Delivery"), selectedPayment == "cod" ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 23
    }
  }), __jsx("img", {
    src: __webpack_require__(/*! ../../images/logos/cod.jpg */ "./images/logos/cod.jpg"),
    alt: "image",
    height: "100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 23
    }
  }), __jsx("p", {
    style: {
      paddingTop: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 23
    }
  }, "When using our Cash on Delivery service, payment is given to our delivery rider upon receipt of item."), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
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
      lineNumber: 314,
      columnNumber: 25
    }
  }, "Confirm Order") : __jsx("div", {
    className: "lds-ring",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 25
    }
  }, __jsx("div", {
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
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
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
      lineNumber: 334,
      columnNumber: 15
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
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
      lineNumber: 336,
      columnNumber: 19
    }
  }), __jsx("label", {
    htmlFor: "gcash",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 19
    }
  }, "GCash"), selectedPayment == "gcash" ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 23
    }
  }), __jsx("img", {
    src: __webpack_require__(/*! ../../images/logos/gcash.png */ "./images/logos/gcash.png"),
    alt: "image",
    height: "70",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 23
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 23
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 23
    }
  }), __jsx(_Gcash__WEBPACK_IMPORTED_MODULE_16__["default"], {
    amount: total,
    handleSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 23
    }
  }), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 23
    }
  })) : null)), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 15
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "radio",
    id: "grabpay",
    name: "radio-button",
    onChange: function onChange() {
      return handleChange("grabpay");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 19
    }
  }), __jsx("label", {
    htmlFor: "grabpay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 19
    }
  }, "GrabPay"), selectedPayment == "grabpay" ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 23
    }
  }), __jsx("img", {
    src: __webpack_require__(/*! ../../images/logos/gcash.png */ "./images/logos/gcash.png"),
    alt: "image",
    height: "70",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 23
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 23
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 23
    }
  }), __jsx(_Grabpay__WEBPACK_IMPORTED_MODULE_17__["default"], {
    amount: total,
    handleSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 23
    }
  }), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 23
    }
  })) : null)))))));
}

_s(PaymentMethods, "swB99GZQV2E96J1s+dIt2dvkKg4=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BheW1lbnRzL1BheW1lbnRNZXRob2RzLmpzIl0sIm5hbWVzIjpbImhvc3QiLCJwcm9jZXNzIiwiUGF5bWVudE1ldGhvZHMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU3RhdGUiLCJzZWxlY3RlZFBheW1lbnQiLCJzZXRzZWxlY3RlZFBheW1lbnQiLCJpc0NhbXBhaWduIiwic2V0aXNDYW1wYWlnbiIsImlzTG9hZGluZyIsInNldGlzTG9hZGluZyIsImlzQ29kT24iLCJzZXRpc0NvZE9uIiwidG90YWwiLCJzZXRUb3RhbCIsInVzZUVmZmVjdCIsImVuY3J5cHRlZEluZm9EYXRhIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInN0YXRlU2NoZW1hIiwiZGVjcnlwdEluZm9EYXRhIiwic2hpcHBpbmdfY2l0eSIsInZhbHVlIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInNoaXBwaW5nX2FkZHJlc3MiLCJwYXJzZUludCIsInNoaXBwaW5nX3ppcCIsImRlY3J5cHRlZERhdGEiLCJkZWxpdmVyeV9kYXRlIiwiZW5jcnlwdGVkRGF0YSIsImNhcnQiLCJkZWNyeXB0RGF0YSIsImFtb3VudCIsImkiLCJsZW5ndGgiLCJkaXNjb3VudF9wcmljZSIsInF1YW50aXR5IiwiaGFuZGxlQ2hhbmdlIiwiZmV0Y2hVc2VyIiwidG9rZW4iLCJheGlvcyIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwicmVzIiwiZGF0YSIsInVzZXJEZXRhaWxzIiwicmVtb3ZlSXRlbSIsInByb3BzIiwiaGlzdG9yeSIsInB1c2giLCJ0b2FzdCIsImVycm9yIiwiaGFuZGxlQ2hhbmdlUHJpY2UiLCJwcm9kdWN0cyIsImNhcnRTdG9yYWdlIiwiY2FydEFycmF5IiwiZWwiLCJpbmRleCIsImZpbmRJbmRleCIsIml0ZW0iLCJpZCIsInByb2R1Y3RJZCIsImNhbXBhaWduX3ByaWNlIiwiZW5jcnlwdERhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwic2V0SXRlbSIsInR5cGUiLCJoYW5kbGVTdWJtaXQiLCJwYXltZW50TWV0aG9kIiwidXNlcklkIiwiY29va2llIiwib3JkZXJJdGVtcyIsIm9iaiIsIm5hbWUiLCJpdGVtUHJpY2UiLCJvcmRlciIsInNoaXBwaW5nRmlyc3ROYW1lIiwic2hpcHBpbmdfZmlyc3ROYW1lIiwic2hpcHBpbmdMYXN0TmFtZSIsInNoaXBwaW5nX2xhc3ROYW1lIiwic2hpcHBpbmdQaG9uZSIsInNoaXBwaW5nX3Bob25lIiwic2hpcHBpbmdBZGRyZXNzIiwic2hpcHBpbmdDaXR5Iiwic2hpcHBpbmdQcm92aW5jZSIsInNoaXBwaW5nWmlwIiwiZGVsaXZlcnlJbnN0cnVjdGlvbnMiLCJub3RlIiwibWVzc2FnZSIsImJpbGxpbmdGaXJzdE5hbWUiLCJiaWxsaW5nX2ZpcnN0TmFtZSIsImJpbGxpbmdMYXN0TmFtZSIsImJpbGxpbmdfbGFzdE5hbWUiLCJiaWxsaW5nUGhvbmUiLCJiaWxsaW5nX3Bob25lIiwiYmlsbGluZ0VtYWlsIiwiYmlsbGluZ19lbWFpbCIsImRlbGl2ZXJ5RGF0ZSIsImRlbGl2ZXJ5VGltZSIsImRlbGl2ZXJ5X3RpbWUiLCJwb3N0IiwiZW5jcnlwdFN0cmluZyIsIm9yZGVyX25hbWUiLCJvcmRlck5hbWUiLCJjcnlwdG9TdHIiLCJmb3JtYXREYXRlIiwic2VuZEVtYWlsUmVzIiwiY2xlYXJEYXRhIiwiUm91dGVyIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwidXBkYXRlZE9yZGVySXRlbXMiLCJTbGlkZSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInBhZGRpbmdUb3AiLCJtYXJnaW5Ub3AiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLElBQUks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Q0FERixDQXhHRixDQURGLENBRkYsQ0F0QkYsQ0FGRixDQURGO0FBbUtEOztHQTVXUXJFLGM7VUFDVUUsd0Q7OztLQURWRixjO0FBOFdNQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccGF5bWVudC5qcy5jNDk1NDg5ZDFlZmIwODcxNTM3Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE9yZGVyU3VtbWFyeSBmcm9tIFwiLi4vY2hlY2tvdXQvT3JkZXJTdW1tYXJ5XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFNoaXBwaW5nU3VtbWFyeSBmcm9tIFwiLi4vY2hlY2tvdXQvU2hpcHBpbmdTdW1tYXJ5XCI7XHJcbmltcG9ydCB7XHJcbiAgZGVjcnlwdERhdGEsXHJcbiAgY2xlYXJEYXRhLFxyXG4gIGVuY3J5cHREYXRhLFxyXG59IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2NhcnRBY3Rpb25zXCI7XHJcbmltcG9ydCB7XHJcbiAgZGVjcnlwdEluZm9EYXRhLFxyXG4gIGVuY3J5cHRTdHJpbmcsXHJcbn0gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvaW5mb0FjdGlvbnNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUGF5cGFsIGZyb20gXCIuL1BheXBhbFwiO1xyXG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2Z1bmN0aW9uXCI7XHJcbmltcG9ydCB7IFNsaWRlLCB0b2FzdCwgVG9hc3RDb250YWluZXIgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IENyZWRpdENhcmQgZnJvbSBcIi4vQ3JlZGl0Q2FyZFwiO1xyXG5pbXBvcnQgR2Nhc2ggZnJvbSBcIi4vR2Nhc2hcIjtcclxuaW1wb3J0IEdyYWJQYXkgZnJvbSBcIi4vR3JhYnBheVwiO1xyXG5cclxubGV0IGhvc3QgPSBwcm9jZXNzLmVudi5BUElfVVJMO1xyXG5cclxuZnVuY3Rpb24gUGF5bWVudE1ldGhvZHMoKSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFBheW1lbnQsIHNldHNlbGVjdGVkUGF5bWVudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaXNDYW1wYWlnbiwgc2V0aXNDYW1wYWlnbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0aXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNDb2RPbiwgc2V0aXNDb2RPbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3RvdGFsLCBzZXRUb3RhbF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBlbmNyeXB0ZWRJbmZvRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2Nlc3MuZW52LklORk9fQ09PS0lFKTtcclxuICAgIGxldCBzdGF0ZVNjaGVtYSA9IGRlY3J5cHRJbmZvRGF0YShlbmNyeXB0ZWRJbmZvRGF0YSk7XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICBzdGF0ZVNjaGVtYS5zaGlwcGluZ19jaXR5LnZhbHVlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJtYWthdGlcIikgfHxcclxuICAgICAgc3RhdGVTY2hlbWEuc2hpcHBpbmdfYWRkcmVzcy52YWx1ZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwibWFrYXRpXCIpIHx8XHJcbiAgICAgIFtcclxuICAgICAgICAxMjI2LCAxMjMzLCAxMjA5LCAxMjE0LCAxMjE3LCAxMjIxLCAxMjIyLCAxMjE5LCAxMjIwLCAxMjAyLCAxMjAxLCAxMjI4LFxyXG4gICAgICAgIDEyMTIsIDEyMTEsIDEyMDYsIDEyMDQsIDEyMjksIDEyMzIsIDEyMjQsIDEyMDAsIDEyMDcsIDEyMzUsIDEyMzEsIDEyMTgsXHJcbiAgICAgICAgMTIxMywgMTIzMCwgMTIxMCwgMTIxNiwgMTIxNSwgMTIyNywgMTIwMywgMTIzNCwgMTIyMywgMTIwNSwgMTIyNSwgMTIwOCxcclxuICAgICAgXS5pbmNsdWRlcyhwYXJzZUludChzdGF0ZVNjaGVtYS5zaGlwcGluZ196aXAudmFsdWUpKVxyXG4gICAgKSB7XHJcbiAgICAgIHNldGlzQ29kT24odHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGRlY3J5cHRlZERhdGEgPSBkZWNyeXB0SW5mb0RhdGEoKTtcclxuXHJcbiAgICBpZiAoZGVjcnlwdGVkRGF0YSkge1xyXG4gICAgICBpZiAoZGVjcnlwdGVkRGF0YS5kZWxpdmVyeV9kYXRlLnZhbHVlID09IFwiMjAyMy0wMi0xNFwiKSB7XHJcbiAgICAgICAgc2V0aXNDYW1wYWlnbih0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gdG9hc3QuZXJyb3IoZXJyLnJlc3BvbnNlLmRhdGFbMF0ubWVzc2FnZSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZygsIFwiSEVZWVlZXCIpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBlbmNyeXB0ZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvY2Vzcy5lbnYuQ0FSVF9DT09LSUUpO1xyXG4gICAgbGV0IGNhcnQgPSBkZWNyeXB0RGF0YShlbmNyeXB0ZWREYXRhKTtcclxuXHJcbiAgICBsZXQgYW1vdW50ID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FydC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBhbW91bnQgPSBhbW91bnQgKyBjYXJ0W2ldLmRpc2NvdW50X3ByaWNlICogY2FydFtpXS5xdWFudGl0eTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUb3RhbChhbW91bnQgPCAxMDAgPyAxMDAgOiBhbW91bnQpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHZhbHVlKSA9PiB7XHJcbiAgICBzZXRzZWxlY3RlZFBheW1lbnQodmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICh0b2tlbikgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtob3N0fS9hcGkvdXNlci91c2VyL2RldGFpbHNgLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW4sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChyZXMuZGF0YS51c2VyRGV0YWlscykge1xyXG4gICAgICAgIHJldHVybiByZXMuZGF0YS51c2VyRGV0YWlsc1tcImlkXCJdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRva2VuXCIpO1xyXG4gICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIi9sb2dpblwiKTtcclxuICAgICAgdG9hc3QuZXJyb3IoXCJZb3VyIHRva2VuIGlzIGludmFsaWQgb3IgZXhwaXJlZC5cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlUHJpY2UgPSAocHJvZHVjdHMpID0+IHtcclxuICAgIGxldCBjYXJ0U3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2Nlc3MuZW52LkNBUlRfQ09PS0lFKTtcclxuICAgIGxldCBjYXJ0QXJyYXkgPSBkZWNyeXB0RGF0YShjYXJ0U3RvcmFnZSk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9kdWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBlbCA9IHByb2R1Y3RzW2ldO1xyXG5cclxuICAgICAgdmFyIGluZGV4ID0gY2FydEFycmF5LmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gZWwucHJvZHVjdElkKTtcclxuXHJcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgY2FydEFycmF5W2luZGV4XVtcImNhbXBhaWduX3ByaWNlXCJdID0gZWwuY2FtcGFpZ25fcHJpY2U7XHJcbiAgICAgICAgY2FydEFycmF5W2luZGV4XVtcImRpc2NvdW50X3ByaWNlXCJdID0gZWwuZGlzY291bnRfcHJpY2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBlbmNyeXB0ZWREYXRhID0gZW5jcnlwdERhdGEoSlNPTi5zdHJpbmdpZnkoY2FydEFycmF5KSk7XHJcblxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9jZXNzLmVudi5DQVJUX0NPT0tJRSwgZW5jcnlwdGVkRGF0YSk7XHJcblxyXG4gICAgICBkaXNwYXRjaChcclxuICAgICAgICAoKCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdHlwZTogXCJVUERBVEVfQ0FSVFwiLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9KSgpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKHBheW1lbnRNZXRob2QpID0+IHtcclxuICAgIGxldCB1c2VySWQgPSAwO1xyXG4gICAgbGV0IHRva2VuID0gY29va2llLmdldChcIl93dXNfQkpLXCIpO1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgdXNlcklkID0gYXdhaXQgZmV0Y2hVc2VyKHRva2VuKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHt9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0aXNMb2FkaW5nKHRydWUpO1xyXG4gICAgbGV0IGVuY3J5cHRlZERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9jZXNzLmVudi5DQVJUX0NPT0tJRSk7XHJcbiAgICBsZXQgZW5jcnlwdGVkSW5mb0RhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9jZXNzLmVudi5JTkZPX0NPT0tJRSk7XHJcbiAgICBsZXQgY2FydCA9IGRlY3J5cHREYXRhKGVuY3J5cHRlZERhdGEpO1xyXG4gICAgbGV0IHN0YXRlU2NoZW1hID0gZGVjcnlwdEluZm9EYXRhKGVuY3J5cHRlZEluZm9EYXRhKTtcclxuXHJcbiAgICBsZXQgb3JkZXJJdGVtcyA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJ0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBvYmogPSBudWxsO1xyXG4gICAgICBpZiAoaXNDYW1wYWlnbikge1xyXG4gICAgICAgIG9iaiA9IHtcclxuICAgICAgICAgIHByb2R1Y3RJZDogY2FydFtpXS5pZCxcclxuICAgICAgICAgIG5hbWU6IGNhcnRbaV0ubmFtZSxcclxuICAgICAgICAgIHF1YW50aXR5OiBjYXJ0W2ldLnF1YW50aXR5LFxyXG4gICAgICAgICAgaXRlbVByaWNlOiBjYXJ0W2ldLmNhbXBhaWduX3ByaWNlLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgb2JqID0ge1xyXG4gICAgICAgICAgcHJvZHVjdElkOiBjYXJ0W2ldLmlkLFxyXG4gICAgICAgICAgbmFtZTogY2FydFtpXS5uYW1lLFxyXG4gICAgICAgICAgcXVhbnRpdHk6IGNhcnRbaV0ucXVhbnRpdHksXHJcbiAgICAgICAgICBpdGVtUHJpY2U6IGNhcnRbaV0uZGlzY291bnRfcHJpY2UsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgb3JkZXJJdGVtcy5wdXNoKG9iaik7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG9yZGVyID0ge1xyXG4gICAgICBvcmRlckl0ZW1zOiBvcmRlckl0ZW1zLFxyXG4gICAgICB1c2VySWQ6IHVzZXJJZCxcclxuICAgICAgc2hpcHBpbmdGaXJzdE5hbWU6IHN0YXRlU2NoZW1hLnNoaXBwaW5nX2ZpcnN0TmFtZS52YWx1ZSxcclxuICAgICAgc2hpcHBpbmdMYXN0TmFtZTogc3RhdGVTY2hlbWEuc2hpcHBpbmdfbGFzdE5hbWUudmFsdWUsXHJcbiAgICAgIHNoaXBwaW5nUGhvbmU6IHN0YXRlU2NoZW1hLnNoaXBwaW5nX3Bob25lLnZhbHVlLFxyXG4gICAgICBzaGlwcGluZ0FkZHJlc3M6IHN0YXRlU2NoZW1hLnNoaXBwaW5nX2FkZHJlc3MudmFsdWUsXHJcbiAgICAgIHNoaXBwaW5nQ2l0eTogc3RhdGVTY2hlbWEuc2hpcHBpbmdfY2l0eS52YWx1ZSxcclxuICAgICAgc2hpcHBpbmdQcm92aW5jZTogXCJNZXRybyBNYW5pbGFcIixcclxuICAgICAgc2hpcHBpbmdaaXA6IHN0YXRlU2NoZW1hLnNoaXBwaW5nX3ppcC52YWx1ZSxcclxuICAgICAgZGVsaXZlcnlJbnN0cnVjdGlvbnM6IHN0YXRlU2NoZW1hLm5vdGUudmFsdWUsXHJcbiAgICAgIG1lc3NhZ2U6IHN0YXRlU2NoZW1hLm1lc3NhZ2UudmFsdWUsXHJcbiAgICAgIGJpbGxpbmdGaXJzdE5hbWU6IHN0YXRlU2NoZW1hLmJpbGxpbmdfZmlyc3ROYW1lLnZhbHVlLFxyXG4gICAgICBiaWxsaW5nTGFzdE5hbWU6IHN0YXRlU2NoZW1hLmJpbGxpbmdfbGFzdE5hbWUudmFsdWUsXHJcbiAgICAgIGJpbGxpbmdQaG9uZTogc3RhdGVTY2hlbWEuYmlsbGluZ19waG9uZS52YWx1ZSxcclxuICAgICAgYmlsbGluZ0VtYWlsOiBzdGF0ZVNjaGVtYS5iaWxsaW5nX2VtYWlsLnZhbHVlLFxyXG4gICAgICBkZWxpdmVyeURhdGU6IHN0YXRlU2NoZW1hLmRlbGl2ZXJ5X2RhdGUudmFsdWUsXHJcbiAgICAgIGRlbGl2ZXJ5VGltZTogc3RhdGVTY2hlbWEuZGVsaXZlcnlfdGltZS52YWx1ZSxcclxuICAgICAgcGF5bWVudE1ldGhvZDogcGF5bWVudE1ldGhvZCxcclxuICAgICAgaXNDYW1wYWlnbjogaXNDYW1wYWlnbixcclxuICAgIH07XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHtob3N0fS9hcGkvdXNlci9vcmRlcmAsIG9yZGVyKTtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIGxldCBlbmNyeXB0ZWREYXRhID0gZW5jcnlwdFN0cmluZyhyZXMuZGF0YS5vcmRlcl9uYW1lKTtcclxuXHJcbiAgICAgICAgLy8gcmV0dXJuIGNvbnNvbGUubG9nKGVuY3J5cHRlZERhdGEsIGVuY3J5cHRlZERhdGEpO1xyXG5cclxuICAgICAgICBsZXQgc2VuZEVtYWlsUmVzID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICAgIGAke2hvc3R9L2FwaS91c2VyL29yZGVyL3NlbmRFbWFpbGAsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJpbGxpbmdFbWFpbDogb3JkZXIuYmlsbGluZ0VtYWlsLFxyXG4gICAgICAgICAgICBiaWxsaW5nRmlyc3ROYW1lOiBvcmRlci5iaWxsaW5nRmlyc3ROYW1lLFxyXG4gICAgICAgICAgICBvcmRlck5hbWU6IHJlcy5kYXRhLm9yZGVyX25hbWUsXHJcbiAgICAgICAgICAgIGNyeXB0b1N0cjogZW5jcnlwdGVkRGF0YSxcclxuICAgICAgICAgICAgb3JkZXJJdGVtczogb3JkZXJJdGVtcyxcclxuICAgICAgICAgICAgcGF5bWVudE1ldGhvZDogcGF5bWVudE1ldGhvZCxcclxuICAgICAgICAgICAgZGVsaXZlcnlEYXRlOiBmb3JtYXREYXRlKHN0YXRlU2NoZW1hLmRlbGl2ZXJ5X2RhdGUudmFsdWUpLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmIChzZW5kRW1haWxSZXMpIHtcclxuICAgICAgICAgIGNsZWFyRGF0YSgpO1xyXG4gICAgICAgICAgUm91dGVyLnB1c2goYC90aGFua3lvdS8ke2VuY3J5cHRlZERhdGF9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgc2V0aXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YVswXS5tZXNzYWdlKTtcclxuICAgICAgaWYgKGVyci5yZXNwb25zZSkge1xyXG4gICAgICAgIGlmIChlcnIucmVzcG9uc2UuZGF0YSkge1xyXG4gICAgICAgICAgaWYgKGVyci5yZXNwb25zZS5kYXRhWzBdKSB7XHJcbiAgICAgICAgICAgIGlmIChlcnIucmVzcG9uc2UuZGF0YVswXS51cGRhdGVkT3JkZXJJdGVtcykge1xyXG4gICAgICAgICAgICAgIGhhbmRsZUNoYW5nZVByaWNlKGVyci5yZXNwb25zZS5kYXRhWzBdLnVwZGF0ZWRPcmRlckl0ZW1zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdG9hc3QuZXJyb3IoZXJyLnJlc3BvbnNlLmRhdGFbMF0ubWVzc2FnZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0LmVycm9yKFwiU29tZXRoaW5nIHdlbnQgd3JvbmcsIFBsZWFzZSB0cnkgYWdhaW4gb3IgY29udGFjdCB1cy5cIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwdC00MFwiPlxyXG4gICAgICA8VG9hc3RDb250YWluZXIgdHJhbnNpdGlvbj17U2xpZGV9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIwcHhcIiwgbWFyZ2luUmlnaHQ6IFwiMHB4XCIgfX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNSBjb2wtbWQtNVwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICA8aDU+VXNlciBEZXRhaWxzPC9oNT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NoZWNrb3V0XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtbC1hdXRvIGJ0biBidG4tbGluayB0ZXh0LWRhbmdlclwiPkVkaXQ8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFNoaXBwaW5nU3VtbWFyeSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICA8aDU+T3JkZXIgRGV0YWlsczwvaDU+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jYXJ0XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtbC1hdXRvIGJ0biBidG4tbGluayB0ZXh0LWRhbmdlclwiPkVkaXQ8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPE9yZGVyU3VtbWFyeSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNyBjb2wtbWQtN1wiPlxyXG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+U2VsZWN0IFBheW1lbnQgTWV0aG9kPC9oNT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXItZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGF5bWVudC1tZXRob2RcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiAwLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMC41cmVtXCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCIwLjVyZW1cIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZGlyZWN0LWJhbmstdHJhbnNmZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpby1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBoYW5kbGVDaGFuZ2UoXCJiYW5rXCIpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRpcmVjdC1iYW5rLXRyYW5zZmVyXCI+Q3JlZGl0IENhcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRQYXltZW50ID09IFwiYmFua1wiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL2xvZ29zL2JhbmtzMi5qcGdcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTUwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENyZWRpdENhcmQgYW1vdW50PXt0b3RhbH0gaGFuZGxlU3VibWl0PXtoYW5kbGVTdWJtaXR9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImNhc2gtb24tZGVsaXZlcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpby1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBoYW5kbGVDaGFuZ2UoXCJjb2RcIil9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2FzaC1vbi1kZWxpdmVyeVwiPkNhc2ggb24gRGVsaXZlcnk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRQYXltZW50ID09IFwiY29kXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvbG9nb3MvY29kLmpwZ1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IHBhZGRpbmdUb3A6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBXaGVuIHVzaW5nIG91ciBDYXNoIG9uIERlbGl2ZXJ5IHNlcnZpY2UsIHBheW1lbnQgaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2l2ZW4gdG8gb3VyIGRlbGl2ZXJ5IHJpZGVyIHVwb24gcmVjZWlwdCBvZiBpdGVtLlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7IWlzTG9hZGluZyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVN1Ym1pdChcIkNPRFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWxpZ2h0IG1iLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlybSBPcmRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGRzLXJpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImdjYXNoXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW8tYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gaGFuZGxlQ2hhbmdlKFwiZ2Nhc2hcIil9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImdjYXNoXCI+R0Nhc2g8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRQYXltZW50ID09IFwiZ2Nhc2hcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9sb2dvcy9nY2FzaC5wbmdcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNzBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8R2Nhc2ggYW1vdW50PXt0b3RhbH0gaGFuZGxlU3VibWl0PXtoYW5kbGVTdWJtaXR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZ3JhYnBheVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IGhhbmRsZUNoYW5nZShcImdyYWJwYXlcIil9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZ3JhYnBheVwiPkdyYWJQYXk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRQYXltZW50ID09IFwiZ3JhYnBheVwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL2xvZ29zL2djYXNoLnBuZ1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI3MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxHcmFiUGF5IGFtb3VudD17dG90YWx9IGhhbmRsZVN1Ym1pdD17aGFuZGxlU3VibWl0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBheW1lbnRNZXRob2RzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
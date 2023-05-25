webpackHotUpdate("static\\development\\pages\\payment.js",{

/***/ "./components/payments/Grabpay.js":
/*!****************************************!*\
  !*** ./components/payments/Grabpay.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer, module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\corde\\Desktop\\New folder\\bikeshop\\bikeshop_frontend\\components\\payments\\Grabpay.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var GrabPay = function GrabPay(_ref) {
  _s();

  var amount = _ref.amount,
      description = _ref.description,
      handleSubmit = _ref.handleSubmit;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      phone = _useState2[0],
      setPhone = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      email = _useState3[0],
      setEmail = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      payProcess = _useState4[0],
      setPayProcess = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      paymentStatus = _useState5[0],
      setPaymentStatus = _useState5[1];

  var publicKey = "pk_test_rYuhCZfpeDpXriEtHF5Tjdn3"; // Function to Create A Source

  var createSource = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var options;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setPaymentStatus("Creating Source");
              options = {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  Authorization: "Basic ".concat(Buffer.from(publicKey).toString("base64"))
                },
                body: JSON.stringify({
                  data: {
                    attributes: {
                      amount: amount * 100,
                      redirect: {
                        success: "http://localhost:3000/payment",
                        failed: "http://localhost:3000/payment"
                      },
                      billing: {
                        name: "".concat(name),
                        phone: "".concat(phone),
                        email: "".concat(email)
                      },
                      type: "grab_pay",
                      currency: "PHP"
                    }
                  }
                })
              };
              return _context.abrupt("return", fetch("https://api.paymongo.com/v1/sources", options).then(function (response) {
                return response.json();
              }).then(function (response) {
                return response;
              })["catch"](function (err) {
                return console.error(err);
              }));

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function createSource() {
      return _ref2.apply(this, arguments);
    };
  }(); // Function to Listen to the Source in the Front End


  var listenToPayment = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(sourceId) {
      var i, _i, sourceData;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              i = 5;
              _i = 5;

            case 2:
              if (!(_i > 0)) {
                _context2.next = 14;
                break;
              }

              setPaymentStatus("Listening to Payment in ".concat(_i));
              _context2.next = 6;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 1000);
              });

            case 6:
              if (!(_i == 1)) {
                _context2.next = 11;
                break;
              }

              _context2.next = 9;
              return fetch("https://api.paymongo.com/v1/sources/" + sourceId, {
                headers: {
                  // Base64 encoded public PayMongo API key.
                  Authorization: "Basic ".concat(Buffer.from(publicKey).toString("base64"))
                }
              }).then(function (response) {
                return response.json();
              }).then(function (response) {
                console.log(response.data);
                return response.data;
              });

            case 9:
              sourceData = _context2.sent;

              if (sourceData.attributes.status === "failed") {
                react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].success("Payment Failed, Please try again.");
                setPaymentStatus("failed");
              } else if (sourceData.attributes.status === "paid") {
                react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].success("Payment Succesfully");
                setPaymentStatus("Payment Success");
              } else if (sourceData.attributes.status === "expired") {
                react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].error("Payment has expire, Please try again");
                setPaymentStatus("expired");
              } else {
                _i = 5;
                setPayProcess(sourceData.attributes.status);
              }

            case 11:
              _i--;
              _context2.next = 2;
              break;

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function listenToPayment(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (paymentStatus) {
      if (paymentStatus == "Payment Success") {
        handleSubmit("GrabPay");
      }
    }

    if (payProcess) {
      if (payProcess == "expired") {
        react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].error("Payment has expire, Please try again.");
      } else if (payProcess == "chargeable") {
        handleSubmit("GrabPay");
      }
    }
  }, [paymentStatus, payProcess]);

  var onSubmit = /*#__PURE__*/function () {
    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(event) {
      var source;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              event.preventDefault();
              _context3.next = 3;
              return createSource();

            case 3:
              source = _context3.sent;
              window.open(source.data.attributes.redirect.checkout_url, "_blank");
              listenToPayment(source.data.id);

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function onSubmit(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();

  return __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 5
    }
  }, __jsx("form", {
    action: "#",
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, "Billing Information"), __jsx("div", {
    id: "form-card",
    className: styles.formField,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "customer-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, "Customer Name:"), __jsx("input", {
    id: "customer-name",
    placeholder: "Juan Dela Cruz",
    className: styles.input,
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  })), __jsx("div", {
    id: "form-card",
    className: styles.formField,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "phone",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 11
    }
  }, "Phone Number:"), __jsx("input", {
    id: "phone",
    placeholder: "09xxxxxxxxx",
    className: styles.input,
    value: phone,
    onChange: function onChange(e) {
      return setPhone(e.target.value);
    },
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  })), __jsx("div", {
    id: "form-card",
    className: styles.formField,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 11
    }
  }, "email:"), __jsx("input", {
    id: "email",
    placeholder: "user@domain.com",
    className: styles.input,
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 11
    }
  })), __jsx("button", {
    type: "submit",
    className: styles.payButton,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 9
    }
  }, "Pay"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 9
    }
  }, paymentStatus), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 9
    }
  }, payProcess)));
};

_s(GrabPay, "aBWeEg8I7H8Pbf7Kro3pjTt6pEw=");

_c = GrabPay;
/* harmony default export */ __webpack_exports__["default"] = (GrabPay);

var _c;

$RefreshReg$(_c, "GrabPay");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/buffer/index.js */ "./node_modules/buffer/index.js").Buffer, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

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
    id: "paymaya",
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

/***/ }),

/***/ "./images/logos/paymaya.jpg":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BheW1lbnRzL0dyYWJwYXkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYXltZW50cy9QYXltZW50TWV0aG9kcy5qcyJdLCJuYW1lcyI6WyJHcmFiUGF5IiwiYW1vdW50IiwiZGVzY3JpcHRpb24iLCJoYW5kbGVTdWJtaXQiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwicGhvbmUiLCJzZXRQaG9uZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXlQcm9jZXNzIiwic2V0UGF5UHJvY2VzcyIsInBheW1lbnRTdGF0dXMiLCJzZXRQYXltZW50U3RhdHVzIiwicHVibGljS2V5IiwicHJvY2VzcyIsImNyZWF0ZVNvdXJjZSIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiQXV0aG9yaXphdGlvbiIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImF0dHJpYnV0ZXMiLCJyZWRpcmVjdCIsInN1Y2Nlc3MiLCJmYWlsZWQiLCJiaWxsaW5nIiwidHlwZSIsImN1cnJlbmN5IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwibGlzdGVuVG9QYXltZW50Iiwic291cmNlSWQiLCJpIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwibG9nIiwic291cmNlRGF0YSIsInN0YXR1cyIsInRvYXN0IiwidXNlRWZmZWN0Iiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic291cmNlIiwid2luZG93Iiwib3BlbiIsImNoZWNrb3V0X3VybCIsImlkIiwic3R5bGVzIiwiZm9ybUZpZWxkIiwiaW5wdXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJwYXlCdXR0b24iLCJob3N0IiwiUGF5bWVudE1ldGhvZHMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwic2VsZWN0ZWRQYXltZW50Iiwic2V0c2VsZWN0ZWRQYXltZW50IiwiaXNDYW1wYWlnbiIsInNldGlzQ2FtcGFpZ24iLCJpc0xvYWRpbmciLCJzZXRpc0xvYWRpbmciLCJpc0NvZE9uIiwic2V0aXNDb2RPbiIsInRvdGFsIiwic2V0VG90YWwiLCJlbmNyeXB0ZWRJbmZvRGF0YSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzdGF0ZVNjaGVtYSIsImRlY3J5cHRJbmZvRGF0YSIsInNoaXBwaW5nX2NpdHkiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwic2hpcHBpbmdfYWRkcmVzcyIsInBhcnNlSW50Iiwic2hpcHBpbmdfemlwIiwiZGVjcnlwdGVkRGF0YSIsImRlbGl2ZXJ5X2RhdGUiLCJlbmNyeXB0ZWREYXRhIiwiY2FydCIsImRlY3J5cHREYXRhIiwibGVuZ3RoIiwiZGlzY291bnRfcHJpY2UiLCJxdWFudGl0eSIsImhhbmRsZUNoYW5nZSIsImZldGNoVXNlciIsInRva2VuIiwiYXhpb3MiLCJnZXQiLCJyZXMiLCJ1c2VyRGV0YWlscyIsInJlbW92ZUl0ZW0iLCJwcm9wcyIsImhpc3RvcnkiLCJwdXNoIiwiaGFuZGxlQ2hhbmdlUHJpY2UiLCJwcm9kdWN0cyIsImNhcnRTdG9yYWdlIiwiY2FydEFycmF5IiwiZWwiLCJpbmRleCIsImZpbmRJbmRleCIsIml0ZW0iLCJwcm9kdWN0SWQiLCJjYW1wYWlnbl9wcmljZSIsImVuY3J5cHREYXRhIiwic2V0SXRlbSIsInBheW1lbnRNZXRob2QiLCJ1c2VySWQiLCJjb29raWUiLCJvcmRlckl0ZW1zIiwib2JqIiwiaXRlbVByaWNlIiwib3JkZXIiLCJzaGlwcGluZ0ZpcnN0TmFtZSIsInNoaXBwaW5nX2ZpcnN0TmFtZSIsInNoaXBwaW5nTGFzdE5hbWUiLCJzaGlwcGluZ19sYXN0TmFtZSIsInNoaXBwaW5nUGhvbmUiLCJzaGlwcGluZ19waG9uZSIsInNoaXBwaW5nQWRkcmVzcyIsInNoaXBwaW5nQ2l0eSIsInNoaXBwaW5nUHJvdmluY2UiLCJzaGlwcGluZ1ppcCIsImRlbGl2ZXJ5SW5zdHJ1Y3Rpb25zIiwibm90ZSIsIm1lc3NhZ2UiLCJiaWxsaW5nRmlyc3ROYW1lIiwiYmlsbGluZ19maXJzdE5hbWUiLCJiaWxsaW5nTGFzdE5hbWUiLCJiaWxsaW5nX2xhc3ROYW1lIiwiYmlsbGluZ1Bob25lIiwiYmlsbGluZ19waG9uZSIsImJpbGxpbmdFbWFpbCIsImJpbGxpbmdfZW1haWwiLCJkZWxpdmVyeURhdGUiLCJkZWxpdmVyeVRpbWUiLCJkZWxpdmVyeV90aW1lIiwicG9zdCIsImVuY3J5cHRTdHJpbmciLCJvcmRlcl9uYW1lIiwib3JkZXJOYW1lIiwiY3J5cHRvU3RyIiwiZm9ybWF0RGF0ZSIsInNlbmRFbWFpbFJlcyIsImNsZWFyRGF0YSIsIlJvdXRlciIsInVwZGF0ZWRPcmRlckl0ZW1zIiwiU2xpZGUiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJwYWRkaW5nVG9wIiwibWFyZ2luVG9wIiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQTJDO0FBQUE7O0FBQUEsTUFBeENDLE1BQXdDLFFBQXhDQSxNQUF3QztBQUFBLE1BQWhDQyxXQUFnQyxRQUFoQ0EsV0FBZ0M7QUFBQSxNQUFuQkMsWUFBbUIsUUFBbkJBLFlBQW1COztBQUFBLGtCQUNqQ0Msc0RBQVEsQ0FBQyxFQUFELENBRHlCO0FBQUEsTUFDbERDLElBRGtEO0FBQUEsTUFDNUNDLE9BRDRDOztBQUFBLG1CQUUvQkYsc0RBQVEsQ0FBQyxFQUFELENBRnVCO0FBQUEsTUFFbERHLEtBRmtEO0FBQUEsTUFFM0NDLFFBRjJDOztBQUFBLG1CQUcvQkosc0RBQVEsQ0FBQyxFQUFELENBSHVCO0FBQUEsTUFHbERLLEtBSGtEO0FBQUEsTUFHM0NDLFFBSDJDOztBQUFBLG1CQUtyQk4sc0RBQVEsQ0FBQyxFQUFELENBTGE7QUFBQSxNQUtsRE8sVUFMa0Q7QUFBQSxNQUt0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O0FBSUUsWUFBUSxFQUFFO0FBQUEsYUFBTW9HLFlBQVksQ0FBQyxTQUFELENBQWxCO0FBQUEsS0FKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFPRTtBQUFPLFdBQU8sRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRixFQVFHN0IsZUFBZSxJQUFJLFNBQW5CLEdBQ0MsbUVBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFDRSxPQUFHLEVBQUVrRyxtQkFBTyxDQUFDLDhEQUFELENBRGQ7QUFFRSxPQUFHLEVBQUMsT0FGTjtBQUdFLFVBQU0sRUFBQyxJQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixFQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQVNFLE1BQUMsaURBQUQ7QUFBUyxVQUFNLEVBQUUxRixLQUFqQjtBQUF3QixnQkFBWSxFQUFFL0UsWUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLEVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLENBREQsR0FhRyxJQXJCTixDQURGLENBeEdGLENBREYsQ0FGRixDQXRCRixDQUZGLENBREY7QUFtS0Q7O0dBNVdRb0UsYztVQUNVRSx3RDs7O0tBRFZGLGM7QUE4V01BLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwYXltZW50LmpzLmMyZjNiMWQzOWQwOTMyYzhmODYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5cclxuY29uc3QgR3JhYlBheSA9ICh7IGFtb3VudCwgZGVzY3JpcHRpb24sIGhhbmRsZVN1Ym1pdCB9KSA9PiB7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bob25lLCBzZXRQaG9uZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBbcGF5UHJvY2Vzcywgc2V0UGF5UHJvY2Vzc10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGF5bWVudFN0YXR1cywgc2V0UGF5bWVudFN0YXR1c10gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgcHVibGljS2V5ID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUEFZTU9OR09fUFVCTElDO1xyXG5cclxuICAvLyBGdW5jdGlvbiB0byBDcmVhdGUgQSBTb3VyY2VcclxuICBjb25zdCBjcmVhdGVTb3VyY2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRQYXltZW50U3RhdHVzKFwiQ3JlYXRpbmcgU291cmNlXCIpO1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJhc2ljICR7QnVmZmVyLmZyb20ocHVibGljS2V5KS50b1N0cmluZyhcImJhc2U2NFwiKX1gLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgICAgICBhbW91bnQ6IGFtb3VudCAqIDEwMCxcclxuICAgICAgICAgICAgcmVkaXJlY3Q6IHtcclxuICAgICAgICAgICAgICBzdWNjZXNzOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9wYXltZW50XCIsXHJcbiAgICAgICAgICAgICAgZmFpbGVkOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9wYXltZW50XCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJpbGxpbmc6IHsgbmFtZTogYCR7bmFtZX1gLCBwaG9uZTogYCR7cGhvbmV9YCwgZW1haWw6IGAke2VtYWlsfWAgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJncmFiX3BheVwiLFxyXG4gICAgICAgICAgICBjdXJyZW5jeTogXCJQSFBcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZldGNoKFwiaHR0cHM6Ly9hcGkucGF5bW9uZ28uY29tL3YxL3NvdXJjZXNcIiwgb3B0aW9ucylcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gRnVuY3Rpb24gdG8gTGlzdGVuIHRvIHRoZSBTb3VyY2UgaW4gdGhlIEZyb250IEVuZFxyXG4gIGNvbnN0IGxpc3RlblRvUGF5bWVudCA9IGFzeW5jIChzb3VyY2VJZCkgPT4ge1xyXG4gICAgbGV0IGkgPSA1O1xyXG4gICAgZm9yIChsZXQgaSA9IDU7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgc2V0UGF5bWVudFN0YXR1cyhgTGlzdGVuaW5nIHRvIFBheW1lbnQgaW4gJHtpfWApO1xyXG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDAwKSk7XHJcblxyXG4gICAgICBpZiAoaSA9PSAxKSB7XHJcbiAgICAgICAgY29uc3Qgc291cmNlRGF0YSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgICAgXCJodHRwczovL2FwaS5wYXltb25nby5jb20vdjEvc291cmNlcy9cIiArIHNvdXJjZUlkLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgLy8gQmFzZTY0IGVuY29kZWQgcHVibGljIFBheU1vbmdvIEFQSSBrZXkuXHJcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJhc2ljICR7QnVmZmVyLmZyb20ocHVibGljS2V5KS50b1N0cmluZyhcclxuICAgICAgICAgICAgICAgIFwiYmFzZTY0XCJcclxuICAgICAgICAgICAgICApfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoc291cmNlRGF0YS5hdHRyaWJ1dGVzLnN0YXR1cyA9PT0gXCJmYWlsZWRcIikge1xyXG4gICAgICAgICAgdG9hc3Quc3VjY2VzcyhcIlBheW1lbnQgRmFpbGVkLCBQbGVhc2UgdHJ5IGFnYWluLlwiKTtcclxuICAgICAgICAgIHNldFBheW1lbnRTdGF0dXMoXCJmYWlsZWRcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzb3VyY2VEYXRhLmF0dHJpYnV0ZXMuc3RhdHVzID09PSBcInBhaWRcIikge1xyXG4gICAgICAgICAgdG9hc3Quc3VjY2VzcyhcIlBheW1lbnQgU3VjY2VzZnVsbHlcIik7XHJcbiAgICAgICAgICBzZXRQYXltZW50U3RhdHVzKFwiUGF5bWVudCBTdWNjZXNzXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc291cmNlRGF0YS5hdHRyaWJ1dGVzLnN0YXR1cyA9PT0gXCJleHBpcmVkXCIpIHtcclxuICAgICAgICAgIHRvYXN0LmVycm9yKFwiUGF5bWVudCBoYXMgZXhwaXJlLCBQbGVhc2UgdHJ5IGFnYWluXCIpO1xyXG4gICAgICAgICAgc2V0UGF5bWVudFN0YXR1cyhcImV4cGlyZWRcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGkgPSA1O1xyXG4gICAgICAgICAgc2V0UGF5UHJvY2Vzcyhzb3VyY2VEYXRhLmF0dHJpYnV0ZXMuc3RhdHVzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHBheW1lbnRTdGF0dXMpIHtcclxuICAgICAgaWYgKHBheW1lbnRTdGF0dXMgPT0gXCJQYXltZW50IFN1Y2Nlc3NcIikge1xyXG4gICAgICAgIGhhbmRsZVN1Ym1pdChcIkdyYWJQYXlcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAocGF5UHJvY2Vzcykge1xyXG4gICAgICBpZiAocGF5UHJvY2VzcyA9PSBcImV4cGlyZWRcIikge1xyXG4gICAgICAgIHRvYXN0LmVycm9yKFwiUGF5bWVudCBoYXMgZXhwaXJlLCBQbGVhc2UgdHJ5IGFnYWluLlwiKTtcclxuICAgICAgfSBlbHNlIGlmIChwYXlQcm9jZXNzID09IFwiY2hhcmdlYWJsZVwiKSB7XHJcbiAgICAgICAgaGFuZGxlU3VibWl0KFwiR3JhYlBheVwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtwYXltZW50U3RhdHVzLCBwYXlQcm9jZXNzXSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3Qgc291cmNlID0gYXdhaXQgY3JlYXRlU291cmNlKCk7XHJcbiAgICB3aW5kb3cub3Blbihzb3VyY2UuZGF0YS5hdHRyaWJ1dGVzLnJlZGlyZWN0LmNoZWNrb3V0X3VybCwgXCJfYmxhbmtcIik7XHJcbiAgICBsaXN0ZW5Ub1BheW1lbnQoc291cmNlLmRhdGEuaWQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgPGgyPkJpbGxpbmcgSW5mb3JtYXRpb248L2gyPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJmb3JtLWNhcmRcIiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtRmllbGR9PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjdXN0b21lci1uYW1lXCI+Q3VzdG9tZXIgTmFtZTo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGlkPVwiY3VzdG9tZXItbmFtZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSnVhbiBEZWxhIENydXpcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cclxuICAgICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJmb3JtLWNhcmRcIiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtRmllbGR9PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZVwiPlBob25lIE51bWJlcjo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGlkPVwicGhvbmVcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjA5eHh4eHh4eHh4XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICAgIHZhbHVlPXtwaG9uZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQaG9uZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJmb3JtLWNhcmRcIiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtRmllbGR9PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPmVtYWlsOjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidXNlckBkb21haW4uY29tXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17c3R5bGVzLnBheUJ1dHRvbn0+XHJcbiAgICAgICAgICBQYXlcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8cD57cGF5bWVudFN0YXR1c308L3A+XHJcbiAgICAgICAgPHA+e3BheVByb2Nlc3N9PC9wPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyYWJQYXk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBPcmRlclN1bW1hcnkgZnJvbSBcIi4uL2NoZWNrb3V0L09yZGVyU3VtbWFyeVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBTaGlwcGluZ1N1bW1hcnkgZnJvbSBcIi4uL2NoZWNrb3V0L1NoaXBwaW5nU3VtbWFyeVwiO1xyXG5pbXBvcnQge1xyXG4gIGRlY3J5cHREYXRhLFxyXG4gIGNsZWFyRGF0YSxcclxuICBlbmNyeXB0RGF0YSxcclxufSBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9jYXJ0QWN0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG4gIGRlY3J5cHRJbmZvRGF0YSxcclxuICBlbmNyeXB0U3RyaW5nLFxyXG59IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2luZm9BY3Rpb25zXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFBheXBhbCBmcm9tIFwiLi9QYXlwYWxcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9mdW5jdGlvblwiO1xyXG5pbXBvcnQgeyBTbGlkZSwgdG9hc3QsIFRvYXN0Q29udGFpbmVyIH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBDcmVkaXRDYXJkIGZyb20gXCIuL0NyZWRpdENhcmRcIjtcclxuaW1wb3J0IEdjYXNoIGZyb20gXCIuL0djYXNoXCI7XHJcbmltcG9ydCBHcmFiUGF5IGZyb20gXCIuL0dyYWJwYXlcIjtcclxuXHJcbmxldCBob3N0ID0gcHJvY2Vzcy5lbnYuQVBJX1VSTDtcclxuXHJcbmZ1bmN0aW9uIFBheW1lbnRNZXRob2RzKCkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBbc2VsZWN0ZWRQYXltZW50LCBzZXRzZWxlY3RlZFBheW1lbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2lzQ2FtcGFpZ24sIHNldGlzQ2FtcGFpZ25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldGlzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzQ29kT24sIHNldGlzQ29kT25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt0b3RhbCwgc2V0VG90YWxdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgZW5jcnlwdGVkSW5mb0RhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9jZXNzLmVudi5JTkZPX0NPT0tJRSk7XHJcbiAgICBsZXQgc3RhdGVTY2hlbWEgPSBkZWNyeXB0SW5mb0RhdGEoZW5jcnlwdGVkSW5mb0RhdGEpO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgc3RhdGVTY2hlbWEuc2hpcHBpbmdfY2l0eS52YWx1ZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwibWFrYXRpXCIpIHx8XHJcbiAgICAgIHN0YXRlU2NoZW1hLnNoaXBwaW5nX2FkZHJlc3MudmFsdWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcIm1ha2F0aVwiKSB8fFxyXG4gICAgICBbXHJcbiAgICAgICAgMTIyNiwgMTIzMywgMTIwOSwgMTIxNCwgMTIxNywgMTIyMSwgMTIyMiwgMTIxOSwgMTIyMCwgMTIwMiwgMTIwMSwgMTIyOCxcclxuICAgICAgICAxMjEyLCAxMjExLCAxMjA2LCAxMjA0LCAxMjI5LCAxMjMyLCAxMjI0LCAxMjAwLCAxMjA3LCAxMjM1LCAxMjMxLCAxMjE4LFxyXG4gICAgICAgIDEyMTMsIDEyMzAsIDEyMTAsIDEyMTYsIDEyMTUsIDEyMjcsIDEyMDMsIDEyMzQsIDEyMjMsIDEyMDUsIDEyMjUsIDEyMDgsXHJcbiAgICAgIF0uaW5jbHVkZXMocGFyc2VJbnQoc3RhdGVTY2hlbWEuc2hpcHBpbmdfemlwLnZhbHVlKSlcclxuICAgICkge1xyXG4gICAgICBzZXRpc0NvZE9uKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBkZWNyeXB0ZWREYXRhID0gZGVjcnlwdEluZm9EYXRhKCk7XHJcblxyXG4gICAgaWYgKGRlY3J5cHRlZERhdGEpIHtcclxuICAgICAgaWYgKGRlY3J5cHRlZERhdGEuZGVsaXZlcnlfZGF0ZS52YWx1ZSA9PSBcIjIwMjMtMDItMTRcIikge1xyXG4gICAgICAgIHNldGlzQ2FtcGFpZ24odHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHRvYXN0LmVycm9yKGVyci5yZXNwb25zZS5kYXRhWzBdLm1lc3NhZ2UpO1xyXG4gICAgLy8gY29uc29sZS5sb2coLCBcIkhFWVlZWVwiKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgZW5jcnlwdGVkRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2Nlc3MuZW52LkNBUlRfQ09PS0lFKTtcclxuICAgIGxldCBjYXJ0ID0gZGVjcnlwdERhdGEoZW5jcnlwdGVkRGF0YSk7XHJcblxyXG4gICAgbGV0IGFtb3VudCA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcnQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgYW1vdW50ID0gYW1vdW50ICsgY2FydFtpXS5kaXNjb3VudF9wcmljZSAqIGNhcnRbaV0ucXVhbnRpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VG90YWwoYW1vdW50IDwgMTAwID8gMTAwIDogYW1vdW50KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgc2V0c2VsZWN0ZWRQYXltZW50KHZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAodG9rZW4pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7aG9zdH0vYXBpL3VzZXIvdXNlci9kZXRhaWxzYCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAocmVzLmRhdGEudXNlckRldGFpbHMpIHtcclxuICAgICAgICByZXR1cm4gcmVzLmRhdGEudXNlckRldGFpbHNbXCJpZFwiXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlblwiKTtcclxuICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvbG9naW5cIik7XHJcbiAgICAgIHRvYXN0LmVycm9yKFwiWW91ciB0b2tlbiBpcyBpbnZhbGlkIG9yIGV4cGlyZWQuXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVByaWNlID0gKHByb2R1Y3RzKSA9PiB7XHJcbiAgICBsZXQgY2FydFN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9jZXNzLmVudi5DQVJUX0NPT0tJRSk7XHJcbiAgICBsZXQgY2FydEFycmF5ID0gZGVjcnlwdERhdGEoY2FydFN0b3JhZ2UpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvZHVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgZWwgPSBwcm9kdWN0c1tpXTtcclxuXHJcbiAgICAgIHZhciBpbmRleCA9IGNhcnRBcnJheS5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGVsLnByb2R1Y3RJZCk7XHJcblxyXG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgIGNhcnRBcnJheVtpbmRleF1bXCJjYW1wYWlnbl9wcmljZVwiXSA9IGVsLmNhbXBhaWduX3ByaWNlO1xyXG4gICAgICAgIGNhcnRBcnJheVtpbmRleF1bXCJkaXNjb3VudF9wcmljZVwiXSA9IGVsLmRpc2NvdW50X3ByaWNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgZW5jcnlwdGVkRGF0YSA9IGVuY3J5cHREYXRhKEpTT04uc3RyaW5naWZ5KGNhcnRBcnJheSkpO1xyXG5cclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvY2Vzcy5lbnYuQ0FSVF9DT09LSUUsIGVuY3J5cHRlZERhdGEpO1xyXG5cclxuICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgKCgpID0+IHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiVVBEQVRFX0NBUlRcIixcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSkoKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChwYXltZW50TWV0aG9kKSA9PiB7XHJcbiAgICBsZXQgdXNlcklkID0gMDtcclxuICAgIGxldCB0b2tlbiA9IGNvb2tpZS5nZXQoXCJfd3VzX0JKS1wiKTtcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHVzZXJJZCA9IGF3YWl0IGZldGNoVXNlcih0b2tlbik7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxyXG4gICAgfVxyXG5cclxuICAgIHNldGlzTG9hZGluZyh0cnVlKTtcclxuICAgIGxldCBlbmNyeXB0ZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvY2Vzcy5lbnYuQ0FSVF9DT09LSUUpO1xyXG4gICAgbGV0IGVuY3J5cHRlZEluZm9EYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvY2Vzcy5lbnYuSU5GT19DT09LSUUpO1xyXG4gICAgbGV0IGNhcnQgPSBkZWNyeXB0RGF0YShlbmNyeXB0ZWREYXRhKTtcclxuICAgIGxldCBzdGF0ZVNjaGVtYSA9IGRlY3J5cHRJbmZvRGF0YShlbmNyeXB0ZWRJbmZvRGF0YSk7XHJcblxyXG4gICAgbGV0IG9yZGVySXRlbXMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FydC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgb2JqID0gbnVsbDtcclxuICAgICAgaWYgKGlzQ2FtcGFpZ24pIHtcclxuICAgICAgICBvYmogPSB7XHJcbiAgICAgICAgICBwcm9kdWN0SWQ6IGNhcnRbaV0uaWQsXHJcbiAgICAgICAgICBuYW1lOiBjYXJ0W2ldLm5hbWUsXHJcbiAgICAgICAgICBxdWFudGl0eTogY2FydFtpXS5xdWFudGl0eSxcclxuICAgICAgICAgIGl0ZW1QcmljZTogY2FydFtpXS5jYW1wYWlnbl9wcmljZSxcclxuICAgICAgICB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG9iaiA9IHtcclxuICAgICAgICAgIHByb2R1Y3RJZDogY2FydFtpXS5pZCxcclxuICAgICAgICAgIG5hbWU6IGNhcnRbaV0ubmFtZSxcclxuICAgICAgICAgIHF1YW50aXR5OiBjYXJ0W2ldLnF1YW50aXR5LFxyXG4gICAgICAgICAgaXRlbVByaWNlOiBjYXJ0W2ldLmRpc2NvdW50X3ByaWNlLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG9yZGVySXRlbXMucHVzaChvYmopO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBvcmRlciA9IHtcclxuICAgICAgb3JkZXJJdGVtczogb3JkZXJJdGVtcyxcclxuICAgICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICAgIHNoaXBwaW5nRmlyc3ROYW1lOiBzdGF0ZVNjaGVtYS5zaGlwcGluZ19maXJzdE5hbWUudmFsdWUsXHJcbiAgICAgIHNoaXBwaW5nTGFzdE5hbWU6IHN0YXRlU2NoZW1hLnNoaXBwaW5nX2xhc3ROYW1lLnZhbHVlLFxyXG4gICAgICBzaGlwcGluZ1Bob25lOiBzdGF0ZVNjaGVtYS5zaGlwcGluZ19waG9uZS52YWx1ZSxcclxuICAgICAgc2hpcHBpbmdBZGRyZXNzOiBzdGF0ZVNjaGVtYS5zaGlwcGluZ19hZGRyZXNzLnZhbHVlLFxyXG4gICAgICBzaGlwcGluZ0NpdHk6IHN0YXRlU2NoZW1hLnNoaXBwaW5nX2NpdHkudmFsdWUsXHJcbiAgICAgIHNoaXBwaW5nUHJvdmluY2U6IFwiTWV0cm8gTWFuaWxhXCIsXHJcbiAgICAgIHNoaXBwaW5nWmlwOiBzdGF0ZVNjaGVtYS5zaGlwcGluZ196aXAudmFsdWUsXHJcbiAgICAgIGRlbGl2ZXJ5SW5zdHJ1Y3Rpb25zOiBzdGF0ZVNjaGVtYS5ub3RlLnZhbHVlLFxyXG4gICAgICBtZXNzYWdlOiBzdGF0ZVNjaGVtYS5tZXNzYWdlLnZhbHVlLFxyXG4gICAgICBiaWxsaW5nRmlyc3ROYW1lOiBzdGF0ZVNjaGVtYS5iaWxsaW5nX2ZpcnN0TmFtZS52YWx1ZSxcclxuICAgICAgYmlsbGluZ0xhc3ROYW1lOiBzdGF0ZVNjaGVtYS5iaWxsaW5nX2xhc3ROYW1lLnZhbHVlLFxyXG4gICAgICBiaWxsaW5nUGhvbmU6IHN0YXRlU2NoZW1hLmJpbGxpbmdfcGhvbmUudmFsdWUsXHJcbiAgICAgIGJpbGxpbmdFbWFpbDogc3RhdGVTY2hlbWEuYmlsbGluZ19lbWFpbC52YWx1ZSxcclxuICAgICAgZGVsaXZlcnlEYXRlOiBzdGF0ZVNjaGVtYS5kZWxpdmVyeV9kYXRlLnZhbHVlLFxyXG4gICAgICBkZWxpdmVyeVRpbWU6IHN0YXRlU2NoZW1hLmRlbGl2ZXJ5X3RpbWUudmFsdWUsXHJcbiAgICAgIHBheW1lbnRNZXRob2Q6IHBheW1lbnRNZXRob2QsXHJcbiAgICAgIGlzQ2FtcGFpZ246IGlzQ2FtcGFpZ24sXHJcbiAgICB9O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7aG9zdH0vYXBpL3VzZXIvb3JkZXJgLCBvcmRlcik7XHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICBsZXQgZW5jcnlwdGVkRGF0YSA9IGVuY3J5cHRTdHJpbmcocmVzLmRhdGEub3JkZXJfbmFtZSk7XHJcblxyXG4gICAgICAgIC8vIHJldHVybiBjb25zb2xlLmxvZyhlbmNyeXB0ZWREYXRhLCBlbmNyeXB0ZWREYXRhKTtcclxuXHJcbiAgICAgICAgbGV0IHNlbmRFbWFpbFJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgICBgJHtob3N0fS9hcGkvdXNlci9vcmRlci9zZW5kRW1haWxgLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBiaWxsaW5nRW1haWw6IG9yZGVyLmJpbGxpbmdFbWFpbCxcclxuICAgICAgICAgICAgYmlsbGluZ0ZpcnN0TmFtZTogb3JkZXIuYmlsbGluZ0ZpcnN0TmFtZSxcclxuICAgICAgICAgICAgb3JkZXJOYW1lOiByZXMuZGF0YS5vcmRlcl9uYW1lLFxyXG4gICAgICAgICAgICBjcnlwdG9TdHI6IGVuY3J5cHRlZERhdGEsXHJcbiAgICAgICAgICAgIG9yZGVySXRlbXM6IG9yZGVySXRlbXMsXHJcbiAgICAgICAgICAgIHBheW1lbnRNZXRob2Q6IHBheW1lbnRNZXRob2QsXHJcbiAgICAgICAgICAgIGRlbGl2ZXJ5RGF0ZTogZm9ybWF0RGF0ZShzdGF0ZVNjaGVtYS5kZWxpdmVyeV9kYXRlLnZhbHVlKSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZiAoc2VuZEVtYWlsUmVzKSB7XHJcbiAgICAgICAgICBjbGVhckRhdGEoKTtcclxuICAgICAgICAgIFJvdXRlci5wdXNoKGAvdGhhbmt5b3UvJHtlbmNyeXB0ZWREYXRhfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHNldGlzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhKTtcclxuICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGFbMF0ubWVzc2FnZSk7XHJcbiAgICAgIGlmIChlcnIucmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAoZXJyLnJlc3BvbnNlLmRhdGEpIHtcclxuICAgICAgICAgIGlmIChlcnIucmVzcG9uc2UuZGF0YVswXSkge1xyXG4gICAgICAgICAgICBpZiAoZXJyLnJlc3BvbnNlLmRhdGFbMF0udXBkYXRlZE9yZGVySXRlbXMpIHtcclxuICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2VQcmljZShlcnIucmVzcG9uc2UuZGF0YVswXS51cGRhdGVkT3JkZXJJdGVtcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRvYXN0LmVycm9yKGVyci5yZXNwb25zZS5kYXRhWzBdLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0b2FzdC5lcnJvcihcIlNvbWV0aGluZyB3ZW50IHdyb25nLCBQbGVhc2UgdHJ5IGFnYWluIG9yIGNvbnRhY3QgdXMuXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNDBcIj5cclxuICAgICAgPFRvYXN0Q29udGFpbmVyIHRyYW5zaXRpb249e1NsaWRlfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMHB4XCIsIG1hcmdpblJpZ2h0OiBcIjBweFwiIH19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTUgY29sLW1kLTVcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgPGg1PlVzZXIgRGV0YWlsczwvaDU+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jaGVja291dFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibWwtYXV0byBidG4gYnRuLWxpbmsgdGV4dC1kYW5nZXJcIj5FZGl0PC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxTaGlwcGluZ1N1bW1hcnkgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgPGg1Pk9yZGVyIERldGFpbHM8L2g1PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2FydFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibWwtYXV0byBidG4gYnRuLWxpbmsgdGV4dC1kYW5nZXJcIj5FZGl0PC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxPcmRlclN1bW1hcnkgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTcgY29sLW1kLTdcIj5cclxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlNlbGVjdCBQYXltZW50IE1ldGhvZDwvaDU+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBheW1lbnQtbWV0aG9kXCJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogMCxcclxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjAuNXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMC41cmVtXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImRpcmVjdC1iYW5rLXRyYW5zZmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW8tYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gaGFuZGxlQ2hhbmdlKFwiYmFua1wiKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkaXJlY3QtYmFuay10cmFuc2ZlclwiPkNyZWRpdCBDYXJkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAge3NlbGVjdGVkUGF5bWVudCA9PSBcImJhbmtcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9sb2dvcy9iYW5rczIuanBnXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE1MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDcmVkaXRDYXJkIGFtb3VudD17dG90YWx9IGhhbmRsZVN1Ym1pdD17aGFuZGxlU3VibWl0fSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjYXNoLW9uLWRlbGl2ZXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW8tYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gaGFuZGxlQ2hhbmdlKFwiY29kXCIpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNhc2gtb24tZGVsaXZlcnlcIj5DYXNoIG9uIERlbGl2ZXJ5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAge3NlbGVjdGVkUGF5bWVudCA9PSBcImNvZFwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL2xvZ29zL2NvZC5qcGdcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBwYWRkaW5nVG9wOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgV2hlbiB1c2luZyBvdXIgQ2FzaCBvbiBEZWxpdmVyeSBzZXJ2aWNlLCBwYXltZW50IGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdpdmVuIHRvIG91ciBkZWxpdmVyeSByaWRlciB1cG9uIHJlY2VpcHQgb2YgaXRlbS5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgeyFpc0xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdWJtaXQoXCJDT0RcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saWdodCBtYi0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpcm0gT3JkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxkcy1yaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJnY2FzaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IGhhbmRsZUNoYW5nZShcImdjYXNoXCIpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJnY2FzaFwiPkdDYXNoPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAge3NlbGVjdGVkUGF5bWVudCA9PSBcImdjYXNoXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvbG9nb3MvZ2Nhc2gucG5nXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjcwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEdjYXNoIGFtb3VudD17dG90YWx9IGhhbmRsZVN1Ym1pdD17aGFuZGxlU3VibWl0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInBheW1heWFcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpby1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBoYW5kbGVDaGFuZ2UoXCJncmFicGF5XCIpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImdyYWJwYXlcIj5HcmFiUGF5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAge3NlbGVjdGVkUGF5bWVudCA9PSBcImdyYWJwYXlcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9sb2dvcy9nY2FzaC5wbmdcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNzBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8R3JhYlBheSBhbW91bnQ9e3RvdGFsfSBoYW5kbGVTdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXltZW50TWV0aG9kcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
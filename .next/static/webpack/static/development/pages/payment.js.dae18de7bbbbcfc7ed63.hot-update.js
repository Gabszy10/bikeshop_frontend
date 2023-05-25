webpackHotUpdate("static\\development\\pages\\payment.js",{

/***/ "./components/payments/CreditCard.js":
/*!*******************************************!*\
  !*** ./components/payments/CreditCard.js ***!
  \*******************************************/
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
    _jsxFileName = "C:\\Users\\corde\\Desktop\\New folder\\bikeshop\\bikeshop_frontend\\components\\payments\\CreditCard.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var CreditCard = function CreditCard(_ref) {
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
      cardHolder = _useState4[0],
      setCardHolder = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      number = _useState5[0],
      setNumber = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      month = _useState6[0],
      setMonth = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      year = _useState7[0],
      setYear = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      code = _useState8[0],
      setCode = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      paymentStatus = _useState9[0],
      setPaymentStatus = _useState9[1]; // Function to Listen to the Payment in the Front End


  var listenToPayment = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(fullClient) {
      var paymentIntentId, i, _i, paymentIntentData;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              paymentIntentId = fullClient.split("_client")[0];
              i = 5;
              _i = 5;

            case 3:
              if (!(_i > 0)) {
                _context.next = 15;
                break;
              }

              setPaymentStatus("Listening to Payment in ".concat(_i));
              _context.next = 7;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 1000);
              });

            case 7:
              if (!(_i == 1)) {
                _context.next = 12;
                break;
              }

              _context.next = 10;
              return fetch("https://api.paymongo.com/v1/payment_intents/" + paymentIntentId + "?client_key=" + fullClient, {
                headers: {
                  // Base64 encoded public PayMongo API key.
                  Authorization: "Basic ".concat(Buffer.from("pk_test_rYuhCZfpeDpXriEtHF5Tjdn3").toString("base64"))
                }
              }).then(function (response) {
                return response.json();
              }).then(function (response) {
                console.log(response.data);
                return response.data;
              });

            case 10:
              paymentIntentData = _context.sent;

              if (paymentIntentData.attributes.last_payment_error) {
                setPaymentStatus(JSON.stringify(paymentIntentData.attributes.last_payment_error));
              } else if (paymentIntentData.attributes.status === "succeeded") {
                setPaymentStatus("Payment Success");
              } else {
                _i = 5;
              }

            case 12:
              _i--;
              _context.next = 3;
              break;

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function listenToPayment(_x) {
      return _ref2.apply(this, arguments);
    };
  }(); // Function to Create a Payment Intent by calling the site's api


  var createPaymentIntent = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var paymentIntent;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setPaymentStatus("Creating Payment Intent");
              _context2.next = 3;
              return fetch("/api/createPaymentIntent", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  data: {
                    attributes: {
                      amount: amount * 100,
                      payment_method_allowed: ["card"],
                      payment_method_options: {
                        card: {
                          request_three_d_secure: "any"
                        }
                      },
                      currency: "PHP",
                      description: description,
                      statement_descriptor: "descriptor business name"
                    }
                  }
                })
              }).then(function (response) {
                return response.json();
              }).then(function (response) {
                return response.body.data;
              });

            case 3:
              paymentIntent = _context2.sent;
              return _context2.abrupt("return", paymentIntent);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function createPaymentIntent() {
      return _ref3.apply(this, arguments);
    };
  }(); // Function to Create a Payment Method by calling the PayMongo API


  var createPaymentMethod = /*#__PURE__*/function () {
    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var paymentMethod;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              setPaymentStatus("Creating Payment Method");
              paymentMethod = fetch("https://api.paymongo.com/v1/payment_methods", {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  Authorization: "Basic ".concat(Buffer.from("pk_test_rYuhCZfpeDpXriEtHF5Tjdn3").toString("base64"))
                },
                body: JSON.stringify({
                  data: {
                    attributes: {
                      details: {
                        card_number: "".concat(number),
                        //"4343434343434345",
                        exp_month: parseInt("".concat(month)),
                        //2
                        exp_year: parseInt("".concat(year)),
                        //22
                        cvc: "".concat(code) //"123",

                      },
                      billing: {
                        name: "".concat(name),
                        email: "".concat(email),
                        phone: "".concat(phone)
                      },
                      type: "card"
                    }
                  }
                })
              }).then(function (response) {
                return response.json();
              }).then(function (response) {
                if (response.data) {
                  console.log(response);
                  return response.data;
                } else if (response.errors) {
                  react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].error(response.errors[0].detail);
                }
              })["catch"](function (err) {
                console.log(err);
                setPaymentStatus(err);
                return err;
              });
              return _context3.abrupt("return", paymentMethod);

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function createPaymentMethod() {
      return _ref4.apply(this, arguments);
    };
  }(); // Function to Attach a Payment Method to the Intent by calling the PayMongo API


  var attachIntentMethod = /*#__PURE__*/function () {
    var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(intent, method) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              setPaymentStatus("Attaching Intent to Method");
              fetch("https://api.paymongo.com/v1/payment_intents/".concat(intent.id, "/attach"), {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  Authorization: "Basic ".concat(Buffer.from("pk_test_rYuhCZfpeDpXriEtHF5Tjdn3").toString("base64"))
                },
                body: JSON.stringify({
                  data: {
                    attributes: {
                      payment_method: "".concat(method.id),
                      client_key: "".concat(intent.attributes.client_key)
                    }
                  }
                })
              }).then(function (response) {
                return response.json();
              }).then(function (response) {
                if (response.data) {
                  var paymentIntent = response.data;
                  var paymentIntentStatus = paymentIntent.attributes.status;

                  if (paymentIntentStatus === "awaiting_next_action") {
                    // Render your modal for 3D Secure Authentication since next_action has a value. You can access the next action via paymentIntent.attributes.next_action.
                    setPaymentStatus(paymentIntentStatus);
                    window.open(paymentIntent.attributes.next_action.redirect.url, "_blank");
                    listenToPayment(paymentIntent.attributes.client_key);
                  } else {
                    setPaymentStatus(paymentIntentStatus);
                  }
                } else if (response.errors) {
                  react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].error(response.errors[0].detail);
                }
              })["catch"](function (err) {
                console.log(JSON.stringify(err));
                setPaymentStatus(JSON.stringify(err));
              });

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function attachIntentMethod(_x2, _x3) {
      return _ref5.apply(this, arguments);
    };
  }();

  var onSubmit = /*#__PURE__*/function () {
    var _ref6 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(event) {
      var paymentIntent, paymentMethod;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              event.preventDefault();
              _context5.next = 4;
              return createPaymentIntent();

            case 4:
              paymentIntent = _context5.sent;
              _context5.next = 7;
              return createPaymentMethod();

            case 7:
              paymentMethod = _context5.sent;
              _context5.next = 10;
              return attachIntentMethod(paymentIntent, paymentMethod);

            case 10:
              _context5.next = 15;
              break;

            case 12:
              _context5.prev = 12;
              _context5.t0 = _context5["catch"](0);
              react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].error("Something went wrong, Please try again.");

            case 15:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 12]]);
    }));

    return function onSubmit(_x4) {
      return _ref6.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (paymentStatus) {
      if (paymentStatus == "succeeded") {
        handleSubmit("Credit Card");
      }
    }
  }, [paymentStatus]);
  return __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 5
    }
  }, __jsx("form", {
    action: "#",
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 7
    }
  }, __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 9
    }
  }, "Billing Information"), __jsx("div", {
    id: "form-card",
    className: "formField",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "customer-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 11
    }
  }, "Customer Name:"), __jsx("input", {
    id: "customer-name",
    placeholder: "Juan Dela Cruz",
    name: "name",
    className: "input",
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 11
    }
  })), __jsx("div", {
    id: "form-card",
    className: "formField",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "phone",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 11
    }
  }, "Phone Number:"), __jsx("input", {
    id: "phone",
    placeholder: "09xxxxxxxxx",
    name: "phone",
    className: "input",
    value: phone,
    onChange: function onChange(e) {
      return setPhone(e.target.value);
    },
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 11
    }
  })), __jsx("div", {
    id: "form-card",
    className: "formField",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 11
    }
  }, "email:"), __jsx("input", {
    id: "email",
    name: "email",
    placeholder: "user@domain.com",
    className: "input",
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 11
    }
  })), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 9
    }
  }, "Payment Details"), __jsx("div", {
    id: "form-card",
    className: "formField",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "cc-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 11
    }
  }, "Card Holder:"), __jsx("input", {
    id: "cc-name",
    name: "cc-name",
    placeholder: "Juan Dela Cruz",
    className: "input",
    value: cardHolder,
    onChange: function onChange(e) {
      return setCardHolder(e.target.value);
    },
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 11
    }
  })), __jsx("div", {
    id: "form-card",
    className: "formField",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "cc-number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 11
    }
  }, "Card number:"), __jsx("input", {
    id: "cc-number",
    name: "cc-number",
    maxLength: "19",
    placeholder: "1111 2222 3333 4444",
    className: "input",
    value: number,
    onChange: function onChange(e) {
      return setNumber(e.target.value);
    },
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 11
    }
  })), __jsx("div", {
    id: "form-date",
    className: "formField",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "expiry-month",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 11
    }
  }, "Expiry date:"), __jsx("div", {
    className: "dateVal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 11
    }
  }, __jsx("select", {
    id: "expiry-month",
    name: "expiry-month",
    className: "select",
    value: month,
    onChange: function onChange(e) {
      return setMonth(e.target.value);
    },
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 13
    }
  }, __jsx("option", {
    id: "trans-label_month",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 15
    }
  }, "Month"), __jsx("option", {
    value: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 15
    }
  }, "01"), __jsx("option", {
    value: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 15
    }
  }, "02"), __jsx("option", {
    value: "3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 15
    }
  }, "03"), __jsx("option", {
    value: "4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 15
    }
  }, "04"), __jsx("option", {
    value: "5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 15
    }
  }, "05"), __jsx("option", {
    value: "6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 15
    }
  }, "06"), __jsx("option", {
    value: "7",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 15
    }
  }, "07"), __jsx("option", {
    value: "8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 15
    }
  }, "08"), __jsx("option", {
    value: "9",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 15
    }
  }, "09"), __jsx("option", {
    value: "10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 15
    }
  }, "10"), __jsx("option", {
    value: "11",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 15
    }
  }, "11"), __jsx("option", {
    value: "12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 15
    }
  }, "12")), __jsx("select", {
    id: "expiry-year",
    name: "expiry-year",
    className: "select",
    value: year,
    onChange: function onChange(e) {
      return setYear(e.target.value);
    },
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 13
    }
  }, __jsx("option", {
    id: "trans-label_year",
    value: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 15
    }
  }, "Year"), __jsx("option", {
    value: "2021",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 15
    }
  }, "21"), __jsx("option", {
    value: "2022",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 15
    }
  }, "22"), __jsx("option", {
    value: "2023",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 15
    }
  }, "23"), __jsx("option", {
    value: "2024",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 15
    }
  }, "24"), __jsx("option", {
    value: "2025",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 15
    }
  }, "25"), __jsx("option", {
    value: "2026",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 15
    }
  }, "26"), __jsx("option", {
    value: "2027",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 15
    }
  }, "27"), __jsx("option", {
    value: "2028",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 15
    }
  }, "28"), __jsx("option", {
    value: "2029",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 15
    }
  }, "29"), __jsx("option", {
    value: "2030",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 15
    }
  }, "30"), __jsx("option", {
    value: "2031",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 15
    }
  }, "31"), __jsx("option", {
    value: "2032",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 15
    }
  }, "32"), __jsx("option", {
    value: "2033",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 15
    }
  }, "33"), __jsx("option", {
    value: "2034",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 15
    }
  }, "34"), __jsx("option", {
    value: "2035",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 15
    }
  }, "35"), __jsx("option", {
    value: "2036",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 15
    }
  }, "36"), __jsx("option", {
    value: "2037",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 15
    }
  }, "37"), __jsx("option", {
    value: "2038",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 15
    }
  }, "38"), __jsx("option", {
    value: "2039",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 15
    }
  }, "39"), __jsx("option", {
    value: "2040",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 15
    }
  }, "40"), __jsx("option", {
    value: "2041",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 15
    }
  }, "41"), __jsx("option", {
    value: "2042",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 15
    }
  }, "42"), __jsx("option", {
    value: "2043",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 15
    }
  }, "43"), __jsx("option", {
    value: "2044",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 15
    }
  }, "44"), __jsx("option", {
    value: "2045",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 15
    }
  }, "45"), __jsx("option", {
    value: "2046",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 15
    }
  }, "46"), __jsx("option", {
    value: "2047",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 15
    }
  }, "47")))), __jsx("div", {
    id: "form-sec-code",
    className: "formField",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "sec-code",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 11
    }
  }, "Security code:"), __jsx("input", {
    name: "sec-code",
    type: "password",
    maxLength: "3",
    placeholder: "123",
    className: "input",
    value: code,
    onChange: function onChange(e) {
      return setCode(e.target.value);
    },
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 11
    }
  })), __jsx("button", {
    type: "submit",
    className: "payButton",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 9
    }
  }, "Pay")));
};

_s(CreditCard, "UOkCnseccp91yC3L3UO8PfRnrtk=");

_c = CreditCard;
/* harmony default export */ __webpack_exports__["default"] = (CreditCard);

var _c;

$RefreshReg$(_c, "CreditCard");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BheW1lbnRzL0NyZWRpdENhcmQuanMiXSwibmFtZXMiOlsiQ3JlZGl0Q2FyZCIsImFtb3VudCIsImRlc2NyaXB0aW9uIiwiaGFuZGxlU3VibWl0IiwidXNlU3RhdGUiLCJuYW1lIiwic2V0TmFtZSIsInBob25lIiwic2V0UGhvbmUiLCJlbWFpbCIsInNldEVtYWlsIiwiY2FyZEhvbGRlciIsInNldENhcmRIb2xkZXIiLCJudW1iZXIiLCJzZXROdW1iZXIiLCJtb250aCIsInNldE1vbnRoIiwieWVhciIsInNldFllYXIiLCJjb2RlIiwic2V0Q29kZSIsInBheW1lbnRTdGF0dXMiLCJzZXRQYXltZW50U3RhdHVzIiwibGlzdGVuVG9QYXltZW50IiwiZnVsbENsaWVudCIsInBheW1lbnRJbnRlbnRJZCIsInNwbGl0IiwiaSIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImZldGNoIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJCdWZmZXIiLCJmcm9tIiwicHJvY2VzcyIsInRvU3RyaW5nIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwicGF5bWVudEludGVudERhdGEiLCJhdHRyaWJ1dGVzIiwibGFzdF9wYXltZW50X2Vycm9yIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXR1cyIsImNyZWF0ZVBheW1lbnRJbnRlbnQiLCJtZXRob2QiLCJib2R5IiwicGF5bWVudF9tZXRob2RfYWxsb3dlZCIsInBheW1lbnRfbWV0aG9kX29wdGlvbnMiLCJjYXJkIiwicmVxdWVzdF90aHJlZV9kX3NlY3VyZSIsImN1cnJlbmN5Iiwic3RhdGVtZW50X2Rlc2NyaXB0b3IiLCJwYXltZW50SW50ZW50IiwiY3JlYXRlUGF5bWVudE1ldGhvZCIsInBheW1lbnRNZXRob2QiLCJBY2NlcHQiLCJkZXRhaWxzIiwiY2FyZF9udW1iZXIiLCJleHBfbW9udGgiLCJwYXJzZUludCIsImV4cF95ZWFyIiwiY3ZjIiwiYmlsbGluZyIsInR5cGUiLCJlcnJvcnMiLCJ0b2FzdCIsImVycm9yIiwiZGV0YWlsIiwiZXJyIiwiYXR0YWNoSW50ZW50TWV0aG9kIiwiaW50ZW50IiwiaWQiLCJwYXltZW50X21ldGhvZCIsImNsaWVudF9rZXkiLCJwYXltZW50SW50ZW50U3RhdHVzIiwid2luZG93Iiwib3BlbiIsIm5leHRfYWN0aW9uIiwicmVkaXJlY3QiLCJ1cmwiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ1c2VFZmZlY3QiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBMkM7QUFBQTs7QUFBQSxNQUF4Q0MsTUFBd0MsUUFBeENBLE1BQXdDO0FBQUEsTUFBaENDLFdBQWdDLFFBQWhDQSxXQUFnQztBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7O0FBQUEsa0JBQ3BDQyxzREFBUSxDQUFDLEVBQUQsQ0FENEI7QUFBQSxNQUNyREMsSUFEcUQ7QUFBQSxNQUMvQ0MsT0FEK0M7O0FBQUEsbUJBRWxDRixzREFBUSxDQUFDLEVBQUQsQ0FGMEI7QUFBQSxNQUVyREcsS0FGcUQ7QUFBQSxNQUU5Q0MsUUFGOEM7O0FBQUEsbUJBR2xDSixzREFBUSxDQUFDLEVBQUQsQ0FIMEI7QUFBQSxNQUdyREssS0FIcUQ7QUFBQSxNQUc5Q0MsUUFIOEM7O0FBQUEsbUJBS3hCTixzREFBUSxDQUFDLEVBQUQsQ0FMZ0I7QUFBQSxNQUtyRE8sVUFMcUQ7QUFBQSxNQUt6Q0MsYUFMeUM7O0FBQUEsbUJBTWhDUixzREFBUSxDQUFDLEVBQUQsQ0FOd0I7QUFBQSxNQU1yRFMsTUFOcUQ7QUFBQSxNQU03Q0MsU0FONkM7O0FBQUEsbUJBT2xDVixzREFBUSxDQUFDLEVBQUQsQ0FQMEI7QUFBQSxNQU9yRFcsS0FQcUQ7QUFBQSxNQU85Q0MsUUFQOEM7O0FB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LE1BQUYsQ0FBU0MsS0FBVixDQUFkO0FBQUEsS0FQWjtBQVFFLFlBQVEsTUFSVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FwSUYsRUFrSkU7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFTLEVBQUUsV0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQWxKRixDQURGLENBREY7QUEySkQsQ0ExV0Q7O0dBQU03RixVOztLQUFBQSxVO0FBNFdTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccGF5bWVudC5qcy5kYWUxOGRlN2JiYmJjZmM3ZWQ2My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5cclxuY29uc3QgQ3JlZGl0Q2FyZCA9ICh7IGFtb3VudCwgZGVzY3JpcHRpb24sIGhhbmRsZVN1Ym1pdCB9KSA9PiB7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bob25lLCBzZXRQaG9uZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBbY2FyZEhvbGRlciwgc2V0Q2FyZEhvbGRlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbnVtYmVyLCBzZXROdW1iZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW21vbnRoLCBzZXRNb250aF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbeWVhciwgc2V0WWVhcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29kZSwgc2V0Q29kZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgW3BheW1lbnRTdGF0dXMsIHNldFBheW1lbnRTdGF0dXNdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIC8vIEZ1bmN0aW9uIHRvIExpc3RlbiB0byB0aGUgUGF5bWVudCBpbiB0aGUgRnJvbnQgRW5kXHJcbiAgY29uc3QgbGlzdGVuVG9QYXltZW50ID0gYXN5bmMgKGZ1bGxDbGllbnQpID0+IHtcclxuICAgIGNvbnN0IHBheW1lbnRJbnRlbnRJZCA9IGZ1bGxDbGllbnQuc3BsaXQoXCJfY2xpZW50XCIpWzBdO1xyXG4gICAgbGV0IGkgPSA1O1xyXG4gICAgZm9yIChsZXQgaSA9IDU7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgc2V0UGF5bWVudFN0YXR1cyhgTGlzdGVuaW5nIHRvIFBheW1lbnQgaW4gJHtpfWApO1xyXG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDAwKSk7XHJcblxyXG4gICAgICBpZiAoaSA9PSAxKSB7XHJcbiAgICAgICAgY29uc3QgcGF5bWVudEludGVudERhdGEgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICAgIFwiaHR0cHM6Ly9hcGkucGF5bW9uZ28uY29tL3YxL3BheW1lbnRfaW50ZW50cy9cIiArXHJcbiAgICAgICAgICAgIHBheW1lbnRJbnRlbnRJZCArXHJcbiAgICAgICAgICAgIFwiP2NsaWVudF9rZXk9XCIgK1xyXG4gICAgICAgICAgICBmdWxsQ2xpZW50LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgLy8gQmFzZTY0IGVuY29kZWQgcHVibGljIFBheU1vbmdvIEFQSSBrZXkuXHJcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJhc2ljICR7QnVmZmVyLmZyb20oXHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19QQVlNT05HT19QVUJMSUNcclxuICAgICAgICAgICAgICApLnRvU3RyaW5nKFwiYmFzZTY0XCIpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAocGF5bWVudEludGVudERhdGEuYXR0cmlidXRlcy5sYXN0X3BheW1lbnRfZXJyb3IpIHtcclxuICAgICAgICAgIHNldFBheW1lbnRTdGF0dXMoXHJcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHBheW1lbnRJbnRlbnREYXRhLmF0dHJpYnV0ZXMubGFzdF9wYXltZW50X2Vycm9yKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHBheW1lbnRJbnRlbnREYXRhLmF0dHJpYnV0ZXMuc3RhdHVzID09PSBcInN1Y2NlZWRlZFwiKSB7XHJcbiAgICAgICAgICBzZXRQYXltZW50U3RhdHVzKFwiUGF5bWVudCBTdWNjZXNzXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpID0gNTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBGdW5jdGlvbiB0byBDcmVhdGUgYSBQYXltZW50IEludGVudCBieSBjYWxsaW5nIHRoZSBzaXRlJ3MgYXBpXHJcbiAgY29uc3QgY3JlYXRlUGF5bWVudEludGVudCA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldFBheW1lbnRTdGF0dXMoXCJDcmVhdGluZyBQYXltZW50IEludGVudFwiKTtcclxuICAgIGNvbnN0IHBheW1lbnRJbnRlbnQgPSBhd2FpdCBmZXRjaChcIi9hcGkvY3JlYXRlUGF5bWVudEludGVudFwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICAgICAgYW1vdW50OiBhbW91bnQgKiAxMDAsXHJcbiAgICAgICAgICAgIHBheW1lbnRfbWV0aG9kX2FsbG93ZWQ6IFtcImNhcmRcIl0sXHJcbiAgICAgICAgICAgIHBheW1lbnRfbWV0aG9kX29wdGlvbnM6IHtcclxuICAgICAgICAgICAgICBjYXJkOiB7IHJlcXVlc3RfdGhyZWVfZF9zZWN1cmU6IFwiYW55XCIgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY3VycmVuY3k6IFwiUEhQXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgc3RhdGVtZW50X2Rlc2NyaXB0b3I6IFwiZGVzY3JpcHRvciBidXNpbmVzcyBuYW1lXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmJvZHkuZGF0YTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHBheW1lbnRJbnRlbnQ7XHJcbiAgfTtcclxuXHJcbiAgLy8gRnVuY3Rpb24gdG8gQ3JlYXRlIGEgUGF5bWVudCBNZXRob2QgYnkgY2FsbGluZyB0aGUgUGF5TW9uZ28gQVBJXHJcbiAgY29uc3QgY3JlYXRlUGF5bWVudE1ldGhvZCA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldFBheW1lbnRTdGF0dXMoXCJDcmVhdGluZyBQYXltZW50IE1ldGhvZFwiKTtcclxuICAgIGNvbnN0IHBheW1lbnRNZXRob2QgPSBmZXRjaChcImh0dHBzOi8vYXBpLnBheW1vbmdvLmNvbS92MS9wYXltZW50X21ldGhvZHNcIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHtCdWZmZXIuZnJvbShcclxuICAgICAgICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BBWU1PTkdPX1BVQkxJQ1xyXG4gICAgICAgICkudG9TdHJpbmcoXCJiYXNlNjRcIil9YCxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICAgICAgZGV0YWlsczoge1xyXG4gICAgICAgICAgICAgIGNhcmRfbnVtYmVyOiBgJHtudW1iZXJ9YCwgLy9cIjQzNDM0MzQzNDM0MzQzNDVcIixcclxuICAgICAgICAgICAgICBleHBfbW9udGg6IHBhcnNlSW50KGAke21vbnRofWApLCAvLzJcclxuICAgICAgICAgICAgICBleHBfeWVhcjogcGFyc2VJbnQoYCR7eWVhcn1gKSwgLy8yMlxyXG4gICAgICAgICAgICAgIGN2YzogYCR7Y29kZX1gLCAvL1wiMTIzXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJpbGxpbmc6IHtcclxuICAgICAgICAgICAgICBuYW1lOiBgJHtuYW1lfWAsXHJcbiAgICAgICAgICAgICAgZW1haWw6IGAke2VtYWlsfWAsXHJcbiAgICAgICAgICAgICAgcGhvbmU6IGAke3Bob25lfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiY2FyZFwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLmVycm9ycykge1xyXG4gICAgICAgICAgdG9hc3QuZXJyb3IocmVzcG9uc2UuZXJyb3JzWzBdLmRldGFpbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgc2V0UGF5bWVudFN0YXR1cyhlcnIpO1xyXG4gICAgICAgIHJldHVybiBlcnI7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBwYXltZW50TWV0aG9kO1xyXG4gIH07XHJcblxyXG4gIC8vIEZ1bmN0aW9uIHRvIEF0dGFjaCBhIFBheW1lbnQgTWV0aG9kIHRvIHRoZSBJbnRlbnQgYnkgY2FsbGluZyB0aGUgUGF5TW9uZ28gQVBJXHJcbiAgY29uc3QgYXR0YWNoSW50ZW50TWV0aG9kID0gYXN5bmMgKGludGVudCwgbWV0aG9kKSA9PiB7XHJcbiAgICBzZXRQYXltZW50U3RhdHVzKFwiQXR0YWNoaW5nIEludGVudCB0byBNZXRob2RcIik7XHJcbiAgICBmZXRjaChgaHR0cHM6Ly9hcGkucGF5bW9uZ28uY29tL3YxL3BheW1lbnRfaW50ZW50cy8ke2ludGVudC5pZH0vYXR0YWNoYCwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHtCdWZmZXIuZnJvbShcclxuICAgICAgICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BBWU1PTkdPX1BVQkxJQ1xyXG4gICAgICAgICkudG9TdHJpbmcoXCJiYXNlNjRcIil9YCxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICAgICAgcGF5bWVudF9tZXRob2Q6IGAke21ldGhvZC5pZH1gLFxyXG4gICAgICAgICAgICBjbGllbnRfa2V5OiBgJHtpbnRlbnQuYXR0cmlidXRlcy5jbGllbnRfa2V5fWAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhKSB7XHJcbiAgICAgICAgICBjb25zdCBwYXltZW50SW50ZW50ID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgIGNvbnN0IHBheW1lbnRJbnRlbnRTdGF0dXMgPSBwYXltZW50SW50ZW50LmF0dHJpYnV0ZXMuc3RhdHVzO1xyXG4gICAgICAgICAgaWYgKHBheW1lbnRJbnRlbnRTdGF0dXMgPT09IFwiYXdhaXRpbmdfbmV4dF9hY3Rpb25cIikge1xyXG4gICAgICAgICAgICAvLyBSZW5kZXIgeW91ciBtb2RhbCBmb3IgM0QgU2VjdXJlIEF1dGhlbnRpY2F0aW9uIHNpbmNlIG5leHRfYWN0aW9uIGhhcyBhIHZhbHVlLiBZb3UgY2FuIGFjY2VzcyB0aGUgbmV4dCBhY3Rpb24gdmlhIHBheW1lbnRJbnRlbnQuYXR0cmlidXRlcy5uZXh0X2FjdGlvbi5cclxuICAgICAgICAgICAgc2V0UGF5bWVudFN0YXR1cyhwYXltZW50SW50ZW50U3RhdHVzKTtcclxuICAgICAgICAgICAgd2luZG93Lm9wZW4oXHJcbiAgICAgICAgICAgICAgcGF5bWVudEludGVudC5hdHRyaWJ1dGVzLm5leHRfYWN0aW9uLnJlZGlyZWN0LnVybCxcclxuICAgICAgICAgICAgICBcIl9ibGFua1wiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGxpc3RlblRvUGF5bWVudChwYXltZW50SW50ZW50LmF0dHJpYnV0ZXMuY2xpZW50X2tleSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRQYXltZW50U3RhdHVzKHBheW1lbnRJbnRlbnRTdGF0dXMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UuZXJyb3JzKSB7XHJcbiAgICAgICAgICB0b2FzdC5lcnJvcihyZXNwb25zZS5lcnJvcnNbMF0uZGV0YWlsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyKSk7XHJcbiAgICAgICAgc2V0UGF5bWVudFN0YXR1cyhKU09OLnN0cmluZ2lmeShlcnIpKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IHBheW1lbnRJbnRlbnQgPSBhd2FpdCBjcmVhdGVQYXltZW50SW50ZW50KCk7XHJcbiAgICAgIGNvbnN0IHBheW1lbnRNZXRob2QgPSBhd2FpdCBjcmVhdGVQYXltZW50TWV0aG9kKCk7XHJcbiAgICAgIGF3YWl0IGF0dGFjaEludGVudE1ldGhvZChwYXltZW50SW50ZW50LCBwYXltZW50TWV0aG9kKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHRvYXN0LmVycm9yKFwiU29tZXRoaW5nIHdlbnQgd3JvbmcsIFBsZWFzZSB0cnkgYWdhaW4uXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocGF5bWVudFN0YXR1cykge1xyXG4gICAgICBpZiAocGF5bWVudFN0YXR1cyA9PSBcInN1Y2NlZWRlZFwiKSB7XHJcbiAgICAgICAgaGFuZGxlU3VibWl0KFwiQ3JlZGl0IENhcmRcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbcGF5bWVudFN0YXR1c10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24+XHJcbiAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIiBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgIDxoND5CaWxsaW5nIEluZm9ybWF0aW9uPC9oND5cclxuICAgICAgICA8ZGl2IGlkPVwiZm9ybS1jYXJkXCIgY2xhc3NOYW1lPVwiZm9ybUZpZWxkXCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImN1c3RvbWVyLW5hbWVcIj5DdXN0b21lciBOYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgaWQ9XCJjdXN0b21lci1uYW1lXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJKdWFuIERlbGEgQ3J1elwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcImlucHV0XCJ9XHJcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwiZm9ybS1jYXJkXCIgY2xhc3NOYW1lPXtcImZvcm1GaWVsZFwifT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGhvbmVcIj5QaG9uZSBOdW1iZXI6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBpZD1cInBob25lXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwOXh4eHh4eHh4eFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwaG9uZVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XCJpbnB1dFwifVxyXG4gICAgICAgICAgICB2YWx1ZT17cGhvbmV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGhvbmUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwiZm9ybS1jYXJkXCIgY2xhc3NOYW1lPXtcImZvcm1GaWVsZFwifT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5lbWFpbDo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cInVzZXJAZG9tYWluLmNvbVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XCJpbnB1dFwifVxyXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aDQ+UGF5bWVudCBEZXRhaWxzPC9oND5cclxuICAgICAgICA8ZGl2IGlkPVwiZm9ybS1jYXJkXCIgY2xhc3NOYW1lPXtcImZvcm1GaWVsZFwifT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2MtbmFtZVwiPkNhcmQgSG9sZGVyOjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgaWQ9XCJjYy1uYW1lXCJcclxuICAgICAgICAgICAgbmFtZT1cImNjLW5hbWVcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkp1YW4gRGVsYSBDcnV6XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcImlucHV0XCJ9XHJcbiAgICAgICAgICAgIHZhbHVlPXtjYXJkSG9sZGVyfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENhcmRIb2xkZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwiZm9ybS1jYXJkXCIgY2xhc3NOYW1lPXtcImZvcm1GaWVsZFwifT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2MtbnVtYmVyXCI+Q2FyZCBudW1iZXI6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBpZD1cImNjLW51bWJlclwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJjYy1udW1iZXJcIlxyXG4gICAgICAgICAgICBtYXhMZW5ndGg9XCIxOVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMTExMSAyMjIyIDMzMzMgNDQ0NFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XCJpbnB1dFwifVxyXG4gICAgICAgICAgICB2YWx1ZT17bnVtYmVyfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE51bWJlcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGlkPVwiZm9ybS1kYXRlXCIgY2xhc3NOYW1lPXtcImZvcm1GaWVsZFwifT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZXhwaXJ5LW1vbnRoXCI+RXhwaXJ5IGRhdGU6PC9sYWJlbD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImRhdGVWYWxcIn0+XHJcbiAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICBpZD1cImV4cGlyeS1tb250aFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImV4cGlyeS1tb250aFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcInNlbGVjdFwifVxyXG4gICAgICAgICAgICAgIHZhbHVlPXttb250aH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1vbnRoKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiBpZD1cInRyYW5zLWxhYmVsX21vbnRoXCI+TW9udGg8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPjAxPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj4wMjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+MDM8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNFwiPjA0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjVcIj4wNTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2XCI+MDY8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiN1wiPjA3PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjhcIj4wODwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI5XCI+MDk8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTBcIj4xMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMVwiPjExPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEyXCI+MTI8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICBpZD1cImV4cGlyeS15ZWFyXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZXhwaXJ5LXllYXJcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJzZWxlY3RcIn1cclxuICAgICAgICAgICAgICB2YWx1ZT17eWVhcn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFllYXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8b3B0aW9uIGlkPVwidHJhbnMtbGFiZWxfeWVhclwiIHZhbHVlPVwiXCI+XHJcbiAgICAgICAgICAgICAgICBZZWFyXHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwMjFcIj4yMTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMDIyXCI+MjI8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjAyM1wiPjIzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwMjRcIj4yNDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMDI1XCI+MjU8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjAyNlwiPjI2PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwMjdcIj4yNzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMDI4XCI+Mjg8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjAyOVwiPjI5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwMzBcIj4zMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMDMxXCI+MzE8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjAzMlwiPjMyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwMzNcIj4zMzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMDM0XCI+MzQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjAzNVwiPjM1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwMzZcIj4zNjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMDM3XCI+Mzc8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjAzOFwiPjM4PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwMzlcIj4zOTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMDQwXCI+NDA8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjA0MVwiPjQxPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwNDJcIj40Mjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMDQzXCI+NDM8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjA0NFwiPjQ0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwNDVcIj40NTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMDQ2XCI+NDY8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjA0N1wiPjQ3PC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgaWQ9XCJmb3JtLXNlYy1jb2RlXCIgY2xhc3NOYW1lPXtcImZvcm1GaWVsZFwifT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VjLWNvZGVcIj5TZWN1cml0eSBjb2RlOjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgbmFtZT1cInNlYy1jb2RlXCJcclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgbWF4TGVuZ3RoPVwiM1wiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMTIzXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcImlucHV0XCJ9XHJcbiAgICAgICAgICAgIHZhbHVlPXtjb2RlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENvZGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtcInBheUJ1dHRvblwifT5cclxuICAgICAgICAgIFBheVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIHsvKiA8cD57cGF5bWVudFN0YXR1c308L3A+ICovfVxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyZWRpdENhcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
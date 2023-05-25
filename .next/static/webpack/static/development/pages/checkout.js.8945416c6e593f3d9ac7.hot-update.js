webpackHotUpdate("static\\development\\pages\\checkout.js",{

/***/ "./components/checkout/CheckoutForm.js":
/*!*********************************************!*\
  !*** ./components/checkout/CheckoutForm.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _OrderSummary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OrderSummary */ "./components/checkout/OrderSummary.js");
/* harmony import */ var _payments_Payment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../payments/Payment */ "./components/payments/Payment.js");
/* harmony import */ var _userForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./userForm */ "./components/checkout/userForm.js");
/* harmony import */ var _calendar_Calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../calendar/Calendar */ "./components/calendar/Calendar.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var _store_actions_infoActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../store/actions/infoActions */ "./store/actions/infoActions.js");
/* harmony import */ var _helpers_function__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../helpers/function */ "./helpers/function.js");
/* harmony import */ var _store_actions_cartActions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../store/actions/cartActions */ "./store/actions/cartActions.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_15__);




var _jsxFileName = "C:\\Users\\corde\\Desktop\\New folder\\bikeshop\\bikeshop_frontend\\components\\checkout\\CheckoutForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }















function CheckoutForm(_ref) {
  _s();

  var total = _ref.total,
      shipping = _ref.shipping;
  var host = "http://127.0.0.1:8080";

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var cart, order, res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log("Form submitted.");
              cart = JSON.parse(localStorage.getItem("_bik_EKL"));
              console.log(state, cart);
              order = {
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
                paymentMethod: "COD"
              };
              _context.prev = 4;
              _context.next = 7;
              return axios__WEBPACK_IMPORTED_MODULE_10___default.a.post("".concat(host, "/api/user/order"), order);

            case 7:
              res = _context.sent;

              if (res) {
                Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_14__["clearData"])();
                window.location.href = "/thankyou";
                console.log(res, "RES");
              }

              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](4);
              console.log(_context.t0.response);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 11]]);
    }));

    return function handleSubmit() {
      return _ref2.apply(this, arguments);
    };
  }();

  var totalAmount = (total + shipping).toFixed(2);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    shipping_firstName: {
      value: "dwdwd",
      error: ""
    },
    shipping_lastName: {
      value: "",
      error: ""
    },
    shipping_address: {
      value: "",
      error: ""
    },
    shipping_city: {
      value: "",
      error: ""
    },
    shipping_zip: {
      value: "",
      error: ""
    },
    billing_email: {
      value: "",
      error: ""
    },
    shipping_phone: {
      value: "",
      error: ""
    },
    billing_firstName: {
      value: "",
      error: ""
    },
    billing_lastName: {
      value: "",
      error: ""
    },
    billing_phone: {
      value: "",
      error: ""
    },
    note: {
      value: "",
      error: ""
    },
    message: {
      value: "",
      error: ""
    },
    delivery_date: {
      value: "",
      error: ""
    },
    delivery_time: {
      value: "",
      error: ""
    }
  }),
      stateSchema = _useState[0],
      setstateSchema = _useState[1];

  var handleStateChange = function handleStateChange(e) {
    setstateSchema(_objectSpread(_objectSpread({}, stateSchema), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, {
      value: e.target.value,
      error: ""
    })));
  };

  var handleToast = function handleToast(message) {
    react_toastify__WEBPACK_IMPORTED_MODULE_11__["toast"].error(message, {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  };

  var isValid = function isValid() {
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

  var validationStateSchema = {
    shipping_firstName: {
      required: true,
      validator: {
        regEx: /^[a-zA-Z]+$/,
        error: "Invalid first name format"
      }
    },
    delivery_date: {
      required: true
    },
    delivery_time: {
      required: true
    },
    shipping_lastName: {
      required: true,
      validator: {
        regEx: /^[a-zA-Z]+$/,
        error: "Invalid last name format."
      }
    },
    shipping_address: {
      required: true,
      validator: {
        error: "Invalid address format."
      }
    },
    shipping_city: {
      required: true,
      validator: {
        error: "Invalid last name format."
      }
    },
    shipping_zip: {
      required: true,
      validator: {
        regEx: /^\d{4}$|^\d{4}-\d{4}$/,
        error: "Invalid zip format, use like 1234."
      }
    },
    billing_email: {
      required: true,
      validator: {
        regEx: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        error: "Invalid email format, use like example@gmail.com"
      }
    },
    shipping_phone: {
      required: true,
      validator: {
        regEx: /^(09|\+639)\d{9}$/,
        error: "Invalid phone number format use like 09343243243."
      }
    },
    billing_firstName: {
      required: true,
      validator: {
        regEx: /^[a-zA-Z]+$/,
        error: "Invalid first name format."
      }
    },
    billing_lastName: {
      required: true,
      validator: {
        regEx: /^[a-zA-Z]+$/,
        error: "Invalid last name format."
      }
    },
    billing_phone: {
      required: true,
      validator: {
        regEx: /^(09|\+639)\d{9}$/,
        error: "Invalid phone number format use like 09343243243."
      }
    },
    note: {
      required: false,
      validator: {
        regEx: /^[a-zA-Z]+$/,
        error: "Invalid note format."
      }
    },
    message: {
      required: false,
      validator: {
        regEx: /^[a-zA-Z]+$/,
        error: "Invalid message format."
      }
    }
  };

  var _useForm = Object(_userForm__WEBPACK_IMPORTED_MODULE_8__["default"])(stateSchema, validationStateSchema, handleSubmit, handleStateChange),
      state = _useForm.state,
      handleOnChange = _useForm.handleOnChange,
      handleOnSubmit = _useForm.handleOnSubmit,
      disable = _useForm.disable;

  var errorStyle = {
    color: "red",
    fontSize: "13px"
  }; // console.log(state);

  var proceedToPayment = function proceedToPayment() {
    if (isValid()) {
      console.log(state);

      if (Object(_store_actions_infoActions__WEBPACK_IMPORTED_MODULE_12__["encryptInfoData"])(state)) {
        next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/payment");
      }
    }
  };

  var handleCheckBox = function handleCheckBox(e) {
    if (e.target.checked) {
      if (js_cookie__WEBPACK_IMPORTED_MODULE_15___default.a.get("user")) {
        var userInfo = JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_15___default.a.get("user"));
        setstateSchema(_objectSpread(_objectSpread({}, stateSchema), {}, {
          shipping_firstName: {
            value: userInfo.first_name,
            error: ""
          },
          shipping_lastName: {
            value: userInfo.last_name,
            error: ""
          },
          address: {
            value: userInfo.address,
            error: ""
          },
          city: {
            value: userInfo.city,
            error: ""
          },
          zip: {
            value: userInfo.zip,
            error: ""
          }
        }));
      }
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_11__["ToastContainer"], {
    transition: react_toastify__WEBPACK_IMPORTED_MODULE_11__["Zoom"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 7
    }
  }), __jsx("section", {
    className: "checkout-area ptb-60",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 9
    }
  }, __jsx("form", {
    onSubmit: handleOnSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-lg-6 col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "shipping-details",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 17
    }
  }, __jsx("div", {
    "class": "form-check float-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 19
    }
  }, __jsx("input", {
    type: "checkbox",
    className: "form-check-input",
    onChange: handleCheckBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 21
    }
  }), __jsx("label", {
    "class": "form-check-label",
    "for": "exampleCheck1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 21
    }
  }, "Same as my user address")), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 19
    }
  }), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 19
    }
  }), __jsx("h3", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 19
    }
  }, "Send my orders to"), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "col-lg-6 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 23
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 25
    }
  }, "First Name ", __jsx("span", {
    className: "required",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 38
    }
  }, "*")), __jsx("input", {
    type: "text",
    name: "shipping_firstName",
    className: "form-control",
    onChange: handleOnChange,
    value: state.shipping_firstName.value,
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 25
    }
  }), state.shipping_firstName.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 27
    }
  }, state.shipping_firstName.error))), __jsx("div", {
    className: "col-lg-6 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 23
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 25
    }
  }, "Last Name ", __jsx("span", {
    className: "required",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 37
    }
  }, "*")), __jsx("input", {
    type: "text",
    name: "shipping_lastName",
    className: "form-control",
    onChange: handleOnChange,
    value: state.shipping_lastName.value,
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 25
    }
  }), state.shipping_lastName.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 27
    }
  }, state.shipping_lastName.error))), __jsx("div", {
    className: "col-lg-12 col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 23
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 25
    }
  }, "Phone"), __jsx("input", {
    type: "text",
    className: "form-control",
    name: "shipping_phone",
    onChange: handleOnChange,
    value: state.shipping_phone.value,
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 25
    }
  }), state.shipping_phone.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 27
    }
  }, state.shipping_phone.error))), __jsx("div", {
    className: "col-lg-12 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 23
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 25
    }
  }, "Address ", __jsx("span", {
    className: "required",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 35
    }
  }, "*")), __jsx("input", {
    type: "text",
    name: "shipping_address",
    className: "form-control",
    onChange: handleOnChange,
    value: state.shipping_address.value,
    placeholder: "Street address, House Number / Company name, Baranggay",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 25
    }
  }), state.shipping_address.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 27
    }
  }, state.shipping_address.error))), __jsx("div", {
    className: "col-lg-12 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 23
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 25
    }
  }, "Town / City ", __jsx("span", {
    className: "required",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 39
    }
  }, "*")), __jsx("input", {
    type: "text",
    name: "shipping_city",
    className: "form-control",
    onChange: handleOnChange,
    value: state.shipping_city.value,
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 25
    }
  }), state.shipping_city.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 27
    }
  }, state.shipping_city.error))), __jsx("div", {
    className: "col-lg-6 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 23
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 25
    }
  }, "Postcode / Zip ", __jsx("span", {
    className: "required",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 42
    }
  }, "*")), __jsx("input", {
    type: "text",
    name: "shipping_zip",
    className: "form-control",
    onChange: handleOnChange,
    value: state.shipping_zip.value,
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 25
    }
  }), state.shipping_zip.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 27
    }
  }, state.shipping_zip.error))))), __jsx("hr", {
    className: "dividerClass",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "billing-details",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 19
    }
  }, "Your Info"), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "col-lg-6 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 23
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 25
    }
  }, "First Name ", __jsx("span", {
    className: "required",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 38
    }
  }, "*")), __jsx("input", {
    type: "text",
    name: "billing_firstName",
    className: "form-control",
    onChange: handleOnChange,
    value: state.billing_firstName.value,
    placeholder: "Your Firstname",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427,
      columnNumber: 25
    }
  }), state.billing_firstName.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 27
    }
  }, state.billing_firstName.error))), __jsx("div", {
    className: "col-lg-6 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 23
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 25
    }
  }, "Last Name ", __jsx("span", {
    className: "required",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447,
      columnNumber: 37
    }
  }, "*")), __jsx("input", {
    type: "text",
    name: "billing_lastName",
    className: "form-control",
    onChange: handleOnChange,
    value: state.billing_lastName.value,
    placeholder: "Your Lastname",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449,
      columnNumber: 25
    }
  }), state.billing_lastName.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459,
      columnNumber: 27
    }
  }, state.billing_lastName.error))), __jsx("div", {
    className: "col-lg-12 col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 466,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467,
      columnNumber: 23
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468,
      columnNumber: 25
    }
  }, "Email Address ", __jsx("span", {
    className: "required",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469,
      columnNumber: 41
    }
  }, "*")), __jsx("input", {
    type: "email",
    name: "billing_email",
    className: "form-control",
    onChange: handleOnChange,
    value: state.billing_email.value,
    placeholder: "Your email (For Order Confirmation)",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 25
    }
  }), state.billing_email.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481,
      columnNumber: 27
    }
  }, state.billing_email.error))), __jsx("div", {
    className: "col-lg-12 col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487,
      columnNumber: 23
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488,
      columnNumber: 25
    }
  }, "Phone"), __jsx("input", {
    type: "text",
    className: "form-control",
    name: "billing_phone",
    onChange: handleOnChange,
    value: state.billing_phone.value,
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489,
      columnNumber: 25
    }
  }), state.billing_phone.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 27
    }
  }, state.billing_phone.error)))))), __jsx("hr", {
    className: "my-3 dividerClass",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "col-lg-6 col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "order-details",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 19
    }
  }, "Your Order"), __jsx(_OrderSummary__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: "order-btn",
    style: {
      textAlign: "center",
      paddingTop: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "btn btn-light",
    style: {
      width: "90%"
    },
    onClick: proceedToPayment,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551,
      columnNumber: 21
    }
  }, "Proceed to Payment")))))))));
}

_s(CheckoutForm, "x4jf90rN3wMUUHGxShJnqrp3Nxs=", false, function () {
  return [_userForm__WEBPACK_IMPORTED_MODULE_8__["default"]];
});

_c = CheckoutForm;

var mapStateToProps = function mapStateToProps(state) {
  return {
    total: state.total,
    shipping: state.shipping
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps)(CheckoutForm));

var _c;

$RefreshReg$(_c, "CheckoutForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NoZWNrb3V0L0NoZWNrb3V0Rm9ybS5qcyJdLCJuYW1lcyI6WyJDaGVja291dEZvcm0iLCJ0b3RhbCIsInNoaXBwaW5nIiwiaG9zdCIsInByb2Nlc3MiLCJoYW5kbGVTdWJtaXQiLCJjb25zb2xlIiwibG9nIiwiY2FydCIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzdGF0ZSIsIm9yZGVyIiwib3JkZXJJdGVtcyIsInNoaXBwaW5nRmlyc3ROYW1lIiwic3RhdGVTY2hlbWEiLCJzaGlwcGluZ19maXJzdE5hbWUiLCJ2YWx1ZSIsInNoaXBwaW5nTGFzdE5hbWUiLCJzaGlwcGluZ19sYXN0TmFtZSIsInNoaXBwaW5nUGhvbmUiLCJzaGlwcGluZ19waG9uZSIsInNoaXBwaW5nQWRkcmVzcyIsInNoaXBwaW5nX2FkZHJlc3MiLCJzaGlwcGluZ0NpdHkiLCJzaGlwcGluZ19jaXR5Iiwic2hpcHBpbmdQcm92aW5jZSIsInNoaXBwaW5nWmlwIiwic2hpcHBpbmdfemlwIiwiZGVsaXZlcnlJbnN0cnVjdGlvbnMiLCJub3RlIiwiYmlsbGluZ0ZpcnN0TmFtZSIsImJpbGxpbmdfZmlyc3ROYW1lIiwiYmlsbGluZ0xhc3ROYW1lIiwiYmlsbGluZ19sYXN0TmFtZSIsImJpbGxpbmdQaG9uZSIsImJpbGxpbmdfcGhvbmUiLCJiaWxsaW5nRW1haWwiLCJiaWxsaW5nX2VtYWlsIiwiZGVsaXZlcnlEYXRlIiwiZGVsaXZlcnlfZGF0ZSIsImRlbGl2ZXJ5VGltZSIsInBheW1lbnRNZXRob2QiLCJheGlvcyIsInBvc3QiLCJyZXMiLCJjbGVhckRhdGEiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJyZXNwb25zZSIsInRvdGFsQW1vdW50IiwidG9GaXhlZCIsInVzZVN0YXRlIiwiZXJyb3IiLCJtZXNzYWdlIiwiZGVsaXZlcnlfdGltZSIsInNldHN0YXRlU2NoZW1hIiwiaGFuZGxlU3RhdGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsImhhbmRsZVRvYXN0IiwidG9hc3QiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsImlzVmFsaWQiLCJ2YWxpZGF0aW9uU3RhdGVTY2hlbWEiLCJyZXF1aXJlZCIsInZhbGlkYXRvciIsInJlZ0V4IiwidXNlRm9ybSIsImhhbmRsZU9uQ2hhbmdlIiwiaGFuZGxlT25TdWJtaXQiLCJkaXNhYmxlIiwiZXJyb3JTdHlsZSIsImNvbG9yIiwiZm9udFNpemUiLCJwcm9jZWVkVG9QYXltZW50IiwiZW5jcnlwdEluZm9EYXRhIiwiUm91dGVyIiwicHVzaCIsImhhbmRsZUNoZWNrQm94IiwiY2hlY2tlZCIsIkNvb2tpZXMiLCJnZXQiLCJ1c2VySW5mbyIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJhZGRyZXNzIiwiY2l0eSIsInppcCIsIlpvb20iLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nVG9wIiwid2lkdGgiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxZQUFULE9BQTJDO0FBQUE7O0FBQUEsTUFBbkJDLEtBQW1CLFFBQW5CQSxLQUFtQjtBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUN6QyxNQUFJQyxJQUFJLEdBQUdDLHVCQUFYOztBQUVBLE1BQU1DLFlBQVk7QUFBQSxpTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkJDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWjtBQUNJQyxrQkFGZSxHQUVSQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCUixVQUFyQixDQUFYLENBRlE7QUFHbkJFLHFCQUFPLENBQUNDLEdBQVIsQ0FBWU0sS0FBWixFQUFtQkwsSUFBbkI7QUFDSU0sbUJBSmUsR0FJUDtBQUNWQywwQkFBVSxFQUFFUCxJQURGO0FBRVZRLGlDQUFpQixFQUFFQyxXQUFXLENBQUNDLGtCQUFaLENBQStCQyxLQUZ4QztBQUdWQyxnQ0FBZ0IsRUFBRUgsV0FBVyxDQUFDSSxpQkFBWixDQUE4QkYsS0FIdEM7QUFJVkcsNkJBQWEsRUFBRUwsV0FBVyxDQUFDTSxjQUFaLENBQTJCSixLQUpoQztBQUtWSywrQkFBZSxFQUFFUCxXQUFXLENBQUNRLGdCQUFaLENBQTZCTixLQUxwQztBQU1WTyw0QkFBWSxFQUFFVCxXQUFXLENBQUNVLGFBQVosQ0FBMEJSLEtBTjlCO0FBT1ZTLGdDQUFnQixFQUFFLGNBUFI7QUFRVkMsMkJBQVcsRUFBRVosV0FBVyxDQUFDYSxZQUFaLENBQXlCWCxLQVI1QjtBQVNWWSxvQ0FBb0IsRUFBRWQsV0FBVyxDQUFDZSxJQUFaLENBQWlCYixLQVQ3QjtBQVVWYyxnQ0FBZ0IsRUFBRWhCLFdBQVcsQ0FBQ2lCLGlCQUFaLENBQThCZixLQVZ0QztBQVdWZ0IsK0JBQWUsRUFBRWxCLFdBQVcsQ0FBQ21CLGdCQUFaLENBQTZCakIsS0FYcEM7QUFZVmtCLDRCQUFZLEVBQUVwQixXQUFXLENBQUNxQixhQUFaLENBQTBCbkIsS0FaOUI7QUFhVm9CLDRCQUFZLEVBQUV0QixXQUFXLENBQUN1QixhQUFaLENBQTBCckIsS0FiOUI7QUFjVnNCLDRCQUFZLEVBQUV4QixXQUFXLENBQUN5QixhQUFaLENBQTBCdkIsS0FkOUI7QUFlVndCLDRCQUFZLEVBQUUsU0FmSjtBQWdCVkMsNkJBQWEsRUFBRTtBQWhCTCxlQUpPO0FBQUE7QUFBQTtBQUFBLHFCQXdCQ0MsNkNBQUssQ0FBQ0MsSUFBTixXQUFjM0MsSUFBZCxzQkFBcUNXLEtBQXJDLENBeEJEOztBQUFBO0FBd0JYaUMsaUJBeEJXOztBQXlCakIsa0JBQUlBLEdBQUosRUFBUztBQUNQQyw2RkFBUztBQUNUQyxzQkFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixHQUF1QixXQUF2QjtBQUNBN0MsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZd0MsR0FBWixFQUFpQixLQUFqQjtBQUNEOztBQTdCZ0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUErQmpCekMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQUk2QyxRQUFoQjs7QUEvQmlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVovQyxZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQW1DQSxNQUFJZ0QsV0FBVyxHQUFHLENBQUNwRCxLQUFLLEdBQUdDLFFBQVQsRUFBbUJvRCxPQUFuQixDQUEyQixDQUEzQixDQUFsQjs7QUF0Q3lDLGtCQXdDSEMsc0RBQVEsQ0FBQztBQUM3Q3JDLHNCQUFrQixFQUFFO0FBQUVDLFdBQUssRUFBRSxPQUFUO0FBQWtCcUMsV0FBSyxFQUFFO0FBQXpCLEtBRHlCO0FBRTdDbkMscUJBQWlCLEVBQUU7QUFBRUYsV0FBSyxFQUFFLEVBQVQ7QUFBYXFDLFdBQUssRUFBRTtBQUFwQixLQUYwQjtBQUc3Qy9CLG9CQUFnQixFQUFFO0FBQUVOLFdBQUssRUFBRSxFQUFUO0FBQWFxQyxXQUFLLEVBQUU7QUFBcEIsS0FIMkI7QUFJN0M3QixpQkFBYSxFQUFFO0FBQUVSLFdBQUssRUFBRSxFQUFUO0FBQWFxQyxXQUFLLEVBQUU7QUFBcEIsS0FKOEI7QUFLN0MxQixnQkFBWSxFQUFFO0FBQUVYLFdBQUssRUFBRSxFQUFUO0FBQWFxQyxXQUFLLEVBQUU7QUFBcEIsS0FMK0I7QUFNN0NoQixpQkFBYSxFQUFFO0FBQUVyQixXQUFLLEVBQUUsRUFBVDtBQUFhcUMsV0FBSyxFQUFFO0FBQXBCLEtBTjhCO0FBTzdDakMsa0JBQWMsRUFBRTtBQUFFSixXQUFLLEVBQUUsRUFBVDtBQUFhcUMsV0FBSyxFQUFFO0FBQXBCLEtBUDZCO0FBUTdDdEIscUJBQWlCLEVBQUU7QUFBRWYsV0FBSyxFQUFFLEVBQVQ7QUFBYXFDLFdBQUssRUFBRTtBQUFwQixLQVIwQjtBQVM3Q3BCLG9CQUFnQixFQUFFO0FBQUVqQixXQUFLLEVBQUUsRUFBVDtBQUFhcUMsV0FBSyxFQUFFO0FBQXBCLEtBVDJCO0FBVTdDbEIsaUJBQWEsRUFBRTtBQUFFbkIsV0FBSyxFQUFFLEVBQVQ7QUFBYXFDLFdBQUssRUFBRTtBQUFwQixLQVY4QjtBQVc3Q3hCLFFBQUksRUFBRTtBQUFFYixXQUFLLEVBQUUsRUFBVDtBQUFhcUMsV0FBSyxFQUFFO0FBQXBCLEtBWHVDO0FBWTdDQyxXQUFPLEVBQUU7QUFBRXRDLFdBQUssRUFBRSxFQUFUO0FBQWFxQyxXQUFLLEVBQUU7QUFBcEIsS0Fab0M7QUFhN0NkLGlCQUFhLEVBQUU7QUFBRXZCLFdBQUssRUFBRSxFQUFUO0FBQWFxQyxXQUFLLEVBQUU7QUFBcEIsS0FiOEI7QUFjN0NFLGlCQUFhLEVBQUU7QUFBRXZDLFdBQUssRUFBRSxFQUFUO0FBQWFxQyxXQUFLLEVBQUU7QUFBcEI7QUFkOEIsR0FBRCxDQXhDTDtBQUFBLE1Bd0NsQ3ZDLFdBeENrQztBQUFBLE1Bd0NyQjBDLGNBeENxQjs7QUF5RHpDLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsQ0FBRCxFQUFPO0FBQy9CRixrQkFBYyxpQ0FDVDFDLFdBRFMscUdBRVg0QyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsSUFGRSxFQUVLO0FBQUU1QyxXQUFLLEVBQUUwQyxDQUFDLENBQUNDLE1BQUYsQ0FBUzNDLEtBQWxCO0FBQXlCcUMsV0FBSyxFQUFFO0FBQWhDLEtBRkwsR0FBZDtBQUlELEdBTEQ7O0FBT0EsTUFBTVEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ1AsT0FBRCxFQUFhO0FBQy9CUSx5REFBSyxDQUFDVCxLQUFOLENBQVlDLE9BQVosRUFBcUI7QUFDbkJTLGNBQVEsRUFBRSxhQURTO0FBRW5CQyxlQUFTLEVBQUUsSUFGUTtBQUduQkMscUJBQWUsRUFBRSxLQUhFO0FBSW5CQyxrQkFBWSxFQUFFLElBSks7QUFLbkJDLGtCQUFZLEVBQUUsSUFMSztBQU1uQkMsZUFBUyxFQUFFO0FBTlEsS0FBckI7QUFRRCxHQVREOztBQVdBLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDcEIsUUFBSSxDQUFDM0QsS0FBSyxDQUFDUSxpQkFBTixDQUF3QkYsS0FBN0IsRUFBb0M7QUFDbEM2QyxpQkFBVyxDQUFDLGtDQUFELENBQVg7QUFDQSxhQUFPLEtBQVA7QUFDRCxLQUhELE1BR08sSUFBSSxDQUFDbkQsS0FBSyxDQUFDSyxrQkFBTixDQUF5QkMsS0FBOUIsRUFBcUM7QUFDMUM2QyxpQkFBVyxDQUFDLG1DQUFELENBQVg7QUFDQSxhQUFPLEtBQVA7QUFDRCxLQUhNLE1BR0EsSUFBSSxDQUFDbkQsS0FBSyxDQUFDWSxnQkFBTixDQUF1Qk4sS0FBNUIsRUFBbUM7QUFDeEM2QyxpQkFBVyxDQUFDLGdDQUFELENBQVg7QUFDQSxhQUFPLEtBQVA7QUFDRCxLQUhNLE1BR0EsSUFBSSxDQUFDbkQsS0FBSyxDQUFDYyxhQUFOLENBQW9CUixLQUF6QixFQUFnQztBQUNyQzZDLGlCQUFXLENBQUMsNkJBQUQsQ0FBWDtBQUNBLGFBQU8sS0FBUDtBQUNELEtBSE0sTUFHQSxJQUFJLENBQUNuRCxLQUFLLENBQUNpQixZQUFOLENBQW1CWCxLQUF4QixFQUErQjtBQUNwQzZDLGlCQUFXLENBQUMsNEJBQUQsQ0FBWDtBQUNBLGFBQU8sS0FBUDtBQUNELEtBSE0sTUFHQSxJQUFJLENBQUNuRCxLQUFLLENBQUMyQixhQUFOLENBQW9CckIsS0FBekIsRUFBZ0M7QUFDckM2QyxpQkFBVyxDQUFDLCtCQUFELENBQVg7QUFDQSxhQUFPLEtBQVA7QUFDRCxLQUhNLE1BR0EsSUFBSSxDQUFDbkQsS0FBSyxDQUFDVSxjQUFOLENBQXFCSixLQUExQixFQUFpQztBQUN0QzZDLGlCQUFXLENBQUMsdUNBQUQsQ0FBWDtBQUNBLGFBQU8sS0FBUDtBQUNELEtBSE0sTUFHQSxJQUFJLENBQUNuRCxLQUFLLENBQUN5QixhQUFOLENBQW9CbkIsS0FBekIsRUFBZ0M7QUFDckM2QyxpQkFBVyxDQUFDLG1DQUFELENBQVg7QUFDQSxhQUFPLEtBQVA7QUFDRCxLQUhNLE1BR0EsSUFBSSxDQUFDbkQsS0FBSyxDQUFDcUIsaUJBQU4sQ0FBd0JmLEtBQTdCLEVBQW9DO0FBQ3pDNkMsaUJBQVcsQ0FBQywrQkFBRCxDQUFYO0FBQ0EsYUFBTyxLQUFQO0FBQ0QsS0FITSxNQUdBLElBQUksQ0FBQ25ELEtBQUssQ0FBQ3VCLGdCQUFOLENBQXVCakIsS0FBNUIsRUFBbUM7QUFDeEM2QyxpQkFBVyxDQUFDLDhCQUFELENBQVg7QUFDQSxhQUFPLEtBQVA7QUFDRCxLQUhNLE1BR0EsSUFBSSxDQUFDbkQsS0FBSyxDQUFDWSxnQkFBTixDQUF1Qk4sS0FBNUIsRUFBbUM7QUFDeEM2QyxpQkFBVyxDQUFDLGdDQUFELENBQVg7QUFDQSxhQUFPLEtBQVA7QUFDRCxLQUhNLE1BR0E7QUFDTCxhQUFPLElBQVA7QUFDRDtBQUNGLEdBckNEOztBQXVDQSxNQUFNUyxxQkFBcUIsR0FBRztBQUM1QnZELHNCQUFrQixFQUFFO0FBQ2xCd0QsY0FBUSxFQUFFLElBRFE7QUFFbEJDLGVBQVMsRUFBRTtBQUNUQyxhQUFLLEVBQUUsYUFERTtBQUVUcEIsYUFBSyxFQUFFO0FBRkU7QUFGTyxLQURRO0FBUzVCZCxpQkFBYSxFQUFFO0FBQ2JnQyxjQUFRLEVBQUU7QUFERyxLQVRhO0FBYTVCaEIsaUJBQWEsRUFBRTtBQUNiZ0IsY0FBUSxFQUFFO0FBREcsS0FiYTtBQWlCNUJyRCxxQkFBaUIsRUFBRTtBQUNqQnFELGNBQVEsRUFBRSxJQURPO0FBRWpCQyxlQUFTLEVBQUU7QUFDVEMsYUFBSyxFQUFFLGFBREU7QUFFVHBCLGFBQUssRUFBRTtBQUZFO0FBRk0sS0FqQlM7QUF5QjVCL0Isb0JBQWdCLEVBQUU7QUFDaEJpRCxjQUFRLEVBQUUsSUFETTtBQUVoQkMsZUFBUyxFQUFFO0FBQ1RuQixhQUFLLEVBQUU7QUFERTtBQUZLLEtBekJVO0FBZ0M1QjdCLGlCQUFhLEVBQUU7QUFDYitDLGNBQVEsRUFBRSxJQURHO0FBRWJDLGVBQVMsRUFBRTtBQUNUbkIsYUFBSyxFQUFFO0FBREU7QUFGRSxLQWhDYTtBQXVDNUIxQixnQkFBWSxFQUFFO0FBQ1o0QyxjQUFRLEVBQUUsSUFERTtBQUVaQyxlQUFTLEVBQUU7QUFDVEMsYUFBSyxFQUFFLHVCQURFO0FBRVRwQixhQUFLLEVBQUU7QUFGRTtBQUZDLEtBdkNjO0FBK0M1QmhCLGlCQUFhLEVBQUU7QUFDYmtDLGNBQVEsRUFBRSxJQURHO0FBRWJDLGVBQVMsRUFBRTtBQUNUQyxhQUFLLEVBQ0gsd0pBRk87QUFHVHBCLGFBQUssRUFBRTtBQUhFO0FBRkUsS0EvQ2E7QUF3RDVCakMsa0JBQWMsRUFBRTtBQUNkbUQsY0FBUSxFQUFFLElBREk7QUFFZEMsZUFBUyxFQUFFO0FBQ1RDLGFBQUssRUFBRSxtQkFERTtBQUVUcEIsYUFBSyxFQUFFO0FBRkU7QUFGRyxLQXhEWTtBQWdFNUJ0QixxQkFBaUIsRUFBRTtBQUNqQndDLGNBQVEsRUFBRSxJQURPO0FBRWpCQyxlQUFTLEVBQUU7QUFDVEMsYUFBSyxFQUFFLGFBREU7QUFFVHBCLGFBQUssRUFBRTtBQUZFO0FBRk0sS0FoRVM7QUF3RTVCcEIsb0JBQWdCLEVBQUU7QUFDaEJzQyxjQUFRLEVBQUUsSUFETTtBQUVoQkMsZUFBUyxFQUFFO0FBQ1RDLGFBQUssRUFBRSxhQURFO0FBRVRwQixhQUFLLEVBQUU7QUFGRTtBQUZLLEtBeEVVO0FBZ0Y1QmxCLGlCQUFhLEVBQUU7QUFDYm9DLGNBQVEsRUFBRSxJQURHO0FBRWJDLGVBQVMsRUFBRTtBQUNUQyxhQUFLLEVBQUUsbUJBREU7QUFFVHBCLGFBQUssRUFBRTtBQUZFO0FBRkUsS0FoRmE7QUF3RjVCeEIsUUFBSSxFQUFFO0FBQ0owQyxjQUFRLEVBQUUsS0FETjtBQUVKQyxlQUFTLEVBQUU7QUFDVEMsYUFBSyxFQUFFLGFBREU7QUFFVHBCLGFBQUssRUFBRTtBQUZFO0FBRlAsS0F4RnNCO0FBZ0c1QkMsV0FBTyxFQUFFO0FBQ1BpQixjQUFRLEVBQUUsS0FESDtBQUVQQyxlQUFTLEVBQUU7QUFDVEMsYUFBSyxFQUFFLGFBREU7QUFFVHBCLGFBQUssRUFBRTtBQUZFO0FBRko7QUFoR21CLEdBQTlCOztBQWxIeUMsaUJBMk5rQnFCLHlEQUFPLENBQ2hFNUQsV0FEZ0UsRUFFaEV3RCxxQkFGZ0UsRUFHaEVwRSxZQUhnRSxFQUloRXVELGlCQUpnRSxDQTNOekI7QUFBQSxNQTJOakMvQyxLQTNOaUMsWUEyTmpDQSxLQTNOaUM7QUFBQSxNQTJOMUJpRSxjQTNOMEIsWUEyTjFCQSxjQTNOMEI7QUFBQSxNQTJOVkMsY0EzTlUsWUEyTlZBLGNBM05VO0FBQUEsTUEyTk1DLE9BM05OLFlBMk5NQSxPQTNOTjs7QUFrT3pDLE1BQU1DLFVBQVUsR0FBRztBQUNqQkMsU0FBSyxFQUFFLEtBRFU7QUFFakJDLFlBQVEsRUFBRTtBQUZPLEdBQW5CLENBbE95QyxDQXNPekM7O0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzdCLFFBQUlaLE9BQU8sRUFBWCxFQUFlO0FBQ2JsRSxhQUFPLENBQUNDLEdBQVIsQ0FBWU0sS0FBWjs7QUFDQSxVQUFJd0UsbUZBQWUsQ0FBQ3hFLEtBQUQsQ0FBbkIsRUFBNEI7QUFDMUJ5RSwwREFBTSxDQUFDQyxJQUFQLENBQVksVUFBWjtBQUNEO0FBQ0Y7QUFDRixHQVBEOztBQVNBLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQzNCLENBQUQsRUFBTztBQUM1QixRQUFJQSxDQUFDLENBQUNDLE1BQUYsQ0FBUzJCLE9BQWIsRUFBc0I7QUFDcEIsVUFBSUMsaURBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosQ0FBSixFQUF5QjtBQUN2QixZQUFNQyxRQUFRLEdBQUduRixJQUFJLENBQUNDLEtBQUwsQ0FBV2dGLGlEQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLENBQVgsQ0FBakI7QUFDQWhDLHNCQUFjLGlDQUNUMUMsV0FEUztBQUVaQyw0QkFBa0IsRUFBRTtBQUFFQyxpQkFBSyxFQUFFeUUsUUFBUSxDQUFDQyxVQUFsQjtBQUE4QnJDLGlCQUFLLEVBQUU7QUFBckMsV0FGUjtBQUdabkMsMkJBQWlCLEVBQUU7QUFBRUYsaUJBQUssRUFBRXlFLFFBQVEsQ0FBQ0UsU0FBbEI7QUFBNkJ0QyxpQkFBSyxFQUFFO0FBQXBDLFdBSFA7QUFJWnVDLGlCQUFPLEVBQUU7QUFBRTVFLGlCQUFLLEVBQUV5RSxRQUFRLENBQUNHLE9BQWxCO0FBQTJCdkMsaUJBQUssRUFBRTtBQUFsQyxXQUpHO0FBS1p3QyxjQUFJLEVBQUU7QUFBRTdFLGlCQUFLLEVBQUV5RSxRQUFRLENBQUNJLElBQWxCO0FBQXdCeEMsaUJBQUssRUFBRTtBQUEvQixXQUxNO0FBTVp5QyxhQUFHLEVBQUU7QUFBRTlFLGlCQUFLLEVBQUV5RSxRQUFRLENBQUNLLEdBQWxCO0FBQXVCekMsaUJBQUssRUFBRTtBQUE5QjtBQU5PLFdBQWQ7QUFRRDtBQUNGO0FBQ0YsR0FkRDs7QUFnQkEsU0FDRSxtRUFDRSxNQUFDLDhEQUFEO0FBQWdCLGNBQVUsRUFBRTBDLG9EQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFTLGFBQVMsRUFBQyxzQkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sWUFBUSxFQUFFbkIsY0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLG9CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFNLHdCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBQyxVQURQO0FBRUUsYUFBUyxFQUFDLGtCQUZaO0FBR0UsWUFBUSxFQUFFUyxjQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU1FO0FBQU8sYUFBTSxrQkFBYjtBQUFnQyxXQUFJLGVBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBTkYsQ0FERixFQVdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixFQVlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaRixFQWFFO0FBQUksYUFBUyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFiRixFQWVFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUNhO0FBQU0sYUFBUyxFQUFDLFVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FEYixDQURGLEVBSUU7QUFDRSxRQUFJLEVBQUMsTUFEUDtBQUVFLFFBQUksRUFBQyxvQkFGUDtBQUdFLGFBQVMsRUFBQyxjQUhaO0FBSUUsWUFBUSxFQUFFVixjQUpaO0FBS0UsU0FBSyxFQUFFakUsS0FBSyxDQUFDSyxrQkFBTixDQUF5QkMsS0FMbEM7QUFNRSxZQUFRLE1BTlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBWUdOLEtBQUssQ0FBQ0ssa0JBQU4sQ0FBeUJzQyxLQUF6QixJQUNDO0FBQUcsU0FBSyxFQUFFeUIsVUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dwRSxLQUFLLENBQUNLLGtCQUFOLENBQXlCc0MsS0FENUIsQ0FiSixDQURGLENBREYsRUFzQkU7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1k7QUFBTSxhQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURaLENBREYsRUFJRTtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsUUFBSSxFQUFDLG1CQUZQO0FBR0UsYUFBUyxFQUFDLGNBSFo7QUFJRSxZQUFRLEVBQUVzQixjQUpaO0FBS0UsU0FBSyxFQUFFakUsS0FBSyxDQUFDUSxpQkFBTixDQUF3QkYsS0FMakM7QUFNRSxZQUFRLE1BTlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBWUdOLEtBQUssQ0FBQ1EsaUJBQU4sQ0FBd0JtQyxLQUF4QixJQUNDO0FBQUcsU0FBSyxFQUFFeUIsVUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dwRSxLQUFLLENBQUNRLGlCQUFOLENBQXdCbUMsS0FEM0IsQ0FiSixDQURGLENBdEJGLEVBMkNFO0FBQUssYUFBUyxFQUFDLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFRTtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsYUFBUyxFQUFDLGNBRlo7QUFHRSxRQUFJLEVBQUMsZ0JBSFA7QUFJRSxZQUFRLEVBQUVzQixjQUpaO0FBS0UsU0FBSyxFQUFFakUsS0FBSyxDQUFDVSxjQUFOLENBQXFCSixLQUw5QjtBQU1FLFlBQVEsTUFOVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFVR04sS0FBSyxDQUFDVSxjQUFOLENBQXFCaUMsS0FBckIsSUFDQztBQUFHLFNBQUssRUFBRXlCLFVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1QnBFLEtBQUssQ0FBQ1UsY0FBTixDQUFxQmlDLEtBQTVDLENBWEosQ0FERixDQTNDRixFQTRERTtBQUFLLGFBQVMsRUFBQyxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDVTtBQUFNLGFBQVMsRUFBQyxVQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRFYsQ0FERixFQUlFO0FBQ0UsUUFBSSxFQUFDLE1BRFA7QUFFRSxRQUFJLEVBQUMsa0JBRlA7QUFHRSxhQUFTLEVBQUMsY0FIWjtBQUlFLFlBQVEsRUFBRXNCLGNBSlo7QUFLRSxTQUFLLEVBQUVqRSxLQUFLLENBQUNZLGdCQUFOLENBQXVCTixLQUxoQztBQU1FLGVBQVcsRUFBQyx3REFOZDtBQU9FLFlBQVEsTUFQVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFhR04sS0FBSyxDQUFDWSxnQkFBTixDQUF1QitCLEtBQXZCLElBQ0M7QUFBRyxTQUFLLEVBQUV5QixVQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR3BFLEtBQUssQ0FBQ1ksZ0JBQU4sQ0FBdUIrQixLQUQxQixDQWRKLENBREYsQ0E1REYsRUFrRkU7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ2M7QUFBTSxhQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURkLENBREYsRUFJRTtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsUUFBSSxFQUFDLGVBRlA7QUFHRSxhQUFTLEVBQUMsY0FIWjtBQUlFLFlBQVEsRUFBRXNCLGNBSlo7QUFLRSxTQUFLLEVBQUVqRSxLQUFLLENBQUNjLGFBQU4sQ0FBb0JSLEtBTDdCO0FBTUUsWUFBUSxNQU5WO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQVlHTixLQUFLLENBQUNjLGFBQU4sQ0FBb0I2QixLQUFwQixJQUNDO0FBQUcsU0FBSyxFQUFFeUIsVUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVCcEUsS0FBSyxDQUFDYyxhQUFOLENBQW9CNkIsS0FBM0MsQ0FiSixDQURGLENBbEZGLEVBcUdFO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUNpQjtBQUFNLGFBQVMsRUFBQyxVQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRGpCLENBREYsRUFJRTtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsUUFBSSxFQUFDLGNBRlA7QUFHRSxhQUFTLEVBQUMsY0FIWjtBQUlFLFlBQVEsRUFBRXNCLGNBSlo7QUFLRSxTQUFLLEVBQUVqRSxLQUFLLENBQUNpQixZQUFOLENBQW1CWCxLQUw1QjtBQU1FLFlBQVEsTUFOVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFZR04sS0FBSyxDQUFDaUIsWUFBTixDQUFtQjBCLEtBQW5CLElBQ0M7QUFBRyxTQUFLLEVBQUV5QixVQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUJwRSxLQUFLLENBQUNpQixZQUFOLENBQW1CMEIsS0FBMUMsQ0FiSixDQURGLENBckdGLENBZkYsQ0FERixFQTBJRTtBQUFJLGFBQVMsRUFBQyxjQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUExSUYsRUE0SUU7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUdFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUNhO0FBQU0sYUFBUyxFQUFDLFVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FEYixDQURGLEVBSUU7QUFDRSxRQUFJLEVBQUMsTUFEUDtBQUVFLFFBQUksRUFBQyxtQkFGUDtBQUdFLGFBQVMsRUFBQyxjQUhaO0FBSUUsWUFBUSxFQUFFc0IsY0FKWjtBQUtFLFNBQUssRUFBRWpFLEtBQUssQ0FBQ3FCLGlCQUFOLENBQXdCZixLQUxqQztBQU1FLGVBQVcsRUFBQyxnQkFOZDtBQU9FLFlBQVEsTUFQVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFhR04sS0FBSyxDQUFDcUIsaUJBQU4sQ0FBd0JzQixLQUF4QixJQUNDO0FBQUcsU0FBSyxFQUFFeUIsVUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dwRSxLQUFLLENBQUNxQixpQkFBTixDQUF3QnNCLEtBRDNCLENBZEosQ0FERixDQURGLEVBdUJFO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNZO0FBQU0sYUFBUyxFQUFDLFVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FEWixDQURGLEVBSUU7QUFDRSxRQUFJLEVBQUMsTUFEUDtBQUVFLFFBQUksRUFBQyxrQkFGUDtBQUdFLGFBQVMsRUFBQyxjQUhaO0FBSUUsWUFBUSxFQUFFc0IsY0FKWjtBQUtFLFNBQUssRUFBRWpFLEtBQUssQ0FBQ3VCLGdCQUFOLENBQXVCakIsS0FMaEM7QUFNRSxlQUFXLEVBQUMsZUFOZDtBQU9FLFlBQVEsTUFQVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFhR04sS0FBSyxDQUFDdUIsZ0JBQU4sQ0FBdUJvQixLQUF2QixJQUNDO0FBQUcsU0FBSyxFQUFFeUIsVUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dwRSxLQUFLLENBQUN1QixnQkFBTixDQUF1Qm9CLEtBRDFCLENBZEosQ0FERixDQXZCRixFQTZDRTtBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDZ0I7QUFBTSxhQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURoQixDQURGLEVBSUU7QUFDRSxRQUFJLEVBQUMsT0FEUDtBQUVFLFFBQUksRUFBQyxlQUZQO0FBR0UsYUFBUyxFQUFDLGNBSFo7QUFJRSxZQUFRLEVBQUVzQixjQUpaO0FBS0UsU0FBSyxFQUFFakUsS0FBSyxDQUFDMkIsYUFBTixDQUFvQnJCLEtBTDdCO0FBTUUsZUFBVyxFQUFDLHFDQU5kO0FBT0UsWUFBUSxNQVBWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQWFHTixLQUFLLENBQUMyQixhQUFOLENBQW9CZ0IsS0FBcEIsSUFDQztBQUFHLFNBQUssRUFBRXlCLFVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1QnBFLEtBQUssQ0FBQzJCLGFBQU4sQ0FBb0JnQixLQUEzQyxDQWRKLENBREYsQ0E3Q0YsRUFpRUU7QUFBSyxhQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVFO0FBQ0UsUUFBSSxFQUFDLE1BRFA7QUFFRSxhQUFTLEVBQUMsY0FGWjtBQUdFLFFBQUksRUFBQyxlQUhQO0FBSUUsWUFBUSxFQUFFc0IsY0FKWjtBQUtFLFNBQUssRUFBRWpFLEtBQUssQ0FBQ3lCLGFBQU4sQ0FBb0JuQixLQUw3QjtBQU1FLFlBQVEsTUFOVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFVR04sS0FBSyxDQUFDeUIsYUFBTixDQUFvQmtCLEtBQXBCLElBQ0M7QUFBRyxTQUFLLEVBQUV5QixVQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUJwRSxLQUFLLENBQUN5QixhQUFOLENBQW9Ca0IsS0FBM0MsQ0FYSixDQURGLENBakVGLENBSEYsQ0E1SUYsQ0FERixFQW9PRTtBQUFJLGFBQVMsRUFBQyxtQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcE9GLEVBcU9FO0FBQUssYUFBUyxFQUFDLG9CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFFRSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQXdDRTtBQUNFLGFBQVMsRUFBQyxXQURaO0FBRUUsU0FBSyxFQUFFO0FBQUUyQyxlQUFTLEVBQUUsUUFBYjtBQUF1QkMsZ0JBQVUsRUFBRTtBQUFuQyxLQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRTtBQUNFLGFBQVMsRUFBQyxlQURaO0FBRUUsU0FBSyxFQUFFO0FBQUVDLFdBQUssRUFBRTtBQUFULEtBRlQ7QUFHRSxXQUFPLEVBQUVqQixnQkFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUpGLENBeENGLENBREYsQ0FyT0YsQ0FERixDQURGLENBREYsQ0FGRixDQURGO0FBd1NEOztHQXhpQlFwRixZO1VBMk5vRDZFLGlEOzs7S0EzTnBEN0UsWTs7QUEwaUJULElBQU1zRyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUN6RixLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMWixTQUFLLEVBQUVZLEtBQUssQ0FBQ1osS0FEUjtBQUVMQyxZQUFRLEVBQUVXLEtBQUssQ0FBQ1g7QUFGWCxHQUFQO0FBSUQsQ0FMRDs7QUFPZXFHLDBIQUFPLENBQUNELGVBQUQsQ0FBUCxDQUF5QnRHLFlBQXpCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGNoZWNrb3V0LmpzLjg5NDU0MTZjNmU1OTNmM2Q5YWM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgT3JkZXJTdW1tYXJ5IGZyb20gXCIuL09yZGVyU3VtbWFyeVwiO1xyXG5pbXBvcnQgUGF5bWVudCBmcm9tIFwiLi4vcGF5bWVudHMvUGF5bWVudFwiO1xyXG5pbXBvcnQgdXNlRm9ybSBmcm9tIFwiLi91c2VyRm9ybVwiO1xyXG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSBcIi4uL2NhbGVuZGFyL0NhbGVuZGFyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0LCBab29tIH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmltcG9ydCB7IGVuY3J5cHRJbmZvRGF0YSB9IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2luZm9BY3Rpb25zXCI7XHJcbmltcG9ydCB7IGlzRGF0ZUJlZm9yZVRvZGF5IH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvZnVuY3Rpb25cIjtcclxuaW1wb3J0IHsgY2xlYXJEYXRhIH0gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvY2FydEFjdGlvbnNcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuZnVuY3Rpb24gQ2hlY2tvdXRGb3JtKHsgdG90YWwsIHNoaXBwaW5nIH0pIHtcclxuICBsZXQgaG9zdCA9IHByb2Nlc3MuZW52LkFQSV9VUkw7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiRm9ybSBzdWJtaXR0ZWQuXCIpO1xyXG4gICAgbGV0IGNhcnQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2Nlc3MuZW52LkNBUlRfQ09PS0lFKSk7XHJcbiAgICBjb25zb2xlLmxvZyhzdGF0ZSwgY2FydCk7XHJcbiAgICBsZXQgb3JkZXIgPSB7XHJcbiAgICAgIG9yZGVySXRlbXM6IGNhcnQsXHJcbiAgICAgIHNoaXBwaW5nRmlyc3ROYW1lOiBzdGF0ZVNjaGVtYS5zaGlwcGluZ19maXJzdE5hbWUudmFsdWUsXHJcbiAgICAgIHNoaXBwaW5nTGFzdE5hbWU6IHN0YXRlU2NoZW1hLnNoaXBwaW5nX2xhc3ROYW1lLnZhbHVlLFxyXG4gICAgICBzaGlwcGluZ1Bob25lOiBzdGF0ZVNjaGVtYS5zaGlwcGluZ19waG9uZS52YWx1ZSxcclxuICAgICAgc2hpcHBpbmdBZGRyZXNzOiBzdGF0ZVNjaGVtYS5zaGlwcGluZ19hZGRyZXNzLnZhbHVlLFxyXG4gICAgICBzaGlwcGluZ0NpdHk6IHN0YXRlU2NoZW1hLnNoaXBwaW5nX2NpdHkudmFsdWUsXHJcbiAgICAgIHNoaXBwaW5nUHJvdmluY2U6IFwiTWV0cm8gTWFuaWxhXCIsXHJcbiAgICAgIHNoaXBwaW5nWmlwOiBzdGF0ZVNjaGVtYS5zaGlwcGluZ196aXAudmFsdWUsXHJcbiAgICAgIGRlbGl2ZXJ5SW5zdHJ1Y3Rpb25zOiBzdGF0ZVNjaGVtYS5ub3RlLnZhbHVlLFxyXG4gICAgICBiaWxsaW5nRmlyc3ROYW1lOiBzdGF0ZVNjaGVtYS5iaWxsaW5nX2ZpcnN0TmFtZS52YWx1ZSxcclxuICAgICAgYmlsbGluZ0xhc3ROYW1lOiBzdGF0ZVNjaGVtYS5iaWxsaW5nX2xhc3ROYW1lLnZhbHVlLFxyXG4gICAgICBiaWxsaW5nUGhvbmU6IHN0YXRlU2NoZW1hLmJpbGxpbmdfcGhvbmUudmFsdWUsXHJcbiAgICAgIGJpbGxpbmdFbWFpbDogc3RhdGVTY2hlbWEuYmlsbGluZ19lbWFpbC52YWx1ZSxcclxuICAgICAgZGVsaXZlcnlEYXRlOiBzdGF0ZVNjaGVtYS5kZWxpdmVyeV9kYXRlLnZhbHVlLFxyXG4gICAgICBkZWxpdmVyeVRpbWU6IFwiQW55dGltZVwiLFxyXG4gICAgICBwYXltZW50TWV0aG9kOiBcIkNPRFwiLFxyXG4gICAgfTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGAke2hvc3R9L2FwaS91c2VyL29yZGVyYCwgb3JkZXIpO1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgY2xlYXJEYXRhKCk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi90aGFua3lvdVwiO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcywgXCJSRVNcIik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGxldCB0b3RhbEFtb3VudCA9ICh0b3RhbCArIHNoaXBwaW5nKS50b0ZpeGVkKDIpO1xyXG5cclxuICBjb25zdCBbc3RhdGVTY2hlbWEsIHNldHN0YXRlU2NoZW1hXSA9IHVzZVN0YXRlKHtcclxuICAgIHNoaXBwaW5nX2ZpcnN0TmFtZTogeyB2YWx1ZTogXCJkd2R3ZFwiLCBlcnJvcjogXCJcIiB9LFxyXG4gICAgc2hpcHBpbmdfbGFzdE5hbWU6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXHJcbiAgICBzaGlwcGluZ19hZGRyZXNzOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxyXG4gICAgc2hpcHBpbmdfY2l0eTogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcclxuICAgIHNoaXBwaW5nX3ppcDogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcclxuICAgIGJpbGxpbmdfZW1haWw6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXHJcbiAgICBzaGlwcGluZ19waG9uZTogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcclxuICAgIGJpbGxpbmdfZmlyc3ROYW1lOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxyXG4gICAgYmlsbGluZ19sYXN0TmFtZTogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcclxuICAgIGJpbGxpbmdfcGhvbmU6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXHJcbiAgICBub3RlOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxyXG4gICAgbWVzc2FnZTogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcclxuICAgIGRlbGl2ZXJ5X2RhdGU6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXHJcbiAgICBkZWxpdmVyeV90aW1lOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdGF0ZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRzdGF0ZVNjaGVtYSh7XHJcbiAgICAgIC4uLnN0YXRlU2NoZW1hLFxyXG4gICAgICBbZS50YXJnZXQubmFtZV06IHsgdmFsdWU6IGUudGFyZ2V0LnZhbHVlLCBlcnJvcjogXCJcIiB9LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVG9hc3QgPSAobWVzc2FnZSkgPT4ge1xyXG4gICAgdG9hc3QuZXJyb3IobWVzc2FnZSwge1xyXG4gICAgICBwb3NpdGlvbjogXCJib3R0b20tbGVmdFwiLFxyXG4gICAgICBhdXRvQ2xvc2U6IDIwMDAsXHJcbiAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpc1ZhbGlkID0gKCkgPT4ge1xyXG4gICAgaWYgKCFzdGF0ZS5zaGlwcGluZ19sYXN0TmFtZS52YWx1ZSkge1xyXG4gICAgICBoYW5kbGVUb2FzdChcIlBsZWFzZSBpbnB1dCByZWNlaXZlciBsYXN0IG5hbWUuXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKCFzdGF0ZS5zaGlwcGluZ19maXJzdE5hbWUudmFsdWUpIHtcclxuICAgICAgaGFuZGxlVG9hc3QoXCJQbGVhc2UgaW5wdXQgcmVjZWl2ZXIgZmlyc3QgbmFtZS5cIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAoIXN0YXRlLnNoaXBwaW5nX2FkZHJlc3MudmFsdWUpIHtcclxuICAgICAgaGFuZGxlVG9hc3QoXCJQbGVhc2UgaW5wdXQgcmVjZWl2ZXIgYWRkcmVzcy5cIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAoIXN0YXRlLnNoaXBwaW5nX2NpdHkudmFsdWUpIHtcclxuICAgICAgaGFuZGxlVG9hc3QoXCJQbGVhc2UgaW5wdXQgcmVjZWl2ZXIgY2l0eS5cIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAoIXN0YXRlLnNoaXBwaW5nX3ppcC52YWx1ZSkge1xyXG4gICAgICBoYW5kbGVUb2FzdChcIlBsZWFzZSBpbnB1dCByZWNlaXZlciB6aXAuXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKCFzdGF0ZS5iaWxsaW5nX2VtYWlsLnZhbHVlKSB7XHJcbiAgICAgIGhhbmRsZVRvYXN0KFwiUGxlYXNlIGlucHV0IHlvdXIgZW1haWwgaW5mby5cIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAoIXN0YXRlLnNoaXBwaW5nX3Bob25lLnZhbHVlKSB7XHJcbiAgICAgIGhhbmRsZVRvYXN0KFwiUGxlYXNlIGlucHV0IHJlY2VpdmVyIGNvbnRhY3QgbnVtYmVyLlwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmICghc3RhdGUuYmlsbGluZ19waG9uZS52YWx1ZSkge1xyXG4gICAgICBoYW5kbGVUb2FzdChcIlBsZWFzZSBpbnB1dCB5b3VyIGNvbnRhY3QgbnVtYmVyLlwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmICghc3RhdGUuYmlsbGluZ19maXJzdE5hbWUudmFsdWUpIHtcclxuICAgICAgaGFuZGxlVG9hc3QoXCJQbGVhc2UgaW5wdXQgeW91ciBmaXJzdCBuYW1lLlwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmICghc3RhdGUuYmlsbGluZ19sYXN0TmFtZS52YWx1ZSkge1xyXG4gICAgICBoYW5kbGVUb2FzdChcIlBsZWFzZSBpbnB1dCB5b3VyIGxhc3QgbmFtZS5cIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAoIXN0YXRlLnNoaXBwaW5nX2FkZHJlc3MudmFsdWUpIHtcclxuICAgICAgaGFuZGxlVG9hc3QoXCJQbGVhc2UgaW5wdXQgcmVjZWl2ZXIgYWRkcmVzcy5cIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHZhbGlkYXRpb25TdGF0ZVNjaGVtYSA9IHtcclxuICAgIHNoaXBwaW5nX2ZpcnN0TmFtZToge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgdmFsaWRhdG9yOiB7XHJcbiAgICAgICAgcmVnRXg6IC9eW2EtekEtWl0rJC8sXHJcbiAgICAgICAgZXJyb3I6IFwiSW52YWxpZCBmaXJzdCBuYW1lIGZvcm1hdFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBkZWxpdmVyeV9kYXRlOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuXHJcbiAgICBkZWxpdmVyeV90aW1lOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuXHJcbiAgICBzaGlwcGluZ19sYXN0TmFtZToge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgdmFsaWRhdG9yOiB7XHJcbiAgICAgICAgcmVnRXg6IC9eW2EtekEtWl0rJC8sXHJcbiAgICAgICAgZXJyb3I6IFwiSW52YWxpZCBsYXN0IG5hbWUgZm9ybWF0LlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBzaGlwcGluZ19hZGRyZXNzOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICB2YWxpZGF0b3I6IHtcclxuICAgICAgICBlcnJvcjogXCJJbnZhbGlkIGFkZHJlc3MgZm9ybWF0LlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBzaGlwcGluZ19jaXR5OiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICB2YWxpZGF0b3I6IHtcclxuICAgICAgICBlcnJvcjogXCJJbnZhbGlkIGxhc3QgbmFtZSBmb3JtYXQuXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIHNoaXBwaW5nX3ppcDoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgdmFsaWRhdG9yOiB7XHJcbiAgICAgICAgcmVnRXg6IC9eXFxkezR9JHxeXFxkezR9LVxcZHs0fSQvLFxyXG4gICAgICAgIGVycm9yOiBcIkludmFsaWQgemlwIGZvcm1hdCwgdXNlIGxpa2UgMTIzNC5cIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgYmlsbGluZ19lbWFpbDoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgdmFsaWRhdG9yOiB7XHJcbiAgICAgICAgcmVnRXg6XHJcbiAgICAgICAgICAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLyxcclxuICAgICAgICBlcnJvcjogXCJJbnZhbGlkIGVtYWlsIGZvcm1hdCwgdXNlIGxpa2UgZXhhbXBsZUBnbWFpbC5jb21cIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgc2hpcHBpbmdfcGhvbmU6IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIHZhbGlkYXRvcjoge1xyXG4gICAgICAgIHJlZ0V4OiAvXigwOXxcXCs2MzkpXFxkezl9JC8sXHJcbiAgICAgICAgZXJyb3I6IFwiSW52YWxpZCBwaG9uZSBudW1iZXIgZm9ybWF0IHVzZSBsaWtlIDA5MzQzMjQzMjQzLlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBiaWxsaW5nX2ZpcnN0TmFtZToge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgdmFsaWRhdG9yOiB7XHJcbiAgICAgICAgcmVnRXg6IC9eW2EtekEtWl0rJC8sXHJcbiAgICAgICAgZXJyb3I6IFwiSW52YWxpZCBmaXJzdCBuYW1lIGZvcm1hdC5cIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgYmlsbGluZ19sYXN0TmFtZToge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgdmFsaWRhdG9yOiB7XHJcbiAgICAgICAgcmVnRXg6IC9eW2EtekEtWl0rJC8sXHJcbiAgICAgICAgZXJyb3I6IFwiSW52YWxpZCBsYXN0IG5hbWUgZm9ybWF0LlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBiaWxsaW5nX3Bob25lOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICB2YWxpZGF0b3I6IHtcclxuICAgICAgICByZWdFeDogL14oMDl8XFwrNjM5KVxcZHs5fSQvLFxyXG4gICAgICAgIGVycm9yOiBcIkludmFsaWQgcGhvbmUgbnVtYmVyIGZvcm1hdCB1c2UgbGlrZSAwOTM0MzI0MzI0My5cIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgbm90ZToge1xyXG4gICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICAgIHZhbGlkYXRvcjoge1xyXG4gICAgICAgIHJlZ0V4OiAvXlthLXpBLVpdKyQvLFxyXG4gICAgICAgIGVycm9yOiBcIkludmFsaWQgbm90ZSBmb3JtYXQuXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIG1lc3NhZ2U6IHtcclxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgICB2YWxpZGF0b3I6IHtcclxuICAgICAgICByZWdFeDogL15bYS16QS1aXSskLyxcclxuICAgICAgICBlcnJvcjogXCJJbnZhbGlkIG1lc3NhZ2UgZm9ybWF0LlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBjb25zdCB7IHN0YXRlLCBoYW5kbGVPbkNoYW5nZSwgaGFuZGxlT25TdWJtaXQsIGRpc2FibGUgfSA9IHVzZUZvcm0oXHJcbiAgICBzdGF0ZVNjaGVtYSxcclxuICAgIHZhbGlkYXRpb25TdGF0ZVNjaGVtYSxcclxuICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgIGhhbmRsZVN0YXRlQ2hhbmdlXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZXJyb3JTdHlsZSA9IHtcclxuICAgIGNvbG9yOiBcInJlZFwiLFxyXG4gICAgZm9udFNpemU6IFwiMTNweFwiLFxyXG4gIH07XHJcbiAgLy8gY29uc29sZS5sb2coc3RhdGUpO1xyXG4gIGNvbnN0IHByb2NlZWRUb1BheW1lbnQgPSAoKSA9PiB7XHJcbiAgICBpZiAoaXNWYWxpZCgpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHN0YXRlKTtcclxuICAgICAgaWYgKGVuY3J5cHRJbmZvRGF0YShzdGF0ZSkpIHtcclxuICAgICAgICBSb3V0ZXIucHVzaChcIi9wYXltZW50XCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hlY2tCb3ggPSAoZSkgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgaWYgKENvb2tpZXMuZ2V0KFwidXNlclwiKSkge1xyXG4gICAgICAgIGNvbnN0IHVzZXJJbmZvID0gSlNPTi5wYXJzZShDb29raWVzLmdldChcInVzZXJcIikpO1xyXG4gICAgICAgIHNldHN0YXRlU2NoZW1hKHtcclxuICAgICAgICAgIC4uLnN0YXRlU2NoZW1hLFxyXG4gICAgICAgICAgc2hpcHBpbmdfZmlyc3ROYW1lOiB7IHZhbHVlOiB1c2VySW5mby5maXJzdF9uYW1lLCBlcnJvcjogXCJcIiB9LFxyXG4gICAgICAgICAgc2hpcHBpbmdfbGFzdE5hbWU6IHsgdmFsdWU6IHVzZXJJbmZvLmxhc3RfbmFtZSwgZXJyb3I6IFwiXCIgfSxcclxuICAgICAgICAgIGFkZHJlc3M6IHsgdmFsdWU6IHVzZXJJbmZvLmFkZHJlc3MsIGVycm9yOiBcIlwiIH0sXHJcbiAgICAgICAgICBjaXR5OiB7IHZhbHVlOiB1c2VySW5mby5jaXR5LCBlcnJvcjogXCJcIiB9LFxyXG4gICAgICAgICAgemlwOiB7IHZhbHVlOiB1c2VySW5mby56aXAsIGVycm9yOiBcIlwiIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFRvYXN0Q29udGFpbmVyIHRyYW5zaXRpb249e1pvb219IC8+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNoZWNrb3V0LWFyZWEgcHRiLTYwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVPblN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hpcHBpbmctZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVjayBmbG9hdC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoZWNrQm94fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImV4YW1wbGVDaGVjazFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFNhbWUgYXMgbXkgdXNlciBhZGRyZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+U2VuZCBteSBvcmRlcnMgdG88L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEZpcnN0IE5hbWUgPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNoaXBwaW5nX2ZpcnN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnNoaXBwaW5nX2ZpcnN0TmFtZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuc2hpcHBpbmdfZmlyc3ROYW1lLmVycm9yICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17ZXJyb3JTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuc2hpcHBpbmdfZmlyc3ROYW1lLmVycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIExhc3QgTmFtZSA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2hpcHBpbmdfbGFzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5zaGlwcGluZ19sYXN0TmFtZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuc2hpcHBpbmdfbGFzdE5hbWUuZXJyb3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtlcnJvclN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5zaGlwcGluZ19sYXN0TmFtZS5lcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlBob25lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNoaXBwaW5nX3Bob25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnNoaXBwaW5nX3Bob25lLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5zaGlwcGluZ19waG9uZS5lcnJvciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e2Vycm9yU3R5bGV9PntzdGF0ZS5zaGlwcGluZ19waG9uZS5lcnJvcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkcmVzcyA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2hpcHBpbmdfYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnNoaXBwaW5nX2FkZHJlc3MudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTdHJlZXQgYWRkcmVzcywgSG91c2UgTnVtYmVyIC8gQ29tcGFueSBuYW1lLCBCYXJhbmdnYXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5zaGlwcGluZ19hZGRyZXNzLmVycm9yICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17ZXJyb3JTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuc2hpcHBpbmdfYWRkcmVzcy5lcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgVG93biAvIENpdHkgPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNoaXBwaW5nX2NpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5zaGlwcGluZ19jaXR5LnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5zaGlwcGluZ19jaXR5LmVycm9yICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17ZXJyb3JTdHlsZX0+e3N0YXRlLnNoaXBwaW5nX2NpdHkuZXJyb3J9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgUG9zdGNvZGUgLyBaaXAgPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNoaXBwaW5nX3ppcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnNoaXBwaW5nX3ppcC52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuc2hpcHBpbmdfemlwLmVycm9yICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17ZXJyb3JTdHlsZX0+e3N0YXRlLnNoaXBwaW5nX3ppcC5lcnJvcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiZGl2aWRlckNsYXNzXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpbGxpbmctZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj5Zb3VyIEluZm88L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEZpcnN0IE5hbWUgPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJpbGxpbmdfZmlyc3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuYmlsbGluZ19maXJzdE5hbWUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIEZpcnN0bmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlLmJpbGxpbmdfZmlyc3ROYW1lLmVycm9yICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17ZXJyb3JTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuYmlsbGluZ19maXJzdE5hbWUuZXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTGFzdCBOYW1lIDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiaWxsaW5nX2xhc3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuYmlsbGluZ19sYXN0TmFtZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgTGFzdG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5iaWxsaW5nX2xhc3ROYW1lLmVycm9yICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17ZXJyb3JTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuYmlsbGluZ19sYXN0TmFtZS5lcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEVtYWlsIEFkZHJlc3MgPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiaWxsaW5nX2VtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuYmlsbGluZ19lbWFpbC52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgZW1haWwgKEZvciBPcmRlciBDb25maXJtYXRpb24pXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuYmlsbGluZ19lbWFpbC5lcnJvciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e2Vycm9yU3R5bGV9PntzdGF0ZS5iaWxsaW5nX2VtYWlsLmVycm9yfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UGhvbmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmlsbGluZ19waG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5iaWxsaW5nX3Bob25lLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5iaWxsaW5nX3Bob25lLmVycm9yICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17ZXJyb3JTdHlsZX0+e3N0YXRlLmJpbGxpbmdfcGhvbmUuZXJyb3J9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm15LTMgZGl2aWRlckNsYXNzXCIgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlci1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPllvdXIgT3JkZXI8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8T3JkZXJTdW1tYXJ5IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LW1ldGhvZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cImRpcmVjdC1iYW5rLXRyYW5zZmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpby1ncm91cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGlyZWN0LWJhbmstdHJhbnNmZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIERpcmVjdCBCYW5rIFRyYW5zZmVyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICBNYWtlIHlvdXIgcGF5bWVudCBkaXJlY3RseSBpbnRvIG91ciBiYW5rIGFjY291bnQuIFBsZWFzZSB1c2VcclxuICAgICAgICAgICAgICAgICAgICB5b3VyIE9yZGVyIElEIGFzIHRoZSBwYXltZW50IHJlZmVyZW5jZS4gWW91ciBvcmRlciB3aWxsIG5vdFxyXG4gICAgICAgICAgICAgICAgICAgIGJlIHNoaXBwZWQgdW50aWwgdGhlIGZ1bmRzIGhhdmUgY2xlYXJlZCBpbiBvdXIgYWNjb3VudC5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJwYXlwYWxcIiBuYW1lPVwicmFkaW8tZ3JvdXBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGF5cGFsXCI+UGF5UGFsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cImNhc2gtb24tZGVsaXZlcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvLWdyb3VwXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2FzaC1vbi1kZWxpdmVyeVwiPkNhc2ggb24gRGVsaXZlcnk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8UGF5bWVudFxyXG4gICAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgYW1vdW50PXt0b3RhbEFtb3VudCAqIDEwMH1cclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGV9XHJcbiAgICAgICAgICAgICAgICAgIGlzVmFsaWQ9e2lzVmFsaWR9XHJcbiAgICAgICAgICAgICAgICAvPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcmRlci1idG5cIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgcGFkZGluZ1RvcDogXCIyMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tbGlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiOTAlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb2NlZWRUb1BheW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgUHJvY2VlZCB0byBQYXltZW50XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdG90YWw6IHN0YXRlLnRvdGFsLFxyXG4gICAgc2hpcHBpbmc6IHN0YXRlLnNoaXBwaW5nLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQ2hlY2tvdXRGb3JtKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
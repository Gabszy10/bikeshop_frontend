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
      value: "",
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_11__["ToastContainer"], {
    transition: react_toastify__WEBPACK_IMPORTED_MODULE_11__["Zoom"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 7
    }
  }), __jsx("section", {
    className: "checkout-area ptb-60",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 9
    }
  }, __jsx("form", {
    onSubmit: handleOnSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-lg-6 col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "shipping-details",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 19
    }
  }, "Send my orders to"), __jsx("div", {
    "class": "form-check",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 19
    }
  }, __jsx("input", {
    type: "checkbox",
    "class": "form-check-input",
    id: "exampleCheck1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 21
    }
  }), __jsx("label", {
    "class": "form-check-label",
    "for": "exampleCheck1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 21
    }
  }, "Check me out")), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "col-lg-6 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 23
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 25
    }
  }, "First Name ", __jsx("span", {
    className: "required",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
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
      lineNumber: 281,
      columnNumber: 25
    }
  }), state.shipping_firstName.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 27
    }
  }, state.shipping_firstName.error))), __jsx("div", {
    className: "col-lg-6 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 23
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 25
    }
  }, "Last Name ", __jsx("span", {
    className: "required",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
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
      lineNumber: 302,
      columnNumber: 25
    }
  }), state.shipping_lastName.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 27
    }
  }, state.shipping_lastName.error))), __jsx("div", {
    className: "col-lg-12 col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 23
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
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
      lineNumber: 321,
      columnNumber: 25
    }
  }), state.shipping_phone.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 27
    }
  }, state.shipping_phone.error))), __jsx("div", {
    className: "col-lg-12 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 23
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 25
    }
  }, "Address ", __jsx("span", {
    className: "required",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
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
      lineNumber: 340,
      columnNumber: 25
    }
  }), state.shipping_address.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 27
    }
  }, state.shipping_address.error))), __jsx("div", {
    className: "col-lg-12 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 23
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 25
    }
  }, "Town / City ", __jsx("span", {
    className: "required",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
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
      lineNumber: 362,
      columnNumber: 25
    }
  }), state.shipping_city.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 27
    }
  }, state.shipping_city.error))), __jsx("div", {
    className: "col-lg-6 col-md-6",
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
  }, "Postcode / Zip ", __jsx("span", {
    className: "required",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
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
      lineNumber: 381,
      columnNumber: 25
    }
  }), state.shipping_zip.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 27
    }
  }, state.shipping_zip.error))))), __jsx("hr", {
    className: "dividerClass",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "billing-details",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 19
    }
  }, "Your Info"), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "col-lg-6 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 23
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 25
    }
  }, "First Name ", __jsx("span", {
    className: "required",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
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
      lineNumber: 408,
      columnNumber: 25
    }
  }), state.billing_firstName.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 27
    }
  }, state.billing_firstName.error))), __jsx("div", {
    className: "col-lg-6 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 23
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427,
      columnNumber: 25
    }
  }, "Last Name ", __jsx("span", {
    className: "required",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
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
      lineNumber: 430,
      columnNumber: 25
    }
  }), state.billing_lastName.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 27
    }
  }, state.billing_lastName.error))), __jsx("div", {
    className: "col-lg-12 col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448,
      columnNumber: 23
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449,
      columnNumber: 25
    }
  }, "Email Address ", __jsx("span", {
    className: "required",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450,
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
      lineNumber: 452,
      columnNumber: 25
    }
  }), state.billing_email.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462,
      columnNumber: 27
    }
  }, state.billing_email.error))), __jsx("div", {
    className: "col-lg-12 col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468,
      columnNumber: 23
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469,
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
      lineNumber: 470,
      columnNumber: 25
    }
  }), state.billing_phone.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479,
      columnNumber: 27
    }
  }, state.billing_phone.error)))))), __jsx("hr", {
    className: "my-3 dividerClass",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "col-lg-6 col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "order-details",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489,
      columnNumber: 19
    }
  }, "Your Order"), __jsx(_OrderSummary__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490,
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
      lineNumber: 528,
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
      lineNumber: 532,
      columnNumber: 21
    }
  }, "Proceed to Payment")))))))));
}

_s(CheckoutForm, "kDW0j7EiW+3hD0CpLGsnBNxpUd8=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NoZWNrb3V0L0NoZWNrb3V0Rm9ybS5qcyJdLCJuYW1lcyI6WyJDaGVja291dEZvcm0iLCJ0b3RhbCIsInNoaXBwaW5nIiwiaG9zdCIsInByb2Nlc3MiLCJoYW5kbGVTdWJtaXQiLCJjb25zb2xlIiwibG9nIiwiY2FydCIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzdGF0ZSIsIm9yZGVyIiwib3JkZXJJdGVtcyIsInNoaXBwaW5nRmlyc3ROYW1lIiwic3RhdGVTY2hlbWEiLCJzaGlwcGluZ19maXJzdE5hbWUiLCJ2YWx1ZSIsInNoaXBwaW5nTGFzdE5hbWUiLCJzaGlwcGluZ19sYXN0TmFtZSIsInNoaXBwaW5nUGhvbmUiLCJzaGlwcGluZ19waG9uZSIsInNoaXBwaW5nQWRkcmVzcyIsInNoaXBwaW5nX2FkZHJlc3MiLCJzaGlwcGluZ0NpdHkiLCJzaGlwcGluZ19jaXR5Iiwic2hpcHBpbmdQcm92aW5jZSIsInNoaXBwaW5nWmlwIiwic2hpcHBpbmdfemlwIiwiZGVsaXZlcnlJbnN0cnVjdGlvbnMiLCJub3RlIiwiYmlsbGluZ0ZpcnN0TmFtZSIsImJpbGxpbmdfZmlyc3ROYW1lIiwiYmlsbGluZ0xhc3ROYW1lIiwiYmlsbGluZ19sYXN0TmFtZSIsImJpbGxpbmdQaG9uZSIsImJpbGxpbmdfcGhvbmUiLCJiaWxsaW5nRW1haWwiLCJiaWxsaW5nX2VtYWlsIiwiZGVsaXZlcnlEYXRlIiwiZGVsaXZlcnlfZGF0ZSIsImRlbGl2ZXJ5VGltZSIsInBheW1lbnRNZXRob2QiLCJheGlvcyIsInBvc3QiLCJyZXMiLCJjbGVhckRhdGEiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJyZXNwb25zZSIsInRvdGFsQW1vdW50IiwidG9GaXhlZCIsInVzZVN0YXRlIiwiZXJyb3IiLCJtZXNzYWdlIiwiZGVsaXZlcnlfdGltZSIsInNldHN0YXRlU2NoZW1hIiwiaGFuZGxlU3RhdGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsImhhbmRsZVRvYXN0IiwidG9hc3QiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsImlzVmFsaWQiLCJ2YWxpZGF0aW9uU3RhdGVTY2hlbWEiLCJyZXF1aXJlZCIsInZhbGlkYXRvciIsInJlZ0V4IiwidXNlRm9ybSIsImhhbmRsZU9uQ2hhbmdlIiwiaGFuZGxlT25TdWJtaXQiLCJkaXNhYmxlIiwiZXJyb3JTdHlsZSIsImNvbG9yIiwiZm9udFNpemUiLCJwcm9jZWVkVG9QYXltZW50IiwiZW5jcnlwdEluZm9EYXRhIiwiUm91dGVyIiwicHVzaCIsIlpvb20iLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nVG9wIiwid2lkdGgiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsT0FBMkM7QUFBQTs7QUFBQSxNQUFuQkMsS0FBbUIsUUFBbkJBLEtBQW1CO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQ3pDLE1BQUlDLElBQUksR0FBR0MsdUJBQVg7O0FBRUEsTUFBTUMsWUFBWTtBQUFBLGlNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNuQkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBQ0lDLGtCQUZlLEdBRVJDLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUJSLFVBQXJCLENBQVgsQ0FGUTtBQUduQkUscUJBQU8sQ0FBQ0MsR0FBUixDQUFZTSxLQUFaLEVBQW1CTCxJQUFuQjtBQUNJTSxtQkFKZSxHQUlQO0FBQ1ZDLDBCQUFVLEVBQUVQLElBREY7QUFFVlEsaUNBQWlCLEVB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R0FBUDtBQUlELENBTEQ7O0FBT2UyRiwwSEFBTyxDQUFDRCxlQUFELENBQVAsQ0FBeUI1RixZQUF6QixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxjaGVja291dC5qcy40YzNjNTUwMDU0YjNkNDNmODIzOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IE9yZGVyU3VtbWFyeSBmcm9tIFwiLi9PcmRlclN1bW1hcnlcIjtcclxuaW1wb3J0IFBheW1lbnQgZnJvbSBcIi4uL3BheW1lbnRzL1BheW1lbnRcIjtcclxuaW1wb3J0IHVzZUZvcm0gZnJvbSBcIi4vdXNlckZvcm1cIjtcclxuaW1wb3J0IENhbGVuZGFyIGZyb20gXCIuLi9jYWxlbmRhci9DYWxlbmRhclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCwgWm9vbSB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5pbXBvcnQgeyBlbmNyeXB0SW5mb0RhdGEgfSBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9pbmZvQWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBpc0RhdGVCZWZvcmVUb2RheSB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2Z1bmN0aW9uXCI7XHJcbmltcG9ydCB7IGNsZWFyRGF0YSB9IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2NhcnRBY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiBDaGVja291dEZvcm0oeyB0b3RhbCwgc2hpcHBpbmcgfSkge1xyXG4gIGxldCBob3N0ID0gcHJvY2Vzcy5lbnYuQVBJX1VSTDtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJGb3JtIHN1Ym1pdHRlZC5cIik7XHJcbiAgICBsZXQgY2FydCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvY2Vzcy5lbnYuQ0FSVF9DT09LSUUpKTtcclxuICAgIGNvbnNvbGUubG9nKHN0YXRlLCBjYXJ0KTtcclxuICAgIGxldCBvcmRlciA9IHtcclxuICAgICAgb3JkZXJJdGVtczogY2FydCxcclxuICAgICAgc2hpcHBpbmdGaXJzdE5hbWU6IHN0YXRlU2NoZW1hLnNoaXBwaW5nX2ZpcnN0TmFtZS52YWx1ZSxcclxuICAgICAgc2hpcHBpbmdMYXN0TmFtZTogc3RhdGVTY2hlbWEuc2hpcHBpbmdfbGFzdE5hbWUudmFsdWUsXHJcbiAgICAgIHNoaXBwaW5nUGhvbmU6IHN0YXRlU2NoZW1hLnNoaXBwaW5nX3Bob25lLnZhbHVlLFxyXG4gICAgICBzaGlwcGluZ0FkZHJlc3M6IHN0YXRlU2NoZW1hLnNoaXBwaW5nX2FkZHJlc3MudmFsdWUsXHJcbiAgICAgIHNoaXBwaW5nQ2l0eTogc3RhdGVTY2hlbWEuc2hpcHBpbmdfY2l0eS52YWx1ZSxcclxuICAgICAgc2hpcHBpbmdQcm92aW5jZTogXCJNZXRybyBNYW5pbGFcIixcclxuICAgICAgc2hpcHBpbmdaaXA6IHN0YXRlU2NoZW1hLnNoaXBwaW5nX3ppcC52YWx1ZSxcclxuICAgICAgZGVsaXZlcnlJbnN0cnVjdGlvbnM6IHN0YXRlU2NoZW1hLm5vdGUudmFsdWUsXHJcbiAgICAgIGJpbGxpbmdGaXJzdE5hbWU6IHN0YXRlU2NoZW1hLmJpbGxpbmdfZmlyc3ROYW1lLnZhbHVlLFxyXG4gICAgICBiaWxsaW5nTGFzdE5hbWU6IHN0YXRlU2NoZW1hLmJpbGxpbmdfbGFzdE5hbWUudmFsdWUsXHJcbiAgICAgIGJpbGxpbmdQaG9uZTogc3RhdGVTY2hlbWEuYmlsbGluZ19waG9uZS52YWx1ZSxcclxuICAgICAgYmlsbGluZ0VtYWlsOiBzdGF0ZVNjaGVtYS5iaWxsaW5nX2VtYWlsLnZhbHVlLFxyXG4gICAgICBkZWxpdmVyeURhdGU6IHN0YXRlU2NoZW1hLmRlbGl2ZXJ5X2RhdGUudmFsdWUsXHJcbiAgICAgIGRlbGl2ZXJ5VGltZTogXCJBbnl0aW1lXCIsXHJcbiAgICAgIHBheW1lbnRNZXRob2Q6IFwiQ09EXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7aG9zdH0vYXBpL3VzZXIvb3JkZXJgLCBvcmRlcik7XHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICBjbGVhckRhdGEoKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL3RoYW5reW91XCI7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLCBcIlJFU1wiKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgbGV0IHRvdGFsQW1vdW50ID0gKHRvdGFsICsgc2hpcHBpbmcpLnRvRml4ZWQoMik7XHJcblxyXG4gIGNvbnN0IFtzdGF0ZVNjaGVtYSwgc2V0c3RhdGVTY2hlbWFdID0gdXNlU3RhdGUoe1xyXG4gICAgc2hpcHBpbmdfZmlyc3ROYW1lOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxyXG4gICAgc2hpcHBpbmdfbGFzdE5hbWU6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXHJcbiAgICBzaGlwcGluZ19hZGRyZXNzOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxyXG4gICAgc2hpcHBpbmdfY2l0eTogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcclxuICAgIHNoaXBwaW5nX3ppcDogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcclxuICAgIGJpbGxpbmdfZW1haWw6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXHJcbiAgICBzaGlwcGluZ19waG9uZTogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcclxuICAgIGJpbGxpbmdfZmlyc3ROYW1lOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxyXG4gICAgYmlsbGluZ19sYXN0TmFtZTogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcclxuICAgIGJpbGxpbmdfcGhvbmU6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXHJcbiAgICBub3RlOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxyXG4gICAgbWVzc2FnZTogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcclxuICAgIGRlbGl2ZXJ5X2RhdGU6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXHJcbiAgICBkZWxpdmVyeV90aW1lOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdGF0ZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRzdGF0ZVNjaGVtYSh7XHJcbiAgICAgIC4uLnN0YXRlU2NoZW1hLFxyXG4gICAgICBbZS50YXJnZXQubmFtZV06IHsgdmFsdWU6IGUudGFyZ2V0LnZhbHVlLCBlcnJvcjogXCJcIiB9LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVG9hc3QgPSAobWVzc2FnZSkgPT4ge1xyXG4gICAgdG9hc3QuZXJyb3IobWVzc2FnZSwge1xyXG4gICAgICBwb3NpdGlvbjogXCJib3R0b20tbGVmdFwiLFxyXG4gICAgICBhdXRvQ2xvc2U6IDIwMDAsXHJcbiAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpc1ZhbGlkID0gKCkgPT4ge1xyXG4gICAgaWYgKCFzdGF0ZS5zaGlwcGluZ19sYXN0TmFtZS52YWx1ZSkge1xyXG4gICAgICBoYW5kbGVUb2FzdChcIlBsZWFzZSBpbnB1dCByZWNlaXZlciBsYXN0IG5hbWUuXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKCFzdGF0ZS5zaGlwcGluZ19maXJzdE5hbWUudmFsdWUpIHtcclxuICAgICAgaGFuZGxlVG9hc3QoXCJQbGVhc2UgaW5wdXQgcmVjZWl2ZXIgZmlyc3QgbmFtZS5cIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAoIXN0YXRlLnNoaXBwaW5nX2FkZHJlc3MudmFsdWUpIHtcclxuICAgICAgaGFuZGxlVG9hc3QoXCJQbGVhc2UgaW5wdXQgcmVjZWl2ZXIgYWRkcmVzcy5cIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAoIXN0YXRlLnNoaXBwaW5nX2NpdHkudmFsdWUpIHtcclxuICAgICAgaGFuZGxlVG9hc3QoXCJQbGVhc2UgaW5wdXQgcmVjZWl2ZXIgY2l0eS5cIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAoIXN0YXRlLnNoaXBwaW5nX3ppcC52YWx1ZSkge1xyXG4gICAgICBoYW5kbGVUb2FzdChcIlBsZWFzZSBpbnB1dCByZWNlaXZlciB6aXAuXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKCFzdGF0ZS5iaWxsaW5nX2VtYWlsLnZhbHVlKSB7XHJcbiAgICAgIGhhbmRsZVRvYXN0KFwiUGxlYXNlIGlucHV0IHlvdXIgZW1haWwgaW5mby5cIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAoIXN0YXRlLnNoaXBwaW5nX3Bob25lLnZhbHVlKSB7XHJcbiAgICAgIGhhbmRsZVRvYXN0KFwiUGxlYXNlIGlucHV0IHJlY2VpdmVyIGNvbnRhY3QgbnVtYmVyLlwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmICghc3RhdGUuYmlsbGluZ19waG9uZS52YWx1ZSkge1xyXG4gICAgICBoYW5kbGVUb2FzdChcIlBsZWFzZSBpbnB1dCB5b3VyIGNvbnRhY3QgbnVtYmVyLlwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmICghc3RhdGUuYmlsbGluZ19maXJzdE5hbWUudmFsdWUpIHtcclxuICAgICAgaGFuZGxlVG9hc3QoXCJQbGVhc2UgaW5wdXQgeW91ciBmaXJzdCBuYW1lLlwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmICghc3RhdGUuYmlsbGluZ19sYXN0TmFtZS52YWx1ZSkge1xyXG4gICAgICBoYW5kbGVUb2FzdChcIlBsZWFzZSBpbnB1dCB5b3VyIGxhc3QgbmFtZS5cIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAoIXN0YXRlLnNoaXBwaW5nX2FkZHJlc3MudmFsdWUpIHtcclxuICAgICAgaGFuZGxlVG9hc3QoXCJQbGVhc2UgaW5wdXQgcmVjZWl2ZXIgYWRkcmVzcy5cIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHZhbGlkYXRpb25TdGF0ZVNjaGVtYSA9IHtcclxuICAgIHNoaXBwaW5nX2ZpcnN0TmFtZToge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgdmFsaWRhdG9yOiB7XHJcbiAgICAgICAgcmVnRXg6IC9eW2EtekEtWl0rJC8sXHJcbiAgICAgICAgZXJyb3I6IFwiSW52YWxpZCBmaXJzdCBuYW1lIGZvcm1hdFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBkZWxpdmVyeV9kYXRlOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuXHJcbiAgICBkZWxpdmVyeV90aW1lOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuXHJcbiAgICBzaGlwcGluZ19sYXN0TmFtZToge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgdmFsaWRhdG9yOiB7XHJcbiAgICAgICAgcmVnRXg6IC9eW2EtekEtWl0rJC8sXHJcbiAgICAgICAgZXJyb3I6IFwiSW52YWxpZCBsYXN0IG5hbWUgZm9ybWF0LlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBzaGlwcGluZ19hZGRyZXNzOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICB2YWxpZGF0b3I6IHtcclxuICAgICAgICBlcnJvcjogXCJJbnZhbGlkIGFkZHJlc3MgZm9ybWF0LlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBzaGlwcGluZ19jaXR5OiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICB2YWxpZGF0b3I6IHtcclxuICAgICAgICBlcnJvcjogXCJJbnZhbGlkIGxhc3QgbmFtZSBmb3JtYXQuXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIHNoaXBwaW5nX3ppcDoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgdmFsaWRhdG9yOiB7XHJcbiAgICAgICAgcmVnRXg6IC9eXFxkezR9JHxeXFxkezR9LVxcZHs0fSQvLFxyXG4gICAgICAgIGVycm9yOiBcIkludmFsaWQgemlwIGZvcm1hdCwgdXNlIGxpa2UgMTIzNC5cIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgYmlsbGluZ19lbWFpbDoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgdmFsaWRhdG9yOiB7XHJcbiAgICAgICAgcmVnRXg6XHJcbiAgICAgICAgICAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLyxcclxuICAgICAgICBlcnJvcjogXCJJbnZhbGlkIGVtYWlsIGZvcm1hdCwgdXNlIGxpa2UgZXhhbXBsZUBnbWFpbC5jb21cIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgc2hpcHBpbmdfcGhvbmU6IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIHZhbGlkYXRvcjoge1xyXG4gICAgICAgIHJlZ0V4OiAvXigwOXxcXCs2MzkpXFxkezl9JC8sXHJcbiAgICAgICAgZXJyb3I6IFwiSW52YWxpZCBwaG9uZSBudW1iZXIgZm9ybWF0IHVzZSBsaWtlIDA5MzQzMjQzMjQzLlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBiaWxsaW5nX2ZpcnN0TmFtZToge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgdmFsaWRhdG9yOiB7XHJcbiAgICAgICAgcmVnRXg6IC9eW2EtekEtWl0rJC8sXHJcbiAgICAgICAgZXJyb3I6IFwiSW52YWxpZCBmaXJzdCBuYW1lIGZvcm1hdC5cIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgYmlsbGluZ19sYXN0TmFtZToge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgdmFsaWRhdG9yOiB7XHJcbiAgICAgICAgcmVnRXg6IC9eW2EtekEtWl0rJC8sXHJcbiAgICAgICAgZXJyb3I6IFwiSW52YWxpZCBsYXN0IG5hbWUgZm9ybWF0LlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBiaWxsaW5nX3Bob25lOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICB2YWxpZGF0b3I6IHtcclxuICAgICAgICByZWdFeDogL14oMDl8XFwrNjM5KVxcZHs5fSQvLFxyXG4gICAgICAgIGVycm9yOiBcIkludmFsaWQgcGhvbmUgbnVtYmVyIGZvcm1hdCB1c2UgbGlrZSAwOTM0MzI0MzI0My5cIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgbm90ZToge1xyXG4gICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICAgIHZhbGlkYXRvcjoge1xyXG4gICAgICAgIHJlZ0V4OiAvXlthLXpBLVpdKyQvLFxyXG4gICAgICAgIGVycm9yOiBcIkludmFsaWQgbm90ZSBmb3JtYXQuXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIG1lc3NhZ2U6IHtcclxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgICB2YWxpZGF0b3I6IHtcclxuICAgICAgICByZWdFeDogL15bYS16QS1aXSskLyxcclxuICAgICAgICBlcnJvcjogXCJJbnZhbGlkIG1lc3NhZ2UgZm9ybWF0LlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBjb25zdCB7IHN0YXRlLCBoYW5kbGVPbkNoYW5nZSwgaGFuZGxlT25TdWJtaXQsIGRpc2FibGUgfSA9IHVzZUZvcm0oXHJcbiAgICBzdGF0ZVNjaGVtYSxcclxuICAgIHZhbGlkYXRpb25TdGF0ZVNjaGVtYSxcclxuICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgIGhhbmRsZVN0YXRlQ2hhbmdlXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZXJyb3JTdHlsZSA9IHtcclxuICAgIGNvbG9yOiBcInJlZFwiLFxyXG4gICAgZm9udFNpemU6IFwiMTNweFwiLFxyXG4gIH07XHJcbiAgLy8gY29uc29sZS5sb2coc3RhdGUpO1xyXG4gIGNvbnN0IHByb2NlZWRUb1BheW1lbnQgPSAoKSA9PiB7XHJcbiAgICBpZiAoaXNWYWxpZCgpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHN0YXRlKTtcclxuICAgICAgaWYgKGVuY3J5cHRJbmZvRGF0YShzdGF0ZSkpIHtcclxuICAgICAgICBSb3V0ZXIucHVzaChcIi9wYXltZW50XCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxUb2FzdENvbnRhaW5lciB0cmFuc2l0aW9uPXtab29tfSAvPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjaGVja291dC1hcmVhIHB0Yi02MFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlT25TdWJtaXR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoaXBwaW5nLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+U2VuZCBteSBvcmRlcnMgdG88L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cImV4YW1wbGVDaGVjazFcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImV4YW1wbGVDaGVjazFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIENoZWNrIG1lIG91dFxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEZpcnN0IE5hbWUgPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNoaXBwaW5nX2ZpcnN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnNoaXBwaW5nX2ZpcnN0TmFtZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuc2hpcHBpbmdfZmlyc3ROYW1lLmVycm9yICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17ZXJyb3JTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuc2hpcHBpbmdfZmlyc3ROYW1lLmVycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIExhc3QgTmFtZSA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2hpcHBpbmdfbGFzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5zaGlwcGluZ19sYXN0TmFtZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuc2hpcHBpbmdfbGFzdE5hbWUuZXJyb3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtlcnJvclN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5zaGlwcGluZ19sYXN0TmFtZS5lcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlBob25lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNoaXBwaW5nX3Bob25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnNoaXBwaW5nX3Bob25lLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5zaGlwcGluZ19waG9uZS5lcnJvciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e2Vycm9yU3R5bGV9PntzdGF0ZS5zaGlwcGluZ19waG9uZS5lcnJvcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkcmVzcyA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2hpcHBpbmdfYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnNoaXBwaW5nX2FkZHJlc3MudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTdHJlZXQgYWRkcmVzcywgSG91c2UgTnVtYmVyIC8gQ29tcGFueSBuYW1lLCBCYXJhbmdnYXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5zaGlwcGluZ19hZGRyZXNzLmVycm9yICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17ZXJyb3JTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuc2hpcHBpbmdfYWRkcmVzcy5lcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgVG93biAvIENpdHkgPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNoaXBwaW5nX2NpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5zaGlwcGluZ19jaXR5LnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5zaGlwcGluZ19jaXR5LmVycm9yICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17ZXJyb3JTdHlsZX0+e3N0YXRlLnNoaXBwaW5nX2NpdHkuZXJyb3J9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgUG9zdGNvZGUgLyBaaXAgPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNoaXBwaW5nX3ppcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnNoaXBwaW5nX3ppcC52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuc2hpcHBpbmdfemlwLmVycm9yICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17ZXJyb3JTdHlsZX0+e3N0YXRlLnNoaXBwaW5nX3ppcC5lcnJvcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiZGl2aWRlckNsYXNzXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpbGxpbmctZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj5Zb3VyIEluZm88L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEZpcnN0IE5hbWUgPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJpbGxpbmdfZmlyc3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuYmlsbGluZ19maXJzdE5hbWUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIEZpcnN0bmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlLmJpbGxpbmdfZmlyc3ROYW1lLmVycm9yICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17ZXJyb3JTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuYmlsbGluZ19maXJzdE5hbWUuZXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTGFzdCBOYW1lIDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiaWxsaW5nX2xhc3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuYmlsbGluZ19sYXN0TmFtZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgTGFzdG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5iaWxsaW5nX2xhc3ROYW1lLmVycm9yICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17ZXJyb3JTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuYmlsbGluZ19sYXN0TmFtZS5lcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEVtYWlsIEFkZHJlc3MgPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiaWxsaW5nX2VtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuYmlsbGluZ19lbWFpbC52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgZW1haWwgKEZvciBPcmRlciBDb25maXJtYXRpb24pXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuYmlsbGluZ19lbWFpbC5lcnJvciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e2Vycm9yU3R5bGV9PntzdGF0ZS5iaWxsaW5nX2VtYWlsLmVycm9yfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UGhvbmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmlsbGluZ19waG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5iaWxsaW5nX3Bob25lLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5iaWxsaW5nX3Bob25lLmVycm9yICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17ZXJyb3JTdHlsZX0+e3N0YXRlLmJpbGxpbmdfcGhvbmUuZXJyb3J9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm15LTMgZGl2aWRlckNsYXNzXCIgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlci1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPllvdXIgT3JkZXI8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8T3JkZXJTdW1tYXJ5IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJwYXltZW50LW1ldGhvZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cImRpcmVjdC1iYW5rLXRyYW5zZmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpby1ncm91cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGlyZWN0LWJhbmstdHJhbnNmZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIERpcmVjdCBCYW5rIFRyYW5zZmVyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICBNYWtlIHlvdXIgcGF5bWVudCBkaXJlY3RseSBpbnRvIG91ciBiYW5rIGFjY291bnQuIFBsZWFzZSB1c2VcclxuICAgICAgICAgICAgICAgICAgICB5b3VyIE9yZGVyIElEIGFzIHRoZSBwYXltZW50IHJlZmVyZW5jZS4gWW91ciBvcmRlciB3aWxsIG5vdFxyXG4gICAgICAgICAgICAgICAgICAgIGJlIHNoaXBwZWQgdW50aWwgdGhlIGZ1bmRzIGhhdmUgY2xlYXJlZCBpbiBvdXIgYWNjb3VudC5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJwYXlwYWxcIiBuYW1lPVwicmFkaW8tZ3JvdXBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGF5cGFsXCI+UGF5UGFsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cImNhc2gtb24tZGVsaXZlcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvLWdyb3VwXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2FzaC1vbi1kZWxpdmVyeVwiPkNhc2ggb24gRGVsaXZlcnk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8UGF5bWVudFxyXG4gICAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgYW1vdW50PXt0b3RhbEFtb3VudCAqIDEwMH1cclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGV9XHJcbiAgICAgICAgICAgICAgICAgIGlzVmFsaWQ9e2lzVmFsaWR9XHJcbiAgICAgICAgICAgICAgICAvPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcmRlci1idG5cIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgcGFkZGluZ1RvcDogXCIyMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tbGlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiOTAlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb2NlZWRUb1BheW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgUHJvY2VlZCB0byBQYXltZW50XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdG90YWw6IHN0YXRlLnRvdGFsLFxyXG4gICAgc2hpcHBpbmc6IHN0YXRlLnNoaXBwaW5nLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQ2hlY2tvdXRGb3JtKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
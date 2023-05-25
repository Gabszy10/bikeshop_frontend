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
    "class": "form-check float-right mb-10",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NoZWNrb3V0L0NoZWNrb3V0Rm9ybS5qcyJdLCJuYW1lcyI6WyJDaGVja291dEZvcm0iLCJ0b3RhbCIsInNoaXBwaW5nIiwiaG9zdCIsInByb2Nlc3MiLCJoYW5kbGVTdWJtaXQiLCJjb25zb2xlIiwibG9nIiwiY2FydCIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzdGF0ZSIsIm9yZGVyIiwib3JkZXJJdGVtcyIsInNoaXBwaW5nRmlyc3ROYW1lIiwic3RhdGVTY2hlbWEiLCJzaGlwcGluZ19maXJzdE5hbWUiLCJ2YWx1ZSIsInNoaXBwaW5nTGFzdE5hbWUiLCJzaGlwcGluZ19sYXN0TmFtZSIsInNoaXBwaW5nUGhvbmUiLCJzaGlwcGluZ19waG9uZSIsInNoaXBwaW5nQWRkcmVzcyIsInNoaXBwaW5nX2FkZHJlc3MiLCJzaGlwcGluZ0NpdHkiLCJzaGlwcGluZ19jaXR5Iiwic2hpcHBpbmdQcm92aW5jZSIsInNoaXBwaW5nWmlwIiwic2hpcHBpbmdfemlwIiwiZGVsaXZlcnlJbnN0cnVjdGlvbnMiLCJub3RlIiwiYmlsbGluZ0ZpcnN0TmFtZSIsImJpbGxpbmdfZmlyc3ROYW1lIiwiYmlsbGluZ0xhc3ROYW1lIiwiYmlsbGluZ19sYXN0TmFtZSIsImJpbGxpbmdQaG9uZSIsImJpbGxpbmdfcGhvbmUiLCJiaWxsaW5nRW1haWwiLCJiaWxsaW5nX2VtYWlsIiwiZGVsaXZlcnlEYXRlIiwiZGVsaXZlcnlfZGF0ZSIsImRlbGl2ZXJ5VGltZSIsInBheW1lbnRNZXRob2QiLCJheGlvcyIsInBvc3QiLCJyZXMiLCJjbGVhckRhdGEiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJyZXNwb25zZSIsInRvdGFsQW1vdW50IiwidG9GaXhlZCIsInVzZVN0YXRlIiwiZXJyb3IiLCJtZXNzYWdlIiwiZGVsaXZlcnlfdGltZSIsInNldHN0YXRlU2NoZW1hIiwiaGFuZGxlU3RhdGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsImhhbmRsZVRvYXN0IiwidG9hc3QiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsImlzVmFsaWQiLCJ2YWxpZGF0aW9uU3RhdGVTY2hlbWEiLCJyZXF1aXJlZCIsInZhbGlkYXRvciIsInJlZ0V4IiwidXNlRm9ybSIsImhhbmRsZU9uQ2hhbmdlIiwiaGFuZGxlT25TdWJtaXQiLCJkaXNhYmxlIiwiZXJyb3JTdHlsZSIsImNvbG9yIiwiZm9udFNpemUiLCJwcm9jZWVkVG9QYXltZW50IiwiZW5jcnlwdEluZm9EYXRhIiwiUm91dGVyIiwicHVzaCIsIlpvb20iLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nVG9wIiwid2lkdGgiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsT0FBMkM7QUFBQTs7QUFBQSxNQUFuQkMsS0FBbUIsUUFBbkJBLEtBQW1CO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQ3pDLE1BQUlDLElBQUksR0FBR0MsdUJBQVg7O0FBRUEsTUFBTUMsWUFBWTtBQUFBLGlNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNuQkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBQ0lDLGtCQUZlLEdBRVJDLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUJSLFVBQXJCLENBQVgsQ0FGUTtBQUduQkUscUJBQU8sQ0FBQ0MsR0FBUixDQUFZTSxLQUFaLEVBQW1CTCxJQUFuQjtBQUNJTSxtQkFKZSxHQUlQO0FBQ1ZDLDBCQUFVLEVBQUVQLElBREY7QUFFVlEsaUNBQWlCLEVB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LEdBQVA7QUFJRCxDQUxEOztBQU9lMkYsMEhBQU8sQ0FBQ0QsZUFBRCxDQUFQLENBQXlCNUYsWUFBekIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcY2hlY2tvdXQuanMuNzZjMWNlODNiNmI3ODFjODBlYWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBPcmRlclN1bW1hcnkgZnJvbSBcIi4vT3JkZXJTdW1tYXJ5XCI7XHJcbmltcG9ydCBQYXltZW50IGZyb20gXCIuLi9wYXltZW50cy9QYXltZW50XCI7XHJcbmltcG9ydCB1c2VGb3JtIGZyb20gXCIuL3VzZXJGb3JtXCI7XHJcbmltcG9ydCBDYWxlbmRhciBmcm9tIFwiLi4vY2FsZW5kYXIvQ2FsZW5kYXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QsIFpvb20gfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuaW1wb3J0IHsgZW5jcnlwdEluZm9EYXRhIH0gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvaW5mb0FjdGlvbnNcIjtcclxuaW1wb3J0IHsgaXNEYXRlQmVmb3JlVG9kYXkgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9mdW5jdGlvblwiO1xyXG5pbXBvcnQgeyBjbGVhckRhdGEgfSBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9jYXJ0QWN0aW9uc1wiO1xyXG5cclxuZnVuY3Rpb24gQ2hlY2tvdXRGb3JtKHsgdG90YWwsIHNoaXBwaW5nIH0pIHtcclxuICBsZXQgaG9zdCA9IHByb2Nlc3MuZW52LkFQSV9VUkw7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiRm9ybSBzdWJtaXR0ZWQuXCIpO1xyXG4gICAgbGV0IGNhcnQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2Nlc3MuZW52LkNBUlRfQ09PS0lFKSk7XHJcbiAgICBjb25zb2xlLmxvZyhzdGF0ZSwgY2FydCk7XHJcbiAgICBsZXQgb3JkZXIgPSB7XHJcbiAgICAgIG9yZGVySXRlbXM6IGNhcnQsXHJcbiAgICAgIHNoaXBwaW5nRmlyc3ROYW1lOiBzdGF0ZVNjaGVtYS5zaGlwcGluZ19maXJzdE5hbWUudmFsdWUsXHJcbiAgICAgIHNoaXBwaW5nTGFzdE5hbWU6IHN0YXRlU2NoZW1hLnNoaXBwaW5nX2xhc3ROYW1lLnZhbHVlLFxyXG4gICAgICBzaGlwcGluZ1Bob25lOiBzdGF0ZVNjaGVtYS5zaGlwcGluZ19waG9uZS52YWx1ZSxcclxuICAgICAgc2hpcHBpbmdBZGRyZXNzOiBzdGF0ZVNjaGVtYS5zaGlwcGluZ19hZGRyZXNzLnZhbHVlLFxyXG4gICAgICBzaGlwcGluZ0NpdHk6IHN0YXRlU2NoZW1hLnNoaXBwaW5nX2NpdHkudmFsdWUsXHJcbiAgICAgIHNoaXBwaW5nUHJvdmluY2U6IFwiTWV0cm8gTWFuaWxhXCIsXHJcbiAgICAgIHNoaXBwaW5nWmlwOiBzdGF0ZVNjaGVtYS5zaGlwcGluZ196aXAudmFsdWUsXHJcbiAgICAgIGRlbGl2ZXJ5SW5zdHJ1Y3Rpb25zOiBzdGF0ZVNjaGVtYS5ub3RlLnZhbHVlLFxyXG4gICAgICBiaWxsaW5nRmlyc3ROYW1lOiBzdGF0ZVNjaGVtYS5iaWxsaW5nX2ZpcnN0TmFtZS52YWx1ZSxcclxuICAgICAgYmlsbGluZ0xhc3ROYW1lOiBzdGF0ZVNjaGVtYS5iaWxsaW5nX2xhc3ROYW1lLnZhbHVlLFxyXG4gICAgICBiaWxsaW5nUGhvbmU6IHN0YXRlU2NoZW1hLmJpbGxpbmdfcGhvbmUudmFsdWUsXHJcbiAgICAgIGJpbGxpbmdFbWFpbDogc3RhdGVTY2hlbWEuYmlsbGluZ19lbWFpbC52YWx1ZSxcclxuICAgICAgZGVsaXZlcnlEYXRlOiBzdGF0ZVNjaGVtYS5kZWxpdmVyeV9kYXRlLnZhbHVlLFxyXG4gICAgICBkZWxpdmVyeVRpbWU6IFwiQW55dGltZVwiLFxyXG4gICAgICBwYXltZW50TWV0aG9kOiBcIkNPRFwiLFxyXG4gICAgfTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGAke2hvc3R9L2FwaS91c2VyL29yZGVyYCwgb3JkZXIpO1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgY2xlYXJEYXRhKCk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi90aGFua3lvdVwiO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcywgXCJSRVNcIik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGxldCB0b3RhbEFtb3VudCA9ICh0b3RhbCArIHNoaXBwaW5nKS50b0ZpeGVkKDIpO1xyXG5cclxuICBjb25zdCBbc3RhdGVTY2hlbWEsIHNldHN0YXRlU2NoZW1hXSA9IHVzZVN0YXRlKHtcclxuICAgIHNoaXBwaW5nX2ZpcnN0TmFtZTogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcclxuICAgIHNoaXBwaW5nX2xhc3ROYW1lOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxyXG4gICAgc2hpcHBpbmdfYWRkcmVzczogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcclxuICAgIHNoaXBwaW5nX2NpdHk6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXHJcbiAgICBzaGlwcGluZ196aXA6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXHJcbiAgICBiaWxsaW5nX2VtYWlsOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxyXG4gICAgc2hpcHBpbmdfcGhvbmU6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXHJcbiAgICBiaWxsaW5nX2ZpcnN0TmFtZTogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcclxuICAgIGJpbGxpbmdfbGFzdE5hbWU6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXHJcbiAgICBiaWxsaW5nX3Bob25lOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxyXG4gICAgbm90ZTogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcclxuICAgIG1lc3NhZ2U6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXHJcbiAgICBkZWxpdmVyeV9kYXRlOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxyXG4gICAgZGVsaXZlcnlfdGltZTogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3RhdGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0c3RhdGVTY2hlbWEoe1xyXG4gICAgICAuLi5zdGF0ZVNjaGVtYSxcclxuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiB7IHZhbHVlOiBlLnRhcmdldC52YWx1ZSwgZXJyb3I6IFwiXCIgfSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRvYXN0ID0gKG1lc3NhZ2UpID0+IHtcclxuICAgIHRvYXN0LmVycm9yKG1lc3NhZ2UsIHtcclxuICAgICAgcG9zaXRpb246IFwiYm90dG9tLWxlZnRcIixcclxuICAgICAgYXV0b0Nsb3NlOiAyMDAwLFxyXG4gICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaXNWYWxpZCA9ICgpID0+IHtcclxuICAgIGlmICghc3RhdGUuc2hpcHBpbmdfbGFzdE5hbWUudmFsdWUpIHtcclxuICAgICAgaGFuZGxlVG9hc3QoXCJQbGVhc2UgaW5wdXQgcmVjZWl2ZXIgbGFzdCBuYW1lLlwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmICghc3RhdGUuc2hpcHBpbmdfZmlyc3ROYW1lLnZhbHVlKSB7XHJcbiAgICAgIGhhbmRsZVRvYXN0KFwiUGxlYXNlIGlucHV0IHJlY2VpdmVyIGZpcnN0IG5hbWUuXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKCFzdGF0ZS5zaGlwcGluZ19hZGRyZXNzLnZhbHVlKSB7XHJcbiAgICAgIGhhbmRsZVRvYXN0KFwiUGxlYXNlIGlucHV0IHJlY2VpdmVyIGFkZHJlc3MuXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKCFzdGF0ZS5zaGlwcGluZ19jaXR5LnZhbHVlKSB7XHJcbiAgICAgIGhhbmRsZVRvYXN0KFwiUGxlYXNlIGlucHV0IHJlY2VpdmVyIGNpdHkuXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKCFzdGF0ZS5zaGlwcGluZ196aXAudmFsdWUpIHtcclxuICAgICAgaGFuZGxlVG9hc3QoXCJQbGVhc2UgaW5wdXQgcmVjZWl2ZXIgemlwLlwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmICghc3RhdGUuYmlsbGluZ19lbWFpbC52YWx1ZSkge1xyXG4gICAgICBoYW5kbGVUb2FzdChcIlBsZWFzZSBpbnB1dCB5b3VyIGVtYWlsIGluZm8uXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKCFzdGF0ZS5zaGlwcGluZ19waG9uZS52YWx1ZSkge1xyXG4gICAgICBoYW5kbGVUb2FzdChcIlBsZWFzZSBpbnB1dCByZWNlaXZlciBjb250YWN0IG51bWJlci5cIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAoIXN0YXRlLmJpbGxpbmdfcGhvbmUudmFsdWUpIHtcclxuICAgICAgaGFuZGxlVG9hc3QoXCJQbGVhc2UgaW5wdXQgeW91ciBjb250YWN0IG51bWJlci5cIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAoIXN0YXRlLmJpbGxpbmdfZmlyc3ROYW1lLnZhbHVlKSB7XHJcbiAgICAgIGhhbmRsZVRvYXN0KFwiUGxlYXNlIGlucHV0IHlvdXIgZmlyc3QgbmFtZS5cIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAoIXN0YXRlLmJpbGxpbmdfbGFzdE5hbWUudmFsdWUpIHtcclxuICAgICAgaGFuZGxlVG9hc3QoXCJQbGVhc2UgaW5wdXQgeW91ciBsYXN0IG5hbWUuXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKCFzdGF0ZS5zaGlwcGluZ19hZGRyZXNzLnZhbHVlKSB7XHJcbiAgICAgIGhhbmRsZVRvYXN0KFwiUGxlYXNlIGlucHV0IHJlY2VpdmVyIGFkZHJlc3MuXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCB2YWxpZGF0aW9uU3RhdGVTY2hlbWEgPSB7XHJcbiAgICBzaGlwcGluZ19maXJzdE5hbWU6IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIHZhbGlkYXRvcjoge1xyXG4gICAgICAgIHJlZ0V4OiAvXlthLXpBLVpdKyQvLFxyXG4gICAgICAgIGVycm9yOiBcIkludmFsaWQgZmlyc3QgbmFtZSBmb3JtYXRcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgZGVsaXZlcnlfZGF0ZToge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcblxyXG4gICAgZGVsaXZlcnlfdGltZToge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcblxyXG4gICAgc2hpcHBpbmdfbGFzdE5hbWU6IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIHZhbGlkYXRvcjoge1xyXG4gICAgICAgIHJlZ0V4OiAvXlthLXpBLVpdKyQvLFxyXG4gICAgICAgIGVycm9yOiBcIkludmFsaWQgbGFzdCBuYW1lIGZvcm1hdC5cIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgc2hpcHBpbmdfYWRkcmVzczoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgdmFsaWRhdG9yOiB7XHJcbiAgICAgICAgZXJyb3I6IFwiSW52YWxpZCBhZGRyZXNzIGZvcm1hdC5cIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgc2hpcHBpbmdfY2l0eToge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgdmFsaWRhdG9yOiB7XHJcbiAgICAgICAgZXJyb3I6IFwiSW52YWxpZCBsYXN0IG5hbWUgZm9ybWF0LlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBzaGlwcGluZ196aXA6IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIHZhbGlkYXRvcjoge1xyXG4gICAgICAgIHJlZ0V4OiAvXlxcZHs0fSR8XlxcZHs0fS1cXGR7NH0kLyxcclxuICAgICAgICBlcnJvcjogXCJJbnZhbGlkIHppcCBmb3JtYXQsIHVzZSBsaWtlIDEyMzQuXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIGJpbGxpbmdfZW1haWw6IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIHZhbGlkYXRvcjoge1xyXG4gICAgICAgIHJlZ0V4OlxyXG4gICAgICAgICAgL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC8sXHJcbiAgICAgICAgZXJyb3I6IFwiSW52YWxpZCBlbWFpbCBmb3JtYXQsIHVzZSBsaWtlIGV4YW1wbGVAZ21haWwuY29tXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIHNoaXBwaW5nX3Bob25lOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICB2YWxpZGF0b3I6IHtcclxuICAgICAgICByZWdFeDogL14oMDl8XFwrNjM5KVxcZHs5fSQvLFxyXG4gICAgICAgIGVycm9yOiBcIkludmFsaWQgcGhvbmUgbnVtYmVyIGZvcm1hdCB1c2UgbGlrZSAwOTM0MzI0MzI0My5cIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgYmlsbGluZ19maXJzdE5hbWU6IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIHZhbGlkYXRvcjoge1xyXG4gICAgICAgIHJlZ0V4OiAvXlthLXpBLVpdKyQvLFxyXG4gICAgICAgIGVycm9yOiBcIkludmFsaWQgZmlyc3QgbmFtZSBmb3JtYXQuXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIGJpbGxpbmdfbGFzdE5hbWU6IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIHZhbGlkYXRvcjoge1xyXG4gICAgICAgIHJlZ0V4OiAvXlthLXpBLVpdKyQvLFxyXG4gICAgICAgIGVycm9yOiBcIkludmFsaWQgbGFzdCBuYW1lIGZvcm1hdC5cIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgYmlsbGluZ19waG9uZToge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgdmFsaWRhdG9yOiB7XHJcbiAgICAgICAgcmVnRXg6IC9eKDA5fFxcKzYzOSlcXGR7OX0kLyxcclxuICAgICAgICBlcnJvcjogXCJJbnZhbGlkIHBob25lIG51bWJlciBmb3JtYXQgdXNlIGxpa2UgMDkzNDMyNDMyNDMuXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIG5vdGU6IHtcclxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgICB2YWxpZGF0b3I6IHtcclxuICAgICAgICByZWdFeDogL15bYS16QS1aXSskLyxcclxuICAgICAgICBlcnJvcjogXCJJbnZhbGlkIG5vdGUgZm9ybWF0LlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBtZXNzYWdlOiB7XHJcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgICAgdmFsaWRhdG9yOiB7XHJcbiAgICAgICAgcmVnRXg6IC9eW2EtekEtWl0rJC8sXHJcbiAgICAgICAgZXJyb3I6IFwiSW52YWxpZCBtZXNzYWdlIGZvcm1hdC5cIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgeyBzdGF0ZSwgaGFuZGxlT25DaGFuZ2UsIGhhbmRsZU9uU3VibWl0LCBkaXNhYmxlIH0gPSB1c2VGb3JtKFxyXG4gICAgc3RhdGVTY2hlbWEsXHJcbiAgICB2YWxpZGF0aW9uU3RhdGVTY2hlbWEsXHJcbiAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICBoYW5kbGVTdGF0ZUNoYW5nZVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGVycm9yU3R5bGUgPSB7XHJcbiAgICBjb2xvcjogXCJyZWRcIixcclxuICAgIGZvbnRTaXplOiBcIjEzcHhcIixcclxuICB9O1xyXG4gIC8vIGNvbnNvbGUubG9nKHN0YXRlKTtcclxuICBjb25zdCBwcm9jZWVkVG9QYXltZW50ID0gKCkgPT4ge1xyXG4gICAgaWYgKGlzVmFsaWQoKSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhzdGF0ZSk7XHJcbiAgICAgIGlmIChlbmNyeXB0SW5mb0RhdGEoc3RhdGUpKSB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goXCIvcGF5bWVudFwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8VG9hc3RDb250YWluZXIgdHJhbnNpdGlvbj17Wm9vbX0gLz5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2hlY2tvdXQtYXJlYSBwdGItNjBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZU9uU3VibWl0fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGlwcGluZy1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPlNlbmQgbXkgb3JkZXJzIHRvPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2sgZmxvYXQtcmlnaHQgbWItMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJleGFtcGxlQ2hlY2sxXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJleGFtcGxlQ2hlY2sxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDaGVjayBtZSBvdXRcclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBGaXJzdCBOYW1lIDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzaGlwcGluZ19maXJzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5zaGlwcGluZ19maXJzdE5hbWUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlLnNoaXBwaW5nX2ZpcnN0TmFtZS5lcnJvciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e2Vycm9yU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlLnNoaXBwaW5nX2ZpcnN0TmFtZS5lcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBMYXN0IE5hbWUgPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNoaXBwaW5nX2xhc3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuc2hpcHBpbmdfbGFzdE5hbWUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlLnNoaXBwaW5nX2xhc3ROYW1lLmVycm9yICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17ZXJyb3JTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuc2hpcHBpbmdfbGFzdE5hbWUuZXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5QaG9uZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzaGlwcGluZ19waG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5zaGlwcGluZ19waG9uZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuc2hpcHBpbmdfcGhvbmUuZXJyb3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtlcnJvclN0eWxlfT57c3RhdGUuc2hpcHBpbmdfcGhvbmUuZXJyb3J9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEFkZHJlc3MgPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNoaXBwaW5nX2FkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5zaGlwcGluZ19hZGRyZXNzLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3RyZWV0IGFkZHJlc3MsIEhvdXNlIE51bWJlciAvIENvbXBhbnkgbmFtZSwgQmFyYW5nZ2F5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuc2hpcHBpbmdfYWRkcmVzcy5lcnJvciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e2Vycm9yU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlLnNoaXBwaW5nX2FkZHJlc3MuZXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFRvd24gLyBDaXR5IDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzaGlwcGluZ19jaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuc2hpcHBpbmdfY2l0eS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuc2hpcHBpbmdfY2l0eS5lcnJvciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e2Vycm9yU3R5bGV9PntzdGF0ZS5zaGlwcGluZ19jaXR5LmVycm9yfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFBvc3Rjb2RlIC8gWmlwIDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzaGlwcGluZ196aXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5zaGlwcGluZ196aXAudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlLnNoaXBwaW5nX3ppcC5lcnJvciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e2Vycm9yU3R5bGV9PntzdGF0ZS5zaGlwcGluZ196aXAuZXJyb3J9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImRpdmlkZXJDbGFzc1wiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWxsaW5nLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+WW91ciBJbmZvPC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBGaXJzdCBOYW1lIDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiaWxsaW5nX2ZpcnN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLmJpbGxpbmdfZmlyc3ROYW1lLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBGaXJzdG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5iaWxsaW5nX2ZpcnN0TmFtZS5lcnJvciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e2Vycm9yU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlLmJpbGxpbmdfZmlyc3ROYW1lLmVycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIExhc3QgTmFtZSA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmlsbGluZ19sYXN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLmJpbGxpbmdfbGFzdE5hbWUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIExhc3RuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuYmlsbGluZ19sYXN0TmFtZS5lcnJvciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e2Vycm9yU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlLmJpbGxpbmdfbGFzdE5hbWUuZXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBFbWFpbCBBZGRyZXNzIDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmlsbGluZ19lbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLmJpbGxpbmdfZW1haWwudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIGVtYWlsIChGb3IgT3JkZXIgQ29uZmlybWF0aW9uKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlLmJpbGxpbmdfZW1haWwuZXJyb3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtlcnJvclN0eWxlfT57c3RhdGUuYmlsbGluZ19lbWFpbC5lcnJvcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlBob25lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJpbGxpbmdfcGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuYmlsbGluZ19waG9uZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuYmlsbGluZ19waG9uZS5lcnJvciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e2Vycm9yU3R5bGV9PntzdGF0ZS5iaWxsaW5nX3Bob25lLmVycm9yfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJteS0zIGRpdmlkZXJDbGFzc1wiIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXItZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj5Zb3VyIE9yZGVyPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPE9yZGVyU3VtbWFyeSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicGF5bWVudC1tZXRob2RcIj5cclxuICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkaXJlY3QtYmFuay10cmFuc2ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW8tZ3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRpcmVjdC1iYW5rLXRyYW5zZmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBEaXJlY3QgQmFuayBUcmFuc2ZlclxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgTWFrZSB5b3VyIHBheW1lbnQgZGlyZWN0bHkgaW50byBvdXIgYmFuayBhY2NvdW50LiBQbGVhc2UgdXNlXHJcbiAgICAgICAgICAgICAgICAgICAgeW91ciBPcmRlciBJRCBhcyB0aGUgcGF5bWVudCByZWZlcmVuY2UuIFlvdXIgb3JkZXIgd2lsbCBub3RcclxuICAgICAgICAgICAgICAgICAgICBiZSBzaGlwcGVkIHVudGlsIHRoZSBmdW5kcyBoYXZlIGNsZWFyZWQgaW4gb3VyIGFjY291bnQuXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwicGF5cGFsXCIgbmFtZT1cInJhZGlvLWdyb3VwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBheXBhbFwiPlBheVBhbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjYXNoLW9uLWRlbGl2ZXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpby1ncm91cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNhc2gtb24tZGVsaXZlcnlcIj5DYXNoIG9uIERlbGl2ZXJ5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPFBheW1lbnRcclxuICAgICAgICAgICAgICAgICAgaGFuZGxlU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgIGFtb3VudD17dG90YWxBbW91bnQgKiAxMDB9XHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlfVxyXG4gICAgICAgICAgICAgICAgICBpc1ZhbGlkPXtpc1ZhbGlkfVxyXG4gICAgICAgICAgICAgICAgLz4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3JkZXItYnRuXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIHBhZGRpbmdUb3A6IFwiMjBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWxpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjkwJVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9jZWVkVG9QYXltZW50fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFByb2NlZWQgdG8gUGF5bWVudFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHRvdGFsOiBzdGF0ZS50b3RhbCxcclxuICAgIHNoaXBwaW5nOiBzdGF0ZS5zaGlwcGluZyxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKENoZWNrb3V0Rm9ybSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
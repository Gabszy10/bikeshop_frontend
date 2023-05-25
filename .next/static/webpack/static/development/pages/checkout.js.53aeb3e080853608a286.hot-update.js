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

  var handleCheckBox = function handleCheckBox(e) {
    if (e.target.checked) {
      if (js_cookie__WEBPACK_IMPORTED_MODULE_15___default.a.get("user")) {
        var userInfo = JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_15___default.a.get("user"));
        console.log(userInfo);
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

  console.log(stateSchema);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_11__["ToastContainer"], {
    transition: react_toastify__WEBPACK_IMPORTED_MODULE_11__["Zoom"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 7
    }
  }), __jsx("section", {
    className: "checkout-area ptb-60",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 9
    }
  }, __jsx("form", {
    onSubmit: handleOnSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-lg-6 col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "shipping-details",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 17
    }
  }, __jsx("div", {
    "class": "form-check float-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 19
    }
  }, __jsx("input", {
    type: "checkbox",
    className: "form-check-input",
    onChange: handleCheckBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 21
    }
  }), __jsx("label", {
    "class": "form-check-label",
    "for": "exampleCheck1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 21
    }
  }, "Same as my user address")), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 19
    }
  }), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 19
    }
  }), __jsx("h3", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 19
    }
  }, "Send my orders to"), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "col-lg-6 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 23
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 25
    }
  }, "First Name ", __jsx("span", {
    className: "required",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
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
      lineNumber: 301,
      columnNumber: 25
    }
  }), state.shipping_firstName.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 27
    }
  }, state.shipping_firstName.error))), __jsx("div", {
    className: "col-lg-6 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 23
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 25
    }
  }, "Last Name ", __jsx("span", {
    className: "required",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
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
      lineNumber: 322,
      columnNumber: 25
    }
  }), state.shipping_lastName.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 27
    }
  }, state.shipping_lastName.error))), __jsx("div", {
    className: "col-lg-12 col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 23
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
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
      lineNumber: 341,
      columnNumber: 25
    }
  }), state.shipping_phone.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 27
    }
  }, state.shipping_phone.error))), __jsx("div", {
    className: "col-lg-12 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 23
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 25
    }
  }, "Address ", __jsx("span", {
    className: "required",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
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
      lineNumber: 360,
      columnNumber: 25
    }
  }), state.shipping_address.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 27
    }
  }, state.shipping_address.error))), __jsx("div", {
    className: "col-lg-12 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 23
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 25
    }
  }, "Town / City ", __jsx("span", {
    className: "required",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
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
      lineNumber: 382,
      columnNumber: 25
    }
  }), state.shipping_city.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 27
    }
  }, state.shipping_city.error))), __jsx("div", {
    className: "col-lg-6 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 23
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 25
    }
  }, "Postcode / Zip ", __jsx("span", {
    className: "required",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
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
      lineNumber: 401,
      columnNumber: 25
    }
  }), state.shipping_zip.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 27
    }
  }, state.shipping_zip.error))))), __jsx("hr", {
    className: "dividerClass",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "billing-details",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 19
    }
  }, "Your Info"), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "col-lg-6 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 23
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 25
    }
  }, "First Name ", __jsx("span", {
    className: "required",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
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
      lineNumber: 428,
      columnNumber: 25
    }
  }), state.billing_firstName.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 27
    }
  }, state.billing_firstName.error))), __jsx("div", {
    className: "col-lg-6 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 23
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447,
      columnNumber: 25
    }
  }, "Last Name ", __jsx("span", {
    className: "required",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448,
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
      lineNumber: 450,
      columnNumber: 25
    }
  }), state.billing_lastName.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460,
      columnNumber: 27
    }
  }, state.billing_lastName.error))), __jsx("div", {
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
  }, "Email Address ", __jsx("span", {
    className: "required",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
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
      lineNumber: 472,
      columnNumber: 25
    }
  }), state.billing_email.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482,
      columnNumber: 27
    }
  }, state.billing_email.error))), __jsx("div", {
    className: "col-lg-12 col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488,
      columnNumber: 23
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489,
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
      lineNumber: 490,
      columnNumber: 25
    }
  }), state.billing_phone.error && __jsx("p", {
    style: errorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499,
      columnNumber: 27
    }
  }, state.billing_phone.error)))))), __jsx("hr", {
    className: "my-3 dividerClass",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "col-lg-6 col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "order-details",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 19
    }
  }, "Your Order"), __jsx(_OrderSummary__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510,
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
      lineNumber: 548,
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
      lineNumber: 552,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NoZWNrb3V0L0NoZWNrb3V0Rm9ybS5qcyJdLCJuYW1lcyI6WyJDaGVja291dEZvcm0iLCJ0b3RhbCIsInNoaXBwaW5nIiwiaG9zdCIsInByb2Nlc3MiLCJoYW5kbGVTdWJtaXQiLCJjb25zb2xlIiwibG9nIiwiY2FydCIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzdGF0ZSIsIm9yZGVyIiwib3JkZXJJdGVtcyIsInNoaXBwaW5nRmlyc3ROYW1lIiwic3RhdGVTY2hlbWEiLCJzaGlwcGluZ19maXJzdE5hbWUiLCJ2YWx1ZSIsInNoaXBwaW5nTGFzdE5hbWUiLCJzaGlwcGluZ19sYXN0TmFtZSIsInNoaXBwaW5nUGhvbmUiLCJzaGlwcGluZ19waG9uZSIsInNoaXBwaW5nQWRkcmVzcyIsInNoaXBwaW5nX2FkZHJlc3MiLCJzaGlwcGluZ0NpdHkiLCJzaGlwcGluZ19jaXR5Iiwic2hpcHBpbmdQcm92aW5jZSIsInNoaXBwaW5nWmlwIiwic2hpcHBpbmdfemlwIiwiZGVsaXZlcnlJbnN0cnVjdGlvbnMiLCJub3RlIiwiYmlsbGluZ0ZpcnN0TmFtZSIsImJpbGxpbmdfZmlyc3ROYW1lIiwiYmlsbGluZ0xhc3ROYW1lIiwiYmlsbGluZ19sYXN0TmFtZSIsImJpbGxpbmdQaG9uZSIsImJpbGxpbmdfcGhvbmUiLCJiaWxsaW5nRW1haWwiLCJiaWxsaW5nX2VtYWlsIiwiZGVsaXZlcnlEYXRlIiwiZGVsaXZlcnlfZGF0ZSIsImRlbGl2ZXJ5VGltZSIsInBheW1lbnRNZXRob2QiLCJheGlvcyIsInBvc3QiLCJyZXMiLCJjbGVhckRhdGEiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJyZXNwb25zZSIsInRvdGFsQW1vdW50IiwidG9GaXhlZCIsInVzZVN0YXRlIiwiZXJyb3IiLCJtZXNzYWdlIiwiZGVsaXZlcnlfdGltZSIsInNldHN0YXRlU2NoZW1hIiwiaGFuZGxlU3RhdGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsImhhbmRsZVRvYXN0IiwidG9hc3QiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsImlzVmFsaWQiLCJ2YWxpZGF0aW9uU3RhdGVTY2hlbWEiLCJyZXF1aXJlZCIsInZhbGlkYXRvciIsInJlZ0V4IiwidXNlRm9ybSIsImhhbmRsZU9uQ2hhbmdlIiwiaGFuZGxlT25TdWJtaXQiLCJkaXNhYmxlIiwiZXJyb3JTdHlsZSIsImNvbG9yIiwiZm9udFNpemUiLCJwcm9jZWVkVG9QYXltZW50IiwiZW5jcnlwdEluZm9EYXRhIiwiUm91dGVyIiwicHVzaCIsImhhbmRsZUNoZWNrQm94IiwiY2hlY2tlZCIsIkNvb2tpZXMiLCJnZXQiLCJ1c2VySW5mbyIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJhZGRyZXNzIiwiY2l0eSIsInppcCIsIlpvb20iLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nVG9wIiwid2lkdGgiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxZQUFULE9BQTJDO0FBQUE7O0FBQUEsTUFBbkJDLEtBQW1CLFFBQW5CQSxLQUFtQjtBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUN6QyxNQUFJQyxJQUFJLEdBQUdDLHVCQUFYOztBQUVBLE1BQU1DLFlBQVk7QUFBQSxpTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkJDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWjtBQUNJQyxrQkFGZSxHQUVSQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCUixVQUFyQixDQUFY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WixLQURSO0FBRUxDLFlBQVEsRUFBRVcsS0FBSyxDQUFDWDtBQUZYLEdBQVA7QUFJRCxDQUxEOztBQU9lcUcsMEhBQU8sQ0FBQ0QsZUFBRCxDQUFQLENBQXlCdEcsWUFBekIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcY2hlY2tvdXQuanMuNTNhZWIzZTA4MDg1MzYwOGEyODYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBPcmRlclN1bW1hcnkgZnJvbSBcIi4vT3JkZXJTdW1tYXJ5XCI7XHJcbmltcG9ydCBQYXltZW50IGZyb20gXCIuLi9wYXltZW50cy9QYXltZW50XCI7XHJcbmltcG9ydCB1c2VGb3JtIGZyb20gXCIuL3VzZXJGb3JtXCI7XHJcbmltcG9ydCBDYWxlbmRhciBmcm9tIFwiLi4vY2FsZW5kYXIvQ2FsZW5kYXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QsIFpvb20gfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuaW1wb3J0IHsgZW5jcnlwdEluZm9EYXRhIH0gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvaW5mb0FjdGlvbnNcIjtcclxuaW1wb3J0IHsgaXNEYXRlQmVmb3JlVG9kYXkgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9mdW5jdGlvblwiO1xyXG5pbXBvcnQgeyBjbGVhckRhdGEgfSBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9jYXJ0QWN0aW9uc1wiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG5mdW5jdGlvbiBDaGVja291dEZvcm0oeyB0b3RhbCwgc2hpcHBpbmcgfSkge1xyXG4gIGxldCBob3N0ID0gcHJvY2Vzcy5lbnYuQVBJX1VSTDtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJGb3JtIHN1Ym1pdHRlZC5cIik7XHJcbiAgICBsZXQgY2FydCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvY2Vzcy5lbnYuQ0FSVF9DT09LSUUpKTtcclxuICAgIGNvbnNvbGUubG9nKHN0YXRlLCBjYXJ0KTtcclxuICAgIGxldCBvcmRlciA9IHtcclxuICAgICAgb3JkZXJJdGVtczogY2FydCxcclxuICAgICAgc2hpcHBpbmdGaXJzdE5hbWU6IHN0YXRlU2NoZW1hLnNoaXBwaW5nX2ZpcnN0TmFtZS52YWx1ZSxcclxuICAgICAgc2hpcHBpbmdMYXN0TmFtZTogc3RhdGVTY2hlbWEuc2hpcHBpbmdfbGFzdE5hbWUudmFsdWUsXHJcbiAgICAgIHNoaXBwaW5nUGhvbmU6IHN0YXRlU2NoZW1hLnNoaXBwaW5nX3Bob25lLnZhbHVlLFxyXG4gICAgICBzaGlwcGluZ0FkZHJlc3M6IHN0YXRlU2NoZW1hLnNoaXBwaW5nX2FkZHJlc3MudmFsdWUsXHJcbiAgICAgIHNoaXBwaW5nQ2l0eTogc3RhdGVTY2hlbWEuc2hpcHBpbmdfY2l0eS52YWx1ZSxcclxuICAgICAgc2hpcHBpbmdQcm92aW5jZTogXCJNZXRybyBNYW5pbGFcIixcclxuICAgICAgc2hpcHBpbmdaaXA6IHN0YXRlU2NoZW1hLnNoaXBwaW5nX3ppcC52YWx1ZSxcclxuICAgICAgZGVsaXZlcnlJbnN0cnVjdGlvbnM6IHN0YXRlU2NoZW1hLm5vdGUudmFsdWUsXHJcbiAgICAgIGJpbGxpbmdGaXJzdE5hbWU6IHN0YXRlU2NoZW1hLmJpbGxpbmdfZmlyc3ROYW1lLnZhbHVlLFxyXG4gICAgICBiaWxsaW5nTGFzdE5hbWU6IHN0YXRlU2NoZW1hLmJpbGxpbmdfbGFzdE5hbWUudmFsdWUsXHJcbiAgICAgIGJpbGxpbmdQaG9uZTogc3RhdGVTY2hlbWEuYmlsbGluZ19waG9uZS52YWx1ZSxcclxuICAgICAgYmlsbGluZ0VtYWlsOiBzdGF0ZVNjaGVtYS5iaWxsaW5nX2VtYWlsLnZhbHVlLFxyXG4gICAgICBkZWxpdmVyeURhdGU6IHN0YXRlU2NoZW1hLmRlbGl2ZXJ5X2RhdGUudmFsdWUsXHJcbiAgICAgIGRlbGl2ZXJ5VGltZTogXCJBbnl0aW1lXCIsXHJcbiAgICAgIHBheW1lbnRNZXRob2Q6IFwiQ09EXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7aG9zdH0vYXBpL3VzZXIvb3JkZXJgLCBvcmRlcik7XHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICBjbGVhckRhdGEoKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL3RoYW5reW91XCI7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLCBcIlJFU1wiKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgbGV0IHRvdGFsQW1vdW50ID0gKHRvdGFsICsgc2hpcHBpbmcpLnRvRml4ZWQoMik7XHJcblxyXG4gIGNvbnN0IFtzdGF0ZVNjaGVtYSwgc2V0c3RhdGVTY2hlbWFdID0gdXNlU3RhdGUoe1xyXG4gICAgc2hpcHBpbmdfZmlyc3ROYW1lOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxyXG4gICAgc2hpcHBpbmdfbGFzdE5hbWU6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXHJcbiAgICBzaGlwcGluZ19hZGRyZXNzOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxyXG4gICAgc2hpcHBpbmdfY2l0eTogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcclxuICAgIHNoaXBwaW5nX3ppcDogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcclxuICAgIGJpbGxpbmdfZW1haWw6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXHJcbiAgICBzaGlwcGluZ19waG9uZTogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcclxuICAgIGJpbGxpbmdfZmlyc3ROYW1lOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxyXG4gICAgYmlsbGluZ19sYXN0TmFtZTogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcclxuICAgIGJpbGxpbmdfcGhvbmU6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXHJcbiAgICBub3RlOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxyXG4gICAgbWVzc2FnZTogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcclxuICAgIGRlbGl2ZXJ5X2RhdGU6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXHJcbiAgICBkZWxpdmVyeV90aW1lOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdGF0ZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRzdGF0ZVNjaGVtYSh7XHJcbiAgICAgIC4uLnN0YXRlU2NoZW1hLFxyXG4gICAgICBbZS50YXJnZXQubmFtZV06IHsgdmFsdWU6IGUudGFyZ2V0LnZhbHVlLCBlcnJvcjogXCJcIiB9LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVG9hc3QgPSAobWVzc2FnZSkgPT4ge1xyXG4gICAgdG9hc3QuZXJyb3IobWVzc2FnZSwge1xyXG4gICAgICBwb3NpdGlvbjogXCJib3R0b20tbGVmdFwiLFxyXG4gICAgICBhdXRvQ2xvc2U6IDIwMDAsXHJcbiAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpc1ZhbGlkID0gKCkgPT4ge1xyXG4gICAgaWYgKCFzdGF0ZS5zaGlwcGluZ19sYXN0TmFtZS52YWx1ZSkge1xyXG4gICAgICBoYW5kbGVUb2FzdChcIlBsZWFzZSBpbnB1dCByZWNlaXZlciBsYXN0IG5hbWUuXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKCFzdGF0ZS5zaGlwcGluZ19maXJzdE5hbWUudmFsdWUpIHtcclxuICAgICAgaGFuZGxlVG9hc3QoXCJQbGVhc2UgaW5wdXQgcmVjZWl2ZXIgZmlyc3QgbmFtZS5cIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAoIXN0YXRlLnNoaXBwaW5nX2FkZHJlc3MudmFsdWUpIHtcclxuICAgICAgaGFuZGxlVG9hc3QoXCJQbGVhc2UgaW5wdXQgcmVjZWl2ZXIgYWRkcmVzcy5cIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAoIXN0YXRlLnNoaXBwaW5nX2NpdHkudmFsdWUpIHtcclxuICAgICAgaGFuZGxlVG9hc3QoXCJQbGVhc2UgaW5wdXQgcmVjZWl2ZXIgY2l0eS5cIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAoIXN0YXRlLnNoaXBwaW5nX3ppcC52YWx1ZSkge1xyXG4gICAgICBoYW5kbGVUb2FzdChcIlBsZWFzZSBpbnB1dCByZWNlaXZlciB6aXAuXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKCFzdGF0ZS5iaWxsaW5nX2VtYWlsLnZhbHVlKSB7XHJcbiAgICAgIGhhbmRsZVRvYXN0KFwiUGxlYXNlIGlucHV0IHlvdXIgZW1haWwgaW5mby5cIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAoIXN0YXRlLnNoaXBwaW5nX3Bob25lLnZhbHVlKSB7XHJcbiAgICAgIGhhbmRsZVRvYXN0KFwiUGxlYXNlIGlucHV0IHJlY2VpdmVyIGNvbnRhY3QgbnVtYmVyLlwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmICghc3RhdGUuYmlsbGluZ19waG9uZS52YWx1ZSkge1xyXG4gICAgICBoYW5kbGVUb2FzdChcIlBsZWFzZSBpbnB1dCB5b3VyIGNvbnRhY3QgbnVtYmVyLlwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmICghc3RhdGUuYmlsbGluZ19maXJzdE5hbWUudmFsdWUpIHtcclxuICAgICAgaGFuZGxlVG9hc3QoXCJQbGVhc2UgaW5wdXQgeW91ciBmaXJzdCBuYW1lLlwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmICghc3RhdGUuYmlsbGluZ19sYXN0TmFtZS52YWx1ZSkge1xyXG4gICAgICBoYW5kbGVUb2FzdChcIlBsZWFzZSBpbnB1dCB5b3VyIGxhc3QgbmFtZS5cIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAoIXN0YXRlLnNoaXBwaW5nX2FkZHJlc3MudmFsdWUpIHtcclxuICAgICAgaGFuZGxlVG9hc3QoXCJQbGVhc2UgaW5wdXQgcmVjZWl2ZXIgYWRkcmVzcy5cIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHZhbGlkYXRpb25TdGF0ZVNjaGVtYSA9IHtcclxuICAgIHNoaXBwaW5nX2ZpcnN0TmFtZToge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgdmFsaWRhdG9yOiB7XHJcbiAgICAgICAgcmVnRXg6IC9eW2EtekEtWl0rJC8sXHJcbiAgICAgICAgZXJyb3I6IFwiSW52YWxpZCBmaXJzdCBuYW1lIGZvcm1hdFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBkZWxpdmVyeV9kYXRlOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuXHJcbiAgICBkZWxpdmVyeV90aW1lOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuXHJcbiAgICBzaGlwcGluZ19sYXN0TmFtZToge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgdmFsaWRhdG9yOiB7XHJcbiAgICAgICAgcmVnRXg6IC9eW2EtekEtWl0rJC8sXHJcbiAgICAgICAgZXJyb3I6IFwiSW52YWxpZCBsYXN0IG5hbWUgZm9ybWF0LlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBzaGlwcGluZ19hZGRyZXNzOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICB2YWxpZGF0b3I6IHtcclxuICAgICAgICBlcnJvcjogXCJJbnZhbGlkIGFkZHJlc3MgZm9ybWF0LlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBzaGlwcGluZ19jaXR5OiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICB2YWxpZGF0b3I6IHtcclxuICAgICAgICBlcnJvcjogXCJJbnZhbGlkIGxhc3QgbmFtZSBmb3JtYXQuXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIHNoaXBwaW5nX3ppcDoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgdmFsaWRhdG9yOiB7XHJcbiAgICAgICAgcmVnRXg6IC9eXFxkezR9JHxeXFxkezR9LVxcZHs0fSQvLFxyXG4gICAgICAgIGVycm9yOiBcIkludmFsaWQgemlwIGZvcm1hdCwgdXNlIGxpa2UgMTIzNC5cIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgYmlsbGluZ19lbWFpbDoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgdmFsaWRhdG9yOiB7XHJcbiAgICAgICAgcmVnRXg6XHJcbiAgICAgICAgICAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLyxcclxuICAgICAgICBlcnJvcjogXCJJbnZhbGlkIGVtYWlsIGZvcm1hdCwgdXNlIGxpa2UgZXhhbXBsZUBnbWFpbC5jb21cIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgc2hpcHBpbmdfcGhvbmU6IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIHZhbGlkYXRvcjoge1xyXG4gICAgICAgIHJlZ0V4OiAvXigwOXxcXCs2MzkpXFxkezl9JC8sXHJcbiAgICAgICAgZXJyb3I6IFwiSW52YWxpZCBwaG9uZSBudW1iZXIgZm9ybWF0IHVzZSBsaWtlIDA5MzQzMjQzMjQzLlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBiaWxsaW5nX2ZpcnN0TmFtZToge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgdmFsaWRhdG9yOiB7XHJcbiAgICAgICAgcmVnRXg6IC9eW2EtekEtWl0rJC8sXHJcbiAgICAgICAgZXJyb3I6IFwiSW52YWxpZCBmaXJzdCBuYW1lIGZvcm1hdC5cIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgYmlsbGluZ19sYXN0TmFtZToge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgdmFsaWRhdG9yOiB7XHJcbiAgICAgICAgcmVnRXg6IC9eW2EtekEtWl0rJC8sXHJcbiAgICAgICAgZXJyb3I6IFwiSW52YWxpZCBsYXN0IG5hbWUgZm9ybWF0LlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBiaWxsaW5nX3Bob25lOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICB2YWxpZGF0b3I6IHtcclxuICAgICAgICByZWdFeDogL14oMDl8XFwrNjM5KVxcZHs5fSQvLFxyXG4gICAgICAgIGVycm9yOiBcIkludmFsaWQgcGhvbmUgbnVtYmVyIGZvcm1hdCB1c2UgbGlrZSAwOTM0MzI0MzI0My5cIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgbm90ZToge1xyXG4gICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICAgIHZhbGlkYXRvcjoge1xyXG4gICAgICAgIHJlZ0V4OiAvXlthLXpBLVpdKyQvLFxyXG4gICAgICAgIGVycm9yOiBcIkludmFsaWQgbm90ZSBmb3JtYXQuXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIG1lc3NhZ2U6IHtcclxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgICB2YWxpZGF0b3I6IHtcclxuICAgICAgICByZWdFeDogL15bYS16QS1aXSskLyxcclxuICAgICAgICBlcnJvcjogXCJJbnZhbGlkIG1lc3NhZ2UgZm9ybWF0LlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBjb25zdCB7IHN0YXRlLCBoYW5kbGVPbkNoYW5nZSwgaGFuZGxlT25TdWJtaXQsIGRpc2FibGUgfSA9IHVzZUZvcm0oXHJcbiAgICBzdGF0ZVNjaGVtYSxcclxuICAgIHZhbGlkYXRpb25TdGF0ZVNjaGVtYSxcclxuICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgIGhhbmRsZVN0YXRlQ2hhbmdlXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZXJyb3JTdHlsZSA9IHtcclxuICAgIGNvbG9yOiBcInJlZFwiLFxyXG4gICAgZm9udFNpemU6IFwiMTNweFwiLFxyXG4gIH07XHJcbiAgLy8gY29uc29sZS5sb2coc3RhdGUpO1xyXG4gIGNvbnN0IHByb2NlZWRUb1BheW1lbnQgPSAoKSA9PiB7XHJcbiAgICBpZiAoaXNWYWxpZCgpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHN0YXRlKTtcclxuICAgICAgaWYgKGVuY3J5cHRJbmZvRGF0YShzdGF0ZSkpIHtcclxuICAgICAgICBSb3V0ZXIucHVzaChcIi9wYXltZW50XCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hlY2tCb3ggPSAoZSkgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgaWYgKENvb2tpZXMuZ2V0KFwidXNlclwiKSkge1xyXG4gICAgICAgIGNvbnN0IHVzZXJJbmZvID0gSlNPTi5wYXJzZShDb29raWVzLmdldChcInVzZXJcIikpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJJbmZvKVxyXG4gICAgICAgIHNldHN0YXRlU2NoZW1hKHtcclxuICAgICAgICAgIC4uLnN0YXRlU2NoZW1hLFxyXG4gICAgICAgICAgc2hpcHBpbmdfZmlyc3ROYW1lOiB7IHZhbHVlOiB1c2VySW5mby5maXJzdF9uYW1lLCBlcnJvcjogXCJcIiB9LFxyXG4gICAgICAgICAgc2hpcHBpbmdfbGFzdE5hbWU6IHsgdmFsdWU6IHVzZXJJbmZvLmxhc3RfbmFtZSwgZXJyb3I6IFwiXCIgfSxcclxuICAgICAgICAgIGFkZHJlc3M6IHsgdmFsdWU6IHVzZXJJbmZvLmFkZHJlc3MsIGVycm9yOiBcIlwiIH0sXHJcbiAgICAgICAgICBjaXR5OiB7IHZhbHVlOiB1c2VySW5mby5jaXR5LCBlcnJvcjogXCJcIiB9LFxyXG4gICAgICAgICAgemlwOiB7IHZhbHVlOiB1c2VySW5mby56aXAsIGVycm9yOiBcIlwiIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnNvbGUubG9nKHN0YXRlU2NoZW1hKVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8VG9hc3RDb250YWluZXIgdHJhbnNpdGlvbj17Wm9vbX0gLz5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2hlY2tvdXQtYXJlYSBwdGItNjBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZU9uU3VibWl0fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGlwcGluZy1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrIGZsb2F0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hlY2tCb3h9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiZXhhbXBsZUNoZWNrMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU2FtZSBhcyBteSB1c2VyIGFkZHJlc3NcclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj5TZW5kIG15IG9yZGVycyB0bzwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgRmlyc3QgTmFtZSA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2hpcHBpbmdfZmlyc3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuc2hpcHBpbmdfZmlyc3ROYW1lLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5zaGlwcGluZ19maXJzdE5hbWUuZXJyb3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtlcnJvclN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5zaGlwcGluZ19maXJzdE5hbWUuZXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTGFzdCBOYW1lIDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzaGlwcGluZ19sYXN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnNoaXBwaW5nX2xhc3ROYW1lLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5zaGlwcGluZ19sYXN0TmFtZS5lcnJvciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e2Vycm9yU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlLnNoaXBwaW5nX2xhc3ROYW1lLmVycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UGhvbmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2hpcHBpbmdfcGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuc2hpcHBpbmdfcGhvbmUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlLnNoaXBwaW5nX3Bob25lLmVycm9yICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17ZXJyb3JTdHlsZX0+e3N0YXRlLnNoaXBwaW5nX3Bob25lLmVycm9yfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBBZGRyZXNzIDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzaGlwcGluZ19hZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuc2hpcHBpbmdfYWRkcmVzcy52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0cmVldCBhZGRyZXNzLCBIb3VzZSBOdW1iZXIgLyBDb21wYW55IG5hbWUsIEJhcmFuZ2dheVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlLnNoaXBwaW5nX2FkZHJlc3MuZXJyb3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtlcnJvclN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5zaGlwcGluZ19hZGRyZXNzLmVycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBUb3duIC8gQ2l0eSA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2hpcHBpbmdfY2l0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnNoaXBwaW5nX2NpdHkudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlLnNoaXBwaW5nX2NpdHkuZXJyb3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtlcnJvclN0eWxlfT57c3RhdGUuc2hpcHBpbmdfY2l0eS5lcnJvcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBQb3N0Y29kZSAvIFppcCA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2hpcHBpbmdfemlwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuc2hpcHBpbmdfemlwLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5zaGlwcGluZ196aXAuZXJyb3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtlcnJvclN0eWxlfT57c3RhdGUuc2hpcHBpbmdfemlwLmVycm9yfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJkaXZpZGVyQ2xhc3NcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlsbGluZy1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPllvdXIgSW5mbzwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgRmlyc3QgTmFtZSA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmlsbGluZ19maXJzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5iaWxsaW5nX2ZpcnN0TmFtZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgRmlyc3RuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuYmlsbGluZ19maXJzdE5hbWUuZXJyb3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtlcnJvclN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5iaWxsaW5nX2ZpcnN0TmFtZS5lcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBMYXN0IE5hbWUgPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJpbGxpbmdfbGFzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5iaWxsaW5nX2xhc3ROYW1lLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBMYXN0bmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlLmJpbGxpbmdfbGFzdE5hbWUuZXJyb3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtlcnJvclN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5iaWxsaW5nX2xhc3ROYW1lLmVycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgRW1haWwgQWRkcmVzcyA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJpbGxpbmdfZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5iaWxsaW5nX2VtYWlsLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbCAoRm9yIE9yZGVyIENvbmZpcm1hdGlvbilcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5iaWxsaW5nX2VtYWlsLmVycm9yICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17ZXJyb3JTdHlsZX0+e3N0YXRlLmJpbGxpbmdfZW1haWwuZXJyb3J9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5QaG9uZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiaWxsaW5nX3Bob25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLmJpbGxpbmdfcGhvbmUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlLmJpbGxpbmdfcGhvbmUuZXJyb3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtlcnJvclN0eWxlfT57c3RhdGUuYmlsbGluZ19waG9uZS5lcnJvcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXktMyBkaXZpZGVyQ2xhc3NcIiAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+WW91ciBPcmRlcjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxPcmRlclN1bW1hcnkgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtbWV0aG9kXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGlyZWN0LWJhbmstdHJhbnNmZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvLWdyb3VwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkaXJlY3QtYmFuay10cmFuc2ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRGlyZWN0IEJhbmsgVHJhbnNmZXJcclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIE1ha2UgeW91ciBwYXltZW50IGRpcmVjdGx5IGludG8gb3VyIGJhbmsgYWNjb3VudC4gUGxlYXNlIHVzZVxyXG4gICAgICAgICAgICAgICAgICAgIHlvdXIgT3JkZXIgSUQgYXMgdGhlIHBheW1lbnQgcmVmZXJlbmNlLiBZb3VyIG9yZGVyIHdpbGwgbm90XHJcbiAgICAgICAgICAgICAgICAgICAgYmUgc2hpcHBlZCB1bnRpbCB0aGUgZnVuZHMgaGF2ZSBjbGVhcmVkIGluIG91ciBhY2NvdW50LlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInBheXBhbFwiIG5hbWU9XCJyYWRpby1ncm91cFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXlwYWxcIj5QYXlQYWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY2FzaC1vbi1kZWxpdmVyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW8tZ3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjYXNoLW9uLWRlbGl2ZXJ5XCI+Q2FzaCBvbiBEZWxpdmVyeTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxQYXltZW50XHJcbiAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICBhbW91bnQ9e3RvdGFsQW1vdW50ICogMTAwfVxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZX1cclxuICAgICAgICAgICAgICAgICAgaXNWYWxpZD17aXNWYWxpZH1cclxuICAgICAgICAgICAgICAgIC8+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9yZGVyLWJ0blwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBwYWRkaW5nVG9wOiBcIjIwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI5MCVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cHJvY2VlZFRvUGF5bWVudH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBQcm9jZWVkIHRvIFBheW1lbnRcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0b3RhbDogc3RhdGUudG90YWwsXHJcbiAgICBzaGlwcGluZzogc3RhdGUuc2hpcHBpbmcsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShDaGVja291dEZvcm0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
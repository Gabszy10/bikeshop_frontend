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
        alert(44);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NoZWNrb3V0L0NoZWNrb3V0Rm9ybS5qcyJdLCJuYW1lcyI6WyJDaGVja291dEZvcm0iLCJ0b3RhbCIsInNoaXBwaW5nIiwiaG9zdCIsInByb2Nlc3MiLCJoYW5kbGVTdWJtaXQiLCJjb25zb2xlIiwibG9nIiwiY2FydCIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzdGF0ZSIsIm9yZGVyIiwib3JkZXJJdGVtcyIsInNoaXBwaW5nRmlyc3ROYW1lIiwic3RhdGVTY2hlbWEiLCJzaGlwcGluZ19maXJzdE5hbWUiLCJ2YWx1ZSIsInNoaXBwaW5nTGFzdE5hbWUiLCJzaGlwcGluZ19sYXN0TmFtZSIsInNoaXBwaW5nUGhvbmUiLCJzaGlwcGluZ19waG9uZSIsInNoaXBwaW5nQWRkcmVzcyIsInNoaXBwaW5nX2FkZHJlc3MiLCJzaGlwcGluZ0NpdHkiLCJzaGlwcGluZ19jaXR5Iiwic2hpcHBpbmdQcm92aW5jZSIsInNoaXBwaW5nWmlwIiwic2hpcHBpbmdfemlwIiwiZGVsaXZlcnlJbnN0cnVjdGlvbnMiLCJub3RlIiwiYmlsbGluZ0ZpcnN0TmFtZSIsImJpbGxpbmdfZmlyc3ROYW1lIiwiYmlsbGluZ0xhc3ROYW1lIiwiYmlsbGluZ19sYXN0TmFtZSIsImJpbGxpbmdQaG9uZSIsImJpbGxpbmdfcGhvbmUiLCJiaWxsaW5nRW1haWwiLCJiaWxsaW5nX2VtYWlsIiwiZGVsaXZlcnlEYXRlIiwiZGVsaXZlcnlfZGF0ZSIsImRlbGl2ZXJ5VGltZSIsInBheW1lbnRNZXRob2QiLCJheGlvcyIsInBvc3QiLCJyZXMiLCJjbGVhckRhdGEiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJyZXNwb25zZSIsInRvdGFsQW1vdW50IiwidG9GaXhlZCIsInVzZVN0YXRlIiwiZXJyb3IiLCJtZXNzYWdlIiwiZGVsaXZlcnlfdGltZSIsInNldHN0YXRlU2NoZW1hIiwiaGFuZGxlU3RhdGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsImhhbmRsZVRvYXN0IiwidG9hc3QiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsImlzVmFsaWQiLCJ2YWxpZGF0aW9uU3RhdGVTY2hlbWEiLCJyZXF1aXJlZCIsInZhbGlkYXRvciIsInJlZ0V4IiwidXNlRm9ybSIsImhhbmRsZU9uQ2hhbmdlIiwiaGFuZGxlT25TdWJtaXQiLCJkaXNhYmxlIiwiZXJyb3JTdHlsZSIsImNvbG9yIiwiZm9udFNpemUiLCJwcm9jZWVkVG9QYXltZW50IiwiZW5jcnlwdEluZm9EYXRhIiwiUm91dGVyIiwicHVzaCIsImhhbmRsZUNoZWNrQm94IiwiY2hlY2tlZCIsIkNvb2tpZXMiLCJnZXQiLCJhbGVydCIsInVzZXJJbmZvIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImFkZHJlc3MiLCJjaXR5IiwiemlwIiwiWm9vbSIsInRleHRBbGlnbiIsInBhZGRpbmdUb3AiLCJ3aWR0aCIsIm1hcFN0YXRlVG9Qcm9wcyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsT0FBMkM7QUFBQTs7QUFBQSxNQUFuQkMsS0FBbUIsUUFBbkJBLEtBQW1CO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQ3pDLE1BQUlDLElBQUksR0FBR0MsdUJBQVg7O0FBRUEsTUFBTUMsWUFBWTtBQUFBLGlNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNuQkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBQ0lDLGtCQUZlLEdBRVJDLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUJSLFVB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QUFGWCxHQUFQO0FBSUQsQ0FMRDs7QUFPZXNHLDBIQUFPLENBQUNELGVBQUQsQ0FBUCxDQUF5QnZHLFlBQXpCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGNoZWNrb3V0LmpzLmMzNGNjNDY3MmZkOGVjODdmNzUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgT3JkZXJTdW1tYXJ5IGZyb20gXCIuL09yZGVyU3VtbWFyeVwiO1xyXG5pbXBvcnQgUGF5bWVudCBmcm9tIFwiLi4vcGF5bWVudHMvUGF5bWVudFwiO1xyXG5pbXBvcnQgdXNlRm9ybSBmcm9tIFwiLi91c2VyRm9ybVwiO1xyXG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSBcIi4uL2NhbGVuZGFyL0NhbGVuZGFyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0LCBab29tIH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmltcG9ydCB7IGVuY3J5cHRJbmZvRGF0YSB9IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2luZm9BY3Rpb25zXCI7XHJcbmltcG9ydCB7IGlzRGF0ZUJlZm9yZVRvZGF5IH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvZnVuY3Rpb25cIjtcclxuaW1wb3J0IHsgY2xlYXJEYXRhIH0gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvY2FydEFjdGlvbnNcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuZnVuY3Rpb24gQ2hlY2tvdXRGb3JtKHsgdG90YWwsIHNoaXBwaW5nIH0pIHtcclxuICBsZXQgaG9zdCA9IHByb2Nlc3MuZW52LkFQSV9VUkw7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiRm9ybSBzdWJtaXR0ZWQuXCIpO1xyXG4gICAgbGV0IGNhcnQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2Nlc3MuZW52LkNBUlRfQ09PS0lFKSk7XHJcbiAgICBjb25zb2xlLmxvZyhzdGF0ZSwgY2FydCk7XHJcbiAgICBsZXQgb3JkZXIgPSB7XHJcbiAgICAgIG9yZGVySXRlbXM6IGNhcnQsXHJcbiAgICAgIHNoaXBwaW5nRmlyc3ROYW1lOiBzdGF0ZVNjaGVtYS5zaGlwcGluZ19maXJzdE5hbWUudmFsdWUsXHJcbiAgICAgIHNoaXBwaW5nTGFzdE5hbWU6IHN0YXRlU2NoZW1hLnNoaXBwaW5nX2xhc3ROYW1lLnZhbHVlLFxyXG4gICAgICBzaGlwcGluZ1Bob25lOiBzdGF0ZVNjaGVtYS5zaGlwcGluZ19waG9uZS52YWx1ZSxcclxuICAgICAgc2hpcHBpbmdBZGRyZXNzOiBzdGF0ZVNjaGVtYS5zaGlwcGluZ19hZGRyZXNzLnZhbHVlLFxyXG4gICAgICBzaGlwcGluZ0NpdHk6IHN0YXRlU2NoZW1hLnNoaXBwaW5nX2NpdHkudmFsdWUsXHJcbiAgICAgIHNoaXBwaW5nUHJvdmluY2U6IFwiTWV0cm8gTWFuaWxhXCIsXHJcbiAgICAgIHNoaXBwaW5nWmlwOiBzdGF0ZVNjaGVtYS5zaGlwcGluZ196aXAudmFsdWUsXHJcbiAgICAgIGRlbGl2ZXJ5SW5zdHJ1Y3Rpb25zOiBzdGF0ZVNjaGVtYS5ub3RlLnZhbHVlLFxyXG4gICAgICBiaWxsaW5nRmlyc3ROYW1lOiBzdGF0ZVNjaGVtYS5iaWxsaW5nX2ZpcnN0TmFtZS52YWx1ZSxcclxuICAgICAgYmlsbGluZ0xhc3ROYW1lOiBzdGF0ZVNjaGVtYS5iaWxsaW5nX2xhc3ROYW1lLnZhbHVlLFxyXG4gICAgICBiaWxsaW5nUGhvbmU6IHN0YXRlU2NoZW1hLmJpbGxpbmdfcGhvbmUudmFsdWUsXHJcbiAgICAgIGJpbGxpbmdFbWFpbDogc3RhdGVTY2hlbWEuYmlsbGluZ19lbWFpbC52YWx1ZSxcclxuICAgICAgZGVsaXZlcnlEYXRlOiBzdGF0ZVNjaGVtYS5kZWxpdmVyeV9kYXRlLnZhbHVlLFxyXG4gICAgICBkZWxpdmVyeVRpbWU6IFwiQW55dGltZVwiLFxyXG4gICAgICBwYXltZW50TWV0aG9kOiBcIkNPRFwiLFxyXG4gICAgfTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGAke2hvc3R9L2FwaS91c2VyL29yZGVyYCwgb3JkZXIpO1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgY2xlYXJEYXRhKCk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi90aGFua3lvdVwiO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcywgXCJSRVNcIik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGxldCB0b3RhbEFtb3VudCA9ICh0b3RhbCArIHNoaXBwaW5nKS50b0ZpeGVkKDIpO1xyXG5cclxuICBjb25zdCBbc3RhdGVTY2hlbWEsIHNldHN0YXRlU2NoZW1hXSA9IHVzZVN0YXRlKHtcclxuICAgIHNoaXBwaW5nX2ZpcnN0TmFtZTogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcclxuICAgIHNoaXBwaW5nX2xhc3ROYW1lOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxyXG4gICAgc2hpcHBpbmdfYWRkcmVzczogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcclxuICAgIHNoaXBwaW5nX2NpdHk6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXHJcbiAgICBzaGlwcGluZ196aXA6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXHJcbiAgICBiaWxsaW5nX2VtYWlsOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxyXG4gICAgc2hpcHBpbmdfcGhvbmU6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXHJcbiAgICBiaWxsaW5nX2ZpcnN0TmFtZTogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcclxuICAgIGJpbGxpbmdfbGFzdE5hbWU6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXHJcbiAgICBiaWxsaW5nX3Bob25lOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxyXG4gICAgbm90ZTogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcclxuICAgIG1lc3NhZ2U6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXHJcbiAgICBkZWxpdmVyeV9kYXRlOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxyXG4gICAgZGVsaXZlcnlfdGltZTogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3RhdGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0c3RhdGVTY2hlbWEoe1xyXG4gICAgICAuLi5zdGF0ZVNjaGVtYSxcclxuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiB7IHZhbHVlOiBlLnRhcmdldC52YWx1ZSwgZXJyb3I6IFwiXCIgfSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRvYXN0ID0gKG1lc3NhZ2UpID0+IHtcclxuICAgIHRvYXN0LmVycm9yKG1lc3NhZ2UsIHtcclxuICAgICAgcG9zaXRpb246IFwiYm90dG9tLWxlZnRcIixcclxuICAgICAgYXV0b0Nsb3NlOiAyMDAwLFxyXG4gICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaXNWYWxpZCA9ICgpID0+IHtcclxuICAgIGlmICghc3RhdGUuc2hpcHBpbmdfbGFzdE5hbWUudmFsdWUpIHtcclxuICAgICAgaGFuZGxlVG9hc3QoXCJQbGVhc2UgaW5wdXQgcmVjZWl2ZXIgbGFzdCBuYW1lLlwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmICghc3RhdGUuc2hpcHBpbmdfZmlyc3ROYW1lLnZhbHVlKSB7XHJcbiAgICAgIGhhbmRsZVRvYXN0KFwiUGxlYXNlIGlucHV0IHJlY2VpdmVyIGZpcnN0IG5hbWUuXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKCFzdGF0ZS5zaGlwcGluZ19hZGRyZXNzLnZhbHVlKSB7XHJcbiAgICAgIGhhbmRsZVRvYXN0KFwiUGxlYXNlIGlucHV0IHJlY2VpdmVyIGFkZHJlc3MuXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKCFzdGF0ZS5zaGlwcGluZ19jaXR5LnZhbHVlKSB7XHJcbiAgICAgIGhhbmRsZVRvYXN0KFwiUGxlYXNlIGlucHV0IHJlY2VpdmVyIGNpdHkuXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKCFzdGF0ZS5zaGlwcGluZ196aXAudmFsdWUpIHtcclxuICAgICAgaGFuZGxlVG9hc3QoXCJQbGVhc2UgaW5wdXQgcmVjZWl2ZXIgemlwLlwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmICghc3RhdGUuYmlsbGluZ19lbWFpbC52YWx1ZSkge1xyXG4gICAgICBoYW5kbGVUb2FzdChcIlBsZWFzZSBpbnB1dCB5b3VyIGVtYWlsIGluZm8uXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKCFzdGF0ZS5zaGlwcGluZ19waG9uZS52YWx1ZSkge1xyXG4gICAgICBoYW5kbGVUb2FzdChcIlBsZWFzZSBpbnB1dCByZWNlaXZlciBjb250YWN0IG51bWJlci5cIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAoIXN0YXRlLmJpbGxpbmdfcGhvbmUudmFsdWUpIHtcclxuICAgICAgaGFuZGxlVG9hc3QoXCJQbGVhc2UgaW5wdXQgeW91ciBjb250YWN0IG51bWJlci5cIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAoIXN0YXRlLmJpbGxpbmdfZmlyc3ROYW1lLnZhbHVlKSB7XHJcbiAgICAgIGhhbmRsZVRvYXN0KFwiUGxlYXNlIGlucHV0IHlvdXIgZmlyc3QgbmFtZS5cIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAoIXN0YXRlLmJpbGxpbmdfbGFzdE5hbWUudmFsdWUpIHtcclxuICAgICAgaGFuZGxlVG9hc3QoXCJQbGVhc2UgaW5wdXQgeW91ciBsYXN0IG5hbWUuXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKCFzdGF0ZS5zaGlwcGluZ19hZGRyZXNzLnZhbHVlKSB7XHJcbiAgICAgIGhhbmRsZVRvYXN0KFwiUGxlYXNlIGlucHV0IHJlY2VpdmVyIGFkZHJlc3MuXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCB2YWxpZGF0aW9uU3RhdGVTY2hlbWEgPSB7XHJcbiAgICBzaGlwcGluZ19maXJzdE5hbWU6IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIHZhbGlkYXRvcjoge1xyXG4gICAgICAgIHJlZ0V4OiAvXlthLXpBLVpdKyQvLFxyXG4gICAgICAgIGVycm9yOiBcIkludmFsaWQgZmlyc3QgbmFtZSBmb3JtYXRcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgZGVsaXZlcnlfZGF0ZToge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcblxyXG4gICAgZGVsaXZlcnlfdGltZToge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcblxyXG4gICAgc2hpcHBpbmdfbGFzdE5hbWU6IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIHZhbGlkYXRvcjoge1xyXG4gICAgICAgIHJlZ0V4OiAvXlthLXpBLVpdKyQvLFxyXG4gICAgICAgIGVycm9yOiBcIkludmFsaWQgbGFzdCBuYW1lIGZvcm1hdC5cIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgc2hpcHBpbmdfYWRkcmVzczoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgdmFsaWRhdG9yOiB7XHJcbiAgICAgICAgZXJyb3I6IFwiSW52YWxpZCBhZGRyZXNzIGZvcm1hdC5cIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgc2hpcHBpbmdfY2l0eToge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgdmFsaWRhdG9yOiB7XHJcbiAgICAgICAgZXJyb3I6IFwiSW52YWxpZCBsYXN0IG5hbWUgZm9ybWF0LlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBzaGlwcGluZ196aXA6IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIHZhbGlkYXRvcjoge1xyXG4gICAgICAgIHJlZ0V4OiAvXlxcZHs0fSR8XlxcZHs0fS1cXGR7NH0kLyxcclxuICAgICAgICBlcnJvcjogXCJJbnZhbGlkIHppcCBmb3JtYXQsIHVzZSBsaWtlIDEyMzQuXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIGJpbGxpbmdfZW1haWw6IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIHZhbGlkYXRvcjoge1xyXG4gICAgICAgIHJlZ0V4OlxyXG4gICAgICAgICAgL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC8sXHJcbiAgICAgICAgZXJyb3I6IFwiSW52YWxpZCBlbWFpbCBmb3JtYXQsIHVzZSBsaWtlIGV4YW1wbGVAZ21haWwuY29tXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIHNoaXBwaW5nX3Bob25lOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICB2YWxpZGF0b3I6IHtcclxuICAgICAgICByZWdFeDogL14oMDl8XFwrNjM5KVxcZHs5fSQvLFxyXG4gICAgICAgIGVycm9yOiBcIkludmFsaWQgcGhvbmUgbnVtYmVyIGZvcm1hdCB1c2UgbGlrZSAwOTM0MzI0MzI0My5cIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgYmlsbGluZ19maXJzdE5hbWU6IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIHZhbGlkYXRvcjoge1xyXG4gICAgICAgIHJlZ0V4OiAvXlthLXpBLVpdKyQvLFxyXG4gICAgICAgIGVycm9yOiBcIkludmFsaWQgZmlyc3QgbmFtZSBmb3JtYXQuXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIGJpbGxpbmdfbGFzdE5hbWU6IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIHZhbGlkYXRvcjoge1xyXG4gICAgICAgIHJlZ0V4OiAvXlthLXpBLVpdKyQvLFxyXG4gICAgICAgIGVycm9yOiBcIkludmFsaWQgbGFzdCBuYW1lIGZvcm1hdC5cIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgYmlsbGluZ19waG9uZToge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgdmFsaWRhdG9yOiB7XHJcbiAgICAgICAgcmVnRXg6IC9eKDA5fFxcKzYzOSlcXGR7OX0kLyxcclxuICAgICAgICBlcnJvcjogXCJJbnZhbGlkIHBob25lIG51bWJlciBmb3JtYXQgdXNlIGxpa2UgMDkzNDMyNDMyNDMuXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIG5vdGU6IHtcclxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgICB2YWxpZGF0b3I6IHtcclxuICAgICAgICByZWdFeDogL15bYS16QS1aXSskLyxcclxuICAgICAgICBlcnJvcjogXCJJbnZhbGlkIG5vdGUgZm9ybWF0LlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBtZXNzYWdlOiB7XHJcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgICAgdmFsaWRhdG9yOiB7XHJcbiAgICAgICAgcmVnRXg6IC9eW2EtekEtWl0rJC8sXHJcbiAgICAgICAgZXJyb3I6IFwiSW52YWxpZCBtZXNzYWdlIGZvcm1hdC5cIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgeyBzdGF0ZSwgaGFuZGxlT25DaGFuZ2UsIGhhbmRsZU9uU3VibWl0LCBkaXNhYmxlIH0gPSB1c2VGb3JtKFxyXG4gICAgc3RhdGVTY2hlbWEsXHJcbiAgICB2YWxpZGF0aW9uU3RhdGVTY2hlbWEsXHJcbiAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICBoYW5kbGVTdGF0ZUNoYW5nZVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGVycm9yU3R5bGUgPSB7XHJcbiAgICBjb2xvcjogXCJyZWRcIixcclxuICAgIGZvbnRTaXplOiBcIjEzcHhcIixcclxuICB9O1xyXG4gIC8vIGNvbnNvbGUubG9nKHN0YXRlKTtcclxuICBjb25zdCBwcm9jZWVkVG9QYXltZW50ID0gKCkgPT4ge1xyXG4gICAgaWYgKGlzVmFsaWQoKSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhzdGF0ZSk7XHJcbiAgICAgIGlmIChlbmNyeXB0SW5mb0RhdGEoc3RhdGUpKSB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goXCIvcGF5bWVudFwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoZWNrQm94ID0gKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgIGlmIChDb29raWVzLmdldChcInVzZXJcIikpIHtcclxuICAgICAgICBhbGVydCg0NCk7XHJcbiAgICAgICAgY29uc3QgdXNlckluZm8gPSBKU09OLnBhcnNlKENvb2tpZXMuZ2V0KFwidXNlclwiKSk7XHJcbiAgICAgICAgc2V0c3RhdGVTY2hlbWEoe1xyXG4gICAgICAgICAgLi4uc3RhdGVTY2hlbWEsXHJcbiAgICAgICAgICBzaGlwcGluZ19maXJzdE5hbWU6IHsgdmFsdWU6IHVzZXJJbmZvLmZpcnN0X25hbWUsIGVycm9yOiBcIlwiIH0sXHJcbiAgICAgICAgICBzaGlwcGluZ19sYXN0TmFtZTogeyB2YWx1ZTogdXNlckluZm8ubGFzdF9uYW1lLCBlcnJvcjogXCJcIiB9LFxyXG4gICAgICAgICAgYWRkcmVzczogeyB2YWx1ZTogdXNlckluZm8uYWRkcmVzcywgZXJyb3I6IFwiXCIgfSxcclxuICAgICAgICAgIGNpdHk6IHsgdmFsdWU6IHVzZXJJbmZvLmNpdHksIGVycm9yOiBcIlwiIH0sXHJcbiAgICAgICAgICB6aXA6IHsgdmFsdWU6IHVzZXJJbmZvLnppcCwgZXJyb3I6IFwiXCIgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8VG9hc3RDb250YWluZXIgdHJhbnNpdGlvbj17Wm9vbX0gLz5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2hlY2tvdXQtYXJlYSBwdGItNjBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZU9uU3VibWl0fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGlwcGluZy1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrIGZsb2F0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hlY2tCb3h9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiZXhhbXBsZUNoZWNrMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU2FtZSBhcyBteSB1c2VyIGFkZHJlc3NcclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj5TZW5kIG15IG9yZGVycyB0bzwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgRmlyc3QgTmFtZSA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2hpcHBpbmdfZmlyc3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuc2hpcHBpbmdfZmlyc3ROYW1lLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5zaGlwcGluZ19maXJzdE5hbWUuZXJyb3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtlcnJvclN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5zaGlwcGluZ19maXJzdE5hbWUuZXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTGFzdCBOYW1lIDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzaGlwcGluZ19sYXN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnNoaXBwaW5nX2xhc3ROYW1lLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5zaGlwcGluZ19sYXN0TmFtZS5lcnJvciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e2Vycm9yU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlLnNoaXBwaW5nX2xhc3ROYW1lLmVycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UGhvbmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2hpcHBpbmdfcGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuc2hpcHBpbmdfcGhvbmUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlLnNoaXBwaW5nX3Bob25lLmVycm9yICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17ZXJyb3JTdHlsZX0+e3N0YXRlLnNoaXBwaW5nX3Bob25lLmVycm9yfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBBZGRyZXNzIDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzaGlwcGluZ19hZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuc2hpcHBpbmdfYWRkcmVzcy52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0cmVldCBhZGRyZXNzLCBIb3VzZSBOdW1iZXIgLyBDb21wYW55IG5hbWUsIEJhcmFuZ2dheVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlLnNoaXBwaW5nX2FkZHJlc3MuZXJyb3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtlcnJvclN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5zaGlwcGluZ19hZGRyZXNzLmVycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBUb3duIC8gQ2l0eSA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2hpcHBpbmdfY2l0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnNoaXBwaW5nX2NpdHkudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlLnNoaXBwaW5nX2NpdHkuZXJyb3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtlcnJvclN0eWxlfT57c3RhdGUuc2hpcHBpbmdfY2l0eS5lcnJvcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBQb3N0Y29kZSAvIFppcCA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2hpcHBpbmdfemlwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuc2hpcHBpbmdfemlwLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5zaGlwcGluZ196aXAuZXJyb3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtlcnJvclN0eWxlfT57c3RhdGUuc2hpcHBpbmdfemlwLmVycm9yfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJkaXZpZGVyQ2xhc3NcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlsbGluZy1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPllvdXIgSW5mbzwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgRmlyc3QgTmFtZSA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmlsbGluZ19maXJzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5iaWxsaW5nX2ZpcnN0TmFtZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgRmlyc3RuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuYmlsbGluZ19maXJzdE5hbWUuZXJyb3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtlcnJvclN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5iaWxsaW5nX2ZpcnN0TmFtZS5lcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBMYXN0IE5hbWUgPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJpbGxpbmdfbGFzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5iaWxsaW5nX2xhc3ROYW1lLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBMYXN0bmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlLmJpbGxpbmdfbGFzdE5hbWUuZXJyb3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtlcnJvclN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5iaWxsaW5nX2xhc3ROYW1lLmVycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgRW1haWwgQWRkcmVzcyA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJpbGxpbmdfZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5iaWxsaW5nX2VtYWlsLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbCAoRm9yIE9yZGVyIENvbmZpcm1hdGlvbilcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5iaWxsaW5nX2VtYWlsLmVycm9yICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17ZXJyb3JTdHlsZX0+e3N0YXRlLmJpbGxpbmdfZW1haWwuZXJyb3J9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5QaG9uZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiaWxsaW5nX3Bob25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLmJpbGxpbmdfcGhvbmUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlLmJpbGxpbmdfcGhvbmUuZXJyb3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtlcnJvclN0eWxlfT57c3RhdGUuYmlsbGluZ19waG9uZS5lcnJvcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXktMyBkaXZpZGVyQ2xhc3NcIiAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+WW91ciBPcmRlcjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxPcmRlclN1bW1hcnkgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInBheW1lbnQtbWV0aG9kXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGlyZWN0LWJhbmstdHJhbnNmZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvLWdyb3VwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkaXJlY3QtYmFuay10cmFuc2ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRGlyZWN0IEJhbmsgVHJhbnNmZXJcclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIE1ha2UgeW91ciBwYXltZW50IGRpcmVjdGx5IGludG8gb3VyIGJhbmsgYWNjb3VudC4gUGxlYXNlIHVzZVxyXG4gICAgICAgICAgICAgICAgICAgIHlvdXIgT3JkZXIgSUQgYXMgdGhlIHBheW1lbnQgcmVmZXJlbmNlLiBZb3VyIG9yZGVyIHdpbGwgbm90XHJcbiAgICAgICAgICAgICAgICAgICAgYmUgc2hpcHBlZCB1bnRpbCB0aGUgZnVuZHMgaGF2ZSBjbGVhcmVkIGluIG91ciBhY2NvdW50LlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInBheXBhbFwiIG5hbWU9XCJyYWRpby1ncm91cFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXlwYWxcIj5QYXlQYWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY2FzaC1vbi1kZWxpdmVyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW8tZ3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjYXNoLW9uLWRlbGl2ZXJ5XCI+Q2FzaCBvbiBEZWxpdmVyeTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxQYXltZW50XHJcbiAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICBhbW91bnQ9e3RvdGFsQW1vdW50ICogMTAwfVxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZX1cclxuICAgICAgICAgICAgICAgICAgaXNWYWxpZD17aXNWYWxpZH1cclxuICAgICAgICAgICAgICAgIC8+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9yZGVyLWJ0blwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBwYWRkaW5nVG9wOiBcIjIwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI5MCVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cHJvY2VlZFRvUGF5bWVudH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBQcm9jZWVkIHRvIFBheW1lbnRcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0b3RhbDogc3RhdGUudG90YWwsXHJcbiAgICBzaGlwcGluZzogc3RhdGUuc2hpcHBpbmcsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShDaGVja291dEZvcm0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
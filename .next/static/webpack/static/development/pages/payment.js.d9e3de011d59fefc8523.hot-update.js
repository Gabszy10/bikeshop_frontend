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
    className: "formField",
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
    className: "input",
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
    className: "formField",
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
    className: "input",
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
    className: "formField",
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
    className: "input",
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
    className: "payButton",
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BheW1lbnRzL0dyYWJwYXkuanMiXSwibmFtZXMiOlsiR3JhYlBheSIsImFtb3VudCIsImRlc2NyaXB0aW9uIiwiaGFuZGxlU3VibWl0IiwidXNlU3RhdGUiLCJuYW1lIiwic2V0TmFtZSIsInBob25lIiwic2V0UGhvbmUiLCJlbWFpbCIsInNldEVtYWlsIiwicGF5UHJvY2VzcyIsInNldFBheVByb2Nlc3MiLCJwYXltZW50U3RhdHVzIiwic2V0UGF5bWVudFN0YXR1cyIsInB1YmxpY0tleSIsInByb2Nlc3MiLCJjcmVhdGVTb3VyY2UiLCJvcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsIkF1dGhvcml6YXRpb24iLCJCdWZmZXIiLCJmcm9tIiwidG9TdHJpbmciLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJhdHRyaWJ1dGVzIiwicmVkaXJlY3QiLCJzdWNjZXNzIiwiZmFpbGVkIiwiYmlsbGluZyIsInR5cGUiLCJjdXJyZW5jeSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImxpc3RlblRvUGF5bWVudCIsInNvdXJjZUlkIiwiaSIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImxvZyIsInNvdXJjZURhdGEiLCJzdGF0dXMiLCJ0b2FzdCIsInVzZUVmZmVjdCIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNvdXJjZSIsIndpbmRvdyIsIm9wZW4iLCJjaGVja291dF91cmwiLCJpZCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQTJDO0FBQUE7O0FBQUEsTUFBeENDLE1BQXdDLFFBQXhDQSxNQUF3QztBQUFBLE1BQWhDQyxX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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLFdBQU8sRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUVFO0FBQ0UsTUFBRSxFQUFDLE9BREw7QUFFRSxlQUFXLEVBQUMsaUJBRmQ7QUFHRSxhQUFTLEVBQUUsT0FIYjtBQUlFLFNBQUssRUFBRXhELEtBSlQ7QUFLRSxZQUFRLEVBQUUsa0JBQUNzRCxDQUFEO0FBQUEsYUFBT3JELFFBQVEsQ0FBQ3FELENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWY7QUFBQSxLQUxaO0FBTUUsWUFBUSxNQU5WO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQXhCRixFQW1DRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLGFBQVMsRUFBRSxXQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBbkNGLEVBc0NFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSXBELGFBQUosQ0F0Q0YsRUF1Q0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJRixVQUFKLENBdkNGLENBREYsQ0FERjtBQTZDRCxDQTNKRDs7R0FBTVgsTzs7S0FBQUEsTztBQTZKU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHBheW1lbnQuanMuZDllM2RlMDExZDU5ZmVmYzg1MjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcblxyXG5jb25zdCBHcmFiUGF5ID0gKHsgYW1vdW50LCBkZXNjcmlwdGlvbiwgaGFuZGxlU3VibWl0IH0pID0+IHtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGhvbmUsIHNldFBob25lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IFtwYXlQcm9jZXNzLCBzZXRQYXlQcm9jZXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXltZW50U3RhdHVzLCBzZXRQYXltZW50U3RhdHVzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBwdWJsaWNLZXkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19QQVlNT05HT19QVUJMSUM7XHJcblxyXG4gIC8vIEZ1bmN0aW9uIHRvIENyZWF0ZSBBIFNvdXJjZVxyXG4gIGNvbnN0IGNyZWF0ZVNvdXJjZSA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldFBheW1lbnRTdGF0dXMoXCJDcmVhdGluZyBTb3VyY2VcIik7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHtCdWZmZXIuZnJvbShwdWJsaWNLZXkpLnRvU3RyaW5nKFwiYmFzZTY0XCIpfWAsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgICAgIGFtb3VudDogYW1vdW50ICogMTAwLFxyXG4gICAgICAgICAgICByZWRpcmVjdDoge1xyXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3BheW1lbnRcIixcclxuICAgICAgICAgICAgICBmYWlsZWQ6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3BheW1lbnRcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYmlsbGluZzogeyBuYW1lOiBgJHtuYW1lfWAsIHBob25lOiBgJHtwaG9uZX1gLCBlbWFpbDogYCR7ZW1haWx9YCB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcImdyYWJfcGF5XCIsXHJcbiAgICAgICAgICAgIGN1cnJlbmN5OiBcIlBIUFwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgIH07XHJcbiAgICByZXR1cm4gZmV0Y2goXCJodHRwczovL2FwaS5wYXltb25nby5jb20vdjEvc291cmNlc1wiLCBvcHRpb25zKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICB9O1xyXG5cclxuICAvLyBGdW5jdGlvbiB0byBMaXN0ZW4gdG8gdGhlIFNvdXJjZSBpbiB0aGUgRnJvbnQgRW5kXHJcbiAgY29uc3QgbGlzdGVuVG9QYXltZW50ID0gYXN5bmMgKHNvdXJjZUlkKSA9PiB7XHJcbiAgICBsZXQgaSA9IDU7XHJcbiAgICBmb3IgKGxldCBpID0gNTsgaSA+IDA7IGktLSkge1xyXG4gICAgICBzZXRQYXltZW50U3RhdHVzKGBMaXN0ZW5pbmcgdG8gUGF5bWVudCBpbiAke2l9YCk7XHJcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMDApKTtcclxuXHJcbiAgICAgIGlmIChpID09IDEpIHtcclxuICAgICAgICBjb25zdCBzb3VyY2VEYXRhID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgICBcImh0dHBzOi8vYXBpLnBheW1vbmdvLmNvbS92MS9zb3VyY2VzL1wiICsgc291cmNlSWQsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAvLyBCYXNlNjQgZW5jb2RlZCBwdWJsaWMgUGF5TW9uZ28gQVBJIGtleS5cclxuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHtCdWZmZXIuZnJvbShwdWJsaWNLZXkpLnRvU3RyaW5nKFxyXG4gICAgICAgICAgICAgICAgXCJiYXNlNjRcIlxyXG4gICAgICAgICAgICAgICl9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChzb3VyY2VEYXRhLmF0dHJpYnV0ZXMuc3RhdHVzID09PSBcImZhaWxlZFwiKSB7XHJcbiAgICAgICAgICB0b2FzdC5zdWNjZXNzKFwiUGF5bWVudCBGYWlsZWQsIFBsZWFzZSB0cnkgYWdhaW4uXCIpO1xyXG4gICAgICAgICAgc2V0UGF5bWVudFN0YXR1cyhcImZhaWxlZFwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHNvdXJjZURhdGEuYXR0cmlidXRlcy5zdGF0dXMgPT09IFwicGFpZFwiKSB7XHJcbiAgICAgICAgICB0b2FzdC5zdWNjZXNzKFwiUGF5bWVudCBTdWNjZXNmdWxseVwiKTtcclxuICAgICAgICAgIHNldFBheW1lbnRTdGF0dXMoXCJQYXltZW50IFN1Y2Nlc3NcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzb3VyY2VEYXRhLmF0dHJpYnV0ZXMuc3RhdHVzID09PSBcImV4cGlyZWRcIikge1xyXG4gICAgICAgICAgdG9hc3QuZXJyb3IoXCJQYXltZW50IGhhcyBleHBpcmUsIFBsZWFzZSB0cnkgYWdhaW5cIik7XHJcbiAgICAgICAgICBzZXRQYXltZW50U3RhdHVzKFwiZXhwaXJlZFwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaSA9IDU7XHJcbiAgICAgICAgICBzZXRQYXlQcm9jZXNzKHNvdXJjZURhdGEuYXR0cmlidXRlcy5zdGF0dXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocGF5bWVudFN0YXR1cykge1xyXG4gICAgICBpZiAocGF5bWVudFN0YXR1cyA9PSBcIlBheW1lbnQgU3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgaGFuZGxlU3VibWl0KFwiR3JhYlBheVwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChwYXlQcm9jZXNzKSB7XHJcbiAgICAgIGlmIChwYXlQcm9jZXNzID09IFwiZXhwaXJlZFwiKSB7XHJcbiAgICAgICAgdG9hc3QuZXJyb3IoXCJQYXltZW50IGhhcyBleHBpcmUsIFBsZWFzZSB0cnkgYWdhaW4uXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKHBheVByb2Nlc3MgPT0gXCJjaGFyZ2VhYmxlXCIpIHtcclxuICAgICAgICBoYW5kbGVTdWJtaXQoXCJHcmFiUGF5XCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW3BheW1lbnRTdGF0dXMsIHBheVByb2Nlc3NdKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBzb3VyY2UgPSBhd2FpdCBjcmVhdGVTb3VyY2UoKTtcclxuICAgIHdpbmRvdy5vcGVuKHNvdXJjZS5kYXRhLmF0dHJpYnV0ZXMucmVkaXJlY3QuY2hlY2tvdXRfdXJsLCBcIl9ibGFua1wiKTtcclxuICAgIGxpc3RlblRvUGF5bWVudChzb3VyY2UuZGF0YS5pZCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uPlxyXG4gICAgICA8Zm9ybSBhY3Rpb249XCIjXCIgb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICA8aDI+QmlsbGluZyBJbmZvcm1hdGlvbjwvaDI+XHJcbiAgICAgICAgPGRpdiBpZD1cImZvcm0tY2FyZFwiIGNsYXNzTmFtZT17XCJmb3JtRmllbGRcIn0+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImN1c3RvbWVyLW5hbWVcIj5DdXN0b21lciBOYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgaWQ9XCJjdXN0b21lci1uYW1lXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJKdWFuIERlbGEgQ3J1elwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XCJpbnB1dFwifVxyXG4gICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cImZvcm0tY2FyZFwiIGNsYXNzTmFtZT17XCJmb3JtRmllbGRcIn0+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBob25lXCI+UGhvbmUgTnVtYmVyOjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgaWQ9XCJwaG9uZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMDl4eHh4eHh4eHhcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1wiaW5wdXRcIn1cclxuICAgICAgICAgICAgdmFsdWU9e3Bob25lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBob25lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cImZvcm0tY2FyZFwiIGNsYXNzTmFtZT17XCJmb3JtRmllbGRcIn0+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+ZW1haWw6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ1c2VyQGRvbWFpbi5jb21cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1wiaW5wdXRcIn1cclxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtcInBheUJ1dHRvblwifT5cclxuICAgICAgICAgIFBheVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxwPntwYXltZW50U3RhdHVzfTwvcD5cclxuICAgICAgICA8cD57cGF5UHJvY2Vzc308L3A+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3JhYlBheTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
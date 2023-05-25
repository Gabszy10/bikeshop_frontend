webpackHotUpdate("static\\development\\pages\\payment.js",{

/***/ "./components/payments/Gcash.js":
/*!**************************************!*\
  !*** ./components/payments/Gcash.js ***!
  \**************************************/
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
    _jsxFileName = "C:\\Users\\corde\\Desktop\\New folder\\bikeshop\\bikeshop_frontend\\components\\payments\\Gcash.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var GCash = function GCash(_ref) {
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
                        success: "http://localhost:3001/redirect",
                        failed: "http://localhost:3001/redirect"
                      },
                      billing: {
                        name: "".concat(name),
                        phone: "".concat(phone),
                        email: "".concat(email)
                      },
                      type: "gcash",
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
      var i, sourceData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              i = 5;
              i = 5;

            case 2:
              if (!(i > 0)) {
                _context2.next = 15;
                break;
              }

              setPaymentStatus("Listening to Payment in ".concat(i));
              _context2.next = 6;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 1000);
              });

            case 6:
              if (!(i == 1)) {
                _context2.next = 12;
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
                if (response.data) {
                  console.log(response);
                  return response.data;
                } else if (response.errors) {
                  react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].error(response.errors[0].detail);
                }
              });

            case 9:
              sourceData = _context2.sent;
              console.log(sourceData);

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
                i = 5;
                setPayProcess(sourceData.attributes.status);
              }

            case 12:
              i--;
              _context2.next = 2;
              break;

            case 15:
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

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (paymentStatus) {
      if (paymentStatus == "Payment Success") {
        handleSubmit("Gcash");
      }
    }

    if (payProcess) {
      if (payProcess == "expired") {
        react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].error("Payment has expire, Please try again.");
      } else if (payProcess == "chargeable") {
        handleSubmit("Gcash");
      }
    }
  }, [paymentStatus, payProcess]);
  return __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 5
    }
  }, __jsx("form", {
    action: "#",
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }, __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, "Billing Information"), __jsx("div", {
    id: "form-card",
    className: "formField",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "customer-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
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
      lineNumber: 126,
      columnNumber: 11
    }
  })), __jsx("div", {
    id: "form-card",
    className: "formField",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "phone",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
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
      lineNumber: 137,
      columnNumber: 11
    }
  })), __jsx("div", {
    id: "form-card",
    className: "formField",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
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
      lineNumber: 148,
      columnNumber: 11
    }
  })), __jsx("button", {
    type: "submit",
    className: "payButton",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 9
    }
  }, "Pay")));
};

_s(GCash, "aBWeEg8I7H8Pbf7Kro3pjTt6pEw=");

_c = GCash;
/* harmony default export */ __webpack_exports__["default"] = (GCash);

var _c;

$RefreshReg$(_c, "GCash");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BheW1lbnRzL0djYXNoLmpzIl0sIm5hbWVzIjpbIkdDYXNoIiwiYW1vdW50IiwiZGVzY3JpcHRpb24iLCJoYW5kbGVTdWJtaXQiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwicGhvbmUiLCJzZXRQaG9uZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXlQcm9jZXNzIiwic2V0UGF5UHJvY2VzcyIsInBheW1lbnRTdGF0dXMiLCJzZXRQYXltZW50U3RhdHVzIiwicHVibGljS2V5IiwicHJvY2VzcyIsImNyZWF0ZVNvdXJjZSIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiQXV0aG9yaXphdGlvbiIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImF0dHJpYnV0ZXMiLCJyZWRpcmVjdCIsInN1Y2Nlc3MiLCJmYWlsZWQiLCJiaWxsaW5nIiwidHlwZSIsImN1cnJlbmN5IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwibGlzdGVuVG9QYXltZW50Iiwic291cmNlSWQiLCJpIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwibG9nIiwiZXJyb3JzIiwidG9hc3QiLCJkZXRhaWwiLCJzb3VyY2VEYXRhIiwic3RhdHVzIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic291cmNlIiwid2luZG93Iiwib3BlbiIsImNoZWNrb3V0X3VybCIsImlkIiwidXNlRWZmZWN0IiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBMkM7QUFBQTs7QUFBQSxNQUF4Q0MsTUFBd0MsUUFBeENBLE1BQXdD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LGtCQUFDMEQsQ0FBRDtBQUFBLGFBQU96RCxRQUFRLENBQUN5RCxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFmO0FBQUEsS0FMWjtBQU1FLFlBQVEsTUFOVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FiRixFQXdCRTtBQUFLLE1BQUUsRUFBQyxXQUFSO0FBQW9CLGFBQVMsRUFBRSxXQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxXQUFPLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFRTtBQUNFLE1BQUUsRUFBQyxPQURMO0FBRUUsZUFBVyxFQUFDLGlCQUZkO0FBR0UsYUFBUyxFQUFFLE9BSGI7QUFJRSxTQUFLLEVBQUUxRCxLQUpUO0FBS0UsWUFBUSxFQUFFLGtCQUFDd0QsQ0FBRDtBQUFBLGFBQU92RCxRQUFRLENBQUN1RCxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFmO0FBQUEsS0FMWjtBQU1FLFlBQVEsTUFOVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0F4QkYsRUFtQ0U7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFTLEVBQUUsV0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQW5DRixDQURGLENBREY7QUE2Q0QsQ0EvSkQ7O0dBQU1uRSxLOztLQUFBQSxLO0FBaUtTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccGF5bWVudC5qcy5lYzNiMTlmMGJjZDMzN2NiMzM4MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuXHJcbmNvbnN0IEdDYXNoID0gKHsgYW1vdW50LCBkZXNjcmlwdGlvbiwgaGFuZGxlU3VibWl0IH0pID0+IHtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGhvbmUsIHNldFBob25lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IFtwYXlQcm9jZXNzLCBzZXRQYXlQcm9jZXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXltZW50U3RhdHVzLCBzZXRQYXltZW50U3RhdHVzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBwdWJsaWNLZXkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19QQVlNT05HT19QVUJMSUM7XHJcblxyXG4gIC8vIEZ1bmN0aW9uIHRvIENyZWF0ZSBBIFNvdXJjZVxyXG4gIGNvbnN0IGNyZWF0ZVNvdXJjZSA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldFBheW1lbnRTdGF0dXMoXCJDcmVhdGluZyBTb3VyY2VcIik7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHtCdWZmZXIuZnJvbShwdWJsaWNLZXkpLnRvU3RyaW5nKFwiYmFzZTY0XCIpfWAsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgICAgIGFtb3VudDogYW1vdW50ICogMTAwLFxyXG4gICAgICAgICAgICByZWRpcmVjdDoge1xyXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3JlZGlyZWN0XCIsXHJcbiAgICAgICAgICAgICAgZmFpbGVkOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9yZWRpcmVjdFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBiaWxsaW5nOiB7IG5hbWU6IGAke25hbWV9YCwgcGhvbmU6IGAke3Bob25lfWAsIGVtYWlsOiBgJHtlbWFpbH1gIH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiZ2Nhc2hcIixcclxuICAgICAgICAgICAgY3VycmVuY3k6IFwiUEhQXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgfTtcclxuICAgIHJldHVybiBmZXRjaChcImh0dHBzOi8vYXBpLnBheW1vbmdvLmNvbS92MS9zb3VyY2VzXCIsIG9wdGlvbnMpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gIH07XHJcblxyXG4gIC8vIEZ1bmN0aW9uIHRvIExpc3RlbiB0byB0aGUgU291cmNlIGluIHRoZSBGcm9udCBFbmRcclxuICBjb25zdCBsaXN0ZW5Ub1BheW1lbnQgPSBhc3luYyAoc291cmNlSWQpID0+IHtcclxuICAgIGxldCBpID0gNTtcclxuICAgIGZvciAoaSA9IDU7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgc2V0UGF5bWVudFN0YXR1cyhgTGlzdGVuaW5nIHRvIFBheW1lbnQgaW4gJHtpfWApO1xyXG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDAwKSk7XHJcblxyXG4gICAgICBpZiAoaSA9PSAxKSB7XHJcbiAgICAgICAgY29uc3Qgc291cmNlRGF0YSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgICAgXCJodHRwczovL2FwaS5wYXltb25nby5jb20vdjEvc291cmNlcy9cIiArIHNvdXJjZUlkLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgLy8gQmFzZTY0IGVuY29kZWQgcHVibGljIFBheU1vbmdvIEFQSSBrZXkuXHJcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJhc2ljICR7QnVmZmVyLmZyb20ocHVibGljS2V5KS50b1N0cmluZyhcclxuICAgICAgICAgICAgICAgIFwiYmFzZTY0XCJcclxuICAgICAgICAgICAgICApfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLmVycm9ycykge1xyXG4gICAgICAgICAgICAgIHRvYXN0LmVycm9yKHJlc3BvbnNlLmVycm9yc1swXS5kZXRhaWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzb3VyY2VEYXRhKTtcclxuICAgICAgICBpZiAoc291cmNlRGF0YS5hdHRyaWJ1dGVzLnN0YXR1cyA9PT0gXCJmYWlsZWRcIikge1xyXG4gICAgICAgICAgdG9hc3Quc3VjY2VzcyhcIlBheW1lbnQgRmFpbGVkLCBQbGVhc2UgdHJ5IGFnYWluLlwiKTtcclxuICAgICAgICAgIHNldFBheW1lbnRTdGF0dXMoXCJmYWlsZWRcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzb3VyY2VEYXRhLmF0dHJpYnV0ZXMuc3RhdHVzID09PSBcInBhaWRcIikge1xyXG4gICAgICAgICAgdG9hc3Quc3VjY2VzcyhcIlBheW1lbnQgU3VjY2VzZnVsbHlcIik7XHJcbiAgICAgICAgICBzZXRQYXltZW50U3RhdHVzKFwiUGF5bWVudCBTdWNjZXNzXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc291cmNlRGF0YS5hdHRyaWJ1dGVzLnN0YXR1cyA9PT0gXCJleHBpcmVkXCIpIHtcclxuICAgICAgICAgIHRvYXN0LmVycm9yKFwiUGF5bWVudCBoYXMgZXhwaXJlLCBQbGVhc2UgdHJ5IGFnYWluXCIpO1xyXG4gICAgICAgICAgc2V0UGF5bWVudFN0YXR1cyhcImV4cGlyZWRcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGkgPSA1O1xyXG4gICAgICAgICAgc2V0UGF5UHJvY2Vzcyhzb3VyY2VEYXRhLmF0dHJpYnV0ZXMuc3RhdHVzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHNvdXJjZSA9IGF3YWl0IGNyZWF0ZVNvdXJjZSgpO1xyXG4gICAgd2luZG93Lm9wZW4oc291cmNlLmRhdGEuYXR0cmlidXRlcy5yZWRpcmVjdC5jaGVja291dF91cmwsIFwiX2JsYW5rXCIpO1xyXG4gICAgbGlzdGVuVG9QYXltZW50KHNvdXJjZS5kYXRhLmlkKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHBheW1lbnRTdGF0dXMpIHtcclxuICAgICAgaWYgKHBheW1lbnRTdGF0dXMgPT0gXCJQYXltZW50IFN1Y2Nlc3NcIikge1xyXG4gICAgICAgIGhhbmRsZVN1Ym1pdChcIkdjYXNoXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBheVByb2Nlc3MpIHtcclxuICAgICAgaWYgKHBheVByb2Nlc3MgPT0gXCJleHBpcmVkXCIpIHtcclxuICAgICAgICB0b2FzdC5lcnJvcihcIlBheW1lbnQgaGFzIGV4cGlyZSwgUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XHJcbiAgICAgIH0gZWxzZSBpZiAocGF5UHJvY2VzcyA9PSBcImNoYXJnZWFibGVcIikge1xyXG4gICAgICAgIGhhbmRsZVN1Ym1pdChcIkdjYXNoXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW3BheW1lbnRTdGF0dXMsIHBheVByb2Nlc3NdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uPlxyXG4gICAgICA8Zm9ybSBhY3Rpb249XCIjXCIgb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICA8aDQ+QmlsbGluZyBJbmZvcm1hdGlvbjwvaDQ+XHJcbiAgICAgICAgPGRpdiBpZD1cImZvcm0tY2FyZFwiIGNsYXNzTmFtZT17XCJmb3JtRmllbGRcIn0+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImN1c3RvbWVyLW5hbWVcIj5DdXN0b21lciBOYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgaWQ9XCJjdXN0b21lci1uYW1lXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJKdWFuIERlbGEgQ3J1elwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XCJpbnB1dFwifVxyXG4gICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cImZvcm0tY2FyZFwiIGNsYXNzTmFtZT17XCJmb3JtRmllbGRcIn0+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBob25lXCI+UGhvbmUgTnVtYmVyOjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgaWQ9XCJwaG9uZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMDl4eHh4eHh4eHhcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1wiaW5wdXRcIn1cclxuICAgICAgICAgICAgdmFsdWU9e3Bob25lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBob25lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cImZvcm0tY2FyZFwiIGNsYXNzTmFtZT17XCJmb3JtRmllbGRcIn0+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+ZW1haWw6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ1c2VyQGRvbWFpbi5jb21cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1wiaW5wdXRcIn1cclxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtcInBheUJ1dHRvblwifT5cclxuICAgICAgICAgIFBheVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIHsvKiA8cD57cGF5bWVudFN0YXR1c308L3A+XHJcbiAgICAgICAgPHA+e3BheVByb2Nlc3N9PC9wPiAqL31cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHQ2FzaDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
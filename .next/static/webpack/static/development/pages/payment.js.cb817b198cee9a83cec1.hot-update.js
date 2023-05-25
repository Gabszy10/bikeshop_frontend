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
      if (paymentStatus == "Payment Success") {// handleSubmit("Gcash");
      }
    }

    if (payProcess) {
      if (payProcess == "expired") {
        react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].error("Payment has expire, Please try again.");
      } else if (payProcess == "chargeable") {// handleSubmit("Gcash");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BheW1lbnRzL0djYXNoLmpzIl0sIm5hbWVzIjpbIkdDYXNoIiwiYW1vdW50IiwiZGVzY3JpcHRpb24iLCJoYW5kbGVTdWJtaXQiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwicGhvbmUiLCJzZXRQaG9uZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXlQcm9jZXNzIiwic2V0UGF5UHJvY2VzcyIsInBheW1lbnRTdGF0dXMiLCJzZXRQYXltZW50U3RhdHVzIiwicHVibGljS2V5IiwicHJvY2VzcyIsImNyZWF0ZVNvdXJjZSIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiQXV0aG9yaXphdGlvbiIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImF0dHJpYnV0ZXMiLCJyZWRpcmVjdCIsInN1Y2Nlc3MiLCJmYWlsZWQiLCJiaWxsaW5nIiwidHlwZSIsImN1cnJlbmN5IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwibGlzdGVuVG9QYXltZW50Iiwic291cmNlSWQiLCJpIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwibG9nIiwiZXJyb3JzIiwidG9hc3QiLCJkZXRhaWwiLCJzb3VyY2VEYXRhIiwic3RhdHVzIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic291cmNlIiwid2luZG93Iiwib3BlbiIsImNoZWNrb3V0X3VybCIsImlkIiwidXNlRWZmZWN0IiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBMkM7QUFBQTs7QUFBQSxNQUF4Q0MsTUFBd0MsUUFBeENBLE1BQXdD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QUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUFBLEtBTFo7QUFNRSxZQUFRLE1BTlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBYkYsRUF3QkU7QUFBSyxNQUFFLEVBQUMsV0FBUjtBQUFvQixhQUFTLEVBQUUsV0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sV0FBTyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBRUU7QUFDRSxNQUFFLEVBQUMsT0FETDtBQUVFLGVBQVcsRUFBQyxpQkFGZDtBQUdFLGFBQVMsRUFBRSxPQUhiO0FBSUUsU0FBSyxFQUFFMUQsS0FKVDtBQUtFLFlBQVEsRUFBRSxrQkFBQ3dELENBQUQ7QUFBQSxhQUFPdkQsUUFBUSxDQUFDdUQsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUFBLEtBTFo7QUFNRSxZQUFRLE1BTlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBeEJGLEVBbUNFO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBUyxFQUFFLFdBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FuQ0YsQ0FERixDQURGO0FBNkNELENBL0pEOztHQUFNbkUsSzs7S0FBQUEsSztBQWlLU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHBheW1lbnQuanMuY2I4MTdiMTk4Y2VlOWE4M2NlYzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcblxyXG5jb25zdCBHQ2FzaCA9ICh7IGFtb3VudCwgZGVzY3JpcHRpb24sIGhhbmRsZVN1Ym1pdCB9KSA9PiB7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bob25lLCBzZXRQaG9uZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBbcGF5UHJvY2Vzcywgc2V0UGF5UHJvY2Vzc10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGF5bWVudFN0YXR1cywgc2V0UGF5bWVudFN0YXR1c10gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgcHVibGljS2V5ID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUEFZTU9OR09fUFVCTElDO1xyXG5cclxuICAvLyBGdW5jdGlvbiB0byBDcmVhdGUgQSBTb3VyY2VcclxuICBjb25zdCBjcmVhdGVTb3VyY2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRQYXltZW50U3RhdHVzKFwiQ3JlYXRpbmcgU291cmNlXCIpO1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJhc2ljICR7QnVmZmVyLmZyb20ocHVibGljS2V5KS50b1N0cmluZyhcImJhc2U2NFwiKX1gLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgICAgICBhbW91bnQ6IGFtb3VudCAqIDEwMCxcclxuICAgICAgICAgICAgcmVkaXJlY3Q6IHtcclxuICAgICAgICAgICAgICBzdWNjZXNzOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9yZWRpcmVjdFwiLFxyXG4gICAgICAgICAgICAgIGZhaWxlZDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvcmVkaXJlY3RcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYmlsbGluZzogeyBuYW1lOiBgJHtuYW1lfWAsIHBob25lOiBgJHtwaG9uZX1gLCBlbWFpbDogYCR7ZW1haWx9YCB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcImdjYXNoXCIsXHJcbiAgICAgICAgICAgIGN1cnJlbmN5OiBcIlBIUFwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgIH07XHJcbiAgICByZXR1cm4gZmV0Y2goXCJodHRwczovL2FwaS5wYXltb25nby5jb20vdjEvc291cmNlc1wiLCBvcHRpb25zKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICB9O1xyXG5cclxuICAvLyBGdW5jdGlvbiB0byBMaXN0ZW4gdG8gdGhlIFNvdXJjZSBpbiB0aGUgRnJvbnQgRW5kXHJcbiAgY29uc3QgbGlzdGVuVG9QYXltZW50ID0gYXN5bmMgKHNvdXJjZUlkKSA9PiB7XHJcbiAgICBsZXQgaSA9IDU7XHJcbiAgICBmb3IgKGkgPSA1OyBpID4gMDsgaS0tKSB7XHJcbiAgICAgIHNldFBheW1lbnRTdGF0dXMoYExpc3RlbmluZyB0byBQYXltZW50IGluICR7aX1gKTtcclxuICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCkpO1xyXG5cclxuICAgICAgaWYgKGkgPT0gMSkge1xyXG4gICAgICAgIGNvbnN0IHNvdXJjZURhdGEgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICAgIFwiaHR0cHM6Ly9hcGkucGF5bW9uZ28uY29tL3YxL3NvdXJjZXMvXCIgKyBzb3VyY2VJZCxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIC8vIEJhc2U2NCBlbmNvZGVkIHB1YmxpYyBQYXlNb25nbyBBUEkga2V5LlxyXG4gICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCYXNpYyAke0J1ZmZlci5mcm9tKHB1YmxpY0tleSkudG9TdHJpbmcoXHJcbiAgICAgICAgICAgICAgICBcImJhc2U2NFwiXHJcbiAgICAgICAgICAgICAgKX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICB0b2FzdC5lcnJvcihyZXNwb25zZS5lcnJvcnNbMF0uZGV0YWlsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coc291cmNlRGF0YSk7XHJcbiAgICAgICAgaWYgKHNvdXJjZURhdGEuYXR0cmlidXRlcy5zdGF0dXMgPT09IFwiZmFpbGVkXCIpIHtcclxuICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJQYXltZW50IEZhaWxlZCwgUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XHJcbiAgICAgICAgICBzZXRQYXltZW50U3RhdHVzKFwiZmFpbGVkXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc291cmNlRGF0YS5hdHRyaWJ1dGVzLnN0YXR1cyA9PT0gXCJwYWlkXCIpIHtcclxuICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJQYXltZW50IFN1Y2Nlc2Z1bGx5XCIpO1xyXG4gICAgICAgICAgc2V0UGF5bWVudFN0YXR1cyhcIlBheW1lbnQgU3VjY2Vzc1wiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHNvdXJjZURhdGEuYXR0cmlidXRlcy5zdGF0dXMgPT09IFwiZXhwaXJlZFwiKSB7XHJcbiAgICAgICAgICB0b2FzdC5lcnJvcihcIlBheW1lbnQgaGFzIGV4cGlyZSwgUGxlYXNlIHRyeSBhZ2FpblwiKTtcclxuICAgICAgICAgIHNldFBheW1lbnRTdGF0dXMoXCJleHBpcmVkXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpID0gNTtcclxuICAgICAgICAgIHNldFBheVByb2Nlc3Moc291cmNlRGF0YS5hdHRyaWJ1dGVzLnN0YXR1cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBzb3VyY2UgPSBhd2FpdCBjcmVhdGVTb3VyY2UoKTtcclxuICAgIHdpbmRvdy5vcGVuKHNvdXJjZS5kYXRhLmF0dHJpYnV0ZXMucmVkaXJlY3QuY2hlY2tvdXRfdXJsLCBcIl9ibGFua1wiKTtcclxuICAgIGxpc3RlblRvUGF5bWVudChzb3VyY2UuZGF0YS5pZCk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChwYXltZW50U3RhdHVzKSB7XHJcbiAgICAgIGlmIChwYXltZW50U3RhdHVzID09IFwiUGF5bWVudCBTdWNjZXNzXCIpIHtcclxuICAgICAgICAvLyBoYW5kbGVTdWJtaXQoXCJHY2FzaFwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChwYXlQcm9jZXNzKSB7XHJcbiAgICAgIGlmIChwYXlQcm9jZXNzID09IFwiZXhwaXJlZFwiKSB7XHJcbiAgICAgICAgdG9hc3QuZXJyb3IoXCJQYXltZW50IGhhcyBleHBpcmUsIFBsZWFzZSB0cnkgYWdhaW4uXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKHBheVByb2Nlc3MgPT0gXCJjaGFyZ2VhYmxlXCIpIHtcclxuICAgICAgICAvLyBoYW5kbGVTdWJtaXQoXCJHY2FzaFwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtwYXltZW50U3RhdHVzLCBwYXlQcm9jZXNzXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgPGg0PkJpbGxpbmcgSW5mb3JtYXRpb248L2g0PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJmb3JtLWNhcmRcIiBjbGFzc05hbWU9e1wiZm9ybUZpZWxkXCJ9PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjdXN0b21lci1uYW1lXCI+Q3VzdG9tZXIgTmFtZTo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGlkPVwiY3VzdG9tZXItbmFtZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSnVhbiBEZWxhIENydXpcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1wiaW5wdXRcIn1cclxuICAgICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJmb3JtLWNhcmRcIiBjbGFzc05hbWU9e1wiZm9ybUZpZWxkXCJ9PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZVwiPlBob25lIE51bWJlcjo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGlkPVwicGhvbmVcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjA5eHh4eHh4eHh4XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcImlucHV0XCJ9XHJcbiAgICAgICAgICAgIHZhbHVlPXtwaG9uZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQaG9uZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJmb3JtLWNhcmRcIiBjbGFzc05hbWU9e1wiZm9ybUZpZWxkXCJ9PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPmVtYWlsOjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidXNlckBkb21haW4uY29tXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcImlucHV0XCJ9XHJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17XCJwYXlCdXR0b25cIn0+XHJcbiAgICAgICAgICBQYXlcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICB7LyogPHA+e3BheW1lbnRTdGF0dXN9PC9wPlxyXG4gICAgICAgIDxwPntwYXlQcm9jZXNzfTwvcD4gKi99XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR0Nhc2g7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
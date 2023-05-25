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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BheW1lbnRzL0dyYWJwYXkuanMiXSwibmFtZXMiOlsiR3JhYlBheSIsImFtb3VudCIsImRlc2NyaXB0aW9uIiwiaGFuZGxlU3VibWl0IiwidXNlU3RhdGUiLCJuYW1lIiwic2V0TmFtZSIsInBob25lIiwic2V0UGhvbmUiLCJlbWFpbCIsInNldEVtYWlsIiwicGF5UHJvY2VzcyIsInNldFBheVByb2Nlc3MiLCJwYXltZW50U3RhdHVzIiwic2V0UGF5bWVudFN0YXR1cyIsInB1YmxpY0tleSIsInByb2Nlc3MiLCJjcmVhdGVTb3VyY2UiLCJvcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsIkF1dGhvcml6YXRpb24iLCJCdWZmZXIiLCJmcm9tIiwidG9TdHJpbmciLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJhdHRyaWJ1dGVzIiwicmVkaXJlY3QiLCJzdWNjZXNzIiwiZmFpbGVkIiwiYmlsbGluZyIsInR5cGUiLCJjdXJyZW5jeSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImxpc3RlblRvUGF5bWVudCIsInNvdXJjZUlkIiwiaSIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImxvZyIsInNvdXJjZURhdGEiLCJzdGF0dXMiLCJ0b2FzdCIsInVzZUVmZmVjdCIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNvdXJjZSIsIndpbmRvdyIsIm9wZW4iLCJjaGVja291dF91cmwiLCJpZCIsInN0eWxlcyIsImlucHV0IiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBMkM7QUFBQTs7QUFBQSxNQUF4Q0MsTUFBd0MsUUFBeENBLE1B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RTtBQUFLLE1BQUUsRUFBQyxXQUFSO0FBQW9CLGFBQVMsRUFBRSxXQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxXQUFPLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFRTtBQUNFLE1BQUUsRUFBQyxPQURMO0FBRUUsZUFBVyxFQUFDLGlCQUZkO0FBR0UsYUFBUyxFQUFFSixNQUFNLENBQUNDLEtBSHBCO0FBSUUsU0FBSyxFQUFFdkQsS0FKVDtBQUtFLFlBQVEsRUFBRSxrQkFBQ3dELENBQUQ7QUFBQSxhQUFPdkQsUUFBUSxDQUFDdUQsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUFBLEtBTFo7QUFNRSxZQUFRLE1BTlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBeEJGLEVBbUNFO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBUyxFQUFFLFdBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FuQ0YsRUFzQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJdEQsYUFBSixDQXRDRixFQXVDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlGLFVBQUosQ0F2Q0YsQ0FERixDQURGO0FBNkNELENBM0pEOztHQUFNWCxPOztLQUFBQSxPO0FBNkpTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccGF5bWVudC5qcy43N2ZhYzY2YzFjNzRhNzA1NzBhZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuXHJcbmNvbnN0IEdyYWJQYXkgPSAoeyBhbW91bnQsIGRlc2NyaXB0aW9uLCBoYW5kbGVTdWJtaXQgfSkgPT4ge1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwaG9uZSwgc2V0UGhvbmVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgW3BheVByb2Nlc3MsIHNldFBheVByb2Nlc3NdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3BheW1lbnRTdGF0dXMsIHNldFBheW1lbnRTdGF0dXNdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IHB1YmxpY0tleSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BBWU1PTkdPX1BVQkxJQztcclxuXHJcbiAgLy8gRnVuY3Rpb24gdG8gQ3JlYXRlIEEgU291cmNlXHJcbiAgY29uc3QgY3JlYXRlU291cmNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0UGF5bWVudFN0YXR1cyhcIkNyZWF0aW5nIFNvdXJjZVwiKTtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCYXNpYyAke0J1ZmZlci5mcm9tKHB1YmxpY0tleSkudG9TdHJpbmcoXCJiYXNlNjRcIil9YCxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICAgICAgYW1vdW50OiBhbW91bnQgKiAxMDAsXHJcbiAgICAgICAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgICAgICAgc3VjY2VzczogXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvcGF5bWVudFwiLFxyXG4gICAgICAgICAgICAgIGZhaWxlZDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvcGF5bWVudFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBiaWxsaW5nOiB7IG5hbWU6IGAke25hbWV9YCwgcGhvbmU6IGAke3Bob25lfWAsIGVtYWlsOiBgJHtlbWFpbH1gIH0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiZ3JhYl9wYXlcIixcclxuICAgICAgICAgICAgY3VycmVuY3k6IFwiUEhQXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgfTtcclxuICAgIHJldHVybiBmZXRjaChcImh0dHBzOi8vYXBpLnBheW1vbmdvLmNvbS92MS9zb3VyY2VzXCIsIG9wdGlvbnMpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gIH07XHJcblxyXG4gIC8vIEZ1bmN0aW9uIHRvIExpc3RlbiB0byB0aGUgU291cmNlIGluIHRoZSBGcm9udCBFbmRcclxuICBjb25zdCBsaXN0ZW5Ub1BheW1lbnQgPSBhc3luYyAoc291cmNlSWQpID0+IHtcclxuICAgIGxldCBpID0gNTtcclxuICAgIGZvciAobGV0IGkgPSA1OyBpID4gMDsgaS0tKSB7XHJcbiAgICAgIHNldFBheW1lbnRTdGF0dXMoYExpc3RlbmluZyB0byBQYXltZW50IGluICR7aX1gKTtcclxuICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCkpO1xyXG5cclxuICAgICAgaWYgKGkgPT0gMSkge1xyXG4gICAgICAgIGNvbnN0IHNvdXJjZURhdGEgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICAgIFwiaHR0cHM6Ly9hcGkucGF5bW9uZ28uY29tL3YxL3NvdXJjZXMvXCIgKyBzb3VyY2VJZCxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIC8vIEJhc2U2NCBlbmNvZGVkIHB1YmxpYyBQYXlNb25nbyBBUEkga2V5LlxyXG4gICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCYXNpYyAke0J1ZmZlci5mcm9tKHB1YmxpY0tleSkudG9TdHJpbmcoXHJcbiAgICAgICAgICAgICAgICBcImJhc2U2NFwiXHJcbiAgICAgICAgICAgICAgKX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHNvdXJjZURhdGEuYXR0cmlidXRlcy5zdGF0dXMgPT09IFwiZmFpbGVkXCIpIHtcclxuICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJQYXltZW50IEZhaWxlZCwgUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XHJcbiAgICAgICAgICBzZXRQYXltZW50U3RhdHVzKFwiZmFpbGVkXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc291cmNlRGF0YS5hdHRyaWJ1dGVzLnN0YXR1cyA9PT0gXCJwYWlkXCIpIHtcclxuICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJQYXltZW50IFN1Y2Nlc2Z1bGx5XCIpO1xyXG4gICAgICAgICAgc2V0UGF5bWVudFN0YXR1cyhcIlBheW1lbnQgU3VjY2Vzc1wiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHNvdXJjZURhdGEuYXR0cmlidXRlcy5zdGF0dXMgPT09IFwiZXhwaXJlZFwiKSB7XHJcbiAgICAgICAgICB0b2FzdC5lcnJvcihcIlBheW1lbnQgaGFzIGV4cGlyZSwgUGxlYXNlIHRyeSBhZ2FpblwiKTtcclxuICAgICAgICAgIHNldFBheW1lbnRTdGF0dXMoXCJleHBpcmVkXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpID0gNTtcclxuICAgICAgICAgIHNldFBheVByb2Nlc3Moc291cmNlRGF0YS5hdHRyaWJ1dGVzLnN0YXR1cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChwYXltZW50U3RhdHVzKSB7XHJcbiAgICAgIGlmIChwYXltZW50U3RhdHVzID09IFwiUGF5bWVudCBTdWNjZXNzXCIpIHtcclxuICAgICAgICBoYW5kbGVTdWJtaXQoXCJHcmFiUGF5XCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBheVByb2Nlc3MpIHtcclxuICAgICAgaWYgKHBheVByb2Nlc3MgPT0gXCJleHBpcmVkXCIpIHtcclxuICAgICAgICB0b2FzdC5lcnJvcihcIlBheW1lbnQgaGFzIGV4cGlyZSwgUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XHJcbiAgICAgIH0gZWxzZSBpZiAocGF5UHJvY2VzcyA9PSBcImNoYXJnZWFibGVcIikge1xyXG4gICAgICAgIGhhbmRsZVN1Ym1pdChcIkdyYWJQYXlcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbcGF5bWVudFN0YXR1cywgcGF5UHJvY2Vzc10pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHNvdXJjZSA9IGF3YWl0IGNyZWF0ZVNvdXJjZSgpO1xyXG4gICAgd2luZG93Lm9wZW4oc291cmNlLmRhdGEuYXR0cmlidXRlcy5yZWRpcmVjdC5jaGVja291dF91cmwsIFwiX2JsYW5rXCIpO1xyXG4gICAgbGlzdGVuVG9QYXltZW50KHNvdXJjZS5kYXRhLmlkKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24+XHJcbiAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIiBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgIDxoMj5CaWxsaW5nIEluZm9ybWF0aW9uPC9oMj5cclxuICAgICAgICA8ZGl2IGlkPVwiZm9ybS1jYXJkXCIgY2xhc3NOYW1lPXtcImZvcm1GaWVsZFwifT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY3VzdG9tZXItbmFtZVwiPkN1c3RvbWVyIE5hbWU6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBpZD1cImN1c3RvbWVyLW5hbWVcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkp1YW4gRGVsYSBDcnV6XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwiZm9ybS1jYXJkXCIgY2xhc3NOYW1lPXtcImZvcm1GaWVsZFwifT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGhvbmVcIj5QaG9uZSBOdW1iZXI6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBpZD1cInBob25lXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwOXh4eHh4eHh4eFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgICB2YWx1ZT17cGhvbmV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGhvbmUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwiZm9ybS1jYXJkXCIgY2xhc3NOYW1lPXtcImZvcm1GaWVsZFwifT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5lbWFpbDo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cInVzZXJAZG9tYWluLmNvbVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e1wicGF5QnV0dG9uXCJ9PlxyXG4gICAgICAgICAgUGF5XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPHA+e3BheW1lbnRTdGF0dXN9PC9wPlxyXG4gICAgICAgIDxwPntwYXlQcm9jZXNzfTwvcD5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHcmFiUGF5O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
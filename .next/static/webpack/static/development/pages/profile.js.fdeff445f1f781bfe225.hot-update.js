webpackHotUpdate("static\\development\\pages\\profile.js",{

/***/ "./components/auth/Profile.js":
/*!************************************!*\
  !*** ./components/auth/Profile.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_function__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/function */ "./helpers/function.js");



var _jsxFileName = "C:\\Users\\corde\\Desktop\\New folder\\bikeshop\\bikeshop_frontend\\components\\auth\\Profile.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var host = "http://127.0.0.1:8080";

function Profile() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      history = _useState[0],
      sethistory = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      orderDetails = _useState2[0],
      setorderDetails = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var token = js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get("_wus_BJK");

    if (!token) {// window.location.href = "/";
    } else {
      fetchOrders(token);
    }
  }, []);

  var fetchOrders = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(token) {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat(host, "/api/user/order/history"), {
                headers: {
                  Authorization: "".concat(token)
                }
              });

            case 3:
              res = _context.sent;

              if (res) {
                sethistory(res.data.orders);
              }

              console.log(res);
              _context.next = 12;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);

              if (_context.t0.response.status == 401) {
                js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove("_wus_BJK");
                window.location.href = "/";
              }

              if (_context.t0.response.data.err == "user order history not found") {
                sethistory([]);
              }

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function fetchOrders(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleDetails = function handleDetails() {};

  return __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "col-md-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "card",
    style: {
      marginLeft: "1.7rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "card-body m-auto text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "https://t3.ftcdn.net/jpg/03/39/45/96/360_F_339459697_XAFacNQmwnvJRqe1Fe9VOptPWMUxlZP8.jpg",
    alt: "",
    height: "100",
    style: {
      borderRadius: "50%",
      marginBottom: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }), __jsx("h5", {
    className: "card-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, "I-Wheels"), __jsx("button", {
    className: "btn btn-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, "Order History"), __jsx("button", {
    className: "btn btn-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, "Update Profile")))), history.length ? __jsx("div", {
    className: "col-md-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, history.map(function (order, i) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
      key: i,
      "class": "card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "card-header",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 19
      }
    }, __jsx("h5", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 21
      }
    }, order.order_name), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 21
      }
    }, order.created_at)), __jsx("div", {
      className: "card-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "col-md-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 23
      }
    }, __jsx("p", {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 25
      }
    }, "Delivery Date: ", order.delivery_date), __jsx("p", {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 25
      }
    }, "Delivery Time: ", order.delivery_time)), __jsx("div", {
      className: "col-md-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 23
      }
    }, __jsx("p", {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 25
      }
    }, "Mode Of Payment: ", order.payment_method), __jsx("p", {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 25
      }
    }, "Status: ", order.order_status_id)), __jsx("div", {
      className: "col-md-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 23
      }
    }, __jsx("p", {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 25
      }
    }, "Amount: P", Object(_helpers_function__WEBPACK_IMPORTED_MODULE_5__["formatNumber"])(order.total)), __jsx("button", {
      onClick: handleDetails,
      "data-toggle": "modal",
      "data-target": "#exampleModal",
      className: "btn btn-primary btn-details",
      style: {
        marginTop: "-0.5rem",
        fontSize: "0.8rem",
        padding: "0.7rem"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 25
      }
    }, "View Details"))))), __jsx("hr", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }
    }));
  })) : __jsx("h2", {
    className: "text-center m-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, "Order history is empty."), __jsx("div", {
    className: "modal fade",
    id: "exampleModal",
    tabIndex: "-1",
    role: "dialog",
    "aria-labelledby": "exampleModalLabel",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "modal-dialog",
    role: "document",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "modal-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "modal-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }, __jsx("h5", {
    className: "modal-title",
    id: "exampleModalLabel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 15
    }
  }, "Modal title"), __jsx("button", {
    type: "button",
    className: "close",
    "data-d": "modal",
    "aria-label": "Close",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 15
    }
  }, __jsx("span", {
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 17
    }
  }, "\xD7"))), __jsx("div", {
    className: "modal-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }, "..."), __jsx("div", {
    className: "modal-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  }, __jsx("button", {
    type: "button",
    className: "btn btn-secondary",
    "data-dismiss": "modal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 15
    }
  }, "Close"), __jsx("button", {
    type: "button",
    className: "btn btn-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 15
    }
  }, "Save changes"))))));
}

_s(Profile, "YL2Vhhp0zx+VPsN98gocI/kkg3U=");

_c = Profile;
/* harmony default export */ __webpack_exports__["default"] = (Profile);

var _c;

$RefreshReg$(_c, "Profile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F1dGgvUHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJob3N0IiwicHJvY2VzcyIsIlByb2ZpbGUiLCJ1c2VTdGF0ZSIsImhpc3RvcnkiLCJzZXRoaXN0b3J5Iiwib3JkZXJEZXRhaWxzIiwic2V0b3JkZXJEZXRhaWxzIiwidXNlRWZmZWN0IiwidG9rZW4iLCJjb29raWUiLCJnZXQiLCJmZXRjaE9yZGVycyIsImF4aW9zIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJyZXMiLCJkYXRhIiwib3JkZXJzIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwic3RhdHVzIiwicmVtb3ZlIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZXJyIiwiaGFuZGxlRGV0YWlscyIsIm1hcmdpbkxlZnQiLCJib3JkZXJSYWRpdXMiLCJtYXJnaW5Cb3R0b20iLCJsZW5ndGgiLCJtYXAiLCJvcmRlciIsImkiLCJvcmRlcl9uYW1lIiwiY3JlYXRlZF9hdCIsImRlbGl2ZXJ5X2RhdGUiLCJkZWxpdmVyeV90aW1lIiwicGF5bWVudF9tZXRob2QiLCJvcmRlcl9zdGF0dXNfaWQiLCJmb3JtYXROdW1iZXIiLCJ0b3RhbCIsIm1hcmdpblRvcCIsImZvbnRTaXplIiwicGFkZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsSUFBSSxHQUFHQyx1QkFBWDs7QUFFQSxTQUFTQyxPQUFULEdBQW1CO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ2FDLHNEQUFRLENBQUMsRUFBRCxDQURyQjtBQUFBLE1BQ1ZDLE9BRFU7QUFBQSxNQUNEQyxVQURDOztBQUFBLG1CQUV1QkYsc0RBQVEsQ0FBQyxJQUFELENBRi9CO0FBQUEsTUFFVkcsWUFGVTtBQUFBLE1BRUlDLGVBRko7O0FBSWpCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJQyxLQUFLLEdBQUdDLGdEQUFNLENB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QU8sT0FIVDtBQUlFLGtCQUFXLE9BSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FO0FBQU0sbUJBQVksTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLENBSkYsQ0FERixFQWNFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQWRGLEVBZUU7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLGFBQVMsRUFBQyxtQkFGWjtBQUdFLG9CQUFhLE9BSGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBUUU7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFTLEVBQUMsaUJBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUkYsQ0FmRixDQURGLENBUkYsQ0ExRUYsQ0FERjtBQW9IRDs7R0EzSlE1QyxPOztLQUFBQSxPO0FBNkpNQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccHJvZmlsZS5qcy5mZGVmZjQ0NWYxZjc4MWJmZTIyNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgZm9ybWF0TnVtYmVyIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvZnVuY3Rpb25cIjtcclxuXHJcbmxldCBob3N0ID0gcHJvY2Vzcy5lbnYuQVBJX1VSTDtcclxuXHJcbmZ1bmN0aW9uIFByb2ZpbGUoKSB7XHJcbiAgY29uc3QgW2hpc3RvcnksIHNldGhpc3RvcnldID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtvcmRlckRldGFpbHMsIHNldG9yZGVyRGV0YWlsc10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCB0b2tlbiA9IGNvb2tpZS5nZXQoXCJfd3VzX0JKS1wiKTtcclxuICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9cIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZldGNoT3JkZXJzKHRva2VuKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGZldGNoT3JkZXJzID0gYXN5bmMgKHRva2VuKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2hvc3R9L2FwaS91c2VyL29yZGVyL2hpc3RvcnlgLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7dG9rZW59YCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICBzZXRoaXN0b3J5KHJlcy5kYXRhLm9yZGVycyk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB7XHJcbiAgICAgICAgY29va2llLnJlbW92ZShcIl93dXNfQkpLXCIpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChlcnJvci5yZXNwb25zZS5kYXRhLmVyciA9PSBcInVzZXIgb3JkZXIgaGlzdG9yeSBub3QgZm91bmRcIikge1xyXG4gICAgICAgIHNldGhpc3RvcnkoW10pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGV0YWlscyA9ICgpID0+IHt9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMS43cmVtXCIgfX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBtLWF1dG8gdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vdDMuZnRjZG4ubmV0L2pwZy8wMy8zOS80NS85Ni8zNjBfRl8zMzk0NTk2OTdfWEFGYWNOUW13bnZKUnFlMUZlOVZPcHRQV01VeGxaUDguanBnXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjEwMFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLCBtYXJnaW5Cb3R0b206IFwiMXJlbVwiIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+SS1XaGVlbHM8L2g1PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbGlua1wiPk9yZGVyIEhpc3Rvcnk8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmtcIj5VcGRhdGUgUHJvZmlsZTwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7aGlzdG9yeS5sZW5ndGggPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOFwiPlxyXG4gICAgICAgICAge2hpc3RvcnkubWFwKChvcmRlciwgaSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3M9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDU+e29yZGVyLm9yZGVyX25hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8cD57b3JkZXIuY3JlYXRlZF9hdH08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIERlbGl2ZXJ5IERhdGU6IHtvcmRlci5kZWxpdmVyeV9kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIERlbGl2ZXJ5IFRpbWU6IHtvcmRlci5kZWxpdmVyeV90aW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTW9kZSBPZiBQYXltZW50OiB7b3JkZXIucGF5bWVudF9tZXRob2R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhdHVzOiB7b3JkZXIub3JkZXJfc3RhdHVzX2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQW1vdW50OiBQe2Zvcm1hdE51bWJlcihvcmRlci50b3RhbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURldGFpbHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjZXhhbXBsZU1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWRldGFpbHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiLTAuNXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMC44cmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjAuN3JlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBWaWV3IERldGFpbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG0tYXV0b1wiPk9yZGVyIGhpc3RvcnkgaXMgZW1wdHkuPC9oMj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCJcclxuICAgICAgICBpZD1cImV4YW1wbGVNb2RhbFwiXHJcbiAgICAgICAgdGFiSW5kZXg9XCItMVwiXHJcbiAgICAgICAgcm9sZT1cImRpYWxvZ1wiXHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZU1vZGFsTGFiZWxcIlxyXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJleGFtcGxlTW9kYWxMYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgTW9kYWwgdGl0bGVcclxuICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+Li4uPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgIFNhdmUgY2hhbmdlc1xyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
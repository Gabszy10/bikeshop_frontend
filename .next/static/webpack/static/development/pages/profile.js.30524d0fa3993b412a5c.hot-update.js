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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_function__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/function */ "./helpers/function.js");
/* harmony import */ var _store_actions_infoActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions/infoActions */ "./store/actions/infoActions.js");




var _jsxFileName = "C:\\Users\\corde\\Desktop\\New folder\\bikeshop\\bikeshop_frontend\\components\\auth\\Profile.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var host = "http://127.0.0.1:8080";

function Profile() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      history = _useState[0],
      sethistory = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      user = _useState2[0],
      setUser = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      orderDetails = _useState3[0],
      setorderDetails = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var token = js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get("_wus_BJK");

    if (!token) {// window.location.href = "/";
    } else {
      fetchOrders(token);
      fetchUserInfo(token);
    }
  }, []);

  var fetchUserInfo = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(token) {
      var res, decryptedData, newData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("".concat(host, "/api/user/user/details"), {
                headers: {
                  Authorization: "".concat(token)
                }
              });

            case 3:
              res = _context.sent;

              if (res) {
                setUser(res.data.userDetails);
                decryptedData = Object(_store_actions_infoActions__WEBPACK_IMPORTED_MODULE_7__["decryptInfoData"])();
                console.log(decryptedData);
                newData = _objectSpread(_objectSpread({}, decryptedData), {}, {
                  billing_firstName: {
                    value: res.data.userDetails.first_name || "",
                    error: ""
                  },
                  delivery_date: {
                    value: "",
                    error: ""
                  },
                  delivery_time: {
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
                  billing_lastName: {
                    value: res.data.userDetails.last_name || "",
                    error: ""
                  }
                });
                console.log(newData);
                Object(_store_actions_infoActions__WEBPACK_IMPORTED_MODULE_7__["encryptInfoData"])(newData);
              }

              console.log(res);
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);

              if (_context.t0.response.status == 401) {
                js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.remove("_wus_BJK");
                window.location.href = "/";
              }

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function fetchUserInfo(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var fetchOrders = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(token) {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("".concat(host, "/api/user/order/history"), {
                headers: {
                  Authorization: "".concat(token)
                }
              });

            case 3:
              res = _context2.sent;

              if (res) {
                sethistory(res.data.orders);
              }

              console.log(res);
              _context2.next = 12;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);

              if (_context2.t0.response.status == 401) {
                js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.remove("_wus_BJK");
                window.location.href = "/";
              }

              if (_context2.t0.response.data.err == "user order history not found") {
                sethistory([]);
              }

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 8]]);
    }));

    return function fetchOrders(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleDetails = function handleDetails() {};

  return __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "col-md-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
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
      lineNumber: 108,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "card-body m-auto text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
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
      lineNumber: 110,
      columnNumber: 13
    }
  }), __jsx("h5", {
    className: "card-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }, user ? user.first_name : "N/A", " ", user ? user.last_name : "N/A")))), history.length ? __jsx("div", {
    className: "col-md-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }, history.map(function (order, i) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("div", {
      key: i,
      "class": "card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "card-header",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 19
      }
    }, __jsx("h5", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 21
      }
    }, order.order_name), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 21
      }
    }, order.created_at)), __jsx("div", {
      className: "card-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "col-md-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 23
      }
    }, __jsx("p", {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 25
      }
    }, "Delivery Date: ", order.delivery_date), __jsx("p", {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 25
      }
    }, "Delivery Time: ", order.delivery_time)), __jsx("div", {
      className: "col-md-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 23
      }
    }, __jsx("p", {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 25
      }
    }, "Mode Of Payment: ", order.payment_method), __jsx("p", {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 25
      }
    }, "Status: ", order.order_status_id)), __jsx("div", {
      className: "col-md-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 23
      }
    }, __jsx("p", {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 25
      }
    }, "Amount: P", Object(_helpers_function__WEBPACK_IMPORTED_MODULE_6__["formatNumber"])(order.total)), __jsx("button", {
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
        lineNumber: 156,
        columnNumber: 25
      }
    }, "View Details"))))), __jsx("hr", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 17
      }
    }));
  })) : __jsx("h2", {
    className: "text-center m-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
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
      lineNumber: 182,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "modal-dialog",
    role: "document",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "modal-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "modal-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 13
    }
  }, __jsx("h5", {
    className: "modal-title",
    id: "exampleModalLabel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
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
      lineNumber: 196,
      columnNumber: 15
    }
  }, __jsx("span", {
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 17
    }
  }, "\xD7"))), __jsx("div", {
    className: "modal-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 13
    }
  }, "..."), __jsx("div", {
    className: "modal-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 13
    }
  }, __jsx("button", {
    type: "button",
    className: "btn btn-secondary",
    "data-dismiss": "modal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 15
    }
  }, "Close"), __jsx("button", {
    type: "button",
    className: "btn btn-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 15
    }
  }, "Save changes"))))));
}

_s(Profile, "EqxWa9/Yjs6pBes057n6vopyJ4I=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F1dGgvUHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJob3N0IiwicHJvY2VzcyIsIlByb2ZpbGUiLCJ1c2VTdGF0ZSIsImhpc3RvcnkiLCJzZXRoaXN0b3J5IiwidXNlciIsInNldFVzZXIiLCJvcmRlckRldGFpbHMiLCJzZXRvcmRlckRldGFpbHMiLCJ1c2VFZmZlY3QiLCJ0b2tlbiIsImNvb2tpZSIsImdldCIsImZldGNoT3JkZXJzIiwiZmV0Y2hVc2VySW5mbyIsImF4aW9zIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJyZXMiLCJkYXRhIiwidXNlckRldGFpbHMiLCJkZWNyeXB0ZWREYXRhIiwiZGVjcnlwdEluZm9EYXRhIiwiY29uc29sZSIsImxvZyIsIm5ld0RhdGEiLCJiaWxsaW5nX2ZpcnN0TmFtZSIsInZhbHVlIiwiZmlyc3RfbmFtZSIsImVycm9yIiwiZGVsaXZlcnlfZGF0ZSIsImRlbGl2ZXJ5X3RpbWUiLCJub3RlIiwibWVzc2FnZSIsImJpbGxpbmdfbGFzdE5hbWUiLCJsYXN0X25hbWUiLCJlbmNyeXB0SW5mb0RhdGEiLCJyZXNwb25zZSIsInN0YXR1cyIsInJlbW92ZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIm9yZGVycyIsImVyciIsImhhbmRsZURldGFpbHMiLCJtYXJnaW5MZWZ0IiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luQm90dG9tIiwibGVuZ3RoIiwibWFwIiwib3JkZXIiLCJpIiwib3JkZXJfbmFtZSIsImNyZWF0ZWRfYXQiLCJwYXltZW50X21ldGhvZCIsIm9yZGVyX3N0YXR1c19pZCIsImZvcm1hdE51bWJlciIsInRvdGFsIiwibWFyZ2luVG9wIiwiZm9udFNpemUiLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0EsSUFBSUEsSUFBSSxHQUFHQyx1QkFBWDs7QUFF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QUVFLGFBQVMsRUFBQyxtQkFGWjtBQUdFLG9CQUFhLE9BSGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBUUU7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFTLEVBQUMsaUJBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUkYsQ0FmRixDQURGLENBUkYsQ0E1RUYsQ0FERjtBQXNIRDs7R0FuTlE1RCxPOztLQUFBQSxPO0FBcU5NQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccHJvZmlsZS5qcy4zMDUyNGQwZmEzOTkzYjQxMmE1Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgZm9ybWF0TnVtYmVyIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvZnVuY3Rpb25cIjtcclxuaW1wb3J0IHtcclxuICBkZWNyeXB0SW5mb0RhdGEsXHJcbiAgZW5jcnlwdEluZm9EYXRhLFxyXG59IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2luZm9BY3Rpb25zXCI7XHJcblxyXG5sZXQgaG9zdCA9IHByb2Nlc3MuZW52LkFQSV9VUkw7XHJcblxyXG5mdW5jdGlvbiBQcm9maWxlKCkge1xyXG4gIGNvbnN0IFtoaXN0b3J5LCBzZXRoaXN0b3J5XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbb3JkZXJEZXRhaWxzLCBzZXRvcmRlckRldGFpbHNdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgdG9rZW4gPSBjb29raWUuZ2V0KFwiX3d1c19CSktcIik7XHJcbiAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmZXRjaE9yZGVycyh0b2tlbik7XHJcbiAgICAgIGZldGNoVXNlckluZm8odG9rZW4pO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hVc2VySW5mbyA9IGFzeW5jICh0b2tlbikgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtob3N0fS9hcGkvdXNlci91c2VyL2RldGFpbHNgLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7dG9rZW59YCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICBzZXRVc2VyKHJlcy5kYXRhLnVzZXJEZXRhaWxzKTtcclxuICAgICAgICBsZXQgZGVjcnlwdGVkRGF0YSA9IGRlY3J5cHRJbmZvRGF0YSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRlY3J5cHRlZERhdGEpO1xyXG4gICAgICAgIGxldCBuZXdEYXRhID0ge1xyXG4gICAgICAgICAgLi4uZGVjcnlwdGVkRGF0YSxcclxuICAgICAgICAgIGJpbGxpbmdfZmlyc3ROYW1lOiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiByZXMuZGF0YS51c2VyRGV0YWlscy5maXJzdF9uYW1lIHx8IFwiXCIsXHJcbiAgICAgICAgICAgIGVycm9yOiBcIlwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGRlbGl2ZXJ5X2RhdGU6IHtcclxuICAgICAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgIGVycm9yOiBcIlwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGRlbGl2ZXJ5X3RpbWU6IHtcclxuICAgICAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgIGVycm9yOiBcIlwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG5vdGU6IHtcclxuICAgICAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgIGVycm9yOiBcIlwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG1lc3NhZ2U6IHtcclxuICAgICAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgIGVycm9yOiBcIlwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJpbGxpbmdfbGFzdE5hbWU6IHtcclxuICAgICAgICAgICAgdmFsdWU6IHJlcy5kYXRhLnVzZXJEZXRhaWxzLmxhc3RfbmFtZSB8fCBcIlwiLFxyXG4gICAgICAgICAgICBlcnJvcjogXCJcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cobmV3RGF0YSk7XHJcbiAgICAgICAgZW5jcnlwdEluZm9EYXRhKG5ld0RhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkge1xyXG4gICAgICAgIGNvb2tpZS5yZW1vdmUoXCJfd3VzX0JKS1wiKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmV0Y2hPcmRlcnMgPSBhc3luYyAodG9rZW4pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7aG9zdH0vYXBpL3VzZXIvb3JkZXIvaGlzdG9yeWAsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgJHt0b2tlbn1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIHNldGhpc3RvcnkocmVzLmRhdGEub3JkZXJzKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcclxuICAgICAgICBjb29raWUucmVtb3ZlKFwiX3d1c19CSktcIik7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9cIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyID09IFwidXNlciBvcmRlciBoaXN0b3J5IG5vdCBmb3VuZFwiKSB7XHJcbiAgICAgICAgc2V0aGlzdG9yeShbXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEZXRhaWxzID0gKCkgPT4ge307XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIxLjdyZW1cIiB9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IG0tYXV0byB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly90My5mdGNkbi5uZXQvanBnLzAzLzM5LzQ1Lzk2LzM2MF9GXzMzOTQ1OTY5N19YQUZhY05RbXdudkpScWUxRmU5Vk9wdFBXTVV4bFpQOC5qcGdcIlxyXG4gICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiNTAlXCIsIG1hcmdpbkJvdHRvbTogXCIxcmVtXCIgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5cclxuICAgICAgICAgICAgICB7dXNlciA/IHVzZXIuZmlyc3RfbmFtZSA6IFwiTi9BXCJ9IHt1c2VyID8gdXNlci5sYXN0X25hbWUgOiBcIk4vQVwifVxyXG4gICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmtcIj5PcmRlciBIaXN0b3J5PC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmtcIj5VcGRhdGUgUHJvZmlsZTwvYnV0dG9uPiAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2hpc3RvcnkubGVuZ3RoID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cclxuICAgICAgICAgIHtoaXN0b3J5Lm1hcCgob3JkZXIsIGkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1PntvcmRlci5vcmRlcl9uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e29yZGVyLmNyZWF0ZWRfYXR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxpdmVyeSBEYXRlOiB7b3JkZXIuZGVsaXZlcnlfZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxpdmVyeSBUaW1lOiB7b3JkZXIuZGVsaXZlcnlfdGltZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIE1vZGUgT2YgUGF5bWVudDoge29yZGVyLnBheW1lbnRfbWV0aG9kfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXR1czoge29yZGVyLm9yZGVyX3N0YXR1c19pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEFtb3VudDogUHtmb3JtYXROdW1iZXIob3JkZXIudG90YWwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEZXRhaWxzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI2V4YW1wbGVNb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1kZXRhaWxzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIi0wLjVyZW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjAuOHJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIwLjdyZW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgVmlldyBEZXRhaWxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtLWF1dG9cIj5PcmRlciBoaXN0b3J5IGlzIGVtcHR5LjwvaDI+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiXHJcbiAgICAgICAgaWQ9XCJleGFtcGxlTW9kYWxcIlxyXG4gICAgICAgIHRhYkluZGV4PVwiLTFcIlxyXG4gICAgICAgIHJvbGU9XCJkaWFsb2dcIlxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGVNb2RhbExhYmVsXCJcclxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwiZXhhbXBsZU1vZGFsTGFiZWxcIj5cclxuICAgICAgICAgICAgICAgIE1vZGFsIHRpdGxlXHJcbiAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZD1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPi4uLjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICBTYXZlIGNoYW5nZXNcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
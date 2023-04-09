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
                    value: res.data.userDetails.email || "",
                    error: ""
                  },
                  shipping_phone: {
                    value: "",
                    error: ""
                  },
                  billing_firstName: {
                    value: res.data.userDetails.first_name || "",
                    error: ""
                  },
                  billing_lastName: {
                    value: res.data.userDetails.last_name || "",
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
      lineNumber: 105,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "col-md-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
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
      lineNumber: 107,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "card-body m-auto text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
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
      lineNumber: 109,
      columnNumber: 13
    }
  }), __jsx("h5", {
    className: "card-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, user ? user.first_name : "N/A", " ", user ? user.last_name : "N/A")))), history.length ? __jsx("div", {
    className: "col-md-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }, history.map(function (order, i) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("div", {
      key: i,
      "class": "card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "card-header",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 19
      }
    }, __jsx("h5", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 21
      }
    }, order.order_name), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 21
      }
    }, order.created_at)), __jsx("div", {
      className: "card-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "col-md-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 23
      }
    }, __jsx("p", {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 25
      }
    }, "Items:"), order.order_items.map(function (item) {
      return __jsx("p", {
        key: item.product_id,
        className: "card-text",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 27
        }
      }, item.product.name, " - ", item.quantity);
    })), __jsx("div", {
      className: "col-md-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 23
      }
    }, __jsx("p", {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 25
      }
    }, "Mode Of Payment: ", order.payment_method), __jsx("p", {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 25
      }
    }, "Payment Status: ", order.payment_status.name)), __jsx("div", {
      className: "col-md-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 23
      }
    }, __jsx("p", {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 25
      }
    }, "Order Status: ", order.order_status.name), __jsx("p", {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 25
      }
    }, "Amount: P", Object(_helpers_function__WEBPACK_IMPORTED_MODULE_6__["formatNumber"])(order.total)))))), __jsx("hr", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 17
      }
    }));
  })) : __jsx("h2", {
    className: "text-center m-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
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
      lineNumber: 184,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "modal-dialog",
    role: "document",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "modal-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "modal-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 13
    }
  }, __jsx("h5", {
    className: "modal-title",
    id: "exampleModalLabel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
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
      lineNumber: 198,
      columnNumber: 15
    }
  }, __jsx("span", {
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 17
    }
  }, "\xD7"))), __jsx("div", {
    className: "modal-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 13
    }
  }, "..."), __jsx("div", {
    className: "modal-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 13
    }
  }, __jsx("button", {
    type: "button",
    className: "btn btn-secondary",
    "data-dismiss": "modal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 15
    }
  }, "Close"), __jsx("button", {
    type: "button",
    className: "btn btn-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F1dGgvUHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJob3N0IiwicHJvY2VzcyIsIlByb2ZpbGUiLCJ1c2VTdGF0ZSIsImhpc3RvcnkiLCJzZXRoaXN0b3J5IiwidXNlciIsInNldFVzZXIiLCJvcmRlckRldGFpbHMiLCJzZXRvcmRlckRldGFpbHMiLCJ1c2VFZmZlY3QiLCJ0b2tlbiIsImNvb2tpZSIsImdldCIsImZldGNoT3JkZXJzIiwiZmV0Y2hVc2VySW5mbyIsImF4aW9zIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJyZXMiLCJkYXRhIiwidXNlckRldGFpbHMiLCJkZWNyeXB0ZWREYXRhIiwiZGVjcnlwdEluZm9EYXRhIiwiY29uc29sZSIsImxvZyIsIm5ld0RhdGEiLCJzaGlwcGluZ19maXJzdE5hbWUiLCJ2YWx1ZSIsImVycm9yIiwic2hpcHBpbmdfbGFzdE5hbWUiLCJzaGlwcGluZ19hZGRyZXNzIiwic2hpcHBpbmdfY2l0eSIsInNoaXBwaW5nX3ppcCIsImJpbGxpbmdfZW1haWwiLCJlbWFpbCIsInNoaXBwaW5nX3Bob25lIiwiYmlsbGluZ19maXJzdE5hbWUiLCJmaXJzdF9uYW1lIiwiYmlsbGluZ19sYXN0TmFtZSIsImxhc3RfbmFtZSIsImJpbGxpbmdfcGhvbmUiLCJub3RlIiwibWVzc2FnZSIsImRlbGl2ZXJ5X2RhdGUiLCJkZWxpdmVyeV90aW1lIiwiZW5jcnlwdEluZm9EYXRhIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJyZW1vdmUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJvcmRlcnMiLCJlcnIiLCJoYW5kbGVEZXRhaWxzIiwibWFyZ2luTGVmdCIsImJvcmRlclJhZGl1cyIsIm1hcmdpbkJvdHRvbSIsImxlbmd0aCIsIm1hcCIsIm9yZGVyIiwiaSIsIm9yZGVyX25hbWUiLCJjcmVhdGVkX2F0Iiwib3JkZXJfaXRlbXMiLCJpdGVtIiwicHJvZHVjdF9pZCIsInByb2R1Y3QiLCJuYW1lIiwicXVhbnRpdHkiLCJwYXltZW50X21ldGhvZCIsInBheW1lbnRfc3RhdHVzIiwib3JkZXJfc3RhdHVzIiwiZm9ybWF0TnVtYmVyIiwidG90YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQSxJQUFJQSxJQUFJLEdBQUdDLHVCQUFYOztBQUVBLFNBQVNDLE9BQVQsR0FBbUI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDYUMsc0RBQVEsQ0FBQyxFQUFELENBRHJCO0FBQUEsTUFDVkMsT0FEVTtBQUFBLE1BQ0RDLFVBREM7O0FBQUEsbUJBRU9GLHNEQUFRLENBQUMsSUFBRCxDQUZmO0FBQUEsTUFFVkcsSUFGVTtBQUFBLE1BRUpDLE9BRkk7O0FBQUEsbUJBR3VCSixzREFBUSxDQUFDLElBQUQsQ0FIL0I7QUFBQSxNQUdWSyxZQUhVO0FBQUEsTUFHSUMsZUFISjs7QUFLakJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlDLEtBQUssR0FBR0MsZ0RBQU0sQ0FBQ0MsR0FBUCxDQUFXLFVBQVgsQ0FBWjs7QUFDQSxRQUFJLENBQUNGLEtBQUwsRUFBWSxDQUNWO0FBQ0QsS0FGRCxNQUVPO0FBQ0xHLGlCQUFXLENBQUNILEtBQUQsQ0FBWDtBQUNBSSxtQkFBYSxDQUFDSixLQUFELENBQWI7QUFDRDtBQUNGLEdBUlEsRUFRTixFQVJNLENBQVQ7O0FBVUEsTUFBTUksYUFBYTtBQUFBLGdNQUFHLGlCQUFPSixLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFRkssNENBQUssQ0FBQ0gsR0FBTixXQUFhYixJQUFiLDZCQUEyQztBQUN6RGlCLHVCQUFPLEVBQUU7QUFDUEMsK0JBQWEsWUFBS1AsS0FBTDtBQUROO0FBRGdELGVBQTNDLENBRkU7O0FBQUE7QUFFZFEsaUJBRmM7O0FBUWxCLGtCQUFJQSxHQUFKLEVBQVM7QUFDUFosdUJBQU8sQ0FBQ1ksR0FBRyxDQUFDQyxJQUFKLENBQVND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YUFERixFQVFFO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBUyxFQUFDLGlCQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVJGLENBZkYsQ0FERixDQVJGLENBL0VGLENBREY7QUF5SEQ7O0dBck5RekUsTzs7S0FBQUEsTztBQXVOTUEsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHByb2ZpbGUuanMuZmNkZmZlM2YyMTYxZmUyYWNiZWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGZvcm1hdE51bWJlciB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2Z1bmN0aW9uXCI7XHJcbmltcG9ydCB7XHJcbiAgZGVjcnlwdEluZm9EYXRhLFxyXG4gIGVuY3J5cHRJbmZvRGF0YSxcclxufSBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9pbmZvQWN0aW9uc1wiO1xyXG5cclxubGV0IGhvc3QgPSBwcm9jZXNzLmVudi5BUElfVVJMO1xyXG5cclxuZnVuY3Rpb24gUHJvZmlsZSgpIHtcclxuICBjb25zdCBbaGlzdG9yeSwgc2V0aGlzdG9yeV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW29yZGVyRGV0YWlscywgc2V0b3JkZXJEZXRhaWxzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHRva2VuID0gY29va2llLmdldChcIl93dXNfQkpLXCIpO1xyXG4gICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmV0Y2hPcmRlcnModG9rZW4pO1xyXG4gICAgICBmZXRjaFVzZXJJbmZvKHRva2VuKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGZldGNoVXNlckluZm8gPSBhc3luYyAodG9rZW4pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7aG9zdH0vYXBpL3VzZXIvdXNlci9kZXRhaWxzYCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke3Rva2VufWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgc2V0VXNlcihyZXMuZGF0YS51c2VyRGV0YWlscyk7XHJcbiAgICAgICAgbGV0IGRlY3J5cHRlZERhdGEgPSBkZWNyeXB0SW5mb0RhdGEoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkZWNyeXB0ZWREYXRhKTtcclxuICAgICAgICBsZXQgbmV3RGF0YSA9IHtcclxuICAgICAgICAgIC4uLmRlY3J5cHRlZERhdGEsXHJcbiAgICAgICAgICBzaGlwcGluZ19maXJzdE5hbWU6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXHJcbiAgICAgICAgICBzaGlwcGluZ19sYXN0TmFtZTogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcclxuICAgICAgICAgIHNoaXBwaW5nX2FkZHJlc3M6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXHJcbiAgICAgICAgICBzaGlwcGluZ19jaXR5OiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxyXG4gICAgICAgICAgc2hpcHBpbmdfemlwOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxyXG4gICAgICAgICAgYmlsbGluZ19lbWFpbDoge1xyXG4gICAgICAgICAgICB2YWx1ZTogcmVzLmRhdGEudXNlckRldGFpbHMuZW1haWwgfHwgXCJcIixcclxuICAgICAgICAgICAgZXJyb3I6IFwiXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2hpcHBpbmdfcGhvbmU6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXHJcbiAgICAgICAgICBiaWxsaW5nX2ZpcnN0TmFtZToge1xyXG4gICAgICAgICAgICB2YWx1ZTogcmVzLmRhdGEudXNlckRldGFpbHMuZmlyc3RfbmFtZSB8fCBcIlwiLFxyXG4gICAgICAgICAgICBlcnJvcjogXCJcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBiaWxsaW5nX2xhc3ROYW1lOiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiByZXMuZGF0YS51c2VyRGV0YWlscy5sYXN0X25hbWUgfHwgXCJcIixcclxuICAgICAgICAgICAgZXJyb3I6IFwiXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYmlsbGluZ19waG9uZTogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcclxuICAgICAgICAgIG5vdGU6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXHJcbiAgICAgICAgICBtZXNzYWdlOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxyXG4gICAgICAgICAgZGVsaXZlcnlfZGF0ZTogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcclxuICAgICAgICAgIGRlbGl2ZXJ5X3RpbWU6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cobmV3RGF0YSk7XHJcbiAgICAgICAgZW5jcnlwdEluZm9EYXRhKG5ld0RhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkge1xyXG4gICAgICAgIGNvb2tpZS5yZW1vdmUoXCJfd3VzX0JKS1wiKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmV0Y2hPcmRlcnMgPSBhc3luYyAodG9rZW4pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7aG9zdH0vYXBpL3VzZXIvb3JkZXIvaGlzdG9yeWAsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgJHt0b2tlbn1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIHNldGhpc3RvcnkocmVzLmRhdGEub3JkZXJzKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcclxuICAgICAgICBjb29raWUucmVtb3ZlKFwiX3d1c19CSktcIik7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9cIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyID09IFwidXNlciBvcmRlciBoaXN0b3J5IG5vdCBmb3VuZFwiKSB7XHJcbiAgICAgICAgc2V0aGlzdG9yeShbXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEZXRhaWxzID0gKCkgPT4ge307XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIxLjdyZW1cIiB9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IG0tYXV0byB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly90My5mdGNkbi5uZXQvanBnLzAzLzM5LzQ1Lzk2LzM2MF9GXzMzOTQ1OTY5N19YQUZhY05RbXdudkpScWUxRmU5Vk9wdFBXTVV4bFpQOC5qcGdcIlxyXG4gICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiNTAlXCIsIG1hcmdpbkJvdHRvbTogXCIxcmVtXCIgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5cclxuICAgICAgICAgICAgICB7dXNlciA/IHVzZXIuZmlyc3RfbmFtZSA6IFwiTi9BXCJ9IHt1c2VyID8gdXNlci5sYXN0X25hbWUgOiBcIk4vQVwifVxyXG4gICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmtcIj5PcmRlciBIaXN0b3J5PC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmtcIj5VcGRhdGUgUHJvZmlsZTwvYnV0dG9uPiAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2hpc3RvcnkubGVuZ3RoID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cclxuICAgICAgICAgIHtoaXN0b3J5Lm1hcCgob3JkZXIsIGkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1PntvcmRlci5vcmRlcl9uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e29yZGVyLmNyZWF0ZWRfYXR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5JdGVtczo8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtvcmRlci5vcmRlcl9pdGVtcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e2l0ZW0ucHJvZHVjdF9pZH0gY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5wcm9kdWN0Lm5hbWV9IC0ge2l0ZW0ucXVhbnRpdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBNb2RlIE9mIFBheW1lbnQ6IHtvcmRlci5wYXltZW50X21ldGhvZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBQYXltZW50IFN0YXR1czoge29yZGVyLnBheW1lbnRfc3RhdHVzLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBPcmRlciBTdGF0dXM6IHtvcmRlci5vcmRlcl9zdGF0dXMubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBBbW91bnQ6IFB7Zm9ybWF0TnVtYmVyKG9yZGVyLnRvdGFsKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURldGFpbHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjZXhhbXBsZU1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWRldGFpbHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiLTAuNXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMC44cmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjAuN3JlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBWaWV3IERldGFpbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtLWF1dG9cIj5PcmRlciBoaXN0b3J5IGlzIGVtcHR5LjwvaDI+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiXHJcbiAgICAgICAgaWQ9XCJleGFtcGxlTW9kYWxcIlxyXG4gICAgICAgIHRhYkluZGV4PVwiLTFcIlxyXG4gICAgICAgIHJvbGU9XCJkaWFsb2dcIlxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGVNb2RhbExhYmVsXCJcclxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwiZXhhbXBsZU1vZGFsTGFiZWxcIj5cclxuICAgICAgICAgICAgICAgIE1vZGFsIHRpdGxlXHJcbiAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZD1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPi4uLjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICBTYXZlIGNoYW5nZXNcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
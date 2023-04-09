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
    }, "Items:"), __jsx("p", {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 25
      }
    }, "Delivery Time: ", order.delivery_time)), __jsx("div", {
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
    }, "Status: Pending")), __jsx("div", {
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
        lineNumber: 155,
        columnNumber: 25
      }
    }, "View Details"))))), __jsx("hr", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 17
      }
    }));
  })) : __jsx("h2", {
    className: "text-center m-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
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
      lineNumber: 181,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "modal-dialog",
    role: "document",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "modal-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "modal-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 13
    }
  }, __jsx("h5", {
    className: "modal-title",
    id: "exampleModalLabel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
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
      lineNumber: 195,
      columnNumber: 15
    }
  }, __jsx("span", {
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 17
    }
  }, "\xD7"))), __jsx("div", {
    className: "modal-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 13
    }
  }, "..."), __jsx("div", {
    className: "modal-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 13
    }
  }, __jsx("button", {
    type: "button",
    className: "btn btn-secondary",
    "data-dismiss": "modal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 15
    }
  }, "Close"), __jsx("button", {
    type: "button",
    className: "btn btn-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F1dGgvUHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJob3N0IiwicHJvY2VzcyIsIlByb2ZpbGUiLCJ1c2VTdGF0ZSIsImhpc3RvcnkiLCJzZXRoaXN0b3J5IiwidXNlciIsInNldFVzZXIiLCJvcmRlckRldGFpbHMiLCJzZXRvcmRlckRldGFpbHMiLCJ1c2VFZmZlY3QiLCJ0b2tlbiIsImNvb2tpZSIsImdldCIsImZldGNoT3JkZXJzIiwiZmV0Y2hVc2VySW5mbyIsImF4aW9zIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJyZXMiLCJkYXRhIiwidXNlckRldGFpbHMiLCJkZWNyeXB0ZWREYXRhIiwiZGVjcnlwdEluZm9EYXRhIiwiY29uc29sZSIsImxvZyIsIm5ld0RhdGEiLCJzaGlwcGluZ19maXJzdE5hbWUiLCJ2YWx1ZSIsImVycm9yIiwic2hpcHBpbmdfbGFzdE5hbWUiLCJzaGlwcGluZ19hZGRyZXNzIiwic2hpcHBpbmdfY2l0eSIsInNoaXBwaW5nX3ppcCIsImJpbGxpbmdfZW1haWwiLCJlbWFpbCIsInNoaXBwaW5nX3Bob25lIiwiYmlsbGluZ19maXJzdE5hbWUiLCJmaXJzdF9uYW1lIiwiYmlsbGluZ19sYXN0TmFtZSIsImxhc3RfbmFtZSIsImJpbGxpbmdfcGhvbmUiLCJub3RlIiwibWVzc2FnZSIsImRlbGl2ZXJ5X2RhdGUiLCJkZWxpdmVyeV90aW1lIiwiZW5jcnlwdEluZm9EYXRhIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJyZW1vdmUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJvcmRlcnMiLCJlcnIiLCJoYW5kbGVEZXRhaWxzIiwibWFyZ2luTGVmdCIsImJvcmRlclJhZGl1cyIsIm1hcmdpbkJvdHRvbSIsImxlbmd0aCIsIm1hcCIsIm9yZGVyIiwiaSIsIm9yZGVyX25hbWUiLCJjcmVhdGVkX2F0IiwicGF5bWVudF9tZXRob2QiLCJmb3JtYXROdW1iZXIiLCJ0b3RhbCIsIm1hcmdpblRv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Tzs7S0FBQUEsTztBQW9OTUEsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHByb2ZpbGUuanMuOTE1NzlkNTc2YWMxNDc2ODg4OGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGZvcm1hdE51bWJlciB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2Z1bmN0aW9uXCI7XHJcbmltcG9ydCB7XHJcbiAgZGVjcnlwdEluZm9EYXRhLFxyXG4gIGVuY3J5cHRJbmZvRGF0YSxcclxufSBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9pbmZvQWN0aW9uc1wiO1xyXG5cclxubGV0IGhvc3QgPSBwcm9jZXNzLmVudi5BUElfVVJMO1xyXG5cclxuZnVuY3Rpb24gUHJvZmlsZSgpIHtcclxuICBjb25zdCBbaGlzdG9yeSwgc2V0aGlzdG9yeV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW29yZGVyRGV0YWlscywgc2V0b3JkZXJEZXRhaWxzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHRva2VuID0gY29va2llLmdldChcIl93dXNfQkpLXCIpO1xyXG4gICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmV0Y2hPcmRlcnModG9rZW4pO1xyXG4gICAgICBmZXRjaFVzZXJJbmZvKHRva2VuKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGZldGNoVXNlckluZm8gPSBhc3luYyAodG9rZW4pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7aG9zdH0vYXBpL3VzZXIvdXNlci9kZXRhaWxzYCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke3Rva2VufWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgc2V0VXNlcihyZXMuZGF0YS51c2VyRGV0YWlscyk7XHJcbiAgICAgICAgbGV0IGRlY3J5cHRlZERhdGEgPSBkZWNyeXB0SW5mb0RhdGEoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkZWNyeXB0ZWREYXRhKTtcclxuICAgICAgICBsZXQgbmV3RGF0YSA9IHtcclxuICAgICAgICAgIC4uLmRlY3J5cHRlZERhdGEsXHJcbiAgICAgICAgICBzaGlwcGluZ19maXJzdE5hbWU6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXHJcbiAgICAgICAgICBzaGlwcGluZ19sYXN0TmFtZTogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcclxuICAgICAgICAgIHNoaXBwaW5nX2FkZHJlc3M6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXHJcbiAgICAgICAgICBzaGlwcGluZ19jaXR5OiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxyXG4gICAgICAgICAgc2hpcHBpbmdfemlwOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxyXG4gICAgICAgICAgYmlsbGluZ19lbWFpbDoge1xyXG4gICAgICAgICAgICB2YWx1ZTogcmVzLmRhdGEudXNlckRldGFpbHMuZW1haWwgfHwgXCJcIixcclxuICAgICAgICAgICAgZXJyb3I6IFwiXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2hpcHBpbmdfcGhvbmU6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXHJcbiAgICAgICAgICBiaWxsaW5nX2ZpcnN0TmFtZToge1xyXG4gICAgICAgICAgICB2YWx1ZTogcmVzLmRhdGEudXNlckRldGFpbHMuZmlyc3RfbmFtZSB8fCBcIlwiLFxyXG4gICAgICAgICAgICBlcnJvcjogXCJcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBiaWxsaW5nX2xhc3ROYW1lOiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiByZXMuZGF0YS51c2VyRGV0YWlscy5sYXN0X25hbWUgfHwgXCJcIixcclxuICAgICAgICAgICAgZXJyb3I6IFwiXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYmlsbGluZ19waG9uZTogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcclxuICAgICAgICAgIG5vdGU6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXHJcbiAgICAgICAgICBtZXNzYWdlOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxyXG4gICAgICAgICAgZGVsaXZlcnlfZGF0ZTogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcclxuICAgICAgICAgIGRlbGl2ZXJ5X3RpbWU6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cobmV3RGF0YSk7XHJcbiAgICAgICAgZW5jcnlwdEluZm9EYXRhKG5ld0RhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkge1xyXG4gICAgICAgIGNvb2tpZS5yZW1vdmUoXCJfd3VzX0JKS1wiKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmV0Y2hPcmRlcnMgPSBhc3luYyAodG9rZW4pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7aG9zdH0vYXBpL3VzZXIvb3JkZXIvaGlzdG9yeWAsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgJHt0b2tlbn1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIHNldGhpc3RvcnkocmVzLmRhdGEub3JkZXJzKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcclxuICAgICAgICBjb29raWUucmVtb3ZlKFwiX3d1c19CSktcIik7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9cIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyID09IFwidXNlciBvcmRlciBoaXN0b3J5IG5vdCBmb3VuZFwiKSB7XHJcbiAgICAgICAgc2V0aGlzdG9yeShbXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEZXRhaWxzID0gKCkgPT4ge307XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIxLjdyZW1cIiB9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IG0tYXV0byB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly90My5mdGNkbi5uZXQvanBnLzAzLzM5LzQ1Lzk2LzM2MF9GXzMzOTQ1OTY5N19YQUZhY05RbXdudkpScWUxRmU5Vk9wdFBXTVV4bFpQOC5qcGdcIlxyXG4gICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiNTAlXCIsIG1hcmdpbkJvdHRvbTogXCIxcmVtXCIgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5cclxuICAgICAgICAgICAgICB7dXNlciA/IHVzZXIuZmlyc3RfbmFtZSA6IFwiTi9BXCJ9IHt1c2VyID8gdXNlci5sYXN0X25hbWUgOiBcIk4vQVwifVxyXG4gICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmtcIj5PcmRlciBIaXN0b3J5PC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmtcIj5VcGRhdGUgUHJvZmlsZTwvYnV0dG9uPiAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2hpc3RvcnkubGVuZ3RoID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cclxuICAgICAgICAgIHtoaXN0b3J5Lm1hcCgob3JkZXIsIGkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1PntvcmRlci5vcmRlcl9uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e29yZGVyLmNyZWF0ZWRfYXR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBJdGVtczpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxpdmVyeSBUaW1lOiB7b3JkZXIuZGVsaXZlcnlfdGltZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIE1vZGUgT2YgUGF5bWVudDoge29yZGVyLnBheW1lbnRfbWV0aG9kfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXR1czogUGVuZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQW1vdW50OiBQe2Zvcm1hdE51bWJlcihvcmRlci50b3RhbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURldGFpbHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjZXhhbXBsZU1vZGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWRldGFpbHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiLTAuNXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMC44cmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjAuN3JlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBWaWV3IERldGFpbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG0tYXV0b1wiPk9yZGVyIGhpc3RvcnkgaXMgZW1wdHkuPC9oMj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCJcclxuICAgICAgICBpZD1cImV4YW1wbGVNb2RhbFwiXHJcbiAgICAgICAgdGFiSW5kZXg9XCItMVwiXHJcbiAgICAgICAgcm9sZT1cImRpYWxvZ1wiXHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZU1vZGFsTGFiZWxcIlxyXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJleGFtcGxlTW9kYWxMYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgTW9kYWwgdGl0bGVcclxuICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+Li4uPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgIFNhdmUgY2hhbmdlc1xyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
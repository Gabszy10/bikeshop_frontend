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
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
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
      var res, decryptedData;
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
                _store_actions_infoActions__WEBPACK_IMPORTED_MODULE_7__["encryptInfoData"].apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(decryptedData).concat([{
                  billing_firstName: {
                    value: res.data.userDetails.first_name,
                    error: ""
                  },
                  billing_lastName: {
                    value: res.data.userDetails.last_name,
                    error: ""
                  }
                }]));
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
      lineNumber: 86,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "col-md-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
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
      lineNumber: 88,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "card-body m-auto text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
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
      lineNumber: 90,
      columnNumber: 13
    }
  }), __jsx("h5", {
    className: "card-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, user ? user.first_name : "N/A", " ", user ? user.last_name : "N/A")))), history.length ? __jsx("div", {
    className: "col-md-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, history.map(function (order, i) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("div", {
      key: i,
      "class": "card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "card-header",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 19
      }
    }, __jsx("h5", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 21
      }
    }, order.order_name), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 21
      }
    }, order.created_at)), __jsx("div", {
      className: "card-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "col-md-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 23
      }
    }, __jsx("p", {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 25
      }
    }, "Delivery Date: ", order.delivery_date), __jsx("p", {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 25
      }
    }, "Delivery Time: ", order.delivery_time)), __jsx("div", {
      className: "col-md-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 23
      }
    }, __jsx("p", {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 25
      }
    }, "Mode Of Payment: ", order.payment_method), __jsx("p", {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 25
      }
    }, "Status: ", order.order_status_id)), __jsx("div", {
      className: "col-md-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 23
      }
    }, __jsx("p", {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
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
        lineNumber: 136,
        columnNumber: 25
      }
    }, "View Details"))))), __jsx("hr", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 17
      }
    }));
  })) : __jsx("h2", {
    className: "text-center m-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
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
      lineNumber: 162,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "modal-dialog",
    role: "document",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "modal-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "modal-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 13
    }
  }, __jsx("h5", {
    className: "modal-title",
    id: "exampleModalLabel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
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
      lineNumber: 176,
      columnNumber: 15
    }
  }, __jsx("span", {
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 17
    }
  }, "\xD7"))), __jsx("div", {
    className: "modal-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 13
    }
  }, "..."), __jsx("div", {
    className: "modal-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 13
    }
  }, __jsx("button", {
    type: "button",
    className: "btn btn-secondary",
    "data-dismiss": "modal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 15
    }
  }, "Close"), __jsx("button", {
    type: "button",
    className: "btn btn-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F1dGgvUHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJob3N0IiwicHJvY2VzcyIsIlByb2ZpbGUiLCJ1c2VTdGF0ZSIsImhpc3RvcnkiLCJzZXRoaXN0b3J5IiwidXNlciIsInNldFVzZXIiLCJvcmRlckRldGFpbHMiLCJzZXRvcmRlckRldGFpbHMiLCJ1c2VFZmZlY3QiLCJ0b2tlbiIsImNvb2tpZSIsImdldCIsImZldGNoT3JkZXJzIiwiZmV0Y2hVc2VySW5mbyIsImF4aW9zIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJyZXMiLCJkYXRhIiwidXNlckRldGFpbHMiLCJkZWNyeXB0ZWREYXRhIiwiZGVjcnlwdEluZm9EYXRhIiwiY29uc29sZSIsImxvZyIsImVuY3J5cHRJbmZvRGF0YSIsImJpbGxpbmdfZmlyc3ROYW1lIiwidmFsdWUiLCJmaXJzdF9uYW1lIiwiZXJyb3IiLCJiaWxsaW5nX2xhc3ROYW1lIiwibGFzdF9uYW1lIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJyZW1vdmUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJvcmRlcnMiLCJlcnIiLCJoYW5kbGVEZXRhaWxzIiwibWFyZ2luTGVmdCIsImJvcmRlclJhZGl1cyIsIm1hcmdpbkJvdHRvbSIsImxlbmd0aCIsIm1hcCIsIm9yZGVyIiwiaSIsIm9yZGVyX25hbWUiLCJjcmVhdGVkX2F0IiwiZGVsaXZlcnlfZGF0ZSIsImRlbGl2ZXJ5X3RpbWUiLCJwYXltZW50X21ldGhvZCIsIm9yZGVyX3N0YXR1c19pZCIsImZvcm1hdE51bWJlciIsInRvdGFsIiwibWFyZ2luVG9wIiwiZm9udFNpemUiLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBLElBQUlBLElBQUksR0FBR0MsdUJBQVg7O0FBRUEsU0FBU0MsT0FBVCxHQUFtQjtBQUFBOztBQUFBOztB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ZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsYUFBZDtBQUE0QixNQUFFLEVBQUMsbUJBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFJRTtBQUNFLFFBQUksRUFBQyxRQURQO0FBRUUsYUFBUyxFQUFDLE9BRlo7QUFHRSxjQUFPLE9BSFQ7QUFJRSxrQkFBVyxPQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRTtBQUFNLG1CQUFZLE1BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixDQUpGLENBREYsRUFjRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FkRixFQWVFO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFFRSxhQUFTLEVBQUMsbUJBRlo7QUFHRSxvQkFBYSxPQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQVFFO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBUyxFQUFDLGlCQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVJGLENBZkYsQ0FERixDQVJGLENBNUVGLENBREY7QUFzSEQ7O0dBL0xRekQsTzs7S0FBQUEsTztBQWlNTUEsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHByb2ZpbGUuanMuYzUyN2RhZjVkNTE5N2Q3MjJhZjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGZvcm1hdE51bWJlciB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2Z1bmN0aW9uXCI7XHJcbmltcG9ydCB7XHJcbiAgZGVjcnlwdEluZm9EYXRhLFxyXG4gIGVuY3J5cHRJbmZvRGF0YSxcclxufSBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9pbmZvQWN0aW9uc1wiO1xyXG5cclxubGV0IGhvc3QgPSBwcm9jZXNzLmVudi5BUElfVVJMO1xyXG5cclxuZnVuY3Rpb24gUHJvZmlsZSgpIHtcclxuICBjb25zdCBbaGlzdG9yeSwgc2V0aGlzdG9yeV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW29yZGVyRGV0YWlscywgc2V0b3JkZXJEZXRhaWxzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHRva2VuID0gY29va2llLmdldChcIl93dXNfQkpLXCIpO1xyXG4gICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmV0Y2hPcmRlcnModG9rZW4pO1xyXG4gICAgICBmZXRjaFVzZXJJbmZvKHRva2VuKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGZldGNoVXNlckluZm8gPSBhc3luYyAodG9rZW4pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7aG9zdH0vYXBpL3VzZXIvdXNlci9kZXRhaWxzYCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke3Rva2VufWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgc2V0VXNlcihyZXMuZGF0YS51c2VyRGV0YWlscyk7XHJcbiAgICAgICAgbGV0IGRlY3J5cHRlZERhdGEgPSBkZWNyeXB0SW5mb0RhdGEoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkZWNyeXB0ZWREYXRhKTtcclxuICAgICAgICBlbmNyeXB0SW5mb0RhdGEoLi4uZGVjcnlwdGVkRGF0YSwge1xyXG4gICAgICAgICAgYmlsbGluZ19maXJzdE5hbWU6IHtcclxuICAgICAgICAgICAgdmFsdWU6IHJlcy5kYXRhLnVzZXJEZXRhaWxzLmZpcnN0X25hbWUsXHJcbiAgICAgICAgICAgIGVycm9yOiBcIlwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJpbGxpbmdfbGFzdE5hbWU6IHtcclxuICAgICAgICAgICAgdmFsdWU6IHJlcy5kYXRhLnVzZXJEZXRhaWxzLmxhc3RfbmFtZSxcclxuICAgICAgICAgICAgZXJyb3I6IFwiXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09IDQwMSkge1xyXG4gICAgICAgIGNvb2tpZS5yZW1vdmUoXCJfd3VzX0JKS1wiKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmV0Y2hPcmRlcnMgPSBhc3luYyAodG9rZW4pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7aG9zdH0vYXBpL3VzZXIvb3JkZXIvaGlzdG9yeWAsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgJHt0b2tlbn1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIHNldGhpc3RvcnkocmVzLmRhdGEub3JkZXJzKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcclxuICAgICAgICBjb29raWUucmVtb3ZlKFwiX3d1c19CSktcIik7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9cIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyID09IFwidXNlciBvcmRlciBoaXN0b3J5IG5vdCBmb3VuZFwiKSB7XHJcbiAgICAgICAgc2V0aGlzdG9yeShbXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEZXRhaWxzID0gKCkgPT4ge307XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIxLjdyZW1cIiB9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IG0tYXV0byB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly90My5mdGNkbi5uZXQvanBnLzAzLzM5LzQ1Lzk2LzM2MF9GXzMzOTQ1OTY5N19YQUZhY05RbXdudkpScWUxRmU5Vk9wdFBXTVV4bFpQOC5qcGdcIlxyXG4gICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiNTAlXCIsIG1hcmdpbkJvdHRvbTogXCIxcmVtXCIgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5cclxuICAgICAgICAgICAgICB7dXNlciA/IHVzZXIuZmlyc3RfbmFtZSA6IFwiTi9BXCJ9IHt1c2VyID8gdXNlci5sYXN0X25hbWUgOiBcIk4vQVwifVxyXG4gICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmtcIj5PcmRlciBIaXN0b3J5PC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmtcIj5VcGRhdGUgUHJvZmlsZTwvYnV0dG9uPiAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2hpc3RvcnkubGVuZ3RoID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cclxuICAgICAgICAgIHtoaXN0b3J5Lm1hcCgob3JkZXIsIGkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1PntvcmRlci5vcmRlcl9uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e29yZGVyLmNyZWF0ZWRfYXR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxpdmVyeSBEYXRlOiB7b3JkZXIuZGVsaXZlcnlfZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxpdmVyeSBUaW1lOiB7b3JkZXIuZGVsaXZlcnlfdGltZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIE1vZGUgT2YgUGF5bWVudDoge29yZGVyLnBheW1lbnRfbWV0aG9kfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXR1czoge29yZGVyLm9yZGVyX3N0YXR1c19pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEFtb3VudDogUHtmb3JtYXROdW1iZXIob3JkZXIudG90YWwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEZXRhaWxzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI2V4YW1wbGVNb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1kZXRhaWxzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIi0wLjVyZW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjAuOHJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIwLjdyZW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgVmlldyBEZXRhaWxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtLWF1dG9cIj5PcmRlciBoaXN0b3J5IGlzIGVtcHR5LjwvaDI+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiXHJcbiAgICAgICAgaWQ9XCJleGFtcGxlTW9kYWxcIlxyXG4gICAgICAgIHRhYkluZGV4PVwiLTFcIlxyXG4gICAgICAgIHJvbGU9XCJkaWFsb2dcIlxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGVNb2RhbExhYmVsXCJcclxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwiZXhhbXBsZU1vZGFsTGFiZWxcIj5cclxuICAgICAgICAgICAgICAgIE1vZGFsIHRpdGxlXHJcbiAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZD1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPi4uLjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICBTYXZlIGNoYW5nZXNcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
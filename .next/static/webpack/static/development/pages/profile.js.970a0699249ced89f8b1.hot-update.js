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
                encryptInfoData.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_store_actions_infoActions__WEBPACK_IMPORTED_MODULE_7__["decryptInfoData"]).concat([{}]));
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
      lineNumber: 76,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "col-md-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
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
      lineNumber: 78,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "card-body m-auto text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
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
      lineNumber: 80,
      columnNumber: 13
    }
  }), __jsx("h5", {
    className: "card-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, user ? user.first_name : "N/A", " ", user ? user.last_name : "N/A")))), history.length ? __jsx("div", {
    className: "col-md-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, history.map(function (order, i) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("div", {
      key: i,
      "class": "card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "card-header",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 19
      }
    }, __jsx("h5", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 21
      }
    }, order.order_name), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 21
      }
    }, order.created_at)), __jsx("div", {
      className: "card-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "col-md-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 23
      }
    }, __jsx("p", {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 25
      }
    }, "Delivery Date: ", order.delivery_date), __jsx("p", {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 25
      }
    }, "Delivery Time: ", order.delivery_time)), __jsx("div", {
      className: "col-md-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 23
      }
    }, __jsx("p", {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 25
      }
    }, "Mode Of Payment: ", order.payment_method), __jsx("p", {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 25
      }
    }, "Status: ", order.order_status_id)), __jsx("div", {
      className: "col-md-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 23
      }
    }, __jsx("p", {
      className: "card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
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
        lineNumber: 124,
        columnNumber: 25
      }
    }, "View Details"))))), __jsx("hr", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 17
      }
    }));
  })) : __jsx("h2", {
    className: "text-center m-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
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
      lineNumber: 150,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "modal-dialog",
    role: "document",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "modal-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "modal-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 13
    }
  }, __jsx("h5", {
    className: "modal-title",
    id: "exampleModalLabel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
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
      lineNumber: 164,
      columnNumber: 15
    }
  }, __jsx("span", {
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 17
    }
  }, "\xD7"))), __jsx("div", {
    className: "modal-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 13
    }
  }, "..."), __jsx("div", {
    className: "modal-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 13
    }
  }, __jsx("button", {
    type: "button",
    className: "btn btn-secondary",
    "data-dismiss": "modal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 15
    }
  }, "Close"), __jsx("button", {
    type: "button",
    className: "btn btn-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F1dGgvUHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJob3N0IiwicHJvY2VzcyIsIlByb2ZpbGUiLCJ1c2VTdGF0ZSIsImhpc3RvcnkiLCJzZXRoaXN0b3J5IiwidXNlciIsInNldFVzZXIiLCJvcmRlckRldGFpbHMiLCJzZXRvcmRlckRldGFpbHMiLCJ1c2VFZmZlY3QiLCJ0b2tlbiIsImNvb2tpZSIsImdldCIsImZldGNoT3JkZXJzIiwiZmV0Y2hVc2VySW5mbyIsImF4aW9zIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJyZXMiLCJkYXRhIiwidXNlckRldGFpbHMiLCJkZWNyeXB0ZWREYXRhIiwiZGVjcnlwdEluZm9EYXRhIiwiY29uc29sZSIsImxvZyIsImVuY3J5cHRJbmZvRGF0YSIsInJlc3BvbnNlIiwic3RhdHVzIiwicmVtb3ZlIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwib3JkZXJzIiwiZXJyIiwiaGFuZGxlRGV0YWlscyIsIm1hcmdpbkxlZnQiLCJib3JkZXJSYWRpdXMiLCJtYXJnaW5Cb3R0b20iLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwibGVuZ3RoIiwibWFwIiwib3JkZXIiLCJpIiwib3JkZXJfbmFtZSIsImNyZWF0ZWRfYXQiLCJkZWxpdmVyeV9kYXRlIiwiZGVsaXZlcnlfdGltZSIsInBheW1lbnRfbWV0aG9kIiwib3JkZXJfc3RhdHVzX2lkIiwiZm9ybWF0TnVtYmVyIiwidG90YWwiLCJtYXJnaW5Ub3AiLCJmb250U2l6ZSIsInBhZGRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsSUFBSSxHQUFHQyx1QkFBWDs7QUFFQSxTQUFTQyxPQUFULEdBQW1CO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ2FDLHNEQUFRLENBQUMsRUFBRCxDQURyQjtBQUFBLE1BQ1ZDLE9BRFU7QUFBQSxN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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUU7QUFBTSxtQkFBWSxNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsQ0FKRixDQURGLEVBY0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBZEYsRUFlRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBQyxRQURQO0FBRUUsYUFBUyxFQUFDLG1CQUZaO0FBR0Usb0JBQWEsT0FIZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFRRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLGFBQVMsRUFBQyxpQkFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFSRixDQWZGLENBREYsQ0FSRixDQTFFRixDQURGO0FBb0hEOztHQXRMUXJELE87O0tBQUFBLE87QUF3TE1BLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwcm9maWxlLmpzLjk3MGEwNjk5MjQ5Y2VkODlmOGIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBmb3JtYXROdW1iZXIgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9mdW5jdGlvblwiO1xyXG5pbXBvcnQgeyBkZWNyeXB0SW5mb0RhdGEgfSBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9pbmZvQWN0aW9uc1wiO1xyXG5cclxubGV0IGhvc3QgPSBwcm9jZXNzLmVudi5BUElfVVJMO1xyXG5cclxuZnVuY3Rpb24gUHJvZmlsZSgpIHtcclxuICBjb25zdCBbaGlzdG9yeSwgc2V0aGlzdG9yeV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW29yZGVyRGV0YWlscywgc2V0b3JkZXJEZXRhaWxzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHRva2VuID0gY29va2llLmdldChcIl93dXNfQkpLXCIpO1xyXG4gICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmV0Y2hPcmRlcnModG9rZW4pO1xyXG4gICAgICBmZXRjaFVzZXJJbmZvKHRva2VuKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGZldGNoVXNlckluZm8gPSBhc3luYyAodG9rZW4pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7aG9zdH0vYXBpL3VzZXIvdXNlci9kZXRhaWxzYCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGAke3Rva2VufWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgc2V0VXNlcihyZXMuZGF0YS51c2VyRGV0YWlscyk7XHJcbiAgICAgICAgbGV0IGRlY3J5cHRlZERhdGEgPSBkZWNyeXB0SW5mb0RhdGEoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkZWNyeXB0ZWREYXRhKVxyXG4gICAgICAgIGVuY3J5cHRJbmZvRGF0YSguLi5kZWNyeXB0SW5mb0RhdGEsIHtcclxuXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDEpIHtcclxuICAgICAgICBjb29raWUucmVtb3ZlKFwiX3d1c19CSktcIik7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9cIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZldGNoT3JkZXJzID0gYXN5bmMgKHRva2VuKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2hvc3R9L2FwaS91c2VyL29yZGVyL2hpc3RvcnlgLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7dG9rZW59YCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICBzZXRoaXN0b3J5KHJlcy5kYXRhLm9yZGVycyk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDAxKSB7XHJcbiAgICAgICAgY29va2llLnJlbW92ZShcIl93dXNfQkpLXCIpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChlcnJvci5yZXNwb25zZS5kYXRhLmVyciA9PSBcInVzZXIgb3JkZXIgaGlzdG9yeSBub3QgZm91bmRcIikge1xyXG4gICAgICAgIHNldGhpc3RvcnkoW10pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGV0YWlscyA9ICgpID0+IHt9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMS43cmVtXCIgfX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBtLWF1dG8gdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vdDMuZnRjZG4ubmV0L2pwZy8wMy8zOS80NS85Ni8zNjBfRl8zMzk0NTk2OTdfWEFGYWNOUW13bnZKUnFlMUZlOVZPcHRQV01VeGxaUDguanBnXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjEwMFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLCBtYXJnaW5Cb3R0b206IFwiMXJlbVwiIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e3VzZXIgPyB1c2VyLmZpcnN0X25hbWUgOiBcIk4vQVwifSB7dXNlciA/IHVzZXIubGFzdF9uYW1lIDogXCJOL0FcIn08L2g1PlxyXG4gICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmtcIj5PcmRlciBIaXN0b3J5PC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmtcIj5VcGRhdGUgUHJvZmlsZTwvYnV0dG9uPiAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2hpc3RvcnkubGVuZ3RoID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cclxuICAgICAgICAgIHtoaXN0b3J5Lm1hcCgob3JkZXIsIGkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1PntvcmRlci5vcmRlcl9uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e29yZGVyLmNyZWF0ZWRfYXR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxpdmVyeSBEYXRlOiB7b3JkZXIuZGVsaXZlcnlfZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxpdmVyeSBUaW1lOiB7b3JkZXIuZGVsaXZlcnlfdGltZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIE1vZGUgT2YgUGF5bWVudDoge29yZGVyLnBheW1lbnRfbWV0aG9kfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXR1czoge29yZGVyLm9yZGVyX3N0YXR1c19pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEFtb3VudDogUHtmb3JtYXROdW1iZXIob3JkZXIudG90YWwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEZXRhaWxzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI2V4YW1wbGVNb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1kZXRhaWxzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIi0wLjVyZW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjAuOHJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIwLjdyZW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgVmlldyBEZXRhaWxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtLWF1dG9cIj5PcmRlciBoaXN0b3J5IGlzIGVtcHR5LjwvaDI+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiXHJcbiAgICAgICAgaWQ9XCJleGFtcGxlTW9kYWxcIlxyXG4gICAgICAgIHRhYkluZGV4PVwiLTFcIlxyXG4gICAgICAgIHJvbGU9XCJkaWFsb2dcIlxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGVNb2RhbExhYmVsXCJcclxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPVwiZXhhbXBsZU1vZGFsTGFiZWxcIj5cclxuICAgICAgICAgICAgICAgIE1vZGFsIHRpdGxlXHJcbiAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZD1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPi4uLjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICBTYXZlIGNoYW5nZXNcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
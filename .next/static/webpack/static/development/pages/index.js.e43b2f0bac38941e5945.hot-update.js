webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./store/actions/userActions.js":
/*!**************************************!*\
  !*** ./store/actions/userActions.js ***!
  \**************************************/
/*! exports provided: userRegister, userLogin, logout, encryptUserData, decryptUserData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userRegister", function() { return userRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userLogin", function() { return userLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encryptUserData", function() { return encryptUserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decryptUserData", function() { return decryptUserData; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);






var CryptoJS = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");

var host = "http://127.0.0.1:8080";
var userRegister = function userRegister(userData, setIsLoading, cb) {
  return /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
      var res, _yield$res$data, token, user;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(host, "/api/user/auth/signUp"), userData);

            case 3:
              res = _context.sent;

              if (!(res.status === 200)) {
                _context.next = 13;
                break;
              }

              _context.next = 7;
              return res.data;

            case 7:
              _yield$res$data = _context.sent;
              token = _yield$res$data.token;
              user = _yield$res$data.user;
              js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set("_wus_BJK", token, {
                expires: 7
              });
              js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set("user", user, {
                expires: 7
              });
              cb();

            case 13:
              _context.next = 23;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](0);
              setIsLoading(false);
              console.log(_context.t0);

              if (!_context.t0.response.data.error) {
                _context.next = 21;
                break;
              }

              return _context.abrupt("return", react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].error(_context.t0.response.data.error));

            case 21:
              if (!_context.t0.response.data.details[0].message) {
                _context.next = 23;
                break;
              }

              return _context.abrupt("return", react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].error(_context.t0.response.data.details[0].message));

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 15]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var userLogin = function userLogin(userData, setIsLoading, cb) {
  return /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
      var res, _yield$res$data2, token, user;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(host, "/api/user/auth/signIn"), userData);

            case 3:
              res = _context2.sent;

              if (!(res.status === 200)) {
                _context2.next = 13;
                break;
              }

              _context2.next = 7;
              return res.data;

            case 7:
              _yield$res$data2 = _context2.sent;
              token = _yield$res$data2.token;
              user = _yield$res$data2.user;
              js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set("_wus_BJK", token, {
                expires: 7
              });
              js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set("user", user, {
                expires: 7
              });
              cb();

            case 13:
              _context2.next = 23;
              break;

            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](0);
              setIsLoading(false);
              console.log(_context2.t0);

              if (!_context2.t0.response.data.error) {
                _context2.next = 21;
                break;
              }

              return _context2.abrupt("return", react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].error(_context2.t0.response.data.error));

            case 21:
              if (!_context2.t0.response.data.details[0].message) {
                _context2.next = 23;
                break;
              }

              return _context2.abrupt("return", react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].error(_context2.t0.response.data.details[0].message));

            case 23:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 15]]);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};
var logout = function logout() {
  js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.remove("_wus_BJK");
  window.location.href = "/";
};
var encryptUserData = function encryptUserData(data) {
  try {
    var encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), process.env.USER_KEY).toString();
    localStorage.setItem(process.env.USER_COOKIE, encryptedData);
    return true;
  } catch (error) {
    console.log(error);
    localStorage.removeItem(process.env.USER_COOKIE);
    return false;
  }
};
var decryptUserData = function decryptUserData() {
  try {
    var infoItem = localStorage.getItem(process.env.USER_COOKIE) ? localStorage.getItem(process.env.USER_COOKIE) : null;

    if (infoItem) {
      var bytes = CryptoJS.AES.decrypt(infoItem, process.env.USER_KEY);
      var stringArray = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      return stringArray;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    localStorage.removeItem(process.env.USER_COOKIE);
    return false;
  }
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3VzZXJBY3Rpb25zLmpzIl0sIm5hbWVzIjpbIkNyeXB0b0pTIiwicmVxdWlyZSIsImhvc3QiLCJwcm9jZXNzIiwidXNlclJlZ2lzdGVyIiwidXNlckRhdGEiLCJzZXRJc0xvYWRpbmciLCJjYiIsImRpc3BhdGNoIiwiYXhpb3MiLCJwb3N0IiwicmVzIiwic3RhdHVzIiwiZGF0YSIsInRva2VuIiwidXNlciIsImNvb2tpZSIsInNldCIsImV4cGlyZXMiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJlcnJvciIsInRvYXN0IiwiZGV0YWlscyIsIm1lc3NhZ2UiLCJ1c2VyTG9naW4iLCJsb2dvdXQiLCJyZW1vdmUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJlbmNyeXB0VXNlckRhdGEiLCJlbmNyeXB0ZWREYXRhIiwiQUVTIiwiZW5jcnlwdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJlbnYiLCJVU0VSX0tFWSIsInRvU3RyaW5nIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIlVTRVJfQ09PS0lFIiwicmVtb3ZlSXRlbSIsImRlY3J5cHRVc2VyRGF0YSIsImluZm9JdGVtIiwiZ2V0SXRlbSIsImJ5dGVzIiwiZGVjcnlwdCIsInN0cmluZ0FycmF5IiwicGFyc2UiLCJlbmMiLCJVdGY4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFDQSxJQUFJQSxRQUFRLEdBQUdDLG1CQUFPLENBQUMsb0RBQUQsQ0FBdEI7O0FBRUEsSUFBSUMsSUFBSSxHQUFHQyx1QkFBWDtBQUVPLElBQU1DLFlBQVksR0FDdkIsU0FEV0EsWUFDWCxDQUFDQyxRQUFELEVBQVdDLFlBQVgsRUFBeUJDLEVBQXpCO0FBQUE7QUFBQSxnTUFBZ0MsaUJBQU9DLFFBQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFVkMsNENBQUssQ0FBQ0MsSUFBTixXQUFjUixJQUFkLDRCQUEyQ0csUUFBM0MsQ0FGVTs7QUFBQTtBQUV0Qk0saUJBRnNCOztBQUFBLG9CQUt4QkEsR0FBRyxDQUFDQyxNQUFKLEtBQWUsR0FMUztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFCQU1JRCxHQUFHLENBQUNFLElBTlI7O0FBQUE7QUFBQTtBQU1sQkMsbUJBTmtCLG1CQU1sQkEsS0FOa0I7QUFNWEMsa0JBTlcsbUJBTVhBLElBTlc7QUFPMUJDLDhEQUFNLENBQUNDLEdBQVAsQ0FBVyxVQUFYLEVBQXVCSCxLQUF2QixFQUE4QjtBQUFFSSx1QkFBTyxFQUFFO0FBQVgsZUFBOUI7QUFDQUYsOERBQU0sQ0FBQ0MsR0FBUCxDQUFXLE1BQVgsRUFBbUJGLElBQW5CLEVBQXlCO0FBQUVHLHVCQUFPLEVBQUU7QUFBWCxlQUF6QjtBQUNBWCxnQkFBRTs7QUFUd0I7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVk1QkQsMEJBQVksQ0FBQyxLQUFELENBQVo7QUFDQWEscUJBQU8sQ0FBQ0MsR0FBUjs7QUFiNEIsbUJBY3hCLFlBQUlDLFFBQUosQ0FBYVIsSUFBYixDQUFrQlMsS0FkTTtBQUFBO0FBQUE7QUFBQTs7QUFBQSwrQ0FlbkJDLG9EQUFLLENBQUNELEtBQU4sQ0FBWSxZQUFJRCxRQUFKLENBQWFSLElBQWIsQ0FBa0JTLEtBQTlCLENBZm1COztBQUFBO0FBQUEsbUJBa0J4QixZQUFJRCxRQUFKLENBQWFSLElBQWIsQ0FBa0JXLE9BQWxCLENBQTBCLENBQTFCLEVBQTZCQyxPQWxCTDtBQUFBO0FBQUE7QUFBQTs7QUFBQSwrQ0FtQm5CRixvREFBSyxDQUFDRCxLQUFOLENBQVksWUFBSUQsUUFBSixDQUFhUixJQUFiLENBQWtCVyxPQUFsQixDQUEwQixDQUExQixFQUE2QkMsT0FBekMsQ0FuQm1COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWhDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FESztBQXlCQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDckIsUUFBRCxFQUFXQyxZQUFYLEVBQXlCQyxFQUF6QjtBQUFBO0FBQUEsaU1BQWdDLGtCQUFPQyxRQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRW5DQyw0Q0FBSyxDQUFDQyxJQUFOLFdBQWNSLElBQWQsNEJBQTJDRyxRQUEzQyxDQUZtQzs7QUFBQTtBQUUvQ00saUJBRitDOztBQUFBLG9CQUtqREEsR0FBRyxDQUFDQyxNQUFKLEtBQWUsR0FMa0M7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxxQkFNckJELEdBQUcsQ0FBQ0UsSUFOaUI7O0FBQUE7QUFBQTtBQU0zQ0MsbUJBTjJDLG9CQU0zQ0EsS0FOMkM7QUFNcENDLGtCQU5vQyxvQkFNcENBLElBTm9DO0FBT25EQyw4REFBTSxDQUFDQyxHQUFQLENBQVcsVUFBWCxFQUF1QkgsS0FBdkIsRUFBOEI7QUFBRUksdUJBQU8sRUFBRTtBQUFYLGVBQTlCO0FBQ0FGLDhEQUFNLENBQUNDLEdBQVAsQ0FBVyxNQUFYLEVBQW1CRixJQUFuQixFQUF5QjtBQUFFRyx1QkFBTyxFQUFFO0FBQVgsZUFBekI7QUFDQVgsZ0JBQUU7O0FBVGlEO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFZckRELDBCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0FhLHFCQUFPLENBQUNDLEdBQVI7O0FBYnFELG1CQWNqRCxhQUFJQyxRQUFKLENBQWFSLElBQWIsQ0FBa0JTLEtBZCtCO0FBQUE7QUFBQTtBQUFBOztBQUFBLGdEQWU1Q0Msb0RBQUssQ0FBQ0QsS0FBTixDQUFZLGFBQUlELFFBQUosQ0FBYVIsSUFBYixDQUFrQlMsS0FBOUIsQ0FmNEM7O0FBQUE7QUFBQSxtQkFrQmpELGFBQUlELFFBQUosQ0FBYVIsSUFBYixDQUFrQlcsT0FBbEIsQ0FBMEIsQ0FBMUIsRUFBNkJDLE9BbEJvQjtBQUFBO0FBQUE7QUFBQTs7QUFBQSxnREFtQjVDRixvREFBSyxDQUFDRCxLQUFOLENBQVksYUFBSUQsUUFBSixDQUFhUixJQUFiLENBQWtCVyxPQUFsQixDQUEwQixDQUExQixFQUE2QkMsT0FBekMsQ0FuQjRDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWhDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBbEI7QUF3QkEsSUFBTUUsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUMxQlgsa0RBQU0sQ0FBQ1ksTUFBUCxDQUFjLFVBQWQ7QUFDQUMsUUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixHQUF1QixHQUF2QjtBQUNELENBSE07QUFLQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNuQixJQUFELEVBQVU7QUFDdkMsTUFBSTtBQUNGLFFBQUlvQixhQUFhLEdBQUdqQyxRQUFRLENBQUNrQyxHQUFULENBQWFDLE9BQWIsQ0FDbEJDLElBQUksQ0FBQ0MsU0FBTCxDQUFleEIsSUFBZixDQURrQixFQUVsQlYsT0FBTyxDQUFDbUMsR0FBUixDQUFZQyxRQUZNLEVBR2xCQyxRQUhrQixFQUFwQjtBQUtBQyxnQkFBWSxDQUFDQyxPQUFiLENBQXFCdkMsT0FBTyxDQUFDbUMsR0FBUixDQUFZSyxXQUFqQyxFQUE4Q1YsYUFBOUM7QUFDQSxXQUFPLElBQVA7QUFDRCxHQVJELENBUUUsT0FBT1gsS0FBUCxFQUFjO0FBQ2RILFdBQU8sQ0FBQ0MsR0FBUixDQUFZRSxLQUFaO0FBQ0FtQixnQkFBWSxDQUFDRyxVQUFiLENBQXdCekMsT0FBTyxDQUFDbUMsR0FBUixDQUFZSyxXQUFwQztBQUNBLFdBQU8sS0FBUDtBQUNEO0FBQ0YsQ0FkTTtBQWdCQSxJQUFNRSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDbkMsTUFBSTtBQUNGLFFBQUlDLFFBQVEsR0FBR0wsWUFBWSxDQUFDTSxPQUFiLENBQXFCNUMsT0FBTyxDQUFDbUMsR0FBUixDQUFZSyxXQUFqQyxJQUNYRixZQUFZLENBQUNNLE9BQWIsQ0FBcUI1QyxPQUFPLENBQUNtQyxHQUFSLENBQVlLLFdBQWpDLENBRFcsR0FFWCxJQUZKOztBQUdBLFFBQUlHLFFBQUosRUFBYztBQUNaLFVBQUlFLEtBQUssR0FBR2hELFFBQVEsQ0FBQ2tDLEdBQVQsQ0FBYWUsT0FBYixDQUFxQkgsUUFBckIsRUFBK0IzQyxPQUFPLENBQUNtQyxHQUFSLENBQVlDLFFBQTNDLENBQVo7QUFDQSxVQUFJVyxXQUFXLEdBQUdkLElBQUksQ0FBQ2UsS0FBTCxDQUFXSCxLQUFLLENBQUNSLFFBQU4sQ0FBZXhDLFFBQVEsQ0FBQ29ELEdBQVQsQ0FBYUMsSUFBNUIsQ0FBWCxDQUFsQjtBQUNBLGFBQU9ILFdBQVA7QUFDRCxLQUpELE1BSU87QUFDTCxhQUFPLEtBQVA7QUFDRDtBQUNGLEdBWEQsQ0FXRSxPQUFPNUIsS0FBUCxFQUFjO0FBQ2RILFdBQU8sQ0FBQ0MsR0FBUixDQUFZRSxLQUFaO0FBRUFtQixnQkFBWSxDQUFDRyxVQUFiLENBQXdCekMsT0FBTyxDQUFDbUMsR0FBUixDQUFZSyxXQUFwQztBQUNBLFdBQU8sS0FBUDtBQUNEO0FBQ0YsQ0FsQk0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmU0M2IyZjBiYWMzODk0MWU1OTQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG52YXIgQ3J5cHRvSlMgPSByZXF1aXJlKFwiY3J5cHRvLWpzXCIpO1xyXG5cclxubGV0IGhvc3QgPSBwcm9jZXNzLmVudi5BUElfVVJMO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJSZWdpc3RlciA9XHJcbiAgKHVzZXJEYXRhLCBzZXRJc0xvYWRpbmcsIGNiKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7aG9zdH0vYXBpL3VzZXIvYXV0aC9zaWduVXBgLCB1c2VyRGF0YSk7XHJcblxyXG4gICAgICAvLyAvLyBzYXZlIHRoZSBuZXcgdG9rZW4gZnJvbSBvdXIgZnVja2luZyBhcGkgdG8gdGhlIGNvb2tpZXNcclxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGNvbnN0IHsgdG9rZW4sIHVzZXIgfSA9IGF3YWl0IHJlcy5kYXRhO1xyXG4gICAgICAgIGNvb2tpZS5zZXQoXCJfd3VzX0JKS1wiLCB0b2tlbiwgeyBleHBpcmVzOiA3IH0pO1xyXG4gICAgICAgIGNvb2tpZS5zZXQoXCJ1c2VyXCIsIHVzZXIsIHsgZXhwaXJlczogNyB9KTtcclxuICAgICAgICBjYigpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgaWYgKGVyci5yZXNwb25zZS5kYXRhLmVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRvYXN0LmVycm9yKGVyci5yZXNwb25zZS5kYXRhLmVycm9yKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGVyci5yZXNwb25zZS5kYXRhLmRldGFpbHNbMF0ubWVzc2FnZSkge1xyXG4gICAgICAgIHJldHVybiB0b2FzdC5lcnJvcihlcnIucmVzcG9uc2UuZGF0YS5kZXRhaWxzWzBdLm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyTG9naW4gPSAodXNlckRhdGEsIHNldElzTG9hZGluZywgY2IpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGAke2hvc3R9L2FwaS91c2VyL2F1dGgvc2lnbkluYCwgdXNlckRhdGEpO1xyXG5cclxuICAgIC8vIC8vIHNhdmUgdGhlIG5ldyB0b2tlbiBmcm9tIG91ciBmdWNraW5nIGFwaSB0byB0aGUgY29va2llc1xyXG4gICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICBjb25zdCB7IHRva2VuLCB1c2VyIH0gPSBhd2FpdCByZXMuZGF0YTtcclxuICAgICAgY29va2llLnNldChcIl93dXNfQkpLXCIsIHRva2VuLCB7IGV4cGlyZXM6IDcgfSk7XHJcbiAgICAgIGNvb2tpZS5zZXQoXCJ1c2VyXCIsIHVzZXIsIHsgZXhwaXJlczogNyB9KTtcclxuICAgICAgY2IoKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgaWYgKGVyci5yZXNwb25zZS5kYXRhLmVycm9yKSB7XHJcbiAgICAgIHJldHVybiB0b2FzdC5lcnJvcihlcnIucmVzcG9uc2UuZGF0YS5lcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVyci5yZXNwb25zZS5kYXRhLmRldGFpbHNbMF0ubWVzc2FnZSkge1xyXG4gICAgICByZXR1cm4gdG9hc3QuZXJyb3IoZXJyLnJlc3BvbnNlLmRhdGEuZGV0YWlsc1swXS5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gIGNvb2tpZS5yZW1vdmUoXCJfd3VzX0JKS1wiKTtcclxuICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVuY3J5cHRVc2VyRGF0YSA9IChkYXRhKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGxldCBlbmNyeXB0ZWREYXRhID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICBwcm9jZXNzLmVudi5VU0VSX0tFWVxyXG4gICAgKS50b1N0cmluZygpO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2Nlc3MuZW52LlVTRVJfQ09PS0lFLCBlbmNyeXB0ZWREYXRhKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShwcm9jZXNzLmVudi5VU0VSX0NPT0tJRSk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlY3J5cHRVc2VyRGF0YSA9ICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgbGV0IGluZm9JdGVtID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvY2Vzcy5lbnYuVVNFUl9DT09LSUUpXHJcbiAgICAgID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvY2Vzcy5lbnYuVVNFUl9DT09LSUUpXHJcbiAgICAgIDogbnVsbDtcclxuICAgIGlmIChpbmZvSXRlbSkge1xyXG4gICAgICBsZXQgYnl0ZXMgPSBDcnlwdG9KUy5BRVMuZGVjcnlwdChpbmZvSXRlbSwgcHJvY2Vzcy5lbnYuVVNFUl9LRVkpO1xyXG4gICAgICBsZXQgc3RyaW5nQXJyYXkgPSBKU09OLnBhcnNlKGJ5dGVzLnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KSk7XHJcbiAgICAgIHJldHVybiBzdHJpbmdBcnJheTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHByb2Nlc3MuZW52LlVTRVJfQ09PS0lFKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
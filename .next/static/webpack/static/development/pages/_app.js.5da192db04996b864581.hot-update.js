webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/chatbot/options/Options.js":
/*!***********************************************!*\
  !*** ./components/chatbot/options/Options.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_chatbot_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chatbot-kit */ "./node_modules/react-chatbot-kit/build/index.js");
/* harmony import */ var react_chatbot_kit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_chatbot_kit__WEBPACK_IMPORTED_MODULE_3__);



var _this = undefined,
    _jsxFileName = "C:\\Users\\corde\\Desktop\\New folder\\bikeshop\\bikeshop_frontend\\components\\chatbot\\options\\Options.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var Options = function Options(props) {
  var handleHowToOder = function handleHowToOder() {
    var botMessage = Object(react_chatbot_kit__WEBPACK_IMPORTED_MODULE_3__["createChatBotMessage"])("Hello you can order on our website here at https://example.com.");
    props.setState(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        messages: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prev.messages), [botMessage])
      });
    });
  };

  var store = function store() {
    var botMessage = Object(react_chatbot_kit__WEBPACK_IMPORTED_MODULE_3__["createChatBotMessage"])("Our store is located at Lilac St, Marikina, 1800 Metro Manila, Philippines.");
    props.setState(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        messages: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prev.messages), [botMessage])
      });
    });
  };

  var sale = function sale() {
    var botMessage = Object(react_chatbot_kit__WEBPACK_IMPORTED_MODULE_3__["createChatBotMessage"])("You can check our sale items at https://sales.com");
    props.setState(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        messages: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prev.messages), [botMessage])
      });
    });
  };

  var options = [{
    text: "How to order?",
    handler: handleHowToOder,
    id: 1
  }, {
    text: "Where’s your store?",
    handler: store,
    id: 2
  }, {
    text: "What’s the best deal you can give me?",
    handler: sale,
    id: 3
  }];
  var buttonsMarkup = options.map(function (option) {
    return __jsx("button", {
      key: option.id,
      onClick: option.handler,
      className: "option-button",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 5
      }
    }, option.text);
  });
  return __jsx("div", {
    className: "options-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 10
    }
  }, buttonsMarkup);
};

_c = Options;
/* harmony default export */ __webpack_exports__["default"] = (Options);

var _c;

$RefreshReg$(_c, "Options");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NoYXRib3Qvb3B0aW9ucy9PcHRpb25zLmpzIl0sIm5hbWVzIjpbIk9wdGlvbnMiLCJwcm9wcyIsImhhbmRsZUhvd1RvT2RlciIsImJvdE1lc3NhZ2UiLCJjcmVhdGVDaGF0Qm90TWVzc2FnZSIsInNldFN0YXRlIiwicHJldiIsIm1lc3NhZ2VzIiwic3RvcmUiLCJzYWxlIiwib3B0aW9ucyIsInRleHQiLCJoYW5kbGVyIiwiaWQiLCJidXR0b25zTWFya3VwIiwibWFwIiwib3B0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3pCLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QixRQUFNQyxVQUFVLEdBQUdDLDhFQUFvQixDQUFDLGlFQUFELENBQXZDO0FBRUFILFNBQUssQ0FBQ0ksUUFBTixDQUFlLFVBQUNDLElBQUQ7QUFBQSw2Q0FDVkEsSUFEVTtBQUViQyxnQkFBUSx5R0FBTUQsSUFBSSxDQUFDQyxRQUFYLElBQXFCSixVQUFyQjtBQUZLO0FBQUEsS0FBZjtBQUlELEdBUEQ7O0FBU0EsTUFBTUssS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUNsQixRQUFNTCxVQUFVLEdBQUdDLDhFQUFvQixDQUFDLDZFQUFELENBQXZDO0FBRUFILFNBQUssQ0FBQ0ksUUFBTixDQUFlLFVBQUNDLElBQUQ7QUFBQSw2Q0FDVkEsSUFEVTtBQUViQyxnQkFBUSx5R0FBTUQsSUFBSSxDQUFDQyxRQUFYLElBQXFCSixVQUFyQjtBQUZLO0FBQUEsS0FBZjtBQUlELEdBUEQ7O0FBU0EsTUFBTU0sSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNqQixRQUFNTixVQUFVLEdBQUdDLDhFQUFvQixDQUFDLG1EQUFELENBQXZDO0FBRUFILFNBQUssQ0FBQ0ksUUFBTixDQUFlLFVBQUNDLElBQUQ7QUFBQSw2Q0FDVkEsSUFEVTtBQUViQyxnQkFBUSx5R0FBTUQsSUFBSSxDQUFDQyxRQUFYLElBQXFCSixVQUFyQjtBQUZLO0FBQUEsS0FBZjtBQUlELEdBUEQ7O0FBU0EsTUFBTU8sT0FBTyxHQUFHLENBQ2Q7QUFDRUMsUUFBSSxFQUFFLGVBRFI7QUFFRUMsV0FBTyxFQUFFVixlQUZYO0FBR0VXLE1BQUUsRUFBRTtBQUhOLEdBRGMsRUFNZDtBQUNFRixRQUFJLEVBQUUscUJBRFI7QUFFRUMsV0FBTyxFQUFFSixLQUZYO0FBR0VLLE1BQUUsRUFBRTtBQUhOLEdBTmMsRUFXZDtBQUNFRixRQUFJLEVBQUUsdUNBRFI7QUFFRUMsV0FBTyxFQUFFSCxJQUZYO0FBR0VJLE1BQUUsRUFBRTtBQUhOLEdBWGMsQ0FBaEI7QUFrQkEsTUFBTUMsYUFBYSxHQUFHSixPQUFPLENBQUNLLEdBQVIsQ0FBWSxVQUFDQyxNQUFEO0FBQUEsV0FDaEM7QUFBUSxTQUFHLEVBQUVBLE1BQU0sQ0FBQ0gsRUFBcEI7QUFBd0IsYUFBTyxFQUFFRyxNQUFNLENBQUNKLE9BQXhDO0FBQWlELGVBQVMsRUFBQyxlQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dJLE1BQU0sQ0FBQ0wsSUFEVixDQURnQztBQUFBLEdBQVosQ0FBdEI7QUFNQSxTQUFPO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBb0NHLGFBQXBDLENBQVA7QUFDRCxDQXJERDs7S0FBTWQsTztBQXVEU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuNWRhMTkyZGIwNDk5NmI4NjQ1ODEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ2hhdEJvdE1lc3NhZ2UgfSBmcm9tIFwicmVhY3QtY2hhdGJvdC1raXRcIjtcclxuY29uc3QgT3B0aW9ucyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGhhbmRsZUhvd1RvT2RlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJvdE1lc3NhZ2UgPSBjcmVhdGVDaGF0Qm90TWVzc2FnZShcIkhlbGxvIHlvdSBjYW4gb3JkZXIgb24gb3VyIHdlYnNpdGUgaGVyZSBhdCBodHRwczovL2V4YW1wbGUuY29tLlwiKTtcclxuXHJcbiAgICBwcm9wcy5zZXRTdGF0ZSgocHJldikgPT4gKHtcclxuICAgICAgLi4ucHJldixcclxuICAgICAgbWVzc2FnZXM6IFsuLi5wcmV2Lm1lc3NhZ2VzLCBib3RNZXNzYWdlXSxcclxuICAgIH0pKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzdG9yZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJvdE1lc3NhZ2UgPSBjcmVhdGVDaGF0Qm90TWVzc2FnZShcIk91ciBzdG9yZSBpcyBsb2NhdGVkIGF0IExpbGFjIFN0LCBNYXJpa2luYSwgMTgwMCBNZXRybyBNYW5pbGEsIFBoaWxpcHBpbmVzLlwiKTtcclxuXHJcbiAgICBwcm9wcy5zZXRTdGF0ZSgocHJldikgPT4gKHtcclxuICAgICAgLi4ucHJldixcclxuICAgICAgbWVzc2FnZXM6IFsuLi5wcmV2Lm1lc3NhZ2VzLCBib3RNZXNzYWdlXSxcclxuICAgIH0pKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzYWxlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYm90TWVzc2FnZSA9IGNyZWF0ZUNoYXRCb3RNZXNzYWdlKFwiWW91IGNhbiBjaGVjayBvdXIgc2FsZSBpdGVtcyBhdCBodHRwczovL3NhbGVzLmNvbVwiKTtcclxuXHJcbiAgICBwcm9wcy5zZXRTdGF0ZSgocHJldikgPT4gKHtcclxuICAgICAgLi4ucHJldixcclxuICAgICAgbWVzc2FnZXM6IFsuLi5wcmV2Lm1lc3NhZ2VzLCBib3RNZXNzYWdlXSxcclxuICAgIH0pKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvcHRpb25zID0gW1xyXG4gICAge1xyXG4gICAgICB0ZXh0OiBcIkhvdyB0byBvcmRlcj9cIixcclxuICAgICAgaGFuZGxlcjogaGFuZGxlSG93VG9PZGVyLFxyXG4gICAgICBpZDogMSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6IFwiV2hlcmXigJlzIHlvdXIgc3RvcmU/XCIsXHJcbiAgICAgIGhhbmRsZXI6IHN0b3JlLFxyXG4gICAgICBpZDogMixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6IFwiV2hhdOKAmXMgdGhlIGJlc3QgZGVhbCB5b3UgY2FuIGdpdmUgbWU/XCIsXHJcbiAgICAgIGhhbmRsZXI6IHNhbGUsXHJcbiAgICAgIGlkOiAzLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBidXR0b25zTWFya3VwID0gb3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxyXG4gICAgPGJ1dHRvbiBrZXk9e29wdGlvbi5pZH0gb25DbGljaz17b3B0aW9uLmhhbmRsZXJ9IGNsYXNzTmFtZT1cIm9wdGlvbi1idXR0b25cIj5cclxuICAgICAge29wdGlvbi50ZXh0fVxyXG4gICAgPC9idXR0b24+XHJcbiAgKSk7XHJcblxyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnMtY29udGFpbmVyXCI+e2J1dHRvbnNNYXJrdXB9PC9kaXY+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3B0aW9ucztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
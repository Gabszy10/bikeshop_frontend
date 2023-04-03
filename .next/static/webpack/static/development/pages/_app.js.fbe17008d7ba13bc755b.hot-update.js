webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/styles/bootstrap.min.css */ "./assets/styles/bootstrap.min.css");
/* harmony import */ var _assets_styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_styles_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/styles/fontawesome.min.css */ "./assets/styles/fontawesome.min.css");
/* harmony import */ var _assets_styles_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_styles_animate_min_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/styles/animate.min.css */ "./assets/styles/animate.min.css");
/* harmony import */ var _assets_styles_animate_min_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_animate_min_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_styles_slick_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/styles/slick.css */ "./assets/styles/slick.css");
/* harmony import */ var _assets_styles_slick_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_slick_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_styles_slick_theme_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/styles/slick-theme.css */ "./assets/styles/slick-theme.css");
/* harmony import */ var _assets_styles_slick_theme_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_slick_theme_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-accessible-accordion/dist/fancy-example.css */ "./node_modules/react-accessible-accordion/dist/fancy-example.css");
/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-image-lightbox/style.css */ "./node_modules/react-image-lightbox/style.css");
/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _assets_styles_responsive_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/styles/responsive.css */ "./assets/styles/responsive.css");
/* harmony import */ var _assets_styles_responsive_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_responsive_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-calendar/dist/Calendar.css */ "./node_modules/react-calendar/dist/Calendar.css");
/* harmony import */ var react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _assets_styles_style_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../assets/styles/style.css */ "./assets/styles/style.css");
/* harmony import */ var _assets_styles_style_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_style_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-messenger-customer-chat */ "./node_modules/react-messenger-customer-chat/lib/index.js");
/* harmony import */ var react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var _store_reducers_cartReducer__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../store/reducers/cartReducer */ "./store/reducers/cartReducer.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/index.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _components_Shared_GoTop__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../components/Shared/GoTop */ "./components/Shared/GoTop.js");








var _jsxFileName = "C:\\Users\\corde\\Desktop\\New folder\\bikeshop\\gabszy-flower-frontend\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



















/* harmony default export */ __webpack_exports__["default"] = (Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_23__["default"])(_store_reducers_cartReducer__WEBPACK_IMPORTED_MODULE_24__["initStore"])( /*#__PURE__*/function (_App) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MyApp, _App);

  var _super = _createSuper(MyApp);

  function MyApp() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MyApp);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          store = _this$props.store;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 9
        }
      }, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_25__["DefaultSeo"], {
        title: "i-Wheels.shop",
        description: "We offer the best brands of Bikes, E-Scooter, E-Bikes & E-Rides available in the market.",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }
      }), __jsx(react_redux__WEBPACK_IMPORTED_MODULE_21__["Provider"], {
        store: store,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }
      }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, pageProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }
      }))), __jsx(react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_20___default.a, {
        pageId: "127061742122440",
        appId: "592986798075465",
        htmlRef: "www.facebook.com/i-Wheels.shop",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }
      }), ",");
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, ctx;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;

                if (!Component.getInitialProps) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return Component.getInitialProps(ctx);

              case 4:
                _context.t0 = _context.sent;
                _context.next = 8;
                break;

              case 7:
                _context.t0 = {};

              case 8:
                _context.t1 = _context.t0;
                return _context.abrupt("return", {
                  pageProps: _context.t1
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_22___default.a)));

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIl0sIm5hbWVzIjpbIndpdGhSZWR1eCIsImluaXRTdG9yZSIsInByb3BzIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmUiLCJjdHgiLCJnZXRJbml0aWFsUHJvcHMiLCJBcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZUEsa0lBQVMsQ0FBQ0Msc0VBQUQsQ0FBVDtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsNkJBVUY7QUFBQSx3QkFDaUMsS0FBS0MsS0FEdEM7QUFBQSxVQUNDQyxTQURELGVBQ0NBLFNBREQ7QUFBQSxVQUNZQyxTQURaLGVBQ1lBLFNBRFo7QUFBQSxVQUN1QkMsS0FEdkIsZUFDdUJBLEtBRHZCO0FBR1AsYUFDRSxNQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxvREFBRDtBQUNFLGFBQUssRUFBQyxlQURSO0FBRUUsbUJBQVcsRUFBQywwRkFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFLRSxNQUFDLHFEQUFEO0FBQVUsYUFBSyxFQUFFQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxTQUFELHlGQUFlRCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERixDQUxGLEVBU0UsTUFBQyxxRUFBRDtBQUNFLGNBQU0sRUFBQyxpQkFEVDtBQUVFLGFBQUssRUFBQyxpQkFGUjtBQUdFLGVBQU8sRUFBQyxnQ0FIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBVEYsTUFERjtBQWtCRDtBQS9CVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFb0JELHlCQUZwQixRQUVvQkEsU0FGcEIsRUFFK0JHLEdBRi9CLFFBRStCQSxHQUYvQjs7QUFBQSxxQkFJSUgsU0FBUyxDQUFDSSxlQUpkO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsdUJBS0dKLFNBQVMsQ0FBQ0ksZUFBVixDQUEwQkQsR0FBMUIsQ0FMSDs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDhCQU1ILEVBTkc7O0FBQUE7QUFBQTtBQUFBO0FBSVBGLDJCQUpPO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLEVBQ09JLGdEQURQLEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuZmJlMTcwMDhkN2JhMTNiYzc1NWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL2Fzc2V0cy9zdHlsZXMvYm9vdHN0cmFwLm1pbi5jc3NcIjtcclxuaW1wb3J0IFwiLi4vYXNzZXRzL3N0eWxlcy9mb250YXdlc29tZS5taW4uY3NzXCI7XHJcbmltcG9ydCBcIi4uL2Fzc2V0cy9zdHlsZXMvYW5pbWF0ZS5taW4uY3NzXCI7XHJcbmltcG9ydCBcIi4uL2Fzc2V0cy9zdHlsZXMvc2xpY2suY3NzXCI7XHJcbmltcG9ydCBcIi4uL2Fzc2V0cy9zdHlsZXMvc2xpY2stdGhlbWUuY3NzXCI7XHJcbmltcG9ydCBcInJlYWN0LWFjY2Vzc2libGUtYWNjb3JkaW9uL2Rpc3QvZmFuY3ktZXhhbXBsZS5jc3NcIjtcclxuaW1wb3J0IFwicmVhY3QtaW1hZ2UtbGlnaHRib3gvc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBcIi4uL2Fzc2V0cy9zdHlsZXMvcmVzcG9uc2l2ZS5jc3NcIjtcclxuaW1wb3J0IFwicmVhY3QtY2FsZW5kYXIvZGlzdC9DYWxlbmRhci5jc3NcIjtcclxuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9hc3NldHMvc3R5bGVzL3N0eWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IE1lc3NlbmdlckN1c3RvbWVyQ2hhdCBmcm9tIFwicmVhY3QtbWVzc2VuZ2VyLWN1c3RvbWVyLWNoYXRcIjtcclxuXHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBBcHAgZnJvbSBcIm5leHQvYXBwXCI7XHJcbmltcG9ydCB3aXRoUmVkdXggZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBpbml0U3RvcmUgfSBmcm9tIFwiLi4vc3RvcmUvcmVkdWNlcnMvY2FydFJlZHVjZXJcIjtcclxuaW1wb3J0IHsgRGVmYXVsdFNlbyB9IGZyb20gXCJuZXh0LXNlb1wiO1xyXG5pbXBvcnQgR29Ub3AgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2hhcmVkL0dvVG9wXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoaW5pdFN0b3JlKShcclxuICBjbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgQ29tcG9uZW50LCBjdHggfSkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhZ2VQcm9wczogQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xyXG4gICAgICAgICAgPyBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eClcclxuICAgICAgICAgIDoge30sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzLCBzdG9yZSB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgPERlZmF1bHRTZW9cclxuICAgICAgICAgICAgdGl0bGU9XCJpLVdoZWVscy5zaG9wXCJcclxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJXZSBvZmZlciB0aGUgYmVzdCBicmFuZHMgb2YgQmlrZXMsIEUtU2Nvb3RlciwgRS1CaWtlcyAmIEUtUmlkZXMgYXZhaWxhYmxlIGluIHRoZSBtYXJrZXQuXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgICAgIHsvKiA8R29Ub3Agc2Nyb2xsU3RlcEluUHg9XCI1MFwiIGRlbGF5SW5Ncz1cIjEwLjUwXCIgLz4gKi99XHJcbiAgICAgICAgICA8TWVzc2VuZ2VyQ3VzdG9tZXJDaGF0XHJcbiAgICAgICAgICAgIHBhZ2VJZD1cIjEyNzA2MTc0MjEyMjQ0MFwiXHJcbiAgICAgICAgICAgIGFwcElkPVwiNTkyOTg2Nzk4MDc1NDY1XCJcclxuICAgICAgICAgICAgaHRtbFJlZj1cInd3dy5mYWNlYm9vay5jb20vaS1XaGVlbHMuc2hvcFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgLFxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG4pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
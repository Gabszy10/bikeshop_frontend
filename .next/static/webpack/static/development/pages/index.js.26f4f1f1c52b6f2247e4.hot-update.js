webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Common/Testimonials.js":
/*!*******************************************!*\
  !*** ./components/Common/Testimonials.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_9__);








var _jsxFileName = "C:\\Users\\corde\\Desktop\\New folder\\bikeshop\\gabszy-flower-frontend\\components\\Common\\Testimonials.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-owl-carousel3 */ "./node_modules/react-owl-carousel3/lib/OwlCarousel.js", 7));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-owl-carousel3 */ "./node_modules/react-owl-carousel3/lib/OwlCarousel.js")];
    },
    modules: ["react-owl-carousel3"]
  }
});
_c2 = OwlCarousel;
var options = {
  loop: true,
  autoplayTimeout: 7000,
  nav: false,
  dots: true,
  smartSpeed: 1500,
  //   dotsSpeed: 15000,
  autoplayHoverPause: true,
  items: 1,
  autoplay: true,
  navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"]
};

var Testimonials = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Testimonials, _Component);

  var _super = _createSuper(Testimonials);

  function Testimonials() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Testimonials);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      display: false,
      panel: true
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Testimonials, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        display: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("section", {
        className: "testimonials-area ptb-60",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 9
        }
      }, this.state.display ? __jsx(OwlCarousel, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        className: "testimonials-slides owl-carousel owl-theme"
      }, options, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 13
        }
      }), __jsx("div", {
        className: "single-testimonials",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "client-image",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 17
        }
      }, __jsx("img", {
        src: "https://scontent.fmnl7-1.fna.fbcdn.net/v/t1.0-9/136725896_211798606982086_4615392526613261355_o.png?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGYhWzt2u_Y_ZZ37UcKmS1iB3XGywWtrWIHdcbLBa2tYhIb8BWXYDp3nhMBcjgebW4wQWycN9vPglpdKnlVw5_d&_nc_ohc=gSuMiQ4AdeAAX8Kzc__&_nc_oc=AQlpPBJYR01xA7jupdOsJbF4i9cgykxr1OV2fnYr_ihmR06LioOmYALebwO4wtWshlo&_nc_ht=scontent.fmnl7-1.fna&oh=d728595009d82bd42f342910874a0044&oe=6023674C",
        style: {
          objectFit: "cover"
        },
        alt: "image",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 19
        }
      })), __jsx("p", {
        style: {
          fontSize: "1rem"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 17
        }
      }, "Ang i-WheelsPH ay isang samahang pang Inter-galactic na nanirahan sa planetang Earth upang maghatid ng kasiyahan hanggang sa dulo ng lupalop ng daigdig."), __jsx("div", {
        className: "client-info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 17
        }
      }, __jsx("h4", {
        style: {
          fontSize: "1rem"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 19
        }
      }, "Kurin"), __jsx("span", {
        style: {
          fontSize: "1rem"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 19
        }
      }, "Founder at i-Wheels.shop"))), __jsx("div", {
        className: "single-testimonials",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "client-image",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 17
        }
      }, __jsx("img", {
        src: "https://scontent.fmnl7-1.fna.fbcdn.net/v/t1.0-9/136725896_211798606982086_4615392526613261355_o.png?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGYhWzt2u_Y_ZZ37UcKmS1iB3XGywWtrWIHdcbLBa2tYhIb8BWXYDp3nhMBcjgebW4wQWycN9vPglpdKnlVw5_d&_nc_ohc=gSuMiQ4AdeAAX8Kzc__&_nc_oc=AQlpPBJYR01xA7jupdOsJbF4i9cgykxr1OV2fnYr_ihmR06LioOmYALebwO4wtWshlo&_nc_ht=scontent.fmnl7-1.fna&oh=d728595009d82bd42f342910874a0044&oe=6023674C",
        style: {
          objectFit: "cover"
        },
        alt: "image",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 19
        }
      })), __jsx("p", {
        style: {
          fontSize: "1rem"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 17
        }
      }, "Makakasigurado na sa i-WheelsPH ay maihahatid ng MAAYOS at MABILIS ang iyong order sa patutunguhan nito. Hindi katulad ng relasyon nyo na hindi na nga MAAYOS, mabilis pa NATAPOS."), __jsx("div", {
        className: "client-info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 17
        }
      }, __jsx("h4", {
        style: {
          fontSize: "1rem"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 19
        }
      }, "Jethro Sioco Loria"), __jsx("span", {
        style: {
          fontSize: "1rem"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 19
        }
      }, "Founder at i-Wheels.shop"))), __jsx("div", {
        className: "single-testimonials",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "client-image",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 17
        }
      }, __jsx("img", {
        src: "https://scontent.fmnl7-1.fna.fbcdn.net/v/t1.0-9/136725896_211798606982086_4615392526613261355_o.png?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGYhWzt2u_Y_ZZ37UcKmS1iB3XGywWtrWIHdcbLBa2tYhIb8BWXYDp3nhMBcjgebW4wQWycN9vPglpdKnlVw5_d&_nc_ohc=gSuMiQ4AdeAAX8Kzc__&_nc_oc=AQlpPBJYR01xA7jupdOsJbF4i9cgykxr1OV2fnYr_ihmR06LioOmYALebwO4wtWshlo&_nc_ht=scontent.fmnl7-1.fna&oh=d728595009d82bd42f342910874a0044&oe=6023674C",
        style: {
          objectFit: "cover"
        },
        alt: "image",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 19
        }
      })), __jsx("p", {
        style: {
          fontSize: "1rem"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 17
        }
      }, "Sa i-WheelsPH , maraming bundles, flowers, bikes at iba pa na pwedeng pagpilian at makakasigurado ang customer na legit at totoo ang mga items dito. Oo mas legit pa sa pagmamahalan nyo."), __jsx("div", {
        className: "client-info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 17
        }
      }, __jsx("h4", {
        style: {
          fontSize: "1rem"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 19
        }
      }, "Arcival Palma"), __jsx("span", {
        style: {
          fontSize: "1rem"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 19
        }
      }, "Founder at i-Wheels.shop"))), __jsx("div", {
        className: "single-testimonials",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "client-image",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 17
        }
      }, __jsx("img", {
        src: "https://scontent.fmnl7-1.fna.fbcdn.net/v/t1.0-9/136725896_211798606982086_4615392526613261355_o.png?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGYhWzt2u_Y_ZZ37UcKmS1iB3XGywWtrWIHdcbLBa2tYhIb8BWXYDp3nhMBcjgebW4wQWycN9vPglpdKnlVw5_d&_nc_ohc=gSuMiQ4AdeAAX8Kzc__&_nc_oc=AQlpPBJYR01xA7jupdOsJbF4i9cgykxr1OV2fnYr_ihmR06LioOmYALebwO4wtWshlo&_nc_ht=scontent.fmnl7-1.fna&oh=d728595009d82bd42f342910874a0044&oe=6023674C",
        style: {
          objectFit: "cover"
        },
        alt: "image",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 19
        }
      })), __jsx("p", {
        style: {
          fontSize: "1rem"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 17
        }
      }, "Ang i-WheelsPH ay isang samahan na kumakatawan sa bawat tao, matanda, bata, may ngipin man o wala, na gustong ihatid ang kanilang nararamdaman patungo sa mga mahahalagang tao sa kanilang buhay. Pero pwede na din kahit hindi mahalaga."), __jsx("div", {
        className: "client-info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 17
        }
      }, __jsx("h4", {
        style: {
          fontSize: "1rem"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 19
        }
      }, "Patrick Sero"), __jsx("span", {
        style: {
          fontSize: "1rem"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 19
        }
      }, "Founder at i-Wheels.shop")))) : ""));
    }
  }]);

  return Testimonials;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Testimonials);

var _c, _c2;

$RefreshReg$(_c, "OwlCarousel$dynamic");
$RefreshReg$(_c2, "OwlCarousel");

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

/***/ }),

/***/ "./components/shop-style-one/CategoryProducts.js":
/*!*******************************************************!*\
  !*** ./components/shop-style-one/CategoryProducts.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "C:\\Users\\corde\\Desktop\\New folder\\bikeshop\\gabszy-flower-frontend\\components\\shop-style-one\\CategoryProducts.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var CategoryProducts = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(CategoryProducts, _Component);

  var _super = _createSuper(CategoryProducts);

  function CategoryProducts() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CategoryProducts);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CategoryProducts, [{
    key: "render",
    value: function render() {
      return __jsx("section", {
        className: "category-products-area pb-60 pt-40",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "container col-lg-7 col-md-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "col-lg-6 col-md-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "single-category-box",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 29
        }
      }, __jsx("img", {
        src: "https://cdn.shopify.com/s/files/1/2601/3352/files/florist-PH-bundledeals_1600x.jpg?v=1580265726",
        alt: "image",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 33
        }
      }))), __jsx("div", {
        className: "col-lg-6 col-md-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "single-category-box",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 29
        }
      }, __jsx("img", {
        src: "https://cdn.shopify.com/s/files/1/2601/3352/files/florist-PH-boxedblooms_1_1600x.jpg?v=1580265673",
        alt: "image",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 33
        }
      })))), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "col-lg-6 col-md-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "single-category-box",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 29
        }
      }, __jsx("img", {
        src: "https://cdn.shopify.com/s/files/1/2601/3352/files/florist-PH-cakecollection_1600x.jpg?v=1580265790",
        alt: "image",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 33
        }
      }))), __jsx("div", {
        className: "col-lg-6 col-md-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "single-category-box",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 29
        }
      }, __jsx("img", {
        src: "https://cdn.shopify.com/s/files/1/2601/3352/files/florist-PH-petitebikes_1600x.jpg?v=1580265763",
        alt: "image",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 33
        }
      }))))));
    }
  }]);

  return CategoryProducts;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CategoryProducts);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbW1vbi9UZXN0aW1vbmlhbHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaG9wLXN0eWxlLW9uZS9DYXRlZ29yeVByb2R1Y3RzLmpzIl0sIm5hbWVzIjpbIk93bENhcm91c2VsIiwiZHluYW1pYyIsIm9wdGlvbnMiLCJsb29wIiwiYXV0b3BsYXlUaW1lb3V0IiwibmF2IiwiZG90cyIsInNtYXJ0U3BlZWQiLCJhdXRvcGxheUhvdmVyUGF1c2UiLCJpdGVtcyIsImF1dG9wbGF5IiwibmF2VGV4dCIsIlRlc3RpbW9uaWFscyIsImRpc3BsYXkiLCJwYW5lbCIsInNldFN0YXRlIiwic3RhdGUiLCJvYmplY3RGaXQiLCJmb250U2l6ZSIsIkNvbXBvbmVudCIsIkNhdGVnb3J5UHJvZHVjdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLElBQU1BLFdBQVcsR0FBR0MsbURBQU87QUFBQSxTQUFDLHNLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBQVEsa0ZBQVI7QUFBQTtBQUFBLGNBQVEscUJBQVI7QUFBQTtBQUFBLEVBQTNCO01BQU1ELFc7QUFFTixJQUFNRSxPQUFPLEdBQUc7QUFDZEMsTUFBSSxFQUFFLElBRFE7QUFFZEMsaUJBQWUsRUFBRSxJQUZIO0FBR2RDLEtBQUcsRUFBRSxLQUhTO0FBSWRDLE1BQUksRUFBRSxJQUpRO0FBS2RDLFlBQVUsRUFBRSxJQUxFO0FBTWhCO0FBQ0VDLG9CQUFrQixFQUFFLElBUE47QUFRZEMsT0FBSyxFQUFFLENBUk87QUFTZEMsVUFBUSxFQUFFLElBVEk7QUFVZEMsU0FBTyxFQUFFLENBQ1AscUNBRE8sRUFFUCxzQ0FGTztBQVZLLENBQWhCOztJQWdCTUMsWTs7Ozs7Ozs7Ozs7Ozs7OztnTkFDSTtBQUNOQyxhQUFPLEVBQUUsS0FESDtBQUVOQyxXQUFLLEVBQUU7QUFGRCxLOzs7Ozs7O3dDQUtZ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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUssaUJBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxXQUFHLEVBQUMsb0dBQVQ7QUFBOEcsV0FBRyxFQUFDLE9BQWxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixDQURKLENBREosRUFTSTtBQUFLLGlCQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUssaUJBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxXQUFHLEVBQUMsaUdBQVQ7QUFBMkcsV0FBRyxFQUFDLE9BQS9HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixDQURKLENBVEosQ0FuQkosQ0FESixDQURKO0FBeUNIOzs7O0VBM0MwQkQsK0M7O0FBOENoQkMsK0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjI2ZjRmMWYxYzUyYjZmMjI0N2U0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuY29uc3QgT3dsQ2Fyb3VzZWwgPSBkeW5hbWljKGltcG9ydChcInJlYWN0LW93bC1jYXJvdXNlbDNcIikpO1xyXG5cclxuY29uc3Qgb3B0aW9ucyA9IHtcclxuICBsb29wOiB0cnVlLFxyXG4gIGF1dG9wbGF5VGltZW91dDogNzAwMCxcclxuICBuYXY6IGZhbHNlLFxyXG4gIGRvdHM6IHRydWUsXHJcbiAgc21hcnRTcGVlZDogMTUwMCxcclxuLy8gICBkb3RzU3BlZWQ6IDE1MDAwLFxyXG4gIGF1dG9wbGF5SG92ZXJQYXVzZTogdHJ1ZSxcclxuICBpdGVtczogMSxcclxuICBhdXRvcGxheTogdHJ1ZSxcclxuICBuYXZUZXh0OiBbXHJcbiAgICBcIjxpIGNsYXNzPSdmYXMgZmEtY2hldnJvbi1sZWZ0Jz48L2k+XCIsXHJcbiAgICBcIjxpIGNsYXNzPSdmYXMgZmEtY2hldnJvbi1yaWdodCc+PC9pPlwiLFxyXG4gIF0sXHJcbn07XHJcblxyXG5jbGFzcyBUZXN0aW1vbmlhbHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgZGlzcGxheTogZmFsc2UsXHJcbiAgICBwYW5lbDogdHJ1ZSxcclxuICB9O1xyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5OiB0cnVlIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGVzdGltb25pYWxzLWFyZWEgcHRiLTYwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLmRpc3BsYXkgPyAoXHJcbiAgICAgICAgICAgIDxPd2xDYXJvdXNlbFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRlc3RpbW9uaWFscy1zbGlkZXMgb3dsLWNhcm91c2VsIG93bC10aGVtZVwiXHJcbiAgICAgICAgICAgICAgey4uLm9wdGlvbnN9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS10ZXN0aW1vbmlhbHNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpZW50LWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL3Njb250ZW50LmZtbmw3LTEuZm5hLmZiY2RuLm5ldC92L3QxLjAtOS8xMzY3MjU4OTZfMjExNzk4NjA2OTgyMDg2XzQ2MTUzOTI1MjY2MTMyNjEzNTVfby5wbmc/X25jX2NhdD0xMDQmY2NiPTImX25jX3NpZD0wOWNiZmUmX25jX2V1aTI9QWVHWWhXenQydV9ZX1paMzdVY0ttUzFpQjNYR3l3V3RyV0lIZGNiTEJhMnRZaEliOEJXWFlEcDNuaE1CY2pnZWJXNHdRV3ljTjl2UGdscGRLbmxWdzVfZCZfbmNfb2hjPWdTdU1pUTRBZGVBQVg4S3pjX18mX25jX29jPUFRbHBQQkpZUjAxeEE3anVwZE9zSmJGNGk5Y2d5a3hyMU9WMmZuWXJfaWhtUjA2TGlvT21ZQUxlYndPNHd0V3NobG8mX25jX2h0PXNjb250ZW50LmZtbmw3LTEuZm5hJm9oPWQ3Mjg1OTUwMDlkODJiZDQyZjM0MjkxMDg3NGEwMDQ0Jm9lPTYwMjM2NzRDXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogXCIxcmVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIEFuZyBpLVdoZWVsc1BIIGF5IGlzYW5nIHNhbWFoYW5nIHBhbmcgSW50ZXItZ2FsYWN0aWMgbmFcclxuICAgICAgICAgICAgICAgICAgbmFuaXJhaGFuIHNhIHBsYW5ldGFuZyBFYXJ0aCB1cGFuZyBtYWdoYXRpZCBuZyBrYXNpeWFoYW5cclxuICAgICAgICAgICAgICAgICAgaGFuZ2dhbmcgc2EgZHVsbyBuZyBsdXBhbG9wIG5nIGRhaWdkaWcuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGllbnQtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgZm9udFNpemU6IFwiMXJlbVwiIH19Pkt1cmluPC9oND5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMXJlbVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIEZvdW5kZXIgYXQgaS1XaGVlbHMuc2hvcFxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtdGVzdGltb25pYWxzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaWVudC1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9zY29udGVudC5mbW5sNy0xLmZuYS5mYmNkbi5uZXQvdi90MS4wLTkvMTM2NzI1ODk2XzIxMTc5ODYwNjk4MjA4Nl80NjE1MzkyNTI2NjEzMjYxMzU1X28ucG5nP19uY19jYXQ9MTA0JmNjYj0yJl9uY19zaWQ9MDljYmZlJl9uY19ldWkyPUFlR1loV3p0MnVfWV9aWjM3VWNLbVMxaUIzWEd5d1d0cldJSGRjYkxCYTJ0WWhJYjhCV1hZRHAzbmhNQmNqZ2ViVzR3UVd5Y045dlBnbHBkS25sVnc1X2QmX25jX29oYz1nU3VNaVE0QWRlQUFYOEt6Y19fJl9uY19vYz1BUWxwUEJKWVIwMXhBN2p1cGRPc0piRjRpOWNneWt4cjFPVjJmbllyX2lobVIwNkxpb09tWUFMZWJ3TzR3dFdzaGxvJl9uY19odD1zY29udGVudC5mbW5sNy0xLmZuYSZvaD1kNzI4NTk1MDA5ZDgyYmQ0MmYzNDI5MTA4NzRhMDA0NCZvZT02MDIzNjc0Q1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogXCIxcmVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIE1ha2FrYXNpZ3VyYWRvIG5hIHNhIGktV2hlZWxzUEggYXkgbWFpaGFoYXRpZCBuZyBNQUFZT1MgYXRcclxuICAgICAgICAgICAgICAgICAgTUFCSUxJUyBhbmcgaXlvbmcgb3JkZXIgc2EgcGF0dXR1bmd1aGFuIG5pdG8uIEhpbmRpIGthdHVsYWQgbmdcclxuICAgICAgICAgICAgICAgICAgcmVsYXN5b24gbnlvIG5hIGhpbmRpIG5hIG5nYSBNQUFZT1MsIG1hYmlsaXMgcGEgTkFUQVBPUy5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaWVudC1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBmb250U2l6ZTogXCIxcmVtXCIgfX0+SmV0aHJvIFNpb2NvIExvcmlhPC9oND5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMXJlbVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIEZvdW5kZXIgYXQgaS1XaGVlbHMuc2hvcFxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtdGVzdGltb25pYWxzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaWVudC1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9zY29udGVudC5mbW5sNy0xLmZuYS5mYmNkbi5uZXQvdi90MS4wLTkvMTM2NzI1ODk2XzIxMTc5ODYwNjk4MjA4Nl80NjE1MzkyNTI2NjEzMjYxMzU1X28ucG5nP19uY19jYXQ9MTA0JmNjYj0yJl9uY19zaWQ9MDljYmZlJl9uY19ldWkyPUFlR1loV3p0MnVfWV9aWjM3VWNLbVMxaUIzWEd5d1d0cldJSGRjYkxCYTJ0WWhJYjhCV1hZRHAzbmhNQmNqZ2ViVzR3UVd5Y045dlBnbHBkS25sVnc1X2QmX25jX29oYz1nU3VNaVE0QWRlQUFYOEt6Y19fJl9uY19vYz1BUWxwUEJKWVIwMXhBN2p1cGRPc0piRjRpOWNneWt4cjFPVjJmbllyX2lobVIwNkxpb09tWUFMZWJ3TzR3dFdzaGxvJl9uY19odD1zY29udGVudC5mbW5sNy0xLmZuYSZvaD1kNzI4NTk1MDA5ZDgyYmQ0MmYzNDI5MTA4NzRhMDA0NCZvZT02MDIzNjc0Q1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogXCIxcmVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIFNhIGktV2hlZWxzUEggLCBtYXJhbWluZyBidW5kbGVzLCBmbG93ZXJzLCBiaWtlcyBhdCBpYmFcclxuICAgICAgICAgICAgICAgICAgcGEgbmEgcHdlZGVuZyBwYWdwaWxpYW4gYXQgbWFrYWthc2lndXJhZG8gYW5nIGN1c3RvbWVyIG5hXHJcbiAgICAgICAgICAgICAgICAgIGxlZ2l0IGF0IHRvdG9vIGFuZyBtZ2EgaXRlbXMgZGl0by4gT28gbWFzIGxlZ2l0IHBhIHNhXHJcbiAgICAgICAgICAgICAgICAgIHBhZ21hbWFoYWxhbiBueW8uXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGllbnQtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgZm9udFNpemU6IFwiMXJlbVwiIH19PkFyY2l2YWwgUGFsbWE8L2g0PlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIxcmVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgRm91bmRlciBhdCBpLVdoZWVscy5zaG9wXHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS10ZXN0aW1vbmlhbHNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpZW50LWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3Njb250ZW50LmZtbmw3LTEuZm5hLmZiY2RuLm5ldC92L3QxLjAtOS8xMzY3MjU4OTZfMjExNzk4NjA2OTgyMDg2XzQ2MTUzOTI1MjY2MTMyNjEzNTVfby5wbmc/X25jX2NhdD0xMDQmY2NiPTImX25jX3NpZD0wOWNiZmUmX25jX2V1aTI9QWVHWWhXenQydV9ZX1paMzdVY0ttUzFpQjNYR3l3V3RyV0lIZGNiTEJhMnRZaEliOEJXWFlEcDNuaE1CY2pnZWJXNHdRV3ljTjl2UGdscGRLbmxWdzVfZCZfbmNfb2hjPWdTdU1pUTRBZGVBQVg4S3pjX18mX25jX29jPUFRbHBQQkpZUjAxeEE3anVwZE9zSmJGNGk5Y2d5a3hyMU9WMmZuWXJfaWhtUjA2TGlvT21ZQUxlYndPNHd0V3NobG8mX25jX2h0PXNjb250ZW50LmZtbmw3LTEuZm5hJm9oPWQ3Mjg1OTUwMDlkODJiZDQyZjM0MjkxMDg3NGEwMDQ0Jm9lPTYwMjM2NzRDXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiBcIjFyZW1cIiB9fT5cclxuICAgICAgICAgICAgICAgICAgQW5nIGktV2hlZWxzUEggYXkgaXNhbmcgc2FtYWhhbiBuYSBrdW1ha2F0YXdhbiBzYSBiYXdhdFxyXG4gICAgICAgICAgICAgICAgICB0YW8sIG1hdGFuZGEsIGJhdGEsIG1heSBuZ2lwaW4gbWFuIG8gd2FsYSwgbmEgZ3VzdG9uZyBpaGF0aWRcclxuICAgICAgICAgICAgICAgICAgYW5nIGthbmlsYW5nIG5hcmFyYW1kYW1hbiBwYXR1bmdvIHNhIG1nYSBtYWhhaGFsYWdhbmcgdGFvIHNhXHJcbiAgICAgICAgICAgICAgICAgIGthbmlsYW5nIGJ1aGF5LiBQZXJvIHB3ZWRlIG5hIGRpbiBrYWhpdCBoaW5kaSBtYWhhbGFnYS5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaWVudC1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBmb250U2l6ZTogXCIxcmVtXCIgfX0+UGF0cmljayBTZXJvPC9oND5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMXJlbVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIEZvdW5kZXIgYXQgaS1XaGVlbHMuc2hvcFxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Pd2xDYXJvdXNlbD5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXN0aW1vbmlhbHM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jbGFzcyBDYXRlZ29yeVByb2R1Y3RzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjYXRlZ29yeS1wcm9kdWN0cy1hcmVhIHBiLTYwIHB0LTQwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb2wtbGctNyBjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1jYXRlZ29yeS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8yNjAxLzMzNTIvZmlsZXMvZmxvcmlzdC1QSC1idW5kbGVkZWFsc18xNjAweC5qcGc/dj0xNTgwMjY1NzI2XCIgYWx0PVwiaW1hZ2VcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLWNhdGVnb3J5LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9jZG4uc2hvcGlmeS5jb20vcy9maWxlcy8xLzI2MDEvMzM1Mi9maWxlcy9mbG9yaXN0LVBILWJveGVkYmxvb21zXzFfMTYwMHguanBnP3Y9MTU4MDI2NTY3M1wiIGFsdD1cImltYWdlXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLWNhdGVnb3J5LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9jZG4uc2hvcGlmeS5jb20vcy9maWxlcy8xLzI2MDEvMzM1Mi9maWxlcy9mbG9yaXN0LVBILWNha2Vjb2xsZWN0aW9uXzE2MDB4LmpwZz92PTE1ODAyNjU3OTBcIiBhbHQ9XCJpbWFnZVwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtY2F0ZWdvcnktYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMjYwMS8zMzUyL2ZpbGVzL2Zsb3Jpc3QtUEgtcGV0aXRlYmlrZXNfMTYwMHguanBnP3Y9MTU4MDI2NTc2M1wiIGFsdD1cImltYWdlXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5UHJvZHVjdHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
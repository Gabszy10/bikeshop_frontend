webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Layout/MegaMenu.js":
/*!***************************************!*\
  !*** ./components/Layout/MegaMenu.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Modal_Cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Modal/Cart */ "./components/Modal/Cart.js");
/* harmony import */ var _store_actions_cartActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions/cartActions */ "./store/actions/cartActions.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "C:\\Users\\corde\\Desktop\\New folder\\bikeshop\\bikeshop_frontend\\components\\Layout\\MegaMenu.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var host = "http://127.0.0.1:8080";

function MegaMenu(props) {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      cartLength = _useState[0],
      setcartLength = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    display: false,
    searchForm: false,
    collapsed: true,
    checkCart: false
  }),
      state = _useState2[0],
      setstate = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      categories = _useState3[0],
      setcategories = _useState3[1];

  var handleCart = function handleCart() {
    setstate(function (prevState) {
      return {
        display: !prevState.display,
        collapsed: true
      };
    });
  };

  var handleSearchForm = function handleSearchForm() {
    setstate(function (prevState) {
      return {
        searchForm: !prevState.searchForm
      };
    });
  };

  var toggleNavbar = function toggleNavbar() {
    setstate({
      collapsed: !state.collapsed
    });
  };

  console.log(state);

  var fetchCategories = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("".concat(host, "/api/user/category/"));

            case 3:
              res = _context.sent;

              if (res) {
                setcategories(res.data.categories);
              }

              _context.next = 9;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function fetchCategories() {
      return _ref.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    fetchCategories();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var myProd = localStorage.getItem("_bik_EKL") ? localStorage.getItem("_bik_EKL") : [];
    var decryptedData = Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_6__["decryptData"])(myProd);
    setcartLength(decryptedData.length);
  }, [props.products]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var elementId = document.getElementById("navbar");
    document.addEventListener("scroll", function () {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }, []);
  var collapsed = state.collapsed;
  var classOne = collapsed ? "collapse navbar-collapse" : "collapse navbar-collapse show";
  var classTwo = collapsed ? "navbar-toggler navbar-toggler-right collapsed" : "navbar-toggler navbar-toggler-right";
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "navbar-area",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, __jsx("div", {
    id: "navbar",
    className: "comero-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, __jsx("nav", {
    className: "navbar navbar-expand-md navbar-light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: toggleNavbar,
    className: classTwo,
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarSupportedContent",
    "aria-controls": "navbarSupportedContent",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "navbar-toggler-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: __webpack_require__(/*! ../../images/logos/logo.png */ "./images/logos/logo.png"),
    alt: "",
    style: {
      width: "10rem"
    },
    className: "navbar_logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "view_cart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "notification",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "fas fa-shopping-bag",
    onClick: function onClick(e) {
      e.preventDefault();
      handleCart();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 19
    }
  }), __jsx("span", {
    className: "badge",
    onClick: function onClick(e) {
      e.preventDefault();
      handleCart();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 19
    }
  }, cartLength))), __jsx("div", {
    className: classOne,
    id: "navbarSupportedContent",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 15
    }
  }, __jsx("ul", {
    className: "navbar-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  }, categories.length ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, categories.map(function (category, i) {
    if (category.status) {
      if (category.sub_categories.length) {
        return __jsx("li", {
          key: i,
          className: "nav-item p-relative",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 31
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          key: i,
          href: "#",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 33
          }
        }, __jsx("a", {
          className: "nav-link",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 35
          }
        }, category.name, " ", __jsx("i", {
          className: "fas fa-chevron-down",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 37
          }
        }))), __jsx("ul", {
          className: "dropdown-menu",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 33
          }
        }, category.sub_categories.map(function (subCat, i) {
          return __jsx("li", {
            key: i,
            className: "nav-item",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 39
            }
          }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "/subcategory/".concat(subCat.slug),
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 41
            }
          }, __jsx("a", {
            className: "nav-link",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 43
            }
          }, subCat.name)));
        })));
      } else {
        return __jsx("li", {
          key: i,
          className: "nav-item megamenu",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 31
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/category/".concat(category.slug),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 33
          }
        }, __jsx("a", {
          className: "nav-link",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 35
          }
        }, category.name)));
      }
    }
  })) : null), __jsx("div", {
    className: "others-option",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "option-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 19
    }
  }, __jsx("i", {
    onClick: handleSearchForm,
    className: "search-btn fas fa-search",
    style: {
      display: state.searchForm ? "none" : "block"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 21
    }
  }), __jsx("i", {
    onClick: handleSearchForm,
    className: "close-btn fas fa-times ".concat(state.searchForm ? "active" : ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "search-overlay search-popup",
    style: {
      display: state.searchForm ? "block" : "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "search-box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 23
    }
  }, __jsx("form", {
    action: "/search",
    className: "search-form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 25
    }
  }, __jsx("input", {
    className: "search-input",
    name: "search",
    placeholder: "Search",
    type: "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 27
    }
  }), __jsx("button", {
    className: "search-button",
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 27
    }
  }, __jsx("i", {
    className: "fas fa-search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 29
    }
  })))))), __jsx("div", {
    className: "option-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 21
    }
  }, __jsx("a", {
    onClick: function onClick(e) {
      e.preventDefault();
      handleCart();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 23
    }
  }, "Cart(", cartLength, ")", " ", __jsx("i", {
    className: "fas fa-shopping-bag",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 25
    }
  })))))))))), state.display ? __jsx(_Modal_Cart__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handleCart,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 24
    }
  }) : "");
}

_s(MegaMenu, "uuV7lEOtzXm8YS1R/VnwVS509G8=");

_c = MegaMenu;

var mapStateToProps = function mapStateToProps(state) {
  return {
    products: state.addedItems
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(MegaMenu));

var _c;

$RefreshReg$(_c, "MegaMenu");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9NZWdhTWVudS5qcyJdLCJuYW1lcyI6WyJob3N0IiwicHJvY2VzcyIsIk1lZ2FNZW51IiwicHJvcHMiLCJ1c2VTdGF0ZSIsImNhcnRMZW5ndGgiLCJzZXRjYXJ0TGVuZ3RoIiwiZGlzcGxheSIsInNlYXJjaEZvcm0iLCJjb2xsYXBzZWQiLCJjaGVja0NhcnQiLCJzdGF0ZSIsInNldHN0YXRlIiwiY2F0ZWdvcmllcyIsInNldGNhdGVnb3JpZXMiLCJoYW5kbGVDYXJ0IiwicHJldlN0YXRlIiwiaGFuZGxlU2VhcmNoRm9ybSIsInRvZ2dsZU5hdmJhciIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaENhdGVnb3JpZXMiLCJheGlvcyIsImdldCIsInJlcyIsImRhdGEiLCJ1c2VFZmZlY3QiLCJteVByb2QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGVjcnlwdGVkRGF0YSIsImRlY3J5cHREYXRhIiwibGVuZ3RoIiwicHJvZHVjdHMiLCJlbGVtZW50SWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsInNjcm9sbFkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJzY3JvbGxUbyIsImNsYXNzT25lIiwiY2xhc3NUd28iLCJyZXF1aXJlIiwid2lkdGgiLCJlIiwicHJldmVudERlZmF1bHQiLCJtYXAiLCJjYXRlZ29yeSIsImkiLCJzdGF0dXMiLCJzdWJfY2F0ZWdvcmllcyIsIm5hbWUiLCJzdWJDYXQiLCJzbHVnIiwibWFwU3RhdGVUb1Byb3BzIiwiYWRkZWRJdGVtcyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLElBQUksR0FBR0MsdUJBQVg7O0FBRUEsU0FBU0MsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFBQTs7QUFB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TWVDLDBIQUFPLENBQUNGLGVBQUQsQ0FBUCxDQUF5QnhELFFBQXpCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmNiZTE3NjlkZWFhZTA5M2E2YTIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IENhcnQgZnJvbSBcIi4uL01vZGFsL0NhcnRcIjtcclxuaW1wb3J0IHsgZGVjcnlwdERhdGEgfSBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9jYXJ0QWN0aW9uc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5sZXQgaG9zdCA9IHByb2Nlc3MuZW52LkFQSV9VUkw7XHJcblxyXG5mdW5jdGlvbiBNZWdhTWVudShwcm9wcykge1xyXG4gIGNvbnN0IFtjYXJ0TGVuZ3RoLCBzZXRjYXJ0TGVuZ3RoXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBbc3RhdGUsIHNldHN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIGRpc3BsYXk6IGZhbHNlLFxyXG4gICAgc2VhcmNoRm9ybTogZmFsc2UsXHJcbiAgICBjb2xsYXBzZWQ6IHRydWUsXHJcbiAgICBjaGVja0NhcnQ6IGZhbHNlLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Y2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhcnQgPSAoKSA9PiB7XHJcbiAgICBzZXRzdGF0ZSgocHJldlN0YXRlKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgZGlzcGxheTogIXByZXZTdGF0ZS5kaXNwbGF5LFxyXG4gICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaEZvcm0gPSAoKSA9PiB7XHJcbiAgICBzZXRzdGF0ZSgocHJldlN0YXRlKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc2VhcmNoRm9ybTogIXByZXZTdGF0ZS5zZWFyY2hGb3JtLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlTmF2YmFyID0gKCkgPT4ge1xyXG4gICAgc2V0c3RhdGUoe1xyXG4gICAgICBjb2xsYXBzZWQ6ICFzdGF0ZS5jb2xsYXBzZWQsXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGNvbnNvbGUubG9nKHN0YXRlKTtcclxuICBjb25zdCBmZXRjaENhdGVnb3JpZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2hvc3R9L2FwaS91c2VyL2NhdGVnb3J5L2ApO1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgc2V0Y2F0ZWdvcmllcyhyZXMuZGF0YS5jYXRlZ29yaWVzKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHt9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoQ2F0ZWdvcmllcygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBteVByb2QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9jZXNzLmVudi5DQVJUX0NPT0tJRSlcclxuICAgICAgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9jZXNzLmVudi5DQVJUX0NPT0tJRSlcclxuICAgICAgOiBbXTtcclxuICAgIGxldCBkZWNyeXB0ZWREYXRhID0gZGVjcnlwdERhdGEobXlQcm9kKTtcclxuICAgIHNldGNhcnRMZW5ndGgoZGVjcnlwdGVkRGF0YS5sZW5ndGgpO1xyXG4gIH0sIFtwcm9wcy5wcm9kdWN0c10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGVsZW1lbnRJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyXCIpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDE3MCkge1xyXG4gICAgICAgIGVsZW1lbnRJZC5jbGFzc0xpc3QuYWRkKFwiaXMtc3RpY2t5XCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnRJZC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtc3RpY2t5XCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHsgY29sbGFwc2VkIH0gPSBzdGF0ZTtcclxuICBjb25zdCBjbGFzc09uZSA9IGNvbGxhcHNlZFxyXG4gICAgPyBcImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiXHJcbiAgICA6IFwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlIHNob3dcIjtcclxuICBjb25zdCBjbGFzc1R3byA9IGNvbGxhcHNlZFxyXG4gICAgPyBcIm5hdmJhci10b2dnbGVyIG5hdmJhci10b2dnbGVyLXJpZ2h0IGNvbGxhcHNlZFwiXHJcbiAgICA6IFwibmF2YmFyLXRvZ2dsZXIgbmF2YmFyLXRvZ2dsZXItcmlnaHRcIjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItYXJlYVwiPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJuYXZiYXJcIiBjbGFzc05hbWU9XCJjb21lcm8tbmF2XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLW1kIG5hdmJhci1saWdodFwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZU5hdmJhcn1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NUd299XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjbmF2YmFyU3VwcG9ydGVkQ29udGVudFwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvbG9nb3MvbG9nby5wbmdcIil9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwcmVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyX2xvZ29cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlld19jYXJ0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhcyBmYS1zaG9wcGluZy1iYWdcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDYXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiYWRnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2NhcnRMZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NPbmV9IGlkPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXZcIj5cclxuICAgICAgICAgICAgICAgICAgey8qe2NhdGVnb3JpZXMubGVuZ3RoID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeS5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnkuc3ViX2NhdGVnb3JpZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfSBjbGFzc05hbWU9XCJuYXYtaXRlbSBwLXJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsga2V5PXtpfSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5Lm5hbWV9e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1kb3duXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5zdWJfY2F0ZWdvcmllcy5tYXAoKHN1YkNhdCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9IGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3N1YmNhdGVnb3J5LyR7c3ViQ2F0LnNsdWd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ViQ2F0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9IGNsYXNzTmFtZT1cIm5hdi1pdGVtIG1lZ2FtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9jYXRlZ29yeS8ke2NhdGVnb3J5LnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPntjYXRlZ29yeS5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICkgOiBudWxsfSAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtjYXRlZ29yaWVzLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnkuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5LnN1Yl9jYXRlZ29yaWVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0gY2xhc3NOYW1lPVwibmF2LWl0ZW0gcC1yZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGtleT17aX0gaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5uYW1lfXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tZG93blwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkuc3ViX2NhdGVnb3JpZXMubWFwKChzdWJDYXQsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9zdWJjYXRlZ29yeS8ke3N1YkNhdC5zbHVnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1YkNhdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfSBjbGFzc05hbWU9XCJuYXYtaXRlbSBtZWdhbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvY2F0ZWdvcnkvJHtjYXRlZ29yeS5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj57Y2F0ZWdvcnkubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbWVnYW1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5Sb2FkIGJpa2U8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG1lZ2FtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+TW91bnRhaW4gYmlrZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbWVnYW1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5GaXhpZSBiaWtlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBtZWdhbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkUtYmlrZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgey8qIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBwLXJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJ1ZGdldCA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1kb3duXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2J1ZGdldD9mPTAmdD0xNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5CRUxPVyDigrExLDUwMDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9idWRnZXQ/Zj0xNTAwJnQ9MzAwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+4oKxMSw1MDAgLSDigrEzLDAwMDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9idWRnZXQ/Zj0zMDAwJnQ9NDUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+4oKxMywwMDAgLSDigrE0LDUwMDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9idWRnZXQ/Zj00NTAwJnQ9MTAwMDAwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+4oKxNCw1MDAgQU5EIEFCT1ZFPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+ICovfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm90aGVycy1vcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb24taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZWFyY2hGb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWJ0biBmYXMgZmEtc2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHN0YXRlLnNlYXJjaEZvcm0gPyBcIm5vbmVcIiA6IFwiYmxvY2tcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaEZvcm19XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BjbG9zZS1idG4gZmFzIGZhLXRpbWVzICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnNlYXJjaEZvcm0gPyBcImFjdGl2ZVwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLW92ZXJsYXkgc2VhcmNoLXBvcHVwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHN0YXRlLnNlYXJjaEZvcm0gPyBcImJsb2NrXCIgOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIi9zZWFyY2hcIiBjbGFzc05hbWU9XCJzZWFyY2gtZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzZWFyY2gtYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNlYXJjaFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb24taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDYXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENhcnQoe2NhcnRMZW5ndGh9KXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNob3BwaW5nLWJhZ1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7c3RhdGUuZGlzcGxheSA/IDxDYXJ0IG9uQ2xpY2s9e2hhbmRsZUNhcnR9IC8+IDogXCJcIn1cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb2R1Y3RzOiBzdGF0ZS5hZGRlZEl0ZW1zLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTWVnYU1lbnUpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
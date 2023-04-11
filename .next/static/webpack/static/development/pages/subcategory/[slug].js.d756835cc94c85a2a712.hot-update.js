webpackHotUpdate("static\\development\\pages\\subcategory\\[slug].js",{

/***/ "./components/Common/CategoryProducts.js":
/*!***********************************************!*\
  !*** ./components/Common/CategoryProducts.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_cartActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions/cartActions */ "./store/actions/cartActions.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-tooltip */ "./node_modules/react-tooltip/dist/index.es.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var _helpers_function__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/function */ "./helpers/function.js");
var _jsxFileName = "C:\\Users\\corde\\Desktop\\New folder\\bikeshop\\bikeshop_frontend\\components\\Common\\CategoryProducts.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var host = "http://127.0.0.1:8080";

function CategoryProducts(props) {
  var _this = this;

  var handleAddToCart = function handleAddToCart(product) {
    props.addToCart(product);
    react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].success("Added to the cart", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(react_tooltip__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_5__["ToastContainer"], {
    transition: react_toastify__WEBPACK_IMPORTED_MODULE_5__["Slide"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "related-products-area",
    style: {
      paddingTop: "0px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "section-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "dot",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }), " ", props.products ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, " ", props.label != "Budget" ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, " ", "Result for ", props.label, ":", " ", props.products[0]["categories"] ? props.products[0]["categories"][0]["name"] : props.products[0]["sub_categories"][0]["name"], " ") : "Budget Products") : null)), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, props.products ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, " ", props.products.map(function (data, idx) {
    return __jsx("div", {
      className: "col-lg-3 col-sm-6 col-6",
      key: idx,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "single-product-box",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "product-image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 25
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/product/".concat(data.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 27
      }
    }, __jsx("img", {
      style: {
        cursor: "pointer"
      },
      src: "".concat(host, "/products/").concat(data.product_images[0]["file_name"]),
      alt: "image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 29
      }
    }))), __jsx("div", {
      className: "product-content",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 25
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 27
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/product/".concat(data.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 29
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 31
      }
    }, data.name))), __jsx("div", {
      className: "product-price",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "new-price slashed",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 29
      }
    }, "\u20B1", Object(_helpers_function__WEBPACK_IMPORTED_MODULE_6__["formatNumber"])(data.regular_price))), __jsx("div", {
      className: "product-price",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "new-price",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 29
      }
    }, "\u20B1", Object(_helpers_function__WEBPACK_IMPORTED_MODULE_6__["formatNumber"])(data.discount_price))), data.campaign_price ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "product-price",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 31
      }
    }, __jsx("span", {
      className: "new-price",
      style: {
        fontSize: "0.9rem",
        color: "#ff5558"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 33
      }
    }, "Valentine's Price:")), __jsx("div", {
      className: "product-price",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 31
      }
    }, __jsx("span", {
      className: "new-price",
      style: {
        fontSize: "1rem",
        color: "#ff5558",
        fontWeight: "bold"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 33
      }
    }, "\u20B1", Object(_helpers_function__WEBPACK_IMPORTED_MODULE_6__["formatNumber"])(data.campaign_price)))) : null, __jsx("div", {
      className: "rating",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 27
      }
    }, __jsx("i", {
      className: "fas fa-star",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 29
      }
    }), __jsx("i", {
      className: "fas fa-star",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 29
      }
    }), __jsx("i", {
      className: "fas fa-star",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 29
      }
    }), __jsx("i", {
      className: "fas fa-star",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 29
      }
    }), __jsx("i", {
      className: "fas fa-star",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 29
      }
    })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/product/".concat(data.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 27
      }
    }, __jsx("a", {
      className: "btn btn-light",
      onClick: function onClick(e) {// e.preventDefault();
        // handleAddToCart(data);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 29
      }
    }, "Add to Cart")))));
  }), " ") : __jsx("h3", {
    className: "text-center m-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 17
    }
  }, "No products found"))))));
}

_c = CategoryProducts;

var mapStateToProps = function mapStateToProps(state) {
  return {// products: state.products,
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addToCart: function addToCart(id) {
      dispatch(Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_2__["addToCart"])(id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(CategoryProducts));

var _c;

$RefreshReg$(_c, "CategoryProducts");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbW1vbi9DYXRlZ29yeVByb2R1Y3RzLmpzIl0sIm5hbWVzIjpbImhvc3QiLCJwcm9jZXNzIiwiQ2F0ZWdvcnlQcm9kdWN0cyIsInByb3BzIiwiaGFuZGxlQWRkVG9DYXJ0IiwicHJvZHVjdCIsImFkZFRvQ2FydCIsInRvYXN0Iiwic3VjY2VzcyIsInBvc2l0aW9uIiwiYXV0b0Nsb3NlIiwiaGlkZVByb2dyZXNzQmFyIiwiY2xvc2VPbkNsaWNrIiwicGF1c2VPbkhvdmVyIiwiZHJhZ2dhYmxlIiwiU2xpZGUiLCJwYWRkaW5nVG9wIiwicHJvZHVjdHMiLCJsYWJlbCIsIm1hcCIsImRhdGEiLCJpZHgiLCJzbHVnIiwiY3Vyc29yIiwicHJvZHVjdF9pbWFnZXMiLCJuYW1lIiwiZm9ybWF0TnVtYmVyIiwicmVndWxhcl9wcmljZSIsImRpc2NvdW50X3ByaWNlIiwiY2FtcGFpZ25fcHJpY2UiLCJmb250U2l6ZSIsImNvbG9yIiwiZm9udFdlaWdodCIsImUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiaWQiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxJQUFJLEdBQUdDLHVCQUFYOztBQUVBLFNBQVNDLGdCQUFULENBQTBCQyxLQUExQixFQUFpQztBQUFBOztBQUMvQixNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLE9BQUQsRUFBYTtBQUNuQ0YsU0FBSyxDQUFDRyxTQUFOLENBQWdCRCxPQUFoQjtBQUVBRSx3REFBSyxDQUFDQyxPQUFOLENBQWMsbUJBQWQsRUFBbUM7QUFDakNDLGNBQVEsRUFBRSxhQUR1QjtBQUVqQ0MsZUFBUyxFQUFFLElBRnNCO0FBR2pDQyxxQkFBZSxFQUFFLEtBSGdCO0FBSWpDQyxrQkFBWSxFQUFF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R0FBUDtBQUdELENBSkQ7O0FBTUEsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQWM7QUFDdkMsU0FBTztBQUNML0IsYUFBUyxFQUFFLG1CQUFDZ0MsRUFBRCxFQUFRO0FBQ2pCRCxjQUFRLENBQUMvQiw0RUFBUyxDQUFDZ0MsRUFBRCxDQUFWLENBQVI7QUFDRDtBQUhJLEdBQVA7QUFLRCxDQU5EOztBQVFlQywwSEFBTyxDQUFDTCxlQUFELEVBQWtCRSxrQkFBbEIsQ0FBUCxDQUE2Q2xDLGdCQUE3QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxzdWJjYXRlZ29yeVxcW3NsdWddLmpzLmQ3NTY4MzVjYzk0Yzg1YTJhNzEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgYWRkVG9DYXJ0IH0gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvY2FydEFjdGlvbnNcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3RUb29sdGlwIGZyb20gXCJyZWFjdC10b29sdGlwXCI7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCwgU2xpZGUgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuaW1wb3J0IHsgZm9ybWF0TnVtYmVyIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvZnVuY3Rpb25cIjtcclxuXHJcbmxldCBob3N0ID0gcHJvY2Vzcy5lbnYuQVBJX1VSTDtcclxuXHJcbmZ1bmN0aW9uIENhdGVnb3J5UHJvZHVjdHMocHJvcHMpIHtcclxuICBjb25zdCBoYW5kbGVBZGRUb0NhcnQgPSAocHJvZHVjdCkgPT4ge1xyXG4gICAgcHJvcHMuYWRkVG9DYXJ0KHByb2R1Y3QpO1xyXG5cclxuICAgIHRvYXN0LnN1Y2Nlc3MoXCJBZGRlZCB0byB0aGUgY2FydFwiLCB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImJvdHRvbS1sZWZ0XCIsXHJcbiAgICAgIGF1dG9DbG9zZTogNTAwMCxcclxuICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPFJlYWN0VG9vbHRpcCAvPlxyXG4gICAgICA8VG9hc3RDb250YWluZXIgdHJhbnNpdGlvbj17U2xpZGV9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRlZC1wcm9kdWN0cy1hcmVhXCIgc3R5bGU9e3sgcGFkZGluZ1RvcDogXCIwcHhcIiB9fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlXCI+XHJcbiAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+e1wiIFwifVxyXG4gICAgICAgICAgICAgIHtwcm9wcy5wcm9kdWN0cyA/IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAge3Byb3BzLmxhYmVsICE9IFwiQnVkZ2V0XCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIFJlc3VsdCBmb3Ige3Byb3BzLmxhYmVsfTp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMucHJvZHVjdHNbMF1bXCJjYXRlZ29yaWVzXCJdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gcHJvcHMucHJvZHVjdHNbMF1bXCJjYXRlZ29yaWVzXCJdWzBdW1wibmFtZVwiXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHByb3BzLnByb2R1Y3RzWzBdW1wic3ViX2NhdGVnb3JpZXNcIl1bMF1bXCJuYW1lXCJdfXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICBcIkJ1ZGdldCBQcm9kdWN0c1wiXHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICB7cHJvcHMucHJvZHVjdHMgPyAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIHtwcm9wcy5wcm9kdWN0cy5tYXAoKGRhdGEsIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLXNtLTYgY29sLTZcIiBrZXk9e2lkeH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1wcm9kdWN0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3QvJHtkYXRhLnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtob3N0fS9wcm9kdWN0cy8ke2RhdGEucHJvZHVjdF9pbWFnZXNbMF1bXCJmaWxlX25hbWVcIl19YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17ZGF0YS5pbWFnZUhvdmVyfSBhbHQ9XCJpbWFnZVwiIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3QvJHtkYXRhLnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntkYXRhLm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmV3LXByaWNlIHNsYXNoZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oKxe2Zvcm1hdE51bWJlcihkYXRhLnJlZ3VsYXJfcHJpY2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5ldy1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICDigrF7Zm9ybWF0TnVtYmVyKGRhdGEuZGlzY291bnRfcHJpY2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5jYW1wYWlnbl9wcmljZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuZXctcHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMC45cmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZjU1NThcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsZW50aW5lJ3MgUHJpY2U6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5ldy1wcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxcmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZjU1NThcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKCsXtmb3JtYXROdW1iZXIoZGF0YS5jYW1wYWlnbl9wcmljZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXN0YXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc3RhclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zdGFyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXN0YXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc3RhclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0LyR7ZGF0YS5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhhbmRsZUFkZFRvQ2FydChkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIHRvIENhcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkpfXtcIiBcIn1cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbS1hdXRvXCI+Tm8gcHJvZHVjdHMgZm91bmQ8L2gzPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgLy8gcHJvZHVjdHM6IHN0YXRlLnByb2R1Y3RzLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgYWRkVG9DYXJ0OiAoaWQpID0+IHtcclxuICAgICAgZGlzcGF0Y2goYWRkVG9DYXJ0KGlkKSk7XHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDYXRlZ29yeVByb2R1Y3RzKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
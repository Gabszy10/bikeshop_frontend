webpackHotUpdate("static\\development\\pages\\thankyou\\[order_name].js",{

/***/ "./pages/thankyou/[order_name].js":
/*!****************************************!*\
  !*** ./pages/thankyou/[order_name].js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout/Navbar */ "./components/Layout/Navbar.js");
/* harmony import */ var _components_shop_style_one_Facility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/shop-style-one/Facility */ "./components/shop-style-one/Facility.js");
/* harmony import */ var _components_Common_Subscribe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Common/Subscribe */ "./components/Common/Subscribe.js");
/* harmony import */ var _components_Common_Partner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Common/Partner */ "./components/Common/Partner.js");
/* harmony import */ var _components_Common_InstagramPhoto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Common/InstagramPhoto */ "./components/Common/InstagramPhoto.js");
/* harmony import */ var _components_Layout_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Layout/Footer */ "./components/Layout/Footer.js");
/* harmony import */ var _store_actions_infoActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/actions/infoActions */ "./store/actions/infoActions.js");
/* harmony import */ var _store_actions_orderActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/actions/orderActions */ "./store/actions/orderActions.js");
/* harmony import */ var _helpers_function__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../helpers/function */ "./helpers/function.js");
var _jsxFileName = "C:\\Users\\corde\\Desktop\\New folder\\bikeshop\\bikeshop_frontend\\pages\\thankyou\\[order_name].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var host = "http://127.0.0.1:8080";

function Thankyou(props) {
  var _this = this;

  var order = props.order;
  console.log(order);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "boxed-layout-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "boxed-layout-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx(_components_Layout_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "thank-you-area m-auto",
    style: {
      paddingTop: "20px",
      paddingBottom: "20px",
      maxWidth: "650px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }, "Thank You!"), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }, "Your order has been processed."), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "order-summary m-auto",
    style: {
      maxWidth: "400px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "d-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 19
    }
  }, "Order Name:"), __jsx("p", {
    className: "ml-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 19
    }
  }, order["order_name"])), __jsx("div", {
    className: "d-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 19
    }
  }, "Contact Email:"), __jsx("p", {
    className: "ml-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 19
    }
  }, order["order_detail"]["billing_email"])), __jsx("div", {
    className: "d-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 19
    }
  }, "Customer:"), __jsx("p", {
    className: "ml-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 19
    }
  }, " ", order["order_detail"]["billing_first_name"], " ", order["order_detail"]["billing_last_name"])), __jsx("div", {
    className: "d-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 19
    }
  }, "Payment:"), __jsx("p", {
    className: "ml-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 19
    }
  }, order["payment_method"])), __jsx("div", {
    className: "d-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 19
    }
  }, "Instruction:"), __jsx("p", {
    className: "ml-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 19
    }
  }, " ", order["order_detail"]["delivery_instructions"])), __jsx("div", {
    className: "d-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 19
    }
  }, "Message:"), __jsx("p", {
    className: "ml-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 19
    }
  }, " ", order["order_detail"]["message"])), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "d-flex mb-3 m-auto",
    style: {
      maxWidth: "500px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "shipping-summary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 19
    }
  }, "Shipping Info"), __jsx("h6", {
    className: "mb-minus-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 19
    }
  }, order["order_detail"]["shipping_first_name"], " ", order["order_detail"]["shipping_last_name"]), __jsx("p", {
    className: "mb-minus-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 19
    }
  }, order["order_detail"]["shipping_phone"]), __jsx("p", {
    className: "mb-minus-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 19
    }
  }, order["order_detail"]["shipping_address"]), __jsx("p", {
    className: "mb-minus-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 19
    }
  }, order["order_detail"]["shipping_province"], ", Philippines"), __jsx("p", {
    className: "mb-minus-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 19
    }
  }, order["order_detail"]["shipping_zip"])), __jsx("p", {
    className: "ml-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  }, " ", __jsx("div", {
    className: "shipping-summary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 19
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 21
    }
  }, "Billing Info"), __jsx("h6", {
    className: "mb-minus-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 21
    }
  }, order["order_detail"]["billing_first_name"], " ", order["order_detail"]["billing_last_name"]), __jsx("p", {
    className: "mb-minus-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 21
    }
  }, order["order_detail"]["billing_phone"])))), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "order-summary m-auto",
    style: {
      maxWidth: "500px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "d-flex mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 17
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 19
    }
  }, "Order Summary")), order["order_items"].map(function (item, i) {
    return __jsx("div", {
      className: "d-flex mb-2",
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "d-flex",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: "".concat(host, "/products/").concat(item.product.product_images[0]["file_name"]),
      alt: "",
      height: "110",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 25
      }
    }), __jsx("div", {
      className: "align-self-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 25
      }
    }, __jsx("p", {
      style: {
        marginBottom: "-5px"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 27
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 29
      }
    }, item["product"].name)), __jsx("p", {
      style: {
        marginBottom: "-5px"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 27
      }
    }, "Quantity: ", item.quantity), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 27
      }
    }, "Price: P", Object(_helpers_function__WEBPACK_IMPORTED_MODULE_10__["formatNumber"])(item.item_price)))), __jsx("h6", {
      className: "ml-auto align-self-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 23
      }
    }, "P", Object(_helpers_function__WEBPACK_IMPORTED_MODULE_10__["formatNumber"])(item.total)));
  })), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "order-summary ml-auto",
    style: {
      maxWidth: "400px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "d-flex justify-content-around",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 19
    }
  }, "Sub total"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 19
    }
  }, "P", Object(_helpers_function__WEBPACK_IMPORTED_MODULE_10__["formatNumber"])(order["sub_total"]))), order["charge_fee"] ? __jsx("div", {
    className: "d-flex justify-content-around",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 19
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 21
    }
  }, "Charge Fee"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 21
    }
  }, "P", Object(_helpers_function__WEBPACK_IMPORTED_MODULE_10__["formatNumber"])(order["charge_fee"]))) : null, __jsx("div", {
    className: "d-flex justify-content-around",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 19
    }
  }, "Shipping"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 19
    }
  }, "P", Object(_helpers_function__WEBPACK_IMPORTED_MODULE_10__["formatNumber"])(order["shipping_fee"]))), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "d-flex justify-content-around",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 17
    }
  }, __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 19
    }
  }, "Grand Total"), __jsx("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 19
    }
  }, "P", Object(_helpers_function__WEBPACK_IMPORTED_MODULE_10__["formatNumber"])(order["total"])))), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 15
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 15
    }
  }, "An email confirmation has been sent to you."), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 15
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 15
    }
  }, " ", "If you need further assistance, feel free to Contact Us."), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 15
    }
  }), "Thank you for choosing i-Wheels.shop!")), __jsx(_components_shop_style_one_Facility__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 11
    }
  }), __jsx(_components_Layout_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 11
    }
  }))));
}

_c = Thankyou;

Thankyou.getInitialProps = function (_ref) {
  var query = _ref.query;
  // console.log(decryptString(query.order_name));
  return Object(_store_actions_orderActions__WEBPACK_IMPORTED_MODULE_9__["fetchOrder"])(Object(_store_actions_infoActions__WEBPACK_IMPORTED_MODULE_8__["decryptString"])(query.order_name)).then(function (data) {
    if (data.error) {} else {
      console.log(data);
      return {
        order: data["orderByName"],
        query: query
      };
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Thankyou);

var _c;

$RefreshReg$(_c, "Thankyou");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90aGFua3lvdS9bb3JkZXJfbmFtZV0uanMiXSwibmFtZXMiOlsiaG9zdCIsInByb2Nlc3MiLCJUaGFua3lvdSIsInByb3BzIiwib3JkZXIiLCJjb25zb2xlIiwibG9nIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJtYXhXaWR0aCIsIm1hcCIsIml0ZW0iLCJpIiwicHJvZHVjdCIsInByb2R1Y3RfaW1hZ2VzIiwibWFyZ2luQm90dG9tIiwibmFtZSIsInF1YW50aXR5IiwiZm9ybWF0TnVtYmVyIiwiaXRlbV9wcmljZSIsInRvdGFsIiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiLCJmZXRjaE9yZGVyIiwiZGVjcnlwdFN0cmluZyIsIm9yZGVyX25hbWUiLCJ0aGVuIiwiZGF0YSIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxJQUFJLEdBQUdDLHVCQUFYOztBQUVBLFNBQVNDLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQUE7O0FBQUEsTUFDakJDLEtBRGlCLEdBQ1BELEtBRE8sQ0FDakJDLEtBRGlCO0FBRXZCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNBLFNBQ0UsTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxzQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFHRTtBQUNFLGFBQVMsRUFBQyx1QkFEWjtBQUVFLFNB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QXhIRixFQWtKRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbEpGLEVBbUpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbURBbkpGLEVBb0pFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFwSkYsRUFxSkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLEdBREgsNkRBckpGLEVBeUpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF6SkYsMENBUkYsQ0FIRixFQXlLRSxNQUFDLDJFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF6S0YsRUE2S0UsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBN0tGLENBREYsQ0FERixDQURGO0FBcUxEOztLQXhMUUYsUTs7QUEwTFRBLFFBQVEsQ0FBQ21CLGVBQVQsR0FBMkIsZ0JBQWU7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDeEM7QUFDQSxTQUFPQyw4RUFBVSxDQUFDQyxnRkFBYSxDQUFDRixLQUFLLENBQUNHLFVBQVAsQ0FBZCxDQUFWLENBQTRDQyxJQUE1QyxDQUFpRCxVQUFDQyxJQUFELEVBQVU7QUFDaEUsUUFBSUEsSUFBSSxDQUFDQyxLQUFULEVBQWdCLENBQ2YsQ0FERCxNQUNPO0FBQ0x2QixhQUFPLENBQUNDLEdBQVIsQ0FBWXFCLElBQVo7QUFDQSxhQUFPO0FBQUV2QixhQUFLLEVBQUV1QixJQUFJLENBQUMsYUFBRCxDQUFiO0FBQThCTCxhQUFLLEVBQUxBO0FBQTlCLE9BQVA7QUFDRDtBQUNGLEdBTk0sQ0FBUDtBQU9ELENBVEQ7O0FBV2VwQix1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcdGhhbmt5b3VcXFtvcmRlcl9uYW1lXS5qcy44OWIwMWJkMmM3N2Y1ZGMwMjczMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0L05hdmJhclwiO1xyXG5pbXBvcnQgRmFjaWxpdHkgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hvcC1zdHlsZS1vbmUvRmFjaWxpdHlcIjtcclxuaW1wb3J0IFN1YnNjcmliZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Db21tb24vU3Vic2NyaWJlXCI7XHJcbmltcG9ydCBQYXJ0bmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NvbW1vbi9QYXJ0bmVyXCI7XHJcbmltcG9ydCBJbnN0YWdyYW1QaG90byBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Db21tb24vSW5zdGFncmFtUGhvdG9cIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXQvRm9vdGVyXCI7XHJcbmltcG9ydCB7IGRlY3J5cHRTdHJpbmcgfSBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9pbmZvQWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBmZXRjaE9yZGVyIH0gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvb3JkZXJBY3Rpb25zXCI7XHJcbmltcG9ydCB7IGZvcm1hdE51bWJlciB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2Z1bmN0aW9uXCI7XHJcblxyXG5sZXQgaG9zdCA9IHByb2Nlc3MuZW52LkFQSV9VUkw7XHJcblxyXG5mdW5jdGlvbiBUaGFua3lvdShwcm9wcykge1xyXG4gIGxldCB7IG9yZGVyIH0gPSBwcm9wcztcclxuICBjb25zb2xlLmxvZyhvcmRlcik7XHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hlZC1sYXlvdXQtd3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94ZWQtbGF5b3V0LWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxOYXZiYXIgLz5cclxuXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRoYW5rLXlvdS1hcmVhIG0tYXV0b1wiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgcGFkZGluZ1RvcDogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiNjUwcHhcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8aDM+VGhhbmsgWW91ITwvaDM+XHJcbiAgICAgICAgICAgICAgPGg0PllvdXIgb3JkZXIgaGFzIGJlZW4gcHJvY2Vzc2VkLjwvaDQ+XHJcbiAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3JkZXItc3VtbWFyeSBtLWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IFwiNDAwcHhcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPk9yZGVyIE5hbWU6PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC1hdXRvXCI+e29yZGVyW1wib3JkZXJfbmFtZVwiXX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cD5EZWxpdmVyeSBEYXRlOjwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtYXV0b1wiPntvcmRlcltcImRlbGl2ZXJ5X2RhdGVcIl19PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cD5EZWxpdmVyeSBUaW1lOjwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtYXV0b1wiPntvcmRlcltcImRlbGl2ZXJ5X3RpbWVcIl19PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgPHA+Q29udGFjdCBFbWFpbDo8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICB7b3JkZXJbXCJvcmRlcl9kZXRhaWxcIl1bXCJiaWxsaW5nX2VtYWlsXCJdfVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPkN1c3RvbWVyOjwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICB7b3JkZXJbXCJvcmRlcl9kZXRhaWxcIl1bXCJiaWxsaW5nX2ZpcnN0X25hbWVcIl19e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIHtvcmRlcltcIm9yZGVyX2RldGFpbFwiXVtcImJpbGxpbmdfbGFzdF9uYW1lXCJdfVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlBheW1lbnQ6PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC1hdXRvXCI+e29yZGVyW1wicGF5bWVudF9tZXRob2RcIl19PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cD5JbnN0cnVjdGlvbjo8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAge29yZGVyW1wib3JkZXJfZGV0YWlsXCJdW1wiZGVsaXZlcnlfaW5zdHJ1Y3Rpb25zXCJdfVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPk1lc3NhZ2U6PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC1hdXRvXCI+IHtvcmRlcltcIm9yZGVyX2RldGFpbFwiXVtcIm1lc3NhZ2VcIl19PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBtYi0zIG0tYXV0b1wiIHN0eWxlPXt7IG1heFdpZHRoOiBcIjUwMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoaXBwaW5nLXN1bW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgPGg1PlNoaXBwaW5nIEluZm88L2g1PlxyXG4gICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibWItbWludXMtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7b3JkZXJbXCJvcmRlcl9kZXRhaWxcIl1bXCJzaGlwcGluZ19maXJzdF9uYW1lXCJdfXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICB7b3JkZXJbXCJvcmRlcl9kZXRhaWxcIl1bXCJzaGlwcGluZ19sYXN0X25hbWVcIl19XHJcbiAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1pbnVzLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge29yZGVyW1wib3JkZXJfZGV0YWlsXCJdW1wic2hpcHBpbmdfcGhvbmVcIl19XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItbWludXMtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7b3JkZXJbXCJvcmRlcl9kZXRhaWxcIl1bXCJzaGlwcGluZ19hZGRyZXNzXCJdfVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1pbnVzLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge29yZGVyW1wib3JkZXJfZGV0YWlsXCJdW1wic2hpcHBpbmdfcHJvdmluY2VcIl19LCBQaGlsaXBwaW5lc1xyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1pbnVzLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge29yZGVyW1wib3JkZXJfZGV0YWlsXCJdW1wic2hpcHBpbmdfemlwXCJdfVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoaXBwaW5nLXN1bW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDU+QmlsbGluZyBJbmZvPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibWItbWludXMtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtvcmRlcltcIm9yZGVyX2RldGFpbFwiXVtcImJpbGxpbmdfZmlyc3RfbmFtZVwiXX17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICB7b3JkZXJbXCJvcmRlcl9kZXRhaWxcIl1bXCJiaWxsaW5nX2xhc3RfbmFtZVwiXX1cclxuICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLW1pbnVzLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7b3JkZXJbXCJvcmRlcl9kZXRhaWxcIl1bXCJiaWxsaW5nX3Bob25lXCJdfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3JkZXItc3VtbWFyeSBtLWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IFwiNTAwcHhcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgPGg1Pk9yZGVyIFN1bW1hcnk8L2g1PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7b3JkZXJbXCJvcmRlcl9pdGVtc1wiXS5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBtYi0yXCIga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake2hvc3R9L3Byb2R1Y3RzLyR7aXRlbS5wcm9kdWN0LnByb2R1Y3RfaW1hZ2VzWzBdW1wiZmlsZV9uYW1lXCJdfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsaWduLXNlbGYtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIi01cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPntpdGVtW1wicHJvZHVjdFwiXS5uYW1lfTwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIi01cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFF1YW50aXR5OiB7aXRlbS5xdWFudGl0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UHJpY2U6IFB7Zm9ybWF0TnVtYmVyKGl0ZW0uaXRlbV9wcmljZSl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm1sLWF1dG8gYWxpZ24tc2VsZi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUHtmb3JtYXROdW1iZXIoaXRlbS50b3RhbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3JkZXItc3VtbWFyeSBtbC1hdXRvXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiBcIjQwMHB4XCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlN1YiB0b3RhbDwvcD5cclxuICAgICAgICAgICAgICAgICAgPHA+UHtmb3JtYXROdW1iZXIob3JkZXJbXCJzdWJfdG90YWxcIl0pfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge29yZGVyW1wiY2hhcmdlX2ZlZVwiXSA/IChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWFyb3VuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkNoYXJnZSBGZWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+UHtmb3JtYXROdW1iZXIob3JkZXJbXCJjaGFyZ2VfZmVlXCJdKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlNoaXBwaW5nPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD5Qe2Zvcm1hdE51bWJlcihvcmRlcltcInNoaXBwaW5nX2ZlZVwiXSl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoNj5HcmFuZCBUb3RhbDwvaDY+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8aDY+UHtmb3JtYXROdW1iZXIob3JkZXJbXCJ0b3RhbFwiXSl9PC9oNj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgIDxkaXY+QW4gZW1haWwgY29uZmlybWF0aW9uIGhhcyBiZWVuIHNlbnQgdG8geW91LjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICBJZiB5b3UgbmVlZCBmdXJ0aGVyIGFzc2lzdGFuY2UsIGZlZWwgZnJlZSB0byBDb250YWN0IFVzLlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIFRoYW5rIHlvdSBmb3IgY2hvb3NpbmcgaS1XaGVlbHMuc2hvcCFcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8RmFjaWxpdHkgLz5cclxuICAgICAgICAgIHsvKiA8U3Vic2NyaWJlIC8+ICovfVxyXG4gICAgICAgICAgey8qIDxQYXJ0bmVyIC8+ICovfVxyXG4gICAgICAgICAgey8qIDxJbnN0YWdyYW1QaG90byAvPiAqL31cclxuICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcblRoYW5reW91LmdldEluaXRpYWxQcm9wcyA9ICh7IHF1ZXJ5IH0pID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhkZWNyeXB0U3RyaW5nKHF1ZXJ5Lm9yZGVyX25hbWUpKTtcclxuICByZXR1cm4gZmV0Y2hPcmRlcihkZWNyeXB0U3RyaW5nKHF1ZXJ5Lm9yZGVyX25hbWUpKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIHJldHVybiB7IG9yZGVyOiBkYXRhW1wib3JkZXJCeU5hbWVcIl0sIHF1ZXJ5IH07XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaGFua3lvdTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
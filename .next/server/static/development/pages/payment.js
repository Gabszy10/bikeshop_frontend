module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static\\development\\pages\\payment.js": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/Layout/Footer.js":
/*!*************************************!*\
  !*** ./components/Layout/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\corde\\Desktop\\New folder\\bikeshop\\bikeshop_frontend\\components\\Layout\\Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Footer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("footer", {
      className: "footer-area",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "col-lg-3 col-md-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "single-footer-widget",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "logo",
      style: {
        display: "flex"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 19
      }
    }, __jsx("a", {
      style: {
        margin: "auto"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/logos/logo.png */ "./images/logos/logo.png"),
      alt: "logo",
      height: "30",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 23
      }
    })))), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    }, "We offer the best brands of Bikes, E-Scooter, E-Bikes & E-Rides available in the market."))), __jsx("div", {
      className: "col-lg-3 col-md-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "single-footer-widget",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 15
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }
    }, "Quick Links"), __jsx("ul", {
      className: "quick-links",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 19
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/about",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 21
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 23
      }
    }, "About Us"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 19
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/faq",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 23
      }
    }, "Faq's"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 19
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/contact-us",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 21
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 23
      }
    }, "Contact Us")))))), __jsx("div", {
      className: "col-lg-3 col-md-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "single-footer-widget",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 15
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }
    }, "Information"), __jsx("ul", {
      className: "information-links",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 19
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/about",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 21
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 23
      }
    }, "About Us")))))), __jsx("div", {
      className: "col-lg-3 col-md-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "single-footer-widget",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 15
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }
    }, "Contact Us"), __jsx("ul", {
      className: "footer-contact-info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 19
      }
    }, __jsx("i", {
      className: "fas fa-map-marker-alt",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 21
      }
    }), "Location (Manila Branch): 41-31 Lilac St, Marikina, 1800 Metro Manila, Philippines"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 19
      }
    }, __jsx("i", {
      className: "fas fa-phone",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 21
      }
    }), __jsx("a", {
      href: "tel:(+123) 456-7898",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 21
      }
    }, " 0916 509 1083 (GLOBE)")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 19
      }
    }, __jsx("i", {
      className: "fas fa-phone",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 21
      }
    }), __jsx("a", {
      href: "tel:(+123) 456-7898",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 21
      }
    }, "0961 810 0128 (SMART)")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 19
      }
    }, __jsx("i", {
      className: "far fa-envelope",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 21
      }
    }), "Email Us:", " ", __jsx("a", {
      href: "mailto:support@We - Order.com",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 21
      }
    }, "i-Wheels26@gmail.com"))))))), __jsx("div", {
      className: "copyright-area",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "row align-items-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "col-lg-6 col-md-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 15
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 17
      }
    }, "Copyright @ 2023 i-WheelsPH")), __jsx("div", {
      className: "col-lg-6 col-md-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 15
      }
    }, __jsx("ul", {
      className: "payment-card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 17
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 19
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 21
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/visa.png */ "./images/visa.png"),
      alt: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 25
      }
    })))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 19
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 21
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/mastercard.png */ "./images/mastercard.png"),
      alt: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 25
      }
    })))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 19
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 21
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/mastercard2.png */ "./images/mastercard2.png"),
      alt: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 25
      }
    })))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 19
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 21
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/visa2.png */ "./images/visa2.png"),
      alt: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 25
      }
    })))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 19
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 21
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/expresscard.png */ "./images/expresscard.png"),
      alt: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 25
      }
    }))))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Layout/MegaMenu.js":
/*!***************************************!*\
  !*** ./components/Layout/MegaMenu.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Modal_Cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Modal/Cart */ "./components/Modal/Cart.js");
/* harmony import */ var _store_actions_cartActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/cartActions */ "./store/actions/cartActions.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\corde\\Desktop\\New folder\\bikeshop\\bikeshop_frontend\\components\\Layout\\MegaMenu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






let host = "http://127.0.0.1:8080";

function MegaMenu(props) {
  const {
    0: cartLength,
    1: setcartLength
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: state,
    1: setstate
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    display: false,
    searchForm: false,
    collapsed: true,
    checkCart: false
  });
  const {
    0: categories,
    1: setcategories
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  const handleCart = () => {
    setstate(prevState => {
      return {
        display: !prevState.display,
        collapsed: true
      };
    });
  };

  const handleSearchForm = () => {
    setstate(prevState => {
      return {
        searchForm: !prevState.searchForm
      };
    });
  };

  const toggleNavbar = () => {
    setstate({
      collapsed: !state.collapsed
    });
  };

  console.log(state);

  const fetchCategories = async () => {
    try {
      let res = await axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(`${host}/api/user/category/`);

      if (res) {
        setcategories(res.data.categories);
      }
    } catch (error) {}
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchCategories();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let myProd = localStorage.getItem("_bik_EKL") ? localStorage.getItem("_bik_EKL") : [];
    let decryptedData = Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_4__["decryptData"])(myProd);
    setcartLength(decryptedData.length);
  }, [props.products]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }, []);
  const {
    collapsed
  } = state;
  const classOne = collapsed ? "collapse navbar-collapse" : "collapse navbar-collapse show";
  const classTwo = collapsed ? "navbar-toggler navbar-toggler-right collapsed" : "navbar-toggler navbar-toggler-right";
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
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
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
    onClick: e => {
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
    onClick: e => {
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
  }, categories.length ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, categories.map((category, i) => {
    if (category.status) {
      if (category.sub_categories.length) {
        return __jsx("li", {
          key: i,
          className: "nav-item p-relative",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 31
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          key: i,
          href: "#",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 33
          }
        }, __jsx("a", {
          className: "nav-link",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 35
          }
        }, category.name, " ", __jsx("i", {
          className: "fas fa-chevron-down",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 37
          }
        }))), __jsx("ul", {
          className: "dropdown-menu",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 33
          }
        }, category.sub_categories.map((subCat, i) => {
          return __jsx("li", {
            key: i,
            className: "nav-item",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 39
            }
          }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: `/subcategory/${subCat.slug}`,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 41
            }
          }, __jsx("a", {
            className: "nav-link",
            __self: this,
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
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 31
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: `/category/${category.slug}`,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 33
          }
        }, __jsx("a", {
          className: "nav-link",
          __self: this,
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
    className: `close-btn fas fa-times ${state.searchForm ? "active" : ""}`,
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
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 21
    }
  }, __jsx("a", {
    onClick: e => {
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
  })))))))))), state.display ? __jsx(_Modal_Cart__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleCart,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 24
    }
  }) : "");
}

const mapStateToProps = state => {
  return {
    products: state.addedItems
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(MegaMenu));

/***/ }),

/***/ "./components/Layout/Navbar.js":
/*!*************************************!*\
  !*** ./components/Layout/Navbar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TopPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopPanel */ "./components/Layout/TopPanel.js");
/* harmony import */ var _TopHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TopHeader */ "./components/Layout/TopHeader.js");
/* harmony import */ var _MegaMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MegaMenu */ "./components/Layout/MegaMenu.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\corde\\Desktop\\New folder\\bikeshop\\bikeshop_frontend\\components\\Layout\\Navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







next_router__WEBPACK_IMPORTED_MODULE_5___default.a.onRouteChangeStart = url => nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.start();

next_router__WEBPACK_IMPORTED_MODULE_5___default.a.onRouteChangeComplete = url => nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();

next_router__WEBPACK_IMPORTED_MODULE_5___default.a.onRouteChangeError = url => nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();

class Navbar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 7
      }
    }, __jsx(_TopPanel__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }
    }), __jsx(_TopHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }
    }), __jsx(_MegaMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/Layout/TopHeader.js":
/*!****************************************!*\
  !*** ./components/Layout/TopHeader.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Modal_Wishlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Modal/Wishlist */ "./components/Modal/Wishlist.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_actions_userActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/userActions */ "./store/actions/userActions.js");
var _jsxFileName = "C:\\Users\\corde\\Desktop\\New folder\\bikeshop\\bikeshop_frontend\\components\\Layout\\TopHeader.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function TopHeader(props) {
  const {
    0: state,
    1: setstate
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    display: false
  });
  const {
    0: user,
    1: setuser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // let encryptedData = localStorage.getItem(process.env.USER_COOKIE)
    //   ? localStorage.getItem(process.env.USER_COOKIE)
    //   : [];
    // let user = decryptUserData(encryptedData);
    let token = js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get("_wus_BJK");
    console.log(token);

    if (token) {
      setuser(token);
    }
  }, []);

  const handleWishlist = () => {
    setstate(prevState => {
      return {
        display: !prevState.display
      };
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "top-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-lg-7 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "top-header-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, !user ? __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 23
    }
  }, "Login"))) : null, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }, "About"))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }, "Our Stores"))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/faq",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, "FAQ's"))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/contact-us",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, "Contact"))))), __jsx("div", {
    className: "col-lg-5 col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "top-header-right-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }, user ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/profile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 23
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 25
    }
  }, "Profile ", __jsx("i", {
    className: "fas fa-user",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 35
    }
  })))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 21
    }
  }, __jsx("a", {
    onClick: () => Object(_store_actions_userActions__WEBPACK_IMPORTED_MODULE_4__["logout"])(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 23
    }
  }, "Logout ", __jsx("i", {
    className: "fas fa-sign-out-alt",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 32
    }
  })))) : __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 19
    }
  })))))), state.display ? __jsx(_Modal_Wishlist__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: handleWishlist,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 24
    }
  }) : "");
}

/* harmony default export */ __webpack_exports__["default"] = (TopHeader);

/***/ }),

/***/ "./components/Layout/TopPanel.js":
/*!***************************************!*\
  !*** ./components/Layout/TopPanel.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\corde\\Desktop\\New folder\\bikeshop\\bikeshop_frontend\\components\\Layout\\TopPanel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-owl-carousel3 */ "react-owl-carousel3", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-owl-carousel3 */ "react-owl-carousel3")],
    modules: ["react-owl-carousel3"]
  }
});
const options = {
  loop: true,
  nav: false,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  animateOut: "slideOutDown",
  animateIn: "flipInX",
  items: 1,
  navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"]
};

class TopPanel extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      display: false,
      panel: true
    });
  }

  componentDidMount() {
    this.setState({
      display: true
    });
  }

  render() {
    let {
      panel
    } = this.state;
    return __jsx("div", {
      className: `top-panel ${panel ? "" : "hide"}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "panel-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }
    }, this.state.display ? __jsx(OwlCarousel, _extends({
      className: "top-panel-slides owl-carousel owl-theme"
    }, options, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 15
      }
    }), __jsx("div", {
      className: "single-item-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 19
      }
    }, __jsx("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 21
      }
    }, "We offer the best brands of Bikes, E-Scooter, E-Bikes & E-Rides available in the market."))), __jsx("div", {
      className: "single-item-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 19
      }
    }, __jsx("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }
    }, "1 - 7 Days Delivery Nationwide"))), __jsx("div", {
      className: "single-item-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 19
      }
    }, __jsx("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 21
      }
    }, "Newly Arrived Products!")))) : "", __jsx("i", {
      onClick: () => this.setState({
        panel: false
      }),
      className: "fas fa-times panel-close-btn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 13
      }
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TopPanel);

/***/ }),

/***/ "./components/Modal/Cart.js":
/*!**********************************!*\
  !*** ./components/Modal/Cart.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions_cartActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/cartActions */ "./store/actions/cartActions.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_function__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/function */ "./helpers/function.js");
/* harmony import */ var _store_actions_infoActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions/infoActions */ "./store/actions/infoActions.js");
var _jsxFileName = "C:\\Users\\corde\\Desktop\\New folder\\bikeshop\\bikeshop_frontend\\components\\Modal\\Cart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


let host = "http://127.0.0.1:8080";






function Cart(props) {
  const {
    0: isCampaign,
    1: setisCampaign
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: state,
    1: setstate
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    display: false
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let decryptedData = Object(_store_actions_infoActions__WEBPACK_IMPORTED_MODULE_6__["decryptInfoData"])();

    if (decryptedData) {
      if (decryptedData.delivery_date.value == "2023-02-14") {
        setisCampaign(true);
      }
    }
  }, []);

  const handleRemove = id => {
    props.removeItem(id);
    react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].error("Removed from cart", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  };

  const closeCart = () => {
    props.onClick(state.display);
  };

  let {
    products
  } = props;
  products = products.length ? products : localStorage.getItem("_bik_EKL") ? Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_3__["decryptData"])(localStorage.getItem("_bik_EKL")) : [];
  var total = 0;

  for (var i = 0; i < products.length; i++) {
    if (isCampaign) {
      total = total + products[i].campaign_price * products[i].quantity;
    } else {
      total = total + products[i].discount_price * products[i].quantity;
    }
  }

  return __jsx("div", {
    className: "modal right fade show shoppingCartModal",
    style: {
      display: "block",
      paddingRight: "16px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "modal-dialog",
    role: "document",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "modal-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close",
    onClick: closeCart,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, __jsx("span", {
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, "\xD7")), __jsx("div", {
    className: "modal-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, "My Cart (", products.length, ")"), __jsx("div", {
    className: "product-cart-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, products.length > 0 ? products.map((product, idx) => __jsx("div", {
    className: "product-cart",
    key: idx,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "product-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 23
    }
  }, __jsx("img", {
    src: `${host}/products/${product.product_images[0]["file_name"]}`,
    alt: "image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "product-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "col-md-6 col-sm-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 27
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 31
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 33
    }
  }, product.name))), __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 31
    }
  }, product.quantity), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 31
    }
  }, "x"), __jsx("span", {
    className: "price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 31
    }
  }, "\u20B1", isCampaign ? Object(_helpers_function__WEBPACK_IMPORTED_MODULE_5__["formatNumber"])(product.campaign_price) : Object(_helpers_function__WEBPACK_IMPORTED_MODULE_5__["formatNumber"])(product.discount_price)))), __jsx("div", {
    className: "col-md-6 col-sm-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 27
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 29
    }
  }, __jsx("a", {
    style: {
      float: "right"
    },
    className: "remove",
    onClick: e => {
      e.preventDefault();
      handleRemove(product.id);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 31
    }
  }, __jsx("i", {
    className: "far fa-trash-alt",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 33
    }
  })))))))) : "Empty"), __jsx("div", {
    className: "product-cart-subtotal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 15
    }
  }, "Subtotal"), __jsx("span", {
    className: "subtotal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 15
    }
  }, "\u20B1", Object(_helpers_function__WEBPACK_IMPORTED_MODULE_5__["formatNumber"])(total))), __jsx("div", {
    className: "product-cart-btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  }, products.length > 0 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/cart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "btn btn-light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 19
    }
  }, "View Shopping Cart")))))));
}

const mapStateToProps = state => {
  return {
    products: state.addedItems,
    total: state.total //addedItems: state.addedItems

  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeItem: id => {
      dispatch(Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_3__["removeItem"])(id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Cart));

/***/ }),

/***/ "./components/Modal/Wishlist.js":
/*!**************************************!*\
  !*** ./components/Modal/Wishlist.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\corde\\Desktop\\New folder\\bikeshop\\bikeshop_frontend\\components\\Modal\\Wishlist.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Wishlist extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      display: false
    });

    _defineProperty(this, "closeWishlist", () => {
      this.props.onClick(this.state.display);
    });
  }

  render() {
    return __jsx("div", {
      className: "modal right fade show shoppingWishlistModal",
      style: {
        display: "block",
        paddingRight: "16px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "modal-dialog",
      role: "document",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "modal-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 21
      }
    }, __jsx("button", {
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      "aria-label": "Close",
      onClick: this.closeWishlist,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 25
      }
    }, __jsx("span", {
      "aria-hidden": "true",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 29
      }
    }, "\xD7")), __jsx("div", {
      className: "modal-body",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 25
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 29
      }
    }, "My Wish List (3)"), __jsx("div", {
      className: "product-cart-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "product-cart",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "product-image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 37
      }
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/img2.jpg */ "./images/img2.jpg"),
      alt: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 41
      }
    })), __jsx("div", {
      className: "product-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 37
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 41
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 45
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 49
      }
    }, "Belted chino trousers polo"))), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 41
      }
    }, "Blue / XS"), __jsx("div", {
      className: "product-price",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 41
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 45
      }
    }, "1"), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 45
      }
    }, "x"), __jsx("span", {
      className: "price",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 45
      }
    }, "$191.00")))), __jsx("div", {
      className: "product-cart",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "product-image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 37
      }
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/img3.jpg */ "./images/img3.jpg"),
      alt: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 41
      }
    })), __jsx("div", {
      className: "product-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 37
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 41
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 45
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 49
      }
    }, "Belted chino trousers polo"))), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 41
      }
    }, "Blue / XS"), __jsx("div", {
      className: "product-price",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 41
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 45
      }
    }, "1"), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 45
      }
    }, "x"), __jsx("span", {
      className: "price",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 45
      }
    }, "$191.00")))), __jsx("div", {
      className: "product-cart",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "product-image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 37
      }
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/img4.jpg */ "./images/img4.jpg"),
      alt: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 41
      }
    })), __jsx("div", {
      className: "product-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 37
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 41
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 45
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 49
      }
    }, "Belted chino trousers polo"))), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 41
      }
    }, "Blue / XS"), __jsx("div", {
      className: "product-price",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 41
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 45
      }
    }, "1"), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 45
      }
    }, "x"), __jsx("span", {
      className: "price",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 45
      }
    }, "$191.00"))))), __jsx("div", {
      className: "product-cart-btn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 29
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 33
      }
    }, __jsx("a", {
      className: "btn btn-light",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 37
      }
    }, "View Shopping Cart")))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Wishlist);

/***/ }),

/***/ "./components/checkout/OrderSummary.js":
/*!*********************************************!*\
  !*** ./components/checkout/OrderSummary.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/function */ "./helpers/function.js");
/* harmony import */ var _store_actions_cartActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/cartActions */ "./store/actions/cartActions.js");
/* harmony import */ var _store_actions_infoActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/infoActions */ "./store/actions/infoActions.js");
var _jsxFileName = "C:\\Users\\corde\\Desktop\\New folder\\bikeshop\\bikeshop_frontend\\components\\checkout\\OrderSummary.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function OrderSummary(props) {
  const {
    0: isCampaign,
    1: setisCampaign
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: cart,
    1: setcart
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: total,
    1: settotal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let decryptedData = Object(_store_actions_infoActions__WEBPACK_IMPORTED_MODULE_5__["decryptInfoData"])();

    if (decryptedData) {
      if (decryptedData.delivery_date.value == "2023-02-14") {
        setisCampaign(true);
      }
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let myProd = props.products.length ? props.products : localStorage.getItem("_bik_EKL") ? Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_4__["decryptData"])(localStorage.getItem("_bik_EKL")) : [];

    if (myProd.length <= 0) {
      alert("You dont have any items in your cart.");
      return window.location.href = "/";
    }

    var myTotal = 0;

    for (var i = 0; i < myProd.length; i++) {
      if (isCampaign) {
        myTotal = myTotal + myProd[i].campaign_price * myProd[i].quantity;
      } else {
        myTotal = myTotal + myProd[i].discount_price * myProd[i].quantity;
      }
    }

    setcart(myProd);
    settotal(myTotal);
  }, [props.products, isCampaign]);
  return __jsx("div", {
    className: "order-table table-responsive",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx("table", {
    className: "table table-bordered",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx("thead", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, __jsx("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, "Product Name"), __jsx("th", {
    scope: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, "Total"))), __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, cart.map((data, idx) => __jsx("tr", {
    key: idx,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx("td", {
    className: "product-name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/product/${data.slug}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 19
    }
  }, data.name, " ", "", " ", data.quantity, "x"))), __jsx("td", {
    className: "product-total",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "subtotal-amount",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, "\u20B1", isCampaign ? Object(_helpers_function__WEBPACK_IMPORTED_MODULE_3__["formatNumber"])(data.campaign_price * data.quantity) : Object(_helpers_function__WEBPACK_IMPORTED_MODULE_3__["formatNumber"])(data.discount_price * data.quantity))))), total < 100 && __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, __jsx("td", {
    className: "order-subtotal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }, "Service Charge")), __jsx("td", {
    className: "order-subtotal-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "order-subtotal-amount",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, "\u20B1", Object(_helpers_function__WEBPACK_IMPORTED_MODULE_3__["formatNumber"])(100 - total)))), __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }, __jsx("td", {
    className: "order-subtotal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 15
    }
  }, "Cart Subtotal")), __jsx("td", {
    className: "order-subtotal-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "order-subtotal-amount",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 15
    }
  }, "\u20B1", Object(_helpers_function__WEBPACK_IMPORTED_MODULE_3__["formatNumber"])(total < 100 ? 100 : total)))), __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  }, __jsx("td", {
    className: "total-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 15
    }
  }, "Order Total")), __jsx("td", {
    className: "product-subtotal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "subtotal-amount",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 15
    }
  }, " ", "\u20B1", Object(_helpers_function__WEBPACK_IMPORTED_MODULE_3__["formatNumber"])(total < 100 ? 100 : total)))))), total < 100 && __jsx("p", {
    style: {
      color: "red",
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  }, "Minimum order is 100. If order is below 100, you will be charge to get to the 100 limit."));
}

const mapStateToProps = state => {
  return {
    products: state.addedItems,
    total: state.total,
    shipping: state.shipping
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(OrderSummary));

/***/ }),

/***/ "./components/checkout/ShippingSummary.js":
/*!************************************************!*\
  !*** ./components/checkout/ShippingSummary.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions_infoActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/infoActions */ "./store/actions/infoActions.js");
/* harmony import */ var _helpers_function__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/function */ "./helpers/function.js");
var _jsxFileName = "C:\\Users\\corde\\Desktop\\New folder\\bikeshop\\bikeshop_frontend\\components\\checkout\\ShippingSummary.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function ShippingSummary(props) {
  const {
    0: userInfo,
    1: setuserInfo
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let decryptedData = Object(_store_actions_infoActions__WEBPACK_IMPORTED_MODULE_3__["decryptInfoData"])();

    if (decryptedData) {
      // if (
      //   !decryptedData.delivery_date.value ||
      //   !decryptedData.delivery_time.value
      // ) {
      //   alert("Please input delivery date and time");
      //   return (window.location.href = "/cart");
      // }
      setuserInfo(decryptedData);
    } else {
      window.location.href = "/checkout";
    }
  }, []);

  if (userInfo) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "order-table table-responsive",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }
    }, __jsx("table", {
      className: "table table-bordered",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }
    }, __jsx("thead", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }
    }, __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 15
      }
    }, __jsx("th", {
      scope: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }
    }), __jsx("th", {
      scope: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }
    }))), __jsx("tbody", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }
    }, __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 15
      }
    }, __jsx("td", {
      className: "total-price",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 19
      }
    }, "Sender Info")), __jsx("td", {
      className: "product-subtotal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "subtotal-amount",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 19
      }
    }, userInfo.billing_firstName.value, " ", userInfo.billing_lastName.value), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 19
      }
    }), __jsx("span", {
      className: "subtotal-amount",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 19
      }
    }, userInfo.billing_phone.value), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 19
      }
    }), __jsx("span", {
      className: "subtotal-amount",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 19
      }
    }, userInfo.billing_email.value))), __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 15
      }
    }, __jsx("td", {
      className: "total-price",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 19
      }
    }, "Shipping Info")), __jsx("td", {
      className: "product-subtotal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "subtotal-amount",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 19
      }
    }, userInfo.shipping_firstName.value, " ", userInfo.shipping_lastName.value), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 19
      }
    }), __jsx("span", {
      className: "subtotal-amount",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 19
      }
    }, userInfo.shipping_phone.value), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 19
      }
    }), __jsx("span", {
      className: "subtotal-amount",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 19
      }
    }, userInfo.shipping_address.value, " ", userInfo.shipping_city.value, " ", userInfo.shipping_zip.value)))))), __jsx("div", {
      className: "d-flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }
    }, __jsx("h5", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 11
      }
    }, "Delivery Details"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/cart",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 11
      }
    }, __jsx("a", {
      className: "ml-auto btn btn-link text-danger",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 13
      }
    }, "Edit"))), __jsx("div", {
      className: "order-table table-responsive",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }
    }, __jsx("table", {
      className: "table table-bordered",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 11
      }
    }, __jsx("thead", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 13
      }
    }, __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 15
      }
    }, __jsx("th", {
      scope: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }
    }), __jsx("th", {
      scope: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 17
      }
    }))), __jsx("tbody", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 13
      }
    }, __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 15
      }
    }, __jsx("td", {
      className: "total-price",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 19
      }
    }, "Instructions")), __jsx("td", {
      className: "product-subtotal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "subtotal-amount",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 19
      }
    }, " ", userInfo.note.value))), __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 15
      }
    }, __jsx("td", {
      className: "total-price",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 19
      }
    }, "Message")), __jsx("td", {
      className: "product-subtotal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: "subtotal-amount",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 19
      }
    }, " ", userInfo.message.value)))))));
  } else {
    return __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 12
      }
    }, "Loading....");
  }
}

const mapStateToProps = state => {
  return {
    products: state.addedItems,
    total: state.total,
    shipping: state.shipping
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(ShippingSummary));

/***/ }),

/***/ "./components/payments/CreditCard.js":
/*!*******************************************!*\
  !*** ./components/payments/CreditCard.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\corde\\Desktop\\New folder\\bikeshop\\bikeshop_frontend\\components\\payments\\CreditCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const CreditCard = ({
  amount,
  description,
  handleSubmit
}) => {
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: phone,
    1: setPhone
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: cardHolder,
    1: setCardHolder
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: number,
    1: setNumber
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: month,
    1: setMonth
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: year,
    1: setYear
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: code,
    1: setCode
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: paymentStatus,
    1: setPaymentStatus
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""); // Function to Listen to the Payment in the Front End

  const listenToPayment = async fullClient => {
    const paymentIntentId = fullClient.split("_client")[0];
    let i = 5;

    for (let i = 5; i > 0; i--) {
      setPaymentStatus(`Listening to Payment in ${i}`);
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (i == 1) {
        const paymentIntentData = await fetch("https://api.paymongo.com/v1/payment_intents/" + paymentIntentId + "?client_key=" + fullClient, {
          headers: {
            // Base64 encoded public PayMongo API key.
            Authorization: `Basic ${Buffer.from("pk_test_rYuhCZfpeDpXriEtHF5Tjdn3").toString("base64")}`
          }
        }).then(response => {
          return response.json();
        }).then(response => {
          console.log(response.data);
          return response.data;
        });

        if (paymentIntentData.attributes.last_payment_error) {
          setPaymentStatus(JSON.stringify(paymentIntentData.attributes.last_payment_error));
        } else if (paymentIntentData.attributes.status === "succeeded") {
          setPaymentStatus("Payment Success");
        } else {
          i = 5;
        }
      }
    }
  }; // Function to Create a Payment Intent by calling the site's api


  const createPaymentIntent = async () => {
    setPaymentStatus("Creating Payment Intent");
    const paymentIntent = await fetch("/api/createPaymentIntent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        data: {
          attributes: {
            amount: amount * 100,
            payment_method_allowed: ["card"],
            payment_method_options: {
              card: {
                request_three_d_secure: "any"
              }
            },
            currency: "PHP",
            description: description,
            statement_descriptor: "descriptor business name"
          }
        }
      })
    }).then(response => {
      return response.json();
    }).then(response => {
      return response.body.data;
    });
    return paymentIntent;
  }; // Function to Create a Payment Method by calling the PayMongo API


  const createPaymentMethod = async () => {
    setPaymentStatus("Creating Payment Method");
    const paymentMethod = fetch("https://api.paymongo.com/v1/payment_methods", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from("pk_test_rYuhCZfpeDpXriEtHF5Tjdn3").toString("base64")}`
      },
      body: JSON.stringify({
        data: {
          attributes: {
            details: {
              card_number: `${number}`,
              //"4343434343434345",
              exp_month: parseInt(`${month}`),
              //2
              exp_year: parseInt(`${year}`),
              //22
              cvc: `${code}` //"123",

            },
            billing: {
              name: `${name}`,
              email: `${email}`,
              phone: `${phone}`
            },
            type: "card"
          }
        }
      })
    }).then(response => {
      return response.json();
    }).then(response => {
      if (response.data) {
        console.log(response);
        return response.data;
      } else if (response.errors) {
        react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error(response.errors[0].detail);
      }
    }).catch(err => {
      console.log(err);
      setPaymentStatus(err);
      return err;
    });
    return paymentMethod;
  }; // Function to Attach a Payment Method to the Intent by calling the PayMongo API


  const attachIntentMethod = async (intent, method) => {
    setPaymentStatus("Attaching Intent to Method");
    fetch(`https://api.paymongo.com/v1/payment_intents/${intent.id}/attach`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from("pk_test_rYuhCZfpeDpXriEtHF5Tjdn3").toString("base64")}`
      },
      body: JSON.stringify({
        data: {
          attributes: {
            payment_method: `${method.id}`,
            client_key: `${intent.attributes.client_key}`
          }
        }
      })
    }).then(response => response.json()).then(response => {
      if (response.data) {
        const paymentIntent = response.data;
        const paymentIntentStatus = paymentIntent.attributes.status;

        if (paymentIntentStatus === "awaiting_next_action") {
          // Render your modal for 3D Secure Authentication since next_action has a value. You can access the next action via paymentIntent.attributes.next_action.
          setPaymentStatus(paymentIntentStatus);
          window.open(paymentIntent.attributes.next_action.redirect.url, "_blank");
          listenToPayment(paymentIntent.attributes.client_key);
        } else {
          setPaymentStatus(paymentIntentStatus);
        }
      } else if (response.errors) {
        react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error(response.errors[0].detail);
      }
    }).catch(err => {
      console.log(JSON.stringify(err));
      setPaymentStatus(JSON.stringify(err));
    });
  };

  const onSubmit = async event => {
    try {
      event.preventDefault();
      const paymentIntent = await createPaymentIntent();
      const paymentMethod = await createPaymentMethod();
      await attachIntentMethod(paymentIntent, paymentMethod);
    } catch (error) {
      react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error("Something went wrong, Please try again.");
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (paymentStatus) {
      if (paymentStatus == "succeeded") {
        handleSubmit("Credit Card");
      }
    }
  }, [paymentStatus]);
  return __jsx("section", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 5
    }
  }, __jsx("form", {
    action: "#",
    onSubmit: onSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 7
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 9
    }
  }, "Billing Information"), __jsx("div", {
    id: "form-card",
    className: "formField",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "customer-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 11
    }
  }, "Customer Name:"), __jsx("input", {
    id: "customer-name",
    placeholder: "Juan Dela Cruz",
    name: "name",
    className: "input",
    value: name,
    onChange: e => setName(e.target.value),
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 11
    }
  })), __jsx("div", {
    id: "form-card",
    className: "formField",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "phone",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 11
    }
  }, "Phone Number:"), __jsx("input", {
    id: "phone",
    placeholder: "09xxxxxxxxx",
    name: "phone",
    className: "input",
    value: phone,
    onChange: e => setPhone(e.target.value),
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 11
    }
  })), __jsx("div", {
    id: "form-card",
    className: "formField",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 11
    }
  }, "email:"), __jsx("input", {
    id: "email",
    name: "email",
    placeholder: "user@domain.com",
    className: "input",
    value: email,
    onChange: e => setEmail(e.target.value),
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 11
    }
  })), __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 9
    }
  }, "Payment Details"), __jsx("div", {
    id: "form-card",
    className: "formField",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "cc-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 11
    }
  }, "Card Holder:"), __jsx("input", {
    id: "cc-name",
    name: "cc-name",
    placeholder: "Juan Dela Cruz",
    className: "input",
    value: cardHolder,
    onChange: e => setCardHolder(e.target.value),
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 11
    }
  })), __jsx("div", {
    id: "form-card",
    className: "formField",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "cc-number",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 11
    }
  }, "Card number:"), __jsx("input", {
    id: "cc-number",
    name: "cc-number",
    maxLength: "19",
    placeholder: "1111 2222 3333 4444",
    className: "input",
    value: number,
    onChange: e => setNumber(e.target.value),
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 11
    }
  })), __jsx("div", {
    id: "form-date",
    className: "formField",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "expiry-month",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 11
    }
  }, "Expiry date:"), __jsx("div", {
    className: "dateVal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 11
    }
  }, __jsx("select", {
    id: "expiry-month",
    name: "expiry-month",
    className: "select",
    value: month,
    onChange: e => setMonth(e.target.value),
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 13
    }
  }, __jsx("option", {
    id: "trans-label_month",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 15
    }
  }, "Month"), __jsx("option", {
    value: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 15
    }
  }, "01"), __jsx("option", {
    value: "2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 15
    }
  }, "02"), __jsx("option", {
    value: "3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 15
    }
  }, "03"), __jsx("option", {
    value: "4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 15
    }
  }, "04"), __jsx("option", {
    value: "5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 15
    }
  }, "05"), __jsx("option", {
    value: "6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 15
    }
  }, "06"), __jsx("option", {
    value: "7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 15
    }
  }, "07"), __jsx("option", {
    value: "8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 15
    }
  }, "08"), __jsx("option", {
    value: "9",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 15
    }
  }, "09"), __jsx("option", {
    value: "10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 15
    }
  }, "10"), __jsx("option", {
    value: "11",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 15
    }
  }, "11"), __jsx("option", {
    value: "12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 15
    }
  }, "12")), __jsx("select", {
    id: "expiry-year",
    name: "expiry-year",
    className: "select",
    value: year,
    onChange: e => setYear(e.target.value),
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 13
    }
  }, __jsx("option", {
    id: "trans-label_year",
    value: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 15
    }
  }, "Year"), __jsx("option", {
    value: "2021",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 15
    }
  }, "21"), __jsx("option", {
    value: "2022",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 15
    }
  }, "22"), __jsx("option", {
    value: "2023",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 15
    }
  }, "23"), __jsx("option", {
    value: "2024",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 15
    }
  }, "24"), __jsx("option", {
    value: "2025",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 15
    }
  }, "25"), __jsx("option", {
    value: "2026",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 15
    }
  }, "26"), __jsx("option", {
    value: "2027",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 15
    }
  }, "27"), __jsx("option", {
    value: "2028",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 15
    }
  }, "28"), __jsx("option", {
    value: "2029",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 15
    }
  }, "29"), __jsx("option", {
    value: "2030",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 15
    }
  }, "30"), __jsx("option", {
    value: "2031",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 15
    }
  }, "31"), __jsx("option", {
    value: "2032",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 15
    }
  }, "32"), __jsx("option", {
    value: "2033",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 15
    }
  }, "33"), __jsx("option", {
    value: "2034",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 15
    }
  }, "34"), __jsx("option", {
    value: "2035",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 15
    }
  }, "35"), __jsx("option", {
    value: "2036",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 15
    }
  }, "36"), __jsx("option", {
    value: "2037",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 15
    }
  }, "37"), __jsx("option", {
    value: "2038",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 15
    }
  }, "38"), __jsx("option", {
    value: "2039",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 15
    }
  }, "39"), __jsx("option", {
    value: "2040",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 15
    }
  }, "40"), __jsx("option", {
    value: "2041",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 15
    }
  }, "41"), __jsx("option", {
    value: "2042",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 15
    }
  }, "42"), __jsx("option", {
    value: "2043",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 15
    }
  }, "43"), __jsx("option", {
    value: "2044",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 15
    }
  }, "44"), __jsx("option", {
    value: "2045",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 15
    }
  }, "45"), __jsx("option", {
    value: "2046",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 15
    }
  }, "46"), __jsx("option", {
    value: "2047",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 15
    }
  }, "47")))), __jsx("div", {
    id: "form-sec-code",
    className: "formField",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "sec-code",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 11
    }
  }, "Security code:"), __jsx("input", {
    name: "sec-code",
    type: "password",
    maxLength: "3",
    placeholder: "123",
    className: "input",
    value: code,
    onChange: e => setCode(e.target.value),
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 11
    }
  })), __jsx("button", {
    type: "submit",
    className: "payButton",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 9
    }
  }, "Pay")));
};

/* harmony default export */ __webpack_exports__["default"] = (CreditCard);

/***/ }),

/***/ "./components/payments/Gcash.js":
/*!**************************************!*\
  !*** ./components/payments/Gcash.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\corde\\Desktop\\New folder\\bikeshop\\bikeshop_frontend\\components\\payments\\Gcash.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const GCash = ({
  amount,
  description,
  handleSubmit
}) => {
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: phone,
    1: setPhone
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: payProcess,
    1: setPayProcess
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: paymentStatus,
    1: setPaymentStatus
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const publicKey = "pk_test_rYuhCZfpeDpXriEtHF5Tjdn3"; // Function to Create A Source

  const createSource = async () => {
    setPaymentStatus("Creating Source");
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(publicKey).toString("base64")}`
      },
      body: JSON.stringify({
        data: {
          attributes: {
            amount: amount * 100,
            redirect: {
              success: "http://localhost:3001/redirect",
              failed: "http://localhost:3001/redirect"
            },
            billing: {
              name: `${name}`,
              phone: `${phone}`,
              email: `${email}`
            },
            type: "gcash",
            currency: "PHP"
          }
        }
      })
    };
    return fetch("https://api.paymongo.com/v1/sources", options).then(response => response.json()).then(response => {
      return response;
    }).catch(err => console.error(err));
  }; // Function to Listen to the Source in the Front End


  const listenToPayment = async sourceId => {
    let i = 5;

    for (i = 5; i > 0; i--) {
      setPaymentStatus(`Listening to Payment in ${i}`);
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (i == 1) {
        const sourceData = await fetch("https://api.paymongo.com/v1/sources/" + sourceId, {
          headers: {
            // Base64 encoded public PayMongo API key.
            Authorization: `Basic ${Buffer.from(publicKey).toString("base64")}`
          }
        }).then(response => {
          return response.json();
        }).then(response => {
          if (response.data) {
            console.log(response);
            return response.data;
          } else if (response.errors) {
            react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error(response.errors[0].detail);
          }
        });
        console.log(sourceData);

        if (sourceData.attributes.status === "failed") {
          react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].success("Payment Failed, Please try again.");
          setPaymentStatus("failed");
        } else if (sourceData.attributes.status === "paid") {
          react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].success("Payment Succesfully");
          setPaymentStatus("Payment Success");
        } else if (sourceData.attributes.status === "expired") {
          react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error("Payment has expire, Please try again");
          setPaymentStatus("expired");
        } else {
          i = 5;
          setPayProcess(sourceData.attributes.status);
        }
      }
    }
  };

  const onSubmit = async event => {
    event.preventDefault();
    const source = await createSource();
    window.open(source.data.attributes.redirect.checkout_url, "_blank");
    listenToPayment(source.data.id);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (paymentStatus) {
      if (paymentStatus == "Payment Success") {
        handleSubmit("Gcash");
      }
    }

    if (payProcess) {
      if (payProcess == "expired") {
        react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error("Payment has expire, Please try again.");
      } else if (payProcess == "chargeable") {
        handleSubmit("Gcash");
      }
    }
  }, [paymentStatus, payProcess]);
  return __jsx("section", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 5
    }
  }, __jsx("form", {
    action: "#",
    onSubmit: onSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, "Billing Information"), __jsx("div", {
    id: "form-card",
    className: "formField",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "customer-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 11
    }
  }, "Customer Name:"), __jsx("input", {
    id: "customer-name",
    placeholder: "Juan Dela Cruz",
    className: "input",
    value: name,
    onChange: e => setName(e.target.value),
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  })), __jsx("div", {
    id: "form-card",
    className: "formField",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "phone",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }
  }, "Phone Number:"), __jsx("input", {
    id: "phone",
    placeholder: "09xxxxxxxxx",
    className: "input",
    value: phone,
    onChange: e => setPhone(e.target.value),
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  })), __jsx("div", {
    id: "form-card",
    className: "formField",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 11
    }
  }, "email:"), __jsx("input", {
    id: "email",
    placeholder: "user@domain.com",
    className: "input",
    value: email,
    onChange: e => setEmail(e.target.value),
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 11
    }
  })), __jsx("button", {
    type: "submit",
    className: "payButton",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 9
    }
  }, "Pay")));
};

/* harmony default export */ __webpack_exports__["default"] = (GCash);

/***/ }),

/***/ "./components/payments/Grabpay.js":
/*!****************************************!*\
  !*** ./components/payments/Grabpay.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\corde\\Desktop\\New folder\\bikeshop\\bikeshop_frontend\\components\\payments\\Grabpay.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const GrabPay = ({
  amount,
  description,
  handleSubmit
}) => {
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: phone,
    1: setPhone
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: payProcess,
    1: setPayProcess
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: paymentStatus,
    1: setPaymentStatus
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const publicKey = "pk_test_rYuhCZfpeDpXriEtHF5Tjdn3"; // Function to Create A Source

  const createSource = async () => {
    setPaymentStatus("Creating Source");
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(publicKey).toString("base64")}`
      },
      body: JSON.stringify({
        data: {
          attributes: {
            amount: amount * 100,
            redirect: {
              success: "http://localhost:3001/redirect",
              failed: "http://localhost:3001/redirect"
            },
            billing: {
              name: `${name}`,
              phone: `${phone}`,
              email: `${email}`
            },
            type: "grab_pay",
            currency: "PHP"
          }
        }
      })
    };
    return fetch("https://api.paymongo.com/v1/sources", options).then(response => response.json()).then(response => {
      return response;
    }).catch(err => console.error(err));
  }; // Function to Listen to the Source in the Front End


  const listenToPayment = async sourceId => {
    let i = 5;

    for (let i = 5; i > 0; i--) {
      setPaymentStatus(`Listening to Payment in ${i}`);
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (i == 1) {
        const sourceData = await fetch("https://api.paymongo.com/v1/sources/" + sourceId, {
          headers: {
            // Base64 encoded public PayMongo API key.
            Authorization: `Basic ${Buffer.from(publicKey).toString("base64")}`
          }
        }).then(response => {
          return response.json();
        }).then(response => {
          console.log(response.data);
          return response.data;
        });

        if (sourceData.attributes.status === "failed") {
          react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].success("Payment Failed, Please try again.");
          setPaymentStatus("failed");
        } else if (sourceData.attributes.status === "paid") {
          react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].success("Payment Succesfully");
          setPaymentStatus("Payment Success");
        } else if (sourceData.attributes.status === "expired") {
          react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error("Payment has expire, Please try again");
          setPaymentStatus("expired");
        } else {
          i = 5;
          setPayProcess(sourceData.attributes.status);
        }
      }
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (paymentStatus) {
      if (paymentStatus == "Payment Success") {
        handleSubmit("GrabPay");
      }
    }

    if (payProcess) {
      if (payProcess == "expired") {
        react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error("Payment has expire, Please try again.");
      } else if (payProcess == "chargeable") {
        handleSubmit("GrabPay");
      }
    }
  }, [paymentStatus, payProcess]);

  const onSubmit = async event => {
    event.preventDefault();
    const source = await createSource();
    window.open(source.data.attributes.redirect.checkout_url, "_blank");
    listenToPayment(source.data.id);
  };

  return __jsx("section", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 5
    }
  }, __jsx("form", {
    action: "#",
    onSubmit: onSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, "Billing Information"), __jsx("div", {
    id: "form-card",
    className: "formField",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "customer-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, "Customer Name:"), __jsx("input", {
    id: "customer-name",
    placeholder: "Juan Dela Cruz",
    className: "input",
    value: name,
    onChange: e => setName(e.target.value),
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  })), __jsx("div", {
    id: "form-card",
    className: "formField",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "phone",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 11
    }
  }, "Phone Number:"), __jsx("input", {
    id: "phone",
    placeholder: "09xxxxxxxxx",
    className: "input",
    value: phone,
    onChange: e => setPhone(e.target.value),
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  })), __jsx("div", {
    id: "form-card",
    className: "formField",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }, __jsx("label", {
    htmlFor: "email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 11
    }
  }, "email:"), __jsx("input", {
    id: "email",
    placeholder: "user@domain.com",
    className: "input",
    value: email,
    onChange: e => setEmail(e.target.value),
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 11
    }
  })), __jsx("button", {
    type: "submit",
    className: "payButton",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 9
    }
  }, "Pay"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 9
    }
  }, paymentStatus), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 9
    }
  }, payProcess)));
};

/* harmony default export */ __webpack_exports__["default"] = (GrabPay);

/***/ }),

/***/ "./components/payments/PaymentMethods.js":
/*!***********************************************!*\
  !*** ./components/payments/PaymentMethods.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _checkout_OrderSummary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../checkout/OrderSummary */ "./components/checkout/OrderSummary.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _checkout_ShippingSummary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../checkout/ShippingSummary */ "./components/checkout/ShippingSummary.js");
/* harmony import */ var _store_actions_cartActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/cartActions */ "./store/actions/cartActions.js");
/* harmony import */ var _store_actions_infoActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/infoActions */ "./store/actions/infoActions.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Paypal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Paypal */ "./components/payments/Paypal.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _helpers_function__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../helpers/function */ "./helpers/function.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _CreditCard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./CreditCard */ "./components/payments/CreditCard.js");
/* harmony import */ var _Gcash__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Gcash */ "./components/payments/Gcash.js");
/* harmony import */ var _Grabpay__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Grabpay */ "./components/payments/Grabpay.js");
var _jsxFileName = "C:\\Users\\corde\\Desktop\\New folder\\bikeshop\\bikeshop_frontend\\components\\payments\\PaymentMethods.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















let host = "http://127.0.0.1:8080";

function PaymentMethods() {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["useDispatch"])();
  const {
    0: selectedPayment,
    1: setselectedPayment
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: isCampaign,
    1: setisCampaign
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: isLoading,
    1: setisLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: isCodOn,
    1: setisCodOn
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: total,
    1: setTotal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let encryptedInfoData = localStorage.getItem("kri_MUK");
    let stateSchema = Object(_store_actions_infoActions__WEBPACK_IMPORTED_MODULE_5__["decryptInfoData"])(encryptedInfoData);

    if (stateSchema.shipping_city.value.toLowerCase().includes("makati") || stateSchema.shipping_address.value.toLowerCase().includes("makati") || [1226, 1233, 1209, 1214, 1217, 1221, 1222, 1219, 1220, 1202, 1201, 1228, 1212, 1211, 1206, 1204, 1229, 1232, 1224, 1200, 1207, 1235, 1231, 1218, 1213, 1230, 1210, 1216, 1215, 1227, 1203, 1234, 1223, 1205, 1225, 1208].includes(parseInt(stateSchema.shipping_zip.value))) {
      setisCodOn(true);
    }

    let decryptedData = Object(_store_actions_infoActions__WEBPACK_IMPORTED_MODULE_5__["decryptInfoData"])();

    if (decryptedData) {
      if (decryptedData.delivery_date.value == "2023-02-14") {
        setisCampaign(true);
      }
    } // toast.error(err.response.data[0].message);
    // console.log(, "HEYYYY");

  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let encryptedData = localStorage.getItem("_bik_EKL");
    let cart = Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_4__["decryptData"])(encryptedData);
    let amount = 0;

    for (let i = 0; i < cart.length; i++) {
      amount = amount + cart[i].discount_price * cart[i].quantity;
    }

    setTotal(amount < 100 ? 100 : amount);
  }, []);

  const handleChange = value => {
    setselectedPayment(value);
  };

  const fetchUser = async token => {
    try {
      let res = await axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(`${host}/api/user/user/details`, {
        headers: {
          Authorization: token
        }
      });

      if (res.data.userDetails) {
        return res.data.userDetails["id"];
      } else {
        return 0;
      }
    } catch (error) {
      localStorage.removeItem("token");
      this.props.history.push("/login");
      react_toastify__WEBPACK_IMPORTED_MODULE_11__["toast"].error("Your token is invalid or expired.");
    }
  };

  const handleChangePrice = products => {
    let cartStorage = localStorage.getItem("_bik_EKL");
    let cartArray = Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_4__["decryptData"])(cartStorage);

    for (let i = 0; i < products.length; i++) {
      const el = products[i];
      var index = cartArray.findIndex(item => item.id === el.productId);

      if (index > -1) {
        cartArray[index]["campaign_price"] = el.campaign_price;
        cartArray[index]["discount_price"] = el.discount_price;
      }

      let encryptedData = Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_4__["encryptData"])(JSON.stringify(cartArray));
      localStorage.setItem("_bik_EKL", encryptedData);
      dispatch((() => {
        return {
          type: "UPDATE_CART"
        };
      })());
    }
  };

  const handleSubmit = async paymentMethod => {
    let userId = 0;
    let token = js_cookie__WEBPACK_IMPORTED_MODULE_9___default.a.get("_wus_BJK");

    if (token) {
      try {
        userId = await fetchUser(token);
      } catch (error) {}
    }

    setisLoading(true);
    let encryptedData = localStorage.getItem("_bik_EKL");
    let encryptedInfoData = localStorage.getItem("kri_MUK");
    let cart = Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_4__["decryptData"])(encryptedData);
    let stateSchema = Object(_store_actions_infoActions__WEBPACK_IMPORTED_MODULE_5__["decryptInfoData"])(encryptedInfoData);
    let orderItems = [];

    for (let i = 0; i < cart.length; i++) {
      let obj = null;

      if (isCampaign) {
        obj = {
          productId: cart[i].id,
          name: cart[i].name,
          quantity: cart[i].quantity,
          itemPrice: cart[i].campaign_price
        };
      } else {
        obj = {
          productId: cart[i].id,
          name: cart[i].name,
          quantity: cart[i].quantity,
          itemPrice: cart[i].discount_price
        };
      }

      orderItems.push(obj);
    }

    let order = {
      orderItems: orderItems,
      userId: userId,
      shippingFirstName: stateSchema.shipping_firstName.value,
      shippingLastName: stateSchema.shipping_lastName.value,
      shippingPhone: stateSchema.shipping_phone.value,
      shippingAddress: stateSchema.shipping_address.value,
      shippingCity: stateSchema.shipping_city.value,
      shippingProvince: "Metro Manila",
      shippingZip: stateSchema.shipping_zip.value,
      deliveryInstructions: stateSchema.note.value,
      message: stateSchema.message.value,
      billingFirstName: stateSchema.billing_firstName.value,
      billingLastName: stateSchema.billing_lastName.value,
      billingPhone: stateSchema.billing_phone.value,
      billingEmail: stateSchema.billing_email.value,
      deliveryDate: stateSchema.delivery_date.value,
      deliveryTime: stateSchema.delivery_time.value,
      paymentMethod: paymentMethod,
      isCampaign: isCampaign
    };

    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(`${host}/api/user/order`, order);

      if (res) {
        let encryptedData = Object(_store_actions_infoActions__WEBPACK_IMPORTED_MODULE_5__["encryptString"])(res.data.order_name); // return console.log(encryptedData, encryptedData);

        let sendEmailRes = await axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(`${host}/api/user/order/sendEmail`, {
          billingEmail: order.billingEmail,
          billingFirstName: order.billingFirstName,
          orderName: res.data.order_name,
          cryptoStr: encryptedData,
          orderItems: orderItems,
          paymentMethod: paymentMethod,
          deliveryDate: Object(_helpers_function__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(stateSchema.delivery_date.value)
        });

        if (sendEmailRes) {
          Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_4__["clearData"])();
          next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push(`/thankyou/${encryptedData}`);
        }
      }
    } catch (err) {
      setisLoading(false);
      console.log(err.response.data);
      console.log(err.response.data[0].message);

      if (err.response) {
        if (err.response.data) {
          if (err.response.data[0]) {
            if (err.response.data[0].updatedOrderItems) {
              handleChangePrice(err.response.data[0].updatedOrderItems);
            }

            return react_toastify__WEBPACK_IMPORTED_MODULE_11__["toast"].error(err.response.data[0].message);
          }
        }
      } else {
        react_toastify__WEBPACK_IMPORTED_MODULE_11__["toast"].error("Something went wrong, Please try again or contact us.");
      }
    }
  };

  return __jsx("div", {
    className: "pt-40",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 5
    }
  }, __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_11__["ToastContainer"], {
    transition: react_toastify__WEBPACK_IMPORTED_MODULE_11__["Slide"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "row",
    style: {
      marginLeft: "0px",
      marginRight: "0px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "col-lg-5 col-md-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "d-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 13
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 15
    }
  }, "User Details"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/checkout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "ml-auto btn btn-link text-danger",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 17
    }
  }, "Edit"))), __jsx(_checkout_ShippingSummary__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "d-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 13
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 15
    }
  }, "Order Details"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/cart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "ml-auto btn btn-link text-danger",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 17
    }
  }, "Edit"))), __jsx(_checkout_OrderSummary__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "col-lg-7 col-md-7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 9
    }
  }, __jsx("h5", {
    className: "text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 11
    }
  }, "Select Payment Method"), __jsx("div", {
    className: "order-details",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "payment-method",
    style: {
      paddingTop: 0,
      marginTop: "20px",
      marginLeft: "0.5rem",
      marginRight: "0.5rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 15
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "radio",
    id: "direct-bank-transfer",
    name: "radio-button",
    onChange: () => handleChange("bank"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 19
    }
  }), __jsx("label", {
    htmlFor: "direct-bank-transfer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 19
    }
  }, "Credit Card"), selectedPayment == "bank" ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 23
    }
  }), __jsx("img", {
    src: __webpack_require__(/*! ../../images/logos/banks2.jpg */ "./images/logos/banks2.jpg"),
    alt: "image",
    height: "150",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 23
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 23
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 23
    }
  }), __jsx(_CreditCard__WEBPACK_IMPORTED_MODULE_13__["default"], {
    amount: total,
    handleSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 23
    }
  }), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 23
    }
  })) : null)), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 15
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "radio",
    id: "cash-on-delivery",
    name: "radio-button",
    onChange: () => handleChange("cod"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 19
    }
  }), __jsx("label", {
    htmlFor: "cash-on-delivery",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 19
    }
  }, "Cash on Delivery"), selectedPayment == "cod" ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 23
    }
  }), __jsx("img", {
    src: __webpack_require__(/*! ../../images/logos/cod.jpg */ "./images/logos/cod.jpg"),
    alt: "image",
    height: "100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 23
    }
  }), __jsx("p", {
    style: {
      paddingTop: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 23
    }
  }, "When using our Cash on Delivery service, payment is given to our delivery rider upon receipt of item."), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 23
    }
  }), !isLoading ? __jsx("button", {
    onClick: () => handleSubmit("COD"),
    className: "btn btn-light mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 25
    }
  }, "Confirm Order") : __jsx("div", {
    className: "lds-ring",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 25
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 27
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 27
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 27
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 27
    }
  })), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 23
    }
  })) : null)), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 15
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "radio",
    id: "gcash",
    name: "radio-button",
    onChange: () => handleChange("gcash"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 19
    }
  }), __jsx("label", {
    htmlFor: "gcash",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 19
    }
  }, "GCash"), selectedPayment == "gcash" ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 23
    }
  }), __jsx("img", {
    src: __webpack_require__(/*! ../../images/logos/gcash.png */ "./images/logos/gcash.png"),
    alt: "image",
    height: "70",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 23
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 23
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 23
    }
  }), __jsx(_Gcash__WEBPACK_IMPORTED_MODULE_14__["default"], {
    amount: total,
    handleSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 23
    }
  }), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 23
    }
  })) : null)), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 15
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "radio",
    id: "grabpay",
    name: "radio-button",
    onChange: () => handleChange("grabpay"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 19
    }
  }), __jsx("label", {
    htmlFor: "grabpay",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 19
    }
  }, "GrabPay"), selectedPayment == "grabpay" ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 23
    }
  }), __jsx("img", {
    src: __webpack_require__(/*! ../../images/logos/gcash.png */ "./images/logos/gcash.png"),
    alt: "image",
    height: "70",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 23
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 23
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 23
    }
  }), __jsx(_Grabpay__WEBPACK_IMPORTED_MODULE_15__["default"], {
    amount: total,
    handleSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 23
    }
  }), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 23
    }
  })) : null)))))));
}

/* harmony default export */ __webpack_exports__["default"] = (PaymentMethods);

/***/ }),

/***/ "./components/payments/Paypal.js":
/*!***************************************!*\
  !*** ./components/payments/Paypal.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_paypal_express_checkout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-paypal-express-checkout */ "react-paypal-express-checkout");
/* harmony import */ var react_paypal_express_checkout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_paypal_express_checkout__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions_cartActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/cartActions */ "./store/actions/cartActions.js");
/* harmony import */ var _store_actions_infoActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/infoActions */ "./store/actions/infoActions.js");
var _jsxFileName = "C:\\Users\\corde\\Desktop\\New folder\\bikeshop\\bikeshop_frontend\\components\\payments\\Paypal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function Paypal(props) {
  const {
    0: paymentOptions,
    1: setpaymentOptions
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: isCampaign,
    1: setisCampaign
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: memo,
    1: setmemo
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let decryptedData = Object(_store_actions_infoActions__WEBPACK_IMPORTED_MODULE_4__["decryptInfoData"])();

    if (decryptedData) {
      if (decryptedData.delivery_date.value == "2023-02-14") {
        setisCampaign(true);
      }

      setmemo(`
      ${decryptedData.billing_phone.value}
      ${decryptedData.billing_email.value}
      ${decryptedData.delivery_time.value}
      ${decryptedData.delivery_date.value}
      ${decryptedData.note.value}
      ${decryptedData.message.value}
      ${decryptedData.shipping_phone.value}
      ${decryptedData.shipping_address.value}
      `);
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let encryptedData = localStorage.getItem("_bik_EKL");
    let cart = Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_3__["decryptData"])(encryptedData);
    let total = 0;
    let items = [];

    for (let i = 0; i < cart.length; i++) {
      let obj = null;

      if (isCampaign) {
        obj = {
          name: cart[i].name,
          quantity: cart[i].quantity,
          price: cart[i].campaign_price,
          currency: "PHP"
        };
      } else {
        obj = {
          name: cart[i].name,
          quantity: cart[i].quantity,
          price: cart[i].discount_price,
          currency: "PHP"
        };
      }

      items.push(obj);

      if (isCampaign) {
        total = total + cart[i].campaign_price * cart[i].quantity;
      } else {
        total = total + cart[i].discount_price * cart[i].quantity;
      }
    }

    total = total + 120;
    items.push({
      name: "Paypal Transfer Fee",
      quantity: 1,
      price: 120,
      currency: "PHP"
    });
    setpaymentOptions({
      intent: "authorize",
      payer: {
        payment_method: "paypal"
      },
      transactions: [{
        amount: {
          total: total,
          currency: "PHP"
        },
        description: memo,
        item_list: {
          items
        }
      }],
      note_to_payer: "Contact us for any questions on your order.",
      redirect_urls: {
        return_url: "https://example.com/return",
        cancel_url: "https://example.com/cancel"
      }
    });
  }, [isCampaign, memo]);

  const onSuccess = payment => {
    // 1, 2, and ... Poof! You made it, everything's fine and dandy!
    console.log("Payment successful!", payment); // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data

    props.handleSubmit("Paypal");
  };

  const onCancel = data => {
    // The user pressed "cancel" or closed the PayPal popup
    console.log("Payment cancelled!", data); // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
  };

  const onError = err => {
    // The main Paypal script could not be loaded or something blocked the script from loading
    console.log("Error!", err); // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
    // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
  };

  let env = "process.env.PAYPAL_CONFIG"; // you can set this string to 'production'

  let currency = "PHP"; // you can set this string from your props or state

  let total = 1; // this is the total amount (based on currency) to charge
  // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

  const client = {
    sandbox: "process.env.PAYPAL_SANDBOX",
    production: "process.env.PAYPAL_LIVE"
  }; // In order to get production's app-ID, you will have to send your app to Paypal for approval first
  // For your sandbox Client-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App" unless you have already done so):
  //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
  // Note: IGNORE the Sandbox test AppID - this is ONLY for Adaptive APIs, NOT REST APIs)
  // For production app-ID:
  //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/
  // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!

  return __jsx(react_paypal_express_checkout__WEBPACK_IMPORTED_MODULE_2___default.a, {
    paymentOptions: paymentOptions,
    env: env,
    client: client,
    currency: currency,
    total: total,
    onError: onError,
    onSuccess: onSuccess,
    onCancel: onCancel,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 5
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Paypal);

/***/ }),

/***/ "./components/shop-style-one/Facility.js":
/*!***********************************************!*\
  !*** ./components/shop-style-one/Facility.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\corde\\Desktop\\New folder\\bikeshop\\bikeshop_frontend\\components\\shop-style-one\\Facility.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Facility extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "facility-area",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "col-lg-3 col-sm-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "facility-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 33
      }
    }, __jsx("i", {
      className: "fas fa-plane",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 37
      }
    })), __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 33
      }
    }, "Fast Shipping"))), __jsx("div", {
      className: "col-lg-3 col-sm-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "facility-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 33
      }
    }, __jsx("i", {
      className: "fas fa-money-check-alt",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 37
      }
    })), __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 33
      }
    }, "100% money back guarantee"))), __jsx("div", {
      className: "col-lg-3 col-sm-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "facility-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 33
      }
    }, __jsx("i", {
      className: "far fa-credit-card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 37
      }
    })), __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 33
      }
    }, "Many payment gateways"))), __jsx("div", {
      className: "col-lg-3 col-sm-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "facility-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 33
      }
    }, __jsx("i", {
      className: "fas fa-headset",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 37
      }
    })), __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 33
      }
    }, "Online support"))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Facility);

/***/ }),

/***/ "./helpers/function.js":
/*!*****************************!*\
  !*** ./helpers/function.js ***!
  \*****************************/
/*! exports provided: debounce, formatNumber, isDateBeforeToday, formatDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatNumber", function() { return formatNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDateBeforeToday", function() { return isDateBeforeToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const debounce = (func, wait, immediate) => {
  var timeout;
  return function () {
    var context = this,
        args = arguments;

    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
const formatNumber = num => {
  return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};
const isDateBeforeToday = date => {
  return new Date(new Date(date).toDateString()) < new Date(new Date().toDateString());
};
const formatDate = date => {
  let month = monthNames[new Date(date).getMonth()];
  let day = new Date(date).getDate();
  let year = new Date(date).getFullYear();
  return `${month} ${day}, ${year}`;
};

/***/ }),

/***/ "./images/expresscard.png":
/*!********************************!*\
  !*** ./images/expresscard.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAkCAYAAADPRbkKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEVEQ0JEOTRBNjA3MTFFOUJEMjJGMjRCRkRBQTU4NTgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEVEQ0JEOTNBNjA3MTFFOUJEMjJGMjRCRkRBQTU4NTgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWViNWRhYzgtNGM1OS1hMjQ0LTlkYTctY2Q0MDIzYTNlMjIzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM5NGYwZGMzLWY2NzYtOTA0Ny05MjM2LWExYjZlZDc0ZjRmYSIv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"

/***/ }),

/***/ "./images/img2.jpg":
/*!*************************!*\
  !*** ./images/img2.jpg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./images/img3.jpg":
/*!*************************!*\
  !*** ./images/img3.jpg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./images/img4.jpg":
/*!*************************!*\
  !*** ./images/img4.jpg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./images/logos/banks2.jpg":
/*!*********************************!*\
  !*** ./images/logos/banks2.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/banks2-32039c021f3bd02dba9042af41f59c2e.jpg";

/***/ }),

/***/ "./images/logos/cod.jpg":
/*!******************************!*\
  !*** ./images/logos/cod.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./images/logos/gcash.png":
/*!********************************!*\
  !*** ./images/logos/gcash.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./images/logos/logo.png":
/*!*******************************!*\
  !*** ./images/logos/logo.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-1e403df44be70b2e10cdb837ac317d33.png";

/***/ }),

/***/ "./images/mastercard.png":
/*!*******************************!*\
  !*** ./images/mastercard.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAlCAYAAAAEGWqvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEVBRjZDNjFBNjA3MTFFOUFEQjBCNTJEMjU3ODI4OTIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEVBRjZDNjBBNjA3MTFFOUFEQjBCNTJEMjU3ODI4OTIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWViNWRhYzgtNGM1OS1hMjQ0LTlkYTctY2Q0MDIzYTNlMjIzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM5NGYwZGMzLWY2NzYtOTA0Ny05MjM2LWExYjZlZDc0ZjRmYSIv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"

/***/ }),

/***/ "./images/mastercard2.png":
/*!********************************!*\
  !*** ./images/mastercard2.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAlCAYAAAAEGWqvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzM0RTIzQTdBNjA3MTFFOThGMjlBMUEwQzU0MEU4MjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzM0RTIzQTZBNjA3MTFFOThGMjlBMUEwQzU0MEU4MjMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWViNWRhYzgtNGM1OS1hMjQ0LTlkYTctY2Q0MDIzYTNlMjIzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM5NGYwZGMzLWY2NzYtOTA0Ny05MjM2LWExYjZlZDc0ZjRmYSIv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"

/***/ }),

/***/ "./images/visa.png":
/*!*************************!*\
  !*** ./images/visa.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAlCAYAAADSvLDKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDQ3MkI5QzFBNjA3MTFFOTkzOUREMEE1NDc3MDUyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDQ3MkI5QzBBNjA3MTFFOTkzOUREMEE1NDc3MDUyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWViNWRhYzgtNGM1OS1hMjQ0LTlkYTctY2Q0MDIzYTNlMjIzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM5NGYwZGMzLWY2NzYtOTA0Ny05MjM2LWExYjZlZDc0ZjRmYSIv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"

/***/ }),

/***/ "./images/visa2.png":
/*!**************************!*\
  !*** ./images/visa2.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAkCAYAAAAZ4GNvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0Q0RjFBNUNBNjA3MTFFOUFEQjI4NzlGOUJBRTE0MjciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0Q0RjFBNUJBNjA3MTFFOUFEQjI4NzlGOUJBRTE0MjciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWViNWRhYzgtNGM1OS1hMjQ0LTlkYTctY2Q0MDIzYTNlMjIzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM5NGYwZGMzLWY2NzYtOTA0Ny05MjM2LWExYjZlZDc0ZjRmYSIv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"

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__(/*! url */ "url");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/vercel/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__(/*! url */ "url");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/payment.js":
/*!**************************!*\
  !*** ./pages/payment.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout/Navbar */ "./components/Layout/Navbar.js");
/* harmony import */ var _components_shop_style_one_Facility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shop-style-one/Facility */ "./components/shop-style-one/Facility.js");
/* harmony import */ var _components_Layout_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout/Footer */ "./components/Layout/Footer.js");
/* harmony import */ var _components_payments_PaymentMethods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/payments/PaymentMethods */ "./components/payments/PaymentMethods.js");
var _jsxFileName = "C:\\Users\\corde\\Desktop\\New folder\\bikeshop\\bikeshop_frontend\\pages\\payment.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






class Index extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "boxed-layout-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "boxed-layout-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 11
      }
    }, __jsx(_components_Layout_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }
    }), __jsx(_components_payments_PaymentMethods__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }
    }), __jsx(_components_shop_style_one_Facility__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }
    }), __jsx(_components_Layout_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./store/actions/action-types/cart-actions.js":
/*!****************************************************!*\
  !*** ./store/actions/action-types/cart-actions.js ***!
  \****************************************************/
/*! exports provided: ADD_TO_CART, ADD_TO_CART_ADDONS, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING, ADD_QUANTITY_WITH_NUMBER, ORDER_FORM, CHECKOUT_CHARGE, RESET_CART, ADD_TO_COMPARE, REMOVE_ITEM_FROM_COMPARE, UPDATE_CART */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_CART", function() { return ADD_TO_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_CART_ADDONS", function() { return ADD_TO_CART_ADDONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ITEM", function() { return REMOVE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUB_QUANTITY", function() { return SUB_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_QUANTITY", function() { return ADD_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_SHIPPING", function() { return ADD_SHIPPING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_QUANTITY_WITH_NUMBER", function() { return ADD_QUANTITY_WITH_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDER_FORM", function() { return ORDER_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECKOUT_CHARGE", function() { return CHECKOUT_CHARGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_CART", function() { return RESET_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_COMPARE", function() { return ADD_TO_COMPARE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ITEM_FROM_COMPARE", function() { return REMOVE_ITEM_FROM_COMPARE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_CART", function() { return UPDATE_CART; });
//Types should be in const to avoid typos and duplication since it's a string and could be easily miss spelled
const ADD_TO_CART = 'ADD_TO_CART';
const ADD_TO_CART_ADDONS = 'ADD_TO_CART_ADDONS';
const REMOVE_ITEM = 'REMOVE_ITEM';
const SUB_QUANTITY = 'SUB_QUANTITY';
const ADD_QUANTITY = 'ADD_QUANTITY';
const ADD_SHIPPING = 'ADD_SHIPPING';
const ADD_QUANTITY_WITH_NUMBER = 'ADD_QUANTITY_WITH_NUMBER';
const ORDER_FORM = 'ORDER_FORM';
const CHECKOUT_CHARGE = 'CHECKOUT_CHARGE';
const RESET_CART = 'RESET_CART';
const ADD_TO_COMPARE = 'ADD_TO_COMPARE';
const REMOVE_ITEM_FROM_COMPARE = 'REMOVE_ITEM_FROM_COMPARE';
const UPDATE_CART = 'UPDATE_CART';

/***/ }),

/***/ "./store/actions/cartActions.js":
/*!**************************************!*\
  !*** ./store/actions/cartActions.js ***!
  \**************************************/
/*! exports provided: clearData, encryptData, decryptData, addToCart, addToCartAddons, removeItem, subtractQuantity, addQuantity, addQuantityWithNumber, resetCart, addToCompare, removeItemFromCompare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearData", function() { return clearData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encryptData", function() { return encryptData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decryptData", function() { return decryptData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCartAddons", function() { return addToCartAddons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItem", function() { return removeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtractQuantity", function() { return subtractQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addQuantity", function() { return addQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addQuantityWithNumber", function() { return addQuantityWithNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetCart", function() { return resetCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCompare", function() { return addToCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItemFromCompare", function() { return removeItemFromCompare; });
/* harmony import */ var _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-types/cart-actions */ "./store/actions/action-types/cart-actions.js");


var CryptoJS = __webpack_require__(/*! crypto-js */ "crypto-js");

const clearData = () => {
  localStorage.removeItem("_bik_EKL");
  localStorage.removeItem("kri_MUK");
};
const encryptData = data => {
  try {
    return CryptoJS.AES.encrypt(JSON.stringify(data), "fl0werMasterSalakam").toString();
  } catch (error) {
    // console.log(error);
    localStorage.removeItem("_bik_EKL");
    return [];
  }
};
const decryptData = data => {
  try {
    let bytes = CryptoJS.AES.decrypt(data, "fl0werMasterSalakam");
    let stringArray = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return JSON.parse(stringArray);
  } catch (error) {
    // console.log(error);
    localStorage.removeItem("_bik_EKL");
    return [];
  }
}; //add cart action

const addToCart = (product, quantity = 1) => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_TO_CART"],
    product: product,
    quantity
  };
}; //add cart with addons action

const addToCartAddons = (products, quantity = 1) => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_TO_CART_ADDONS"],
    products: products,
    quantity
  };
}; //remove item action

const removeItem = id => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["REMOVE_ITEM"],
    id
  };
}; //subtract qt action

const subtractQuantity = id => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["SUB_QUANTITY"],
    id
  };
}; //add qt action

const addQuantity = id => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_QUANTITY"],
    id
  };
}; //add qt action with quantity number

const addQuantityWithNumber = (id, qty) => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_QUANTITY_WITH_NUMBER"],
    id,
    qty
  };
}; // Reset cart after form submit

const resetCart = () => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["RESET_CART"]
  };
}; //add compare action

const addToCompare = id => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_TO_COMPARE"],
    id
  };
}; //remove item from compare action

const removeItemFromCompare = id => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["REMOVE_ITEM_FROM_COMPARE"],
    id
  };
};

/***/ }),

/***/ "./store/actions/infoActions.js":
/*!**************************************!*\
  !*** ./store/actions/infoActions.js ***!
  \**************************************/
/*! exports provided: encryptInfoData, decryptInfoData, encryptString, decryptString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encryptInfoData", function() { return encryptInfoData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decryptInfoData", function() { return decryptInfoData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encryptString", function() { return encryptString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decryptString", function() { return decryptString; });
var CryptoJS = __webpack_require__(/*! crypto-js */ "crypto-js");

const encryptInfoData = data => {
  try {
    let encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), "superbikeshop").toString();
    localStorage.setItem("kri_MUK", encryptedData);
    return true;
  } catch (error) {
    console.log(error);
    localStorage.removeItem("kri_MUK");
    return false;
  }
};
const decryptInfoData = () => {
  try {
    let infoItem = localStorage.getItem("kri_MUK") ? localStorage.getItem("kri_MUK") : null;

    if (infoItem) {
      let bytes = CryptoJS.AES.decrypt(infoItem, "superbikeshop");
      let stringArray = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      return stringArray;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    localStorage.removeItem("kri_MUK");
    return false;
  }
};
const encryptString = data => {
  try {
    let encryptedData = encodeURIComponent(CryptoJS.AES.encrypt(JSON.stringify(data), "superbikeshop").toString());
    return encryptedData;
  } catch (error) {
    console.log(error);
    return false;
  }
};
const decryptString = data => {
  try {
    if (data) {
      let bytes = CryptoJS.AES.decrypt(data, "superbikeshop");
      let stringArray = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      return decodeURIComponent(stringArray);
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

/***/ }),

/***/ "./store/actions/userActions.js":
/*!**************************************!*\
  !*** ./store/actions/userActions.js ***!
  \**************************************/
/*! exports provided: userRegister, userLogin, logout, encryptUserData, decryptUserData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userRegister", function() { return userRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userLogin", function() { return userLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encryptUserData", function() { return encryptUserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decryptUserData", function() { return decryptUserData; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);




var CryptoJS = __webpack_require__(/*! crypto-js */ "crypto-js");

let host = "http://127.0.0.1:8080";
const userRegister = (userData, setIsLoading, cb) => async dispatch => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${host}/api/user/auth/signUp`, userData); // // save the new token from our fucking api to the cookies

    if (res.status === 200) {
      const {
        token,
        user
      } = await res.data;
      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set("_wus_BJK", token, {
        expires: 7
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set("user", user, {
        expires: 7
      });
      cb();
    }
  } catch (err) {
    setIsLoading(false);
    console.log(err);

    if (err.response.data.error) {
      return react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error(err.response.data.error);
    }

    if (err.response.data.details[0].message) {
      return react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error(err.response.data.details[0].message);
    }
  }
};
const userLogin = (userData, setIsLoading, cb) => async dispatch => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${host}/api/user/auth/signIn`, userData); // // save the new token from our fucking api to the cookies

    if (res.status === 200) {
      const {
        token,
        user
      } = await res.data;
      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set("_wus_BJK", token, {
        expires: 7
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set("user", user, {
        expires: 7
      });
      cb();
    }
  } catch (err) {
    setIsLoading(false);
    console.log(err);

    if (err.response.data.error) {
      return react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error(err.response.data.error);
    }

    if (err.response.data.details[0].message) {
      return react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error(err.response.data.details[0].message);
    }
  }
};
const logout = () => {
  js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove("_wus_BJK");
  window.location.href = "/";
};
const encryptUserData = data => {
  try {
    let encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), process.env.USER_KEY).toString();
    localStorage.setItem(process.env.USER_COOKIE, encryptedData);
    return true;
  } catch (error) {
    console.log(error);
    localStorage.removeItem(process.env.USER_COOKIE);
    return false;
  }
};
const decryptUserData = () => {
  try {
    let infoItem = localStorage.getItem(process.env.USER_COOKIE) ? localStorage.getItem(process.env.USER_COOKIE) : null;

    if (infoItem) {
      let bytes = CryptoJS.AES.decrypt(infoItem, process.env.USER_KEY);
      let stringArray = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
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

/***/ }),

/***/ 7:
/*!********************************!*\
  !*** multi ./pages/payment.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\corde\Desktop\New folder\bikeshop\bikeshop_frontend\pages\payment.js */"./pages/payment.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "crypto-js":
/*!****************************!*\
  !*** external "crypto-js" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto-js");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-owl-carousel3":
/*!**************************************!*\
  !*** external "react-owl-carousel3" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-owl-carousel3");

/***/ }),

/***/ "react-paypal-express-checkout":
/*!************************************************!*\
  !*** external "react-paypal-express-checkout" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-paypal-express-checkout");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQvTWVnYU1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0L1RvcEhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9Ub3BQYW5lbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01vZGFsL0NhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Nb2RhbC9XaXNobGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NoZWNrb3V0L09yZGVyU3VtbWFyeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NoZWNrb3V0L1NoaXBwaW5nU3VtbWFyeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BheW1lbnRzL0NyZWRpdENhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYXltZW50cy9HY2FzaC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BheW1lbnRzL0dyYWJwYXkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYXltZW50cy9QYXltZW50TWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BheW1lbnRzL1BheXBhbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Nob3Atc3R5bGUtb25lL0ZhY2lsaXR5LmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2V4cHJlc3NjYXJkLnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvaW1nMi5qcGciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2ltZzMuanBnIiwid2VicGFjazovLy8uL2ltYWdlcy9pbWc0LmpwZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvbG9nb3MvYmFua3MyLmpwZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvbG9nb3MvY29kLmpwZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvbG9nb3MvZ2Nhc2gucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9sb2dvcy9sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvbWFzdGVyY2FyZC5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL21hc3RlcmNhcmQyLnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvdmlzYS5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL3Zpc2EyLnBuZyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcGF5bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL2FjdGlvbi10eXBlcy9jYXJ0LWFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9jYXJ0QWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL2luZm9BY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvdXNlckFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjcnlwdG8tanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5wcm9ncmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1vd2wtY2Fyb3VzZWwzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcGF5cGFsLWV4cHJlc3MtY2hlY2tvdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXRvYXN0aWZ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsXCIiXSwibmFtZXMiOlsiRm9vdGVyIiwiQ29tcG9uZW50IiwicmVuZGVyIiwiZGlzcGxheSIsIm1hcmdpbiIsInJlcXVpcmUiLCJob3N0IiwicHJvY2VzcyIsIk1lZ2FNZW51IiwicHJvcHMiLCJjYXJ0TGVuZ3RoIiwic2V0Y2FydExlbmd0aCIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRzdGF0ZSIsInNlYXJjaEZvcm0iLCJjb2xsYXBzZWQiLCJjaGVja0NhcnQiLCJjYXRlZ29yaWVzIiwic2V0Y2F0ZWdvcmllcyIsImhhbmRsZUNhcnQiLCJwcmV2U3RhdGUiLCJoYW5kbGVTZWFyY2hGb3JtIiwidG9nZ2xlTmF2YmFyIiwiY29uc29sZSIsImxvZyIsImZldGNoQ2F0ZWdvcmllcyIsInJlcyIsImF4aW9zIiwiZ2V0IiwiZGF0YSIsImVycm9yIiwidXNlRWZmZWN0IiwibXlQcm9kIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRlY3J5cHRlZERhdGEiLCJkZWNyeXB0RGF0YSIsImxlbmd0aCIsInByb2R1Y3RzIiwiZWxlbWVudElkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwic2Nyb2xsVG8iLCJjbGFzc09uZSIsImNsYXNzVHdvIiwid2lkdGgiLCJlIiwicHJldmVudERlZmF1bHQiLCJtYXAiLCJjYXRlZ29yeSIsImkiLCJzdGF0dXMiLCJzdWJfY2F0ZWdvcmllcyIsIm5hbWUiLCJzdWJDYXQiLCJzbHVnIiwibWFwU3RhdGVUb1Byb3BzIiwiYWRkZWRJdGVtcyIsImNvbm5lY3QiLCJSb3V0ZXIiLCJvblJvdXRlQ2hhbmdlU3RhcnQiLCJ1cmwiLCJOUHJvZ3Jlc3MiLCJzdGFydCIsIm9uUm91dGVDaGFuZ2VDb21wbGV0ZSIsImRvbmUiLCJvblJvdXRlQ2hhbmdlRXJyb3IiLCJOYXZiYXIiLCJUb3BIZWFkZXIiLCJ1c2VyIiwic2V0dXNlciIsInRva2VuIiwiY29va2llIiwiaGFuZGxlV2lzaGxpc3QiLCJsb2dvdXQiLCJPd2xDYXJvdXNlbCIsImR5bmFtaWMiLCJvcHRpb25zIiwibG9vcCIsIm5hdiIsImRvdHMiLCJhdXRvcGxheUhvdmVyUGF1c2UiLCJhdXRvcGxheSIsImFuaW1hdGVPdXQiLCJhbmltYXRlSW4iLCJpdGVtcyIsIm5hdlRleHQiLCJUb3BQYW5lbCIsInBhbmVsIiwiY29tcG9uZW50RGlkTW91bnQiLCJzZXRTdGF0ZSIsIkNhcnQiLCJpc0NhbXBhaWduIiwic2V0aXNDYW1wYWlnbiIsImRlY3J5cHRJbmZvRGF0YSIsImRlbGl2ZXJ5X2RhdGUiLCJ2YWx1ZSIsImhhbmRsZVJlbW92ZSIsImlkIiwicmVtb3ZlSXRlbSIsInRvYXN0IiwicG9zaXRpb24iLCJhdXRvQ2xvc2UiLCJoaWRlUHJvZ3Jlc3NCYXIiLCJjbG9zZU9uQ2xpY2siLCJwYXVzZU9uSG92ZXIiLCJkcmFnZ2FibGUiLCJjbG9zZUNhcnQiLCJvbkNsaWNrIiwidG90YWwiLCJjYW1wYWlnbl9wcmljZSIsInF1YW50aXR5IiwiZGlzY291bnRfcHJpY2UiLCJwYWRkaW5nUmlnaHQiLCJwcm9kdWN0IiwiaWR4IiwicHJvZHVjdF9pbWFnZXMiLCJmb3JtYXROdW1iZXIiLCJmbG9hdCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiV2lzaGxpc3QiLCJjbG9zZVdpc2hsaXN0IiwiT3JkZXJTdW1tYXJ5IiwiY2FydCIsInNldGNhcnQiLCJzZXR0b3RhbCIsImFsZXJ0IiwibG9jYXRpb24iLCJocmVmIiwibXlUb3RhbCIsImNvbG9yIiwidGV4dEFsaWduIiwic2hpcHBpbmciLCJTaGlwcGluZ1N1bW1hcnkiLCJ1c2VySW5mbyIsInNldHVzZXJJbmZvIiwiYmlsbGluZ19maXJzdE5hbWUiLCJiaWxsaW5nX2xhc3ROYW1lIiwiYmlsbGluZ19waG9uZSIsImJpbGxpbmdfZW1haWwiLCJzaGlwcGluZ19maXJzdE5hbWUiLCJzaGlwcGluZ19sYXN0TmFtZSIsInNoaXBwaW5nX3Bob25lIiwic2hpcHBpbmdfYWRkcmVzcyIsInNoaXBwaW5nX2NpdHkiLCJzaGlwcGluZ196aXAiLCJub3RlIiwibWVzc2FnZSIsIkNyZWRpdENhcmQiLCJhbW91bnQiLCJkZXNjcmlwdGlvbiIsImhhbmRsZVN1Ym1pdCIsInNldE5hbWUiLCJwaG9uZSIsInNldFBob25lIiwiZW1haWwiLCJzZXRFbWFpbCIsImNhcmRIb2xkZXIiLCJzZXRDYXJkSG9sZGVyIiwibnVtYmVyIiwic2V0TnVtYmVyIiwibW9udGgiLCJzZXRNb250aCIsInllYXIiLCJzZXRZZWFyIiwiY29kZSIsInNldENvZGUiLCJwYXltZW50U3RhdHVzIiwic2V0UGF5bWVudFN0YXR1cyIsImxpc3RlblRvUGF5bWVudCIsImZ1bGxDbGllbnQiLCJwYXltZW50SW50ZW50SWQiLCJzcGxpdCIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInBheW1lbnRJbnRlbnREYXRhIiwiZmV0Y2giLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJhdHRyaWJ1dGVzIiwibGFzdF9wYXltZW50X2Vycm9yIiwiSlNPTiIsInN0cmluZ2lmeSIsImNyZWF0ZVBheW1lbnRJbnRlbnQiLCJwYXltZW50SW50ZW50IiwibWV0aG9kIiwiYm9keSIsInBheW1lbnRfbWV0aG9kX2FsbG93ZWQiLCJwYXltZW50X21ldGhvZF9vcHRpb25zIiwiY2FyZCIsInJlcXVlc3RfdGhyZWVfZF9zZWN1cmUiLCJjdXJyZW5jeSIsInN0YXRlbWVudF9kZXNjcmlwdG9yIiwiY3JlYXRlUGF5bWVudE1ldGhvZCIsInBheW1lbnRNZXRob2QiLCJBY2NlcHQiLCJkZXRhaWxzIiwiY2FyZF9udW1iZXIiLCJleHBfbW9udGgiLCJwYXJzZUludCIsImV4cF95ZWFyIiwiY3ZjIiwiYmlsbGluZyIsInR5cGUiLCJlcnJvcnMiLCJkZXRhaWwiLCJjYXRjaCIsImVyciIsImF0dGFjaEludGVudE1ldGhvZCIsImludGVudCIsInBheW1lbnRfbWV0aG9kIiwiY2xpZW50X2tleSIsInBheW1lbnRJbnRlbnRTdGF0dXMiLCJvcGVuIiwibmV4dF9hY3Rpb24iLCJyZWRpcmVjdCIsIm9uU3VibWl0IiwiZXZlbnQiLCJ0YXJnZXQiLCJHQ2FzaCIsInBheVByb2Nlc3MiLCJzZXRQYXlQcm9jZXNzIiwicHVibGljS2V5IiwiY3JlYXRlU291cmNlIiwic3VjY2VzcyIsImZhaWxlZCIsInNvdXJjZUlkIiwic291cmNlRGF0YSIsInNvdXJjZSIsImNoZWNrb3V0X3VybCIsIkdyYWJQYXkiLCJQYXltZW50TWV0aG9kcyIsInVzZURpc3BhdGNoIiwic2VsZWN0ZWRQYXltZW50Iiwic2V0c2VsZWN0ZWRQYXltZW50IiwiaXNMb2FkaW5nIiwic2V0aXNMb2FkaW5nIiwiaXNDb2RPbiIsInNldGlzQ29kT24iLCJzZXRUb3RhbCIsImVuY3J5cHRlZEluZm9EYXRhIiwic3RhdGVTY2hlbWEiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZW5jcnlwdGVkRGF0YSIsImhhbmRsZUNoYW5nZSIsImZldGNoVXNlciIsInVzZXJEZXRhaWxzIiwiaGlzdG9yeSIsInB1c2giLCJoYW5kbGVDaGFuZ2VQcmljZSIsImNhcnRTdG9yYWdlIiwiY2FydEFycmF5IiwiZWwiLCJpbmRleCIsImZpbmRJbmRleCIsIml0ZW0iLCJwcm9kdWN0SWQiLCJlbmNyeXB0RGF0YSIsInNldEl0ZW0iLCJ1c2VySWQiLCJvcmRlckl0ZW1zIiwib2JqIiwiaXRlbVByaWNlIiwib3JkZXIiLCJzaGlwcGluZ0ZpcnN0TmFtZSIsInNoaXBwaW5nTGFzdE5hbWUiLCJzaGlwcGluZ1Bob25lIiwic2hpcHBpbmdBZGRyZXNzIiwic2hpcHBpbmdDaXR5Iiwic2hpcHBpbmdQcm92aW5jZSIsInNoaXBwaW5nWmlwIiwiZGVsaXZlcnlJbnN0cnVjdGlvbnMiLCJiaWxsaW5nRmlyc3ROYW1lIiwiYmlsbGluZ0xhc3ROYW1lIiwiYmlsbGluZ1Bob25lIiwiYmlsbGluZ0VtYWlsIiwiZGVsaXZlcnlEYXRlIiwiZGVsaXZlcnlUaW1lIiwiZGVsaXZlcnlfdGltZSIsInBvc3QiLCJlbmNyeXB0U3RyaW5nIiwib3JkZXJfbmFtZSIsInNlbmRFbWFpbFJlcyIsIm9yZGVyTmFtZSIsImNyeXB0b1N0ciIsImZvcm1hdERhdGUiLCJjbGVhckRhdGEiLCJ1cGRhdGVkT3JkZXJJdGVtcyIsIlNsaWRlIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwicGFkZGluZ1RvcCIsIm1hcmdpblRvcCIsIlBheXBhbCIsInBheW1lbnRPcHRpb25zIiwic2V0cGF5bWVudE9wdGlvbnMiLCJtZW1vIiwic2V0bWVtbyIsInByaWNlIiwicGF5ZXIiLCJ0cmFuc2FjdGlvbnMiLCJpdGVtX2xpc3QiLCJub3RlX3RvX3BheWVyIiwicmVkaXJlY3RfdXJscyIsInJldHVybl91cmwiLCJjYW5jZWxfdXJsIiwib25TdWNjZXNzIiwicGF5bWVudCIsIm9uQ2FuY2VsIiwib25FcnJvciIsImVudiIsImNsaWVudCIsInNhbmRib3giLCJwcm9kdWN0aW9uIiwiUEFZUEFMX0xJVkUiLCJGYWNpbGl0eSIsIm1vbnRoTmFtZXMiLCJkZWJvdW5jZSIsImZ1bmMiLCJ3YWl0IiwiaW1tZWRpYXRlIiwidGltZW91dCIsImNvbnRleHQiLCJhcmdzIiwiYXJndW1lbnRzIiwibGF0ZXIiLCJhcHBseSIsImNhbGxOb3ciLCJjbGVhclRpbWVvdXQiLCJudW0iLCJ0b0ZpeGVkIiwicmVwbGFjZSIsImlzRGF0ZUJlZm9yZVRvZGF5IiwiZGF0ZSIsIkRhdGUiLCJ0b0RhdGVTdHJpbmciLCJnZXRNb250aCIsImRheSIsImdldERhdGUiLCJnZXRGdWxsWWVhciIsIm9yaWdpbiIsImxhc3RIcmVmIiwibGFzdEFzIiwibGFzdFJlc3VsdCIsImFzIiwicmVzdWx0IiwiZm9ybWF0RnVuYyIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwicHJlZmV0Y2hlZCIsIm9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZ2V0T2JzZXJ2ZXIiLCJjb25zdHJ1Y3RvciIsInAiLCJtZW1vaXplZEZvcm1hdFVybCIsImZvcm1hdFVybCIsImFzSHJlZiIsIm5vZGVOYW1lIiwiaXNMb2NhbCIsInNjcm9sbCIsInNoYWxsb3ciLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImdldFBhdGhzIiwicmVzb2x2ZWRIcmVmIiwicGFyc2VkQXMiLCJoYW5kbGVSZWYiLCJyZWYiLCJpc1ByZWZldGNoZWQiLCJwcmVmZXRjaCIsInBhdGhzIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJSZWFjdCIsIndhcm4iLCJQcm9wVHlwZXMiLCJleGFjdCIsIkxpbmsiLCJwYXNzSHJlZiIsInNpbmdsZXRvblJvdXRlciIsInJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJPYmplY3QiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsInBhdGgiLCJwcmVwYXJlUm91dGUiLCJ0b1JvdXRlIiwiYXR0ZW1wdHMiLCJpc1NlcnZlclJlbmRlciIsInBhdGhuYW1lIiwiYWRkQmFzZVBhdGgiLCJfX05FWFRfREFUQV9fIiwiYnVpbGRJZCIsImRlbEJhc2VQYXRoIiwiY3JlZGVudGlhbHMiLCJnZXRSZXNwb25zZSIsInJvdXRlIiwicXVlcnkiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsImZldGNoTmV4dERhdGEiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsInVwZGF0ZSIsIm1vZCIsIm5ld0RhdGEiLCJyZWxvYWQiLCJiYWNrIiwiY2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwibWlzc2luZ1BhcmFtcyIsInBhcmFtIiwicmVqZWN0IiwiYXNQYXRobmFtZSIsInJvdXRlSW5mbyIsImFwcENvbXAiLCJjaGFuZ2VTdGF0ZSIsImdldFJvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsImhhbmRsZUVycm9yIiwicGFnZSIsImdpcEVyciIsImlzVmFsaWRFbGVtZW50VHlwZSIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJoYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiY2FuY2VsbGVkIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJURVNUX1JPVVRFIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwiZXNjYXBlZFJvdXRlIiwiZXNjYXBlUmVnZXgiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiaXNPcHRpb25hbCIsIiQxIiwiaXNDYXRjaEFsbCIsInBvcyIsInJlcGVhdCIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwia2V5IiwibmFtZWRSZWdleCIsInVzZWQiLCJwcm90b2NvbCIsImhvc3RuYW1lIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiSW5kZXgiLCJBRERfVE9fQ0FSVCIsIkFERF9UT19DQVJUX0FERE9OUyIsIlJFTU9WRV9JVEVNIiwiU1VCX1FVQU5USVRZIiwiQUREX1FVQU5USVRZIiwiQUREX1NISVBQSU5HIiwiQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSIiwiT1JERVJfRk9STSIsIkNIRUNLT1VUX0NIQVJHRSIsIlJFU0VUX0NBUlQiLCJBRERfVE9fQ09NUEFSRSIsIlJFTU9WRV9JVEVNX0ZST01fQ09NUEFSRSIsIlVQREFURV9DQVJUIiwiQ3J5cHRvSlMiLCJBRVMiLCJlbmNyeXB0IiwiYnl0ZXMiLCJkZWNyeXB0Iiwic3RyaW5nQXJyYXkiLCJwYXJzZSIsImVuYyIsIlV0ZjgiLCJhZGRUb0NhcnQiLCJhZGRUb0NhcnRBZGRvbnMiLCJzdWJ0cmFjdFF1YW50aXR5IiwiYWRkUXVhbnRpdHkiLCJhZGRRdWFudGl0eVdpdGhOdW1iZXIiLCJxdHkiLCJyZXNldENhcnQiLCJhZGRUb0NvbXBhcmUiLCJyZW1vdmVJdGVtRnJvbUNvbXBhcmUiLCJlbmNyeXB0SW5mb0RhdGEiLCJpbmZvSXRlbSIsImVuY29kZVVSSUNvbXBvbmVudCIsImRlY3J5cHRTdHJpbmciLCJ1c2VyUmVnaXN0ZXIiLCJ1c2VyRGF0YSIsInNldElzTG9hZGluZyIsImV4cGlyZXMiLCJ1c2VyTG9naW4iLCJlbmNyeXB0VXNlckRhdGEiLCJVU0VSX0tFWSIsIlVTRVJfQ09PS0lFIiwiZGVjcnlwdFVzZXJEYXRhIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsY0FBYztRQUNkLElBQUk7UUFDSjs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDckdBLHdFOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTs7QUFFQSxNQUFNQSxNQUFOLFNBQXFCQywrQ0FBckIsQ0FBK0I7QUFDN0JDLFFBQU0sR0FB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RixFQWtCRTtBQUFRLFNBQUssRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFsQkYsRUFtQkU7QUFBUSxTQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBbkJGLEVBb0JFO0FBQVEsU0FBSyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQXBCRixFQXFCRTtBQUFRLFNBQUssRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFyQkYsRUFzQkU7QUFBUSxTQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBdEJGLEVBdUJFO0FBQVEsU0FBSyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQXZCRixFQXdCRTtBQUFRLFNBQUssRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUF4QkYsRUF5QkU7QUFBUSxTQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBekJGLEVBMEJFO0FBQVEsU0FBSyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQTFCRixFQTJCRTtBQUFRLFNBQUssRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUEzQkYsRUE0QkU7QUFBUSxTQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBNUJGLEVBNkJFO0FBQVEsU0FBSyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQTdCRixFQThCRTtBQUFRLFNBQUssRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUE5QkYsRUErQkU7QUFBUSxTQUFLLEVBQUMsTUFBZDtB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O0FBQ0EsVUFBSXZCLFdBQVcsR0FBR3RXLElBQUksQ0FBQ3VXLEtBQUwsQ0FBV0gsS0FBSyxDQUFDMVcsUUFBTixDQUFldVcsUUFBUSxDQUFDTyxHQUFULENBQWFDLElBQTVCLENBQVgsQ0FBbEI7QUFDQSxhQUFPSCxXQUFQO0FBQ0QsS0FKRCxNQUlPO0FBQ0wsYUFBTyxLQUFQO0FBQ0Q7QUFDRixHQVhELENBV0UsT0FBTzNnQixLQUFQLEVBQWM7QUFDZFAsV0FBTyxDQUFDQyxHQUFSLENBQVlNLEtBQVo7QUFFQUcsZ0JBQVksQ0FBQ3dFLFVBQWIsQ0FBd0JuRyxPQUFPLENBQUMrVCxHQUFSLENBQVk0UCxXQUFwQztBQUNBLFdBQU8sS0FBUDtBQUNEO0FBQ0YsQ0FsQk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RVAsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHBheW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJzdGF0aWNcXFxcZGV2ZWxvcG1lbnRcXFxccGFnZXNcXFxccGF5bWVudC5qc1wiOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIHVuY2F1Z2h0IGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBpbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY2xhc3MgRm9vdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3Rlci1hcmVhXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1mb290ZXItd2lkZ2V0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17eyBtYXJnaW46IFwiYXV0b1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvbG9nb3MvbG9nby5wbmdcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxvZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBXZSBvZmZlciB0aGUgYmVzdCBicmFuZHMgb2YgQmlrZXMsIEUtU2Nvb3RlciwgRS1CaWtlcyAmIEUtUmlkZXMgYXZhaWxhYmxlIGluIHRoZSBtYXJrZXQuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLWZvb3Rlci13aWRnZXRcIj5cclxuICAgICAgICAgICAgICAgIDxoMz5RdWljayBMaW5rczwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInF1aWNrLWxpbmtzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YT5BYm91dCBVczwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2ZhcVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+RmFxJ3M8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3VzdG9tZXItc2VydmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+Q3VzdG9tZXIgU2VydmljZXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPiAqL31cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdC11c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+Q29udGFjdCBVczwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1mb290ZXItd2lkZ2V0XCI+XHJcbiAgICAgICAgICAgICAgICA8aDM+SW5mb3JtYXRpb248L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJpbmZvcm1hdGlvbi1saW5rc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+QWJvdXQgVXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdC11c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+Q29udGFjdCBVczwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+ICovfVxyXG4gICAgICAgICAgICAgICAgICB7LyogPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2l6aW5nLWd1aWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YT5TaXppbmcgR3VpZGU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPiAqL31cclxuICAgICAgICAgICAgICAgICAgey8qIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2N1c3RvbWVyLXNlcnZpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhPkN1c3RvbWVyIFNlcnZpY2VzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT4gKi99XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1mb290ZXItd2lkZ2V0XCI+XHJcbiAgICAgICAgICAgICAgICA8aDM+Q29udGFjdCBVczwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZvb3Rlci1jb250YWN0LWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1tYXAtbWFya2VyLWFsdFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICBMb2NhdGlvbiAoTWFuaWxhIEJyYW5jaCk6IDQxLTMxIExpbGFjIFN0LCBNYXJpa2luYSwgMTgwMCBNZXRybyBNYW5pbGEsIFBoaWxpcHBpbmVzXHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGhvbmVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInRlbDooKzEyMykgNDU2LTc4OThcIj4gMDkxNiA1MDkgMTA4MyAoR0xPQkUpPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBob25lXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6KCsxMjMpIDQ1Ni03ODk4XCI+MDk2MSA4MTAgMDEyOCAoU01BUlQpPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWVudmVsb3BlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIEVtYWlsIFVzOntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOnN1cHBvcnRAV2UgLSBPcmRlci5jb21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIGktV2hlZWxzMjZAZ21haWwuY29tXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1mYXhcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgRmF4OiA8YSBocmVmPVwidGVsOisxMjM0NTZcIj4rMTIzNDU2PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPiAqL31cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29weXJpZ2h0LWFyZWFcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgIDxwPkNvcHlyaWdodCBAIDIwMjMgaS1XaGVlbHNQSDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBheW1lbnQtY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL3Zpc2EucG5nXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvbWFzdGVyY2FyZC5wbmdcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9tYXN0ZXJjYXJkMi5wbmdcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy92aXNhMi5wbmdcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9leHByZXNzY2FyZC5wbmdcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBDYXJ0IGZyb20gXCIuLi9Nb2RhbC9DYXJ0XCI7XHJcbmltcG9ydCB7IGRlY3J5cHREYXRhIH0gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvY2FydEFjdGlvbnNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxubGV0IGhvc3QgPSBwcm9jZXNzLmVudi5BUElfVVJMO1xyXG5cclxuZnVuY3Rpb24gTWVnYU1lbnUocHJvcHMpIHtcclxuICBjb25zdCBbY2FydExlbmd0aCwgc2V0Y2FydExlbmd0aF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc3QgW3N0YXRlLCBzZXRzdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBkaXNwbGF5OiBmYWxzZSxcclxuICAgIHNlYXJjaEZvcm06IGZhbHNlLFxyXG4gICAgY29sbGFwc2VkOiB0cnVlLFxyXG4gICAgY2hlY2tDYXJ0OiBmYWxzZSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW2NhdGVnb3JpZXMsIHNldGNhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDYXJ0ID0gKCkgPT4ge1xyXG4gICAgc2V0c3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGRpc3BsYXk6ICFwcmV2U3RhdGUuZGlzcGxheSxcclxuICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTZWFyY2hGb3JtID0gKCkgPT4ge1xyXG4gICAgc2V0c3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHNlYXJjaEZvcm06ICFwcmV2U3RhdGUuc2VhcmNoRm9ybSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZU5hdmJhciA9ICgpID0+IHtcclxuICAgIHNldHN0YXRlKHtcclxuICAgICAgY29sbGFwc2VkOiAhc3RhdGUuY29sbGFwc2VkLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBjb25zb2xlLmxvZyhzdGF0ZSk7XHJcbiAgY29uc3QgZmV0Y2hDYXRlZ29yaWVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtob3N0fS9hcGkvdXNlci9jYXRlZ29yeS9gKTtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIHNldGNhdGVnb3JpZXMocmVzLmRhdGEuY2F0ZWdvcmllcyk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaENhdGVnb3JpZXMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgbXlQcm9kID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvY2Vzcy5lbnYuQ0FSVF9DT09LSUUpXHJcbiAgICAgID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvY2Vzcy5lbnYuQ0FSVF9DT09LSUUpXHJcbiAgICAgIDogW107XHJcbiAgICBsZXQgZGVjcnlwdGVkRGF0YSA9IGRlY3J5cHREYXRhKG15UHJvZCk7XHJcbiAgICBzZXRjYXJ0TGVuZ3RoKGRlY3J5cHRlZERhdGEubGVuZ3RoKTtcclxuICB9LCBbcHJvcHMucHJvZHVjdHNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBlbGVtZW50SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhclwiKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAxNzApIHtcclxuICAgICAgICBlbGVtZW50SWQuY2xhc3NMaXN0LmFkZChcImlzLXN0aWNreVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlbGVtZW50SWQuY2xhc3NMaXN0LnJlbW92ZShcImlzLXN0aWNreVwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCB7IGNvbGxhcHNlZCB9ID0gc3RhdGU7XHJcbiAgY29uc3QgY2xhc3NPbmUgPSBjb2xsYXBzZWRcclxuICAgID8gXCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIlxyXG4gICAgOiBcImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZSBzaG93XCI7XHJcbiAgY29uc3QgY2xhc3NUd28gPSBjb2xsYXBzZWRcclxuICAgID8gXCJuYXZiYXItdG9nZ2xlciBuYXZiYXItdG9nZ2xlci1yaWdodCBjb2xsYXBzZWRcIlxyXG4gICAgOiBcIm5hdmJhci10b2dnbGVyIG5hdmJhci10b2dnbGVyLXJpZ2h0XCI7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWFyZWFcIj5cclxuICAgICAgICA8ZGl2IGlkPVwibmF2YmFyXCIgY2xhc3NOYW1lPVwiY29tZXJvLW5hdlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1tZCBuYXZiYXItbGlnaHRcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVOYXZiYXJ9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzVHdvfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI25hdmJhclN1cHBvcnRlZENvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL2xvZ29zL2xvZ28ucG5nXCIpfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMHJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhcl9sb2dvXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZXdfY2FydFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3RpZmljYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYXMgZmEtc2hvcHBpbmctYmFnXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2FydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmFkZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDYXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjYXJ0TGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzT25lfSBpZD1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2XCI+XHJcbiAgICAgICAgICAgICAgICAgIHsvKntjYXRlZ29yaWVzLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnkuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5LnN1Yl9jYXRlZ29yaWVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0gY2xhc3NOYW1lPVwibmF2LWl0ZW0gcC1yZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGtleT17aX0gaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5uYW1lfXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tZG93blwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkuc3ViX2NhdGVnb3JpZXMubWFwKChzdWJDYXQsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9zdWJjYXRlZ29yeS8ke3N1YkNhdC5zbHVnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1YkNhdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfSBjbGFzc05hbWU9XCJuYXYtaXRlbSBtZWdhbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvY2F0ZWdvcnkvJHtjYXRlZ29yeS5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj57Y2F0ZWdvcnkubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICApIDogbnVsbH0gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICB7Y2F0ZWdvcmllcy5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnksIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5LnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeS5zdWJfY2F0ZWdvcmllcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9IGNsYXNzTmFtZT1cIm5hdi1pdGVtIHAtcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBrZXk9e2l9IGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkubmFtZX17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLWRvd25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5LnN1Yl9jYXRlZ29yaWVzLm1hcCgoc3ViQ2F0LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0gY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2Avc3ViY2F0ZWdvcnkvJHtzdWJDYXQuc2x1Z31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJDYXQubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0gY2xhc3NOYW1lPVwibmF2LWl0ZW0gbWVnYW1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2NhdGVnb3J5LyR7Y2F0ZWdvcnkuc2x1Z31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+e2NhdGVnb3J5Lm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgICAgICB7LyogPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG1lZ2FtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+Um9hZCBiaWtlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBtZWdhbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPk1vdW50YWluIGJpa2U8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG1lZ2FtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+Rml4aWUgYmlrZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbWVnYW1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5FLWJpa2U8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gcC1yZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBCdWRnZXQgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tZG93blwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9idWRnZXQ/Zj0wJnQ9MTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+QkVMT1cg4oKxMSw1MDA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYnVkZ2V0P2Y9MTUwMCZ0PTMwMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPuKCsTEsNTAwIC0g4oKxMywwMDA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYnVkZ2V0P2Y9MzAwMCZ0PTQ1MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPuKCsTMsMDAwIC0g4oKxNCw1MDA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYnVkZ2V0P2Y9NDUwMCZ0PTEwMDAwMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPuKCsTQsNTAwIEFORCBBQk9WRTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPiAqL31cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdGhlcnMtb3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2VhcmNoRm9ybX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1idG4gZmFzIGZhLXNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBzdGF0ZS5zZWFyY2hGb3JtID8gXCJub25lXCIgOiBcImJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID48L2k+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZWFyY2hGb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY2xvc2UtYnRuIGZhcyBmYS10aW1lcyAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5zZWFyY2hGb3JtID8gXCJhY3RpdmVcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgID48L2k+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1vdmVybGF5IHNlYXJjaC1wb3B1cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBzdGF0ZS5zZWFyY2hGb3JtID8gXCJibG9ja1wiIDogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIvc2VhcmNoXCIgY2xhc3NOYW1lPVwic2VhcmNoLWZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2VhcmNoLWJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zZWFyY2hcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2FydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDYXJ0KHtjYXJ0TGVuZ3RofSl7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zaG9wcGluZy1iYWdcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3N0YXRlLmRpc3BsYXkgPyA8Q2FydCBvbkNsaWNrPXtoYW5kbGVDYXJ0fSAvPiA6IFwiXCJ9XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9kdWN0czogc3RhdGUuYWRkZWRJdGVtcyxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKE1lZ2FNZW51KTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVG9wUGFuZWwgZnJvbSBcIi4vVG9wUGFuZWxcIjtcclxuaW1wb3J0IFRvcEhlYWRlciBmcm9tIFwiLi9Ub3BIZWFkZXJcIjtcclxuaW1wb3J0IE1lZ2FNZW51IGZyb20gXCIuL01lZ2FNZW51XCI7XHJcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSBcIm5wcm9ncmVzc1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuUm91dGVyLm9uUm91dGVDaGFuZ2VTdGFydCA9ICh1cmwpID0+IE5Qcm9ncmVzcy5zdGFydCgpO1xyXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUNvbXBsZXRlID0gKHVybCkgPT4gTlByb2dyZXNzLmRvbmUoKTtcclxuUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9ICh1cmwpID0+IE5Qcm9ncmVzcy5kb25lKCk7XHJcblxyXG5jbGFzcyBOYXZiYXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8VG9wUGFuZWwgLz5cclxuICAgICAgICA8VG9wSGVhZGVyIC8+XHJcbiAgICAgICAgPE1lZ2FNZW51IC8+XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBXaXNobGlzdCBmcm9tIFwiLi4vTW9kYWwvV2lzaGxpc3RcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCB7IGxvZ291dCB9IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL3VzZXJBY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiBUb3BIZWFkZXIocHJvcHMpIHtcclxuICBjb25zdCBbc3RhdGUsIHNldHN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIGRpc3BsYXk6IGZhbHNlLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbdXNlciwgc2V0dXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGxldCBlbmNyeXB0ZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvY2Vzcy5lbnYuVVNFUl9DT09LSUUpXHJcbiAgICAvLyAgID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvY2Vzcy5lbnYuVVNFUl9DT09LSUUpXHJcbiAgICAvLyAgIDogW107XHJcblxyXG4gICAgLy8gbGV0IHVzZXIgPSBkZWNyeXB0VXNlckRhdGEoZW5jcnlwdGVkRGF0YSk7XHJcbiAgICBsZXQgdG9rZW4gPSBjb29raWUuZ2V0KFwiX3d1c19CSktcIik7XHJcbiAgICBjb25zb2xlLmxvZyh0b2tlbik7XHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgc2V0dXNlcih0b2tlbik7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVXaXNobGlzdCA9ICgpID0+IHtcclxuICAgIHNldHN0YXRlKChwcmV2U3RhdGUpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBkaXNwbGF5OiAhcHJldlN0YXRlLmRpc3BsYXksXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1oZWFkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTcgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidG9wLWhlYWRlci1uYXZcIj5cclxuICAgICAgICAgICAgICAgIHshdXNlciA/IChcclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhPkxvZ2luPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+QWJvdXQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+T3VyIFN0b3JlczwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9mYXFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5GQVEnczwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0LXVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+Q29udGFjdDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTUgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidG9wLWhlYWRlci1yaWdodC1uYXZcIj5cclxuICAgICAgICAgICAgICAgIHsvKiA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI3Nob3BwaW5nV2lzaGxpc3RNb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlV2lzaGxpc3QoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2lzaGxpc3QgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWhlYXJ0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4gKi99XHJcbiAgICAgICAgICAgICAgICB7LyogPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29tcGFyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbXBhcmUgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJhbGFuY2Utc2NhbGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPiAqL31cclxuICAgICAgICAgICAgICAgIHsvKiA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhbmd1YWdlcy1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj5Fbmc8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5HZXI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj5TcGFuPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4gKi99XHJcbiAgICAgICAgICAgICAgICB7dXNlciA/IChcclxuICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvZmlsZSA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gbG9nb3V0KCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dvdXQgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNpZ24tb3V0LWFsdFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPExpbmsgaHJlZj1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zaWduLWluLWFsdFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHtzdGF0ZS5kaXNwbGF5ID8gPFdpc2hsaXN0IG9uQ2xpY2s9e2hhbmRsZVdpc2hsaXN0fSAvPiA6IFwiXCJ9XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvcEhlYWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuY29uc3QgT3dsQ2Fyb3VzZWwgPSBkeW5hbWljKGltcG9ydChcInJlYWN0LW93bC1jYXJvdXNlbDNcIikpO1xyXG5cclxuY29uc3Qgb3B0aW9ucyA9IHtcclxuICBsb29wOiB0cnVlLFxyXG4gIG5hdjogZmFsc2UsXHJcbiAgZG90czogZmFsc2UsXHJcbiAgYXV0b3BsYXlIb3ZlclBhdXNlOiB0cnVlLFxyXG4gIGF1dG9wbGF5OiB0cnVlLFxyXG4gIGFuaW1hdGVPdXQ6IFwic2xpZGVPdXREb3duXCIsXHJcbiAgYW5pbWF0ZUluOiBcImZsaXBJblhcIixcclxuICBpdGVtczogMSxcclxuICBuYXZUZXh0OiBbXHJcbiAgICBcIjxpIGNsYXNzPSdmYXMgZmEtY2hldnJvbi1sZWZ0Jz48L2k+XCIsXHJcbiAgICBcIjxpIGNsYXNzPSdmYXMgZmEtY2hldnJvbi1yaWdodCc+PC9pPlwiLFxyXG4gIF0sXHJcbn07XHJcblxyXG5jbGFzcyBUb3BQYW5lbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBkaXNwbGF5OiBmYWxzZSxcclxuICAgIHBhbmVsOiB0cnVlLFxyXG4gIH07XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXk6IHRydWUgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgeyBwYW5lbCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdG9wLXBhbmVsICR7cGFuZWwgPyBcIlwiIDogXCJoaWRlXCJ9YH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5kaXNwbGF5ID8gKFxyXG4gICAgICAgICAgICAgIDxPd2xDYXJvdXNlbFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidG9wLXBhbmVsLXNsaWRlcyBvd2wtY2Fyb3VzZWwgb3dsLXRoZW1lXCJcclxuICAgICAgICAgICAgICAgIHsuLi5vcHRpb25zfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLWl0ZW0tYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgV2Ugb2ZmZXIgdGhlIGJlc3QgYnJhbmRzIG9mIEJpa2VzLCBFLVNjb290ZXIsIEUtQmlrZXMgJiBFLVJpZGVzIGF2YWlsYWJsZSBpbiB0aGUgbWFya2V0LlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1pdGVtLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPjEgLSA3IERheXMgRGVsaXZlcnkgTmF0aW9ud2lkZTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1pdGVtLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk5ld2x5IEFycml2ZWQgUHJvZHVjdHMhPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1pdGVtLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+RW5qb3kgYW4gZXh0cmEgMjAlIG9mZjwvc3Ryb25nPiBzZWxlY3Qgc2FsZXMgc3R5bGVzIDxMaW5rIGhyZWY9XCIjXCI+PGE+UmVhZCBNb3JlPC9hPjwvTGluaz48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1pdGVtLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+RW5qb3kgYW4gZXh0cmEgMjAlIG9mZjwvc3Ryb25nPiBzZWxlY3Qgc2FsZXMgc3R5bGVzIDxMaW5rIGhyZWY9XCIjXCI+PGE+UmVhZCBNb3JlPC9hPjwvTGluaz48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgPC9Pd2xDYXJvdXNlbD5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBwYW5lbDogZmFsc2UgfSl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzIHBhbmVsLWNsb3NlLWJ0blwiXHJcbiAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9wUGFuZWw7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxubGV0IGhvc3QgPSBwcm9jZXNzLmVudi5BUElfVVJMO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHJlbW92ZUl0ZW0sIGRlY3J5cHREYXRhIH0gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvY2FydEFjdGlvbnNcIjtcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0LCBTbGlkZSB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5pbXBvcnQgeyBmb3JtYXROdW1iZXIgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9mdW5jdGlvblwiO1xyXG5pbXBvcnQgeyBkZWNyeXB0SW5mb0RhdGEgfSBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9pbmZvQWN0aW9uc1wiO1xyXG5cclxuZnVuY3Rpb24gQ2FydChwcm9wcykge1xyXG4gIGNvbnN0IFtpc0NhbXBhaWduLCBzZXRpc0NhbXBhaWduXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc3RhdGUsIHNldHN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIGRpc3BsYXk6IGZhbHNlLFxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGRlY3J5cHRlZERhdGEgPSBkZWNyeXB0SW5mb0RhdGEoKTtcclxuXHJcbiAgICBpZiAoZGVjcnlwdGVkRGF0YSkge1xyXG4gICAgICBpZiAoZGVjcnlwdGVkRGF0YS5kZWxpdmVyeV9kYXRlLnZhbHVlID09IFwiMjAyMy0wMi0xNFwiKSB7XHJcbiAgICAgICAgc2V0aXNDYW1wYWlnbih0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVtb3ZlID0gKGlkKSA9PiB7XHJcbiAgICBwcm9wcy5yZW1vdmVJdGVtKGlkKTtcclxuXHJcbiAgICB0b2FzdC5lcnJvcihcIlJlbW92ZWQgZnJvbSBjYXJ0XCIsIHtcclxuICAgICAgcG9zaXRpb246IFwiYm90dG9tLWxlZnRcIixcclxuICAgICAgYXV0b0Nsb3NlOiA1MDAwLFxyXG4gICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xvc2VDYXJ0ID0gKCkgPT4ge1xyXG4gICAgcHJvcHMub25DbGljayhzdGF0ZS5kaXNwbGF5KTtcclxuICB9O1xyXG5cclxuICBsZXQgeyBwcm9kdWN0cyB9ID0gcHJvcHM7XHJcbiAgcHJvZHVjdHMgPSBwcm9kdWN0cy5sZW5ndGhcclxuICAgID8gcHJvZHVjdHNcclxuICAgIDogbG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvY2Vzcy5lbnYuQ0FSVF9DT09LSUUpXHJcbiAgICA/IGRlY3J5cHREYXRhKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2Nlc3MuZW52LkNBUlRfQ09PS0lFKSlcclxuICAgIDogW107XHJcblxyXG4gIHZhciB0b3RhbCA9IDA7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9kdWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYoaXNDYW1wYWlnbil7XHJcbiAgICAgIHRvdGFsID0gdG90YWwgKyBwcm9kdWN0c1tpXS5jYW1wYWlnbl9wcmljZSAqIHByb2R1Y3RzW2ldLnF1YW50aXR5O1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgdG90YWwgPSB0b3RhbCArIHByb2R1Y3RzW2ldLmRpc2NvdW50X3ByaWNlICogcHJvZHVjdHNbaV0ucXVhbnRpdHk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJtb2RhbCByaWdodCBmYWRlIHNob3cgc2hvcHBpbmdDYXJ0TW9kYWxcIlxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMTZweFwiLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2VcIlxyXG4gICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlQ2FydH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICA8aDM+TXkgQ2FydCAoe3Byb2R1Y3RzLmxlbmd0aH0pPC9oMz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJ0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICB7cHJvZHVjdHMubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICAgICAgPyBwcm9kdWN0cy5tYXAoKHByb2R1Y3QsIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJ0XCIga2V5PXtpZHh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake2hvc3R9L3Byb2R1Y3RzLyR7cHJvZHVjdC5wcm9kdWN0X2ltYWdlc1swXVtcImZpbGVfbmFtZVwiXX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntwcm9kdWN0Lm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwcm9kdWN0LnF1YW50aXR5fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+eDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDigrFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNDYW1wYWlnblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmb3JtYXROdW1iZXIocHJvZHVjdC5jYW1wYWlnbl9wcmljZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZm9ybWF0TnVtYmVyKHByb2R1Y3QuZGlzY291bnRfcHJpY2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmbG9hdDogXCJyaWdodFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVtb3ZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUmVtb3ZlKHByb2R1Y3QuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtdHJhc2gtYWx0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICA6IFwiRW1wdHlcIn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY2FydC1zdWJ0b3RhbFwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPlN1YnRvdGFsPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWJ0b3RhbFwiPuKCsXtmb3JtYXROdW1iZXIodG90YWwpfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY2FydC1idG5cIj5cclxuICAgICAgICAgICAgICB7LyogPExpbmsgaHJlZj1cIi9jaGVja291dFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+UHJvY2VlZCB0byBDaGVja291dDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+ICovfVxyXG4gICAgICAgICAgICAgIHtwcm9kdWN0cy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2FydFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWxpZ2h0XCI+VmlldyBTaG9wcGluZyBDYXJ0PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb2R1Y3RzOiBzdGF0ZS5hZGRlZEl0ZW1zLFxyXG4gICAgdG90YWw6IHN0YXRlLnRvdGFsLFxyXG4gICAgLy9hZGRlZEl0ZW1zOiBzdGF0ZS5hZGRlZEl0ZW1zXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICByZW1vdmVJdGVtOiAoaWQpID0+IHtcclxuICAgICAgZGlzcGF0Y2gocmVtb3ZlSXRlbShpZCkpO1xyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ2FydCk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jbGFzcyBXaXNobGlzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgZGlzcGxheTogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgY2xvc2VXaXNobGlzdCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uQ2xpY2sodGhpcy5zdGF0ZS5kaXNwbGF5KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsIHJpZ2h0IGZhZGUgc2hvdyBzaG9wcGluZ1dpc2hsaXN0TW9kYWxcIiBcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLCBwYWRkaW5nUmlnaHQ6IFwiMTZweFwiXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2VcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jbG9zZVdpc2hsaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPk15IFdpc2ggTGlzdCAoMyk8L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJ0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY2FydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL2ltZzIuanBnXCIpfSBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5CZWx0ZWQgY2hpbm8gdHJvdXNlcnMgcG9sbzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Qmx1ZSAvIFhTPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+MTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj54PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByaWNlXCI+JDE5MS4wMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9pbWczLmpwZ1wiKX0gYWx0PVwiaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+QmVsdGVkIGNoaW5vIHRyb3VzZXJzIHBvbG88L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkJsdWUgLyBYUzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+eDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmljZVwiPiQxOTEuMDA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvaW1nNC5qcGdcIil9IGFsdD1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkJlbHRlZCBjaGlubyB0cm91c2VycyBwb2xvPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5CbHVlIC8gWFM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4xPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPng8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2VcIj4kMTkxLjAwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcnQtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saWdodFwiPlZpZXcgU2hvcHBpbmcgQ2FydDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2lzaGxpc3Q7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBmb3JtYXROdW1iZXIgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9mdW5jdGlvblwiO1xyXG5pbXBvcnQgeyBkZWNyeXB0RGF0YSB9IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2NhcnRBY3Rpb25zXCI7XHJcbmltcG9ydCB7IGRlY3J5cHRJbmZvRGF0YSB9IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2luZm9BY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiBPcmRlclN1bW1hcnkocHJvcHMpIHtcclxuICBjb25zdCBbaXNDYW1wYWlnbiwgc2V0aXNDYW1wYWlnbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2NhcnQsIHNldGNhcnRdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt0b3RhbCwgc2V0dG90YWxdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgZGVjcnlwdGVkRGF0YSA9IGRlY3J5cHRJbmZvRGF0YSgpO1xyXG5cclxuICAgIGlmIChkZWNyeXB0ZWREYXRhKSB7XHJcbiAgICAgIGlmIChkZWNyeXB0ZWREYXRhLmRlbGl2ZXJ5X2RhdGUudmFsdWUgPT0gXCIyMDIzLTAyLTE0XCIpIHtcclxuICAgICAgICBzZXRpc0NhbXBhaWduKHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IG15UHJvZCA9IHByb3BzLnByb2R1Y3RzLmxlbmd0aFxyXG4gICAgICA/IHByb3BzLnByb2R1Y3RzXHJcbiAgICAgIDogbG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvY2Vzcy5lbnYuQ0FSVF9DT09LSUUpXHJcbiAgICAgID8gZGVjcnlwdERhdGEobG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvY2Vzcy5lbnYuQ0FSVF9DT09LSUUpKVxyXG4gICAgICA6IFtdO1xyXG5cclxuICAgIGlmIChteVByb2QubGVuZ3RoIDw9IDApIHtcclxuICAgICAgYWxlcnQoXCJZb3UgZG9udCBoYXZlIGFueSBpdGVtcyBpbiB5b3VyIGNhcnQuXCIpO1xyXG4gICAgICByZXR1cm4gKHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBteVRvdGFsID0gMDtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbXlQcm9kLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChpc0NhbXBhaWduKSB7XHJcbiAgICAgICAgbXlUb3RhbCA9IG15VG90YWwgKyBteVByb2RbaV0uY2FtcGFpZ25fcHJpY2UgKiBteVByb2RbaV0ucXVhbnRpdHk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbXlUb3RhbCA9IG15VG90YWwgKyBteVByb2RbaV0uZGlzY291bnRfcHJpY2UgKiBteVByb2RbaV0ucXVhbnRpdHk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRjYXJ0KG15UHJvZCk7XHJcbiAgICBzZXR0b3RhbChteVRvdGFsKTtcclxuICB9LCBbcHJvcHMucHJvZHVjdHMsIGlzQ2FtcGFpZ25dKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXItdGFibGUgdGFibGUtcmVzcG9uc2l2ZVwiPlxyXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtYm9yZGVyZWRcIj5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlByb2R1Y3QgTmFtZTwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlRvdGFsPC90aD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuXHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAge2NhcnQubWFwKChkYXRhLCBpZHgpID0+IChcclxuICAgICAgICAgICAgPHRyIGtleT17aWR4fT5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHJvZHVjdC1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3QvJHtkYXRhLnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLm5hbWV9IHtcIlwifSB7ZGF0YS5xdWFudGl0eX14XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHJvZHVjdC10b3RhbFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3VidG90YWwtYW1vdW50XCI+XHJcbiAgICAgICAgICAgICAgICAgIOKCsVxyXG4gICAgICAgICAgICAgICAgICB7aXNDYW1wYWlnblxyXG4gICAgICAgICAgICAgICAgICAgID8gZm9ybWF0TnVtYmVyKGRhdGEuY2FtcGFpZ25fcHJpY2UgKiBkYXRhLnF1YW50aXR5KVxyXG4gICAgICAgICAgICAgICAgICAgIDogZm9ybWF0TnVtYmVyKGRhdGEuZGlzY291bnRfcHJpY2UgKiBkYXRhLnF1YW50aXR5KX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAge3RvdGFsIDwgMTAwICYmIChcclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJvcmRlci1zdWJ0b3RhbFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+U2VydmljZSBDaGFyZ2U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm9yZGVyLXN1YnRvdGFsLXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvcmRlci1zdWJ0b3RhbC1hbW91bnRcIj5cclxuICAgICAgICAgICAgICAgICAg4oKxe2Zvcm1hdE51bWJlcigxMDAgLSB0b3RhbCl9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwib3JkZXItc3VidG90YWxcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5DYXJ0IFN1YnRvdGFsPC9zcGFuPlxyXG4gICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm9yZGVyLXN1YnRvdGFsLXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3JkZXItc3VidG90YWwtYW1vdW50XCI+XHJcbiAgICAgICAgICAgICAg4oKxe2Zvcm1hdE51bWJlcih0b3RhbCA8IDEwMCA/IDEwMCA6IHRvdGFsKX1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG5cclxuICAgICAgICAgIHsvKiA8dHI+XHJcbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJvcmRlci1zaGlwcGluZ1wiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPlNoaXBwaW5nPC9zcGFuPlxyXG4gICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInNoaXBwaW5nLXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+4oKxMTUwLjAwPC9zcGFuPlxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgPC90cj4gKi99XHJcblxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidG90YWwtcHJpY2VcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5PcmRlciBUb3RhbDwvc3Bhbj5cclxuICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwcm9kdWN0LXN1YnRvdGFsXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3VidG90YWwtYW1vdW50XCI+XHJcbiAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICDigrF7Zm9ybWF0TnVtYmVyKHRvdGFsIDwgMTAwID8gMTAwIDogdG90YWwpfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgICAge3RvdGFsIDwgMTAwICYmIChcclxuICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgTWluaW11bSBvcmRlciBpcyAxMDAuIElmIG9yZGVyIGlzIGJlbG93IDEwMCwgeW91IHdpbGwgYmUgY2hhcmdlIHRvXHJcbiAgICAgICAgICBnZXQgdG8gdGhlIDEwMCBsaW1pdC5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvZHVjdHM6IHN0YXRlLmFkZGVkSXRlbXMsXHJcbiAgICB0b3RhbDogc3RhdGUudG90YWwsXHJcbiAgICBzaGlwcGluZzogc3RhdGUuc2hpcHBpbmcsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShPcmRlclN1bW1hcnkpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgZGVjcnlwdEluZm9EYXRhIH0gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvaW5mb0FjdGlvbnNcIjtcclxuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2Z1bmN0aW9uXCI7XHJcblxyXG5mdW5jdGlvbiBTaGlwcGluZ1N1bW1hcnkocHJvcHMpIHtcclxuICBjb25zdCBbdXNlckluZm8sIHNldHVzZXJJbmZvXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGRlY3J5cHRlZERhdGEgPSBkZWNyeXB0SW5mb0RhdGEoKTtcclxuICAgIGlmIChkZWNyeXB0ZWREYXRhKSB7XHJcbiAgICAgIC8vIGlmIChcclxuICAgICAgLy8gICAhZGVjcnlwdGVkRGF0YS5kZWxpdmVyeV9kYXRlLnZhbHVlIHx8XHJcbiAgICAgIC8vICAgIWRlY3J5cHRlZERhdGEuZGVsaXZlcnlfdGltZS52YWx1ZVxyXG4gICAgICAvLyApIHtcclxuICAgICAgLy8gICBhbGVydChcIlBsZWFzZSBpbnB1dCBkZWxpdmVyeSBkYXRlIGFuZCB0aW1lXCIpO1xyXG4gICAgICAvLyAgIHJldHVybiAod2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9jYXJ0XCIpO1xyXG4gICAgICAvLyB9XHJcbiAgICAgIFxyXG4gICAgICBzZXR1c2VySW5mbyhkZWNyeXB0ZWREYXRhKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvY2hlY2tvdXRcIjtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGlmICh1c2VySW5mbykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyLXRhYmxlIHRhYmxlLXJlc3BvbnNpdmVcIj5cclxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ib3JkZXJlZFwiPlxyXG4gICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+PC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPjwvdGg+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuXHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidG90YWwtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+U2VuZGVyIEluZm88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwcm9kdWN0LXN1YnRvdGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1YnRvdGFsLWFtb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt1c2VySW5mby5iaWxsaW5nX2ZpcnN0TmFtZS52YWx1ZX17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXJJbmZvLmJpbGxpbmdfbGFzdE5hbWUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1YnRvdGFsLWFtb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt1c2VySW5mby5iaWxsaW5nX3Bob25lLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWJ0b3RhbC1hbW91bnRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dXNlckluZm8uYmlsbGluZ19lbWFpbC52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidG90YWwtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+U2hpcHBpbmcgSW5mbzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInByb2R1Y3Qtc3VidG90YWxcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3VidG90YWwtYW1vdW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXJJbmZvLnNoaXBwaW5nX2ZpcnN0TmFtZS52YWx1ZX17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXJJbmZvLnNoaXBwaW5nX2xhc3ROYW1lLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWJ0b3RhbC1hbW91bnRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dXNlckluZm8uc2hpcHBpbmdfcGhvbmUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1YnRvdGFsLWFtb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt1c2VySW5mby5zaGlwcGluZ19hZGRyZXNzLnZhbHVlfXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICB7dXNlckluZm8uc2hpcHBpbmdfY2l0eS52YWx1ZX0ge3VzZXJJbmZvLnNoaXBwaW5nX3ppcC52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cclxuICAgICAgICAgIDxoNT5EZWxpdmVyeSBEZXRhaWxzPC9oNT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2FydFwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtbC1hdXRvIGJ0biBidG4tbGluayB0ZXh0LWRhbmdlclwiPkVkaXQ8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlci10YWJsZSB0YWJsZS1yZXNwb25zaXZlXCI+XHJcbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtYm9yZGVyZWRcIj5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPjwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj48L3RoPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcblxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgey8qIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0b3RhbC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5EZWxpdmVyeSBEYXRlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHJvZHVjdC1zdWJ0b3RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWJ0b3RhbC1hbW91bnRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0RGF0ZSh1c2VySW5mby5kZWxpdmVyeV9kYXRlLnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidG90YWwtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+RGVsaXZlcnkgVGltZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInByb2R1Y3Qtc3VidG90YWxcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3VidG90YWwtYW1vdW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXJJbmZvLmRlbGl2ZXJ5X3RpbWUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj4gKi99XHJcblxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0b3RhbC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5JbnN0cnVjdGlvbnM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwcm9kdWN0LXN1YnRvdGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1YnRvdGFsLWFtb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICB7dXNlckluZm8ubm90ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidG90YWwtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+TWVzc2FnZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInByb2R1Y3Qtc3VidG90YWxcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3VidG90YWwtYW1vdW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIHt1c2VySW5mby5tZXNzYWdlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiA8aDE+TG9hZGluZy4uLi48L2gxPjtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9kdWN0czogc3RhdGUuYWRkZWRJdGVtcyxcclxuICAgIHRvdGFsOiBzdGF0ZS50b3RhbCxcclxuICAgIHNoaXBwaW5nOiBzdGF0ZS5zaGlwcGluZyxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFNoaXBwaW5nU3VtbWFyeSk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuXHJcbmNvbnN0IENyZWRpdENhcmQgPSAoeyBhbW91bnQsIGRlc2NyaXB0aW9uLCBoYW5kbGVTdWJtaXQgfSkgPT4ge1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwaG9uZSwgc2V0UGhvbmVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgW2NhcmRIb2xkZXIsIHNldENhcmRIb2xkZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW251bWJlciwgc2V0TnVtYmVyXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFttb250aCwgc2V0TW9udGhdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3llYXIsIHNldFllYXJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvZGUsIHNldENvZGVdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IFtwYXltZW50U3RhdHVzLCBzZXRQYXltZW50U3RhdHVzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAvLyBGdW5jdGlvbiB0byBMaXN0ZW4gdG8gdGhlIFBheW1lbnQgaW4gdGhlIEZyb250IEVuZFxyXG4gIGNvbnN0IGxpc3RlblRvUGF5bWVudCA9IGFzeW5jIChmdWxsQ2xpZW50KSA9PiB7XHJcbiAgICBjb25zdCBwYXltZW50SW50ZW50SWQgPSBmdWxsQ2xpZW50LnNwbGl0KFwiX2NsaWVudFwiKVswXTtcclxuICAgIGxldCBpID0gNTtcclxuICAgIGZvciAobGV0IGkgPSA1OyBpID4gMDsgaS0tKSB7XHJcbiAgICAgIHNldFBheW1lbnRTdGF0dXMoYExpc3RlbmluZyB0byBQYXltZW50IGluICR7aX1gKTtcclxuICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCkpO1xyXG5cclxuICAgICAgaWYgKGkgPT0gMSkge1xyXG4gICAgICAgIGNvbnN0IHBheW1lbnRJbnRlbnREYXRhID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgICBcImh0dHBzOi8vYXBpLnBheW1vbmdvLmNvbS92MS9wYXltZW50X2ludGVudHMvXCIgK1xyXG4gICAgICAgICAgICBwYXltZW50SW50ZW50SWQgK1xyXG4gICAgICAgICAgICBcIj9jbGllbnRfa2V5PVwiICtcclxuICAgICAgICAgICAgZnVsbENsaWVudCxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIC8vIEJhc2U2NCBlbmNvZGVkIHB1YmxpYyBQYXlNb25nbyBBUEkga2V5LlxyXG4gICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCYXNpYyAke0J1ZmZlci5mcm9tKFxyXG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUEFZTU9OR09fUFVCTElDXHJcbiAgICAgICAgICAgICAgKS50b1N0cmluZyhcImJhc2U2NFwiKX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHBheW1lbnRJbnRlbnREYXRhLmF0dHJpYnV0ZXMubGFzdF9wYXltZW50X2Vycm9yKSB7XHJcbiAgICAgICAgICBzZXRQYXltZW50U3RhdHVzKFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShwYXltZW50SW50ZW50RGF0YS5hdHRyaWJ1dGVzLmxhc3RfcGF5bWVudF9lcnJvcilcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwYXltZW50SW50ZW50RGF0YS5hdHRyaWJ1dGVzLnN0YXR1cyA9PT0gXCJzdWNjZWVkZWRcIikge1xyXG4gICAgICAgICAgc2V0UGF5bWVudFN0YXR1cyhcIlBheW1lbnQgU3VjY2Vzc1wiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaSA9IDU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gRnVuY3Rpb24gdG8gQ3JlYXRlIGEgUGF5bWVudCBJbnRlbnQgYnkgY2FsbGluZyB0aGUgc2l0ZSdzIGFwaVxyXG4gIGNvbnN0IGNyZWF0ZVBheW1lbnRJbnRlbnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRQYXltZW50U3RhdHVzKFwiQ3JlYXRpbmcgUGF5bWVudCBJbnRlbnRcIik7XHJcbiAgICBjb25zdCBwYXltZW50SW50ZW50ID0gYXdhaXQgZmV0Y2goXCIvYXBpL2NyZWF0ZVBheW1lbnRJbnRlbnRcIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgICAgIGFtb3VudDogYW1vdW50ICogMTAwLFxyXG4gICAgICAgICAgICBwYXltZW50X21ldGhvZF9hbGxvd2VkOiBbXCJjYXJkXCJdLFxyXG4gICAgICAgICAgICBwYXltZW50X21ldGhvZF9vcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgY2FyZDogeyByZXF1ZXN0X3RocmVlX2Rfc2VjdXJlOiBcImFueVwiIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGN1cnJlbmN5OiBcIlBIUFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIHN0YXRlbWVudF9kZXNjcmlwdG9yOiBcImRlc2NyaXB0b3IgYnVzaW5lc3MgbmFtZVwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5ib2R5LmRhdGE7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBwYXltZW50SW50ZW50O1xyXG4gIH07XHJcblxyXG4gIC8vIEZ1bmN0aW9uIHRvIENyZWF0ZSBhIFBheW1lbnQgTWV0aG9kIGJ5IGNhbGxpbmcgdGhlIFBheU1vbmdvIEFQSVxyXG4gIGNvbnN0IGNyZWF0ZVBheW1lbnRNZXRob2QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRQYXltZW50U3RhdHVzKFwiQ3JlYXRpbmcgUGF5bWVudCBNZXRob2RcIik7XHJcbiAgICBjb25zdCBwYXltZW50TWV0aG9kID0gZmV0Y2goXCJodHRwczovL2FwaS5wYXltb25nby5jb20vdjEvcGF5bWVudF9tZXRob2RzXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJhc2ljICR7QnVmZmVyLmZyb20oXHJcbiAgICAgICAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19QQVlNT05HT19QVUJMSUNcclxuICAgICAgICApLnRvU3RyaW5nKFwiYmFzZTY0XCIpfWAsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgICAgIGRldGFpbHM6IHtcclxuICAgICAgICAgICAgICBjYXJkX251bWJlcjogYCR7bnVtYmVyfWAsIC8vXCI0MzQzNDM0MzQzNDM0MzQ1XCIsXHJcbiAgICAgICAgICAgICAgZXhwX21vbnRoOiBwYXJzZUludChgJHttb250aH1gKSwgLy8yXHJcbiAgICAgICAgICAgICAgZXhwX3llYXI6IHBhcnNlSW50KGAke3llYXJ9YCksIC8vMjJcclxuICAgICAgICAgICAgICBjdmM6IGAke2NvZGV9YCwgLy9cIjEyM1wiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBiaWxsaW5nOiB7XHJcbiAgICAgICAgICAgICAgbmFtZTogYCR7bmFtZX1gLFxyXG4gICAgICAgICAgICAgIGVtYWlsOiBgJHtlbWFpbH1gLFxyXG4gICAgICAgICAgICAgIHBob25lOiBgJHtwaG9uZX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcImNhcmRcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5lcnJvcnMpIHtcclxuICAgICAgICAgIHRvYXN0LmVycm9yKHJlc3BvbnNlLmVycm9yc1swXS5kZXRhaWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIHNldFBheW1lbnRTdGF0dXMoZXJyKTtcclxuICAgICAgICByZXR1cm4gZXJyO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcGF5bWVudE1ldGhvZDtcclxuICB9O1xyXG5cclxuICAvLyBGdW5jdGlvbiB0byBBdHRhY2ggYSBQYXltZW50IE1ldGhvZCB0byB0aGUgSW50ZW50IGJ5IGNhbGxpbmcgdGhlIFBheU1vbmdvIEFQSVxyXG4gIGNvbnN0IGF0dGFjaEludGVudE1ldGhvZCA9IGFzeW5jIChpbnRlbnQsIG1ldGhvZCkgPT4ge1xyXG4gICAgc2V0UGF5bWVudFN0YXR1cyhcIkF0dGFjaGluZyBJbnRlbnQgdG8gTWV0aG9kXCIpO1xyXG4gICAgZmV0Y2goYGh0dHBzOi8vYXBpLnBheW1vbmdvLmNvbS92MS9wYXltZW50X2ludGVudHMvJHtpbnRlbnQuaWR9L2F0dGFjaGAsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJhc2ljICR7QnVmZmVyLmZyb20oXHJcbiAgICAgICAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19QQVlNT05HT19QVUJMSUNcclxuICAgICAgICApLnRvU3RyaW5nKFwiYmFzZTY0XCIpfWAsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgICAgIHBheW1lbnRfbWV0aG9kOiBgJHttZXRob2QuaWR9YCxcclxuICAgICAgICAgICAgY2xpZW50X2tleTogYCR7aW50ZW50LmF0dHJpYnV0ZXMuY2xpZW50X2tleX1gLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSkge1xyXG4gICAgICAgICAgY29uc3QgcGF5bWVudEludGVudCA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICBjb25zdCBwYXltZW50SW50ZW50U3RhdHVzID0gcGF5bWVudEludGVudC5hdHRyaWJ1dGVzLnN0YXR1cztcclxuICAgICAgICAgIGlmIChwYXltZW50SW50ZW50U3RhdHVzID09PSBcImF3YWl0aW5nX25leHRfYWN0aW9uXCIpIHtcclxuICAgICAgICAgICAgLy8gUmVuZGVyIHlvdXIgbW9kYWwgZm9yIDNEIFNlY3VyZSBBdXRoZW50aWNhdGlvbiBzaW5jZSBuZXh0X2FjdGlvbiBoYXMgYSB2YWx1ZS4gWW91IGNhbiBhY2Nlc3MgdGhlIG5leHQgYWN0aW9uIHZpYSBwYXltZW50SW50ZW50LmF0dHJpYnV0ZXMubmV4dF9hY3Rpb24uXHJcbiAgICAgICAgICAgIHNldFBheW1lbnRTdGF0dXMocGF5bWVudEludGVudFN0YXR1cyk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKFxyXG4gICAgICAgICAgICAgIHBheW1lbnRJbnRlbnQuYXR0cmlidXRlcy5uZXh0X2FjdGlvbi5yZWRpcmVjdC51cmwsXHJcbiAgICAgICAgICAgICAgXCJfYmxhbmtcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBsaXN0ZW5Ub1BheW1lbnQocGF5bWVudEludGVudC5hdHRyaWJ1dGVzLmNsaWVudF9rZXkpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0UGF5bWVudFN0YXR1cyhwYXltZW50SW50ZW50U3RhdHVzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLmVycm9ycykge1xyXG4gICAgICAgICAgdG9hc3QuZXJyb3IocmVzcG9uc2UuZXJyb3JzWzBdLmRldGFpbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycikpO1xyXG4gICAgICAgIHNldFBheW1lbnRTdGF0dXMoSlNPTi5zdHJpbmdpZnkoZXJyKSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zdCBwYXltZW50SW50ZW50ID0gYXdhaXQgY3JlYXRlUGF5bWVudEludGVudCgpO1xyXG4gICAgICBjb25zdCBwYXltZW50TWV0aG9kID0gYXdhaXQgY3JlYXRlUGF5bWVudE1ldGhvZCgpO1xyXG4gICAgICBhd2FpdCBhdHRhY2hJbnRlbnRNZXRob2QocGF5bWVudEludGVudCwgcGF5bWVudE1ldGhvZCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB0b2FzdC5lcnJvcihcIlNvbWV0aGluZyB3ZW50IHdyb25nLCBQbGVhc2UgdHJ5IGFnYWluLlwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHBheW1lbnRTdGF0dXMpIHtcclxuICAgICAgaWYgKHBheW1lbnRTdGF0dXMgPT0gXCJzdWNjZWVkZWRcIikge1xyXG4gICAgICAgIGhhbmRsZVN1Ym1pdChcIkNyZWRpdCBDYXJkXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW3BheW1lbnRTdGF0dXNdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uPlxyXG4gICAgICA8Zm9ybSBhY3Rpb249XCIjXCIgb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICA8aDQ+QmlsbGluZyBJbmZvcm1hdGlvbjwvaDQ+XHJcbiAgICAgICAgPGRpdiBpZD1cImZvcm0tY2FyZFwiIGNsYXNzTmFtZT1cImZvcm1GaWVsZFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjdXN0b21lci1uYW1lXCI+Q3VzdG9tZXIgTmFtZTo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGlkPVwiY3VzdG9tZXItbmFtZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSnVhbiBEZWxhIENydXpcIlxyXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XCJpbnB1dFwifVxyXG4gICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cImZvcm0tY2FyZFwiIGNsYXNzTmFtZT17XCJmb3JtRmllbGRcIn0+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBob25lXCI+UGhvbmUgTnVtYmVyOjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgaWQ9XCJwaG9uZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMDl4eHh4eHh4eHhcIlxyXG4gICAgICAgICAgICBuYW1lPVwicGhvbmVcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1wiaW5wdXRcIn1cclxuICAgICAgICAgICAgdmFsdWU9e3Bob25lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBob25lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cImZvcm0tY2FyZFwiIGNsYXNzTmFtZT17XCJmb3JtRmllbGRcIn0+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+ZW1haWw6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ1c2VyQGRvbWFpbi5jb21cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1wiaW5wdXRcIn1cclxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGg0PlBheW1lbnQgRGV0YWlsczwvaDQ+XHJcbiAgICAgICAgPGRpdiBpZD1cImZvcm0tY2FyZFwiIGNsYXNzTmFtZT17XCJmb3JtRmllbGRcIn0+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNjLW5hbWVcIj5DYXJkIEhvbGRlcjo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGlkPVwiY2MtbmFtZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJjYy1uYW1lXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJKdWFuIERlbGEgQ3J1elwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XCJpbnB1dFwifVxyXG4gICAgICAgICAgICB2YWx1ZT17Y2FyZEhvbGRlcn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDYXJkSG9sZGVyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cImZvcm0tY2FyZFwiIGNsYXNzTmFtZT17XCJmb3JtRmllbGRcIn0+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNjLW51bWJlclwiPkNhcmQgbnVtYmVyOjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgaWQ9XCJjYy1udW1iZXJcIlxyXG4gICAgICAgICAgICBuYW1lPVwiY2MtbnVtYmVyXCJcclxuICAgICAgICAgICAgbWF4TGVuZ3RoPVwiMTlcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjExMTEgMjIyMiAzMzMzIDQ0NDRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1wiaW5wdXRcIn1cclxuICAgICAgICAgICAgdmFsdWU9e251bWJlcn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROdW1iZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBpZD1cImZvcm0tZGF0ZVwiIGNsYXNzTmFtZT17XCJmb3JtRmllbGRcIn0+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImV4cGlyeS1tb250aFwiPkV4cGlyeSBkYXRlOjwvbGFiZWw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJkYXRlVmFsXCJ9PlxyXG4gICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgaWQ9XCJleHBpcnktbW9udGhcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJleHBpcnktbW9udGhcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJzZWxlY3RcIn1cclxuICAgICAgICAgICAgICB2YWx1ZT17bW9udGh9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNb250aChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gaWQ9XCJ0cmFucy1sYWJlbF9tb250aFwiPk1vbnRoPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj4wMTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+MDI8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPjAzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj4wNDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1XCI+MDU8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNlwiPjA2PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjdcIj4wNzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI4XCI+MDg8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiOVwiPjA5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEwXCI+MTA8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTFcIj4xMTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMlwiPjEyPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgaWQ9XCJleHBpcnkteWVhclwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImV4cGlyeS15ZWFyXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1wic2VsZWN0XCJ9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3llYXJ9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRZZWFyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiBpZD1cInRyYW5zLWxhYmVsX3llYXJcIiB2YWx1ZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgWWVhclxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMDIxXCI+MjE8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjAyMlwiPjIyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwMjNcIj4yMzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMDI0XCI+MjQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjAyNVwiPjI1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwMjZcIj4yNjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMDI3XCI+Mjc8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjAyOFwiPjI4PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwMjlcIj4yOTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMDMwXCI+MzA8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjAzMVwiPjMxPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwMzJcIj4zMjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMDMzXCI+MzM8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjAzNFwiPjM0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwMzVcIj4zNTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMDM2XCI+MzY8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjAzN1wiPjM3PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwMzhcIj4zODwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMDM5XCI+Mzk8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjA0MFwiPjQwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwNDFcIj40MTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMDQyXCI+NDI8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjA0M1wiPjQzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwNDRcIj40NDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyMDQ1XCI+NDU8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjA0NlwiPjQ2PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwNDdcIj40Nzwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGlkPVwiZm9ybS1zZWMtY29kZVwiIGNsYXNzTmFtZT17XCJmb3JtRmllbGRcIn0+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNlYy1jb2RlXCI+U2VjdXJpdHkgY29kZTo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIG5hbWU9XCJzZWMtY29kZVwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIG1heExlbmd0aD1cIjNcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjEyM1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XCJpbnB1dFwifVxyXG4gICAgICAgICAgICB2YWx1ZT17Y29kZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb2RlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17XCJwYXlCdXR0b25cIn0+XHJcbiAgICAgICAgICBQYXlcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICB7LyogPHA+e3BheW1lbnRTdGF0dXN9PC9wPiAqL31cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcmVkaXRDYXJkO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5cclxuY29uc3QgR0Nhc2ggPSAoeyBhbW91bnQsIGRlc2NyaXB0aW9uLCBoYW5kbGVTdWJtaXQgfSkgPT4ge1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwaG9uZSwgc2V0UGhvbmVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgW3BheVByb2Nlc3MsIHNldFBheVByb2Nlc3NdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3BheW1lbnRTdGF0dXMsIHNldFBheW1lbnRTdGF0dXNdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IHB1YmxpY0tleSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BBWU1PTkdPX1BVQkxJQztcclxuXHJcbiAgLy8gRnVuY3Rpb24gdG8gQ3JlYXRlIEEgU291cmNlXHJcbiAgY29uc3QgY3JlYXRlU291cmNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0UGF5bWVudFN0YXR1cyhcIkNyZWF0aW5nIFNvdXJjZVwiKTtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCYXNpYyAke0J1ZmZlci5mcm9tKHB1YmxpY0tleSkudG9TdHJpbmcoXCJiYXNlNjRcIil9YCxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICAgICAgYW1vdW50OiBhbW91bnQgKiAxMDAsXHJcbiAgICAgICAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgICAgICAgc3VjY2VzczogXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvcmVkaXJlY3RcIixcclxuICAgICAgICAgICAgICBmYWlsZWQ6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3JlZGlyZWN0XCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJpbGxpbmc6IHsgbmFtZTogYCR7bmFtZX1gLCBwaG9uZTogYCR7cGhvbmV9YCwgZW1haWw6IGAke2VtYWlsfWAgfSxcclxuICAgICAgICAgICAgdHlwZTogXCJnY2FzaFwiLFxyXG4gICAgICAgICAgICBjdXJyZW5jeTogXCJQSFBcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZldGNoKFwiaHR0cHM6Ly9hcGkucGF5bW9uZ28uY29tL3YxL3NvdXJjZXNcIiwgb3B0aW9ucylcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gRnVuY3Rpb24gdG8gTGlzdGVuIHRvIHRoZSBTb3VyY2UgaW4gdGhlIEZyb250IEVuZFxyXG4gIGNvbnN0IGxpc3RlblRvUGF5bWVudCA9IGFzeW5jIChzb3VyY2VJZCkgPT4ge1xyXG4gICAgbGV0IGkgPSA1O1xyXG4gICAgZm9yIChpID0gNTsgaSA+IDA7IGktLSkge1xyXG4gICAgICBzZXRQYXltZW50U3RhdHVzKGBMaXN0ZW5pbmcgdG8gUGF5bWVudCBpbiAke2l9YCk7XHJcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMDApKTtcclxuXHJcbiAgICAgIGlmIChpID09IDEpIHtcclxuICAgICAgICBjb25zdCBzb3VyY2VEYXRhID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgICBcImh0dHBzOi8vYXBpLnBheW1vbmdvLmNvbS92MS9zb3VyY2VzL1wiICsgc291cmNlSWQsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAvLyBCYXNlNjQgZW5jb2RlZCBwdWJsaWMgUGF5TW9uZ28gQVBJIGtleS5cclxuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHtCdWZmZXIuZnJvbShwdWJsaWNLZXkpLnRvU3RyaW5nKFxyXG4gICAgICAgICAgICAgICAgXCJiYXNlNjRcIlxyXG4gICAgICAgICAgICAgICl9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgdG9hc3QuZXJyb3IocmVzcG9uc2UuZXJyb3JzWzBdLmRldGFpbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNvdXJjZURhdGEpO1xyXG4gICAgICAgIGlmIChzb3VyY2VEYXRhLmF0dHJpYnV0ZXMuc3RhdHVzID09PSBcImZhaWxlZFwiKSB7XHJcbiAgICAgICAgICB0b2FzdC5zdWNjZXNzKFwiUGF5bWVudCBGYWlsZWQsIFBsZWFzZSB0cnkgYWdhaW4uXCIpO1xyXG4gICAgICAgICAgc2V0UGF5bWVudFN0YXR1cyhcImZhaWxlZFwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHNvdXJjZURhdGEuYXR0cmlidXRlcy5zdGF0dXMgPT09IFwicGFpZFwiKSB7XHJcbiAgICAgICAgICB0b2FzdC5zdWNjZXNzKFwiUGF5bWVudCBTdWNjZXNmdWxseVwiKTtcclxuICAgICAgICAgIHNldFBheW1lbnRTdGF0dXMoXCJQYXltZW50IFN1Y2Nlc3NcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzb3VyY2VEYXRhLmF0dHJpYnV0ZXMuc3RhdHVzID09PSBcImV4cGlyZWRcIikge1xyXG4gICAgICAgICAgdG9hc3QuZXJyb3IoXCJQYXltZW50IGhhcyBleHBpcmUsIFBsZWFzZSB0cnkgYWdhaW5cIik7XHJcbiAgICAgICAgICBzZXRQYXltZW50U3RhdHVzKFwiZXhwaXJlZFwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaSA9IDU7XHJcbiAgICAgICAgICBzZXRQYXlQcm9jZXNzKHNvdXJjZURhdGEuYXR0cmlidXRlcy5zdGF0dXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3Qgc291cmNlID0gYXdhaXQgY3JlYXRlU291cmNlKCk7XHJcbiAgICB3aW5kb3cub3Blbihzb3VyY2UuZGF0YS5hdHRyaWJ1dGVzLnJlZGlyZWN0LmNoZWNrb3V0X3VybCwgXCJfYmxhbmtcIik7XHJcbiAgICBsaXN0ZW5Ub1BheW1lbnQoc291cmNlLmRhdGEuaWQpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocGF5bWVudFN0YXR1cykge1xyXG4gICAgICBpZiAocGF5bWVudFN0YXR1cyA9PSBcIlBheW1lbnQgU3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgaGFuZGxlU3VibWl0KFwiR2Nhc2hcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAocGF5UHJvY2Vzcykge1xyXG4gICAgICBpZiAocGF5UHJvY2VzcyA9PSBcImV4cGlyZWRcIikge1xyXG4gICAgICAgIHRvYXN0LmVycm9yKFwiUGF5bWVudCBoYXMgZXhwaXJlLCBQbGVhc2UgdHJ5IGFnYWluLlwiKTtcclxuICAgICAgfSBlbHNlIGlmIChwYXlQcm9jZXNzID09IFwiY2hhcmdlYWJsZVwiKSB7XHJcbiAgICAgICAgaGFuZGxlU3VibWl0KFwiR2Nhc2hcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbcGF5bWVudFN0YXR1cywgcGF5UHJvY2Vzc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24+XHJcbiAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIiBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgIDxoND5CaWxsaW5nIEluZm9ybWF0aW9uPC9oND5cclxuICAgICAgICA8ZGl2IGlkPVwiZm9ybS1jYXJkXCIgY2xhc3NOYW1lPXtcImZvcm1GaWVsZFwifT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY3VzdG9tZXItbmFtZVwiPkN1c3RvbWVyIE5hbWU6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBpZD1cImN1c3RvbWVyLW5hbWVcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkp1YW4gRGVsYSBDcnV6XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcImlucHV0XCJ9XHJcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwiZm9ybS1jYXJkXCIgY2xhc3NOYW1lPXtcImZvcm1GaWVsZFwifT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGhvbmVcIj5QaG9uZSBOdW1iZXI6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBpZD1cInBob25lXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwOXh4eHh4eHh4eFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XCJpbnB1dFwifVxyXG4gICAgICAgICAgICB2YWx1ZT17cGhvbmV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGhvbmUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwiZm9ybS1jYXJkXCIgY2xhc3NOYW1lPXtcImZvcm1GaWVsZFwifT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5lbWFpbDo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cInVzZXJAZG9tYWluLmNvbVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XCJpbnB1dFwifVxyXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e1wicGF5QnV0dG9uXCJ9PlxyXG4gICAgICAgICAgUGF5XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgey8qIDxwPntwYXltZW50U3RhdHVzfTwvcD5cclxuICAgICAgICA8cD57cGF5UHJvY2Vzc308L3A+ICovfVxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdDYXNoO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5cclxuY29uc3QgR3JhYlBheSA9ICh7IGFtb3VudCwgZGVzY3JpcHRpb24sIGhhbmRsZVN1Ym1pdCB9KSA9PiB7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bob25lLCBzZXRQaG9uZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBbcGF5UHJvY2Vzcywgc2V0UGF5UHJvY2Vzc10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGF5bWVudFN0YXR1cywgc2V0UGF5bWVudFN0YXR1c10gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgcHVibGljS2V5ID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUEFZTU9OR09fUFVCTElDO1xyXG5cclxuICAvLyBGdW5jdGlvbiB0byBDcmVhdGUgQSBTb3VyY2VcclxuICBjb25zdCBjcmVhdGVTb3VyY2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRQYXltZW50U3RhdHVzKFwiQ3JlYXRpbmcgU291cmNlXCIpO1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJhc2ljICR7QnVmZmVyLmZyb20ocHVibGljS2V5KS50b1N0cmluZyhcImJhc2U2NFwiKX1gLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgICAgICBhbW91bnQ6IGFtb3VudCAqIDEwMCxcclxuICAgICAgICAgICAgcmVkaXJlY3Q6IHtcclxuICAgICAgICAgICAgICBzdWNjZXNzOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9yZWRpcmVjdFwiLFxyXG4gICAgICAgICAgICAgIGZhaWxlZDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvcmVkaXJlY3RcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYmlsbGluZzogeyBuYW1lOiBgJHtuYW1lfWAsIHBob25lOiBgJHtwaG9uZX1gLCBlbWFpbDogYCR7ZW1haWx9YCB9LFxyXG4gICAgICAgICAgICB0eXBlOiBcImdyYWJfcGF5XCIsXHJcbiAgICAgICAgICAgIGN1cnJlbmN5OiBcIlBIUFwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgIH07XHJcbiAgICByZXR1cm4gZmV0Y2goXCJodHRwczovL2FwaS5wYXltb25nby5jb20vdjEvc291cmNlc1wiLCBvcHRpb25zKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICB9O1xyXG5cclxuICAvLyBGdW5jdGlvbiB0byBMaXN0ZW4gdG8gdGhlIFNvdXJjZSBpbiB0aGUgRnJvbnQgRW5kXHJcbiAgY29uc3QgbGlzdGVuVG9QYXltZW50ID0gYXN5bmMgKHNvdXJjZUlkKSA9PiB7XHJcbiAgICBsZXQgaSA9IDU7XHJcbiAgICBmb3IgKGxldCBpID0gNTsgaSA+IDA7IGktLSkge1xyXG4gICAgICBzZXRQYXltZW50U3RhdHVzKGBMaXN0ZW5pbmcgdG8gUGF5bWVudCBpbiAke2l9YCk7XHJcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMDApKTtcclxuXHJcbiAgICAgIGlmIChpID09IDEpIHtcclxuICAgICAgICBjb25zdCBzb3VyY2VEYXRhID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgICBcImh0dHBzOi8vYXBpLnBheW1vbmdvLmNvbS92MS9zb3VyY2VzL1wiICsgc291cmNlSWQsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAvLyBCYXNlNjQgZW5jb2RlZCBwdWJsaWMgUGF5TW9uZ28gQVBJIGtleS5cclxuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHtCdWZmZXIuZnJvbShwdWJsaWNLZXkpLnRvU3RyaW5nKFxyXG4gICAgICAgICAgICAgICAgXCJiYXNlNjRcIlxyXG4gICAgICAgICAgICAgICl9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChzb3VyY2VEYXRhLmF0dHJpYnV0ZXMuc3RhdHVzID09PSBcImZhaWxlZFwiKSB7XHJcbiAgICAgICAgICB0b2FzdC5zdWNjZXNzKFwiUGF5bWVudCBGYWlsZWQsIFBsZWFzZSB0cnkgYWdhaW4uXCIpO1xyXG4gICAgICAgICAgc2V0UGF5bWVudFN0YXR1cyhcImZhaWxlZFwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHNvdXJjZURhdGEuYXR0cmlidXRlcy5zdGF0dXMgPT09IFwicGFpZFwiKSB7XHJcbiAgICAgICAgICB0b2FzdC5zdWNjZXNzKFwiUGF5bWVudCBTdWNjZXNmdWxseVwiKTtcclxuICAgICAgICAgIHNldFBheW1lbnRTdGF0dXMoXCJQYXltZW50IFN1Y2Nlc3NcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzb3VyY2VEYXRhLmF0dHJpYnV0ZXMuc3RhdHVzID09PSBcImV4cGlyZWRcIikge1xyXG4gICAgICAgICAgdG9hc3QuZXJyb3IoXCJQYXltZW50IGhhcyBleHBpcmUsIFBsZWFzZSB0cnkgYWdhaW5cIik7XHJcbiAgICAgICAgICBzZXRQYXltZW50U3RhdHVzKFwiZXhwaXJlZFwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaSA9IDU7XHJcbiAgICAgICAgICBzZXRQYXlQcm9jZXNzKHNvdXJjZURhdGEuYXR0cmlidXRlcy5zdGF0dXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocGF5bWVudFN0YXR1cykge1xyXG4gICAgICBpZiAocGF5bWVudFN0YXR1cyA9PSBcIlBheW1lbnQgU3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgaGFuZGxlU3VibWl0KFwiR3JhYlBheVwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChwYXlQcm9jZXNzKSB7XHJcbiAgICAgIGlmIChwYXlQcm9jZXNzID09IFwiZXhwaXJlZFwiKSB7XHJcbiAgICAgICAgdG9hc3QuZXJyb3IoXCJQYXltZW50IGhhcyBleHBpcmUsIFBsZWFzZSB0cnkgYWdhaW4uXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKHBheVByb2Nlc3MgPT0gXCJjaGFyZ2VhYmxlXCIpIHtcclxuICAgICAgICBoYW5kbGVTdWJtaXQoXCJHcmFiUGF5XCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW3BheW1lbnRTdGF0dXMsIHBheVByb2Nlc3NdKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBzb3VyY2UgPSBhd2FpdCBjcmVhdGVTb3VyY2UoKTtcclxuICAgIHdpbmRvdy5vcGVuKHNvdXJjZS5kYXRhLmF0dHJpYnV0ZXMucmVkaXJlY3QuY2hlY2tvdXRfdXJsLCBcIl9ibGFua1wiKTtcclxuICAgIGxpc3RlblRvUGF5bWVudChzb3VyY2UuZGF0YS5pZCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uPlxyXG4gICAgICA8Zm9ybSBhY3Rpb249XCIjXCIgb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICA8aDI+QmlsbGluZyBJbmZvcm1hdGlvbjwvaDI+XHJcbiAgICAgICAgPGRpdiBpZD1cImZvcm0tY2FyZFwiIGNsYXNzTmFtZT17XCJmb3JtRmllbGRcIn0+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImN1c3RvbWVyLW5hbWVcIj5DdXN0b21lciBOYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgaWQ9XCJjdXN0b21lci1uYW1lXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJKdWFuIERlbGEgQ3J1elwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XCJpbnB1dFwifVxyXG4gICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cImZvcm0tY2FyZFwiIGNsYXNzTmFtZT17XCJmb3JtRmllbGRcIn0+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBob25lXCI+UGhvbmUgTnVtYmVyOjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgaWQ9XCJwaG9uZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMDl4eHh4eHh4eHhcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1wiaW5wdXRcIn1cclxuICAgICAgICAgICAgdmFsdWU9e3Bob25lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBob25lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cImZvcm0tY2FyZFwiIGNsYXNzTmFtZT17XCJmb3JtRmllbGRcIn0+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+ZW1haWw6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ1c2VyQGRvbWFpbi5jb21cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1wiaW5wdXRcIn1cclxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtcInBheUJ1dHRvblwifT5cclxuICAgICAgICAgIFBheVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxwPntwYXltZW50U3RhdHVzfTwvcD5cclxuICAgICAgICA8cD57cGF5UHJvY2Vzc308L3A+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3JhYlBheTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE9yZGVyU3VtbWFyeSBmcm9tIFwiLi4vY2hlY2tvdXQvT3JkZXJTdW1tYXJ5XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFNoaXBwaW5nU3VtbWFyeSBmcm9tIFwiLi4vY2hlY2tvdXQvU2hpcHBpbmdTdW1tYXJ5XCI7XHJcbmltcG9ydCB7XHJcbiAgZGVjcnlwdERhdGEsXHJcbiAgY2xlYXJEYXRhLFxyXG4gIGVuY3J5cHREYXRhLFxyXG59IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2NhcnRBY3Rpb25zXCI7XHJcbmltcG9ydCB7XHJcbiAgZGVjcnlwdEluZm9EYXRhLFxyXG4gIGVuY3J5cHRTdHJpbmcsXHJcbn0gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvaW5mb0FjdGlvbnNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUGF5cGFsIGZyb20gXCIuL1BheXBhbFwiO1xyXG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2Z1bmN0aW9uXCI7XHJcbmltcG9ydCB7IFNsaWRlLCB0b2FzdCwgVG9hc3RDb250YWluZXIgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IENyZWRpdENhcmQgZnJvbSBcIi4vQ3JlZGl0Q2FyZFwiO1xyXG5pbXBvcnQgR2Nhc2ggZnJvbSBcIi4vR2Nhc2hcIjtcclxuaW1wb3J0IEdyYWJQYXkgZnJvbSBcIi4vR3JhYnBheVwiO1xyXG5cclxubGV0IGhvc3QgPSBwcm9jZXNzLmVudi5BUElfVVJMO1xyXG5cclxuZnVuY3Rpb24gUGF5bWVudE1ldGhvZHMoKSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFBheW1lbnQsIHNldHNlbGVjdGVkUGF5bWVudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaXNDYW1wYWlnbiwgc2V0aXNDYW1wYWlnbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0aXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNDb2RPbiwgc2V0aXNDb2RPbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3RvdGFsLCBzZXRUb3RhbF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBlbmNyeXB0ZWRJbmZvRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2Nlc3MuZW52LklORk9fQ09PS0lFKTtcclxuICAgIGxldCBzdGF0ZVNjaGVtYSA9IGRlY3J5cHRJbmZvRGF0YShlbmNyeXB0ZWRJbmZvRGF0YSk7XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICBzdGF0ZVNjaGVtYS5zaGlwcGluZ19jaXR5LnZhbHVlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJtYWthdGlcIikgfHxcclxuICAgICAgc3RhdGVTY2hlbWEuc2hpcHBpbmdfYWRkcmVzcy52YWx1ZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwibWFrYXRpXCIpIHx8XHJcbiAgICAgIFtcclxuICAgICAgICAxMjI2LCAxMjMzLCAxMjA5LCAxMjE0LCAxMjE3LCAxMjIxLCAxMjIyLCAxMjE5LCAxMjIwLCAxMjAyLCAxMjAxLCAxMjI4LFxyXG4gICAgICAgIDEyMTIsIDEyMTEsIDEyMDYsIDEyMDQsIDEyMjksIDEyMzIsIDEyMjQsIDEyMDAsIDEyMDcsIDEyMzUsIDEyMzEsIDEyMTgsXHJcbiAgICAgICAgMTIxMywgMTIzMCwgMTIxMCwgMTIxNiwgMTIxNSwgMTIyNywgMTIwMywgMTIzNCwgMTIyMywgMTIwNSwgMTIyNSwgMTIwOCxcclxuICAgICAgXS5pbmNsdWRlcyhwYXJzZUludChzdGF0ZVNjaGVtYS5zaGlwcGluZ196aXAudmFsdWUpKVxyXG4gICAgKSB7XHJcbiAgICAgIHNldGlzQ29kT24odHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGRlY3J5cHRlZERhdGEgPSBkZWNyeXB0SW5mb0RhdGEoKTtcclxuXHJcbiAgICBpZiAoZGVjcnlwdGVkRGF0YSkge1xyXG4gICAgICBpZiAoZGVjcnlwdGVkRGF0YS5kZWxpdmVyeV9kYXRlLnZhbHVlID09IFwiMjAyMy0wMi0xNFwiKSB7XHJcbiAgICAgICAgc2V0aXNDYW1wYWlnbih0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gdG9hc3QuZXJyb3IoZXJyLnJlc3BvbnNlLmRhdGFbMF0ubWVzc2FnZSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZygsIFwiSEVZWVlZXCIpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBlbmNyeXB0ZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvY2Vzcy5lbnYuQ0FSVF9DT09LSUUpO1xyXG4gICAgbGV0IGNhcnQgPSBkZWNyeXB0RGF0YShlbmNyeXB0ZWREYXRhKTtcclxuXHJcbiAgICBsZXQgYW1vdW50ID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FydC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBhbW91bnQgPSBhbW91bnQgKyBjYXJ0W2ldLmRpc2NvdW50X3ByaWNlICogY2FydFtpXS5xdWFudGl0eTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUb3RhbChhbW91bnQgPCAxMDAgPyAxMDAgOiBhbW91bnQpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHZhbHVlKSA9PiB7XHJcbiAgICBzZXRzZWxlY3RlZFBheW1lbnQodmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICh0b2tlbikgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtob3N0fS9hcGkvdXNlci91c2VyL2RldGFpbHNgLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW4sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChyZXMuZGF0YS51c2VyRGV0YWlscykge1xyXG4gICAgICAgIHJldHVybiByZXMuZGF0YS51c2VyRGV0YWlsc1tcImlkXCJdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRva2VuXCIpO1xyXG4gICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIi9sb2dpblwiKTtcclxuICAgICAgdG9hc3QuZXJyb3IoXCJZb3VyIHRva2VuIGlzIGludmFsaWQgb3IgZXhwaXJlZC5cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlUHJpY2UgPSAocHJvZHVjdHMpID0+IHtcclxuICAgIGxldCBjYXJ0U3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2Nlc3MuZW52LkNBUlRfQ09PS0lFKTtcclxuICAgIGxldCBjYXJ0QXJyYXkgPSBkZWNyeXB0RGF0YShjYXJ0U3RvcmFnZSk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9kdWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBlbCA9IHByb2R1Y3RzW2ldO1xyXG5cclxuICAgICAgdmFyIGluZGV4ID0gY2FydEFycmF5LmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gZWwucHJvZHVjdElkKTtcclxuXHJcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgY2FydEFycmF5W2luZGV4XVtcImNhbXBhaWduX3ByaWNlXCJdID0gZWwuY2FtcGFpZ25fcHJpY2U7XHJcbiAgICAgICAgY2FydEFycmF5W2luZGV4XVtcImRpc2NvdW50X3ByaWNlXCJdID0gZWwuZGlzY291bnRfcHJpY2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBlbmNyeXB0ZWREYXRhID0gZW5jcnlwdERhdGEoSlNPTi5zdHJpbmdpZnkoY2FydEFycmF5KSk7XHJcblxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9jZXNzLmVudi5DQVJUX0NPT0tJRSwgZW5jcnlwdGVkRGF0YSk7XHJcblxyXG4gICAgICBkaXNwYXRjaChcclxuICAgICAgICAoKCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdHlwZTogXCJVUERBVEVfQ0FSVFwiLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9KSgpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKHBheW1lbnRNZXRob2QpID0+IHtcclxuICAgIGxldCB1c2VySWQgPSAwO1xyXG4gICAgbGV0IHRva2VuID0gY29va2llLmdldChcIl93dXNfQkpLXCIpO1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgdXNlcklkID0gYXdhaXQgZmV0Y2hVc2VyKHRva2VuKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHt9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0aXNMb2FkaW5nKHRydWUpO1xyXG4gICAgbGV0IGVuY3J5cHRlZERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9jZXNzLmVudi5DQVJUX0NPT0tJRSk7XHJcbiAgICBsZXQgZW5jcnlwdGVkSW5mb0RhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9jZXNzLmVudi5JTkZPX0NPT0tJRSk7XHJcbiAgICBsZXQgY2FydCA9IGRlY3J5cHREYXRhKGVuY3J5cHRlZERhdGEpO1xyXG4gICAgbGV0IHN0YXRlU2NoZW1hID0gZGVjcnlwdEluZm9EYXRhKGVuY3J5cHRlZEluZm9EYXRhKTtcclxuXHJcbiAgICBsZXQgb3JkZXJJdGVtcyA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJ0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBvYmogPSBudWxsO1xyXG4gICAgICBpZiAoaXNDYW1wYWlnbikge1xyXG4gICAgICAgIG9iaiA9IHtcclxuICAgICAgICAgIHByb2R1Y3RJZDogY2FydFtpXS5pZCxcclxuICAgICAgICAgIG5hbWU6IGNhcnRbaV0ubmFtZSxcclxuICAgICAgICAgIHF1YW50aXR5OiBjYXJ0W2ldLnF1YW50aXR5LFxyXG4gICAgICAgICAgaXRlbVByaWNlOiBjYXJ0W2ldLmNhbXBhaWduX3ByaWNlLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgb2JqID0ge1xyXG4gICAgICAgICAgcHJvZHVjdElkOiBjYXJ0W2ldLmlkLFxyXG4gICAgICAgICAgbmFtZTogY2FydFtpXS5uYW1lLFxyXG4gICAgICAgICAgcXVhbnRpdHk6IGNhcnRbaV0ucXVhbnRpdHksXHJcbiAgICAgICAgICBpdGVtUHJpY2U6IGNhcnRbaV0uZGlzY291bnRfcHJpY2UsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgb3JkZXJJdGVtcy5wdXNoKG9iaik7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG9yZGVyID0ge1xyXG4gICAgICBvcmRlckl0ZW1zOiBvcmRlckl0ZW1zLFxyXG4gICAgICB1c2VySWQ6IHVzZXJJZCxcclxuICAgICAgc2hpcHBpbmdGaXJzdE5hbWU6IHN0YXRlU2NoZW1hLnNoaXBwaW5nX2ZpcnN0TmFtZS52YWx1ZSxcclxuICAgICAgc2hpcHBpbmdMYXN0TmFtZTogc3RhdGVTY2hlbWEuc2hpcHBpbmdfbGFzdE5hbWUudmFsdWUsXHJcbiAgICAgIHNoaXBwaW5nUGhvbmU6IHN0YXRlU2NoZW1hLnNoaXBwaW5nX3Bob25lLnZhbHVlLFxyXG4gICAgICBzaGlwcGluZ0FkZHJlc3M6IHN0YXRlU2NoZW1hLnNoaXBwaW5nX2FkZHJlc3MudmFsdWUsXHJcbiAgICAgIHNoaXBwaW5nQ2l0eTogc3RhdGVTY2hlbWEuc2hpcHBpbmdfY2l0eS52YWx1ZSxcclxuICAgICAgc2hpcHBpbmdQcm92aW5jZTogXCJNZXRybyBNYW5pbGFcIixcclxuICAgICAgc2hpcHBpbmdaaXA6IHN0YXRlU2NoZW1hLnNoaXBwaW5nX3ppcC52YWx1ZSxcclxuICAgICAgZGVsaXZlcnlJbnN0cnVjdGlvbnM6IHN0YXRlU2NoZW1hLm5vdGUudmFsdWUsXHJcbiAgICAgIG1lc3NhZ2U6IHN0YXRlU2NoZW1hLm1lc3NhZ2UudmFsdWUsXHJcbiAgICAgIGJpbGxpbmdGaXJzdE5hbWU6IHN0YXRlU2NoZW1hLmJpbGxpbmdfZmlyc3ROYW1lLnZhbHVlLFxyXG4gICAgICBiaWxsaW5nTGFzdE5hbWU6IHN0YXRlU2NoZW1hLmJpbGxpbmdfbGFzdE5hbWUudmFsdWUsXHJcbiAgICAgIGJpbGxpbmdQaG9uZTogc3RhdGVTY2hlbWEuYmlsbGluZ19waG9uZS52YWx1ZSxcclxuICAgICAgYmlsbGluZ0VtYWlsOiBzdGF0ZVNjaGVtYS5iaWxsaW5nX2VtYWlsLnZhbHVlLFxyXG4gICAgICBkZWxpdmVyeURhdGU6IHN0YXRlU2NoZW1hLmRlbGl2ZXJ5X2RhdGUudmFsdWUsXHJcbiAgICAgIGRlbGl2ZXJ5VGltZTogc3RhdGVTY2hlbWEuZGVsaXZlcnlfdGltZS52YWx1ZSxcclxuICAgICAgcGF5bWVudE1ldGhvZDogcGF5bWVudE1ldGhvZCxcclxuICAgICAgaXNDYW1wYWlnbjogaXNDYW1wYWlnbixcclxuICAgIH07XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHtob3N0fS9hcGkvdXNlci9vcmRlcmAsIG9yZGVyKTtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIGxldCBlbmNyeXB0ZWREYXRhID0gZW5jcnlwdFN0cmluZyhyZXMuZGF0YS5vcmRlcl9uYW1lKTtcclxuXHJcbiAgICAgICAgLy8gcmV0dXJuIGNvbnNvbGUubG9nKGVuY3J5cHRlZERhdGEsIGVuY3J5cHRlZERhdGEpO1xyXG5cclxuICAgICAgICBsZXQgc2VuZEVtYWlsUmVzID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICAgIGAke2hvc3R9L2FwaS91c2VyL29yZGVyL3NlbmRFbWFpbGAsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJpbGxpbmdFbWFpbDogb3JkZXIuYmlsbGluZ0VtYWlsLFxyXG4gICAgICAgICAgICBiaWxsaW5nRmlyc3ROYW1lOiBvcmRlci5iaWxsaW5nRmlyc3ROYW1lLFxyXG4gICAgICAgICAgICBvcmRlck5hbWU6IHJlcy5kYXRhLm9yZGVyX25hbWUsXHJcbiAgICAgICAgICAgIGNyeXB0b1N0cjogZW5jcnlwdGVkRGF0YSxcclxuICAgICAgICAgICAgb3JkZXJJdGVtczogb3JkZXJJdGVtcyxcclxuICAgICAgICAgICAgcGF5bWVudE1ldGhvZDogcGF5bWVudE1ldGhvZCxcclxuICAgICAgICAgICAgZGVsaXZlcnlEYXRlOiBmb3JtYXREYXRlKHN0YXRlU2NoZW1hLmRlbGl2ZXJ5X2RhdGUudmFsdWUpLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmIChzZW5kRW1haWxSZXMpIHtcclxuICAgICAgICAgIGNsZWFyRGF0YSgpO1xyXG4gICAgICAgICAgUm91dGVyLnB1c2goYC90aGFua3lvdS8ke2VuY3J5cHRlZERhdGF9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgc2V0aXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YVswXS5tZXNzYWdlKTtcclxuICAgICAgaWYgKGVyci5yZXNwb25zZSkge1xyXG4gICAgICAgIGlmIChlcnIucmVzcG9uc2UuZGF0YSkge1xyXG4gICAgICAgICAgaWYgKGVyci5yZXNwb25zZS5kYXRhWzBdKSB7XHJcbiAgICAgICAgICAgIGlmIChlcnIucmVzcG9uc2UuZGF0YVswXS51cGRhdGVkT3JkZXJJdGVtcykge1xyXG4gICAgICAgICAgICAgIGhhbmRsZUNoYW5nZVByaWNlKGVyci5yZXNwb25zZS5kYXRhWzBdLnVwZGF0ZWRPcmRlckl0ZW1zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdG9hc3QuZXJyb3IoZXJyLnJlc3BvbnNlLmRhdGFbMF0ubWVzc2FnZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0LmVycm9yKFwiU29tZXRoaW5nIHdlbnQgd3JvbmcsIFBsZWFzZSB0cnkgYWdhaW4gb3IgY29udGFjdCB1cy5cIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwdC00MFwiPlxyXG4gICAgICA8VG9hc3RDb250YWluZXIgdHJhbnNpdGlvbj17U2xpZGV9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIwcHhcIiwgbWFyZ2luUmlnaHQ6IFwiMHB4XCIgfX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNSBjb2wtbWQtNVwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICA8aDU+VXNlciBEZXRhaWxzPC9oNT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NoZWNrb3V0XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtbC1hdXRvIGJ0biBidG4tbGluayB0ZXh0LWRhbmdlclwiPkVkaXQ8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFNoaXBwaW5nU3VtbWFyeSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICA8aDU+T3JkZXIgRGV0YWlsczwvaDU+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jYXJ0XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtbC1hdXRvIGJ0biBidG4tbGluayB0ZXh0LWRhbmdlclwiPkVkaXQ8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPE9yZGVyU3VtbWFyeSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNyBjb2wtbWQtN1wiPlxyXG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+U2VsZWN0IFBheW1lbnQgTWV0aG9kPC9oNT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXItZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGF5bWVudC1tZXRob2RcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiAwLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMC41cmVtXCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCIwLjVyZW1cIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZGlyZWN0LWJhbmstdHJhbnNmZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpby1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBoYW5kbGVDaGFuZ2UoXCJiYW5rXCIpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRpcmVjdC1iYW5rLXRyYW5zZmVyXCI+Q3JlZGl0IENhcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRQYXltZW50ID09IFwiYmFua1wiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL2xvZ29zL2JhbmtzMi5qcGdcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTUwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENyZWRpdENhcmQgYW1vdW50PXt0b3RhbH0gaGFuZGxlU3VibWl0PXtoYW5kbGVTdWJtaXR9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImNhc2gtb24tZGVsaXZlcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpby1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBoYW5kbGVDaGFuZ2UoXCJjb2RcIil9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2FzaC1vbi1kZWxpdmVyeVwiPkNhc2ggb24gRGVsaXZlcnk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRQYXltZW50ID09IFwiY29kXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvbG9nb3MvY29kLmpwZ1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IHBhZGRpbmdUb3A6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBXaGVuIHVzaW5nIG91ciBDYXNoIG9uIERlbGl2ZXJ5IHNlcnZpY2UsIHBheW1lbnQgaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2l2ZW4gdG8gb3VyIGRlbGl2ZXJ5IHJpZGVyIHVwb24gcmVjZWlwdCBvZiBpdGVtLlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7IWlzTG9hZGluZyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVN1Ym1pdChcIkNPRFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWxpZ2h0IG1iLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlybSBPcmRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGRzLXJpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImdjYXNoXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW8tYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gaGFuZGxlQ2hhbmdlKFwiZ2Nhc2hcIil9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImdjYXNoXCI+R0Nhc2g8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRQYXltZW50ID09IFwiZ2Nhc2hcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9sb2dvcy9nY2FzaC5wbmdcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNzBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8R2Nhc2ggYW1vdW50PXt0b3RhbH0gaGFuZGxlU3VibWl0PXtoYW5kbGVTdWJtaXR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZ3JhYnBheVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IGhhbmRsZUNoYW5nZShcImdyYWJwYXlcIil9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZ3JhYnBheVwiPkdyYWJQYXk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRQYXltZW50ID09IFwiZ3JhYnBheVwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL2xvZ29zL2djYXNoLnBuZ1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI3MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxHcmFiUGF5IGFtb3VudD17dG90YWx9IGhhbmRsZVN1Ym1pdD17aGFuZGxlU3VibWl0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBheW1lbnRNZXRob2RzO1xyXG4iLCJpbXBvcnQgeyBzZXQgfSBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQYXlwYWxFeHByZXNzQnRuIGZyb20gXCJyZWFjdC1wYXlwYWwtZXhwcmVzcy1jaGVja291dFwiO1xyXG5pbXBvcnQgeyBkZWNyeXB0RGF0YSB9IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2NhcnRBY3Rpb25zXCI7XHJcbmltcG9ydCB7IGRlY3J5cHRJbmZvRGF0YSB9IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2luZm9BY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiBQYXlwYWwocHJvcHMpIHtcclxuICBjb25zdCBbcGF5bWVudE9wdGlvbnMsIHNldHBheW1lbnRPcHRpb25zXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpc0NhbXBhaWduLCBzZXRpc0NhbXBhaWduXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbWVtbywgc2V0bWVtb10gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBkZWNyeXB0ZWREYXRhID0gZGVjcnlwdEluZm9EYXRhKCk7XHJcbiAgICBpZiAoZGVjcnlwdGVkRGF0YSkge1xyXG4gICAgICBpZiAoZGVjcnlwdGVkRGF0YS5kZWxpdmVyeV9kYXRlLnZhbHVlID09IFwiMjAyMy0wMi0xNFwiKSB7XHJcbiAgICAgICAgc2V0aXNDYW1wYWlnbih0cnVlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2V0bWVtbyhgXHJcbiAgICAgICR7ZGVjcnlwdGVkRGF0YS5iaWxsaW5nX3Bob25lLnZhbHVlfVxyXG4gICAgICAke2RlY3J5cHRlZERhdGEuYmlsbGluZ19lbWFpbC52YWx1ZX1cclxuICAgICAgJHtkZWNyeXB0ZWREYXRhLmRlbGl2ZXJ5X3RpbWUudmFsdWV9XHJcbiAgICAgICR7ZGVjcnlwdGVkRGF0YS5kZWxpdmVyeV9kYXRlLnZhbHVlfVxyXG4gICAgICAke2RlY3J5cHRlZERhdGEubm90ZS52YWx1ZX1cclxuICAgICAgJHtkZWNyeXB0ZWREYXRhLm1lc3NhZ2UudmFsdWV9XHJcbiAgICAgICR7ZGVjcnlwdGVkRGF0YS5zaGlwcGluZ19waG9uZS52YWx1ZX1cclxuICAgICAgJHtkZWNyeXB0ZWREYXRhLnNoaXBwaW5nX2FkZHJlc3MudmFsdWV9XHJcbiAgICAgIGApO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBlbmNyeXB0ZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvY2Vzcy5lbnYuQ0FSVF9DT09LSUUpO1xyXG4gICAgbGV0IGNhcnQgPSBkZWNyeXB0RGF0YShlbmNyeXB0ZWREYXRhKTtcclxuXHJcbiAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgbGV0IGl0ZW1zID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcnQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IG9iaiA9IG51bGw7XHJcblxyXG4gICAgICBpZiAoaXNDYW1wYWlnbikge1xyXG4gICAgICAgIG9iaiA9IHtcclxuICAgICAgICAgIG5hbWU6IGNhcnRbaV0ubmFtZSxcclxuICAgICAgICAgIHF1YW50aXR5OiBjYXJ0W2ldLnF1YW50aXR5LFxyXG4gICAgICAgICAgcHJpY2U6IGNhcnRbaV0uY2FtcGFpZ25fcHJpY2UsXHJcbiAgICAgICAgICBjdXJyZW5jeTogXCJQSFBcIixcclxuICAgICAgICB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG9iaiA9IHtcclxuICAgICAgICAgIG5hbWU6IGNhcnRbaV0ubmFtZSxcclxuICAgICAgICAgIHF1YW50aXR5OiBjYXJ0W2ldLnF1YW50aXR5LFxyXG4gICAgICAgICAgcHJpY2U6IGNhcnRbaV0uZGlzY291bnRfcHJpY2UsXHJcbiAgICAgICAgICBjdXJyZW5jeTogXCJQSFBcIixcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpdGVtcy5wdXNoKG9iaik7XHJcblxyXG4gICAgICBpZiAoaXNDYW1wYWlnbikge1xyXG4gICAgICAgIHRvdGFsID0gdG90YWwgKyBjYXJ0W2ldLmNhbXBhaWduX3ByaWNlICogY2FydFtpXS5xdWFudGl0eTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0b3RhbCA9IHRvdGFsICsgY2FydFtpXS5kaXNjb3VudF9wcmljZSAqIGNhcnRbaV0ucXVhbnRpdHk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRvdGFsID0gdG90YWwgKyAxMjA7XHJcblxyXG4gICAgaXRlbXMucHVzaCh7XHJcbiAgICAgIG5hbWU6IFwiUGF5cGFsIFRyYW5zZmVyIEZlZVwiLFxyXG4gICAgICBxdWFudGl0eTogMSxcclxuICAgICAgcHJpY2U6IDEyMCxcclxuICAgICAgY3VycmVuY3k6IFwiUEhQXCIsXHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRwYXltZW50T3B0aW9ucyh7XHJcbiAgICAgIGludGVudDogXCJhdXRob3JpemVcIixcclxuICAgICAgcGF5ZXI6IHtcclxuICAgICAgICBwYXltZW50X21ldGhvZDogXCJwYXlwYWxcIixcclxuICAgICAgfSxcclxuICAgICAgdHJhbnNhY3Rpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYW1vdW50OiB7XHJcbiAgICAgICAgICAgIHRvdGFsOiB0b3RhbCxcclxuICAgICAgICAgICAgY3VycmVuY3k6IFwiUEhQXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IG1lbW8sXHJcbiAgICAgICAgICBpdGVtX2xpc3Q6IHtcclxuICAgICAgICAgICAgaXRlbXMsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIG5vdGVfdG9fcGF5ZXI6IFwiQ29udGFjdCB1cyBmb3IgYW55IHF1ZXN0aW9ucyBvbiB5b3VyIG9yZGVyLlwiLFxyXG4gICAgICByZWRpcmVjdF91cmxzOiB7XHJcbiAgICAgICAgcmV0dXJuX3VybDogXCJodHRwczovL2V4YW1wbGUuY29tL3JldHVyblwiLFxyXG4gICAgICAgIGNhbmNlbF91cmw6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbS9jYW5jZWxcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0sIFtpc0NhbXBhaWduLCBtZW1vXSk7XHJcblxyXG4gIGNvbnN0IG9uU3VjY2VzcyA9IChwYXltZW50KSA9PiB7XHJcbiAgICAvLyAxLCAyLCBhbmQgLi4uIFBvb2YhIFlvdSBtYWRlIGl0LCBldmVyeXRoaW5nJ3MgZmluZSBhbmQgZGFuZHkhXHJcbiAgICBjb25zb2xlLmxvZyhcIlBheW1lbnQgc3VjY2Vzc2Z1bCFcIiwgcGF5bWVudCk7XHJcbiAgICAvLyBZb3UgY2FuIGJpbmQgdGhlIFwicGF5bWVudFwiIG9iamVjdCdzIHZhbHVlIHRvIHlvdXIgc3RhdGUgb3IgcHJvcHMgb3Igd2hhdGV2ZXIgaGVyZSwgcGxlYXNlIHNlZSBiZWxvdyBmb3Igc2FtcGxlIHJldHVybmVkIGRhdGFcclxuXHJcbiAgICBwcm9wcy5oYW5kbGVTdWJtaXQoXCJQYXlwYWxcIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25DYW5jZWwgPSAoZGF0YSkgPT4ge1xyXG4gICAgLy8gVGhlIHVzZXIgcHJlc3NlZCBcImNhbmNlbFwiIG9yIGNsb3NlZCB0aGUgUGF5UGFsIHBvcHVwXHJcbiAgICBjb25zb2xlLmxvZyhcIlBheW1lbnQgY2FuY2VsbGVkIVwiLCBkYXRhKTtcclxuICAgIC8vIFlvdSBjYW4gYmluZCB0aGUgXCJkYXRhXCIgb2JqZWN0J3MgdmFsdWUgdG8geW91ciBzdGF0ZSBvciBwcm9wcyBvciB3aGF0ZXZlciBoZXJlLCBwbGVhc2Ugc2VlIGJlbG93IGZvciBzYW1wbGUgcmV0dXJuZWQgZGF0YVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRXJyb3IgPSAoZXJyKSA9PiB7XHJcbiAgICAvLyBUaGUgbWFpbiBQYXlwYWwgc2NyaXB0IGNvdWxkIG5vdCBiZSBsb2FkZWQgb3Igc29tZXRoaW5nIGJsb2NrZWQgdGhlIHNjcmlwdCBmcm9tIGxvYWRpbmdcclxuICAgIGNvbnNvbGUubG9nKFwiRXJyb3IhXCIsIGVycik7XHJcbiAgICAvLyBCZWNhdXNlIHRoZSBQYXlwYWwncyBtYWluIHNjcmlwdCBpcyBsb2FkZWQgYXN5bmNocm9ub3VzbHkgZnJvbSBcImh0dHBzOi8vd3d3LnBheXBhbG9iamVjdHMuY29tL2FwaS9jaGVja291dC5qc1wiXHJcbiAgICAvLyA9PiBzb21ldGltZXMgaXQgbWF5IHRha2UgYWJvdXQgMC41IHNlY29uZCBmb3IgZXZlcnl0aGluZyB0byBnZXQgc2V0LCBvciBmb3IgdGhlIGJ1dHRvbiB0byBhcHBlYXJcclxuICB9O1xyXG5cclxuICBsZXQgZW52ID0gcHJvY2Vzcy5lbnYuUEFZUEFMX0NPTkZJRzsgLy8geW91IGNhbiBzZXQgdGhpcyBzdHJpbmcgdG8gJ3Byb2R1Y3Rpb24nXHJcbiAgbGV0IGN1cnJlbmN5ID0gXCJQSFBcIjsgLy8geW91IGNhbiBzZXQgdGhpcyBzdHJpbmcgZnJvbSB5b3VyIHByb3BzIG9yIHN0YXRlXHJcbiAgbGV0IHRvdGFsID0gMTsgLy8gdGhpcyBpcyB0aGUgdG90YWwgYW1vdW50IChiYXNlZCBvbiBjdXJyZW5jeSkgdG8gY2hhcmdlXHJcbiAgLy8gRG9jdW1lbnQgb24gUGF5cGFsJ3MgY3VycmVuY3kgY29kZTogaHR0cHM6Ly9kZXZlbG9wZXIucGF5cGFsLmNvbS9kb2NzL2NsYXNzaWMvYXBpL2N1cnJlbmN5X2NvZGVzL1xyXG5cclxuICBjb25zdCBjbGllbnQgPSB7XHJcbiAgICBzYW5kYm94OiBwcm9jZXNzLmVudi5QQVlQQUxfU0FOREJPWCxcclxuICAgIHByb2R1Y3Rpb246IHByb2Nlc3MuZW52LlBBWVBBTF9MSVZFLFxyXG4gIH07XHJcblxyXG4gIC8vIEluIG9yZGVyIHRvIGdldCBwcm9kdWN0aW9uJ3MgYXBwLUlELCB5b3Ugd2lsbCBoYXZlIHRvIHNlbmQgeW91ciBhcHAgdG8gUGF5cGFsIGZvciBhcHByb3ZhbCBmaXJzdFxyXG4gIC8vIEZvciB5b3VyIHNhbmRib3ggQ2xpZW50LUlEIChhZnRlciBsb2dnaW5nIGludG8geW91ciBkZXZlbG9wZXIgYWNjb3VudCwgcGxlYXNlIGxvY2F0ZSB0aGUgXCJSRVNUIEFQSSBhcHBzXCIgc2VjdGlvbiwgY2xpY2sgXCJDcmVhdGUgQXBwXCIgdW5sZXNzIHlvdSBoYXZlIGFscmVhZHkgZG9uZSBzbyk6XHJcbiAgLy8gICA9PiBodHRwczovL2RldmVsb3Blci5wYXlwYWwuY29tL2RvY3MvY2xhc3NpYy9saWZlY3ljbGUvc2JfY3JlZGVudGlhbHMvXHJcbiAgLy8gTm90ZTogSUdOT1JFIHRoZSBTYW5kYm94IHRlc3QgQXBwSUQgLSB0aGlzIGlzIE9OTFkgZm9yIEFkYXB0aXZlIEFQSXMsIE5PVCBSRVNUIEFQSXMpXHJcbiAgLy8gRm9yIHByb2R1Y3Rpb24gYXBwLUlEOlxyXG4gIC8vICAgPT4gaHR0cHM6Ly9kZXZlbG9wZXIucGF5cGFsLmNvbS9kb2NzL2NsYXNzaWMvbGlmZWN5Y2xlL2dvaW5nTGl2ZS9cclxuXHJcbiAgLy8gTkIuIFlvdSBjYW4gYWxzbyBoYXZlIG1hbnkgUGF5cGFsIGV4cHJlc3MgY2hlY2tvdXQgYnV0dG9ucyBvbiBwYWdlLCBqdXN0IHBhc3MgaW4gdGhlIGNvcnJlY3QgYW1vdW50IGFuZCB0aGV5IHdpbGwgd29yayFcclxuICByZXR1cm4gKFxyXG4gICAgPFBheXBhbEV4cHJlc3NCdG5cclxuICAgICAgcGF5bWVudE9wdGlvbnM9e3BheW1lbnRPcHRpb25zfVxyXG4gICAgICBlbnY9e2Vudn1cclxuICAgICAgY2xpZW50PXtjbGllbnR9XHJcbiAgICAgIGN1cnJlbmN5PXtjdXJyZW5jeX1cclxuICAgICAgdG90YWw9e3RvdGFsfVxyXG4gICAgICBvbkVycm9yPXtvbkVycm9yfVxyXG4gICAgICBvblN1Y2Nlc3M9e29uU3VjY2Vzc31cclxuICAgICAgb25DYW5jZWw9e29uQ2FuY2VsfVxyXG4gICAgLz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXlwYWw7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBGYWNpbGl0eSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmFjaWxpdHktYXJlYVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhY2lsaXR5LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGxhbmVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkZhc3QgU2hpcHBpbmc8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYWNpbGl0eS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLW1vbmV5LWNoZWNrLWFsdFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+MTAwJSBtb25leSBiYWNrIGd1YXJhbnRlZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhY2lsaXR5LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtY3JlZGl0LWNhcmRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPk1hbnkgcGF5bWVudCBnYXRld2F5czwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhY2lsaXR5LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtaGVhZHNldFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+T25saW5lIHN1cHBvcnQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYWNpbGl0eTtcclxuIiwiY29uc3QgbW9udGhOYW1lcyA9IFtcclxuICBcIkphbnVhcnlcIixcclxuICBcIkZlYnJ1YXJ5XCIsXHJcbiAgXCJNYXJjaFwiLFxyXG4gIFwiQXByaWxcIixcclxuICBcIk1heVwiLFxyXG4gIFwiSnVuZVwiLFxyXG4gIFwiSnVseVwiLFxyXG4gIFwiQXVndXN0XCIsXHJcbiAgXCJTZXB0ZW1iZXJcIixcclxuICBcIk9jdG9iZXJcIixcclxuICBcIk5vdmVtYmVyXCIsXHJcbiAgXCJEZWNlbWJlclwiLFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkgPT4ge1xyXG4gIHZhciB0aW1lb3V0O1xyXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgY29udGV4dCA9IHRoaXMsXHJcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XHJcbiAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xyXG4gICAgICBpZiAoIWltbWVkaWF0ZSkgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuICAgIH07XHJcbiAgICB2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcclxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcclxuICAgIGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybWF0TnVtYmVyID0gKG51bSkgPT4ge1xyXG4gIHJldHVybiBudW0udG9GaXhlZCgyKS5yZXBsYWNlKC8oXFxkKSg/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiJDEsXCIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzRGF0ZUJlZm9yZVRvZGF5ID0gKGRhdGUpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgbmV3IERhdGUobmV3IERhdGUoZGF0ZSkudG9EYXRlU3RyaW5nKCkpIDxcclxuICAgIG5ldyBEYXRlKG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCkpXHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtYXREYXRlID0gKGRhdGUpID0+IHtcclxuICBsZXQgbW9udGggPSBtb250aE5hbWVzW25ldyBEYXRlKGRhdGUpLmdldE1vbnRoKCldO1xyXG4gIGxldCBkYXkgPSBuZXcgRGF0ZShkYXRlKS5nZXREYXRlKCk7XHJcbiAgbGV0IHllYXIgPSBuZXcgRGF0ZShkYXRlKS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICByZXR1cm4gYCR7bW9udGh9ICR7ZGF5fSwgJHt5ZWFyfWA7XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURBQUFBQWtDQVlBQUFEUFJia0tBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQTNacFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1Tmkxak1UUXlJRGM1TGpFMk1Ea3lOQ3dnTWpBeE55OHdOeTh4TXkwd01Ub3dOam96T1NBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3VFUwOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXRiUzhpSUhodGJHNXpPbk4wVW1WbVBTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZjMVI1Y0dVdlVtVnpiM1Z5WTJWU1pXWWpJaUI0Yld4dWN6cDRiWEE5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM4aUlIaHRjRTFOT2s5eWFXZHBibUZzUkc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRvek9UUm1NR1JqTXkxbU5qYzJMVGt3TkRjdE9USXpOaTFoTVdJMlpXUTNOR1kwWm1FaUlIaHRjRTFOT2tSdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNk9FVkVRMEpFT1RSQk5qQTNNVEZGT1VKRU1qSkdNalJDUmtSQlFUVTROVGdpSUhodGNFMU5Pa2x1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2T0VWRVEwSkVPVE5CTmpBM01URkZPVUpFTWpKR01qUkNSa1JCUVRVNE5UZ2lJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTkRJREl3TVRrZ0tGZHBibVJ2ZDNNcElqNGdQSGh0Y0UxTk9rUmxjbWwyWldSR2NtOXRJSE4wVW1WbU9tbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZaV1ZpTldSaFl6Z3ROR00xT1MxaE1qUTBMVGxrWVRjdFkyUTBNREl6WVRObE1qSXpJaUJ6ZEZKbFpqcGtiMk4xYldWdWRFbEVQU0o0YlhBdVpHbGtPak01TkdZd1pHTXpMV1kyTnpZdE9UQTBOeTA1TWpNMkxXRXhZalpsWkRjMFpqUm1ZU0l2UGlBOEwzSmtaanBFWlhOamNtbHdkR2x2Ymo0Z1BDOXlaR1k2VWtSR1BpQThMM2c2ZUcxd2JXVjBZVDRnUEQ5NGNHRmphMlYwSUdWdVpEMGljaUkvUHJlQU4zb0FBQXVqU1VSQlZIamF4RmxwYkJUbkdYNW1abWNQNzNwOW40QnRpS0V4S0JCelJKeHBDSWxRMGlZb1ZkdWtyZFQraUNKVmFrSE5qeDVwVTZsU3FGVFNIRzJWa0IrNUQ5SUdRcE5BRG9nSnR6RVl6R0d3TVdEamMyMnYxOWV1OTVqZDJkM3BNNXQxTkptc3VacTBsajU5NDkxdnZubWY5MzNlNTMyL1dRRTMvaWRNY2EzL2FSbldhL2dHL29RYnZNYzh6SHRwR1dadENpRGEveEpBeXVEK2NlV1JVOE40SXE0SlJXNnJvRG9sOUR1RXBNY21KbnBsSWRFakp0V3VtQkx4S0tIdzRMRFA0OTM4d3ViaGJkdTJxUVlnWHhzdzRUcU5GM3U4NDNmdDgxbTNqeWlhMDIyVklQQlRnWS9TWjAzVElIR1dSRUNXdEFtbm1QUTVMSm8zUzRiWEtjUTc3RkM3b2FvZUxSYnNiV3RyODZ4YnQyN1VCT3Bxd0xRYkJaRHkvSVgyeXhVQngvUVBUdy9INXlXNWxVaXI5UzhTbXBaYUVlZUgwU1FRamljUlVqV0VFMGtFT1NMOE1zWjFpb1M0MDZJRlp0bmhyN0poYktaRDdDdTNhNWNkU2JXSDREb0dod2E3NnV2ckJ6WnMyRERCNWNrTTRMNENTcmdPem92ZU1lVzFKcC8yazBxM0JWYTZlaUNVZ0MvNitWNkJXQkpqdEQ1QTQ1VTRnU1EwQkFrc3dPdGhndW5tNTcwY3lYZ0Mxa1FDV2Z6T1RjRDVrb1pwTmpFNjNTR0ZLbHhTdUNyYk1sS1dKZlNWT2NVT09SYllVVmxWZVNRTkpwa0IxRFVERUQzRHdWOWNDRmcyWFE2bzlua0ZWclNOeHJDZ3lKYmFKa0l2dTZ3aS9BU2owaWhmSkluTG9UZ3VFV0NYa2tRM3dYbVRTUWdFSlNmaXNIQzlUQ0FpWjMwSUJDbm9NNGVWKzluSlNUYzUrUGpLWWwrZXYrV1h0NjFZdFlzMnhQVmdtNEZJMTJMODRJQjM2ZG1BL2VtMjhYZ0I3VVFzUlJNTkxvdUlWZ0laVmpRMCtlUG9qeVNRNzVEZzVkNU91NGpWSlRiTXo3Vmdta3VDUkkrN09IVGpOVFVKTlVaN3VJZklZZFZvT085eGtKSVdQbEZWRXdnVHhrekxpSFBueTgva25qNTc3Z05USG53UkFjdlZxTE52Nzc2OEVUSG5DWXVzVmR3eHpZWm1Yd3psV1dLSzR4NTZPTWNtMGNzSkpyS0diOVBnZDN4UjlCQUlQMEk1djd1OVVNWjNpNnlva29GODJVN1FBbHJHb3VnYUkvQndBZ1ArR0hyR2xaUlB3MUZTaXk2TlVLOGVyQzNHNVoxUDRFSjdSeWZ0c0J2c21veUFicDltdVpMeDY5ZXZsKzF6bHZ6MnFiYklhaDN2Mm5JYkNsd1dPS2sraTRwRTVETWNod2xvZ2c5Y21DL2phQ0NPMW1BYzVYWUpsUTRCU1ZMbXMwRUZEYnk1aHBId1REQm5nakZVNTFqeDVJcGlmSHg1QXNRSUJnV2VBSUVRMks0TFl5Z3FMRVd4NXlBK1BkWFFraFNsYmJURmxqWmFwNUNVbmxOMlNsZWl6aHM3Nis3Nzg0WDR4alBqQ1p2TVQwNk94UkZoNU5zQ0tpNEVrL0RUd0FLSGlEd0NtVU5nNHpUMG9YSTdJNkNsMXBRejBYc0o2RmMxMlNqaEJnZjdJMGp3SGwzQjlJaHRxT3ZEbkh3NzFzNXk0UklqOTBCTkxuYTJLMWhScXFGbHk4YVlJenZ2bVYyN2RyZWtqWTlueUlPTUZFcDV2Nk83WithenZkajA3K0ZZOW55WERBK0p2eVJQeGxMU1FXRkNVa2l3Mnh0REwrbVNRNzY3ckFKdVl2ekxPUCtRa1JvdXNNREduYnhCRlMrMWpLY2VOQnBTVTY2Y3h2Vkgrb0tveVNQemlXYmpnVUhNeXJQaHhlUER5SE01SVoxNkd4UEJ3Tjc5OVkxTmFSdkY5UGlLNkVpWmpOKzZkV3RXZC9HOFovL1lHcnJkUnUrTzBtc3VXY1I5OUc0ZnBkSkRaVW5RdXorb3NLZm9VazN2QjhpRDNRTUt0blNGMERTa1lFS0p3OG1rWEZsaVJibkRnbGxjYy85TUZ3NzFodEE4R01iM2FuSlF5SHZmYXgxSEliOWZVdWJBcTgxaGZDZTNIMmQydkRqZ0dRNjgxTm5aT1VSNzlBb2VNNHk0VVlreVJxQjY1ZHBIZm5RMDlLQ05ZYmJTMndFQ1dGZnB3bGw2YzV3SzhyTVpXWGk5TjR6UldBSkJKdk53Tkk1RjVQaFBhM014eE94dFpvSWVIZ3hoZTdzZjVYVEFMS2VNMWhFRmp5MHV4S09MQ2pEQzVMK0x0SG1OQ2piQ25IaGdWU21lTytyRGtsSWJ2SWUySUtCcW56WTJObllZZUo4d1VNZFkwTDVFb1JUdmUvdTlLeDQ5RzM3Y0U0b0picHVNRVJyMDhFd25jaGlyQ1JwOGY0a2RwMGVqVEVnVlMxblFndlQwbWtJclB2R0VvVEE2RTF6dnBOTDhlbTR1Y3EzNWFQSkYwTXlJbE5oRS9PV0lGMldVMlVxM2pETURJU3laN3NTMmg2cngzcmxSREFRWkxaekVCNDNIV3IxandicTBwMVhEeUZRSHZxQlFpam85L1VNTC8ra1IvcmFsUFZTZFI2V0preGI2Z2pYRk5xd29zTEZOME5BWFRGQkdwWlIrUjZuWFFWWlhQL1BnSnFjRnh3Y2pxTXFXRVNIUXVwNGdzbmx6TDJWeVlhRWQ2eGNWb2lwSHBvS0o2UGVyT05RVndONUxmalIyQjFEWFBvRWZ6N1BqeEZzYm83SXo3NVVEQnc2YzUyT2pldmZCRVVuUFVST0Z2dFJLNkxQMDF3YnZKNXRiQTNjbFJBRXlpeFJySTVLOERwRkNNNW5JYThzZDFHa1JjM05sV09qbE5sS2xNc3RDSlpKWW1SV2NwS2NkWEs4WHVBSW02dTZPQ1N3dno0S2JSdWN3dVVmQ0t1eWlpSHZtNUtTY2M3ZzdpRTRmSTJmTlJrN3pXOWoxN3B0N2p4NXZlaXB0Y01nMEZCT0FWQVJFWTEvZkY1TFdaRm50Q0xFbENGRXY5VEt2NTRDTGF6dFpiUDUrZGd5Ynpvemc5MVFMblJaNjZYK3VlUlMwRGNVMkN4NnJMVVFGZStzaDhscGxGSmFVT2xCS2dLc3JYSGk1eWNjdVZZQ1RWRHJVR2NDZWkzNE1qQ2xZTUxNQTM2OWdGTFp2R1phczluOFpralpxR0VZS2FXWVZFaVpsNnZuZi9MeDhjYTVXUFMzUGJZdG9NdnJKYzRVSm12SXFWK2dqaTlkaGNyM0JFMEVqS2FNeXFaTUVXVXBhRmJOdnJxWWNXcWsrNzdXTllYYXVGY3VZOENXa2xaMVJPZGNmd3ZJWlZLS09BQzZOUkhEN0xEZkNGZ2UyUGYwN2doUGZxZHV6cHlGdGNNUkVIOVhrZWMwTUlFVWhXMUk1WWduMDE5ZklBV1hOZE1lMHhUTUtYSUlsaTBEaUNESWlGdDVtNVVMZDQzckRKWE1ma1gxTWkwL0IwYjRRampHUmRmN1BZNU8zb3NLSklvZU1BSlA2OWFaaHhBaTBmU2lDTzJmbm9vYVJPZEl4QmxkK0VkdzkrL0R4dHJmYlRqVTN2NkFvU2lSdGRNVEVmZFdrUWw5dGxkT0twTnRuTHlzdHlWbDRhMjNGM1hmZWNjKzgydHZ1VTRxL1ZYMXcxQ29kcElZUEJSV2lwdkdpanY3ejg0QytkWUpBRW95RXhtdGRoVzVtMHErcXlNYjhzcXhVc2VvZWo2S1lpVjUzY1J5bG5FZFVHYklRd2FFbkgwNjQzYTQvdmYvQmpzYTAwVHJmZytuWkdJR0UyZnZtQ0FqcC82VmdNQ1JjYW0rUDdLcmJjLzZ6UGJ2M1NQNytpNnVLTmR1OXN3dHlLNHZ5Yk9Ha0xQalpNc2YwMHd0THNwN3UxcFFIbVB5a2owWWdlcE4ycE5PUC9hd0YzZVM2M3ZUZFJ2ck15TFhoSXFVMXB6QWZ2Ui85QThySXdLNzlodzUvRkkxR2piU0ptSkkyby9GR0FEQkV3aml6cEFmVkUwMG5lN2UrdTMxL3lOZHplbUZPSXJKbXVzMDFkMXErVTNBNEpML0t6cFF5cWlldDNqTHI3YkEreTd5ZFFzU29hT2dkaitFWTVmTFQxakdNc1oxWXZhQUMwNE5uOGU0cnovc0M0ZWptam80T1h3YmpqY2s3NWZsWU1sSEpmS2cybm9TUzU5c3UrdDcvOEtNVDUwNmZxSytVQWtNclM1TGl3aGs1N3BLQ0hGdENzcEx2UElHRm9qeWdKSGdtL254THZXblRUMjkyamdnamRtcVF3c0JEVGVOYm16VC82TWliUnhxT0hqTnAvbFVUOTBxOTBGVEdKd3loVEF4NnZjSFBEaDQrejA3eFlKNDYxbjZMVTFFV2xjdXV1VFB5M2E3c2JPaFJHZkpIRVZmWnZLWFB6ZnFPK3BuNWxsbWxtRHU2RitmcmR6ZTNkblMrRVFvR2cxZndmc2JFblNvQ3lIRHFTV2JvUjc0QW9rU2pzZU1uVC9lK3YzTm5RMko4NkV5ZU1qQ3dwRlMwclpoZFZGSlJsbzlJa2xMTTVOV2xXSTNIWVhPNmNXK1ZpbE5ibnd6NGxlU3JyUzB0N1JtTU4zdi91bDZybUY5WWlaT0piUmh5V3JFbVZVczJqa1czTGlpcXJiMTE3ckpseSsrZVhyTjQrWUJZWm0vd3hIbGVGckcwakVmUE4vOEFiNzluNThGRDlicHNobmxQMkZCdHcxTlYzT3Q5TDVRSnlDUVkwUURBWWdEMEpURGxaYVhaaXhmV3psaTJiTm1hbStjdnVzTXpPRnBjdCtNZGRIVjNIUWlHSXk4d2NVZlRYZytiakora3p4VzVmNjJ2VllRTTljSUlSTG9ha1BTUURQZE1VaktXTm5neUNwSHI0ZjdWa25pcXhEYm5oalpWZmhpdWpmTmtpeHcxS0krU1FmT3Z5ZmovNXVXdXVXNUlwbnd4UjhWaVdEUHBBSFBUcGw2dGFIMWRBSzVFTHlGRDBsc00xNExoMVVqY2RHaUptdzhyM3pTQWEwbDZZNzRZRCtXYVNaNXZ5UGl2RThEVm9qSUpBQmxlVUNXbmVJSDdmd0dRQ1FneS9CaWlaWHBOZUNNL2RueFRBSzczR1RmOEs4MS9CQmdBejVzcUZBYWNCVUlBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRRUFBUUFCQUFELzJ3QkRBQU1DQWdJQ0FnTUNBZ0lEQXdNREJBWUVCQVFFQkFnR0JnVUdDUWdLQ2drSUNRa0tEQThNQ2dzT0N3a0pEUkVORGc4UUVCRVFDZ3dTRXhJUUV3OFFFQkQvd0FBTENBRkFBUVlCQVJFQS84UUFHZ0FCQVFFQkFRRUJBQUFBQUFBQUFBQUFBQWNJQmdVREJQL0VBRFVRQUFFREJBRURBZ1FFQkFjQkFBQUFBQUFCQWdNRUJRWVJCd2dTSVJNeEZDSkJVUWtWTWtJalVtR0JHQ1F6V0dLVTFCYi8yZ0FJQVFFQUFEOEExQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUNWODc5UldGOERVRnViZXFTdnZGOHZjaXcybXkyMk5KS3FyZnRFM3I5cmU1elUzNVZWWFRVY3UwSlhXZGEyWFlZdExkZVlPbVhNTVB4eXFsYkV0MjlmNHBJVmQrbjFHTEZIMkwveFYzZDRYU0t2ZzBwYjhveDI2WTFCbVZCZWFXV3gxRkdsd2pyL0FGRVNGYVpXZC9xcTVmWnZiNVZWMXI2bWNWNjFiN2x0Wlh6Y0g5UE9WNTlZcmJLNkNhOFJ6TFNReXViNytrMzBucS94cFVhdW5hVk50VFpUK0Jlb2ZEdWZiUmNKN0hSMTFwdk5rbVNudTFtdURFYlUwY2k3Uk42L1UxVmE1RVh3dTJxaW9pK0RsdVZPclcxWVpuanVLZVBPUDc1eUptTUVhUzFkdnRYeVJVamRJdXBaZTEybFJITlZkTlZFMm0xUmZCNXVHZFk4RStlVy9qYm1YaXEvY1ozcTh1YXkyT3VNcVQwbFU5VjdXdFNic1pwVmNxTlJVYXJkcnBWUmRiMGNEbXVSZVJNVTRxdzY0WjFtbHgrRHRWdFlqcEhJM3VmSTVWMHlOamYzUGM1VVJFL3I1MGlLcVozYjFzWjFKWjF6cUxwVnpWMkRvejRqODYrSlQxZmh2ZjEvUTlMWFpyejNlcDI2ODkydkpvWGpUa25FdVdzTm9NNndxNExWMnk0Tlh0NzI5a2tUMnJwOGNqZjJ2YXZoVS91aXFpb3F4ZkxPc2hqczN1ZkgvQ3ZFbVFjbVhLeHZXSzV6MitWS2VqcDVFVldxMzF1eCs5T1J5YlZFYXFvdmFyajF1Sk9yU3paN25UdUtjN3dXOWNmWnFyRmxwN1hkdm1aVk5ScXUxRkoydFZWN1VjNU50UkZSUGxWZktIWTg1ODlZWndKamRQZThvWlZWdGJjcHZoYlhhcUpxUHFhNmJ4dHJFWDJhbTI5emw5dG9ubFZSRmtqZXRtOTRyY2JhL216cDd5dkFiQmRabXdRWG1lVmFtS056dktlcXowbUt6eHRWYWlxN1NMcHE2TlFVMVRUMWxQRlYwazhjMEU3R3lSU1J1UnpYc1ZObzVGVHdxS2k3UlQ2QUFBQUFBQUFtZDc0RHhISU9ickp6dmM3amRKcjFZS0ZhQ2pvbnZpZFJNYXFTb2owWXJPOUhvc3oxMzMrK2wxNE9YNjBjL3dBUnducCt5bWh5VjhFdFRrZERMYWJYUk8wc2s5VEkzVFh0YjlvdHBJcnZwMnA5VlJGaHZJak10NGUvRGVzK0xYcFo2UzczV09HaW1ZL2FTUXcxVlhKVXJDNUY4b3ZvcjZibXI3YlZEMzhHNm1Wd1hCTFRnL0FYVDVsUElGaXhXaWlvYTY4VzlyNEtTV3FheEZuZEU1c1Vpek9WNnVjcTZUYXFxcHRGUlZwSFRMbWZBL0xWNHlYbExqekZwTEZtbFk1dFBrOUxVeVBTcFk1VlRTdVozTEdyWExHdW50YWlxclhiUkZWVU96NHI0RHhIaVhLOHl6S3lYRzZYQzU1dlhmSDE4MXhmRkk2TjNmSTlXUnF4alZSaXVsVmRMdjJiNVhSbnZyOHVORHlKZitQT0JjTmEydHppcnZjZGNpd2ZOSmI0RmpjemIxVHl4SGR5U3I5bXdkeTZUU3JTT3JqTHVjK0tiYlorVytNYjZ0VGp0a25qVEpiQStpcDVHejAvZWkrc2txeHJLeEYzMlA3WGZLaXRjaUpweW5QYzI5V2xUY2NSd3ZIZW5PcWJjYzQ1SmJETGE5UlJ5dXQxT3JsUjc1V1BSekVlajJQalZISXJXK25LNWYwSnVzWkZ3WGF1VXVNTExnWE9WMnE4c3E2QjhWYlYxMFQwb2ZYcld0Y2l2UmxPakdkaUpJOXJXcTMyMHE3ZDVPTzU5NnZlSitCVnJjSHJhS3F1V1EwOUF4YWUwVTlMcUR0ZXhmVGJKSTdUR3MxcmFKdFVUOXFuNE9oSGpPNVlGMCtNZ3VWN3BhaWJKcStlN3NkYnF1T29aU3NraWppYTFzakZjeFhva1hjdWxWRVZkZTZLVW5ncmdqRU9uL0ZxM0ZjUXJMald3MTllKzRUMVZ4Zkcrb2U5ekd0UnJuTVl4RlJFWjQ4ZlZmdVoyNTN1TkZ5eDFwOFQ0WngramFxNllIVi9tT1ExMVA1YlR3TW1pbWRCSTlQNVd4dVRTK082b1J2dXFvZWptclc1eitJcmg5aXVpSk5RWWRqenErQ25mNVlsUXJKWkVrMS9Nam53cnY3eE4reGN1cHZHcURLK243a0MxWENuWksyT3dWbGJDamszMnowOFRwb25KOWxSOGJmSnpYUkhrbGJrL1RGaFZYY0puU3owY0ZSYnU1eTcvaDA5UkpGRW45bzJzVCt4Y3dBQUFBQUFBU2pxRTZoY1k0Q3htR3VyNmFTN1pCZG5yVDJTeVU2L3hxMmJ3bjBSVmF4RmMzYnRLdmxFUkZWVVFsM0R2VHBtMmY1bFQ5UVBWSk95dnlOTzJXeVkxci9LV2FQZmN6dVp0VTcwOTBaNTB2elBWei8wK3QrSVBqbGJmK21tN1ZORkU2UmJMY0tPNHlOYW0xOU5IK201ZGZaRWwydjJSRlg2Rko2Ylg0MUp3SGdMc1NTQkxiK1FVaUlrV3RKTWthSlAzYS9mNnZxZDMvTHVJRnhSRFNyK0lseWROaUNNUzFzc1NKZFZnLzBmaTFTazcwWFhqdjhBVlI2cjllNUpQNm5iOVFIVXBrVm95cUxnbmdPenBrUEpOeWJxVjZJanFlelJ1VGZxeXF2eTk2TlZIYWQ4clVWRmR2YU5kNy9UcjB6V3poeEt6TWNxdXo4bjVEdnU1THZmYWhWZXFLNWR1aWhWM2xHYjkzTDh6OUp2U2FhM3RlY09SY1A0dDR2djJXNXpERlZXeU9sZlRyUVNhWDh3a2thclcweUl2aGUvYW92aFVSdmNxK0VVd1AwcHNsNmRPVzhXeTNsakM2YTAyZmxDMlNNc0Z5a2M1VXRheVMvSTFWZXE5aVBhc2FLcTdjakpZM0s1RVY2RzdPYnVlTVA0Q3Nsc3lITnFDN3pVTjByMjI1a3RCVHNrU0dWV3E1Rms3bnQwM3RhNWZHMStWZElkcmNMUGptVVdtYWp1bHR0OTF0dHlpVDFZNW9tVFExRWF0OEtxS2lvNUZUMi9vWkU2QkpHMjNQdWFjUXhTcmtxY0d0VitUOG5YMUZmRXpjMVF4cXh1WDlYZEZISHRmcWpHTDlUb3VZT29EUDhBa3pPS3ZwNjZYb216WG1IY09RNVNxNnByT3pmYTlySG9pb2owOG9yMDJxS2l0WWl1OHRxL0FIVHpoL0FPTnlXNnpPZmNyM2NWU1c4WHFwYi9BSml1bDhyOTE3V0lxcnBtMTkxVlZjNVZWWXBtYXN3ZjhSWEViNWRISkRRNWhqanFHQ29ldW1MVUl5VmlSNy9tVjBjU2ErOHJmdVhIcWJ5V2d4VHArNUF1dHdxR1JOa3NGWlJRcTVkZDA5UkU2R0pxZmRWZkkzd2MxMFNZNVdZeDB4WVZTVjhUbzU2eW5xTGlyWEpyK0hVVkVrc1Mvd0I0M3NYKzVjd0FBQUFBQUFaZjV4Nk5jcDVnNWRieXpidWRhekdhbWpocDRMVkJUMmQwc2x2U052bFk1a3FXTHRaSFNQMmpVVkZmcnpyWjVmOEFnNjZnZjk4ZWIvOEFVcWYvQUhGNzQ2NDR1T004WVFjZGNnNWRVWjdLc1ZWVDE5eXVrVHUrdWlta2U3c2thK1NSVlJHUFNQU3VYdzM2ZXlSS1BvbnlQRVo2Nmg0WDZqc3V3ZkhiaEs2V1N6c2lXcVpFcnYxZWxKNnNhc1hYaEhhVitrVGJsMXNyWEJYQUdFOEIyQ3J0ZU1QcTY2NFhXVktpNjNhdWVqNnF0bFRlbGNxSnBHcDNPMDFQYnVWVlZWVlZYUDFEMENjazJmSjd4bU5nNnJyMWFMdmZwcEo3aFYwRmtrZ2xuVjcxZTVIT1pXSXFwM0x2WHNlei9nNjZnZjhBZkhtLy9VcWYvY1VYbVRwcW01d3ozRkwxbVdkdWZpR01TTnFGeGhsdStXdW4vYytXZjFmUGRwcmRlbjRaM0lpb3IxY2RQejF3ZmpmUFhITlZnTjZsU2hmM01udDFleUJKSFVOUXp3MlJyTnQ3azdWYzFXN1RiWEttMFhTcCthbjROcGNoNFVnNGE1aHZ5WnJGRFR0cG5YUDRSYU9keVJyL0FBWlA5U1JVbFlpSW5mM2ZOcjVrWGJ0eU9Qb281QnBMUi84QUUyM3F1elNud3Z0V0J0bytHM0kybVh4NktUcE1pSTNYanRSbmJyOXV2QmFNSDRSeGppcmkydDQwNHVta3NicW1scUdNdWtqZlhxUGpKSTFZbFhKNWI2ajJyMnJwRmFtbW8xTzFOYXpqaWY0Zm5KT0J4Vk1HRTlXbC9zTWRiSWt0UzIzV2VXblNaNkpwSFA3SzFPNVUydnY5MU96eFRwUjV5c0dVMmUvWFhySnpHOFVWdHVGUFYxTnVucGFoSTZ5S09Scm53T1ZheHlJMTZJclYyMVUwdnN2c1ZYblhnUEMrZmNicHJMbEQ2cWlyYmJNdFRhN3JST1J0VFJUTHJhdFZmQ3RYVGU1cSsvYWlwcFVSVWt6T2lhK1pUY0xaSHpiMUNaVm45Z3RNelo0TE5QQ3RORkk1dmhQVmY2cjFmNDJpdTBqdEt1bkpzMUJUVTFQUjA4VkpTUVJ3UVFNYkhGRkcxR3NZeHFhUnJVVHdpSWlhUkQ2QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQS85az1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUVBQVFBQkFBRC8yd0JEQUFNQ0FnSUNBZ01DQWdJREF3TURCQVlFQkFRRUJBZ0dCZ1VHQ1FnS0Nna0lDUWtLREE4TUNnc09Dd2tKRFJFTkRnOFFFQkVRQ2d3U0V4SVFFdzhRRUJEL3dBQUxDQUZBQVFZQkFSRUEvOFFBR2dBQkFRRUJBUUVCQUFBQUFBQUFBQUFBQUFjSUJnVURCUC9FQURVUUFBRURCQUVEQWdRRUJBY0JBQUFBQUFBQkFnTUVCUVlSQndnU0lSTXhGQ0pCVVFrVk1rSWpVbUdCR0NReldHS1UxQmIvMmdBSUFRRUFBRDhBMUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFDVjg3OVJXRjhEVUZ1YmVxU3Z2Rjh2Y2l3Mm15MjJOSktxcmZ0RTNyOXJlNXpVMzVWVlhUVWN1MEpYV2RhMlhZWXRMZGVZT21YTU1QeHlxbGJFdDI5ZjRwSVZkK24xR0xGSDJML3hWM2Q0WFNLdmcwcGI4b3gyNlkxQm1WQmVhV1d4MUZHbHdqci9BRkVTRmFaV2QvcXE1Zlp2YjVWVjFyNm1jVjYxYjdsdFpYemNIOVBPVjU5WXJiSzZDYThSekxTUXl1YjcrazMwbnEveHBVYXVuYVZOdFRaVCtCZW9mRHVmYlJjSjdIUjExcHZOa21TbnUxbXVERWJVMGNpN1JONi9VMVZhNUVYd3UycWlvaStEbHVWT3JXMVlabmp1S2VQT1A3NXlKbU1FYVMxZHZ0WHlSVWpkSXVwWmUxMmxSSE5WZE5WRTJtMVJmQjV1R2RZOEUrZVcvamJtWGlxL2NaM3E4dWF5Mk91TXFUMGxVOVY3V3RTYnNacFZjcU5SVWFyZHJwVlJkYjBjRG11UmVSTVU0cXc2NFoxbWx4K0R0VnRZanBISTN1Zkk1VjB5TmpmM1BjNVVSRS9yNTBpS3FaM2Ixc1oxSloxenFMcFZ6VjJEb3o0ajg2K0pUMWZodmYxL1E5TFhacnozZXAyNjg5MnZKb1hqVGtuRXVXc05vTTZ3cTRMVjJ5NE5YdDcyOWtrVDJycDhjamYydmF2aFUvdWlxaW9xeGZMT3NoanMzdWZIL0N2RW1RY21YS3h2V0s1ejIrVktlanA1RVZXcTMxdXgrOU9SeWJWRWFxb3ZhcmoxdUpPclN6WjduVHVLYzd3VzljZlpxckZscDdYZHZtWlZOUnF1MUZKMnRWVjdVYzVOdFJGUlBsVmZLSFk4NTg5WVp3SmpkUGU4b1pWVnRiY3B2aGJYYXFKcVBxYTZieHRyRVgyYW0yOXpsOXRvbmxWUkZramV0bTk0cmNiYS9tenA3eXZBYkJkWm13UVhtZVZhbUtOenZLZXF6MG1Lenh0VmFpcTdTTHBxNk5RVTFUVDFsUEZWMGs4YzBFN0d5UlNSdVJ6WHNWTm81RlR3cUtpN1JUNkFBQUFBQUFBbWQ3NER4SElPYnJKenZjN2pkSnIxWUtGYUNqb252aWRSTWFxU29qMFlyTzlIb3N6MTMzKytsMTRPWDYwYy93QVJ3bnAreW1oeVY4RXRUa2RETGFiWFJPMHNrOVRJM1RYdGI5b3RwSXJ2cDJwOVZSRmh2SWpNdDRlL0RlcytMWHBaNlM3M1dPR2ltWS9hU1F3MVZYSlVyQzVGOG92b3I2Ym1yN2JWRDM4RzZtVndYQkxUZy9BWFQ1bFBJRml4V2lpb2E2OFc5cjRLU1dxYXhGbmRFNXNVaXpPVjZ1Y3E2VGFxcXB0RlJWcEhUTG1mQS9MVjR5WGxManpGcExGbWxZNXRQazlMVXlQU3BZNVZUU3VaM0xHclhMR3VudGFpcXJYYlJGVlVPejRyNER4SGlYSzh5ekt5WEc2WEM1NXZYZkgxODF4ZkZJNk4zZkk5V1JxeGpWUml1bFZkTHYyYjVYUm52cjh1TkR5SmYrUE9CY05hMnR6aXJ2Y2RjaXdmTkpiNEZqY3piMVR5eEhkeVNyOW13ZHk2VFNyU09yakx1YytLYmJaK1crTWI2dFRqdGtualRKYkEraXA1R3owL2VpK3NrcXhyS3hGMzJQN1hmS2l0Y2lKcHluUGMyOVdsVGNjUnd2SGVuT3FiY2M0NUpiRExhOVJSeXV0MU9ybFI3NVdQUnpFZWoyUGpWSElyVytuSzVmMEp1c1pGd1hhdVV1TUxMZ1hPVjJxOHNxNkI4VmJWMTBUMG9mWHJXdGNpdlJsT2pHZGlKSTlyV3EzMjBxN2Q1T081OTZ2ZUorQlZyY0hyYUtxdVdRMDlBeGFlMFU5THFEdGV4ZlRiSkk3VEdzMXJhSnRVVDlxbjRPaEhqTzVZRjArTWd1VjdwYWliSnErZTdzZGJxdU9vWlNza2lqaWExc2pGY3hYb2tYY3VsVkVWZGU2S1VuZ3JnakVPbi9GcTNGY1FyTGpXdzE5ZSs0VDFWeGZHK29lOXpHdFJybk1ZeEZSRVo0OGZWZnVaMjUzdU5GeXgxcDhUNFp4K2phcTZZSFYvbU9RMTFQNWJUd01taW1kQkk5UDVXeHVUUytPNm9SdnVxb2VqbXJXNXorSXJoOWl1aUpOUVlkanpxK0NuZjVZbFFySlpFazEvTWpud3J2N3hOK3hjdXB2R3FESytuN2tDMVhDblpLMk93VmxiQ2prMzJ6MDhUcG9uSjlsUjhiZkp6WFJIa2xiay9URmhWWGNKblN6MGNGUmJ1NXk3L2gwOVJKRkVuOW8yc1QreGN3QUFBQUFBQVNqcUU2aGNZNEN4bUd1cjZhUzdaQmRuclQyU3lVNi94cTJid24wUlZheEZjM2J0S3ZsRVJGVlVRbDNEdlRwbTJmNWxUOVFQVkpPeXZ5Tk8yV3lZMXIvS1dhUGZjenVadFU3MDkwWjUwdnpQVnovMCt0K0lQamxiZittbTdWTkZFNlJiTGNLTzR5TmFtMTlOSCttNWRmWkVsMnYyUkZYNkZKNmJYNDFKd0hnTHNTU0JMYitRVWlJa1d0Sk1rYUpQM2EvZjZ2cWQzL0x1SUZ4UkRTcitJbHlkTmlDTVMxc3NTSmRWZy8wZmkxU2s3MFhYanY4QVZSNnI5ZTVKUDZuYjlRSFVwa1ZveXFMZ25nT3pwa1BKTnlicVY2SWpxZXpSdVRmcXlxdnk5Nk5WSGFkOHJVVkZkdmFOZDcvVHIweld6aHhLek1jcXV6OG41RHZ1NUx2ZmFoVmVxSzVkdWloVjNsR2I5M0w4ejlKdlNhYTN0ZWNPUmNQNHQ0dnYyVzV6REZWV3lPbGZUclFTYVg4d2trYXJXMHlJdmhlL2FvdmhVUnZjcStFVXdQMHBzbDZkT1c4V3kzbGpDNmEwMmZsQzJTTXNGeWtjNVV0YXlTL0kxVmVxOWlQYXNhS3E3Y2pKWTNLNUVWNkc3T2J1ZU1QNENzbHN5SE5xQzd6VU4wcjIyNWt0QlRza1NHVldxNUZrN250MDN0YTVmRzErVmRJZHJjTFBqbVVXbWFqdWx0dDkxdHR5aVQxWTVvbVRRMUVhdDhLcUtpbzVGVDIvb1pFNkJKRzIzUHVhY1F4U3JrcWNHdFYrVDhuWDFGZkV6YzFReHF4dVg5WGRGSEh0ZnFqR0w5VG91WU9vRFA4QWt6T0t2cDY2WG9telhtSGNPUTVTcTZwck96ZmE5ckhvaW9qMDhvcjAycUtpdFlpdTh0cS9BSFR6aC9BT055VzZ6T2ZjcjNjVlNXOFhxcGIvQUppdWw4cjkxN1dJcXJwbTE5MVZWYzVWVllwbWFzd2Y4UlhFYjVkSEpEUTVoampxR0NvZXVtTFVJeVZpUjcvbVYwY1NhKzhyZnVYSHFieVdneFRwKzVBdXR3cUdSTmtzRlpSUXE1ZGQwOVJFNkdKcWZkVmZJM3djMTBTWTVXWXgweFlWU1Y4VG81NnlucUxpclhKcitIVVZFa3NTL3dCNDNzWCs1Y3dBQUFBQUFBWmY1eDZOY3A1ZzVkYnl6YnVkYXpHYW1qaHA0TFZCVDJkMHNsdlNOdmxZNWtxV0x0WkhTUDJqVVZGZnJ6clo1ZjhBZzY2Z2Y5OGViLzhBVXFmL0FIRjc0NjQ0dU9NOFlRY2RjZzVkVVo3S3NWVlQxOXl1a1R1K3VpbWtlN3NrYStTUlZSR1BTUFN1WHczNmV5UktQb255UEVaNjZoNFg2anN1d2ZIYmhLNldTenNpV3FaRXJ2MWVsSjZzYXNYWGhIYVYra1RibDFzclhCWEFHRThCMkNydGVNUHE2NjRYV1ZLaTYzYXVlajZxdGxUZWxjcUpwR3AzTzAxUGJ1VlZWVlZWWFAxRDBDY2syZko3eG1OZzZycjFhTHZmcHBKN2hWMEZra2dsblY3MWU1SE9aV0lxcDNMdlhzZXovZzY2Z2Y4QWZIbS8vVXFmL2NVWG1UcHFtNXd6M0ZMMW1XZHVmaUdNU05xRnhobHUrV3VuL2MrV2YxZlBkcHJkZW40WjNJaW9yMWNkUHoxd2ZqZlBYSE5WZ042bFNoZjNNbnQxZXlCSkhVTlF6dzJSck50N2s3VmMxVzdUYlhLbTBYU3ArYW40TnBjaDRVZzRhNWh2eVpyRkRUdHBuWFA0UmFPZHlSci9BQVpQOVNSVWxZaUluZjNmTnI1a1hidHlPUG9vNUJwTFIvOEFFMjNxdXpTbnd2dFdCdG8rRzNJMm1YeDZLVHBNaUkzWGp0Um5icjl1dkJhTUg0UnhqaXJpMnQ0MDR1bWtzYnFtbHFHTXVramZYcVBqSkkxWWxYSjViNmoycjJycEZhbW1vMU8xTmF6amlmNGZuSk9CeFZNR0U5V2wvc01kYklrdFMyM1dlV25TWjZKcEhQN0sxTzVVMnZ2OTFPenhUcFI1eXNHVTJlL1hYckp6RzhVVnR1RlBWMU51bnBhaEk2eUtPUnJud09WYXh5STE2SXJWMjFVMHZzdnNWWG5YZ1BDK2ZjYnByTGxENnFpcmJiTXRUYTdyUk9SdFRSVExyYXRWZkN0WFRlNXErL2FpcHBVUlVrek9pYStaVGNMWkh6YjFDWlZuOWd0TXpaNExOUEN0TkZJNXZoUFZmNnIxZjQyaXUwanRLdW5KczFCVFUxUFIwOFZKU1FSd1FRTWJIRkZHMUdzWXhxYVJyVVR3aUlpYVJENkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUEvOWs9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFFQUFRQUJBQUQvMndCREFBTUNBZ0lDQWdNQ0FnSURBd01EQkFZRUJBUUVCQWdHQmdVR0NRZ0tDZ2tJQ1FrS0RBOE1DZ3NPQ3drSkRSRU5EZzhRRUJFUUNnd1NFeElRRXc4UUVCRC93QUFMQ0FGQUFRWUJBUkVBLzhRQUdnQUJBUUVCQVFFQkFBQUFBQUFBQUFBQUFBY0lCZ1VEQlAvRUFEVVFBQUVEQkFFREFnUUVCQWNCQUFBQUFBQUJBZ01FQlFZUkJ3Z1NJUk14RkNKQlVRa1ZNa0lqVW1HQkdDUXpXR0tVMUJiLzJnQUlBUUVBQUQ4QTFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQ1Y4NzlSV0Y4RFVGdWJlcVN2dkY4dmNpdzJteTIyTkpLcXJmdEUzcjlyZTV6VTM1VlZYVFVjdTBKWFdkYTJYWVl0TGRlWU9tWE1NUHh5cWxiRXQyOWY0cElWZCtuMUdMRkgyTC94VjNkNFhTS3ZnMHBiOG94MjZZMUJtVkJlYVdXeDFGR2x3anIvQUZFU0ZhWldkL3FxNWZadmI1VlYxcjZtY1Y2MWI3bHRaWHpjSDlQT1Y1OVlyYks2Q2E4UnpMU1F5dWI3K2szMG5xL3hwVWF1bmFWTnRUWlQrQmVvZkR1ZmJSY0o3SFIxMXB2TmttU251MW11REViVTBjaTdSTjYvVTFWYTVFWHd1MnFpb2krRGx1Vk9yVzFZWm5qdUtlUE9QNzV5Sm1NRWFTMWR2dFh5UlVqZEl1cFplMTJsUkhOVmROVkUybTFSZkI1dUdkWThFK2VXL2pibVhpcS9jWjNxOHVheTJPdU1xVDBsVTlWN1d0U2JzWnBWY3FOUlVhcmRycFZSZGIwY0RtdVJlUk1VNHF3NjRaMW1seCtEdFZ0WWpwSEkzdWZJNVYweU5qZjNQYzVVUkUvcjUwaUtxWjNiMXNaMUpaMXpxTHBWelYyRG96NGo4NitKVDFmaHZmMS9ROUxYWnJ6M2VwMjY4OTJ2Sm9YalRrbkV1V3NOb002d3E0TFYyeTROWHQ3Mjlra1QycnA4Y2pmMnZhdmhVL3VpcWlvcXhmTE9zaGpzM3VmSC9DdkVtUWNtWEt4dldLNXoyK1ZLZWpwNUVWV3EzMXV4KzlPUnliVkVhcW92YXJqMXVKT3JTelo3blR1S2M3d1c5Y2ZacXJGbHA3WGR2bVpWTlJxdTFGSjJ0VlY3VWM1TnRSRlJQbFZmS0hZODU4OVlad0pqZFBlOG9aVlZ0YmNwdmhiWGFxSnFQcWE2Ynh0ckVYMmFtMjl6bDl0b25sVlJGa2pldG05NHJjYmEvbXpwN3l2QWJCZFptd1FYbWVWYW1LTnp2S2VxejBtS3p4dFZhaXE3U0xwcTZOUVUxVFQxbFBGVjBrOGMwRTdHeVJTUnVSelhzVk5vNUZUd3FLaTdSVDZBQUFBQUFBQW1kNzREeEhJT2JySnp2YzdqZEpyMVlLRmFDam9udmlkUk1hcVNvajBZck85SG9zejEzMysrbDE0T1g2MGMvd0FSd25wK3ltaHlWOEV0VGtkRExhYlhSTzBzazlUSTNUWHRiOW90cElydnAycDlWUkZodklqTXQ0ZS9EZXMrTFhwWjZTNzNXT0dpbVkvYVNRdzFWWEpVckM1Rjhvdm9yNmJtcjdiVkQzOEc2bVZ3WEJMVGcvQVhUNWxQSUZpeFdpaW9hNjhXOXI0S1NXcWF4Rm5kRTVzVWl6T1Y2dWNxNlRhcXFwdEZSVnBIVExtZkEvTFY0eVhsTGp6RnBMRm1sWTV0UGs5TFV5UFNwWTVWVFN1WjNMR3JYTEd1bnRhaXFyWGJSRlZVT3o0cjREeEhpWEs4eXpLeVhHNlhDNTV2WGZIMTgxeGZGSTZOM2ZJOVdScXhqVlJpdWxWZEx2MmI1WFJudnI4dU5EeUpmK1BPQmNOYTJ0emlydmNkY2l3Zk5KYjRGamN6YjFUeXhIZHlTcjltd2R5NlRTclNPcmpMdWMrS2JiWitXK01iNnRUanRrbmpUSmJBK2lwNUd6MC9laStza3F4ckt4RjMyUDdYZktpdGNpSnB5blBjMjlXbFRjY1J3dkhlbk9xYmNjNDVKYkRMYTlSUnl1dDFPcmxSNzVXUFJ6RWVqMlBqVkhJclcrbks1ZjBKdXNaRndYYXVVdU1MTGdYT1YycThzcTZCOFZiVjEwVDBvZlhyV3RjaXZSbE9qR2RpSkk5cldxMzIwcTdkNU9PNTk2dmVKK0JWcmNIcmFLcXVXUTA5QXhhZTBVOUxxRHRleGZUYkpJN1RHczFyYUp0VVQ5cW40T2hIak81WUYwK01ndVY3cGFpYkpxK2U3c2RicXVPb1pTc2tpamlhMXNqRmN4WG9rWGN1bFZFVmRlNktVbmdyZ2pFT24vRnEzRmNRckxqV3cxOWUrNFQxVnhmRytvZTl6R3RScm5NWXhGUkVaNDhmVmZ1WjI1M3VORnl4MXA4VDRaeCtqYXE2WUhWL21PUTExUDViVHdNbWltZEJJOVA1V3h1VFMrTzZvUnZ1cW9lam1yVzV6K0lyaDlpdWlKTlFZZGp6cStDbmY1WWxRckpaRWsxL01qbndydjd4Tit4Y3VwdkdxREsrbjdrQzFYQ25aSzJPd1ZsYkNqazMyejA4VHBvbko5bFI4YmZKelhSSGtsYmsvVEZoVlhjSm5TejBjRlJidTV5Ny9oMDlSSkZFbjlvMnNUK3hjd0FBQUFBQUFTanFFNmhjWTRDeG1HdXI2YVM3WkJkbnJUMlN5VTYveHEyYnduMFJWYXhGYzNidEt2bEVSRlZVUWwzRHZUcG0yZjVsVDlRUFZKT3l2eU5PMld5WTFyL0tXYVBmY3p1WnRVNzA5MFo1MHZ6UFZ6LzArdCtJUGpsYmYrbW03Vk5GRTZSYkxjS080eU5hbTE5TkgrbTVkZlpFbDJ2MlJGWDZGSjZiWDQxSndIZ0xzU1NCTGIrUVVpSWtXdEpNa2FKUDNhL2Y2dnFkMy9MdUlGeFJEU3IrSWx5ZE5pQ01TMXNzU0pkVmcvMGZpMVNrNzBYWGp2OEFWUjZyOWU1SlA2bmI5UUhVcGtWb3lxTGduZ096cGtQSk55YnFWNklqcWV6UnVUZnF5cXZ5OTZOVkhhZDhyVVZGZHZhTmQ3L1RyMHpXemh4S3pNY3F1ejhuNUR2dTVMdmZhaFZlcUs1ZHVpaFYzbEdiOTNMOHo5SnZTYWEzdGVjT1JjUDR0NHZ2Mlc1ekRGVld5T2xmVHJRU2FYOHdra2FyVzB5SXZoZS9hb3ZoVVJ2Y3ErRVV3UDBwc2w2ZE9XOFd5M2xqQzZhMDJmbEMyU01zRnlrYzVVdGF5Uy9JMVZlcTlpUGFzYUtxN2NqSlkzSzVFVjZHN09idWVNUDRDc2xzeUhOcUM3elVOMHIyMjVrdEJUc2tTR1ZXcTVGazdudDAzdGE1ZkcxK1ZkSWRyY0xQam1VV21hanVsdHQ5MXR0eWlUMVk1b21UUTFFYXQ4S3FLaW81RlQyL29aRTZCSkcyM1B1YWNReFNya3FjR3RWK1Q4blgxRmZFemMxUXhxeHVYOVhkRkhIdGZxakdMOVRvdVlPb0RQOEFrek9LdnA2NlhvbXpYbUhjT1E1U3E2cHJPemZhOXJIb2lvajA4b3IwMnFLaXRZaXU4dHEvQUhUemgvQU9OeVc2ek9mY3IzY1ZTVzhYcXBiL0FKaXVsOHI5MTdXSXFycG0xOTFWVmM1VlZZcG1hc3dmOFJYRWI1ZEhKRFE1aGpqcUdDb2V1bUxVSXlWaVI3L21WMGNTYSs4cmZ1WEhxYnlXZ3hUcCs1QXV0d3FHUk5rc0ZaUlFxNWRkMDlSRTZHSnFmZFZmSTN3YzEwU1k1V1l4MHhZVlNWOFRvNTZ5bnFMaXJYSnIrSFVWRWtzUy93QjQzc1grNWN3QUFBQUFBQVpmNXg2TmNwNWc1ZGJ5emJ1ZGF6R2FtamhwNExWQlQyZDBzbHZTTnZsWTVrcVdMdFpIU1AyalVWRmZyenJaNWY4QWc2NmdmOThlYi84QVVxZi9BSEY3NDY0NHVPTThZUWNkY2c1ZFVaN0tzVlZUMTl5dWtUdSt1aW1rZTdza2ErU1JWUkdQU1BTdVh3MzZleVJLUG9ueVBFWjY2aDRYNmpzdXdmSGJoSzZXU3pzaVdxWkVydjFlbEo2c2FzWFhoSGFWK2tUYmwxc3JYQlhBR0U4QjJDcnRlTVBxNjY0WFdWS2k2M2F1ZWo2cXRsVGVsY3FKcEdwM08wMVBidVZWVlZWVlhQMUQwQ2NrMmZKN3htTmc2cnIxYUx2ZnBwSjdoVjBGa2tnbG5WNzFlNUhPWldJcXAzTHZYc2V6L2c2NmdmOEFmSG0vL1VxZi9jVVhtVHBxbTV3ejNGTDFtV2R1ZmlHTVNOcUZ4aGx1K1d1bi9jK1dmMWZQZHByZGVuNFozSWlvcjFjZFB6MXdmamZQWEhOVmdONmxTaGYzTW50MWV5QkpIVU5RencyUnJOdDdrN1ZjMVc3VGJYS20wWFNwK2FuNE5wY2g0VWc0YTVodnlackZEVHRwblhQNFJhT2R5UnIvQUFaUDlTUlVsWWlJbmYzZk5yNWtYYnR5T1BvbzVCcExSLzhBRTIzcXV6U253dnRXQnRvK0czSTJtWHg2S1RwTWlJM1hqdFJuYnI5dXZCYU1INFJ4amlyaTJ0NDA0dW1rc2JxbWxxR011a2pmWHFQakpJMVlsWEo1YjZqMnIycnBGYW1tbzFPMU5hemppZjRmbkpPQnhWTUdFOVdsL3NNZGJJa3RTMjNXZVduU1o2SnBIUDdLMU81VTJ2djkxT3p4VHBSNXlzR1UyZS9YWHJKekc4VVZ0dUZQVjFOdW5wYWhJNnlLT1JybndPVmF4eUkxNklyVjIxVTB2c3ZzVlhuWGdQQytmY2JwckxsRDZxaXJiYk10VGE3clJPUnRUUlRMcmF0VmZDdFhUZTVxKy9haXBwVVJVa3pPaWErWlRjTFpIemIxQ1pWbjlndE16WjRMTlBDdE5GSTV2aFBWZjZyMWY0Mml1MGp0S3VuSnMxQlRVMVBSMDhWSlNRUndRUU1iSEZGRzFHc1l4cWFSclVUd2lJaWFSRDZBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBLzlrPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2JhbmtzMi0zMjAzOWMwMjFmM2JkMDJkYmE5MDQyYWY0MWY1OWMyZS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCxVa2xHUnJRZkFBQlhSVUpRVmxBNFRLY2ZBQUF2LzhGL0VIVUsyN2FOSkluOWw3Mnp6MFdYUnNRRStEZy9zTHFyTTA4N1JxZTZoVTQxdWx5VU1wZ2J2ZTVhNjFJbE5sUzBxN0l1NWlyTENHR3AzTGRDNVhrejlPYTRoK2lhRTJjcVdWOGdKdzdiRzV0UFhEUjc5Mi94MnJiZFNKS2tBNWdGU2Q2OHUwalRsRnByTVV1Zi8vK29JUDR1OEo3QmZEUVkzTXc4REtSdEUvK2EvOVVEQkFDczBsamJ0b2VNbEVPSEZGd3dWR3ZLaUh2RmU5Tzk2WWx4a05qRjYrTDBmc2RVeDdYM3VXT1pDWG9OY2JFazQrcXdiTE9uTjlNVXJtazJyRGRHM0pHMnRJTUlSMXFNSkZsdUkvQUtSNEI2ZEZXMXlQVk9zWGRrLzBtUUpEbHVvOWkvNmYrUE9nd01wbnVnNmIwZ2tER0JHSDRGYVJzdzNmTXZlWlFnU1pJa0tkM2l1OXhZUnlKVWttN1VIUDM3L241NFBxcEthUlliVlpXK0xFTjU5SDJYdkN4RHVWOVBmVm1HOHBpOWIzbFpockpmVDMxWlJ2NGErN0huN0JLYjVWdlZJRGl2NXp1cXNpd0Nxb0gxdUtxZnFES3pmTys3OGRpdlJ4ZjFjU1VuaTRDN2xXTmJHbkZaOW00ODduM09FVHk3bFMxNHptbWNRZFM5OXhZOHA1WGJHbkZabm85bUYvRzFMWTI0TEsyVTRtbWZRVlNWOXZtYW96VExZajlEM3FIb0tiSHpXOEU3WFA1N2gvOGllSWZMZisvd3lKM2x2M2Y0TDRKM3VQejNEby9jV2Y1N2g3OFB2TVBsdjNkWWJ4ekxmKy9RMnp0Yy9udUh5My92OEhOZU0rRlVFVHJ3QkxQUXdZSHRDN2RmL25wZXIrZW5adWtiWnZFazY1cjhjUCtjMXhybURtZTR1YWlzUGJlZ3RWZ1dXREFQR1VUQXJscnVFQWhjUUY5aTAxb3NGeXl3blFjUWE1VTdCQjRGV05aYTdCcXBCY3ZidmthNVE0QzRDYjNXWXRkS0xmY2Q0T3JrRGhHSFZhM0ZycGxhc0RvUnIwdnVFQ3c4MEZyczJxa2xlL2d4M29ya0RwRUVzOVppMTA4dGlUbVZ0QmJMVDBCRHJyWFlkVlRMY1Y4RmdJYTNXb3RkUzdYZzdiRUNBQStMV290ZFQ3WGM5K1lEL2xqVDJ1bWFxdVdFZit2dlgzRzQ4Ti9lOXMrNDhoNTk5K0RSOG05MHZYMDE0NGEzUDRXYnQzY29mdGRyckphc2M5cmVJWkswZHNvWnkxeHlvM09IWUlsbkc1TjJBcGxqdHpsM0tLNDFaSTJsTnpsM2lEaXRuZkxHY2pRNGR3aFFYR2pPR3d0V0FiWTNkNGliV2p0bGptVnZidTRRZURGbGxEbVcrOTdhM0NFS3RIYktIY3ZXMk53aEVHTEVOSGNzV0FhaXJibERYTkJhSjNzc1IxdHpoK2pUV2lkN0xHZFRjNGN6blBqMmt1eXh3UGFuaUMxZGZwcUwwbG9uZnl5enFKYXVQbWJ0V3V2a2oyVnY2ZUt6K05iUy9MRWNEY1hudkxUV3lTQkw1dG5PNk1sTXFMVk9CbGtRMXM3azBWU1Ixam9aWkVGaE80Tm42TkJhSjRNczZHaG43aEJQdE5iSklFdHZaKzRRczFyclpKQmxhMmZ1RURxdGRUTElzclV6ZHloT0ZNc2dTMjluN2xCcm5SeXl0RE4zR0U1eWFOR1BHa2dRQ2g5UWdTcVE0L3ZBNS95UURuVmRibGc1VVFnaEFrRURCc0I3SGdDQUFlMEc0VGl4VWxjWHFDZFpIL0w3UHJEQW1nMVUrQ0FVRXRTZ0g5cHdyZGpPM0dFb3dBb2xVc0d0SXdjQXBNQmVpeHRndkVRK2VEcVAvWTZYZ0d2cEF2djU0NUYxckFFWHFWQW0xbERQUk8zTUhjWUIzQmhFTk1DS2N1QW83Rlc0d1lCNmNFcDVQUFBKL3BNWTZpQTVWdEd1djBhY3hXVkRpVHZPQzFFN2M0ZGgzbTJEQmpBcnk0SFVDdHlneHczZ2F2RDQ4OGhUaGRCWDBBVXBsZTNLc2RBQWM1VGprSGJtRG1NZ3NXWDFVOVRxY2dDQXV2aFpERktRYS9IWXgxbjhHZUtqUXl5Z29CYTJFQmp0ekIyR1FOYjdNYWFISEVndjVJWVpoTlRrc2Q4S2RabGtlZGdGT25wQ3ZCaTNNM2NZQUxubEIrZDg1QUN2akJ1NkFOYmxjVHZMZFBtUW40OWRPSVdsQUQrTzdjd2QraVByL21NVUp6bmdVY0l0Y1NHM1BvOGJYQ1c2ZkIvb1pCZnc2UFQzNHgwYXVQeUVIbThDVFZMY3FNT2pnRnZpU0lRZVBDQ0VvMEFyM05La0pMdjNpL0UwVStBazJrZUgvS2duM2dWSXp2dnd3RGs0ZEI3QTVYcDA2UFRGUGJGMHNiREp6WC9nN1NqSEpFdC9OQkY2OFpoZFRseXlWc2psMnBKNVY5elRURUdUVFg5dXI2TWNQeDZaL1UvbWhsdy9lU2YvbHJXQ0xsZjJMYVk4Y1UwekJmM2wwMU9PU1liK2pUemx6ZTZxV21HWEM1N1FPT0thWmdyNVozemc3U25IZzlERUxwOXZBT2dwNzBOWXpJaGFnWmNMYkdqOWNFMHpCZndiUFRyaytlZ2tRd2JjQ1BHVmR6ODFyZERMQlFFZ04xeno5QTV4V3l2SDc1cDRUN0wwenhpUWVzczdOSzNneXdXSkc2NTVlb2U0NDZZQ21xQWpFVkk4eGlJc2dGM3NnbDVkYXdBSllzaWhodUVDandST0RCMXlpRTlSWHBDaGw3ajErV3krQ1p4WXNJakhrQ0lSOUFLNzBPV0ZhNTdlSWV5d1dUN2JDQ29Lb1BJOFZNTU5UVGI0b2hNT3BlYStuWnE4dUNGeDYvUEpHa0NGQWxEbE01Qlljc0kxVCs4UTlZK0p1dGFRTWRBS0NOdWVnRUZhYUFZV2pYQ3BOZmNUV0VWZTRHQlF1UFdYb1VBRFFHZ0ZYYlFMcDV4d2ZUanZNT3ZWYVA1aklJcGh3N1lyQnVvVjJlQ05xWkthNy9CVzVOMks4bjhlYzRZTnhVOVFtb1ZaN3hXU08weHMya0x6VXdmeEh0dk9BS3lrakJCVUdJcmY3b0s4NE93VjhuK0ZHaVFmbmh5VUxQd1VLN0ZkSDduRHJGNmlPUmNGcXpjR1hpcjNvU3V0ZVh2T1g1QVhMeXZrLzBvMVNLeXpLTW5DcWZxckkzZVltS1dVMFNRZnNEc0c4b1hQd0ZTRkU5OS9pV1RMaS95Qy9KL2JuQk1ZT1lxbVg5c044N1dSTzBTRGhPR1BJU1NNMFZpajVxelpsdmM1UHozLzV6bG41Q2dXb3VIS3lCM0NEYWJ5S09BQXdJcndYZUdxVVhQaVN2eHNlWFAvTi90L25uUGVJUklzdk1OOVhlUU9NYWg4TlZnRFlLRFBsZzJkZFdyZWJBMHloZFgvODUwenJBZ1FMTVRRZFpFN1JMVHdYZkUrQWdZSzdiT05jTlNwdVlOWVBrYmpiUm04NTR6M1FOb1dJdnFxeUIxdUFHMmFLQTZCQWFFcEc4UzFhcjZiR2lRUk52L1BmODRvRnFLdDJ6V1JPNFJTT05zSVd3Z01CSm9TUVY2cjVzT1VGNEVtL3c4dzU3dHdCaExLYXlKM2lGU2JFbHBqWUlCbVNnUjFyWnE3S1M5b0Z2OFBNbWUwMkhidDEwVHVFRng3cVFsUURBeGdUSWxncUZYelljb0xqTUgvdzh3WjlteW5hZGQ1UmVRT29iVXBvU0FJQmdCVG9tb0wxN3NwTDRDKy80ZWE4K1NhYlJlMDEwUHVFUDAySmFpOEFEc2ZBUFFLcURsbmF0dXVUZE0wQmd1Y3lWelc5aVNvTGJsRDFOZ3hFemZKWWVjRGdGNEJOdWRQc1V5N1VLTWhERXNDWjdjZm9WdVNPNFRFcElSRU4zbGg1d09BWGdFMjU4bjNwb1dURkEyQldQQVk2SWJrRGhGcVVvTFVUVjdZK1FDZ1Y0RE5HVkxUb3dlbmw0MHhJR3RJN2hBK0ppVThEaU92TFZHYzQ1WCtNdFQ3U1RjdGZCYXdjSXdCU1R0eWg2Q2FsTEFZUmw1YnRqakhLNDFsOEo3ejNiVHdXN1NsWXdBQ3Z4bTVRM3VpR0N4aDVMVmxpM084MGxnRzd6bkRZbHI0UzlpbFl3d3NndHlLM0tGTkNYQVllZTN6SVhHT1Z4ckw0RDNudmM3N000S3hZQUJBOE53aDdqclBNOTcrZVFodXY0THpEakg3bFdnc0tBNmVPOFJkNTNuRzJ6OFB3ZTFYY040aFpyOFNqUVh1NUZ6czNDSHVPczh6M3Y1NUNHNi9ndk1PTWZ1VmNDeUo3bVBjMExsRDNIV2VaN3o5Nnp4dXY0THpEakg3bFhnczJjVGZoNHVjTzhSZDU4ZkhpN3ZPNC9ZcnZIM0dGSEs3WmUyUmM0ZTQ2L3o0ZUhIWGVkeCtoYmZQbUVOdUE1SUc1QTdML2I1RnVPczhicitDMnlkaDlpc1JXUUNCSHk5M3lIOCtnTHZPNC9ZcnVIM1MrSDVsQ25sNyttbnh1VU9lK3hieG5nL2c5a25qKzVXWTNpSHFKRzRZQUxEMDNDSFBmWXQ0endkNCs0eVkzaUYyNEpIRURjVkx6eDN5M0xlSTkzeUF0ODhJNmgxaU4xWVZiaWZPTGp4M3lITWV6M3Mrd050bitNK1VJNzNqSDNBcTNLQURNMWJ1RUg4K2dBdnYrUUJ2bitFL1U1TDBqaHlKRzhZZm9VUGxEdkhuQTdqd25nL3c5aG4rTTJWSlA3SWVpVnZXSGpKM0dPODhudmQ4Z0xmUDhKL3BjR3BlQ3luN3FBMzlpNWc3akhjZXozcyt3TnRuK00rVUpzZnh6RDh4S2R3UzZGSHdnbk9ITmlYQWJ1QTlINkRaSiszK3gyYzhPWTVFdUN2Y3NBanljbk9IUUptVVlGbXIzQ0VzcG9WL0g2NitwcmE0MVlKYWlSc0dBQ3cyZHdpcVNRbUxhNVU3dkpzV2ZyR252cVpFZVQzOUpIRkQ4V0p6aC9BeEtlSHhXdVVPOGRpME1QRjFQejV6UGd6RkxueFJ1TUdOczB2TkhTYi9OQ2xCdWxhNVEwaE5DeEZhWDFPcTlJNi9ZMVBoQmgyWUM4MGRUbEpNU2toY3E5d2hFazBMSWFtdktWZDZSN2JFRGVOQUxUTjNPRlZuVWdKOXJYS0hkOU5DMU5UWGxDeTk0NjdFRGJKbDVnNnpRWnNTVk91VU80VEt0aEQ5OVRWbFN3ZUlEeEszZlpHNXcwUnJVNXBjQzRJQndKUU5zTmY1Z2Q4ZXlkSm5vTUMyRU5vWWN3ZVRvRXlXbTArYzQ4eHdZZzYzRVNSZXFDOHhLZHdBUFFwZTVOekJoR2RTK2hZdGdXSmdBR1BLQmtPdG1nOVQzcDlHSU9rellBZlZ0QkRjRUhNSGdjR2RCSzVXY3liL2EwU3BkV2FpQkZacXppMzlydDFMbkR1SVZKdFMxaFlEQXpSVE5xaHIxZHhOZVQvRklPa3owR0pidUVlWU93Z01udGYwSXh2N2EwU3BkYWJxcEpxendSK1BYT0RjUVNodFNoOWp3aFlDQTRHbWJKRFhxdmt3SlUvNEhIM0dIWFRiUWlnanpCM0VuYnArWk1xL0Q2RzB6bitIeGtPcFpoUXZjTzRnckFCdFNpZ09nUUdoS1JIRXRXcStteG9nZ3FQUFFMRnRGOEROUVZQRG41SEFsZjFBaGRRNjJJVXZTbjF3NCt3Q3J6dU1hSnNTa0hnZkFRT0Zwa1Fnd1ZHbjVnNmlxUUVLS2ZvTXZBZlN0Z3ZSTlRRdDU1dkpxdnVCV0tsMUVJSk5wVDdvd0Z6ZWRZY3hLRkJDQUt3Qk1OQm5TNFRPT2pWdnRnWW5RNThCS3dJRXV6QlVROU55dnJuNTZuNEFna0JxSFdSSk5XTWNxTVZkZHhodTVZUW5SSUQ5TWJCaVN3UmZ1R3JVM0U5Ylhxd1E5Qms3UklKZGQ3aHJhRnJPTjNIVzl3TnJZRWl0ZzI2cFpzaVdkOTFoTkNpVWtPT1BNWjd6c3lWQ1k0MmFUMXRlOENLc1p5QkhzUXNOWWRkUlJsbWdBcWo0Q3d6ZVN6VkRzcmpyRHNNTWlrSUpPWURkY1pzVTJCSUJpNm55bXUvZGxoZjUvdXNadXdSUVlBNjdqakxNQW9VMGFRUThtSlQ2QUlHL3VPc09vMWFpQkJHczNyaGxZNEpzei9rbnV0S2FvWU8zSUM5ZXVxOW53THBMZHFGMldlc29sd3RCaGVRdndnRXI5V0VSNUtWZGR4aTJqQ0ZSU3ZZbEg5eW5hejd6RVdSN0pFaDBoVUNRSUM4NGdMM1hNL0FlQVpKZG9NUDJpb1crUHlPSmxmeEZ0VlFmQm40OE1uN3UwTHBsdlJyTmZ3MDdLVXRzcnJqZFVLL0k5cHcvcGtwcXZodjNMMXgzRXVvZHdvWmlJRFc3MEZNRnFOZnJ3SkpBanc0cC92N3ZVZGxEcWVaSldiRGNvUWZMZzNNaXpZOHgwUUs3SndZTXdDbXlBWXRHdU5TYSsybDh4cVhyemdLOXd4MHRvSXQyNFZRZG9GNnZCMHR1N1ZOc3hkK3ZlZWErS1BVbDdvY3VCc2dkT284M3QveUh5Q3JOaTllZFJpd1hiaWl5dmJudXRGSnozOHp2ZXVtNjB6RHZFQ29VZ0tyYUJUeVdxZ0QyZWwxWWN1cUhzSXEvRHc1aFU2a3YwZVZZL3JsRDcvR2lVNlo1NmJyemlPV0NYbjFQUFlodnJqdi92cjc5NkpEZlFSVGt2WERkZVgvdkVEQXNiNjQ3WDJBWHV1ckE5L1c2dnc0b0FDaitJbE9xRCtOQWVlY08vY2NMU1NsTjBPY2RDS25HbzJZdEkyVCtiNjhIak8vb3hJSUtTUmQwYWFPcHZYS0h1SEVBZ2tDRTg3NEQ0VWFJTC9Zell2NFBBa0QxZ1BFZHZWZ1FxK2dDRENhMTBkUk91VVBnT0tBRlczaVdDTER2UU13QTlHeVRHMllpNXYvQWhyWWlNTDZqRnd1Z1U5RUZYQmkxMGRTZXVVUE1lS0dCcCtlekJGSmxidWp5YkpNell2NFBudERVQk1aM2RHUEJHaGlLTHJnRVdCdE43WmM3UkkwWFUvQzg5Q3dSWjkrQnlQVnJrMXZFNi8vQzgzNFJ5NTdQREJWQVJSZFVpYU9wdlhLSHVQRkNBN2JqVHpYU1pXNXd6UzU3OFlCUVg2V0UvbDdqL3NMbk0wTUJRTkFGQ056WFJsTXZJbmQ0K1FadEV1Sm5LM2c2dDhUeFVKZ1BENXlEUTgvL0lmOXEwQnBZK254bVZDaTZZQ2RXdE5IVUxybEQ3SGhmOTUwWGJ0K0JpV04yMmVWK0FXN2czeFdRaGNYUFo1NGxLRm85T0pSc2FxT3BPYnhEWDViczdoOGloOXQzNEEwdTVEcDhSbEZFNWZ0QUp3QXZuRzRLZjMvbUJIcDBTTkZxa3UwMW1wcnV2c0ZZd3FsQSt3Nzh5WElDck12amRwYnA4cHlmRHpZc0NZaC9mK1prTGZOU3RNcTZmVVpUTTk0M0dEMmdoOWwzWUlNRk13aXB5V08vRmVxQ2RBK0FycTAwVHVEK3pGQUJGTFI2QUdMU1l6UTE1MzJEWVVNdEtISDJIZmh6QXdVcHlMVjQ3S000RXdnMWdPb0FCYlgzWmN4UlFMdzJLQUFJV29FRG84Tm9hdGI3QnNPTUJqQ0Q3RHV3Z2ZHNjcrUWFQRTdjdUZmUUJTbVZBU1lhWUI0eGNGR3VMeW9VclJBR3VQNW9hdDc3QnNPTklVUS9oSFhmZDJDWEJRYlVQL01wNVFIT1Z1Zmk5TERqYUVVQVJEU0c0TVoyRkZ5YzY0dFlSU3RVaXFPcDRkNGhqQ1d4WnI5T01qN2s2N3J2UUF0TEFtZGprd0wxc1BIZHZ0TnI2UUk3VWdIVUFiZzdsTENPRVFjWDUvb0Nna0RRRHdpTVZoNU4zVHY5eDlON3YrOThoMzBIbWxsZTk1MlBpTmQ5NTE5NFkvbFBJM3lLa2ZEUGdUNnMxTlVGYXFTREI0OEMvSDI0TC9Za3Z1LzNuUjhLRituNllnME13VXRRc2FLTnBrWi8zb0U1Wk9uL215MEtONmdBQ3UyRVlEaTAwZFJnN3pDSExQMExXeGh1VUNnSlk2U0xvNm14M21FT1dmb1gzampjcHFxVUY4K3NTeHROcmNmWEhSS0kyeXhCT0hiNmFZUnNVaHRORGYyNlEzTEkwdDkyQitLV1FFbUljT2o4SVovRXFJMm1SbjdkSVRsazZlLzhJM0hER2hqQ254NlRNSEUwTmZEckRra0ZTL0RjSVl3RkttVlpEaFhpYUdyYzF4MlNDWmJvdVVNY0N4VDJrTDRPQkVhMDBkUzRyenNrSnl6dDJKL0I1UldJaTl4QXhiSTJtdHJ0OXc3SkNVc3o5bWZRYmlDTTFzYmY0TkJHVTN2OTNpRTVZV25GL2d5YURVU2RyYkZoSENpbjN6c2toeXoyYVo5dzNMQUdobkJpR1hLcFByUTY1UTV6eUdKYkhZOGJWSDhad1c0bm9LRlc2Z09NQXhqdk1JY3M5bG0vZ053eTVXK1B0TnNwNFNRR3BUNjBZTHpESExMODN3RUw4SGVxNnJDNXpjS1YwZFRKSE1ZN3pDSExJdnhOWW9VVDBGTlZRbjNKSnNZN3pDSExJdndGQklGOUF2cC9qOEtJY1B5RDhRNXp5TElNZjdFR2huMENHaFFzMjhjL0dPOHdoeXdMOFJjcWdQWUphSHhuSC85Z3ZNTWNzaXpGWC96WXkvTU4ybmlIRkN6NHJqemZvSTEzU01HQzl2SjhnemJlSVFVTEZzcnpEZHA0aHhRc2NBTW96amZvNEIzQ0daVXZYSDhmb2pqZm9JTjNDRTFVdmxnb3p6Zm80QjJpTFNyZjdNZnlmSU1PM2lINGdJUHlmUlJTbm0vUXdUdnN1QlAxcjdtcVBOK2dnM2ZZZ2NIemdIeGZyMDlidnU4Q0hiekQzaCtBV1hzQ2grT1dkYnlnZk44Rk1uaUhiK3gvS2ppVEpmTnd4dUcyWTY0L0VtamMrdmRkbHNFN2ZHTi95Rm9xNUVqeTdoM0dTWG0rSWUvZVlaQlV5WkhrM1R1TWsvSjlsK2JkT3d5YnJvTjNHRFpkQis4d2JMb08zbUdZQk13ZGFoTGxpS1h2SGNhWkFaOTNxTFZZamxqNjNtR2NHZkI1aDFxTDVZaWw3eDNHbVFHZmQ2aTFXSTVZK3Q1aG9CblFlWWRhaStXSXBlOGRCcG9Cblhlb3RWaU9XUHJlWVp3WjhIbUhXb3ZsaUtYdkhjYVpBWjkzZUJXMVdPSDZmazRXUHUrdy9TMDJ0NzZma29YUU8yeC9pODJqN3c4ekEwTHZzUDB0Tm8rK1A4b01HTDNEOXJmWVBQcitHRFBnOUE2MUZzc1J5K2Z3RHJVV3l4SEw1L0FPdFJiTEVjdm44QTYxRnNzUnkrZndEcU5MQkJKT0lCdk4rQTN2c0pTWVhyWk0wR0U4TnZ5S1JtVGlLQWp0YjBXUy9nWUEyRGlEREpTak5ldkwrck9Sa2YyQm53NlVJd05ud0FhdzJOeGhaR3V3RzJMSU1YZnBMT2NGdm9EeENiY1JBMHJUbjRrWStodFFFWUVtak1GcSs3RmhiRC83SW5PSFlhMEJBMWZ4R25EUjlBdzhuZVI5aWQ1czRQc2IrS0FJYitFdUdDcUR0eWg2RXJDODNHRk1hN0FESW96Q1haN1hTNXpaNzdQemZ4K2l5VUQzTnlBaUJ4UGxmbVNxU2Y3dm9qWS9kL2dBUkI2V2E4VTFNWTFrZURRWTJQNEdIRWhocmVQSEJtbHZldTd3SHdPUmovV2FhVjBzNDNzZ1dndG9mNVB3MEExWFBULzZEbTY3YzRlenkxaW9IZURHZTV4b0s1RDl6ZGQyNHhhMjZ2cUJyUjJVTnVjT1ArSmtneDc1ZlhTRDJsQWcrNXRKS25UMS9kaVEzT0xjNFNRbE1YdGdEUHlKUzgwRXNMLzVHQ2Q3NU9NSEhtSnZhM09IZjR5U0tUUXA2OVNTL2Zmdnc3VVJ3UDVtRnArWXZQeUFhUkxmMXR6aGN3ZHljMzY0M2JLSmp6Z3RCSzYvK1Q0d2EvWDBZenNhbWp0ODZHTHlsNmU4dDF1eW5vUzBEN2orNWx1MDdJV3ZIN2tYMmM1bTVnN25KTW1Xcjd5M0FSdkNXZ2RjZi9NaG45eTh0eC9RZ05QSTNPRWtQNEc5NVIwRFc0aHBHM0Q5elpQQVJPdnZCN1RZSHoxM0dBV2FsTlZyZ1d0ckdYRDl6Uk4rc2hIQkQyemdRQU56aDNQSkFlNlAxN3U0MkM3ZytwdG5BY2w2REQrd0RwL1l1VU1BSWI1YTRvb2g3eGl3UTlCSU9QWTNuL1BLTFVmeEEwdWdoY29kSmc2VEpuQUJiSGh5VVB4R0dCYXN3NnVKY094dmZob2htNGpqQjhhQmlaUTd0UGYyRDdhL0RYK0ltdE80eVN2K2hxMHRoR04vay9WRThnUDNJdVVPYzNNbUpZVDYyNUQ5SEVuZU1iTFdGc0t2djVua3hmTGpESlE3eko2YWxKRHRic01rUFphOHQ5dE0xRUo0OVRkUCtBa1V5NC85aUpNN3pMcE1TdGs5YnhzK3hrM013WEJMMXIrMnUzM3c2bS8rTld6eVBwb2YyZnQvREF5VE8wU2hTU24zMWR1R2JDU2F2TGNiT3BzSHQvNG1LNC9uQjByRDVBNFJabE42SlBDMVlTNG1ucnhqNEdqajROYmZQT2NIUnp3L09uaFJjb2VnMlpTeUpsY2JmZ3FIcFlBWVVBUFJOcmoxTitpUDZBZitpSkk3N0pnM0tVRUhqS2NOdUJwUjNqRWdiaHJjK3Bza05LWWZPQkVrZDlnaHN5a2gwOUdHR1I2NmtQSU96R0ZIdytEWDMrQjFURC91UVhLSEhTS2JFbFlCK3RtQWF3SGxmZnUvZHNHdnY4SHBxSDdjWStRT083Q3dDZnZiZGJNQkh2Z2FWTjZCOSszUEhlSlJWRC8yR0xuRDN0Rm5sNHBOSFBTeUFYRlI1UjBEeDF1Zk84U0J1SDVzSVhLSHZlT0NRQW1mZ1hXeUFjL0N5anZRMC9yY0lWcmorbkdFeUIzMkRnU1dCVXBRQW5DeEFWekFZZVVkY0V6SXJRQ3E3d2NheHJoK3dQZ1l4akYzMkg2aVFLR0VXeTQyNEllNDhvNHhTVzBHUUgwL29pTDdNUmZybHp2c1BPWUlpVjZoaEZzL0h1bGdBeVlEeTN2TGh0c0JUTjhQUldRL01tV0EzT0ViMXFSSW9wVDkrcGRJMVcwQU03Szh0OFN4TndPUXZoOG9XQ0w3a1ZqK1BweEg3dENTNDY4UmMxOGxtdG5VbzZEYU5pQXRzcnkzMnl5OEhVRDAvVGdWMjQvWldmL2M0VHZXUkt6UnhDWXFBTmExQWIyaDViMmhvU0VBOVAyb2krMEg2dnh6aHordzhFQ2tpVlZrQVZQVEJxeUdsbmZnWFV2ZzMvZGpMTFlmR1BQUEhmN0FBZ3RtbFNaMGFFQlFOUnRBankzdk9JRnNDTno3Zm5qQUVkdVBmc0M5dzU5WVNDcWdpVlYwSXh1aENlZVBrWDU3WkxrTnVCaGIzakVRMkJKNDkvMElETzhIMER0MC96NC9KczVrSG0zZ2w5bUE2NXE4RXJDNHBRT050eFVvQWNZZFlFcCtDdEd1MlM4QmkxdDZCdzJMTlNqaE9UQUZUOEo0b05rdkFZdGZlZ2NQYXlhbHlyL2pOcVkwKzFQTzR1OGRYcnpCLzZ4QUNURDQ5aTBZTmpUN0pXRHhmZCtCbi9QTExWV2doRGI3RGp4eGFmYW5uTVhUTzdUOW43SFp1M0pLMEpqejcyRTArM1BPNHVnZFdzVnh5SXNwd1duKzcrKy9STkxzMTRERi8zMEhSaExNaFpUZ05CKy8vQ1dTWnI4RUxIQ2F2VU1aYis4N2F4a2xhTXluYjk4SGF2Wkx3QUlONUgwSFJselJFbEltc3grK3dxWFpyd0FMMmpEdk96QkEzSVJlcHBUQVR3WGJ6OTZ4b2RrdkFBdGc4SDNmZCtETyswNHNVc3JhQzVaZU1LWFpMd0FMWk4za0hVb3dmWHNEWnVHWklyRUpsTElYUDQxUXNQS0dCNXI5K1dmQmMyQnEvcnNEVzFqK0ZERVJRWVo1NDlHc3ZRUWQ3Zjh2ZVJReUNWMkdtUVUwaEtIdzdiODdONXpRWkxLQ3ozaXo3cXpabjNxV0hScTBnUy8zVmRBb0JpNUdseEtCbWxaelpMa3QyWTlsb1lNZVhGNXNBdGxzZEhqQUVkdVBmalFEdldNMTloTXAzclVidldNc3RoOFlhd2c2ZW1PL2pxS2g0ZWlvaSswSDZocUNqclRZaDFHNDJIQjBuSXJ0eDlZUWREQkR5d3NIc0ExSEJ3cVd5SDdBc2pVRXZXTXlzTHdEUXkxSDcxQkU5bU5yQ282c0pMQzhBOGxOeHpFWEc5a1BSTlhBaUhmSU4vSVArU1p3WEhuaEFFbkRQRmwrR1Q0eHh2VURScUFkVU1RNWp1eDVXSGtIZXRxTzQ4amE0dnFCMWlwdzlnN1JMQk54V0hrSGpqY2V4eU4rWEQ5d29BcWN2VU0weTRlUStCcFZYcnpYTUZjV1BJcnF4MTVIQTIvdkVNMkNhMEhsSFJBM0h4Mm5vL3B4cndPemQ4aVpEaHgwTWVYRkhIWTBINzNqZFV3LzdwVTA4UFVPQ1Zod05hUzhBK0lWUU1lSm1IN2dSQ1VZdlVQYWRLQ3hGRkZlcUlGWUFmU08vb2grNEk5YUdwaTlROXFSSXpLZ3ZBTkhWd0VkdklEVFIvcGVTUU01ZDBnOGNnekhBenJYQWIyak5KNGZaeTBOMU53aDg4akJoRG1hdkZnSFpTWFFnY1JrTkQ5MklOM3dKVS92U0FrbTcwRDRXcUIzSEFBVXl3OUFtNnN1N0NQUGZvNEZTTmNEL1pqa3hmSUQyUTNEeTNWbkk4bUxjYUJXQkMvWG5ZM2tCKzYxREsvWG5ZNGpMOWJodFNvNGZob2hOeEhveHhHWXB1RTRrbk53UlpFWGRnaldCY2VSZVdJcGloOEhhQTJCUExzQWNBeDVzWVdMR3ViT0FoK3NCM2syN3MxRDc4Z0pJUzljaUZrZjlJNEQySWpnQnphMkJxSjM1T3dCN3E4U2VzZCthUDM5MkxHL2llZ2QvOEtXdDd5d0lXeWQwRHM0MEhqN2NYUUR2cmxEOXBIakxQNXlmbTA5MXdxOWc0cm52bjdnV1hkSGhVbnY4TWVzNngrczRMVmU2QjBla0xxZWhqc3MrT1lPQTR4OGpwQXAvT1JGQzFCcmh0NlBTWHhpOHZJREpzVFlmT1BsRHVsWUppbUoyVWRlL0lsTCtHYmw4THJ2UEI4LzhCQjdiYjRSYzRkMExCK3dNZUFoTDdwQlhUMjgzcERzY0lYMkRjbGRRTURjSVNNTGhGaW9KdStsZldkSytFUXNvT0FXdHVyNmdhMGRGSVZ2d053aEp3dVF5TWQ2TFhuZjdUdDFMZkZ5QXhmZGNOWHpvKytueGpkZTdwQ1dCUmprWWJtU3ZHLzJuYXZpWTUxQlFBcHJIVDgyU0x2SU4yRHVrSmpsZGQvSjVmTENpVjl4QmtCZlRWeTRnWWhzVEpUN3NkKzd6RGRlN3BDY0pmT2F1cDY5S1hwYktseDRpbXpzMWxwc0ZXdDVFakFweWQ0bGJ0R1B0L3ZPaGs4QjMzaTV3d0FzWDZKUGtpREhuQ0x2dTMybjkzV0YvWGNhbjBTZ0NXUENEcVRmN1RzOUlMN21SR0VCQ1NlUTlicnZmSml3aWUxeEpzYmNjamFlL1o0MXY5MTN2b0MxcmVYQ3Z2UHhFMzdIY0QreXZxeHRxbXFTUFR1ZmNBQUU1bXVNSUN3THd4QjVoNktuNUF1VGQ2aForTDFEZVZqWXZFTzlRdVlkS2hZNjcxQ3VzSG1IZWlXS2Q2Z0xDNTkzS0ZZNHZVUFYwM2pJWHovOU5aRGx2M2Q0NU03eTN6djhGOEU3WFA1N2gwZnVMUCs5dzM4UnZNUGx2M2Q0NU03eTN6djhyZUFkcmdhei9QY09sLy9lNFhuYmtzakxNcFRYczlSbEdjbys1K3dTbU1YKzJLK253Q3dEejN2dmZjdk5VdFcwVUJyOWc5QXMxWHBVMDBKU21xWHhxR3IyRDFLei9HUm9VMm5OOGdVQVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBTzhBQUFEVENBTUFBQUJlRnJSZEFBQUF2VkJNVkVVQWZmNy8vLzhDTGJod3V2Y2hoUDRBZS80QWVQNHBodjRBZC80QWN2NEFmdjhBZFA0QWdQOEFjUDRBZ2Y4QWMvNTF2dllDSkxMdTlQOENJN0pRbC83UDRQK3l6Zitjd2Y0QlM4OXVwZjd4OXY4QmNmTFU0Ly9sN3YrbHhmNHppdjRCVk5kZ252NENOTDBCWWVPVHV2NjYwdjhCUDhWWnFmbUhzLzVIa3Y1K3J2NVRwZnF0eXY5Z3J2akkyLy9UNHY4QlJNaytsL3NCWCtIZTZ2OWNuUDVydHZkR25QczhsdnRKay80QVp2NXFvLzVMbi9vQmF1eUNzUDQranY1OXg5WE9BQUFRSVVsRVFWUjRuTzJkZVgvYU9CT0FUWXFFamE5QUxxNXdCVkpDS2MwbTZUWnZtdVg3ZjZ6WHRtUnBkR0JEa1FseFBYOXNmeHVFOGVPUlJqT1NabXcxa1BYM0NHcFlmeHR2dmVJdHIveU52Qjk5RDhlVWlyZmNVdkdXV3lyZWNrdkZXMjZwZU1zdEZXKzVwZUl0dDFTODVaYUt0OXhTOFpaYkt0NXl5OUY0bTU3bkJVRkEvaHYvMHp6S3o4cHlETjRJTmJEZW44YVAwN1BXUmF2Vk9wdmVkOFozZlMvNEFPYkNlWnNSNjExbkdtTUswbXBkM0kvZkl6MFgrdXVLRk16YkRLeW5leGtWUW5mZWo5dXpDK1gxZ3ZmSDdiQVUrV3lNZ3VNUkY4Z2IwVTV6WUlsY2RQcEhJeTZNdDdrcmJVTDhpSTQwam92aTlkRDl6clJKdHg0ZngzSVZ3OXNNeG52UnhzQm43NEg1RzFHa0VGNFA3ZDZWdVZ4MGptQ3BpK0FON3Y2QU5wWnA4YU80QU42Z284V05QWTc3eDA0a3NaK2xuNlphL2FJMWJKeTM2ZWtNVld2YXVldGJpZCtjT05CVy82bHpwbWwzWC9RWU5zM2J0S1lhMktkK0lMbFJzVS9kSHl2SWhTdllNSzhHdHhWNUUzcERGTG5XNzFKbmFOM3BSakF5ZDRMSUxLK0syOHIyRmlNbFAwTGkxcnZLaTlCb1kyRkR5R1o1UFFtMzlaanJHemVEUHBpOFdraHVqdEMzODBpK05zMEFHK1VOSGlYdHZnTmFoR3czZEJ6ZmQwTFhodXBxQms4TStGR3hWK2puRnlLZUVXQ1R2SkpUMVhxMFdPZEV0b1BmYnViUDdWNnQxcnNkekJldnZvdlpGejJtWWtXOStDdkYvZklkV3diRUlLLzNmZ0Z4TDU2WXJyRFR1SG11U2JKZXVtNnFzcVkzam1ia1ZzZFNPLzk1eW5zK01xRmdjN3hOSkdxWHVjUFk3eXF3Uks0YlljcmdlZjErVTJPck5velhqSUxOOFFiM0FtNmYzanp5MzlwNjJrVEpnWjErdjZremJKRDMzTVRCVm1POG51QTBNMXk3TWRoT0c4dU5uM2w3SHVmOTh1MkVlSnNXeEwxSWNmMUZObTBrVjVuQStEdm4vWEpDdkVFSDRsS3ZBVG5yWE54YWJTR1BTNFFqb1d4b0JEcjBQNGNERytKdDlvRnRibzJKcVVMNGRnZmNXdHVSYitucmwvT2Z2NmtUQ1JWc3dHSVo0aFU4RFJya0lOVGJCYmRXRTMxRjlJdHFsSmduOUdEVVlwbmhGZFZMbkFaa1o5aGxRU3hJZ1JvcDMwK2lUUXdHOEw4bndndEhiK3VKREY1Zk8rbjIydXBURUF3V2Q2ak9meEVGLzJ1eVF4dmhGVnlOS2VuTnpyWEN0VjZPSEQveW9OMkgyUlg0ODhxRzF3THEvSmw4Z0FMUW9ROTJvbzN3ZWs4Z3dpRVJPNTVJc08xbDZES2ppME0wWXhxM0JRWU02SWdIQ1MzV3I1UGdEYWF5c1VLMmhMdjB4YTZJN0hDWWZEQ1Fnbm44azlOOVV6cjAxMVBnYmZZVjlicGlieDRnVy8yYTNWd01adytPUklCK0EvdVVQQ05VQno2VzVqcDdpUWxlYnl5UFhqUVNjRmUrVmkwSTIrcXlCZlFnenpla1EzT1ZIendqbWVBRjNabXVQNFdDWHpYTTlCaGxnY09WZHVodm5QZjE0M21oZFc2Umk5WWg3bnd2WE1IQklGTXc4MEFpK2YzeHZEQXlJdXN4OWhEZzN1NkhHOTBTMSs5NUVPUEJBWHpvREd5Q3R5TjNaeDg2a251bkYzT1BJM1U1b0l2MThieHcrQ2F1SkxxRWc5ZmQrNWIrNFhTLzVSbjQvQVQ2TSsvT1U3VTc3Nzl3ekQzb3RQdENnM1ZnTnZyaHZIRDI3UkRyRER6bjY3M1ZxK20rd09NNGYvaG9YdStkODVKUXdRSHExZDFlNUZzNXFvUnN0VkxwdnVpVmEvekFtTjhBTHpmUFpEY0ViVGh1VDJPY2NiQjZibXRrZlVuN0F1eStpWDhCRnprT0RBa044SEx2aWppVHVBdm1YclU3MjIrMWJiSWlUd2QyMzQwOElSMjRhR2VXTnpIUGVNWUpab3EvQzdXdnlJTDZGL0p3OVU2SkYweS9TYXdBelhOWG1TN2R6UFhacERzQUR5dU4rVG52Z1JHU1dWNHlIWUhZNkZLNU96Y0x0elpKdXU5R05rOGdLUDU2bU1OaGdQZFI1cDN6KzFmY2U5VEk1RjNHTkNmT3U1OSs1WVdBVDgyYlRML1o0emZjc25kRzVDM2hCUkhTQ1k3ZlRQdXM4QXJPdFNKSmZ6aHgrN3puL090bWJTa2w2NDhuUHYvdTYxL1ptL1hXallla3VSSWVuSloveGYzbjFvNytzK3Y0UUphODlTRHBEcWZ0UHg4YUgvbGdVMjJZdUdPbkhSL2x4TDkyenYyaFY5QjRvbCsrT2FuNFY3Tys4UUFROHRZM2ZPaGZKanVqd0R4VDZ3UTcrSUUzKzlIclY5Q1lVMnQrNnV0WGNIMnlRenIwRFlESVhKOUVDRnJuUzVtT2hyK250VDRwckQ4M1ZZcnJER0JoMDVROG1lejE1MFBQckJTenZ5QnVIMjA5Z29OOHVDOUtuR2ZZblRYN0M0ZHVFSnJlUDZMYmd4N2txQTIzN0I4NUFtNmJxQmZ1SHoyYzVQNlJabjlRbUpKcXRTdGJNK3pzaHJqVi8wS1VtYjAvZU9nR3YvSDlYM3JDMVpGY3hxNjgvNHY5bWRoaVRZN3BhUFovd2ZyN2dkR2dxZjE5MEtHcGdnVTNJakZHWGQvbSsvdXV1NUI5YVBvaHl0emZQL2dFbHZuekcvUTBraXVwTDVMcnJ1YzdZZWo0amFWNkR1MlNhZzZFOXZUOEJoelF3VW53aXVkemFBcUNyejFiZC92OHJEMm10RWpkTUs1TmVwd09IbWY0ZVJybmM4VHpWMmYwRkxQK1FKSmVWbXpLQW9zNVJKYzJHTkNIN3Y0V2U3N08zUmtZdWlUNFh3cE1IRkhESjRJTFBUOFovdGdOVnp6d2dEZmZ6OCsvZlBYVTg1T0hkK2VDejhmNnExMXdsL0tCVVl3Q1RJOHB3YzNSdzYyek9WN3gvRE03N3UxMGMybmJHODBaSXdZR3ZjdEQ5N3FUQ3hzNzMvNGtwQytrbVo3WXlqa0NQWlFQWUltM0o1eHZONURBVUZUK3dobkxYM0F1TTA1QnJ4dHNPU0EvZjhGRW9mbmk4bE5TNEdnVVQ3YnNrYzFIUEQ4bFFIMU5SanNNRGs4c1AwWE9QMnJkc2Z3ajVOUnZGQ1gvV0dDWWZ4U25CSStWdkVyUW4wOHQvMGpOTCt0NE1MOE1kWWZyMjhScDdqMnZieWF1eTAreXBQbnZyYW5TcC9sMGRITDVaY29RamdZeHpCL0VjZjVndk9BY0p4RHE4d2RiSFRsL0VIa3A3OEd1TTdtZTJYellxY2g3MGJIeU12Sno4ME85NzNGKzZIY3p1TWJ6ZnlVRlI3NldsVlYxSWFKOWhLTmVrLytMY1AzMVYvMDA4MzhqSXkwREp4blAyL083QmRvdCtkMEltVXZ3UGtyKy92MGQwdWZ2SzJVNlBsditmZ3lzcWMvUWFrM0g3OGlqOVJuaWYvdDMydm9NMDg5V255SFczTmI2RzlQSFRtYzg3blR1MWZKZlJDNCtYLzJOU0lLbkN4M01EdEwvalBWVllINzZQZ0x6M3d1VGd1b2plZU85VlJ6NW4wY28rbFZVL2F0Z1R4WHY0SmtZa1FMcm05M3BEUEFXM2Q0ZnE2SmJrZlhydkx2ZGROeTZmLy84OWV0aWlldmo1STNqVnV1STFmb0s1azNDK01pSnlxZy9lWCtYNlY4YmwyUFVGMFZQajJjS2MreCtkTzZzb0Z6MVJST0pmV1gwUGs3Y3FyaCtiRkpBOXVrOVlqMHlySFVjM2xqUzhzQnhvRVBxQkd2WDV3cVhxdjV6dWFYaUxiZFV2T1dXaXJmY1V2R1dXeXJlY2t2RlcyNnBlRCtKSVBSSDI0YWZsUmRQWXRtL1NQSyt2QWpic2V5MC9Zd3dKbTNObGVkT0phVEhYL2ErOUY2ODJQVTN5OWx3dGJwWlhOcGhkdVpZMUhiVUpXMWY4dHJ1TDVnZThsSHpxWE5rZDE1a2g4SXg3ZWVaNTI3OU5kdnBpbTJiMjl2K2dhRGllYkdRUkVWUHg0MzB5WExZVmR2T0czOVFXV2JyWFJmTzYrc1BmcTVDelE4Nitvb2kyU2NsOTd2cmdubFJ1TzNVWjIra1ZMdjE1MXZhdHV0R2pveFpoZk5tRnI1OUVZL3pJanZqVlB1REllQmllUkhPckFUN0FpR1FuVmtUZUdNR3VGaGVCeUswMTlmRDFWelFJVHpJS1NScDlLSzJRN0d0N0NHUVdzK1pSNkExVFFybGhlUHhwdTY3a1F2aGh2YVNQNFIyeU5xRzRBRC9UWU8yZFVIYjV4QmNHYm5PdzNJMlc3eFpEa21WSk1jckFRT3lmVy95WDl5azdvTTVYT0JGZGx3UHdIRjNtdVB6ZVVGRzhwRDdEUWdEaTgwZVBpaXVzWEpoVzE2VFlNUHVDdmtUWmdWdkZ4RWxKbmE5eDVvZ3R6NWtRNm0zYXJqOGlvd1grNWZESDFHajltQjE2ZWVQbGx4ZXhBdjhYSWJDSnhoUnRRM1kzMzEyZHkvaVJHWFhhZnBjbTgzQzdxc3cwbnNQZHBxL2MwMHRJTElsUzMrZEFuTmVmd2xzUzd1clQwVGRoNWU3R1lxdFFXN3lXek9XWG9LWkdsL2xIQXlhSWN2YittSUdhUzFPcVJ3SXZMaWhsT2xvMHlRZHh2c2lUUVkvY3NzajVQR0c2YVVtYWhvSnFyZHJjMUFLbDVXV1dLcHQ4VXZrWTFuczc3cHN1NGJBS3hZcHBVS0xKek5lUmRvNWtVd2VMMVBaM05GOGlrTEJpcVIxR1FhNmhHN2NHSEVmV3V1VFBGOUJYbDg3c2MzRGJON2FjM1k1MHp4ZU45WEREcEVYUzNMZWFOdUNLOWhMN2IyMkFTOHMzQUJyb0pPQ090dDVOU1hrOXVIMTArZTZnN2VmMWxYSmVjU1dVTS9nZW9KOCsxSVl6QW12bStiaXpSdSs0N2pMZEN6UGJabDMrT3I2WHBlbndHVFA1dG04ckpEekJGNEV1N0lnK0d6VUlsQ1M4SElHZ3loT1RLWlFPSEVudk94QkU1T0xNUVZPS2hBQjNsc3IvdkZvV3Zwdkp3WG44TEplQmRWckw2OGtXY2VPTVN2VmxsZmlodC90bXM4ZjRNMGpDVzlhZE9nTnB6OEsxTWV2MEdNMklVd3ZjS3V6Tkx2eTBpeHQrQTRNb1Z4TUtnMWtvUmZOczlGZU5MMnpOcHd1ZVc2bG9OOVpXb1NUSWliT0hPZWQ4TDdFREZ4V2g4N2hUV2RmNkFaaW5iR0orakRyQzNuRDEwM0xVQWlSQmk4alJmU2JEdGdKOVpwUTh5V1NDUmJzVlJzbURxZjNOVG1BbHhxU0FkQlpIcSt1eHBjZ3FlcWtTalBNc3lIMmlzMVlnNjZUNUdZaHZnVExlT0c3RzlnN0FaUVgwT3pCUys5aGtLZmY2RGR3dXF5Unc4dkcrWTBVT2FlMk1lRVZDanlzRjBLNHdIbVhFTTFwYTYrN0Q2OTIvRTQwdk5FUHMyQWg1NTBCN1BzdlVyOUw5VTc4RFVkMFNXNkhHeDRPY0g4U1hpSWNITTZyczgvdXFzZUZmdDdGWEc4NU5mUlovNUN6OGRORlplby9oM0pXNlRNTEIvVHhiMm9YRHVEVno3ODJyOXI4UCtwanhIUFFqdk12NDdWa1hqRmUwR1REUHdlNFdONDgvNHA1U3ZINDN0Ry9ZbjFHemw4T3BYalFja2RLVkVGV3dJcmp6ZkdmYlRxK0UzdTJvLy9NNW1sNTNrakxvakhlS09MMFpsTEU1d256a1hGZXBneDlmSlJPQVROUzk1WCtuejQrR3RGM3BiQkFUN2JQUVUzbWpja2N0SnlEUUhndCtCdkdlVFBqWHg3RmtqaWNlVGdMdGZmSEx3aTZxaWZlWHpwRzJ1SmpZVzVYT243cGJJdmliU3NlVUFTb1VGNnd2cUZjaHExUnJNbjB6R080RjdrdFZkNHFua1daZnpVUkRCdGJEQ0x6cjkySWhjNzd5R2J2ajRxOWlRSjV3ZnJWaTdoK0JUWVMwZ0hMWS9RM2NmUEVUdGRtZXRHOTREU1VFUlRNQ3lyRnZPbmt4bTFmdXRvVHUxUUY4bTVabjdTdy84cWk4SG42SUlCVGRHM0Q5VWtXck1XUGhyOE1Dc1JIN2lYNEt1amN6TWRPZzBpeUdsQWNyN0QyTW1zNnRvMng3ZnB2b0RZT3Q5MHVDTnhYRzk5MWJkdDEwSUt2VC94SUREbWJXTmQwMVJhdTJCTDlwa0ZZbTVhQ1E2bjF2aW1hVjl4ZnVKM1BGb3NiWVY2OEJNTlFLQmRhRzh5dnI5ZkNPaFN4UUdCOVk5YjBROGNWM2lCTDRzSDBHZlhlb3NjV1dheTB4UnNxbWpkbi82Z0xMNC9DelAwanV2VWloQnk5VytueXBNZUNKbGZyS3o0akpmTmlvYnpaKzRNVGNlNUJXUzhjWUV2WVcvZE1HZSsyY21Ga3RhWllYZ3M1Mis3dnRxSHUvNnB2SHFSdFBiQVljYVYrdmhiWG43V3Y0NlQydW1EZWFBeFB0RFc1WjdvTmpGRGY5a1pvcTJwNC9qOHBYa0JxcjNxbVJyOXdYZ3VITTRWaWlQVlh4bzdhZHU1SmJlWFNXRjFmamhlUUx4OERZWVZLMHhsTjVQMWhrRGVlTXlhQ0k5dDF0bS9XWVA4TnRoMHNrSG8rQjdzemJxaHVvbWtuWFZ6Z2NZUnREY0ZWcnV0OHM0MTBoWjc0S2s0NloyZkYzM3VkdjBwMll4YzN3K0ZzdVlIdms5ZTJkZjNnamJSOURWMzlyZzcyUi8rdDV2UHIyU1ZacmJHRFVTUVd1SEQwaTZQbGNMNmVyeFlQd29xT0c3Y2NTUStSZlArUTlYYTFmWExBRHU5MnZnN2h2TE40Y1JFaGw3ZlFIWXBNbXJqS1ZiVEhKL01QVlg3Vzg1Ti9LaFZ2dWFYaUxiZFV2T1dXaXJmY1V2R1dXeXJlY2t2RlcyNnBlTXN0RlcrNXBlSXR0MVM4NVphS3Q5enlOL0tpdjBrYTFxWWhTLzFVUmJuVHZhVysrVC9jSTAyZFdqbTFYZ0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2xvZ28tMWU0MDNkZjQ0YmU3MGIyZTEwY2RiODM3YWMzMTdkMzMucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBREFBQUFBbENBWUFBQUFFR1dxdkFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBM1pwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVOaTFqTVRReUlEYzVMakUyTURreU5Dd2dNakF4Tnk4d055OHhNeTB3TVRvd05qb3pPU0FnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdUVTA5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5dGJTOGlJSGh0Ykc1ek9uTjBVbVZtUFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdmMxUjVjR1V2VW1WemIzVnlZMlZTWldZaklpQjRiV3h1Y3pwNGJYQTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzhpSUhodGNFMU5Pazl5YVdkcGJtRnNSRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRG96T1RSbU1HUmpNeTFtTmpjMkxUa3dORGN0T1RJek5pMWhNV0kyWldRM05HWTBabUVpSUhodGNFMU5Pa1J2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2TkVWQlJqWkROakZCTmpBM01URkZPVUZFUWpCQ05USkVNalUzT0RJNE9USWlJSGh0Y0UxTk9rbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZORVZCUmpaRE5qQkJOakEzTVRGRk9VRkVRakJDTlRKRU1qVTNPREk0T1RJaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVORElESXdNVGtnS0ZkcGJtUnZkM01wSWo0Z1BIaHRjRTFOT2tSbGNtbDJaV1JHY205dElITjBVbVZtT21sdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNlpXVmlOV1JoWXpndE5HTTFPUzFoTWpRMExUbGtZVGN0WTJRME1ESXpZVE5sTWpJeklpQnpkRkpsWmpwa2IyTjFiV1Z1ZEVsRVBTSjRiWEF1Wkdsa09qTTVOR1l3WkdNekxXWTJOell0T1RBME55MDVNak0yTFdFeFlqWmxaRGMwWmpSbVlTSXZQaUE4TDNKa1pqcEVaWE5qY21sd2RHbHZiajRnUEM5eVpHWTZVa1JHUGlBOEwzZzZlRzF3YldWMFlUNGdQRDk0Y0dGamEyVjBJR1Z1WkQwaWNpSS9QcmZSR0d3QUFBcjdTVVJCVkhqYXZGbDVjQlBYR2YrdGRuVjVmVWtZMnhpTVQ4TGhLOVFHa2dBQk1nM3BoSW1iUURMdEg4MUZrMmxUTWprbms1bGtNa0RUSEtWTkFrdzdUZnBIQnBxbUV5QUdPdzAwMEJnN3h2Z0FFb2hOTUFaOFNwWmxTYlpzV2ZkcTkvVkpsc3hhU09aTWQrYnpldCsrZmUvN2ZkL3ZPM2JGNE1ZTzVpclg1Q3JYdCt4Z2JuQStFeVh5ZStRYXo3Y0VHSE9kYzVtelp6dDBoWVh6dHFsVTdFWkN0NWNrTWs0VXhCUUlCTG9rVWV6MStueVhQQjVQdjlQcE1vMk5PRWJOWnJQOXdRZlhqZEpucFNnUXR3UVlkejNLYjkrK1UxbFFVUGhHVUhtR2pnUkZvV0NTaUYrWUw1MC9QMSswV3FHaGcwbDVlU1Nyc0dCWUVNUUJ3VjlrSExXN0RENUI2UEY1dlgwdXQ5TXlaTEdhdnoxNTB2Ynl5OCtOWHdjd2NqTWVDTTVUakk0NmY1bVV4UDlkb1VCQ2NGQ3kyekc2L3dBY2h3N0JjL1lzUktzbGhFcVZuNCswalJ1aGYrYVpLVm9SUXZ3U0liYUFLQTZKa21RVEJiSFg1eFl1K2YwK2s4UGhNSnBNcG9FUFAvekxZRlhWUGtIK1dKUk1BY05jcS9XTlJuTlJabWI2QVpabENvS0RqcG9hV041N0Q2N1dFeEQ5dmluQkVGeWRTVWhFM3NmL1Fzb3ZIZ0R4RElBTU5VQWEvUUZFR0tPbVVJTkpXUUEydXhKRW5RNGlrbkZSSkdPaUtJMVNTbG9FUWVpamxPeDNPRVliQ3dweWpvZTlKTW04TlFtR3VSYmxXMXBPNmN2S3lqN1NhTGoxeE9mRDBEdnZ3THB6SndMVUE0clFwQ3VYRWVuNjZVK3NST1lyZDBHNHNCL0VhYWFLam9kbWhnQXlXaWowQzZCYThoNllqRFdYeVgrWktLSWdTUFl6WjA2L3VteFp4VDU2SFFndEd3WGtXbUpBc1doUjBkTlUrWWVrWVJ1TW01NkZkYzhlc1BRR0cwTnhFaHhTQVVvbFErT2pFZjdUMUlCRW1yQUdKM003OFVDMG5JYXY1UVdvVjM5S1BWSThjZS95a3F6UDUwNXJhV2wraXY1ZkU5U0RpaEFHTXVrQnhkVjRiemJiVnZHSjZsY2x5eEJqK01NZjRUaDFCcHFNRENoWWxxNHdsWjVCTmRsRUlPTnhRTCtlN2pSTVIwVUpqREs4a3p6eDBtdEdUZThQdDBIc3I0NFpvM1YxOWFpdVBoQlVXRHRobGxEU1lXV3J4UVVRb1U3NmpKbTZQeXU4bnBTZWJUdGcwMldEM2ZreGRQL1lpOVIxNjBMbWtrZVZlaTZCT2cvdzl0SHJBRUh5U3JwQlFoQkUvRjFDMEVmYUtGclhsRnMyMnpCMjdkcmwwK3QxUVhRYUdZQXBwdURpS1IrY1dGcFcraFlIY3J2dDgvMHdDbHJ3RC8wS0NwOERodloyNko1NkFhblp1UkJ0VnJoR2ZOQ1FNU1RyYXFHWlQrQTFVbDlURUVJdmdXWjJHQUFYdzhoaHVoQy9rN0xiUytja1RzYkJKNS84RTRPRHBxOHZYcnpRUkllVVlmcE1zZjUwZFlBWkczTTlvZEVvSDNPWkxPZ3h1S0Y1NEdHYTR5VndRMGI0QndjeFdQUnpaRy9NeGxEVFNmQmw1VkQydHROTWN6ZnNwNzVBZ3NvTTliSlI4R3RYUVpXWUEwL3ZGMkJjQXhNMmpIVW9FMEtaS1hKMGRKeEhWVldWVmFOUjdSc2VIaVpSaWpQVEZiS1E1UTBHY3dYUGE5K2dGMnpmNXdmUjI5S09SSklJejVJS3pNNlloYUpWS3RSK3VodjhJdy9TMURnR3Nic1QwbTNGc00xYkFsL3FIZkJvRStDRmszcEVCVUZNeGNKY0gveWR1MmdLbFVKeEV0dzFWQVFwdXdOVUZDbUZkSXlmU0QwMFpuYnMyQ25TZEgyb3Z2NGJRd3lscC9pUmphYk8wYU1OTXhZc3VHMm5Vc21XQjVVYjN2UWJhSnFPUUd5dGhlWGJkcGpkTEZ6cHVaaWRtMGJ6ZUQ2U0V0V3dHOHl3RHcxRDROUklWdnZSVDNnc1hqb0E3dmlMYUQxeEVVenhGaVJtNUNJZ3FxSGtLVTI4UXhBRUFoZC9KOVJwZWVDeTEwR2hLdzBwY2Zqd1llemV2YXV6cDZmN3IyNjMyME9IL0ZSOFlmRkhwZE1ybWpQRitMaG5NODlyWHFjV1lweTFSOUg5czdWZ0F1SmsvblpSSmEyNlhLZ3owekJTc2dZa1l3N20zbjh2MU9kYXdURUU1cFkyek4vMFUrUU1QUW8zbVltQmxGL0RpbFhROG1xazZKTEFNeGFrcU8yd1dOMGhhK2R5L3dWVHVJbDZZU0VjRGljcUt5djlPbDNLTzlYVjFVSHV1NE5iVW5HR3orNHdFQ0ZTRCtRVVlrWkdIUGRydGVwbm1YQmw4cHorRHJSQm8rU2J5RGJCdjN6QWgyUnJKMjBiT2pIYmNCek1vd25vL3ZjOTBGQnJwamNlUWwvNm5Tak9LME8zLzExb014ZkNhM05EcDU4RHRhY0RscTR1NUdReE9GaHZ4Nm9ObFVodGV4SmtSaGxZcW56dzJMNzlBMG90NlJ1cWZHdlkybklSWkphZnJBT2NyRlZZbEpqSWI2SGNTNDBnRWl4V2VXV2tUMHc0TEZKSldDWEJqQ0UzNXVSOENZSDVFdXA3YWZxREEzMWZBZDJ1bjZBaWhZZkVKbE5MbUdEck9ZR3M0bnVRMlBjMlpzOTZCTWtYTjFPYmRvTmQvbEZvemJhMnM2aXBxUjVScTlWN3c4cEdVMGVRMFlkRUJ6R2oxK3RmVmlvVmk2ZEUrTXkwK0gwdHhjSXZaZUF5QWZaMllOWmpORm1YRTl3ejFnN2ZlRHZtVU9lYURpOEs4VHczellRemw3SWg1anlPaEpMM1VlNmw3RGk1Rzl5YUdqQ3FOUGo5Zm16WnNnV3pabVh1T1hqd2tGRm05VmpjSnpFOTRQUDVSeGpLWVpxNkpuVk1YcnNXM08rM1FuUzZKcU05OHFSSS94QUhrUGswSlpaRVF1bEFzRTZZU1VIclprNVNBSE9GTnZqOGJhRVVYOHpQZ2FIT0NjdkMrZEFycTRDS0Q2QklYeGxhODdQUDlzSmlHVHJiMjl0VEcwZjVpUFdscVBZN3BGY29lSXVLaXRxTlJzT0F6V2JMMG1yNURKNVBBSmVaQ1pWZUQyZHpNd0llejBUWUJ4K2ltU1IxWFNYNFVpV1VhV1p3K3FuTEJta25pQlBtWXFrOVdHcW0yYWtPWk9GNzhLTkhvU2w3QmR6ODM0Ym05dmYzWS9QbXpSN2FVbi9ZMGRIUlE0ZTh3ZkFMaXpjc2NnQlg1djB3a0tEcDFldlhiOGhmdlBqMmxTVWxaWlVscGFWMzVlVGxxTVMyTnJnYWo4TS9hb2N5UFlNcVVBYjF2SG1BZVFmOHJac242dVRWRG1wSFRwc0s1WkkvQWJsUDBsMG5mUHJhYTYrRE5td0htNXFhL3VieitWeFJtY2NkQnVDWEFTRHhBQVRWVUljYko3NmdvRUMvYk5teVJYY3NYN0Z1K2VvMWQ5OVdrSitXd0xGTXNJbUxITkxvR2ZqL3M1SVdLR2ZzbWs0aWVVTkI2YklFeW9yMzZmbXV5ZHZIanpmaitlZWZNNmhVeW5lYm01c3Z4RkRlRTVVMlNheENKdXNQTDR2ZGJoZmIyOXR0Unc1L2RmSlVTM1BENElCcEpDQ1NaSlZLeFd1MUdpVkxnVENhVENnMEtSQk5qZFJHdm9tbHBjdUtFNktCSW1rdWxDV3ZRcldVcHNqa2VaTWJPeHpqMkxwMUs2RXBlMDk5ZlgxVFdGSHZOTlFoc1ZwV05zN1hCbHgrQ3lRU2ZkVWJQM2FzNFljRCs2dStzbHB0OUlYZHlRYmZ1ZWpCYTdKV1FKbFZBVWFpK3pJVWxGb0hKakVYYk1ZS2NBdCtCMVhGbjZESXVvL3VwSm15OGI1OSs3RjM3NTQyK2hhNWE0dzJYakc0NzR1UisrTjJuaEVQY0dGUmhrVVY1OHl0WFh0ZjBlclZxKzh1TDY5WVdsUmFYcGlacWFQcVU4Lzd4eWRZcUVxTkd3NG0weUEyYkhqWVRZdm1XM1YxZGFkazFISEZxTGhpUE92TEtSUUJJOCt4a2d4OUpBY0hJaTd0NnVxeTFOYldmdGZSY2U2RTBkRFhiNkc5a0ZxYnF0Y21aYWxVbW9ScDQvbk5OOSttSUF5MURRME5OVkhVOFVRRjdiVEtSMU5JUGttS0FpR1hnRXpFd2NGQlIydExTK2VKMXVhV3Jrc1gyd2VNZlM3YTQrZ3B2Uko1bnI5aXcvcjZCbXpiOXU0UXgzRWZVR3FPVFVPZHdMVjhIMkxqNUE0UzlTVkFpZ0ZtQ2hBYUY5NXo1ODZaamgwN2R1ckNoYzZXL242anlXS3g4QlRIek9Ua0ZFYWhZR2luZVFRdnZmU2lTTlAwUjBlT0hQaytyS3c4YUdPbFRISWpYK2FZT0RIQ1Jra2tYamhaZkV4S1hsNWU2dkxsSzBxS2kwc2ZPSC8rZkdsZDNkZjIvUHo4UFkyTmpWOExnaEJSMkMzamZTejYzUFNuUlNZR0VJVU1FQ2VySTF4VXNDdGw0NnlNcW1KWVVZOHMzM3VpdWs1eXF3REU4MG8wRURZcWkzRlJJQ0t2aFhJQThnQ085RURUcHMyYi9UbzlIYjBVMDlCTC9qa0VZU1dGc01ScTJNaVBDU0FlbU1oTE54c0hqRUxtQVNKTEFQSStYN3dlNVc4RmdPbm9GUTFHL2psRWlxb3pZcXhXK2Y4SllMcWdaK0o4RXBHaTZnM0JEZnpnOFdNQXdEVDlGUk9qM3VCR2xmK3hBVnpyUGpmMU05UC9CQmdBOGFzMlNsMFZ4ZjhBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBREFBQUFBbENBWUFBQUFFR1dxdkFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBM1pwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVOaTFqTVRReUlEYzVMakUyTURreU5Dd2dNakF4Tnk4d055OHhNeTB3TVRvd05qb3pPU0FnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdUVTA5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5dGJTOGlJSGh0Ykc1ek9uTjBVbVZtUFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdmMxUjVjR1V2VW1WemIzVnlZMlZTWldZaklpQjRiV3h1Y3pwNGJYQTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzhpSUhodGNFMU5Pazl5YVdkcGJtRnNSRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRG96T1RSbU1HUmpNeTFtTmpjMkxUa3dORGN0T1RJek5pMWhNV0kyWldRM05HWTBabUVpSUhodGNFMU5Pa1J2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2TnpNMFJUSXpRVGRCTmpBM01URkZPVGhHTWpsQk1VRXdRelUwTUVVNE1qTWlJSGh0Y0UxTk9rbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZOek0wUlRJelFUWkJOakEzTVRGRk9UaEdNamxCTVVFd1F6VTBNRVU0TWpNaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVORElESXdNVGtnS0ZkcGJtUnZkM01wSWo0Z1BIaHRjRTFOT2tSbGNtbDJaV1JHY205dElITjBVbVZtT21sdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNlpXVmlOV1JoWXpndE5HTTFPUzFoTWpRMExUbGtZVGN0WTJRME1ESXpZVE5sTWpJeklpQnpkRkpsWmpwa2IyTjFiV1Z1ZEVsRVBTSjRiWEF1Wkdsa09qTTVOR1l3WkdNekxXWTJOell0T1RBME55MDVNak0yTFdFeFlqWmxaRGMwWmpSbVlTSXZQaUE4TDNKa1pqcEVaWE5qY21sd2RHbHZiajRnUEM5eVpHWTZVa1JHUGlBOEwzZzZlRzF3YldWMFlUNGdQRDk0Y0dGamEyVjBJR1Z1WkQwaWNpSS9QcWhOOG9RQUFBckNTVVJCVkhqYXpGa0xjRlRWR2Y3dVkxOTNzNXRObGlRRUlrOHhHWkZHaElDT2lLZ2dWdHFoanE4cFkydXJqclpqT3pyYTZkQ1JxZHFSbG1KSHB4MEhSTWNnVW8wUFdzZWdEQkloSmdxQm1OQ0VWeElncjAyeW01QjlaTFB2Kyt6WjVlNXlzOWxOZ28vYU8zTnk3KzY5ZTgvMy9mLzNQODRKaFc5MlVKUGNWL0FkSDlRMytBMlZkcDBKdkpLRmpQSjlFVWlBZGpoY3N3b0xDemJSTkwxRWttU1hJSWpuWTdIWStVZ2swak02Nm5lNTNSNWZTOHR4MzVOUC9pYW9JYUo4RjhTb3l3WGYzTnc2N1pwckZsYnA5Y3l0cVZtVml6Y1ZLREZGVWR5U0lQWHpndHdYNDRWK1Fxd3JHbzBNa1BPZ3krVWEzTFZyNS9DdVhaWDh0MFdNdWh6d1pORGhNUCtTeWFUN2JhYUhCa01DWXBLTTRod2Q5RFNkK0U2VzR3U1ZrQ3dyRjBSUkdpSWVJMmV4T3hLSmRRc0NQeEFJQlBvNk84OFByRjkvcHp1TlZEWnl5dGNsUUkrTUJPKzNXTXh2RUd6RzVBMFhBYjJuM1k5RGpnQjYvRHhFU1VHQm1jVjlaVFk4V200SFRWSFpvbHVVSlNVZ1NjcUlKRWtqb2lnUEVvS2RoRlFQOFZpUDF6dlNYVlgxVnZmV3JWdkNjVHRrSTBkTjFmb0RBeGQrVUZCZ3I5THA2TEw0bDRLc1lFZUxHOXVhM2VqMHhzREhYNWNFUys0WmFRVWJieXZCczBzTGdIQUVrYzRPOEwwOWtFTWhzTFo4R0s1WkJQM01FbWhsZU5GakNrK3V3K1FjSWQ0YTZ1N3VmSGJod3JLRDVKYWtqakZrMkttQXI2N2VsMk8zNXozRHNoZkJEd1FGUEZIVGo0ODYvQkJwOGdoTGd5TG5wRFZrbWtGVXBGRjdwQU1QTmIwSDNaRkRHRG5YQ2ZDUnhMVHhKMm1yRmJhN044RCs4R09nT1M3Rm5XRW9QVG1SUWRtSTA0dEZVZmdiK2J5Y0RGSEZreVNTb014T3dRUDB6VGV2K3JWZXo5NFRuK1NjTDRxZlZmZmhXRzhBRk1jbXJKMEFSVjIwb2tLenlCWEN5SmNpS09rOUNXZGpKYVpIUGFCTVZsQUdZOG9zY2lpQTRYLzhGVEl2b3ZESnAwQXh6TGlKU2F4ZzU4NmRDOGlsaVl4WXBoUk5UNlo3bDh1OTBtdzJQaDBIT0JRVzhQTzlEaHpyOHVNWGkzT3haaGFIK1JZV05oTURPU29sZmhFUDNoWHVkanpWK2k2dURMa1F6aThHWXlMeng0TTYvaExxWWo2Z2pDYlFPV2I0Ly8wdVltMXRHUUY4K09GSE9IR2lwWkZjeHBrYnlOREZuYVN0UWZSRTBtbHBPVG1EU0djclRWTUZFVkhHN3c0TjR1ZzVQeDRxTmVJdlMrMTRaSzRSYjY4dHhpL0xyQ2kwbUtBUGpPTEJocmR3OVdBN0dtMVhFa2VMbU9ucGhoQVRDTzYwY0NQcGlUWnhrSHpEaUo3ckdBZGdlSGdZbFpXVllaYlZ2YWtTMEt1S29kVkJaWk5RS21WZWRWVnBYUGRMNG5PL1MvUmUxZXJHK2dWR1BMRTRINzZ3aUJLT1J0ZHdDRXZwS0dZdnowZGRHNDkxdGpLMHRiWWpQOVNQMmI0K1NBWU9iSTRWQ0FiSWJPeWxRRTlFTFUxT01zUndjQnlJSFR0ZVF5Z1VPSERpeElsVEtrNUdBenhsald3eFFQbDh3UWNNQnQzRDhma0dReUplSjluR1JuUjlVNzROSTZJQ1NvaUJNK294elBNb3QraHdZeEdENWJhWjBKbXV4T21LRUs0U3ZMaTZvUnBjNllPZy85TUEvb1BkQ1FpS0tKR2dOUk1KR2FFUUQ5RU1DNTNOTm1ieTV1YmpPSERnd0FEUDg5Vit2MS9PQkR3YmdZVGxuYzRMaXl3VzdnVWkyOFQ5Qm1jSWpVTVJzTVRsTDU2Tm9LZ3JqSEpPd1owa0Jpcm1Gc0xyaTZETEcwR2JPNEplcHgvckY4K0U1MlFYUWlXbEJGd1I2QnZYSXYrR2xZZ2QvUUpzTklqUTZaT1FMamloRVBKMHZoMzZ1Zk5TQUlMQklMWnQyeTZaVElaOVgzeFIzNWVXOTlQcndSZ0NDWVpWVmUrYjh2THl0cEIwTmpONW85RVZoc1JMa0VqV0dWSVlESkdrZnpvaVlaODNqSUl6UFpnZkhjR0c2K2VTK3ptSTVWUGdpWlhMeSthQVAvWWxRa1A5MEplV3dUV3RCQVUvK1NsY2dnNXo3bkJpK09sSElZLzZrWFBUTGRCZk1Uc0Y0dURCV2pRMk5wN3hldDJmYWxLbXFJNWtIWkF6WnFIcnJsdkNyRnYzNDQwR0E3c20rVjJNQk8rRklKOUlsd24za0Q4MFEwSFdzL0NZYkVSQ0ZGWWMzNHZZaTgraDU1L3ZZWm56TkhTZmZBQ25YNFN3WUJGeTdGWU1OemFoU0tmQTkrS2ZFZXJ0Z3pMVUJ6bmdCMlBKUSs2UDdpWm5xeHE0Ym16ZnZpMDRmWHJodjV4T1p5QmVMOG5nMVNHa0VZQzJrQ1d3MWRUVS9wRGpETDhpdWs4Ull3aGlvNDYrVkNvMVAxQmtFUllwaklZNUZaZ1dIY1ZkNXo3RGpNUGJRY3NTdkhVMVFHa3BUR2VhNEtxNEM3TzVYRXg3NURGTUp4aTh6NzVFMmo0ZTFudld3N3ppNXRRN1gzMTFCMGhIZTZTK3ZxNVJBenltSVNCcWl0Z1lDU1hrazVQRC9ZRkl4ejRtU0FpQkZTVm12TW9TcXhQWndNUmNTaUlpQmF2bkF1N3ZyTUdBcFJBc0k2SEFSRUZnVE1qMWRrRDYvQ1FVUm9lQ3c5WG9EZzVpZGo0TDhkUUo4SDI5NENxdWgvM1J4MGtxdlZqY1dsdFBZcytlOTRjNWpudFBZL25ZQkFUR3BNejRZRWp2NFNZNTM1b2U2UUdpLzgySFhYaWx5WTFRVEw3NE9IRktBWkhIRFJqRzQ5V2JjWlBqS0pGVUhrSTYwaFlrUzNPaVBhS2dFeUxnZ3lTTzVFUjVoVzcrQXN6WThqSzQ4dXVTL1EvdXZmYytDRUpzMjk2OWU2dkpWNlRuUUx5SmkrZlhrSG9kVFpQUk9BL1FIUjFudHpJTTgvU3NXYlB5akVaOWlvQkZ6K0M1bFROdzZ6d3J2aUlCSFJZVWxKQ1dlZkZNSytZTmtrWnRqd2M5dEJXMGdhUkhXUjdUblpGV0dyeU9WR0tyRHRUSUNFelhMa1hoTTMrQ3FmemExUHQzNzk2Ti9uNUhhMmRuNTJjVFdIOWNBQ090TERNMU5UVXRwTEI4MmQvZjV4TUVZYnJaYkxFWmpZYVVsT2JiREZoWmtvTmJaMXRRVWN5aHhNekFQQzBQL0lBTG9hOGFDQUU5S0phNTlQcTRGd2doYVhRMDBjQVoxOTBOMDFQUHdMYnc2aFI0aDZNUEd6ZHVqTnJ0OWxkSTBYS29sbzZvSTZxeHZLZ0pYbVFpUUhzOEhxcXVyczVUVzF2YjJ0cmFjb2g4ZGdRQ1FhdkpaTGFielJ4RHE0dVVNZFdFZEo2R1JlVWtxNHlTbnVZTWxFaUVGQ3N4a2VOQlJyeUJNMSsvRWtXLy95UHNHeDZBcWFod1RPcDcvdmtYNFBONTlwSjVQeVhyZ21nR0FueW00QjNYTnFoazlHclRGTy8rdVBnNU56YzNaKzNhTzVhc1diTjYzYkpseTVmTW5Uc256MncyMDBreXFZTUlQTlRjaEhEallkTGZlRUhwamRETm1nTnU2VElZNXMzTDJHM3UzMzhBbXplLzBPZnh1Sjl2YTJ2clZiVWVVclVmVmtuRVZBL0lFeEdnVkFLc1NpTFovUmsxMS9wVnExYk51ZjMyTzFaWFZDeTlzYlMwN0FxeXNEY2FEUHF2dFp0QTBpVTJiSGhBSXRiZlRxei9zUW8ycEJsWkF6ZGRRdW1xb0RLVTcwUkY3T25wOFIwOCtGa0xLZkYxWHE5dmdFaE1JVmttaDZRK3ptQXdYQmFCeXNvMzhmbm50VTB1bDdOcWhLeFZNMGdubGxaOU15N3NtVWsycGFTMGNwNjRKaE5HamgwN2V2NlRUejZ1ZDdsY0hVTkRnLzVvTk1hWlRGeWV4Wkl6S2ZqdTdoNXMyclFwU0FMM3RhYW1wbTRWckRab0p3emNxUkFZWi8xTVE1WmxzYjI5elVteVY1UEQ0V2pwNnVycWNiczlqRjV2S0xKYXJUVERaSDc5bGkxYmNlYk1xZjFIamh6NVdBM1NTTm9RSmdyY3FSTFE1bHdwbXplMDhqcDZ0S0g5MUtsVFg1MDkyM0c4cjgvQmt3dzYzV3JOTlNaVGNmeDQvZlUzOE00N2J6dUk5UDQrTkRUa1Q1T09ObWpGcVd4MFVWUFlQcVExUVo3TVZzbUFaOVZsM3JpUm0ydmp5c3BLaTIrN2JmVXRGUlhMVit2MXVwTDkrL2VUekxOdm9MaTRlRnQ5ZlgyekNqYXNDZHB3QmdMS045bVpvektrV3pvTGtheGswbFpVVUwwbWFLeXZCYzluNm5teUhaUHRTbWgzd3lpTnRKTGJHN1E2MldSZVlUWHJXUzBCUG9Oc3BNa0M5OXZlbmRaNmhOWllXNWRHU09zQldRV2JxV1dlTUcxK0d3U3lFYUhTaURBYU10cmRCRzJLRmxYUVFvWVZGNzVyQXBrcU9ySUVQWjIyTUU5UDBXSmExbFArMXdRbWtoZVZ2cGVUVm1ma1RJdjE3NHRBTnE5UUdiWkZzbTJqNC8rRndPWE04YlgvNWZSZkFRWUEzQ0UvMU9mMkdLTUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDOEFBQUFsQ0FZQUFBRFN2TERLQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUEzWnBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURVdU5pMWpNVFF5SURjNUxqRTJNRGt5TkN3Z01qQXhOeTh3Tnk4eE15MHdNVG93Tmpvek9TQWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1RVMDlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl0YlM4aUlIaHRiRzV6T25OMFVtVm1QU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2YzFSNWNHVXZVbVZ6YjNWeVkyVlNaV1lqSWlCNGJXeHVjenA0YlhBOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOGlJSGh0Y0UxTk9rOXlhV2RwYm1Gc1JHOWpkVzFsYm5SSlJEMGllRzF3TG1ScFpEb3pPVFJtTUdSak15MW1OamMyTFRrd05EY3RPVEl6TmkxaE1XSTJaV1EzTkdZMFptRWlJSGh0Y0UxTk9rUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZORFEzTWtJNVF6RkJOakEzTVRGRk9Ua3pPVVJFTUVFMU5EYzNNRFV5UkRnaUlIaHRjRTFOT2tsdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNk5EUTNNa0k1UXpCQk5qQTNNVEZGT1Rrek9VUkVNRUUxTkRjM01EVXlSRGdpSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJRU5ESURJd01Ua2dLRmRwYm1SdmQzTXBJajRnUEhodGNFMU5Pa1JsY21sMlpXUkdjbTl0SUhOMFVtVm1PbWx1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2WldWaU5XUmhZemd0TkdNMU9TMWhNalEwTFRsa1lUY3RZMlEwTURJellUTmxNakl6SWlCemRGSmxaanBrYjJOMWJXVnVkRWxFUFNKNGJYQXVaR2xrT2pNNU5HWXdaR016TFdZMk56WXRPVEEwTnkwNU1qTTJMV0V4WWpabFpEYzBaalJtWVNJdlBpQThMM0prWmpwRVpYTmpjbWx3ZEdsdmJqNGdQQzl5WkdZNlVrUkdQaUE4TDNnNmVHMXdiV1YwWVQ0Z1BEOTRjR0ZqYTJWMElHVnVaRDBpY2lJL1BrSkYyaG9BQUF1alNVUkJWSGpheEZrTFVGVG5HVDM3WHBZM3kwdEFqS0RnQ3hSRlJGQ0RHcHMwRTQxSk96Vk4xVFROMDhZbWFXTW1hV3FWeEtTa05xTzFrNm14bVVSTWc0bGl6R05Fa1NoS0JCRVZFUlZRSHN0N1lVRmdlZXg3Nzk1KzkrNXVjbDBCTVRITm5mbG45KzU5bmZQOTV6dmZkLzhWNFlkdG9sc2NaL0VqYnFJZmNJM3dVelFDYUhZRUV1eFBBWjRIV2xWZEU5UnU4UDVUZktSNlVhaS92TnRxWityTUZuTzkyV1JzN3UzcjFYWHB1dlhGeFVYNkxWc3lUUzZnckFlUk8wSktkTHZBQ3dzTFZkY0d4djJ6cHMzNnhLYlZVK0dybE1IdWNENVhCTmJnWU5sT3h1N1FNZzU3SzJPM05WdXRsaVlhMnNIQm9jNm1wc2JPZGV1ZTdtbHZiM1BjQmluMlRvRVhuNzZzWGIvMWs2dmJNdGRNRU0rY0VnTUxRM2UzT3g4aEZ0TUhmVG9jemllS3ZzUFN6ekNNam83cEhBNm13MmF6TmRydDlpYXoyZFN1MSt2YnlzcE9hNTk5OXFsK0QwTHNDSVRZMndYUEE2K3FiVW5QeW0zSmZTRDFydEJWczBxZ2Ivb2NyTjhTS0tPZWdGSXVob2pBT3hqbkJXSUpmU2RTVnJ1VDBBMDNFM0VFV1NzZEdXQlpWaytFYURoYWlWUURrV28ybVF3YXJiYTlhY0dDVkEyZDdwNmxtMlpMTkdhZDE5Ukc1WllhOXBqdGJNYVczeVdodGEwRnVoTXpFRDl0TVFKVHZrUlRod0ViUDZoQWZMUS9WdDhUZythdUljU0creUlxUk1XVGNqL0pUZWdtVzJMZG42eFpKR0lOdEcreVdJeUhnNEo4WDZLZkdkZHdDRW1JeHdJOE16TlRYdFVoZnZGYTIxREd1aFZ4a0ZKVWR4NjFvTHduSFlFelg4TFZWaE1lZWVNYlhOYjBZZDdVWUd6Y1hZSEhzMDZqcTk4TWc4V09JMlZhdlBkbExmYWZhSVpHTy9UdHpFdnA2UW81RFJrZ2tUaG5SQ3dXS1VVaXNWcXBGRWRacmVhbjZEUUZEVGwzT2plaHJzSGprbzRsOGcrdWVucjVXNS9VUGZmTWlzbUlEdk5HaTg2QUkyZXFrZlh3S2x6cVNNQ2pyeGNpMkUrR2Zac1dJanUvQVlkT3QySFhIMU1KSW91VmZ6MkJTNDE2THFMUUQ5bHcvOXdJWkw5S3BQM2tNRlBDYU5xTUlLQUk5RkZBTHBIeU0rQWtBWlNVRkhNZ3ZXaFlCSGhzTHZDczlGWlJQMXRSRy9QQjBaYXMrZE9ENWZmTUdjY2YySHU4aWFKUFlHVHo4ZkxtWXNSSCtTQm40MExzUGRhSXQzS3VZTXZqc3pBN1hvMEhYajBPcFVLQzkxNmNCNGxZaEFQZnRPRFhpKy9pZ2ZjT1dQRDNUNnB3OEZRTHZPUVN2UGFiQkt5aVl6YUNKcWRZdDdTMFl2LytmWDB1OENLQjd0MnlnWFEwNEx0MjdWSmViSFc4TTJCa1l0Yy9OSVUvME5WcndlRXo3UVJHZ1MwZjF5SjloaHJ2YjBqRllaTEcraDFuU2U4VHNlR1JhWGhqenlWb09vZnc4NVFJWk13S1E1Q2ZBc3RUeDBOTVQyenJOdUxsbmVkeGlPNmpVa2hoTk50cDVoUjhidkJKNzJDeDU2T1AySzZ1emp5WGJCaFh4TzJ1NFRTRlVTSXZUcGkvL0lXRHA5cFdiSDRzRVhLWjg5UlBDeHRSMWFRbjdRN2lvUVdSK1BDVk5GeW83Y05qV1NWWVBEc2MyNTVMSnYyS01ESGNCOEgrQ3BUWDllS2RmZFV3V3gwODhHcTY5dkczUzNDeVVvZDdreU5oczdOWWxoeUI5TVJRM21LbHBQL3k4Z3NvT0pwUFZtbzVRSStVdVlJczhhem00cEZzc2JGVmw3SHRzOW9Oenl5UFEweUVEMWppYmpEYWNmWmFENi9KemI5TnhGdFBKcUcrYlJDUEVaZ0pCSGJIK3JrSThKWHpOL25Wa2duNEdZRzZycmZ3WkpWRS9tek5kYXo1V3drdTAvNzJkY253OFpMQXhqQzRsL0xBaStURjJhemRac2YyN2R0c2FuWFFaNldscGIyQ0JMMXBrdzRubDRhR2hzZ1A4dHV6cGtYN0I2MUlqNExGN0R3aUp2UGV0RFlSTHp3OEJiUGpnakJJWk5adEwrT25mZmNyNmNnLzE0NnNuTXRZOTJBY2FWMkticjBaM2tvcGZyRW9HaWN2ZG1MOXY4N3lTWG9nODI1S1VEbis4TzU1SkUxU0kyMUdNSzlpTHVvNU9ibG9iTlJVVkZkWG5mU292SjVGNndid1BQQTVjK1pJcWpva3IyVVhhSkszUFpzTWtoOFVwRHFXcHRUT2lCQVg2Y3VmYWFjb2lXa0tOcXlhanRCQUJROHlPMStESzQxOU9IRlJ4N3NMMXpDOC9NaDAza0dlZk9jTXV2ck1tQkx0aDVMTFhhaHA3aWNwTVZnNko1d2N6SWNIb05OMVkrZk9mdy81Ky92bkRBd01XbHhhZCt1YzhTaFV2STV1a0V0aFNlWGF6RDFWZjI3ck1jb3UxUGZoL05WZXFoWjJlS3RrVUhtSkllTzBMM0tTa1ZCMnhVZjdZbHlRRi94VkNxUk1VU004MEl1M3ZlU3BhcXhmR1krT0hoTmV6NjRrL1NzUk45NFBXdG8vZGFrTDllVDNrV292UEUrenlOa3Z0MjNhdEJrR3crQVhSNDdrSDNmWm8xa3dMSUtrZFFnanowZTl2cmtqWmNjWG1sY3YxdmQ1Y2U1Z01OdHc1R3c3OHNyYUVCbXNRdHIwRUN4TkNzZU1tQUNFRTJBL2J4bC9zZDNtbklrNWNXb2tFd0gzeGpuVDUyU0ZDeFBEc0hGTkFrWGRIMmVxdTdIOVFBMktLZm9KTWVIOE5keFc5RTB4VHAwcW9rYk8rcFVMcE5VMWhLQVpvWHlFUGJrNHI3VGw0TnEzeTFiWTdIYUVCU2pKRHNYOEFRWmNyV1pnTXRNM0Nua3NTV2RKMGpna1RRNUNZbXdBWWlOOElaTTZjOTlHajJNY3puTFBWV0laNWEvVnlwSmJpYjVOdTBlM0ZPTlFhU3ZlZlQ0RmErK0xCVWtFcTFldlpxakgyWnFYbDFkRXB4aHBHQVRENkNKaEZSSVFSbDRjSGFMb2VlTGVpU2k1NnJSQ204MENYeThwbFc4eHIya0ZBVFRiR0l3UDhVRXplZmlKaWc2bzZQY0ZDV0dZUklTNHhKc1U2UWVaNjZaY29uTmtwR1NkWm91emNqTEVqRXZvWmJQSGtSdEY4dWRsWjMrRTN0NmUwdXJxNmpKQnhLMEN3S05xbmdlL2RHRks1ZFF3VzgvY1dHVjRZbHg0aUVUdUJWMmZCWDJEWmo0QnhSSXhTU2NVRTBpalVxa0lSZ3RIUkFWTnh4RHEyZ2RSUklsYVZOa0pFM202bXR6RW4xb0dybWNoTi94Mk5yZ2FFQlBwalNSeUt4K1ZGTFcxMTdCMTZ6OTZUQ2JqZnpRYVRidEwzeWJYR0ZicjdrMW8vSkw5dWJubS8rYmtWSGpMN0tjbUJEbnE1OGVyVkhjblJZV0hxQU1sMmo0cmpDWWI3elpCNU9VY3FSQ1NWbWlRa25jZC9hQ1ZhNm9RUmdsN3BLd2RYNTF1UldXRG5vcVFBeEhCM3BUd2xPeFNaNi9QdFFCYzcyS2phWG56elN4UVgvOUZVVkZSSWRkUkRnUGU2Z0x2OExSS0lYaDN4eWFwcUx4a09wUjN1UDdTeGZKaXh0QlJQbSt5aWwyNVlFTG9wT2hRWldXVFFYU2xlUUJ5a2xBRUpUSG41UU5EZHB5bVJKd3hNUUFEQmhzbUUwSE8vbzZjMWZJVmRlK0pKdFMyREZBcklDRnlTc2lwOStmQUh6dCtBdG03UDZ3ZEdPai9VS3ZWNmtlSXVtZWkzdlFtSlhZUmticmFUNldySWVLR1VpS1JLTlBTVXFOK3VYTEZzbW1KS1VzNnpPcUlrelVHcjhxR2ZyN1krSkNGbXNpWk9QMVBwQjUrVm13Z3JqVDFVL0d5VWI2STBEdG9vMW5vZzRueVpSSlY2NHlrS0N5Zkc0RE12N3hncWF0cjJISHUzTG5qTHNDM1RGSlAyV0NFVlFCM0owZXp5VExVNVEzbUZ4eTdWRkNRLzNWa0FOTjIzK3dnK2FMRU1KVlU1cVdxN3pTamsyVEZTVWxOT3RmMkdJbVFER1ZYcnlQQVc0SFo1RXFjeC90U3JUaEZGdG5ZVGM3VmVBemxaMDZlT1Y5KzRXTzZ2K1Yybys2WnNKNXZWdTRMM0ZuT3Y4MFlEQVpMeWVrem1yMmY3aXVVMlB0clVtTGxnOHVTUWxSVEpvWUVpcVVLWEc0MjhGRVBJUklSVkF0VTVGWW1pNE92RStldlhZZTJqOEh2bC9tajhNQ09YcEZVOFc1VFUxT1hBTGl3S05tSFM5TFJ3SHN1UXpBZXd5N2N2M3lscXZQenIvTE9hMXMxNXljRTJkdFRZaFdpUlRNajFPR2hnYktHVGlzdWF2UzRXTjlEYjB3aXlnc3Jjb3Rhc09iK0JQU1V2MC9XYVRsNHRPRHJrNEpLT3FZa0hXbjE0SWFDSlV4Z1FUNUlYQzJxVEpBZjduMVpiR3hNNE5LTWhkT1RrNU1YaE44MU03M2JGaGhjV21kQldVMDNkTDFXM0pNYWg1bnlVdVR1MmRiUXF1MStSYWZUOVhrVUpLT0xnRVVRZGNmdExIMTRraEM1UUhzU2tRcUJDNGVmbjU4cVBXMWUxTUswdFBScE0rY3NabFRqNDdVOVZuVFZsZUR3d2QzWGcwUEdiVDFhVUZEaEFpb0ViN3BWa281MTNjWnpPVTlJUkRoa294RkpUSmdlbkpGeGQycW5WcHRlVlZWbFV2a0dIQ0ozcVJISXhTZ1laa0ZGZGR4cUJlMTIxbTFFdzlXRXNjNkdZUGJjdVdUMTBMckpveFZnN3hUNDBXWkRMQUFtSFdFMnBJS2xDL2VMdE0yajdYVW5LVE9XcUgvZlZlTGhTSWc4U0FoblFpb2c1WDd0ZExnaWJCV0F0Z21jakwwZEVIZGlwWG0wQkpkNHRDSU9qN2VrWWJ2Ry93ZjRXMGxLN0xIUzVWa0FiMXJHK3pIL1hQZytDZTQ1aEMvVHd5MTMvNlRnUi9zWFphei9udnprNEcvMXZCLzA5ODcvQkJnQTBQR2I5SnZWU0Y0QUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUM4QUFBQWtDQVlBQUFBWjRHTnZBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQTNacFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1Tmkxak1UUXlJRGM1TGpFMk1Ea3lOQ3dnTWpBeE55OHdOeTh4TXkwd01Ub3dOam96T1NBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3VFUwOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXRiUzhpSUhodGJHNXpPbk4wVW1WbVBTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZjMVI1Y0dVdlVtVnpiM1Z5WTJWU1pXWWpJaUI0Yld4dWN6cDRiWEE5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM4aUlIaHRjRTFOT2s5eWFXZHBibUZzUkc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRvek9UUm1NR1JqTXkxbU5qYzJMVGt3TkRjdE9USXpOaTFoTVdJMlpXUTNOR1kwWm1FaUlIaHRjRTFOT2tSdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNk4wUTBSakZCTlVOQk5qQTNNVEZGT1VGRVFqSTROemxHT1VKQlJURTBNamNpSUhodGNFMU5Pa2x1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2TjBRMFJqRkJOVUpCTmpBM01URkZPVUZFUWpJNE56bEdPVUpCUlRFME1qY2lJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTkRJREl3TVRrZ0tGZHBibVJ2ZDNNcElqNGdQSGh0Y0UxTk9rUmxjbWwyWldSR2NtOXRJSE4wVW1WbU9tbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZaV1ZpTldSaFl6Z3ROR00xT1MxaE1qUTBMVGxrWVRjdFkyUTBNREl6WVRObE1qSXpJaUJ6ZEZKbFpqcGtiMk4xYldWdWRFbEVQU0o0YlhBdVpHbGtPak01TkdZd1pHTXpMV1kyTnpZdE9UQTBOeTA1TWpNMkxXRXhZalpsWkRjMFpqUm1ZU0l2UGlBOEwzSmtaanBFWlhOamNtbHdkR2x2Ymo0Z1BDOXlaR1k2VWtSR1BpQThMM2c2ZUcxd2JXVjBZVDRnUEQ5NGNHRmphMlYwSUdWdVpEMGljaUkvUGxTK3pzOEFBQXMxU1VSQlZIamF4RmtKY0JSbEZ2NjY1ejR5bVNSTUxuSWhBVms1SWdubmdvVWNyZ1dscTJ1aGU2TjQxS0tnaGE2RkNDNjdLNTdBb3FLVUtLaTFxeGF5c0ZJcUZKQ0Vhd05CTUJnZ0xBUnlrVEJKSnNja2s3bDdlcVo3WDNkbTJIWk1TRlJ3dTNqVlRYZlAvMy9mZTk5NzcvODdETDcvd1F6aUhSSFg4V0Ird0c4WWhTbnZpd09jcnhrcDVudTh6OWp0TFZscGFhbHJ1cnFDdDJnMGJGdENncWFXNS9tNlFDQlE3L1Y2RzlyYjJ4Mm5UcDNxZU9TUlIzcm9mVUVCV0x5V3BKanZDbnovL29QR0dUTnUrZWowbWZhN2xxOG9nVFZSajFHamJNak5zU0k3MjhKblpKaTYwOUpNamlTcnZvTUkyY1BoY0IzSGNaZUptTDJscGFWNTY5WnRyUnMydkI2OEZxUytLM2lXZ0t6eUI0UlZEenkwRTd0MlhZQWxRUStHbm1pMUtwaE1XbGl0ZXRoc0ppS1NpTHhjSzI0WVprVnVicEovYUpiWmxUckUxS05Tb1pNSVhTSmk5VFJXVTQrcnA2NnV2dkh5d29VTEhLMnRMVUtVVkR5WnZzZ05HcndNdkx2YlBWZW5OM3o4L09wRGxqZmVQSWEwVkROWWxrRWtJa1pOUUVRUUlRcTljekVNSzVNeW0zdEpaYVluSUNjM0VmbkRrNUdmbnhMSnpyRUVNOUxNUG90RjZ4WUVvWTFJMVV1a2dzRmduZFBwcW43ODhjWG45dTh2NWFPQWhYZ2l6R0RsVWx2YmtKT2JtL081dmRrNzlwbmwrM0MrdWdNZWR4QkJUb0FvaWpJSmxZb2w2LzJKRkEyNkRZR0lTQ2E5MDB0TWVpeUNjb1dpcG9NdDFZUThrdHh3SWpSeTVCQU1INVljU1U4M2g1T1NqTHpmNzM0ckxTM2xSZnBGSkdyZmlBd3pHT0RyMXEzWExWcTArQjJWU3Z0N0NSVExDdWpvOEtQNlFpZk9ubTNEbWFvMjFEZDB3ZW4wbzZzcmdIQllBaW9RQVFacUZabWFsWW5GQ01teEp4YmtiZmxkbnUrOVpsaUtsSWFCM3FEQnBvMzN3VGFrUFRSK2ZHRW12UjRtNDZQbkt3VFVnL0g4d3c4dmVraXQxc3lYSnU0MUZwbVpadFRVZEtLeHlZVlhYcnFOWktIRHdZTU42TzRKNHZRcEI4NmQ2NEN6dTVkTVo2Y2ZvVkNJd0FFYWRhK1VKRUpxdFpvTTBPdHBFa2FLRG9PMk5nL0dqQm1LQ1JQUzhOeUs1NlU0R3NnNEJSNCtkcUVlU09mTnpZN0pPcDN1R1JyWUVIc2dTWVBuSTNoM1N3VWNEaS9jbmlDMmI2K0NTcTJpWkRWanl0UnN2UGpDYkpTWFgwYjF4VTY0M1J5cXpqZ29PdDF3RURpbk00QmdNRXdSbEJKZERaMU9MUk1LQkVJZ3VXRE55ei9Ic2ZMUGNhblJ2ajhLSGdyZFJ3Ynl2Q3lYc3JLaktVbEpLUzhRaDZ3ckQ1aGU4Si91dklBR0FyUDBpYW5ZOU01WDBCTUlqb3ZnclkzSDhlU1RVN0h4N1JNNGNxUVJQUlNKWDl3OUdtKytNUTllTHc5N2l4c1hpTkRYSjF0d2dXUlhmNmtiN2UwK2RMdUlFSUZmdG13T1ZTY09LMWR1Y1lYRHdsYWFVcWVRRFJzMXBqL1B5OENYTEhsY1UxQlF1SlJoMURPVkQ3VmF3RzUzWThPR1kyQkp4d2NPWGNKdHMyOGdqM3J4MGNlbjhlZFZNM0gwYUNQMkg2aVg1ZlIxcFFNK1B3OGpsZEhhK201OCtPRXBqQm1kaHIrc21nV3ZqNlBJK2RCQUJDcFB0Wks4Z2xpOGFDSTJiVnBMMFRCK1VWcTZxMFlLZE5UWXdSUVk2UVZWVjVmNzdnQW4rb05oVVF6eW9oZ0lpQ0lYcEd1NnNlU0ozU0pVcThRSEg5NHAxdFYzaWU5dXJoQUx4bThVUzBycXhKWldqNWhzZTBXYzg3Ty9peUV1SWtvSGVWQjg3NzJUNHRoeGI0b3E3U3B4MmZKaU1mNGdHWXArZjFnOGR1eW9PRzNhOUpvcFU2YjhsbkJNSTd1WmJBUlpCcGsxS2lQSjZWSUtmZHZyRFExTmVRYXphUTN2S0RiNEt4NEYzN3FYU3B5Ynlsc0VYNTl4NGVEaFpyejY4dTM0MjdxNTJMbnpQTmEvVm83WDFzL0ZuRGszd0dMUlllellWSnlyYnBmTEtRSEg4aFhGS0NtdGhkR29RVUZCQnBZc25pUlBGZ2lBdEUvWnlFR3VSdUd3ajd5K2hVOU1UUGo4eXkrL2JGUFU5RytWeVhqWnlNRFhybDJ2czJWa3JJa0Vta1lFcXA1R3BMc0tYT01XcU13andhWGRqaEhXV2RpN2N4YXk4bkt3OTRBVFgreTVqTmRmdXhQbHh5N0xjc3JQVDRaQWdHK2JuUTkvSUF5S2dFeG0vdnd4V1ByVUhxeis2eXhrWnlYS29CbUZDS1Ryeno3N0F2WDFkUlVuVDFZY2pBS09hYjJ2T3YvTkZlSUhIL3pEY004OTh4L1Q2dmhYZlJXUE1hR21qOEhxU09SaWhQNUY1S0ZZRFpXMjVMRVFyYlBCR2FmRGxGRUluU1VYVHo5ekhDVWx0VEFiQmZ6a1JndEczelFFdS9mV29MM1Zpd21UcytUeW1VZmRkZnMvZjBWZVZsSHAvQjk0RFkzWjJtckhnZ1gzdStqZUN3Y09IRGhEdC8xa1BqSnY5QnlJbGt3K1JrSUpublgxK1A2Z014aFdjelZ2SlB1L2VoSU00V2FvRTFKbTl2WXo2UzJCSjgrS3NoODBWQWZVaVdQQkprMkhNV01tYWpwR1FqVGtnUXVic0didFFkdzFMNHNpa0lkZi91WVR1V3p1TDFtSXFWT3laYm5FZ0V0bkhZM3o3TE1yY2ZwMDVZNDllL2E4RndYcVZ3Q1hycVhGWEtpL1Vzbm85WWFsYWpXVEhMR01nbmJrUWtRNmp5RGlxU0hNMVAwMFVocHJKRGF5OTZHUnVtZ1lmR2NWeERaSld1OWdlSG9oV0gwUlBPd1V2UFhTRktSa2pwSm5HWlkvREJNbjVzbkFKWDNIZ0VzTlQycFF4NCtmd042OWU1cENJZTdUcUdkRFVTOXowV3RlQ1RwZU5sTGlxaHlPenRXVStBOG0yNGJZcUdlQWMvMEhRY2NSU3RqUGlFZ3B4QkNOSWVHWFNGd0pXRysvRnlraVlyajN2eHE5RHZyRUVRZ2J4cEM4WnNDdElpTFpOME52SkFSaFdZWHlHa2NxdXdJNTRMNzc1b3ZVd2RmczJMSGpvRUl1UG9YWE9ZWFhyNEJYS1haRFZCNmRGZDNkWFVkYlc1cDVNT3BNaTIyVTJadytBYnFoYzZHeXpTT3YyaUFHMnlFRU8rVFpwWlllSzFnTW95SlNaTlQyQlNMQ2Vkc1I3amtMZ1VoYitXS0lya1BnUEIwVU5RdUZlSWc4bzVaOHNIbnpadkw4OGZMRGh3OXZwVlZsSUNxUFlGUTZNYW1FNDRISGIrVWtDV21sanBhWm1Xa3BLaXJLdmZYV21mTW1USng0NTAyang0OUlUaktwSk5lRy9FN3c3YVhnbXJZaDNQbHZHdFpOK0VYSXZaNko3eVBTc2pMU3UwU1dwbVMxUkM0QnJMVUlReWF0UTExSEtoWXVtTy9XNi9VclMwdExML1RoZFdXU2ZndThLbzZBM01rOEhnOXo4ZUxGUUhIeHZuUEYrL2FWdERRMzF2aDlmcjFPWjBvMFc5TjFSdHZOakM3djE5Q216eU9xVmdpY2k2YWczQkk0ZWJVb2F6cEdoTTRNSzBWRldsWFNlai9vZzg2UURPMk5qMkxsYzYrQ1pjTGJTa3BLeWlLUmlOTGpTcS96Zld4UXJvQlhSb0NOSThNUWtYQkZSY1ZsU1k5MmU5TXBuOWNUb1BBbUdIUjZreWxsbU1xWU1SdTZuQWZBV0c2a2tlbm5JUjlFbnJhdWtkNzhrcGE1VjRZamZUTnFBMnd6dG1EM1lUZTJmN0xsSXUxMzM2ZnRZVThmd0xuKzVCSVBQbjVqd3ZTeGtvdFVWMWQzN042OXE2S3lzdktvMCtsczgzbTl0THhSVzh5SlNUcVRyUURHbkh2QnBzNm0zTWlCSkRHUklpS0dBbEpXeW9FUWFMZVZOUEorZUZNVzQwOHIvc2hwVk16N1I4dkx6MFdCS29FSG94NVhlaDM5Z1dmNitlWVNVWUtQV1d0cnE2ZXNyT3g4U1VseG1iT3JzN2E3eXhrSWhYaXowV2kySkNUblFwODJIZXFoZDVPMkoxQmxUU1llWG9pK0RxaE1tVWljdmhWdmI5NkcwNVVueXFxcXF2N2w5L3NEL1hpZHY1clgrL0kybzFoMnhsWnphb1ZwRkltdFVkb2RkOXd4b3JDd2FOTGtTWk9tanhrM2JteG1WaGJVTkpyVXo0TGQ1eEZ4bENMQmxvY2FUeUVlK04yOW5VYUQ0WG5xcE9lamdHT2QxQisxMEdEQXE2N3lwVXVJczRoaUd4Wlc2RkUyU25BbmxidXpKSzBURjZxcnF6cmJPeGlOUnBOaHNhU296WlkwNkcyVDBlYlB3TEtubGdnZWQ4OE9pdHlocUllVlh1Y0dTdExCZlBwZzRpdytHcXFCb3BHZW5wRlFWRlNZL2RPcDArYU1LeWlZWWJmYlU3ZnYyQkgyZW5wMkU5RVBYQzZYVDdFTVVDNEJ1TGk5NnZmKzZNUmNSVkxzWUVoRVRibWhpRVV1cFBDNGY2Q2EzdGN4MEFZOC9xdVZzdnJFd0llalp6NTZEc1VSVVNzSU1JcENFRkpVRnE2LzljdjEvTkRLS3B2YlZTU2xWcndUQTY5Y2dJVVV5NERyQ3Y1cWttTGk4a0tsQUs3MHZLQWd3TWNWZ0VFQi82SGdCNVBneXZ4ZzQ1cGZKTTZFcXpXazZ3bCtvR2pFd0NzUElRNnc4RjAvYzE5cjhIMlJRQjkvaEJqd0MvRC9FL3lQOHVlZi93b3dBR3E2dUd1WHRZZUxBQUFBQUVsRlRrU3VRbUNDXCIiLCJkZWNsYXJlIGNvbnN0IF9fTkVYVF9EQVRBX186IGFueVxuXG5pbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGFyc2UsIHJlc29sdmUsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFByZWZldGNoT3B0aW9ucyB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IFJvdXRlciBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IGFkZEJhc2VQYXRoIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5cbmZ1bmN0aW9uIGlzTG9jYWwoaHJlZjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IHVybCA9IHBhcnNlKGhyZWYsIGZhbHNlLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBwYXJzZShnZXRMb2NhdGlvbk9yaWdpbigpLCBmYWxzZSwgdHJ1ZSlcblxuICByZXR1cm4gKFxuICAgICF1cmwuaG9zdCB8fCAodXJsLnByb3RvY29sID09PSBvcmlnaW4ucHJvdG9jb2wgJiYgdXJsLmhvc3QgPT09IG9yaWdpbi5ob3N0KVxuICApXG59XG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIEZvcm1hdFJlc3VsdCA9IHsgaHJlZjogc3RyaW5nOyBhcz86IHN0cmluZyB9XG5cbmZ1bmN0aW9uIG1lbW9pemVkRm9ybWF0VXJsKGZvcm1hdEZ1bmM6IChocmVmOiBVcmwsIGFzPzogVXJsKSA9PiBGb3JtYXRSZXN1bHQpIHtcbiAgbGV0IGxhc3RIcmVmOiBudWxsIHwgVXJsID0gbnVsbFxuICBsZXQgbGFzdEFzOiB1bmRlZmluZWQgfCBudWxsIHwgVXJsID0gbnVsbFxuICBsZXQgbGFzdFJlc3VsdDogbnVsbCB8IEZvcm1hdFJlc3VsdCA9IG51bGxcbiAgcmV0dXJuIChocmVmOiBVcmwsIGFzPzogVXJsKSA9PiB7XG4gICAgaWYgKGxhc3RSZXN1bHQgJiYgaHJlZiA9PT0gbGFzdEhyZWYgJiYgYXMgPT09IGxhc3RBcykge1xuICAgICAgcmV0dXJuIGxhc3RSZXN1bHRcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBmb3JtYXRGdW5jKGhyZWYsIGFzKVxuICAgIGxhc3RIcmVmID0gaHJlZlxuICAgIGxhc3RBcyA9IGFzXG4gICAgbGFzdFJlc3VsdCA9IHJlc3VsdFxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXRVcmwodXJsOiBVcmwpOiBzdHJpbmcge1xuICByZXR1cm4gdXJsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsKSA6IHVybFxufVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cblxubGV0IG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKG9ic2VydmVyKSB7XG4gICAgcmV0dXJuIG9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAob2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuY2xhc3MgTGluayBleHRlbmRzIENvbXBvbmVudDxMaW5rUHJvcHM+IHtcbiAgcDogYm9vbGVhblxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBMaW5rUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHByb3BzLnByZWZldGNoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG4gIH1cblxuICBjbGVhblVwTGlzdGVuZXJzID0gKCkgPT4ge31cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKVxuICB9XG5cbiAgZ2V0UGF0aHMoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHdpbmRvdy5sb2NhdGlvblxuICAgIGNvbnN0IHsgaHJlZjogcGFyc2VkSHJlZiwgYXM6IHBhcnNlZEFzIH0gPSB0aGlzLmZvcm1hdFVybHMoXG4gICAgICB0aGlzLnByb3BzLmhyZWYsXG4gICAgICB0aGlzLnByb3BzLmFzXG4gICAgKVxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmUocGF0aG5hbWUsIHBhcnNlZEhyZWYpXG4gICAgcmV0dXJuIFtyZXNvbHZlZEhyZWYsIHBhcnNlZEFzID8gcmVzb2x2ZShwYXRobmFtZSwgcGFyc2VkQXMpIDogcmVzb2x2ZWRIcmVmXVxuICB9XG5cbiAgaGFuZGxlUmVmKHJlZjogRWxlbWVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnAgJiYgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiYgcmVmICYmIHJlZi50YWdOYW1lKSB7XG4gICAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKVxuXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgICBwcmVmZXRjaGVkW1xuICAgICAgICAgIHRoaXMuZ2V0UGF0aHMoKS5qb2luKFxuICAgICAgICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgICAgICAgICclJ1xuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzID0gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKHJlZiwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucHJlZmV0Y2goKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFRoZSBmdW5jdGlvbiBpcyBtZW1vaXplZCBzbyB0aGF0IG5vIGV4dHJhIGxpZmVjeWNsZXMgYXJlIG5lZWRlZFxuICAvLyBhcyBwZXIgaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTgvMDYvMDcveW91LXByb2JhYmx5LWRvbnQtbmVlZC1kZXJpdmVkLXN0YXRlLmh0bWxcbiAgZm9ybWF0VXJscyA9IG1lbW9pemVkRm9ybWF0VXJsKChocmVmLCBhc0hyZWYpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogYWRkQmFzZVBhdGgoZm9ybWF0VXJsKGhyZWYpKSxcbiAgICAgIGFzOiBhc0hyZWYgPyBhZGRCYXNlUGF0aChmb3JtYXRVcmwoYXNIcmVmKSkgOiBhc0hyZWYsXG4gICAgfVxuICB9KVxuXG4gIGxpbmtDbGlja2VkID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCB7IG5vZGVOYW1lLCB0YXJnZXQgfSA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICAgIGlmIChcbiAgICAgIG5vZGVOYW1lID09PSAnQScgJiZcbiAgICAgICgodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICAgICAgZS5tZXRhS2V5IHx8XG4gICAgICAgIGUuY3RybEtleSB8fFxuICAgICAgICBlLnNoaWZ0S2V5IHx8XG4gICAgICAgIChlLm5hdGl2ZUV2ZW50ICYmIGUubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpKVxuICAgICkge1xuICAgICAgLy8gaWdub3JlIGNsaWNrIGZvciBuZXcgdGFiIC8gbmV3IHdpbmRvdyBiZWhhdmlvclxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IHsgaHJlZiwgYXMgfSA9IHRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMuYXMpXG5cbiAgICBpZiAoIWlzTG9jYWwoaHJlZikpIHtcbiAgICAgIC8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHdpbmRvdy5sb2NhdGlvblxuICAgIGhyZWYgPSByZXNvbHZlKHBhdGhuYW1lLCBocmVmKVxuICAgIGFzID0gYXMgPyByZXNvbHZlKHBhdGhuYW1lLCBhcykgOiBocmVmXG5cbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICAgIGxldCB7IHNjcm9sbCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICAgIH1cblxuICAgIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICAgIFJvdXRlclt0aGlzLnByb3BzLnJlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgICBzaGFsbG93OiB0aGlzLnByb3BzLnNoYWxsb3csXG4gICAgfSkudGhlbigoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBwcmVmZXRjaChvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnAgfHwgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICAgIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgICBjb25zdCBwYXRocyA9IHRoaXMuZ2V0UGF0aHMoKVxuICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgICBSb3V0ZXIucHJlZmV0Y2gocGF0aHNbLyogaHJlZiAqLyAwXSwgcGF0aHNbLyogYXNQYXRoICovIDFdLCBvcHRpb25zKS5jYXRjaChcbiAgICAgIChlcnIpID0+IHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICAgICAgdGhyb3cgZXJyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApXG4gICAgcHJlZmV0Y2hlZFtcbiAgICAgIHBhdGhzLmpvaW4oXG4gICAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICAgICclJ1xuICAgICAgKVxuICAgIF0gPSB0cnVlXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGhyZWYsIGFzIH0gPSB0aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLmFzKVxuICAgIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gICAgfVxuXG4gICAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gICAgY29uc3QgcHJvcHM6IHtcbiAgICAgIG9uTW91c2VFbnRlcjogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgICBocmVmPzogc3RyaW5nXG4gICAgICByZWY/OiBhbnlcbiAgICB9ID0ge1xuICAgICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZVJlZihlbClcblxuICAgICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25Nb3VzZUVudGVyOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJlZmV0Y2goeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgICAgfSxcbiAgICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgIHRoaXMubGlua0NsaWNrZWQoZSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9XG5cbiAgICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgICBpZiAoXG4gICAgICB0aGlzLnByb3BzLnBhc3NIcmVmIHx8XG4gICAgICAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSlcbiAgICApIHtcbiAgICAgIHByb3BzLmhyZWYgPSBhcyB8fCBocmVmXG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIGlmIChcbiAgICAgICAgcHJvcHMuaHJlZiAmJlxuICAgICAgICB0eXBlb2YgX19ORVhUX0RBVEFfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0XG4gICAgICApIHtcbiAgICAgICAgcHJvcHMuaHJlZiA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHByb3BzLmhyZWYpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgcHJvcHMpXG4gIH1cbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIGNvbnN0IHdhcm4gPSBleGVjT25jZShjb25zb2xlLmVycm9yKVxuXG4gIC8vIFRoaXMgbW9kdWxlIGdldHMgcmVtb3ZlZCBieSB3ZWJwYWNrLklnbm9yZVBsdWdpblxuICBjb25zdCBQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJylcbiAgY29uc3QgZXhhY3QgPSByZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0JylcbiAgLy8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuICBMaW5rLnByb3BUeXBlcyA9IGV4YWN0KHtcbiAgICBocmVmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxcbiAgICBhczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICAgIHByZWZldGNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgICByZXBsYWNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaGFsbG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwYXNzSHJlZjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2Nyb2xsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgIChwcm9wczogYW55LCBwcm9wTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcHNbcHJvcE5hbWVdXG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgYFdhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5gXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH0sXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oe30sIF9yb3V0ZXJbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGFyc2UsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgIT09IDAgPyBiYXNlUGF0aCArIHBhdGggOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSA9PT0gMFxuICAgID8gcGF0aC5zdWJzdHIoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbiAgICA6IHBhdGhcbn1cblxuZnVuY3Rpb24gdG9Sb3V0ZShwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJ1xufVxuXG5jb25zdCBwcmVwYXJlUm91dGUgPSAocGF0aDogc3RyaW5nKSA9PlxuICB0b1JvdXRlKCFwYXRoIHx8IHBhdGggPT09ICcvJyA/ICcvaW5kZXgnIDogcGF0aClcblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxudHlwZSBDb21wb25lbnRSZXMgPSB7IHBhZ2U6IENvbXBvbmVudFR5cGU7IG1vZDogYW55IH1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbnR5cGUgUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBhbnlcbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUm91dGVJbmZvLCBBcHA/OiBDb21wb25lbnRUeXBlKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogYW55KSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnkgfCBudWxsLFxuICBpc1NlcnZlclJlbmRlcjogYm9vbGVhbixcbiAgY2I/OiAoLi4uYXJnczogYW55KSA9PiBhbnlcbikge1xuICBsZXQgYXR0ZW1wdHMgPSBpc1NlcnZlclJlbmRlciA/IDMgOiAxXG4gIGZ1bmN0aW9uIGdldFJlc3BvbnNlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGZldGNoKFxuICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgoXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBfX05FWFRfREFUQV9fXG4gICAgICAgICAgYC9fbmV4dC9kYXRhLyR7X19ORVhUX0RBVEFfXy5idWlsZElkfSR7ZGVsQmFzZVBhdGgocGF0aG5hbWUpfS5qc29uYFxuICAgICAgICApLFxuICAgICAgICBxdWVyeSxcbiAgICAgIH0pLFxuICAgICAge1xuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgIH1cbiAgICApLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgaWYgKC0tYXR0ZW1wdHMgPiAwICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICByZXR1cm4gY2IgPyBjYihkYXRhKSA6IGRhdGFcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgLy8gbG9vcC5cbiAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgOyhlcnIgYXMgYW55KS5jb2RlID0gJ1BBR0VfTE9BRF9FUlJPUidcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBDb21wb25lbnRUeXBlXG4gICAgICB3cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGFzXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuICAgIH1cbiAgfVxuXG4gIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdXJsXG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgaWYgKCFlLnN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmIChcbiAgICAgIGUuc3RhdGUgJiZcbiAgICAgIHRoaXMuaXNTc3IgJiZcbiAgICAgIGUuc3RhdGUuYXMgPT09IHRoaXMuYXNQYXRoICYmXG4gICAgICBwYXJzZShlLnN0YXRlLnVybCkucGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWVcbiAgICApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhlLnN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBlLnN0YXRlXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgdXJsID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgYXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnYHBvcHN0YXRlYCBldmVudCB0cmlnZ2VyZWQgYnV0IGBldmVudC5zdGF0ZWAgZGlkIG5vdCBoYXZlIGB1cmxgIG9yIGBhc2AgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcG9wc3RhdGUtc3RhdGUtZW1wdHknXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5yZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICB1cGRhdGUocm91dGU6IHN0cmluZywgbW9kOiBhbnkpIHtcbiAgICBjb25zdCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUgPSBtb2QuZGVmYXVsdCB8fCBtb2RcbiAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuICAgIGlmICghZGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdXBkYXRlIHVuYXZhaWxhYmxlIHJvdXRlOiAke3JvdXRlfWApXG4gICAgfVxuXG4gICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIF9fTl9TU0c6IG1vZC5fX05fU1NHLFxuICAgICAgX19OX1NTUDogbW9kLl9fTl9TU1AsXG4gICAgfSlcbiAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gbmV3RGF0YVxuXG4gICAgLy8gcGFnZXMvX2FwcC5qcyB1cGRhdGVkXG4gICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocm91dGUgPT09IHRoaXMucm91dGUpIHtcbiAgICAgIHRoaXMubm90aWZ5KG5ld0RhdGEpXG4gICAgfVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIF91cmw6IFVybCxcbiAgICBfYXM6IFVybCxcbiAgICBvcHRpb25zOiBhbnlcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICAgIH1cbiAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgIGlmIChTVCkge1xuICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICAgIGxldCB1cmwgPSB0eXBlb2YgX3VybCA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbihfdXJsKSA6IF91cmxcbiAgICAgIGxldCBhcyA9IHR5cGVvZiBfYXMgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24oX2FzKSA6IF9hc1xuXG4gICAgICB1cmwgPSBhZGRCYXNlUGF0aCh1cmwpXG4gICAgICBhcyA9IGFkZEJhc2VQYXRoKGFzKVxuXG4gICAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICBpZiAoX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KSB7XG4gICAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZChhcylcblxuICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoYXMpKSB7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGFzKVxuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKVxuICAgICAgfVxuXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSwgcHJvdG9jb2wgfSA9IHBhcnNlKHVybCwgdHJ1ZSlcblxuICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGFzKSkge1xuICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpXG4gICAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHBhcnNlKGFzKVxuICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICAgIClcblxuICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChcbiAgICAgICAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgICAvLyBJZiBzaGFsbG93IGlzIHRydWUgYW5kIHRoZSByb3V0ZSBleGlzdHMgaW4gdGhlIHJvdXRlciBjYWNoZSB3ZSByZXVzZSB0aGUgcHJldmlvdXMgcmVzdWx0XG4gICAgICB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdykudGhlbihcbiAgICAgICAgKHJvdXRlSW5mbykgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZUluZm8pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBhcylcbiAgICAgICAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHJlamVjdFxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFJvdXRlSW5mbz4ge1xuICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgIC8vIElmIHRoZXJlIGlzIGEgc2hhbGxvdyByb3V0ZSB0cmFuc2l0aW9uIHBvc3NpYmxlXG4gICAgLy8gSWYgdGhlIHJvdXRlIGlzIGFscmVhZHkgcmVuZGVyZWQgb24gdGhlIHNjcmVlbi5cbiAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGVkUm91dGVJbmZvKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKFxuICAgICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICAgKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgaWYgKGVyci5jb2RlID09PSAnUEFHRV9MT0FEX0VSUk9SJyB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYXJrIGl0IGFzIGEgY2FuY2VsbGVkIGVycm9yIGFuZCBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzb2x2ZShcbiAgICAgICAgICB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IHJlc1xuICAgICAgICAgICAgICBjb25zdCByb3V0ZUluZm86IFJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIgfVxuICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgfSBhcyBhbnkpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAocHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIChnaXBFcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAnRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJyxcbiAgICAgICAgICAgICAgICAgICAgICBnaXBFcnJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gaGFuZGxlRXJyb3IoZXJyLCB0cnVlKSlcbiAgICAgICAgKVxuICAgICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+XG4gICAgfVxuXG4gICAgcmV0dXJuIChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoY2FjaGVkUm91dGVJbmZvKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKGNhY2hlZFJvdXRlSW5mbylcbiAgICAgIH1cblxuICAgICAgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihcbiAgICAgICAgKHJlcykgPT5cbiAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSksXG4gICAgICAgIHJlamVjdFxuICAgICAgKVxuICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPilcbiAgICAgIC50aGVuKChyb3V0ZUluZm86IFJvdXRlSW5mbykgPT4ge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXREYXRhPFJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgICBfX05fU1NHXG4gICAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoYXMpXG4gICAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShhcylcbiAgICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgICAgKVxuICAgICAgICApLnRoZW4oKHByb3BzKSA9PiB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChoYW5kbGVFcnJvcilcbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBwcm90b2NvbCB9ID0gcGFyc2UodXJsKVxuXG4gICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29uc3Qgcm91dGUgPSBkZWxCYXNlUGF0aCh0b1JvdXRlKHBhdGhuYW1lKSlcbiAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGRlbEJhc2VQYXRoKGFzUGF0aCkpLFxuICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgICBdKS50aGVuKCgpID0+IHJlc29sdmUoKSwgcmVqZWN0KVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxDb21wb25lbnRSZXM+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcbiAgICByb3V0ZSA9IGRlbEJhc2VQYXRoKHJvdXRlKVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhID0gKGFzUGF0aDogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+ID0+IHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXJzZShhc1BhdGgpLnBhdGhuYW1lISlcblxuICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW3BhdGhuYW1lXVxuICAgICAgPyBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbcGF0aG5hbWVdKVxuICAgICAgOiBmZXRjaE5leHREYXRhKFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgdGhpcy5pc1NzcixcbiAgICAgICAgICAoZGF0YSkgPT4gKHRoaXMuc2RjW3BhdGhuYW1lXSA9IGRhdGEpXG4gICAgICAgIClcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhID0gKGFzUGF0aDogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+ID0+IHtcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlKGFzUGF0aCwgdHJ1ZSlcbiAgICBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXRobmFtZSEpXG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBjb25zdCBlID0gbmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKVxuICAgICAgOyhlIGFzIGFueSkuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCIvLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiB7IHBvczogbnVtYmVyOyByZXBlYXQ6IGJvb2xlYW4gfSB9XG59IHtcbiAgLy8gRXNjYXBlIGFsbCBjaGFyYWN0ZXJzIHRoYXQgY291bGQgYmUgY29uc2lkZXJlZCBSZWdFeFxuICBjb25zdCBlc2NhcGVkUm91dGUgPSBlc2NhcGVSZWdleChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IHsgcG9zOiBudW1iZXI7IHJlcGVhdDogYm9vbGVhbiB9IH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcblxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZShcbiAgICAvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLFxuICAgIChfLCAkMSkgPT4ge1xuICAgICAgY29uc3QgaXNPcHRpb25hbCA9IC9eXFxcXFxcWy4qXFxcXFxcXSQvLnRlc3QoJDEpXG4gICAgICBpZiAoaXNPcHRpb25hbCkge1xuICAgICAgICAkMSA9ICQxLnNsaWNlKDIsIC0yKVxuICAgICAgfVxuICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKVxuICAgICAgaWYgKGlzQ2F0Y2hBbGwpIHtcbiAgICAgICAgJDEgPSAkMS5zbGljZSg2KVxuICAgICAgfVxuICAgICAgZ3JvdXBzW1xuICAgICAgICAkMVxuICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBdID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0OiBpc0NhdGNoQWxsIH1cbiAgICAgIHJldHVybiBpc0NhdGNoQWxsID8gKGlzT3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICB9XG4gIClcblxuICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKFxuICAgICAgL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZyxcbiAgICAgIChfLCAkMSkgPT4ge1xuICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpXG4gICAgICAgIGNvbnN0IGtleSA9ICQxXG4gICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJylcblxuICAgICAgICByZXR1cm4gaXNDYXRjaEFsbFxuICAgICAgICAgID8gYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9Pi4rPylgXG4gICAgICAgICAgOiBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+W14vXSs/KWBcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKCdeJyArIHBhcmFtZXRlcml6ZWRSb3V0ZSArICcoPzovKT8kJywgJ2knKSxcbiAgICBncm91cHMsXG4gICAgbmFtZWRSZWdleDogbmFtZWRQYXJhbWV0ZXJpemVkUm91dGVcbiAgICAgID8gYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgXG4gICAgICA6IHVuZGVmaW5lZCxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZm9ybWF0LCBVUkxGb3JtYXRPcHRpb25zLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJy4uLy4uL2xpYi9sb2FkLWVudi1jb25maWcnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IGFueVxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIGludGVyZmFjZS1uYW1lXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIHN0YXRpY01hcmt1cDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGRldkZpbGVzOiBzdHJpbmdbXVxuICBmaWxlczogc3RyaW5nW11cbiAgbG93UHJpb3JpdHlGaWxlczogc3RyaW5nW11cbiAgcG9seWZpbGxGaWxlczogc3RyaW5nW11cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBodG1sUHJvcHM6IGFueVxuICBib2R5VGFnczogYW55W11cbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gIHVybDogVXJsT2JqZWN0LFxuICBvcHRpb25zPzogVVJMRm9ybWF0T3B0aW9uc1xuKTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdCh1cmwgYXMgVVJMLCBvcHRpb25zKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xMy4xXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxuLy8gKHVuc3RhYmxlKSBBUElzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQuIENhbiB3ZSByZW1vdmUgdGhlIHN5bWJvbHM/XG5cbnZhciBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5hc3luY19tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0JykgOiAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYmxvY2snKSA6IDB4ZWFkOTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnVuZGFtZW50YWwnKSA6IDB4ZWFkNTtcbnZhciBSRUFDVF9SRVNQT05ERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnJlc3BvbmRlcicpIDogMHhlYWQ2O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zY29wZScpIDogMHhlYWQ3O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9SRVNQT05ERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9TQ09QRV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUpO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0gLy8gQXN5bmNNb2RlIGlzIGRlcHJlY2F0ZWQgYWxvbmcgd2l0aCBpc0FzeW5jTW9kZVxuXG52YXIgQXN5bmNNb2RlID0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xudmFyIENvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE3Ky4gVXBkYXRlIHlvdXIgY29kZSB0byB1c2UgJyArICdSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBpbnN0ZWFkLiBJdCBoYXMgdGhlIGV4YWN0IHNhbWUgQVBJLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkgfHwgdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQXN5bmNNb2RlID0gQXN5bmNNb2RlO1xuZXhwb3J0cy5Db25jdXJyZW50TW9kZSA9IENvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyXCI7XHJcbmltcG9ydCBGYWNpbGl0eSBmcm9tIFwiLi4vY29tcG9uZW50cy9zaG9wLXN0eWxlLW9uZS9GYWNpbGl0eVwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC9Gb290ZXJcIjtcclxuaW1wb3J0IFBheW1lbnRNZXRob2RzIGZyb20gXCIuLi9jb21wb25lbnRzL3BheW1lbnRzL1BheW1lbnRNZXRob2RzXCI7XHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hlZC1sYXlvdXQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hlZC1sYXlvdXQtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgICAgIDxQYXltZW50TWV0aG9kcyAvPlxyXG5cclxuICAgICAgICAgICAgPEZhY2lsaXR5IC8+XHJcbiAgICAgICAgICAgIHsvKiA8SW5zdGFncmFtUGhvdG8gLz4gKi99XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iLCIvL1R5cGVzIHNob3VsZCBiZSBpbiBjb25zdCB0byBhdm9pZCB0eXBvcyBhbmQgZHVwbGljYXRpb24gc2luY2UgaXQncyBhIHN0cmluZyBhbmQgY291bGQgYmUgZWFzaWx5IG1pc3Mgc3BlbGxlZFxyXG5leHBvcnQgY29uc3QgQUREX1RPX0NBUlQgPSAnQUREX1RPX0NBUlQnO1xyXG5leHBvcnQgY29uc3QgQUREX1RPX0NBUlRfQURET05TID0gJ0FERF9UT19DQVJUX0FERE9OUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfSVRFTSA9ICdSRU1PVkVfSVRFTSc7XHJcbmV4cG9ydCBjb25zdCBTVUJfUVVBTlRJVFkgPSAnU1VCX1FVQU5USVRZJztcclxuZXhwb3J0IGNvbnN0IEFERF9RVUFOVElUWSA9ICdBRERfUVVBTlRJVFknO1xyXG5leHBvcnQgY29uc3QgQUREX1NISVBQSU5HID0gJ0FERF9TSElQUElORyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVIgPSAnQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSJztcclxuZXhwb3J0IGNvbnN0IE9SREVSX0ZPUk0gPSAnT1JERVJfRk9STSc7XHJcbmV4cG9ydCBjb25zdCBDSEVDS09VVF9DSEFSR0UgPSAnQ0hFQ0tPVVRfQ0hBUkdFJztcclxuZXhwb3J0IGNvbnN0IFJFU0VUX0NBUlQgPSAnUkVTRVRfQ0FSVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfVE9fQ09NUEFSRSA9ICdBRERfVE9fQ09NUEFSRSc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfSVRFTV9GUk9NX0NPTVBBUkUgPSAnUkVNT1ZFX0lURU1fRlJPTV9DT01QQVJFJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9DQVJUID0gJ1VQREFURV9DQVJUJzsiLCJpbXBvcnQge1xyXG4gIEFERF9UT19DQVJULFxyXG4gIFJFTU9WRV9JVEVNLFxyXG4gIFNVQl9RVUFOVElUWSxcclxuICBBRERfUVVBTlRJVFksXHJcbiAgQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSLFxyXG4gIFJFU0VUX0NBUlQsXHJcbiAgQUREX1RPX0NPTVBBUkUsXHJcbiAgUkVNT1ZFX0lURU1fRlJPTV9DT01QQVJFLFxyXG4gIEFERF9UT19DQVJUX0FERE9OUyxcclxufSBmcm9tIFwiLi9hY3Rpb24tdHlwZXMvY2FydC1hY3Rpb25zXCI7XHJcbnZhciBDcnlwdG9KUyA9IHJlcXVpcmUoXCJjcnlwdG8tanNcIik7XHJcblxyXG5leHBvcnQgY29uc3QgY2xlYXJEYXRhID0gKCkgPT4ge1xyXG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHByb2Nlc3MuZW52LkNBUlRfQ09PS0lFKTtcclxuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShwcm9jZXNzLmVudi5JTkZPX0NPT0tJRSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZW5jcnlwdERhdGEgPSAoZGF0YSkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gQ3J5cHRvSlMuQUVTLmVuY3J5cHQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICBwcm9jZXNzLmVudi5DQVJUX0tFWVxyXG4gICAgKS50b1N0cmluZygpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShwcm9jZXNzLmVudi5DQVJUX0NPT0tJRSk7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlY3J5cHREYXRhID0gKGRhdGEpID0+IHtcclxuICB0cnkge1xyXG4gICAgbGV0IGJ5dGVzID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQoZGF0YSwgcHJvY2Vzcy5lbnYuQ0FSVF9LRVkpO1xyXG4gICAgbGV0IHN0cmluZ0FycmF5ID0gSlNPTi5wYXJzZShieXRlcy50b1N0cmluZyhDcnlwdG9KUy5lbmMuVXRmOCkpO1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2Uoc3RyaW5nQXJyYXkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlcnJvcik7XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0ocHJvY2Vzcy5lbnYuQ0FSVF9DT09LSUUpO1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufTtcclxuXHJcbi8vYWRkIGNhcnQgYWN0aW9uXHJcbmV4cG9ydCBjb25zdCBhZGRUb0NhcnQgPSAocHJvZHVjdCwgcXVhbnRpdHkgPSAxKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFERF9UT19DQVJULFxyXG4gICAgcHJvZHVjdDogcHJvZHVjdCxcclxuICAgIHF1YW50aXR5LFxyXG4gIH07XHJcbn07XHJcblxyXG4vL2FkZCBjYXJ0IHdpdGggYWRkb25zIGFjdGlvblxyXG5leHBvcnQgY29uc3QgYWRkVG9DYXJ0QWRkb25zID0gKHByb2R1Y3RzLCBxdWFudGl0eSA9IDEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQUREX1RPX0NBUlRfQURET05TLFxyXG4gICAgcHJvZHVjdHM6IHByb2R1Y3RzLFxyXG4gICAgcXVhbnRpdHksXHJcbiAgfTtcclxufTtcclxuXHJcbi8vcmVtb3ZlIGl0ZW0gYWN0aW9uXHJcbmV4cG9ydCBjb25zdCByZW1vdmVJdGVtID0gKGlkKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFJFTU9WRV9JVEVNLFxyXG4gICAgaWQsXHJcbiAgfTtcclxufTtcclxuLy9zdWJ0cmFjdCBxdCBhY3Rpb25cclxuZXhwb3J0IGNvbnN0IHN1YnRyYWN0UXVhbnRpdHkgPSAoaWQpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogU1VCX1FVQU5USVRZLFxyXG4gICAgaWQsXHJcbiAgfTtcclxufTtcclxuLy9hZGQgcXQgYWN0aW9uXHJcbmV4cG9ydCBjb25zdCBhZGRRdWFudGl0eSA9IChpZCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBRERfUVVBTlRJVFksXHJcbiAgICBpZCxcclxuICB9O1xyXG59O1xyXG5cclxuLy9hZGQgcXQgYWN0aW9uIHdpdGggcXVhbnRpdHkgbnVtYmVyXHJcbmV4cG9ydCBjb25zdCBhZGRRdWFudGl0eVdpdGhOdW1iZXIgPSAoaWQsIHF0eSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVIsXHJcbiAgICBpZCxcclxuICAgIHF0eSxcclxuICB9O1xyXG59O1xyXG5cclxuLy8gUmVzZXQgY2FydCBhZnRlciBmb3JtIHN1Ym1pdFxyXG5leHBvcnQgY29uc3QgcmVzZXRDYXJ0ID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBSRVNFVF9DQVJULFxyXG4gIH07XHJcbn07XHJcblxyXG4vL2FkZCBjb21wYXJlIGFjdGlvblxyXG5leHBvcnQgY29uc3QgYWRkVG9Db21wYXJlID0gKGlkKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFERF9UT19DT01QQVJFLFxyXG4gICAgaWQsXHJcbiAgfTtcclxufTtcclxuLy9yZW1vdmUgaXRlbSBmcm9tIGNvbXBhcmUgYWN0aW9uXHJcbmV4cG9ydCBjb25zdCByZW1vdmVJdGVtRnJvbUNvbXBhcmUgPSAoaWQpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogUkVNT1ZFX0lURU1fRlJPTV9DT01QQVJFLFxyXG4gICAgaWQsXHJcbiAgfTtcclxufTtcclxuIiwidmFyIENyeXB0b0pTID0gcmVxdWlyZShcImNyeXB0by1qc1wiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBlbmNyeXB0SW5mb0RhdGEgPSAoZGF0YSkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgZW5jcnlwdGVkRGF0YSA9IENyeXB0b0pTLkFFUy5lbmNyeXB0KFxyXG4gICAgICBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgcHJvY2Vzcy5lbnYuSU5GT19LRVlcclxuICAgICkudG9TdHJpbmcoKTtcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9jZXNzLmVudi5JTkZPX0NPT0tJRSwgZW5jcnlwdGVkRGF0YSk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0ocHJvY2Vzcy5lbnYuSU5GT19DT09LSUUpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWNyeXB0SW5mb0RhdGEgPSAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGxldCBpbmZvSXRlbSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2Nlc3MuZW52LklORk9fQ09PS0lFKVxyXG4gICAgICA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2Nlc3MuZW52LklORk9fQ09PS0lFKVxyXG4gICAgICA6IG51bGw7XHJcbiAgICBpZiAoaW5mb0l0ZW0pIHtcclxuICAgICAgbGV0IGJ5dGVzID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQoaW5mb0l0ZW0sIHByb2Nlc3MuZW52LklORk9fS0VZKTtcclxuICAgICAgbGV0IHN0cmluZ0FycmF5ID0gSlNPTi5wYXJzZShieXRlcy50b1N0cmluZyhDcnlwdG9KUy5lbmMuVXRmOCkpO1xyXG4gICAgICByZXR1cm4gc3RyaW5nQXJyYXk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShwcm9jZXNzLmVudi5JTkZPX0NPT0tJRSk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVuY3J5cHRTdHJpbmcgPSAoZGF0YSkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgZW5jcnlwdGVkRGF0YSA9IGVuY29kZVVSSUNvbXBvbmVudChcclxuICAgICAgQ3J5cHRvSlMuQUVTLmVuY3J5cHQoXHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgICAgcHJvY2Vzcy5lbnYuSU5GT19LRVlcclxuICAgICAgKS50b1N0cmluZygpXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBlbmNyeXB0ZWREYXRhO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlY3J5cHRTdHJpbmcgPSAoZGF0YSkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBsZXQgYnl0ZXMgPSBDcnlwdG9KUy5BRVMuZGVjcnlwdChkYXRhLCBwcm9jZXNzLmVudi5JTkZPX0tFWSk7XHJcbiAgICAgIGxldCBzdHJpbmdBcnJheSA9IEpTT04ucGFyc2UoYnl0ZXMudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLlV0ZjgpKTtcclxuICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHJpbmdBcnJheSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG52YXIgQ3J5cHRvSlMgPSByZXF1aXJlKFwiY3J5cHRvLWpzXCIpO1xyXG5cclxubGV0IGhvc3QgPSBwcm9jZXNzLmVudi5BUElfVVJMO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJSZWdpc3RlciA9XHJcbiAgKHVzZXJEYXRhLCBzZXRJc0xvYWRpbmcsIGNiKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7aG9zdH0vYXBpL3VzZXIvYXV0aC9zaWduVXBgLCB1c2VyRGF0YSk7XHJcblxyXG4gICAgICAvLyAvLyBzYXZlIHRoZSBuZXcgdG9rZW4gZnJvbSBvdXIgZnVja2luZyBhcGkgdG8gdGhlIGNvb2tpZXNcclxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGNvbnN0IHsgdG9rZW4sIHVzZXIgfSA9IGF3YWl0IHJlcy5kYXRhO1xyXG4gICAgICAgIGNvb2tpZS5zZXQoXCJfd3VzX0JKS1wiLCB0b2tlbiwgeyBleHBpcmVzOiA3IH0pO1xyXG4gICAgICAgIGNvb2tpZS5zZXQoXCJ1c2VyXCIsIHVzZXIsIHsgZXhwaXJlczogNyB9KTtcclxuICAgICAgICBjYigpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgaWYgKGVyci5yZXNwb25zZS5kYXRhLmVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRvYXN0LmVycm9yKGVyci5yZXNwb25zZS5kYXRhLmVycm9yKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGVyci5yZXNwb25zZS5kYXRhLmRldGFpbHNbMF0ubWVzc2FnZSkge1xyXG4gICAgICAgIHJldHVybiB0b2FzdC5lcnJvcihlcnIucmVzcG9uc2UuZGF0YS5kZXRhaWxzWzBdLm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyTG9naW4gPSAodXNlckRhdGEsIHNldElzTG9hZGluZywgY2IpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGAke2hvc3R9L2FwaS91c2VyL2F1dGgvc2lnbkluYCwgdXNlckRhdGEpO1xyXG5cclxuICAgIC8vIC8vIHNhdmUgdGhlIG5ldyB0b2tlbiBmcm9tIG91ciBmdWNraW5nIGFwaSB0byB0aGUgY29va2llc1xyXG4gICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICBjb25zdCB7IHRva2VuLCB1c2VyIH0gPSBhd2FpdCByZXMuZGF0YTtcclxuICAgICAgY29va2llLnNldChcIl93dXNfQkpLXCIsIHRva2VuLCB7IGV4cGlyZXM6IDcgfSk7XHJcbiAgICAgIGNvb2tpZS5zZXQoXCJ1c2VyXCIsIHVzZXIsIHsgZXhwaXJlczogNyB9KTtcclxuICAgICAgY2IoKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgaWYgKGVyci5yZXNwb25zZS5kYXRhLmVycm9yKSB7XHJcbiAgICAgIHJldHVybiB0b2FzdC5lcnJvcihlcnIucmVzcG9uc2UuZGF0YS5lcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVyci5yZXNwb25zZS5kYXRhLmRldGFpbHNbMF0ubWVzc2FnZSkge1xyXG4gICAgICByZXR1cm4gdG9hc3QuZXJyb3IoZXJyLnJlc3BvbnNlLmRhdGEuZGV0YWlsc1swXS5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gIGNvb2tpZS5yZW1vdmUoXCJfd3VzX0JKS1wiKTtcclxuICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVuY3J5cHRVc2VyRGF0YSA9IChkYXRhKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGxldCBlbmNyeXB0ZWREYXRhID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICBwcm9jZXNzLmVudi5VU0VSX0tFWVxyXG4gICAgKS50b1N0cmluZygpO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2Nlc3MuZW52LlVTRVJfQ09PS0lFLCBlbmNyeXB0ZWREYXRhKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShwcm9jZXNzLmVudi5VU0VSX0NPT0tJRSk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlY3J5cHRVc2VyRGF0YSA9ICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgbGV0IGluZm9JdGVtID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvY2Vzcy5lbnYuVVNFUl9DT09LSUUpXHJcbiAgICAgID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvY2Vzcy5lbnYuVVNFUl9DT09LSUUpXHJcbiAgICAgIDogbnVsbDtcclxuICAgIGlmIChpbmZvSXRlbSkge1xyXG4gICAgICBsZXQgYnl0ZXMgPSBDcnlwdG9KUy5BRVMuZGVjcnlwdChpbmZvSXRlbSwgcHJvY2Vzcy5lbnYuVVNFUl9LRVkpO1xyXG4gICAgICBsZXQgc3RyaW5nQXJyYXkgPSBKU09OLnBhcnNlKGJ5dGVzLnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KSk7XHJcbiAgICAgIHJldHVybiBzdHJpbmdBcnJheTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHByb2Nlc3MuZW52LlVTRVJfQ09PS0lFKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyeXB0by1qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9keW5hbWljXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5wcm9ncmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXMtZXhhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtb3dsLWNhcm91c2VsM1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1wYXlwYWwtZXhwcmVzcy1jaGVja291dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
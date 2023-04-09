module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static\\development\\pages\\index.js": 0
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

/***/ "./components/Common/InstagramPhoto.js":
/*!*********************************************!*\
  !*** ./components/Common/InstagramPhoto.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\corde\\Desktop\\New folder\\bikeshop\\bikeshop_frontend\\components\\Common\\InstagramPhoto.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-owl-carousel3 */ "react-owl-carousel3", 7)), {
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
  navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
  responsive: {
    0: {
      items: 3
    },
    576: {
      items: 4
    },
    768: {
      items: 6
    },
    1200: {
      items: 9
    }
  }
};

class InstagramPhoto extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
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
    return __jsx("div", {
      className: "instagram-area",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 7
      }
    }, this.state.display ? __jsx(OwlCarousel, _extends({
      className: "instagram-slides owl-carousel owl-theme"
    }, options, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }
    }), __jsx("div", {
      className: "instagram-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "https://scontent.fmnl7-1.fna.fbcdn.net/v/t1.0-9/p960x960/117770626_1179734539055831_5540317664843034780_o.jpg?_nc_cat=111&_nc_sid=dd9801&_nc_eui2=AeH-39PLKWBs7R--z1bj_yg6UJiPEDHt4rxQmI8QMe3ivJxZAgfS86ydfhJCvqK9vR1b-R0D6UBK2sQIM45k7zDa&_nc_ohc=-cgGKjEOjTMAX_Bp9n2&_nc_ht=scontent.fmnl7-1.fna&_nc_tp=6&oh=70fb82e1598b27d101f2d34daafba64d&oe=5F5D9FF2",
      alt: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 15
      }
    }), __jsx("div", {
      className: "icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 15
      }
    }, __jsx("i", {
      className: "fab fa-instagram",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }
    })), __jsx("a", {
      target: "_blank",
      href: "https://www.instagram.com/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: "instagram-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "https://scontent.fmnl3-2.fna.fbcdn.net/v/t1.0-9/117580668_1179731995722752_655238284323176710_n.jpg?_nc_cat=104&_nc_sid=110474&_nc_eui2=AeGb230gPCKmN_xobYd8xyFE1H8Ci8HDyzfUfwKLwcPLN2CWisq3Pi1wleSBuET601-yreEvV_BMUO3Eh1a_YBpK&_nc_ohc=aqu1WcC6lG0AX97jNQb&_nc_ht=scontent.fmnl3-2.fna&oh=b8385a7a282043bdd3947f23e90bfd37&oe=5F5CC8A0",
      alt: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 15
      }
    }), __jsx("div", {
      className: "icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 15
      }
    }, __jsx("i", {
      className: "fab fa-instagram",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }
    })), __jsx("a", {
      target: "_blank",
      href: "https://www.instagram.com/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: "instagram-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.0-9/p960x960/116898839_1179731382389480_7747868938142399981_o.jpg?_nc_cat=101&_nc_sid=110474&_nc_eui2=AeEY4K7ZQly21lpraGUw2suB8loviRT8Wj_yWi-JFPxaP36eM2R3dpqvP7EBVjUP9bvDm5lCWjPNhPXOW4lQ4olG&_nc_ohc=pkULQS_6e_oAX-IlL3H&_nc_ht=scontent.fmnl3-1.fna&_nc_tp=6&oh=efa12fefc0c72b0730302917171509c7&oe=5F5EFD33",
      alt: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 15
      }
    }), __jsx("div", {
      className: "icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 15
      }
    }, __jsx("i", {
      className: "fab fa-instagram",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }
    })), __jsx("a", {
      target: "_blank",
      href: "https://www.instagram.com/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: "instagram-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.0-9/p960x960/117537468_1179730619056223_1388251640472997153_o.jpg?_nc_cat=101&_nc_sid=110474&_nc_eui2=AeFH4o3Bs0V5gNFMBJJOrebKE62_EglU6WUTrb8SCVTpZcKIc_BNpapv-kZFpHYded79BmQgAelzw5uJdpcvQF_k&_nc_ohc=1NGUZb_4XF4AX8YHD47&_nc_ht=scontent.fmnl3-1.fna&_nc_tp=6&oh=3bb9c61471fd66d657073c976058b915&oe=5F5D21BC",
      alt: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 15
      }
    }), __jsx("div", {
      className: "icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 15
      }
    }, __jsx("i", {
      className: "fab fa-instagram",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }
    })), __jsx("a", {
      target: "_blank",
      href: "https://www.instagram.com/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: "instagram-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.0-9/p960x960/117261786_1172920389737246_3259098908696058338_o.jpg?_nc_cat=103&_nc_sid=0be424&_nc_eui2=AeFXszbXU5K2_m7J0kpZjFk-9XSESeuq7fP1dIRJ66rt8x_odOzHwUEdD5Ei59n7jSrJl1KCqY2D1XfDgjtTsPE2&_nc_ohc=VYz7lu4cM3IAX-Lvs82&_nc_ht=scontent.fmnl3-1.fna&_nc_tp=6&oh=22bd31fe4688b12700b0e3382ef00d55&oe=5F6065A3",
      alt: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 15
      }
    }), __jsx("div", {
      className: "icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 15
      }
    }, __jsx("i", {
      className: "fab fa-instagram",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }
    })), __jsx("a", {
      target: "_blank",
      href: "https://www.instagram.com/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: "instagram-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.0-9/p960x960/110038909_1164581773904441_5824928607887917086_o.jpg?_nc_cat=103&_nc_sid=110474&_nc_eui2=AeGMoKcYGtiL4fpr_kENS353KlI4aUJj5uIqUjhpQmPm4h-rWJjnCylh9oFGdaB9nFwpDEv8oxwJQWJO9QsWxTnh&_nc_ohc=PP-RqnAbyhAAX8mFXJ8&_nc_ht=scontent.fmnl3-1.fna&_nc_tp=6&oh=2045c3fc6f23fe6f8761dba611fc2352&oe=5F5E1440",
      alt: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 15
      }
    }), __jsx("div", {
      className: "icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 15
      }
    }, __jsx("i", {
      className: "fab fa-instagram",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }
    })), __jsx("a", {
      target: "_blank",
      href: "https://www.instagram.com/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: "instagram-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "https://scontent.fmnl3-2.fna.fbcdn.net/v/t1.0-9/107008468_1152809131748372_7763456214602512553_n.jpg?_nc_cat=109&_nc_sid=8024bb&_nc_eui2=AeFSbHSNgm1dAAf1VKrJhHx_O5z7p1n4iic7nPunWfiKJ20urL39MfZwrJWmO8GG3HFXnhLkNGC4U40O4WU1QDBi&_nc_ohc=ZEQi23e_QjwAX_-HOL6&_nc_ht=scontent.fmnl3-2.fna&oh=201ceafe815c4253bdca54a1906e6c02&oe=5F5D5CD9",
      alt: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 15
      }
    }), __jsx("div", {
      className: "icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 15
      }
    }, __jsx("i", {
      className: "fab fa-instagram",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 17
      }
    })), __jsx("a", {
      target: "_blank",
      href: "https://www.instagram.com/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: "instagram-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.0-9/107307000_1150336615328957_3283061630543372979_n.jpg?_nc_cat=101&_nc_sid=110474&_nc_eui2=AeHuG2_1zo5_79GtUuMsZ216byii-Q2k4advKKL5DaThp9LCr7JUT6L6okO91u0XAnagzQZI5qxqYXIne_XqtKKv&_nc_ohc=rVJXijum3UkAX_VO5bz&_nc_ht=scontent.fmnl3-1.fna&oh=6df7ab3e462242bc7f4c6e034f46af69&oe=5F5E184E",
      alt: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 15
      }
    }), __jsx("div", {
      className: "icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 15
      }
    }, __jsx("i", {
      className: "fab fa-instagram",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 17
      }
    })), __jsx("a", {
      target: "_blank",
      href: "https://www.instagram.com/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: "instagram-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "https://scontent.fmnl3-2.fna.fbcdn.net/v/t1.0-9/p960x960/87459837_2664213117155251_1380758696342061056_o.jpg?_nc_cat=104&_nc_sid=7aed08&_nc_eui2=AeE3xTkseYsXz_laTK5uXvZqUGwzzJ0WQrJQbDPMnRZCsndNvnxEQhNXlLlMbaZchvF0_AyUfKl6p0argtkZxM3d&_nc_ohc=aKQZv7BmJ-YAX-7k2ZQ&_nc_ht=scontent.fmnl3-2.fna&_nc_tp=6&oh=38d61ec9b715f6199c5745ee74e7ae93&oe=5F5FF2B1",
      alt: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 15
      }
    }), __jsx("div", {
      className: "icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 15
      }
    }, __jsx("i", {
      className: "fab fa-instagram",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 17
      }
    })), __jsx("a", {
      target: "_blank",
      href: "https://www.instagram.com/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 15
      }
    }))) : "");
  }

}

/* harmony default export */ __webpack_exports__["default"] = (InstagramPhoto);

/***/ }),

/***/ "./components/Common/News.js":
/*!***********************************!*\
  !*** ./components/Common/News.js ***!
  \***********************************/
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
var _jsxFileName = "C:\\Users\\corde\\Desktop\\New folder\\bikeshop\\bikeshop_frontend\\components\\Common\\News.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-owl-carousel3 */ "react-owl-carousel3", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-owl-carousel3 */ "react-owl-carousel3")],
    modules: ['react-owl-carousel3']
  }
});
const options = {
  loop: true,
  nav: false,
  dots: true,
  margin: 30,
  autoplayHoverPause: true,
  autoplay: true,
  navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1024: {
      items: 3
    }
  }
};

class News extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
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
    return __jsx("section", {
      className: "news-area ptb-60",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "section-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 21
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 25
      }
    }, __jsx("span", {
      className: "dot",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 29
      }
    }), " We - Order News")), this.state.display ? __jsx(OwlCarousel, _extends({
      className: "news-slides owl-carousel owl-theme"
    }, options, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 43
      }
    }), __jsx("div", {
      className: "single-news-post",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "news-image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 29
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 33
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 37
      }
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/blog-img1.jpg */ "./images/blog-img1.jpg"),
      alt: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 41
      }
    })))), __jsx("div", {
      className: "news-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 29
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 33
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 37
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 41
      }
    }, "Styling White Jeans after Labor Day"))), __jsx("span", {
      className: "author",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 33
      }
    }, "By ", __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 61
      }
    }, "Admin")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 33
      }
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 33
      }
    }, __jsx("a", {
      className: "btn btn-light",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 37
      }
    }, "Read More")))), __jsx("div", {
      className: "single-news-post",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "news-image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 29
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 33
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 37
      }
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/blog-img2.jpg */ "./images/blog-img2.jpg"),
      alt: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 41
      }
    })))), __jsx("div", {
      className: "news-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 29
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 33
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 37
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 41
      }
    }, "Styling White Jeans after Labor Day"))), __jsx("span", {
      className: "author",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 33
      }
    }, "By ", __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 61
      }
    }, "Admin")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 33
      }
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 33
      }
    }, __jsx("a", {
      className: "btn btn-light",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 37
      }
    }, "Read More")))), __jsx("div", {
      className: "single-news-post",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "news-image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 29
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 33
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 37
      }
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/blog-img3.jpg */ "./images/blog-img3.jpg"),
      alt: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 41
      }
    })))), __jsx("div", {
      className: "news-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 29
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 33
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 37
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 41
      }
    }, "Styling White Jeans after Labor Day"))), __jsx("span", {
      className: "author",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 33
      }
    }, "By ", __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 61
      }
    }, "Admin")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 33
      }
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 33
      }
    }, __jsx("a", {
      className: "btn btn-light",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 37
      }
    }, "Read More")))), __jsx("div", {
      className: "single-news-post",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "news-image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 29
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 33
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 37
      }
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/blog-img4.jpg */ "./images/blog-img4.jpg"),
      alt: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 41
      }
    })))), __jsx("div", {
      className: "news-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 29
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 33
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 37
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 41
      }
    }, "Styling White Jeans after Labor Day"))), __jsx("span", {
      className: "author",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 33
      }
    }, "By ", __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 61
      }
    }, "Admin")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 33
      }
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 33
      }
    }, __jsx("a", {
      className: "btn btn-light",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 37
      }
    }, "Read More")))), __jsx("div", {
      className: "single-news-post",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "news-image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 33
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 37
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 41
      }
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/blog-img5.jpg */ "./images/blog-img5.jpg"),
      alt: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 45
      }
    })))), __jsx("div", {
      className: "news-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 33
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 37
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 41
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 45
      }
    }, "Styling White Jeans after Labor Day"))), __jsx("span", {
      className: "author",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 37
      }
    }, "By ", __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 65
      }
    }, "Admin")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 37
      }
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog-details",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 37
      }
    }, __jsx("a", {
      className: "btn btn-light",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 41
      }
    }, "Read More"))))) : ''));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (News);

/***/ }),

/***/ "./components/Common/Partner.js":
/*!**************************************!*\
  !*** ./components/Common/Partner.js ***!
  \**************************************/
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
var _jsxFileName = "C:\\Users\\corde\\Desktop\\New folder\\bikeshop\\bikeshop_frontend\\components\\Common\\Partner.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-owl-carousel3 */ "react-owl-carousel3", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-owl-carousel3 */ "react-owl-carousel3")],
    modules: ['react-owl-carousel3']
  }
});
const options = {
  loop: true,
  nav: false,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
  responsive: {
    0: {
      items: 3,
      margin: 30
    },
    576: {
      items: 4
    },
    768: {
      items: 5
    },
    1200: {
      items: 6
    }
  }
};

class Partner extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
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
    return __jsx("div", {
      className: "partner-area",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }
    }, this.state.display ? __jsx(OwlCarousel, _extends({
      className: "partner-slides owl-carousel owl-theme"
    }, options, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 43
      }
    }), __jsx("div", {
      className: "partner-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 25
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 29
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 33
      }
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/partner1.png */ "./images/partner1.png"),
      alt: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 37
      }
    })))), __jsx("div", {
      className: "partner-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 25
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 29
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 33
      }
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/partner2.png */ "./images/partner2.png"),
      alt: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 37
      }
    })))), __jsx("div", {
      className: "partner-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 25
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 29
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 33
      }
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/partner3.png */ "./images/partner3.png"),
      alt: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 37
      }
    })))), __jsx("div", {
      className: "partner-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 25
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 29
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 33
      }
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/partner4.png */ "./images/partner4.png"),
      alt: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 37
      }
    })))), __jsx("div", {
      className: "partner-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 25
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 29
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 33
      }
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/partner5.png */ "./images/partner5.png"),
      alt: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 37
      }
    })))), __jsx("div", {
      className: "partner-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 25
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 29
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 33
      }
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/partner6.png */ "./images/partner6.png"),
      alt: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 37
      }
    }))))) : ''));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Partner);

/***/ }),

/***/ "./components/Common/Subscribe.js":
/*!****************************************!*\
  !*** ./components/Common/Subscribe.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\corde\\Desktop\\New folder\\bikeshop\\bikeshop_frontend\\components\\Common\\Subscribe.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Subscribe extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "subscribe-area ptb-60",
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
      className: "row align-items-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "col-lg-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "newsletter-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 29
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 33
      }
    }, "Subscribe to our newsletter"), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 33
      }
    }, "A short sentence describing what someone will receive by subscribing"))), __jsx("div", {
      className: "col-lg-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 25
      }
    }, __jsx("form", {
      className: "newsletter-form",
      "data-toggle": "validator",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 29
      }
    }, __jsx("input", {
      type: "email",
      className: "form-control",
      placeholder: "Enter your email address",
      name: "EMAIL",
      required: true,
      autoComplete: "off",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 33
      }
    }), __jsx("button", {
      type: "submit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 33
      }
    }, "Subscribe"), __jsx("div", {
      id: "validator-newsletter",
      className: "form-result",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 33
      }
    }))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Subscribe);

/***/ }),

/***/ "./components/Common/Testimonials.js":
/*!*******************************************!*\
  !*** ./components/Common/Testimonials.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\corde\\Desktop\\New folder\\bikeshop\\bikeshop_frontend\\components\\Common\\Testimonials.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-owl-carousel3 */ "react-owl-carousel3", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-owl-carousel3 */ "react-owl-carousel3")],
    modules: ["react-owl-carousel3"]
  }
});
const options = {
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

class Testimonials extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
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
    }, this.state.display ? __jsx(OwlCarousel, _extends({
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

}

/* harmony default export */ __webpack_exports__["default"] = (Testimonials);

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
    }), "Location (Manila Branch): Kalayaan Avenue, Pitogo, Makati City, Philippines"), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 19
      }
    }, __jsx("i", {
      className: "fas fa-phone",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 21
      }
    }), __jsx("a", {
      href: "tel:(+123) 456-7898",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 21
      }
    }, " 0916 509 1083 (GLOBE)")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 19
      }
    }, __jsx("i", {
      className: "fas fa-phone",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 21
      }
    }), __jsx("a", {
      href: "tel:(+123) 456-7898",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 21
      }
    }, "0961 810 0128 (SMART)")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 19
      }
    }, __jsx("i", {
      className: "far fa-envelope",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 21
      }
    }), "Email Us:", " ", __jsx("a", {
      href: "mailto:support@We - Order.com",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 21
      }
    }, "i-Wheels26@gmail.com"))))))), __jsx("div", {
      className: "copyright-area",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "row align-items-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "col-lg-6 col-md-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 15
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 17
      }
    }, "Copyright @ 2023 i-WheelsPH")), __jsx("div", {
      className: "col-lg-6 col-md-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 15
      }
    }, __jsx("ul", {
      className: "payment-card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 17
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 19
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 21
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/visa.png */ "./images/visa.png"),
      alt: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 25
      }
    })))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 19
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 21
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/mastercard.png */ "./images/mastercard.png"),
      alt: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 25
      }
    })))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 19
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 21
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/mastercard2.png */ "./images/mastercard2.png"),
      alt: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 25
      }
    })))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 19
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 21
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/visa2.png */ "./images/visa2.png"),
      alt: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 25
      }
    })))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 19
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 21
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 23
      }
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/expresscard.png */ "./images/expresscard.png"),
      alt: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
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
  }, __jsx("li", {
    className: "nav-item megamenu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 23
    }
  }, "Road bike"))), __jsx("li", {
    className: "nav-item megamenu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 23
    }
  }, "Mountain bike"))), __jsx("li", {
    className: "nav-item megamenu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 23
    }
  }, "Fixie bike"))), __jsx("li", {
    className: "nav-item megamenu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 23
    }
  }, "E-bike"))), __jsx("li", {
    className: "nav-item p-relative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 23
    }
  }, "Budget ", __jsx("i", {
    className: "fas fa-chevron-down",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 32
    }
  }))), __jsx("ul", {
    className: "dropdown-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/budget?f=0&t=1500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 27
    }
  }, "BELOW \u20B11,500"))), __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/budget?f=1500&t=3000",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 27
    }
  }, "\u20B11,500 - \u20B13,000"))), __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/budget?f=3000&t=4500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 27
    }
  }, "\u20B13,000 - \u20B14,500"))), __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/budget?f=4500&t=1000000",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 27
    }
  }, "\u20B14,500 AND ABOVE")))))), __jsx("div", {
    className: "others-option",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "option-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
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
      lineNumber: 243,
      columnNumber: 21
    }
  }), __jsx("i", {
    onClick: handleSearchForm,
    className: `close-btn fas fa-times ${state.searchForm ? "active" : ""}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
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
      lineNumber: 258,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "search-box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 23
    }
  }, __jsx("form", {
    action: "/search",
    className: "search-form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
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
      lineNumber: 266,
      columnNumber: 27
    }
  }), __jsx("button", {
    className: "search-button",
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 27
    }
  }, __jsx("i", {
    className: "fas fa-search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 29
    }
  })))))), __jsx("div", {
    className: "option-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
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
      lineNumber: 282,
      columnNumber: 23
    }
  }, "Cart(", cartLength, ")", " ", __jsx("i", {
    className: "fas fa-shopping-bag",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 25
    }
  })))))))))), state.display ? __jsx(_Modal_Cart__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleCart,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
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

/***/ "./components/Modal/AddsModal.js":
/*!***************************************!*\
  !*** ./components/Modal/AddsModal.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\corde\\Desktop\\New folder\\bikeshop\\bikeshop_frontend\\components\\Modal\\AddsModal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class AddsModal extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_isMounted", false);

    _defineProperty(this, "state", {
      open: false
    });

    _defineProperty(this, "closeModal", e => {
      this._isMounted = true;
      e.preventDefault();
      this.setState({
        open: false
      });
    });
  }

  componentDidMount() {
    this.setState({
      open: true
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    let {
      open
    } = this.state;
    return __jsx("div", {
      className: `bts-popup ${open ? 'is-visible' : ''}`,
      role: "alert",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "bts-popup-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 21
      }
    }, "Free Shipping"), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 21
      }
    }, "Worldwide free shipping for all members. To become a member subscribe for our ", __jsx("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 102
      }
    }, "free offers / discount newsletter.")), __jsx("form", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 21
      }
    }, __jsx("input", {
      type: "email",
      className: "form-control",
      placeholder: "mail@name.com",
      name: "EMAIL",
      required: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 25
      }
    }), __jsx("button", {
      type: "submit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 25
      }
    }, __jsx("i", {
      className: "far fa-paper-plane",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 47
      }
    }))), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 25
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 29
      }
    }, __jsx("a", {
      className: "facebook",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 33
      }
    }, __jsx("i", {
      className: "fab fa-facebook-f",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 37
      }
    })))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 25
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 29
      }
    }, __jsx("a", {
      className: "twitter",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 33
      }
    }, __jsx("i", {
      className: "fab fa-twitter",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 37
      }
    })))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 25
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 29
      }
    }, __jsx("a", {
      className: "linkdein",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 33
      }
    }, __jsx("i", {
      className: "fab fa-linkedin-in",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 37
      }
    })))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 25
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 29
      }
    }, __jsx("a", {
      className: "instagram",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 33
      }
    }, __jsx("i", {
      className: "fab fa-instagram",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 37
      }
    }))))), __jsx("div", {
      className: "img-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/women.png */ "./images/women.png"),
      alt: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 25
      }
    }), __jsx("img", {
      src: __webpack_require__(/*! ../../images/women2.png */ "./images/women2.png"),
      alt: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 25
      }
    })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 21
      }
    }, __jsx("a", {
      onClick: this.closeModal,
      className: "bts-popup-close",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 25
      }
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AddsModal);

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

/***/ "./components/Modal/QuickView.js":
/*!***************************************!*\
  !*** ./components/Modal/QuickView.js ***!
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
/* harmony import */ var _store_actions_cartActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/cartActions */ "./store/actions/cartActions.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\corde\\Desktop\\New folder\\bikeshop\\bikeshop_frontend\\components\\Modal\\QuickView.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class QuickView extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      qty: 1,
      max: 10,
      min: 1
    });

    _defineProperty(this, "handleAddToCartFromView", () => {
      this.props.addQuantityWithNumber(this.props.idd, this.state.qty);
      react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].success('Added to the cart', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      setTimeout(() => {
        this.props.closeModal();
      }, 5000);
    });

    _defineProperty(this, "IncrementItem", () => {
      this.setState(prevState => {
        if (prevState.qty < 10) {
          return {
            qty: prevState.qty + 1
          };
        } else {
          return null;
        }
      });
    });

    _defineProperty(this, "DecreaseItem", () => {
      this.setState(prevState => {
        if (prevState.qty > 1) {
          return {
            qty: prevState.qty - 1
          };
        } else {
          return null;
        }
      });
    });
  }

  render() {
    const {
      closeModal
    } = this.props;
    return __jsx("div", {
      className: "modal fade productQuickView show",
      style: {
        paddingRight: '16px',
        display: 'block'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 13
      }
    }, __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_4__["ToastContainer"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "modal-dialog modal-dialog-centered",
      role: "document",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "modal-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 21
      }
    }, __jsx("button", {
      type: "button",
      onClick: closeModal,
      className: "close",
      "data-dismiss": "modal",
      "aria-label": "Close",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 25
      }
    }, __jsx("span", {
      "aria-hidden": "true",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 29
      }
    }, __jsx("i", {
      className: "fas fa-times",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 54
      }
    }))), __jsx("div", {
      className: "row align-items-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "col-lg-6 col-md-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "productQuickView-image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 33
      }
    }, __jsx("img", {
      src: this.props.image,
      alt: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 37
      }
    }))), __jsx("div", {
      className: "col-lg-6 col-md-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "product-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 33
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 37
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 41
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 45
      }
    }, "Belted chino trousers polo"))), __jsx("div", {
      className: "price",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 37
      }
    }, __jsx("span", {
      className: "new-price",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 41
      }
    }, "$", this.props.price)), __jsx("div", {
      className: "product-review",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "rating",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 41
      }
    }, __jsx("i", {
      className: "fas fa-star",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 45
      }
    }), __jsx("i", {
      className: "fas fa-star",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 45
      }
    }), __jsx("i", {
      className: "fas fa-star",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 45
      }
    }), __jsx("i", {
      className: "fas fa-star",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 45
      }
    }), __jsx("i", {
      className: "fas fa-star-half-alt",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 45
      }
    })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 41
      }
    }, __jsx("a", {
      className: "rating-count",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 45
      }
    }, "3 reviews"))), __jsx("ul", {
      className: "product-info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 37
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 41
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 45
      }
    }, "Vendor:"), " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 66
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 81
      }
    }, "Lereve"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 41
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 45
      }
    }, "Availability:"), " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 72
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 87
      }
    }, "In stock (7 items)"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 41
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 45
      }
    }, "Product Type:"), " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 72
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 87
      }
    }, "T-Shirt")))), __jsx("div", {
      className: "product-color-switch",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 37
      }
    }, __jsx("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 41
      }
    }, "Color:"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 41
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 45
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 49
      }
    }, __jsx("a", {
      title: "Black",
      className: "color-black",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 53
      }
    }))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 45
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 49
      }
    }, __jsx("a", {
      title: "White",
      className: "color-white",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 53
      }
    }))), __jsx("li", {
      className: "active",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 45
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 49
      }
    }, __jsx("a", {
      title: "Green",
      className: "color-green",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 53
      }
    }))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 45
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 49
      }
    }, __jsx("a", {
      title: "Yellow Green",
      className: "color-yellowgreen",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 53
      }
    }))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 45
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 49
      }
    }, __jsx("a", {
      title: "Teal",
      className: "color-teal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 53
      }
    }))))), __jsx("div", {
      className: "product-size-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 37
      }
    }, __jsx("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 41
      }
    }, "Size:"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 41
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 45
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 49
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 53
      }
    }, "XS"))), __jsx("li", {
      className: "active",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 45
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 49
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 53
      }
    }, "S"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 45
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 49
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 53
      }
    }, "M"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 45
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 49
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 53
      }
    }, "XL"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 45
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 49
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 53
      }
    }, "XXL"))))), __jsx("div", {
      className: "product-add-to-cart",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "input-counter",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 41
      }
    }, __jsx("span", {
      className: "minus-btn",
      onClick: this.DecreaseItem,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 45
      }
    }, __jsx("i", {
      className: "fas fa-minus",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 49
      }
    })), __jsx("input", {
      type: "text",
      value: this.state.qty,
      min: this.state.min,
      max: this.state.max,
      onChange: e => this.setState({
        qty: e.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 45
      }
    }), __jsx("span", {
      className: "plus-btn",
      onClick: this.IncrementItem,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 45
      }
    }, __jsx("i", {
      className: "fas fa-plus",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 49
      }
    }))), __jsx("button", {
      type: "submit",
      className: "btn btn-primary",
      onClick: this.handleAddToCartFromView,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 41
      }
    }, __jsx("i", {
      className: "fas fa-cart-plus",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 45
      }
    }), " Add to Cart")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 37
      }
    }, __jsx("a", {
      className: "view-full-info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 41
      }
    }, "View full info"))))))));
  }

}

const mapDispatchToProps = dispatch => {
  return {
    addQuantityWithNumber: (id, qty) => {
      dispatch(Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_3__["addQuantityWithNumber"])(id, qty));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps)(QuickView));

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

/***/ "./components/shop-style-one/Banner.js":
/*!*********************************************!*\
  !*** ./components/shop-style-one/Banner.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-visibility-sensor */ "react-visibility-sensor");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\corde\\Desktop\\New folder\\bikeshop\\bikeshop_frontend\\components\\shop-style-one\\Banner.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-owl-carousel3 */ "react-owl-carousel3", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-owl-carousel3 */ "react-owl-carousel3")],
    modules: ['react-owl-carousel3']
  }
});
const options = {
  loop: true,
  nav: true,
  dots: true,
  autoplayHoverPause: true,
  items: 1,
  smartSpeed: 750,
  autoplay: true,
  navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"]
};

class Banner extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
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
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }
    }, this.state.display ? __jsx(OwlCarousel, _extends({
      className: "home-slides owl-carousel owl-theme"
    }, options, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 35
      }
    }), __jsx("div", {
      className: "main-banner item-bg2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "d-table",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "d-table-cell",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 29
      }
    })))), __jsx("div", {
      className: "main-banner item-bg1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "d-table",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "d-table-cell",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 29
      }
    })))), __jsx("div", {
      className: "main-banner item-bg3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "d-table",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "d-table-cell",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 29
      }
    }))))) : '');
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./components/shop-style-one/BestSellers.js":
/*!**************************************************!*\
  !*** ./components/shop-style-one/BestSellers.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_actions_cartActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions/cartActions */ "./store/actions/cartActions.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-tooltip */ "react-tooltip");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Modal_QuickView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Modal/QuickView */ "./components/Modal/QuickView.js");
var _jsxFileName = "C:\\Users\\corde\\Desktop\\New folder\\bikeshop\\bikeshop_frontend\\components\\shop-style-one\\BestSellers.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class BestSeller extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      modalOpen: false,
      modalImage: '',
      price: 0,
      idd: null
    });

    _defineProperty(this, "handleAddToCart", id => {
      this.props.addToCart(id);
      react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].success('Added to the cart', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    });

    _defineProperty(this, "handleAddToCompare", id => {
      this.props.addToCompare(id);
      react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].success('Added to the compare', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    });

    _defineProperty(this, "compareButton", id => {
      let compare_exist = this.props.CompareProducts.filter(item => item.id === id);

      if (compare_exist.length > 0) {
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "#",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 17
          }
        }, __jsx("a", {
          "data-tip": "Already Added",
          "data-place": "left",
          onClick: e => {
            e.preventDefault();
          },
          disabled: true,
          className: "disabled",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 21
          }
        }, __jsx("i", {
          className: "fas fa-sync",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }
        })));
      } else {
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "#",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 17
          }
        }, __jsx("a", {
          "data-tip": "Add to Compare",
          "data-place": "left",
          onClick: e => {
            e.preventDefault();
            this.handleAddToCompare(id);
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 21
          }
        }, __jsx("i", {
          className: "fas fa-sync",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 25
          }
        })));
      }
    });

    _defineProperty(this, "openModal", () => {
      this.setState({
        modalOpen: true
      });
    });

    _defineProperty(this, "closeModal", () => {
      this.setState({
        modalOpen: false
      });
    });

    _defineProperty(this, "handleModalData", (image, price, id) => {
      this.setState({
        modalImage: image,
        price: price,
        idd: id
      });
    });
  }

  render() {
    let {
      products
    } = this.props;
    const {
      modalOpen
    } = this.state;
    return __jsx("section", {
      className: "best-sellers-area pb-60",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 13
      }
    }, __jsx(react_tooltip__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }
    }), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_5__["ToastContainer"], {
      transition: react_toastify__WEBPACK_IMPORTED_MODULE_5__["Slide"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "section-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 21
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 25
      }
    }, __jsx("span", {
      className: "dot",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 29
      }
    }), " Best Sellers")), __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 21
      }
    }, products.map((data, idx) => __jsx("div", {
      className: "col-lg-3 col-sm-6 col-6",
      key: idx,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "single-product-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "product-image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 37
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/product/product-details",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 41
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 45
      }
    }, __jsx("img", {
      src: data.image,
      alt: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 49
      }
    }), __jsx("img", {
      src: data.imageHover,
      alt: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 49
      }
    }))), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 41
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 45
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 49
      }
    }, __jsx("a", {
      "data-tip": "Quick View",
      "data-place": "left",
      onClick: e => {
        e.preventDefault();
        this.openModal();
        this.handleModalData(data.quickView, data.price, data.id);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 53
      }
    }, __jsx("i", {
      className: "far fa-eye",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 57
      }
    })))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 45
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 49
      }
    }, __jsx("a", {
      "data-tip": "Add to Wishlist",
      "data-place": "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 53
      }
    }, __jsx("i", {
      className: "far fa-heart",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 57
      }
    })))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 45
      }
    }, this.compareButton(data.id)))), __jsx("div", {
      className: "product-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 37
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 41
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/product/product-details",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 45
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 49
      }
    }, data.title))), __jsx("div", {
      className: "product-price",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 41
      }
    }, __jsx("span", {
      className: "new-price",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 45
      }
    }, "$", data.price)), __jsx("div", {
      className: "rating",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 41
      }
    }, __jsx("i", {
      className: "fas fa-star",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 45
      }
    }), __jsx("i", {
      className: "fas fa-star",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 45
      }
    }), __jsx("i", {
      className: "fas fa-star",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 45
      }
    }), __jsx("i", {
      className: "fas fa-star",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 45
      }
    }), __jsx("i", {
      className: "far fa-star",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 45
      }
    })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 41
      }
    }, __jsx("a", {
      className: "btn btn-light",
      onClick: e => {
        e.preventDefault();
        this.handleAddToCart(data.id);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 45
      }
    }, "Add to Cart")))))))), modalOpen ? __jsx(_Modal_QuickView__WEBPACK_IMPORTED_MODULE_6__["default"], {
      closeModal: this.closeModal,
      idd: this.state.idd,
      image: this.state.modalImage,
      price: this.state.price,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 31
      }
    }) : '');
  }

}

const mapStateToProps = state => {
  return {
    products: state.products,
    CompareProducts: state.addedItemsToCompare
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_2__["addToCart"])(id));
    },
    addToCompare: id => {
      dispatch(Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_2__["addToCompare"])(id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(BestSeller));

/***/ }),

/***/ "./components/shop-style-one/CategoryProducts.js":
/*!*******************************************************!*\
  !*** ./components/shop-style-one/CategoryProducts.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\corde\\Desktop\\New folder\\bikeshop\\bikeshop_frontend\\components\\shop-style-one\\CategoryProducts.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class CategoryProducts extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
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

}

/* harmony default export */ __webpack_exports__["default"] = (CategoryProducts);

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

/***/ "./components/shop-style-one/OfferArea.js":
/*!************************************************!*\
  !*** ./components/shop-style-one/OfferArea.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\corde\\Desktop\\New folder\\bikeshop\\bikeshop_frontend\\components\\shop-style-one\\OfferArea.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class OfferArea extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "offer-area ptb-60",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "container",
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
      className: "col-lg-4 col-md-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "offer-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/cake.jpg */ "./images/cake.jpg"),
      alt: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 33
      }
    }), __jsx("div", {
      className: "category",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 33
      }
    }, __jsx("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 37
      }
    }, "CAKE")), __jsx("div", {
      className: "box-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 33
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 37
      }
    }, "CAKE"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 37
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 41
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 45
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 49
      }
    }, "Birthday"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 41
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 45
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 49
      }
    }, "Anniversary"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 41
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 45
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 49
      }
    }, "Monthsary"))))))), __jsx("div", {
      className: "col-lg-4 col-md-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "offer-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/flowers.jpg */ "./images/flowers.jpg"),
      alt: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 33
      }
    }), __jsx("div", {
      className: "category",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 33
      }
    }, __jsx("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 37
      }
    }, "Flowers")), __jsx("div", {
      className: "box-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 33
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 37
      }
    }, "Flowers"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 37
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 41
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 45
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 49
      }
    }, "Woman Accessories"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 41
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 45
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 49
      }
    }, "Man Accessories"))), __jsx("li", {
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
    }, "Sunglasses"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 41
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 45
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 49
      }
    }, "Belts"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 41
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 45
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 49
      }
    }, "Hats"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 41
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 45
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 49
      }
    }, "Scrafs"))))))), __jsx("div", {
      className: "col-lg-4 col-md-6 offset-lg-0 offset-md-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "offer-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/bundle.jpg */ "./images/bundle.jpg"),
      alt: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 33
      }
    }), __jsx("div", {
      className: "category",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 33
      }
    }, __jsx("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 37
      }
    }, "Bundle")), __jsx("div", {
      className: "box-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 33
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 37
      }
    }, "Bundle"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 37
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 41
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 45
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 49
      }
    }, "Woman Accessories"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 41
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 45
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 49
      }
    }, "Man Accessories"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 41
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 45
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 49
      }
    }, "Sunglasses"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 41
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 45
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 49
      }
    }, "Belts"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 41
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 45
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 49
      }
    }, "Hats"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 41
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 45
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 49
      }
    }, "Scrafs"))))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (OfferArea);

/***/ }),

/***/ "./components/shop-style-one/Products.js":
/*!***********************************************!*\
  !*** ./components/shop-style-one/Products.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-lazyload */ "react-lazyload");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions_cartActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/cartActions */ "./store/actions/cartActions.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-tooltip */ "react-tooltip");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Modal_QuickView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Modal/QuickView */ "./components/Modal/QuickView.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _helpers_function__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../helpers/function */ "./helpers/function.js");
var _jsxFileName = "C:\\Users\\corde\\Desktop\\New folder\\bikeshop\\bikeshop_frontend\\components\\shop-style-one\\Products.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function Products(props) {
  const {
    0: state,
    1: setstate
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    modalOpen: false,
    modalImage: "",
    price: 0,
    idd: null
  });
  const {
    0: collections,
    1: setcollections
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  let host = "http://127.0.0.1:8080";
  let {
    products
  } = props;
  const {
    modalOpen
  } = state;

  const fetchCollection = async () => {
    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(`${host}/api/user/collection`);

      if (res.data) {
        setcollections(res.data.collections);
      }
    } catch (err) {
      if (err.response.data) {
        return react_toastify__WEBPACK_IMPORTED_MODULE_6__["toast"].error(err.response.data.msg);
      }
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchCollection();
  }, []);

  const openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs_item");

    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("fadeInUp");
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByTagName("li");

    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    document.getElementById(tabNmae).style.display = "block";
    document.getElementById(tabNmae).className += " fadeInUp animated";
    evt.currentTarget.className += "current";
  };

  const handleAddToCart = product => {
    props.addToCart(product);
    react_toastify__WEBPACK_IMPORTED_MODULE_6__["toast"].success("Added to the cart", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  };

  const handleAddToCompare = id => {
    props.addToCompare(id);
    react_toastify__WEBPACK_IMPORTED_MODULE_6__["toast"].success("Added to the compare", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  };

  const compareButton = id => {
    let compare_exist = props.CompareProducts.filter(item => item.id === id);

    if (compare_exist.length > 0) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 9
        }
      }, __jsx("a", {
        "data-tip": "Already Added",
        "data-place": "left",
        onClick: e => {
          e.preventDefault();
        },
        disabled: true,
        className: "disabled",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }
      }, __jsx("i", {
        className: "fas fa-sync",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 13
        }
      })));
    } else {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 9
        }
      }, __jsx("a", {
        "data-tip": "Add to Compare",
        "data-place": "left",
        onClick: e => {
          e.preventDefault();
          handleAddToCompare(id);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }
      }, __jsx("i", {
        className: "fas fa-sync",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 13
        }
      })));
    }
  };

  const openModal = () => {
    setstate(_objectSpread(_objectSpread({}, state), {}, {
      modalOpen: true
    }));
  };

  const closeModal = () => {
    setstate(_objectSpread(_objectSpread({}, state), {}, {
      modalOpen: false
    }));
  };

  const handleModalData = (image, price, id) => {
    setstate(_objectSpread(_objectSpread({}, state), {}, {
      modalImage: image,
      price: price,
      idd: id
    }));
  };

  return __jsx("section", {
    className: "all-products-area pb-60",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 5
    }
  }, __jsx(react_tooltip__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }
  }), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_6__["ToastContainer"], {
    transition: react_toastify__WEBPACK_IMPORTED_MODULE_6__["Slide"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }
  }, collections.length ? collections.map((collection, i) => __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_1___default.a, {
    height: 200,
    offset: 100,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 15
    }
  }, __jsx("div", {
    key: i,
    className: "tab products-category-tab",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "col-lg-12 col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 21
    }
  }, __jsx("ul", {
    className: "tabs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 23
    }
  }, __jsx("h2", {
    className: "current",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "tabs-nav-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 27
    }
  }, __jsx("span", {
    className: "dot",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 29
    }
  }), " ", collection.title)))), __jsx("div", {
    className: "col-lg-12 col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "tab_content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 23
    }
  }, __jsx("div", {
    id: "tab1",
    className: "tabs_item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 27
    }
  }, collection.products.map((data, idx) => __jsx("div", {
    className: "col-lg-3 col-sm-6 col-6",
    key: idx,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 31
    }
  }, __jsx("div", {
    className: "single-product-box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "product-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 35
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: `/product/${data.slug}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 37
    }
  }, __jsx("img", {
    style: {
      cursor: "pointer"
    },
    src: `${host}/products/${data.product_images[0]["file_name"]}`,
    alt: "image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 39
    }
  })), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 37
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 39
    }
  }, compareButton(data.id)))), __jsx("div", {
    className: "product-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 35
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 37
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: `/product/${data.slug}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 39
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 41
    }
  }, data.name))), __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "new-price slashed",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 39
    }
  }, "\u20B1", Object(_helpers_function__WEBPACK_IMPORTED_MODULE_9__["formatNumber"])(data.regular_price))), __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "new-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 39
    }
  }, "\u20B1", Object(_helpers_function__WEBPACK_IMPORTED_MODULE_9__["formatNumber"])(data.discount_price))), data.campaign_price ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "new-price",
    style: {
      fontSize: "0.9rem",
      color: "#ff5558"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 43
    }
  }, "Valentine's Price:")), __jsx("div", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "new-price",
    style: {
      fontSize: "1rem",
      color: "#ff5558",
      fontWeight: "bold"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 43
    }
  }, "\u20B1", Object(_helpers_function__WEBPACK_IMPORTED_MODULE_9__["formatNumber"])(data.campaign_price)))) : null, __jsx("div", {
    className: "rating",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 37
    }
  }, __jsx("i", {
    className: "fas fa-star",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 39
    }
  }), __jsx("i", {
    className: "fas fa-star",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 39
    }
  }), __jsx("i", {
    className: "fas fa-star",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 39
    }
  }), __jsx("i", {
    className: "fas fa-star",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 39
    }
  }), __jsx("i", {
    className: "fas fa-star",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 39
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: `/product/${data.slug}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 37
    }
  }, __jsx("a", {
    className: "btn btn-light",
    onClick: e => {// e.preventDefault();
      // handleAddToCart(data);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 39
    }
  }, "Add to Cart")))))))))))))) : null), modalOpen ? __jsx(_Modal_QuickView__WEBPACK_IMPORTED_MODULE_7__["default"], {
    closeModal: closeModal,
    idd: state.idd,
    image: state.modalImage,
    price: state.price,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 9
    }
  }) : "");
}

const mapStateToProps = state => {
  return {
    products: state.products,
    CompareProducts: state.addedItemsToCompare
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_3__["addToCart"])(id));
    },
    addToCompare: id => {
      dispatch(Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_3__["addToCompare"])(id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Products));

/***/ }),

/***/ "./components/shop-style-one/TrendingProducts.js":
/*!*******************************************************!*\
  !*** ./components/shop-style-one/TrendingProducts.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_actions_cartActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions/cartActions */ "./store/actions/cartActions.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-tooltip */ "react-tooltip");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Modal_QuickView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Modal/QuickView */ "./components/Modal/QuickView.js");
var _jsxFileName = "C:\\Users\\corde\\Desktop\\New folder\\bikeshop\\bikeshop_frontend\\components\\shop-style-one\\TrendingProducts.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class TrendingProducts extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      modalOpen: false,
      modalImage: '',
      price: 0,
      idd: null
    });

    _defineProperty(this, "handleAddToCart", id => {
      this.props.addToCart(id);
      react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].success('Added to the cart', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    });

    _defineProperty(this, "handleAddToCompare", id => {
      this.props.addToCompare(id);
      react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].success('Added to the compare', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    });

    _defineProperty(this, "compareButton", id => {
      let compare_exist = this.props.CompareProducts.filter(item => item.id === id);

      if (compare_exist.length > 0) {
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "#",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 17
          }
        }, __jsx("a", {
          "data-tip": "Already Added",
          "data-place": "left",
          onClick: e => {
            e.preventDefault();
          },
          disabled: true,
          className: "disabled",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 21
          }
        }, __jsx("i", {
          className: "fas fa-sync",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }
        })));
      } else {
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "#",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 17
          }
        }, __jsx("a", {
          "data-tip": "Add to Compare",
          "data-place": "left",
          onClick: e => {
            e.preventDefault();
            this.handleAddToCompare(id);
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 21
          }
        }, __jsx("i", {
          className: "fas fa-sync",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 25
          }
        })));
      }
    });

    _defineProperty(this, "openModal", () => {
      this.setState({
        modalOpen: true
      });
    });

    _defineProperty(this, "closeModal", () => {
      this.setState({
        modalOpen: false
      });
    });

    _defineProperty(this, "handleModalData", (image, price, id) => {
      this.setState({
        modalImage: image,
        price: price,
        idd: id
      });
    });
  }

  render() {
    let {
      products
    } = this.props;
    const {
      modalOpen
    } = this.state;
    return __jsx("section", {
      className: "trending-products-area pb-60",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 13
      }
    }, __jsx(react_tooltip__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }
    }), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_5__["ToastContainer"], {
      transition: react_toastify__WEBPACK_IMPORTED_MODULE_5__["Slide"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "section-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 21
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 25
      }
    }, __jsx("span", {
      className: "dot",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 29
      }
    }), " Trending Products")), __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 21
      }
    }, products.map((data, idx) => __jsx("div", {
      className: "col-lg-3 col-sm-6 col-6",
      key: idx,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "single-product-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "product-image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 37
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/product/product-details",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 41
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 45
      }
    }, __jsx("img", {
      src: data.image,
      alt: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 49
      }
    }), __jsx("img", {
      src: data.imageHover,
      alt: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 49
      }
    }))), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 41
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 45
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 49
      }
    }, __jsx("a", {
      "data-tip": "Quick View",
      "data-place": "left",
      onClick: e => {
        e.preventDefault();
        this.openModal();
        this.handleModalData(data.quickView, data.price, data.id);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 53
      }
    }, __jsx("i", {
      className: "far fa-eye",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 57
      }
    })))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 45
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 49
      }
    }, __jsx("a", {
      "data-tip": "Add to Wishlist",
      "data-place": "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 53
      }
    }, __jsx("i", {
      className: "far fa-heart",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 57
      }
    })))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 45
      }
    }, this.compareButton(data.id)))), __jsx("div", {
      className: "product-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 37
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 41
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/product/product-details",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 45
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 49
      }
    }, data.title))), __jsx("div", {
      className: "product-price",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 41
      }
    }, __jsx("span", {
      className: "new-price",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 45
      }
    }, "$", data.price)), __jsx("div", {
      className: "rating",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 41
      }
    }, __jsx("i", {
      className: "fas fa-star",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 45
      }
    }), __jsx("i", {
      className: "fas fa-star",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 45
      }
    }), __jsx("i", {
      className: "fas fa-star",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 45
      }
    }), __jsx("i", {
      className: "fas fa-star",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 45
      }
    }), __jsx("i", {
      className: "far fa-star",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 45
      }
    })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 41
      }
    }, __jsx("a", {
      className: "btn btn-light",
      onClick: e => {
        e.preventDefault();
        this.handleAddToCart(data.id);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 45
      }
    }, "Add to Cart")))))))), modalOpen ? __jsx(_Modal_QuickView__WEBPACK_IMPORTED_MODULE_6__["default"], {
      closeModal: this.closeModal,
      idd: this.state.idd,
      image: this.state.modalImage,
      price: this.state.price,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 31
      }
    }) : '');
  }

}

const mapStateToProps = state => {
  return {
    products: state.products,
    CompareProducts: state.addedItemsToCompare
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_2__["addToCart"])(id));
    },
    addToCompare: id => {
      dispatch(Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_2__["addToCompare"])(id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(TrendingProducts));

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

/***/ "./images/blog-img1.jpg":
/*!******************************!*\
  !*** ./images/blog-img1.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./images/blog-img2.jpg":
/*!******************************!*\
  !*** ./images/blog-img2.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/wAALCAEsAWgBAREA/8QAHAABAQEBAAMBAQAAAAAAAAAAAAgHBgMFCQQC/8QAPBAAAQMDAwMCBAQDBwMFAAAAAAECAwQFBgcIERITITFBCSJRYRQyQnEVUoEWIyQzcqGxFyViU4KRkrL/2gAIAQEAAD8AqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9DnOdYppti9bmWa3mG2Wm3s6pp5OV8qvDWtanKucq8IjURVVfQkms+JRS3Cuqf7AaDZJkNspXf3lW+r7L2t/mcyOGVG/Xy82DQDeBpfr/AFTrBafxdkySONZVtNw6eqVrfLnQyNXpkRE8qnhyIir08JyboTLrHvz0z0zyWXB8XslxzbIKeVYJ4La9GU8UyLwsXd4crnp7oxjkRUVFVFRUOWxL4j+IT5HDj2qmmV8wZZ3NalTLMtUyJFXw6VqxxyNb92td+xXtHWUlwpIK+gqYqmmqY2zQzRPR7JI3Jy1zXJ4VFRUVFT1RTEtwm73TTb7PFY7pFVXzI540lZaaBWo6Ji/ldNI7xGi+ycOcvhenjyZDafiU2mlu1LS6j6KZDi9vq1Tt1jar8Q7p/n7b4olc1OeV6VVePRF9CvsayWw5jYKHKMYukFxtVzhbUUtVCvLJGL7/AFRfZUXhUVFRURUVD2YBmOue4jTjb9Y4brm9dNJV1vUlBbKNqSVVUrfVWtVURrU5Tl7lRE548qqIs5M+JY9jGXit2+ZBDjz3IiXNtx6kVvPHKIsCMVft3P6lPaOa36e664yuT4BdXTshckVZSVDO3U0cipyjJWcrxynPDkVWrwvCrwvHV5HkdjxGxV2TZLdILda7bC6oqqqd3DImJ6qv1+iInlVVETlVJBvPxKLPU3WqptNtFshymgo1XuVjqn8MvT/P22RSq1q8KqdStXj1RPQ1rb1vB013BVMlhtsNVYskhjWZ1qrnNVZmN/M6GRviRE90VGuTyvTwnJuxKuqvxBNP8KyubCcAxK5Z7dqWV0Ey0MyQ03cb+ZkciNe6RU4XlWs6fo5fb+NK/iD4BmeVw4VqFiFywK6VMrYIX1s6TUySu4RrJHqyN0SqqpwrmdP1chVoAAAAAAAAAABNW83bxqnuGosbs2FZHZaC0WmaWpraWumlY6eZ3S1j29DHIqsZ3OEVU/O7ybtgmDY1pviduwzEbZFQ2y2QthijY1EV6onl71T8z3L5c5fKqqqpAe7CgteH72sFuOmMMVNkNbLa6uvgo0ROutfVuYnW1vo6SLo6k/Ui8r+ZVWtd32p1dpPoFkmR2epdT3arYy12+Vq8Ojmnd0K9q+zmR9x6fdqGbfD80NsWGaU0Wqdxt0U2TZY19Q2qlYjpKWi6lbHHGq/l60b3HKnr1NRfyoajud0Atu4PTifGWpQ0l+ppY57Tc6iNV/CvR6dxqq1Fd0PZ1IrU8c9K8ctQ/Volht90H0PpcXzrI6e8Li1NVSrV07HNalI1XStZ8/n5G8tT7IiexJOw/F2636z5zr/qBSx3GuoKiOWjbOnWyOsqHPd1tRf/AEo40Yz+VHoqeWoqW3qvphi+r+C3PBcroIp6avhckMrmIr6Wfhe3PGvq17V8+PVOUXlFVFkj4aWdXamTNdFb5K5XWOdLjRxqvPaVXrFUsT6N60iVE9OXOX3KVxrc5ofl2eO0wsmbdWUNmmp1ttTbKykk7sXPcj5miY3qTpd8vPK8LxyadLLFTxPnnlZHHG1Xve9yI1rUTlVVV9ERDN9OdyGjGreQ1WLadZg+9XGiidPO2G2VjIo42uRquWZ8TY+FVURPm+b25MZznaLmWp+6mk1a1CuljuuC0ro0htPdlWdkMMS9qF0bo+hWOn+d6dSoqOcnHkqmot1vq7fJaaqgp5qGWJYH00kTXROiVOFYrFThW8eOOOOD55bN20+P71M8xrTuRZMSRt2iVsT1fC2liqW9hyL6KjXK1rXe6OXz5U7H4mme3ZLfhukFllf/AN8nfca2Ji8LMjHNjp2L9UV7pHcL7sYvsVlpFphjuj+n9owTG6KGGKgp2JUzMYiOqqnpTuTvX1c5zuV8+icInCIiJFm/PEIdFNWcH3B6eUsdtuNZWPfXJA3ojlrIFY9sjkTxzKxz2v8AZyM5XlXKq0Vuq1gfiu12653jFU+CpyShpaa2SovD2JWI3l6Kno5IXSORU9FRDkPh5aTWTEdFKTUOS3RLfsukmmkqnsRZY6Rkro4oWr7NXtrIvHqr0556U483xBNIbBmmilw1AZbYW5DiPaqYKtjESSSlWRrJYXu92Ij1kRF9FZ446nc9nsv1JrdTtveOXW7VDqi5WpJLNWSuXlz3QLwxyr7uWJYlVV8qqqbiAAAAAAAAAAAYJuQxbdXlV1t9HoDmlrx20NoX/wARfUvjZLNUK9elGOWGR7eGonlqtT5vsR3pHdIdrm4RavdNg1zq8huMndpcmqK9atlMknLFqmt4VJ+eVR0nWr2JyiN6uUN6+JvcO5objMdLM19PV5NBL1sdy17UpKlW8Knqi9XP/wAGXaQ6c67busEstBUZ1NgmmWL22lsVHT0jXvdcpqeFkcsqxtczucuRVVz3dLVXpa1VR6n4tT9uOtuzSij1a0k1TrbnZqGaP+IxtidAsSOcjWrNB1vjniVyoiqvCork8fqSn6bWmm1u2bZhqPQ07aSufiV6grqZiqqU9ZFSSo9rVX9K/K9vv0vbz55My+F5FGmluXzoidb7+1jl+yU0ap/+lLRPnlsv/wALvd1SpafxD2b8zhPTpS6Qcf8ACHab8tvlzhng3L6XMlpL/YHxVF5SkTiRzIlRY61vH64+Go//AMER3joXnPdXd6GSa76WYtpDptaqpuYZgxtFkcdMxW/P1dH4eFf5ZlTrcvPDY16VVeXcV7tj2/WXb3p1BjsHZqb7cOmqvdexP8+o48Maq+e3Giq1qf6ncIrlNeI03CaWb58+uuUR4jnVDDh89RIy3WWkro6SqlpeOEY6RsTVXq8qrXy/q4Xx4OX2BaiacYLkFw0QvuC1WL6g1Ur4qmurZe464Sw9SrTqitasCtTqVsactdwq9Su459Nvk/xO8fS2hn8wLRWblF9PmulQjv8AZEPoYRr8UGKNdIMWmVE62ZK1rf2WlnVf+EON3XVVQ7YLo71OXmZcfY9fq1LVOqc//VFKp2sRRw7c9O2RIiItgpXrx9XM5X/dVPNubijm286jMkRFRMar3Jz9Uhcqf7ohhnww5ZHaG5DE5VVjMrqFb/Wkpef+ELAAAAAAAAAAABhGv27XF9vuX2HE8jxW6Vjb5EyoSvikYyngjWVY38qvLlcxERyoiejm+fJuscjJWNlie17HojmuavKKi+iopEXxSH2L+xGERzdr+NLdah1N6daUvZTvce/HX2P68H8bn8Qvt42CYBXV8Urq3GqSw19Wjk+dsa0q06o735RZ2c/sqqbPsYvNou+2HD4rS+Pqtzaqiq42+sdQ2okc5HfRXI9r/wBnop1G6e4Wq2bdNRKi8PjbBJYKunZ18cLPKztwp+/dezj78E+bBcOuOQ7Uc6sNQisgye43OjpevwjkkoYoXPT7dXKf+xT0/wAL7IGUtNqBp/X8wXClqqa4Np3+HqnD4pfH/i5saL/rQuevrqO10NRc7hUMp6WkifPPK9eGxxtRXOcq+yIiKpAfw56Gqy3WfU3VhYHtp5oXwI5yfrrKvvq1PqqJB5+nKfUprddr7ZtBdMaq4yspqy/XlklDZrfM1HtmlVvD5JGr6xMRUV3sqq1vjq5Pnpp9adUdqd4093HXzFoprJkKy9MLo060p5EVHMXlOIZJIVWSJUXyn26mn1dxHLLBnWM23MMXuEdbartTtqaWdn6mO9lT2ci8orV8oqKi+UMdxvdximQbg63b5LjFyttzpJ6ulZXVcsaRzywtV6IxqKq8PY1zmqqovHHjybyfOPccylqviFYbFh/T/E23HH/4gsPqlQkzVcr+PpT9rnn9KeT3fxI7dV4xqlppqpFA58MMS0yuanpJS1CTtaq+yqkzuP8ASv0L4ttxorxbqW722oZUUddAypp5WLy2SN7Uc1yfZUVFIf8AihZHDLaMDwGkd3q+rrai4ugZ5ejWtbFH49fmdI9E+vQp2W8XTOsotlVqx+KLuTYLBZnyNZ58QRJSvVOPZElVV+yKpoWyPKaTKds+HPp5mvmtcEtrqWIvKxyQyua1q/dY+279nIebenlNJim2nNJ6mZrJLlSMtVOxV8ySTyNYrU+qoxXu/ZqnJfDsxapx3bfSXCqidGuQ3esujEcnCqz5IGr/AF/D8p9lRfcpwAAAAAAAAAAGM7odt9l3G4TFZ5K1ltv1pe+otFwczqbG9yIj4pETysb+lvPHlFa1yc8dKzpid5+InolZodPaXTi1Zdb7exKa311R01fbhb4a1skc8bulE9Elb1InCeEREP1YNtH1r1u1Lp9WN2tyhZTUisWGwxyxvdKxq9TIFbEqxwwcryqI5Xu+bnhVVxamRY3ZMrx64YrfrfHV2q50slHVU7k4a+J7VarfHp4XwqeU8KhDlHoDux2n5Xcrht3lpsxxO5Sdx1uq3sV3Cfl70LnxqsiJ47kLkVyJ5RE+VPBlGmm9rdrXUFh1VtVuwLEKads08UaJHGrk8dfZ7sk00iIq9KPc1iKvqhbenmBY9phhVowLFaZYbZZqdIIUcvL3ryqvkeqer3uVznL9XKSdrftU1bwzVyXcDtcroo7pWSvqbhZ1ljjV0r/MysSTiOSKReXOjcqKjl5bz46eazNfiEbhLQum96wG1YdZq3iG51cPFIyaL3SV75pZHMX3bE3ynhUVFVCq9AdErHt800p8KsjnXCr6nVlxq0YjH1tW5qI5yIq8NThrWtRV8I1OV55VZnZtu1w3B7km6i7hsRSxYXbF66G1vuVLVI+njdzDScQSv46lXrlcqIjvnROOW8VtqnphjOren9007yWmb+AuMHbjkY1Oullb5jlj+jmORFT2XhUXwqoTjs0053KaE3+66bZ5h/4rBKmeaWhusN0pJGUs7VX+8ZF3e6kUyIny9HU13SqonL1P27rdoWQai5XSa0aMXiO05zQLE+aJ0vZSsfDx2pWSp+SZqNa35vlciN5VvT83GLqb8Sqa3f2TbpHaI7h09lbz+GgSXn06+taj8Nz789HT9jttq+z28ab5RU6yayXqO951WrLJE1sqzNo3yovdlfKv+ZM5HOaqp8rUV3Cu55TZdwGiNg1905rMFvc60k/W2rt1c1nU6kqmIqNfx+pqo5zXN8ctcvCovCpJ+Gx/EF262n/p1YsEtWZ2SjVYrbUyqlWyGPleEic2aKRrPo2Vvj0RETwdHoptW1fzrV2HX/dNVxOuFFKyot9mSWORUkjXmHrSNVjiijX5mxtVVV3l3Hnqsa/2K1ZPY7hjl9o2VduulNJR1cD/AMskUjVa9q/uiqQpbtDd220nLLpU6AQ0uaYhdJe7+CqXMf6fk70KvjekrU8dcLuHIic8eGp/N00T3dbt8qtUmvVLS4Vh9sl7q0dOrGfZ6xQI+R7pVT5UfK7hqKvHPlq3Zj1gtGK2G34zYaJlJbbVTR0dJAz0jijajWt+/hE8+57AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/9k="

/***/ }),

/***/ "./images/blog-img3.jpg":
/*!******************************!*\
  !*** ./images/blog-img3.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./images/blog-img4.jpg":
/*!******************************!*\
  !*** ./images/blog-img4.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./images/blog-img5.jpg":
/*!******************************!*\
  !*** ./images/blog-img5.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./images/bundle.jpg":
/*!***************************!*\
  !*** ./images/bundle.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bundle-4a018530d94f53fb234c55750f622337.jpg";

/***/ }),

/***/ "./images/cake.jpg":
/*!*************************!*\
  !*** ./images/cake.jpg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/cake-2d469af466e917b0afaca943ba9471be.jpg";

/***/ }),

/***/ "./images/expresscard.png":
/*!********************************!*\
  !*** ./images/expresscard.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAkCAYAAADPRbkKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEVEQ0JEOTRBNjA3MTFFOUJEMjJGMjRCRkRBQTU4NTgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEVEQ0JEOTNBNjA3MTFFOUJEMjJGMjRCRkRBQTU4NTgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWViNWRhYzgtNGM1OS1hMjQ0LTlkYTctY2Q0MDIzYTNlMjIzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM5NGYwZGMzLWY2NzYtOTA0Ny05MjM2LWExYjZlZDc0ZjRmYSIv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"

/***/ }),

/***/ "./images/flowers.jpg":
/*!****************************!*\
  !*** ./images/flowers.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/flowers-d165803735fb1681d417ff73fec3f12e.jpg";

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

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/wAALCAFAAQYBAREA/8QAGgABAQEBAQEBAAAAAAAAAAAAAAcIBgUDBP/EADUQAAEDBAEDAgQEBAcBAAAAAAABAgMEBQYRBwgSIRMxFCJBUQkVMkIjUmGBGCQzWGKU1Bb/2gAIAQEAAD8A1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACV879RWF8DUFubeqSvvF8vciw2my22NJKqrftE3r9re5zU35VVXTUcu0JXWda2XYYtLdeYOmXMMPxyqlbEt29f4pIVd+n1GLFH2L/xV3d4XSKvg0pb8ox26Y1BmVBeaWWx1FGlwjr/AFESFaZWd/qq5fZvb5VV1r6mcV61b7ltZXzcH9POV59YrbK6Ca8RzLSQyub7+k30nq/xpUaunaVNtTZT+BeofDufbRcJ7HR11pvNkmSnu1muDEbU0ci7RN6/U1Va5EXwu2qioi+DluVOrW1YZnjuKePOP75yJmMEaS1dvtXyRUjdIupZe12lRHNVdNVE2m1RfB5uGdY8E+eW/jbmXiq/cZ3q8uay2OuMqT0lU9V7WtSbsZpVcqNRUardrpVRdb0cDmuReRMU4qw64Z1mlx+DtVtYjpHI3ufI5V0yNjf3Pc5URE/r50iKqZ3b1sZ1JZ1zqLpVzV2Doz4j86+JT1fhvf1/Q9LXZrz3ep26892vJoXjTknEuWsNoM6wq4LV2y4NXt729kkT2rp8cjf2vavhU/uiqioqxfLOshjs3ufH/CvEmQcmXKxvWK5z2+VKejp5EVWq31ux+9ORybVEaqovarj1uJOrSzZ7nTuKc7wW9cfZqrFlp7XdvmZVNRqu1FJ2tVV7Uc5NtRFRPlVfKHY8589YZwJjdPe8oZVVtbcpvhbXaqJqPqa6bxtrEX2am29zl9tonlVRFkjetm94rcba/mzp7yvAbBdZmwQXmeVamKNzvKeqz0mKzxtVaiq7SLpq6NQU1TT1lPFV0k8c0E7GyRSRuRzXsVNo5FTwqKi7RT6AAAAAAAAmd74DxHIObrJzvc7jdJr1YKFaCjonvidRMaqSoj0YrO9Hosz133++l14OX60c/wARwnp+ymhyV8EtTkdDLabXRO0sk9TI3TXtb9otpIrvp2p9VRFhvIjMt4e/Des+LXpZ6S73WOGimY/aSQw1VXJUrC5F8ovor6bmr7bVD38G6mVwXBLTg/AXT5lPIFixWiioa68W9r4KSWqaxFndE5sUizOV6ucq6TaqqptFRVpHTLmfA/LV4yXlLjzFpLFmlY5tPk9LUyPSpY5VTSuZ3LGrXLGuntaiqrXbRFVUOz4r4DxHiXK8yzKyXG6XC55vXfH181xfFI6N3fI9WRqxjVRiulVdLv2b5XRnvr8uNDyJf+POBcNa2tzirvcdciwfNJb4Fjczb1TyxHdySr9mwdy6TSrSOrjLuc+KbbZ+W+Mb6tTjtknjTJbA+ip5Gz0/ei+skqxrKxF32P7XfKitciJpynPc29WlTccRwvHenOqbcc45JbDLa9RRyut1OrlR75WPRzEej2PjVHIrW+nK5f0JusZFwXauUuMLLgXOV2q8sq6B8VbV10T0ofXrWtcivRlOjGdiJI9rWq320q7d5OO596veJ+BVrcHraKquWQ09Axae0U9LqDtexfTbJI7TGs1raJtUT9qn4OhHjO5YF0+MguV7paibJq+e7sdbquOoZSskijia1sjFcxXokXculVEVde6KUngrgjEOn/Fq3FcQrLjWw19e+4T1VxfG+oe9zGtRrnMYxFREZ48fVfuZ253uNFyx1p8T4Zx+jaq6YHV/mOQ11P5bTwMmimdBI9P5WxuTS+O6oRvuqoejmrW5z+Irh9iuiJNQYdjzq+Cnf5YlQrJZEk1/Mjnwrv7xN+xcupvGqDK+n7kC1XCnZK2OwVlbCjk32z08TponJ9lR8bfJzXRHklbk/TFhVXcJnSz0cFRbu5y7/h09RJFEn9o2sT+xcwAAAAAAASjqE6hcY4CxmGur6aS7ZBdnrT2SyU6/xq2bwn0RVaxFc3btKvlERFVUQl3DvTpm2f5lT9QPVJOyvyNO2WyY1r/KWaPfczuZtU7090Z50vzPVz/0+t+IPjlbf+mm7VNFE6RbLcKO4yNam19NH+m5dfZEl2v2RFX6FJ6bX41JwHgLsSSBLb+QUiIkWtJMkaJP3a/f6vqd3/LuIFxRDSr+IlydNiCMS1ssSJdVg/0fi1Sk70XXjv8AVR6r9e5JP6nb9QHUpkVoyqLgngOzpkPJNybqV6IjqezRuTfqyqvy96NVHad8rUVFdvaNd7/Tr0zWzhxKzMcquz8n5Dvu5LvfahVeqK5duihV3lGb93L8z9JvSaa3tecORcP4t4vv2W5zDFVWyOlfTrQSaX8wkkarW0yIvhe/aovhURvcq+EUwP0psl6dOW8Wy3ljC6a02flC2SMsFykc5UtayS/I1Veq9iPasaKq7cjJY3K5EV6G7ObueMP4CslsyHNqC7zUN0r225ktBTskSGVWq5Fk7nt03ta5fG1+VdIdrcLPjmUWmajultt91ttyiT1Y5omTQ1Eat8KqKio5FT2/oZE6BJG23PuacQxSrkqcGtV+T8nX1FfEzc1QxqxuX9XdFHHtfqjGL9TouYOoDP8AkzOKvp66XomzXmHcOQ5Sq6prOzfa9rHoioj08or02qKitYiu8tq/AHTzh/AONyW6zOfcr3cVSW8Xqpb/AJiul8r917WIqrpm191VVc5VVYpmaswf8RXEb5dHJDQ5hjjqGCoeumLUIyViR7/mV0cSa+8rfuXHqbyWgxTp+5AutwqGRNksFZRQq5dd09RE6GJqfdVfI3wc10SY5WYx0xYVSV8To56ynqLirXJr+HUVEksS/wB43sX+5cwAAAAAAAZf5x6Ncp5g5dbyzbudazGamjhp4LVBT2d0slvSNvlY5kqWLtZHSP2jUVFfrzrZ5f8Ag66gf98eb/8AUqf/AHF74644uOM8YQcdcg5dUZ7KsVVT19yukTu+uimke7ska+SRVRGPSPSuXw36eyRKPonyPEZ66h4X6jsuwfHbhK6WSzsiWqZErv1elJ6sasXXhHaV+kTbl1srXBXAGE8B2CrteMPq664XWVKi63auej6qtlTelcqJpGp3O01PbuVVVVVVXP1D0Cck2fJ7xmNg6rr1aLvfppJ7hV0FkkglnV71e5HOZWIqp3LvXsez/g66gf8AfHm//Uqf/cUXmTpqm5wz3FL1mWdufiGMSNqFxhlu+Wun/c+Wf1fPdprden4Z3Iior1cdPz1wfjfPXHNVgN6lShf3Mnt1eyBJHUNQzw2RrNt7k7Vc1W7TbXKm0XSp+an4Npch4Ug4a5hvyZrFDTtpnXP4RaOdyRr/AAZP9SRUlYiInf3fNr5kXbtyOPoo5BpLR/8AE23quzSnwvtWBto+G3I2mXx6KTpMiI3XjtRnbr9uvBaMH4Rxjiri2t404umksbqmlqGMukjfXqPjJI1YlXJ5b6j2r2rpFammo1O1Nazjif4fnJOBxVMGE9Wl/sMdbIktS23WeWnSZ6JpHP7K1O5U2vv91OzxTpR5ysGU2e/XXrJzG8UVtuFPV1NunpahI6yKORrnwOVaxyI16IrV21U0vsvsVXnXgPC+fcbprLlD6qirbbMtTa7rRORtTRTLratVfCtXTe5q+/aippURUkzOia+ZTcLZHzb1CZVn9gtMzZ4LNPCtNFI5vhPVf6r1f42iu0jtKunJs1BTU1PR08VJSQRwQQMbHFFG1GsYxqaRrUTwiIiaRD6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/9k="

/***/ }),

/***/ "./images/img4.jpg":
/*!*************************!*\
  !*** ./images/img4.jpg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/wAALCAFAAQYBAREA/8QAGgABAQEBAQEBAAAAAAAAAAAAAAcIBgUDBP/EADUQAAEDBAEDAgQEBAcBAAAAAAABAgMEBQYRBwgSIRMxFCJBUQkVMkIjUmGBGCQzWGKU1Bb/2gAIAQEAAD8A1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACV879RWF8DUFubeqSvvF8vciw2my22NJKqrftE3r9re5zU35VVXTUcu0JXWda2XYYtLdeYOmXMMPxyqlbEt29f4pIVd+n1GLFH2L/xV3d4XSKvg0pb8ox26Y1BmVBeaWWx1FGlwjr/AFESFaZWd/qq5fZvb5VV1r6mcV61b7ltZXzcH9POV59YrbK6Ca8RzLSQyub7+k30nq/xpUaunaVNtTZT+BeofDufbRcJ7HR11pvNkmSnu1muDEbU0ci7RN6/U1Va5EXwu2qioi+DluVOrW1YZnjuKePOP75yJmMEaS1dvtXyRUjdIupZe12lRHNVdNVE2m1RfB5uGdY8E+eW/jbmXiq/cZ3q8uay2OuMqT0lU9V7WtSbsZpVcqNRUardrpVRdb0cDmuReRMU4qw64Z1mlx+DtVtYjpHI3ufI5V0yNjf3Pc5URE/r50iKqZ3b1sZ1JZ1zqLpVzV2Doz4j86+JT1fhvf1/Q9LXZrz3ep26892vJoXjTknEuWsNoM6wq4LV2y4NXt729kkT2rp8cjf2vavhU/uiqioqxfLOshjs3ufH/CvEmQcmXKxvWK5z2+VKejp5EVWq31ux+9ORybVEaqovarj1uJOrSzZ7nTuKc7wW9cfZqrFlp7XdvmZVNRqu1FJ2tVV7Uc5NtRFRPlVfKHY8589YZwJjdPe8oZVVtbcpvhbXaqJqPqa6bxtrEX2am29zl9tonlVRFkjetm94rcba/mzp7yvAbBdZmwQXmeVamKNzvKeqz0mKzxtVaiq7SLpq6NQU1TT1lPFV0k8c0E7GyRSRuRzXsVNo5FTwqKi7RT6AAAAAAAAmd74DxHIObrJzvc7jdJr1YKFaCjonvidRMaqSoj0YrO9Hosz133++l14OX60c/wARwnp+ymhyV8EtTkdDLabXRO0sk9TI3TXtb9otpIrvp2p9VRFhvIjMt4e/Des+LXpZ6S73WOGimY/aSQw1VXJUrC5F8ovor6bmr7bVD38G6mVwXBLTg/AXT5lPIFixWiioa68W9r4KSWqaxFndE5sUizOV6ucq6TaqqptFRVpHTLmfA/LV4yXlLjzFpLFmlY5tPk9LUyPSpY5VTSuZ3LGrXLGuntaiqrXbRFVUOz4r4DxHiXK8yzKyXG6XC55vXfH181xfFI6N3fI9WRqxjVRiulVdLv2b5XRnvr8uNDyJf+POBcNa2tzirvcdciwfNJb4Fjczb1TyxHdySr9mwdy6TSrSOrjLuc+KbbZ+W+Mb6tTjtknjTJbA+ip5Gz0/ei+skqxrKxF32P7XfKitciJpynPc29WlTccRwvHenOqbcc45JbDLa9RRyut1OrlR75WPRzEej2PjVHIrW+nK5f0JusZFwXauUuMLLgXOV2q8sq6B8VbV10T0ofXrWtcivRlOjGdiJI9rWq320q7d5OO596veJ+BVrcHraKquWQ09Axae0U9LqDtexfTbJI7TGs1raJtUT9qn4OhHjO5YF0+MguV7paibJq+e7sdbquOoZSskijia1sjFcxXokXculVEVde6KUngrgjEOn/Fq3FcQrLjWw19e+4T1VxfG+oe9zGtRrnMYxFREZ48fVfuZ253uNFyx1p8T4Zx+jaq6YHV/mOQ11P5bTwMmimdBI9P5WxuTS+O6oRvuqoejmrW5z+Irh9iuiJNQYdjzq+Cnf5YlQrJZEk1/Mjnwrv7xN+xcupvGqDK+n7kC1XCnZK2OwVlbCjk32z08TponJ9lR8bfJzXRHklbk/TFhVXcJnSz0cFRbu5y7/h09RJFEn9o2sT+xcwAAAAAAASjqE6hcY4CxmGur6aS7ZBdnrT2SyU6/xq2bwn0RVaxFc3btKvlERFVUQl3DvTpm2f5lT9QPVJOyvyNO2WyY1r/KWaPfczuZtU7090Z50vzPVz/0+t+IPjlbf+mm7VNFE6RbLcKO4yNam19NH+m5dfZEl2v2RFX6FJ6bX41JwHgLsSSBLb+QUiIkWtJMkaJP3a/f6vqd3/LuIFxRDSr+IlydNiCMS1ssSJdVg/0fi1Sk70XXjv8AVR6r9e5JP6nb9QHUpkVoyqLgngOzpkPJNybqV6IjqezRuTfqyqvy96NVHad8rUVFdvaNd7/Tr0zWzhxKzMcquz8n5Dvu5LvfahVeqK5duihV3lGb93L8z9JvSaa3tecORcP4t4vv2W5zDFVWyOlfTrQSaX8wkkarW0yIvhe/aovhURvcq+EUwP0psl6dOW8Wy3ljC6a02flC2SMsFykc5UtayS/I1Veq9iPasaKq7cjJY3K5EV6G7ObueMP4CslsyHNqC7zUN0r225ktBTskSGVWq5Fk7nt03ta5fG1+VdIdrcLPjmUWmajultt91ttyiT1Y5omTQ1Eat8KqKio5FT2/oZE6BJG23PuacQxSrkqcGtV+T8nX1FfEzc1QxqxuX9XdFHHtfqjGL9TouYOoDP8AkzOKvp66XomzXmHcOQ5Sq6prOzfa9rHoioj08or02qKitYiu8tq/AHTzh/AONyW6zOfcr3cVSW8Xqpb/AJiul8r917WIqrpm191VVc5VVYpmaswf8RXEb5dHJDQ5hjjqGCoeumLUIyViR7/mV0cSa+8rfuXHqbyWgxTp+5AutwqGRNksFZRQq5dd09RE6GJqfdVfI3wc10SY5WYx0xYVSV8To56ynqLirXJr+HUVEksS/wB43sX+5cwAAAAAAAZf5x6Ncp5g5dbyzbudazGamjhp4LVBT2d0slvSNvlY5kqWLtZHSP2jUVFfrzrZ5f8Ag66gf98eb/8AUqf/AHF74644uOM8YQcdcg5dUZ7KsVVT19yukTu+uimke7ska+SRVRGPSPSuXw36eyRKPonyPEZ66h4X6jsuwfHbhK6WSzsiWqZErv1elJ6sasXXhHaV+kTbl1srXBXAGE8B2CrteMPq664XWVKi63auej6qtlTelcqJpGp3O01PbuVVVVVVXP1D0Cck2fJ7xmNg6rr1aLvfppJ7hV0FkkglnV71e5HOZWIqp3LvXsez/g66gf8AfHm//Uqf/cUXmTpqm5wz3FL1mWdufiGMSNqFxhlu+Wun/c+Wf1fPdprden4Z3Iior1cdPz1wfjfPXHNVgN6lShf3Mnt1eyBJHUNQzw2RrNt7k7Vc1W7TbXKm0XSp+an4Npch4Ug4a5hvyZrFDTtpnXP4RaOdyRr/AAZP9SRUlYiInf3fNr5kXbtyOPoo5BpLR/8AE23quzSnwvtWBto+G3I2mXx6KTpMiI3XjtRnbr9uvBaMH4Rxjiri2t404umksbqmlqGMukjfXqPjJI1YlXJ5b6j2r2rpFammo1O1Nazjif4fnJOBxVMGE9Wl/sMdbIktS23WeWnSZ6JpHP7K1O5U2vv91OzxTpR5ysGU2e/XXrJzG8UVtuFPV1NunpahI6yKORrnwOVaxyI16IrV21U0vsvsVXnXgPC+fcbprLlD6qirbbMtTa7rRORtTRTLratVfCtXTe5q+/aippURUkzOia+ZTcLZHzb1CZVn9gtMzZ4LNPCtNFI5vhPVf6r1f42iu0jtKunJs1BTU1PR08VJSQRwQQMbHFFG1GsYxqaRrUTwiIiaRD6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/9k="

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

/***/ "./images/partner1.png":
/*!*****************************!*\
  !*** ./images/partner1.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABQCAMAAACu7ZJWAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABjFBMVEW8vLy2trZWVlYSEhIEBAQpKSmMjIxvb28YGBgjIyOFhYVmZmYWFhYfHx99fX0+Pj4FBQViYmKLi4tYWFiOjo55eXkBAQFdXV2JiYlCQkKWlpZqampfX19LS0uIiIifn58AAABOTk4bGxtDQ0O7u7slJSU9PT0iIiI8PDyCgoJ6enqxsbGlpaVgYGAJCQmBgYF4eHhGRkYvLy82NjaQkJBhYWGampqYmJipqak7OzsNDQ2tra2vr69kZGQICAi1tbW5ubkaGhqNjY1+fn4RERGSkpKhoaGEhISqqqoMDAxISEhFRUUQEBBTU1OcnJwcHBx0dHSVlZWioqI/Pz9xcXGRkZGZmZm6urqkpKSwsLAHBwcKCgqXl5d7e3sDAwO3t7eoqKhZWVmAgIBKSkoPDw9/f3+jo6OUlJRjY2MVFRUmJiY6Ojp3d3eGhoZoaGisrKxSUlILCwsxMTFbW1sCAgKTk5OysrI4ODhra2tlZWUGBgZQUFAgICBUVFSgoKBMTExVVVUUFBQZGRn+/v5RJn7eAAAAAWJLR0SD/LTP0gAAAZ1JREFUWMPt09tXElEUBvDPGMRLGCpMGYUbHQ20gEiDBCIgRcUKtVAjwe5hlEIXDe36l7enFQ1rNQ/M+/497HXmfGudM/ucGUAIIYQQQgghTPWcsSn2Xn3k6FP6BzqjwbOKc8g06c451/DIqOIGPOr5C2PKRSPxqpfcl1WfSdKdcfJy9duBiUlAm5o2oiuBv+W/pDtBGuc6o85eJb33ayFtiBxAmCJwXueJ6A38SywuPUfcMebp5gjF9D0ojlsLiaSNXzZ125eOqB4YiTV3MplsIneXFsO0xI95bmJ5ZbWwluAzCBDRPb2DdmLR/QdEmSKtB2mjvUBRpSCPN1cePkq55tGRWKSVYltB2nZT6U/by8DO43ISeEK7PDFYSXQkllRze1yflrU4PdMPXb+s5y9sBeAlveKJRXrdkVg769AbIF0bA5y8nLb/Fuil+gy9Q4nqnL9XD4zEosNG3dcs80V56EO28PET0pko0Kx9xlHj2P2l5TcSq6onC62m/nXx71w5zQNfFb6vb67vSP/4Wfk1vGUkQgghhBBCCGHqNzrMRTQMHOqLAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA3LTI2VDAyOjUyOjQzLTA1OjAwWFqhGwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wNy0yNlQwMjo1Mjo0My0wNTowMCkHGacAAAAASUVORK5CYII="

/***/ }),

/***/ "./images/partner2.png":
/*!*****************************!*\
  !*** ./images/partner2.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABQCAMAAACu7ZJWAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABjFBMVEW8vLy2trZWVlYSEhIEBAQpKSmMjIxvb28YGBgjIyOFhYVmZmYWFhYfHx99fX0+Pj4FBQViYmKLi4tYWFiOjo55eXkBAQFdXV2JiYlCQkKWlpZqampfX19LS0uIiIifn58AAABOTk4bGxtDQ0O7u7slJSU9PT0iIiI8PDyCgoJ6enqxsbGlpaVgYGAJCQmBgYF4eHhGRkYvLy82NjaQkJBhYWGampqYmJipqak7OzsNDQ2tra2vr69kZGQICAi1tbW5ubkaGhqNjY1+fn4RERGSkpKhoaGEhISqqqoMDAxISEhFRUUQEBBTU1OcnJwcHBx0dHSVlZWioqI/Pz9xcXGRkZGZmZm6urqkpKSwsLAHBwcKCgqXl5d7e3sDAwO3t7eoqKhZWVmAgIBKSkoPDw9/f3+jo6OUlJRjY2MVFRUmJiY6Ojp3d3eGhoZoaGisrKxSUlILCwsxMTFbW1sCAgKTk5OysrI4ODhra2tlZWUGBgZQUFAgICBUVFSgoKBMTExVVVUUFBQZGRn+/v5RJn7eAAAAAWJLR0SD/LTP0gAAAZ1JREFUWMPt09tXElEUBvDPGMRLGCpMGYUbHQ20gEiDBCIgRcUKtVAjwe5hlEIXDe36l7enFQ1rNQ/M+/497HXmfGudM/ucGUAIIYQQQgghTPWcsSn2Xn3k6FP6BzqjwbOKc8g06c451/DIqOIGPOr5C2PKRSPxqpfcl1WfSdKdcfJy9duBiUlAm5o2oiuBv+W/pDtBGuc6o85eJb33ayFtiBxAmCJwXueJ6A38SywuPUfcMebp5gjF9D0ojlsLiaSNXzZ125eOqB4YiTV3MplsIneXFsO0xI95bmJ5ZbWwluAzCBDRPb2DdmLR/QdEmSKtB2mjvUBRpSCPN1cePkq55tGRWKSVYltB2nZT6U/by8DO43ISeEK7PDFYSXQkllRze1yflrU4PdMPXb+s5y9sBeAlveKJRXrdkVg769AbIF0bA5y8nLb/Fuil+gy9Q4nqnL9XD4zEosNG3dcs80V56EO28PET0pko0Kx9xlHj2P2l5TcSq6onC62m/nXx71w5zQNfFb6vb67vSP/4Wfk1vGUkQgghhBBCCGHqNzrMRTQMHOqLAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA3LTI2VDAyOjUyOjQzLTA1OjAwWFqhGwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wNy0yNlQwMjo1Mjo0My0wNTowMCkHGacAAAAASUVORK5CYII="

/***/ }),

/***/ "./images/partner3.png":
/*!*****************************!*\
  !*** ./images/partner3.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABQCAMAAACu7ZJWAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABjFBMVEW8vLy2trZWVlYSEhIEBAQpKSmMjIxvb28YGBgjIyOFhYVmZmYWFhYfHx99fX0+Pj4FBQViYmKLi4tYWFiOjo55eXkBAQFdXV2JiYlCQkKWlpZqampfX19LS0uIiIifn58AAABOTk4bGxtDQ0O7u7slJSU9PT0iIiI8PDyCgoJ6enqxsbGlpaVgYGAJCQmBgYF4eHhGRkYvLy82NjaQkJBhYWGampqYmJipqak7OzsNDQ2tra2vr69kZGQICAi1tbW5ubkaGhqNjY1+fn4RERGSkpKhoaGEhISqqqoMDAxISEhFRUUQEBBTU1OcnJwcHBx0dHSVlZWioqI/Pz9xcXGRkZGZmZm6urqkpKSwsLAHBwcKCgqXl5d7e3sDAwO3t7eoqKhZWVmAgIBKSkoPDw9/f3+jo6OUlJRjY2MVFRUmJiY6Ojp3d3eGhoZoaGisrKxSUlILCwsxMTFbW1sCAgKTk5OysrI4ODhra2tlZWUGBgZQUFAgICBUVFSgoKBMTExVVVUUFBQZGRn+/v5RJn7eAAAAAWJLR0SD/LTP0gAAAZ1JREFUWMPt09tXElEUBvDPGMRLGCpMGYUbHQ20gEiDBCIgRcUKtVAjwe5hlEIXDe36l7enFQ1rNQ/M+/497HXmfGudM/ucGUAIIYQQQgghTPWcsSn2Xn3k6FP6BzqjwbOKc8g06c451/DIqOIGPOr5C2PKRSPxqpfcl1WfSdKdcfJy9duBiUlAm5o2oiuBv+W/pDtBGuc6o85eJb33ayFtiBxAmCJwXueJ6A38SywuPUfcMebp5gjF9D0ojlsLiaSNXzZ125eOqB4YiTV3MplsIneXFsO0xI95bmJ5ZbWwluAzCBDRPb2DdmLR/QdEmSKtB2mjvUBRpSCPN1cePkq55tGRWKSVYltB2nZT6U/by8DO43ISeEK7PDFYSXQkllRze1yflrU4PdMPXb+s5y9sBeAlveKJRXrdkVg769AbIF0bA5y8nLb/Fuil+gy9Q4nqnL9XD4zEosNG3dcs80V56EO28PET0pko0Kx9xlHj2P2l5TcSq6onC62m/nXx71w5zQNfFb6vb67vSP/4Wfk1vGUkQgghhBBCCGHqNzrMRTQMHOqLAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA3LTI2VDAyOjUyOjQ0LTA1OjAwnf2flQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wNy0yNlQwMjo1Mjo0NC0wNTowMOygJykAAAAASUVORK5CYII="

/***/ }),

/***/ "./images/partner4.png":
/*!*****************************!*\
  !*** ./images/partner4.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABQCAMAAACu7ZJWAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABjFBMVEW8vLy2trZWVlYSEhIEBAQpKSmMjIxvb28YGBgjIyOFhYVmZmYWFhYfHx99fX0+Pj4FBQViYmKLi4tYWFiOjo55eXkBAQFdXV2JiYlCQkKWlpZqampfX19LS0uIiIifn58AAABOTk4bGxtDQ0O7u7slJSU9PT0iIiI8PDyCgoJ6enqxsbGlpaVgYGAJCQmBgYF4eHhGRkYvLy82NjaQkJBhYWGampqYmJipqak7OzsNDQ2tra2vr69kZGQICAi1tbW5ubkaGhqNjY1+fn4RERGSkpKhoaGEhISqqqoMDAxISEhFRUUQEBBTU1OcnJwcHBx0dHSVlZWioqI/Pz9xcXGRkZGZmZm6urqkpKSwsLAHBwcKCgqXl5d7e3sDAwO3t7eoqKhZWVmAgIBKSkoPDw9/f3+jo6OUlJRjY2MVFRUmJiY6Ojp3d3eGhoZoaGisrKxSUlILCwsxMTFbW1sCAgKTk5OysrI4ODhra2tlZWUGBgZQUFAgICBUVFSgoKBMTExVVVUUFBQZGRn+/v5RJn7eAAAAAWJLR0SD/LTP0gAAAZ1JREFUWMPt09tXElEUBvDPGMRLGCpMGYUbHQ20gEiDBCIgRcUKtVAjwe5hlEIXDe36l7enFQ1rNQ/M+/497HXmfGudM/ucGUAIIYQQQgghTPWcsSn2Xn3k6FP6BzqjwbOKc8g06c451/DIqOIGPOr5C2PKRSPxqpfcl1WfSdKdcfJy9duBiUlAm5o2oiuBv+W/pDtBGuc6o85eJb33ayFtiBxAmCJwXueJ6A38SywuPUfcMebp5gjF9D0ojlsLiaSNXzZ125eOqB4YiTV3MplsIneXFsO0xI95bmJ5ZbWwluAzCBDRPb2DdmLR/QdEmSKtB2mjvUBRpSCPN1cePkq55tGRWKSVYltB2nZT6U/by8DO43ISeEK7PDFYSXQkllRze1yflrU4PdMPXb+s5y9sBeAlveKJRXrdkVg769AbIF0bA5y8nLb/Fuil+gy9Q4nqnL9XD4zEosNG3dcs80V56EO28PET0pko0Kx9xlHj2P2l5TcSq6onC62m/nXx71w5zQNfFb6vb67vSP/4Wfk1vGUkQgghhBBCCGHqNzrMRTQMHOqLAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA3LTI2VDAyOjUyOjQ0LTA1OjAwnf2flQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wNy0yNlQwMjo1Mjo0NC0wNTowMOygJykAAAAASUVORK5CYII="

/***/ }),

/***/ "./images/partner5.png":
/*!*****************************!*\
  !*** ./images/partner5.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABQCAMAAACu7ZJWAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABjFBMVEW8vLy2trZWVlYSEhIEBAQpKSmMjIxvb28YGBgjIyOFhYVmZmYWFhYfHx99fX0+Pj4FBQViYmKLi4tYWFiOjo55eXkBAQFdXV2JiYlCQkKWlpZqampfX19LS0uIiIifn58AAABOTk4bGxtDQ0O7u7slJSU9PT0iIiI8PDyCgoJ6enqxsbGlpaVgYGAJCQmBgYF4eHhGRkYvLy82NjaQkJBhYWGampqYmJipqak7OzsNDQ2tra2vr69kZGQICAi1tbW5ubkaGhqNjY1+fn4RERGSkpKhoaGEhISqqqoMDAxISEhFRUUQEBBTU1OcnJwcHBx0dHSVlZWioqI/Pz9xcXGRkZGZmZm6urqkpKSwsLAHBwcKCgqXl5d7e3sDAwO3t7eoqKhZWVmAgIBKSkoPDw9/f3+jo6OUlJRjY2MVFRUmJiY6Ojp3d3eGhoZoaGisrKxSUlILCwsxMTFbW1sCAgKTk5OysrI4ODhra2tlZWUGBgZQUFAgICBUVFSgoKBMTExVVVUUFBQZGRn+/v5RJn7eAAAAAWJLR0SD/LTP0gAAAZ1JREFUWMPt09tXElEUBvDPGMRLGCpMGYUbHQ20gEiDBCIgRcUKtVAjwe5hlEIXDe36l7enFQ1rNQ/M+/497HXmfGudM/ucGUAIIYQQQgghTPWcsSn2Xn3k6FP6BzqjwbOKc8g06c451/DIqOIGPOr5C2PKRSPxqpfcl1WfSdKdcfJy9duBiUlAm5o2oiuBv+W/pDtBGuc6o85eJb33ayFtiBxAmCJwXueJ6A38SywuPUfcMebp5gjF9D0ojlsLiaSNXzZ125eOqB4YiTV3MplsIneXFsO0xI95bmJ5ZbWwluAzCBDRPb2DdmLR/QdEmSKtB2mjvUBRpSCPN1cePkq55tGRWKSVYltB2nZT6U/by8DO43ISeEK7PDFYSXQkllRze1yflrU4PdMPXb+s5y9sBeAlveKJRXrdkVg769AbIF0bA5y8nLb/Fuil+gy9Q4nqnL9XD4zEosNG3dcs80V56EO28PET0pko0Kx9xlHj2P2l5TcSq6onC62m/nXx71w5zQNfFb6vb67vSP/4Wfk1vGUkQgghhBBCCGHqNzrMRTQMHOqLAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA3LTI2VDAyOjUyOjQ0LTA1OjAwnf2flQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wNy0yNlQwMjo1Mjo0NC0wNTowMOygJykAAAAASUVORK5CYII="

/***/ }),

/***/ "./images/partner6.png":
/*!*****************************!*\
  !*** ./images/partner6.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABQCAMAAACu7ZJWAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABjFBMVEW8vLy2trZWVlYSEhIEBAQpKSmMjIxvb28YGBgjIyOFhYVmZmYWFhYfHx99fX0+Pj4FBQViYmKLi4tYWFiOjo55eXkBAQFdXV2JiYlCQkKWlpZqampfX19LS0uIiIifn58AAABOTk4bGxtDQ0O7u7slJSU9PT0iIiI8PDyCgoJ6enqxsbGlpaVgYGAJCQmBgYF4eHhGRkYvLy82NjaQkJBhYWGampqYmJipqak7OzsNDQ2tra2vr69kZGQICAi1tbW5ubkaGhqNjY1+fn4RERGSkpKhoaGEhISqqqoMDAxISEhFRUUQEBBTU1OcnJwcHBx0dHSVlZWioqI/Pz9xcXGRkZGZmZm6urqkpKSwsLAHBwcKCgqXl5d7e3sDAwO3t7eoqKhZWVmAgIBKSkoPDw9/f3+jo6OUlJRjY2MVFRUmJiY6Ojp3d3eGhoZoaGisrKxSUlILCwsxMTFbW1sCAgKTk5OysrI4ODhra2tlZWUGBgZQUFAgICBUVFSgoKBMTExVVVUUFBQZGRn+/v5RJn7eAAAAAWJLR0SD/LTP0gAAAZ1JREFUWMPt09tXElEUBvDPGMRLGCpMGYUbHQ20gEiDBCIgRcUKtVAjwe5hlEIXDe36l7enFQ1rNQ/M+/497HXmfGudM/ucGUAIIYQQQgghTPWcsSn2Xn3k6FP6BzqjwbOKc8g06c451/DIqOIGPOr5C2PKRSPxqpfcl1WfSdKdcfJy9duBiUlAm5o2oiuBv+W/pDtBGuc6o85eJb33ayFtiBxAmCJwXueJ6A38SywuPUfcMebp5gjF9D0ojlsLiaSNXzZ125eOqB4YiTV3MplsIneXFsO0xI95bmJ5ZbWwluAzCBDRPb2DdmLR/QdEmSKtB2mjvUBRpSCPN1cePkq55tGRWKSVYltB2nZT6U/by8DO43ISeEK7PDFYSXQkllRze1yflrU4PdMPXb+s5y9sBeAlveKJRXrdkVg769AbIF0bA5y8nLb/Fuil+gy9Q4nqnL9XD4zEosNG3dcs80V56EO28PET0pko0Kx9xlHj2P2l5TcSq6onC62m/nXx71w5zQNfFb6vb67vSP/4Wfk1vGUkQgghhBBCCGHqNzrMRTQMHOqLAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA3LTI2VDAyOjUyOjQ0LTA1OjAwnf2flQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wNy0yNlQwMjo1Mjo0NC0wNTowMOygJykAAAAASUVORK5CYII="

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

/***/ "./images/women.png":
/*!**************************!*\
  !*** ./images/women.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./images/women2.png":
/*!***************************!*\
  !*** ./images/women2.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout/Navbar */ "./components/Layout/Navbar.js");
/* harmony import */ var _components_shop_style_one_Banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shop-style-one/Banner */ "./components/shop-style-one/Banner.js");
/* harmony import */ var _components_shop_style_one_OfferArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/shop-style-one/OfferArea */ "./components/shop-style-one/OfferArea.js");
/* harmony import */ var _components_shop_style_one_Products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/shop-style-one/Products */ "./components/shop-style-one/Products.js");
/* harmony import */ var _components_shop_style_one_CategoryProducts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/shop-style-one/CategoryProducts */ "./components/shop-style-one/CategoryProducts.js");
/* harmony import */ var _components_shop_style_one_TrendingProducts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/shop-style-one/TrendingProducts */ "./components/shop-style-one/TrendingProducts.js");
/* harmony import */ var _components_shop_style_one_BestSellers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/shop-style-one/BestSellers */ "./components/shop-style-one/BestSellers.js");
/* harmony import */ var _components_shop_style_one_Facility__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/shop-style-one/Facility */ "./components/shop-style-one/Facility.js");
/* harmony import */ var _components_Common_Testimonials__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Common/Testimonials */ "./components/Common/Testimonials.js");
/* harmony import */ var _components_Common_News__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Common/News */ "./components/Common/News.js");
/* harmony import */ var _components_Common_Subscribe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Common/Subscribe */ "./components/Common/Subscribe.js");
/* harmony import */ var _components_Common_Partner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Common/Partner */ "./components/Common/Partner.js");
/* harmony import */ var _components_Common_InstagramPhoto__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Common/InstagramPhoto */ "./components/Common/InstagramPhoto.js");
/* harmony import */ var _components_Layout_Footer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Layout/Footer */ "./components/Layout/Footer.js");
/* harmony import */ var _components_Modal_AddsModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Modal/AddsModal */ "./components/Modal/AddsModal.js");
var _jsxFileName = "C:\\Users\\corde\\Desktop\\New folder\\bikeshop\\bikeshop_frontend\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

















class Index extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "boxed-layout-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "boxed-layout-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }
    }, __jsx(_components_Layout_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }
    }), __jsx(_components_shop_style_one_Banner__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }
    }), __jsx(_components_shop_style_one_Products__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }
    }), __jsx(_components_shop_style_one_Facility__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }
    }), __jsx(_components_Layout_Footer__WEBPACK_IMPORTED_MODULE_14__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
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
        token
      } = await res.data;
      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set("_wus_BJK", token, {
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
        token
      } = await res.data;
      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set("_wus_BJK", token, {
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

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\corde\Desktop\New folder\bikeshop\bikeshop_frontend\pages\index.js */"./pages/index.js");


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

/***/ "react-lazyload":
/*!*********************************!*\
  !*** external "react-lazyload" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-lazyload");

/***/ }),

/***/ "react-owl-carousel3":
/*!**************************************!*\
  !*** external "react-owl-carousel3" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-owl-carousel3");

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

/***/ "react-tooltip":
/*!********************************!*\
  !*** external "react-tooltip" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-tooltip");

/***/ }),

/***/ "react-visibility-sensor":
/*!******************************************!*\
  !*** external "react-visibility-sensor" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-visibility-sensor");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbW1vbi9JbnN0YWdyYW1QaG90by5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbW1vbi9OZXdzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29tbW9uL1BhcnRuZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db21tb24vU3Vic2NyaWJlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29tbW9uL1Rlc3RpbW9uaWFscy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQvTWVnYU1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0L1RvcEhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9Ub3BQYW5lbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01vZGFsL0FkZHNNb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01vZGFsL0NhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Nb2RhbC9RdWlja1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Nb2RhbC9XaXNobGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Nob3Atc3R5bGUtb25lL0Jhbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Nob3Atc3R5bGUtb25lL0Jlc3RTZWxsZXJzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2hvcC1zdHlsZS1vbmUvQ2F0ZWdvcnlQcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Nob3Atc3R5bGUtb25lL0ZhY2lsaXR5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2hvcC1zdHlsZS1vbmUvT2ZmZXJBcmVhLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2hvcC1zdHlsZS1vbmUvUHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaG9wLXN0eWxlLW9uZS9UcmVuZGluZ1Byb2R1Y3RzLmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2Jsb2ctaW1nMS5qcGciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2Jsb2ctaW1nMi5qcGciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2Jsb2ctaW1nMy5qcGciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2Jsb2ctaW1nNC5qcGciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2Jsb2ctaW1nNS5qcGciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2J1bmRsZS5qcGciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2Nha2UuanBnIiwid2VicGFjazovLy8uL2ltYWdlcy9leHByZXNzY2FyZC5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2Zsb3dlcnMuanBnIiwid2VicGFjazovLy8uL2ltYWdlcy9pbWcyLmpwZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvaW1nMy5qcGciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2ltZzQuanBnIiwid2VicGFjazovLy8uL2ltYWdlcy9sb2dvcy9sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvbWFzdGVyY2FyZC5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL21hc3RlcmNhcmQyLnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvcGFydG5lcjEucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9wYXJ0bmVyMi5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL3BhcnRuZXIzLnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvcGFydG5lcjQucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9wYXJ0bmVyNS5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL3BhcnRuZXI2LnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvdmlzYS5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL3Zpc2EyLnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvd29tZW4ucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy93b21lbjIucG5nIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL2FjdGlvbi10eXBlcy9jYXJ0LWFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9jYXJ0QWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL2luZm9BY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvdXNlckFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjcnlwdG8tanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5wcm9ncmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1sYXp5bG9hZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW93bC1jYXJvdXNlbDNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXRvYXN0aWZ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdG9vbHRpcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXZpc2liaWxpdHktc2Vuc29yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsXCIiXSwibmFtZXMiOlsiT3dsQ2Fyb3VzZWwiLCJkeW5hbWljIiwib3B0aW9ucyIsImxvb3AiLCJuYXYiLCJkb3RzIiwiYXV0b3BsYXlIb3ZlclBhdXNlIiwiYXV0b3BsYXkiLCJuYXZUZXh0IiwicmVzcG9uc2l2ZSIsIml0ZW1zIiwiSW5zdGFncmFtUGhvdG8iLCJDb21wb25lbnQiLCJkaXNwbGF5IiwicGFuZWwiLCJjb21wb25lbnREaWRNb3VudCIsInNldFN0YXRlIiwicmVuZGVyIiwic3RhdGUiLCJtYXJnaW4iLCJOZXdzIiwicmVxdWlyZSIsIlBhcnRuZXIiLCJTdWJzY3JpYmUiLCJhdXRvcGxheVRpbWVvdXQiLCJzbWFydFNwZWVkIiwiVGVzdGltb25pYWxzIiwib2JqZWN0Rml0IiwiZm9udFNpemUiLCJGb290ZXIiLCJob3N0IiwicHJvY2VzcyIsIk1lZ2FNZW51IiwicHJvcHMiLCJjYXJ0TGVuZ3RoIiwic2V0Y2FydExlbmd0aCIsInVzZVN0YXRlIiwic2V0c3RhdGUiLCJzZWFyY2hGb3JtIiwiY29sbGFwc2VkIiwiY2hlY2tDYXJ0IiwiY2F0ZWdvcmllcyIsInNldGNhdGVnb3JpZXMiLCJoYW5kbGVDYXJ0IiwicHJldlN0YXRlIiwiaGFuZGxlU2VhcmNoRm9ybSIsInRvZ2dsZU5hdmJhciIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaENhdGVnb3JpZXMiLCJyZXMiLCJheGlvcyIsImdldCIsImRhdGEiLCJlcnJvciIsInVzZUVmZmVjdCIsIm15UHJvZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkZWNyeXB0ZWREYXRhIiwiZGVjcnlwdERhdGEiLCJsZW5ndGgiLCJwcm9kdWN0cyIsImVsZW1lbnRJZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93Iiwic2Nyb2xsWSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInNjcm9sbFRvIiwiY2xhc3NPbmUiLCJjbGFzc1R3byIsIndpZHRoIiwiZSIsInByZXZlbnREZWZhdWx0IiwibWFwU3RhdGVUb1Byb3BzIiwiYWRkZWRJdGVtcyIsImNvbm5lY3QiLCJSb3V0ZXIiLCJvblJvdXRlQ2hhbmdlU3RhcnQiLCJ1cmwiLCJOUHJvZ3Jlc3MiLCJzdGFydCIsIm9uUm91dGVDaGFuZ2VDb21wbGV0ZSIsImRvbmUiLCJvblJvdXRlQ2hhbmdlRXJyb3IiLCJOYXZiYXIiLCJUb3BIZWFkZXIiLCJ1c2VyIiwic2V0dXNlciIsInRva2VuIiwiY29va2llIiwiaGFuZGxlV2lzaGxpc3QiLCJsb2dvdXQiLCJhbmltYXRlT3V0IiwiYW5pbWF0ZUluIiwiVG9wUGFuZWwiLCJBZGRzTW9kYWwiLCJvcGVuIiwiX2lzTW91bnRlZCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiY2xvc2VNb2RhbCIsIkNhcnQiLCJpc0NhbXBhaWduIiwic2V0aXNDYW1wYWlnbiIsImRlY3J5cHRJbmZvRGF0YSIsImRlbGl2ZXJ5X2RhdGUiLCJ2YWx1ZSIsImhhbmRsZVJlbW92ZSIsImlkIiwicmVtb3ZlSXRlbSIsInRvYXN0IiwicG9zaXRpb24iLCJhdXRvQ2xvc2UiLCJoaWRlUHJvZ3Jlc3NCYXIiLCJjbG9zZU9uQ2xpY2siLCJwYXVzZU9uSG92ZXIiLCJkcmFnZ2FibGUiLCJjbG9zZUNhcnQiLCJvbkNsaWNrIiwidG90YWwiLCJpIiwiY2FtcGFpZ25fcHJpY2UiLCJxdWFudGl0eSIsImRpc2NvdW50X3ByaWNlIiwicGFkZGluZ1JpZ2h0IiwibWFwIiwicHJvZHVjdCIsImlkeCIsInByb2R1Y3RfaW1hZ2VzIiwibmFtZSIsImZvcm1hdE51bWJlciIsImZsb2F0IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJRdWlja1ZpZXciLCJxdHkiLCJtYXgiLCJtaW4iLCJhZGRRdWFudGl0eVdpdGhOdW1iZXIiLCJpZGQiLCJzdWNjZXNzIiwic2V0VGltZW91dCIsImltYWdlIiwicHJpY2UiLCJEZWNyZWFzZUl0ZW0iLCJ0YXJnZXQiLCJJbmNyZW1lbnRJdGVtIiwiaGFuZGxlQWRkVG9DYXJ0RnJvbVZpZXciLCJXaXNobGlzdCIsImNsb3NlV2lzaGxpc3QiLCJCYW5uZXIiLCJCZXN0U2VsbGVyIiwibW9kYWxPcGVuIiwibW9kYWxJbWFnZSIsImFkZFRvQ2FydCIsImFkZFRvQ29tcGFyZSIsImNvbXBhcmVfZXhpc3QiLCJDb21wYXJlUHJvZHVjdHMiLCJmaWx0ZXIiLCJpdGVtIiwiaGFuZGxlQWRkVG9Db21wYXJlIiwiU2xpZGUiLCJpbWFnZUhvdmVyIiwib3Blbk1vZGFsIiwiaGFuZGxlTW9kYWxEYXRhIiwicXVpY2tWaWV3IiwiY29tcGFyZUJ1dHRvbiIsInRpdGxlIiwiaGFuZGxlQWRkVG9DYXJ0IiwiYWRkZWRJdGVtc1RvQ29tcGFyZSIsIkNhdGVnb3J5UHJvZHVjdHMiLCJGYWNpbGl0eSIsIk9mZmVyQXJlYSIsIlByb2R1Y3RzIiwiY29sbGVjdGlvbnMiLCJzZXRjb2xsZWN0aW9ucyIsImZldGNoQ29sbGVjdGlvbiIsImVyciIsInJlc3BvbnNlIiwibXNnIiwib3BlblRhYlNlY3Rpb24iLCJldnQiLCJ0YWJObWFlIiwidGFiY29udGVudCIsInRhYmxpbmtzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInN0eWxlIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjbGFzc05hbWUiLCJyZXBsYWNlIiwiY3VycmVudFRhcmdldCIsImNvbGxlY3Rpb24iLCJzbHVnIiwiY3Vyc29yIiwicmVndWxhcl9wcmljZSIsImNvbG9yIiwiZm9udFdlaWdodCIsIlRyZW5kaW5nUHJvZHVjdHMiLCJtb250aE5hbWVzIiwiZGVib3VuY2UiLCJmdW5jIiwid2FpdCIsImltbWVkaWF0ZSIsInRpbWVvdXQiLCJjb250ZXh0IiwiYXJncyIsImFyZ3VtZW50cyIsImxhdGVyIiwiYXBwbHkiLCJjYWxsTm93IiwiY2xlYXJUaW1lb3V0IiwibnVtIiwidG9GaXhlZCIsImlzRGF0ZUJlZm9yZVRvZGF5IiwiZGF0ZSIsIkRhdGUiLCJ0b0RhdGVTdHJpbmciLCJmb3JtYXREYXRlIiwibW9udGgiLCJnZXRNb250aCIsImRheSIsImdldERhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJvcmlnaW4iLCJsYXN0SHJlZiIsImxhc3RBcyIsImxhc3RSZXN1bHQiLCJocmVmIiwiYXMiLCJyZXN1bHQiLCJmb3JtYXRGdW5jIiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJwcmVmZXRjaGVkIiwib2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJnZXRPYnNlcnZlciIsImNvbnN0cnVjdG9yIiwicCIsIm1lbW9pemVkRm9ybWF0VXJsIiwiZm9ybWF0VXJsIiwiYXNIcmVmIiwibm9kZU5hbWUiLCJpc0xvY2FsIiwic2Nyb2xsIiwic2hhbGxvdyIsImdldFBhdGhzIiwicmVzb2x2ZWRIcmVmIiwicGFyc2VkQXMiLCJoYW5kbGVSZWYiLCJyZWYiLCJpc1ByZWZldGNoZWQiLCJwcmVmZXRjaCIsInBhdGhzIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiZWwiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsIlJlYWN0Iiwid2FybiIsIlByb3BUeXBlcyIsImV4YWN0IiwiTGluayIsInBhc3NIcmVmIiwic2luZ2xldG9uUm91dGVyIiwicm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIk9iamVjdCIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnQiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwicGF0aCIsInByZXBhcmVSb3V0ZSIsInRvUm91dGUiLCJhdHRlbXB0cyIsImlzU2VydmVyUmVuZGVyIiwicGF0aG5hbWUiLCJhZGRCYXNlUGF0aCIsIl9fTkVYVF9EQVRBX18iLCJidWlsZElkIiwiZGVsQmFzZVBhdGgiLCJjcmVkZW50aWFscyIsImdldFJlc3BvbnNlIiwicm91dGUiLCJxdWVyeSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiUHJvbWlzZSIsImZldGNoTmV4dERhdGEiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsInVwZGF0ZSIsIm1vZCIsIm5ld0RhdGEiLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsImNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyZXNvbHZlIiwibWV0aG9kIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJyZWplY3QiLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiYXBwQ29tcCIsImNoYW5nZVN0YXRlIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwiaGFuZGxlRXJyb3IiLCJwYWdlIiwiZ2lwRXJyIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJjYW5jZWxsZWQiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsIlRFU1RfUk9VVEUiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhcmFtcyIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJlc2NhcGVkUm91dGUiLCJlc2NhcGVSZWdleCIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJpc09wdGlvbmFsIiwiJDEiLCJpc0NhdGNoQWxsIiwicG9zIiwicmVwZWF0IiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJrZXkiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInByb3RvY29sIiwiaG9zdG5hbWUiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJJbmRleCIsIkFERF9UT19DQVJUIiwiQUREX1RPX0NBUlRfQURET05TIiwiUkVNT1ZFX0lURU0iLCJTVUJfUVVBTlRJVFkiLCJBRERfUVVBTlRJVFkiLCJBRERfU0hJUFBJTkciLCJBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVIiLCJPUkRFUl9GT1JNIiwiQ0hFQ0tPVVRfQ0hBUkdFIiwiUkVTRVRfQ0FSVCIsIkFERF9UT19DT01QQVJFIiwiUkVNT1ZFX0lURU1fRlJPTV9DT01QQVJFIiwiVVBEQVRFX0NBUlQiLCJDcnlwdG9KUyIsImNsZWFyRGF0YSIsImVuY3J5cHREYXRhIiwiQUVTIiwiZW5jcnlwdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0b1N0cmluZyIsImJ5dGVzIiwiZGVjcnlwdCIsInN0cmluZ0FycmF5IiwicGFyc2UiLCJlbmMiLCJVdGY4IiwidHlwZSIsImFkZFRvQ2FydEFkZG9ucyIsInN1YnRyYWN0UXVhbnRpdHkiLCJhZGRRdWFudGl0eSIsInJlc2V0Q2FydCIsInJlbW92ZUl0ZW1Gcm9tQ29tcGFyZSIsImVuY3J5cHRJbmZvRGF0YSIsImVuY3J5cHRlZERhdGEiLCJzZXRJdGVtIiwiaW5mb0l0ZW0iLCJlbmNyeXB0U3RyaW5nIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZGVjcnlwdFN0cmluZyIsInVzZXJSZWdpc3RlciIsInVzZXJEYXRhIiwic2V0SXNMb2FkaW5nIiwicG9zdCIsInN0YXR1cyIsImV4cGlyZXMiLCJkZXRhaWxzIiwidXNlckxvZ2luIiwibG9jYXRpb24iLCJlbmNyeXB0VXNlckRhdGEiLCJlbnYiLCJVU0VSX0tFWSIsIlVTRVJfQ09PS0lFIiwiZGVjcnlwdFVzZXJEYXRhIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FB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QUNFO0FBQUcsZUFBUyxFQUFDLGtCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQU5GLEVBVUU7QUFBRyxZQUFNLEVBQUMsUUFBVjtBQUFtQixVQUFJLEVBQUMsNEJBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFWRixDQXhERixFQXFFRTtBQUFLLGVBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFNBQUcsRUFBQyw2VkFETjtBQUVFLFNBQUcsRUFBQyxPQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQU1FO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsZUFBUyxFQUFDLGtCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQU5GLEVBVUU7QUFBRyxZQUFNLEVBQUMsUUFBVjtBQUFtQixVQUFJLEVBQUMsNEJBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFWRixDQXJFRixFQWtGRTtBQUFLLGVBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFNBQUcsRUFBQywyVUFETjtBQUVFLFNBQUcsRUFBQyxPQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQU1FO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsZUFBUyxFQUFDLGtCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQU5GLEVBVUU7QUFBRyxZQUFNLEVBQUMsUUFBVjtBQUFtQixVQUFJLEVBQUMsNEJBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFW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LEtBQ0U7QUFBSSxhQUFTLEVBQUMsZ0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLENBQUM4RSxJQUFELEdBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLENBREYsQ0FERCxHQU1HLElBUE4sRUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsQ0FERixDQVJGLEVBYUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixDQURGLENBYkYsRUFrQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsTUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLENBREYsQ0FsQkYsRUF1QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsYUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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T0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFHLGVBQVMsRUFBQyxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFHLGVBQVMsRUFBQyxtQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FESixDQURKLENBREosRUFRSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFHLGVBQVMsRUFBQyxTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFHLGVBQVMsRUFBQyxnQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FESixDQURKLENBUkosRUFlSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFHLGVBQVMsRUFBQyxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFHLGVBQVMsRUFBQyxvQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FESixDQURKLENBZkosRUFzQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBRyxlQUFTLEVBQUMsV0FBYjtBQUFBO0FB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QUFQO0FBQ0Q7QUFDRixHQVhELENBV0UsT0FBT2hZLEtBQVAsRUFBYztBQUNkUCxXQUFPLENBQUNDLEdBQVIsQ0FBWU0sS0FBWjtBQUVBRyxnQkFBWSxDQUFDd0QsVUFBYixDQUF3QmxGLE9BQU8sQ0FBQ2tiLEdBQVIsQ0FBWUUsV0FBcEM7QUFDQSxXQUFPLEtBQVA7QUFDRDtBQUNGLENBbEJNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUVQLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcInN0YXRpY1xcXFxkZXZlbG9wbWVudFxcXFxwYWdlc1xcXFxpbmRleC5qc1wiOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIHVuY2F1Z2h0IGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBpbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5jb25zdCBPd2xDYXJvdXNlbCA9IGR5bmFtaWMoaW1wb3J0KFwicmVhY3Qtb3dsLWNhcm91c2VsM1wiKSk7XHJcblxyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gIGxvb3A6IHRydWUsXHJcbiAgbmF2OiBmYWxzZSxcclxuICBkb3RzOiBmYWxzZSxcclxuICBhdXRvcGxheUhvdmVyUGF1c2U6IHRydWUsXHJcbiAgYXV0b3BsYXk6IHRydWUsXHJcbiAgbmF2VGV4dDogW1xyXG4gICAgXCI8aSBjbGFzcz0nZmFzIGZhLWNoZXZyb24tbGVmdCc+PC9pPlwiLFxyXG4gICAgXCI8aSBjbGFzcz0nZmFzIGZhLWNoZXZyb24tcmlnaHQnPjwvaT5cIixcclxuICBdLFxyXG4gIHJlc3BvbnNpdmU6IHtcclxuICAgIDA6IHtcclxuICAgICAgaXRlbXM6IDMsXHJcbiAgICB9LFxyXG4gICAgNTc2OiB7XHJcbiAgICAgIGl0ZW1zOiA0LFxyXG4gICAgfSxcclxuICAgIDc2ODoge1xyXG4gICAgICBpdGVtczogNixcclxuICAgIH0sXHJcbiAgICAxMjAwOiB7XHJcbiAgICAgIGl0ZW1zOiA5LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuY2xhc3MgSW5zdGFncmFtUGhvdG8gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgZGlzcGxheTogZmFsc2UsXHJcbiAgICBwYW5lbDogdHJ1ZSxcclxuICB9O1xyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5OiB0cnVlIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnN0YWdyYW0tYXJlYVwiPlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLmRpc3BsYXkgPyAoXHJcbiAgICAgICAgICA8T3dsQ2Fyb3VzZWxcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5zdGFncmFtLXNsaWRlcyBvd2wtY2Fyb3VzZWwgb3dsLXRoZW1lXCJcclxuICAgICAgICAgICAgey4uLm9wdGlvbnN9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zdGFncmFtLWJveFwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vc2NvbnRlbnQuZm1ubDctMS5mbmEuZmJjZG4ubmV0L3YvdDEuMC05L3A5NjB4OTYwLzExNzc3MDYyNl8xMTc5NzM0NTM5MDU1ODMxXzU1NDAzMTc2NjQ4NDMwMzQ3ODBfby5qcGc/X25jX2NhdD0xMTEmX25jX3NpZD1kZDk4MDEmX25jX2V1aTI9QWVILTM5UExLV0JzN1ItLXoxYmpfeWc2VUppUEVESHQ0cnhRbUk4UU1lM2l2SnhaQWdmUzg2eWRmaEpDdnFLOXZSMWItUjBENlVCSzJzUUlNNDVrN3pEYSZfbmNfb2hjPS1jZ0dLakVPalRNQVhfQnA5bjImX25jX2h0PXNjb250ZW50LmZtbmw3LTEuZm5hJl9uY190cD02Jm9oPTcwZmI4MmUxNTk4YjI3ZDEwMWYyZDM0ZGFhZmJhNjRkJm9lPTVGNUQ5RkYyXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cImltYWdlXCJcclxuICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1pbnN0YWdyYW1cIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL1wiPjwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluc3RhZ3JhbS1ib3hcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3Njb250ZW50LmZtbmwzLTIuZm5hLmZiY2RuLm5ldC92L3QxLjAtOS8xMTc1ODA2NjhfMTE3OTczMTk5NTcyMjc1Ml82NTUyMzgyODQzMjMxNzY3MTBfbi5qcGc/X25jX2NhdD0xMDQmX25jX3NpZD0xMTA0NzQmX25jX2V1aTI9QWVHYjIzMGdQQ0ttTl94b2JZZDh4eUZFMUg4Q2k4SER5emZVZndLTHdjUExOMkNXaXNxM1BpMXdsZVNCdUVUNjAxLXlyZUV2Vl9CTVVPM0VoMWFfWUJwSyZfbmNfb2hjPWFxdTFXY0M2bEcwQVg5N2pOUWImX25jX2h0PXNjb250ZW50LmZtbmwzLTIuZm5hJm9oPWI4Mzg1YTdhMjgyMDQzYmRkMzk0N2YyM2U5MGJmZDM3Jm9lPTVGNUNDOEEwXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cImltYWdlXCJcclxuICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1pbnN0YWdyYW1cIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL1wiPjwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluc3RhZ3JhbS1ib3hcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3Njb250ZW50LmZtbmwzLTEuZm5hLmZiY2RuLm5ldC92L3QxLjAtOS9wOTYweDk2MC8xMTY4OTg4MzlfMTE3OTczMTM4MjM4OTQ4MF83NzQ3ODY4OTM4MTQyMzk5OTgxX28uanBnP19uY19jYXQ9MTAxJl9uY19zaWQ9MTEwNDc0Jl9uY19ldWkyPUFlRVk0SzdaUWx5MjFscHJhR1V3MnN1Qjhsb3ZpUlQ4V2pfeVdpLUpGUHhhUDM2ZU0yUjNkcHF2UDdFQlZqVVA5YnZEbTVsQ1dqUE5oUFhPVzRsUTRvbEcmX25jX29oYz1wa1VMUVNfNmVfb0FYLUlsTDNIJl9uY19odD1zY29udGVudC5mbW5sMy0xLmZuYSZfbmNfdHA9NiZvaD1lZmExMmZlZmMwYzcyYjA3MzAzMDI5MTcxNzE1MDljNyZvZT01RjVFRkQzM1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtaW5zdGFncmFtXCI+PC9pPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9cIj48L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnN0YWdyYW0tYm94XCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9zY29udGVudC5mbW5sMy0xLmZuYS5mYmNkbi5uZXQvdi90MS4wLTkvcDk2MHg5NjAvMTE3NTM3NDY4XzExNzk3MzA2MTkwNTYyMjNfMTM4ODI1MTY0MDQ3Mjk5NzE1M19vLmpwZz9fbmNfY2F0PTEwMSZfbmNfc2lkPTExMDQ3NCZfbmNfZXVpMj1BZUZING8zQnMwVjVnTkZNQkpKT3JlYktFNjJfRWdsVTZXVVRyYjhTQ1ZUcFpjS0ljX0JOcGFwdi1rWkZwSFlkZWQ3OUJtUWdBZWx6dzV1SmRwY3ZRRl9rJl9uY19vaGM9MU5HVVpiXzRYRjRBWDhZSEQ0NyZfbmNfaHQ9c2NvbnRlbnQuZm1ubDMtMS5mbmEmX25jX3RwPTYmb2g9M2JiOWM2MTQ3MWZkNjZkNjU3MDczYzk3NjA1OGI5MTUmb2U9NUY1RDIxQkNcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWluc3RhZ3JhbVwiPjwvaT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vXCI+PC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zdGFncmFtLWJveFwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vc2NvbnRlbnQuZm1ubDMtMS5mbmEuZmJjZG4ubmV0L3YvdDEuMC05L3A5NjB4OTYwLzExNzI2MTc4Nl8xMTcyOTIwMzg5NzM3MjQ2XzMyNTkwOTg5MDg2OTYwNTgzMzhfby5qcGc/X25jX2NhdD0xMDMmX25jX3NpZD0wYmU0MjQmX25jX2V1aTI9QWVGWHN6YlhVNUsyX203SjBrcFpqRmstOVhTRVNldXE3ZlAxZElSSjY2cnQ4eF9vZE96SHdVRWRENUVpNTluN2pTckpsMUtDcVkyRDFYZkRnanRUc1BFMiZfbmNfb2hjPVZZejdsdTRjTTNJQVgtTHZzODImX25jX2h0PXNjb250ZW50LmZtbmwzLTEuZm5hJl9uY190cD02Jm9oPTIyYmQzMWZlNDY4OGIxMjcwMGIwZTMzODJlZjAwZDU1Jm9lPTVGNjA2NUEzXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cImltYWdlXCJcclxuICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1pbnN0YWdyYW1cIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL1wiPjwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluc3RhZ3JhbS1ib3hcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3Njb250ZW50LmZtbmwzLTEuZm5hLmZiY2RuLm5ldC92L3QxLjAtOS9wOTYweDk2MC8xMTAwMzg5MDlfMTE2NDU4MTc3MzkwNDQ0MV81ODI0OTI4NjA3ODg3OTE3MDg2X28uanBnP19uY19jYXQ9MTAzJl9uY19zaWQ9MTEwNDc0Jl9uY19ldWkyPUFlR01vS2NZR3RpTDRmcHJfa0VOUzM1M0tsSTRhVUpqNXVJcVVqaHBRbVBtNGgtcldKam5DeWxoOW9GR2RhQjluRndwREV2OG94d0pRV0pPOVFzV3hUbmgmX25jX29oYz1QUC1ScW5BYnloQUFYOG1GWEo4Jl9uY19odD1zY29udGVudC5mbW5sMy0xLmZuYSZfbmNfdHA9NiZvaD0yMDQ1YzNmYzZmMjNmZTZmODc2MWRiYTYxMWZjMjM1MiZvZT01RjVFMTQ0MFwiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtaW5zdGFncmFtXCI+PC9pPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9cIj48L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnN0YWdyYW0tYm94XCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9zY29udGVudC5mbW5sMy0yLmZuYS5mYmNkbi5uZXQvdi90MS4wLTkvMTA3MDA4NDY4XzExNTI4MDkxMzE3NDgzNzJfNzc2MzQ1NjIxNDYwMjUxMjU1M19uLmpwZz9fbmNfY2F0PTEwOSZfbmNfc2lkPTgwMjRiYiZfbmNfZXVpMj1BZUZTYkhTTmdtMWRBQWYxVktySmhIeF9PNXo3cDFuNGlpYzduUHVuV2ZpS0oyMHVyTDM5TWZad3JKV21POEdHM0hGWG5oTGtOR0M0VTQwTzRXVTFRREJpJl9uY19vaGM9WkVRaTIzZV9RandBWF8tSE9MNiZfbmNfaHQ9c2NvbnRlbnQuZm1ubDMtMi5mbmEmb2g9MjAxY2VhZmU4MTVjNDI1M2JkY2E1NGExOTA2ZTZjMDImb2U9NUY1RDVDRDlcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWluc3RhZ3JhbVwiPjwvaT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vXCI+PC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zdGFncmFtLWJveFwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vc2NvbnRlbnQuZm1ubDMtMS5mbmEuZmJjZG4ubmV0L3YvdDEuMC05LzEwNzMwNzAwMF8xMTUwMzM2NjE1MzI4OTU3XzMyODMwNjE2MzA1NDMzNzI5Nzlfbi5qcGc/X25jX2NhdD0xMDEmX25jX3NpZD0xMTA0NzQmX25jX2V1aTI9QWVIdUcyXzF6bzVfNzlHdFV1TXNaMjE2YnlpaS1RMms0YWR2S0tMNURhVGhwOUxDcjdKVVQ2TDZva085MXUwWEFuYWd6UVpJNXF4cVlYSW5lX1hxdEtLdiZfbmNfb2hjPXJWSlhpanVtM1VrQVhfVk81YnomX25jX2h0PXNjb250ZW50LmZtbmwzLTEuZm5hJm9oPTZkZjdhYjNlNDYyMjQyYmM3ZjRjNmUwMzRmNDZhZjY5Jm9lPTVGNUUxODRFXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cImltYWdlXCJcclxuICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1pbnN0YWdyYW1cIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL1wiPjwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluc3RhZ3JhbS1ib3hcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3Njb250ZW50LmZtbmwzLTIuZm5hLmZiY2RuLm5ldC92L3QxLjAtOS9wOTYweDk2MC84NzQ1OTgzN18yNjY0MjEzMTE3MTU1MjUxXzEzODA3NTg2OTYzNDIwNjEwNTZfby5qcGc/X25jX2NhdD0xMDQmX25jX3NpZD03YWVkMDgmX25jX2V1aTI9QWVFM3hUa3NlWXNYel9sYVRLNXVYdlpxVUd3enpKMFdRckpRYkRQTW5SWkNzbmROdm54RVFoTlhsTGxNYmFaY2h2RjBfQXlVZktsNnAwYXJndGtaeE0zZCZfbmNfb2hjPWFLUVp2N0JtSi1ZQVgtN2syWlEmX25jX2h0PXNjb250ZW50LmZtbmwzLTIuZm5hJl9uY190cD02Jm9oPTM4ZDYxZWM5YjcxNWY2MTk5YzU3NDVlZTc0ZTdhZTkzJm9lPTVGNUZGMkIxXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cImltYWdlXCJcclxuICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1pbnN0YWdyYW1cIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vXCI+PC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvT3dsQ2Fyb3VzZWw+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIFwiXCJcclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnN0YWdyYW1QaG90bztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuY29uc3QgT3dsQ2Fyb3VzZWwgPSBkeW5hbWljKGltcG9ydCgncmVhY3Qtb3dsLWNhcm91c2VsMycpKTtcclxuXHJcbmNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgbmF2OiBmYWxzZSxcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICBtYXJnaW46IDMwLFxyXG4gICAgYXV0b3BsYXlIb3ZlclBhdXNlOiB0cnVlLFxyXG4gICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICBuYXZUZXh0OiBbXHJcbiAgICAgICAgXCI8aSBjbGFzcz0nZmFzIGZhLWNoZXZyb24tbGVmdCc+PC9pPlwiLFxyXG4gICAgICAgIFwiPGkgY2xhc3M9J2ZhcyBmYS1jaGV2cm9uLXJpZ2h0Jz48L2k+XCJcclxuICAgIF0sXHJcbiAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgMDoge1xyXG4gICAgICAgICAgICBpdGVtczogMSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICBpdGVtczogMixcclxuICAgICAgICB9LFxyXG4gICAgICAgIDEwMjQ6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDMsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBOZXdzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0geyBcclxuICAgICAgICBkaXNwbGF5OiBmYWxzZSxcclxuICAgICAgICBwYW5lbDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpeyBcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGlzcGxheTogdHJ1ZSB9KSBcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibmV3cy1hcmVhIHB0Yi02MFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPjxzcGFuIGNsYXNzTmFtZT1cImRvdFwiPjwvc3Bhbj4gV2UgLSBPcmRlciBOZXdzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGlzcGxheSA/IDxPd2xDYXJvdXNlbCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmV3cy1zbGlkZXMgb3dsLWNhcm91c2VsIG93bC10aGVtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5vcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtbmV3cy1wb3N0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3MtaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Jsb2ctZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL2Jsb2ctaW1nMS5qcGdcIil9IGFsdD1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3cy1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Jsb2ctZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+U3R5bGluZyBXaGl0ZSBKZWFucyBhZnRlciBMYWJvciBEYXk8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImF1dGhvclwiPkJ5IDxhIGhyZWY9XCIjXCI+QWRtaW48L2E+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Jsb2ctZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWxpZ2h0XCI+UmVhZCBNb3JlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLW5ld3MtcG9zdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9ibG9nLWltZzIuanBnXCIpfSBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3MtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlN0eWxpbmcgV2hpdGUgSmVhbnMgYWZ0ZXIgTGFib3IgRGF5PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhdXRob3JcIj5CeSA8YSBocmVmPVwiI1wiPkFkbWluPC9hPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saWdodFwiPlJlYWQgTW9yZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1uZXdzLXBvc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3cy1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYmxvZy1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvYmxvZy1pbWczLmpwZ1wiKX0gYWx0PVwiaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYmxvZy1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5TdHlsaW5nIFdoaXRlIEplYW5zIGFmdGVyIExhYm9yIERheTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aG9yXCI+QnkgPGEgaHJlZj1cIiNcIj5BZG1pbjwvYT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYmxvZy1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tbGlnaHRcIj5SZWFkIE1vcmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtbmV3cy1wb3N0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3MtaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Jsb2ctZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL2Jsb2ctaW1nNC5qcGdcIil9IGFsdD1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3cy1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Jsb2ctZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+U3R5bGluZyBXaGl0ZSBKZWFucyBhZnRlciBMYWJvciBEYXk8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImF1dGhvclwiPkJ5IDxhIGhyZWY9XCIjXCI+QWRtaW48L2E+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLjwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saWdodFwiPlJlYWQgTW9yZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1uZXdzLXBvc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3MtaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL2Jsb2ctaW1nNS5qcGdcIil9IGFsdD1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3MtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Jsb2ctZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlN0eWxpbmcgV2hpdGUgSmVhbnMgYWZ0ZXIgTGFib3IgRGF5PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhdXRob3JcIj5CeSA8YSBocmVmPVwiI1wiPkFkbWluPC9hPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tbGlnaHRcIj5SZWFkIE1vcmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvT3dsQ2Fyb3VzZWw+IDogJyd9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld3M7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmNvbnN0IE93bENhcm91c2VsID0gZHluYW1pYyhpbXBvcnQoJ3JlYWN0LW93bC1jYXJvdXNlbDMnKSk7XHJcblxyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIG5hdjogZmFsc2UsXHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIGF1dG9wbGF5SG92ZXJQYXVzZTogdHJ1ZSxcclxuICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgbmF2VGV4dDogW1xyXG4gICAgICAgIFwiPGkgY2xhc3M9J2ZhcyBmYS1jaGV2cm9uLWxlZnQnPjwvaT5cIixcclxuICAgICAgICBcIjxpIGNsYXNzPSdmYXMgZmEtY2hldnJvbi1yaWdodCc+PC9pPlwiXHJcbiAgICBdLFxyXG4gICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgIDA6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDMsXHJcbiAgICAgICAgICAgIG1hcmdpbjogMzAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICA1NzY6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgaXRlbXM6IDUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAxMjAwOiB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiA2LFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgUGFydG5lciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHsgXHJcbiAgICAgICAgZGlzcGxheTogZmFsc2UsXHJcbiAgICAgICAgcGFuZWw6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXsgXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXk6IHRydWUgfSkgXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJ0bmVyLWFyZWFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGlzcGxheSA/IDxPd2xDYXJvdXNlbCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFydG5lci1zbGlkZXMgb3dsLWNhcm91c2VsIG93bC10aGVtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5vcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJ0bmVyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL3BhcnRuZXIxLnBuZ1wiKX0gYWx0PVwiaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcnRuZXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvcGFydG5lcjIucG5nXCIpfSBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFydG5lci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9wYXJ0bmVyMy5wbmdcIil9IGFsdD1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJ0bmVyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL3BhcnRuZXI0LnBuZ1wiKX0gYWx0PVwiaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcnRuZXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvcGFydG5lcjUucG5nXCIpfSBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFydG5lci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9wYXJ0bmVyNi5wbmdcIil9IGFsdD1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvT3dsQ2Fyb3VzZWw+IDogJyd9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFydG5lcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFN1YnNjcmliZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic3Vic2NyaWJlLWFyZWEgcHRiLTYwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NsZXR0ZXItY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5TdWJzY3JpYmUgdG8gb3VyIG5ld3NsZXR0ZXI8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkEgc2hvcnQgc2VudGVuY2UgZGVzY3JpYmluZyB3aGF0IHNvbWVvbmUgd2lsbCByZWNlaXZlIGJ5IHN1YnNjcmliaW5nPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwibmV3c2xldHRlci1mb3JtXCIgZGF0YS10b2dnbGU9XCJ2YWxpZGF0b3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsIGFkZHJlc3NcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIkVNQUlMXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJzY3JpYmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidmFsaWRhdG9yLW5ld3NsZXR0ZXJcIiBjbGFzc05hbWU9XCJmb3JtLXJlc3VsdFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3Vic2NyaWJlO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuY29uc3QgT3dsQ2Fyb3VzZWwgPSBkeW5hbWljKGltcG9ydChcInJlYWN0LW93bC1jYXJvdXNlbDNcIikpO1xyXG5cclxuY29uc3Qgb3B0aW9ucyA9IHtcclxuICBsb29wOiB0cnVlLFxyXG4gIGF1dG9wbGF5VGltZW91dDogNzAwMCxcclxuICBuYXY6IGZhbHNlLFxyXG4gIGRvdHM6IHRydWUsXHJcbiAgc21hcnRTcGVlZDogMTUwMCxcclxuLy8gICBkb3RzU3BlZWQ6IDE1MDAwLFxyXG4gIGF1dG9wbGF5SG92ZXJQYXVzZTogdHJ1ZSxcclxuICBpdGVtczogMSxcclxuICBhdXRvcGxheTogdHJ1ZSxcclxuICBuYXZUZXh0OiBbXHJcbiAgICBcIjxpIGNsYXNzPSdmYXMgZmEtY2hldnJvbi1sZWZ0Jz48L2k+XCIsXHJcbiAgICBcIjxpIGNsYXNzPSdmYXMgZmEtY2hldnJvbi1yaWdodCc+PC9pPlwiLFxyXG4gIF0sXHJcbn07XHJcblxyXG5jbGFzcyBUZXN0aW1vbmlhbHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgZGlzcGxheTogZmFsc2UsXHJcbiAgICBwYW5lbDogdHJ1ZSxcclxuICB9O1xyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5OiB0cnVlIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGVzdGltb25pYWxzLWFyZWEgcHRiLTYwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLmRpc3BsYXkgPyAoXHJcbiAgICAgICAgICAgIDxPd2xDYXJvdXNlbFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRlc3RpbW9uaWFscy1zbGlkZXMgb3dsLWNhcm91c2VsIG93bC10aGVtZVwiXHJcbiAgICAgICAgICAgICAgey4uLm9wdGlvbnN9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS10ZXN0aW1vbmlhbHNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpZW50LWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL3Njb250ZW50LmZtbmw3LTEuZm5hLmZiY2RuLm5ldC92L3QxLjAtOS8xMzY3MjU4OTZfMjExNzk4NjA2OTgyMDg2XzQ2MTUzOTI1MjY2MTMyNjEzNTVfby5wbmc/X25jX2NhdD0xMDQmY2NiPTImX25jX3NpZD0wOWNiZmUmX25jX2V1aTI9QWVHWWhXenQydV9ZX1paMzdVY0ttUzFpQjNYR3l3V3RyV0lIZGNiTEJhMnRZaEliOEJXWFlEcDNuaE1CY2pnZWJXNHdRV3ljTjl2UGdscGRLbmxWdzVfZCZfbmNfb2hjPWdTdU1pUTRBZGVBQVg4S3pjX18mX25jX29jPUFRbHBQQkpZUjAxeEE3anVwZE9zSmJGNGk5Y2d5a3hyMU9WMmZuWXJfaWhtUjA2TGlvT21ZQUxlYndPNHd0V3NobG8mX25jX2h0PXNjb250ZW50LmZtbmw3LTEuZm5hJm9oPWQ3Mjg1OTUwMDlkODJiZDQyZjM0MjkxMDg3NGEwMDQ0Jm9lPTYwMjM2NzRDXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogXCIxcmVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIEFuZyBpLVdoZWVsc1BIIGF5IGlzYW5nIHNhbWFoYW5nIHBhbmcgSW50ZXItZ2FsYWN0aWMgbmFcclxuICAgICAgICAgICAgICAgICAgbmFuaXJhaGFuIHNhIHBsYW5ldGFuZyBFYXJ0aCB1cGFuZyBtYWdoYXRpZCBuZyBrYXNpeWFoYW5cclxuICAgICAgICAgICAgICAgICAgaGFuZ2dhbmcgc2EgZHVsbyBuZyBsdXBhbG9wIG5nIGRhaWdkaWcuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGllbnQtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgZm9udFNpemU6IFwiMXJlbVwiIH19Pkt1cmluPC9oND5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMXJlbVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIEZvdW5kZXIgYXQgaS1XaGVlbHMuc2hvcFxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtdGVzdGltb25pYWxzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaWVudC1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9zY29udGVudC5mbW5sNy0xLmZuYS5mYmNkbi5uZXQvdi90MS4wLTkvMTM2NzI1ODk2XzIxMTc5ODYwNjk4MjA4Nl80NjE1MzkyNTI2NjEzMjYxMzU1X28ucG5nP19uY19jYXQ9MTA0JmNjYj0yJl9uY19zaWQ9MDljYmZlJl9uY19ldWkyPUFlR1loV3p0MnVfWV9aWjM3VWNLbVMxaUIzWEd5d1d0cldJSGRjYkxCYTJ0WWhJYjhCV1hZRHAzbmhNQmNqZ2ViVzR3UVd5Y045dlBnbHBkS25sVnc1X2QmX25jX29oYz1nU3VNaVE0QWRlQUFYOEt6Y19fJl9uY19vYz1BUWxwUEJKWVIwMXhBN2p1cGRPc0piRjRpOWNneWt4cjFPVjJmbllyX2lobVIwNkxpb09tWUFMZWJ3TzR3dFdzaGxvJl9uY19odD1zY29udGVudC5mbW5sNy0xLmZuYSZvaD1kNzI4NTk1MDA5ZDgyYmQ0MmYzNDI5MTA4NzRhMDA0NCZvZT02MDIzNjc0Q1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogXCIxcmVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIE1ha2FrYXNpZ3VyYWRvIG5hIHNhIGktV2hlZWxzUEggYXkgbWFpaGFoYXRpZCBuZyBNQUFZT1MgYXRcclxuICAgICAgICAgICAgICAgICAgTUFCSUxJUyBhbmcgaXlvbmcgb3JkZXIgc2EgcGF0dXR1bmd1aGFuIG5pdG8uIEhpbmRpIGthdHVsYWQgbmdcclxuICAgICAgICAgICAgICAgICAgcmVsYXN5b24gbnlvIG5hIGhpbmRpIG5hIG5nYSBNQUFZT1MsIG1hYmlsaXMgcGEgTkFUQVBPUy5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaWVudC1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBmb250U2l6ZTogXCIxcmVtXCIgfX0+SmV0aHJvIFNpb2NvIExvcmlhPC9oND5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMXJlbVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIEZvdW5kZXIgYXQgaS1XaGVlbHMuc2hvcFxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtdGVzdGltb25pYWxzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaWVudC1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9zY29udGVudC5mbW5sNy0xLmZuYS5mYmNkbi5uZXQvdi90MS4wLTkvMTM2NzI1ODk2XzIxMTc5ODYwNjk4MjA4Nl80NjE1MzkyNTI2NjEzMjYxMzU1X28ucG5nP19uY19jYXQ9MTA0JmNjYj0yJl9uY19zaWQ9MDljYmZlJl9uY19ldWkyPUFlR1loV3p0MnVfWV9aWjM3VWNLbVMxaUIzWEd5d1d0cldJSGRjYkxCYTJ0WWhJYjhCV1hZRHAzbmhNQmNqZ2ViVzR3UVd5Y045dlBnbHBkS25sVnc1X2QmX25jX29oYz1nU3VNaVE0QWRlQUFYOEt6Y19fJl9uY19vYz1BUWxwUEJKWVIwMXhBN2p1cGRPc0piRjRpOWNneWt4cjFPVjJmbllyX2lobVIwNkxpb09tWUFMZWJ3TzR3dFdzaGxvJl9uY19odD1zY29udGVudC5mbW5sNy0xLmZuYSZvaD1kNzI4NTk1MDA5ZDgyYmQ0MmYzNDI5MTA4NzRhMDA0NCZvZT02MDIzNjc0Q1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogXCIxcmVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIFNhIGktV2hlZWxzUEggLCBtYXJhbWluZyBidW5kbGVzLCBmbG93ZXJzLCBiaWtlcyBhdCBpYmFcclxuICAgICAgICAgICAgICAgICAgcGEgbmEgcHdlZGVuZyBwYWdwaWxpYW4gYXQgbWFrYWthc2lndXJhZG8gYW5nIGN1c3RvbWVyIG5hXHJcbiAgICAgICAgICAgICAgICAgIGxlZ2l0IGF0IHRvdG9vIGFuZyBtZ2EgaXRlbXMgZGl0by4gT28gbWFzIGxlZ2l0IHBhIHNhXHJcbiAgICAgICAgICAgICAgICAgIHBhZ21hbWFoYWxhbiBueW8uXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGllbnQtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgZm9udFNpemU6IFwiMXJlbVwiIH19PkFyY2l2YWwgUGFsbWE8L2g0PlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIxcmVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgRm91bmRlciBhdCBpLVdoZWVscy5zaG9wXHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS10ZXN0aW1vbmlhbHNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpZW50LWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3Njb250ZW50LmZtbmw3LTEuZm5hLmZiY2RuLm5ldC92L3QxLjAtOS8xMzY3MjU4OTZfMjExNzk4NjA2OTgyMDg2XzQ2MTUzOTI1MjY2MTMyNjEzNTVfby5wbmc/X25jX2NhdD0xMDQmY2NiPTImX25jX3NpZD0wOWNiZmUmX25jX2V1aTI9QWVHWWhXenQydV9ZX1paMzdVY0ttUzFpQjNYR3l3V3RyV0lIZGNiTEJhMnRZaEliOEJXWFlEcDNuaE1CY2pnZWJXNHdRV3ljTjl2UGdscGRLbmxWdzVfZCZfbmNfb2hjPWdTdU1pUTRBZGVBQVg4S3pjX18mX25jX29jPUFRbHBQQkpZUjAxeEE3anVwZE9zSmJGNGk5Y2d5a3hyMU9WMmZuWXJfaWhtUjA2TGlvT21ZQUxlYndPNHd0V3NobG8mX25jX2h0PXNjb250ZW50LmZtbmw3LTEuZm5hJm9oPWQ3Mjg1OTUwMDlkODJiZDQyZjM0MjkxMDg3NGEwMDQ0Jm9lPTYwMjM2NzRDXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiBcIjFyZW1cIiB9fT5cclxuICAgICAgICAgICAgICAgICAgQW5nIGktV2hlZWxzUEggYXkgaXNhbmcgc2FtYWhhbiBuYSBrdW1ha2F0YXdhbiBzYSBiYXdhdFxyXG4gICAgICAgICAgICAgICAgICB0YW8sIG1hdGFuZGEsIGJhdGEsIG1heSBuZ2lwaW4gbWFuIG8gd2FsYSwgbmEgZ3VzdG9uZyBpaGF0aWRcclxuICAgICAgICAgICAgICAgICAgYW5nIGthbmlsYW5nIG5hcmFyYW1kYW1hbiBwYXR1bmdvIHNhIG1nYSBtYWhhaGFsYWdhbmcgdGFvIHNhXHJcbiAgICAgICAgICAgICAgICAgIGthbmlsYW5nIGJ1aGF5LiBQZXJvIHB3ZWRlIG5hIGRpbiBrYWhpdCBoaW5kaSBtYWhhbGFnYS5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaWVudC1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBmb250U2l6ZTogXCIxcmVtXCIgfX0+UGF0cmljayBTZXJvPC9oND5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMXJlbVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIEZvdW5kZXIgYXQgaS1XaGVlbHMuc2hvcFxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Pd2xDYXJvdXNlbD5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXN0aW1vbmlhbHM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY2xhc3MgRm9vdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3Rlci1hcmVhXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1mb290ZXItd2lkZ2V0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17eyBtYXJnaW46IFwiYXV0b1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvbG9nb3MvbG9nby5wbmdcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxvZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBXZSBvZmZlciB0aGUgYmVzdCBicmFuZHMgb2YgQmlrZXMsIEUtU2Nvb3RlciwgRS1CaWtlcyAmIEUtUmlkZXMgYXZhaWxhYmxlIGluIHRoZSBtYXJrZXQuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLWZvb3Rlci13aWRnZXRcIj5cclxuICAgICAgICAgICAgICAgIDxoMz5RdWljayBMaW5rczwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInF1aWNrLWxpbmtzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YT5BYm91dCBVczwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2ZhcVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+RmFxJ3M8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3VzdG9tZXItc2VydmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+Q3VzdG9tZXIgU2VydmljZXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPiAqL31cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdC11c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+Q29udGFjdCBVczwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1mb290ZXItd2lkZ2V0XCI+XHJcbiAgICAgICAgICAgICAgICA8aDM+SW5mb3JtYXRpb248L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJpbmZvcm1hdGlvbi1saW5rc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+QWJvdXQgVXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdC11c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+Q29udGFjdCBVczwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+ICovfVxyXG4gICAgICAgICAgICAgICAgICB7LyogPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2l6aW5nLWd1aWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YT5TaXppbmcgR3VpZGU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPiAqL31cclxuICAgICAgICAgICAgICAgICAgey8qIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2N1c3RvbWVyLXNlcnZpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhPkN1c3RvbWVyIFNlcnZpY2VzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT4gKi99XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1mb290ZXItd2lkZ2V0XCI+XHJcbiAgICAgICAgICAgICAgICA8aDM+Q29udGFjdCBVczwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZvb3Rlci1jb250YWN0LWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1tYXAtbWFya2VyLWFsdFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICBMb2NhdGlvbiAoTWFuaWxhIEJyYW5jaCk6IEthbGF5YWFuIEF2ZW51ZSwgUGl0b2dvLCBNYWthdGlcclxuICAgICAgICAgICAgICAgICAgICBDaXR5LCBQaGlsaXBwaW5lc1xyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBob25lXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6KCsxMjMpIDQ1Ni03ODk4XCI+IDA5MTYgNTA5IDEwODMgKEdMT0JFKTwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1waG9uZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwidGVsOigrMTIzKSA0NTYtNzg5OFwiPjA5NjEgODEwIDAxMjggKFNNQVJUKTwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1lbnZlbG9wZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICBFbWFpbCBVczp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpzdXBwb3J0QFdlIC0gT3JkZXIuY29tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBpLVdoZWVsczI2QGdtYWlsLmNvbVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgey8qIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZmF4XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIEZheDogPGEgaHJlZj1cInRlbDorMTIzNDU2XCI+KzEyMzQ1NjwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9saT4gKi99XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvcHlyaWdodC1hcmVhXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICA8cD5Db3B5cmlnaHQgQCAyMDIzIGktV2hlZWxzUEg8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwYXltZW50LWNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy92aXNhLnBuZ1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL21hc3RlcmNhcmQucG5nXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvbWFzdGVyY2FyZDIucG5nXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvdmlzYTIucG5nXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvZXhwcmVzc2NhcmQucG5nXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQ2FydCBmcm9tIFwiLi4vTW9kYWwvQ2FydFwiO1xyXG5pbXBvcnQgeyBkZWNyeXB0RGF0YSB9IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2NhcnRBY3Rpb25zXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmxldCBob3N0ID0gcHJvY2Vzcy5lbnYuQVBJX1VSTDtcclxuXHJcbmZ1bmN0aW9uIE1lZ2FNZW51KHByb3BzKSB7XHJcbiAgY29uc3QgW2NhcnRMZW5ndGgsIHNldGNhcnRMZW5ndGhdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0c3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgZGlzcGxheTogZmFsc2UsXHJcbiAgICBzZWFyY2hGb3JtOiBmYWxzZSxcclxuICAgIGNvbGxhcHNlZDogdHJ1ZSxcclxuICAgIGNoZWNrQ2FydDogZmFsc2UsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRjYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FydCA9ICgpID0+IHtcclxuICAgIHNldHN0YXRlKChwcmV2U3RhdGUpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBkaXNwbGF5OiAhcHJldlN0YXRlLmRpc3BsYXksXHJcbiAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoRm9ybSA9ICgpID0+IHtcclxuICAgIHNldHN0YXRlKChwcmV2U3RhdGUpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzZWFyY2hGb3JtOiAhcHJldlN0YXRlLnNlYXJjaEZvcm0sXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVOYXZiYXIgPSAoKSA9PiB7XHJcbiAgICBzZXRzdGF0ZSh7XHJcbiAgICAgIGNvbGxhcHNlZDogIXN0YXRlLmNvbGxhcHNlZCxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgY29uc29sZS5sb2coc3RhdGUpO1xyXG4gIGNvbnN0IGZldGNoQ2F0ZWdvcmllcyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7aG9zdH0vYXBpL3VzZXIvY2F0ZWdvcnkvYCk7XHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICBzZXRjYXRlZ29yaWVzKHJlcy5kYXRhLmNhdGVnb3JpZXMpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge31cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hDYXRlZ29yaWVzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IG15UHJvZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2Nlc3MuZW52LkNBUlRfQ09PS0lFKVxyXG4gICAgICA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2Nlc3MuZW52LkNBUlRfQ09PS0lFKVxyXG4gICAgICA6IFtdO1xyXG4gICAgbGV0IGRlY3J5cHRlZERhdGEgPSBkZWNyeXB0RGF0YShteVByb2QpO1xyXG4gICAgc2V0Y2FydExlbmd0aChkZWNyeXB0ZWREYXRhLmxlbmd0aCk7XHJcbiAgfSwgW3Byb3BzLnByb2R1Y3RzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgZWxlbWVudElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXJcIik7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMTcwKSB7XHJcbiAgICAgICAgZWxlbWVudElkLmNsYXNzTGlzdC5hZGQoXCJpcy1zdGlja3lcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudElkLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1zdGlja3lcIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgeyBjb2xsYXBzZWQgfSA9IHN0YXRlO1xyXG4gIGNvbnN0IGNsYXNzT25lID0gY29sbGFwc2VkXHJcbiAgICA/IFwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCJcclxuICAgIDogXCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2Ugc2hvd1wiO1xyXG4gIGNvbnN0IGNsYXNzVHdvID0gY29sbGFwc2VkXHJcbiAgICA/IFwibmF2YmFyLXRvZ2dsZXIgbmF2YmFyLXRvZ2dsZXItcmlnaHQgY29sbGFwc2VkXCJcclxuICAgIDogXCJuYXZiYXItdG9nZ2xlciBuYXZiYXItdG9nZ2xlci1yaWdodFwiO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1hcmVhXCI+XHJcbiAgICAgICAgPGRpdiBpZD1cIm5hdmJhclwiIGNsYXNzTmFtZT1cImNvbWVyby1uYXZcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbWQgbmF2YmFyLWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlTmF2YmFyfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc1R3b31cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCJcclxuICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCJcclxuICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9sb2dvcy9sb2dvLnBuZ1wiKX1cclxuICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTByZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXJfbG9nb1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWV3X2NhcnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFzIGZhLXNob3BwaW5nLWJhZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJhZGdlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2FydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7Y2FydExlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc09uZX0gaWQ9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICB7Lyp7Y2F0ZWdvcmllcy5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnksIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5LnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeS5zdWJfY2F0ZWdvcmllcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9IGNsYXNzTmFtZT1cIm5hdi1pdGVtIHAtcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBrZXk9e2l9IGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkubmFtZX17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLWRvd25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5LnN1Yl9jYXRlZ29yaWVzLm1hcCgoc3ViQ2F0LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0gY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2Avc3ViY2F0ZWdvcnkvJHtzdWJDYXQuc2x1Z31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJDYXQubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0gY2xhc3NOYW1lPVwibmF2LWl0ZW0gbWVnYW1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2NhdGVnb3J5LyR7Y2F0ZWdvcnkuc2x1Z31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+e2NhdGVnb3J5Lm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgKSA6IG51bGx9ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG1lZ2FtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+Um9hZCBiaWtlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBtZWdhbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPk1vdW50YWluIGJpa2U8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG1lZ2FtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+Rml4aWUgYmlrZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbWVnYW1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5FLWJpa2U8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIHAtcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQnVkZ2V0IDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLWRvd25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYnVkZ2V0P2Y9MCZ0PTE1MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkJFTE9XIOKCsTEsNTAwPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2J1ZGdldD9mPTE1MDAmdD0zMDAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj7igrExLDUwMCAtIOKCsTMsMDAwPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2J1ZGdldD9mPTMwMDAmdD00NTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj7igrEzLDAwMCAtIOKCsTQsNTAwPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2J1ZGdldD9mPTQ1MDAmdD0xMDAwMDAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj7igrE0LDUwMCBBTkQgQUJPVkU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdGhlcnMtb3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2VhcmNoRm9ybX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1idG4gZmFzIGZhLXNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBzdGF0ZS5zZWFyY2hGb3JtID8gXCJub25lXCIgOiBcImJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID48L2k+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZWFyY2hGb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY2xvc2UtYnRuIGZhcyBmYS10aW1lcyAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5zZWFyY2hGb3JtID8gXCJhY3RpdmVcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgID48L2k+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1vdmVybGF5IHNlYXJjaC1wb3B1cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBzdGF0ZS5zZWFyY2hGb3JtID8gXCJibG9ja1wiIDogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIvc2VhcmNoXCIgY2xhc3NOYW1lPVwic2VhcmNoLWZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2VhcmNoLWJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zZWFyY2hcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2FydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDYXJ0KHtjYXJ0TGVuZ3RofSl7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zaG9wcGluZy1iYWdcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3N0YXRlLmRpc3BsYXkgPyA8Q2FydCBvbkNsaWNrPXtoYW5kbGVDYXJ0fSAvPiA6IFwiXCJ9XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9kdWN0czogc3RhdGUuYWRkZWRJdGVtcyxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKE1lZ2FNZW51KTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVG9wUGFuZWwgZnJvbSBcIi4vVG9wUGFuZWxcIjtcclxuaW1wb3J0IFRvcEhlYWRlciBmcm9tIFwiLi9Ub3BIZWFkZXJcIjtcclxuaW1wb3J0IE1lZ2FNZW51IGZyb20gXCIuL01lZ2FNZW51XCI7XHJcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSBcIm5wcm9ncmVzc1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuUm91dGVyLm9uUm91dGVDaGFuZ2VTdGFydCA9ICh1cmwpID0+IE5Qcm9ncmVzcy5zdGFydCgpO1xyXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUNvbXBsZXRlID0gKHVybCkgPT4gTlByb2dyZXNzLmRvbmUoKTtcclxuUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9ICh1cmwpID0+IE5Qcm9ncmVzcy5kb25lKCk7XHJcblxyXG5jbGFzcyBOYXZiYXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8VG9wUGFuZWwgLz5cclxuICAgICAgICA8VG9wSGVhZGVyIC8+XHJcbiAgICAgICAgPE1lZ2FNZW51IC8+XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBXaXNobGlzdCBmcm9tIFwiLi4vTW9kYWwvV2lzaGxpc3RcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCB7IGxvZ291dCB9IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL3VzZXJBY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiBUb3BIZWFkZXIocHJvcHMpIHtcclxuICBjb25zdCBbc3RhdGUsIHNldHN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIGRpc3BsYXk6IGZhbHNlLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbdXNlciwgc2V0dXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGxldCBlbmNyeXB0ZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvY2Vzcy5lbnYuVVNFUl9DT09LSUUpXHJcbiAgICAvLyAgID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvY2Vzcy5lbnYuVVNFUl9DT09LSUUpXHJcbiAgICAvLyAgIDogW107XHJcblxyXG4gICAgLy8gbGV0IHVzZXIgPSBkZWNyeXB0VXNlckRhdGEoZW5jcnlwdGVkRGF0YSk7XHJcbiAgICBsZXQgdG9rZW4gPSBjb29raWUuZ2V0KFwiX3d1c19CSktcIik7XHJcbiAgICBjb25zb2xlLmxvZyh0b2tlbik7XHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgc2V0dXNlcih0b2tlbik7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVXaXNobGlzdCA9ICgpID0+IHtcclxuICAgIHNldHN0YXRlKChwcmV2U3RhdGUpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBkaXNwbGF5OiAhcHJldlN0YXRlLmRpc3BsYXksXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1oZWFkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTcgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidG9wLWhlYWRlci1uYXZcIj5cclxuICAgICAgICAgICAgICAgIHshdXNlciA/IChcclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhPkxvZ2luPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+QWJvdXQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+T3VyIFN0b3JlczwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9mYXFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5GQVEnczwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0LXVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+Q29udGFjdDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTUgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidG9wLWhlYWRlci1yaWdodC1uYXZcIj5cclxuICAgICAgICAgICAgICAgIHsvKiA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI3Nob3BwaW5nV2lzaGxpc3RNb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlV2lzaGxpc3QoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2lzaGxpc3QgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWhlYXJ0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4gKi99XHJcbiAgICAgICAgICAgICAgICB7LyogPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29tcGFyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbXBhcmUgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJhbGFuY2Utc2NhbGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPiAqL31cclxuICAgICAgICAgICAgICAgIHsvKiA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhbmd1YWdlcy1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj5Fbmc8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5HZXI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj5TcGFuPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4gKi99XHJcbiAgICAgICAgICAgICAgICB7dXNlciA/IChcclxuICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvZmlsZSA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gbG9nb3V0KCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dvdXQgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNpZ24tb3V0LWFsdFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPExpbmsgaHJlZj1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zaWduLWluLWFsdFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHtzdGF0ZS5kaXNwbGF5ID8gPFdpc2hsaXN0IG9uQ2xpY2s9e2hhbmRsZVdpc2hsaXN0fSAvPiA6IFwiXCJ9XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvcEhlYWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuY29uc3QgT3dsQ2Fyb3VzZWwgPSBkeW5hbWljKGltcG9ydChcInJlYWN0LW93bC1jYXJvdXNlbDNcIikpO1xyXG5cclxuY29uc3Qgb3B0aW9ucyA9IHtcclxuICBsb29wOiB0cnVlLFxyXG4gIG5hdjogZmFsc2UsXHJcbiAgZG90czogZmFsc2UsXHJcbiAgYXV0b3BsYXlIb3ZlclBhdXNlOiB0cnVlLFxyXG4gIGF1dG9wbGF5OiB0cnVlLFxyXG4gIGFuaW1hdGVPdXQ6IFwic2xpZGVPdXREb3duXCIsXHJcbiAgYW5pbWF0ZUluOiBcImZsaXBJblhcIixcclxuICBpdGVtczogMSxcclxuICBuYXZUZXh0OiBbXHJcbiAgICBcIjxpIGNsYXNzPSdmYXMgZmEtY2hldnJvbi1sZWZ0Jz48L2k+XCIsXHJcbiAgICBcIjxpIGNsYXNzPSdmYXMgZmEtY2hldnJvbi1yaWdodCc+PC9pPlwiLFxyXG4gIF0sXHJcbn07XHJcblxyXG5jbGFzcyBUb3BQYW5lbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBkaXNwbGF5OiBmYWxzZSxcclxuICAgIHBhbmVsOiB0cnVlLFxyXG4gIH07XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXk6IHRydWUgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgeyBwYW5lbCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdG9wLXBhbmVsICR7cGFuZWwgPyBcIlwiIDogXCJoaWRlXCJ9YH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5kaXNwbGF5ID8gKFxyXG4gICAgICAgICAgICAgIDxPd2xDYXJvdXNlbFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidG9wLXBhbmVsLXNsaWRlcyBvd2wtY2Fyb3VzZWwgb3dsLXRoZW1lXCJcclxuICAgICAgICAgICAgICAgIHsuLi5vcHRpb25zfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLWl0ZW0tYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgV2Ugb2ZmZXIgdGhlIGJlc3QgYnJhbmRzIG9mIEJpa2VzLCBFLVNjb290ZXIsIEUtQmlrZXMgJiBFLVJpZGVzIGF2YWlsYWJsZSBpbiB0aGUgbWFya2V0LlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1pdGVtLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPjEgLSA3IERheXMgRGVsaXZlcnkgTmF0aW9ud2lkZTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1pdGVtLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk5ld2x5IEFycml2ZWQgUHJvZHVjdHMhPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1pdGVtLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+RW5qb3kgYW4gZXh0cmEgMjAlIG9mZjwvc3Ryb25nPiBzZWxlY3Qgc2FsZXMgc3R5bGVzIDxMaW5rIGhyZWY9XCIjXCI+PGE+UmVhZCBNb3JlPC9hPjwvTGluaz48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1pdGVtLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+RW5qb3kgYW4gZXh0cmEgMjAlIG9mZjwvc3Ryb25nPiBzZWxlY3Qgc2FsZXMgc3R5bGVzIDxMaW5rIGhyZWY9XCIjXCI+PGE+UmVhZCBNb3JlPC9hPjwvTGluaz48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgPC9Pd2xDYXJvdXNlbD5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBwYW5lbDogZmFsc2UgfSl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzIHBhbmVsLWNsb3NlLWJ0blwiXHJcbiAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9wUGFuZWw7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jbGFzcyBBZGRzTW9kYWwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgX2lzTW91bnRlZCA9IGZhbHNlO1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgb3BlbjogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgb3BlbjogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlTW9kYWwgPSAoZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBvcGVuOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7IG9wZW4gfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BidHMtcG9wdXAgJHtvcGVuID8gJ2lzLXZpc2libGUnIDogJyd9YH0gcm9sZT1cImFsZXJ0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0cy1wb3B1cC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+RnJlZSBTaGlwcGluZzwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+V29ybGR3aWRlIGZyZWUgc2hpcHBpbmcgZm9yIGFsbCBtZW1iZXJzLiBUbyBiZWNvbWUgYSBtZW1iZXIgc3Vic2NyaWJlIGZvciBvdXIgPHN0cm9uZz5mcmVlIG9mZmVycyAvIGRpc2NvdW50IG5ld3NsZXR0ZXIuPC9zdHJvbmc+PC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwibWFpbEBuYW1lLmNvbVwiIG5hbWU9XCJFTUFJTFwiIHJlcXVpcmVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj48aSBjbGFzc05hbWU9XCJmYXIgZmEtcGFwZXItcGxhbmVcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZmFjZWJvb2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWZhY2Vib29rLWZcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInR3aXR0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLXR3aXR0ZXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmtkZWluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1saW5rZWRpbi1pblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW5zdGFncmFtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1pbnN0YWdyYW1cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy93b21lbi5wbmdcIil9IGFsdD1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvd29tZW4yLnBuZ1wiKX0gYWx0PVwiaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmNsb3NlTW9kYWx9IGNsYXNzTmFtZT1cImJ0cy1wb3B1cC1jbG9zZVwiPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkc01vZGFsO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmxldCBob3N0ID0gcHJvY2Vzcy5lbnYuQVBJX1VSTDtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyByZW1vdmVJdGVtLCBkZWNyeXB0RGF0YSB9IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2NhcnRBY3Rpb25zXCI7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCwgU2xpZGUgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuaW1wb3J0IHsgZm9ybWF0TnVtYmVyIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvZnVuY3Rpb25cIjtcclxuaW1wb3J0IHsgZGVjcnlwdEluZm9EYXRhIH0gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvaW5mb0FjdGlvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIENhcnQocHJvcHMpIHtcclxuICBjb25zdCBbaXNDYW1wYWlnbiwgc2V0aXNDYW1wYWlnbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRzdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBkaXNwbGF5OiBmYWxzZSxcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBkZWNyeXB0ZWREYXRhID0gZGVjcnlwdEluZm9EYXRhKCk7XHJcblxyXG4gICAgaWYgKGRlY3J5cHRlZERhdGEpIHtcclxuICAgICAgaWYgKGRlY3J5cHRlZERhdGEuZGVsaXZlcnlfZGF0ZS52YWx1ZSA9PSBcIjIwMjMtMDItMTRcIikge1xyXG4gICAgICAgIHNldGlzQ2FtcGFpZ24odHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlbW92ZSA9IChpZCkgPT4ge1xyXG4gICAgcHJvcHMucmVtb3ZlSXRlbShpZCk7XHJcblxyXG4gICAgdG9hc3QuZXJyb3IoXCJSZW1vdmVkIGZyb20gY2FydFwiLCB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImJvdHRvbS1sZWZ0XCIsXHJcbiAgICAgIGF1dG9DbG9zZTogNTAwMCxcclxuICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsb3NlQ2FydCA9ICgpID0+IHtcclxuICAgIHByb3BzLm9uQ2xpY2soc3RhdGUuZGlzcGxheSk7XHJcbiAgfTtcclxuXHJcbiAgbGV0IHsgcHJvZHVjdHMgfSA9IHByb3BzO1xyXG4gIHByb2R1Y3RzID0gcHJvZHVjdHMubGVuZ3RoXHJcbiAgICA/IHByb2R1Y3RzXHJcbiAgICA6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2Nlc3MuZW52LkNBUlRfQ09PS0lFKVxyXG4gICAgPyBkZWNyeXB0RGF0YShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9jZXNzLmVudi5DQVJUX0NPT0tJRSkpXHJcbiAgICA6IFtdO1xyXG5cclxuICB2YXIgdG90YWwgPSAwO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvZHVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmKGlzQ2FtcGFpZ24pe1xyXG4gICAgICB0b3RhbCA9IHRvdGFsICsgcHJvZHVjdHNbaV0uY2FtcGFpZ25fcHJpY2UgKiBwcm9kdWN0c1tpXS5xdWFudGl0eTtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHRvdGFsID0gdG90YWwgKyBwcm9kdWN0c1tpXS5kaXNjb3VudF9wcmljZSAqIHByb2R1Y3RzW2ldLnF1YW50aXR5O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwibW9kYWwgcmlnaHQgZmFkZSBzaG93IHNob3BwaW5nQ2FydE1vZGFsXCJcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjE2cHhcIixcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlXCJcclxuICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtjbG9zZUNhcnR9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgPGgzPk15IENhcnQgKHtwcm9kdWN0cy5sZW5ndGh9KTwvaDM+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY2FydC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAge3Byb2R1Y3RzLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgICAgID8gcHJvZHVjdHMubWFwKChwcm9kdWN0LCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY2FydFwiIGtleT17aWR4fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtob3N0fS9wcm9kdWN0cy8ke3Byb2R1Y3QucHJvZHVjdF9pbWFnZXNbMF1bXCJmaWxlX25hbWVcIl19YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57cHJvZHVjdC5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cHJvZHVjdC5xdWFudGl0eX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPng8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oKxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzQ2FtcGFpZ25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZm9ybWF0TnVtYmVyKHByb2R1Y3QuY2FtcGFpZ25fcHJpY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZvcm1hdE51bWJlcihwcm9kdWN0LmRpc2NvdW50X3ByaWNlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZmxvYXQ6IFwicmlnaHRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbW92ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVJlbW92ZShwcm9kdWN0LmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLXRyYXNoLWFsdFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgOiBcIkVtcHR5XCJ9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcnQtc3VidG90YWxcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5TdWJ0b3RhbDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3VidG90YWxcIj7igrF7Zm9ybWF0TnVtYmVyKHRvdGFsKX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcnQtYnRuXCI+XHJcbiAgICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9XCIvY2hlY2tvdXRcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlByb2NlZWQgdG8gQ2hlY2tvdXQ8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPiAqL31cclxuICAgICAgICAgICAgICB7cHJvZHVjdHMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saWdodFwiPlZpZXcgU2hvcHBpbmcgQ2FydDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9kdWN0czogc3RhdGUuYWRkZWRJdGVtcyxcclxuICAgIHRvdGFsOiBzdGF0ZS50b3RhbCxcclxuICAgIC8vYWRkZWRJdGVtczogc3RhdGUuYWRkZWRJdGVtc1xyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcmVtb3ZlSXRlbTogKGlkKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHJlbW92ZUl0ZW0oaWQpKTtcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENhcnQpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBhZGRRdWFudGl0eVdpdGhOdW1iZXIgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zL2NhcnRBY3Rpb25zJztcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5cclxuY2xhc3MgUXVpY2tWaWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBxdHk6IDEsXHJcbiAgICAgICAgbWF4OiAxMCxcclxuICAgICAgICBtaW46IDFcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlQWRkVG9DYXJ0RnJvbVZpZXcgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5hZGRRdWFudGl0eVdpdGhOdW1iZXIodGhpcy5wcm9wcy5pZGQsIHRoaXMuc3RhdGUucXR5KTsgXHJcblxyXG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoJ0FkZGVkIHRvIHRoZSBjYXJ0Jywge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJib3R0b20tbGVmdFwiLFxyXG4gICAgICAgICAgICBhdXRvQ2xvc2U6IDUwMDAsXHJcbiAgICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7dGhpcy5wcm9wcy5jbG9zZU1vZGFsKCl9LDUwMDApOyBcclxuICAgIH1cclxuXHJcbiAgICBJbmNyZW1lbnRJdGVtID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+IHtcclxuICAgICAgICAgICAgaWYocHJldlN0YXRlLnF0eSA8IDEwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHF0eTogcHJldlN0YXRlLnF0eSArIDFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgRGVjcmVhc2VJdGVtID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+IHtcclxuICAgICAgICAgICAgaWYocHJldlN0YXRlLnF0eSA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcXR5OiBwcmV2U3RhdGUucXR5IC0gMVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjbG9zZU1vZGFsIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZSBwcm9kdWN0UXVpY2tWaWV3IHNob3dcIiBzdHlsZT17e3BhZGRpbmdSaWdodDogJzE2cHgnLCBkaXNwbGF5OiAnYmxvY2snfX0+XHJcbiAgICAgICAgICAgICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIG1vZGFsLWRpYWxvZy1jZW50ZXJlZFwiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtjbG9zZU1vZGFsfSBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtdGltZXNcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0UXVpY2tWaWV3LWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0aGlzLnByb3BzLmltYWdlfSBhbHQ9XCJpbWFnZVwiIC8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+QmVsdGVkIGNoaW5vIHRyb3VzZXJzIHBvbG88L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuZXctcHJpY2VcIj4ke3RoaXMucHJvcHMucHJpY2V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1yZXZpZXdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXN0YXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXN0YXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXN0YXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXN0YXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXN0YXItaGFsZi1hbHRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInJhdGluZy1jb3VudFwiPjMgcmV2aWV3czwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHJvZHVjdC1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VmVuZG9yOjwvc3Bhbj4gPExpbmsgaHJlZj1cIiNcIj48YT5MZXJldmU8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BdmFpbGFiaWxpdHk6PC9zcGFuPiA8TGluayBocmVmPVwiI1wiPjxhPkluIHN0b2NrICg3IGl0ZW1zKTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlByb2R1Y3QgVHlwZTo8L3NwYW4+IDxMaW5rIGhyZWY9XCIjXCI+PGE+VC1TaGlydDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNvbG9yLXN3aXRjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkNvbG9yOjwvaDQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRpdGxlPVwiQmxhY2tcIiBjbGFzc05hbWU9XCJjb2xvci1ibGFja1wiPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGl0bGU9XCJXaGl0ZVwiIGNsYXNzTmFtZT1cImNvbG9yLXdoaXRlXCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0aXRsZT1cIkdyZWVuXCIgY2xhc3NOYW1lPVwiY29sb3ItZ3JlZW5cIj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRpdGxlPVwiWWVsbG93IEdyZWVuXCIgY2xhc3NOYW1lPVwiY29sb3IteWVsbG93Z3JlZW5cIj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRpdGxlPVwiVGVhbFwiIGNsYXNzTmFtZT1cImNvbG9yLXRlYWxcIj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3Qtc2l6ZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+U2l6ZTo8L2g0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5YUzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+UzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+TTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+WEw8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlhYTDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1hZGQtdG8tY2FydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1jb3VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbnVzLWJ0blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuRGVjcmVhc2VJdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLW1pbnVzXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnF0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXt0aGlzLnN0YXRlLm1pbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXt0aGlzLnN0YXRlLm1heH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyBxdHk6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsdXMtYnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5JbmNyZW1lbnRJdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXNcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUFkZFRvQ2FydEZyb21WaWV3fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jYXJ0LXBsdXNcIj48L2k+IEFkZCB0byBDYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidmlldy1mdWxsLWluZm9cIj5WaWV3IGZ1bGwgaW5mbzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcz0gKGRpc3BhdGNoKT0+e1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhZGRRdWFudGl0eVdpdGhOdW1iZXI6IChpZCwgcXR5KSA9PiB7ZGlzcGF0Y2goYWRkUXVhbnRpdHlXaXRoTnVtYmVyKGlkLCBxdHkpKX1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG51bGwsXHJcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShRdWlja1ZpZXcpXHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jbGFzcyBXaXNobGlzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgZGlzcGxheTogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgY2xvc2VXaXNobGlzdCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uQ2xpY2sodGhpcy5zdGF0ZS5kaXNwbGF5KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsIHJpZ2h0IGZhZGUgc2hvdyBzaG9wcGluZ1dpc2hsaXN0TW9kYWxcIiBcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLCBwYWRkaW5nUmlnaHQ6IFwiMTZweFwiXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2VcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jbG9zZVdpc2hsaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPk15IFdpc2ggTGlzdCAoMyk8L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJ0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY2FydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL2ltZzIuanBnXCIpfSBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5CZWx0ZWQgY2hpbm8gdHJvdXNlcnMgcG9sbzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Qmx1ZSAvIFhTPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+MTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj54PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByaWNlXCI+JDE5MS4wMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9pbWczLmpwZ1wiKX0gYWx0PVwiaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+QmVsdGVkIGNoaW5vIHRyb3VzZXJzIHBvbG88L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkJsdWUgLyBYUzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+eDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmljZVwiPiQxOTEuMDA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvaW1nNC5qcGdcIil9IGFsdD1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkJlbHRlZCBjaGlubyB0cm91c2VycyBwb2xvPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5CbHVlIC8gWFM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4xPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPng8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2VcIj4kMTkxLjAwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcnQtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saWdodFwiPlZpZXcgU2hvcHBpbmcgQ2FydDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2lzaGxpc3Q7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBWaXNpYmlsaXR5U2Vuc29yIGZyb20gXCJyZWFjdC12aXNpYmlsaXR5LXNlbnNvclwiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xyXG5jb25zdCBPd2xDYXJvdXNlbCA9IGR5bmFtaWMoaW1wb3J0KCdyZWFjdC1vd2wtY2Fyb3VzZWwzJykpO1xyXG5cclxuY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICBuYXY6IHRydWUsXHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgYXV0b3BsYXlIb3ZlclBhdXNlOiB0cnVlLFxyXG4gICAgaXRlbXM6IDEsXHJcbiAgICBzbWFydFNwZWVkOiA3NTAsXHJcbiAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgIG5hdlRleHQ6IFtcclxuICAgICAgICBcIjxpIGNsYXNzPSdmYXMgZmEtYXJyb3ctbGVmdCc+PC9pPlwiLFxyXG4gICAgICAgIFwiPGkgY2xhc3M9J2ZhcyBmYS1hcnJvdy1yaWdodCc+PC9pPlwiXHJcbiAgICBdXHJcbn1cclxuXHJcbmNsYXNzIEJhbm5lciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHsgXHJcbiAgICAgICAgZGlzcGxheTogZmFsc2UsXHJcbiAgICAgICAgcGFuZWw6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXsgXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXk6IHRydWUgfSkgXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5kaXNwbGF5ID8gPE93bENhcm91c2VsIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG9tZS1zbGlkZXMgb3dsLWNhcm91c2VsIG93bC10aGVtZVwiXHJcbiAgICAgICAgICAgICAgICB7Li4ub3B0aW9uc31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWJhbm5lciBpdGVtLWJnMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC10YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtdGFibGUtY2VsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWJhbm5lciBpdGVtLWJnMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC10YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtdGFibGUtY2VsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1iYW5uZXIgaXRlbS1iZzNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLXRhYmxlLWNlbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Pd2xDYXJvdXNlbD4gOiAnJ31cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYW5uZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGFkZFRvQ2FydCwgYWRkVG9Db21wYXJlIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy9jYXJ0QWN0aW9ucyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSZWFjdFRvb2x0aXAgZnJvbSAncmVhY3QtdG9vbHRpcCdcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0LCBTbGlkZSB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IFF1aWNrVmlldyBmcm9tICcuLi9Nb2RhbC9RdWlja1ZpZXcnO1xyXG5cclxuY2xhc3MgQmVzdFNlbGxlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBtb2RhbE9wZW46IGZhbHNlLFxyXG4gICAgICAgIG1vZGFsSW1hZ2U6ICcnLFxyXG4gICAgICAgIHByaWNlOiAwLFxyXG4gICAgICAgIGlkZDogbnVsbFxyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVBZGRUb0NhcnQgPSAoaWQpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLmFkZFRvQ2FydChpZCk7IFxyXG5cclxuICAgICAgICB0b2FzdC5zdWNjZXNzKCdBZGRlZCB0byB0aGUgY2FydCcsIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IFwiYm90dG9tLWxlZnRcIixcclxuICAgICAgICAgICAgYXV0b0Nsb3NlOiA1MDAwLFxyXG4gICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQWRkVG9Db21wYXJlID0gKGlkKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5hZGRUb0NvbXBhcmUoaWQpOyBcclxuXHJcbiAgICAgICAgdG9hc3Quc3VjY2VzcygnQWRkZWQgdG8gdGhlIGNvbXBhcmUnLCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbS1sZWZ0XCIsXHJcbiAgICAgICAgICAgIGF1dG9DbG9zZTogNTAwMCxcclxuICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBhcmVCdXR0b24gPSAoaWQpID0+IHtcclxuICAgICAgICBsZXQgY29tcGFyZV9leGlzdCA9IHRoaXMucHJvcHMuQ29tcGFyZVByb2R1Y3RzLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgPT09IGlkKTtcclxuICAgICAgICBpZihjb21wYXJlX2V4aXN0Lmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRpcD1cIkFscmVhZHkgQWRkZWRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wbGFjZT1cImxlZnRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXN5bmNcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10aXA9XCJBZGQgdG8gQ29tcGFyZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXBsYWNlPVwibGVmdFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQWRkVG9Db21wYXJlKGlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc3luY1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb3Blbk1vZGFsID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtb2RhbE9wZW46IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbW9kYWxPcGVuOiBmYWxzZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVNb2RhbERhdGEgPSAoaW1hZ2UsIHByaWNlLCBpZCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBcclxuICAgICAgICAgICAgbW9kYWxJbWFnZTogaW1hZ2UsIFxyXG4gICAgICAgICAgICBwcmljZTogcHJpY2UsXHJcbiAgICAgICAgICAgIGlkZDogaWRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgeyBwcm9kdWN0cyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7IG1vZGFsT3BlbiB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiZXN0LXNlbGxlcnMtYXJlYSBwYi02MFwiPlxyXG4gICAgICAgICAgICAgICAgPFJlYWN0VG9vbHRpcCAgLz5cclxuICAgICAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lciB0cmFuc2l0aW9uPXtTbGlkZX0gLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj48c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+IEJlc3QgU2VsbGVyczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0cy5tYXAoKGRhdGEsIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtc20tNiBjb2wtNlwiIGtleT17aWR4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1wcm9kdWN0LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdC9wcm9kdWN0LWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEuaW1hZ2V9IGFsdD1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEuaW1hZ2VIb3Zlcn0gYWx0PVwiaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10aXA9XCJRdWljayBWaWV3XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wbGFjZT1cImxlZnRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5Nb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVNb2RhbERhdGEoZGF0YS5xdWlja1ZpZXcsZGF0YS5wcmljZSxkYXRhLmlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1leWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGRhdGEtdGlwPVwiQWRkIHRvIFdpc2hsaXN0XCIgZGF0YS1wbGFjZT1cImxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtaGVhcnRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wYXJlQnV0dG9uKGRhdGEuaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdC9wcm9kdWN0LWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e2RhdGEudGl0bGV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmV3LXByaWNlXCI+JHtkYXRhLnByaWNlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXN0YXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXN0YXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXN0YXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXN0YXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLXN0YXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWxpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgdGhpcy5oYW5kbGVBZGRUb0NhcnQoZGF0YS5pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCB0byBDYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgeyBtb2RhbE9wZW4gPyA8UXVpY2tWaWV3IFxyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlTW9kYWw9e3RoaXMuY2xvc2VNb2RhbH0gXHJcbiAgICAgICAgICAgICAgICAgICAgaWRkPXt0aGlzLnN0YXRlLmlkZH1cclxuICAgICAgICAgICAgICAgICAgICBpbWFnZT17dGhpcy5zdGF0ZS5tb2RhbEltYWdlfSBcclxuICAgICAgICAgICAgICAgICAgICBwcmljZT17dGhpcy5zdGF0ZS5wcmljZX1cclxuICAgICAgICAgICAgICAgIC8+IDogJycgfVxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb2R1Y3RzOiBzdGF0ZS5wcm9kdWN0cyxcclxuICAgICAgICBDb21wYXJlUHJvZHVjdHM6IHN0YXRlLmFkZGVkSXRlbXNUb0NvbXBhcmVcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzPSAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYWRkVG9DYXJ0OiAoaWQpID0+IHsgZGlzcGF0Y2goYWRkVG9DYXJ0KGlkKSkgfSxcclxuICAgICAgICBhZGRUb0NvbXBhcmU6IChpZCkgPT4geyBkaXNwYXRjaChhZGRUb0NvbXBhcmUoaWQpKSB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShCZXN0U2VsbGVyKVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY2xhc3MgQ2F0ZWdvcnlQcm9kdWN0cyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2F0ZWdvcnktcHJvZHVjdHMtYXJlYSBwYi02MCBwdC00MFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY29sLWxnLTcgY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtY2F0ZWdvcnktYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMjYwMS8zMzUyL2ZpbGVzL2Zsb3Jpc3QtUEgtYnVuZGxlZGVhbHNfMTYwMHguanBnP3Y9MTU4MDI2NTcyNlwiIGFsdD1cImltYWdlXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1jYXRlZ29yeS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8yNjAxLzMzNTIvZmlsZXMvZmxvcmlzdC1QSC1ib3hlZGJsb29tc18xXzE2MDB4LmpwZz92PTE1ODAyNjU2NzNcIiBhbHQ9XCJpbWFnZVwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1jYXRlZ29yeS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8yNjAxLzMzNTIvZmlsZXMvZmxvcmlzdC1QSC1jYWtlY29sbGVjdGlvbl8xNjAweC5qcGc/dj0xNTgwMjY1NzkwXCIgYWx0PVwiaW1hZ2VcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLWNhdGVnb3J5LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9jZG4uc2hvcGlmeS5jb20vcy9maWxlcy8xLzI2MDEvMzM1Mi9maWxlcy9mbG9yaXN0LVBILXBldGl0ZWJpa2VzXzE2MDB4LmpwZz92PTE1ODAyNjU3NjNcIiBhbHQ9XCJpbWFnZVwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeVByb2R1Y3RzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgRmFjaWxpdHkgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZhY2lsaXR5LWFyZWFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYWNpbGl0eS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsYW5lXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5GYXN0IFNoaXBwaW5nPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmFjaWxpdHktYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1tb25leS1jaGVjay1hbHRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjEwMCUgbW9uZXkgYmFjayBndWFyYW50ZWU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYWNpbGl0eS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWNyZWRpdC1jYXJkXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5NYW55IHBheW1lbnQgZ2F0ZXdheXM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYWNpbGl0eS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWhlYWRzZXRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPk9ubGluZSBzdXBwb3J0PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFjaWxpdHk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jbGFzcyBPZmZlckFyZWEgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm9mZmVyLWFyZWEgcHRiLTYwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2ZmZXItYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvY2FrZS5qcGdcIil9IGFsdD1cImltYWdlXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+Q0FLRTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5DQUtFPC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5CaXJ0aGRheTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkFubml2ZXJzYXJ5PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+TW9udGhzYXJ5PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9mZmVyLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL2Zsb3dlcnMuanBnXCIpfSBhbHQ9XCJpbWFnZVwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkZsb3dlcnM8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+Rmxvd2VyczwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+V29tYW4gQWNjZXNzb3JpZXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5NYW4gQWNjZXNzb3JpZXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5TdW5nbGFzc2VzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+QmVsdHM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5IYXRzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+U2NyYWZzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1tZC02IG9mZnNldC1sZy0wIG9mZnNldC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9mZmVyLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL2J1bmRsZS5qcGdcIil9IGFsdD1cImltYWdlXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+QnVuZGxlPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gtaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkJ1bmRsZTwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+V29tYW4gQWNjZXNzb3JpZXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5NYW4gQWNjZXNzb3JpZXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5TdW5nbGFzc2VzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+QmVsdHM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5IYXRzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+U2NyYWZzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9mZmVyQXJlYTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExhenlMb2FkIGZyb20gXCJyZWFjdC1sYXp5bG9hZFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGFkZFRvQ2FydCwgYWRkVG9Db21wYXJlIH0gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvY2FydEFjdGlvbnNcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3RUb29sdGlwIGZyb20gXCJyZWFjdC10b29sdGlwXCI7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCwgU2xpZGUgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuaW1wb3J0IFF1aWNrVmlldyBmcm9tIFwiLi4vTW9kYWwvUXVpY2tWaWV3XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgZm9ybWF0TnVtYmVyIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvZnVuY3Rpb25cIjtcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RzKHByb3BzKSB7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRzdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBtb2RhbE9wZW46IGZhbHNlLFxyXG4gICAgbW9kYWxJbWFnZTogXCJcIixcclxuICAgIHByaWNlOiAwLFxyXG4gICAgaWRkOiBudWxsLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbY29sbGVjdGlvbnMsIHNldGNvbGxlY3Rpb25zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgbGV0IGhvc3QgPSBwcm9jZXNzLmVudi5BUElfVVJMO1xyXG4gIGxldCB7IHByb2R1Y3RzIH0gPSBwcm9wcztcclxuICBjb25zdCB7IG1vZGFsT3BlbiB9ID0gc3RhdGU7XHJcblxyXG4gIGNvbnN0IGZldGNoQ29sbGVjdGlvbiA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtob3N0fS9hcGkvdXNlci9jb2xsZWN0aW9uYCk7XHJcblxyXG4gICAgICBpZiAocmVzLmRhdGEpIHtcclxuICAgICAgICBzZXRjb2xsZWN0aW9ucyhyZXMuZGF0YS5jb2xsZWN0aW9ucyk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBpZiAoZXJyLnJlc3BvbnNlLmRhdGEpIHtcclxuICAgICAgICByZXR1cm4gdG9hc3QuZXJyb3IoZXJyLnJlc3BvbnNlLmRhdGEubXNnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaENvbGxlY3Rpb24oKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9wZW5UYWJTZWN0aW9uID0gKGV2dCwgdGFiTm1hZSkgPT4ge1xyXG4gICAgbGV0IGksIHRhYmNvbnRlbnQsIHRhYmxpbmtzO1xyXG4gICAgdGFiY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YWJzX2l0ZW1cIik7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGFiY29udGVudC5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0YWJjb250ZW50W2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJmYWRlSW5VcFwiKTtcclxuICAgICAgdGFiY29udGVudFtpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9XHJcblxyXG4gICAgdGFibGlua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpXCIpO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IHRhYmxpbmtzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRhYmxpbmtzW2ldLmNsYXNzTmFtZSA9IHRhYmxpbmtzW2ldLmNsYXNzTmFtZS5yZXBsYWNlKFwiY3VycmVudFwiLCBcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWJObWFlKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFiTm1hZSkuY2xhc3NOYW1lICs9IFwiIGZhZGVJblVwIGFuaW1hdGVkXCI7XHJcbiAgICBldnQuY3VycmVudFRhcmdldC5jbGFzc05hbWUgKz0gXCJjdXJyZW50XCI7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQWRkVG9DYXJ0ID0gKHByb2R1Y3QpID0+IHtcclxuICAgIHByb3BzLmFkZFRvQ2FydChwcm9kdWN0KTtcclxuXHJcbiAgICB0b2FzdC5zdWNjZXNzKFwiQWRkZWQgdG8gdGhlIGNhcnRcIiwge1xyXG4gICAgICBwb3NpdGlvbjogXCJib3R0b20tbGVmdFwiLFxyXG4gICAgICBhdXRvQ2xvc2U6IDUwMDAsXHJcbiAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVBZGRUb0NvbXBhcmUgPSAoaWQpID0+IHtcclxuICAgIHByb3BzLmFkZFRvQ29tcGFyZShpZCk7XHJcblxyXG4gICAgdG9hc3Quc3VjY2VzcyhcIkFkZGVkIHRvIHRoZSBjb21wYXJlXCIsIHtcclxuICAgICAgcG9zaXRpb246IFwiYm90dG9tLWxlZnRcIixcclxuICAgICAgYXV0b0Nsb3NlOiA1MDAwLFxyXG4gICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29tcGFyZUJ1dHRvbiA9IChpZCkgPT4ge1xyXG4gICAgbGV0IGNvbXBhcmVfZXhpc3QgPSBwcm9wcy5Db21wYXJlUHJvZHVjdHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkID09PSBpZCk7XHJcbiAgICBpZiAoY29tcGFyZV9leGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGRhdGEtdGlwPVwiQWxyZWFkeSBBZGRlZFwiXHJcbiAgICAgICAgICAgIGRhdGEtcGxhY2U9XCJsZWZ0XCJcclxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zeW5jXCI+PC9pPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGRhdGEtdGlwPVwiQWRkIHRvIENvbXBhcmVcIlxyXG4gICAgICAgICAgICBkYXRhLXBsYWNlPVwibGVmdFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIGhhbmRsZUFkZFRvQ29tcGFyZShpZCk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zeW5jXCI+PC9pPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBvcGVuTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRzdGF0ZSh7IC4uLnN0YXRlLCBtb2RhbE9wZW46IHRydWUgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICAgIHNldHN0YXRlKHsgLi4uc3RhdGUsIG1vZGFsT3BlbjogZmFsc2UgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW9kYWxEYXRhID0gKGltYWdlLCBwcmljZSwgaWQpID0+IHtcclxuICAgIHNldHN0YXRlKHsgLi4uc3RhdGUsIG1vZGFsSW1hZ2U6IGltYWdlLCBwcmljZTogcHJpY2UsIGlkZDogaWQgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImFsbC1wcm9kdWN0cy1hcmVhIHBiLTYwXCI+XHJcbiAgICAgIDxSZWFjdFRvb2x0aXAgLz5cclxuICAgICAgPFRvYXN0Q29udGFpbmVyIHRyYW5zaXRpb249e1NsaWRlfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIHtjb2xsZWN0aW9ucy5sZW5ndGhcclxuICAgICAgICAgID8gY29sbGVjdGlvbnMubWFwKChjb2xsZWN0aW9uLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgPExhenlMb2FkIGhlaWdodD17MjAwfSBvZmZzZXQ9ezEwMH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwidGFiIHByb2R1Y3RzLWNhdGVnb3J5LXRhYlwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRhYnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImN1cnJlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0YWJzLW5hdi10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+IHtjb2xsZWN0aW9uLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJfY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidGFiMVwiIGNsYXNzTmFtZT1cInRhYnNfaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29sbGVjdGlvbi5wcm9kdWN0cy5tYXAoKGRhdGEsIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLXNtLTYgY29sLTZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aWR4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtcHJvZHVjdC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3QvJHtkYXRhLnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtob3N0fS9wcm9kdWN0cy8ke2RhdGEucHJvZHVjdF9pbWFnZXNbMF1bXCJmaWxlX25hbWVcIl19YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17ZGF0YS5pbWFnZUhvdmVyfSBhbHQ9XCJpbWFnZVwiIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntjb21wYXJlQnV0dG9uKGRhdGEuaWQpfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0LyR7ZGF0YS5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e2RhdGEubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmV3LXByaWNlIHNsYXNoZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKCsXtmb3JtYXROdW1iZXIoZGF0YS5yZWd1bGFyX3ByaWNlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmV3LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDigrF7Zm9ybWF0TnVtYmVyKGRhdGEuZGlzY291bnRfcHJpY2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5jYW1wYWlnbl9wcmljZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmV3LXByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMC45cmVtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmY1NTU4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbGVudGluZSdzIFByaWNlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5ldy1wcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjFyZW1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZjU1NThcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDigrF7Zm9ybWF0TnVtYmVyKGRhdGEuY2FtcGFpZ25fcHJpY2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zdGFyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zdGFyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zdGFyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zdGFyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zdGFyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdC8ke2RhdGEuc2x1Z31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhhbmRsZUFkZFRvQ2FydChkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIHRvIENhcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvTGF6eUxvYWQ+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICA6IG51bGx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7bW9kYWxPcGVuID8gKFxyXG4gICAgICAgIDxRdWlja1ZpZXdcclxuICAgICAgICAgIGNsb3NlTW9kYWw9e2Nsb3NlTW9kYWx9XHJcbiAgICAgICAgICBpZGQ9e3N0YXRlLmlkZH1cclxuICAgICAgICAgIGltYWdlPXtzdGF0ZS5tb2RhbEltYWdlfVxyXG4gICAgICAgICAgcHJpY2U9e3N0YXRlLnByaWNlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgXCJcIlxyXG4gICAgICApfVxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9kdWN0czogc3RhdGUucHJvZHVjdHMsXHJcbiAgICBDb21wYXJlUHJvZHVjdHM6IHN0YXRlLmFkZGVkSXRlbXNUb0NvbXBhcmUsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBhZGRUb0NhcnQ6IChpZCkgPT4ge1xyXG4gICAgICBkaXNwYXRjaChhZGRUb0NhcnQoaWQpKTtcclxuICAgIH0sXHJcbiAgICBhZGRUb0NvbXBhcmU6IChpZCkgPT4ge1xyXG4gICAgICBkaXNwYXRjaChhZGRUb0NvbXBhcmUoaWQpKTtcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFByb2R1Y3RzKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgYWRkVG9DYXJ0LCBhZGRUb0NvbXBhcmUgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zL2NhcnRBY3Rpb25zJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJlYWN0VG9vbHRpcCBmcm9tICdyZWFjdC10b29sdGlwJ1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QsIFNsaWRlIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgUXVpY2tWaWV3IGZyb20gJy4uL01vZGFsL1F1aWNrVmlldyc7XHJcblxyXG5jbGFzcyBUcmVuZGluZ1Byb2R1Y3RzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIG1vZGFsT3BlbjogZmFsc2UsXHJcbiAgICAgICAgbW9kYWxJbWFnZTogJycsXHJcbiAgICAgICAgcHJpY2U6IDAsXHJcbiAgICAgICAgaWRkOiBudWxsXHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZUFkZFRvQ2FydCA9IChpZCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuYWRkVG9DYXJ0KGlkKTsgXHJcblxyXG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoJ0FkZGVkIHRvIHRoZSBjYXJ0Jywge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJib3R0b20tbGVmdFwiLFxyXG4gICAgICAgICAgICBhdXRvQ2xvc2U6IDUwMDAsXHJcbiAgICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVBZGRUb0NvbXBhcmUgPSAoaWQpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLmFkZFRvQ29tcGFyZShpZCk7IFxyXG5cclxuICAgICAgICB0b2FzdC5zdWNjZXNzKCdBZGRlZCB0byB0aGUgY29tcGFyZScsIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IFwiYm90dG9tLWxlZnRcIixcclxuICAgICAgICAgICAgYXV0b0Nsb3NlOiA1MDAwLFxyXG4gICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcGFyZUJ1dHRvbiA9IChpZCkgPT4ge1xyXG4gICAgICAgIGxldCBjb21wYXJlX2V4aXN0ID0gdGhpcy5wcm9wcy5Db21wYXJlUHJvZHVjdHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCA9PT0gaWQpO1xyXG4gICAgICAgIGlmKGNvbXBhcmVfZXhpc3QubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGlwPVwiQWxyZWFkeSBBZGRlZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXBsYWNlPVwibGVmdFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc3luY1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRpcD1cIkFkZCB0byBDb21wYXJlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcGxhY2U9XCJsZWZ0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVBZGRUb0NvbXBhcmUoaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zeW5jXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgb3Blbk1vZGFsID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtb2RhbE9wZW46IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbW9kYWxPcGVuOiBmYWxzZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVNb2RhbERhdGEgPSAoaW1hZ2UsIHByaWNlLCBpZCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBcclxuICAgICAgICAgICAgbW9kYWxJbWFnZTogaW1hZ2UsIFxyXG4gICAgICAgICAgICBwcmljZTogcHJpY2UsXHJcbiAgICAgICAgICAgIGlkZDogaWRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgeyBwcm9kdWN0cyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7IG1vZGFsT3BlbiB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0cmVuZGluZy1wcm9kdWN0cy1hcmVhIHBiLTYwXCI+XHJcbiAgICAgICAgICAgICAgICA8UmVhY3RUb29sdGlwICAvPlxyXG4gICAgICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyIHRyYW5zaXRpb249e1NsaWRlfSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPjxzcGFuIGNsYXNzTmFtZT1cImRvdFwiPjwvc3Bhbj4gVHJlbmRpbmcgUHJvZHVjdHM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdHMubWFwKChkYXRhLCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLXNtLTYgY29sLTZcIiBrZXk9e2lkeH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtcHJvZHVjdC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3QvcHJvZHVjdC1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLmltYWdlfSBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLmltYWdlSG92ZXJ9IGFsdD1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGlwPVwiUXVpY2sgVmlld1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcGxhY2U9XCJsZWZ0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlTW9kYWxEYXRhKGRhdGEucXVpY2tWaWV3LGRhdGEucHJpY2UsZGF0YS5pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtZXllXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBkYXRhLXRpcD1cIkFkZCB0byBXaXNobGlzdFwiIGRhdGEtcGxhY2U9XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWhlYXJ0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcGFyZUJ1dHRvbihkYXRhLmlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3QvcHJvZHVjdC1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntkYXRhLnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5ldy1wcmljZVwiPiR7ZGF0YS5wcmljZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zdGFyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zdGFyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zdGFyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zdGFyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1zdGFyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IHRoaXMuaGFuZGxlQWRkVG9DYXJ0KGRhdGEuaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgdG8gQ2FydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsgbW9kYWxPcGVuID8gPFF1aWNrVmlldyBcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZU1vZGFsPXt0aGlzLmNsb3NlTW9kYWx9IFxyXG4gICAgICAgICAgICAgICAgICAgIGlkZD17dGhpcy5zdGF0ZS5pZGR9XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e3RoaXMuc3RhdGUubW9kYWxJbWFnZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U9e3RoaXMuc3RhdGUucHJpY2V9XHJcbiAgICAgICAgICAgICAgICAvPiA6ICcnIH1cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9kdWN0czogc3RhdGUucHJvZHVjdHMsXHJcbiAgICAgICAgQ29tcGFyZVByb2R1Y3RzOiBzdGF0ZS5hZGRlZEl0ZW1zVG9Db21wYXJlXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcz0gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFkZFRvQ2FydDogKGlkKSA9PiB7IGRpc3BhdGNoKGFkZFRvQ2FydChpZCkpIH0sXHJcbiAgICAgICAgYWRkVG9Db21wYXJlOiAoaWQpID0+IHsgZGlzcGF0Y2goYWRkVG9Db21wYXJlKGlkKSkgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikoVHJlbmRpbmdQcm9kdWN0cylcclxuIiwiY29uc3QgbW9udGhOYW1lcyA9IFtcclxuICBcIkphbnVhcnlcIixcclxuICBcIkZlYnJ1YXJ5XCIsXHJcbiAgXCJNYXJjaFwiLFxyXG4gIFwiQXByaWxcIixcclxuICBcIk1heVwiLFxyXG4gIFwiSnVuZVwiLFxyXG4gIFwiSnVseVwiLFxyXG4gIFwiQXVndXN0XCIsXHJcbiAgXCJTZXB0ZW1iZXJcIixcclxuICBcIk9jdG9iZXJcIixcclxuICBcIk5vdmVtYmVyXCIsXHJcbiAgXCJEZWNlbWJlclwiLFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkgPT4ge1xyXG4gIHZhciB0aW1lb3V0O1xyXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgY29udGV4dCA9IHRoaXMsXHJcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XHJcbiAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xyXG4gICAgICBpZiAoIWltbWVkaWF0ZSkgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuICAgIH07XHJcbiAgICB2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcclxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcclxuICAgIGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybWF0TnVtYmVyID0gKG51bSkgPT4ge1xyXG4gIHJldHVybiBudW0udG9GaXhlZCgyKS5yZXBsYWNlKC8oXFxkKSg/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiJDEsXCIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzRGF0ZUJlZm9yZVRvZGF5ID0gKGRhdGUpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgbmV3IERhdGUobmV3IERhdGUoZGF0ZSkudG9EYXRlU3RyaW5nKCkpIDxcclxuICAgIG5ldyBEYXRlKG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCkpXHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtYXREYXRlID0gKGRhdGUpID0+IHtcclxuICBsZXQgbW9udGggPSBtb250aE5hbWVzW25ldyBEYXRlKGRhdGUpLmdldE1vbnRoKCldO1xyXG4gIGxldCBkYXkgPSBuZXcgRGF0ZShkYXRlKS5nZXREYXRlKCk7XHJcbiAgbGV0IHllYXIgPSBuZXcgRGF0ZShkYXRlKS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICByZXR1cm4gYCR7bW9udGh9ICR7ZGF5fSwgJHt5ZWFyfWA7XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUVBQVFBQkFBRC8yd0JEQUFNQ0FnSUNBZ01DQWdJREF3TURCQVlFQkFRRUJBZ0dCZ1VHQ1FnS0Nna0lDUWtLREE4TUNnc09Dd2tKRFJFTkRnOFFFQkVRQ2d3U0V4SVFFdzhRRUJEL3dBQUxDQUVzQVdnQkFSRUEvOFFBSEFBQkFRRUJBQU1CQVFBQUFBQUFBQUFBQUFnSEJnTUZDUVFDLzhRQVBCQUFBUU1EQXdNQ0JBUURCd01GQUFBQUFBRUNBd1FGQmdjSUVSSVRJVEZCQ1NKUllSUXlRbkVWVW9FV0l5UXpjcUd4RnlWaVU0S1JrckwvMmdBSUFRRUFBRDhBcUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQTlEbk9kWXBwdGk5Ym1XYTNtRzJXbTNzNnBwNU9WOHF2RFd0YW5LdWNxOElqVVJWVmZRa21zK0pSUzNDdXFmN0FhRFpKa05zcFhmM2xXK3I3TDJ0L21jeU9HVkcvWHk4MkRRRGVCcGZyL0FGVHJCYWZ4ZGt5U09OWlZ0Tnc2ZXFWcmZMblF5Tlhwa1JFOHFuaHlJaXIwOEp5Ym9UTHJIdnowejB6eVdYQjhYc2x4emJJS2VWWUo0TGE5R1U4VXlMd3NYZDRjcm5wN294amtSVVZGVkZSVU9XeEw0aitJVDVIRGoycW1tVjh3WlozTmFsVExNdFV5SkZYdzZWcXh4eU5iOTJ0ZCt4WHRIV1Vsd3BJSytncVlxbW1xWTJ6UXpSUFI3SkkzSnkxelhKNFZGUlVWRlQxUlRFdHdtNzNUVGI3UEZZN3BGVlh6STU0MGxaYWFCV282SmkvbGROSTd4R2kreWNPY3ZoZW5qeVpEYWZpVTJtbHUxTFM2ajZLWkRpOXZxMVR0MWphcjhRN3AvbjdiNG9sYzFPZVY2VlZlUFJGOUN2c2F5V3c1allLSEtNWXVrRnh0VnpoYlVVdFZDdkxKR0w3L0FGUmZaVVhoVVZGUlVSVVZEMllCbU91ZTRqVGpiOVk0YnJtOWROSlYxdlVsQmJLTnFTVlZVcmZWV3RWVVJyVTVUbDdsUkU1NDhxcUlzNU0rSlk5akdYaXQyK1pCRGp6M0lpWE50eDZrVnZQSEtJc0NNVmZ0M1A2bFBhT2EzNmU2NjR5dVQ0QmRYVHNoY2tWWlNWRE8zVTBjaXB5akpXY3J4eW5QRGtWV3J3dkNyd3ZIVjVIa2RqeEd4VjJUWkxkSUxkYTdiQzZvcXFxZDNESW1KNnF2MStpSW5sVlZFVGxWSkJ2UHhLTFBVM1dxcHROdEZzaHltZ28xWHVWanFuOE12VC9QMjJSU3ExcThLcWRTdFhqMVJQUTFyYjF2QjAxM0JWTWxodHNOVllza2hqV1oxcXJuTlZabU4vTTZHUnZpUkU5MFZHdVR5dlR3bkp1eEt1cXZ4Qk5QOEt5dWJDY0F4SzVaN2RxV1YwRXkwTXlRMDNjYitaa2NpTmU2UlU0WGxXczZmbzVmYitOSy9pRDRCbWVWdzRWcUZpRnl3SzZWTXJZSVgxczZUVXlTdTRSckpIcXlOMFNxcXB3cm1kUDFjaFZvQUFBQUFBQUFBQUJOVzgzYnhxbnVHb3NiczJGWkhaYUMwV21hV3ByYVd1bWxZNmVaM1MxajI5REhJcXNaM09FVlUvTzd5YnRnbURZMXB2aWR1d3pFYlpGUTJ5MlF0aGlqWTFFVjZvbmw3MVQ4ejNMNWM1ZktxcXFwQWU3Q2d0ZUg3MnNGdU9tTU1WTmtOYkxhNnV2Z28wUk91dGZWdVluVzF2bzZTTG82ay9VaThyK1pWV3RkMzJwMWRwUG9Ga21SMmVwZFQzYXJZeTEyK1ZxOE9qbW5kMEs5cSt6bVI5eDZmZHFHYmZEODBOc1dHYVUwV3FkeHQwVTJUWlkxOVEycWxZanBLV2k2bGJISEdxL2w2MGIzSEtucjFOUmZ5b2FqdWQwQXR1NFBUaWZHV3BRMGwrcHBZNTdUYzZpTlYvQ3ZSNmR4cXExRmQwUFoxSXJVOGM5SzhjdFEvVm9saHQ5MEgwUHBjWHpySTZlOExpMU5WU3JWMDdITmFsSTFYU3RaOC9uNUc4dFQ3SWlleEpPdy9GMjYzNno1enIvcUJTeDNHdW9LaU9XamJPbld5T3NxSFBkMXRSZi9BRW80MFl6K1ZIb3FlV29xVzNxdnBoaStyK0MzUEJjcm9JcDZhdmhja01ybUlyNldmaGUzUEd2cTE3VjgrUFZPVVhsRlZGa2o0YVdkWGFtVE5kRmI1SzVYV09kTGpSeHF2UGFWWHJGVXNUNk42MGlWRTlPWE9YM0tWeHJjNW9mbDJlTzB3c21iZFdVTm1tcDF0dFRiS3lrazdzWFBjajVtaVkzcVRwZDh2UEs4THh5YWRMTEZUeFBubmxaSEhHMVh2ZTl5STFyVVRsVlZWOUVSRE45T2R5R2pHcmVRMVdMYWRaZys5WEdpaWRQTzJHMlZqSW80MnVScXVXWjhUWStGVlVSUG0rYjI1TVp6bmFMbVdwKzZtazFhMUN1bGp1dUMwcm8waHRQZGxXZGtNTVM5cUYwYm8raFdPbitkNmRTb3FPY25Ia3Ftb3QxdnE3ZkphYXFncDVxR1dKWUgwMGtUWFJPaVZPRllyRlRoVzhlT09PT0Q1NWJOMjArUDcxTTh4clR1UlpNU1J0MmlWc1QxZkMybGlxVzloeUw2S2pYSzFyWGU2T1h6NVU3SDRtbWUzWkxmaHVrRmxsZi9BTjhuZmNhMkppOExNakhOanAyTDlVVjdwSGNMN3NZdnNWbHBGcGhqdWorbjlvd1RHNktHR0tncDJKVXpNWWlPcXFucFR1VHZYMWM1enVWOCtpY0luQ0lpSkZtL1BFSWRGTldjSDNCNmVVc2R0dU5aV1BmWEpBM29qbHJJRlk5c2prVHh6S3h6MnY4QVp5TTVYbFhLcTBWdXExZ2ZpdTEyNjUzakZVK0NweVNocGFhMlNvdkQySldJM2w2S25vNUlYU09SVTlGUkRrUGg1YVRXVEVkRktUVU9TM1JMZnN1a21ta3Fuc1JaWTZSa3JvNG9XcjdOWHRySXZIcXIwNTU2VTQ4M3hCTkliQm1taWx3MUFaYllXNURpUGFxWUt0akVTU1NsV1JySllYdTkySWoxa1JGOUZaNDQ2bmM5bnN2MUpyZFR0dmVPWFc3VkRxaTVXcEpMTldTdVhsejNRTHd4eXI3dVdKWWxWVjhxcXFiaUFBQUFBQUFBQUFBWUp1UXhiZFhsVjF0OUhvRG1scngyME5vWC93QVJmVXZqWkxOVUs5ZWxHT1dHUjdlR29ubHF0VDV2c1IzcEhkSWRybTRSYXZkTmcxenE4aHVNbmRwY21xSzlhdGxNa25MRnFtdDRWSitlVlIwbldyMkp5aU42dVVONitKdmNPNW9iak1kTE0xOVBWNU5CTDFzZHkxN1VwS2xXOEtucWk5WFAvd0FHWGFRNmM2N2J1c0VzdEJVWjFOZ21tV0wyMmxzVkhUMGpYdmRjcHFlRmtjc3F4dGN6dWN1UlZWejNkTFZYcGExVlI2bjR0VDl1T3R1elNpajFhMGsxVHJiblpxR2FQK0l4dGlkQXNTT2NqV3JOQjF2am5pVnlvaXF2Q29yazhmcVNuNmJXbW0xdTJiWmhxUFEwN2FTdWZpVjZncnFaaXFxVTlaRlNTbzlyVlg5Sy9LOXZ2MHZiejU1TXkrRjVGR21sdVh6b2lkYjcrMWpsK3lVMGFwLytsTFJQbmxzdi93QUx2ZDFTcGFmeEQyYjh6aFBUcFM2UWNmOEFDSGFiOHR2bHpobmczTDZYTWxwTC9ZSHhWRjVTa1RpUnpJbFJZNjF2SDY0K0dvLy9BTUVSM2pvWG5QZFhkNkdTYTc2V1l0cERwdGFxcHVZWmd4dEZrY2RNeFcvUDFkSDRlRmY1WmxUcmN2UERZMTZWVmVYY1Y3dGoyL1dYYjNwMUJqc0hacWI3Y09tcXZkZXhQOCtvNDhNYXErZTNHaXExcWY2bmNJcmxOZUkwM0NhV2I1OCt1dVVSNGpuVkREaDg5Ukl5M1dXa3JvNlNxbHBlT0VZNlJzVFZYcThxclh5L3E0WHg0T1gyQmFpYWNZTGtGdzBRdnVDMVdMNmcxVXI0cW11clplNDY0U3c5U3JUcWl0YXNDdFRxVnNhY3Rkd3E5U3U0NTlOdmsveE84ZlMyaG44d0xSV2JsRjlQbXVsUWp2OEFaRVBvWVJyOFVHS05kSU1XbVZFNjJaSzFyZjJXbG5WZitFT04zWFZWUTdZTG83MU9YbVpjZlk5ZnExTFZPcWMvL1ZGS3Ayc1JSdzdjOU8yUklpSXRncFhyeDlYTTVYL2RWUE51YmlqbTI4NmpNa1JGUk1hcjNKejlVaGNxZjdvaGhud3c1WkhhRzVERTVWVmpNcnFGYi9Xa3BlZitFTEFBQUFBQUFBQUFBQmhHdjI3WEY5dnVYMkhFOGp4VzZWamI1RXlvU3Zpa1l5bmdqV1ZZMzhxdkxsY3hFUnlvaWVqbStmSnVzY2pKV05saWUxN0hvam11YXZLS2kraW9wRVh4U0gyTCt4R0VSemRyK05MZGFoMU42ZGFVdlpUdmNlL0hYMlA2OEg4Ym44UXZ0NDJDWUJYVjhVcnEzR3FTdzE5V2prK2RzYTBxMDZvNzM1UloyYy9zcXFiUHNZdk5vdSsySEQ0clMrUHF0emFxaXE0MitzZFEyb2tjNUhmUlhJOXIvd0Jub3AxRzZlNFdxMmJkTlJLaThQamJCSllLdW5aMThjTFBLenR3cCsvZGV6ajc4RStiQmNPdU9RN1VjNnNOUWlzZ3llNDNPanBldndqa2tvWW9YUFQ3ZFhLZit4VDAvd0FMN0lHVXROcUJwL1g4d1hDbHFxYTROcDMrSHFuRDRwZkgvaTVzYUwvclF1ZXZycU8xME5SYzdoVU1wNldraWZQUEs5ZUd4eHRSWE9jcSt5SWlLcEFmdzU2R3F5M1dmVTNWaFlIdHA1b1h3STV5ZnJyS3Z2cTFQcXFKQjUrbktmVXByZGRyN1p0QmRNYXE0eXNwcXkvWGxrbERacmZNMUh0bWxWdkQ1SkdyNnhNUlVWM3NxcTF2anE1UG5wcDlhZFVkcWQ0MDkzSFh6Rm9wckprS3k5TUxvMDYwcDVFVkhNWGxPSVpKSVZXU0pVWHluMjZtbjFkeEhMTEJuV00yM01NWHVFZGJhcnRUdHFhV2RuNm1POWxUMmNpOG9yVjhvcUtpK1VNZHh2ZHhpbVFiZzYzYjVMakZ5dHR6cEo2dWxaWFZjc2FSenl3dFY2SXhxS3E4UFkxem1xcW92SEhqeWJ5Zk9QY2N5bHF2aUZZYkZoL1QvRTIzSEgvNGdzUHFsUWt6VmNyK1BwVDlybm45S2VUM2Z4STdkVjR4cWxwcHFwRkE1OE1NUzB5dWFucEpTMUNUdGFxK3lxa3p1UDhBU3YwTDR0dHhvcnhicVc3MjJvWlVVZGRBeXBwNVdMeTJTTjdVYzF5ZlpVVkZJZjhBaWhaSERMYU1Ed0drZDNxK3JyYWk0dWdaNWVqV3RiRkg0OWZtZEk5RSt2UXAyVzhYVE9zb3RsVnF4K0tMdVRZTEJabnlOWjU4UVJKU3ZWT1BaRWxWVit5S3BvV3lQS2FUS2RzK0hQcDVtdm10Y0V0cnFXSXZLeHlReXVhMXEvZFkrMjc5bkllYmVubE5KaW0ybk5KNm1ackpMbFNNdFZPeFY4eVNUeU5ZclUrcW94WHUvWnFuSmZEc3hhcHgzYmZTWENxaWRHdVEzZXN1akVjbkNxejVJR3IvQUYvRDhwOWxSZmNwd0FBQUFBQUFBQUFHTTdvZHQ5bDNHNFRGWjVLMWx0djFwZStvdEZ3Y3pxYkc5eUlqNHBFVHlzYitsdlBIbEZhMXljOGRLenBpZDUrSW5vbFpvZFBhWFRpMVpkYjdleEthMzExUjAxZmJoYjRhMXNrYzhidWxFOUVsYjFJbkNlRVJFUDFZTnRIMXIxdTFMcDlXTjJ0eWhaVFVpc1dHd3h5eHZkS3hxOVRJRmJFcXh3d2NyeXFJNVh1K2JuaFZWeGFtUlkzWk1yeDY0WXJmcmZIVjJxNTBzbEhWVTdrNGErSjdWYXJmSHA0WHdxZVU4S2hEbEhvRHV4Mm41WGNyaHQzbHBzeHhPNVNkeDF1cTNzVjNDZmw3MExueHFzaUo0N2tMa1Z5SjVSRStWUEJsR21tOXJkclhVRmgxVnRWdXdMRUthZHMwOFVhSkhHcms4ZGZaN3NrMDBpSXE5S1BjMWlLdnFoYmVubUJZOXBoaFZvd0xGYVpZYlpacWRJSVVjdkwzcnlxdmtlcWVyM3VWem5MOVhLU2RyZnRVMWJ3elZ5WGNEdGNyb283cFdTdnFiaFoxbGpqVjByL015c1NUaU9TS1JlWE9qY3FLamw1Yno0NmVhek5maUViaExRdW05NndHMVlkWnEzaUc1MWNQRkl5YUwzU1Y3NXBaSE1YM2JFM3luaFVWRlZDcTlBZEVySHQ4MDBwOEtzam5YQ3I2blZseHEwWWpIMXRXNXFJNXlJcThOVGhyV3RSVjhJMU9WNTVWWm5adHUxdzNCN2ttNmk3aHNSU3hZWGJGNjZHMXZ1VkxWSStuamR6RFNjUVN2NDZsWHJsY3FJanZuUk9PVzhWdHFucGhqT3JlbjkwMDd5V21iK0F1TUhiamtZMU91bGxiNWpsaitqbU9SRlQyWGhVWHdxb1RqczAwNTNLYUUzKzY2Ylo1aC80ckJLbWVhV2h1c04wcEpHVXM3VlgrOFpGM2U2a1V5SW55OUhVMTNTcW9uTDFQMjdyZG9XUWFpNVhTYTBhTVhpTzA1elFMRSthSjB2WlNzZkR4MnBXU3ArU1pxTmEzNXZsY2lONVZ2VDgzR0xxYjhTcWEzZjJUYnBIYUk3aDA5bGJ6K0dnU1huMDYrdGFqOE56Nzg5SFQ5anR0cSt6MjhhYjVSVTZ5YXlYcU85NTFXckxKRTFzcXpObzN5b3ZkbGZLditaTTVIT2FxcDhyVVYzQ3U1NVRaZHdHaU5nMTkwNXJNRnZjNjBrL1cycnQxYzFuVTZrcW1JcU5meCtwcW81elhOOGN0Y3ZDb3ZDcEorR3gvRUYyNjJuL3AxWXNFdFdaMlNqVllyYlV5cWxXeUdQbGVFaWMyYUtSclBvMlZ2ajBSRVR3ZEhvcHRXMWZ6clYySFgvZE5WeE91RkZLeW90OW1TV09SVWtqWG1IclNOVmppaWpYNW14dFZWVjNsM0hucXNhLzJLMVpQWTdoamw5bzJWZHV1bE5KUjFjRC9BTXNrVWpWYTlxL3VpcVFwYnREZDIyMG5MTHBVNkFRMHVhWWhkSmU3K0NxWE1mNmZrNzBLdmpla3JVOGRjTHVISWljOGVHcC9OMDBUM2RidDhxdFVtdlZMUzRWaDlzbDdxMGRPckdmWjZ4UUkrUjdwVlQ1VWZLN2hxS3ZIUGxxM1pqMWd0R0syRzM0ellhSmxKYmJWVFIwZEpBejBqaWphald0Ky9oRTgrNTdBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBSC85az1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUVBQVFBQkFBRC8yd0JEQUFNQ0FnSUNBZ01DQWdJREF3TURCQVlFQkFRRUJBZ0dCZ1VHQ1FnS0Nna0lDUWtLREE4TUNnc09Dd2tKRFJFTkRnOFFFQkVRQ2d3U0V4SVFFdzhRRUJEL3dBQUxDQUVzQVdnQkFSRUEvOFFBSEFBQkFRRUJBQU1CQVFBQUFBQUFBQUFBQUFnSEJnTUZDUVFDLzhRQVBCQUFBUU1EQXdNQ0JBUURCd01GQUFBQUFBRUNBd1FGQmdjSUVSSVRJVEZCQ1NKUllSUXlRbkVWVW9FV0l5UXpjcUd4RnlWaVU0S1JrckwvMmdBSUFRRUFBRDhBcUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQTlEbk9kWXBwdGk5Ym1XYTNtRzJXbTNzNnBwNU9WOHF2RFd0YW5LdWNxOElqVVJWVmZRa21zK0pSUzNDdXFmN0FhRFpKa05zcFhmM2xXK3I3TDJ0L21jeU9HVkcvWHk4MkRRRGVCcGZyL0FGVHJCYWZ4ZGt5U09OWlZ0Tnc2ZXFWcmZMblF5Tlhwa1JFOHFuaHlJaXIwOEp5Ym9UTHJIdnowejB6eVdYQjhYc2x4emJJS2VWWUo0TGE5R1U4VXlMd3NYZDRjcm5wN294amtSVVZGVkZSVU9XeEw0aitJVDVIRGoycW1tVjh3WlozTmFsVExNdFV5SkZYdzZWcXh4eU5iOTJ0ZCt4WHRIV1Vsd3BJSytncVlxbW1xWTJ6UXpSUFI3SkkzSnkxelhKNFZGUlVWRlQxUlRFdHdtNzNUVGI3UEZZN3BGVlh6STU0MGxaYWFCV282SmkvbGROSTd4R2kreWNPY3ZoZW5qeVpEYWZpVTJtbHUxTFM2ajZLWkRpOXZxMVR0MWphcjhRN3AvbjdiNG9sYzFPZVY2VlZlUFJGOUN2c2F5V3c1allLSEtNWXVrRnh0VnpoYlVVdFZDdkxKR0w3L0FGUmZaVVhoVVZGUlVSVVZEMllCbU91ZTRqVGpiOVk0YnJtOWROSlYxdlVsQmJLTnFTVlZVcmZWV3RWVVJyVTVUbDdsUkU1NDhxcUlzNU0rSlk5akdYaXQyK1pCRGp6M0lpWE50eDZrVnZQSEtJc0NNVmZ0M1A2bFBhT2EzNmU2NjR5dVQ0QmRYVHNoY2tWWlNWRE8zVTBjaXB5akpXY3J4eW5QRGtWV3J3dkNyd3ZIVjVIa2RqeEd4VjJUWkxkSUxkYTdiQzZvcXFxZDNESW1KNnF2MStpSW5sVlZFVGxWSkJ2UHhLTFBVM1dxcHROdEZzaHltZ28xWHVWanFuOE12VC9QMjJSU3ExcThLcWRTdFhqMVJQUTFyYjF2QjAxM0JWTWxodHNOVllza2hqV1oxcXJuTlZabU4vTTZHUnZpUkU5MFZHdVR5dlR3bkp1eEt1cXZ4Qk5QOEt5dWJDY0F4SzVaN2RxV1YwRXkwTXlRMDNjYitaa2NpTmU2UlU0WGxXczZmbzVmYitOSy9pRDRCbWVWdzRWcUZpRnl3SzZWTXJZSVgxczZUVXlTdTRSckpIcXlOMFNxcXB3cm1kUDFjaFZvQUFBQUFBQUFBQUJOVzgzYnhxbnVHb3NiczJGWkhaYUMwV21hV3ByYVd1bWxZNmVaM1MxajI5REhJcXNaM09FVlUvTzd5YnRnbURZMXB2aWR1d3pFYlpGUTJ5MlF0aGlqWTFFVjZvbmw3MVQ4ejNMNWM1ZktxcXFwQWU3Q2d0ZUg3MnNGdU9tTU1WTmtOYkxhNnV2Z28wUk91dGZWdVluVzF2bzZTTG82ay9VaThyK1pWV3RkMzJwMWRwUG9Ga21SMmVwZFQzYXJZeTEyK1ZxOE9qbW5kMEs5cSt6bVI5eDZmZHFHYmZEODBOc1dHYVUwV3FkeHQwVTJUWlkxOVEycWxZanBLV2k2bGJISEdxL2w2MGIzSEtucjFOUmZ5b2FqdWQwQXR1NFBUaWZHV3BRMGwrcHBZNTdUYzZpTlYvQ3ZSNmR4cXExRmQwUFoxSXJVOGM5SzhjdFEvVm9saHQ5MEgwUHBjWHpySTZlOExpMU5WU3JWMDdITmFsSTFYU3RaOC9uNUc4dFQ3SWlleEpPdy9GMjYzNno1enIvcUJTeDNHdW9LaU9XamJPbld5T3NxSFBkMXRSZi9BRW80MFl6K1ZIb3FlV29xVzNxdnBoaStyK0MzUEJjcm9JcDZhdmhja01ybUlyNldmaGUzUEd2cTE3VjgrUFZPVVhsRlZGa2o0YVdkWGFtVE5kRmI1SzVYV09kTGpSeHF2UGFWWHJGVXNUNk42MGlWRTlPWE9YM0tWeHJjNW9mbDJlTzB3c21iZFdVTm1tcDF0dFRiS3lrazdzWFBjajVtaVkzcVRwZDh2UEs4THh5YWRMTEZUeFBubmxaSEhHMVh2ZTl5STFyVVRsVlZWOUVSRE45T2R5R2pHcmVRMVdMYWRaZys5WEdpaWRQTzJHMlZqSW80MnVScXVXWjhUWStGVlVSUG0rYjI1TVp6bmFMbVdwKzZtazFhMUN1bGp1dUMwcm8waHRQZGxXZGtNTVM5cUYwYm8raFdPbitkNmRTb3FPY25Ia3Ftb3QxdnE3ZkphYXFncDVxR1dKWUgwMGtUWFJPaVZPRllyRlRoVzhlT09PT0Q1NWJOMjArUDcxTTh4clR1UlpNU1J0MmlWc1QxZkMybGlxVzloeUw2S2pYSzFyWGU2T1h6NVU3SDRtbWUzWkxmaHVrRmxsZi9BTjhuZmNhMkppOExNakhOanAyTDlVVjdwSGNMN3NZdnNWbHBGcGhqdWorbjlvd1RHNktHR0tncDJKVXpNWWlPcXFucFR1VHZYMWM1enVWOCtpY0luQ0lpSkZtL1BFSWRGTldjSDNCNmVVc2R0dU5aV1BmWEpBM29qbHJJRlk5c2prVHh6S3h6MnY4QVp5TTVYbFhLcTBWdXExZ2ZpdTEyNjUzakZVK0NweVNocGFhMlNvdkQySldJM2w2S25vNUlYU09SVTlGUkRrUGg1YVRXVEVkRktUVU9TM1JMZnN1a21ta3Fuc1JaWTZSa3JvNG9XcjdOWHRySXZIcXIwNTU2VTQ4M3hCTkliQm1taWx3MUFaYllXNURpUGFxWUt0akVTU1NsV1JySllYdTkySWoxa1JGOUZaNDQ2bmM5bnN2MUpyZFR0dmVPWFc3VkRxaTVXcEpMTldTdVhsejNRTHd4eXI3dVdKWWxWVjhxcXFiaUFBQUFBQUFBQUFBWUp1UXhiZFhsVjF0OUhvRG1scngyME5vWC93QVJmVXZqWkxOVUs5ZWxHT1dHUjdlR29ubHF0VDV2c1IzcEhkSWRybTRSYXZkTmcxenE4aHVNbmRwY21xSzlhdGxNa25MRnFtdDRWSitlVlIwbldyMkp5aU42dVVONitKdmNPNW9iak1kTE0xOVBWNU5CTDFzZHkxN1VwS2xXOEtucWk5WFAvd0FHWGFRNmM2N2J1c0VzdEJVWjFOZ21tV0wyMmxzVkhUMGpYdmRjcHFlRmtjc3F4dGN6dWN1UlZWejNkTFZYcGExVlI2bjR0VDl1T3R1elNpajFhMGsxVHJiblpxR2FQK0l4dGlkQXNTT2NqV3JOQjF2am5pVnlvaXF2Q29yazhmcVNuNmJXbW0xdTJiWmhxUFEwN2FTdWZpVjZncnFaaXFxVTlaRlNTbzlyVlg5Sy9LOXZ2MHZiejU1TXkrRjVGR21sdVh6b2lkYjcrMWpsK3lVMGFwLytsTFJQbmxzdi93QUx2ZDFTcGFmeEQyYjh6aFBUcFM2UWNmOEFDSGFiOHR2bHpobmczTDZYTWxwTC9ZSHhWRjVTa1RpUnpJbFJZNjF2SDY0K0dvLy9BTUVSM2pvWG5QZFhkNkdTYTc2V1l0cERwdGFxcHVZWmd4dEZrY2RNeFcvUDFkSDRlRmY1WmxUcmN2UERZMTZWVmVYY1Y3dGoyL1dYYjNwMUJqc0hacWI3Y09tcXZkZXhQOCtvNDhNYXErZTNHaXExcWY2bmNJcmxOZUkwM0NhV2I1OCt1dVVSNGpuVkREaDg5Ukl5M1dXa3JvNlNxbHBlT0VZNlJzVFZYcThxclh5L3E0WHg0T1gyQmFpYWNZTGtGdzBRdnVDMVdMNmcxVXI0cW11clplNDY0U3c5U3JUcWl0YXNDdFRxVnNhY3Rkd3E5U3U0NTlOdmsveE84ZlMyaG44d0xSV2JsRjlQbXVsUWp2OEFaRVBvWVJyOFVHS05kSU1XbVZFNjJaSzFyZjJXbG5WZitFT04zWFZWUTdZTG83MU9YbVpjZlk5ZnExTFZPcWMvL1ZGS3Ayc1JSdzdjOU8yUklpSXRncFhyeDlYTTVYL2RWUE51YmlqbTI4NmpNa1JGUk1hcjNKejlVaGNxZjdvaGhud3c1WkhhRzVERTVWVmpNcnFGYi9Xa3BlZitFTEFBQUFBQUFBQUFBQmhHdjI3WEY5dnVYMkhFOGp4VzZWamI1RXlvU3Zpa1l5bmdqV1ZZMzhxdkxsY3hFUnlvaWVqbStmSnVzY2pKV05saWUxN0hvam11YXZLS2kraW9wRVh4U0gyTCt4R0VSemRyK05MZGFoMU42ZGFVdlpUdmNlL0hYMlA2OEg4Ym44UXZ0NDJDWUJYVjhVcnEzR3FTdzE5V2prK2RzYTBxMDZvNzM1UloyYy9zcXFiUHNZdk5vdSsySEQ0clMrUHF0emFxaXE0MitzZFEyb2tjNUhmUlhJOXIvd0Jub3AxRzZlNFdxMmJkTlJLaThQamJCSllLdW5aMThjTFBLenR3cCsvZGV6ajc4RStiQmNPdU9RN1VjNnNOUWlzZ3llNDNPanBldndqa2tvWW9YUFQ3ZFhLZit4VDAvd0FMN0lHVXROcUJwL1g4d1hDbHFxYTROcDMrSHFuRDRwZkgvaTVzYUwvclF1ZXZycU8xME5SYzdoVU1wNldraWZQUEs5ZUd4eHRSWE9jcSt5SWlLcEFmdzU2R3F5M1dmVTNWaFlIdHA1b1h3STV5ZnJyS3Z2cTFQcXFKQjUrbktmVXByZGRyN1p0QmRNYXE0eXNwcXkvWGxrbERacmZNMUh0bWxWdkQ1SkdyNnhNUlVWM3NxcTF2anE1UG5wcDlhZFVkcWQ0MDkzSFh6Rm9wckprS3k5TUxvMDYwcDVFVkhNWGxPSVpKSVZXU0pVWHluMjZtbjFkeEhMTEJuV00yM01NWHVFZGJhcnRUdHFhV2RuNm1POWxUMmNpOG9yVjhvcUtpK1VNZHh2ZHhpbVFiZzYzYjVMakZ5dHR6cEo2dWxaWFZjc2FSenl3dFY2SXhxS3E4UFkxem1xcW92SEhqeWJ5Zk9QY2N5bHF2aUZZYkZoL1QvRTIzSEgvNGdzUHFsUWt6VmNyK1BwVDlybm45S2VUM2Z4STdkVjR4cWxwcHFwRkE1OE1NUzB5dWFucEpTMUNUdGFxK3lxa3p1UDhBU3YwTDR0dHhvcnhicVc3MjJvWlVVZGRBeXBwNVdMeTJTTjdVYzF5ZlpVVkZJZjhBaWhaSERMYU1Ed0drZDNxK3JyYWk0dWdaNWVqV3RiRkg0OWZtZEk5RSt2UXAyVzhYVE9zb3RsVnF4K0tMdVRZTEJabnlOWjU4UVJKU3ZWT1BaRWxWVit5S3BvV3lQS2FUS2RzK0hQcDVtdm10Y0V0cnFXSXZLeHlReXVhMXEvZFkrMjc5bkllYmVubE5KaW0ybk5KNm1ackpMbFNNdFZPeFY4eVNUeU5ZclUrcW94WHUvWnFuSmZEc3hhcHgzYmZTWENxaWRHdVEzZXN1akVjbkNxejVJR3IvQUYvRDhwOWxSZmNwd0FBQUFBQUFBQUFHTTdvZHQ5bDNHNFRGWjVLMWx0djFwZStvdEZ3Y3pxYkc5eUlqNHBFVHlzYitsdlBIbEZhMXljOGRLenBpZDUrSW5vbFpvZFBhWFRpMVpkYjdleEthMzExUjAxZmJoYjRhMXNrYzhidWxFOUVsYjFJbkNlRVJFUDFZTnRIMXIxdTFMcDlXTjJ0eWhaVFVpc1dHd3h5eHZkS3hxOVRJRmJFcXh3d2NyeXFJNVh1K2JuaFZWeGFtUlkzWk1yeDY0WXJmcmZIVjJxNTBzbEhWVTdrNGErSjdWYXJmSHA0WHdxZVU4S2hEbEhvRHV4Mm41WGNyaHQzbHBzeHhPNVNkeDF1cTNzVjNDZmw3MExueHFzaUo0N2tMa1Z5SjVSRStWUEJsR21tOXJkclhVRmgxVnRWdXdMRUthZHMwOFVhSkhHcms4ZGZaN3NrMDBpSXE5S1BjMWlLdnFoYmVubUJZOXBoaFZvd0xGYVpZYlpacWRJSVVjdkwzcnlxdmtlcWVyM3VWem5MOVhLU2RyZnRVMWJ3elZ5WGNEdGNyb283cFdTdnFiaFoxbGpqVjByL015c1NUaU9TS1JlWE9qY3FLamw1Yno0NmVhek5maUViaExRdW05NndHMVlkWnEzaUc1MWNQRkl5YUwzU1Y3NXBaSE1YM2JFM3luaFVWRlZDcTlBZEVySHQ4MDBwOEtzam5YQ3I2blZseHEwWWpIMXRXNXFJNXlJcThOVGhyV3RSVjhJMU9WNTVWWm5adHUxdzNCN2ttNmk3aHNSU3hZWGJGNjZHMXZ1VkxWSStuamR6RFNjUVN2NDZsWHJsY3FJanZuUk9PVzhWdHFucGhqT3JlbjkwMDd5V21iK0F1TUhiamtZMU91bGxiNWpsaitqbU9SRlQyWGhVWHdxb1RqczAwNTNLYUUzKzY2Ylo1aC80ckJLbWVhV2h1c04wcEpHVXM3VlgrOFpGM2U2a1V5SW55OUhVMTNTcW9uTDFQMjdyZG9XUWFpNVhTYTBhTVhpTzA1elFMRSthSjB2WlNzZkR4MnBXU3ArU1pxTmEzNXZsY2lONVZ2VDgzR0xxYjhTcWEzZjJUYnBIYUk3aDA5bGJ6K0dnU1huMDYrdGFqOE56Nzg5SFQ5anR0cSt6MjhhYjVSVTZ5YXlYcU85NTFXckxKRTFzcXpObzN5b3ZkbGZLditaTTVIT2FxcDhyVVYzQ3U1NVRaZHdHaU5nMTkwNXJNRnZjNjBrL1cycnQxYzFuVTZrcW1JcU5meCtwcW81elhOOGN0Y3ZDb3ZDcEorR3gvRUYyNjJuL3AxWXNFdFdaMlNqVllyYlV5cWxXeUdQbGVFaWMyYUtSclBvMlZ2ajBSRVR3ZEhvcHRXMWZ6clYySFgvZE5WeE91RkZLeW90OW1TV09SVWtqWG1IclNOVmppaWpYNW14dFZWVjNsM0hucXNhLzJLMVpQWTdoamw5bzJWZHV1bE5KUjFjRC9BTXNrVWpWYTlxL3VpcVFwYnREZDIyMG5MTHBVNkFRMHVhWWhkSmU3K0NxWE1mNmZrNzBLdmpla3JVOGRjTHVISWljOGVHcC9OMDBUM2RidDhxdFVtdlZMUzRWaDlzbDdxMGRPckdmWjZ4UUkrUjdwVlQ1VWZLN2hxS3ZIUGxxM1pqMWd0R0syRzM0ellhSmxKYmJWVFIwZEpBejBqaWphald0Ky9oRTgrNTdBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBSC85az1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUVBQVFBQkFBRC8yd0JEQUFNQ0FnSUNBZ01DQWdJREF3TURCQVlFQkFRRUJBZ0dCZ1VHQ1FnS0Nna0lDUWtLREE4TUNnc09Dd2tKRFJFTkRnOFFFQkVRQ2d3U0V4SVFFdzhRRUJEL3dBQUxDQUVzQVdnQkFSRUEvOFFBSEFBQkFRRUJBQU1CQVFBQUFBQUFBQUFBQUFnSEJnTUZDUVFDLzhRQVBCQUFBUU1EQXdNQ0JBUURCd01GQUFBQUFBRUNBd1FGQmdjSUVSSVRJVEZCQ1NKUllSUXlRbkVWVW9FV0l5UXpjcUd4RnlWaVU0S1JrckwvMmdBSUFRRUFBRDhBcUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQTlEbk9kWXBwdGk5Ym1XYTNtRzJXbTNzNnBwNU9WOHF2RFd0YW5LdWNxOElqVVJWVmZRa21zK0pSUzNDdXFmN0FhRFpKa05zcFhmM2xXK3I3TDJ0L21jeU9HVkcvWHk4MkRRRGVCcGZyL0FGVHJCYWZ4ZGt5U09OWlZ0Tnc2ZXFWcmZMblF5Tlhwa1JFOHFuaHlJaXIwOEp5Ym9UTHJIdnowejB6eVdYQjhYc2x4emJJS2VWWUo0TGE5R1U4VXlMd3NYZDRjcm5wN294amtSVVZGVkZSVU9XeEw0aitJVDVIRGoycW1tVjh3WlozTmFsVExNdFV5SkZYdzZWcXh4eU5iOTJ0ZCt4WHRIV1Vsd3BJSytncVlxbW1xWTJ6UXpSUFI3SkkzSnkxelhKNFZGUlVWRlQxUlRFdHdtNzNUVGI3UEZZN3BGVlh6STU0MGxaYWFCV282SmkvbGROSTd4R2kreWNPY3ZoZW5qeVpEYWZpVTJtbHUxTFM2ajZLWkRpOXZxMVR0MWphcjhRN3AvbjdiNG9sYzFPZVY2VlZlUFJGOUN2c2F5V3c1allLSEtNWXVrRnh0VnpoYlVVdFZDdkxKR0w3L0FGUmZaVVhoVVZGUlVSVVZEMllCbU91ZTRqVGpiOVk0YnJtOWROSlYxdlVsQmJLTnFTVlZVcmZWV3RWVVJyVTVUbDdsUkU1NDhxcUlzNU0rSlk5akdYaXQyK1pCRGp6M0lpWE50eDZrVnZQSEtJc0NNVmZ0M1A2bFBhT2EzNmU2NjR5dVQ0QmRYVHNoY2tWWlNWRE8zVTBjaXB5akpXY3J4eW5QRGtWV3J3dkNyd3ZIVjVIa2RqeEd4VjJUWkxkSUxkYTdiQzZvcXFxZDNESW1KNnF2MStpSW5sVlZFVGxWSkJ2UHhLTFBVM1dxcHROdEZzaHltZ28xWHVWanFuOE12VC9QMjJSU3ExcThLcWRTdFhqMVJQUTFyYjF2QjAxM0JWTWxodHNOVllza2hqV1oxcXJuTlZabU4vTTZHUnZpUkU5MFZHdVR5dlR3bkp1eEt1cXZ4Qk5QOEt5dWJDY0F4SzVaN2RxV1YwRXkwTXlRMDNjYitaa2NpTmU2UlU0WGxXczZmbzVmYitOSy9pRDRCbWVWdzRWcUZpRnl3SzZWTXJZSVgxczZUVXlTdTRSckpIcXlOMFNxcXB3cm1kUDFjaFZvQUFBQUFBQUFBQUJOVzgzYnhxbnVHb3NiczJGWkhaYUMwV21hV3ByYVd1bWxZNmVaM1MxajI5REhJcXNaM09FVlUvTzd5YnRnbURZMXB2aWR1d3pFYlpGUTJ5MlF0aGlqWTFFVjZvbmw3MVQ4ejNMNWM1ZktxcXFwQWU3Q2d0ZUg3MnNGdU9tTU1WTmtOYkxhNnV2Z28wUk91dGZWdVluVzF2bzZTTG82ay9VaThyK1pWV3RkMzJwMWRwUG9Ga21SMmVwZFQzYXJZeTEyK1ZxOE9qbW5kMEs5cSt6bVI5eDZmZHFHYmZEODBOc1dHYVUwV3FkeHQwVTJUWlkxOVEycWxZanBLV2k2bGJISEdxL2w2MGIzSEtucjFOUmZ5b2FqdWQwQXR1NFBUaWZHV3BRMGwrcHBZNTdUYzZpTlYvQ3ZSNmR4cXExRmQwUFoxSXJVOGM5SzhjdFEvVm9saHQ5MEgwUHBjWHpySTZlOExpMU5WU3JWMDdITmFsSTFYU3RaOC9uNUc4dFQ3SWlleEpPdy9GMjYzNno1enIvcUJTeDNHdW9LaU9XamJPbld5T3NxSFBkMXRSZi9BRW80MFl6K1ZIb3FlV29xVzNxdnBoaStyK0MzUEJjcm9JcDZhdmhja01ybUlyNldmaGUzUEd2cTE3VjgrUFZPVVhsRlZGa2o0YVdkWGFtVE5kRmI1SzVYV09kTGpSeHF2UGFWWHJGVXNUNk42MGlWRTlPWE9YM0tWeHJjNW9mbDJlTzB3c21iZFdVTm1tcDF0dFRiS3lrazdzWFBjajVtaVkzcVRwZDh2UEs4THh5YWRMTEZUeFBubmxaSEhHMVh2ZTl5STFyVVRsVlZWOUVSRE45T2R5R2pHcmVRMVdMYWRaZys5WEdpaWRQTzJHMlZqSW80MnVScXVXWjhUWStGVlVSUG0rYjI1TVp6bmFMbVdwKzZtazFhMUN1bGp1dUMwcm8waHRQZGxXZGtNTVM5cUYwYm8raFdPbitkNmRTb3FPY25Ia3Ftb3QxdnE3ZkphYXFncDVxR1dKWUgwMGtUWFJPaVZPRllyRlRoVzhlT09PT0Q1NWJOMjArUDcxTTh4clR1UlpNU1J0MmlWc1QxZkMybGlxVzloeUw2S2pYSzFyWGU2T1h6NVU3SDRtbWUzWkxmaHVrRmxsZi9BTjhuZmNhMkppOExNakhOanAyTDlVVjdwSGNMN3NZdnNWbHBGcGhqdWorbjlvd1RHNktHR0tncDJKVXpNWWlPcXFucFR1VHZYMWM1enVWOCtpY0luQ0lpSkZtL1BFSWRGTldjSDNCNmVVc2R0dU5aV1BmWEpBM29qbHJJRlk5c2prVHh6S3h6MnY4QVp5TTVYbFhLcTBWdXExZ2ZpdTEyNjUzakZVK0NweVNocGFhMlNvdkQySldJM2w2S25vNUlYU09SVTlGUkRrUGg1YVRXVEVkRktUVU9TM1JMZnN1a21ta3Fuc1JaWTZSa3JvNG9XcjdOWHRySXZIcXIwNTU2VTQ4M3hCTkliQm1taWx3MUFaYllXNURpUGFxWUt0akVTU1NsV1JySllYdTkySWoxa1JGOUZaNDQ2bmM5bnN2MUpyZFR0dmVPWFc3VkRxaTVXcEpMTldTdVhsejNRTHd4eXI3dVdKWWxWVjhxcXFiaUFBQUFBQUFBQUFBWUp1UXhiZFhsVjF0OUhvRG1scngyME5vWC93QVJmVXZqWkxOVUs5ZWxHT1dHUjdlR29ubHF0VDV2c1IzcEhkSWRybTRSYXZkTmcxenE4aHVNbmRwY21xSzlhdGxNa25MRnFtdDRWSitlVlIwbldyMkp5aU42dVVONitKdmNPNW9iak1kTE0xOVBWNU5CTDFzZHkxN1VwS2xXOEtucWk5WFAvd0FHWGFRNmM2N2J1c0VzdEJVWjFOZ21tV0wyMmxzVkhUMGpYdmRjcHFlRmtjc3F4dGN6dWN1UlZWejNkTFZYcGExVlI2bjR0VDl1T3R1elNpajFhMGsxVHJiblpxR2FQK0l4dGlkQXNTT2NqV3JOQjF2am5pVnlvaXF2Q29yazhmcVNuNmJXbW0xdTJiWmhxUFEwN2FTdWZpVjZncnFaaXFxVTlaRlNTbzlyVlg5Sy9LOXZ2MHZiejU1TXkrRjVGR21sdVh6b2lkYjcrMWpsK3lVMGFwLytsTFJQbmxzdi93QUx2ZDFTcGFmeEQyYjh6aFBUcFM2UWNmOEFDSGFiOHR2bHpobmczTDZYTWxwTC9ZSHhWRjVTa1RpUnpJbFJZNjF2SDY0K0dvLy9BTUVSM2pvWG5QZFhkNkdTYTc2V1l0cERwdGFxcHVZWmd4dEZrY2RNeFcvUDFkSDRlRmY1WmxUcmN2UERZMTZWVmVYY1Y3dGoyL1dYYjNwMUJqc0hacWI3Y09tcXZkZXhQOCtvNDhNYXErZTNHaXExcWY2bmNJcmxOZUkwM0NhV2I1OCt1dVVSNGpuVkREaDg5Ukl5M1dXa3JvNlNxbHBlT0VZNlJzVFZYcThxclh5L3E0WHg0T1gyQmFpYWNZTGtGdzBRdnVDMVdMNmcxVXI0cW11clplNDY0U3c5U3JUcWl0YXNDdFRxVnNhY3Rkd3E5U3U0NTlOdmsveE84ZlMyaG44d0xSV2JsRjlQbXVsUWp2OEFaRVBvWVJyOFVHS05kSU1XbVZFNjJaSzFyZjJXbG5WZitFT04zWFZWUTdZTG83MU9YbVpjZlk5ZnExTFZPcWMvL1ZGS3Ayc1JSdzdjOU8yUklpSXRncFhyeDlYTTVYL2RWUE51YmlqbTI4NmpNa1JGUk1hcjNKejlVaGNxZjdvaGhud3c1WkhhRzVERTVWVmpNcnFGYi9Xa3BlZitFTEFBQUFBQUFBQUFBQmhHdjI3WEY5dnVYMkhFOGp4VzZWamI1RXlvU3Zpa1l5bmdqV1ZZMzhxdkxsY3hFUnlvaWVqbStmSnVzY2pKV05saWUxN0hvam11YXZLS2kraW9wRVh4U0gyTCt4R0VSemRyK05MZGFoMU42ZGFVdlpUdmNlL0hYMlA2OEg4Ym44UXZ0NDJDWUJYVjhVcnEzR3FTdzE5V2prK2RzYTBxMDZvNzM1UloyYy9zcXFiUHNZdk5vdSsySEQ0clMrUHF0emFxaXE0MitzZFEyb2tjNUhmUlhJOXIvd0Jub3AxRzZlNFdxMmJkTlJLaThQamJCSllLdW5aMThjTFBLenR3cCsvZGV6ajc4RStiQmNPdU9RN1VjNnNOUWlzZ3llNDNPanBldndqa2tvWW9YUFQ3ZFhLZit4VDAvd0FMN0lHVXROcUJwL1g4d1hDbHFxYTROcDMrSHFuRDRwZkgvaTVzYUwvclF1ZXZycU8xME5SYzdoVU1wNldraWZQUEs5ZUd4eHRSWE9jcSt5SWlLcEFmdzU2R3F5M1dmVTNWaFlIdHA1b1h3STV5ZnJyS3Z2cTFQcXFKQjUrbktmVXByZGRyN1p0QmRNYXE0eXNwcXkvWGxrbERacmZNMUh0bWxWdkQ1SkdyNnhNUlVWM3NxcTF2anE1UG5wcDlhZFVkcWQ0MDkzSFh6Rm9wckprS3k5TUxvMDYwcDVFVkhNWGxPSVpKSVZXU0pVWHluMjZtbjFkeEhMTEJuV00yM01NWHVFZGJhcnRUdHFhV2RuNm1POWxUMmNpOG9yVjhvcUtpK1VNZHh2ZHhpbVFiZzYzYjVMakZ5dHR6cEo2dWxaWFZjc2FSenl3dFY2SXhxS3E4UFkxem1xcW92SEhqeWJ5Zk9QY2N5bHF2aUZZYkZoL1QvRTIzSEgvNGdzUHFsUWt6VmNyK1BwVDlybm45S2VUM2Z4STdkVjR4cWxwcHFwRkE1OE1NUzB5dWFucEpTMUNUdGFxK3lxa3p1UDhBU3YwTDR0dHhvcnhicVc3MjJvWlVVZGRBeXBwNVdMeTJTTjdVYzF5ZlpVVkZJZjhBaWhaSERMYU1Ed0drZDNxK3JyYWk0dWdaNWVqV3RiRkg0OWZtZEk5RSt2UXAyVzhYVE9zb3RsVnF4K0tMdVRZTEJabnlOWjU4UVJKU3ZWT1BaRWxWVit5S3BvV3lQS2FUS2RzK0hQcDVtdm10Y0V0cnFXSXZLeHlReXVhMXEvZFkrMjc5bkllYmVubE5KaW0ybk5KNm1ackpMbFNNdFZPeFY4eVNUeU5ZclUrcW94WHUvWnFuSmZEc3hhcHgzYmZTWENxaWRHdVEzZXN1akVjbkNxejVJR3IvQUYvRDhwOWxSZmNwd0FBQUFBQUFBQUFHTTdvZHQ5bDNHNFRGWjVLMWx0djFwZStvdEZ3Y3pxYkc5eUlqNHBFVHlzYitsdlBIbEZhMXljOGRLenBpZDUrSW5vbFpvZFBhWFRpMVpkYjdleEthMzExUjAxZmJoYjRhMXNrYzhidWxFOUVsYjFJbkNlRVJFUDFZTnRIMXIxdTFMcDlXTjJ0eWhaVFVpc1dHd3h5eHZkS3hxOVRJRmJFcXh3d2NyeXFJNVh1K2JuaFZWeGFtUlkzWk1yeDY0WXJmcmZIVjJxNTBzbEhWVTdrNGErSjdWYXJmSHA0WHdxZVU4S2hEbEhvRHV4Mm41WGNyaHQzbHBzeHhPNVNkeDF1cTNzVjNDZmw3MExueHFzaUo0N2tMa1Z5SjVSRStWUEJsR21tOXJkclhVRmgxVnRWdXdMRUthZHMwOFVhSkhHcms4ZGZaN3NrMDBpSXE5S1BjMWlLdnFoYmVubUJZOXBoaFZvd0xGYVpZYlpacWRJSVVjdkwzcnlxdmtlcWVyM3VWem5MOVhLU2RyZnRVMWJ3elZ5WGNEdGNyb283cFdTdnFiaFoxbGpqVjByL015c1NUaU9TS1JlWE9qY3FLamw1Yno0NmVhek5maUViaExRdW05NndHMVlkWnEzaUc1MWNQRkl5YUwzU1Y3NXBaSE1YM2JFM3luaFVWRlZDcTlBZEVySHQ4MDBwOEtzam5YQ3I2blZseHEwWWpIMXRXNXFJNXlJcThOVGhyV3RSVjhJMU9WNTVWWm5adHUxdzNCN2ttNmk3aHNSU3hZWGJGNjZHMXZ1VkxWSStuamR6RFNjUVN2NDZsWHJsY3FJanZuUk9PVzhWdHFucGhqT3JlbjkwMDd5V21iK0F1TUhiamtZMU91bGxiNWpsaitqbU9SRlQyWGhVWHdxb1RqczAwNTNLYUUzKzY2Ylo1aC80ckJLbWVhV2h1c04wcEpHVXM3VlgrOFpGM2U2a1V5SW55OUhVMTNTcW9uTDFQMjdyZG9XUWFpNVhTYTBhTVhpTzA1elFMRSthSjB2WlNzZkR4MnBXU3ArU1pxTmEzNXZsY2lONVZ2VDgzR0xxYjhTcWEzZjJUYnBIYUk3aDA5bGJ6K0dnU1huMDYrdGFqOE56Nzg5SFQ5anR0cSt6MjhhYjVSVTZ5YXlYcU85NTFXckxKRTFzcXpObzN5b3ZkbGZLditaTTVIT2FxcDhyVVYzQ3U1NVRaZHdHaU5nMTkwNXJNRnZjNjBrL1cycnQxYzFuVTZrcW1JcU5meCtwcW81elhOOGN0Y3ZDb3ZDcEorR3gvRUYyNjJuL3AxWXNFdFdaMlNqVllyYlV5cWxXeUdQbGVFaWMyYUtSclBvMlZ2ajBSRVR3ZEhvcHRXMWZ6clYySFgvZE5WeE91RkZLeW90OW1TV09SVWtqWG1IclNOVmppaWpYNW14dFZWVjNsM0hucXNhLzJLMVpQWTdoamw5bzJWZHV1bE5KUjFjRC9BTXNrVWpWYTlxL3VpcVFwYnREZDIyMG5MTHBVNkFRMHVhWWhkSmU3K0NxWE1mNmZrNzBLdmpla3JVOGRjTHVISWljOGVHcC9OMDBUM2RidDhxdFVtdlZMUzRWaDlzbDdxMGRPckdmWjZ4UUkrUjdwVlQ1VWZLN2hxS3ZIUGxxM1pqMWd0R0syRzM0ellhSmxKYmJWVFIwZEpBejBqaWphald0Ky9oRTgrNTdBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBSC85az1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUVBQVFBQkFBRC8yd0JEQUFNQ0FnSUNBZ01DQWdJREF3TURCQVlFQkFRRUJBZ0dCZ1VHQ1FnS0Nna0lDUWtLREE4TUNnc09Dd2tKRFJFTkRnOFFFQkVRQ2d3U0V4SVFFdzhRRUJEL3dBQUxDQUVzQVdnQkFSRUEvOFFBSEFBQkFRRUJBQU1CQVFBQUFBQUFBQUFBQUFnSEJnTUZDUVFDLzhRQVBCQUFBUU1EQXdNQ0JBUURCd01GQUFBQUFBRUNBd1FGQmdjSUVSSVRJVEZCQ1NKUllSUXlRbkVWVW9FV0l5UXpjcUd4RnlWaVU0S1JrckwvMmdBSUFRRUFBRDhBcUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQTlEbk9kWXBwdGk5Ym1XYTNtRzJXbTNzNnBwNU9WOHF2RFd0YW5LdWNxOElqVVJWVmZRa21zK0pSUzNDdXFmN0FhRFpKa05zcFhmM2xXK3I3TDJ0L21jeU9HVkcvWHk4MkRRRGVCcGZyL0FGVHJCYWZ4ZGt5U09OWlZ0Tnc2ZXFWcmZMblF5Tlhwa1JFOHFuaHlJaXIwOEp5Ym9UTHJIdnowejB6eVdYQjhYc2x4emJJS2VWWUo0TGE5R1U4VXlMd3NYZDRjcm5wN294amtSVVZGVkZSVU9XeEw0aitJVDVIRGoycW1tVjh3WlozTmFsVExNdFV5SkZYdzZWcXh4eU5iOTJ0ZCt4WHRIV1Vsd3BJSytncVlxbW1xWTJ6UXpSUFI3SkkzSnkxelhKNFZGUlVWRlQxUlRFdHdtNzNUVGI3UEZZN3BGVlh6STU0MGxaYWFCV282SmkvbGROSTd4R2kreWNPY3ZoZW5qeVpEYWZpVTJtbHUxTFM2ajZLWkRpOXZxMVR0MWphcjhRN3AvbjdiNG9sYzFPZVY2VlZlUFJGOUN2c2F5V3c1allLSEtNWXVrRnh0VnpoYlVVdFZDdkxKR0w3L0FGUmZaVVhoVVZGUlVSVVZEMllCbU91ZTRqVGpiOVk0YnJtOWROSlYxdlVsQmJLTnFTVlZVcmZWV3RWVVJyVTVUbDdsUkU1NDhxcUlzNU0rSlk5akdYaXQyK1pCRGp6M0lpWE50eDZrVnZQSEtJc0NNVmZ0M1A2bFBhT2EzNmU2NjR5dVQ0QmRYVHNoY2tWWlNWRE8zVTBjaXB5akpXY3J4eW5QRGtWV3J3dkNyd3ZIVjVIa2RqeEd4VjJUWkxkSUxkYTdiQzZvcXFxZDNESW1KNnF2MStpSW5sVlZFVGxWSkJ2UHhLTFBVM1dxcHROdEZzaHltZ28xWHVWanFuOE12VC9QMjJSU3ExcThLcWRTdFhqMVJQUTFyYjF2QjAxM0JWTWxodHNOVllza2hqV1oxcXJuTlZabU4vTTZHUnZpUkU5MFZHdVR5dlR3bkp1eEt1cXZ4Qk5QOEt5dWJDY0F4SzVaN2RxV1YwRXkwTXlRMDNjYitaa2NpTmU2UlU0WGxXczZmbzVmYitOSy9pRDRCbWVWdzRWcUZpRnl3SzZWTXJZSVgxczZUVXlTdTRSckpIcXlOMFNxcXB3cm1kUDFjaFZvQUFBQUFBQUFBQUJOVzgzYnhxbnVHb3NiczJGWkhaYUMwV21hV3ByYVd1bWxZNmVaM1MxajI5REhJcXNaM09FVlUvTzd5YnRnbURZMXB2aWR1d3pFYlpGUTJ5MlF0aGlqWTFFVjZvbmw3MVQ4ejNMNWM1ZktxcXFwQWU3Q2d0ZUg3MnNGdU9tTU1WTmtOYkxhNnV2Z28wUk91dGZWdVluVzF2bzZTTG82ay9VaThyK1pWV3RkMzJwMWRwUG9Ga21SMmVwZFQzYXJZeTEyK1ZxOE9qbW5kMEs5cSt6bVI5eDZmZHFHYmZEODBOc1dHYVUwV3FkeHQwVTJUWlkxOVEycWxZanBLV2k2bGJISEdxL2w2MGIzSEtucjFOUmZ5b2FqdWQwQXR1NFBUaWZHV3BRMGwrcHBZNTdUYzZpTlYvQ3ZSNmR4cXExRmQwUFoxSXJVOGM5SzhjdFEvVm9saHQ5MEgwUHBjWHpySTZlOExpMU5WU3JWMDdITmFsSTFYU3RaOC9uNUc4dFQ3SWlleEpPdy9GMjYzNno1enIvcUJTeDNHdW9LaU9XamJPbld5T3NxSFBkMXRSZi9BRW80MFl6K1ZIb3FlV29xVzNxdnBoaStyK0MzUEJjcm9JcDZhdmhja01ybUlyNldmaGUzUEd2cTE3VjgrUFZPVVhsRlZGa2o0YVdkWGFtVE5kRmI1SzVYV09kTGpSeHF2UGFWWHJGVXNUNk42MGlWRTlPWE9YM0tWeHJjNW9mbDJlTzB3c21iZFdVTm1tcDF0dFRiS3lrazdzWFBjajVtaVkzcVRwZDh2UEs4THh5YWRMTEZUeFBubmxaSEhHMVh2ZTl5STFyVVRsVlZWOUVSRE45T2R5R2pHcmVRMVdMYWRaZys5WEdpaWRQTzJHMlZqSW80MnVScXVXWjhUWStGVlVSUG0rYjI1TVp6bmFMbVdwKzZtazFhMUN1bGp1dUMwcm8waHRQZGxXZGtNTVM5cUYwYm8raFdPbitkNmRTb3FPY25Ia3Ftb3QxdnE3ZkphYXFncDVxR1dKWUgwMGtUWFJPaVZPRllyRlRoVzhlT09PT0Q1NWJOMjArUDcxTTh4clR1UlpNU1J0MmlWc1QxZkMybGlxVzloeUw2S2pYSzFyWGU2T1h6NVU3SDRtbWUzWkxmaHVrRmxsZi9BTjhuZmNhMkppOExNakhOanAyTDlVVjdwSGNMN3NZdnNWbHBGcGhqdWorbjlvd1RHNktHR0tncDJKVXpNWWlPcXFucFR1VHZYMWM1enVWOCtpY0luQ0lpSkZtL1BFSWRGTldjSDNCNmVVc2R0dU5aV1BmWEpBM29qbHJJRlk5c2prVHh6S3h6MnY4QVp5TTVYbFhLcTBWdXExZ2ZpdTEyNjUzakZVK0NweVNocGFhMlNvdkQySldJM2w2S25vNUlYU09SVTlGUkRrUGg1YVRXVEVkRktUVU9TM1JMZnN1a21ta3Fuc1JaWTZSa3JvNG9XcjdOWHRySXZIcXIwNTU2VTQ4M3hCTkliQm1taWx3MUFaYllXNURpUGFxWUt0akVTU1NsV1JySllYdTkySWoxa1JGOUZaNDQ2bmM5bnN2MUpyZFR0dmVPWFc3VkRxaTVXcEpMTldTdVhsejNRTHd4eXI3dVdKWWxWVjhxcXFiaUFBQUFBQUFBQUFBWUp1UXhiZFhsVjF0OUhvRG1scngyME5vWC93QVJmVXZqWkxOVUs5ZWxHT1dHUjdlR29ubHF0VDV2c1IzcEhkSWRybTRSYXZkTmcxenE4aHVNbmRwY21xSzlhdGxNa25MRnFtdDRWSitlVlIwbldyMkp5aU42dVVONitKdmNPNW9iak1kTE0xOVBWNU5CTDFzZHkxN1VwS2xXOEtucWk5WFAvd0FHWGFRNmM2N2J1c0VzdEJVWjFOZ21tV0wyMmxzVkhUMGpYdmRjcHFlRmtjc3F4dGN6dWN1UlZWejNkTFZYcGExVlI2bjR0VDl1T3R1elNpajFhMGsxVHJiblpxR2FQK0l4dGlkQXNTT2NqV3JOQjF2am5pVnlvaXF2Q29yazhmcVNuNmJXbW0xdTJiWmhxUFEwN2FTdWZpVjZncnFaaXFxVTlaRlNTbzlyVlg5Sy9LOXZ2MHZiejU1TXkrRjVGR21sdVh6b2lkYjcrMWpsK3lVMGFwLytsTFJQbmxzdi93QUx2ZDFTcGFmeEQyYjh6aFBUcFM2UWNmOEFDSGFiOHR2bHpobmczTDZYTWxwTC9ZSHhWRjVTa1RpUnpJbFJZNjF2SDY0K0dvLy9BTUVSM2pvWG5QZFhkNkdTYTc2V1l0cERwdGFxcHVZWmd4dEZrY2RNeFcvUDFkSDRlRmY1WmxUcmN2UERZMTZWVmVYY1Y3dGoyL1dYYjNwMUJqc0hacWI3Y09tcXZkZXhQOCtvNDhNYXErZTNHaXExcWY2bmNJcmxOZUkwM0NhV2I1OCt1dVVSNGpuVkREaDg5Ukl5M1dXa3JvNlNxbHBlT0VZNlJzVFZYcThxclh5L3E0WHg0T1gyQmFpYWNZTGtGdzBRdnVDMVdMNmcxVXI0cW11clplNDY0U3c5U3JUcWl0YXNDdFRxVnNhY3Rkd3E5U3U0NTlOdmsveE84ZlMyaG44d0xSV2JsRjlQbXVsUWp2OEFaRVBvWVJyOFVHS05kSU1XbVZFNjJaSzFyZjJXbG5WZitFT04zWFZWUTdZTG83MU9YbVpjZlk5ZnExTFZPcWMvL1ZGS3Ayc1JSdzdjOU8yUklpSXRncFhyeDlYTTVYL2RWUE51YmlqbTI4NmpNa1JGUk1hcjNKejlVaGNxZjdvaGhud3c1WkhhRzVERTVWVmpNcnFGYi9Xa3BlZitFTEFBQUFBQUFBQUFBQmhHdjI3WEY5dnVYMkhFOGp4VzZWamI1RXlvU3Zpa1l5bmdqV1ZZMzhxdkxsY3hFUnlvaWVqbStmSnVzY2pKV05saWUxN0hvam11YXZLS2kraW9wRVh4U0gyTCt4R0VSemRyK05MZGFoMU42ZGFVdlpUdmNlL0hYMlA2OEg4Ym44UXZ0NDJDWUJYVjhVcnEzR3FTdzE5V2prK2RzYTBxMDZvNzM1UloyYy9zcXFiUHNZdk5vdSsySEQ0clMrUHF0emFxaXE0MitzZFEyb2tjNUhmUlhJOXIvd0Jub3AxRzZlNFdxMmJkTlJLaThQamJCSllLdW5aMThjTFBLenR3cCsvZGV6ajc4RStiQmNPdU9RN1VjNnNOUWlzZ3llNDNPanBldndqa2tvWW9YUFQ3ZFhLZit4VDAvd0FMN0lHVXROcUJwL1g4d1hDbHFxYTROcDMrSHFuRDRwZkgvaTVzYUwvclF1ZXZycU8xME5SYzdoVU1wNldraWZQUEs5ZUd4eHRSWE9jcSt5SWlLcEFmdzU2R3F5M1dmVTNWaFlIdHA1b1h3STV5ZnJyS3Z2cTFQcXFKQjUrbktmVXByZGRyN1p0QmRNYXE0eXNwcXkvWGxrbERacmZNMUh0bWxWdkQ1SkdyNnhNUlVWM3NxcTF2anE1UG5wcDlhZFVkcWQ0MDkzSFh6Rm9wckprS3k5TUxvMDYwcDVFVkhNWGxPSVpKSVZXU0pVWHluMjZtbjFkeEhMTEJuV00yM01NWHVFZGJhcnRUdHFhV2RuNm1POWxUMmNpOG9yVjhvcUtpK1VNZHh2ZHhpbVFiZzYzYjVMakZ5dHR6cEo2dWxaWFZjc2FSenl3dFY2SXhxS3E4UFkxem1xcW92SEhqeWJ5Zk9QY2N5bHF2aUZZYkZoL1QvRTIzSEgvNGdzUHFsUWt6VmNyK1BwVDlybm45S2VUM2Z4STdkVjR4cWxwcHFwRkE1OE1NUzB5dWFucEpTMUNUdGFxK3lxa3p1UDhBU3YwTDR0dHhvcnhicVc3MjJvWlVVZGRBeXBwNVdMeTJTTjdVYzF5ZlpVVkZJZjhBaWhaSERMYU1Ed0drZDNxK3JyYWk0dWdaNWVqV3RiRkg0OWZtZEk5RSt2UXAyVzhYVE9zb3RsVnF4K0tMdVRZTEJabnlOWjU4UVJKU3ZWT1BaRWxWVit5S3BvV3lQS2FUS2RzK0hQcDVtdm10Y0V0cnFXSXZLeHlReXVhMXEvZFkrMjc5bkllYmVubE5KaW0ybk5KNm1ackpMbFNNdFZPeFY4eVNUeU5ZclUrcW94WHUvWnFuSmZEc3hhcHgzYmZTWENxaWRHdVEzZXN1akVjbkNxejVJR3IvQUYvRDhwOWxSZmNwd0FBQUFBQUFBQUFHTTdvZHQ5bDNHNFRGWjVLMWx0djFwZStvdEZ3Y3pxYkc5eUlqNHBFVHlzYitsdlBIbEZhMXljOGRLenBpZDUrSW5vbFpvZFBhWFRpMVpkYjdleEthMzExUjAxZmJoYjRhMXNrYzhidWxFOUVsYjFJbkNlRVJFUDFZTnRIMXIxdTFMcDlXTjJ0eWhaVFVpc1dHd3h5eHZkS3hxOVRJRmJFcXh3d2NyeXFJNVh1K2JuaFZWeGFtUlkzWk1yeDY0WXJmcmZIVjJxNTBzbEhWVTdrNGErSjdWYXJmSHA0WHdxZVU4S2hEbEhvRHV4Mm41WGNyaHQzbHBzeHhPNVNkeDF1cTNzVjNDZmw3MExueHFzaUo0N2tMa1Z5SjVSRStWUEJsR21tOXJkclhVRmgxVnRWdXdMRUthZHMwOFVhSkhHcms4ZGZaN3NrMDBpSXE5S1BjMWlLdnFoYmVubUJZOXBoaFZvd0xGYVpZYlpacWRJSVVjdkwzcnlxdmtlcWVyM3VWem5MOVhLU2RyZnRVMWJ3elZ5WGNEdGNyb283cFdTdnFiaFoxbGpqVjByL015c1NUaU9TS1JlWE9qY3FLamw1Yno0NmVhek5maUViaExRdW05NndHMVlkWnEzaUc1MWNQRkl5YUwzU1Y3NXBaSE1YM2JFM3luaFVWRlZDcTlBZEVySHQ4MDBwOEtzam5YQ3I2blZseHEwWWpIMXRXNXFJNXlJcThOVGhyV3RSVjhJMU9WNTVWWm5adHUxdzNCN2ttNmk3aHNSU3hZWGJGNjZHMXZ1VkxWSStuamR6RFNjUVN2NDZsWHJsY3FJanZuUk9PVzhWdHFucGhqT3JlbjkwMDd5V21iK0F1TUhiamtZMU91bGxiNWpsaitqbU9SRlQyWGhVWHdxb1RqczAwNTNLYUUzKzY2Ylo1aC80ckJLbWVhV2h1c04wcEpHVXM3VlgrOFpGM2U2a1V5SW55OUhVMTNTcW9uTDFQMjdyZG9XUWFpNVhTYTBhTVhpTzA1elFMRSthSjB2WlNzZkR4MnBXU3ArU1pxTmEzNXZsY2lONVZ2VDgzR0xxYjhTcWEzZjJUYnBIYUk3aDA5bGJ6K0dnU1huMDYrdGFqOE56Nzg5SFQ5anR0cSt6MjhhYjVSVTZ5YXlYcU85NTFXckxKRTFzcXpObzN5b3ZkbGZLditaTTVIT2FxcDhyVVYzQ3U1NVRaZHdHaU5nMTkwNXJNRnZjNjBrL1cycnQxYzFuVTZrcW1JcU5meCtwcW81elhOOGN0Y3ZDb3ZDcEorR3gvRUYyNjJuL3AxWXNFdFdaMlNqVllyYlV5cWxXeUdQbGVFaWMyYUtSclBvMlZ2ajBSRVR3ZEhvcHRXMWZ6clYySFgvZE5WeE91RkZLeW90OW1TV09SVWtqWG1IclNOVmppaWpYNW14dFZWVjNsM0hucXNhLzJLMVpQWTdoamw5bzJWZHV1bE5KUjFjRC9BTXNrVWpWYTlxL3VpcVFwYnREZDIyMG5MTHBVNkFRMHVhWWhkSmU3K0NxWE1mNmZrNzBLdmpla3JVOGRjTHVISWljOGVHcC9OMDBUM2RidDhxdFVtdlZMUzRWaDlzbDdxMGRPckdmWjZ4UUkrUjdwVlQ1VWZLN2hxS3ZIUGxxM1pqMWd0R0syRzM0ellhSmxKYmJWVFIwZEpBejBqaWphald0Ky9oRTgrNTdBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBSC85az1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUVBQVFBQkFBRC8yd0JEQUFNQ0FnSUNBZ01DQWdJREF3TURCQVlFQkFRRUJBZ0dCZ1VHQ1FnS0Nna0lDUWtLREE4TUNnc09Dd2tKRFJFTkRnOFFFQkVRQ2d3U0V4SVFFdzhRRUJEL3dBQUxDQUVzQVdnQkFSRUEvOFFBSEFBQkFRRUJBQU1CQVFBQUFBQUFBQUFBQUFnSEJnTUZDUVFDLzhRQVBCQUFBUU1EQXdNQ0JBUURCd01GQUFBQUFBRUNBd1FGQmdjSUVSSVRJVEZCQ1NKUllSUXlRbkVWVW9FV0l5UXpjcUd4RnlWaVU0S1JrckwvMmdBSUFRRUFBRDhBcUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQTlEbk9kWXBwdGk5Ym1XYTNtRzJXbTNzNnBwNU9WOHF2RFd0YW5LdWNxOElqVVJWVmZRa21zK0pSUzNDdXFmN0FhRFpKa05zcFhmM2xXK3I3TDJ0L21jeU9HVkcvWHk4MkRRRGVCcGZyL0FGVHJCYWZ4ZGt5U09OWlZ0Tnc2ZXFWcmZMblF5Tlhwa1JFOHFuaHlJaXIwOEp5Ym9UTHJIdnowejB6eVdYQjhYc2x4emJJS2VWWUo0TGE5R1U4VXlMd3NYZDRjcm5wN294amtSVVZGVkZSVU9XeEw0aitJVDVIRGoycW1tVjh3WlozTmFsVExNdFV5SkZYdzZWcXh4eU5iOTJ0ZCt4WHRIV1Vsd3BJSytncVlxbW1xWTJ6UXpSUFI3SkkzSnkxelhKNFZGUlVWRlQxUlRFdHdtNzNUVGI3UEZZN3BGVlh6STU0MGxaYWFCV282SmkvbGROSTd4R2kreWNPY3ZoZW5qeVpEYWZpVTJtbHUxTFM2ajZLWkRpOXZxMVR0MWphcjhRN3AvbjdiNG9sYzFPZVY2VlZlUFJGOUN2c2F5V3c1allLSEtNWXVrRnh0VnpoYlVVdFZDdkxKR0w3L0FGUmZaVVhoVVZGUlVSVVZEMllCbU91ZTRqVGpiOVk0YnJtOWROSlYxdlVsQmJLTnFTVlZVcmZWV3RWVVJyVTVUbDdsUkU1NDhxcUlzNU0rSlk5akdYaXQyK1pCRGp6M0lpWE50eDZrVnZQSEtJc0NNVmZ0M1A2bFBhT2EzNmU2NjR5dVQ0QmRYVHNoY2tWWlNWRE8zVTBjaXB5akpXY3J4eW5QRGtWV3J3dkNyd3ZIVjVIa2RqeEd4VjJUWkxkSUxkYTdiQzZvcXFxZDNESW1KNnF2MStpSW5sVlZFVGxWSkJ2UHhLTFBVM1dxcHROdEZzaHltZ28xWHVWanFuOE12VC9QMjJSU3ExcThLcWRTdFhqMVJQUTFyYjF2QjAxM0JWTWxodHNOVllza2hqV1oxcXJuTlZabU4vTTZHUnZpUkU5MFZHdVR5dlR3bkp1eEt1cXZ4Qk5QOEt5dWJDY0F4SzVaN2RxV1YwRXkwTXlRMDNjYitaa2NpTmU2UlU0WGxXczZmbzVmYitOSy9pRDRCbWVWdzRWcUZpRnl3SzZWTXJZSVgxczZUVXlTdTRSckpIcXlOMFNxcXB3cm1kUDFjaFZvQUFBQUFBQUFBQUJOVzgzYnhxbnVHb3NiczJGWkhaYUMwV21hV3ByYVd1bWxZNmVaM1MxajI5REhJcXNaM09FVlUvTzd5YnRnbURZMXB2aWR1d3pFYlpGUTJ5MlF0aGlqWTFFVjZvbmw3MVQ4ejNMNWM1ZktxcXFwQWU3Q2d0ZUg3MnNGdU9tTU1WTmtOYkxhNnV2Z28wUk91dGZWdVluVzF2bzZTTG82ay9VaThyK1pWV3RkMzJwMWRwUG9Ga21SMmVwZFQzYXJZeTEyK1ZxOE9qbW5kMEs5cSt6bVI5eDZmZHFHYmZEODBOc1dHYVUwV3FkeHQwVTJUWlkxOVEycWxZanBLV2k2bGJISEdxL2w2MGIzSEtucjFOUmZ5b2FqdWQwQXR1NFBUaWZHV3BRMGwrcHBZNTdUYzZpTlYvQ3ZSNmR4cXExRmQwUFoxSXJVOGM5SzhjdFEvVm9saHQ5MEgwUHBjWHpySTZlOExpMU5WU3JWMDdITmFsSTFYU3RaOC9uNUc4dFQ3SWlleEpPdy9GMjYzNno1enIvcUJTeDNHdW9LaU9XamJPbld5T3NxSFBkMXRSZi9BRW80MFl6K1ZIb3FlV29xVzNxdnBoaStyK0MzUEJjcm9JcDZhdmhja01ybUlyNldmaGUzUEd2cTE3VjgrUFZPVVhsRlZGa2o0YVdkWGFtVE5kRmI1SzVYV09kTGpSeHF2UGFWWHJGVXNUNk42MGlWRTlPWE9YM0tWeHJjNW9mbDJlTzB3c21iZFdVTm1tcDF0dFRiS3lrazdzWFBjajVtaVkzcVRwZDh2UEs4THh5YWRMTEZUeFBubmxaSEhHMVh2ZTl5STFyVVRsVlZWOUVSRE45T2R5R2pHcmVRMVdMYWRaZys5WEdpaWRQTzJHMlZqSW80MnVScXVXWjhUWStGVlVSUG0rYjI1TVp6bmFMbVdwKzZtazFhMUN1bGp1dUMwcm8waHRQZGxXZGtNTVM5cUYwYm8raFdPbitkNmRTb3FPY25Ia3Ftb3QxdnE3ZkphYXFncDVxR1dKWUgwMGtUWFJPaVZPRllyRlRoVzhlT09PT0Q1NWJOMjArUDcxTTh4clR1UlpNU1J0MmlWc1QxZkMybGlxVzloeUw2S2pYSzFyWGU2T1h6NVU3SDRtbWUzWkxmaHVrRmxsZi9BTjhuZmNhMkppOExNakhOanAyTDlVVjdwSGNMN3NZdnNWbHBGcGhqdWorbjlvd1RHNktHR0tncDJKVXpNWWlPcXFucFR1VHZYMWM1enVWOCtpY0luQ0lpSkZtL1BFSWRGTldjSDNCNmVVc2R0dU5aV1BmWEpBM29qbHJJRlk5c2prVHh6S3h6MnY4QVp5TTVYbFhLcTBWdXExZ2ZpdTEyNjUzakZVK0NweVNocGFhMlNvdkQySldJM2w2S25vNUlYU09SVTlGUkRrUGg1YVRXVEVkRktUVU9TM1JMZnN1a21ta3Fuc1JaWTZSa3JvNG9XcjdOWHRySXZIcXIwNTU2VTQ4M3hCTkliQm1taWx3MUFaYllXNURpUGFxWUt0akVTU1NsV1JySllYdTkySWoxa1JGOUZaNDQ2bmM5bnN2MUpyZFR0dmVPWFc3VkRxaTVXcEpMTldTdVhsejNRTHd4eXI3dVdKWWxWVjhxcXFiaUFBQUFBQUFBQUFBWUp1UXhiZFhsVjF0OUhvRG1scngyME5vWC93QVJmVXZqWkxOVUs5ZWxHT1dHUjdlR29ubHF0VDV2c1IzcEhkSWRybTRSYXZkTmcxenE4aHVNbmRwY21xSzlhdGxNa25MRnFtdDRWSitlVlIwbldyMkp5aU42dVVONitKdmNPNW9iak1kTE0xOVBWNU5CTDFzZHkxN1VwS2xXOEtucWk5WFAvd0FHWGFRNmM2N2J1c0VzdEJVWjFOZ21tV0wyMmxzVkhUMGpYdmRjcHFlRmtjc3F4dGN6dWN1UlZWejNkTFZYcGExVlI2bjR0VDl1T3R1elNpajFhMGsxVHJiblpxR2FQK0l4dGlkQXNTT2NqV3JOQjF2am5pVnlvaXF2Q29yazhmcVNuNmJXbW0xdTJiWmhxUFEwN2FTdWZpVjZncnFaaXFxVTlaRlNTbzlyVlg5Sy9LOXZ2MHZiejU1TXkrRjVGR21sdVh6b2lkYjcrMWpsK3lVMGFwLytsTFJQbmxzdi93QUx2ZDFTcGFmeEQyYjh6aFBUcFM2UWNmOEFDSGFiOHR2bHpobmczTDZYTWxwTC9ZSHhWRjVTa1RpUnpJbFJZNjF2SDY0K0dvLy9BTUVSM2pvWG5QZFhkNkdTYTc2V1l0cERwdGFxcHVZWmd4dEZrY2RNeFcvUDFkSDRlRmY1WmxUcmN2UERZMTZWVmVYY1Y3dGoyL1dYYjNwMUJqc0hacWI3Y09tcXZkZXhQOCtvNDhNYXErZTNHaXExcWY2bmNJcmxOZUkwM0NhV2I1OCt1dVVSNGpuVkREaDg5Ukl5M1dXa3JvNlNxbHBlT0VZNlJzVFZYcThxclh5L3E0WHg0T1gyQmFpYWNZTGtGdzBRdnVDMVdMNmcxVXI0cW11clplNDY0U3c5U3JUcWl0YXNDdFRxVnNhY3Rkd3E5U3U0NTlOdmsveE84ZlMyaG44d0xSV2JsRjlQbXVsUWp2OEFaRVBvWVJyOFVHS05kSU1XbVZFNjJaSzFyZjJXbG5WZitFT04zWFZWUTdZTG83MU9YbVpjZlk5ZnExTFZPcWMvL1ZGS3Ayc1JSdzdjOU8yUklpSXRncFhyeDlYTTVYL2RWUE51YmlqbTI4NmpNa1JGUk1hcjNKejlVaGNxZjdvaGhud3c1WkhhRzVERTVWVmpNcnFGYi9Xa3BlZitFTEFBQUFBQUFBQUFBQmhHdjI3WEY5dnVYMkhFOGp4VzZWamI1RXlvU3Zpa1l5bmdqV1ZZMzhxdkxsY3hFUnlvaWVqbStmSnVzY2pKV05saWUxN0hvam11YXZLS2kraW9wRVh4U0gyTCt4R0VSemRyK05MZGFoMU42ZGFVdlpUdmNlL0hYMlA2OEg4Ym44UXZ0NDJDWUJYVjhVcnEzR3FTdzE5V2prK2RzYTBxMDZvNzM1UloyYy9zcXFiUHNZdk5vdSsySEQ0clMrUHF0emFxaXE0MitzZFEyb2tjNUhmUlhJOXIvd0Jub3AxRzZlNFdxMmJkTlJLaThQamJCSllLdW5aMThjTFBLenR3cCsvZGV6ajc4RStiQmNPdU9RN1VjNnNOUWlzZ3llNDNPanBldndqa2tvWW9YUFQ3ZFhLZit4VDAvd0FMN0lHVXROcUJwL1g4d1hDbHFxYTROcDMrSHFuRDRwZkgvaTVzYUwvclF1ZXZycU8xME5SYzdoVU1wNldraWZQUEs5ZUd4eHRSWE9jcSt5SWlLcEFmdzU2R3F5M1dmVTNWaFlIdHA1b1h3STV5ZnJyS3Z2cTFQcXFKQjUrbktmVXByZGRyN1p0QmRNYXE0eXNwcXkvWGxrbERacmZNMUh0bWxWdkQ1SkdyNnhNUlVWM3NxcTF2anE1UG5wcDlhZFVkcWQ0MDkzSFh6Rm9wckprS3k5TUxvMDYwcDVFVkhNWGxPSVpKSVZXU0pVWHluMjZtbjFkeEhMTEJuV00yM01NWHVFZGJhcnRUdHFhV2RuNm1POWxUMmNpOG9yVjhvcUtpK1VNZHh2ZHhpbVFiZzYzYjVMakZ5dHR6cEo2dWxaWFZjc2FSenl3dFY2SXhxS3E4UFkxem1xcW92SEhqeWJ5Zk9QY2N5bHF2aUZZYkZoL1QvRTIzSEgvNGdzUHFsUWt6VmNyK1BwVDlybm45S2VUM2Z4STdkVjR4cWxwcHFwRkE1OE1NUzB5dWFucEpTMUNUdGFxK3lxa3p1UDhBU3YwTDR0dHhvcnhicVc3MjJvWlVVZGRBeXBwNVdMeTJTTjdVYzF5ZlpVVkZJZjhBaWhaSERMYU1Ed0drZDNxK3JyYWk0dWdaNWVqV3RiRkg0OWZtZEk5RSt2UXAyVzhYVE9zb3RsVnF4K0tMdVRZTEJabnlOWjU4UVJKU3ZWT1BaRWxWVit5S3BvV3lQS2FUS2RzK0hQcDVtdm10Y0V0cnFXSXZLeHlReXVhMXEvZFkrMjc5bkllYmVubE5KaW0ybk5KNm1ackpMbFNNdFZPeFY4eVNUeU5ZclUrcW94WHUvWnFuSmZEc3hhcHgzYmZTWENxaWRHdVEzZXN1akVjbkNxejVJR3IvQUYvRDhwOWxSZmNwd0FBQUFBQUFBQUFHTTdvZHQ5bDNHNFRGWjVLMWx0djFwZStvdEZ3Y3pxYkc5eUlqNHBFVHlzYitsdlBIbEZhMXljOGRLenBpZDUrSW5vbFpvZFBhWFRpMVpkYjdleEthMzExUjAxZmJoYjRhMXNrYzhidWxFOUVsYjFJbkNlRVJFUDFZTnRIMXIxdTFMcDlXTjJ0eWhaVFVpc1dHd3h5eHZkS3hxOVRJRmJFcXh3d2NyeXFJNVh1K2JuaFZWeGFtUlkzWk1yeDY0WXJmcmZIVjJxNTBzbEhWVTdrNGErSjdWYXJmSHA0WHdxZVU4S2hEbEhvRHV4Mm41WGNyaHQzbHBzeHhPNVNkeDF1cTNzVjNDZmw3MExueHFzaUo0N2tMa1Z5SjVSRStWUEJsR21tOXJkclhVRmgxVnRWdXdMRUthZHMwOFVhSkhHcms4ZGZaN3NrMDBpSXE5S1BjMWlLdnFoYmVubUJZOXBoaFZvd0xGYVpZYlpacWRJSVVjdkwzcnlxdmtlcWVyM3VWem5MOVhLU2RyZnRVMWJ3elZ5WGNEdGNyb283cFdTdnFiaFoxbGpqVjByL015c1NUaU9TS1JlWE9qY3FLamw1Yno0NmVhek5maUViaExRdW05NndHMVlkWnEzaUc1MWNQRkl5YUwzU1Y3NXBaSE1YM2JFM3luaFVWRlZDcTlBZEVySHQ4MDBwOEtzam5YQ3I2blZseHEwWWpIMXRXNXFJNXlJcThOVGhyV3RSVjhJMU9WNTVWWm5adHUxdzNCN2ttNmk3aHNSU3hZWGJGNjZHMXZ1VkxWSStuamR6RFNjUVN2NDZsWHJsY3FJanZuUk9PVzhWdHFucGhqT3JlbjkwMDd5V21iK0F1TUhiamtZMU91bGxiNWpsaitqbU9SRlQyWGhVWHdxb1RqczAwNTNLYUUzKzY2Ylo1aC80ckJLbWVhV2h1c04wcEpHVXM3VlgrOFpGM2U2a1V5SW55OUhVMTNTcW9uTDFQMjdyZG9XUWFpNVhTYTBhTVhpTzA1elFMRSthSjB2WlNzZkR4MnBXU3ArU1pxTmEzNXZsY2lONVZ2VDgzR0xxYjhTcWEzZjJUYnBIYUk3aDA5bGJ6K0dnU1huMDYrdGFqOE56Nzg5SFQ5anR0cSt6MjhhYjVSVTZ5YXlYcU85NTFXckxKRTFzcXpObzN5b3ZkbGZLditaTTVIT2FxcDhyVVYzQ3U1NVRaZHdHaU5nMTkwNXJNRnZjNjBrL1cycnQxYzFuVTZrcW1JcU5meCtwcW81elhOOGN0Y3ZDb3ZDcEorR3gvRUYyNjJuL3AxWXNFdFdaMlNqVllyYlV5cWxXeUdQbGVFaWMyYUtSclBvMlZ2ajBSRVR3ZEhvcHRXMWZ6clYySFgvZE5WeE91RkZLeW90OW1TV09SVWtqWG1IclNOVmppaWpYNW14dFZWVjNsM0hucXNhLzJLMVpQWTdoamw5bzJWZHV1bE5KUjFjRC9BTXNrVWpWYTlxL3VpcVFwYnREZDIyMG5MTHBVNkFRMHVhWWhkSmU3K0NxWE1mNmZrNzBLdmpla3JVOGRjTHVISWljOGVHcC9OMDBUM2RidDhxdFVtdlZMUzRWaDlzbDdxMGRPckdmWjZ4UUkrUjdwVlQ1VWZLN2hxS3ZIUGxxM1pqMWd0R0syRzM0ellhSmxKYmJWVFIwZEpBejBqaWphald0Ky9oRTgrNTdBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBSC85az1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9idW5kbGUtNGEwMTg1MzBkOTRmNTNmYjIzNGM1NTc1MGY2MjIzMzcuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Nha2UtMmQ0NjlhZjQ2NmU5MTdiMGFmYWNhOTQzYmE5NDcxYmUuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBREFBQUFBa0NBWUFBQURQUmJrS0FBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBM1pwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVOaTFqTVRReUlEYzVMakUyTURreU5Dd2dNakF4Tnk4d055OHhNeTB3TVRvd05qb3pPU0FnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdUVTA5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5dGJTOGlJSGh0Ykc1ek9uTjBVbVZtUFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdmMxUjVjR1V2VW1WemIzVnlZMlZTWldZaklpQjRiV3h1Y3pwNGJYQTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzhpSUhodGNFMU5Pazl5YVdkcGJtRnNSRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRG96T1RSbU1HUmpNeTFtTmpjMkxUa3dORGN0T1RJek5pMWhNV0kyWldRM05HWTBabUVpSUhodGNFMU5Pa1J2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2T0VWRVEwSkVPVFJCTmpBM01URkZPVUpFTWpKR01qUkNSa1JCUVRVNE5UZ2lJSGh0Y0UxTk9rbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZPRVZFUTBKRU9UTkJOakEzTVRGRk9VSkVNakpHTWpSQ1JrUkJRVFU0TlRnaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVORElESXdNVGtnS0ZkcGJtUnZkM01wSWo0Z1BIaHRjRTFOT2tSbGNtbDJaV1JHY205dElITjBVbVZtT21sdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNlpXVmlOV1JoWXpndE5HTTFPUzFoTWpRMExUbGtZVGN0WTJRME1ESXpZVE5sTWpJeklpQnpkRkpsWmpwa2IyTjFiV1Z1ZEVsRVBTSjRiWEF1Wkdsa09qTTVOR1l3WkdNekxXWTJOell0T1RBME55MDVNak0yTFdFeFlqWmxaRGMwWmpSbVlTSXZQaUE4TDNKa1pqcEVaWE5qY21sd2RHbHZiajRnUEM5eVpHWTZVa1JHUGlBOEwzZzZlRzF3YldWMFlUNGdQRDk0Y0dGamEyVjBJR1Z1WkQwaWNpSS9QcmVBTjNvQUFBdWpTVVJCVkhqYXhGbHBiQlRuR1g1bVptY1A3M3A5bjRCdGlLRXhLQkJ6Ukp4cENJbFEwaVlvVmR1a3JkVCtpQ0pWYWtITmp4NXBVNmxTcUZUU0hHMlZrQis1RDlJR1FwTkFEb2dKdHpFWXpHR3dNV0RqYzIydjE5ZXU5NWpkMmQzcE01dDFOSm1zdVpxMGxqNTk0OTF2dm5tZjkzM2U1MzIvV1FFMy9pZE1jYTMvYVJuV2EvZ0cvb1Fidk1jOHpIdHBHV1p0Q2lEYS94SkF5dUQrY2VXUlU4TjRJcTRKUlc2cm9Eb2w5RHVFcE1jbUpucGxJZEVqSnRXdW1CTHhLS0h3NExEUDQ5Mzh3dWJoYmR1MnFRWWdYeHN3NFRxTkYzdTg0M2Z0ODFtM2p5aWEwMjJWSVBCVGdZL1NaMDNUSUhHV1JFQ1d0QW1ubVBRNUxKbzNTNGJYS2NRNzdGQzdvYW9lTFJic2JXdHI4NnhidDI3VUJPcHF3TFFiQlpEeS9JWDJ5eFVCeC9RUFR3L0g1eVc1bFVpcjlTOFNtcFphRWVlSDBTUVFqaWNSVWpXRUUwa0VPU0w4TXNaMWlvUzQwNklGWnRuaHI3SmhiS1pEN0N1M2E1Y2RTYldINERvR2h3YTc2dXZyQnpaczJEREI1Y2tNNEw0Q1NyZ096b3ZlTWVXMUpwLzJrMHEzQlZhNmVpQ1VnQy82K1Y2QldCSmp0RDVBNDVVNGdTUTBCQWtzd090aGd1bm01NzBjeVhnQzFrUUNXZnpPVGNENWtvWnBOakU2M1NHRktseFN1Q3JiTWxLV0pmU1ZPY1VPT1JiWVVWbFZlU1FOSnBrQjFEVURFRDNEd1Y5Y0NGZzJYUTZvOW5rRlZyU054ckNneUpiYUprSXZ1NndpL0FTajBpaGZKSW5Mb1RndUVXQ1hra1Ezd1htVFNRZ0VKU2Zpc0hDOVRDQWlaMzBJQkNub000ZVYrOW5KU1RjNStQaktZbCtlditXWHQ2MVl0WXMyeFBWZ200RkkxMkw4NElCMzZkbUEvZW0yOFhnQjdVUXNSUk1OTG91SVZnSVpWalEwK2VQb2p5U1E3NURnNWQ1T3U0alZKVGJNejdWZ21rdUNSSSs3T0hUak5UVUpOVVo3dUlmSVlkVm9PTzl4a0pJV1BsRlZFd2dUeGt6TGlIUG55OC9rbmo1NzdnTlRIbndSQWN2VnFMTnY3NzY4RVRIbkNZdXNWZHd4ellabVh3emxXV0tLNHg1Nk9NY20wY3NKSnJLR2I5UGdkM3hSOUJBSVAwSTV2N3U5VU1aM2k2eW9rb0Y4MlU3UUFsckdvdWdhSS9Cd0FnUCtHSHJHbFpSUHcxRlNpeTZOVUs4ZXJDM0c1WjFQNEVKN1J5ZnRzQnZzbW95QWJwOW11Wkx4NjlldmwrMXpsdnoycWJiSWFoM3YybkliQ2x3V09LaytpNHBFNURNY2h3bG9nZzljbUMvamFDQ08xbUFjNVhZSmxRNEJTVkxtczBFRkRieTVocEh3VERCbmdqRlU1MWp4NUlwaWZIeDVBc1FJQmdXZUFJRVEySzRMWXlncUxFV3g1eUErUGRYUWtoU2xiYlRGbGpaYXA1Q1VubE4yU2xlaXpoczc2Kzc3ODRYNHhqUGpDWnZNVDA2T3hSRmg1TnNDS2k0RWsvRFR3QUtIaUR3Q21VTmc0elQwb1hJN0k2Q2wxcFF6MFhzSjZGYzEyU2poQmdmN0kwandIbDNCOUlodHFPdkRuSHc3MXM1eTRSSWo5MEJOTG5hMksxaFJxcUZseThhWUl6dnZtVjI3ZHJla2pZOW55SU9NRkVwNXY2TzdaK2F6dmRqMDcrRlk5bnlYREErSnZ5UlB4bExTUVdGQ1VraXcyeHRETCttU1E3NjdyQUp1WXZ6TE9QK1FrUm91c01ER25ieEJGUysxaktjZU5CcFNVNjZjeHZWSCtvS295U1B6aVdiamdVSE15clBoeGVQRHlITTVJWjE2R3hQQndONzk5WTFOYVJ2RjlQaUs2RWlaak4rNmRXdFdkL0c4Wi8vWUdycmRSdStPMG1zdVdjUjk5RzRmcGRKRFpVblF1eitvc0tmb1VrM3ZCOGlEM1FNS3RuU0YwRFNrWUVLSnc4bWtYRmxpUmJuRGdsbGNjLzlNRnc3MWh0QThHTWIzYW5KUXlIdmZheDFISWI5ZlV1YkFxODFoZkNlM0gyZDJ2RGpnR1E2ODFOblpPVVI3OUFvZU00eTRVWWt5UnFCNjVkcEhmblEwOUtDTlliYlMyd0VDV0ZmcHdsbDZjNXdLOHJNWldYaTlONHpSV0FKQkp2TndOSTVGNVBoUGEzTXh4T3h0Wm9JZUhneGhlN3NmNVhUQUxLZU0xaEVGankwdXhLT0xDakRDNUwrTHRIbU5DamJDbkhoZ1ZTbWVPK3JEa2xJYnZJZTJJS0JxbnpZMk5uWVllSjh3VU1kWTBMNUVvUlR2ZS91OUt4NDlHMzdjRTRvSmJwdU1FUnIwOEV3bmNoaXJDUnA4ZjRrZHAwZWpURWdWUzFuUWd2VDBta0lyUHZHRW9UQTZFMXp2cE5MOGVtNHVjcTM1YVBKRjBNeUlsTmhFL09XSUYyV1UyVXEzakRNRElTeVo3c1MyaDZyeDNybFJEQVFaTFp6RUI0M0hXcjFqd2JxMHAxWER5RlFIdnFCUWlqbzkvVU1MLytrUi9yYWxQVlNkUjZXSmt4YjZnalhGTnF3b3NMRk4wTkFYVEZCR3BaUitSNm5YUVZaWFAvUGdKcWNGeHdjanFNcVdFU0hRdXA0Z3NubHpMMlZ5WWFFZDZ4Y1ZvaXBIcG9LSjZQZXJPTlFWd041TGZqUjJCMURYUG9FZno3UGp4RnNibzdJejc1VURCdzZjNTJPamV2ZkJFVW5QVVJPRnZ0Uks2TFAwMXdidko1dGJBM2NsUkFFeWl4UnJJNUs4RHBGQ001bklhOHNkMUdrUmMzTmxXT2psTmxLbE1zdENKWkpZbVJXY3BLY2RYSzhYdUFJbTZ1Nk9DU3d2ejRLYlJ1Y3d1VWZDS3V5aWlIdm01S1NjYzdnN2lFNGZJMmZOUms3elc5ajE3cHQ3ang1dmVpcHRjTWcwRkJPQVZBUkVZMS9mRjVMV1pGbnRDTEVsQ0ZFdjlUS3Y1NENMYXp0WmJQNStkZ3liem96ZzkxUUxuUlo2NlgrdWVSUzBEY1UyQ3g2ckxVUUZlK3NoOGxwbEZKYVVPbEJLZ0tzclhIaTV5Y2N1VllDVFZEclVHY0NlaTM0TWpDbFlNTE1BMzY5Z0ZMWnZHWmFzOW44WmtqWnFHRVlLYVdZVkVpWmw2dm5mL0x4OGNhNVdQUzNQYll0b012ckpjNFVKbXZJcVYrZ2ppOWRoY3IzQkUwRWpLYU15cVpNRVdVcGFGYk52cnFZY1dxays3N1dOWVhhdUZjdVk4Q1drbFoxUk9kY2Z3dklaVktLT0FDNk5SSEQ3TERmQ0ZnZTJQZjA3Z2hQZnFkdXpweUZ0Y01SRUg5WGtlYzBNSUVVaFcxSTVZZ24wMTlmSUFXWE5kTWUweFRNS1hJSWxpMERpQ0RJaUZ0NW01VUxkNDNyREpYTWZrWDFNaTAvQjBiNFFqakdSZGY3UFk1TzNvc0tKSW9lTUFKUDY5YVpoeEFpMGZTaUNPMmZub29hUk9kSXhCbGQrRWR3OSsvRHh0cmZiVGpVM3Y2QW9TaVJ0ZE1URWZkV2tRbDl0bGRPS3BOdG5MeXN0eVZsNGEyM0YzWGZlY2MrODJ0dnVVNHEvVlgxdzFDb2RwSVlQQlJXaXB2R2lqdjd6ODRDK2RZSkFFb3lFeG10ZGhXNW0wcStxeU1iOHNxeFVzZW9lajZLWWlWNTNjUnlsbkVkVUdiSVF3YUVuSDA2NDNhNC92Zi9CanNhMDBUcmZnK25aR0lHRTJmdm1DQWpwLzZWZ01DUmNhbStQN0tyYmMvNnpQYnYzU1A3K2k2dUtOZHU5c3d0eUs0dnliT0drTFBqWk1zZjAwd3RMc3A3dTFwUUhtUHlrajBZZ2VwTjJwTk9QL2F3RjNlUzYzdlRkUnZyTXlMWGhJcVUxcHpBZnZSLzlBOHJJd0s3OWh3NS9GSTFHamJTSm1KSTJvL0ZHQURCRXdqaXpwQWZWRTAwbmU3ZSt1MzEveU5kemVtRk9JckptdXMwMWQxcStVM0E0SkwvS3pwUXlxaWV0M2pMcjdiQSt5N3lkUXNTb2FPZ2RqK0VZNWZMVDFqR01zWjFZdmFBQzA0Tm44ZTRyei9zQzRlam1qbzRPWHdiampjazc1ZmxZTWxISmZLZzJub1NTNTlzdSt0Ny84S01UNTA2ZnFLK1VBa01yUzVMaXdoazU3cEtDSEZ0Q3NwTHZQSUdGb2p5Z0pIZ20vbnhMdlduVFQyOTJqZ2dqZG1xUXdzQkRUZU5ibXpULzZNaWJSeHFPSGpOcC9sVVQ5MHE5MEZUR0p3eWhUQXg2dmNIUERoNCt6MDd4WUo0NjFuNkxVMUVXbGN1dXVUUHkzYTdzYk9oUkdmSkhFVmZadktYUHpmcU8rcG41bGxtbG1EdTZGK2ZyZHplM2RuUytFUW9HZzFmd2ZzYkVuU29DeUhEcVNXYm9SNzRBb2tTanNlTW5UL2UrdjNOblEySjg2RXllTWpDd3BGUzByWmhkVkZKUmxvOUlrbExNNU5XbFdJM0hZWE82Y1crVmlsTmJud3o0bGVTcnJTMHQ3Um1NTjN2L3VsNnJtRjlZaVpPSmJSaHlXckVtVlVzMmprVzNMaWlxcmIxMTdySmx5KytlWHJONCtZQllabS93eEhsZUZyRzBqRWZQTi84QWI3OW41OEZEOWJwc2hubFAyRkJ0dzFOVjNPdDlMNVFKeUNRWTBRREFZZ0QwSlREbFphWFppeGZXemxpMmJObWFtK2N2dXNNek9GcGN0K01kZEhWM0hRaUdJeTh3Y1VmVFhnK2JqSitrenhXNWY2MnZWWVFNOWNJSVJMb2FrUFNRRFBkTVVqS1dObmd5Q3BIcjRmN1ZrbmlxeERibmhqWlZmaGl1amZOa2l4dzFLSStTUWZPdnlmai81dVd1dVc1SXBud3hSOFZpV0RQcEFIUFRwbDZ0YUgxZEFLNUVMeUZEMGxzTTE0TGgxVWpjZEdpSm13OHIzelNBYTBsNlk3NFlEK1dhU1o1dnlQaXZFOERWb2pJSkFCbGVVQ1duZUlIN2Z3R1FDUWd5L0JpaVpYcE5lQ00vZG54VEFLNzNHVGY4SzgxL0JCZ0F6NXNxRkFhY0JVSUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZmxvd2Vycy1kMTY1ODAzNzM1ZmIxNjgxZDQxN2ZmNzNmZWMzZjEyZS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFFQUFRQUJBQUQvMndCREFBTUNBZ0lDQWdNQ0FnSURBd01EQkFZRUJBUUVCQWdHQmdVR0NRZ0tDZ2tJQ1FrS0RBOE1DZ3NPQ3drSkRSRU5EZzhRRUJFUUNnd1NFeElRRXc4UUVCRC93QUFMQ0FGQUFRWUJBUkVBLzhRQUdnQUJBUUVCQVFFQkFBQUFBQUFBQUFBQUFBY0lCZ1VEQlAvRUFEVVFBQUVEQkFFREFnUUVCQWNCQUFBQUFBQUJBZ01FQlFZUkJ3Z1NJUk14RkNKQlVRa1ZNa0lqVW1HQkdDUXpXR0tVMUJiLzJnQUlBUUVBQUQ4QTFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQ1Y4NzlSV0Y4RFVGdWJlcVN2dkY4dmNpdzJteTIyTkpLcXJmdEUzcjlyZTV6VTM1VlZYVFVjdTBKWFdkYTJYWVl0TGRlWU9tWE1NUHh5cWxiRXQyOWY0cElWZCtuMUdMRkgyTC94VjNkNFhTS3ZnMHBiOG94MjZZMUJtVkJlYVdXeDFGR2x3anIvQUZFU0ZhWldkL3FxNWZadmI1VlYxcjZtY1Y2MWI3bHRaWHpjSDlQT1Y1OVlyYks2Q2E4UnpMU1F5dWI3K2szMG5xL3hwVWF1bmFWTnRUWlQrQmVvZkR1ZmJSY0o3SFIxMXB2TmttU251MW11REViVTBjaTdSTjYvVTFWYTVFWHd1MnFpb2krRGx1Vk9yVzFZWm5qdUtlUE9QNzV5Sm1NRWFTMWR2dFh5UlVqZEl1cFplMTJsUkhOVmROVkUybTFSZkI1dUdkWThFK2VXL2pibVhpcS9jWjNxOHVheTJPdU1xVDBsVTlWN1d0U2JzWnBWY3FOUlVhcmRycFZSZGIwY0RtdVJlUk1VNHF3NjRaMW1seCtEdFZ0WWpwSEkzdWZJNVYweU5qZjNQYzVVUkUvcjUwaUtxWjNiMXNaMUpaMXpxTHBWelYyRG96NGo4NitKVDFmaHZmMS9ROUxYWnJ6M2VwMjY4OTJ2Sm9YalRrbkV1V3NOb002d3E0TFYyeTROWHQ3Mjlra1QycnA4Y2pmMnZhdmhVL3VpcWlvcXhmTE9zaGpzM3VmSC9DdkVtUWNtWEt4dldLNXoyK1ZLZWpwNUVWV3EzMXV4KzlPUnliVkVhcW92YXJqMXVKT3JTelo3blR1S2M3d1c5Y2ZacXJGbHA3WGR2bVpWTlJxdTFGSjJ0VlY3VWM1TnRSRlJQbFZmS0hZODU4OVlad0pqZFBlOG9aVlZ0YmNwdmhiWGFxSnFQcWE2Ynh0ckVYMmFtMjl6bDl0b25sVlJGa2pldG05NHJjYmEvbXpwN3l2QWJCZFptd1FYbWVWYW1LTnp2S2VxejBtS3p4dFZhaXE3U0xwcTZOUVUxVFQxbFBGVjBrOGMwRTdHeVJTUnVSelhzVk5vNUZUd3FLaTdSVDZBQUFBQUFBQW1kNzREeEhJT2JySnp2YzdqZEpyMVlLRmFDam9udmlkUk1hcVNvajBZck85SG9zejEzMysrbDE0T1g2MGMvd0FSd25wK3ltaHlWOEV0VGtkRExhYlhSTzBzazlUSTNUWHRiOW90cElydnAycDlWUkZodklqTXQ0ZS9EZXMrTFhwWjZTNzNXT0dpbVkvYVNRdzFWWEpVckM1Rjhvdm9yNmJtcjdiVkQzOEc2bVZ3WEJMVGcvQVhUNWxQSUZpeFdpaW9hNjhXOXI0S1NXcWF4Rm5kRTVzVWl6T1Y2dWNxNlRhcXFwdEZSVnBIVExtZkEvTFY0eVhsTGp6RnBMRm1sWTV0UGs5TFV5UFNwWTVWVFN1WjNMR3JYTEd1bnRhaXFyWGJSRlZVT3o0cjREeEhpWEs4eXpLeVhHNlhDNTV2WGZIMTgxeGZGSTZOM2ZJOVdScXhqVlJpdWxWZEx2MmI1WFJudnI4dU5EeUpmK1BPQmNOYTJ0emlydmNkY2l3Zk5KYjRGamN6YjFUeXhIZHlTcjltd2R5NlRTclNPcmpMdWMrS2JiWitXK01iNnRUanRrbmpUSmJBK2lwNUd6MC9laStza3F4ckt4RjMyUDdYZktpdGNpSnB5blBjMjlXbFRjY1J3dkhlbk9xYmNjNDVKYkRMYTlSUnl1dDFPcmxSNzVXUFJ6RWVqMlBqVkhJclcrbks1ZjBKdXNaRndYYXVVdU1MTGdYT1YycThzcTZCOFZiVjEwVDBvZlhyV3RjaXZSbE9qR2RpSkk5cldxMzIwcTdkNU9PNTk2dmVKK0JWcmNIcmFLcXVXUTA5QXhhZTBVOUxxRHRleGZUYkpJN1RHczFyYUp0VVQ5cW40T2hIak81WUYwK01ndVY3cGFpYkpxK2U3c2RicXVPb1pTc2tpamlhMXNqRmN4WG9rWGN1bFZFVmRlNktVbmdyZ2pFT24vRnEzRmNRckxqV3cxOWUrNFQxVnhmRytvZTl6R3RScm5NWXhGUkVaNDhmVmZ1WjI1M3VORnl4MXA4VDRaeCtqYXE2WUhWL21PUTExUDViVHdNbWltZEJJOVA1V3h1VFMrTzZvUnZ1cW9lam1yVzV6K0lyaDlpdWlKTlFZZGp6cStDbmY1WWxRckpaRWsxL01qbndydjd4Tit4Y3VwdkdxREsrbjdrQzFYQ25aSzJPd1ZsYkNqazMyejA4VHBvbko5bFI4YmZKelhSSGtsYmsvVEZoVlhjSm5TejBjRlJidTV5Ny9oMDlSSkZFbjlvMnNUK3hjd0FBQUFBQUFTanFFNmhjWTRDeG1HdXI2YVM3WkJkbnJUMlN5VTYveHEyYnduMFJWYXhGYzNidEt2bEVSRlZVUWwzRHZUcG0yZjVsVDlRUFZKT3l2eU5PMld5WTFyL0tXYVBmY3p1WnRVNzA5MFo1MHZ6UFZ6LzArdCtJUGpsYmYrbW03Vk5GRTZSYkxjS080eU5hbTE5TkgrbTVkZlpFbDJ2MlJGWDZGSjZiWDQxSndIZ0xzU1NCTGIrUVVpSWtXdEpNa2FKUDNhL2Y2dnFkMy9MdUlGeFJEU3IrSWx5ZE5pQ01TMXNzU0pkVmcvMGZpMVNrNzBYWGp2OEFWUjZyOWU1SlA2bmI5UUhVcGtWb3lxTGduZ096cGtQSk55YnFWNklqcWV6UnVUZnF5cXZ5OTZOVkhhZDhyVVZGZHZhTmQ3L1RyMHpXemh4S3pNY3F1ejhuNUR2dTVMdmZhaFZlcUs1ZHVpaFYzbEdiOTNMOHo5SnZTYWEzdGVjT1JjUDR0NHZ2Mlc1ekRGVld5T2xmVHJRU2FYOHdra2FyVzB5SXZoZS9hb3ZoVVJ2Y3ErRVV3UDBwc2w2ZE9XOFd5M2xqQzZhMDJmbEMyU01zRnlrYzVVdGF5Uy9JMVZlcTlpUGFzYUtxN2NqSlkzSzVFVjZHN09idWVNUDRDc2xzeUhOcUM3elVOMHIyMjVrdEJUc2tTR1ZXcTVGazdudDAzdGE1ZkcxK1ZkSWRyY0xQam1VV21hanVsdHQ5MXR0eWlUMVk1b21UUTFFYXQ4S3FLaW81RlQyL29aRTZCSkcyM1B1YWNReFNya3FjR3RWK1Q4blgxRmZFemMxUXhxeHVYOVhkRkhIdGZxakdMOVRvdVlPb0RQOEFrek9LdnA2NlhvbXpYbUhjT1E1U3E2cHJPemZhOXJIb2lvajA4b3IwMnFLaXRZaXU4dHEvQUhUemgvQU9OeVc2ek9mY3IzY1ZTVzhYcXBiL0FKaXVsOHI5MTdXSXFycG0xOTFWVmM1VlZZcG1hc3dmOFJYRWI1ZEhKRFE1aGpqcUdDb2V1bUxVSXlWaVI3L21WMGNTYSs4cmZ1WEhxYnlXZ3hUcCs1QXV0d3FHUk5rc0ZaUlFxNWRkMDlSRTZHSnFmZFZmSTN3YzEwU1k1V1l4MHhZVlNWOFRvNTZ5bnFMaXJYSnIrSFVWRWtzUy93QjQzc1grNWN3QUFBQUFBQVpmNXg2TmNwNWc1ZGJ5emJ1ZGF6R2FtamhwNExWQlQyZDBzbHZTTnZsWTVrcVdMdFpIU1AyalVWRmZyenJaNWY4QWc2NmdmOThlYi84QVVxZi9BSEY3NDY0NHVPTThZUWNkY2c1ZFVaN0tzVlZUMTl5dWtUdSt1aW1rZTdza2ErU1JWUkdQU1BTdVh3MzZleVJLUG9ueVBFWjY2aDRYNmpzdXdmSGJoSzZXU3pzaVdxWkVydjFlbEo2c2FzWFhoSGFWK2tUYmwxc3JYQlhBR0U4QjJDcnRlTVBxNjY0WFdWS2k2M2F1ZWo2cXRsVGVsY3FKcEdwM08wMVBidVZWVlZWVlhQMUQwQ2NrMmZKN3htTmc2cnIxYUx2ZnBwSjdoVjBGa2tnbG5WNzFlNUhPWldJcXAzTHZYc2V6L2c2NmdmOEFmSG0vL1VxZi9jVVhtVHBxbTV3ejNGTDFtV2R1ZmlHTVNOcUZ4aGx1K1d1bi9jK1dmMWZQZHByZGVuNFozSWlvcjFjZFB6MXdmamZQWEhOVmdONmxTaGYzTW50MWV5QkpIVU5RencyUnJOdDdrN1ZjMVc3VGJYS20wWFNwK2FuNE5wY2g0VWc0YTVodnlackZEVHRwblhQNFJhT2R5UnIvQUFaUDlTUlVsWWlJbmYzZk5yNWtYYnR5T1BvbzVCcExSLzhBRTIzcXV6U253dnRXQnRvK0czSTJtWHg2S1RwTWlJM1hqdFJuYnI5dXZCYU1INFJ4amlyaTJ0NDA0dW1rc2JxbWxxR011a2pmWHFQakpJMVlsWEo1YjZqMnIycnBGYW1tbzFPMU5hemppZjRmbkpPQnhWTUdFOVdsL3NNZGJJa3RTMjNXZVduU1o2SnBIUDdLMU81VTJ2djkxT3p4VHBSNXlzR1UyZS9YWHJKekc4VVZ0dUZQVjFOdW5wYWhJNnlLT1JybndPVmF4eUkxNklyVjIxVTB2c3ZzVlhuWGdQQytmY2JwckxsRDZxaXJiYk10VGE3clJPUnRUUlRMcmF0VmZDdFhUZTVxKy9haXBwVVJVa3pPaWErWlRjTFpIemIxQ1pWbjlndE16WjRMTlBDdE5GSTV2aFBWZjZyMWY0Mml1MGp0S3VuSnMxQlRVMVBSMDhWSlNRUndRUU1iSEZGRzFHc1l4cWFSclVUd2lJaWFSRDZBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBLzlrPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRRUFBUUFCQUFELzJ3QkRBQU1DQWdJQ0FnTUNBZ0lEQXdNREJBWUVCQVFFQkFnR0JnVUdDUWdLQ2drSUNRa0tEQThNQ2dzT0N3a0pEUkVORGc4UUVCRVFDZ3dTRXhJUUV3OFFFQkQvd0FBTENBRkFBUVlCQVJFQS84UUFHZ0FCQVFFQkFRRUJBQUFBQUFBQUFBQUFBQWNJQmdVREJQL0VBRFVRQUFFREJBRURBZ1FFQkFjQkFBQUFBQUFCQWdNRUJRWVJCd2dTSVJNeEZDSkJVUWtWTWtJalVtR0JHQ1F6V0dLVTFCYi8yZ0FJQVFFQUFEOEExQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUNWODc5UldGOERVRnViZXFTdnZGOHZjaXcybXkyMk5KS3FyZnRFM3I5cmU1elUzNVZWWFRVY3UwSlhXZGEyWFlZdExkZVlPbVhNTVB4eXFsYkV0MjlmNHBJVmQrbjFHTEZIMkwveFYzZDRYU0t2ZzBwYjhveDI2WTFCbVZCZWFXV3gxRkdsd2pyL0FGRVNGYVpXZC9xcTVmWnZiNVZWMXI2bWNWNjFiN2x0Wlh6Y0g5UE9WNTlZcmJLNkNhOFJ6TFNReXViNytrMzBucS94cFVhdW5hVk50VFpUK0Jlb2ZEdWZiUmNKN0hSMTFwdk5rbVNudTFtdURFYlUwY2k3Uk42L1UxVmE1RVh3dTJxaW9pK0RsdVZPclcxWVpuanVLZVBPUDc1eUptTUVhUzFkdnRYeVJVamRJdXBaZTEybFJITlZkTlZFMm0xUmZCNXVHZFk4RStlVy9qYm1YaXEvY1ozcTh1YXkyT3VNcVQwbFU5VjdXdFNic1pwVmNxTlJVYXJkcnBWUmRiMGNEbXVSZVJNVTRxdzY0WjFtbHgrRHRWdFlqcEhJM3VmSTVWMHlOamYzUGM1VVJFL3I1MGlLcVozYjFzWjFKWjF6cUxwVnpWMkRvejRqODYrSlQxZmh2ZjEvUTlMWFpyejNlcDI2ODkydkpvWGpUa25FdVdzTm9NNndxNExWMnk0Tlh0NzI5a2tUMnJwOGNqZjJ2YXZoVS91aXFpb3F4ZkxPc2hqczN1ZkgvQ3ZFbVFjbVhLeHZXSzV6MitWS2VqcDVFVldxMzF1eCs5T1J5YlZFYXFvdmFyajF1Sk9yU3paN25UdUtjN3dXOWNmWnFyRmxwN1hkdm1aVk5ScXUxRkoydFZWN1VjNU50UkZSUGxWZktIWTg1ODlZWndKamRQZThvWlZWdGJjcHZoYlhhcUpxUHFhNmJ4dHJFWDJhbTI5emw5dG9ubFZSRmtqZXRtOTRyY2JhL216cDd5dkFiQmRabXdRWG1lVmFtS056dktlcXowbUt6eHRWYWlxN1NMcHE2TlFVMVRUMWxQRlYwazhjMEU3R3lSU1J1UnpYc1ZObzVGVHdxS2k3UlQ2QUFBQUFBQUFtZDc0RHhISU9ickp6dmM3amRKcjFZS0ZhQ2pvbnZpZFJNYXFTb2owWXJPOUhvc3oxMzMrK2wxNE9YNjBjL3dBUnducCt5bWh5VjhFdFRrZERMYWJYUk8wc2s5VEkzVFh0YjlvdHBJcnZwMnA5VlJGaHZJak10NGUvRGVzK0xYcFo2UzczV09HaW1ZL2FTUXcxVlhKVXJDNUY4b3ZvcjZibXI3YlZEMzhHNm1Wd1hCTFRnL0FYVDVsUElGaXhXaWlvYTY4VzlyNEtTV3FheEZuZEU1c1Vpek9WNnVjcTZUYXFxcHRGUlZwSFRMbWZBL0xWNHlYbExqekZwTEZtbFk1dFBrOUxVeVBTcFk1VlRTdVozTEdyWExHdW50YWlxclhiUkZWVU96NHI0RHhIaVhLOHl6S3lYRzZYQzU1dlhmSDE4MXhmRkk2TjNmSTlXUnF4alZSaXVsVmRMdjJiNVhSbnZyOHVORHlKZitQT0JjTmEydHppcnZjZGNpd2ZOSmI0RmpjemIxVHl4SGR5U3I5bXdkeTZUU3JTT3JqTHVjK0tiYlorVytNYjZ0VGp0a25qVEpiQStpcDVHejAvZWkrc2txeHJLeEYzMlA3WGZLaXRjaUpweW5QYzI5V2xUY2NSd3ZIZW5PcWJjYzQ1SmJETGE5UlJ5dXQxT3JsUjc1V1BSekVlajJQalZISXJXK25LNWYwSnVzWkZ3WGF1VXVNTExnWE9WMnE4c3E2QjhWYlYxMFQwb2ZYcld0Y2l2UmxPakdkaUpJOXJXcTMyMHE3ZDVPTzU5NnZlSitCVnJjSHJhS3F1V1EwOUF4YWUwVTlMcUR0ZXhmVGJKSTdUR3MxcmFKdFVUOXFuNE9oSGpPNVlGMCtNZ3VWN3BhaWJKcStlN3NkYnF1T29aU3NraWppYTFzakZjeFhva1hjdWxWRVZkZTZLVW5ncmdqRU9uL0ZxM0ZjUXJMald3MTllKzRUMVZ4Zkcrb2U5ekd0UnJuTVl4RlJFWjQ4ZlZmdVoyNTN1TkZ5eDFwOFQ0WngramFxNllIVi9tT1ExMVA1YlR3TW1pbWRCSTlQNVd4dVRTK082b1J2dXFvZWptclc1eitJcmg5aXVpSk5RWWRqenErQ25mNVlsUXJKWkVrMS9Nam53cnY3eE4reGN1cHZHcURLK243a0MxWENuWksyT3dWbGJDamszMnowOFRwb25KOWxSOGJmSnpYUkhrbGJrL1RGaFZYY0puU3owY0ZSYnU1eTcvaDA5UkpGRW45bzJzVCt4Y3dBQUFBQUFBU2pxRTZoY1k0Q3htR3VyNmFTN1pCZG5yVDJTeVU2L3hxMmJ3bjBSVmF4RmMzYnRLdmxFUkZWVVFsM0R2VHBtMmY1bFQ5UVBWSk95dnlOTzJXeVkxci9LV2FQZmN6dVp0VTcwOTBaNTB2elBWei8wK3QrSVBqbGJmK21tN1ZORkU2UmJMY0tPNHlOYW0xOU5IK201ZGZaRWwydjJSRlg2Rko2Ylg0MUp3SGdMc1NTQkxiK1FVaUlrV3RKTWthSlAzYS9mNnZxZDMvTHVJRnhSRFNyK0lseWROaUNNUzFzc1NKZFZnLzBmaTFTazcwWFhqdjhBVlI2cjllNUpQNm5iOVFIVXBrVm95cUxnbmdPenBrUEpOeWJxVjZJanFlelJ1VGZxeXF2eTk2TlZIYWQ4clVWRmR2YU5kNy9UcjB6V3poeEt6TWNxdXo4bjVEdnU1THZmYWhWZXFLNWR1aWhWM2xHYjkzTDh6OUp2U2FhM3RlY09SY1A0dDR2djJXNXpERlZXeU9sZlRyUVNhWDh3a2thclcweUl2aGUvYW92aFVSdmNxK0VVd1AwcHNsNmRPVzhXeTNsakM2YTAyZmxDMlNNc0Z5a2M1VXRheVMvSTFWZXE5aVBhc2FLcTdjakpZM0s1RVY2RzdPYnVlTVA0Q3Nsc3lITnFDN3pVTjByMjI1a3RCVHNrU0dWV3E1Rms3bnQwM3RhNWZHMStWZElkcmNMUGptVVdtYWp1bHR0OTF0dHlpVDFZNW9tVFExRWF0OEtxS2lvNUZUMi9vWkU2QkpHMjNQdWFjUXhTcmtxY0d0VitUOG5YMUZmRXpjMVF4cXh1WDlYZEZISHRmcWpHTDlUb3VZT29EUDhBa3pPS3ZwNjZYb216WG1IY09RNVNxNnByT3pmYTlySG9pb2owOG9yMDJxS2l0WWl1OHRxL0FIVHpoL0FPTnlXNnpPZmNyM2NWU1c4WHFwYi9BSml1bDhyOTE3V0lxcnBtMTkxVlZjNVZWWXBtYXN3ZjhSWEViNWRISkRRNWhqanFHQ29ldW1MVUl5VmlSNy9tVjBjU2ErOHJmdVhIcWJ5V2d4VHArNUF1dHdxR1JOa3NGWlJRcTVkZDA5UkU2R0pxZmRWZkkzd2MxMFNZNVdZeDB4WVZTVjhUbzU2eW5xTGlyWEpyK0hVVkVrc1Mvd0I0M3NYKzVjd0FBQUFBQUFaZjV4Nk5jcDVnNWRieXpidWRhekdhbWpocDRMVkJUMmQwc2x2U052bFk1a3FXTHRaSFNQMmpVVkZmcnpyWjVmOEFnNjZnZjk4ZWIvOEFVcWYvQUhGNzQ2NDR1T004WVFjZGNnNWRVWjdLc1ZWVDE5eXVrVHUrdWlta2U3c2thK1NSVlJHUFNQU3VYdzM2ZXlSS1BvbnlQRVo2Nmg0WDZqc3V3ZkhiaEs2V1N6c2lXcVpFcnYxZWxKNnNhc1hYaEhhVitrVGJsMXNyWEJYQUdFOEIyQ3J0ZU1QcTY2NFhXVktpNjNhdWVqNnF0bFRlbGNxSnBHcDNPMDFQYnVWVlZWVlZYUDFEMENjazJmSjd4bU5nNnJyMWFMdmZwcEo3aFYwRmtrZ2xuVjcxZTVIT1pXSXFwM0x2WHNlei9nNjZnZjhBZkhtLy9VcWYvY1VYbVRwcW01d3ozRkwxbVdkdWZpR01TTnFGeGhsdStXdW4vYytXZjFmUGRwcmRlbjRaM0lpb3IxY2RQejF3ZmpmUFhITlZnTjZsU2hmM01udDFleUJKSFVOUXp3MlJyTnQ3azdWYzFXN1RiWEttMFhTcCthbjROcGNoNFVnNGE1aHZ5WnJGRFR0cG5YUDRSYU9keVJyL0FBWlA5U1JVbFlpSW5mM2ZOcjVrWGJ0eU9Qb281QnBMUi84QUUyM3F1elNud3Z0V0J0bytHM0kybVh4NktUcE1pSTNYanRSbmJyOXV2QmFNSDRSeGppcmkydDQwNHVta3NicW1scUdNdWtqZlhxUGpKSTFZbFhKNWI2ajJyMnJwRmFtbW8xTzFOYXpqaWY0Zm5KT0J4Vk1HRTlXbC9zTWRiSWt0UzIzV2VXblNaNkpwSFA3SzFPNVUydnY5MU96eFRwUjV5c0dVMmUvWFhySnpHOFVWdHVGUFYxTnVucGFoSTZ5S09Scm53T1ZheHlJMTZJclYyMVUwdnN2c1ZYblhnUEMrZmNicHJMbEQ2cWlyYmJNdFRhN3JST1J0VFJUTHJhdFZmQ3RYVGU1cSsvYWlwcFVSVWt6T2lhK1pUY0xaSHpiMUNaVm45Z3RNelo0TE5QQ3RORkk1dmhQVmY2cjFmNDJpdTBqdEt1bkpzMUJUVTFQUjA4VkpTUVJ3UVFNYkhGRkcxR3NZeHFhUnJVVHdpSWlhUkQ2QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQS85az1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUVBQVFBQkFBRC8yd0JEQUFNQ0FnSUNBZ01DQWdJREF3TURCQVlFQkFRRUJBZ0dCZ1VHQ1FnS0Nna0lDUWtLREE4TUNnc09Dd2tKRFJFTkRnOFFFQkVRQ2d3U0V4SVFFdzhRRUJEL3dBQUxDQUZBQVFZQkFSRUEvOFFBR2dBQkFRRUJBUUVCQUFBQUFBQUFBQUFBQUFjSUJnVURCUC9FQURVUUFBRURCQUVEQWdRRUJBY0JBQUFBQUFBQkFnTUVCUVlSQndnU0lSTXhGQ0pCVVFrVk1rSWpVbUdCR0NReldHS1UxQmIvMmdBSUFRRUFBRDhBMUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFDVjg3OVJXRjhEVUZ1YmVxU3Z2Rjh2Y2l3Mm15MjJOSktxcmZ0RTNyOXJlNXpVMzVWVlhUVWN1MEpYV2RhMlhZWXRMZGVZT21YTU1QeHlxbGJFdDI5ZjRwSVZkK24xR0xGSDJML3hWM2Q0WFNLdmcwcGI4b3gyNlkxQm1WQmVhV1d4MUZHbHdqci9BRkVTRmFaV2QvcXE1Zlp2YjVWVjFyNm1jVjYxYjdsdFpYemNIOVBPVjU5WXJiSzZDYThSekxTUXl1YjcrazMwbnEveHBVYXVuYVZOdFRaVCtCZW9mRHVmYlJjSjdIUjExcHZOa21TbnUxbXVERWJVMGNpN1JONi9VMVZhNUVYd3UycWlvaStEbHVWT3JXMVlabmp1S2VQT1A3NXlKbU1FYVMxZHZ0WHlSVWpkSXVwWmUxMmxSSE5WZE5WRTJtMVJmQjV1R2RZOEUrZVcvamJtWGlxL2NaM3E4dWF5Mk91TXFUMGxVOVY3V3RTYnNacFZjcU5SVWFyZHJwVlJkYjBjRG11UmVSTVU0cXc2NFoxbWx4K0R0VnRZanBISTN1Zkk1VjB5TmpmM1BjNVVSRS9yNTBpS3FaM2Ixc1oxSloxenFMcFZ6VjJEb3o0ajg2K0pUMWZodmYxL1E5TFhacnozZXAyNjg5MnZKb1hqVGtuRXVXc05vTTZ3cTRMVjJ5NE5YdDcyOWtrVDJycDhjamYydmF2aFUvdWlxaW9xeGZMT3NoanMzdWZIL0N2RW1RY21YS3h2V0s1ejIrVktlanA1RVZXcTMxdXgrOU9SeWJWRWFxb3ZhcmoxdUpPclN6WjduVHVLYzd3VzljZlpxckZscDdYZHZtWlZOUnF1MUZKMnRWVjdVYzVOdFJGUlBsVmZLSFk4NTg5WVp3SmpkUGU4b1pWVnRiY3B2aGJYYXFKcVBxYTZieHRyRVgyYW0yOXpsOXRvbmxWUkZramV0bTk0cmNiYS9tenA3eXZBYkJkWm13UVhtZVZhbUtOenZLZXF6MG1Lenh0VmFpcTdTTHBxNk5RVTFUVDFsUEZWMGs4YzBFN0d5UlNSdVJ6WHNWTm81RlR3cUtpN1JUNkFBQUFBQUFBbWQ3NER4SElPYnJKenZjN2pkSnIxWUtGYUNqb252aWRSTWFxU29qMFlyTzlIb3N6MTMzKytsMTRPWDYwYy93QVJ3bnAreW1oeVY4RXRUa2RETGFiWFJPMHNrOVRJM1RYdGI5b3RwSXJ2cDJwOVZSRmh2SWpNdDRlL0RlcytMWHBaNlM3M1dPR2ltWS9hU1F3MVZYSlVyQzVGOG92b3I2Ym1yN2JWRDM4RzZtVndYQkxUZy9BWFQ1bFBJRml4V2lpb2E2OFc5cjRLU1dxYXhGbmRFNXNVaXpPVjZ1Y3E2VGFxcXB0RlJWcEhUTG1mQS9MVjR5WGxManpGcExGbWxZNXRQazlMVXlQU3BZNVZUU3VaM0xHclhMR3VudGFpcXJYYlJGVlVPejRyNER4SGlYSzh5ekt5WEc2WEM1NXZYZkgxODF4ZkZJNk4zZkk5V1JxeGpWUml1bFZkTHYyYjVYUm52cjh1TkR5SmYrUE9CY05hMnR6aXJ2Y2RjaXdmTkpiNEZqY3piMVR5eEhkeVNyOW13ZHk2VFNyU09yakx1YytLYmJaK1crTWI2dFRqdGtualRKYkEraXA1R3owL2VpK3NrcXhyS3hGMzJQN1hmS2l0Y2lKcHluUGMyOVdsVGNjUnd2SGVuT3FiY2M0NUpiRExhOVJSeXV0MU9ybFI3NVdQUnpFZWoyUGpWSElyVytuSzVmMEp1c1pGd1hhdVV1TUxMZ1hPVjJxOHNxNkI4VmJWMTBUMG9mWHJXdGNpdlJsT2pHZGlKSTlyV3EzMjBxN2Q1T081OTZ2ZUorQlZyY0hyYUtxdVdRMDlBeGFlMFU5THFEdGV4ZlRiSkk3VEdzMXJhSnRVVDlxbjRPaEhqTzVZRjArTWd1VjdwYWliSnErZTdzZGJxdU9vWlNza2lqaWExc2pGY3hYb2tYY3VsVkVWZGU2S1VuZ3JnakVPbi9GcTNGY1FyTGpXdzE5ZSs0VDFWeGZHK29lOXpHdFJybk1ZeEZSRVo0OGZWZnVaMjUzdU5GeXgxcDhUNFp4K2phcTZZSFYvbU9RMTFQNWJUd01taW1kQkk5UDVXeHVUUytPNm9SdnVxb2VqbXJXNXorSXJoOWl1aUpOUVlkanpxK0NuZjVZbFFySlpFazEvTWpud3J2N3hOK3hjdXB2R3FESytuN2tDMVhDblpLMk93VmxiQ2prMzJ6MDhUcG9uSjlsUjhiZkp6WFJIa2xiay9URmhWWGNKblN6MGNGUmJ1NXk3L2gwOVJKRkVuOW8yc1QreGN3QUFBQUFBQVNqcUU2aGNZNEN4bUd1cjZhUzdaQmRuclQyU3lVNi94cTJid24wUlZheEZjM2J0S3ZsRVJGVlVRbDNEdlRwbTJmNWxUOVFQVkpPeXZ5Tk8yV3lZMXIvS1dhUGZjenVadFU3MDkwWjUwdnpQVnovMCt0K0lQamxiZittbTdWTkZFNlJiTGNLTzR5TmFtMTlOSCttNWRmWkVsMnYyUkZYNkZKNmJYNDFKd0hnTHNTU0JMYitRVWlJa1d0Sk1rYUpQM2EvZjZ2cWQzL0x1SUZ4UkRTcitJbHlkTmlDTVMxc3NTSmRWZy8wZmkxU2s3MFhYanY4QVZSNnI5ZTVKUDZuYjlRSFVwa1ZveXFMZ25nT3pwa1BKTnlicVY2SWpxZXpSdVRmcXlxdnk5Nk5WSGFkOHJVVkZkdmFOZDcvVHIweld6aHhLek1jcXV6OG41RHZ1NUx2ZmFoVmVxSzVkdWloVjNsR2I5M0w4ejlKdlNhYTN0ZWNPUmNQNHQ0dnYyVzV6REZWV3lPbGZUclFTYVg4d2trYXJXMHlJdmhlL2FvdmhVUnZjcStFVXdQMHBzbDZkT1c4V3kzbGpDNmEwMmZsQzJTTXNGeWtjNVV0YXlTL0kxVmVxOWlQYXNhS3E3Y2pKWTNLNUVWNkc3T2J1ZU1QNENzbHN5SE5xQzd6VU4wcjIyNWt0QlRza1NHVldxNUZrN250MDN0YTVmRzErVmRJZHJjTFBqbVVXbWFqdWx0dDkxdHR5aVQxWTVvbVRRMUVhdDhLcUtpbzVGVDIvb1pFNkJKRzIzUHVhY1F4U3JrcWNHdFYrVDhuWDFGZkV6YzFReHF4dVg5WGRGSEh0ZnFqR0w5VG91WU9vRFA4QWt6T0t2cDY2WG9telhtSGNPUTVTcTZwck96ZmE5ckhvaW9qMDhvcjAycUtpdFlpdTh0cS9BSFR6aC9BT055VzZ6T2ZjcjNjVlNXOFhxcGIvQUppdWw4cjkxN1dJcXJwbTE5MVZWYzVWVllwbWFzd2Y4UlhFYjVkSEpEUTVoampxR0NvZXVtTFVJeVZpUjcvbVYwY1NhKzhyZnVYSHFieVdneFRwKzVBdXR3cUdSTmtzRlpSUXE1ZGQwOVJFNkdKcWZkVmZJM3djMTBTWTVXWXgweFlWU1Y4VG81NnlucUxpclhKcitIVVZFa3NTL3dCNDNzWCs1Y3dBQUFBQUFBWmY1eDZOY3A1ZzVkYnl6YnVkYXpHYW1qaHA0TFZCVDJkMHNsdlNOdmxZNWtxV0x0WkhTUDJqVVZGZnJ6clo1ZjhBZzY2Z2Y5OGViLzhBVXFmL0FIRjc0NjQ0dU9NOFlRY2RjZzVkVVo3S3NWVlQxOXl1a1R1K3VpbWtlN3NrYStTUlZSR1BTUFN1WHczNmV5UktQb255UEVaNjZoNFg2anN1d2ZIYmhLNldTenNpV3FaRXJ2MWVsSjZzYXNYWGhIYVYra1RibDFzclhCWEFHRThCMkNydGVNUHE2NjRYV1ZLaTYzYXVlajZxdGxUZWxjcUpwR3AzTzAxUGJ1VlZWVlZWWFAxRDBDY2syZko3eG1OZzZycjFhTHZmcHBKN2hWMEZra2dsblY3MWU1SE9aV0lxcDNMdlhzZXovZzY2Z2Y4QWZIbS8vVXFmL2NVWG1UcHFtNXd6M0ZMMW1XZHVmaUdNU05xRnhobHUrV3VuL2MrV2YxZlBkcHJkZW40WjNJaW9yMWNkUHoxd2ZqZlBYSE5WZ042bFNoZjNNbnQxZXlCSkhVTlF6dzJSck50N2s3VmMxVzdUYlhLbTBYU3ArYW40TnBjaDRVZzRhNWh2eVpyRkRUdHBuWFA0UmFPZHlSci9BQVpQOVNSVWxZaUluZjNmTnI1a1hidHlPUG9vNUJwTFIvOEFFMjNxdXpTbnd2dFdCdG8rRzNJMm1YeDZLVHBNaUkzWGp0Um5icjl1dkJhTUg0UnhqaXJpMnQ0MDR1bWtzYnFtbHFHTXVramZYcVBqSkkxWWxYSjViNmoycjJycEZhbW1vMU8xTmF6amlmNGZuSk9CeFZNR0U5V2wvc01kYklrdFMyM1dlV25TWjZKcEhQN0sxTzVVMnZ2OTFPenhUcFI1eXNHVTJlL1hYckp6RzhVVnR1RlBWMU51bnBhaEk2eUtPUnJud09WYXh5STE2SXJWMjFVMHZzdnNWWG5YZ1BDK2ZjYnByTGxENnFpcmJiTXRUYTdyUk9SdFRSVExyYXRWZkN0WFRlNXErL2FpcHBVUlVrek9pYStaVGNMWkh6YjFDWlZuOWd0TXpaNExOUEN0TkZJNXZoUFZmNnIxZjQyaXUwanRLdW5KczFCVFUxUFIwOFZKU1FSd1FRTWJIRkZHMUdzWXhxYVJyVVR3aUlpYVJENkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUEvOWs9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvbG9nby0xZTQwM2RmNDRiZTcwYjJlMTBjZGI4MzdhYzMxN2QzMy5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEQUFBQUFsQ0FZQUFBQUVHV3F2QUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUEzWnBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURVdU5pMWpNVFF5SURjNUxqRTJNRGt5TkN3Z01qQXhOeTh3Tnk4eE15MHdNVG93Tmpvek9TQWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1RVMDlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl0YlM4aUlIaHRiRzV6T25OMFVtVm1QU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2YzFSNWNHVXZVbVZ6YjNWeVkyVlNaV1lqSWlCNGJXeHVjenA0YlhBOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOGlJSGh0Y0UxTk9rOXlhV2RwYm1Gc1JHOWpkVzFsYm5SSlJEMGllRzF3TG1ScFpEb3pPVFJtTUdSak15MW1OamMyTFRrd05EY3RPVEl6TmkxaE1XSTJaV1EzTkdZMFptRWlJSGh0Y0UxTk9rUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZORVZCUmpaRE5qRkJOakEzTVRGRk9VRkVRakJDTlRKRU1qVTNPREk0T1RJaUlIaHRjRTFOT2tsdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNk5FVkJSalpETmpCQk5qQTNNVEZGT1VGRVFqQkNOVEpFTWpVM09ESTRPVElpSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJRU5ESURJd01Ua2dLRmRwYm1SdmQzTXBJajRnUEhodGNFMU5Pa1JsY21sMlpXUkdjbTl0SUhOMFVtVm1PbWx1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2WldWaU5XUmhZemd0TkdNMU9TMWhNalEwTFRsa1lUY3RZMlEwTURJellUTmxNakl6SWlCemRGSmxaanBrYjJOMWJXVnVkRWxFUFNKNGJYQXVaR2xrT2pNNU5HWXdaR016TFdZMk56WXRPVEEwTnkwNU1qTTJMV0V4WWpabFpEYzBaalJtWVNJdlBpQThMM0prWmpwRVpYTmpjbWx3ZEdsdmJqNGdQQzl5WkdZNlVrUkdQaUE4TDNnNmVHMXdiV1YwWVQ0Z1BEOTRjR0ZqYTJWMElHVnVaRDBpY2lJL1ByZlJHR3dBQUFyN1NVUkJWSGphdkZsNWNCUFhHZit0ZG5WNWZVa1kyeGlNVDhMaEs5UUdrZ0FCTWczcGhJbWJRREx0SDgxRmsybFRNamtuazVsa01rRFRIS1ZOQWt3N1RmcEhCcHFtRXlBR093MDAwQmc3eHZnQUVvaE5NQVo4U3BabFNiWnNXZmRxOS9WSmxzeGFTT1pNZCtiemV0KytmZS83ZmQvdk8zYkY0TVlPNWlyWDVDclh0K3hnYm5BK0V5WHllK1FhejdjRUdIT2RjNW16Wnp0MGhZWHp0cWxVN0VaQ3Q1Y2tNazRVeEJRSUJMb2tVZXoxK255WFBCNVB2OVBwTW8yTk9FYk5aclA5d1FmWGpkSm5wU2dRdHdRWWR6M0tiOSsrVTFsUVVQaEdVSG1HamdSRm9XQ1NpRitZTDUwL1AxKzBXcUdoZzBsNWVTU3JzR0JZRU1RQndWOWtITFc3REQ1QjZQRjV2WDB1dDlNeVpMR2F2ejE1MHZieXk4K05Yd2N3Y2pNZUNNNVRqSTQ2ZjVtVXhQOWRvVUJDY0ZDeTJ6RzYvd0FjaHc3QmMvWXNSS3NsaEVxVm40KzBqUnVoZithWktWb1JRdndTSWJhQUtBNkprbVFUQmJIWDV4WXUrZjArazhQaE1KcE1wb0VQUC96TFlGWFZQa0grV0pSTUFjTmNxL1dOUm5OUlptYjZBWlpsQ29LRGpwb2FXTjU3RDY3V0V4RDl2aW5CRUZ5ZFNVaEUzc2YvUXNvdkhnRHhESUFNTlVBYS9RRkVHS09tVUlOSldRQTJ1eEpFblE0aWtuRlJKR09pS0kxU1Nsb0VRZWlqbE94M09FWWJDd3B5am9lOUpNbThOUW1HdVJibFcxcE82Y3ZLeWo3U2FMajF4T2ZEMER2dndMcHpKd0xVQTRyUXBDdVhFZW42NlUrc1JPWXJkMEc0c0IvRWFhYUtqb2RtaGdBeVdpajBDNkJhOGg2WWpEV1h5WCtaS0tJZ1NQWXpaMDYvdW14WnhUNTZIUWd0R3dYa1dtSkFzV2hSMGROVStZZWtZUnVNbTU2RmRjOGVzUFFHRzBOeEVoeFNBVW9sUStPakVmN1QxSUJFbXJBR0ozTTc4VUMwbklhdjVRV29WMzlLUFZJOGNlL3lrcXpQNTA1cmFXbCtpdjVmRTlTRGloQUdNdWtCeGRWNGJ6YmJWdkdKNmxjbHl4QmorTU1mNFRoMUJwcU1EQ2hZbHE0d2xaNUJOZGxFSU9OeFFMK2U3alJNUjBVSmpESzhrenp4MG10R1RlOFB0MEhzcjQ0Wm8zVjE5YWl1UGhCVVdEdGhsbERTWVdXcnhRVVFvVTc2akptNlB5dThucFNlYlR0ZzAyV0QzZmt4ZFAvWWk5UjE2MExta2tlVmVpNkJPZy93OXRIckFFSHlTcnBCUWhCRS9GMUMwRWZhS0ZyWGxGczIyekIyN2RybDArdDFRWFFhR1lBcHB1RGlLUitjV0ZwVytoWUhjcnZ0OC8wd0NscndELzBLQ3A4RGh2WjI2SjU2QWFuWnVSQnRWcmhHZk5DUU1TVHJhcUdaVCtBMVVsOVRFRUl2Z1daMkdBQVh3OGhodWhDL2s3TGJTK2NrVHNiQko1LzhFNE9EcHE4dlhyelFSSWVVWWZwTXNmNTBkWUFaRzNNOW9kRW9IM09aTE9neHVLRjU0R0dhNHlWd1EwYjRCd2N4V1BSelpHL014bERUU2ZCbDVWRDJ0dE5NY3pmc3A3NUFnc29NOWJKUjhHdFhRWldZQTAvdkYyQmNBeE0yakhVb0UwS1pLWEowZEp4SFZWV1ZWYU5SN1JzZUhpWlJpalBURmJLUTVRMEdjd1hQYTkrZ0YyemY1d2ZSMjlLT1JKSUl6NUlLek02WWhhSlZLdFIrdWh2OEl3L1MxRGdHc2JzVDBtM0ZzTTFiQWwvcUhmQm9FK0NGazNwRUJVRk14Y0pjSC95ZHUyZ0tsVUp4RXR3MVZBUXB1d05VRkNtRmRJeWZTRDAwWm5iczJDblNkSDJvdnY0YlF3eWxwL2lSamFiTzBhTU5NeFlzdUcyblVzbVdCNVViM3ZRYmFKcU9RR3l0aGVYYmRwamRMRnpwdVppZG0wYnplRDZTRXRXd0c4eXdEdzFENE5SSVZ2dlJUM2dzWGpvQTd2aUxhRDF4RVV6eEZpUm01Q0lncXFIa0tVMjhReEFFQWhkL0o5UnBlZUN5MTBHaEt3MHBjZmp3WWV6ZXZhdXpwNmY3cjI2MzIwT0gvRlI4WWZGSHBkTXJtalBGK0xobk04OXJYcWNXWXB5MVI5SDlzN1ZnQXVKay9uWlJKYTI2WEtnejB6QlNzZ1lrWXc3bTNuOHYxT2Rhd1RFRTVwWTJ6Ti8wVStRTVBRbzNtWW1CbEYvRGlsWFE4bXFrNkpMQU14YWtxTzJ3V04waGErZHkvd1ZUdUlsNllTRWNEaWNxS3l2OU9sM0tPOVhWMVVIdXU0TmJVbkdHeis0d0VDRlNEK1FVWWtaR0hQZHJ0ZXBubVhCbDhweitEclJCbytTYnlEYkJ2M3pBaDJSckoyMGJPakhiY0J6TW93bm8vdmM5MEZCcnBqY2VRbC82blNqT0swTzMvMTFvTXhmQ2EzTkRwNThEdGFjRGxxNHU1R1F4T0Zodng2b05sVWh0ZXhKa1JobFlxbnp3Mkw3OUEwb3Q2UnVxZkd2WTJuSVJaSmFmckFPY3JGVllsSmpJYjZIY1M0MGdFaXhXZVdXa1QwdzRMRkpKV0NYQmpDRTM1dVI4Q1lINUV1cDdhZnFEQTMxZkFkMnVuNkFpaFlmRUpsTkxtR0RyT1lHczRudVEyUGMyWnM5NkJNa1hOMU9iZG9OZC9sRm96YmEyczZpcHFSNVJxOVY3dzhwR1UwZVEwWWRFQnpHajErdGZWaW9WaTZkRStNeTArSDB0eGNJdlplQXlBZloyWU5aak5GbVhFOXd6MWc3ZmVEdm1VT2VhRGk4SzhUdzN6WVF6bDdJaDVqeU9oSkwzVWU2bDdEaTVHOXlhR2pDcU5QajlmbXpac2dXelptWHVPWGp3a0ZGbTlWamNKekU5NFBQNVJ4aktZWnE2Sm5WTVhyc1czTyszUW5TNkpxTTk4cVJJL3hBSGtQazBKWlpFUXVsQXNFNllTVUhyWms1U0FIT0ZOdmo4YmFFVVg4elBnYUhPQ2N2QytkQXJxNENLRDZCSVh4bGE4N1BQOXNKaUdUcmIyOXRURzBmNWlQV2xxUFk3cEZjb2VJdUtpdHFOUnNPQXpXYkwwbXI1REo1UEFKZVpDWlZlRDJkek13SWV6MFRZQngraW1TUjFYU1g0VWlXVWFXWncrcW5MQm1rbmlCUG1ZcWs5V0dxbTJha09aT0Y3OEtOSG9TbDdCZHo4MzRibTl2ZjNZL1BtelI3YVVuL1kwZEhSUTRlOHdmQUxpemNzY2dCWDV2MHdrS0RwMWV2WGI4aGZ2UGoybFNVbFpaVWxwYVYzNWVUbHFNUzJOcmdhajhNL2FvY3lQWU1xVUFiMXZIbUFlUWY4clpzbjZ1VFZEbXBIVHBzSzVaSS9BYmxQMGwwbmZQcmFhNitETm13SG01cWEvdWJ6K1Z4Um1jY2RCdUNYQVNEeEFBVFZVSWNiSjc2Z29FQy9iTm15Ulhjc1g3RnUrZW8xZDk5V2tKK1d3TEZNc0ltTEhOTG9HZmovczVJV0tHZnNtazRpZVVOQjZiSUV5b3IzNmZtdXlkdkhqemZqK2VlZk02aFV5bmVibTVzdnhGRGVFNVUyU2F4Q0p1c1BMNHZkYmhmYjI5dHRSdzUvZGZKVVMzUEQ0SUJwSkNDU1pKVkt4V3UxR2lWTGdUQ2FUQ2cwS1JCTmpkUkd2b21scGN1S0U2S0JJbWt1bENXdlFyV1Vwc2prZVpNYk94emoyTHAxSzZFcGUwOTlmWDFUV0ZIdk5OUWhzVnBXTnM3WEJseCtDeVFTZmRVYlAzYXM0WWNEKzZ1K3NscHQ5SVhkeVFiZnVlakJhN0pXUUpsVkFVYWkreklVbEZvSEpqRVhiTVlLY0F0K0IxWEZuNkRJdW8vdXBKbXk4YjU5KzdGMzc1NDIraGE1YTR3MlhqRzQ3NHVSKytOMm5oRVBjR0ZSaGtVVjU4eXRYWHRmMGVyVnErOHVMNjlZV2xSYVhwaVpxYVBxVTgvN3h5ZFlxRXFOR3c0bTB5QTJiSGpZVFl2bVczVjFkYWRrMUhIRnFMaGlQT3ZMS1JRQkk4K3hrZ3g5SkFjSElpN3Q2dXF5MU5iV2Z0ZlJjZTZFMGREWGI2RzlrRnFicXRjbVphbFVtb1JwNC9uTk45K21JQXkxRFEwTk5WSFU4VVFGN2JUS1IxTklQa21LQWlHWGdFekV3Y0ZCUjJ0TFMrZUoxdWFXcmtzWDJ3ZU1mUzdhNCtncHZSSjVucjlpdy9yNkJtemI5dTRReDNFZlVHcU9UVU9kd0xWOEgyTGo1QTRTOVNWQWlnRm1DaEFhRjk1ejU4NlpqaDA3ZHVyQ2hjNlcvbjZqeVdLeDhCVEh6T1RrRkVhaFlHaW5lUVF2dmZTaVNOUDBSMGVPSFBrK3JLdzhhR09sVEhJalgrYVlPREhDUmtra1hqaFpmRXhLWGw1ZTZ2TGxLMHFLaTBzZk9ILytmR2xkM2RmMi9QejhQWTJOalY4TGdoQlIyQzNqZlN6NjNQU25SU1lHRUlVTUVDZXJJMXhVc0N0bDQ2eU1xbUpZVVk4czMzdWl1azV5cXdERTgwbzBFRFlxaTNGUklDS3ZoWElBOGdDTzlFRFRwczJiL1RvOUhiMFUwOUJML2prRVlTV0ZzTVJxMk1pUENTQWVtTWhMTnhzSGpFTG1BU0pMQVBJK1g3d2U1VzhGZ09ub0ZRMUcvamxFaXFvellxeFcrZjhKWUxxZ1orSjhFcEdpNmczQkRmemc4V01Bd0RUOUZST2ozdUJHbGYreEFWenJQamYxTTlQL0JCZ0E4YXMyU2wwVnhmOEFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEQUFBQUFsQ0FZQUFBQUVHV3F2QUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUEzWnBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURVdU5pMWpNVFF5SURjNUxqRTJNRGt5TkN3Z01qQXhOeTh3Tnk4eE15MHdNVG93Tmpvek9TQWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1RVMDlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl0YlM4aUlIaHRiRzV6T25OMFVtVm1QU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2YzFSNWNHVXZVbVZ6YjNWeVkyVlNaV1lqSWlCNGJXeHVjenA0YlhBOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOGlJSGh0Y0UxTk9rOXlhV2RwYm1Gc1JHOWpkVzFsYm5SSlJEMGllRzF3TG1ScFpEb3pPVFJtTUdSak15MW1OamMyTFRrd05EY3RPVEl6TmkxaE1XSTJaV1EzTkdZMFptRWlJSGh0Y0UxTk9rUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZOek0wUlRJelFUZEJOakEzTVRGRk9UaEdNamxCTVVFd1F6VTBNRVU0TWpNaUlIaHRjRTFOT2tsdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNk56TTBSVEl6UVRaQk5qQTNNVEZGT1RoR01qbEJNVUV3UXpVME1FVTRNak1pSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJRU5ESURJd01Ua2dLRmRwYm1SdmQzTXBJajRnUEhodGNFMU5Pa1JsY21sMlpXUkdjbTl0SUhOMFVtVm1PbWx1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2WldWaU5XUmhZemd0TkdNMU9TMWhNalEwTFRsa1lUY3RZMlEwTURJellUTmxNakl6SWlCemRGSmxaanBrYjJOMWJXVnVkRWxFUFNKNGJYQXVaR2xrT2pNNU5HWXdaR016TFdZMk56WXRPVEEwTnkwNU1qTTJMV0V4WWpabFpEYzBaalJtWVNJdlBpQThMM0prWmpwRVpYTmpjbWx3ZEdsdmJqNGdQQzl5WkdZNlVrUkdQaUE4TDNnNmVHMXdiV1YwWVQ0Z1BEOTRjR0ZqYTJWMElHVnVaRDBpY2lJL1BxaE44b1FBQUFyQ1NVUkJWSGphekZrTGNGVFZHZjd1WTE5M3M1dE5saVFFSWs4eEdaRkdoSUNPaUtnZ1Z0cWhqcThwWTJ1cmpyWmpPenJhNmRDUnFkcVJsbUpIcHgwSFJNY2dVbzBQV3NlZ0RCSWhKZ3FCbU5DRVZ4SWdyMDJ5bTVCOVpMUHYrK3paNWU1eXM5bE5nby9hTzNOeTcrNjllOC8zL2YvM1A4NEpoVzkyVUpQY1YvQWRIOVEzK0EyVmRwMEp2SktGalBKOUVVaUFkamhjc3dvTEN6YlJOTDFFa21TWElJam5ZN0hZK1VnazBqTTY2bmU1M1I1ZlM4dHgzNU5QL2lhb0lhSjhGOFNveXdYZjNOdzY3WnByRmxicDljeXRxVm1WaXpjVktERkZVZHlTSVBYemd0d1g0NFYrUXF3ckdvME1rUE9neStVYTNMVnI1L0N1WFpYOHQwV011aHp3Wk5EaE1QK1N5YVQ3YmFhSEJrTUNZcEtNNGh3ZDlEU2QrRTZXNHdTVmtDd3JGMFJSR2lJZUkyZXhPeEtKZFFzQ1B4QUlCUG82Tzg4UHJGOS9wenVOVkRaeXl0Y2xRSStNQk8rM1dNeHZFR3pHNUEwWEFiMm4zWTlEamdCNi9EeEVTVUdCbWNWOVpUWThXbTRIVFZIWm9sdVVKU1VnU2NxSUpFa2pvaWdQRW9LZGhGUVA4VmlQMXp2U1hWWDFWdmZXclZ2Q2NUdGtJMGROMWZvREF4ZCtVRkJncjlMcDZMTDRsNEtzWUVlTEc5dWEzZWoweHNESFg1Y0VTKzRaYVFVYmJ5dkJzMHNMZ0hBRWtjNE84TDA5a0VNaHNMWjhHSzVaQlAzTUVtaGxlTkZqQ2srdXcrUWNJZDRhNnU3dWZIYmh3cktENUpha2pqRmsyS21BcjY3ZWwyTzM1ejNEc2hmQkR3UUZQRkhUajQ4Ni9CQnA4Z2hMZ3lMbnBEVmtta0ZVcEZGN3BBTVBOYjBIM1pGREdEblhDZkNSeExUeEoybXJGYmE3TjhEKzhHT2dPUzdGbldFb1BUbVJRZG1JMDR0RlVmZ2IrYnljREZIRmt5U1NvTXhPd1FQMHpUZXYrclZlejk0VG4rU2NMNHFmVmZmaFdHOEFGTWNtckowQVJWMjBva0t6eUJYQ3lKY2lLT2s5Q1dkakphWkhQYUJNVmxBR1k4b3NjaWlBNFgvOEZUSXZvdkRKcDBBeHpMaUpTYXhnNTg2ZEM4aWxpWXhZcGhSTlQ2WjdsOHU5MG13MlBoMEhPQlFXOFBPOURoenI4dU1YaTNPeFpoYUgrUllXTmhNRE9Tb2xmaEVQM2hYdWRqelYraTZ1RExrUXppOEdZeUx6eDRNNi9oTHFZajZnakNiUU9XYjQvLzB1WW0xdEdRRjgrT0ZIT0hHaXBaRmN4cGtieU5ERm5hU3RRZlJFMG1scE9UbURTR2NyVFZNRkVWSEc3dzRONHVnNVB4NHFOZUl2UysxNFpLNFJiNjh0eGkvTHJDaTBtS0FQak9MQmhyZHc5V0E3R20xWEVrZUxtT25waGhBVENPNjBjQ1BwaVRaeGtIekRpSjdyR0FkZ2VIZ1lsWldWWVpiVnZha1MwS3VLb2RWQlpaTlFLbVZlZFZWcFhQZEw0bk8vUy9SZTFlckcrZ1ZHUExFNEg3NndpQktPUnRkd0NFdnBLR1l2ejBkZEc0OTF0akswdGJZalA5U1AyYjQrU0FZT2JJNFZDQWJJYk95bFFFOUVMVTFPTXNSd2NCeUlIVHRlUXlnVU9IRGl4SWxUS2s1R0F6eGxqV3d4UVBsOHdRY01CdDNEOGZrR1F5SmVKOW5HUm5SOVU3NE5JNklDU29pQk0rb3h6UE1vdCtod1l4R0Q1YmFaMEptdXhPbUtFSzRTdkxpNm9ScGM2WU9nLzlNQS9vUGRDUWlLS0pHZ05STUpHYUVRRDlFTUM1M05ObWJ5NXViak9IRGd3QURQODlWK3YxL09CRHdiZ1lUbG5jNExpeXdXN2dVaTI4VDlCbWNJalVNUnNNVGxMNTZOb0tncmpISk93WjBrQmlybUZzTHJpNkRMRzBHYk80SmVweC9yRjgrRTUyUVhRaVdsQkZ3UjZCdlhJditHbFlnZC9RSnNOSWpRNlpPUUxqaWhFUEowdmgzNnVmTlNBSUxCSUxadDJ5NlpUSVo5WDN4UjM1ZVc5OVByd1JnQ0NZWlZWZStiOHZMeXRwQjBOak41bzlFVmhzUkxrRWpXR1ZJWURKR2tmem9pWVo4M2pJSXpQWmdmSGNHRzYrZVMrem1JNVZQZ2laWEx5K2FBUC9ZbFFrUDkwSmVXd1RXdEJBVS8rU2xjZ2c1ejduQmkrT2xISVkvNmtYUFRMZEJmTVRzRjR1REJXalEyTnA3eGV0MmZhbEttcUk1a0haQXpacUhycmx2Q3JGdjM0NDBHQTdzbStWMk1CTytGSUo5SWx3bjNrRDgwUTBIV3MvQ1liRVJDRkZZYzM0dllpOCtoNTUvdllabnpOSFNmZkFDblg0U3dZQkZ5N0ZZTU56YWhTS2ZBOStLZkVlcnRnekxVQnpuZ0IyUEpRKzZQN2labnF4cTRibXpmdmkwNGZYcmh2NXhPWnlCZUw4bmcxU0drRVlDMmtDV3cxZFRVL3BEakRMOGl1azhSWXdoaW80NitWQ28xUDFCa0VSWXBqSVk1RlpnV0hjVmQ1ejdEak1QYlFjc1N2SFUxUUdrcFRHZWE0S3E0QzdPNVhFeDc1REZNSnhpOHo3NUUyajRlMW52V3c3emk1dFE3WDMxMUIwaEhlNlMrdnE1UkF6eW1JU0JxaXRnWUNTWGtrNVBEL1lGSXh6NG1TQWlCRlNWbXZNb1NxeFBad01SY1NpSWlCYXZuQXU3dnJNR0FwUkFzSTZIQVJFRmdUTWoxZGtENi9DUVVSb2VDdzlYb0RnNWlkajRMOGRRSjhIMjk0Q3F1aC8zUngwa3F2VmpjV2x0UFlzK2U5NGM1am50UFkvbllCQVRHcE16NFlFanY0U1k1MzVvZTZRR2kvODJIWFhpbHlZMVFUTDc0T0hGS0FaSEhEUmpHNDlXYmNaUGpLSkZVSGtJNjBoWWtTM09pUGFLZ0V5TGdneVNPNUVSNWhXNytBc3pZOGpLNDh1dVMvUS91dmZjK0NFSnMyOTY5ZTZ2SlY2VG5RTHlKaStmWGtIb2RUWlBST0EvUUhSMW50eklNOC9Tc1diUHlqRVo5aW9CRnorQzVsVE53Nnp3cnZpSUJIUllVbEpDV2VmRk1LK1lOa2tadGp3Yzl0QlcwZ2FSSFdSN1RuWkZXR3J5T1ZHS3JEdFRJQ0V6WExrWGhNMytDcWZ6YTFQdDM3OTZOL241SGEyZG41MmNUV0g5Y0FDT3RMRE0xTlRVdHBMQjgyZC9mNXhNRVliclpiTEVaallhVWxPYmJERmhaa29OYloxdFFVY3loeE16QVBDMFAvSUFMb2E4YUNBRTlLSmE1OVBxNEZ3Z2hhWFEwMGNBWjE5ME4wMVBQd0xidzZoUjRoNk1QR3pkdWpOcnQ5bGRJMFhLb2xvNm9JNnF4dktnSlhtUWlRSHM4SHFxdXJzNVRXMXZiMnRyYWNvaDhkZ1FDUWF2SlpMYWJ6UnhEcTR1VU1kV0VkSjZHUmVVa3E0eVNudVlNbEVpRUZDc3hrZU5CUnJ5Qk0xKy9Fa1cvL3lQc0d4NkFxYWh3VE9wNy92a1g0UE41OXBKNVB5WHJnbWdHQW55bTRCM1hOcWhrOUdyVEZPLyt1UGc1TnpjM1orM2FPNWFzV2JONjNiSmx5NWZNblRzbnoydzIwMGt5cVlNSVBOVGNoSERqWWRMZmVFSHBqZERObWdOdTZUSVk1czNMMkczdTMzOEFtemUvME9meHVKOXZhMnZyVmJVZVVyVWZWa25FVkEvSUV4R2dWQUtzU2lMWi9SazExL3BWcTFiTnVmMzJPMVpYVkN5OXNiUzA3QXF5c0RjYURQcXZ0WnRBMGlVMmJIaEFJdGJmVHF6L3NRbzJwQmxaQXpkZFF1bXFvREtVNzBSRjdPbnA4UjA4K0ZrTEtmRjFYcTl2Z0VoTUlWa21oNlErem1Bd1hCYUJ5c28zOGZubnRVMHVsN05xaEt4Vk0wZ25sbFo5TXk3c21VazJwYVMwY3A2NEpoTkdqaDA3ZXY2VFR6NnVkN2xjSFVORGcvNW9OTWFaVEZ5ZXhaSXpLZmp1N2g1czJyUXBTQUwzdGFhbXBtNFZyRFpvSnd6Y3FSQVlaLzFNUTVabHNiMjl6VW15VjVQRDRXanA2dXJxY2JzOWpGNXZLTEphclRURFpINzlsaTFiY2ViTXFmMUhqaHo1V0EzU1NOb1FKZ3JjcVJMUTVsd3BtemUwOGpwNnRLSDkxS2xUWDUwOTIzRzhyOC9Ca3d3NjNXck5OU1pUY2Z4NC9mVTM4TTQ3Ynp1STlQNCtORFRrVDVPT05takZxV3gwVVZQWVBxUTFRWjdNVnNtQVo5VmwzcmlSbTJ2anlzcEtpMis3YmZVdEZSWExWK3YxdXBMOSsvZVR6TE52b0xpNGVGdDlmWDJ6Q2phc0NkcHdCZ0xLTjltWm96S2tXem9Ma2F4azBsWlVVTDBtYUt5dkJjOW42bm15SFpQdFNtaDN3eWlOdEpMYkc3UTYyV1JlWVRYcldTMEJQb05zcE1rQzk5dmVuZFo2aE5aWVc1ZEdTT3NCV1FXYnFXV2VNRzErR3dTeUVhSFNpREFhTXRyZEJHMktGbFhRUW9ZVkY3NXJBcGtxT3JJRVBaMjJNRTlQMFdKYTFsUCsxd1Fta2hlVnZwZVRWbWZrVEl2MTc0dEFOcTlRR2JaRnNtMmo0LytGd09YTThiWC81ZlJmQVFZQTNDRS8xT2YyR0tNQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUZvQUFBQlFDQU1BQUFDdTdaSldBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQ0JqU0ZKTkFBQjZKZ0FBZ0lRQUFQb0FBQUNBNkFBQWRUQUFBT3BnQUFBNm1BQUFGM0NjdWxFOEFBQUJqRkJNVkVXOHZMeTJ0clpXVmxZU0VoSUVCQVFwS1NtTWpJeHZiMjhZR0Jnakl5T0ZoWVZtWm1ZV0ZoWWZIeDk5ZlgwK1BqNEZCUVZpWW1LTGk0dFlXRmlPam81NWVYa0JBUUZkWFYySmlZbENRa0tXbHBacWFtcGZYMTlMUzB1SWlJaWZuNThBQUFCT1RrNGJHeHREUTBPN3U3c2xKU1U5UFQwaUlpSThQRHlDZ29KNmVucXhzYkdscGFWZ1lHQUpDUW1CZ1lGNGVIaEdSa1l2THk4Mk5qYVFrSkJoWVdHYW1wcVltSmlwcWFrN096c05EUTJ0cmEydnI2OWtaR1FJQ0FpMXRiVzV1YmthR2hxTmpZMStmbjRSRVJHU2twS2hvYUdFaElTcXFxb01EQXhJU0VoRlJVVVFFQkJUVTFPY25Kd2NIQngwZEhTVmxaV2lvcUkvUHo5eGNYR1JrWkdabVptNnVycWtwS1N3c0xBSEJ3Y0tDZ3FYbDVkN2Uzc0RBd08zdDdlb3FLaFpXVm1BZ0lCS1Nrb1BEdzkvZjMram82T1VsSlJqWTJNVkZSVW1KaVk2T2pwM2QzZUdob1pvYUdpc3JLeFNVbElMQ3dzeE1URmJXMXNDQWdLVGs1T3lzckk0T0RocmEydGxaV1VHQmdaUVVGQWdJQ0JVVkZTZ29LQk1URXhWVlZVVUZCUVpHUm4rL3Y1UkpuN2VBQUFBQVdKTFIwU0QvTFRQMGdBQUFaMUpSRUZVV01QdDA5dFhFbEVVQnZEUEdNUkxHQ3BNR1lVYkhRMjBnRWlEQkNJZ1JjVUt0VkFqd2U1aGxFSVhEZTM2bDdlbkZRMXJOUS9NKy80OTdIWG1mR3VkTS91Y0dVQUlJWVFRUWdnaFRQV2NzU24yWG4zazZGUDZCenFqd2JPS2M4ZzA2YzQ1MS9ESXFPSUdQT3I1QzJQS1JTUHhxcGZjbDFXZlNkS2RjZkp5OWR1QmlVbEFtNW8yb2l1QnYrVy9wRHRCR3VjNm84NWVKYjMzYXlGdGlCeEFtQ0p3WHVlSjZBMzhTeXd1UFVmY01lYnA1Z2pGOUQwb2psc0xpYVNOWHpaMTI1ZU9xQjRZaVRWM01wbHNJbmVYRnNPMHhJOTVibUo1WmJXd2x1QXpDQkRSUGIyRGRtTFIvUWRFbVNLdEIybWp2VUJScFNDUE4xY2VQa3E1NXRHUldLU1ZZbHRCMm5aVDZVL2J5OERPNDNJU2VFSzdQREZZU1hRa2xsUnplMXlmbHJVNFBkTVBYYitzNXk5c0JlQWx2ZUtKUlhyZGtWZzc2OUFiSUYwYkE1eThuTGIvRnVpbCtneTlRNG5xbkw5WEQ0ekVvc05HM2RjczgwVjU2RU8yOFBFVDBwa28wS3g5eGxIajJQMmw1VGNTcTZvbkM2Mm0vblh4NzF3NXpRTmZGYjZ2YjY3dlNQLzRXZmsxdkdVa1FnZ2hoQkJDQ0dIcU56ck1SVFFNSE9xTEFBQUFKWFJGV0hSa1lYUmxPbU55WldGMFpRQXlNREU1TFRBM0xUSTJWREF5T2pVeU9qUXpMVEExT2pBd1dGcWhHd0FBQUNWMFJWaDBaR0YwWlRwdGIyUnBabmtBTWpBeE9TMHdOeTB5TmxRd01qbzFNam8wTXkwd05Ub3dNQ2tIR2FjQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUZvQUFBQlFDQU1BQUFDdTdaSldBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQ0JqU0ZKTkFBQjZKZ0FBZ0lRQUFQb0FBQUNBNkFBQWRUQUFBT3BnQUFBNm1BQUFGM0NjdWxFOEFBQUJqRkJNVkVXOHZMeTJ0clpXVmxZU0VoSUVCQVFwS1NtTWpJeHZiMjhZR0Jnakl5T0ZoWVZtWm1ZV0ZoWWZIeDk5ZlgwK1BqNEZCUVZpWW1LTGk0dFlXRmlPam81NWVYa0JBUUZkWFYySmlZbENRa0tXbHBacWFtcGZYMTlMUzB1SWlJaWZuNThBQUFCT1RrNGJHeHREUTBPN3U3c2xKU1U5UFQwaUlpSThQRHlDZ29KNmVucXhzYkdscGFWZ1lHQUpDUW1CZ1lGNGVIaEdSa1l2THk4Mk5qYVFrSkJoWVdHYW1wcVltSmlwcWFrN096c05EUTJ0cmEydnI2OWtaR1FJQ0FpMXRiVzV1YmthR2hxTmpZMStmbjRSRVJHU2twS2hvYUdFaElTcXFxb01EQXhJU0VoRlJVVVFFQkJUVTFPY25Kd2NIQngwZEhTVmxaV2lvcUkvUHo5eGNYR1JrWkdabVptNnVycWtwS1N3c0xBSEJ3Y0tDZ3FYbDVkN2Uzc0RBd08zdDdlb3FLaFpXVm1BZ0lCS1Nrb1BEdzkvZjMram82T1VsSlJqWTJNVkZSVW1KaVk2T2pwM2QzZUdob1pvYUdpc3JLeFNVbElMQ3dzeE1URmJXMXNDQWdLVGs1T3lzckk0T0RocmEydGxaV1VHQmdaUVVGQWdJQ0JVVkZTZ29LQk1URXhWVlZVVUZCUVpHUm4rL3Y1UkpuN2VBQUFBQVdKTFIwU0QvTFRQMGdBQUFaMUpSRUZVV01QdDA5dFhFbEVVQnZEUEdNUkxHQ3BNR1lVYkhRMjBnRWlEQkNJZ1JjVUt0VkFqd2U1aGxFSVhEZTM2bDdlbkZRMXJOUS9NKy80OTdIWG1mR3VkTS91Y0dVQUlJWVFRUWdnaFRQV2NzU24yWG4zazZGUDZCenFqd2JPS2M4ZzA2YzQ1MS9ESXFPSUdQT3I1QzJQS1JTUHhxcGZjbDFXZlNkS2RjZkp5OWR1QmlVbEFtNW8yb2l1QnYrVy9wRHRCR3VjNm84NWVKYjMzYXlGdGlCeEFtQ0p3WHVlSjZBMzhTeXd1UFVmY01lYnA1Z2pGOUQwb2psc0xpYVNOWHpaMTI1ZU9xQjRZaVRWM01wbHNJbmVYRnNPMHhJOTVibUo1WmJXd2x1QXpDQkRSUGIyRGRtTFIvUWRFbVNLdEIybWp2VUJScFNDUE4xY2VQa3E1NXRHUldLU1ZZbHRCMm5aVDZVL2J5OERPNDNJU2VFSzdQREZZU1hRa2xsUnplMXlmbHJVNFBkTVBYYitzNXk5c0JlQWx2ZUtKUlhyZGtWZzc2OUFiSUYwYkE1eThuTGIvRnVpbCtneTlRNG5xbkw5WEQ0ekVvc05HM2RjczgwVjU2RU8yOFBFVDBwa28wS3g5eGxIajJQMmw1VGNTcTZvbkM2Mm0vblh4NzF3NXpRTmZGYjZ2YjY3dlNQLzRXZmsxdkdVa1FnZ2hoQkJDQ0dIcU56ck1SVFFNSE9xTEFBQUFKWFJGV0hSa1lYUmxPbU55WldGMFpRQXlNREU1TFRBM0xUSTJWREF5T2pVeU9qUXpMVEExT2pBd1dGcWhHd0FBQUNWMFJWaDBaR0YwWlRwdGIyUnBabmtBTWpBeE9TMHdOeTB5TmxRd01qbzFNam8wTXkwd05Ub3dNQ2tIR2FjQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUZvQUFBQlFDQU1BQUFDdTdaSldBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQ0JqU0ZKTkFBQjZKZ0FBZ0lRQUFQb0FBQUNBNkFBQWRUQUFBT3BnQUFBNm1BQUFGM0NjdWxFOEFBQUJqRkJNVkVXOHZMeTJ0clpXVmxZU0VoSUVCQVFwS1NtTWpJeHZiMjhZR0Jnakl5T0ZoWVZtWm1ZV0ZoWWZIeDk5ZlgwK1BqNEZCUVZpWW1LTGk0dFlXRmlPam81NWVYa0JBUUZkWFYySmlZbENRa0tXbHBacWFtcGZYMTlMUzB1SWlJaWZuNThBQUFCT1RrNGJHeHREUTBPN3U3c2xKU1U5UFQwaUlpSThQRHlDZ29KNmVucXhzYkdscGFWZ1lHQUpDUW1CZ1lGNGVIaEdSa1l2THk4Mk5qYVFrSkJoWVdHYW1wcVltSmlwcWFrN096c05EUTJ0cmEydnI2OWtaR1FJQ0FpMXRiVzV1YmthR2hxTmpZMStmbjRSRVJHU2twS2hvYUdFaElTcXFxb01EQXhJU0VoRlJVVVFFQkJUVTFPY25Kd2NIQngwZEhTVmxaV2lvcUkvUHo5eGNYR1JrWkdabVptNnVycWtwS1N3c0xBSEJ3Y0tDZ3FYbDVkN2Uzc0RBd08zdDdlb3FLaFpXVm1BZ0lCS1Nrb1BEdzkvZjMram82T1VsSlJqWTJNVkZSVW1KaVk2T2pwM2QzZUdob1pvYUdpc3JLeFNVbElMQ3dzeE1URmJXMXNDQWdLVGs1T3lzckk0T0RocmEydGxaV1VHQmdaUVVGQWdJQ0JVVkZTZ29LQk1URXhWVlZVVUZCUVpHUm4rL3Y1UkpuN2VBQUFBQVdKTFIwU0QvTFRQMGdBQUFaMUpSRUZVV01QdDA5dFhFbEVVQnZEUEdNUkxHQ3BNR1lVYkhRMjBnRWlEQkNJZ1JjVUt0VkFqd2U1aGxFSVhEZTM2bDdlbkZRMXJOUS9NKy80OTdIWG1mR3VkTS91Y0dVQUlJWVFRUWdnaFRQV2NzU24yWG4zazZGUDZCenFqd2JPS2M4ZzA2YzQ1MS9ESXFPSUdQT3I1QzJQS1JTUHhxcGZjbDFXZlNkS2RjZkp5OWR1QmlVbEFtNW8yb2l1QnYrVy9wRHRCR3VjNm84NWVKYjMzYXlGdGlCeEFtQ0p3WHVlSjZBMzhTeXd1UFVmY01lYnA1Z2pGOUQwb2psc0xpYVNOWHpaMTI1ZU9xQjRZaVRWM01wbHNJbmVYRnNPMHhJOTVibUo1WmJXd2x1QXpDQkRSUGIyRGRtTFIvUWRFbVNLdEIybWp2VUJScFNDUE4xY2VQa3E1NXRHUldLU1ZZbHRCMm5aVDZVL2J5OERPNDNJU2VFSzdQREZZU1hRa2xsUnplMXlmbHJVNFBkTVBYYitzNXk5c0JlQWx2ZUtKUlhyZGtWZzc2OUFiSUYwYkE1eThuTGIvRnVpbCtneTlRNG5xbkw5WEQ0ekVvc05HM2RjczgwVjU2RU8yOFBFVDBwa28wS3g5eGxIajJQMmw1VGNTcTZvbkM2Mm0vblh4NzF3NXpRTmZGYjZ2YjY3dlNQLzRXZmsxdkdVa1FnZ2hoQkJDQ0dIcU56ck1SVFFNSE9xTEFBQUFKWFJGV0hSa1lYUmxPbU55WldGMFpRQXlNREU1TFRBM0xUSTJWREF5T2pVeU9qUTBMVEExT2pBd25mMmZsUUFBQUNWMFJWaDBaR0YwWlRwdGIyUnBabmtBTWpBeE9TMHdOeTB5TmxRd01qbzFNam8wTkMwd05Ub3dNT3lnSnlrQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUZvQUFBQlFDQU1BQUFDdTdaSldBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQ0JqU0ZKTkFBQjZKZ0FBZ0lRQUFQb0FBQUNBNkFBQWRUQUFBT3BnQUFBNm1BQUFGM0NjdWxFOEFBQUJqRkJNVkVXOHZMeTJ0clpXVmxZU0VoSUVCQVFwS1NtTWpJeHZiMjhZR0Jnakl5T0ZoWVZtWm1ZV0ZoWWZIeDk5ZlgwK1BqNEZCUVZpWW1LTGk0dFlXRmlPam81NWVYa0JBUUZkWFYySmlZbENRa0tXbHBacWFtcGZYMTlMUzB1SWlJaWZuNThBQUFCT1RrNGJHeHREUTBPN3U3c2xKU1U5UFQwaUlpSThQRHlDZ29KNmVucXhzYkdscGFWZ1lHQUpDUW1CZ1lGNGVIaEdSa1l2THk4Mk5qYVFrSkJoWVdHYW1wcVltSmlwcWFrN096c05EUTJ0cmEydnI2OWtaR1FJQ0FpMXRiVzV1YmthR2hxTmpZMStmbjRSRVJHU2twS2hvYUdFaElTcXFxb01EQXhJU0VoRlJVVVFFQkJUVTFPY25Kd2NIQngwZEhTVmxaV2lvcUkvUHo5eGNYR1JrWkdabVptNnVycWtwS1N3c0xBSEJ3Y0tDZ3FYbDVkN2Uzc0RBd08zdDdlb3FLaFpXVm1BZ0lCS1Nrb1BEdzkvZjMram82T1VsSlJqWTJNVkZSVW1KaVk2T2pwM2QzZUdob1pvYUdpc3JLeFNVbElMQ3dzeE1URmJXMXNDQWdLVGs1T3lzckk0T0RocmEydGxaV1VHQmdaUVVGQWdJQ0JVVkZTZ29LQk1URXhWVlZVVUZCUVpHUm4rL3Y1UkpuN2VBQUFBQVdKTFIwU0QvTFRQMGdBQUFaMUpSRUZVV01QdDA5dFhFbEVVQnZEUEdNUkxHQ3BNR1lVYkhRMjBnRWlEQkNJZ1JjVUt0VkFqd2U1aGxFSVhEZTM2bDdlbkZRMXJOUS9NKy80OTdIWG1mR3VkTS91Y0dVQUlJWVFRUWdnaFRQV2NzU24yWG4zazZGUDZCenFqd2JPS2M4ZzA2YzQ1MS9ESXFPSUdQT3I1QzJQS1JTUHhxcGZjbDFXZlNkS2RjZkp5OWR1QmlVbEFtNW8yb2l1QnYrVy9wRHRCR3VjNm84NWVKYjMzYXlGdGlCeEFtQ0p3WHVlSjZBMzhTeXd1UFVmY01lYnA1Z2pGOUQwb2psc0xpYVNOWHpaMTI1ZU9xQjRZaVRWM01wbHNJbmVYRnNPMHhJOTVibUo1WmJXd2x1QXpDQkRSUGIyRGRtTFIvUWRFbVNLdEIybWp2VUJScFNDUE4xY2VQa3E1NXRHUldLU1ZZbHRCMm5aVDZVL2J5OERPNDNJU2VFSzdQREZZU1hRa2xsUnplMXlmbHJVNFBkTVBYYitzNXk5c0JlQWx2ZUtKUlhyZGtWZzc2OUFiSUYwYkE1eThuTGIvRnVpbCtneTlRNG5xbkw5WEQ0ekVvc05HM2RjczgwVjU2RU8yOFBFVDBwa28wS3g5eGxIajJQMmw1VGNTcTZvbkM2Mm0vblh4NzF3NXpRTmZGYjZ2YjY3dlNQLzRXZmsxdkdVa1FnZ2hoQkJDQ0dIcU56ck1SVFFNSE9xTEFBQUFKWFJGV0hSa1lYUmxPbU55WldGMFpRQXlNREU1TFRBM0xUSTJWREF5T2pVeU9qUTBMVEExT2pBd25mMmZsUUFBQUNWMFJWaDBaR0YwWlRwdGIyUnBabmtBTWpBeE9TMHdOeTB5TmxRd01qbzFNam8wTkMwd05Ub3dNT3lnSnlrQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUZvQUFBQlFDQU1BQUFDdTdaSldBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQ0JqU0ZKTkFBQjZKZ0FBZ0lRQUFQb0FBQUNBNkFBQWRUQUFBT3BnQUFBNm1BQUFGM0NjdWxFOEFBQUJqRkJNVkVXOHZMeTJ0clpXVmxZU0VoSUVCQVFwS1NtTWpJeHZiMjhZR0Jnakl5T0ZoWVZtWm1ZV0ZoWWZIeDk5ZlgwK1BqNEZCUVZpWW1LTGk0dFlXRmlPam81NWVYa0JBUUZkWFYySmlZbENRa0tXbHBacWFtcGZYMTlMUzB1SWlJaWZuNThBQUFCT1RrNGJHeHREUTBPN3U3c2xKU1U5UFQwaUlpSThQRHlDZ29KNmVucXhzYkdscGFWZ1lHQUpDUW1CZ1lGNGVIaEdSa1l2THk4Mk5qYVFrSkJoWVdHYW1wcVltSmlwcWFrN096c05EUTJ0cmEydnI2OWtaR1FJQ0FpMXRiVzV1YmthR2hxTmpZMStmbjRSRVJHU2twS2hvYUdFaElTcXFxb01EQXhJU0VoRlJVVVFFQkJUVTFPY25Kd2NIQngwZEhTVmxaV2lvcUkvUHo5eGNYR1JrWkdabVptNnVycWtwS1N3c0xBSEJ3Y0tDZ3FYbDVkN2Uzc0RBd08zdDdlb3FLaFpXVm1BZ0lCS1Nrb1BEdzkvZjMram82T1VsSlJqWTJNVkZSVW1KaVk2T2pwM2QzZUdob1pvYUdpc3JLeFNVbElMQ3dzeE1URmJXMXNDQWdLVGs1T3lzckk0T0RocmEydGxaV1VHQmdaUVVGQWdJQ0JVVkZTZ29LQk1URXhWVlZVVUZCUVpHUm4rL3Y1UkpuN2VBQUFBQVdKTFIwU0QvTFRQMGdBQUFaMUpSRUZVV01QdDA5dFhFbEVVQnZEUEdNUkxHQ3BNR1lVYkhRMjBnRWlEQkNJZ1JjVUt0VkFqd2U1aGxFSVhEZTM2bDdlbkZRMXJOUS9NKy80OTdIWG1mR3VkTS91Y0dVQUlJWVFRUWdnaFRQV2NzU24yWG4zazZGUDZCenFqd2JPS2M4ZzA2YzQ1MS9ESXFPSUdQT3I1QzJQS1JTUHhxcGZjbDFXZlNkS2RjZkp5OWR1QmlVbEFtNW8yb2l1QnYrVy9wRHRCR3VjNm84NWVKYjMzYXlGdGlCeEFtQ0p3WHVlSjZBMzhTeXd1UFVmY01lYnA1Z2pGOUQwb2psc0xpYVNOWHpaMTI1ZU9xQjRZaVRWM01wbHNJbmVYRnNPMHhJOTVibUo1WmJXd2x1QXpDQkRSUGIyRGRtTFIvUWRFbVNLdEIybWp2VUJScFNDUE4xY2VQa3E1NXRHUldLU1ZZbHRCMm5aVDZVL2J5OERPNDNJU2VFSzdQREZZU1hRa2xsUnplMXlmbHJVNFBkTVBYYitzNXk5c0JlQWx2ZUtKUlhyZGtWZzc2OUFiSUYwYkE1eThuTGIvRnVpbCtneTlRNG5xbkw5WEQ0ekVvc05HM2RjczgwVjU2RU8yOFBFVDBwa28wS3g5eGxIajJQMmw1VGNTcTZvbkM2Mm0vblh4NzF3NXpRTmZGYjZ2YjY3dlNQLzRXZmsxdkdVa1FnZ2hoQkJDQ0dIcU56ck1SVFFNSE9xTEFBQUFKWFJGV0hSa1lYUmxPbU55WldGMFpRQXlNREU1TFRBM0xUSTJWREF5T2pVeU9qUTBMVEExT2pBd25mMmZsUUFBQUNWMFJWaDBaR0YwWlRwdGIyUnBabmtBTWpBeE9TMHdOeTB5TmxRd01qbzFNam8wTkMwd05Ub3dNT3lnSnlrQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUZvQUFBQlFDQU1BQUFDdTdaSldBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQ0JqU0ZKTkFBQjZKZ0FBZ0lRQUFQb0FBQUNBNkFBQWRUQUFBT3BnQUFBNm1BQUFGM0NjdWxFOEFBQUJqRkJNVkVXOHZMeTJ0clpXVmxZU0VoSUVCQVFwS1NtTWpJeHZiMjhZR0Jnakl5T0ZoWVZtWm1ZV0ZoWWZIeDk5ZlgwK1BqNEZCUVZpWW1LTGk0dFlXRmlPam81NWVYa0JBUUZkWFYySmlZbENRa0tXbHBacWFtcGZYMTlMUzB1SWlJaWZuNThBQUFCT1RrNGJHeHREUTBPN3U3c2xKU1U5UFQwaUlpSThQRHlDZ29KNmVucXhzYkdscGFWZ1lHQUpDUW1CZ1lGNGVIaEdSa1l2THk4Mk5qYVFrSkJoWVdHYW1wcVltSmlwcWFrN096c05EUTJ0cmEydnI2OWtaR1FJQ0FpMXRiVzV1YmthR2hxTmpZMStmbjRSRVJHU2twS2hvYUdFaElTcXFxb01EQXhJU0VoRlJVVVFFQkJUVTFPY25Kd2NIQngwZEhTVmxaV2lvcUkvUHo5eGNYR1JrWkdabVptNnVycWtwS1N3c0xBSEJ3Y0tDZ3FYbDVkN2Uzc0RBd08zdDdlb3FLaFpXVm1BZ0lCS1Nrb1BEdzkvZjMram82T1VsSlJqWTJNVkZSVW1KaVk2T2pwM2QzZUdob1pvYUdpc3JLeFNVbElMQ3dzeE1URmJXMXNDQWdLVGs1T3lzckk0T0RocmEydGxaV1VHQmdaUVVGQWdJQ0JVVkZTZ29LQk1URXhWVlZVVUZCUVpHUm4rL3Y1UkpuN2VBQUFBQVdKTFIwU0QvTFRQMGdBQUFaMUpSRUZVV01QdDA5dFhFbEVVQnZEUEdNUkxHQ3BNR1lVYkhRMjBnRWlEQkNJZ1JjVUt0VkFqd2U1aGxFSVhEZTM2bDdlbkZRMXJOUS9NKy80OTdIWG1mR3VkTS91Y0dVQUlJWVFRUWdnaFRQV2NzU24yWG4zazZGUDZCenFqd2JPS2M4ZzA2YzQ1MS9ESXFPSUdQT3I1QzJQS1JTUHhxcGZjbDFXZlNkS2RjZkp5OWR1QmlVbEFtNW8yb2l1QnYrVy9wRHRCR3VjNm84NWVKYjMzYXlGdGlCeEFtQ0p3WHVlSjZBMzhTeXd1UFVmY01lYnA1Z2pGOUQwb2psc0xpYVNOWHpaMTI1ZU9xQjRZaVRWM01wbHNJbmVYRnNPMHhJOTVibUo1WmJXd2x1QXpDQkRSUGIyRGRtTFIvUWRFbVNLdEIybWp2VUJScFNDUE4xY2VQa3E1NXRHUldLU1ZZbHRCMm5aVDZVL2J5OERPNDNJU2VFSzdQREZZU1hRa2xsUnplMXlmbHJVNFBkTVBYYitzNXk5c0JlQWx2ZUtKUlhyZGtWZzc2OUFiSUYwYkE1eThuTGIvRnVpbCtneTlRNG5xbkw5WEQ0ekVvc05HM2RjczgwVjU2RU8yOFBFVDBwa28wS3g5eGxIajJQMmw1VGNTcTZvbkM2Mm0vblh4NzF3NXpRTmZGYjZ2YjY3dlNQLzRXZmsxdkdVa1FnZ2hoQkJDQ0dIcU56ck1SVFFNSE9xTEFBQUFKWFJGV0hSa1lYUmxPbU55WldGMFpRQXlNREU1TFRBM0xUSTJWREF5T2pVeU9qUTBMVEExT2pBd25mMmZsUUFBQUNWMFJWaDBaR0YwWlRwdGIyUnBabmtBTWpBeE9TMHdOeTB5TmxRd01qbzFNam8wTkMwd05Ub3dNT3lnSnlrQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUM4QUFBQWxDQVlBQUFEU3ZMREtBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQTNacFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1Tmkxak1UUXlJRGM1TGpFMk1Ea3lOQ3dnTWpBeE55OHdOeTh4TXkwd01Ub3dOam96T1NBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3VFUwOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXRiUzhpSUhodGJHNXpPbk4wVW1WbVBTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZjMVI1Y0dVdlVtVnpiM1Z5WTJWU1pXWWpJaUI0Yld4dWN6cDRiWEE5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM4aUlIaHRjRTFOT2s5eWFXZHBibUZzUkc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRvek9UUm1NR1JqTXkxbU5qYzJMVGt3TkRjdE9USXpOaTFoTVdJMlpXUTNOR1kwWm1FaUlIaHRjRTFOT2tSdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNk5EUTNNa0k1UXpGQk5qQTNNVEZGT1Rrek9VUkVNRUUxTkRjM01EVXlSRGdpSUhodGNFMU5Pa2x1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2TkRRM01rSTVRekJCTmpBM01URkZPVGt6T1VSRU1FRTFORGMzTURVeVJEZ2lJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTkRJREl3TVRrZ0tGZHBibVJ2ZDNNcElqNGdQSGh0Y0UxTk9rUmxjbWwyWldSR2NtOXRJSE4wVW1WbU9tbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZaV1ZpTldSaFl6Z3ROR00xT1MxaE1qUTBMVGxrWVRjdFkyUTBNREl6WVRObE1qSXpJaUJ6ZEZKbFpqcGtiMk4xYldWdWRFbEVQU0o0YlhBdVpHbGtPak01TkdZd1pHTXpMV1kyTnpZdE9UQTBOeTA1TWpNMkxXRXhZalpsWkRjMFpqUm1ZU0l2UGlBOEwzSmtaanBFWlhOamNtbHdkR2x2Ymo0Z1BDOXlaR1k2VWtSR1BpQThMM2c2ZUcxd2JXVjBZVDRnUEQ5NGNHRmphMlYwSUdWdVpEMGljaUkvUGtKRjJob0FBQXVqU1VSQlZIamF4RmtMVUZUbkdUMzdYcFkzeTB0QWpLRGdDeFJGUkZDREdwczBFNDFKT3pWTjFUVE4wOFltYVdNbWFXcVZ4S1NrTnFPMWs2bXhtVVJNZzRsaXpHTkVrU2hLQkJFVkVSVlFIc3Q3WVVGZ2VleDc3OTUrOSs1dWNsMEJNVEhObmZsbjkrNTluZlA5NXp2ZmQvOFY0WWR0b2xzY1ovRWpicUlmY0kzd1V6UUNhSFlFRXV4UEFaNEhXbFZkRTlSdThQNVRmS1I2VWFpL3ZOdHFaK3JNRm5POTJXUnM3dTNyMVhYcHV2WEZ4VVg2TFZzeVRTNmdyQWVSTzBKS2RMdkFDd3NMVmRjR3h2MnpwczM2eEtiVlUrR3JsTUh1Y0Q1WEJOYmdZTmxPeHU3UU1nNTdLMk8zTlZ1dGxpWWEyc0hCb2M2bXBzYk9kZXVlN21sdmIzUGNCaW4yVG9FWG43NnNYYi8xazZ2Yk10ZE1FTStjRWdNTFEzZTNPeDhoRnRNSGZUb2N6aWVLdnNQU3p6Q01qbzdwSEE2bXcyYXpOZHJ0OWlhejJkU3UxK3ZieXNwT2E1OTk5cWwrRDBMc0NJVFkyd1hQQTYrcWJVblB5bTNKZlNEMXJ0QlZzMHFnYi9vY3JOOFNLS09lZ0ZJdWhvakFPeGpuQldJSmZTZFNWcnVUMEEwM0UzRUVXU3NkR1dCWlZrK0VhRGhhaVZRRGtXbzJtUXdhcmJhOWFjR0NWQTJkN3A2bG0yWkxOR2FkMTlSRzVaWWE5cGp0Yk1hVzN5V2h0YTBGdWhNekVEOXRNUUpUdmtSVGh3RWJQNmhBZkxRL1Z0OFRnK2F1SWNTRyt5SXFSTVdUY2ovSlRlZ21XMkxkbjZ4WkpHSU50Ryt5V0l5SGc0SjhYNktmR2Rkd0NFbUl4d0k4TXpOVFh0VWhmdkZhMjFER3VoVnhrRkpVZHg2MW9Md25IWUV6WDhMVlZoTWVlZU1iWE5iMFlkN1VZR3pjWFlISHMwNmpxOThNZzhXT0kyVmF2UGRsTGZhZmFJWkdPL1R0ekV2cDZRbzVEUmtna1RoblJDd1dLVVVpc1ZxcEZFZFpyZWFuNkRRRkRUbDNPamVocnNIamtvNGw4Zyt1ZW5yNVc1L1VQZmZNaXNtSUR2TkdpODZBSTJlcWtmWHdLbHpxU01DanJ4Y2kyRStHZlpzV0lqdS9BWWRPdDJIWEgxTUpJb3VWZnoyQlM0MTZMcUxRRDlsdy85d0laTDlLcFAza01GUENhTnFNSUtBSTlGRkFMcEh5TStBa0FaU1VGSE1ndldoWUJIaHNMdkNzOUZaUlAxdFJHL1BCMFphcytkT0Q1ZmZNR2NjZjJIdThpYUpQWUdUejhmTG1Zc1JIK1NCbjQwTHNQZGFJdDNLdVlNdmpzekE3WG8wSFhqME9wVUtDOTE2Y0I0bFloQVBmdE9EWGkrL2lnZmNPV1BEM1Q2cHc4RlFMdk9RU3ZQYWJCS3lpWXphQ0pxZFl0N1MwWXYvK2ZYMHU4Q0tCN3QyeWdYUTA0THQyN1ZKZWJIVzhNMkJrWXRjL05JVS8wTlZyd2VFejdRUkdnUzBmMXlKOWhocnZiMGpGWVpMRytoMW5TZThUc2VHUmFYaGp6eVZvT29mdzg1UUlaTXdLUTVDZkFzdFR4ME5NVDJ6ck51TGxuZWR4aU82alVraGhOTnRwNWhSOGJ2Qko3MkN4NTZPUDJLNnV6anlYYkJoWHhPMnU0VFNGVVNJdlRwaS8vSVdEcDlwV2JINHNFWEtaODlSUEN4dFIxYVFuN1E3aW9RV1IrUENWTkZ5bzdjTmpXU1ZZUERzYzI1NUxKdjJLTURIY0I4SCtDcFRYOWVLZGZkVXdXeDA4OEdxNjl2RzNTM0N5VW9kN2t5TmhzN05ZbGh5QjlNUlEzbUtscFAveThnc29PSnBQVm1vNVFJK1V1WUlzOGF6bTRwRnNzYkZWbDdIdHM5b056eXlQUTB5RUQxamliakRhY2ZaYUQ2L0p6YjlOeEZ0UEpxRytiUkNQRVpnSkJIYkgrcmtJOEpYek4vblZrZ240R1lHNnJyZndaSlZFL216TmRhejVXd2t1MC83MmRjbnc4WkxBeGpDNGwvTEFpK1RGMmF6ZFpzZjI3ZHRzYW5YUVo2V2xwYjJDQkwxcGt3NG5sNGFHaHNnUDh0dXpwa1g3QjYxSWo0TEY3RHdpSnZQZXREWVJMenc4QmJQamdqQklaTlp0TCtPbmZmY3I2Y2cvMTQ2c25NdFk5MkFjYVYyS2JyMFoza29wZnJFb0dpY3ZkbUw5djg3eVNYb2c4MjVLVURuKzhPNTVKRTFTSTIxR01LOWlMdW81T2Jsb2JOUlVWRmRYbmZTb3ZKNUY2d2J3UFBBNWMrWklxam9rcjJVWGFKSzNQWnNNa2g4VXBEcVdwdFRPaUJBWDZjdWZhYWNvaVdrS05xeWFqdEJBQlE4eU8xK0RLNDE5T0hGUng3c0wxekM4L01oMDNrR2VmT2NNdXZyTW1CTHRoNUxMWGFocDdpY3BNVmc2SjV3Y3pJY0hvTk4xWStmT2Z3LzUrL3ZuREF3TVdseGFkK3VjOFNoVXZJNXVrRXRoU2VYYXpEMVZmMjdyTWNvdTFQZmgvTlZlcWhaMmVLdGtVSG1KSWVPMEwzS1NrVkIyeFVmN1lseVFGL3hWQ3FSTVVTTTgwSXUzdmVTcGFxeGZHWStPSGhOZXo2NGsvU3NSTjk0UFd0by9kYWtMOWVUM2tXb3ZQRSt6eU5rdnQyM2F0QmtHdytBWFI0N2tIM2ZabzFrd0xJS2tkUWdqejBlOXZya2paY2NYbWxjdjF2ZDVjZTVnTU50dzVHdzc4c3JhRUJtc1F0cjBFQ3hOQ3NlTW1BQ0VFMkEvYnhsL3NkM21uSWs1Y1dva0V3SDN4am5UNTJTRkN4UERzSEZOQWtYZEgyZXF1N0g5UUEyS0tmb0pNZUg4TmR4VzlFMHhUcDBxb2tiTytwVUxwTlUxaEtBWm9YeUVQYms0cjdUbDROcTN5MWJZN0hhRUJTakpEc1g4QVFaY3JXWmdNdE0zQ25rc1NXZEowamdrVFE1Q1ltd0FZaU44SVpNNmM5OUdqMk1jem5MUFZXSVo1YS9WeXBKYmliNU51MGUzRk9OUWFTdmVmVDRGYSsrTEJVa0VxMWV2WnFqSDJacVhsMWRFcHhocEdBVEQ2Q0poRlJJUVJsNGNIYUxvZWVMZWlTaTU2clJDbTgwQ1h5OHBsVzh4cjJrRkFUVGJHSXdQOFVFemVmaUppZzZvNlBjRkNXR1lSSVM0eEpzVTZRZVo2Nlpjb25Oa3BHU2Rab3V6Y2pMRWpFdm9aYlBIa1J0Rjh1ZGxaMytFM3Q2ZTB1cnE2akpCeEswQ3dLTnFuZ2UvZEdGSzVkUXdXOC9jV0dWNFlseDRpRVR1QlYyZkJYMkRaajRCeFJJeFNTY1VFMGlqVXFrSVJndEhSQVZOeHhEcTJnZFJSSWxhVk5rSkUzbTZtdHpFbjFvR3JtY2hOL3gyTnJnYUVCUHBqU1J5S3grVkZMVzExN0IxNno5NlRDYmpmelFhVGJ0TDN5YlhHRmJyN2sxby9KTDl1Ym5tLytia1ZIakw3S2NtQkRucTU4ZXJWSGNuUllXSHFBTWwyajRyakNZYjd6WkI1T1VjcVJDU1ZtaVFrbmNkL2FDVmE2b1FSZ2w3cEt3ZFg1MXVSV1dEbm9xUUF4SEIzcFR3bE94U1o2L1B0UUJjNzJLamFYbnp6U3hRWC85RlVWRlJJZGRSRGdQZTZnTHY4TFJLSVhoM3h5YXBxTHhrT3BSM3VQN1N4ZkppeHRCUlBtK3lpbDI1WUVMb3BPaFFaV1dUUVhTbGVRQnlrbEFFSlRIbjVRTkRkcHltUkp3eE1RQURCaHNtRTBITy9vNmMxZklWZGUrSkp0UzJERkFySUNGeVNzaXA5K2ZBSHp0K0F0bTdQNndkR09qL1VLdlY2a2VJdW1laTN2UW1KWFlSa2JyYVQ2V3JJZUtHVWlLUktOUFNVcU4rdVhMRnNtbUpLVXM2ek9xSWt6VUdyOHFHZnI3WStKQ0Ztc2laT1AxUHBCNStWbXdncmpUMVUvR3lVYjZJMER0b28xbm9nNG55WlJKVjY0eWtLQ3lmRzRETXY3eGdxYXRyMkhIdTNMbmpMc0MzVEZKUDJXQ0VWUUIzSjBlenlUTFU1UTNtRnh5N1ZGQ1EvM1ZrQU5OMjMrd2crYUxFTUpWVTVxV3E3elNqazJURlNVbE5PdGYyR0ltUURHVlhyeVBBVzRIWjVFcWN4L3RTclRoRkZ0bllUYzdWZUF6bFowNmVPVjkrNFdPNnYrVjJvKzZac0o1dlZ1NEwzRm5PdjgwWURBWkx5ZWt6bXIyZjdpdVUyUHRyVW1MbGc4dVNRbFJUSm9ZRWlxVUtYRzQyOEZFUElSSVJWQXRVNUZZbWk0T3ZFK2V2WFllMmo4SHZsL21qOE1DT1hwRlU4VzVUVTFPWEFMaXdLTm1IUzlMUndIc3VRekFld3k3Y3YzeWxxdlB6ci9MT2ExczE1eWNFMmR0VFloV2lSVE1qMU9HaGdiS0dUaXN1YXZTNFdOOURiMHdpeWdzcmNvdGFzT2IrQlBTVXYwL1dhVGw0dE9Ecms0SktPcVlrSFduMTRJYUNKVXhnUVQ1SVhDMnFUSkFmN24xWmJHeE00TktNaGRPVGs1TVhoTjgxTTczYkZoaGNXbWRCV1UwM2RMMVczSk1haDVueVV1VHUyZGJRcXUxK1JhZlQ5WGtVSktPTGdFVVFkY2Z0TEgxNGtoQzVRSHNTa1FxQkM0ZWZuNThxUFcxZTFNSzB0UFJwTStjc1psVGo0N1U5Vm5UVmxlRHd3ZDNYZzBQR2JUMWFVRkRoQWlvRWI3cFZrbzUxM2Naek9VOUlSRGhrb3hGSlRKZ2VuSkZ4ZDJxblZwdGVWVlZsVXZrR0hDSjNxUkhJeFNnWVprRkZkZHhxQmUxMjFtMUV3OVdFc2M2R1lQYmN1V1QxMExySm94Vmc3eFQ0MFdaRExBQW1IV0UycElLbEMvZUx0TTJqN1hVbktUT1dxSC9mVmVMaFNJZzhTQWhuUWlvZzVYN3RkTGdpYkJXQXRnbWNqTDBkRUhkaXBYbTBCSmQ0dENJT2o3ZWtZYnZHL3dmNFcwbEs3TEhTNVZrQWIxckcrekgvWFBnK0NlNDVoQy9Ud3kxMy82VGdSL3NYWmF6L252ems0Ry8xdkIvMDk4Ny9CQmdBMFBHYjlKdlZTRjRBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQzhBQUFBa0NBWUFBQUFaNEdOdkFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBM1pwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVOaTFqTVRReUlEYzVMakUyTURreU5Dd2dNakF4Tnk4d055OHhNeTB3TVRvd05qb3pPU0FnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdUVTA5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5dGJTOGlJSGh0Ykc1ek9uTjBVbVZtUFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdmMxUjVjR1V2VW1WemIzVnlZMlZTWldZaklpQjRiV3h1Y3pwNGJYQTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzhpSUhodGNFMU5Pazl5YVdkcGJtRnNSRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRG96T1RSbU1HUmpNeTFtTmpjMkxUa3dORGN0T1RJek5pMWhNV0kyWldRM05HWTBabUVpSUhodGNFMU5Pa1J2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2TjBRMFJqRkJOVU5CTmpBM01URkZPVUZFUWpJNE56bEdPVUpCUlRFME1qY2lJSGh0Y0UxTk9rbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZOMFEwUmpGQk5VSkJOakEzTVRGRk9VRkVRakk0TnpsR09VSkJSVEUwTWpjaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVORElESXdNVGtnS0ZkcGJtUnZkM01wSWo0Z1BIaHRjRTFOT2tSbGNtbDJaV1JHY205dElITjBVbVZtT21sdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNlpXVmlOV1JoWXpndE5HTTFPUzFoTWpRMExUbGtZVGN0WTJRME1ESXpZVE5sTWpJeklpQnpkRkpsWmpwa2IyTjFiV1Z1ZEVsRVBTSjRiWEF1Wkdsa09qTTVOR1l3WkdNekxXWTJOell0T1RBME55MDVNak0yTFdFeFlqWmxaRGMwWmpSbVlTSXZQaUE4TDNKa1pqcEVaWE5qY21sd2RHbHZiajRnUEM5eVpHWTZVa1JHUGlBOEwzZzZlRzF3YldWMFlUNGdQRDk0Y0dGamEyVjBJR1Z1WkQwaWNpSS9QbFMrenM4QUFBczFTVVJCVkhqYXhGa0pjQlJsRnY2NjV6NHltU1JNTG5JaEFWazVJZ25uZ29VY3JnV2xxMnVoZTZONDFLS2doYTZGQ0M2N0s1N0FvcUtVS0tpMXF4YXlzRklxRkpDRWF3TkJNQmdnTEFSeWtUQkpKc2NrazdsN2VxWjdYM2RtMkhaTVNGUnd1M2pWVFhmUC8zL2ZlOTk3Ny84N0RMNy93UXppSFJIWDhXQit3RzhZaFNudml3T2NyeGtwNW51OHo5anRMVmxwYWFscnVycUN0MmcwYkZ0Q2dxYVc1L202UUNCUTcvVjZHOXJiMngyblRwM3FlT1NSUjNyb2ZVRUJXTHlXcEpqdkNuei8vb1BHR1ROdStlajBtZmE3bHE4b2dUVlJqMUdqYk1qTnNTSTcyOEpuWkppNjA5Sk1qaVNydm9NSTJjUGhjQjNIY1plSm1MMmxwYVY1NjladHJSczJ2QjY4RnFTK0szaVdnS3p5QjRSVkR6eTBFN3QyWFlBbFFRK0dubWkxS3BoTVdsaXRldGhzSmlLU2lMeGNLMjRZWmtWdWJwSi9hSmJabFRyRTFLTlNvWk1JWFNKaTlUUldVNCtycDY2dXZ2SHl3b1VMSEsydExVS1VWRHladnNnTkdyd012THZiUFZlbk4zejgvT3BEbGpmZVBJYTBWRE5ZbGtFa0lrWk5RRVFRSVFxOWN6RU1LNU15bTN0SlphWW5JQ2MzRWZuRGs1R2ZueExKenJFRU05TE1Qb3RGNnhZRW9ZMUkxVXVrZ3NGZ25kUHBxbjc4OGNYbjl1OHY1YU9BaFhnaXpHRGxVbHZia0pPYm0vTzV2ZGs3OXBubCszQyt1Z01lZHhCQlRvQW9paklKbFlvbDYvMkpGQTI2RFlHSVNDYTkwMHRNZWl5Q2NvV2lwb010MVlROGt0eHdJalJ5NUJBTUg1WWNTVTgzaDVPU2pMemY3MzRyTFMzbFJmcEZKR3JmaUF3ekdPRHIxcTNYTFZxMCtCMlZTdnQ3Q1JUTEN1am84S1A2UWlmT25tM0RtYW8yMURkMHdlbjBvNnNyZ0hCWUFpb1FBUVpxRlptYWxZbkZDTW14Snhia2JmbGRudSs5WmxpS2xJYUIzcURCcG8zM3dUYWtQVFIrZkdFbXZSNG00NlBuS3dUVWcvSDh3dzh2ZWtpdDFzeVhKdTQxRnBtWlp0VFVkS0t4eVlWWFhycU5aS0hEd1lNTjZPNEo0dlFwQjg2ZDY0Q3p1NWRNWjZjZm9WQ0l3QUVhZGErVUpFSnF0Wm9NME90cEVrYUtEb08yTmcvR2pCbUtDUlBTOE55SzU2VTRHc2c0QlI0K2RxRWVTT2ZOelk3Sk9wM3VHUnJZRUhzZ1NZUG5JM2gzU3dVY0RpL2NuaUMyYjYrQ1NxMmlaRFZqeXRSc3ZQakNiSlNYWDBiMXhVNjQzUnlxempnb090MXdFRGluTTRCZ01Fd1JsQkpkRFoxT0xSTUtCRUlndVdETnl6L0hzZkxQY2FuUnZqOEtIZ3JkUndieXZDeVhzcktqS1VsSktTOFFoNndyRDVoZThKL3V2SUFHQXJQMGlhblk5TTVYMEJNSWpvdmdyWTNIOGVTVFU3SHg3Uk00Y3FRUlBSU0pYOXc5R20rK01ROWVMdzk3aXhzWGlORFhKMXR3Z1dSWGY2a2I3ZTArZEx1SUVJRmZ0bXdPVlNjT0sxZHVjWVhEd2xhYVVxZVFEUnMxcGovUHk4Q1hMSGxjVTFCUXVKUmgxRE9WRDdWYXdHNTNZOE9HWTJCSnh3Y09YY0p0czI4Z2ozcngwY2VuOGVkVk0zSDBhQ1AySDZpWDVmUjFwUU0rUHc4amxkSGErbTU4K09FcGpCbWRocitzbWdXdmo2UEkrZEJBQkNwUHRaSzhnbGk4YUNJMmJWcEwwVEIrVVZxNnEwWUtkTlRZd1JRWTZRVlZWNWY3N2dBbitvTmhVUXp5b2hnSWlDSVhwR3U2c2VTSjNTSlVxOFFISDk0cDF0VjNpZTl1cmhBTHhtOFVTMHJxeEpaV2o1aHNlMFdjODdPL2l5RXVJa29IZVZCODc3MlQ0dGh4YjRvcTdTcHgyZkppTWY0Z0dZcCtmMWc4ZHV5b09HM2E5Sm9wVTZiOGxuQk1JN3VaYkFSWkJwazFLaVBKNlZJS2ZkdnJEUTFOZVFhemFRM3ZLRGI0S3g0RjM3cVhTcHlieWxzRVg1OXg0ZURoWnJ6Njh1MzQyN3E1MkxuelBOYS9WbzdYMXMvRm5EazN3R0xSWWV6WVZKeXJicGZMS1FISDhoWEZLQ210aGRHb1FVRkJCcFlzbmlSUEZnaUF0RS9aeUVHdVJ1R3dqN3kraFU5TVRQajh5eSsvYkZQVTlHK1Z5WGpaeU1EWHJsMnZzMlZrcklrRW1rWUVxcDVHcExzS1hPTVdxTXdqd2FYZGpoSFdXZGk3Y3hheThuS3c5NEFUWCt5NWpOZGZ1eFBseHk3TGNzclBUNFpBZ0crYm5ROS9JQXlLZ0V4bS92d3hXUHJVSHF6KzZ5eGtaeVhLb0JtRkNLVHJ6ejc3QXZYMWRSVW5UMVljakFLT2FiMnZPdi9ORmVJSEgvekRjTTg5OHgvVDZ2aFhmUldQTWFHbWo4SHFTT1JpaFA1RjVLRllEWlcyNUxFUXJiUEJHYWZEbEZFSW5TVVhUejl6SENVbHRUQWJCZnprUmd0RzN6UUV1L2ZXb0wzVml3bVRzK1R5bVVmZGRmcy9mMFZlVmxIcC9COTREWTNaMm1ySGdnWDN1K2plQ3djT0hEaER0LzFrUGpKdjlCeUlsa3crUmtJSm5uWDErUDZnTXhoV2N6VnZKUHUvZWhJTTRXYW9FMUptOXZZejZTMkJKOCtLc2g4MFZBZlVpV1BCSmsySE1XTW1hanBHUWpUa2dRdWJzR2J0UWR3MUw0c2lrSWRmL3VZVHVXenVMMW1JcVZPeVpibkVnRXRuSFkzejdMTXJjZnAwNVk0OWUvYThGd1hxVndDWHJxWEZYS2kvVXNubzlZYWxhaldUSExHTWduYmtRa1E2anlEaXFTSE0xUDAwVWhwckpEYXk5NkdSdW1nWWZHY1Z4RFpKV3U5Z2VIb2hXSDBSUE93VXZQWFNGS1JranBKbkdaWS9EQk1uNXNuQUpYM0hnRXNOVDJwUXg0K2Z3TjY5ZTVwQ0llN1RxR2REVVM5ejBXdGVDVHBlTmxMaXFoeU96dFdVK0E4bTI0YllxR2VBYy8wSFFjY1JTdGpQaUVncHhCQ05JZUdYU0Z3SldHKy9GeWtpWXJqM3Z4cTlEdnJFRVFnYnhwQzhac0N0SWlMWk4wTnZKQVJoV1lYeUdrY3F1d0k1NEw3NzVvdlV3ZGZzMkxIam9FSXVQb1hYT1lYWHI0QlhLWFpEVkI2ZEZkM2RYVWRiVzVwNU1PcE1pMjJVMlp3K0FicWhjNkd5elNPdjJpQUcyeUVFTytUWnBaWWVLMWdNb3lKU1pOVDJCU0xDZWRzUjdqa0xnVWhiK1dLSXJrUGdQQjBVTlF1RmVJZzhvNVo4c0huelp2TDg4ZkxEaHc5dnBWVmxJQ3FQWUZRNk1hbUU0NEhIYitVa0NXbWxqcGFabVdrcEtpckt2ZlhXbWZNbVRKeDQ1MDJqeDQ5SVRqS3BKTmVHL0U3dzdhWGdtclloM1Bsdkd0Wk4rRVhJdlo2Sjd5UFNzakxTdTBTV3BtUzFSQzRCckxVSVF5YXRRMTFIS2hZdW1PL1c2L1VyUzB0TEwvVGhkV1dTZmd1OEtvNkEzTWs4SGc5ejhlTEZRSEh4dm5QRisvYVZ0RFEzMXZoOWZyMU9aMG8wVzlOMVJ0dk5qQzd2MTlDbXp5T3FWZ2ljaTZhZzNCSTRlYlVvYXpwR2hNNE1LMFZGV2xYU2VqL29nODZRRE8yTmoyTGxjNitDWmNMYlNrcEt5aUtSaU5MalNxL3pmV3hRcm9CWFJvQ05JOE1Ra1hCRlJjVmxTWTkyZTlNcG45Y1RvUEFtR0hSNmt5bGxtTXFZTVJ1Nm5BZkFXRzZra2VubklSOUVucmF1a2Q3OGtwYTVWNFlqZlROcUEyd3p0bUQzWVRlMmY3TGxJdTEzMzZmdFlVOGZ3TG4rNUJJUFBuNWp3dlN4a290VVYxZDM3TjY5cTZLeXN2S28wK2xzODNtOXRMeFJXOHlKU1RxVHJRREduSHZCcHM2bTNNaUJKREdSSWlLR0FsSld5b0VRYUxlVk5QSitlRk1XNDA4ci9zaHBWTXo3Ujh2THowV0JLb0VIb3g1WGVoMzlnV2Y2K2VZU1VZS1BXV3RycTZlc3JPeDhTVWx4bWJPcnM3YTd5eGtJaFhpejBXaTJKQ1RuUXA4MkhlcWhkNU8ySjFCbFRTWWVYb2krRHFoTW1VaWN2aFZ2Yjk2RzA1VW55cXFxcXY3bDkvc0QvWGlkdjVyWCsvSTJvMWgyeGxaemFvVnBGSW10VWRvZGQ5d3hvckN3YU5Ma1NaT21qeGszYm14bVZoYlVOSnJVejRMZDV4RnhsQ0xCbG9jYVR5RWUrTjI5blVhRDRYbnFwT2VqZ0dPZDFCKzEwR0RBcTY3eXBVdUlzNGhpR3haVzZGRTJTbkFubGJ1ekpLMFRGNnFycXpyYk94aU5ScE5oc2FTb3paWTA2RzJUMGViUHdMS25sZ2dlZDg4T2l0eWhxSWVWWHVjR1N0TEJmUHBnNGl3K0dxcUJvcEdlbnBGUVZGU1kvZE9wMCthTUt5aVlZYmZiVTdmdjJCSDJlbnAyRTlFUFhDNlhUN0VNVUM0QnVMaTk2dmYrNk1SY1JWTHNZRWhFVGJtaGlFVXVwUEM0ZjZDYTN0Y3gwQVk4L3F1VnN2ckV3SWVqWno1NkRzVVJVU3NJTUlwQ0VGSlVGcTYvOWN2MS9OREtLcHZiVlNTbFZyd1RBNjljZ0lVVXk0RHJDdjVxa21MaThrS2xBSzcwdktBZ3dNY1ZnRUVCLzZIZ0I1UGd5dnhnNDVwZkpNNkVxeldrNndsK29HakV3Q3NQSVE2dzhGMC9jMTlyOEgyUlFCOS9oQmp3Qy9EL0UveVA4dWVmL3dvd0FHcTZ1R3VYdFllTEFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVhjQUFBSS9DQU1BQUFDNy9XbFFBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQ0JqU0ZKTkFBQjZKZ0FBZ0lRQUFQb0FBQUNBNkFBQWRUQUFBT3BnQUFBNm1BQUFGM0NjdWxFOEFBQUIrMUJNVkVXOHZMeW5wNmRqWTJNME5EUVZGUlVIQndjRkJRVVRFeE15TWpKa1pHU21wcVk2T2pvQUFBQVNFaEpQVDAreXNySktTa29EQXdNQ0FnSkZSVVdxcXFxc3JLeWZuNThZR0JnUER3K09qbzZKaVlta3BLUUVCQVF1TGk1TFMwczNOemNKQ1FtVWxKUXBLU2xuWjJlN3U3c3ZMeTgvUHo5VlZWVzF0Yldob2FHYm01c1dGaFpOVFUyd3NMQjdlM3RPVGs1cWFtcG9hR2hEUTBNR0JnYVptWmtpSWlKM2QzY29LQ2dkSFIyNHVMZ3RMUzBlSGg1dmIyOXpjM04wZEhROFBEeWFtcHE1dWJrQkFRR3ZyNitUazVPNnVyb21KaVlORFEycnE2dDRlSGdsSlNWVFUxTkhSMGVSa1pGcGFXbDJkblpXVmxaSVNFZ3pNek5zYkd4TVRFd3dNRENqbzZNS0Nnb09EZzRnSUNCQ1FrSVJFUkdQajQ5dWJtNkZoWVZtWm1aeWNuS1dscGFNakl3akl5TVVGQlJhV2xxVmxaV1ltSmhaV1ZrWkdSbUxpNHVkbloweE1UR0tpb3FEZzRNN096c3FLaXAvZjMrdXJxNE1EQXlwcWFsZFhWMUVSRVI1ZVhtbHBhV0FnSUJRVUZDZW5wNTlmWDIzdDdkaFlXR0Nnb0o2ZW5vbkp5ZXRyYTFBUUVBMU5UVWJHeHNRRUJBa0pDU2lvcUo4Zkh3YUdocDFkWFZlWGw2MnRyYVhsNWR4Y1hGSlNVbWNuSnhjWEZ3Zkh4K0JnWUU0T0RnaElTRlNVbEk5UFQyRWhJU1NrcEpZV0ZoZ1lHQ3hzYkVJQ0FpSWlJaEJRVUdIaDRjckt5dHdjSENHaG9aWFYxYzJOamFRa0pEKy92NFpHcncxQUFBQUFXSkxSMFNvVUFnMmtnQUFCcGRKUkVGVWVOcnQydmw3Vk5VWkFPQUVDVm83RU1BWWdnUVFpQnFvQ0pHSUJBUkxJSkJXVU5sRWJMRnN4YVZpTGRxV3BZQ2xxSzFJNjlLTjdvdHQvODNlYjlZN1M1aVpTOXJubVhuZTk1ZmM3NXo3NVh2dW1ibG56cmt6UFQwQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVA5WHZYUHVtZHMzNzk3N3ZuSi9xdkdydVVibWxicm4xL1lzYUZwbWhwVFpMOVFaK2hjdUtsM1M0Z2NHV2h6M0IzTnREOGRNS2JOZXFETU1Ma2xmMU5EUzFzYjlvZmFIWTZhVVdTL1VFWmJkRzljeXZIekZncFVQeDFIZnFqdU8rK3BpNzVyMmgyT21sRmt2MUFsR0hvbExlYlEzanZzZmkrTWxvNFdlZ2JYVjFzVjk4YlhTUFBSQUVqemVtN2ErV2FtWlVtYTlVQ2Q0SW9aNlF5bmFHTkZZNHpPZlRMbzJqWmVpcDVKb2MzdWxXazI1NjBLZDRPbmtzclpNbE1PdFNiaXQ0WW5QeEV2eVRDbWFHRTZpZFcxVmFqWGxyZ3QxZ21WeGtkc3I4WTZJSDJ4dzRtQmYwdkZzT2Z4NmZQTHRiS3RVaXlsM1g2Z1R4RGhQN3FyRXUyUGNWOVdmTjdVbmFkODdYWTYva1lUZmJLOVVheW16VUtnVGpLN2E4ZHkrVkx3L3huMTMvWG5QUi9zTGxmakZKRHpRWHFuV1VtYWhVQ2ZLenpQVGRjMjlzY1Jjbm1vNG1NU0hHdVFmanZ3akkrWDRwYU5KL0hMdm5WS3lGZW95eTVQTFBGYmYvRXBNUitPcGhtOGxEZDl1a0QrNkpRYitlQ25jdVRvU1g3MWpTclpDM2VVN01Xb242cHBQVGliTmgxTU4wekU4L1QybkZwemVPM3htOVhmUFZucGVpL1hIdzh1SzBldngvMTVza3BLdFVCY1oyQmZEOU1oVVhjZVIyTWVtWjUvWXZML3g1bFBsTGVUSzc1Vzc4dnZMdHdvenpha1l4dFVUelZLeUZlb0tJK2ZlM3ZqOWVLdm0zdGxWMTdtMDhxNHRpdnRpWG5ydjN2ZUQ4bis2cjd6K1BuOG1PWHAzV2RPVWJJVzZ3bnVseS9yaFJIM25XMG5IMGZQcGxoOFZUNStjdjJWdjhlakhwYjZCb1RqOVFrL3h3Y3ZGRmxLeUZlb0crNHZYTi8vUzVicStzOUh4V0ZWVDRjYmYrcE1yeWZIYXEva1IyVlNlZTY5RmVFOVB6L0g0ZTZtbGxHeUZ1c0Q3NVJ0NWNzR1ZtcjU0TXJVby9ZMUlZZk0rWEY3ZXZSY1BHM0kvTFhjL0h1SG15N0h4M0RQUldrcTJRcDF2L056QXhQVnpDL016L01IcXFlWjZ6SzgvcTJvYXVMRmxVM3B6cy82RHlMdFdDa2UzSmRHSEg4V2s4Zk1XVTdJVjZocnIzcWo3Wk9zWmk2YWx0V2VPWEU5SDUrS2NKOHZoK0hEeDV2bEZ5eW5aQ25XTkN4L0d2WDRoM1JUdjI0OUhtdVFkUzA0YXFwdzBWaGoydzIya1pDdlVOVzdHZUgyU2FyZ2NEVmVicFQwWFoxVldvQ094dmM5OWZLdU5sR3lGdXNiT2QrTUJTNnJoYWx6b3NtWnArYlhMWURrc2pQdndMOXRJeVZhb2U2eE1ybXR1S240bmlVODN6Y3F2aDE0cmg4VjVac3RvNnluWkNuV1BBN0VNcVlTN0ptdm1uY1orRmNOUlhnS09sN2FZQzF0T3lWYW9ZMTJjOCttUkhWVXRqMWEvM3kvR2RkWitFZkxabTA4Y2VyV3E1ZlA0T0M1TjU2TmZ4QTVzWVdUK3VzV1ViSVU2MStua01uNVQxZkxicE9YcFN2aTdlSGhRKyt3Z1Z0SExxMXFPcExNMnhCQytmU3NlQ2I4ODBGcEt0a0tkYTE4OGQwby9FWG1wWnE4ZVg3dHRyYzM2Zlh4b3B0ZlZGK0lYWjY4WGc5dnhML2IxOVB3aFpvNkRJNjJrWkN2VXdhN1ZMaHZqUnhTNS9lVXd2MUgvWTIzVzlqanBUNm1HZVBrV0Y5Y2krZWRpYy8vY1UvaU9McmVtaFpSc2hUclp6bmhVMi9kWk9UNlJxNzZ6eHh2dXkvdmoyN2kvVko2Z3ZaRGFSWTdjaU9DdmNaaWZhWWJIbTZaa0s5VFo4cjliT25PeUVFek5pYWxoT0xWTTJ4emRhK3V5OHQ5THpTMW1qWXhGMWxCeE9zai85R2xGNFhqMzR1VDRpOUZtS2RrS2RiaS81WGM0Ky81Ky8vVDR4bTM1eFYvNjExbWZSRVA5OG1IblAvSlpCeDZhN2gvOFozdzI1eFovV2VoWkYwdklKZjNGOC80VlhSdWFwR1FyMU9rbS9wMnJzdWg0dWpjZXpRNDF5RnIvVVhYVzhQdUY5bHZ4L0dUeVZPbTBLL2xYOHZZZFU3SVY2bnhUbjArbXJtdkpmNm82NDBYWjB5aHJkRVd1VWRhbGlDNVZUanNiTTgzUTlKMVNzaFhxQm9PZkhpMWMxZVNlN1RVcjZMak5uMjJjZGZLVnZ1SmdIRHRVK3Fya3l3Zy9TRDhkeVAraTRNYkl6Q25aQ25XSnFkMDMxOHc1Y2Z0OGUxa1R1MitPWFgzK1l1Ly9OaVZ6RmdBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBSGV1LzRpQlc5ZDZsclNzQUFBQWxkRVZZZEdSaGRHVTZZM0psWVhSbEFESXdNVGt0TURjdE1qWlVNREk2TlRJNk5ETXRNRFU2TURCWVdxRWJBQUFBSlhSRldIUmtZWFJsT20xdlpHbG1lUUF5TURFNUxUQTNMVEkyVkRBeU9qVXlPalF6TFRBMU9qQXdLUWNacHdBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVhjQUFBSS9DQU1BQUFDNy9XbFFBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQ0JqU0ZKTkFBQjZKZ0FBZ0lRQUFQb0FBQUNBNkFBQWRUQUFBT3BnQUFBNm1BQUFGM0NjdWxFOEFBQUIrMUJNVkVXOHZMeW5wNmRqWTJNME5EUVZGUlVIQndjRkJRVVRFeE15TWpKa1pHU21wcVk2T2pvQUFBQVNFaEpQVDAreXNySktTa29EQXdNQ0FnSkZSVVdxcXFxc3JLeWZuNThZR0JnUER3K09qbzZKaVlta3BLUUVCQVF1TGk1TFMwczNOemNKQ1FtVWxKUXBLU2xuWjJlN3U3c3ZMeTgvUHo5VlZWVzF0Yldob2FHYm01c1dGaFpOVFUyd3NMQjdlM3RPVGs1cWFtcG9hR2hEUTBNR0JnYVptWmtpSWlKM2QzY29LQ2dkSFIyNHVMZ3RMUzBlSGg1dmIyOXpjM04wZEhROFBEeWFtcHE1dWJrQkFRR3ZyNitUazVPNnVyb21KaVlORFEycnE2dDRlSGdsSlNWVFUxTkhSMGVSa1pGcGFXbDJkblpXVmxaSVNFZ3pNek5zYkd4TVRFd3dNRENqbzZNS0Nnb09EZzRnSUNCQ1FrSVJFUkdQajQ5dWJtNkZoWVZtWm1aeWNuS1dscGFNakl3akl5TVVGQlJhV2xxVmxaV1ltSmhaV1ZrWkdSbUxpNHVkbloweE1UR0tpb3FEZzRNN096c3FLaXAvZjMrdXJxNE1EQXlwcWFsZFhWMUVSRVI1ZVhtbHBhV0FnSUJRVUZDZW5wNTlmWDIzdDdkaFlXR0Nnb0o2ZW5vbkp5ZXRyYTFBUUVBMU5UVWJHeHNRRUJBa0pDU2lvcUo4Zkh3YUdocDFkWFZlWGw2MnRyYVhsNWR4Y1hGSlNVbWNuSnhjWEZ3Zkh4K0JnWUU0T0RnaElTRlNVbEk5UFQyRWhJU1NrcEpZV0ZoZ1lHQ3hzYkVJQ0FpSWlJaEJRVUdIaDRjckt5dHdjSENHaG9aWFYxYzJOamFRa0pEKy92NFpHcncxQUFBQUFXSkxSMFNvVUFnMmtnQUFCcGRKUkVGVWVOcnQydmw3Vk5VWkFPQUVDVm83RU1BWWdnUVFpQnFvQ0pHSUJBUkxJSkJXVU5sRWJMRnN4YVZpTGRxV3BZQ2xxSzFJNjlLTjdvdHQvODNlYjlZN1M1aVpTOXJubVhuZTk1ZmM3NXo3NVh2dW1ibG56cmt6UFQwQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVA5WHZYUHVtZHMzNzk3N3ZuSi9xdkdydVVibWxicm4xL1lzYUZwbWhwVFpMOVFaK2hjdUtsM1M0Z2NHV2h6M0IzTnREOGRNS2JOZXFETU1Ma2xmMU5EUzFzYjlvZmFIWTZhVVdTL1VFWmJkRzljeXZIekZncFVQeDFIZnFqdU8rK3BpNzVyMmgyT21sRmt2MUFsR0hvbExlYlEzanZzZmkrTWxvNFdlZ2JYVjFzVjk4YlhTUFBSQUVqemVtN2ErV2FtWlVtYTlVQ2Q0SW9aNlF5bmFHTkZZNHpPZlRMbzJqWmVpcDVKb2MzdWxXazI1NjBLZDRPbmtzclpNbE1PdFNiaXQ0WW5QeEV2eVRDbWFHRTZpZFcxVmFqWGxyZ3QxZ21WeGtkc3I4WTZJSDJ4dzRtQmYwdkZzT2Z4NmZQTHRiS3RVaXlsM1g2Z1R4RGhQN3FyRXUyUGNWOVdmTjdVbmFkODdYWTYva1lUZmJLOVVheW16VUtnVGpLN2E4ZHkrVkx3L3huMTMvWG5QUi9zTGxmakZKRHpRWHFuV1VtYWhVQ2ZLenpQVGRjMjlzY1Jjbm1vNG1NU0hHdVFmanZ3akkrWDRwYU5KL0hMdm5WS3lGZW95eTVQTFBGYmYvRXBNUitPcGhtOGxEZDl1a0QrNkpRYitlQ25jdVRvU1g3MWpTclpDM2VVN01Xb242cHBQVGliTmgxTU4wekU4L1QybkZwemVPM3htOVhmUFZucGVpL1hIdzh1SzBldngvMTVza3BLdFVCY1oyQmZEOU1oVVhjZVIyTWVtWjUvWXZML3g1bFBsTGVUSzc1Vzc4dnZMdHdvenpha1l4dFVUelZLeUZlb0tJK2ZlM3ZqOWVLdm0zdGxWMTdtMDhxNHRpdnRpWG5ydjN2ZUQ4bis2cjd6K1BuOG1PWHAzV2RPVWJJVzZ3bnVseS9yaFJIM25XMG5IMGZQcGxoOFZUNStjdjJWdjhlakhwYjZCb1RqOVFrL3h3Y3ZGRmxLeUZlb0crNHZYTi8vUzVicStzOUh4V0ZWVDRjYmYrcE1yeWZIYXEva1IyVlNlZTY5RmVFOVB6L0g0ZTZtbGxHeUZ1c0Q3NVJ0NWNzR1ZtcjU0TXJVby9ZMUlZZk0rWEY3ZXZSY1BHM0kvTFhjL0h1SG15N0h4M0RQUldrcTJRcDF2L056QXhQVnpDL016L01IcXFlWjZ6SzgvcTJvYXVMRmxVM3B6cy82RHlMdFdDa2UzSmRHSEg4V2s4Zk1XVTdJVjZocnIzcWo3Wk9zWmk2YWx0V2VPWEU5SDUrS2NKOHZoK0hEeDV2bEZ5eW5aQ25XTkN4L0d2WDRoM1JUdjI0OUhtdVFkUzA0YXFwdzBWaGoydzIya1pDdlVOVzdHZUgyU2FyZ2NEVmVicFQwWFoxVldvQ094dmM5OWZLdU5sR3lGdXNiT2QrTUJTNnJoYWx6b3NtWnArYlhMWURrc2pQdndMOXRJeVZhb2U2eE1ybXR1S240bmlVODN6Y3F2aDE0cmg4VjVac3RvNnluWkNuV1BBN0VNcVlTN0ptdm1uY1orRmNOUlhnS09sN2FZQzF0T3lWYW9ZMTJjOCttUkhWVXRqMWEvM3kvR2RkWitFZkxabTA4Y2VyV3E1ZlA0T0M1TjU2TmZ4QTVzWVdUK3VzV1ViSVU2MStua01uNVQxZkxicE9YcFN2aTdlSGhRKyt3Z1Z0SExxMXFPcExNMnhCQytmU3NlQ2I4ODBGcEt0a0tkYTE4OGQwby9FWG1wWnE4ZVg3dHRyYzM2Zlh4b3B0ZlZGK0lYWjY4WGc5dnhML2IxOVB3aFpvNkRJNjJrWkN2VXdhN1ZMaHZqUnhTNS9lVXd2MUgvWTIzVzlqanBUNm1HZVBrV0Y5Y2krZWRpYy8vY1UvaU9McmVtaFpSc2hUclp6bmhVMi9kWk9UNlJxNzZ6eHh2dXkvdmoyN2kvVko2Z3ZaRGFSWTdjaU9DdmNaaWZhWWJIbTZaa0s5VFo4cjliT25PeUVFek5pYWxoT0xWTTJ4emRhK3V5OHQ5THpTMW1qWXhGMWxCeE9zai85R2xGNFhqMzR1VDRpOUZtS2RrS2RiaS81WGM0Ky81Ky8vVDR4bTM1eFYvNjExbWZSRVA5OG1IblAvSlpCeDZhN2gvOFozdzI1eFovV2VoWkYwdklKZjNGOC80VlhSdWFwR1FyMU9rbS9wMnJzdWg0dWpjZXpRNDF5RnIvVVhYVzhQdUY5bHZ4L0dUeVZPbTBLL2xYOHZZZFU3SVY2bnhUbjArbXJtdkpmNm82NDBYWjB5aHJkRVd1VWRhbGlDNVZUanNiTTgzUTlKMVNzaFhxQm9PZkhpMWMxZVNlN1RVcjZMak5uMjJjZGZLVnZ1SmdIRHRVK3Fya3l3Zy9TRDhkeVAraTRNYkl6Q25aQ25XSnFkMDMxOHc1Y2Z0OGUxa1R1MitPWFgzK1l1Ly9OaVZ6RmdBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBSGV1LzRpQlc5ZDZsclNzQUFBQWxkRVZZZEdSaGRHVTZZM0psWVhSbEFESXdNVGt0TURjdE1qWlVNREk2TlRJNk5ETXRNRFU2TURCWVdxRWJBQUFBSlhSRldIUmtZWFJsT20xdlpHbG1lUUF5TURFNUxUQTNMVEkyVkRBeU9qVXlPalF6TFRBMU9qQXdLUWNacHdBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsImRlY2xhcmUgY29uc3QgX19ORVhUX0RBVEFfXzogYW55XG5cbmltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwYXJzZSwgcmVzb2x2ZSwgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUHJlZmV0Y2hPcHRpb25zIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgUm91dGVyIGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgYWRkQmFzZVBhdGggfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcblxuZnVuY3Rpb24gaXNMb2NhbChocmVmOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgdXJsID0gcGFyc2UoaHJlZiwgZmFsc2UsIHRydWUpXG4gIGNvbnN0IG9yaWdpbiA9IHBhcnNlKGdldExvY2F0aW9uT3JpZ2luKCksIGZhbHNlLCB0cnVlKVxuXG4gIHJldHVybiAoXG4gICAgIXVybC5ob3N0IHx8ICh1cmwucHJvdG9jb2wgPT09IG9yaWdpbi5wcm90b2NvbCAmJiB1cmwuaG9zdCA9PT0gb3JpZ2luLmhvc3QpXG4gIClcbn1cblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgRm9ybWF0UmVzdWx0ID0geyBocmVmOiBzdHJpbmc7IGFzPzogc3RyaW5nIH1cblxuZnVuY3Rpb24gbWVtb2l6ZWRGb3JtYXRVcmwoZm9ybWF0RnVuYzogKGhyZWY6IFVybCwgYXM/OiBVcmwpID0+IEZvcm1hdFJlc3VsdCkge1xuICBsZXQgbGFzdEhyZWY6IG51bGwgfCBVcmwgPSBudWxsXG4gIGxldCBsYXN0QXM6IHVuZGVmaW5lZCB8IG51bGwgfCBVcmwgPSBudWxsXG4gIGxldCBsYXN0UmVzdWx0OiBudWxsIHwgRm9ybWF0UmVzdWx0ID0gbnVsbFxuICByZXR1cm4gKGhyZWY6IFVybCwgYXM/OiBVcmwpID0+IHtcbiAgICBpZiAobGFzdFJlc3VsdCAmJiBocmVmID09PSBsYXN0SHJlZiAmJiBhcyA9PT0gbGFzdEFzKSB7XG4gICAgICByZXR1cm4gbGFzdFJlc3VsdFxuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGZvcm1hdEZ1bmMoaHJlZiwgYXMpXG4gICAgbGFzdEhyZWYgPSBocmVmXG4gICAgbGFzdEFzID0gYXNcbiAgICBsYXN0UmVzdWx0ID0gcmVzdWx0XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVybCh1cmw6IFVybCk6IHN0cmluZyB7XG4gIHJldHVybiB1cmwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwpIDogdXJsXG59XG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxuXG5sZXQgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAob2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gb2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5jbGFzcyBMaW5rIGV4dGVuZHMgQ29tcG9uZW50PExpbmtQcm9wcz4ge1xuICBwOiBib29sZWFuXG5cbiAgY29uc3RydWN0b3IocHJvcHM6IExpbmtQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAocHJvcHMucHJlZmV0Y2gpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcbiAgfVxuXG4gIGNsZWFuVXBMaXN0ZW5lcnMgPSAoKSA9PiB7fVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycygpXG4gIH1cblxuICBnZXRQYXRocygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gd2luZG93LmxvY2F0aW9uXG4gICAgY29uc3QgeyBocmVmOiBwYXJzZWRIcmVmLCBhczogcGFyc2VkQXMgfSA9IHRoaXMuZm9ybWF0VXJscyhcbiAgICAgIHRoaXMucHJvcHMuaHJlZixcbiAgICAgIHRoaXMucHJvcHMuYXNcbiAgICApXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZShwYXRobmFtZSwgcGFyc2VkSHJlZilcbiAgICByZXR1cm4gW3Jlc29sdmVkSHJlZiwgcGFyc2VkQXMgPyByZXNvbHZlKHBhdGhuYW1lLCBwYXJzZWRBcykgOiByZXNvbHZlZEhyZWZdXG4gIH1cblxuICBoYW5kbGVSZWYocmVmOiBFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMucCAmJiBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJiByZWYgJiYgcmVmLnRhZ05hbWUpIHtcbiAgICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycygpXG5cbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICAgIHByZWZldGNoZWRbXG4gICAgICAgICAgdGhpcy5nZXRQYXRocygpLmpvaW4oXG4gICAgICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICAgICAgJyUnXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMgPSBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMocmVmLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wcmVmZXRjaCgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gVGhlIGZ1bmN0aW9uIGlzIG1lbW9pemVkIHNvIHRoYXQgbm8gZXh0cmEgbGlmZWN5Y2xlcyBhcmUgbmVlZGVkXG4gIC8vIGFzIHBlciBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbFxuICBmb3JtYXRVcmxzID0gbWVtb2l6ZWRGb3JtYXRVcmwoKGhyZWYsIGFzSHJlZikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBocmVmOiBhZGRCYXNlUGF0aChmb3JtYXRVcmwoaHJlZikpLFxuICAgICAgYXM6IGFzSHJlZiA/IGFkZEJhc2VQYXRoKGZvcm1hdFVybChhc0hyZWYpKSA6IGFzSHJlZixcbiAgICB9XG4gIH0pXG5cbiAgbGlua0NsaWNrZWQgPSAoZTogUmVhY3QuTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHsgbm9kZU5hbWUsIHRhcmdldCB9ID0gZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gICAgaWYgKFxuICAgICAgbm9kZU5hbWUgPT09ICdBJyAmJlxuICAgICAgKCh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgICAgICBlLm1ldGFLZXkgfHxcbiAgICAgICAgZS5jdHJsS2V5IHx8XG4gICAgICAgIGUuc2hpZnRLZXkgfHxcbiAgICAgICAgKGUubmF0aXZlRXZlbnQgJiYgZS5uYXRpdmVFdmVudC53aGljaCA9PT0gMikpXG4gICAgKSB7XG4gICAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIG5ldyB0YWIgLyBuZXcgd2luZG93IGJlaGF2aW9yXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgeyBocmVmLCBhcyB9ID0gdGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy5hcylcblxuICAgIGlmICghaXNMb2NhbChocmVmKSkge1xuICAgICAgLy8gaWdub3JlIGNsaWNrIGlmIGl0J3Mgb3V0c2lkZSBvdXIgc2NvcGUgKGUuZy4gaHR0cHM6Ly9nb29nbGUuY29tKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gd2luZG93LmxvY2F0aW9uXG4gICAgaHJlZiA9IHJlc29sdmUocGF0aG5hbWUsIGhyZWYpXG4gICAgYXMgPSBhcyA/IHJlc29sdmUocGF0aG5hbWUsIGFzKSA6IGhyZWZcblxuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gICAgbGV0IHsgc2Nyb2xsIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gICAgfVxuXG4gICAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gICAgUm91dGVyW3RoaXMucHJvcHMucmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICAgIHNoYWxsb3c6IHRoaXMucHJvcHMuc2hhbGxvdyxcbiAgICB9KS50aGVuKChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHByZWZldGNoKG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnMpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucCB8fCB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gICAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAgIGNvbnN0IHBhdGhzID0gdGhpcy5nZXRQYXRocygpXG4gICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAgIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAgIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICAgIFJvdXRlci5wcmVmZXRjaChwYXRoc1svKiBocmVmICovIDBdLCBwYXRoc1svKiBhc1BhdGggKi8gMV0sIG9wdGlvbnMpLmNhdGNoKFxuICAgICAgKGVycikgPT4ge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgICAgICB0aHJvdyBlcnJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIClcbiAgICBwcmVmZXRjaGVkW1xuICAgICAgcGF0aHMuam9pbihcbiAgICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgICAgJyUnXG4gICAgICApXG4gICAgXSA9IHRydWVcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgaHJlZiwgYXMgfSA9IHRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMuYXMpXG4gICAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgICB9XG5cbiAgICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgICBjb25zdCBwcm9wczoge1xuICAgICAgb25Nb3VzZUVudGVyOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICAgIGhyZWY/OiBzdHJpbmdcbiAgICAgIHJlZj86IGFueVxuICAgIH0gPSB7XG4gICAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlUmVmKGVsKVxuXG4gICAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbk1vdXNlRW50ZXI6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmVmZXRjaCh7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgICB9LFxuICAgICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgICB9XG4gICAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgdGhpcy5saW5rQ2xpY2tlZChlKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH1cblxuICAgIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAgIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICAgIGlmIChcbiAgICAgIHRoaXMucHJvcHMucGFzc0hyZWYgfHxcbiAgICAgIChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKVxuICAgICkge1xuICAgICAgcHJvcHMuaHJlZiA9IGFzIHx8IGhyZWZcbiAgICB9XG5cbiAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5LlxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgaWYgKFxuICAgICAgICBwcm9wcy5ocmVmICYmXG4gICAgICAgIHR5cGVvZiBfX05FWFRfREFUQV9fICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBfX05FWFRfREFUQV9fLm5leHRFeHBvcnRcbiAgICAgICkge1xuICAgICAgICBwcm9wcy5ocmVmID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQocHJvcHMuaHJlZilcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBwcm9wcylcbiAgfVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgY29uc3Qgd2FybiA9IGV4ZWNPbmNlKGNvbnNvbGUuZXJyb3IpXG5cbiAgLy8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG4gIGNvbnN0IFByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKVxuICBjb25zdCBleGFjdCA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMtZXhhY3QnKVxuICAvLyBAdHMtaWdub3JlIHRoZSBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQsIHdoZW4gZGVjbGFyaW5nIGl0IG9uIHRoZSBjbGFzcyBpdCBvdXRwdXRzIGFuIGV4dHJhIGJpdCBvZiBjb2RlIHdoaWNoIGlzIG5vdCBuZWVkZWQuXG4gIExpbmsucHJvcFR5cGVzID0gZXhhY3Qoe1xuICAgIGhyZWY6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLFxuICAgIGFzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgcHJlZmV0Y2g6IFByb3BUeXBlcy5ib29sLFxuICAgIHJlcGxhY2U6IFByb3BUeXBlcy5ib29sLFxuICAgIHNoYWxsb3c6IFByb3BUeXBlcy5ib29sLFxuICAgIHBhc3NIcmVmOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzY3JvbGw6IFByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgKHByb3BzOiBhbnksIHByb3BOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wc1twcm9wTmFtZV1cblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICBgV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPmBcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfSxcbiAgICBdKS5pc1JlcXVpcmVkLFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbih7fSwgX3JvdXRlcltwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwYXJzZSwgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSAhPT0gMCA/IGJhc2VQYXRoICsgcGF0aCA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpID09PSAwXG4gICAgPyBwYXRoLnN1YnN0cihiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xuICAgIDogcGF0aFxufVxuXG5mdW5jdGlvbiB0b1JvdXRlKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nXG59XG5cbmNvbnN0IHByZXBhcmVSb3V0ZSA9IChwYXRoOiBzdHJpbmcpID0+XG4gIHRvUm91dGUoIXBhdGggfHwgcGF0aCA9PT0gJy8nID8gJy9pbmRleCcgOiBwYXRoKVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG50eXBlIENvbXBvbmVudFJlcyA9IHsgcGFnZTogQ29tcG9uZW50VHlwZTsgbW9kOiBhbnkgfVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxudHlwZSBSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IGFueVxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBSb3V0ZUluZm8sIEFwcD86IENvbXBvbmVudFR5cGUpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBhbnkpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoXG4gIHBhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSB8IG51bGwsXG4gIGlzU2VydmVyUmVuZGVyOiBib29sZWFuLFxuICBjYj86ICguLi5hcmdzOiBhbnkpID0+IGFueVxuKSB7XG4gIGxldCBhdHRlbXB0cyA9IGlzU2VydmVyUmVuZGVyID8gMyA6IDFcbiAgZnVuY3Rpb24gZ2V0UmVzcG9uc2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gZmV0Y2goXG4gICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIF9fTkVYVF9EQVRBX19cbiAgICAgICAgICBgL19uZXh0L2RhdGEvJHtfX05FWFRfREFUQV9fLmJ1aWxkSWR9JHtkZWxCYXNlUGF0aChwYXRobmFtZSl9Lmpzb25gXG4gICAgICAgICksXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgfSksXG4gICAgICB7XG4gICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAvL1xuICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgfVxuICAgICkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICBpZiAoLS1hdHRlbXB0cyA+IDAgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHJldHVybiBjYiA/IGNiKGRhdGEpIDogZGF0YVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAvLyBsb29wLlxuICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICA7KGVyciBhcyBhbnkpLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJ1xuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IENvbXBvbmVudFR5cGVcbiAgICAgIHdyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgYXNcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG4gICAgfVxuICB9XG5cbiAgLy8gQGRlcHJlY2F0ZWQgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXZlbiB0aG91Z2ggaXQncyBhIHByaXZhdGUgbWV0aG9kLlxuICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1cmxcbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKFxuICAgICAgZS5zdGF0ZSAmJlxuICAgICAgdGhpcy5pc1NzciAmJlxuICAgICAgZS5zdGF0ZS5hcyA9PT0gdGhpcy5hc1BhdGggJiZcbiAgICAgIHBhcnNlKGUuc3RhdGUudXJsKS5wYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZVxuICAgICkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IGUuc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdgcG9wc3RhdGVgIGV2ZW50IHRyaWdnZXJlZCBidXQgYGV2ZW50LnN0YXRlYCBkaWQgbm90IGhhdmUgYHVybGAgb3IgYGFzYCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eSdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnJlcGxhY2UodXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHVwZGF0ZShyb3V0ZTogc3RyaW5nLCBtb2Q6IGFueSkge1xuICAgIGNvbnN0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZSA9IG1vZC5kZWZhdWx0IHx8IG1vZFxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YClcbiAgICB9XG5cbiAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgQ29tcG9uZW50LFxuICAgICAgX19OX1NTRzogbW9kLl9fTl9TU0csXG4gICAgICBfX05fU1NQOiBtb2QuX19OX1NTUCxcbiAgICB9KVxuICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhXG5cbiAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSlcbiAgICB9XG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgX3VybDogVXJsLFxuICAgIF9hczogVXJsLFxuICAgIG9wdGlvbnM6IGFueVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgICAgfVxuICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgaWYgKFNUKSB7XG4gICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgICAgbGV0IHVybCA9IHR5cGVvZiBfdXJsID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKF91cmwpIDogX3VybFxuICAgICAgbGV0IGFzID0gdHlwZW9mIF9hcyA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbihfYXMpIDogX2FzXG5cbiAgICAgIHVybCA9IGFkZEJhc2VQYXRoKHVybClcbiAgICAgIGFzID0gYWRkQmFzZVBhdGgoYXMpXG5cbiAgICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKGFzKVxuXG4gICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShhcykpIHtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhc1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goYXMpXG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5LCBwcm90b2NvbCB9ID0gcGFyc2UodXJsLCB0cnVlKVxuXG4gICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICBpZiAoIXRoaXMudXJsSXNOZXcoYXMpKSB7XG4gICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSlcbiAgICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gcGFyc2UoYXMpXG4gICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgIGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KFxuICAgICAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2BcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICAgIC8vIElmIHNoYWxsb3cgaXMgdHJ1ZSBhbmQgdGhlIHJvdXRlIGV4aXN0cyBpbiB0aGUgcm91dGVyIGNhY2hlIHdlIHJldXNlIHRoZSBwcmV2aW91cyByZXN1bHRcbiAgICAgIHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93KS50aGVuKFxuICAgICAgICAocm91dGVJbmZvKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gcm91dGVJbmZvXG5cbiAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlSW5mbykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGFzKVxuICAgICAgICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgcmVqZWN0XG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICB9LFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8Um91dGVJbmZvPiB7XG4gICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgLy8gSWYgdGhlcmUgaXMgYSBzaGFsbG93IHJvdXRlIHRyYW5zaXRpb24gcG9zc2libGVcbiAgICAvLyBJZiB0aGUgcm91dGUgaXMgYWxyZWFkeSByZW5kZXJlZCBvbiB0aGUgc2NyZWVuLlxuICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoXG4gICAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgICApID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgIC8vIFNvLCB3ZSBuZWVkIHRvIG1hcmsgaXQgYXMgYSBjYW5jZWxsZWQgZXJyb3IgYW5kIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXNvbHZlKFxuICAgICAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCB9ID0gcmVzXG4gICAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbzogUm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciB9XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICB9IGFzIGFueSkudGhlbihcbiAgICAgICAgICAgICAgICAgIChwcm9wcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgKGdpcEVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLFxuICAgICAgICAgICAgICAgICAgICAgIGdpcEVyclxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVyclxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBoYW5kbGVFcnJvcihlcnIsIHRydWUpKVxuICAgICAgICApXG4gICAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz5cbiAgICB9XG5cbiAgICByZXR1cm4gKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmIChjYWNoZWRSb3V0ZUluZm8pIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUoY2FjaGVkUm91dGVJbmZvKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKFxuICAgICAgICAocmVzKSA9PlxuICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgcmVqZWN0XG4gICAgICApXG4gICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+KVxuICAgICAgLnRoZW4oKHJvdXRlSW5mbzogUm91dGVJbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldERhdGE8Um91dGVJbmZvPigoKSA9PlxuICAgICAgICAgIF9fTl9TU0dcbiAgICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShhcylcbiAgICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGFzKVxuICAgICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgICApXG4gICAgICAgICkudGhlbigocHJvcHMpID0+IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGhhbmRsZUVycm9yKVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHByb3RvY29sIH0gPSBwYXJzZSh1cmwpXG5cbiAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBjb25zdCByb3V0ZSA9IGRlbEJhc2VQYXRoKHRvUm91dGUocGF0aG5hbWUpKVxuICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgZGVsQmFzZVBhdGgoYXNQYXRoKSksXG4gICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICAgIF0pLnRoZW4oKCkgPT4gcmVzb2x2ZSgpLCByZWplY3QpXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPENvbXBvbmVudFJlcz4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuICAgIHJvdXRlID0gZGVsQmFzZVBhdGgocm91dGUpXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEgPSAoYXNQYXRoOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4gPT4ge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhcnNlKGFzUGF0aCkucGF0aG5hbWUhKVxuXG4gICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbcGF0aG5hbWVdXG4gICAgICA/IFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1twYXRobmFtZV0pXG4gICAgICA6IGZldGNoTmV4dERhdGEoXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICB0aGlzLmlzU3NyLFxuICAgICAgICAgIChkYXRhKSA9PiAodGhpcy5zZGNbcGF0aG5hbWVdID0gZGF0YSlcbiAgICAgICAgKVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEgPSAoYXNQYXRoOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4gPT4ge1xuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2UoYXNQYXRoLCB0cnVlKVxuICAgIHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhdGhuYW1lISlcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIGNvbnN0IGUgPSBuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpXG4gICAgICA7KGUgYXMgYW55KS5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsIi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IHsgcG9zOiBudW1iZXI7IHJlcGVhdDogYm9vbGVhbiB9IH1cbn0ge1xuICAvLyBFc2NhcGUgYWxsIGNoYXJhY3RlcnMgdGhhdCBjb3VsZCBiZSBjb25zaWRlcmVkIFJlZ0V4XG4gIGNvbnN0IGVzY2FwZWRSb3V0ZSA9IGVzY2FwZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogeyBwb3M6IG51bWJlcjsgcmVwZWF0OiBib29sZWFuIH0gfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKFxuICAgIC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csXG4gICAgKF8sICQxKSA9PiB7XG4gICAgICBjb25zdCBpc09wdGlvbmFsID0gL15cXFxcXFxbLipcXFxcXFxdJC8udGVzdCgkMSlcbiAgICAgIGlmIChpc09wdGlvbmFsKSB7XG4gICAgICAgICQxID0gJDEuc2xpY2UoMiwgLTIpXG4gICAgICB9XG4gICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpXG4gICAgICBpZiAoaXNDYXRjaEFsbCkge1xuICAgICAgICAkMSA9ICQxLnNsaWNlKDYpXG4gICAgICB9XG4gICAgICBncm91cHNbXG4gICAgICAgICQxXG4gICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIF0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQ6IGlzQ2F0Y2hBbGwgfVxuICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGwgPyAoaXNPcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgIH1cbiAgKVxuXG4gIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZTogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoXG4gICAgICAvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLFxuICAgICAgKF8sICQxKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSlcbiAgICAgICAgY29uc3Qga2V5ID0gJDFcbiAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKVxuXG4gICAgICAgIHJldHVybiBpc0NhdGNoQWxsXG4gICAgICAgICAgPyBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+Lis/KWBcbiAgICAgICAgICA6IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT5bXi9dKz8pYFxuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoJ14nICsgcGFyYW1ldGVyaXplZFJvdXRlICsgJyg/Oi8pPyQnLCAnaScpLFxuICAgIGdyb3VwcyxcbiAgICBuYW1lZFJlZ2V4OiBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZVxuICAgICAgPyBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGBcbiAgICAgIDogdW5kZWZpbmVkLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBmb3JtYXQsIFVSTEZvcm1hdE9wdGlvbnMsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnLi4vLi4vbGliL2xvYWQtZW52LWNvbmZpZydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogYW55XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgaW50ZXJmYWNlLW5hbWVcbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgc3RhdGljTWFya3VwOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZGV2RmlsZXM6IHN0cmluZ1tdXG4gIGZpbGVzOiBzdHJpbmdbXVxuICBsb3dQcmlvcml0eUZpbGVzOiBzdHJpbmdbXVxuICBwb2x5ZmlsbEZpbGVzOiBzdHJpbmdbXVxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGh0bWxQcm9wczogYW55XG4gIGJvZHlUYWdzOiBhbnlbXVxuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2Vcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgdXJsOiBVcmxPYmplY3QsXG4gIG9wdGlvbnM/OiBVUkxGb3JtYXRPcHRpb25zXG4pOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0KHVybCBhcyBVUkwsIG9wdGlvbnMpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEzLjFcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTsgLy8gVE9ETzogV2UgZG9uJ3QgdXNlIEFzeW5jTW9kZSBvciBDb25jdXJyZW50TW9kZSBhbnltb3JlLiBUaGV5IHdlcmUgdGVtcG9yYXJ5XG4vLyAodW5zdGFibGUpIEFQSXMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZC4gQ2FuIHdlIHJlbW92ZSB0aGUgc3ltYm9scz9cblxudmFyIFJFQUNUX0FTWU5DX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmFzeW5jX21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbmN1cnJlbnRfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpIDogMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKSA6IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJykgOiAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubGF6eScpIDogMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5ibG9jaycpIDogMHhlYWQ5O1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpIDogMHhlYWQ1O1xudmFyIFJFQUNUX1JFU1BPTkRFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucmVzcG9uZGVyJykgOiAweGVhZDY7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnNjb3BlJykgOiAweGVhZDc7XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1JFU1BPTkRFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1NDT1BFX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSk7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSAvLyBBc3luY01vZGUgaXMgZGVwcmVjYXRlZCBhbG9uZyB3aXRoIGlzQXN5bmNNb2RlXG5cbnZhciBBc3luY01vZGUgPSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG52YXIgQ29uY3VycmVudE1vZGUgPSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTcrLiBVcGRhdGUgeW91ciBjb2RlIHRvIHVzZSAnICsgJ1JlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGluc3RlYWQuIEl0IGhhcyB0aGUgZXhhY3Qgc2FtZSBBUEkuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB8fCB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy5Bc3luY01vZGUgPSBBc3luY01vZGU7XG5leHBvcnRzLkNvbmN1cnJlbnRNb2RlID0gQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC9OYXZiYXJcIjtcclxuaW1wb3J0IEJhbm5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9zaG9wLXN0eWxlLW9uZS9CYW5uZXJcIjtcclxuaW1wb3J0IE9mZmVyQXJlYSBmcm9tIFwiLi4vY29tcG9uZW50cy9zaG9wLXN0eWxlLW9uZS9PZmZlckFyZWFcIjtcclxuaW1wb3J0IFByb2R1Y3RzIGZyb20gXCIuLi9jb21wb25lbnRzL3Nob3Atc3R5bGUtb25lL1Byb2R1Y3RzXCI7XHJcbmltcG9ydCBDYXRlZ29yeVByb2R1Y3RzIGZyb20gXCIuLi9jb21wb25lbnRzL3Nob3Atc3R5bGUtb25lL0NhdGVnb3J5UHJvZHVjdHNcIjtcclxuaW1wb3J0IFRyZW5kaW5nUHJvZHVjdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2hvcC1zdHlsZS1vbmUvVHJlbmRpbmdQcm9kdWN0c1wiO1xyXG5pbXBvcnQgQmVzdFNlbGxlciBmcm9tIFwiLi4vY29tcG9uZW50cy9zaG9wLXN0eWxlLW9uZS9CZXN0U2VsbGVyc1wiO1xyXG5pbXBvcnQgRmFjaWxpdHkgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2hvcC1zdHlsZS1vbmUvRmFjaWxpdHlcIjtcclxuaW1wb3J0IFRlc3RpbW9uaWFscyBmcm9tIFwiLi4vY29tcG9uZW50cy9Db21tb24vVGVzdGltb25pYWxzXCI7XHJcbmltcG9ydCBOZXdzIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbW1vbi9OZXdzXCI7XHJcbmltcG9ydCBTdWJzY3JpYmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29tbW9uL1N1YnNjcmliZVwiO1xyXG5pbXBvcnQgUGFydG5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9Db21tb24vUGFydG5lclwiO1xyXG5pbXBvcnQgSW5zdGFncmFtUGhvdG8gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29tbW9uL0luc3RhZ3JhbVBob3RvXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L0Zvb3RlclwiO1xyXG5pbXBvcnQgQWRkc01vZGFsIGZyb20gXCIuLi9jb21wb25lbnRzL01vZGFsL0FkZHNNb2RhbFwiO1xyXG5cclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveGVkLWxheW91dC13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveGVkLWxheW91dC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICAgICAgPEJhbm5lciAvPlxyXG4gICAgICAgICAgICB7LyogPE9mZmVyQXJlYSAvPiAqL31cclxuICAgICAgICAgICAgey8qIDxDYXRlZ29yeVByb2R1Y3RzIC8+ICovfVxyXG4gICAgICAgICAgICA8UHJvZHVjdHMgLz5cclxuICAgICAgICAgICAgey8qIDxUcmVuZGluZ1Byb2R1Y3RzIC8+ICovfVxyXG4gICAgICAgICAgICB7LyogPEJlc3RTZWxsZXIgLz4gKi99XHJcbiAgICAgICAgICAgIDxGYWNpbGl0eSAvPlxyXG4gICAgICAgICAgICB7Lyogey8qIDxUZXN0aW1vbmlhbHMgLz4gKi99XHJcbiAgICAgICAgICAgIHsvKiA8TmV3cyAvPiAqL31cclxuICAgICAgICAgICAgey8qIDxTdWJzY3JpYmUgLz4gKi99XHJcbiAgICAgICAgICAgIHsvKiA8UGFydG5lciAvPiAqL31cclxuICAgICAgICAgICAgey8qIDxJbnN0YWdyYW1QaG90byAvPiAqL31cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgICAgICB7LyogPEFkZHNNb2RhbCAvPiAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iLCIvL1R5cGVzIHNob3VsZCBiZSBpbiBjb25zdCB0byBhdm9pZCB0eXBvcyBhbmQgZHVwbGljYXRpb24gc2luY2UgaXQncyBhIHN0cmluZyBhbmQgY291bGQgYmUgZWFzaWx5IG1pc3Mgc3BlbGxlZFxyXG5leHBvcnQgY29uc3QgQUREX1RPX0NBUlQgPSAnQUREX1RPX0NBUlQnO1xyXG5leHBvcnQgY29uc3QgQUREX1RPX0NBUlRfQURET05TID0gJ0FERF9UT19DQVJUX0FERE9OUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfSVRFTSA9ICdSRU1PVkVfSVRFTSc7XHJcbmV4cG9ydCBjb25zdCBTVUJfUVVBTlRJVFkgPSAnU1VCX1FVQU5USVRZJztcclxuZXhwb3J0IGNvbnN0IEFERF9RVUFOVElUWSA9ICdBRERfUVVBTlRJVFknO1xyXG5leHBvcnQgY29uc3QgQUREX1NISVBQSU5HID0gJ0FERF9TSElQUElORyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVIgPSAnQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSJztcclxuZXhwb3J0IGNvbnN0IE9SREVSX0ZPUk0gPSAnT1JERVJfRk9STSc7XHJcbmV4cG9ydCBjb25zdCBDSEVDS09VVF9DSEFSR0UgPSAnQ0hFQ0tPVVRfQ0hBUkdFJztcclxuZXhwb3J0IGNvbnN0IFJFU0VUX0NBUlQgPSAnUkVTRVRfQ0FSVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfVE9fQ09NUEFSRSA9ICdBRERfVE9fQ09NUEFSRSc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfSVRFTV9GUk9NX0NPTVBBUkUgPSAnUkVNT1ZFX0lURU1fRlJPTV9DT01QQVJFJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9DQVJUID0gJ1VQREFURV9DQVJUJzsiLCJpbXBvcnQge1xyXG4gIEFERF9UT19DQVJULFxyXG4gIFJFTU9WRV9JVEVNLFxyXG4gIFNVQl9RVUFOVElUWSxcclxuICBBRERfUVVBTlRJVFksXHJcbiAgQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSLFxyXG4gIFJFU0VUX0NBUlQsXHJcbiAgQUREX1RPX0NPTVBBUkUsXHJcbiAgUkVNT1ZFX0lURU1fRlJPTV9DT01QQVJFLFxyXG4gIEFERF9UT19DQVJUX0FERE9OUyxcclxufSBmcm9tIFwiLi9hY3Rpb24tdHlwZXMvY2FydC1hY3Rpb25zXCI7XHJcbnZhciBDcnlwdG9KUyA9IHJlcXVpcmUoXCJjcnlwdG8tanNcIik7XHJcblxyXG5leHBvcnQgY29uc3QgY2xlYXJEYXRhID0gKCkgPT4ge1xyXG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHByb2Nlc3MuZW52LkNBUlRfQ09PS0lFKTtcclxuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShwcm9jZXNzLmVudi5JTkZPX0NPT0tJRSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZW5jcnlwdERhdGEgPSAoZGF0YSkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gQ3J5cHRvSlMuQUVTLmVuY3J5cHQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICBwcm9jZXNzLmVudi5DQVJUX0tFWVxyXG4gICAgKS50b1N0cmluZygpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShwcm9jZXNzLmVudi5DQVJUX0NPT0tJRSk7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlY3J5cHREYXRhID0gKGRhdGEpID0+IHtcclxuICB0cnkge1xyXG4gICAgbGV0IGJ5dGVzID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQoZGF0YSwgcHJvY2Vzcy5lbnYuQ0FSVF9LRVkpO1xyXG4gICAgbGV0IHN0cmluZ0FycmF5ID0gSlNPTi5wYXJzZShieXRlcy50b1N0cmluZyhDcnlwdG9KUy5lbmMuVXRmOCkpO1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2Uoc3RyaW5nQXJyYXkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlcnJvcik7XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0ocHJvY2Vzcy5lbnYuQ0FSVF9DT09LSUUpO1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufTtcclxuXHJcbi8vYWRkIGNhcnQgYWN0aW9uXHJcbmV4cG9ydCBjb25zdCBhZGRUb0NhcnQgPSAocHJvZHVjdCwgcXVhbnRpdHkgPSAxKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFERF9UT19DQVJULFxyXG4gICAgcHJvZHVjdDogcHJvZHVjdCxcclxuICAgIHF1YW50aXR5LFxyXG4gIH07XHJcbn07XHJcblxyXG4vL2FkZCBjYXJ0IHdpdGggYWRkb25zIGFjdGlvblxyXG5leHBvcnQgY29uc3QgYWRkVG9DYXJ0QWRkb25zID0gKHByb2R1Y3RzLCBxdWFudGl0eSA9IDEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogQUREX1RPX0NBUlRfQURET05TLFxyXG4gICAgcHJvZHVjdHM6IHByb2R1Y3RzLFxyXG4gICAgcXVhbnRpdHksXHJcbiAgfTtcclxufTtcclxuXHJcbi8vcmVtb3ZlIGl0ZW0gYWN0aW9uXHJcbmV4cG9ydCBjb25zdCByZW1vdmVJdGVtID0gKGlkKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFJFTU9WRV9JVEVNLFxyXG4gICAgaWQsXHJcbiAgfTtcclxufTtcclxuLy9zdWJ0cmFjdCBxdCBhY3Rpb25cclxuZXhwb3J0IGNvbnN0IHN1YnRyYWN0UXVhbnRpdHkgPSAoaWQpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogU1VCX1FVQU5USVRZLFxyXG4gICAgaWQsXHJcbiAgfTtcclxufTtcclxuLy9hZGQgcXQgYWN0aW9uXHJcbmV4cG9ydCBjb25zdCBhZGRRdWFudGl0eSA9IChpZCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBRERfUVVBTlRJVFksXHJcbiAgICBpZCxcclxuICB9O1xyXG59O1xyXG5cclxuLy9hZGQgcXQgYWN0aW9uIHdpdGggcXVhbnRpdHkgbnVtYmVyXHJcbmV4cG9ydCBjb25zdCBhZGRRdWFudGl0eVdpdGhOdW1iZXIgPSAoaWQsIHF0eSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVIsXHJcbiAgICBpZCxcclxuICAgIHF0eSxcclxuICB9O1xyXG59O1xyXG5cclxuLy8gUmVzZXQgY2FydCBhZnRlciBmb3JtIHN1Ym1pdFxyXG5leHBvcnQgY29uc3QgcmVzZXRDYXJ0ID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBSRVNFVF9DQVJULFxyXG4gIH07XHJcbn07XHJcblxyXG4vL2FkZCBjb21wYXJlIGFjdGlvblxyXG5leHBvcnQgY29uc3QgYWRkVG9Db21wYXJlID0gKGlkKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IEFERF9UT19DT01QQVJFLFxyXG4gICAgaWQsXHJcbiAgfTtcclxufTtcclxuLy9yZW1vdmUgaXRlbSBmcm9tIGNvbXBhcmUgYWN0aW9uXHJcbmV4cG9ydCBjb25zdCByZW1vdmVJdGVtRnJvbUNvbXBhcmUgPSAoaWQpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogUkVNT1ZFX0lURU1fRlJPTV9DT01QQVJFLFxyXG4gICAgaWQsXHJcbiAgfTtcclxufTtcclxuIiwidmFyIENyeXB0b0pTID0gcmVxdWlyZShcImNyeXB0by1qc1wiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBlbmNyeXB0SW5mb0RhdGEgPSAoZGF0YSkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgZW5jcnlwdGVkRGF0YSA9IENyeXB0b0pTLkFFUy5lbmNyeXB0KFxyXG4gICAgICBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgcHJvY2Vzcy5lbnYuSU5GT19LRVlcclxuICAgICkudG9TdHJpbmcoKTtcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9jZXNzLmVudi5JTkZPX0NPT0tJRSwgZW5jcnlwdGVkRGF0YSk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0ocHJvY2Vzcy5lbnYuSU5GT19DT09LSUUpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWNyeXB0SW5mb0RhdGEgPSAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGxldCBpbmZvSXRlbSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2Nlc3MuZW52LklORk9fQ09PS0lFKVxyXG4gICAgICA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2Nlc3MuZW52LklORk9fQ09PS0lFKVxyXG4gICAgICA6IG51bGw7XHJcbiAgICBpZiAoaW5mb0l0ZW0pIHtcclxuICAgICAgbGV0IGJ5dGVzID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQoaW5mb0l0ZW0sIHByb2Nlc3MuZW52LklORk9fS0VZKTtcclxuICAgICAgbGV0IHN0cmluZ0FycmF5ID0gSlNPTi5wYXJzZShieXRlcy50b1N0cmluZyhDcnlwdG9KUy5lbmMuVXRmOCkpO1xyXG4gICAgICByZXR1cm4gc3RyaW5nQXJyYXk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShwcm9jZXNzLmVudi5JTkZPX0NPT0tJRSk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVuY3J5cHRTdHJpbmcgPSAoZGF0YSkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgZW5jcnlwdGVkRGF0YSA9IGVuY29kZVVSSUNvbXBvbmVudChcclxuICAgICAgQ3J5cHRvSlMuQUVTLmVuY3J5cHQoXHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgICAgcHJvY2Vzcy5lbnYuSU5GT19LRVlcclxuICAgICAgKS50b1N0cmluZygpXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBlbmNyeXB0ZWREYXRhO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlY3J5cHRTdHJpbmcgPSAoZGF0YSkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBsZXQgYnl0ZXMgPSBDcnlwdG9KUy5BRVMuZGVjcnlwdChkYXRhLCBwcm9jZXNzLmVudi5JTkZPX0tFWSk7XHJcbiAgICAgIGxldCBzdHJpbmdBcnJheSA9IEpTT04ucGFyc2UoYnl0ZXMudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLlV0ZjgpKTtcclxuICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHJpbmdBcnJheSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG52YXIgQ3J5cHRvSlMgPSByZXF1aXJlKFwiY3J5cHRvLWpzXCIpO1xyXG5cclxubGV0IGhvc3QgPSBwcm9jZXNzLmVudi5BUElfVVJMO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJSZWdpc3RlciA9ICh1c2VyRGF0YSwgc2V0SXNMb2FkaW5nLCBjYikgPT4gYXN5bmMgKFxyXG4gIGRpc3BhdGNoXHJcbikgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGAke2hvc3R9L2FwaS91c2VyL2F1dGgvc2lnblVwYCwgdXNlckRhdGEpO1xyXG5cclxuICAgIC8vIC8vIHNhdmUgdGhlIG5ldyB0b2tlbiBmcm9tIG91ciBmdWNraW5nIGFwaSB0byB0aGUgY29va2llc1xyXG4gICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICBjb25zdCB7IHRva2VuIH0gPSBhd2FpdCByZXMuZGF0YTtcclxuICAgICAgY29va2llLnNldChcIl93dXNfQkpLXCIsIHRva2VuLCB7IGV4cGlyZXM6IDcgfSk7XHJcbiAgICAgIGNiKCk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIGlmIChlcnIucmVzcG9uc2UuZGF0YS5lcnJvcikge1xyXG4gICAgICByZXR1cm4gdG9hc3QuZXJyb3IoZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlcnIucmVzcG9uc2UuZGF0YS5kZXRhaWxzWzBdLm1lc3NhZ2UpIHtcclxuICAgICAgcmV0dXJuIHRvYXN0LmVycm9yKGVyci5yZXNwb25zZS5kYXRhLmRldGFpbHNbMF0ubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJMb2dpbiA9ICh1c2VyRGF0YSwgc2V0SXNMb2FkaW5nLCBjYikgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7aG9zdH0vYXBpL3VzZXIvYXV0aC9zaWduSW5gLCB1c2VyRGF0YSk7XHJcblxyXG4gICAgLy8gLy8gc2F2ZSB0aGUgbmV3IHRva2VuIGZyb20gb3VyIGZ1Y2tpbmcgYXBpIHRvIHRoZSBjb29raWVzXHJcbiAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgIGNvbnN0IHsgdG9rZW4gfSA9IGF3YWl0IHJlcy5kYXRhO1xyXG4gICAgICBjb29raWUuc2V0KFwiX3d1c19CSktcIiwgdG9rZW4sIHsgZXhwaXJlczogNyB9KTtcclxuICAgICAgY2IoKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgaWYgKGVyci5yZXNwb25zZS5kYXRhLmVycm9yKSB7XHJcbiAgICAgIHJldHVybiB0b2FzdC5lcnJvcihlcnIucmVzcG9uc2UuZGF0YS5lcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVyci5yZXNwb25zZS5kYXRhLmRldGFpbHNbMF0ubWVzc2FnZSkge1xyXG4gICAgICByZXR1cm4gdG9hc3QuZXJyb3IoZXJyLnJlc3BvbnNlLmRhdGEuZGV0YWlsc1swXS5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gIGNvb2tpZS5yZW1vdmUoXCJfd3VzX0JKS1wiKTtcclxuICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVuY3J5cHRVc2VyRGF0YSA9IChkYXRhKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGxldCBlbmNyeXB0ZWREYXRhID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICBwcm9jZXNzLmVudi5VU0VSX0tFWVxyXG4gICAgKS50b1N0cmluZygpO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2Nlc3MuZW52LlVTRVJfQ09PS0lFLCBlbmNyeXB0ZWREYXRhKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShwcm9jZXNzLmVudi5VU0VSX0NPT0tJRSk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlY3J5cHRVc2VyRGF0YSA9ICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgbGV0IGluZm9JdGVtID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvY2Vzcy5lbnYuVVNFUl9DT09LSUUpXHJcbiAgICAgID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvY2Vzcy5lbnYuVVNFUl9DT09LSUUpXHJcbiAgICAgIDogbnVsbDtcclxuICAgIGlmIChpbmZvSXRlbSkge1xyXG4gICAgICBsZXQgYnl0ZXMgPSBDcnlwdG9KUy5BRVMuZGVjcnlwdChpbmZvSXRlbSwgcHJvY2Vzcy5lbnYuVVNFUl9LRVkpO1xyXG4gICAgICBsZXQgc3RyaW5nQXJyYXkgPSBKU09OLnBhcnNlKGJ5dGVzLnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KSk7XHJcbiAgICAgIHJldHVybiBzdHJpbmdBcnJheTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHByb2Nlc3MuZW52LlVTRVJfQ09PS0lFKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyeXB0by1qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9keW5hbWljXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5wcm9ncmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXMtZXhhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbGF6eWxvYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtb3dsLWNhcm91c2VsM1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b29sdGlwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXZpc2liaWxpdHktc2Vuc29yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9
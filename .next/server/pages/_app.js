module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "./components/Footer/index.js":
/*!************************************!*\
  !*** ./components/Footer/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.style */ "./components/Footer/index.style.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "D:\\evenimex\\components\\Footer\\index.js";








const FooterComponent = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_index_style__WEBPACK_IMPORTED_MODULE_3__["FooterComponentWrapper"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
            md: 6,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_index_style__WEBPACK_IMPORTED_MODULE_3__["FooterMenuMain"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_index_style__WEBPACK_IMPORTED_MODULE_3__["FooterMenuUl"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_index_style__WEBPACK_IMPORTED_MODULE_3__["FooterMenuli"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
                    href: "#link",
                    children: "Blog"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 35,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 34,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_index_style__WEBPACK_IMPORTED_MODULE_3__["FooterMenuli"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
                    className: "active",
                    href: "#link",
                    children: "Adauga Locatie"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 38,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 37,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_index_style__WEBPACK_IMPORTED_MODULE_3__["FooterMenuli"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
                    href: "#link",
                    children: "Cum functioneaza"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 43,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 42,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_index_style__WEBPACK_IMPORTED_MODULE_3__["FooterMenuli"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
                    href: "#link",
                    children: "Contact"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 46,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
            md: 3,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_index_style__WEBPACK_IMPORTED_MODULE_3__["FooterSoicalMain"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_index_style__WEBPACK_IMPORTED_MODULE_3__["FooterBoxTitle"], {
                children: "Urmareste-ne"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_index_style__WEBPACK_IMPORTED_MODULE_3__["FooterSoicalUl"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_index_style__WEBPACK_IMPORTED_MODULE_3__["FooterSoicalli"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
                    href: "#",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faRss"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 57,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 56,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_index_style__WEBPACK_IMPORTED_MODULE_3__["FooterSoicalli"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
                    href: "#link",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                      icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faFacebook"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 62,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 61,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_index_style__WEBPACK_IMPORTED_MODULE_3__["FooterSoicalli"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
                    href: "#link",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                      icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faTwitter"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 67,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 66,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_index_style__WEBPACK_IMPORTED_MODULE_3__["FooterSoicalli"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
                    href: "#link",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                      icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faGooglePlus"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 72,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 71,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_index_style__WEBPACK_IMPORTED_MODULE_3__["FooterSoicalli"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
                    href: "#link",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                      icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faLinkedin"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 77,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 76,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_index_style__WEBPACK_IMPORTED_MODULE_3__["FooterSoicalli"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
                    href: "#link",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                      icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faYoutube"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 82,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_index_style__WEBPACK_IMPORTED_MODULE_3__["FooterSoicalli"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
                    href: "#link",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                      icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faVimeo"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 87,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 86,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
            md: 3,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_index_style__WEBPACK_IMPORTED_MODULE_3__["FooterSoicalMain"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_index_style__WEBPACK_IMPORTED_MODULE_3__["FooterBoxTitle"], {
                children: "Newsletter"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_index_style__WEBPACK_IMPORTED_MODULE_3__["NewsletterBox"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
                    type: "text"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 98,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
                    className: "newsletter-submit",
                    type: "submit",
                    children: "Trimite"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 99,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_index_style__WEBPACK_IMPORTED_MODULE_3__["FooterCopyWrapper"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              md: 4,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_index_style__WEBPACK_IMPORTED_MODULE_3__["FooterCopyrightText"], {
                children: "Politica de Confidentialitate"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
              md: 8,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_index_style__WEBPACK_IMPORTED_MODULE_3__["FooterPrivacyPolicy"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
                  href: "#",
                  children: "Politica de Confidentialitate"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
                  href: "#",
                  children: "Termeni de utilizare"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (FooterComponent);

/***/ }),

/***/ "./components/Footer/index.style.js":
/*!******************************************!*\
  !*** ./components/Footer/index.style.js ***!
  \******************************************/
/*! exports provided: FooterComponentWrapper, FooterMenuMain, FooterMenuUl, FooterMenuli, FooterSoicalMain, FooterSoicalUl, FooterSoicalli, FooterBoxTitle, NewsletterBox, FooterCopyWrapper, FooterCopyrightText, FooterPrivacyPolicy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponentWrapper", function() { return FooterComponentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterMenuMain", function() { return FooterMenuMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterMenuUl", function() { return FooterMenuUl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterMenuli", function() { return FooterMenuli; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterSoicalMain", function() { return FooterSoicalMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterSoicalUl", function() { return FooterSoicalUl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterSoicalli", function() { return FooterSoicalli; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterBoxTitle", function() { return FooterBoxTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsletterBox", function() { return NewsletterBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterCopyWrapper", function() { return FooterCopyWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterCopyrightText", function() { return FooterCopyrightText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterPrivacyPolicy", function() { return FooterPrivacyPolicy; });
/* harmony import */ var _utils_mediaQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/mediaQuery */ "./utils/mediaQuery.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const FooterComponentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({
  displayName: "indexstyle__FooterComponentWrapper",
  componentId: "sc-1544myn-0"
})(["background-color:#1B1B1B;border-top:4px solid #6787bf;padding:30px 0 0;"]);
const FooterMenuMain = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "indexstyle__FooterMenuMain",
  componentId: "sc-1544myn-1"
})([""]);
const FooterMenuUl = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul.withConfig({
  displayName: "indexstyle__FooterMenuUl",
  componentId: "sc-1544myn-2"
})(["padding-left:0;"]);
const FooterMenuli = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li.withConfig({
  displayName: "indexstyle__FooterMenuli",
  componentId: "sc-1544myn-3"
})(["display:inline-block;a{color:#6A6A6A;font-size:14px;font-weight:bold;margin-right:15px;display:inline-block;text-decoration:none;padding:0 0 .28em 0 !important;}a:hover{color:#6787bf;}a.active{border-bottom:4px solid #6787bf;}"]);
const FooterSoicalMain = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "indexstyle__FooterSoicalMain",
  componentId: "sc-1544myn-4"
})([""]);
const FooterSoicalUl = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul.withConfig({
  displayName: "indexstyle__FooterSoicalUl",
  componentId: "sc-1544myn-5"
})(["padding-left:0;"]);
const FooterSoicalli = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li.withConfig({
  displayName: "indexstyle__FooterSoicalli",
  componentId: "sc-1544myn-6"
})(["display:inline-block;a{background-color:#6A6A6A;font-size:18px;margin-right:5px;display:inline-block;text-decoration:none;padding:0 0 .28em 0 !important;transition:all 0.3s ease;-webkit-transition:all 0.3s ease;width:28px;height:28px;text-align:center;line-height:28px;color:#fff;}a:hover{color:#ddd;}"]);
const FooterBoxTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3.withConfig({
  displayName: "indexstyle__FooterBoxTitle",
  componentId: "sc-1544myn-7"
})(["color:#6787BF;font-weight:700;font-size:15px;text-transform:uppercase;letter-spacing:1px;margin:0 0 12px;"]);
const NewsletterBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "indexstyle__NewsletterBox",
  componentId: "sc-1544myn-8"
})([".newsletter-submit{background-color:#34548F!important;text-transform:uppercase;padding:7px 16px;color:#fff;border-radius:0;border:none;font-size:15px;}.input-group>.form-control{border:none;border-radius:0;}"]);
const FooterCopyWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "indexstyle__FooterCopyWrapper",
  componentId: "sc-1544myn-9"
})(["display:flex;justify-content:space-between;background-color:rgb(20,20,20);color:#a2abb7;font-size:12px;font-weight:300;padding:15px 0;"]);
const FooterCopyrightText = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "indexstyle__FooterCopyrightText",
  componentId: "sc-1544myn-10"
})(["text-align:left;margin:0;"]);
const FooterPrivacyPolicy = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "indexstyle__FooterPrivacyPolicy",
  componentId: "sc-1544myn-11"
})(["text-align:right;a{color:#6A6A6A;font-size:11px;margin-left:15px;display:inline-block;text-decoration:none;padding:0;transition:all 0.3s ease;-webkit-transition:all 0.3s ease;}a:hover{color:#fff;}"]);

/***/ }),

/***/ "./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.style */ "./components/Header/index.style.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "D:\\evenimex\\components\\Header\\index.js";


 // import HeaderLogo from "../../";



const HeaderComponent = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_index_style__WEBPACK_IMPORTED_MODULE_3__["HeaderComponentWrapper"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
        bg: "dark",
        expand: "lg",
        className: "menu-navbar",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Brand, {
            href: "#home",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/images/logo.png",
              alt: "HeaderLogo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Toggle, {
            "aria-controls": "basic-navbar-nav"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Collapse, {
            id: "basic-navbar-nav",
            className: "justify-content-end",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
              className: "menu-nav",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
                href: "#home",
                className: "active",
                children: "Adauga Locatie"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
                href: "#link",
                children: "Intra in cont"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
                href: "#link",
                children: "Inregistrare"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderComponent);

/***/ }),

/***/ "./components/Header/index.style.js":
/*!******************************************!*\
  !*** ./components/Header/index.style.js ***!
  \******************************************/
/*! exports provided: HeaderComponentWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponentWrapper", function() { return HeaderComponentWrapper; });
/* harmony import */ var _utils_mediaQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/mediaQuery */ "./utils/mediaQuery.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const HeaderComponentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "indexstyle__HeaderComponentWrapper",
  componentId: "sc-1sbxs1c-0"
})([".menu-navbar.navbar-light{padding:0;background-color:rgba(0,0,0,.8) !important;position:fixed;top:0;left:0;right:0;z-index:99;}.menu-navbar .navbar-brand{padding-bottom:0;}.menu-navigation{margin:50px;", "}.menu-navbar.navbar-light .navbar-nav .nav-link{color:#fff !important;}"], Object(_utils_mediaQuery__WEBPACK_IMPORTED_MODULE_0__["mediaQueries"])("md")`
            
        `);

/***/ }),

/***/ "./components/HomeBanner/index.js":
/*!****************************************!*\
  !*** ./components/HomeBanner/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.style */ "./components/HomeBanner/index.style.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-datepicker */ "react-datepicker");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "D:\\evenimex\\components\\HomeBanner\\index.js";







const options = [{
  value: 'Localizare (Oras)',
  label: 'Localizare (Oras)'
}, {
  value: 'chocolate',
  label: 'Chocolate'
}, {
  value: 'strawberry',
  label: 'Strawberry'
}, {
  value: 'vanilla',
  label: 'Vanilla'
}];

function HomeBannerComponent() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_index_style__WEBPACK_IMPORTED_MODULE_4__["HomeBannerWrapper"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
        fade: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Carousel"].Item, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "../../assets/images/home-slide-01.jpg",
            alt: "Logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Carousel"].Item, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "../../assets/images/home-slide-02.jpg",
            alt: "Logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Carousel"].Item, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "../../assets/images/home-slide-03.jpg",
            alt: "Logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Carousel"].Item, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "../../assets/images/home-slide-04.jpg",
            alt: "Logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Carousel"].Item, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "../../assets/images/home-slide-05.jpg",
            alt: "Logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Carousel"].Item, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "../../assets/images/home-slide-06.jpg",
            alt: "Logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Carousel"].Item, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "../../assets/images/home-slide-07.jpg",
            alt: "Logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Carousel"].Item, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "../../assets/images/home-slide-08.jpg",
            alt: "Logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_index_style__WEBPACK_IMPORTED_MODULE_4__["HomeBannerContent"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_index_style__WEBPACK_IMPORTED_MODULE_4__["Title"], {
            children: "Evenimentul tau"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_index_style__WEBPACK_IMPORTED_MODULE_4__["Descipition"], {
            children: "Cauta prin cele peste 10,000 de locatii."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_index_style__WEBPACK_IMPORTED_MODULE_4__["BannerSearchboxwarpper"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
                md: 3,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_5___default.a, {
                  options: options
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
                md: 3,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_datepicker__WEBPACK_IMPORTED_MODULE_6___default.a, {
                  placeholderText: "Data evenimentului"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
                md: 2,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
                  type: "number",
                  placeholder: "Numar participanti"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
                md: 2,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Select, {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: "",
                    children: "Tip Eveniment"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 67,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: "1",
                    children: "Nunta"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 68,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: "17",
                    children: "Evenimente sociale"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 69,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
                md: 2,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
                  className: "equiryform-btn",
                  type: "submit",
                  children: "Cauta"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 6
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (HomeBannerComponent);

/***/ }),

/***/ "./components/HomeBanner/index.style.js":
/*!**********************************************!*\
  !*** ./components/HomeBanner/index.style.js ***!
  \**********************************************/
/*! exports provided: HomeBannerWrapper, HomeBannerContent, Title, Descipition, BannerSearchboxwarpper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeBannerWrapper", function() { return HomeBannerWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeBannerContent", function() { return HomeBannerContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Descipition", function() { return Descipition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerSearchboxwarpper", function() { return BannerSearchboxwarpper; });
/* harmony import */ var _utils_mediaQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/mediaQuery */ "./utils/mediaQuery.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const HomeBannerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "indexstyle__HomeBannerWrapper",
  componentId: "h7bnfy-0"
})(["position:relative;.carousel{height:650px;overflow:hidden;}.carousel .carousel-control-prev,.carousel .carousel-control-next,.carousel .carousel-indicators{display:none;}.carousel img{width:100%;}", ""], Object(_utils_mediaQuery__WEBPACK_IMPORTED_MODULE_0__["mediaQueries"])("lg")`
        padding:0;
    `);
const HomeBannerContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "indexstyle__HomeBannerContent",
  componentId: "h7bnfy-1"
})(["position:absolute;bottom:100px;right:0;left:0;margin:0 auto;text-align:center;z-index:2;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "indexstyle__Title",
  componentId: "h7bnfy-2"
})(["font-weight:300;font-size:5.4em;text-align:center;color:#fff;margin-bottom:0.1em;text-shadow:2px 4px 3px rgb(0 0 0 / 30%);"]);
const Descipition = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "indexstyle__Descipition",
  componentId: "h7bnfy-3"
})(["font-weight:300;font-size:2.4em;text-align:center;color:#fff;margin-bottom:0.75em;margin-top:0;text-shadow:2px 4px 3px rgb(0 0 0 / 30%);"]);
const BannerSearchboxwarpper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "indexstyle__BannerSearchboxwarpper",
  componentId: "h7bnfy-4"
})(["display:flex;justify-content:space-between;width:100%;max-width:60%;margin:0 auto;.form-select,.form-control,.react-datepicker__input-container input,.react-datepicker__input-container,select{width:100%;border:none;border-radius:0;height:42px;min-height:42px !important;}.react-datepicker__input-container input{border:none;padding:6px 8px;border-radius:0;}*[class*=\"col-md\"]{padding-left:0px !important;padding-right:0px !important;}.equiryform-btn{background-color:#34548F!important;text-transform:uppercase;padding:7px 16px;color:#fff;border-radius:0;border:none;font-size:15px;width:100%;}input[type=\"number\"]{appearance:none;&:focus{box-shadow:none;}"]);

/***/ }),

/***/ "./components/Layout/index.js":
/*!************************************!*\
  !*** ./components/Layout/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Footer */ "./components/Footer/index.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Header */ "./components/Header/index.js");
/* harmony import */ var _HomeBanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../HomeBanner */ "./components/HomeBanner/index.js");
/* harmony import */ var _styles_global_main_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/global/main.style */ "./styles/global/main.style.js");
/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/router */ "./utils/router.js");

var _jsxFileName = "D:\\evenimex\\components\\Layout\\index.js";








const Layout = ({
  children
}) => {
  const routers = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_global_main_style__WEBPACK_IMPORTED_MODULE_6__["PagesLayout"], {
    children: [routers.pathname != _utils_router__WEBPACK_IMPORTED_MODULE_7__["default"].SPLASH && routers.pathname != _utils_router__WEBPACK_IMPORTED_MODULE_7__["default"].LOGIN && routers.pathname != _utils_router__WEBPACK_IMPORTED_MODULE_7__["default"].SIGNUP && routers.pathname != _utils_router__WEBPACK_IMPORTED_MODULE_7__["default"].FORGOTPASS && routers.pathname != _utils_router__WEBPACK_IMPORTED_MODULE_7__["default"].RESETPASS && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 49
    }, undefined), routers.pathname != _utils_router__WEBPACK_IMPORTED_MODULE_7__["default"].SPLASH && routers.pathname != _utils_router__WEBPACK_IMPORTED_MODULE_7__["default"].LOGIN && routers.pathname != _utils_router__WEBPACK_IMPORTED_MODULE_7__["default"].SIGNUP && routers.pathname != _utils_router__WEBPACK_IMPORTED_MODULE_7__["default"].FORGOTPASS && routers.pathname != _utils_router__WEBPACK_IMPORTED_MODULE_7__["default"].RESETPASS && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_HomeBanner__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 49
    }, undefined), routers.pathname != _utils_router__WEBPACK_IMPORTED_MODULE_7__["default"].SPLASH && routers.pathname != _utils_router__WEBPACK_IMPORTED_MODULE_7__["default"].LOGIN && routers.pathname != _utils_router__WEBPACK_IMPORTED_MODULE_7__["default"].SIGNUP && routers.pathname != _utils_router__WEBPACK_IMPORTED_MODULE_7__["default"].FORGOTPASS && routers.pathname != _utils_router__WEBPACK_IMPORTED_MODULE_7__["default"].RESETPASS && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 49
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/SeoComponent/index.js":
/*!******************************************!*\
  !*** ./components/SeoComponent/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/constant */ "./utils/constant.js");

var _jsxFileName = "D:\\evenimex\\components\\SeoComponent\\index.js";



const MetaSEO = ({
  metaDetail
}) => {
  const title = (metaDetail === null || metaDetail === void 0 ? void 0 : metaDetail.title) || _utils_constant__WEBPACK_IMPORTED_MODULE_2__["seoDetail"].title;
  const desc = (metaDetail === null || metaDetail === void 0 ? void 0 : metaDetail.desc) || _utils_constant__WEBPACK_IMPORTED_MODULE_2__["seoDetail"].desc;
  const canonical = (metaDetail === null || metaDetail === void 0 ? void 0 : metaDetail.canonical) || _utils_constant__WEBPACK_IMPORTED_MODULE_2__["seoDetail"].canonical;
  const image = (metaDetail === null || metaDetail === void 0 ? void 0 : metaDetail.image) || _utils_constant__WEBPACK_IMPORTED_MODULE_2__["seoDetail"].image;
  const siteKeywords = (metaDetail === null || metaDetail === void 0 ? void 0 : metaDetail.keywords) || _utils_constant__WEBPACK_IMPORTED_MODULE_2__["seoDetail"].keywords;
  const siteName = _utils_constant__WEBPACK_IMPORTED_MODULE_2__["seoDetail"].siteName;
  const siteIcon = _utils_constant__WEBPACK_IMPORTED_MODULE_2__["seoDetail"].siteIcon;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "description",
      content: desc
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), (metaDetail === null || metaDetail === void 0 ? void 0 : metaDetail.keywords) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "keywords",
      content: siteKeywords
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 32
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      property: "og:type",
      content: "website"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "og:title",
      property: "og:title",
      content: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "og:description",
      property: "og:description",
      content: desc
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      property: "og:site_name",
      content: siteName
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      property: "og:url",
      content: canonical
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "twitter:card",
      content: "summary"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "twitter:title",
      content: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "twitter:description",
      content: desc
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "icon",
      sizes: "192x192",
      href: (metaDetail === null || metaDetail === void 0 ? void 0 : metaDetail.image) || siteIcon
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "apple-touch-icon",
      href: (metaDetail === null || metaDetail === void 0 ? void 0 : metaDetail.image) || siteIcon
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      property: "og:image",
      content: image
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "twitter:image",
      content: image
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, undefined), (metaDetail === null || metaDetail === void 0 ? void 0 : metaDetail.canonical) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "canonical",
      href: canonical
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 33
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MetaSEO);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/font-awesome/css/font-awesome.min.css":
/*!************************************************************!*\
  !*** ./node_modules/font-awesome/css/font-awesome.min.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/icheck/skins/all.css":
/*!*******************************************!*\
  !*** ./node_modules/icheck/skins/all.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout) {
  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout);
  const last = widths.length - 1;
  return {
    src: loader({
      src,
      quality,
      width: widths[last]
    }),
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', ')
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (unsized) {
      throw new Error(`Image with src "${src}" has deprecated "unsized" property, which was removed in favor of the "layout='fill'" property`);
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    visibility: isVisible ? 'inherit' : 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://err.sh/next.js/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/react-datepicker/dist/react-datepicker.css":
/*!*****************************************************************!*\
  !*** ./node_modules/react-datepicker/dist/react-datepicker.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout/index.js");
/* harmony import */ var _components_SeoComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SeoComponent */ "./components/SeoComponent/index.js");
/* harmony import */ var _styles_global_global_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/global/global.style */ "./styles/global/global.style.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_global_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/global/theme */ "./styles/global/theme.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store */ "./store.js");
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-persist/integration/react */ "redux-persist/integration/react");
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! font-awesome/css/font-awesome.min.css */ "./node_modules/font-awesome/css/font-awesome.min.css");
/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var icheck_skins_all_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! icheck/skins/all.css */ "./node_modules/icheck/skins/all.css");
/* harmony import */ var icheck_skins_all_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(icheck_skins_all_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var simple_react_lightbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! simple-react-lightbox */ "simple-react-lightbox");
/* harmony import */ var simple_react_lightbox__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(simple_react_lightbox__WEBPACK_IMPORTED_MODULE_14__);

var _jsxFileName = "D:\\evenimex\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















function MyApp({
  Component,
  pageProps
}) {
  const store = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useStore"])(state => state);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_auth_client__WEBPACK_IMPORTED_MODULE_6__["Provider"], {
    session: pageProps.session,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_8__["PersistGate"], {
      persistor: store.__persistor,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_global_global_style__WEBPACK_IMPORTED_MODULE_3__["GlobalStyle"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_components__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
        theme: _styles_global_theme__WEBPACK_IMPORTED_MODULE_5__["default"],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SeoComponent__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_toastify__WEBPACK_IMPORTED_MODULE_10__["ToastContainer"], {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            newestOnTop: true,
            closeOnClick: true,
            rtl: false,
            pauseOnFocusLoss: true,
            draggable: true,
            pauseOnHover: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(simple_react_lightbox__WEBPACK_IMPORTED_MODULE_14___default.a, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (_store__WEBPACK_IMPORTED_MODULE_7__["wrapper"].withRedux(MyApp));

/***/ }),

/***/ "./redux/boatRegisterSlice.js":
/*!************************************!*\
  !*** ./redux/boatRegisterSlice.js ***!
  \************************************/
/*! exports provided: boatRegisterSlice, boatIdAction, resetFormAction, boatRegisterSelector, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boatRegisterSlice", function() { return boatRegisterSlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boatIdAction", function() { return boatIdAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetFormAction", function() { return resetFormAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boatRegisterSelector", function() { return boatRegisterSelector; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialStateObj = {
  boatId: null
};
const boatRegisterSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: "boatRegister",
  initialState: initialStateObj,
  reducers: {
    boatIdAction: (state, {
      payload
    }) => {
      state.boatId = payload;
    },
    resetFormAction: (state, {
      payload
    }) => {
      state.boatId = null;
    }
  }
});
const {
  boatIdAction,
  resetFormAction
} = boatRegisterSlice.actions; //it behave like connector (old redux)

const boatRegisterSelector = state => state.boatRegister;
/* harmony default export */ __webpack_exports__["default"] = (boatRegisterSlice.reducer);

/***/ }),

/***/ "./redux/profileSlice.js":
/*!*******************************!*\
  !*** ./redux/profileSlice.js ***!
  \*******************************/
/*! exports provided: profileSlice, profileImageAction, profileTypeAction, profileSelector, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileSlice", function() { return profileSlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileImageAction", function() { return profileImageAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileTypeAction", function() { return profileTypeAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileSelector", function() { return profileSelector; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialStateObj = {
  profileImage: null,
  profileType: "renter"
};
const profileSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: "profile",
  initialState: initialStateObj,
  reducers: {
    profileImageAction: (state, {
      payload
    }) => {
      state.profileImage = payload;
    },
    profileTypeAction: (state, {
      payload
    }) => {
      state.profileType = payload;
    }
  }
});
const {
  profileImageAction,
  profileTypeAction
} = profileSlice.actions; //it behave like connector (old redux)

const profileSelector = state => state.profile;
/* harmony default export */ __webpack_exports__["default"] = (profileSlice.reducer);

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_boatRegisterSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redux/boatRegisterSlice */ "./redux/boatRegisterSlice.js");
/* harmony import */ var _redux_profileSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./redux/profileSlice */ "./redux/profileSlice.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-persist/lib/storage */ "redux-persist/lib/storage");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_6__);







const customizedMiddleware = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["getDefaultMiddleware"])({
  serializableCheck: false
});
const serverStore = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["configureStore"])({
  reducer: {
    boatRegister: _redux_boatRegisterSlice__WEBPACK_IMPORTED_MODULE_1__["default"],
    profile: _redux_profileSlice__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  middleware: customizedMiddleware,
  devTools: true
});

const store = () => {
  const combinedReducer = Object(redux__WEBPACK_IMPORTED_MODULE_6__["combineReducers"])({
    boatRegister: _redux_boatRegisterSlice__WEBPACK_IMPORTED_MODULE_1__["default"],
    profile: _redux_profileSlice__WEBPACK_IMPORTED_MODULE_2__["default"]
  });
  const persistConfig = {
    key: "Evenimex",
    storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_5___default()),
    blacklist: ["profile"]
  };
  const persistedReducer = Object(redux_persist__WEBPACK_IMPORTED_MODULE_4__["persistReducer"])(persistConfig, combinedReducer);
  const cstore = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["configureStore"])({
    reducer: persistedReducer,
    middleware: customizedMiddleware
  });
  cstore.__persistor = Object(redux_persist__WEBPACK_IMPORTED_MODULE_4__["persistStore"])(cstore);
  return cstore;
};

const makeStore = ({
  isServer
}) => isServer ? serverStore : store();

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__["createWrapper"])(makeStore);

/***/ }),

/***/ "./styles/global/global.style.js":
/*!***************************************!*\
  !*** ./styles/global/global.style.js ***!
  \***************************************/
/*! exports provided: GlobalStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return GlobalStyle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _global_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global/theme */ "./styles/global/theme.js");


const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-weight: 400;
        height: 100%;
        font-size: 14px;
        line-height: 1.5;
        display: flex;
        min-height: 100vh;
        flex-direction: column;
        overflow-x: hidden;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #000;
        background: #fff;
        appearance: auto;
        -moz-appearance: auto;
        -webkit-appearance: auto;
        /* font-family: ${_global_theme__WEBPACK_IMPORTED_MODULE_1__["default"].font.fontFamilyCircularStd}; */
        font-family: 'Montserrat', sans-serif;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    a,
    ul{
        margin: 0;
        padding: 0;
        line-height: normal;
        list-style-type: none;
        text-decoration: none !important;
    }
    a{
        transition: all 0.3s ease-in-out;
        &:hover{
		    opacity: 0.8;
	    }
    }
    .react-responsive-modal-modal{
        padding: 50px 30px;
        border-radius: 4px;
        .react-responsive-modal-closeButton{
            left: 25px;
            top: 20px;
            right:auto;
            transition: all 0.3s ease-in-out;
            path{
                fill: #27292C;
            }
            &:hover{
                opacity: 0.7;
            } 
        } 

        form{
            h3{
                margin: 10px 0px;
            }
            button{
                margin: 20px 0px;
            }
        }
    }
    .pagination{
        display: inline-flex;
        padding: 15px 0;
        li{
            border: 1px solid #D8D8D8;
            position:relative;
            cursor:pointer;
            a{
                font-size: 14px;
                padding: 10px 20px;
                font-weight: normal;
                display: inline-flex;
                font-family: ${_global_theme__WEBPACK_IMPORTED_MODULE_1__["default"].font.fontFamilyCircularStd};
                outline: none;
                box-shadow: none;
            }
        }
        li.active{
            color: ${_global_theme__WEBPACK_IMPORTED_MODULE_1__["default"].color.primary};
        }
        li.active:before{
            background: ${_global_theme__WEBPACK_IMPORTED_MODULE_1__["default"].color.primary};
            
        }
        li:before{
            position: absolute;
            content: "";
            background: transparent;
            width: 100%;
            height: 2px;
            bottom: 0;
            right: 0;
            left: 0;
        }
    }
    .gmnoprint{
        ${""
/* background: #fff;
padding: 10px 20px; */
}
        .gm-style-mtc{
            button{
                box-shadow: none !important;
            }
        }
    }
    .mapbox-checkbox{
        position: relative;
        justify-content: center;
        display: flex;
        top: 25px;
        > div{
            display: flex;
            width: auto;
            padding: 0;
            label{
                flex-basis: 100%;
                max-width: 100%;
                display: flex;
                background: white;
                padding: 8px;
                align-items: center;
                border-radius: 4px;
                span{
                    z-index: 0;
                    font-weight: 500;
                }
            }
        }
    }
    
`; // export default GlobalStyle;

/***/ }),

/***/ "./styles/global/main.style.js":
/*!*************************************!*\
  !*** ./styles/global/main.style.js ***!
  \*************************************/
/*! exports provided: PagesLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesLayout", function() { return PagesLayout; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme */ "./styles/global/theme.js");
/* harmony import */ var _utils_mediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/mediaQuery */ "./utils/mediaQuery.js");



const PagesLayout = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "mainstyle__PagesLayout",
  componentId: "rydznq-0"
})(["display:flex;flex-direction:column;width:100%;height:100%;"]);

/***/ }),

/***/ "./styles/global/theme.js":
/*!********************************!*\
  !*** ./styles/global/theme.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  color: {
    primary: "#FF6600",
    themeBG: "#0170FF",
    primaryDark: "#562EED",
    primaryLight: "#C5CCE2",
    lightblue: "#F0F2F7",
    white: "#FFFFFF",
    lightblack: "#27292C",
    blue: "#0070FF",
    black: "#000000",
    textColor: "#252A50",
    textColor2: "#71758B",
    textLight: "#999EBC",
    fbbtn: "#4567B2",
    labelColor: "#8389A5",
    border: "#DFE4E7",
    inputBorder: "#d5dae2",
    loginBg: "#F4F5FA",
    loginBoxShadow: "0 0 30px rgba(165, 172, 203, 27)",
    formBgColor: "#E1E4ED",
    inputTextColor: "#77838f",
    gredientFirst: "#390879",
    gredientSecond: "#4831D4",
    ButtonBgColorOne: "#ccf381",
    TextMainColor: "#39097c"
  },
  font: {
    fontFamilyAvenir: "Avenir",
    fontFamilyCircularStd: "Circular Std",
    fontFamilyCircularStdBook: "Circular Std Book"
  }
});

/***/ }),

/***/ "./utils/constant.js":
/*!***************************!*\
  !*** ./utils/constant.js ***!
  \***************************/
/*! exports provided: seoDetail, searchRadiusOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seoDetail", function() { return seoDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchRadiusOptions", function() { return searchRadiusOptions; });
const seoDetail = {
  title: "",
  canonical: "",
  desc: "",
  image: "",
  keywords: "",
  siteName: "",
  siteIcon: ""
};
const searchRadiusOptions = [{
  value: 10,
  label: "10 miles"
}, {
  value: 25,
  label: "25 miles"
}, {
  value: 50,
  label: "50 miles"
}, {
  value: 100,
  label: "100 miles"
}, {
  value: 0,
  label: "Anywhere"
}];

/***/ }),

/***/ "./utils/mediaQuery.js":
/*!*****************************!*\
  !*** ./utils/mediaQuery.js ***!
  \*****************************/
/*! exports provided: breakpoints, mediaQueries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakpoints", function() { return breakpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaQueries", function() { return mediaQueries; });
const breakpoints = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600
};
const mediaQueries = key => style => `@media (max-width: ${breakpoints[key]}px) { ${style} }`;

/***/ }),

/***/ "./utils/router.js":
/*!*************************!*\
  !*** ./utils/router.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const dashboardRoute = "/dashboard";
const router = {
  SPLASH: "/splashscreen",
  LOGIN: "/login",
  SIGNUP: "/register",
  FORGOTPASS: "/forgot-password",
  LISTYOURBOAT: "/list-your-boat",
  PROFILE: "/profile",
  HOME: "/",
  RESETPASS: "/reset-password/[token]",
  PAYOUTPREFERENCES: "/payout-preferences",
  CHANGEPASS: "/change-password",
  BOATREGISTRATIONONE: "/boat-registration-one",
  BOATREGISTRATIONTWO: "/boat-registration-two",
  BOATREGISTRATIONTHREE: "/boat-registration-three",
  SEARCHBOAT: "/search-result",
  DASHBOARD: dashboardRoute,
  BOATLISTING: dashboardRoute + "/boat-listing",
  DOCUMENTS: dashboardRoute + "/documents",
  CALENDAR: dashboardRoute + "/calendar",
  SAVEDBOAT: "/saved-boat",
  PASTUPCOMINGTRIP: "/trips"
};
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@fortawesome/free-brands-svg-icons":
/*!*****************************************************!*\
  !*** external "@fortawesome/free-brands-svg-icons" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-auth/client");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-datepicker":
/*!***********************************!*\
  !*** external "react-datepicker" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-datepicker");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "simple-react-lightbox":
/*!****************************************!*\
  !*** external "simple-react-lightbox" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("simple-react-lightbox");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci9pbmRleC5zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC5zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWVCYW5uZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lQmFubmVyL2luZGV4LnN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VvQ29tcG9uZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9pbWFnZS50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2JvYXRSZWdpc3RlclNsaWNlLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3Byb2ZpbGVTbGljZS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvZ2xvYmFsL2dsb2JhbC5zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvZ2xvYmFsL21haW4uc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2dsb2JhbC90aGVtZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9tZWRpYVF1ZXJ5LmpzIiwid2VicGFjazovLy8uL3V0aWxzL3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJlZHV4anMvdG9vbGtpdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtYXV0aC9jbGllbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZGF0ZXBpY2tlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2VsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdG9hc3RpZnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNpbXBsZS1yZWFjdC1saWdodGJveFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiRm9vdGVyQ29tcG9uZW50IiwiZmFSc3MiLCJmYUZhY2Vib29rIiwiZmFUd2l0dGVyIiwiZmFHb29nbGVQbHVzIiwiZmFMaW5rZWRpbiIsImZhWW91dHViZSIsImZhVmltZW8iLCJGb290ZXJDb21wb25lbnRXcmFwcGVyIiwic3R5bGVkIiwic2VjdGlvbiIsIkZvb3Rlck1lbnVNYWluIiwiZGl2IiwiRm9vdGVyTWVudVVsIiwidWwiLCJGb290ZXJNZW51bGkiLCJsaSIsIkZvb3RlclNvaWNhbE1haW4iLCJGb290ZXJTb2ljYWxVbCIsIkZvb3RlclNvaWNhbGxpIiwiRm9vdGVyQm94VGl0bGUiLCJoMyIsIk5ld3NsZXR0ZXJCb3giLCJGb290ZXJDb3B5V3JhcHBlciIsIkZvb3RlckNvcHlyaWdodFRleHQiLCJwIiwiRm9vdGVyUHJpdmFjeVBvbGljeSIsIkhlYWRlckNvbXBvbmVudCIsIkhlYWRlckNvbXBvbmVudFdyYXBwZXIiLCJtZWRpYVF1ZXJpZXMiLCJvcHRpb25zIiwidmFsdWUiLCJsYWJlbCIsIkhvbWVCYW5uZXJDb21wb25lbnQiLCJIb21lQmFubmVyV3JhcHBlciIsIkhvbWVCYW5uZXJDb250ZW50IiwiVGl0bGUiLCJoMSIsIkRlc2NpcGl0aW9uIiwiQmFubmVyU2VhcmNoYm94d2FycHBlciIsIkxheW91dCIsImNoaWxkcmVuIiwicm91dGVycyIsInVzZVJvdXRlciIsInBhdGhuYW1lIiwicm91dGVyIiwiU1BMQVNIIiwiTE9HSU4iLCJTSUdOVVAiLCJGT1JHT1RQQVNTIiwiUkVTRVRQQVNTIiwiTWV0YVNFTyIsIm1ldGFEZXRhaWwiLCJ0aXRsZSIsInNlb0RldGFpbCIsImRlc2MiLCJjYW5vbmljYWwiLCJpbWFnZSIsInNpdGVLZXl3b3JkcyIsImtleXdvcmRzIiwic2l0ZU5hbWUiLCJzaXRlSWNvbiIsImdsb2JhbCIsIlZBTElEX0xPQURJTkdfVkFMVUVTIiwibG9hZGVycyIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJkZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJsb2FkZXIiLCJwYXRoIiwiZG9tYWlucyIsInByb2Nlc3MiLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJhbGxTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiYSIsImxheW91dCIsIndpZHRocyIsImtpbmQiLCJ3aWR0aCIsInciLCJzcmNTZXQiLCJzaXplcyIsImdldFdpZHRocyIsImxhc3QiLCJzcmMiLCJpIiwicGFyc2VJbnQiLCJsb2FkIiwicm9vdCIsIlZBTElEX0xPQURFUlMiLCJjb25maWdMb2FkZXIiLCJ1bm9wdGltaXplZCIsInByaW9yaXR5IiwiYWxsIiwicmVzdCIsInVuc2l6ZWQiLCJCb29sZWFuIiwiSlNPTiIsImxvYWRpbmciLCJpc0xhenkiLCJyb290TWFyZ2luIiwiZGlzYWJsZWQiLCJpc1Zpc2libGUiLCJ3aWR0aEludCIsImdldEludCIsImhlaWdodEludCIsInF1YWxpdHlJbnQiLCJpbWdTdHlsZSIsInZpc2liaWxpdHkiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsImJveFNpemluZyIsInBhZGRpbmciLCJib3JkZXIiLCJtYXJnaW4iLCJkaXNwbGF5IiwiaGVpZ2h0IiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsInF1b3RpZW50IiwicGFkZGluZ1RvcCIsImlzTmFOIiwid3JhcHBlclN0eWxlIiwib3ZlcmZsb3ciLCJzaXplclN0eWxlIiwic2l6ZXJTdmciLCJpbWdBdHRyaWJ1dGVzIiwiZ2VuZXJhdGVJbWdBdHRycyIsInF1YWxpdHkiLCJwYXJhbXMiLCJwYXJhbXNTdHJpbmciLCJub3JtYWxpemVTcmMiLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiY29uc29sZSIsImNvbmZpZ0RvbWFpbnMiLCJob3N0bmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwic3RhcnQiLCJEYXRlIiwic2V0VGltZW91dCIsImNiIiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwic2V0UmVmIiwiZWwiLCJvYnNlcnZlIiwic2V0VmlzaWJsZSIsImNyZWF0ZU9ic2VydmVyIiwiZWxlbWVudHMiLCJvYnNlcnZlciIsIm9ic2VydmVycyIsImlkIiwiaW5zdGFuY2UiLCJlbnRyaWVzIiwiZW50cnkiLCJjYWxsYmFjayIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmUiLCJ1c2VTdG9yZSIsInN0YXRlIiwic2Vzc2lvbiIsIl9fcGVyc2lzdG9yIiwidGhlbWUiLCJ3cmFwcGVyIiwid2l0aFJlZHV4IiwiaW5pdGlhbFN0YXRlT2JqIiwiYm9hdElkIiwiYm9hdFJlZ2lzdGVyU2xpY2UiLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJyZWR1Y2VycyIsImJvYXRJZEFjdGlvbiIsInBheWxvYWQiLCJyZXNldEZvcm1BY3Rpb24iLCJhY3Rpb25zIiwiYm9hdFJlZ2lzdGVyU2VsZWN0b3IiLCJib2F0UmVnaXN0ZXIiLCJyZWR1Y2VyIiwicHJvZmlsZUltYWdlIiwicHJvZmlsZVR5cGUiLCJwcm9maWxlU2xpY2UiLCJwcm9maWxlSW1hZ2VBY3Rpb24iLCJwcm9maWxlVHlwZUFjdGlvbiIsInByb2ZpbGVTZWxlY3RvciIsInByb2ZpbGUiLCJjdXN0b21pemVkTWlkZGxld2FyZSIsImdldERlZmF1bHRNaWRkbGV3YXJlIiwic2VyaWFsaXphYmxlQ2hlY2siLCJzZXJ2ZXJTdG9yZSIsImNvbmZpZ3VyZVN0b3JlIiwiYm9hdFJlZ2lzdGVyUmVkdWNlciIsInByb2ZpbGVSZWR1Y2VyIiwibWlkZGxld2FyZSIsImRldlRvb2xzIiwiY29tYmluZWRSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwicGVyc2lzdENvbmZpZyIsImtleSIsInN0b3JhZ2UiLCJibGFja2xpc3QiLCJwZXJzaXN0ZWRSZWR1Y2VyIiwicGVyc2lzdFJlZHVjZXIiLCJjc3RvcmUiLCJwZXJzaXN0U3RvcmUiLCJtYWtlU3RvcmUiLCJpc1NlcnZlciIsImNyZWF0ZVdyYXBwZXIiLCJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiZm9udCIsImZvbnRGYW1pbHlDaXJjdWxhclN0ZCIsImNvbG9yIiwicHJpbWFyeSIsIlBhZ2VzTGF5b3V0IiwidGhlbWVCRyIsInByaW1hcnlEYXJrIiwicHJpbWFyeUxpZ2h0IiwibGlnaHRibHVlIiwid2hpdGUiLCJsaWdodGJsYWNrIiwiYmx1ZSIsImJsYWNrIiwidGV4dENvbG9yIiwidGV4dENvbG9yMiIsInRleHRMaWdodCIsImZiYnRuIiwibGFiZWxDb2xvciIsImlucHV0Qm9yZGVyIiwibG9naW5CZyIsImxvZ2luQm94U2hhZG93IiwiZm9ybUJnQ29sb3IiLCJpbnB1dFRleHRDb2xvciIsImdyZWRpZW50Rmlyc3QiLCJncmVkaWVudFNlY29uZCIsIkJ1dHRvbkJnQ29sb3JPbmUiLCJUZXh0TWFpbkNvbG9yIiwiZm9udEZhbWlseUF2ZW5pciIsImZvbnRGYW1pbHlDaXJjdWxhclN0ZEJvb2siLCJzZWFyY2hSYWRpdXNPcHRpb25zIiwiYnJlYWtwb2ludHMiLCJ4cyIsInNtIiwibWQiLCJsZyIsInhsIiwieHhsIiwic3R5bGUiLCJkYXNoYm9hcmRSb3V0ZSIsIkxJU1RZT1VSQk9BVCIsIlBST0ZJTEUiLCJIT01FIiwiUEFZT1VUUFJFRkVSRU5DRVMiLCJDSEFOR0VQQVNTIiwiQk9BVFJFR0lTVFJBVElPTk9ORSIsIkJPQVRSRUdJU1RSQVRJT05UV08iLCJCT0FUUkVHSVNUUkFUSU9OVEhSRUUiLCJTRUFSQ0hCT0FUIiwiREFTSEJPQVJEIiwiQk9BVExJU1RJTkciLCJET0NVTUVOVFMiLCJDQUxFTkRBUiIsIlNBVkVEQk9BVCIsIlBBU1RVUENPTUlOR1RSSVAiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FB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O0FBU2J5TixtQkFBaUIsRUFBRSxxQkFUTjtBQVViQyxZQUFVLEVBQUUsa0JBVkM7QUFXYkMscUJBQW1CLEVBQUUsd0JBWFI7QUFZYkMscUJBQW1CLEVBQUUsd0JBWlI7QUFhYkMsdUJBQXFCLEVBQUUsMEJBYlY7QUFjYkMsWUFBVSxFQUFFLGdCQWRDO0FBZWJDLFdBQVMsRUFBRVYsY0FmRTtBQWdCYlcsYUFBVyxFQUFFWCxjQUFjLEdBQUcsZUFoQmpCO0FBaUJiWSxXQUFTLEVBQUVaLGNBQWMsR0FBRyxZQWpCZjtBQWtCYmEsVUFBUSxFQUFFYixjQUFjLEdBQUcsV0FsQmQ7QUFtQmJjLFdBQVMsRUFBRSxhQW5CRTtBQW9CYkMsa0JBQWdCLEVBQUU7QUFwQkwsQ0FBZjtBQXNCZXpPLHFFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBLCtEOzs7Ozs7Ozs7OztBQ0FBLDhEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBDb250YWluZXIsXHJcbiAgUm93LFxyXG4gIENvbCxcclxuICBOYXYsXHJcbiAgSW5wdXRHcm91cCxcclxuICBGb3JtQ29udHJvbCxcclxuICBCdXR0b24sXHJcbn0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgKiBhcyBzIGZyb20gXCIuL2luZGV4LnN0eWxlXCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgZmFSc3MgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIGZhRmFjZWJvb2ssXHJcbiAgZmFZb3V0dWJlLFxyXG4gIGZhVmltZW8sXHJcbiAgZmFMaW5rZWRpbixcclxuICBmYUdvb2dsZVBsdXMsXHJcbiAgZmFUd2l0dGVyLFxyXG59IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zXCI7XHJcblxyXG5jb25zdCBGb290ZXJDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzLkZvb3RlckNvbXBvbmVudFdyYXBwZXI+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgIDxzLkZvb3Rlck1lbnVNYWluPlxyXG4gICAgICAgICAgICAgICAgPHMuRm9vdGVyTWVudVVsPlxyXG4gICAgICAgICAgICAgICAgICA8cy5Gb290ZXJNZW51bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjbGlua1wiPkJsb2c8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L3MuRm9vdGVyTWVudWxpPlxyXG4gICAgICAgICAgICAgICAgICA8cy5Gb290ZXJNZW51bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGNsYXNzTmFtZT1cImFjdGl2ZVwiIGhyZWY9XCIjbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQWRhdWdhIExvY2F0aWVcclxuICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L3MuRm9vdGVyTWVudWxpPlxyXG4gICAgICAgICAgICAgICAgICA8cy5Gb290ZXJNZW51bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjbGlua1wiPkN1bSBmdW5jdGlvbmVhemE8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L3MuRm9vdGVyTWVudWxpPlxyXG4gICAgICAgICAgICAgICAgICA8cy5Gb290ZXJNZW51bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjbGlua1wiPkNvbnRhY3Q8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L3MuRm9vdGVyTWVudWxpPlxyXG4gICAgICAgICAgICAgICAgPC9zLkZvb3Rlck1lbnVVbD5cclxuICAgICAgICAgICAgICA8L3MuRm9vdGVyTWVudU1haW4+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIG1kPXszfT5cclxuICAgICAgICAgICAgICA8cy5Gb290ZXJTb2ljYWxNYWluPlxyXG4gICAgICAgICAgICAgICAgPHMuRm9vdGVyQm94VGl0bGU+VXJtYXJlc3RlLW5lPC9zLkZvb3RlckJveFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPHMuRm9vdGVyU29pY2FsVWw+XHJcbiAgICAgICAgICAgICAgICAgIDxzLkZvb3RlclNvaWNhbGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVJzc30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L3MuRm9vdGVyU29pY2FsbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxzLkZvb3RlclNvaWNhbGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI2xpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFGYWNlYm9va30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L3MuRm9vdGVyU29pY2FsbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxzLkZvb3RlclNvaWNhbGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI2xpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUd2l0dGVyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvcy5Gb290ZXJTb2ljYWxsaT5cclxuICAgICAgICAgICAgICAgICAgPHMuRm9vdGVyU29pY2FsbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUdvb2dsZVBsdXN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9zLkZvb3RlclNvaWNhbGxpPlxyXG4gICAgICAgICAgICAgICAgICA8cy5Gb290ZXJTb2ljYWxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNsaW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhTGlua2VkaW59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9zLkZvb3RlclNvaWNhbGxpPlxyXG4gICAgICAgICAgICAgICAgICA8cy5Gb290ZXJTb2ljYWxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNsaW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhWW91dHViZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L3MuRm9vdGVyU29pY2FsbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxzLkZvb3RlclNvaWNhbGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI2xpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFWaW1lb30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L3MuRm9vdGVyU29pY2FsbGk+XHJcbiAgICAgICAgICAgICAgICA8L3MuRm9vdGVyU29pY2FsVWw+XHJcbiAgICAgICAgICAgICAgPC9zLkZvb3RlclNvaWNhbE1haW4+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIG1kPXszfT5cclxuICAgICAgICAgICAgICA8cy5Gb290ZXJTb2ljYWxNYWluPlxyXG4gICAgICAgICAgICAgICAgPHMuRm9vdGVyQm94VGl0bGU+TmV3c2xldHRlcjwvcy5Gb290ZXJCb3hUaXRsZT5cclxuICAgICAgICAgICAgICAgIDxzLk5ld3NsZXR0ZXJCb3g+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJuZXdzbGV0dGVyLXN1Ym1pdFwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFRyaW1pdGVcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPC9zLk5ld3NsZXR0ZXJCb3g+XHJcbiAgICAgICAgICAgICAgPC9zLkZvb3RlclNvaWNhbE1haW4+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICAgIDxzLkZvb3RlckNvcHlXcmFwcGVyPlxyXG4gICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICA8Q29sIG1kPXs0fT5cclxuICAgICAgICAgICAgICAgIDxzLkZvb3RlckNvcHlyaWdodFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgIFBvbGl0aWNhIGRlIENvbmZpZGVudGlhbGl0YXRlXHJcbiAgICAgICAgICAgICAgICA8L3MuRm9vdGVyQ29weXJpZ2h0VGV4dD5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8Q29sIG1kPXs4fT5cclxuICAgICAgICAgICAgICAgIDxzLkZvb3RlclByaXZhY3lQb2xpY3k+XHJcbiAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI1wiPlBvbGl0aWNhIGRlIENvbmZpZGVudGlhbGl0YXRlPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjXCI+VGVybWVuaSBkZSB1dGlsaXphcmU8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9zLkZvb3RlclByaXZhY3lQb2xpY3k+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9zLkZvb3RlckNvcHlXcmFwcGVyPlxyXG4gICAgICA8L3MuRm9vdGVyQ29tcG9uZW50V3JhcHBlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlckNvbXBvbmVudDtcclxuIiwiaW1wb3J0IHsgbWVkaWFRdWVyaWVzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL21lZGlhUXVlcnlcIjtcclxuaW1wb3J0IHN0eWxlZCwge0NTU30gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5leHBvcnQgY29uc3QgRm9vdGVyQ29tcG9uZW50V3JhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUIxQjFCO1xyXG4gICBib3JkZXItdG9wOiA0cHggc29saWQgIzY3ODdiZjtcclxuICAgcGFkZGluZzogMzBweCAwIDA7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBGb290ZXJNZW51TWFpbiA9IHN0eWxlZC5kaXZgXHJcbiAgIFxyXG5cclxuYDtcclxuZXhwb3J0IGNvbnN0IEZvb3Rlck1lbnVVbCA9IHN0eWxlZC51bGBcclxuICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICBcclxuYDtcclxuZXhwb3J0IGNvbnN0IEZvb3Rlck1lbnVsaSA9IHN0eWxlZC5saWBcclxuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAgYXtcclxuICAgICAgY29sb3I6ICM2QTZBNkE7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIHBhZGRpbmc6IDAgMCAuMjhlbSAwICFpbXBvcnRhbnQ7XHJcbiAgIH1cclxuICAgYTpob3ZlcntcclxuICAgICAgY29sb3I6ICM2Nzg3YmY7XHJcbiAgIH1cclxuICAgYS5hY3RpdmV7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjNjc4N2JmO1xyXG4gICB9XHJcblxyXG5gO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBGb290ZXJTb2ljYWxNYWluID0gc3R5bGVkLmRpdmBcclxuICAgXHJcblxyXG5gO1xyXG5leHBvcnQgY29uc3QgRm9vdGVyU29pY2FsVWwgPSBzdHlsZWQudWxgXHJcbiAgIHBhZGRpbmctbGVmdDogMDtcclxuYDtcclxuZXhwb3J0IGNvbnN0IEZvb3RlclNvaWNhbGxpID0gc3R5bGVkLmxpYFxyXG4gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gICBhe1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkE2QTZBO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgcGFkZGluZzogMCAwIC4yOGVtIDAgIWltcG9ydGFudDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgICB3aWR0aDogMjhweDtcclxuICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgfVxyXG4gICBhOmhvdmVye1xyXG4gICAgICBjb2xvcjogI2RkZDtcclxuICAgfVxyXG5cclxuXHJcblxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RlckJveFRpdGxlID0gc3R5bGVkLmgzYFxyXG4gICBjb2xvcjogIzY3ODdCRjtcclxuICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICBtYXJnaW46IDAgMCAxMnB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5ld3NsZXR0ZXJCb3ggPSBzdHlsZWQuZGl2YFxyXG4gICBcclxuICAgLm5ld3NsZXR0ZXItc3VibWl0e1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ1NDhGIWltcG9ydGFudDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgcGFkZGluZzogN3B4IDE2cHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgfVxyXG5cclxuICAgLmlucHV0LWdyb3VwPi5mb3JtLWNvbnRyb2x7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgfVxyXG5cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBGb290ZXJDb3B5V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwLCAyMCwgMjApO1xyXG4gICBjb2xvcjogI2EyYWJiNztcclxuICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICBmb250LXdlaWdodDogMzAwO1xyXG4gICBwYWRkaW5nOiAxNXB4IDA7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBGb290ZXJDb3B5cmlnaHRUZXh0ID0gc3R5bGVkLnBgXHJcbiAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgbWFyZ2luOiAwO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RlclByaXZhY3lQb2xpY3kgPSBzdHlsZWQuZGl2YFxyXG4gICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG5cclxuICAgYXtcclxuICAgICAgY29sb3I6ICM2QTZBNkE7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgIH1cclxuICAgYTpob3ZlcntcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgIH1cclxuYDtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBOYXZiYXIsIE5hdiwgTmF2RHJvcGRvd24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCAqIGFzIHMgZnJvbSBcIi4vaW5kZXguc3R5bGVcIjtcclxuLy8gaW1wb3J0IEhlYWRlckxvZ28gZnJvbSBcIi4uLy4uL1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbmNvbnN0IEhlYWRlckNvbXBvbmVudCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHMuSGVhZGVyQ29tcG9uZW50V3JhcHBlcj5cclxuICAgICAgICA8TmF2YmFyIGJnPVwiZGFya1wiIGV4cGFuZD1cImxnXCIgY2xhc3NOYW1lPVwibWVudS1uYXZiYXJcIj5cclxuICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIiNob21lXCI+XHJcbiAgICAgICAgICAgICAgey8qIDxJbWFnZSBzcmM9e0hlYWRlckxvZ299IGFsdD1cIkxvZ29cIiB3aWR0aD17MTQ2fSBoZWlnaHQ9ezM2fSAvPiAqL31cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIiBhbHQ9XCJIZWFkZXJMb2dvXCIgLz5cclxuICAgICAgICAgICAgPC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgICAgICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCIgLz5cclxuICAgICAgICAgICAgPE5hdmJhci5Db2xsYXBzZVxyXG4gICAgICAgICAgICAgIGlkPVwiYmFzaWMtbmF2YmFyLW5hdlwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWVuZFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1lbnUtbmF2XCI+XHJcbiAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNob21lXCIgY2xhc3NOYW1lPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgIEFkYXVnYSBMb2NhdGllXHJcbiAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjbGlua1wiPkludHJhIGluIGNvbnQ8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIjbGlua1wiPklucmVnaXN0cmFyZTwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9OYXZiYXI+XHJcbiAgICAgIDwvcy5IZWFkZXJDb21wb25lbnRXcmFwcGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyQ29tcG9uZW50O1xyXG4iLCJpbXBvcnQgeyBtZWRpYVF1ZXJpZXMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvbWVkaWFRdWVyeVwiO1xyXG5pbXBvcnQgc3R5bGVkLCB7Q1NTfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmV4cG9ydCBjb25zdCBIZWFkZXJDb21wb25lbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgXHJcbiAgICAubWVudS1uYXZiYXIubmF2YmFyLWxpZ2h0e1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuOCkgIWltcG9ydGFudDtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICB9XHJcblxyXG4gICAgLm1lbnUtbmF2YmFyIC5uYXZiYXItYnJhbmR7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICB9XHJcblxyXG5cclxuICAgXHJcbiAgICAubWVudS1uYXZpZ2F0aW9ue1xyXG5cclxuICAgICAgICBtYXJnaW46IDUwcHg7XHJcblxyXG4gICAgICAgICR7bWVkaWFRdWVyaWVzKFwibWRcIilgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5tZW51LW5hdmJhci5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5re1xyXG4gICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgIFxyXG5cclxuYDsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENhcm91c2VsLCBDb250YWluZXIsQnV0dG9uLEZvcm1Db250cm9sLEZvcm0sUm93LENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgKiBhcyBzIGZyb20gXCIuL2luZGV4LnN0eWxlXCI7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0JztcclxuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSBcInJlYWN0LWRhdGVwaWNrZXJcIjtcclxuaW1wb3J0IFwicmVhY3QtZGF0ZXBpY2tlci9kaXN0L3JlYWN0LWRhdGVwaWNrZXIuY3NzXCI7XHJcblxyXG5jb25zdCBvcHRpb25zID0gW1xyXG4gIHsgdmFsdWU6ICdMb2NhbGl6YXJlIChPcmFzKScsIGxhYmVsOiAnTG9jYWxpemFyZSAoT3JhcyknIH0sXHJcbiAgeyB2YWx1ZTogJ2Nob2NvbGF0ZScsIGxhYmVsOiAnQ2hvY29sYXRlJyB9LFxyXG4gIHsgdmFsdWU6ICdzdHJhd2JlcnJ5JywgbGFiZWw6ICdTdHJhd2JlcnJ5JyB9LFxyXG4gIHsgdmFsdWU6ICd2YW5pbGxhJywgbGFiZWw6ICdWYW5pbGxhJyB9XHJcbl1cclxuXHJcbmZ1bmN0aW9uIEhvbWVCYW5uZXJDb21wb25lbnQoKSB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgIDxzLkhvbWVCYW5uZXJXcmFwcGVyPlxyXG4gICAgICAgIDxDYXJvdXNlbCBmYWRlPlxyXG4gICAgICAgICAgPENhcm91c2VsLkl0ZW0+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vYXNzZXRzL2ltYWdlcy9ob21lLXNsaWRlLTAxLmpwZ1wiIGFsdD1cIkxvZ29cIi8+XHJcbiAgICAgICAgICA8L0Nhcm91c2VsLkl0ZW0+XHJcbiAgICAgICAgICA8Q2Fyb3VzZWwuSXRlbT5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi9hc3NldHMvaW1hZ2VzL2hvbWUtc2xpZGUtMDIuanBnXCIgYWx0PVwiTG9nb1wiLz5cclxuICAgICAgICAgIDwvQ2Fyb3VzZWwuSXRlbT5cclxuICAgICAgICAgIDxDYXJvdXNlbC5JdGVtPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uL2Fzc2V0cy9pbWFnZXMvaG9tZS1zbGlkZS0wMy5qcGdcIiBhbHQ9XCJMb2dvXCIvPlxyXG4gICAgICAgICAgPC9DYXJvdXNlbC5JdGVtPlxyXG4gICAgICAgICAgPENhcm91c2VsLkl0ZW0+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vYXNzZXRzL2ltYWdlcy9ob21lLXNsaWRlLTA0LmpwZ1wiIGFsdD1cIkxvZ29cIi8+XHJcbiAgICAgICAgICA8L0Nhcm91c2VsLkl0ZW0+XHJcbiAgICAgICAgICA8Q2Fyb3VzZWwuSXRlbT5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi9hc3NldHMvaW1hZ2VzL2hvbWUtc2xpZGUtMDUuanBnXCIgYWx0PVwiTG9nb1wiLz5cclxuICAgICAgICAgIDwvQ2Fyb3VzZWwuSXRlbT5cclxuICAgICAgICAgIDxDYXJvdXNlbC5JdGVtPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uL2Fzc2V0cy9pbWFnZXMvaG9tZS1zbGlkZS0wNi5qcGdcIiBhbHQ9XCJMb2dvXCIvPlxyXG4gICAgICAgICAgPC9DYXJvdXNlbC5JdGVtPlxyXG4gICAgICAgICAgPENhcm91c2VsLkl0ZW0+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vYXNzZXRzL2ltYWdlcy9ob21lLXNsaWRlLTA3LmpwZ1wiIGFsdD1cIkxvZ29cIi8+XHJcbiAgICAgICAgICA8L0Nhcm91c2VsLkl0ZW0+XHJcbiAgICAgICAgICA8Q2Fyb3VzZWwuSXRlbT5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi9hc3NldHMvaW1hZ2VzL2hvbWUtc2xpZGUtMDguanBnXCIgYWx0PVwiTG9nb1wiLz5cclxuICAgICAgICAgIDwvQ2Fyb3VzZWwuSXRlbT5cclxuICAgICAgICA8L0Nhcm91c2VsPlxyXG5cclxuICAgICAgICAgIDxzLkhvbWVCYW5uZXJDb250ZW50PlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8cy5UaXRsZT5FdmVuaW1lbnR1bCB0YXU8L3MuVGl0bGU+XHJcbiAgICAgICAgICAgIDxzLkRlc2NpcGl0aW9uPkNhdXRhIHByaW4gY2VsZSBwZXN0ZSAxMCwwMDAgZGUgbG9jYXRpaS48L3MuRGVzY2lwaXRpb24+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8cy5CYW5uZXJTZWFyY2hib3h3YXJwcGVyPlxyXG4gICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICA8Q29sIG1kPXszfT5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IG9wdGlvbnM9e29wdGlvbnN9ICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgPENvbCBtZD17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXIgcGxhY2Vob2xkZXJUZXh0PVwiRGF0YSBldmVuaW1lbnR1bHVpXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgPENvbCBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJOdW1hciBwYXJ0aWNpcGFudGlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgPENvbCBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlRpcCBFdmVuaW1lbnQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+TnVudGE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxN1wiPkV2ZW5pbWVudGUgc29jaWFsZTwvb3B0aW9uPiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgPENvbCBtZD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJlcXVpcnlmb3JtLWJ0blwiIHR5cGU9XCJzdWJtaXRcIj5DYXV0YTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L0NvbD4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9zLkJhbm5lclNlYXJjaGJveHdhcnBwZXI+XHJcbiAgICAgICAgICA8L3MuSG9tZUJhbm5lckNvbnRlbnQ+XHJcblxyXG4gICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgIDwvcy5Ib21lQmFubmVyV3JhcHBlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbiAgXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSG9tZUJhbm5lckNvbXBvbmVudDsiLCJpbXBvcnQgeyBtZWRpYVF1ZXJpZXMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvbWVkaWFRdWVyeVwiO1xyXG5pbXBvcnQgc3R5bGVkLCB7IENTUyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5leHBvcnQgY29uc3QgSG9tZUJhbm5lcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAuY2Fyb3VzZWwge1xyXG4gICAgaGVpZ2h0OiA2NTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIC5jYXJvdXNlbCAuY2Fyb3VzZWwtY29udHJvbC1wcmV2LFxyXG4gIC5jYXJvdXNlbCAuY2Fyb3VzZWwtY29udHJvbC1uZXh0LFxyXG4gIC5jYXJvdXNlbCAuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuY2Fyb3VzZWwgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJHttZWRpYVF1ZXJpZXMoXCJsZ1wiKWBcclxuICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICBgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhvbWVCYW5uZXJDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAxMDBweDtcclxuICByaWdodDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB6LWluZGV4OiAyO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDUuNGVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtYXJnaW4tYm90dG9tOiAwLjFlbTtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDRweCAzcHggcmdiKDAgMCAwIC8gMzAlKTtcclxuYDtcclxuZXhwb3J0IGNvbnN0IERlc2NpcGl0aW9uID0gc3R5bGVkLnBgXHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDIuNGVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtYXJnaW4tYm90dG9tOiAwLjc1ZW07XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDRweCAzcHggcmdiKDAgMCAwIC8gMzAlKTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBCYW5uZXJTZWFyY2hib3h3YXJwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgZGlzcGxheTogZmxleDtcclxuICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICAgIC5mb3JtLXNlbGVjdCxcclxuICAgIC5mb3JtLWNvbnRyb2wsXHJcbiAgICAucmVhY3QtZGF0ZXBpY2tlcl9faW5wdXQtY29udGFpbmVyIGlucHV0LFxyXG4gICAgLnJlYWN0LWRhdGVwaWNrZXJfX2lucHV0LWNvbnRhaW5lcixcclxuICAgIHNlbGVjdHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogNDJweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAucmVhY3QtZGF0ZXBpY2tlcl9faW5wdXQtY29udGFpbmVyIGlucHV0e1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogNnB4IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgIH1cclxuICAgKltjbGFzcyo9XCJjb2wtbWRcIl0ge3BhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7cGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7fVxyXG5cclxuXHJcbiAgIC5lcXVpcnlmb3JtLWJ0bntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ1NDhGIWltcG9ydGFudDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIHBhZGRpbmc6IDdweCAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgfVxyXG4gICBpbnB1dFt0eXBlPVwibnVtYmVyXCJde1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICY6Zm9jdXN7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTsgICAgICAgIFxyXG4gICB9XHJcbiAgIFxyXG5gO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL0Zvb3RlclwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vSGVhZGVyXCI7XG5pbXBvcnQgSG9tZUJhbm5lciBmcm9tIFwiLi4vSG9tZUJhbm5lclwiO1xuaW1wb3J0IHsgUGFnZXNMYXlvdXQgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL2dsb2JhbC9tYWluLnN0eWxlXCI7XG5pbXBvcnQgcm91dGVyIGZyb20gXCIuLi8uLi91dGlscy9yb3V0ZXJcIjtcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCByb3V0ZXJzID0gdXNlUm91dGVyKCk7XG4gIHJldHVybiAoXG4gICAgPFBhZ2VzTGF5b3V0PlxuICAgICAge3JvdXRlcnMucGF0aG5hbWUgIT0gcm91dGVyLlNQTEFTSCAmJlxuICAgICAgICByb3V0ZXJzLnBhdGhuYW1lICE9IHJvdXRlci5MT0dJTiAmJlxuICAgICAgICByb3V0ZXJzLnBhdGhuYW1lICE9IHJvdXRlci5TSUdOVVAgJiZcbiAgICAgICAgcm91dGVycy5wYXRobmFtZSAhPSByb3V0ZXIuRk9SR09UUEFTUyAmJlxuICAgICAgICByb3V0ZXJzLnBhdGhuYW1lICE9IHJvdXRlci5SRVNFVFBBU1MgJiYgPEhlYWRlciAvPn1cblxuICAgICAge3JvdXRlcnMucGF0aG5hbWUgIT0gcm91dGVyLlNQTEFTSCAmJlxuICAgICAgICByb3V0ZXJzLnBhdGhuYW1lICE9IHJvdXRlci5MT0dJTiAmJlxuICAgICAgICByb3V0ZXJzLnBhdGhuYW1lICE9IHJvdXRlci5TSUdOVVAgJiZcbiAgICAgICAgcm91dGVycy5wYXRobmFtZSAhPSByb3V0ZXIuRk9SR09UUEFTUyAmJlxuICAgICAgICByb3V0ZXJzLnBhdGhuYW1lICE9IHJvdXRlci5SRVNFVFBBU1MgJiYgPEhvbWVCYW5uZXIgLz59XG5cbiAgICAgIHtyb3V0ZXJzLnBhdGhuYW1lICE9IHJvdXRlci5TUExBU0ggJiZcbiAgICAgICAgcm91dGVycy5wYXRobmFtZSAhPSByb3V0ZXIuTE9HSU4gJiZcbiAgICAgICAgcm91dGVycy5wYXRobmFtZSAhPSByb3V0ZXIuU0lHTlVQICYmXG4gICAgICAgIHJvdXRlcnMucGF0aG5hbWUgIT0gcm91dGVyLkZPUkdPVFBBU1MgJiZcbiAgICAgICAgcm91dGVycy5wYXRobmFtZSAhPSByb3V0ZXIuUkVTRVRQQVNTICYmIDxGb290ZXIgLz59XG4gICAgPC9QYWdlc0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IHsgc2VvRGV0YWlsIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50XCJcblxuY29uc3QgTWV0YVNFTyA9ICh7IG1ldGFEZXRhaWwgfSkgPT4ge1xuICBjb25zdCB0aXRsZSA9IG1ldGFEZXRhaWw/LnRpdGxlIHx8IHNlb0RldGFpbC50aXRsZVxuICBjb25zdCBkZXNjID1cbiAgICBtZXRhRGV0YWlsPy5kZXNjIHx8XG4gICAgc2VvRGV0YWlsLmRlc2NcbiAgY29uc3QgY2Fub25pY2FsID0gbWV0YURldGFpbD8uY2Fub25pY2FsIHx8IHNlb0RldGFpbC5jYW5vbmljYWxcbiAgY29uc3QgaW1hZ2UgPSBtZXRhRGV0YWlsPy5pbWFnZSB8fCBzZW9EZXRhaWwuaW1hZ2VcbiAgY29uc3Qgc2l0ZUtleXdvcmRzID0gbWV0YURldGFpbD8ua2V5d29yZHMgfHwgc2VvRGV0YWlsLmtleXdvcmRzXG4gIGNvbnN0IHNpdGVOYW1lID0gc2VvRGV0YWlsLnNpdGVOYW1lXG4gIGNvbnN0IHNpdGVJY29uID0gc2VvRGV0YWlsLnNpdGVJY29uXG5cbiAgcmV0dXJuIChcbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2N9IC8+XG4gICAgICB7bWV0YURldGFpbD8ua2V5d29yZHMgJiYgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD17c2l0ZUtleXdvcmRzfSAvPn1cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJvZzp0aXRsZVwiIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXt0aXRsZX0gLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJvZzpkZXNjcmlwdGlvblwiIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PXtzaXRlTmFtZX0vPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtjYW5vbmljYWx9IC8+XG4gICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PXt0aXRsZX0gLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY30gLz5cbiAgICAgIHsvKiA8bWV0YSBuYW1lPVwidHdpdHRlcjpzaXRlXCIgY29udGVudD1cIkBwcm9wZXJub3VuY29cIiAvPiAqL31cbiAgICAgIHsvKiA8bWV0YSBuYW1lPVwidHdpdHRlcjpjcmVhdG9yXCIgY29udGVudD1cIkBwcm9wZXJub3VuY29cIiAvPiAqL31cbiAgICAgIDxsaW5rXG4gICAgICAgIHJlbD1cImljb25cIlxuICAgICAgICBzaXplcz1cIjE5MngxOTJcIlxuICAgICAgICBocmVmPXttZXRhRGV0YWlsPy5pbWFnZSB8fCBzaXRlSWNvbn1cbiAgICAgIC8+XG4gICAgICA8bGlua1xuICAgICAgICByZWw9XCJhcHBsZS10b3VjaC1pY29uXCJcbiAgICAgICAgaHJlZj17bWV0YURldGFpbD8uaW1hZ2UgfHwgc2l0ZUljb259XG4gICAgICAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e2ltYWdlfSAvPlxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PXtpbWFnZX0gLz5cbiAgICAgIHttZXRhRGV0YWlsPy5jYW5vbmljYWwgJiYgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj17Y2Fub25pY2FsfSAvPn1cbiAgICA8L0hlYWQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWV0YVNFT1xuIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2U7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWQnXG5pbXBvcnQgeyB0b0Jhc2U2NCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0J1xuaW1wb3J0IHtcbiAgSW1hZ2VDb25maWcsXG4gIGltYWdlQ29uZmlnRGVmYXVsdCxcbiAgTG9hZGVyVmFsdWUsXG4gIFZBTElEX0xPQURFUlMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcnXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICA7KGdsb2JhbCBhcyBhbnkpLl9fTkVYVF9JTUFHRV9JTVBPUlRFRCA9IHRydWVcbn1cblxuY29uc3QgVkFMSURfTE9BRElOR19WQUxVRVMgPSBbJ2xhenknLCAnZWFnZXInLCB1bmRlZmluZWRdIGFzIGNvbnN0XG50eXBlIExvYWRpbmdWYWx1ZSA9IHR5cGVvZiBWQUxJRF9MT0FESU5HX1ZBTFVFU1tudW1iZXJdXG5cbmV4cG9ydCB0eXBlIEltYWdlTG9hZGVyID0gKHJlc29sdmVyUHJvcHM6IEltYWdlTG9hZGVyUHJvcHMpID0+IHN0cmluZ1xuXG5leHBvcnQgdHlwZSBJbWFnZUxvYWRlclByb3BzID0ge1xuICBzcmM6IHN0cmluZ1xuICB3aWR0aDogbnVtYmVyXG4gIHF1YWxpdHk/OiBudW1iZXJcbn1cblxudHlwZSBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyA9IEltYWdlTG9hZGVyUHJvcHMgJiB7IHJvb3Q6IHN0cmluZyB9XG5cbmNvbnN0IGxvYWRlcnMgPSBuZXcgTWFwPFxuICBMb2FkZXJWYWx1ZSxcbiAgKHByb3BzOiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcykgPT4gc3RyaW5nXG4+KFtcbiAgWydpbWdpeCcsIGltZ2l4TG9hZGVyXSxcbiAgWydjbG91ZGluYXJ5JywgY2xvdWRpbmFyeUxvYWRlcl0sXG4gIFsnYWthbWFpJywgYWthbWFpTG9hZGVyXSxcbiAgWydkZWZhdWx0JywgZGVmYXVsdExvYWRlcl0sXG5dKVxuXG5jb25zdCBWQUxJRF9MQVlPVVRfVkFMVUVTID0gW1xuICAnZmlsbCcsXG4gICdmaXhlZCcsXG4gICdpbnRyaW5zaWMnLFxuICAncmVzcG9uc2l2ZScsXG4gIHVuZGVmaW5lZCxcbl0gYXMgY29uc3RcbnR5cGUgTGF5b3V0VmFsdWUgPSB0eXBlb2YgVkFMSURfTEFZT1VUX1ZBTFVFU1tudW1iZXJdXG5cbnR5cGUgSW1nRWxlbWVudFN0eWxlID0gTm9uTnVsbGFibGU8SlNYLkludHJpbnNpY0VsZW1lbnRzWydpbWcnXVsnc3R5bGUnXT5cblxuZXhwb3J0IHR5cGUgSW1hZ2VQcm9wcyA9IE9taXQ8XG4gIEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW1nJ10sXG4gICdzcmMnIHwgJ3NyY1NldCcgfCAncmVmJyB8ICd3aWR0aCcgfCAnaGVpZ2h0JyB8ICdsb2FkaW5nJyB8ICdzdHlsZSdcbj4gJiB7XG4gIHNyYzogc3RyaW5nXG4gIGxvYWRlcj86IEltYWdlTG9hZGVyXG4gIHF1YWxpdHk/OiBudW1iZXIgfCBzdHJpbmdcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvYWRpbmc/OiBMb2FkaW5nVmFsdWVcbiAgdW5vcHRpbWl6ZWQ/OiBib29sZWFuXG4gIG9iamVjdEZpdD86IEltZ0VsZW1lbnRTdHlsZVsnb2JqZWN0Rml0J11cbiAgb2JqZWN0UG9zaXRpb24/OiBJbWdFbGVtZW50U3R5bGVbJ29iamVjdFBvc2l0aW9uJ11cbn0gJiAoXG4gICAgfCB7XG4gICAgICAgIHdpZHRoPzogbmV2ZXJcbiAgICAgICAgaGVpZ2h0PzogbmV2ZXJcbiAgICAgICAgLyoqIEBkZXByZWNhdGVkIFVzZSBgbGF5b3V0PVwiZmlsbFwiYCBpbnN0ZWFkICovXG4gICAgICAgIHVuc2l6ZWQ6IHRydWVcbiAgICAgIH1cbiAgICB8IHsgd2lkdGg/OiBuZXZlcjsgaGVpZ2h0PzogbmV2ZXI7IGxheW91dDogJ2ZpbGwnIH1cbiAgICB8IHtcbiAgICAgICAgd2lkdGg6IG51bWJlciB8IHN0cmluZ1xuICAgICAgICBoZWlnaHQ6IG51bWJlciB8IHN0cmluZ1xuICAgICAgICBsYXlvdXQ/OiBFeGNsdWRlPExheW91dFZhbHVlLCAnZmlsbCc+XG4gICAgICB9XG4gIClcblxuY29uc3Qge1xuICBkZXZpY2VTaXplczogY29uZmlnRGV2aWNlU2l6ZXMsXG4gIGltYWdlU2l6ZXM6IGNvbmZpZ0ltYWdlU2l6ZXMsXG4gIGxvYWRlcjogY29uZmlnTG9hZGVyLFxuICBwYXRoOiBjb25maWdQYXRoLFxuICBkb21haW5zOiBjb25maWdEb21haW5zLFxufSA9XG4gICgocHJvY2Vzcy5lbnYuX19ORVhUX0lNQUdFX09QVFMgYXMgYW55KSBhcyBJbWFnZUNvbmZpZykgfHwgaW1hZ2VDb25maWdEZWZhdWx0XG4vLyBzb3J0IHNtYWxsZXN0IHRvIGxhcmdlc3RcbmNvbnN0IGFsbFNpemVzID0gWy4uLmNvbmZpZ0RldmljZVNpemVzLCAuLi5jb25maWdJbWFnZVNpemVzXVxuY29uZmlnRGV2aWNlU2l6ZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpXG5hbGxTaXplcy5zb3J0KChhLCBiKSA9PiBhIC0gYilcblxuZnVuY3Rpb24gZ2V0V2lkdGhzKFxuICB3aWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkLFxuICBsYXlvdXQ6IExheW91dFZhbHVlXG4pOiB7IHdpZHRoczogbnVtYmVyW107IGtpbmQ6ICd3JyB8ICd4JyB9IHtcbiAgaWYgKFxuICAgIHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicgfHxcbiAgICBsYXlvdXQgPT09ICdmaWxsJyB8fFxuICAgIGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnXG4gICkge1xuICAgIHJldHVybiB7IHdpZHRoczogY29uZmlnRGV2aWNlU2l6ZXMsIGtpbmQ6ICd3JyB9XG4gIH1cblxuICBjb25zdCB3aWR0aHMgPSBbXG4gICAgLi4ubmV3IFNldChcbiAgICAgIC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4gICAgICAvLyA+IGFyZSBhY3R1YWxseSAzeCBpbiB0aGUgZ3JlZW4gY29sb3IsIGJ1dCBvbmx5IDEuNXggaW4gdGhlIHJlZCBhbmRcbiAgICAgIC8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuICAgICAgLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2VcbiAgICAgIC8vID4gdGFrZXMgc2lnbmlmaWNhbnRseSBtb3JlIGRhdGEuIEV2ZW4gdHJ1ZSAzeCByZXNvbHV0aW9uIHNjcmVlbnMgYXJlXG4gICAgICAvLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4gICAgICAvLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbiAgICAgIC8vIGh0dHBzOi8vYmxvZy50d2l0dGVyLmNvbS9lbmdpbmVlcmluZy9lbl91cy90b3BpY3MvaW5mcmFzdHJ1Y3R1cmUvMjAxOS9jYXBwaW5nLWltYWdlLWZpZGVsaXR5LW9uLXVsdHJhLWhpZ2gtcmVzb2x1dGlvbi1kZXZpY2VzLmh0bWxcbiAgICAgIFt3aWR0aCwgd2lkdGggKiAyIC8qLCB3aWR0aCAqIDMqL10ubWFwKFxuICAgICAgICAodykgPT4gYWxsU2l6ZXMuZmluZCgocCkgPT4gcCA+PSB3KSB8fCBhbGxTaXplc1thbGxTaXplcy5sZW5ndGggLSAxXVxuICAgICAgKVxuICAgICksXG4gIF1cbiAgcmV0dXJuIHsgd2lkdGhzLCBraW5kOiAneCcgfVxufVxuXG50eXBlIEdlbkltZ0F0dHJzRGF0YSA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgdW5vcHRpbWl6ZWQ6IGJvb2xlYW5cbiAgbGF5b3V0OiBMYXlvdXRWYWx1ZVxuICBsb2FkZXI6IEltYWdlTG9hZGVyXG4gIHdpZHRoPzogbnVtYmVyXG4gIHF1YWxpdHk/OiBudW1iZXJcbiAgc2l6ZXM/OiBzdHJpbmdcbn1cblxudHlwZSBHZW5JbWdBdHRyc1Jlc3VsdCA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgc3JjU2V0OiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgc2l6ZXM6IHN0cmluZyB8IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgc3JjLFxuICB1bm9wdGltaXplZCxcbiAgbGF5b3V0LFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbiAgc2l6ZXMsXG4gIGxvYWRlcixcbn06IEdlbkltZ0F0dHJzRGF0YSk6IEdlbkltZ0F0dHJzUmVzdWx0IHtcbiAgaWYgKHVub3B0aW1pemVkKSB7XG4gICAgcmV0dXJuIHsgc3JjLCBzcmNTZXQ6IHVuZGVmaW5lZCwgc2l6ZXM6IHVuZGVmaW5lZCB9XG4gIH1cblxuICBjb25zdCB7IHdpZHRocywga2luZCB9ID0gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQpXG4gIGNvbnN0IGxhc3QgPSB3aWR0aHMubGVuZ3RoIC0gMVxuXG4gIHJldHVybiB7XG4gICAgc3JjOiBsb2FkZXIoeyBzcmMsIHF1YWxpdHksIHdpZHRoOiB3aWR0aHNbbGFzdF0gfSksXG4gICAgc2l6ZXM6ICFzaXplcyAmJiBraW5kID09PSAndycgPyAnMTAwdncnIDogc2l6ZXMsXG4gICAgc3JjU2V0OiB3aWR0aHNcbiAgICAgIC5tYXAoXG4gICAgICAgICh3LCBpKSA9PlxuICAgICAgICAgIGAke2xvYWRlcih7IHNyYywgcXVhbGl0eSwgd2lkdGg6IHcgfSl9ICR7XG4gICAgICAgICAgICBraW5kID09PSAndycgPyB3IDogaSArIDFcbiAgICAgICAgICB9JHtraW5kfWBcbiAgICAgIClcbiAgICAgIC5qb2luKCcsICcpLFxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEludCh4OiB1bmtub3duKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB4XG4gIH1cbiAgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBwYXJzZUludCh4LCAxMClcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wczogSW1hZ2VMb2FkZXJQcm9wcykge1xuICBjb25zdCBsb2FkID0gbG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKVxuICBpZiAobG9hZCkge1xuICAgIHJldHVybiBsb2FkKHsgcm9vdDogY29uZmlnUGF0aCwgLi4ubG9hZGVyUHJvcHMgfSlcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke1ZBTElEX0xPQURFUlMuam9pbihcbiAgICAgICcsICdcbiAgICApfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWBcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZSh7XG4gIHNyYyxcbiAgc2l6ZXMsXG4gIHVub3B0aW1pemVkID0gZmFsc2UsXG4gIHByaW9yaXR5ID0gZmFsc2UsXG4gIGxvYWRpbmcsXG4gIGNsYXNzTmFtZSxcbiAgcXVhbGl0eSxcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgb2JqZWN0Rml0LFxuICBvYmplY3RQb3NpdGlvbixcbiAgbG9hZGVyID0gZGVmYXVsdEltYWdlTG9hZGVyLFxuICAuLi5hbGxcbn06IEltYWdlUHJvcHMpIHtcbiAgbGV0IHJlc3Q6IFBhcnRpYWw8SW1hZ2VQcm9wcz4gPSBhbGxcbiAgbGV0IGxheW91dDogTm9uTnVsbGFibGU8TGF5b3V0VmFsdWU+ID0gc2l6ZXMgPyAncmVzcG9uc2l2ZScgOiAnaW50cmluc2ljJ1xuICBsZXQgdW5zaXplZCA9IGZhbHNlXG4gIGlmICgndW5zaXplZCcgaW4gcmVzdCkge1xuICAgIHVuc2l6ZWQgPSBCb29sZWFuKHJlc3QudW5zaXplZClcbiAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgZGVsZXRlIHJlc3RbJ3Vuc2l6ZWQnXVxuICB9IGVsc2UgaWYgKCdsYXlvdXQnIGluIHJlc3QpIHtcbiAgICAvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuICAgIGlmIChyZXN0LmxheW91dCkgbGF5b3V0ID0gcmVzdC5sYXlvdXRcblxuICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICBkZWxldGUgcmVzdFsnbGF5b3V0J11cbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCFzcmMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB7IHdpZHRoLCBoZWlnaHQsIHF1YWxpdHkgfVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoXG4gICAgICAgICAgU3RyaW5nXG4gICAgICAgICkuam9pbignLCcpfS5gXG4gICAgICApXG4gICAgfVxuICAgIGlmICghVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoXG4gICAgICAgICAgU3RyaW5nXG4gICAgICAgICkuam9pbignLCcpfS5gXG4gICAgICApXG4gICAgfVxuICAgIGlmIChwcmlvcml0eSAmJiBsb2FkaW5nID09PSAnbGF6eScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAodW5zaXplZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgZGVwcmVjYXRlZCBcInVuc2l6ZWRcIiBwcm9wZXJ0eSwgd2hpY2ggd2FzIHJlbW92ZWQgaW4gZmF2b3Igb2YgdGhlIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5YFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGxldCBpc0xhenkgPVxuICAgICFwcmlvcml0eSAmJiAobG9hZGluZyA9PT0gJ2xhenknIHx8IHR5cGVvZiBsb2FkaW5nID09PSAndW5kZWZpbmVkJylcbiAgaWYgKHNyYyAmJiBzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG4gICAgdW5vcHRpbWl6ZWQgPSB0cnVlXG4gICAgaXNMYXp5ID0gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IFtzZXRSZWYsIGlzSW50ZXJzZWN0ZWRdID0gdXNlSW50ZXJzZWN0aW9uPEhUTUxJbWFnZUVsZW1lbnQ+KHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICAgIGRpc2FibGVkOiAhaXNMYXp5LFxuICB9KVxuICBjb25zdCBpc1Zpc2libGUgPSAhaXNMYXp5IHx8IGlzSW50ZXJzZWN0ZWRcblxuICBjb25zdCB3aWR0aEludCA9IGdldEludCh3aWR0aClcbiAgY29uc3QgaGVpZ2h0SW50ID0gZ2V0SW50KGhlaWdodClcbiAgY29uc3QgcXVhbGl0eUludCA9IGdldEludChxdWFsaXR5KVxuXG4gIGxldCB3cmFwcGVyU3R5bGU6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J11bJ3N0eWxlJ10gfCB1bmRlZmluZWRcbiAgbGV0IHNpemVyU3R5bGU6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J11bJ3N0eWxlJ10gfCB1bmRlZmluZWRcbiAgbGV0IHNpemVyU3ZnOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgbGV0IGltZ1N0eWxlOiBJbWdFbGVtZW50U3R5bGUgfCB1bmRlZmluZWQgPSB7XG4gICAgdmlzaWJpbGl0eTogaXNWaXNpYmxlID8gJ2luaGVyaXQnIDogJ2hpZGRlbicsXG5cbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBib3R0b206IDAsXG4gICAgcmlnaHQ6IDAsXG5cbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIG1hcmdpbjogJ2F1dG8nLFxuXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgIG1heEhlaWdodDogJzEwMCUnLFxuXG4gICAgb2JqZWN0Rml0LFxuICAgIG9iamVjdFBvc2l0aW9uLFxuICB9XG4gIGlmIChcbiAgICB0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBsYXlvdXQgIT09ICdmaWxsJ1xuICApIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XG4gICAgY29uc3QgcXVvdGllbnQgPSBoZWlnaHRJbnQgLyB3aWR0aEludFxuICAgIGNvbnN0IHBhZGRpbmdUb3AgPSBpc05hTihxdW90aWVudCkgPyAnMTAwJScgOiBgJHtxdW90aWVudCAqIDEwMH0lYFxuICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdHlsZSA9IHsgZGlzcGxheTogJ2Jsb2NrJywgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsIHBhZGRpbmdUb3AgfVxuICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnaW50cmluc2ljJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJpbnRyaW5zaWNcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgIH1cbiAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdmcgPSBgPHN2ZyB3aWR0aD1cIiR7d2lkdGhJbnR9XCIgaGVpZ2h0PVwiJHtoZWlnaHRJbnR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIi8+YFxuICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZml4ZWQnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImZpeGVkXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0SW50LFxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlb2Ygd2lkdGhJbnQgPT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGhlaWdodEludCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBsYXlvdXQgPT09ICdmaWxsJ1xuICApIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbiAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICByaWdodDogMCxcblxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBtYXJnaW46IDAsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGxldCBpbWdBdHRyaWJ1dGVzOiBHZW5JbWdBdHRyc1Jlc3VsdCA9IHtcbiAgICBzcmM6XG4gICAgICAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JyxcbiAgICBzcmNTZXQ6IHVuZGVmaW5lZCxcbiAgICBzaXplczogdW5kZWZpbmVkLFxuICB9XG5cbiAgaWYgKGlzVmlzaWJsZSkge1xuICAgIGltZ0F0dHJpYnV0ZXMgPSBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgIHNyYyxcbiAgICAgIHVub3B0aW1pemVkLFxuICAgICAgbGF5b3V0LFxuICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgIHNpemVzLFxuICAgICAgbG9hZGVyLFxuICAgIH0pXG4gIH1cblxuICBpZiAodW5zaXplZCkge1xuICAgIHdyYXBwZXJTdHlsZSA9IHVuZGVmaW5lZFxuICAgIHNpemVyU3R5bGUgPSB1bmRlZmluZWRcbiAgICBpbWdTdHlsZSA9IHVuZGVmaW5lZFxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17d3JhcHBlclN0eWxlfT5cbiAgICAgIHtzaXplclN0eWxlID8gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtzaXplclN0eWxlfT5cbiAgICAgICAgICB7c2l6ZXJTdmcgPyAoXG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj17dHJ1ZX1cbiAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgICAgIHNyYz17YGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHt0b0Jhc2U2NChzaXplclN2Zyl9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgICA8aW1nXG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgICB7Li4uaW1nQXR0cmlidXRlc31cbiAgICAgICAgZGVjb2Rpbmc9XCJhc3luY1wiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICByZWY9e3NldFJlZn1cbiAgICAgICAgc3R5bGU9e2ltZ1N0eWxlfVxuICAgICAgLz5cbiAgICAgIHtwcmlvcml0eSA/IChcbiAgICAgICAgLy8gTm90ZSBob3cgd2Ugb21pdCB0aGUgYGhyZWZgIGF0dHJpYnV0ZSwgYXMgaXQgd291bGQgb25seSBiZSByZWxldmFudFxuICAgICAgICAvLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbiAgICAgICAgLy8gaXQgd291bGQgbGlrZWx5IGNhdXNlIHRoZSBpbmNvcnJlY3QgaW1hZ2UgdG8gYmUgcHJlbG9hZGVkLlxuICAgICAgICAvL1xuICAgICAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGtleT17XG4gICAgICAgICAgICAgICdfX25pbWctJyArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc3JjICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zcmNTZXQgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNpemVzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICAgIGFzPVwiaW1hZ2VcIlxuICAgICAgICAgICAgaHJlZj17aW1nQXR0cmlidXRlcy5zcmNTZXQgPyB1bmRlZmluZWQgOiBpbWdBdHRyaWJ1dGVzLnNyY31cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4gICAgICAgICAgICBpbWFnZXNyY3NldD17aW1nQXR0cmlidXRlcy5zcmNTZXR9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNpemVzIGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4gICAgICAgICAgICBpbWFnZXNpemVzPXtpbWdBdHRyaWJ1dGVzLnNpemVzfVxuICAgICAgICAgID48L2xpbms+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vQlVJTFQgSU4gTE9BREVSU1xuXG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc3JjWzBdID09PSAnLycgPyBzcmMuc2xpY2UoMSkgOiBzcmNcbn1cblxuZnVuY3Rpb24gaW1naXhMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICAvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2Zvcm1hdD1hdXRvJmZpdD1tYXgmdz0zMDBcbiAgY29uc3QgcGFyYW1zID0gWydhdXRvPWZvcm1hdCcsICdmaXQ9bWF4JywgJ3c9JyArIHdpZHRoXVxuICBsZXQgcGFyYW1zU3RyaW5nID0gJydcbiAgaWYgKHF1YWxpdHkpIHtcbiAgICBwYXJhbXMucHVzaCgncT0nICsgcXVhbGl0eSlcbiAgfVxuXG4gIGlmIChwYXJhbXMubGVuZ3RoKSB7XG4gICAgcGFyYW1zU3RyaW5nID0gJz8nICsgcGFyYW1zLmpvaW4oJyYnKVxuICB9XG4gIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9JHtwYXJhbXNTdHJpbmd9YFxufVxuXG5mdW5jdGlvbiBha2FtYWlMb2FkZXIoeyByb290LCBzcmMsIHdpZHRoIH06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWBcbn1cblxuZnVuY3Rpb24gY2xvdWRpbmFyeUxvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIC8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG4gIGNvbnN0IHBhcmFtcyA9IFsnZl9hdXRvJywgJ2NfbGltaXQnLCAnd18nICsgd2lkdGgsICdxXycgKyAocXVhbGl0eSB8fCAnYXV0bycpXVxuICBsZXQgcGFyYW1zU3RyaW5nID0gcGFyYW1zLmpvaW4oJywnKSArICcvJ1xuICByZXR1cm4gYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWBcbn1cblxuZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbWlzc2luZ1ZhbHVlcyA9IFtdXG5cbiAgICAvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbiAgICBpZiAoIXNyYykgbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKVxuICAgIGlmICghd2lkdGgpIG1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKVxuXG4gICAgaWYgKG1pc3NpbmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oXG4gICAgICAgICAgJywgJ1xuICAgICAgICApfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB7IHNyYywgd2lkdGgsIHF1YWxpdHkgfVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJy8vJykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgKC8vKSBtdXN0IGJlIGNoYW5nZWQgdG8gYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoIXNyYy5zdGFydHNXaXRoKCcvJykgJiYgY29uZmlnRG9tYWlucykge1xuICAgICAgbGV0IHBhcnNlZFNyYzogVVJMXG4gICAgICB0cnkge1xuICAgICAgICBwYXJzZWRTcmMgPSBuZXcgVVJMKHNyYylcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmICghY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCArXG4gICAgICAgICAgICBgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWBcbn1cbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdElkbGVDYWxsYmFja1xuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IFNlb0NvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9TZW9Db21wb25lbnRcIjtcbmltcG9ydCB7IEdsb2JhbFN0eWxlIH0gZnJvbSBcIi4uL3N0eWxlcy9nbG9iYWwvZ2xvYmFsLnN0eWxlXCI7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3N0eWxlcy9nbG9iYWwvdGhlbWVcIjtcbmltcG9ydCB7IFByb3ZpZGVyLCBzZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tIFwiLi4vc3RvcmVcIjtcbmltcG9ydCB7IFBlcnNpc3RHYXRlIH0gZnJvbSBcInJlZHV4LXBlcnNpc3QvaW50ZWdyYXRpb24vcmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xuaW1wb3J0IFwiZm9udC1hd2Vzb21lL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiO1xuaW1wb3J0IFwiaWNoZWNrL3NraW5zL2FsbC5jc3NcIjtcbmltcG9ydCBTaW1wbGVSZWFjdExpZ2h0Ym94IGZyb20gXCJzaW1wbGUtcmVhY3QtbGlnaHRib3hcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gICAgY29uc3Qgc3RvcmUgPSB1c2VTdG9yZSgoc3RhdGUpID0+IHN0YXRlKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8UHJvdmlkZXIgc2Vzc2lvbj17cGFnZVByb3BzLnNlc3Npb259PlxuICAgICAgICAgICAgPFBlcnNpc3RHYXRlIHBlcnNpc3Rvcj17c3RvcmUuX19wZXJzaXN0b3J9PlxuICAgICAgICAgICAgICAgIDxHbG9iYWxTdHlsZSAvPlxuICAgICAgICAgICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VvQ29tcG9uZW50IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9hc3RDb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cInRvcC1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0Nsb3NlPXs1MDAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVQcm9ncmVzc0Jhcj17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3ZXN0T25Ub3BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZU9uQ2xpY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydGw9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdXNlT25Gb2N1c0xvc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXVzZU9uSG92ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2ltcGxlUmVhY3RMaWdodGJveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NpbXBsZVJlYWN0TGlnaHRib3g+XG4gICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICAgICAgICAgIDwvUGVyc2lzdEdhdGU+XG4gICAgICAgIDwvUHJvdmlkZXI+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTXlBcHApO1xuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuXG5jb25zdCBpbml0aWFsU3RhdGVPYmogPSB7XG4gICAgYm9hdElkOiBudWxsLFxufTtcblxuZXhwb3J0IGNvbnN0IGJvYXRSZWdpc3RlclNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICAgIG5hbWU6IFwiYm9hdFJlZ2lzdGVyXCIsXG4gICAgaW5pdGlhbFN0YXRlOiBpbml0aWFsU3RhdGVPYmosXG4gICAgcmVkdWNlcnM6IHtcbiAgICAgICAgYm9hdElkQWN0aW9uOiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5ib2F0SWQgPSBwYXlsb2FkO1xuICAgICAgICB9LFxuICAgICAgICByZXNldEZvcm1BY3Rpb246IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgICAgICAgICAgIHN0YXRlLmJvYXRJZCA9IG51bGw7XG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgeyBib2F0SWRBY3Rpb24sIHJlc2V0Rm9ybUFjdGlvbiB9ID0gYm9hdFJlZ2lzdGVyU2xpY2UuYWN0aW9ucztcblxuLy9pdCBiZWhhdmUgbGlrZSBjb25uZWN0b3IgKG9sZCByZWR1eClcbmV4cG9ydCBjb25zdCBib2F0UmVnaXN0ZXJTZWxlY3RvciA9IChzdGF0ZSkgPT4gc3RhdGUuYm9hdFJlZ2lzdGVyO1xuXG5leHBvcnQgZGVmYXVsdCBib2F0UmVnaXN0ZXJTbGljZS5yZWR1Y2VyO1xuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuXG5jb25zdCBpbml0aWFsU3RhdGVPYmogPSB7XG4gICAgcHJvZmlsZUltYWdlOiBudWxsLFxuICAgIHByb2ZpbGVUeXBlOiBcInJlbnRlclwiLFxufTtcblxuZXhwb3J0IGNvbnN0IHByb2ZpbGVTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgICBuYW1lOiBcInByb2ZpbGVcIixcbiAgICBpbml0aWFsU3RhdGU6IGluaXRpYWxTdGF0ZU9iaixcbiAgICByZWR1Y2Vyczoge1xuICAgICAgICBwcm9maWxlSW1hZ2VBY3Rpb246IChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+IHtcbiAgICAgICAgICAgIHN0YXRlLnByb2ZpbGVJbWFnZSA9IHBheWxvYWQ7XG4gICAgICAgIH0sXG4gICAgICAgIHByb2ZpbGVUeXBlQWN0aW9uOiAoc3RhdGUsIHsgcGF5bG9hZCB9KSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5wcm9maWxlVHlwZSA9IHBheWxvYWQ7XG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgeyBwcm9maWxlSW1hZ2VBY3Rpb24sIHByb2ZpbGVUeXBlQWN0aW9uIH0gPSBwcm9maWxlU2xpY2UuYWN0aW9ucztcblxuLy9pdCBiZWhhdmUgbGlrZSBjb25uZWN0b3IgKG9sZCByZWR1eClcbmV4cG9ydCBjb25zdCBwcm9maWxlU2VsZWN0b3IgPSAoc3RhdGUpID0+IHN0YXRlLnByb2ZpbGU7XG5cbmV4cG9ydCBkZWZhdWx0IHByb2ZpbGVTbGljZS5yZWR1Y2VyO1xuIiwiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUsIGdldERlZmF1bHRNaWRkbGV3YXJlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCBib2F0UmVnaXN0ZXJSZWR1Y2VyIGZyb20gXCIuL3JlZHV4L2JvYXRSZWdpc3RlclNsaWNlXCI7XG5pbXBvcnQgcHJvZmlsZVJlZHVjZXIgZnJvbSBcIi4vcmVkdXgvcHJvZmlsZVNsaWNlXCI7XG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xuaW1wb3J0IHsgcGVyc2lzdFJlZHVjZXIsIHBlcnNpc3RTdG9yZSB9IGZyb20gXCJyZWR1eC1wZXJzaXN0XCI7XG5pbXBvcnQgc3RvcmFnZSBmcm9tIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiO1xuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5cbmNvbnN0IGN1c3RvbWl6ZWRNaWRkbGV3YXJlID0gZ2V0RGVmYXVsdE1pZGRsZXdhcmUoe1xuICBzZXJpYWxpemFibGVDaGVjazogZmFsc2UsXG59KTtcblxuY29uc3Qgc2VydmVyU3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XG4gIHJlZHVjZXI6IHtcbiAgICBib2F0UmVnaXN0ZXI6IGJvYXRSZWdpc3RlclJlZHVjZXIsXG4gICAgcHJvZmlsZTogcHJvZmlsZVJlZHVjZXIsXG4gIH0sXG4gIG1pZGRsZXdhcmU6IGN1c3RvbWl6ZWRNaWRkbGV3YXJlLFxuICBkZXZUb29sczogdHJ1ZSxcbn0pO1xuXG5jb25zdCBzdG9yZSA9ICgpID0+IHtcbiAgY29uc3QgY29tYmluZWRSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICBib2F0UmVnaXN0ZXI6IGJvYXRSZWdpc3RlclJlZHVjZXIsXG4gICAgcHJvZmlsZTogcHJvZmlsZVJlZHVjZXIsXG4gIH0pO1xuXG4gIGNvbnN0IHBlcnNpc3RDb25maWcgPSB7XG4gICAga2V5OiBcIkV2ZW5pbWV4XCIsXG4gICAgc3RvcmFnZSxcbiAgICBibGFja2xpc3Q6IFtcInByb2ZpbGVcIl0sXG4gIH07XG5cbiAgY29uc3QgcGVyc2lzdGVkUmVkdWNlciA9IHBlcnNpc3RSZWR1Y2VyKHBlcnNpc3RDb25maWcsIGNvbWJpbmVkUmVkdWNlcik7XG5cbiAgY29uc3QgY3N0b3JlID0gY29uZmlndXJlU3RvcmUoe1xuICAgIHJlZHVjZXI6IHBlcnNpc3RlZFJlZHVjZXIsXG4gICAgbWlkZGxld2FyZTogY3VzdG9taXplZE1pZGRsZXdhcmUsXG4gIH0pO1xuXG4gIGNzdG9yZS5fX3BlcnNpc3RvciA9IHBlcnNpc3RTdG9yZShjc3RvcmUpO1xuICByZXR1cm4gY3N0b3JlO1xufTtcblxuY29uc3QgbWFrZVN0b3JlID0gKHsgaXNTZXJ2ZXIgfSkgPT4gKGlzU2VydmVyID8gc2VydmVyU3RvcmUgOiBzdG9yZSgpKTtcblxuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VTdG9yZSk7XG4iLCJpbXBvcnQgc3R5bGVkLCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL2dsb2JhbC90aGVtZVwiO1xuXG5leHBvcnQgY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbiAgICBib2R5IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBhcHBlYXJhbmNlOiBhdXRvO1xuICAgICAgICAtbW96LWFwcGVhcmFuY2U6IGF1dG87XG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYXV0bztcbiAgICAgICAgLyogZm9udC1mYW1pbHk6ICR7dGhlbWUuZm9udC5mb250RmFtaWx5Q2lyY3VsYXJTdGR9OyAqL1xuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgIH1cbiAgICBoMSxcbiAgICBoMixcbiAgICBoMyxcbiAgICBoNCxcbiAgICBoNSxcbiAgICBoNixcbiAgICBwLFxuICAgIGEsXG4gICAgdWx7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgYXtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgICY6aG92ZXJ7XG5cdFx0ICAgIG9wYWNpdHk6IDAuODtcblx0ICAgIH1cbiAgICB9XG4gICAgLnJlYWN0LXJlc3BvbnNpdmUtbW9kYWwtbW9kYWx7XG4gICAgICAgIHBhZGRpbmc6IDUwcHggMzBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAucmVhY3QtcmVzcG9uc2l2ZS1tb2RhbC1jbG9zZUJ1dHRvbntcbiAgICAgICAgICAgIGxlZnQ6IDI1cHg7XG4gICAgICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgICAgICByaWdodDphdXRvO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICBwYXRoe1xuICAgICAgICAgICAgICAgIGZpbGw6ICMyNzI5MkM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH0gXG5cbiAgICAgICAgZm9ybXtcbiAgICAgICAgICAgIGgze1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidXR0b257XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAucGFnaW5hdGlvbntcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMDtcbiAgICAgICAgbGl7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRDhEOEQ4O1xuICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgICAgICAgIGF7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAke3RoZW1lLmZvbnQuZm9udEZhbWlseUNpcmN1bGFyU3RkfTtcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGkuYWN0aXZle1xuICAgICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3IucHJpbWFyeX07XG4gICAgICAgIH1cbiAgICAgICAgbGkuYWN0aXZlOmJlZm9yZXtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3IucHJpbWFyeX07XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBsaTpiZWZvcmV7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5nbW5vcHJpbnR7XG4gICAgICAgICR7XG4gICAgICAgICAgXCJcIiAvKiBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7ICovXG4gICAgICAgIH1cbiAgICAgICAgLmdtLXN0eWxlLW10Y3tcbiAgICAgICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm1hcGJveC1jaGVja2JveHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgdG9wOiAyNXB4O1xuICAgICAgICA+IGRpdntcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBsYWJlbHtcbiAgICAgICAgICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbmA7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IEdsb2JhbFN0eWxlO1xuIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi90aGVtZVwiO1xuaW1wb3J0IHsgbWVkaWFRdWVyaWVzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL21lZGlhUXVlcnlcIjtcblxuZXhwb3J0IGNvbnN0IFBhZ2VzTGF5b3V0ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbmA7XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIGNvbG9yOiB7XG4gICAgcHJpbWFyeTogXCIjRkY2NjAwXCIsXG4gICAgdGhlbWVCRzogXCIjMDE3MEZGXCIsXG4gICAgcHJpbWFyeURhcms6IFwiIzU2MkVFRFwiLFxuICAgIHByaW1hcnlMaWdodDogXCIjQzVDQ0UyXCIsXG4gICAgbGlnaHRibHVlOiBcIiNGMEYyRjdcIixcbiAgICB3aGl0ZTogXCIjRkZGRkZGXCIsXG4gICAgbGlnaHRibGFjazogXCIjMjcyOTJDXCIsXG4gICAgYmx1ZTogXCIjMDA3MEZGXCIsXG4gICAgYmxhY2s6IFwiIzAwMDAwMFwiLFxuICAgIHRleHRDb2xvcjogXCIjMjUyQTUwXCIsXG4gICAgdGV4dENvbG9yMjogXCIjNzE3NThCXCIsXG4gICAgdGV4dExpZ2h0OiBcIiM5OTlFQkNcIixcbiAgICBmYmJ0bjogXCIjNDU2N0IyXCIsXG4gICAgbGFiZWxDb2xvcjogXCIjODM4OUE1XCIsXG4gICAgYm9yZGVyOiBcIiNERkU0RTdcIixcbiAgICBpbnB1dEJvcmRlcjogXCIjZDVkYWUyXCIsXG4gICAgbG9naW5CZzogXCIjRjRGNUZBXCIsXG4gICAgbG9naW5Cb3hTaGFkb3c6IFwiMCAwIDMwcHggcmdiYSgxNjUsIDE3MiwgMjAzLCAyNylcIixcbiAgICBmb3JtQmdDb2xvcjogXCIjRTFFNEVEXCIsXG4gICAgaW5wdXRUZXh0Q29sb3I6IFwiIzc3ODM4ZlwiLFxuICAgIGdyZWRpZW50Rmlyc3Q6IFwiIzM5MDg3OVwiLFxuICAgIGdyZWRpZW50U2Vjb25kOiBcIiM0ODMxRDRcIixcbiAgICBCdXR0b25CZ0NvbG9yT25lOiBcIiNjY2YzODFcIixcbiAgICBUZXh0TWFpbkNvbG9yOiBcIiMzOTA5N2NcIixcbiAgfSxcbiAgZm9udDoge1xuICAgIGZvbnRGYW1pbHlBdmVuaXI6IFwiQXZlbmlyXCIsXG4gICAgZm9udEZhbWlseUNpcmN1bGFyU3RkOiBcIkNpcmN1bGFyIFN0ZFwiLFxuICAgIGZvbnRGYW1pbHlDaXJjdWxhclN0ZEJvb2s6IFwiQ2lyY3VsYXIgU3RkIEJvb2tcIixcbiAgfSxcbn07XG4iLCJleHBvcnQgY29uc3Qgc2VvRGV0YWlsID0ge1xuICB0aXRsZTogXCJcIixcbiAgY2Fub25pY2FsOiBcIlwiLFxuICBkZXNjOiBcIlwiLFxuICBpbWFnZTogXCJcIixcbiAga2V5d29yZHM6IFwiXCIsXG4gIHNpdGVOYW1lOiBcIlwiLFxuICBzaXRlSWNvbjogXCJcIixcbn07XG5cbmV4cG9ydCBjb25zdCBzZWFyY2hSYWRpdXNPcHRpb25zID0gW1xuICB7IHZhbHVlOiAxMCwgbGFiZWw6IFwiMTAgbWlsZXNcIiB9LFxuICB7IHZhbHVlOiAyNSwgbGFiZWw6IFwiMjUgbWlsZXNcIiB9LFxuICB7IHZhbHVlOiA1MCwgbGFiZWw6IFwiNTAgbWlsZXNcIiB9LFxuICB7IHZhbHVlOiAxMDAsIGxhYmVsOiBcIjEwMCBtaWxlc1wiIH0sXG4gIHsgdmFsdWU6IDAsIGxhYmVsOiBcIkFueXdoZXJlXCIgfSxcbl07XG4iLCJleHBvcnQgY29uc3QgYnJlYWtwb2ludHMgPSB7XG4gIHhzOiA0ODAsXG4gIHNtOiA1NzYsXG4gIG1kOiA3NjgsXG4gIGxnOiA5OTIsXG4gIHhsOiAxMjAwLFxuICB4eGw6IDE2MDAsXG59XG5cbmV4cG9ydCBjb25zdCBtZWRpYVF1ZXJpZXMgPSAoa2V5KSA9PiAoc3R5bGUpID0+XG4gIGBAbWVkaWEgKG1heC13aWR0aDogJHticmVha3BvaW50c1trZXldfXB4KSB7ICR7c3R5bGV9IH1gXG4iLCJjb25zdCBkYXNoYm9hcmRSb3V0ZSA9IFwiL2Rhc2hib2FyZFwiO1xuXG5jb25zdCByb3V0ZXIgPSB7XG4gIFNQTEFTSDogXCIvc3BsYXNoc2NyZWVuXCIsXG4gIExPR0lOOiBcIi9sb2dpblwiLFxuICBTSUdOVVA6IFwiL3JlZ2lzdGVyXCIsXG4gIEZPUkdPVFBBU1M6IFwiL2ZvcmdvdC1wYXNzd29yZFwiLFxuICBMSVNUWU9VUkJPQVQ6IFwiL2xpc3QteW91ci1ib2F0XCIsXG4gIFBST0ZJTEU6IFwiL3Byb2ZpbGVcIixcbiAgSE9NRTogXCIvXCIsXG4gIFJFU0VUUEFTUzogXCIvcmVzZXQtcGFzc3dvcmQvW3Rva2VuXVwiLFxuICBQQVlPVVRQUkVGRVJFTkNFUzogXCIvcGF5b3V0LXByZWZlcmVuY2VzXCIsXG4gIENIQU5HRVBBU1M6IFwiL2NoYW5nZS1wYXNzd29yZFwiLFxuICBCT0FUUkVHSVNUUkFUSU9OT05FOiBcIi9ib2F0LXJlZ2lzdHJhdGlvbi1vbmVcIixcbiAgQk9BVFJFR0lTVFJBVElPTlRXTzogXCIvYm9hdC1yZWdpc3RyYXRpb24tdHdvXCIsXG4gIEJPQVRSRUdJU1RSQVRJT05USFJFRTogXCIvYm9hdC1yZWdpc3RyYXRpb24tdGhyZWVcIixcbiAgU0VBUkNIQk9BVDogXCIvc2VhcmNoLXJlc3VsdFwiLFxuICBEQVNIQk9BUkQ6IGRhc2hib2FyZFJvdXRlLFxuICBCT0FUTElTVElORzogZGFzaGJvYXJkUm91dGUgKyBcIi9ib2F0LWxpc3RpbmdcIixcbiAgRE9DVU1FTlRTOiBkYXNoYm9hcmRSb3V0ZSArIFwiL2RvY3VtZW50c1wiLFxuICBDQUxFTkRBUjogZGFzaGJvYXJkUm91dGUgKyBcIi9jYWxlbmRhclwiLFxuICBTQVZFREJPQVQ6IFwiL3NhdmVkLWJvYXRcIixcbiAgUEFTVFVQQ09NSU5HVFJJUDogXCIvdHJpcHNcIixcbn07XG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGgvY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRhdGVwaWNrZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNlbGVjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2ltcGxlLXJlYWN0LWxpZ2h0Ym94XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
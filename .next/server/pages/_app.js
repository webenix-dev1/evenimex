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

/***/ "+wlD":
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "/lIl":
/***/ (function(module, exports) {

module.exports = require("simple-react-lightbox");

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "080X":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./utils/constant.js
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
// CONCATENATED MODULE: ./components/SeoComponent/index.js





const MetaSEO = ({
  metaDetail
}) => {
  const title = (metaDetail === null || metaDetail === void 0 ? void 0 : metaDetail.title) || seoDetail.title;
  const desc = (metaDetail === null || metaDetail === void 0 ? void 0 : metaDetail.desc) || seoDetail.desc;
  const canonical = (metaDetail === null || metaDetail === void 0 ? void 0 : metaDetail.canonical) || seoDetail.canonical;
  const image = (metaDetail === null || metaDetail === void 0 ? void 0 : metaDetail.image) || seoDetail.image;
  const siteKeywords = (metaDetail === null || metaDetail === void 0 ? void 0 : metaDetail.keywords) || seoDetail.keywords;
  const siteName = seoDetail.siteName;
  const siteIcon = seoDetail.siteIcon;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
      children: title
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      name: "description",
      content: desc
    }), (metaDetail === null || metaDetail === void 0 ? void 0 : metaDetail.keywords) && /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      name: "keywords",
      content: siteKeywords
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      property: "og:type",
      content: "website"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      name: "og:title",
      property: "og:title",
      content: title
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      name: "og:description",
      property: "og:description",
      content: desc
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      property: "og:site_name",
      content: siteName
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      property: "og:url",
      content: canonical
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      name: "twitter:card",
      content: "summary"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      name: "twitter:title",
      content: title
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      name: "twitter:description",
      content: desc
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
      rel: "icon",
      sizes: "192x192",
      href: (metaDetail === null || metaDetail === void 0 ? void 0 : metaDetail.image) || siteIcon
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
      rel: "apple-touch-icon",
      href: (metaDetail === null || metaDetail === void 0 ? void 0 : metaDetail.image) || siteIcon
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      property: "og:image",
      content: image
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
      name: "twitter:image",
      content: image
    }), (metaDetail === null || metaDetail === void 0 ? void 0 : metaDetail.canonical) && /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
      rel: "canonical",
      href: canonical
    })]
  });
};

/* harmony default export */ var SeoComponent = __webpack_exports__["a"] = (MetaSEO);

/***/ }),

/***/ "0G5g":
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

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__("IZS3");

// CONCATENATED MODULE: ./utils/mediaQuery.js
const breakpoints = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600
};
const mediaQueries = key => style => `@media (max-width: ${breakpoints[key]}px) { ${style} }`;
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/Footer/index.style.js


const FooterComponentWrapper = external_styled_components_default.a.section`
   background-color: #1B1B1B;
   border-top: 4px solid #6787bf;
   padding: 30px 0 0;
`;
const FooterMenuMain = external_styled_components_default.a.div`
   

`;
const FooterMenuUl = external_styled_components_default.a.ul`
   padding-left: 0;
   
`;
const FooterMenuli = external_styled_components_default.a.li`
   display: inline-block;

   a{
      color: #6A6A6A;
      font-size: 14px;
      font-weight: bold;
      margin-right: 15px;
      display: inline-block;
      text-decoration: none;
      padding: 0 0 .28em 0 !important;
   }
   a:hover{
      color: #6787bf;
   }
   a.active{
      border-bottom: 4px solid #6787bf;
   }

`;
const FooterSoicalMain = external_styled_components_default.a.div`
   

`;
const FooterSoicalUl = external_styled_components_default.a.ul`
   padding-left: 0;
`;
const FooterSoicalli = external_styled_components_default.a.li`
   display: inline-block;

   a{
      background-color: #6A6A6A;
      font-size: 18px;
      margin-right: 5px;
      display: inline-block;
      text-decoration: none;
      padding: 0 0 .28em 0 !important;
      transition: all 0.3s ease;
      -webkit-transition: all 0.3s ease;
      width: 28px;
      height: 28px;
      text-align: center;
      line-height: 28px;
      color: #fff;
   }
   a:hover{
      color: #ddd;
   }



`;
const FooterBoxTitle = external_styled_components_default.a.h3`
   color: #6787BF;
   font-weight: 700;
   font-size: 15px;
   text-transform: uppercase;
   letter-spacing: 1px;
   margin: 0 0 12px;
`;
const NewsletterBox = external_styled_components_default.a.div`
   
   .newsletter-submit{
      background-color: #34548F!important;
      text-transform: uppercase;
      padding: 7px 16px;
      color: #fff;
      border-radius: 0;
      border: none;
      font-size: 15px;
   }

   .input-group>.form-control{
      border: none;
      border-radius: 0;
   }

`;
const FooterCopyWrapper = external_styled_components_default.a.div`
   display: flex;
   justify-content: space-between;
   background-color: rgb(20, 20, 20);
   color: #a2abb7;
   font-size: 12px;
   font-weight: 300;
   padding: 15px 0;
`;
const FooterCopyrightText = external_styled_components_default.a.p`
   text-align:left;
   margin: 0;
`;
const FooterPrivacyPolicy = external_styled_components_default.a.div`
   text-align:right;

   a{
      color: #6A6A6A;
      font-size: 11px;
      margin-left: 15px;
      display: inline-block;
      text-decoration: none;
      padding: 0;
      transition: all 0.3s ease;
      -webkit-transition: all 0.3s ease;
   }
   a:hover{
      color: #fff;
   }
`;
// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__("faye");

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__("JVe5");

// CONCATENATED MODULE: ./components/Footer/index.js











const FooterComponent = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(FooterComponentWrapper, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Container"], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Row"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
            md: 6,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(FooterMenuMain, {
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(FooterMenuUl, {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(FooterMenuli, {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Nav"].Link, {
                    href: "#link",
                    children: "Blog"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(FooterMenuli, {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Nav"].Link, {
                    className: "active",
                    href: "#link",
                    children: "Adauga Locatie"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(FooterMenuli, {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Nav"].Link, {
                    href: "#link",
                    children: "Cum functioneaza"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(FooterMenuli, {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Nav"].Link, {
                    href: "#link",
                    children: "Contact"
                  })
                })]
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
            md: 3,
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(FooterSoicalMain, {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(FooterBoxTitle, {
                children: "Urmareste-ne"
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(FooterSoicalUl, {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(FooterSoicalli, {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Nav"].Link, {
                    href: "#",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                      icon: free_solid_svg_icons_["faRss"]
                    })
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(FooterSoicalli, {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Nav"].Link, {
                    href: "#link",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                      icon: free_brands_svg_icons_["faFacebook"]
                    })
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(FooterSoicalli, {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Nav"].Link, {
                    href: "#link",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                      icon: free_brands_svg_icons_["faTwitter"]
                    })
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(FooterSoicalli, {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Nav"].Link, {
                    href: "#link",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                      icon: free_brands_svg_icons_["faGooglePlus"]
                    })
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(FooterSoicalli, {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Nav"].Link, {
                    href: "#link",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                      icon: free_brands_svg_icons_["faLinkedin"]
                    })
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(FooterSoicalli, {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Nav"].Link, {
                    href: "#link",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                      icon: free_brands_svg_icons_["faYoutube"]
                    })
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(FooterSoicalli, {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Nav"].Link, {
                    href: "#link",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                      icon: free_brands_svg_icons_["faVimeo"]
                    })
                  })
                })]
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
            md: 3,
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(FooterSoicalMain, {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(FooterBoxTitle, {
                children: "Newsletter"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(NewsletterBox, {
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["InputGroup"], {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["FormControl"], {
                    type: "text"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Button"], {
                    className: "newsletter-submit",
                    type: "submit",
                    children: "Trimite"
                  })]
                })
              })]
            })
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(FooterCopyWrapper, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Container"], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Row"], {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
              md: 4,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(FooterCopyrightText, {
                children: "Politica de Confidentialitate"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
              md: 8,
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(FooterPrivacyPolicy, {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Nav"].Link, {
                  href: "#",
                  children: "Politica de Confidentialitate"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Nav"].Link, {
                  href: "#",
                  children: "Termeni de utilizare"
                })]
              })
            })]
          })
        })
      })]
    })
  });
};

/* harmony default export */ var Footer = (FooterComponent);
// CONCATENATED MODULE: ./components/Header/index.style.js


const HeaderComponentWrapper = external_styled_components_default.a.div`
   
    .menu-navbar.navbar-light{
        padding: 0;
        background-color: rgba(0,0,0,.8) !important;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 99;
    }

    .menu-navbar .navbar-brand{
        padding-bottom: 0;
    }


   
    .menu-navigation{

        margin: 50px;

        ${mediaQueries("md")`
            
        `}

    }

    .menu-navbar.navbar-light .navbar-nav .nav-link{
        color: #fff !important;

    }


   

`;
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__("Aiso");

// CONCATENATED MODULE: ./components/Header/index.js





 // import HeaderLogo from "../../";



const HeaderComponent = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(HeaderComponentWrapper, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Navbar"], {
        bg: "dark",
        expand: "lg",
        className: "menu-navbar",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Container"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Navbar"].Brand, {
            href: "#home",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "/images/logo.png",
              alt: "HeaderLogo"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Navbar"].Toggle, {
            "aria-controls": "basic-navbar-nav"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Navbar"].Collapse, {
            id: "basic-navbar-nav",
            className: "justify-content-end",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Nav"], {
              className: "menu-nav",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Nav"].Link, {
                href: "#home",
                className: "active",
                children: "Adauga Locatie"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Nav"].Link, {
                href: "#link",
                children: "Intra in cont"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Nav"].Link, {
                href: "#link",
                children: "Inregistrare"
              })]
            })
          })]
        })
      })
    })
  });
};

/* harmony default export */ var Header = (HeaderComponent);
// CONCATENATED MODULE: ./components/HomeBanner/index.style.js


const HomeBannerWrapper = external_styled_components_default.a.div`
  position: relative;
  .carousel {
    height: 650px;
    overflow: hidden;
  }
  .carousel .carousel-control-prev,
  .carousel .carousel-control-next,
  .carousel .carousel-indicators {
    display: none;
  }
  .carousel img {
    width: 100%;
  }

  ${mediaQueries("lg")`
        padding:0;
    `}
`;
const HomeBannerContent = external_styled_components_default.a.div`
  position: absolute;
  bottom: 100px;
  right: 0;
  left: 0;
  margin: 0 auto;
  text-align: center;
  z-index: 2;
`;
const Title = external_styled_components_default.a.h1`
  font-weight: 300;
  font-size: 5.4em;
  text-align: center;
  color: #fff;
  margin-bottom: 0.1em;
  text-shadow: 2px 4px 3px rgb(0 0 0 / 30%);
`;
const Descipition = external_styled_components_default.a.p`
  font-weight: 300;
  font-size: 2.4em;
  text-align: center;
  color: #fff;
  margin-bottom: 0.75em;
  margin-top: 0;
  text-shadow: 2px 4px 3px rgb(0 0 0 / 30%);
`;
const BannerSearchboxwarpper = external_styled_components_default.a.div`
   display: flex;
   justify-content: space-between;
    width: 100%;
    max-width: 60%;
    margin: 0 auto;

    .form-select,
    .form-control,
    .react-datepicker__input-container input,
    .react-datepicker__input-container,
    select{
        width: 100%;
        border: none;
        border-radius: 0;
        height: 42px;
        min-height: 42px !important;
    }
   .react-datepicker__input-container input{
    border: none;
    padding: 6px 8px;
    border-radius: 0;
   }
   *[class*="col-md"] {padding-left: 0px !important;padding-right: 0px !important;}


   .equiryform-btn{
        background-color: #34548F!important;
        text-transform: uppercase;
        padding: 7px 16px;
        color: #fff;
        border-radius: 0;
        border: none;
        font-size: 15px;
        width: 100%;
   }
   input[type="number"]{
    appearance: none;
    &:focus{
        box-shadow: none;        
   }
   
`;
// EXTERNAL MODULE: external "react-select"
var external_react_select_ = __webpack_require__("vtRj");
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_);

// EXTERNAL MODULE: external "react-datepicker"
var external_react_datepicker_ = __webpack_require__("ZTWx");
var external_react_datepicker_default = /*#__PURE__*/__webpack_require__.n(external_react_datepicker_);

// EXTERNAL MODULE: ./node_modules/react-datepicker/dist/react-datepicker.css
var react_datepicker = __webpack_require__("5Buo");

// CONCATENATED MODULE: ./components/HomeBanner/index.js










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
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(HomeBannerWrapper, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Carousel"], {
        fade: true,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Carousel"].Item, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "../../assets/images/home-slide-01.jpg",
            alt: "Logo"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Carousel"].Item, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "../../assets/images/home-slide-02.jpg",
            alt: "Logo"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Carousel"].Item, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "../../assets/images/home-slide-03.jpg",
            alt: "Logo"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Carousel"].Item, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "../../assets/images/home-slide-04.jpg",
            alt: "Logo"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Carousel"].Item, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "../../assets/images/home-slide-05.jpg",
            alt: "Logo"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Carousel"].Item, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "../../assets/images/home-slide-06.jpg",
            alt: "Logo"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Carousel"].Item, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "../../assets/images/home-slide-07.jpg",
            alt: "Logo"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Carousel"].Item, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "../../assets/images/home-slide-08.jpg",
            alt: "Logo"
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(HomeBannerContent, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Container"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Title, {
            children: "Evenimentul tau"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Descipition, {
            children: "Cauta prin cele peste 10,000 de locatii."
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(BannerSearchboxwarpper, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Container"], {
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Row"], {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
                md: 3,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_select_default.a, {
                  options: options
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
                md: 3,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_datepicker_default.a, {
                  placeholderText: "Data evenimentului"
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
                md: 2,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["FormControl"], {
                  type: "number",
                  placeholder: "Numar participanti"
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
                md: 2,
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Form"].Select, {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                    value: "",
                    children: "Tip Eveniment"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                    value: "1",
                    children: "Nunta"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                    value: "17",
                    children: "Evenimente sociale"
                  })]
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
                md: 2,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Button"], {
                  className: "equiryform-btn",
                  type: "submit",
                  children: "Cauta"
                })
              })]
            })
          })
        })]
      })]
    })
  });
}

/* harmony default export */ var HomeBanner = (HomeBannerComponent);
// CONCATENATED MODULE: ./styles/global/theme.js
/* harmony default export */ var theme = ({
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
// CONCATENATED MODULE: ./styles/global/main.style.js



const PagesLayout = external_styled_components_default.a.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
// EXTERNAL MODULE: ./utils/router.js
var router = __webpack_require__("TKeM");

// CONCATENATED MODULE: ./components/Layout/index.js










const Layout = ({
  children
}) => {
  const routers = Object(router_["useRouter"])();
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(PagesLayout, {
    children: [routers.pathname != router["a" /* default */].SPLASH && routers.pathname != router["a" /* default */].LOGIN && routers.pathname != router["a" /* default */].SIGNUP && routers.pathname != router["a" /* default */].FORGOTPASS && routers.pathname != router["a" /* default */].RESETPASS && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Header, {}), routers.pathname != router["a" /* default */].SPLASH && routers.pathname != router["a" /* default */].LOGIN && routers.pathname != router["a" /* default */].SIGNUP && routers.pathname != router["a" /* default */].FORGOTPASS && routers.pathname != router["a" /* default */].RESETPASS && /*#__PURE__*/Object(jsx_runtime_["jsx"])(HomeBanner, {}), routers.pathname != router["a" /* default */].SPLASH && routers.pathname != router["a" /* default */].LOGIN && routers.pathname != router["a" /* default */].SIGNUP && routers.pathname != router["a" /* default */].FORGOTPASS && routers.pathname != router["a" /* default */].RESETPASS && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer, {})]
  });
};

/* harmony default export */ var components_Layout = (Layout);
// EXTERNAL MODULE: ./components/SeoComponent/index.js + 1 modules
var SeoComponent = __webpack_require__("080X");

// CONCATENATED MODULE: ./styles/global/global.style.js


const GlobalStyle = external_styled_components_["createGlobalStyle"]`
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
        /* font-family: ${theme.font.fontFamilyCircularStd}; */
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
                font-family: ${theme.font.fontFamilyCircularStd};
                outline: none;
                box-shadow: none;
            }
        }
        li.active{
            color: ${theme.color.primary};
        }
        li.active:before{
            background: ${theme.color.primary};
            
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
// EXTERNAL MODULE: external "next-auth/client"
var client_ = __webpack_require__("FctI");

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__("+wlD");

// CONCATENATED MODULE: ./redux/boatRegisterSlice.js

const initialStateObj = {
  boatId: null
};
const boatRegisterSlice = Object(toolkit_["createSlice"])({
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
/* harmony default export */ var redux_boatRegisterSlice = (boatRegisterSlice.reducer);
// CONCATENATED MODULE: ./redux/profileSlice.js

const profileSlice_initialStateObj = {
  profileImage: null,
  profileType: "renter"
};
const profileSlice = Object(toolkit_["createSlice"])({
  name: "profile",
  initialState: profileSlice_initialStateObj,
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
/* harmony default export */ var redux_profileSlice = (profileSlice.reducer);
// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");

// EXTERNAL MODULE: external "redux-persist"
var external_redux_persist_ = __webpack_require__("VNb8");

// EXTERNAL MODULE: external "redux-persist/lib/storage"
var storage_ = __webpack_require__("T8f9");
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// CONCATENATED MODULE: ./store.js







const customizedMiddleware = Object(toolkit_["getDefaultMiddleware"])({
  serializableCheck: false
});
const serverStore = Object(toolkit_["configureStore"])({
  reducer: {
    boatRegister: redux_boatRegisterSlice,
    profile: redux_profileSlice
  },
  middleware: customizedMiddleware,
  devTools: true
});

const store_store = () => {
  const combinedReducer = Object(external_redux_["combineReducers"])({
    boatRegister: redux_boatRegisterSlice,
    profile: redux_profileSlice
  });
  const persistConfig = {
    key: "Evenimex",
    storage: storage_default.a,
    blacklist: ["profile"]
  };
  const persistedReducer = Object(external_redux_persist_["persistReducer"])(persistConfig, combinedReducer);
  const cstore = Object(toolkit_["configureStore"])({
    reducer: persistedReducer,
    middleware: customizedMiddleware
  });
  cstore.__persistor = Object(external_redux_persist_["persistStore"])(cstore);
  return cstore;
};

const makeStore = ({
  isServer
}) => isServer ? serverStore : store_store();

const wrapper = Object(external_next_redux_wrapper_["createWrapper"])(makeStore);
// EXTERNAL MODULE: external "redux-persist/integration/react"
var react_ = __webpack_require__("JPPj");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__("oAEb");

// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__("jDDT");

// EXTERNAL MODULE: ./node_modules/font-awesome/css/font-awesome.min.css
var font_awesome_min = __webpack_require__("H1Ta");

// EXTERNAL MODULE: ./node_modules/icheck/skins/all.css
var skins_all = __webpack_require__("o3qu");

// EXTERNAL MODULE: external "simple-react-lightbox"
var external_simple_react_lightbox_ = __webpack_require__("/lIl");
var external_simple_react_lightbox_default = /*#__PURE__*/__webpack_require__.n(external_simple_react_lightbox_);

// CONCATENATED MODULE: ./pages/_app.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















function MyApp({
  Component,
  pageProps
}) {
  const store = Object(external_react_redux_["useStore"])(state => state);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(client_["Provider"], {
    session: pageProps.session,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_["PersistGate"], {
      persistor: store.__persistor,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(GlobalStyle, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_styled_components_["ThemeProvider"], {
        theme: theme,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(components_Layout, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(SeoComponent["a" /* default */], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_toastify_["ToastContainer"], {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            newestOnTop: true,
            closeOnClick: true,
            rtl: false,
            pauseOnFocusLoss: true,
            draggable: true,
            pauseOnHover: true
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_simple_react_lightbox_default.a, {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _objectSpread({}, pageProps))
          })]
        })
      })]
    })
  });
}

/* harmony default export */ var _app = __webpack_exports__["default"] = (wrapper.withRedux(MyApp));

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5Buo":
/***/ (function(module, exports) {



/***/ }),

/***/ "7UUK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "8OQS":
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

/***/ "ANQk":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "Aiso":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dQHF")


/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "FctI":
/***/ (function(module, exports) {

module.exports = require("next-auth/client");

/***/ }),

/***/ "H1Ta":
/***/ (function(module, exports) {



/***/ }),

/***/ "IZS3":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "JPPj":
/***/ (function(module, exports) {

module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ "JVe5":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "T8f9":
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "TKeM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UlpK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "VNb8":
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),

/***/ "ZTWx":
/***/ (function(module, exports) {

module.exports = require("react-datepicker");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dQHF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("8OQS"));

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _head = _interopRequireDefault(__webpack_require__("UlpK"));

var _toBase = __webpack_require__("7UUK");

var _imageConfig = __webpack_require__("ANQk");

var _useIntersection = __webpack_require__("vNVm");

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
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default"} || _imageConfig.imageConfigDefault; // sort smallest to largest

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

  if (false) {}

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
    if (false) {}
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
  if (false) {}

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "jDDT":
/***/ (function(module, exports) {



/***/ }),

/***/ "o3qu":
/***/ (function(module, exports) {



/***/ }),

/***/ "oAEb":
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "pVnL":
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

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g"));

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

/***/ "vtRj":
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });
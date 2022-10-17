/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/modalBuyer.js":
/*!**************************************!*\
  !*** ./src/js/modules/modalBuyer.js ***!
  \**************************************/
/*! exports provided: modalBuyer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalBuyer", function() { return modalBuyer; });
function modalBuyer() {
    const headerTopList = document.querySelector('.header-top__list'),
                  arrow = document.querySelector('.header-top__link-icon'),
             modalBuyer = document.querySelector('.header-top__modal');    

    headerTopList.addEventListener('click', (event) => {
        if(event.target && event.target.classList.contains('header-top__link-wrapper')) {
            if(!arrow.classList.contains('header-top__link-open')) {
                arrow.classList.add('header-top__link-open');
                modalBuyer.classList.add('header-top__modal-active');
            } else {
                arrow.classList.remove('header-top__link-open');
                modalBuyer.classList.remove('header-top__modal-active');
            }
        }
    });

    arrow.addEventListener('click', () => {
        if(!arrow.classList.contains('header-top__link-open')) {
            arrow.classList.add('header-top__link-open');
            modalBuyer.classList.add('header-top__modal-active');
        } else {
            arrow.classList.remove('header-top__link-open');
            modalBuyer.classList.remove('header-top__modal-active');
        }
    });
}



/***/ }),

/***/ "./src/js/modules/modalCatalog.js":
/*!****************************************!*\
  !*** ./src/js/modules/modalCatalog.js ***!
  \****************************************/
/*! exports provided: modalCatalog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalCatalog", function() { return modalCatalog; });
function modalCatalog() {
    //Каталог - модальное окно
    const hamburger = document.querySelector('.header-bottom__hamburger'),
         btnCatalog = document.querySelector('.header-bottom__catalog'),
         modalCatalog = document.querySelector('.header-catalog');

    btnCatalog.addEventListener('click', () => {
        if(!hamburger.classList.contains('header-bottom__hamburger-active')) {
            hamburger.classList.add('header-bottom__hamburger-active');
            modalCatalog.classList.add('header-catalog__active');
        } else {
            hamburger.classList.remove('header-bottom__hamburger-active');
            modalCatalog.classList.remove('header-catalog__active');
        }
        //hamburger.classList.toggle('header-bottom__hamburger-active');
    });
}



/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modalCatalog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modalCatalog */ "./src/js/modules/modalCatalog.js");
/* harmony import */ var _modules_modalBuyer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modalBuyer */ "./src/js/modules/modalBuyer.js");



window.addEventListener('DOMContentLoaded', () => {
    Object(_modules_modalCatalog__WEBPACK_IMPORTED_MODULE_0__["modalCatalog"])();
    Object(_modules_modalBuyer__WEBPACK_IMPORTED_MODULE_1__["modalBuyer"])();
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map
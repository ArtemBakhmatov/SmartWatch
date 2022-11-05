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

/***/ "./src/js/modules/cardSliderColor.js":
/*!*******************************************!*\
  !*** ./src/js/modules/cardSliderColor.js ***!
  \*******************************************/
/*! exports provided: cardSliderColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardSliderColor", function() { return cardSliderColor; });
function cardSliderColor() {
    const tabs = document.querySelectorAll('.hits__item-color'), // все табы 
   tabsWrapper = document.querySelector('.hits__item-colors'),   // обертка всех табов
    tabsSlides = document.querySelectorAll('.hits__item-slide'); // все слайды

    function hideTabSlides() {  // Скрыть все слайды
        tabsSlides.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');
        });
        tabs.forEach(item => {
            item.classList.remove('hits__item-color__active');
        });
    }

    function showTabSlides(i) {  // Показать слайд (Первый)
        tabsSlides[i].classList.add('show');
        tabsSlides[i].classList.remove('hide');
        tabs[i].classList.add('hits__item-color__active');
    }

    hideTabSlides();
    showTabSlides(0);

    tabsWrapper.addEventListener('click', (event) => {
        if(event.target && event.target.classList.contains('hits__item-color')) {
            tabs.forEach((item, i) => {
                if(event.target == item) {
                    hideTabSlides();
                    showTabSlides(i);
                }
            });
        }
    });

}



/***/ }),

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

/***/ "./src/js/modules/offerSlider.js":
/*!***************************************!*\
  !*** ./src/js/modules/offerSlider.js ***!
  \***************************************/
/*! exports provided: offerSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offerSlider", function() { return offerSlider; });
function offerSlider() {
    const slides = document.querySelectorAll('.offer__slide'),        // все слайды
           offer = document.querySelector('.offer .container'),       // весь блок в контейнере
            prev = document.querySelector('.offer__slider-prev'),     // стрелка назад
            next = document.querySelector('.offer__slider-next'),     // стрелка вперед
   sliderWrapper = document.querySelector('.offer__slider-wrapper'),  // обёртка всех слайдов
     sliderField = document.querySelector('.offer__slider-inner'),    // гориз-е поле всех слайдов
           width = window.getComputedStyle(sliderWrapper).width;      // ширина обёртки (sliderWrapper)

    let slideIndex = 1,
            offset = 0;                                               // смещение

    sliderField.style.width = 100 * slides.length + '%';

    const indicators = document.createElement('div'),
                dots = [];

    indicators.classList.add('offer__slider-indicators');
    offer.append(indicators);

    for(let i = 0; i < slides.length; i++) {
        const dot = document.createElement('div');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('offer__slider-dot');

        indicators.append(dot);
        dots.push(dot);

        if(i == 0) {
            dot.classList.add('offer__slider-dot__active');
        }
    }

    function setActiveDot() {
        dots.forEach(dot => dot.classList.remove('offer__slider-dot__active'));
        dots[slideIndex - 1].classList.add('offer__slider-dot__active');
    }

    function deleteNotDigits() {                // удалить не цифры
        return +width.replace(/\D/g, '');       // \D - нецифры, g - для всех знаков
    }

    next.addEventListener('click', () => {
        if(offset == deleteNotDigits() * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += deleteNotDigits();
        }

        sliderField.style.transform = `translateX(-${offset}px)`;

        if(slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        setActiveDot();
    });

    prev.addEventListener('click', () => {
        if(offset == 0) {
            offset = deleteNotDigits() * (slides.length - 1);
        } else {
            offset -= deleteNotDigits();
        }

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        sliderField.style.transform = `translateX(-${offset}px)`;
        setActiveDot();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (event) => {
            const slideTo = event.target.getAttribute('data-slide-to');
            slideIndex = slideTo;

            offset = deleteNotDigits(width) * (slideTo - 1);
            sliderField.style.transform = `translateX(-${offset}px)`;

            setActiveDot();
        });
    });
}



/***/ }),

/***/ "./src/js/modules/offerTimer.js":
/*!**************************************!*\
  !*** ./src/js/modules/offerTimer.js ***!
  \**************************************/
/*! exports provided: offerTimer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offerTimer", function() { return offerTimer; });
function offerTimer() {
    const deadline = '2022-11-14';    // время в будущем

    function getTimerRemaining(endtime) {  // получить оставшийся таймер (разница между deadline и наст. время)
        let days, hours, minutes, seconds;

        const t = Date.parse(endtime) - Date.parse(new Date());  // разница в миллисикундах

        if(t <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t / 1000 / 60) % 60);
            seconds = Math.floor((t / 1000) % 60);
        }

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }

    function getZero(num) {   // установить ноль
        if(num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {               // Установить время на странице
        const timer = document.querySelector(selector),  // обёртка всего таймера
               days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
       timeInterval = setInterval(upDateClock, 1000);

        upDateClock(); // запускаем чтобы сработал сразу, а не через одну секунду

        function upDateClock() {   // обновление часов через каждую секунду
            const t = getTimerRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if(t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.offer__slider-squares', deadline);
}



/***/ }),

/***/ "./src/js/modules/reviewsSlider.js":
/*!*****************************************!*\
  !*** ./src/js/modules/reviewsSlider.js ***!
  \*****************************************/
/*! exports provided: reviewsSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviewsSlider", function() { return reviewsSlider; });
function reviewsSlider() {
    const slides = document.querySelectorAll('.reviews__slide'),   // все слайды
         reviews = document.querySelector('.reviews .container'),  // весь блок в контейнере
   sliderWrapper = document.querySelector('.reviews__wrapper'),    // обёртка всех слайдов
     sliderField = document.querySelector('.reviews__inner'),      // гориз-е поле всех слайдов
           width = window.getComputedStyle(sliderWrapper).width;   // ширина обёртки (sliderWrapper)

    let slideIndex = 1,
        offset = 0;                                                // смещение

    sliderField.style.width = 100 * slides.length + '%';

    const indicators = document.createElement('div'),
                dots = [];
    indicators.classList.add('reviews__indicators');
    reviews.append(indicators);

    for(let i = 0; i < slides.length; i++) {
        const dot = document.createElement('div');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('reviews__indicators-dot');

        indicators.append(dot);
        dots.push(dot);

        if(i == 0) {
            dot.classList.add('reviews__indicators-dot__active');
        }
    }

    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.classList.add('reviews__btn');
    btn.textContent = 'Все отзывы';
    reviews.append(btn);

    function setActiveDot() {
        dots.forEach(dot => dot.classList.remove('reviews__indicators-dot__active'));
        dots[slideIndex - 1].classList.add('reviews__indicators-dot__active');
    }

    function deleteNotDigits() {                // удалить не цифры
        return +width.replace(/\D/g, '');       // \D - нецифры, g - для всех знаков
    }

    dots.forEach(dot => {
        dot.addEventListener('click', (event) => {
            const slideTo = event.target.getAttribute('data-slide-to');
            slideIndex = slideTo;

            offset = deleteNotDigits(width) * (slideTo - 1);
            sliderField.style.transform = `translateX(-${offset}px)`;

            setActiveDot();
        });
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
/* harmony import */ var _modules_offerSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/offerSlider */ "./src/js/modules/offerSlider.js");
/* harmony import */ var _modules_offerTimer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/offerTimer */ "./src/js/modules/offerTimer.js");
/* harmony import */ var _modules_reviewsSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/reviewsSlider */ "./src/js/modules/reviewsSlider.js");
/* harmony import */ var _modules_cardSliderColor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/cardSliderColor */ "./src/js/modules/cardSliderColor.js");







window.addEventListener('DOMContentLoaded', () => {
    Object(_modules_modalCatalog__WEBPACK_IMPORTED_MODULE_0__["modalCatalog"])();
    Object(_modules_modalBuyer__WEBPACK_IMPORTED_MODULE_1__["modalBuyer"])();
    Object(_modules_offerSlider__WEBPACK_IMPORTED_MODULE_2__["offerSlider"])();
    Object(_modules_offerTimer__WEBPACK_IMPORTED_MODULE_3__["offerTimer"])();
    Object(_modules_reviewsSlider__WEBPACK_IMPORTED_MODULE_4__["reviewsSlider"])();
    Object(_modules_cardSliderColor__WEBPACK_IMPORTED_MODULE_5__["cardSliderColor"])();
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map
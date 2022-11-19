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

/***/ "./src/js/modules/menuCardChildren.js":
/*!********************************************!*\
  !*** ./src/js/modules/menuCardChildren.js ***!
  \********************************************/
/*! exports provided: menuCardChildren */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuCardChildren", function() { return menuCardChildren; });
function menuCardChildren() {
    function menuCardRender(hit, image1, image2, image3, numberStars, numberReviews, titleCard, blackColor, pinkColor, blueColor, firm, children, priceOld, priceNew, color1, color2, color3) {
    ///////////////////////////// HTML /////////////////////////////////
        const div = document.createElement('div');
        div.classList.add('hits__product');
        
        const item = document.createElement('div');
        item.classList.add('hits__item');
        div.append(item);

        const label = document.createElement('div');
        label.classList.add('hits__item-label');
        label.textContent = hit;
        item.append(label);

        const colors = document.createElement('div');
        colors.classList.add('hits__item-colors');
        item.append(colors);

        const circle1 = document.createElement('div');
        circle1.classList.add('hits__item-circle');
        colors.append(circle1);

        const circleColor1 = document.createElement('span');
        circleColor1.classList.add('hits__item-color');
        circleColor1.classList.add(color1);
        circle1.append(circleColor1);

        const circle2 = document.createElement('div');
        circle2.classList.add('hits__item-circle');
        colors.append(circle2);

        const circleColor2 = document.createElement('span');
        circleColor2.classList.add('hits__item-color');
        circleColor2.classList.add(color2);
        circle2.append(circleColor2);

        const circle3 = document.createElement('div');
        circle3.classList.add('hits__item-circle');
        colors.append(circle3);

        const circleColor3 = document.createElement('span');
        circleColor3.classList.add('hits__item-color');
        circleColor3.classList.add(color3);
        circle3.append(circleColor3);

        const btnsLeft = document.createElement('div');
        btnsLeft.classList.add('hits__item-left');
        item.append(btnsLeft);

        const btnLeft1 = document.createElement('div');
        btnLeft1.classList.add('hits__item-btn');
        btnLeft1.innerHTML = `
            <div class="hits__item-btn__title">
                Добавить в сравнение
            </div>
            <div class="hits__item-btn__img">
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 4.82051C2 3.26279 3.26279 2 4.82051 2C6.37824 2 7.64103 3.26279 7.64103 4.82051V19.1795C7.64103 20.7372 6.37824 22 4.82051 22C3.26279 22 2 20.7372 2 19.1795V4.82051ZM4.82051 3.53846C4.11246 3.53846 3.53846 4.11246 3.53846 4.82051V19.1795C3.53846 19.8875 4.11246 20.4615 4.82051 20.4615C5.52857 20.4615 6.10256 19.8875 6.10256 19.1795V4.82051C6.10256 4.11246 5.52857 3.53846 4.82051 3.53846Z" fill="#AFAFAF"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.17949 9.94872C9.17949 8.39099 10.4423 7.12821 12 7.12821C13.5577 7.12821 14.8205 8.39099 14.8205 9.94872V19.1795C14.8205 20.7372 13.5577 22 12 22C10.4423 22 9.17949 20.7372 9.17949 19.1795V9.94872ZM12 8.66667C11.2919 8.66667 10.7179 9.24066 10.7179 9.94872V19.1795C10.7179 19.8875 11.2919 20.4615 12 20.4615C12.7081 20.4615 13.2821 19.8875 13.2821 19.1795V9.94872C13.2821 9.24066 12.7081 8.66667 12 8.66667Z" fill="#AFAFAF"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.359 4.82051C16.359 3.26279 17.6218 2 19.1795 2C20.7372 2 22 3.26279 22 4.82051V19.1795C22 20.7372 20.7372 22 19.1795 22C17.6218 22 16.359 20.7372 16.359 19.1795V4.82051ZM19.1795 3.53846C18.4714 3.53846 17.8974 4.11246 17.8974 4.82051V19.1795C17.8974 19.8875 18.4714 20.4615 19.1795 20.4615C19.8875 20.4615 20.4615 19.8875 20.4615 19.1795V4.82051C20.4615 4.11246 19.8875 3.53846 19.1795 3.53846Z" fill="#AFAFAF"></path>
                </svg>
            </div>
        `;
        btnsLeft.append(btnLeft1);

        const btnLeft2 = document.createElement('div');
        btnLeft2.classList.add('hits__item-btn');
        btnLeft2.innerHTML = `
            <div class="hits__item-btn__title">
                Добавить в избранное
            </div>
            <div class="hits__item-btn__img">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="#AFAFAF" d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"></path>
                </svg>
            </div>
        `;
        btnsLeft.append(btnLeft2);

        const slider = document.createElement('div');
        slider.classList.add('hits__item-slider');
        item.append(slider);

        const img1 = document.createElement('img');
        img1.classList.add('hits__item-slide');
        slider.append(img1);

        const img2 = document.createElement('img');
        img2.classList.add('hits__item-slide');
        slider.append(img2);

        const img3 = document.createElement('img');
        img3.classList.add('hits__item-slide');
        slider.append(img3);
        
        const sliderImg = [image1, image2, image3];

        img1.src = sliderImg[0];
        img2.src = sliderImg[1];
        img3.src = sliderImg[2];
        
        const blockUnderSlider = document.createElement('div');
        blockUnderSlider.classList.add('hits__item-wrapper');
        item.append(blockUnderSlider);

        const rating = document.createElement('div');
        rating.classList.add('hits__item-rating');
        blockUnderSlider.append(rating);

        const ratingList = document.createElement('ul');
        ratingList.classList.add('hits__item-rating__list');
        rating.append(ratingList);

        const starArray = [];
        const starQuantity = numberStars;

        for(let i = 0; i <= starQuantity - 1; i++) {
            const star = document.createElement('li');
            star.classList.add('hits__item-rating__item');
            star.innerHTML = `
                <svg viewBox="0 0 40 37" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient gradientUnits="userSpaceOnUse" id="_kb11ciszh__11597">
                            <stop stop-color="#ffa900" stop-opacity="1" offset="1"></stop>
                            <stop stop-color="#d2d2d2" stop-opacity="1" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <path d="m19.1147.533962c.3614-.711949 1.409-.711949 1.7704 0l5.4156 10.644638c.1443.283.4223.479.7439.524l12.1088 1.7076c.81.1143 1.1331 1.0805.5478 1.634l-8.7633 8.2861c-.2322.2197-.3389.5373-.2833.8476l2.0679 11.7c.139.7827-.7078 1.3797-1.433 1.0097l-10.8297-5.5231c-.2878-.1467-.632-.1467-.9198 0l-10.83049 5.5231c-.72439.37-1.57126-.227-1.43225-1.0097l2.06797-11.7c.05485-.3103-.0511-.6279-.28405-.8476l-8.761789-8.2861c-.586123-.5535-.2630038-1.5197.547049-1.634l12.10946-1.7076c.3209-.045.5996-.241.7432-.524z" fill="url(#_kb11ciszh__11597)"></path>
                </svg>
            `;
            ratingList.append(star);
            starArray.push(star);
        }

        const reviewsWrapper = document.createElement('div');
        reviewsWrapper.classList.add('hits__item-reviews');

        reviewsWrapper.innerHTML = `
            <div class="hits__item-reviews__point"></div>
            <div class="hits__item-reviews__img">
                <img src="icons/message-reviews.svg" alt="message">
            </div>
            <div class="hits__item-reviews__quantity">${numberReviews}</div>
        `;
        blockUnderSlider.append(reviewsWrapper);

        const title = document.createElement('div');
        title.classList.add('hits__item-title');
        title.textContent = titleCard;
        item.append(title);

        const subtitle = document.createElement('div');
        subtitle.classList.add('hits__item-subtitle');

        const tabsTextColorArr = [blackColor, pinkColor, blueColor];

        const tabsTextColor1 = document.createElement('span');
        tabsTextColor1.classList.add('hits__item-subtitle__tab');
        subtitle.append(tabsTextColor1);
        tabsTextColor1.textContent = tabsTextColorArr[0];

        const tabsTextColor2 = document.createElement('span');
        tabsTextColor2.classList.add('hits__item-subtitle__tab');
        subtitle.append(tabsTextColor2);
        tabsTextColor2.textContent = tabsTextColorArr[1];

        const tabsTextColor3 = document.createElement('span');
        tabsTextColor3.classList.add('hits__item-subtitle__tab');
        subtitle.append(tabsTextColor3);
        tabsTextColor3.textContent = tabsTextColorArr[2];
        

        const textCompanyCatalog = document.createElement('span');
        textCompanyCatalog.textContent = `/ ${firm} / ${children}`;
        subtitle.append(textCompanyCatalog);
        item.append(subtitle);

        const priceWrapper = document.createElement('div');
        priceWrapper.classList.add('hits__item-price');
        priceWrapper.innerHTML = `
            <div class="hits__item-price__old">${priceOld}₽</div>
            <div class="hits__item-price__new">${priceNew}₽</div>
        `;
        item.append(priceWrapper);

        const bottomWrapper = document.createElement('div');
        bottomWrapper.classList.add('hits__item-bottom');
        item.append(bottomWrapper);

        const btnBottom = document.createElement('button');
        btnBottom.classList.add('btn');
        btnBottom.classList.add('hits__item-bottom__btn');
        btnBottom.textContent = 'Подробнее';
        bottomWrapper.append(btnBottom);

        const btnBasket = document.createElement('div');
        btnBasket.classList.add('hits__item-bottom__basket');
        btnBasket.innerHTML = `
            <div class="hits__item-bottom__title">
                Добавить в корзину
            </div>
            <div class="hits__item-bottom__img">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 19.25 19.25" style="enable-background:new 0 0 19.25 19.25;" xml:space="preserve">
                <g>
                <g id="Layer_1_107_">
                <g>
                    <path fill="#cb11ab" d="M19.006,2.97c-0.191-0.219-0.466-0.345-0.756-0.345H4.431L4.236,1.461
                        C4.156,0.979,3.739,0.625,3.25,0.625H1c-0.553,0-1,0.447-1,1s0.447,1,1,1h1.403l1.86,11.164c0.008,0.045,0.031,0.082,0.045,0.124
                        c0.016,0.053,0.029,0.103,0.054,0.151c0.032,0.066,0.075,0.122,0.12,0.179c0.031,0.039,0.059,0.078,0.095,0.112
                        c0.058,0.054,0.125,0.092,0.193,0.13c0.038,0.021,0.071,0.049,0.112,0.065c0.116,0.047,0.238,0.075,0.367,0.075
                        c0.001,0,11.001,0,11.001,0c0.553,0,1-0.447,1-1s-0.447-1-1-1H6.097l-0.166-1H17.25c0.498,0,0.92-0.366,0.99-0.858l1-7
                        C19.281,3.479,19.195,3.188,19.006,2.97z M17.097,4.625l-0.285,2H13.25v-2H17.097z M12.25,4.625v2h-3v-2H12.25z M12.25,7.625v2
                        h-3v-2H12.25z M8.25,4.625v2h-3c-0.053,0-0.101,0.015-0.148,0.03l-0.338-2.03H8.25z M5.264,7.625H8.25v2H5.597L5.264,7.625z
                        M13.25,9.625v-2h3.418l-0.285,2H13.25z"/>
                    <circle fill="#cb11ab" cx="6.75" cy="17.125" r="1.5"/>
                    <circle fill="#cb11ab" cx="15.75" cy="17.125" r="1.5"/>
                </g>
                </g>
                </g>
                </svg>
            </div>
        `;
        
        bottomWrapper.append(btnBasket);
        
        document.querySelector('.hits__content-children').append(div);
    ///////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////slider////////////////////////////
        const imgArr = [];
        imgArr.push(img1, img2, img3);

        const circleArr = [];
        circleArr.push(circle1, circle2, circle3);

        const tabsTextColorArray = [];
        tabsTextColorArray.push(tabsTextColor1, tabsTextColor2, tabsTextColor3);

        function hideTabSlides() {  // Скрыть всё
            imgArr.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('show', 'fade');
            });
            circleArr.forEach(item => {
                item.classList.remove('hits__item-circle__active');
            });
            tabsTextColorArray.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('show');
            });    
        }

        function showTabSlides(i) {  // Показать слайд (Первый)
            imgArr[i].classList.add('show', 'fade');
            imgArr[i].classList.remove('hide');
            circleArr[i].classList.add('hits__item-circle__active');
            tabsTextColorArray[i].classList.add('show');
            tabsTextColorArray[i].classList.remove('hide');
        }
        hideTabSlides();
        showTabSlides(0);

        colors.addEventListener('click', (event) => {
            const circlecolorArr = [];
            circlecolorArr.push(circleColor1, circleColor2, circleColor3);
            if(event.target && event.target.classList.contains('hits__item-color')) {
                circlecolorArr.forEach((item, i) => {
                    if(event.target == item) {
                        hideTabSlides();
                        showTabSlides(i);
                    }
                });
            }
        });
    }

    menuCardRender(
        'new',
        'img/cards/children/wonlex/KT17/black.jpeg',
        'img/cards/children/wonlex/KT17/pink.jpeg',
        'img/cards/children/wonlex/KT17/blue.jpeg',
        4,
        6,
        'Детские смарт-часы KT22 «4G»',
        'Черные',
        'Розовые', 
        'Голубые',
        'Wonlex',
        'Для детей',
        '8490',
        '6900',
        'black',
        'pink',
        'blue'
    );  
    menuCardRender(
        'hit',
        'img/cards/children/wonlex/KT15/black.jpg',
        'img/cards/children/wonlex/KT15/pink.jpg',
        'img/cards/children/wonlex/KT15/blue.jpg',
        5,
        13,
        'Детские смарт-часы KT15 «4G»',
        'Черные',
        'Розовые', 
        'Голубые',
        'Wonlex',
        'Для детей',
        '9490',
        '7490',
        'black',
        'pink',
        'blue'
    ); 
    menuCardRender(
        'hit',
        'img/cards/children/wonlex/KT12/black.jpg',
        'img/cards/children/wonlex/KT12/pink.jpg',
        'img/cards/children/wonlex/KT12/blue.jpg',
        5,
        11,
        'Детские смарт-часы KT12 «4G»',
        'Черные',
        'Розовые', 
        'Голубые',
        'Wonlex',
        'Для детей',
        '8490',
        '6490',
        'black',
        'pink',
        'blue'
    ); 
    menuCardRender(
        'hit',
        'img/cards/children/wonlex/GW500s/black.jpg',
        'img/cards/children/wonlex/GW500s/pink.jpg',
        'img/cards/children/wonlex/GW500s/blue.jpg',
        3,
        37,
        'Детские смарт-часы GW500s',
        'Черные',
        'Розовые', 
        'Голубые',
        'Wonlex',
        'Для детей',
        '5490',
        '3490',
        'black',
        'pink',
        'blue'
    ); 
    menuCardRender(
        'hit',
        'img/cards/children/wonlex/KT22/black.jpg',
        'img/cards/children/wonlex/KT22/pink.jpg',
        'img/cards/children/wonlex/KT22/blue.jpg',
        5,
        25,
        'Детские смарт-часы KT22 «4G»',
        'Черные',
        'Розовые', 
        'Голубые',
        'Wonlex',
        'Для детей',
        '8490',
        '6490',
        'black',
        'pink',
        'blue'
    );  
}    
    


/***/ }),

/***/ "./src/js/modules/menuCardElderly.js":
/*!*******************************************!*\
  !*** ./src/js/modules/menuCardElderly.js ***!
  \*******************************************/
/*! exports provided: menuCardElderly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuCardElderly", function() { return menuCardElderly; });
function menuCardElderly() {
    function menuCardRender(hit, image1, image2, image3, numberStars, numberReviews, titleCard, blackColor, pinkColor, blueColor, firm, children, priceOld, priceNew, color1, color2, color3, opacity) {
        ///////////////////////////// HTML /////////////////////////////////
        const div = document.createElement('div');
        div.classList.add('hits__product');
        
        const item = document.createElement('div');
        item.classList.add('hits__item');
        div.append(item);

        const label = document.createElement('div');
        label.classList.add('hits__item-label');
        label.textContent = hit;
        item.append(label);

        const colors = document.createElement('div');
        colors.classList.add('hits__item-colors');
        item.append(colors);

        const circle1 = document.createElement('div');
        circle1.classList.add('hits__item-circle');
        colors.append(circle1);

        const circleColor1 = document.createElement('span');
        circleColor1.classList.add('hits__item-color');
        circleColor1.classList.add(color1);
        circle1.append(circleColor1);

        const circle2 = document.createElement('div');
        circle2.classList.add('hits__item-circle');
        circle2.classList.add(opacity);
        colors.append(circle2);

        const circleColor2 = document.createElement('span');
        circleColor2.classList.add('hits__item-color');
        circleColor2.classList.add(color2);
        circle2.append(circleColor2);

        const circle3 = document.createElement('div');
        circle3.classList.add('hits__item-circle');
        circle3.classList.add(opacity);
        colors.append(circle3);

        const circleColor3 = document.createElement('span');
        circleColor3.classList.add('hits__item-color');
        circleColor3.classList.add(color3);
        circle3.append(circleColor3);

        const btnsLeft = document.createElement('div');
        btnsLeft.classList.add('hits__item-left');
        item.append(btnsLeft);

        const btnLeft1 = document.createElement('div');
        btnLeft1.classList.add('hits__item-btn');
        btnLeft1.innerHTML = `
            <div class="hits__item-btn__title">
                Добавить в сравнение
            </div>
            <div class="hits__item-btn__img">
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 4.82051C2 3.26279 3.26279 2 4.82051 2C6.37824 2 7.64103 3.26279 7.64103 4.82051V19.1795C7.64103 20.7372 6.37824 22 4.82051 22C3.26279 22 2 20.7372 2 19.1795V4.82051ZM4.82051 3.53846C4.11246 3.53846 3.53846 4.11246 3.53846 4.82051V19.1795C3.53846 19.8875 4.11246 20.4615 4.82051 20.4615C5.52857 20.4615 6.10256 19.8875 6.10256 19.1795V4.82051C6.10256 4.11246 5.52857 3.53846 4.82051 3.53846Z" fill="#AFAFAF"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.17949 9.94872C9.17949 8.39099 10.4423 7.12821 12 7.12821C13.5577 7.12821 14.8205 8.39099 14.8205 9.94872V19.1795C14.8205 20.7372 13.5577 22 12 22C10.4423 22 9.17949 20.7372 9.17949 19.1795V9.94872ZM12 8.66667C11.2919 8.66667 10.7179 9.24066 10.7179 9.94872V19.1795C10.7179 19.8875 11.2919 20.4615 12 20.4615C12.7081 20.4615 13.2821 19.8875 13.2821 19.1795V9.94872C13.2821 9.24066 12.7081 8.66667 12 8.66667Z" fill="#AFAFAF"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.359 4.82051C16.359 3.26279 17.6218 2 19.1795 2C20.7372 2 22 3.26279 22 4.82051V19.1795C22 20.7372 20.7372 22 19.1795 22C17.6218 22 16.359 20.7372 16.359 19.1795V4.82051ZM19.1795 3.53846C18.4714 3.53846 17.8974 4.11246 17.8974 4.82051V19.1795C17.8974 19.8875 18.4714 20.4615 19.1795 20.4615C19.8875 20.4615 20.4615 19.8875 20.4615 19.1795V4.82051C20.4615 4.11246 19.8875 3.53846 19.1795 3.53846Z" fill="#AFAFAF"></path>
                </svg>
            </div>
        `;
        btnsLeft.append(btnLeft1);

        const btnLeft2 = document.createElement('div');
        btnLeft2.classList.add('hits__item-btn');
        btnLeft2.innerHTML = `
            <div class="hits__item-btn__title">
                Добавить в избранное
            </div>
            <div class="hits__item-btn__img">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="#AFAFAF" d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"></path>
                </svg>
            </div>
        `;
        btnsLeft.append(btnLeft2);

        const slider = document.createElement('div');
        slider.classList.add('hits__item-slider');
        item.append(slider);

        const img1 = document.createElement('img');
        img1.classList.add('hits__item-slide');
        slider.append(img1);

        const img2 = document.createElement('img');
        img2.classList.add('hits__item-slide');
        slider.append(img2);

        const img3 = document.createElement('img');
        img3.classList.add('hits__item-slide');
        slider.append(img3);
        
        const sliderImg = [image1, image2, image3];

        img1.src = sliderImg[0];
        img2.src = sliderImg[1];
        img3.src = sliderImg[2];
        
        const blockUnderSlider = document.createElement('div');
        blockUnderSlider.classList.add('hits__item-wrapper');
        item.append(blockUnderSlider);

        const rating = document.createElement('div');
        rating.classList.add('hits__item-rating');
        blockUnderSlider.append(rating);

        const ratingList = document.createElement('ul');
        ratingList.classList.add('hits__item-rating__list');
        rating.append(ratingList);

        const starArray = [];
        const starQuantity = numberStars;

        for(let i = 0; i <= starQuantity - 1; i++) {
            const star = document.createElement('li');
            star.classList.add('hits__item-rating__item');
            star.innerHTML = `
                <svg viewBox="0 0 40 37" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient gradientUnits="userSpaceOnUse" id="_kb11ciszh__11597">
                            <stop stop-color="#ffa900" stop-opacity="1" offset="1"></stop>
                            <stop stop-color="#d2d2d2" stop-opacity="1" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <path d="m19.1147.533962c.3614-.711949 1.409-.711949 1.7704 0l5.4156 10.644638c.1443.283.4223.479.7439.524l12.1088 1.7076c.81.1143 1.1331 1.0805.5478 1.634l-8.7633 8.2861c-.2322.2197-.3389.5373-.2833.8476l2.0679 11.7c.139.7827-.7078 1.3797-1.433 1.0097l-10.8297-5.5231c-.2878-.1467-.632-.1467-.9198 0l-10.83049 5.5231c-.72439.37-1.57126-.227-1.43225-1.0097l2.06797-11.7c.05485-.3103-.0511-.6279-.28405-.8476l-8.761789-8.2861c-.586123-.5535-.2630038-1.5197.547049-1.634l12.10946-1.7076c.3209-.045.5996-.241.7432-.524z" fill="rgb(255, 169, 0)"></path>
                </svg>
            `;
            ratingList.append(star);
            starArray.push(star);
        }

        const reviewsWrapper = document.createElement('div');
        reviewsWrapper.classList.add('hits__item-reviews');

        reviewsWrapper.innerHTML = `
            <div class="hits__item-reviews__point"></div>
            <div class="hits__item-reviews__img">
                <img src="icons/message-reviews.svg" alt="message">
            </div>
            <div class="hits__item-reviews__quantity">${numberReviews}</div>
        `;
        blockUnderSlider.append(reviewsWrapper);

        const title = document.createElement('div');
        title.classList.add('hits__item-title');
        title.textContent = titleCard;
        item.append(title);

        const subtitle = document.createElement('div');
        subtitle.classList.add('hits__item-subtitle');

        const tabsTextColorArr = [blackColor, pinkColor, blueColor];

        const tabsTextColor1 = document.createElement('span');
        tabsTextColor1.classList.add('hits__item-subtitle__tab');
        subtitle.append(tabsTextColor1);
        tabsTextColor1.textContent = tabsTextColorArr[0];

        const tabsTextColor2 = document.createElement('span');
        tabsTextColor2.classList.add('hits__item-subtitle__tab');
        subtitle.append(tabsTextColor2);
        tabsTextColor2.textContent = tabsTextColorArr[1];

        const tabsTextColor3 = document.createElement('span');
        tabsTextColor3.classList.add('hits__item-subtitle__tab');
        subtitle.append(tabsTextColor3);
        tabsTextColor3.textContent = tabsTextColorArr[2];
        

        const textCompanyCatalog = document.createElement('span');
        textCompanyCatalog.textContent = `/ ${firm} / ${children}`;
        subtitle.append(textCompanyCatalog);
        item.append(subtitle);

        const priceWrapper = document.createElement('div');
        priceWrapper.classList.add('hits__item-price');
        priceWrapper.innerHTML = `
            <div class="hits__item-price__old">${priceOld}₽</div>
            <div class="hits__item-price__new">${priceNew}₽</div>
        `;
        item.append(priceWrapper);

        const bottomWrapper = document.createElement('div');
        bottomWrapper.classList.add('hits__item-bottom');
        item.append(bottomWrapper);

        const btnBottom = document.createElement('button');
        btnBottom.classList.add('btn');
        btnBottom.classList.add('hits__item-bottom__btn');
        btnBottom.textContent = 'Подробнее';
        bottomWrapper.append(btnBottom);

        const btnBasket = document.createElement('div');
        btnBasket.classList.add('hits__item-bottom__basket');
        btnBasket.innerHTML = `
            <div class="hits__item-bottom__title">
                Добавить в корзину
            </div>
            <div class="hits__item-bottom__img">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 19.25 19.25" style="enable-background:new 0 0 19.25 19.25;" xml:space="preserve">
                <g>
                <g id="Layer_1_107_">
                <g>
                    <path fill="#cb11ab" d="M19.006,2.97c-0.191-0.219-0.466-0.345-0.756-0.345H4.431L4.236,1.461
                        C4.156,0.979,3.739,0.625,3.25,0.625H1c-0.553,0-1,0.447-1,1s0.447,1,1,1h1.403l1.86,11.164c0.008,0.045,0.031,0.082,0.045,0.124
                        c0.016,0.053,0.029,0.103,0.054,0.151c0.032,0.066,0.075,0.122,0.12,0.179c0.031,0.039,0.059,0.078,0.095,0.112
                        c0.058,0.054,0.125,0.092,0.193,0.13c0.038,0.021,0.071,0.049,0.112,0.065c0.116,0.047,0.238,0.075,0.367,0.075
                        c0.001,0,11.001,0,11.001,0c0.553,0,1-0.447,1-1s-0.447-1-1-1H6.097l-0.166-1H17.25c0.498,0,0.92-0.366,0.99-0.858l1-7
                        C19.281,3.479,19.195,3.188,19.006,2.97z M17.097,4.625l-0.285,2H13.25v-2H17.097z M12.25,4.625v2h-3v-2H12.25z M12.25,7.625v2
                        h-3v-2H12.25z M8.25,4.625v2h-3c-0.053,0-0.101,0.015-0.148,0.03l-0.338-2.03H8.25z M5.264,7.625H8.25v2H5.597L5.264,7.625z
                        M13.25,9.625v-2h3.418l-0.285,2H13.25z"/>
                    <circle fill="#cb11ab" cx="6.75" cy="17.125" r="1.5"/>
                    <circle fill="#cb11ab" cx="15.75" cy="17.125" r="1.5"/>
                </g>
                </g>
                </g>
                </svg>
            </div>
        `;
        
        bottomWrapper.append(btnBasket);
        
        document.querySelector('.hits__content-elderly').append(div);
        ///////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////slider////////////////////////////
        const imgArr = [];
        imgArr.push(img1, img2, img3);

        const circleArr = [];
        circleArr.push(circle1, circle2, circle3);

        const tabsTextColorArray = [];
        tabsTextColorArray.push(tabsTextColor1, tabsTextColor2, tabsTextColor3);

        function hideTabSlides() {  // Скрыть всё
            imgArr.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('show', 'fade');
            });
            circleArr.forEach(item => {
                item.classList.remove('hits__item-circle__active');
            });
            tabsTextColorArray.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('show');
            });    
        }

        function showTabSlides(i) {  // Показать слайд (Первый)
            imgArr[i].classList.add('show', 'fade');
            imgArr[i].classList.remove('hide');
            circleArr[i].classList.add('hits__item-circle__active');
            tabsTextColorArray[i].classList.add('show');
            tabsTextColorArray[i].classList.remove('hide');
        }
        hideTabSlides();
        showTabSlides(0);

        colors.addEventListener('click', (event) => {
            const circlecolorArr = [];
            circlecolorArr.push(circleColor1, circleColor2, circleColor3);
            if(event.target && event.target.classList.contains('hits__item-color')) {
                circlecolorArr.forEach((item, i) => {
                    if(event.target == item) {
                        hideTabSlides();
                        showTabSlides(i);
                    }
                });
            }
        });
    }

    menuCardRender(
        'new',
        'img/cards/elderly/wonlex/GW700s/black.jpg',
        '',
        '',
        1,
        2,
        'Cмарт-часы GW700s',
        'Черный',
        '', 
        '',
        'Wonlex',
        'Для пожилых',
        '7490',
        '5490',
        'black',
        'opacity',
        'opacity',
        'opacity'
    );  

    menuCardRender(
        'new',
        'img/cards/elderly/wonlex/GW700/golden.jpg',
        '',
        '',
        0,
        0,
        'Cмарт-часы GW700',
        'Золотистый',
        '', 
        '',
        'Wonlex',
        'Для пожилых',
        '5990',
        '4490',
        'golden',
        'opacity',
        'opacity',
        'opacity'
    );  
}



/***/ }),

/***/ "./src/js/modules/menuCardGrown.js":
/*!*****************************************!*\
  !*** ./src/js/modules/menuCardGrown.js ***!
  \*****************************************/
/*! exports provided: menuCardGrown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuCardGrown", function() { return menuCardGrown; });
function menuCardGrown() {
    function menuCardRender(hit, image1, image2, image3, numberStars, numberReviews, titleCard, blackColor, pinkColor, blueColor, firm, children, priceOld, priceNew, color1, color2, color3, opacity) {
        ///////////////////////////// HTML /////////////////////////////////
        const div = document.createElement('div');
        div.classList.add('hits__product');
        
        const item = document.createElement('div');
        item.classList.add('hits__item');
        div.append(item);

        const label = document.createElement('div');
        label.classList.add('hits__item-label');
        label.textContent = hit;
        item.append(label);

        const colors = document.createElement('div');
        colors.classList.add('hits__item-colors');
        item.append(colors);

        const circle1 = document.createElement('div');
        circle1.classList.add('hits__item-circle');
        colors.append(circle1);

        const circleColor1 = document.createElement('span');
        circleColor1.classList.add('hits__item-color');
        circleColor1.classList.add(color1);
        circle1.append(circleColor1);

        const circle2 = document.createElement('div');
        circle2.classList.add('hits__item-circle');
        colors.append(circle2);

        const circleColor2 = document.createElement('span');
        circleColor2.classList.add('hits__item-color');
        circleColor2.classList.add(color2);
        circle2.append(circleColor2);

        const circle3 = document.createElement('div');
        circle3.classList.add('hits__item-circle');
        circle3.classList.add(opacity);
        colors.append(circle3);

        const circleColor3 = document.createElement('span');
        circleColor3.classList.add('hits__item-color');
        circleColor3.classList.add(color3);
        circle3.append(circleColor3);

        const btnsLeft = document.createElement('div');
        btnsLeft.classList.add('hits__item-left');
        item.append(btnsLeft);

        const btnLeft1 = document.createElement('div');
        btnLeft1.classList.add('hits__item-btn');
        btnLeft1.innerHTML = `
            <div class="hits__item-btn__title">
                Добавить в сравнение
            </div>
            <div class="hits__item-btn__img">
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 4.82051C2 3.26279 3.26279 2 4.82051 2C6.37824 2 7.64103 3.26279 7.64103 4.82051V19.1795C7.64103 20.7372 6.37824 22 4.82051 22C3.26279 22 2 20.7372 2 19.1795V4.82051ZM4.82051 3.53846C4.11246 3.53846 3.53846 4.11246 3.53846 4.82051V19.1795C3.53846 19.8875 4.11246 20.4615 4.82051 20.4615C5.52857 20.4615 6.10256 19.8875 6.10256 19.1795V4.82051C6.10256 4.11246 5.52857 3.53846 4.82051 3.53846Z" fill="#AFAFAF"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.17949 9.94872C9.17949 8.39099 10.4423 7.12821 12 7.12821C13.5577 7.12821 14.8205 8.39099 14.8205 9.94872V19.1795C14.8205 20.7372 13.5577 22 12 22C10.4423 22 9.17949 20.7372 9.17949 19.1795V9.94872ZM12 8.66667C11.2919 8.66667 10.7179 9.24066 10.7179 9.94872V19.1795C10.7179 19.8875 11.2919 20.4615 12 20.4615C12.7081 20.4615 13.2821 19.8875 13.2821 19.1795V9.94872C13.2821 9.24066 12.7081 8.66667 12 8.66667Z" fill="#AFAFAF"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.359 4.82051C16.359 3.26279 17.6218 2 19.1795 2C20.7372 2 22 3.26279 22 4.82051V19.1795C22 20.7372 20.7372 22 19.1795 22C17.6218 22 16.359 20.7372 16.359 19.1795V4.82051ZM19.1795 3.53846C18.4714 3.53846 17.8974 4.11246 17.8974 4.82051V19.1795C17.8974 19.8875 18.4714 20.4615 19.1795 20.4615C19.8875 20.4615 20.4615 19.8875 20.4615 19.1795V4.82051C20.4615 4.11246 19.8875 3.53846 19.1795 3.53846Z" fill="#AFAFAF"></path>
                </svg>
            </div>
        `;
        btnsLeft.append(btnLeft1);

        const btnLeft2 = document.createElement('div');
        btnLeft2.classList.add('hits__item-btn');
        btnLeft2.innerHTML = `
            <div class="hits__item-btn__title">
                Добавить в избранное
            </div>
            <div class="hits__item-btn__img">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="#AFAFAF" d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"></path>
                </svg>
            </div>
        `;
        btnsLeft.append(btnLeft2);

        const slider = document.createElement('div');
        slider.classList.add('hits__item-slider');
        item.append(slider);

        const img1 = document.createElement('img');
        img1.classList.add('hits__item-slide');
        slider.append(img1);

        const img2 = document.createElement('img');
        img2.classList.add('hits__item-slide');
        slider.append(img2);

        const img3 = document.createElement('img');
        img3.classList.add('hits__item-slide');
        slider.append(img3);
        
        const sliderImg = [image1, image2, image3];

        img1.src = sliderImg[0];
        img2.src = sliderImg[1];
        img3.src = sliderImg[2];
        
        const blockUnderSlider = document.createElement('div');
        blockUnderSlider.classList.add('hits__item-wrapper');
        item.append(blockUnderSlider);

        const rating = document.createElement('div');
        rating.classList.add('hits__item-rating');
        blockUnderSlider.append(rating);

        const ratingList = document.createElement('ul');
        ratingList.classList.add('hits__item-rating__list');
        rating.append(ratingList);

        const starArray = [];
        const starQuantity = numberStars;

        for(let i = 0; i <= starQuantity - 1; i++) {
            const star = document.createElement('li');
            star.classList.add('hits__item-rating__item');
            star.innerHTML = `
                <svg viewBox="0 0 40 37" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient gradientUnits="userSpaceOnUse" id="_kb11ciszh__11597">
                            <stop stop-color="#ffa900" stop-opacity="1" offset="1"></stop>
                            <stop stop-color="#d2d2d2" stop-opacity="1" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <path d="m19.1147.533962c.3614-.711949 1.409-.711949 1.7704 0l5.4156 10.644638c.1443.283.4223.479.7439.524l12.1088 1.7076c.81.1143 1.1331 1.0805.5478 1.634l-8.7633 8.2861c-.2322.2197-.3389.5373-.2833.8476l2.0679 11.7c.139.7827-.7078 1.3797-1.433 1.0097l-10.8297-5.5231c-.2878-.1467-.632-.1467-.9198 0l-10.83049 5.5231c-.72439.37-1.57126-.227-1.43225-1.0097l2.06797-11.7c.05485-.3103-.0511-.6279-.28405-.8476l-8.761789-8.2861c-.586123-.5535-.2630038-1.5197.547049-1.634l12.10946-1.7076c.3209-.045.5996-.241.7432-.524z" fill="rgb(255, 169, 0)"></path>
                </svg>
            `;
            ratingList.append(star);
            starArray.push(star);
        }

        const reviewsWrapper = document.createElement('div');
        reviewsWrapper.classList.add('hits__item-reviews');

        reviewsWrapper.innerHTML = `
            <div class="hits__item-reviews__point"></div>
            <div class="hits__item-reviews__img">
                <img src="icons/message-reviews.svg" alt="message">
            </div>
            <div class="hits__item-reviews__quantity">${numberReviews}</div>
        `;
        blockUnderSlider.append(reviewsWrapper);

        const title = document.createElement('div');
        title.classList.add('hits__item-title');
        title.textContent = titleCard;
        item.append(title);

        const subtitle = document.createElement('div');
        subtitle.classList.add('hits__item-subtitle');

        const tabsTextColorArr = [blackColor, pinkColor, blueColor];

        const tabsTextColor1 = document.createElement('span');
        tabsTextColor1.classList.add('hits__item-subtitle__tab');
        subtitle.append(tabsTextColor1);
        tabsTextColor1.textContent = tabsTextColorArr[0];

        const tabsTextColor2 = document.createElement('span');
        tabsTextColor2.classList.add('hits__item-subtitle__tab');
        subtitle.append(tabsTextColor2);
        tabsTextColor2.textContent = tabsTextColorArr[1];

        const tabsTextColor3 = document.createElement('span');
        tabsTextColor3.classList.add('hits__item-subtitle__tab');
        subtitle.append(tabsTextColor3);
        tabsTextColor3.textContent = tabsTextColorArr[2];
        

        const textCompanyCatalog = document.createElement('span');
        textCompanyCatalog.textContent = `/ ${firm} / ${children}`;
        subtitle.append(textCompanyCatalog);
        item.append(subtitle);

        const priceWrapper = document.createElement('div');
        priceWrapper.classList.add('hits__item-price');
        priceWrapper.innerHTML = `
            <div class="hits__item-price__old">${priceOld}₽</div>
            <div class="hits__item-price__new">${priceNew}₽</div>
        `;
        item.append(priceWrapper);

        const bottomWrapper = document.createElement('div');
        bottomWrapper.classList.add('hits__item-bottom');
        item.append(bottomWrapper);

        const btnBottom = document.createElement('button');
        btnBottom.classList.add('btn');
        btnBottom.classList.add('hits__item-bottom__btn');
        btnBottom.textContent = 'Подробнее';
        bottomWrapper.append(btnBottom);

        const btnBasket = document.createElement('div');
        btnBasket.classList.add('hits__item-bottom__basket');
        btnBasket.innerHTML = `
            <div class="hits__item-bottom__title">
                Добавить в корзину
            </div>
            <div class="hits__item-bottom__img">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 19.25 19.25" style="enable-background:new 0 0 19.25 19.25;" xml:space="preserve">
                <g>
                <g id="Layer_1_107_">
                <g>
                    <path fill="#cb11ab" d="M19.006,2.97c-0.191-0.219-0.466-0.345-0.756-0.345H4.431L4.236,1.461
                        C4.156,0.979,3.739,0.625,3.25,0.625H1c-0.553,0-1,0.447-1,1s0.447,1,1,1h1.403l1.86,11.164c0.008,0.045,0.031,0.082,0.045,0.124
                        c0.016,0.053,0.029,0.103,0.054,0.151c0.032,0.066,0.075,0.122,0.12,0.179c0.031,0.039,0.059,0.078,0.095,0.112
                        c0.058,0.054,0.125,0.092,0.193,0.13c0.038,0.021,0.071,0.049,0.112,0.065c0.116,0.047,0.238,0.075,0.367,0.075
                        c0.001,0,11.001,0,11.001,0c0.553,0,1-0.447,1-1s-0.447-1-1-1H6.097l-0.166-1H17.25c0.498,0,0.92-0.366,0.99-0.858l1-7
                        C19.281,3.479,19.195,3.188,19.006,2.97z M17.097,4.625l-0.285,2H13.25v-2H17.097z M12.25,4.625v2h-3v-2H12.25z M12.25,7.625v2
                        h-3v-2H12.25z M8.25,4.625v2h-3c-0.053,0-0.101,0.015-0.148,0.03l-0.338-2.03H8.25z M5.264,7.625H8.25v2H5.597L5.264,7.625z
                        M13.25,9.625v-2h3.418l-0.285,2H13.25z"/>
                    <circle fill="#cb11ab" cx="6.75" cy="17.125" r="1.5"/>
                    <circle fill="#cb11ab" cx="15.75" cy="17.125" r="1.5"/>
                </g>
                </g>
                </g>
                </svg>
            </div>
        `;
        
        bottomWrapper.append(btnBasket);
        
        document.querySelector('.hits__content-grown').append(div);
        ///////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////slider////////////////////////////
        const imgArr = [];
        imgArr.push(img1, img2, img3);

        const circleArr = [];
        circleArr.push(circle1, circle2, circle3);

        const tabsTextColorArray = [];
        tabsTextColorArray.push(tabsTextColor1, tabsTextColor2, tabsTextColor3);

        function hideTabSlides() {  // Скрыть всё
            imgArr.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('show', 'fade');
            });
            circleArr.forEach(item => {
                item.classList.remove('hits__item-circle__active');
            });
            tabsTextColorArray.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('show');
            });    
        }

        function showTabSlides(i) {  // Показать слайд (Первый)
            imgArr[i].classList.add('show', 'fade');
            imgArr[i].classList.remove('hide');
            circleArr[i].classList.add('hits__item-circle__active');
            tabsTextColorArray[i].classList.add('show');
            tabsTextColorArray[i].classList.remove('hide');
        }
        hideTabSlides();
        showTabSlides(0);

        colors.addEventListener('click', (event) => {
            const circlecolorArr = [];
            circlecolorArr.push(circleColor1, circleColor2, circleColor3);
            if(event.target && event.target.classList.contains('hits__item-color')) {
                circlecolorArr.forEach((item, i) => {
                    if(event.target == item) {
                        hideTabSlides();
                        showTabSlides(i);
                    }
                });
            }
        });
    }

    menuCardRender(
        'new',
        'img/cards/grown/LinWear/LW07/golden.jpg',
        'img/cards/grown/LinWear/LW07/silver.jpg',
        '',
        4,
        7,
        'Cмарт-часы Smart Watch LW07',
        'Золотистый',
        'Серебристый', 
        '',
        'LinWear',
        'Для взрослых',
        '8490',
        '6900',
        'golden',
        'silver',
        'opacity',
        'opacity'
    );  

    menuCardRender(
        'new',
        'img/cards/grown/LinWear/LA10/black.jpg',
        'img/cards/grown/LinWear/LA10/brown.png',
        '',
        5,
        14,
        'Cмарт-часы Smart Watch LA10',
        'Черный',
        'Коричневый', 
        '',
        'LinWear',
        'Для взрослых',
        '6900',
        '7490',
        'black',
        'brown',
        'opacity',
        'opacity'
    );  
    
    menuCardRender(
        'new',
        'img/cards/grown/LinWear/LW12/black.jpg',
        'img/cards/grown/LinWear/LW12/red.jpg',
        'img/cards/grown/LinWear/LW12/darkBlue.jpg',
        5,
        21,
        'Cмарт-часы Smart Watch LW12',
        'Черный',
        'Красный', 
        'Синий',
        'LinWear',
        'Для взрослых',
        '8490',
        '6900',
        'black',
        'red',
        'dark__blue',
        'visible'
    );  

    menuCardRender(
        'hit',
        'img/cards/grown/LinWear/LW09/black.jpg',
        'img/cards/grown/LinWear/LW09/golden.jpg',
        'img/cards/grown/LinWear/LW09/silver.jpg',
        5,
        2,
        'Cмарт-часы Smart Watch LW09',
        'Черный',
        'Золотистый',
        'Серебристый', 
        'LinWear',
        'Для взрослых',
        '8490',
        '6900',
        'black',
        'golden',
        'silver',
        'visible'
    );  

    menuCardRender(
        'hit',
        'img/cards/grown/LinWear/LW36/black.jpg',
        'img/cards/grown/LinWear/LW36/pink.jpg',
        '',
        5,
        5,
        'Cмарт-часы Smart Watch LW36',
        'Черный',
        'Розовый',
        '', 
        'LinWear',
        'Для взрослых',
        '8490',
        '5490',
        'black',
        'pink',
        'opacity',
        'opacity'
    );  

    menuCardRender(
        'hit',
        'img/cards/grown/LinWear/LA08/black.jpg',
        'img/cards/grown/LinWear/LA08/silver.jpg',
        'img/cards/grown/LinWear/LA08/pink.jpeg',
        5,
        3,
        'Cмарт-часы Smart Watch LA08',
        'Черный',
        'Серебристый',
        'Розовый', 
        'LinWear',
        'Для взрослых',
        '9490',
        '7490',
        'black',
        'silver',
        'pink',
        'visible'
    );  

    menuCardRender(
        'hit',
        'img/cards/grown/LinWear/LW06/golden.jpg',
        'img/cards/grown/LinWear/LW06/silver.jpg',
        '',
        5,
        11,
        'Cмарт-часы Smart Watch LW06',
        'Золотистый',
        'Серебристый',
        '', 
        'LinWear',
        'Для взрослых',
        '8490',
        '6900',
        'golden',
        'silver',
        'opacity',
        'opacity'
    );  

    menuCardRender(
        'hit',
        'img/cards/grown/LinWear/DT1/black.jpg',
        'img/cards/grown/LinWear/DT1/silver.jpg',
        '',
        5,
        9,
        'Cмарт-часы Smart Watch DT1',
        'Черный',
        'Серебристый',
        '', 
        'LinWear',
        'Для взрослых',
        '8490',
        '4900',
        'black',
        'silver',
        'opacity',
        'opacity'
    );  
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

/***/ "./src/js/modules/modalCard.js":
/*!*************************************!*\
  !*** ./src/js/modules/modalCard.js ***!
  \*************************************/
/*! exports provided: modalCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalCard", function() { return modalCard; });
function modalCard() {
    const tabs = document.querySelectorAll('.modalCard__item'),        // все табы
   tabsWrapper = document.querySelector('.modalCard__items'),          // обертка всех табов
   tabsContent = document.querySelectorAll('.modalCard__item-block');  // все контенты

    function hideTabContent() { // скрыть все контенты
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach(item => {
            item.classList.remove('modalCard__item-active');
        });
    }

    function showTabContent(i) {  // открыть первый контент
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('modalCard__item-active');
    }

    hideTabContent();
    showTabContent(0);

    tabsWrapper.addEventListener('click', (event) => {
        if(event.target && event.target.classList.contains('modalCard__item')) {
            tabs.forEach((item, i) => {
                if(event.target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
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

/***/ "./src/js/modules/tabsCards.js":
/*!*************************************!*\
  !*** ./src/js/modules/tabsCards.js ***!
  \*************************************/
/*! exports provided: tabsCards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabsCards", function() { return tabsCards; });
function tabsCards() {
    const tabs = document.querySelectorAll('.hits__tab'),       // все табы 
   tabsWrapper = document.querySelector('.hits__tabs'),         // обертка всех табов 
   tabsContent = document.querySelectorAll('.hits__content');   // все контенты

    function hideTabContent() { // скрыть все контенты
        tabsContent.forEach(item => {
            item.classList.add('hide__flex');
            item.classList.remove('show__flex', 'fade');
        });
        tabs.forEach(item => {
            item.classList.remove('hits__tab-active');
        });
    }

    function showTabContent(i) { // Показывать контент всех табов (Первый)
        tabsContent[i].classList.add('show__flex', 'fade');
        tabsContent[i].classList.remove('hide__flex');
        tabs[i].classList.add('hits__tab-active');
    }

    hideTabContent();
    showTabContent(0);

    tabsWrapper.addEventListener('click', (event) => {
        if(event.target && event.target.classList.contains('hits__tab')) {
            tabs.forEach((item, i) => {
                if(event.target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
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
/* harmony import */ var _modules_menuCardChildren__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/menuCardChildren */ "./src/js/modules/menuCardChildren.js");
/* harmony import */ var _modules_menuCardGrown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/menuCardGrown */ "./src/js/modules/menuCardGrown.js");
/* harmony import */ var _modules_menuCardElderly__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menuCardElderly */ "./src/js/modules/menuCardElderly.js");
/* harmony import */ var _modules_tabsCards__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/tabsCards */ "./src/js/modules/tabsCards.js");
/* harmony import */ var _modules_modalCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/modalCard */ "./src/js/modules/modalCard.js");











window.addEventListener('DOMContentLoaded', () => {
    Object(_modules_modalCatalog__WEBPACK_IMPORTED_MODULE_0__["modalCatalog"])();
    Object(_modules_modalBuyer__WEBPACK_IMPORTED_MODULE_1__["modalBuyer"])();
    Object(_modules_offerSlider__WEBPACK_IMPORTED_MODULE_2__["offerSlider"])();
    Object(_modules_offerTimer__WEBPACK_IMPORTED_MODULE_3__["offerTimer"])();
    Object(_modules_reviewsSlider__WEBPACK_IMPORTED_MODULE_4__["reviewsSlider"])();
    Object(_modules_menuCardChildren__WEBPACK_IMPORTED_MODULE_5__["menuCardChildren"])();
    Object(_modules_menuCardGrown__WEBPACK_IMPORTED_MODULE_6__["menuCardGrown"])();
    Object(_modules_menuCardElderly__WEBPACK_IMPORTED_MODULE_7__["menuCardElderly"])();
    Object(_modules_tabsCards__WEBPACK_IMPORTED_MODULE_8__["tabsCards"])();
    Object(_modules_modalCard__WEBPACK_IMPORTED_MODULE_9__["modalCard"])();
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map
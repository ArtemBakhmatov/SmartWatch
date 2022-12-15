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

/***/ "./src/js/modules/consultationForm.js":
/*!********************************************!*\
  !*** ./src/js/modules/consultationForm.js ***!
  \********************************************/
/*! exports provided: consultationForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "consultationForm", function() { return consultationForm; });
function consultationForm() {
    const form = document.querySelector('.consultation__form'),
      checkbox = document.querySelector('[type="checkbox"]'),
         modal = document.querySelector('.consultation__modal');

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show', 'fide');
    }
    closeModal();

    function openModal() {
        modal.classList.add('show', 'fide');
        modal.classList.remove('hide');
    }

    const message = {
        loading: 'icons/spinner.svg',
        success: 'Спасибо, скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...',
        imgThanks: 'icons/thanks.gif',
        imgError: 'icons/error.gif'
    };

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });
        return await res.json();
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const statusMessage = document.createElement('img');
        statusMessage.src = message.loading;
        statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
        `;
        form.insertAdjacentElement('afterend', statusMessage);

        const formData = new FormData(form);

        const json = JSON.stringify(Object.fromEntries(formData.entries()));
        // entries() -> превращает в массив массивов ([['a', 5]])
        // Object.fromEntries() -> превращает в объект {a: 5}

        postData('http://localhost:3000/consultation', json)
        .then(data => {
            console.log(data);
            showThanksModal(message.success, message.imgThanks);
            statusMessage.remove();
        }).catch(() => {
            showThanksModal(message.failure, message.imgError);
            statusMessage.remove();
        }).finally(() => {
            form.reset();
        });
    });

    function showThanksModal(message, img) {
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('consultation__modal-wrapper');
        thanksModal.innerHTML = `
            <div class="consultation__modal-title">${message}</div>
        `;
        modal.append(thanksModal);
        
        const thanksGif = document.querySelector('div');
        thanksGif.classList.add('consultation__modal-img');
        thanksGif.classList.remove('header-top');
        thanksGif.innerHTML = `
            <img src=${img} alt="thanks">
        `;
        thanksModal.append(thanksGif);

        setTimeout(() => {
            thanksModal.remove();
            closeModal();
        }, 3000);
    }

    // fetch('https://jsonplaceholder.typicode.com/posts/1', {
    //     method: 'POST',                         // метод
    //     body: JSON.stringify({name: 'Alex'}),   // что отправляем
    //     Headers: {                              // заголовок
    //         'Content-type': 'application/json'
    //     }
    // })
    // .then(response => response.json()) // response -> ответ в json // response.json()) -> переводит в объект
    // .then(json => console.log(json));  // объект выводится в консоли

    fetch('http://localhost:3000/menu')
        .then(data => data.json())
        .then(res => console.log(res));

}



/***/ }),

/***/ "./src/js/modules/hamburger.js":
/*!*************************************!*\
  !*** ./src/js/modules/hamburger.js ***!
  \*************************************/
/*! exports provided: hamburger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hamburger", function() { return hamburger; });
function hamburger() {
    const hamburger = document.querySelector('.header__hamburger'),
         btnCatalog = document.querySelector('.header-bottom__catalog'),
               menu = document.querySelector('.header-top__wrapper'),
      headerCatalog = document.querySelector('.header-catalog'),
       btnHamburger = document.querySelector('.header-bottom__hamburger'),
      linkIconArrow = document.querySelector('.header-top__link-icon'),
     headerTopModal = document.querySelector('.header-top__modal'),
          linksItem = document.querySelectorAll('.btnMenu');

    function openMenu() {
        btnCatalog.classList.add('header-bottom__catalog-active');
        menu.classList.add('header-top__wrapper-active');
        hamburger.classList.add('header__hamburger-active');
    }

    function closeMenu() {
        btnCatalog.classList.remove('header-bottom__catalog-active');
        menu.classList.remove('header-top__wrapper-active');
        hamburger.classList.remove('header__hamburger-active');
        headerCatalog.classList.remove('header-catalog__active');
        btnHamburger.classList.remove('header-bottom__hamburger-active');
        linkIconArrow.classList.remove('header-top__link-open');
        headerTopModal.classList.remove('header-top__modal-active');
    }

    hamburger.addEventListener('click', () => {
        if(!btnCatalog.classList.contains('header-bottom__catalog-active') && 
           !menu.classList.contains('header-top__wrapper-active') &&
           !hamburger.classList.contains('header__hamburger-active')) {
                openMenu();
            } else {
                closeMenu();
            }
    });

    linksItem.forEach(item => {
        item.addEventListener('click', closeMenu);
    });
}



/***/ }),

/***/ "./src/js/modules/maskPhone.js":
/*!*************************************!*\
  !*** ./src/js/modules/maskPhone.js ***!
  \*************************************/
/*! exports provided: mask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mask", function() { return mask; });
function mask() {
    
    let setCursorPosition = (pos, elem) => {
        elem.focus(); // установили фокус на элементе

        if(elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            let range = elem.createTextRange(); // диапазон

            range.corange.collapse(true); //объединять граничные точки диапазона 
            range.moveEnd('character', pos); // где будет конечная точка нашего выделения
            range.moveStart('character', pos); // с какого символа будет начинаться выделение
            range.select(); // объеденяет сразу moveStart и moveEnd
           
        }
        // setSelectionRange() устанавливает начальное и конечное положение выделения текста в элементе
        // createTextRange()  текстовый диапазон нулевой и более длины 
    };

    function createMask(event) {
        let matrix = '+7 (___) ___ __ __',
                 i = 0,
               def = matrix.replace(/\D/g, ''),     // если не цифры то будет путстая строка// cтатичная
               val = this.value.replace(/\D/g, ''); // если не цифры то будет путстая строка// динам-я
        
        if(def.length >= val.length) {
            val = def;
        }

        this.value = matrix.replace(/./g, function(a) {  // перебирает каждый символ
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        });
        // charAt возвращает символ, стоящий на указанной позиции в строке 

        if(event.type === 'blur') { // пользователь перестал что то вводить
            if(this.value.length == 2) {
                this.value == '';
            }
        } else {
            setCursorPosition(this.value.length, this);  
            // устанавливать позицию курсора (кол-во символов в инпуте, ссылка на тот элемент который в работе)  
        }
    }

    const inputPhone = document.querySelector('[name="phone"]');

    inputPhone.addEventListener('input', createMask);
    inputPhone.addEventListener('focus', createMask);
    inputPhone.addEventListener('blur', createMask);

}



/***/ }),

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
    function menuCardRender(hit, image1, image2, image3, numberStars, numberReviews, titleCard, blackColor, pinkColor, blueColor, firm, children, priceOld, priceNew, color1, color2, color3, availability, numberProductCards) {
    ///////////////////////////// КАРТОЧКА ТОВАРА /////////////////////////////////
        const div = document.createElement('div');
        div.classList.add('hits__product');

        const comparisonTitleModal = document.createElement('div');
        comparisonTitleModal.classList.add('hits__product-modal');
        comparisonTitleModal.textContent = `Добавлено в cравнение`;
        div.prepend(comparisonTitleModal);

        const favouritesTitleModal = document.createElement('div');
        favouritesTitleModal.classList.add('hits__product-modal');
        favouritesTitleModal.textContent = `Добавлено в избранное`;
        div.prepend(favouritesTitleModal);

        const basketTitleModal = document.createElement('div');
        basketTitleModal.classList.add('hits__product-modal');
        basketTitleModal.textContent = `Добавлено в коризину`;
        div.prepend(basketTitleModal);
                
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
        btnLeft1.setAttribute('id', 'comparison__btn');
        btnLeft1.innerHTML = `
            <div class="hits__item-btn__title">
                Добавить в сравнение
            </div>
            
        `;
        btnsLeft.append(btnLeft1);

        const btnlLeftImg1 = document.createElement('div');
        btnlLeftImg1.classList.add('hits__item-btn__img');
        btnlLeftImg1.setAttribute('id', 'comparison__img');
        btnlLeftImg1.innerHTML =`
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 4.82051C2 3.26279 3.26279 2 4.82051 2C6.37824 2 7.64103 3.26279 7.64103 4.82051V19.1795C7.64103 20.7372 6.37824 22 4.82051 22C3.26279 22 2 20.7372 2 19.1795V4.82051ZM4.82051 3.53846C4.11246 3.53846 3.53846 4.11246 3.53846 4.82051V19.1795C3.53846 19.8875 4.11246 20.4615 4.82051 20.4615C5.52857 20.4615 6.10256 19.8875 6.10256 19.1795V4.82051C6.10256 4.11246 5.52857 3.53846 4.82051 3.53846Z" fill="#AFAFAF"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.17949 9.94872C9.17949 8.39099 10.4423 7.12821 12 7.12821C13.5577 7.12821 14.8205 8.39099 14.8205 9.94872V19.1795C14.8205 20.7372 13.5577 22 12 22C10.4423 22 9.17949 20.7372 9.17949 19.1795V9.94872ZM12 8.66667C11.2919 8.66667 10.7179 9.24066 10.7179 9.94872V19.1795C10.7179 19.8875 11.2919 20.4615 12 20.4615C12.7081 20.4615 13.2821 19.8875 13.2821 19.1795V9.94872C13.2821 9.24066 12.7081 8.66667 12 8.66667Z" fill="#AFAFAF"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.359 4.82051C16.359 3.26279 17.6218 2 19.1795 2C20.7372 2 22 3.26279 22 4.82051V19.1795C22 20.7372 20.7372 22 19.1795 22C17.6218 22 16.359 20.7372 16.359 19.1795V4.82051ZM19.1795 3.53846C18.4714 3.53846 17.8974 4.11246 17.8974 4.82051V19.1795C17.8974 19.8875 18.4714 20.4615 19.1795 20.4615C19.8875 20.4615 20.4615 19.8875 20.4615 19.1795V4.82051C20.4615 4.11246 19.8875 3.53846 19.1795 3.53846Z" fill="#AFAFAF"></path>
            </svg>
        `;
        btnLeft1.append(btnlLeftImg1);

        const btnLeft2 = document.createElement('div');
        btnLeft2.classList.add('hits__item-btn');
        btnLeft2.setAttribute('id', 'favourites__btn');
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
        btnBasket.setAttribute('id', 'basket__btn');
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

        ///////////////////////////// КОНЕЦ КАРТОЧКИ ТОВАРА /////////////////////////////////

    ////////////////////////////// КАРТОЧКА ТОВАРА В СРАВНЕНИИ ////////////////////////////////////
        const comparisonBlock = document.createElement('div');
        comparisonBlock.classList.add('modalComparison__block');
        document.querySelector('.modalComparison__wrapper').append(comparisonBlock);

        const comparisonClose = document.createElement('div');
        comparisonClose.classList.add('modalComparison__block-close');
        comparisonClose.textContent = `×`;
        comparisonBlock.append(comparisonClose);

        const comparisonPrice = document.createElement('div');
        comparisonPrice.classList.add('modalComparison__price');
        comparisonPrice.innerHTML = `
            <div class="modalComparison__price-old">${priceOld}₽</div>
            <div class="modalComparison__price-new">${priceNew}₽</div> 
        `;
        comparisonBlock.append(comparisonPrice);

        const comparisonFlex = document.createElement('div');
        comparisonFlex.classList.add('modalComparison__flex');
        comparisonBlock.append(comparisonFlex);

        comparisonFlex.innerHTML = `
            <div class="modalComparison__left">
                <img src=${image1} alt="icon">
            </div>
        `;

        const comparisonRight = document.createElement('div');
        comparisonRight.classList.add('modalComparison__right');
        comparisonFlex.append(comparisonRight);

        const comparisonTitle = document.createElement('div');
        comparisonTitle.classList.add('modalComparison__title');
        comparisonTitle.textContent = titleCard;
        comparisonRight.append(comparisonTitle);

        const comparisonRightWrapper = document.createElement('div');
        comparisonRightWrapper.classList.add('modalComparison__right-wrapper');
        comparisonRight.append(comparisonRightWrapper);

        const comparisonRating = document.createElement('div');
        comparisonRating.classList.add('hits__item-rating');
        comparisonRightWrapper.append(comparisonRating);

        const comparisonRatingList = document.createElement('ul');
        comparisonRatingList.classList.add('hits__item-rating__list');
        comparisonRating.append(comparisonRatingList);

        const comparisonStarArray = [];
        const comparisonStarQuantity = numberStars;

        for(let i = 0; i <= comparisonStarQuantity - 1; i++) {
            const comparisonStar = document.createElement('li');
            comparisonStar.classList.add('hits__item-rating__item');
            comparisonStar.innerHTML = `
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
            comparisonRatingList.append(comparisonStar);
            comparisonStarArray.push(comparisonStar);
        }

        const comparisonReviews = document.createElement('div');
        comparisonReviews.classList.add('hits__item-reviews');
        comparisonReviews.innerHTML = `
            <div class="hits__item-reviews__point"></div>
            <div class="hits__item-reviews__img">
                <img src="icons/message-reviews.svg" alt="message">
            </div>
            <div class="hits__item-reviews__quantity">${numberReviews}</div>
        `;
        comparisonRightWrapper.append(comparisonReviews);

        const comparisonFirm = document.createElement('div');
        comparisonFirm.classList.add('modalComparison__firm');
        comparisonFirm.textContent = `${firm} / ${children}`;
        comparisonRight.append(comparisonFirm);

        const comparisonWarehouse = document.createElement('div');
        comparisonWarehouse.classList.add('modalComparison__warehouse');
        comparisonWarehouse.textContent = `${availability} в наличии`;
        comparisonRight.append(comparisonWarehouse);
        ////////////////////////////// КОНЕЦ КАРТОЧКИ ТОВАРА В СРАВНЕНИИ ////////////////////////////////////

        ////////////////////////////// КЛИК НА КНОПКУ СРАВНЕНИЕ В КАРТОЧККЕ ТОВАРА ////////////////////////////////////
        const btns1Arr = [];
        const btns1Quantity = numberProductCards;
        for(let i = 0; i < btns1Quantity - 1; i++) {
            btns1Arr.push(btnLeft1);
        }
        
        const comparisonBlockArr = [];
        const comparisonBlockQuantity = numberProductCards;
        for(let i = 0; i < comparisonBlockQuantity - 1; i++) {
            comparisonBlockArr.push(comparisonBlock);
        }

        function hideComparisonCard() {
            comparisonBlock.classList.add('hide');
            comparisonBlock.classList.remove('show', 'fade');
        }
        hideComparisonCard();

        function showComparisonCard(i) {
            comparisonBlockArr[i].classList.remove('hide');
            comparisonBlockArr[i].classList.add('show', 'fade');
        }

        function hideComparisonModal() {
            comparisonTitleModal.classList.add('hide');
            comparisonTitleModal.classList.remove('show', 'fade');
        }
        hideComparisonModal();

        function showComparisonModal() {
            comparisonTitleModal.classList.remove('hide');
            comparisonTitleModal.classList.add('show', 'fade');
        }

        let num = 0;

        if(num == 0) {
            document.querySelector('.modalComparison__empty').classList.add('show');
            document.querySelector('.modalComparison__empty').classList.remove('hide');
            document.querySelector('.modalComparison__btn-bottom').classList.add('hide');
            document.querySelector('.modalComparison__btn-bottom').classList.remove('show');
        }

        document.querySelector('.hits__content-children').addEventListener('click', (event) => {
            if(event.target && event.target.matches('div#comparison__btn')) {
                btns1Arr.forEach((item, i) => {
                    if(event.target === item) {
                        hideComparisonCard();
                        showComparisonCard(i);
                        showComparisonModal(i);
                        setTimeout(() => {
                            comparisonTitleModal.classList.remove('show');
                            comparisonTitleModal.classList.remove('fade');
                            comparisonTitleModal.classList.add('hide');
                        }, 2000); 
                    }
                });
                document.querySelector('.header-bottom__count').textContent = `${++num}`;
                num;
                document.querySelector('.modalComparison__empty').classList.add('hide');
                document.querySelector('.modalComparison__empty').classList.remove('show');
                document.querySelector('.modalComparison__btn-bottom').classList.add('show');
                document.querySelector('.modalComparison__btn-bottom').classList.remove('hide');
            }   
        }); 

        ////////////////////////////// КЛИК НА КРЕСТИК В КАРТОЧККЕ ТОВАРА В СРАВНЕНИИ ////////////////////////////////////
        const comparisonCloseArr = [];
        const comparisonCloseQuantity = numberProductCards;
        for(let i = 0; i < comparisonCloseQuantity - 1; i++) {
            comparisonCloseArr.push(comparisonClose);
        }

        document.querySelector('.modalComparison__wrapper').addEventListener('click', (event) => {
            if(event.target && event.target.classList.contains('modalComparison__block-close')) {
                comparisonCloseArr.forEach((item, i) => {
                    if(event.target === item) {
                        comparisonBlockArr[i].classList.remove('show', 'fade');
                        comparisonBlockArr[i].classList.add('hide');
                    }
                });
                document.querySelector('.header-bottom__count').textContent = `${--num}`;
                num;
                if(num === 0) {
                    document.querySelector('.modalComparison__empty').classList.add('show');
                    document.querySelector('.modalComparison__empty').classList.remove('hide');
                    document.querySelector('.modalComparison__btn-bottom').classList.add('hide');
                    document.querySelector('.modalComparison__btn-bottom').classList.remove('show');
                }
            }
        });

        ////////////////////////////// КАРТОЧКА ТОВАРА В ИЗБАРННОМ ////////////////////////////////////
        const favouritesBlock = document.createElement('div');
        favouritesBlock.classList.add('modalComparison__block');
        document.querySelector('.modalFavourites__wrapper').append(favouritesBlock);

        const favouritesClose = document.createElement('div');
        favouritesClose.classList.add('modalFavourites__block-close');
        favouritesClose.textContent = `×`;
        favouritesBlock.append(favouritesClose);

        const favouritesPrice = document.createElement('div');
        favouritesPrice.classList.add('modalFavourites__price');
        favouritesPrice.innerHTML = `
            <div class="modalFavourites__price-old">${priceOld}₽</div>
            <div class="modalFavourites__price-new">${priceNew}₽</div> 
        `;
        favouritesBlock.append(favouritesPrice);

        const favouritesFlex = document.createElement('div');
        favouritesFlex.classList.add('modalFavourites__flex');
        favouritesBlock.append(favouritesFlex);

        favouritesFlex.innerHTML = `
            <div class="modalFavourites__left">
                <img src=${image1} alt="icon">
            </div>
        `;

        const favouritesRight = document.createElement('div');
        favouritesRight.classList.add('modalFavourites__right');
        favouritesFlex.append(favouritesRight);

        const favouritesTitle = document.createElement('div');
        favouritesTitle.classList.add('modalFavourites__title');
        favouritesTitle.textContent = titleCard;
        favouritesRight.append(favouritesTitle);

        const favouritesRightWrapper = document.createElement('div');
        favouritesRightWrapper.classList.add('modalFavourites__right-wrapper');
        favouritesRight.append(favouritesRightWrapper);

        const favouritesRating = document.createElement('div');
        favouritesRating.classList.add('hits__item-rating');
        favouritesRightWrapper.append(favouritesRating);

        const favouritesRatingList = document.createElement('ul');
        favouritesRatingList.classList.add('hits__item-rating__list');
        favouritesRating.append(favouritesRatingList);

        const favouritesStarArray = [];
        const favouritesStarQuantity = numberStars;

        for(let i = 0; i <= favouritesStarQuantity - 1; i++) {
            const favouritesStar = document.createElement('li');
            favouritesStar.classList.add('hits__item-rating__item');
            favouritesStar.innerHTML = `
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
            favouritesRatingList.append(favouritesStar);
            favouritesStarArray.push(favouritesStar);
        }

        const favouritesReviews = document.createElement('div');
        favouritesReviews.classList.add('hits__item-reviews');
        favouritesReviews.innerHTML = `
            <div class="hits__item-reviews__point"></div>
            <div class="hits__item-reviews__img">
                <img src="icons/message-reviews.svg" alt="message">
            </div>
            <div class="hits__item-reviews__quantity">${numberReviews}</div>
        `;
        favouritesRightWrapper.append(favouritesReviews);

        const favouritesFirm = document.createElement('div');
        favouritesFirm.classList.add('modalFavourites__firm');
        favouritesFirm.textContent = `${firm} / ${children}`;
        favouritesRight.append(favouritesFirm);

        const favouritesWarehouse = document.createElement('div');
        favouritesWarehouse.classList.add('modalFavourites__warehouse');
        favouritesWarehouse.textContent = `${availability} в наличии`;
        favouritesRight.append(favouritesWarehouse);
        ////////////////////////////// КОНЕЦ КАРТОЧКИ ТОВАРА В ИЗБАРННОМ ////////////////////////////////////

        ////////////////////////////// КЛИК НА КНОПКУ ИЗБРАННОЕ В КАРТОЧККЕ ТОВАРА ////////////////////////////////////
        const btns2Arr = [];
        const btns2Quantity = numberProductCards;
        for(let i = 0; i < btns2Quantity - 1; i++) {
            btns2Arr.push(btnLeft2);
        }
        
        const favouritesBlockArr = [];
        const favouritesBlockQuantity = numberProductCards;
        for(let i = 0; i < favouritesBlockQuantity - 1; i++) {
            favouritesBlockArr.push(favouritesBlock);
        }

        function hideFavouritesCard() {
            favouritesBlock.classList.add('hide');
            favouritesBlock.classList.remove('show', 'fade');
        }
        hideFavouritesCard();

        function showFavouritesCard(i) {
            favouritesBlockArr[i].classList.remove('hide');
            favouritesBlockArr[i].classList.add('show', 'fade');
        }

        function hideFavouritesModal() {
            favouritesTitleModal.classList.add('hide');
            favouritesTitleModal.classList.remove('show', 'fade');
        }
        hideFavouritesModal();

        function showFavouritesModal() {
            favouritesTitleModal.classList.remove('hide');
            favouritesTitleModal.classList.add('show', 'fade');
        }

        let num2 = 0;

        if(num2 == 0) {
            document.querySelector('.modalFavourites__empty').classList.add('show');
            document.querySelector('.modalFavourites__empty').classList.remove('hide');
            document.querySelector('.modalFavourites__btn-bottom').classList.add('hide');
            document.querySelector('.modalFavourites__btn-bottom').classList.remove('show');
        }

        document.querySelector('.hits__content-children').addEventListener('click', (event) => {
            if(event.target && event.target.matches('div#favourites__btn')) {
                btns2Arr.forEach((item, i) => {
                    if(event.target === item) {
                        hideFavouritesCard();
                        showFavouritesCard(i);
                        showFavouritesModal(i);
                        setTimeout(() => {
                            favouritesTitleModal.classList.remove('show');
                            favouritesTitleModal.classList.remove('fade');
                            favouritesTitleModal.classList.add('hide');
                        }, 2000); 
                    }
                });
                document.querySelector('#favouritesCount').textContent = `${++num2}`;
                num2;
                document.querySelector('.modalFavourites__empty').classList.add('hide');
                document.querySelector('.modalFavourites__empty').classList.remove('show');
                document.querySelector('.modalFavourites__btn-bottom').classList.add('show');
                document.querySelector('.modalFavourites__btn-bottom').classList.remove('hide');
            }   
        }); 

        ////////////////////////////// КЛИК НА КРЕСТИК В КАРТОЧККЕ ТОВАРА В СРАВНЕНИИ ////////////////////////////////////
        const favouritesCloseArr = [];
        const favouritesCloseQuantity = numberProductCards;
        for(let i = 0; i < favouritesCloseQuantity - 1; i++) {
            favouritesCloseArr.push(favouritesClose);
        }

        document.querySelector('.modalFavourites__wrapper').addEventListener('click', (event) => {
            if(event.target && event.target.classList.contains('modalFavourites__block-close')) {
                favouritesCloseArr.forEach((item, i) => {
                    if(event.target === item) {
                        favouritesBlockArr[i].classList.remove('show', 'fade');
                        favouritesBlockArr[i].classList.add('hide');
                    }
                });
                document.querySelector('#favouritesCount').textContent = `${--num2}`;
                num2;
                if(num2 === 0) {
                    document.querySelector('.modalFavourites__empty').classList.add('show');
                    document.querySelector('.modalFavourites__empty').classList.remove('hide');
                    document.querySelector('.modalFavourites__btn-bottom').classList.add('hide');
                    document.querySelector('.modalFavourites__btn-bottom').classList.remove('show');
                }
            }
        });

        ////////////////////////////// КАРТОЧКА ТОВАРА В КОРЗИНЕ ////////////////////////////////////
        const basketBlock = document.createElement('div');
        basketBlock.classList.add('modalBasket__block');
        document.querySelector('.modalBasket__wrapper').append(basketBlock);

        const basketClose = document.createElement('div');
        basketClose.classList.add('modalBasket__block-close');
        basketClose.textContent = `×`;
        basketBlock.append(basketClose);

        const basketPrice = document.createElement('div');
        basketPrice.classList.add('modalBasket__price');
        basketPrice.innerHTML = `
            <div class="modalFavourites__price-old">${priceOld}₽</div>
            <div class="modalFavourites__price-new">${priceNew}₽</div> 
        `;
        basketBlock.append(basketPrice);

        const basketFlex = document.createElement('div');
        basketFlex.classList.add('modalBasket__flex');
        basketBlock.append(basketFlex);

        basketFlex.innerHTML = `
            <div class="modalBasket__left">
                <img src=${image1} alt="icon">
            </div>
        `;

        const basketRight = document.createElement('div');
        basketRight.classList.add('modalBasket__right');
        basketFlex.append(basketRight);

        const basketTitle = document.createElement('div');
        basketTitle.classList.add('modalBasket__title');
        basketTitle.textContent = titleCard;
        basketRight.append(basketTitle);

        const basketRightWrapper = document.createElement('div');
        basketRightWrapper.classList.add('modalBasket__right-wrapper');
        basketRight.append(basketRightWrapper);

        const basketRating = document.createElement('div');
        basketRating.classList.add('hits__item-rating');
        basketRightWrapper.append(basketRating);

        const basketRatingList = document.createElement('ul');
        basketRatingList.classList.add('hits__item-rating__list');
        basketRating.append(basketRatingList);

        const basketStarArray = [];
        const basketStarQuantity = numberStars;

        for(let i = 0; i <= basketStarQuantity - 1; i++) {
            const basketStar = document.createElement('li');
            basketStar.classList.add('hits__item-rating__item');
            basketStar.innerHTML = `
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
            basketRatingList.append(basketStar);
            basketStarArray.push(basketStar);
        }

        const basketReviews = document.createElement('div');
        basketReviews.classList.add('hits__item-reviews');
        basketReviews.innerHTML = `
            <div class="hits__item-reviews__point"></div>
            <div class="hits__item-reviews__img">
                <img src="icons/message-reviews.svg" alt="message">
            </div>
            <div class="hits__item-reviews__quantity">${numberReviews}</div>
        `;
        basketRightWrapper.append(basketReviews);

        const basketFirm = document.createElement('div');
        basketFirm.classList.add('modalBasket__firm');
        basketFirm.textContent = `${firm} / ${children}`;
        basketRight.append(basketFirm);

        const basketWarehouse = document.createElement('div');
        basketWarehouse.classList.add('modalBasket__warehouse');
        basketWarehouse.textContent = `${availability} в наличии`;
        basketRight.append(basketWarehouse);
        ////////////////////////////// КОНЕЦ КАРТОЧКИ ТОВАРА В КОРЗИНЕ ////////////////////////////////////

        ////////////////////////////// КЛИК НА КНОПКУ КОРЗИНА В КАРТОЧККЕ ТОВАРА ////////////////////////////////////
        const btns3Arr = [];
        const btns3Quantity = numberProductCards;
        for(let i = 0; i < btns3Quantity - 1; i++) {
            btns3Arr.push(btnBasket);
        }
        
        const basketBlockArr = [];
        const basketBlockQuantity = numberProductCards;
        for(let i = 0; i < basketBlockQuantity - 1; i++) {
            basketBlockArr.push(basketBlock);
        }

        function hideBasketCard() {
            basketBlock.classList.add('hide');
            basketBlock.classList.remove('show', 'fade');
        }
        hideBasketCard();

        function showBasketCard(i) {
            basketBlockArr[i].classList.remove('hide');
            basketBlockArr[i].classList.add('show', 'fade');
        }

        function hideBasketModal() {
            basketTitleModal.classList.add('hide');
            basketTitleModal.classList.remove('show', 'fade');
        }
        hideBasketModal();

        function showBasketModal() {
            basketTitleModal.classList.remove('hide');
            basketTitleModal.classList.add('show', 'fade');
        }

        let num3 = 0;

        if(num3 == 0) {
            document.querySelector('.modalBasket__empty').classList.add('show');
            document.querySelector('.modalBasket__empty').classList.remove('hide');
            document.querySelector('.modalBasket__btn-bottom').classList.add('hide');
            document.querySelector('.modalBasket__btn-bottom').classList.remove('show');
        }

        document.querySelector('.hits__content-children').addEventListener('click', (event) => {
            if(event.target && event.target.matches('div#basket__btn')) {
                btns3Arr.forEach((item, i) => {
                    if(event.target === item) {
                        hideBasketCard();
                        showBasketCard(i);
                        showBasketModal(i);
                        setTimeout(() => {
                            basketTitleModal.classList.remove('show');
                            basketTitleModal.classList.remove('fade');
                            basketTitleModal.classList.add('hide');
                        }, 2000); 
                    }
                });
                document.querySelector('#basketCount').textContent = `${++num3}`;
                num2;
                document.querySelector('.modalBasket__empty').classList.add('hide');
                document.querySelector('.modalBasket__empty').classList.remove('show');
                document.querySelector('.modalBasket__btn-bottom').classList.add('show');
                document.querySelector('.modalBasket__btn-bottom').classList.remove('hide');
            }   
        }); 

        ////////////////////////////// КЛИК НА КРЕСТИК В КАРТОЧККЕ ТОВАРА В КОРЗИНЕ ////////////////////////////////////
        const basketCloseArr = [];
        const basketCloseQuantity = numberProductCards;
        for(let i = 0; i < basketCloseQuantity - 1; i++) {
            basketCloseArr.push(basketClose);
        }

        document.querySelector('.modalBasket__wrapper').addEventListener('click', (event) => {
            if(event.target && event.target.classList.contains('modalBasket__block-close')) {
                basketCloseArr.forEach((item, i) => {
                    if(event.target === item) {
                        basketBlockArr[i].classList.remove('show', 'fade');
                        basketBlockArr[i].classList.add('hide');
                    }
                });
                document.querySelector('#basketCount').textContent = `${--num3}`;
                num3;
                if(num3 === 0) {
                    document.querySelector('.modalBasket__empty').classList.add('show');
                    document.querySelector('.modalBasket__empty').classList.remove('hide');
                    document.querySelector('.modalBasket__btn-bottom').classList.add('hide');
                    document.querySelector('.modalBasket__btn-bottom').classList.remove('show');
                }
            }
        });


        ///////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////// СЛАЙДЕР НА КАРТОЧКЕ ТОВАРОВ ////////////////////////////
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
        'img/cards/children/wonlex/KT17/black.jpeg',    // первый слайд 
        'img/cards/children/wonlex/KT17/pink.jpeg',     // второй слайд 
        'img/cards/children/wonlex/KT17/blue.jpeg',     // третий слайд
        4,                                              // количесто звезд
        6,                                              // количество отзывов
        'Детские смарт-часы KT17 «4G»',                 // описание товара
        'Черные',
        'Розовые', 
        'Голубые',                              
        'Wonlex',                              // фирма
        'Для детей',                           // Для кого 
        '8490',                                // старая цена
        '6900',                                // новая цена
        'black',                               // добавляем класс black
        'pink',                                // добавляем класс pink                
        'blue',                                // добавляем класс blue
        'Есть',                                // Наличие
        5                                      // количество карточек товара
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
        'blue',
        'Есть',
        5
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
        'blue',
        'Есть',
        5
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
        'blue',
        'Есть',
        5
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
        'blue',
        'Есть',
        5
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

/***/ "./src/js/modules/modalBasket.js":
/*!***************************************!*\
  !*** ./src/js/modules/modalBasket.js ***!
  \***************************************/
/*! exports provided: modalBasket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalBasket", function() { return modalBasket; });
function modalBasket() {
    const btn = document.querySelector('#modalBasket'),
        close = document.querySelector('.modalBasket__close'),
        modal = document.querySelector('.modalBasket');

    function hideModalBasket() {
        modal.classList.add('hide');
        modal.classList.remove('show', 'fade');
        document.body.style.overflow = '';
    }
    hideModalBasket();
    function showModalBasket() {
        modal.classList.add('show', 'fade');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }

    btn.addEventListener('click', showModalBasket);
    close.addEventListener('click', hideModalBasket);

    modal.addEventListener('click', (event) => {
        if(event.target === modal) {
            hideModalBasket();
        }
    });

    document.addEventListener('keydown', (event) => {
        if(event.code === 'Escape' && modal.classList.contains('show')) {
            hideModalBasket();
        }
    }); 

    const btnBasket = document.createElement('button');
    btnBasket.classList.add('btn', 'modalBasket__btn-bottom');
    btnBasket.textContent = 'Купить';
    document.querySelector('.modalBasket__wrapper').append(btnBasket);

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

/***/ "./src/js/modules/modalCardChildren.js":
/*!*********************************************!*\
  !*** ./src/js/modules/modalCardChildren.js ***!
  \*********************************************/
/*! exports provided: modalCardChildren */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalCardChildren", function() { return modalCardChildren; });
function modalCardChildren() {
    function modalCardRender(image1, image2, image3, titleModal, color1, color2, color3, firm, forWhom, numberStars, numberReviews, priceOld, priceNew, availability) {
        const modalCard = document.createElement('div');
        modalCard.classList.add('modalCard');
        document.querySelector('.hits__content-children').append(modalCard);

        const container = document.createElement('div');
        container.classList.add('container');
        container.classList.add('container__relative');
        modalCard.append(container);

        const close = document.createElement('div');
        close.classList.add('modalCard__close');
        close.textContent = '×';
        container.append(close);

        const wrapper = document.createElement('div');
        wrapper.classList.add('modalCard__wrapper');
        container.append(wrapper);

        const flex = document.createElement('div');
        flex.classList.add('modalCard__flex');
        wrapper.append(flex);

        const slider = document.createElement('div');
        slider.classList.add('modalCard__left');
        flex.append(slider);

        const img1 = document.createElement('img');
        img1.classList.add('modalCard__slide');
        slider.append(img1);

        const img2 = document.createElement('img');
        img2.classList.add('modalCard__slide');
        slider.append(img2);

        const img3 = document.createElement('img');
        img3.classList.add('modalCard__slide');
        slider.append(img3);

        const sliderImg = [image1, image2, image3];

        img1.src = sliderImg[0];
        img2.src = sliderImg[1];
        img3.src = sliderImg[2];

        img1.alt = 'icon';
        img2.alt = 'icon';
        img3.alt = 'icon';

        const right = document.createElement('div');
        right.classList.add('modalCard__right');
        flex.append(right);

        const title = document.createElement('div');
        title.classList.add('modalCard__title');
        title.textContent = `${titleModal}`;
        right.append(title);

        const subtitle = document.createElement('div');
        subtitle.classList.add('modalCard__subtitle');
        right.append(subtitle);

        const tabsTextColorArr = [color1, color2, color3];
        
        const tabsTextColor1 = document.createElement('div');
        tabsTextColor1.classList.add('modalCard__subtitle-tab');
        tabsTextColor1.textContent = tabsTextColorArr[0];
        subtitle.append(tabsTextColor1);

        const tabsTextColor2 = document.createElement('div');
        tabsTextColor2.classList.add('modalCard__subtitle-tab');
        tabsTextColor2.textContent = tabsTextColorArr[1];
        subtitle.append(tabsTextColor2);

        const tabsTextColor3 = document.createElement('div');
        tabsTextColor3.classList.add('modalCard__subtitle-tab');
        tabsTextColor3.textContent = tabsTextColorArr[2];
        subtitle.append(tabsTextColor3);

        const textCompanyCatalog = document.createElement('span');
        textCompanyCatalog.textContent = `/ ${firm} / ${forWhom}`;
        subtitle.append(textCompanyCatalog);

        const modalRating = document.createElement('div');
        modalRating.classList.add('modalCard__right-wrapper');
        right.append(modalRating);

        const ratingBlock = document.createElement('div');
        ratingBlock.classList.add('hits__item-rating');
        modalRating.append(ratingBlock);

        const ratingList = document.createElement('ul');
        ratingList.classList.add('hits__item-rating__list');
        ratingBlock.append(ratingList);

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
        modalRating.append(reviewsWrapper);

        const textColor = document.createElement('div');
        textColor.classList.add('modalCard__textColor');
        textColor.textContent = 'Цвет:';
        right.append(textColor);

        const tabsWrapper = document.createElement('div');
        tabsWrapper.classList.add('modalCard__tabs');
        right.append(tabsWrapper);

        const tab1 = document.createElement('div');
        tab1.classList.add('modalCard__tab');
        tabsWrapper.append(tab1);

        const tabImg1 = document.createElement('img');
        tabImg1.classList.add('modalCard__tab-img');
        tab1.append(tabImg1);

        const tab2 = document.createElement('div');
        tab2.classList.add('modalCard__tab');
        tabsWrapper.append(tab2);

        const tabImg2 = document.createElement('img');
        tabImg2.classList.add('modalCard__tab-img');
        tab2.append(tabImg2);

        const tab3 = document.createElement('div');
        tab3.classList.add('modalCard__tab');
        tabsWrapper.append(tab3);

        const tabImg3 = document.createElement('img');
        tabImg3.classList.add('modalCard__tab-img');
        tab3.append(tabImg3);

        const tabsImg = [image1, image2, image3];

        tabImg1.src = tabsImg[0];
        tabImg2.src = tabsImg[1];
        tabImg3.src = tabsImg[2];

        tabImg1.alt = 'icon';
        tabImg2.alt = 'icon';
        tabImg3.alt = 'icon';

        const price = document.createElement('div');
        price.classList.add('modalCard__price');
        price.innerHTML = `
            <div class="modalCard__price-old">${priceOld}₽</div>
            <div class="modalCard__price-new">${priceNew}₽</div>
        `;
        right.append(price);

        const warehouse = document.createElement('div');
        warehouse.classList.add('modalCard__warehouse');
        warehouse.textContent = `${availability} в наличии`;
        right.append(warehouse);

        const connection = document.createElement('div');
        connection.classList.add('modalCard__connection');
        connection.innerHTML = `
            <div class="modalCard__connection-wrapper">
                <div class="modalCard__connection-title">Связаться по телефону:</div>
                <img src="icons/consultation/phone.svg" alt="phone" class="modalCard__connection-img">
                <a href="#" class="modalCard__connection-link">8-800-77-07-999</a>
            </div>
            <div class="modalCard__connection-wrapper">
                <div class="modalCard__connection-title">Мессенждеры:</div>                           
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="modalCard__connection-img"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" fill="#cb11ab"></path></svg>
                <a href="#" class="modalCard__connection-link">WhatsApp</a>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-telegram" viewBox="0 0 24 24" class="modalCard__connection-img"><path d="M9.78,18.65L10.06,14.42L17.74,7.5C18.08,7.19 17.67,7.04 17.22,7.31L7.74,13.3L3.64,12C2.76,11.75 2.75,11.14 3.84,10.7L19.81,4.54C20.54,4.21 21.24,4.72 20.96,5.84L18.24,18.65C18.05,19.56 17.5,19.78 16.74,19.36L12.6,16.3L10.61,18.23C10.38,18.46 10.19,18.65 9.78,18.65Z" fill="#cb11ab"></path></svg>
                <a href="#" class="modalCard__connection-link">Telegramm</a>
            </div>
        `;
        right.append(connection);

        const advantages = document.createElement('div');
        advantages.classList.add('modalCard__advantages');
        advantages.innerHTML = `
            <div class="modalCard__advantages-flex">
                <img src="icons/advantages/guarantee.svg" alt="" class="modalCard__advantages-img">
                <div class="modalCard__advantages-descr">Полная гарантия 1 год</div>
            </div>
            <div class="modalCard__advantages-flex">
                <img src="icons/advantages/wallet.svg" alt="" class="modalCard__advantages-img">
                <div class="modalCard__advantages-descr">Оплата при получении после проверки</div>
            </div>
            <div class="modalCard__advantages-flex">
                <img src="icons/advantages/service.svg" alt="" class="modalCard__advantages-img">
                <div class="modalCard__advantages-descr">Техподдержка 7 дней в неделю</div>
            </div>
            <div class="modalCard__advantages-flex">
                <img src="icons/advantages/return.svg" alt="" class="modalCard__advantages-img">
                <div class="modalCard__advantages-descr">Возврат/обмен 14 дней</div>
            </div>
            <div class="modalCard__advantages-flex">
                <img src="icons/advantages/certificate.svg" alt="" class="modalCard__advantages-img">
                <div class="modalCard__advantages-descr">Сертифицированный товар</div>
            </div>
        `;
        right.append(advantages);

        const titleCenter = document.createElement('div');
        titleCenter.classList.add('modalCard__title', 'modalCard__title-center');
        titleCenter.textContent = `О товаре`;
        wrapper.append(titleCenter);

        const items = document.createElement('div');
        items.classList.add('modalCard__items');
        wrapper.append(items);

        const item1 = document.createElement('div');
        item1.classList.add('modalCard__item');
        item1.textContent = 'Описание';
        items.append(item1);

        const item2 = document.createElement('div');
        item2.classList.add('modalCard__item');
        item2.textContent = 'характеристики';
        items.append(item2);

        const item3 = document.createElement('div');
        item3.classList.add('modalCard__item');
        item3.textContent = `отзывы (${numberReviews})`;
        items.append(item3);

        const item4 = document.createElement('div');
        item4.classList.add('modalCard__item');
        item4.textContent = 'доставка и оплата';
        items.append(item4);

        const item5 = document.createElement('div');
        item5.classList.add('modalCard__item');
        item5.textContent = 'Частые вопросы';
        items.append(item5);

        const stripe = document.createElement('div');
        stripe.classList.add('modalCard__stripe');
        wrapper.append(stripe);

        const itemBlock1 = document.createElement('div');
        itemBlock1.classList.add('modalCard__item-block');
        itemBlock1.innerHTML = `
            <div class="modalCard__item-title">Особенности модели:</div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Поддержка видеозвонков (входящие и исходящие) и 4G LTE
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Датчик снятия с руки
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Фотокамера (для съёмки и удалённого мониторинга с приложения);
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Водонепроницаемость стандарта IP67* (можно ненадолго погружать на глубину до 1 м)
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Wi-Fi (помогает определять более точное местоположение в помещении)
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    GOOGLE-переводчик
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Увеличенный объем батареи (680 mA*h, что позволяет пользоваться часами несколько суток без зарядки).
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Секундомер
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Технология Face ID
                </div>
            </div>
            <div class="modalCard__stripe"></div>
            <div class="modalCard__item-title modalCard__item-title__mt">Основные функции:</div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Входящие и исходящие звонки
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Определение местоположения ребёнка на смартфоне родителей (по GPS, Wi-Fi и LBS)
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Скрытый звонок (функция прослушки в целях безопасности)
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Кнопка SOS (экстренный вызов на 1-3 номера)
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    История перемещений
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Телефонная книга на 15 номеров
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Прямой набор номера (с возможностью блокировки)
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Обмен голосовыми сообщениями
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Установка гео-зон (школа/дом) с оповещениями на смартфоне родителей
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Подсчёт активности, арифметическая игра, установка расписания
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Будильник и другие функции
                </div>
            </div>
        `;
        wrapper.append(itemBlock1);

        const itemBlock2 = document.createElement('div');
        itemBlock2.classList.add('modalCard__item-block');
        itemBlock2.innerHTML = `
            <div class="modalCard__specifications">
                <div class="modalCard__specifications-title">Основные</div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Производитель</div>
                    <div class="modalCard__specifications-descr">
                        Wonlex - крупнейший производитель оригинальных детских смарт часов с GPS, качество которых кардинально превосходит более дешёвые аналоги.
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Название модели</div>
                    <div class="modalCard__specifications-descr">
                        KT17
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Для кого</div>
                    <div class="modalCard__specifications-descr">
                        Смарт часы для детей
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Возраст</div>
                    <div class="modalCard__specifications-descr">
                        От 4-х лет
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Назначение</div>
                    <div class="modalCard__specifications-descr">
                        Для связи, контроля и безопасности
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Описание</div>
                    <div class="modalCard__specifications-descr">
                        С помощью детских умных часов Вы всегда сможете оставаться на связи со своим ребёнком, также знать, где находится ваш ребёнок и что происходит рядом с ним.
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Приложение</div>
                    <div class="modalCard__specifications-descr">
                        SeTracker 2 (Бесплатное для iOS и Android. Рекомендованное производителем. Устанавливают родители себе на телефон для настройки и контроля за ребёнком)
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Срок гарантии</div>
                    <div class="modalCard__specifications-descr">
                        1 год
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Тип сим-карты</div>
                    <div class="modalCard__specifications-descr">
                        Нано-SIM (в комплект не входит)
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Батарея</div>
                    <div class="modalCard__specifications-descr">
                        Литиевая батарея 680mAh, до 150 часов в режиме ожидания
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Совместимость</div>
                    <div class="modalCard__specifications-descr">
                        Android, iOS
                    </div>
                </div>
                <div class="modalCard__specifications-title border-radius">Водонепроницаемость</div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Класс влагозащиты</div>
                    <div class="modalCard__specifications-descr">
                        IP67 (недолгое погружение в воду)
                    </div>
                </div>
                <div class="modalCard__specifications-title border-radius">Функции</div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Видеозвонки</div>
                    <div class="modalCard__specifications-descr">
                        Есть
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Виброзвонок</div>
                    <div class="modalCard__specifications-descr">
                        -
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Входящие и исходящие звонки</div>
                    <div class="modalCard__specifications-descr">
                        Есть
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Определение местоположения</div>
                    <div class="modalCard__specifications-descr">
                        GPS + AGPS + LBS + Wi-Fi
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Скрытый звонок</div>
                    <div class="modalCard__specifications-descr">
                        Есть
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">История перемещений</div>
                    <div class="modalCard__specifications-descr">
                        Есть
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Голосовые сообщения</div>
                    <div class="modalCard__specifications-descr">
                        Есть
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Кнопка SOS</div>
                    <div class="modalCard__specifications-descr">
                        Есть
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Установка гео-зон</div>
                    <div class="modalCard__specifications-descr">
                        Есть
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Будильник</div>
                    <div class="modalCard__specifications-descr">
                        Есть
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Отправка фото с часов родителям</div>
                    <div class="modalCard__specifications-descr">
                        Есть
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Удалённый мониторинг по фото</div>
                    <div class="modalCard__specifications-descr">
                        Есть
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Google-переводчик</div>
                    <div class="modalCard__specifications-descr">
                        Есть
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Секундомер</div>
                    <div class="modalCard__specifications-descr">
                        Есть
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Арифметическая игра</div>
                    <div class="modalCard__specifications-descr">
                        Есть
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Установка расписания</div>
                    <div class="modalCard__specifications-descr">
                        Есть
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Прочие функции</div>
                    <div class="modalCard__specifications-descr">
                        Датчик снятия с руки, журнал истории звонков, технология Face ID
                    </div>
                </div>
                <div class="modalCard__specifications-title border-radius">Дисплей</div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Диагональ</div>
                    <div class="modalCard__specifications-descr">
                        1.4
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Экран</div>
                    <div class="modalCard__specifications-descr">
                        цветной
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Тип управления</div>
                    <div class="modalCard__specifications-descr">
                        сенсорный
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Матрица</div>
                    <div class="modalCard__specifications-descr">
                        IPS
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Разрешение</div>
                    <div class="modalCard__specifications-descr">
                        240x240
                    </div>
                </div>
                <div class="modalCard__specifications-title border-radius">Размеры</div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Корпус</div>
                    <div class="modalCard__specifications-descr">
                        46 X 42 X 15 мм
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Обхват запястья</div>
                    <div class="modalCard__specifications-descr">
                        от 130мм до 205мм
                    </div>
                </div>
                <div class="modalCard__specifications-title border-radius">Параметры</div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Встроенная память</div>
                    <div class="modalCard__specifications-descr">
                        4092 MB
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Оперативная память</div>
                    <div class="modalCard__specifications-descr">
                        2048 MB
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Камера</div>
                    <div class="modalCard__specifications-descr">
                        2 Мп
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Телефонная книга</div>
                    <div class="modalCard__specifications-descr">
                        на 15 номеров
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Поддержка сетей</div>
                    <div class="modalCard__specifications-descr">
                        2G, 3G, 4G LTE
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Беспроводная связь</div>
                    <div class="modalCard__specifications-descr">
                        Wi-Fi, Bluetooth
                    </div>
                </div>
                <div class="modalCard__specifications-title border-radius">Прочее</div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Комплектация</div>
                    <div class="modalCard__specifications-descr">
                        Детские умные часы, коробка, зарядное устройство, инструкция на русском, руководство пользователя SmartPresent
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Вес</div>
                    <div class="modalCard__specifications-descr">
                        54г
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Дизайн</div>
                    <div class="modalCard__specifications-descr">
                        Универсальный
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Процессор</div>
                    <div class="modalCard__specifications-descr">
                        9820E
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Операционная система</div>
                    <div class="modalCard__specifications-descr">
                        Android 6.0
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Стандарты связи</div>
                    <div class="modalCard__specifications-descr">
                        GSM 850/900/1800/1900 МГц
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Материал ремешка</div>
                    <div class="modalCard__specifications-descr">
                        Гипоаллергенный силикон
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Материал корпуса</div>
                    <div class="modalCard__specifications-descr">
                        Высококачественный антиаллергенный пластик
                    </div>
                </div>
            </div>
        `;
        wrapper.append(itemBlock2);

        const itemBlock3 = document.createElement('div');
        itemBlock3.classList.add('modalCard__item-block');
        itemBlock3.innerHTML = `
            <div class="modalCard__item-reviews">
                <div class="modalCard__item-reviews__img">
                    <img src="icons/reviews/sergey.png" alt="sergey">
                </div>
                <div class="modalCard__item-reviews__title">
                    Сергей В.
                </div>
                <div class="modalCard__item-reviews__text">
                    Достоинства:
                    <span>Lorem ipsum dolor sit amet consectetur</span>
                </div>
                <div class="modalCard__item-reviews__text">
                    Недостатки:
                    <span>Lorem ipsum dolor</span>
                </div>
                <div class="modalCard__item-reviews__text">
                    Опыт пользования:
                    <span>Lorem ipsum dolor</span>
                </div>
                <div class="reviews__descr modalCard__descr-adaptiv">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorem aliquid ex 
                </div>
                <div class="reviews__bottom">
                    <div class="reviews__bottom-time modalCard__reviews-time">
                        21.12.2021
                    </div>
                    <div class="reviews__bottom-location">
                        <div class="reviews__bottom-img">
                            <svg fill="#cb11ab" id="Layer_1" style="enable-background:new 0 0 91 91;" version="1.1" viewBox="0 0 91 91" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M66.9,41.8c0-11.3-9.1-20.4-20.4-20.4c-11.3,0-20.4,9.1-20.4,20.4c0,11.3,20.4,32.4,20.4,32.4S66.9,53.1,66.9,41.8z    M37,41.4c0-5.2,4.3-9.5,9.5-9.5c5.2,0,9.5,4.2,9.5,9.5c0,5.2-4.2,9.5-9.5,9.5C41.3,50.9,37,46.6,37,41.4z"/></g></svg>
                        </div>
                        <div class="reviews__bottom-city modalCard__reviews-city">
                            Москва
                        </div>
                    </div>
                </div>
            </div>
        `;
        wrapper.append(itemBlock3);

        const itemBlock4 = document.createElement('div');
        itemBlock4.classList.add('modalCard__item-block');
        itemBlock4.innerHTML = `
            <div class="modalCard__delivery">
                <div class="modalCard__delivery-title">
                    Способы доставки и оплаты
                </div>
                <div class="modalCard__delivery-subtitle">
                    Мы сотрудничаем со многими курьерскими службами для наиболее оперативного и удобного способа доставки.
                </div>
                <div class="modalCard__delivery-wrapper">
                    <div class="modalCard__delivery-block">
                        <div class="modalCard__delivery-top">
                            <div class="modalCard__delivery-location">
                                <svg class="modalCard__delivery-svg" fill="#cb11ab" id="Layer_1" style="enable-background:new 0 0 91 91;" version="1.1" viewBox="0 0 91 91" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M66.9,41.8c0-11.3-9.1-20.4-20.4-20.4c-11.3,0-20.4,9.1-20.4,20.4c0,11.3,20.4,32.4,20.4,32.4S66.9,53.1,66.9,41.8z    M37,41.4c0-5.2,4.3-9.5,9.5-9.5c5.2,0,9.5,4.2,9.5,9.5c0,5.2-4.2,9.5-9.5,9.5C41.3,50.9,37,46.6,37,41.4z"></path></g></svg>
                            </div>
                            <div class="modalCard__delivery-text">
                                Доставка по г. Владимир и области
                            </div>
                        </div>
                        <div class="modalCard__delivery-flex">
                            <div class="modalCard__delivery-name">
                                По Владимиру
                            </div>
                            <div class="modalCard__delivery-price">
                                290-350 ₽ - 1 день
                            </div>
                        </div>
                        <div class="modalCard__delivery-flex">
                            <div class="modalCard__delivery-name">
                                По Владимирской области
                            </div>
                            <div class="modalCard__delivery-price">
                                от 450 ₽ - 1 день
                            </div>
                        </div>
                    </div>

                    <div class="modalCard__delivery-block">
                        <div class="modalCard__delivery-top">
                            <div class="modalCard__delivery-location">
                                <svg class="modalCard__delivery-svg" fill="#cb11ab" id="Layer_1" style="enable-background:new 0 0 91 91;" version="1.1" viewBox="0 0 91 91" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M66.9,41.8c0-11.3-9.1-20.4-20.4-20.4c-11.3,0-20.4,9.1-20.4,20.4c0,11.3,20.4,32.4,20.4,32.4S66.9,53.1,66.9,41.8z    M37,41.4c0-5.2,4.3-9.5,9.5-9.5c5.2,0,9.5,4.2,9.5,9.5c0,5.2-4.2,9.5-9.5,9.5C41.3,50.9,37,46.6,37,41.4z"></path></g></svg>
                            </div>
                            <div class="modalCard__delivery-text">
                                Доставка в другие города России
                            </div>
                        </div>
                        <div class="modalCard__delivery-flex">
                            <div class="modalCard__delivery-name">
                                Пункты выдачи (ТК СДЭК)
                            </div>
                            <div class="modalCard__delivery-price">
                                290 ₽ - 2-5 дней
                            </div>
                        </div>
                        <div class="modalCard__delivery-flex">
                            <div class="modalCard__delivery-name">
                                Курьером (ТК СДЭК)
                            </div>
                            <div class="modalCard__delivery-price">
                                450 ₽ - 2-5 дней
                            </div>
                        </div>
                        <div class="modalCard__delivery-flex">
                            <div class="modalCard__delivery-name">
                                Почта России (удаленные регионы)
                            </div>
                            <div class="modalCard__delivery-price">
                                от 290 ₽
                            </div>
                        </div>
                    </div>

                    <div class="modalCard__delivery-block">
                        <div class="modalCard__delivery-top">
                            <img src="icons/bag.svg" alt="bag" class="modalCard__delivery-svg margin-right">
                            <div class="modalCard__delivery-text">
                                Самовывоз
                            </div>
                        </div>
                        <div class="modalCard__delivery-descr">
                            Вы так же можете приехать к нам в офис и выбрать товары на месте, предварительно оформив заказ на нашем сайте. Наш адрес:
                        </div>
                        <div class="modalCard__delivery-address">
                            <div class="modalCard__delivery-location">
                                <svg class="modalCard__delivery-svg" fill="#cb11ab" id="Layer_1" style="enable-background:new 0 0 91 91;" version="1.1" viewBox="0 0 91 91" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M66.9,41.8c0-11.3-9.1-20.4-20.4-20.4c-11.3,0-20.4,9.1-20.4,20.4c0,11.3,20.4,32.4,20.4,32.4S66.9,53.1,66.9,41.8z    M37,41.4c0-5.2,4.3-9.5,9.5-9.5c5.2,0,9.5,4.2,9.5,9.5c0,5.2-4.2,9.5-9.5,9.5C41.3,50.9,37,46.6,37,41.4z"></path></g></svg>
                            </div>
                            <div class="modalCard__delivery-city">г. Владимир:
                                <span>Большая Московская ул., 19А, 2 этаж</span>
                            </div>
                        </div>
                        <div class="modalCard__delivery-descr">
                            При себе необходимо иметь электорнный чек, если вы уже оплатили через наш сайт
                        </div>
                    </div>
                    <div class="modalCard__delivery-block">
                        <div class="modalCard__delivery-top">
                            <img src="icons/advantages/wallet.svg" alt="wallet" class="modalCard__delivery-svg margin-right">
                            <div class="modalCard__delivery-text">
                                Способы оплаты
                            </div>
                        </div>
                        <div class="modalCard__delivery-payment">
                            <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__delivery-svg">
                            <div class="modalCard__delivery-descr">Наличными при получении (курьеру или в пункте выдачи)</div>
                        </div>
                        <div class="modalCard__delivery-payment">
                            <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__delivery-svg">
                            <div class="modalCard__delivery-descr">Картой при получении (курьеру или в пункте выдачи</div>
                        </div>
                        <div class="modalCard__delivery-payment">
                            <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__delivery-svg">
                            <div class="modalCard__delivery-descr">Онлайн по карте после оформления заказа</div>
                        </div>
                        <div class="modalCard__delivery-payment">
                            <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__delivery-svg">
                            <div class="modalCard__delivery-descr">На расчетный счет компании</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        wrapper.append(itemBlock4);

        const itemBlock5 = document.createElement('div');
        itemBlock5.classList.add('modalCard__item-block');
        wrapper.append(itemBlock5);

        const questions = document.createElement('div');
        questions.classList.add('modalCard__questions');
        questions.innerHTML = `
            <div class="modalCard__questions-title">
                Частые вопросы
            </div>
            <div class="modalCard__questions-subtitle">
                Если Вы не нашли ответа на вопрос, то для Вас ежедневно работает тех. поддержка - мы будем рады помочь:
            </div>
            <div class="modalCard__questions-phone">
                <img src="icons/consultation/phone.svg" alt="phone" class="modalCard__questions-img">
                <a href="#" class="modalCard__questions-link">8-800-77-07-999</a>
            </div>
        `;
        itemBlock5.append(questions);

        const questionsWrapper = document.createElement('div');
        questionsWrapper.classList.add('modalCard__questions-wrapper');
        questions.append(questionsWrapper);
        
        const questionsBlock1 = document.createElement('div');
        questionsBlock1.classList.add('modalCard__questions-block');

        const questionsFlex1 = document.createElement('div');
        questionsFlex1.classList.add('modalCard__questions-flex');
        questionsFlex1.innerHTML = `
            <div class="modalCard__questions-text">Какое приложение использовать?</div>
        `;

        const questionsCross1 = document.createElement('div');
        questionsCross1.classList.add('modalCard__questions-cross');
        questionsCross1.textContent = `×`;
        questionsBlock1.append(questionsFlex1);
        questionsFlex1.append(questionsCross1);

        const questionsDescr1 = document.createElement('div');
        questionsDescr1.classList.add('modalCard__questions-descr');
        questionsDescr1.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa magni laborum earum porro perferendis repudiandae, aliquam sint dolor. Beatae numquam ipsam veniam obcaecati, voluptate sit. Error similique aliquid odio illo.';
        questionsBlock1.append(questionsDescr1);

        questionsWrapper.append(questionsBlock1);

        const questionsBlock2 = document.createElement('div');
        questionsBlock2.classList.add('modalCard__questions-block');

        const questionsFlex2 = document.createElement('div');
        questionsFlex2.classList.add('modalCard__questions-flex');
        questionsFlex2.innerHTML = `
            <div class="modalCard__questions-text">Сколько человек могут пользоваться приложением?</div>
        `;

        const questionsCross2 = document.createElement('div');
        questionsCross2.classList.add('modalCard__questions-cross');
        questionsCross2.textContent = `×`;
        questionsBlock2.append(questionsFlex2);
        questionsFlex2.append(questionsCross2);

        const questionsDescr2 = document.createElement('div');
        questionsDescr2.classList.add('modalCard__questions-descr');
        questionsDescr2.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa magni laborum earum porro perferendis repudiandae, aliquam sint dolor. Beatae numquam ipsam veniam obcaecati, voluptate sit. Error similique aliquid odio illo.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa magni laborum earum porro perferendis repudiandae, aliquam sint dolor. Beatae numquam ipsam veniam obcaecati, voluptate sit. Error similique aliquid odio illo.';
        questionsBlock2.append(questionsDescr2);

        questionsWrapper.append(questionsBlock2);

        const questionsBlock3 = document.createElement('div');
        questionsBlock3.classList.add('modalCard__questions-block');

        const questionsFlex3 = document.createElement('div');
        questionsFlex3.classList.add('modalCard__questions-flex');
        questionsFlex3.innerHTML = `
            <div class="modalCard__questions-text">Как выбрать оператора и тариф для смарт-часов?</div>
        `;

        const questionsCross3 = document.createElement('div');
        questionsCross3.classList.add('modalCard__questions-cross');
        questionsCross3.textContent = `×`;
        questionsBlock3.append(questionsFlex3);
        questionsFlex3.append(questionsCross3);

        const questionsDescr3 = document.createElement('div');
        questionsDescr3.classList.add('modalCard__questions-descr');
        questionsDescr3.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa magni laborum earum porro perferendis repudiandae, aliquam sint dolor. Beatae numquam ipsam veniam obcaecati, voluptate sit. Error similique aliquid odio illo.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa magni laborum earum porro perferendis repudiandae, aliquam sint dolor. Beatae numquam ipsam veniam obcaecati, voluptate sit. Error similique aliquid odio illo.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa magni laborum earum porro perferendi';
        questionsBlock3.append(questionsDescr3);

        questionsWrapper.append(questionsBlock3);

        const questionsBlock4 = document.createElement('div');
        questionsBlock4.classList.add('modalCard__questions-block');

        const questionsFlex4 = document.createElement('div');
        questionsFlex4.classList.add('modalCard__questions-flex');
        questionsFlex4.innerHTML = `
            <div class="modalCard__questions-text">Как установить сим-карту?</div>
        `;

        const questionsCross4 = document.createElement('div');
        questionsCross4.classList.add('modalCard__questions-cross');
        questionsCross4.textContent = `×`;
        questionsBlock4.append(questionsFlex4);
        questionsFlex4.append(questionsCross4);

        const questionsDescr4 = document.createElement('div');
        questionsDescr4.classList.add('modalCard__questions-descr');
        questionsDescr4.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa magni laborum earum porro perferendis repudiandae, aliquam sint dolor. Beatae numquam ipsam veniam obcaecati, voluptate sit.';
        questionsBlock4.append(questionsDescr4);

        questionsWrapper.append(questionsBlock4);

        const questionsBlock5 = document.createElement('div');
        questionsBlock5.classList.add('modalCard__questions-block');

        const questionsFlex5 = document.createElement('div');
        questionsFlex5.classList.add('modalCard__questions-flex');
        questionsFlex5.innerHTML = `
            <div class="modalCard__questions-text">Как точно определяется местоположение?</div>
        `;

        const questionsCross5 = document.createElement('div');
        questionsCross5.classList.add('modalCard__questions-cross');
        questionsCross5.textContent = `×`;
        questionsBlock5.append(questionsFlex5);
        questionsFlex5.append(questionsCross5);

        const questionsDescr5 = document.createElement('div');
        questionsDescr5.classList.add('modalCard__questions-descr');
        questionsDescr5.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa magni laborum earum porro perferendis repudiandae, aliquam sint dolor. Beatae numquam ipsam veniam obcaecati, voluptate sit.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa magni laborum earum porro perferendis repudiandae, aliquam sint dolor. Beatae numquam ipsam veniam obcaecati, voluptate sit.';
        questionsBlock5.append(questionsDescr5);

        questionsWrapper.append(questionsBlock5);

        const questionsBlock6 = document.createElement('div');
        questionsBlock6.classList.add('modalCard__questions-block');

        const questionsFlex6 = document.createElement('div');
        questionsFlex6.classList.add('modalCard__questions-flex');
        questionsFlex6.innerHTML = `
            <div class="modalCard__questions-text">Сколько держит аккумулятор?</div>
        `;

        const questionsCross6 = document.createElement('div');
        questionsCross6.classList.add('modalCard__questions-cross');
        questionsCross6.textContent = `×`;
        questionsBlock6.append(questionsFlex6);
        questionsFlex6.append(questionsCross6);

        const questionsDescr6 = document.createElement('div');
        questionsDescr6.classList.add('modalCard__questions-descr');
        questionsDescr6.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa magni laborum earum porro perferendis repudiandae, aliquam sint dolor. Beatae numquam ipsam veniam obcaecati, voluptate sit.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa magni laborum earum porro perferendis repudiandae, aliquam sint dolor. Beatae numquam ipsam veniam obcaecati, voluptate sit.';
        questionsBlock6.append(questionsDescr6);

        questionsWrapper.append(questionsBlock6);

        /////////////////////////// slider ////////////////////////////
        const imgArr = []
        imgArr.push(img1, img2, img3);

        const tabsImgArr = [];
        tabsImgArr.push(tabImg1, tabImg2, tabImg3);

        const tabsArr = [];
        tabsArr.push(tab1, tab2, tab3);

        const tabsTextColorArray = [];
        tabsTextColorArray.push(tabsTextColor1, tabsTextColor2, tabsTextColor3);

        function hideTabSlides() {  // Скрыть всё
            imgArr.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('show', 'fade');
            });
            tabsArr.forEach(item => {
                item.classList.remove('modalCard__tab-active');
            });
            tabsImgArr.forEach(item => {
                item.classList.remove('modalCard__tab-img__active');
            });
            tabsTextColorArray.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('show');
            });    
        }
        
        function showTabSlides(i) {  // Показать слайд (Первый)
            imgArr[i].classList.add('show', 'fade');
            imgArr[i].classList.remove('hide');
            tabsArr[i].classList.add('modalCard__tab-active');
            tabsImgArr[i].classList.add('modalCard__tab-img__active');
            tabsTextColorArray[i].classList.add('show');
            tabsTextColorArray[i].classList.remove('hide');
        }
        hideTabSlides();
        showTabSlides(0);

        tabsWrapper.addEventListener('click', (event) => {
            if(event.target && event.target.classList.contains('modalCard__tab')) {
                tabsArr.forEach((item, i) => {
                    if(event.target === item) {
                        hideTabSlides();
                        showTabSlides(i); 
                    }
                });
            }
        });

        tabsWrapper.addEventListener('click', (event) => {
            if(event.target && event.target.classList.contains('modalCard__tab-img')) {
                tabsImgArr.forEach((item, i) => {
                    if(event.target === item) {
                        hideTabSlides();
                        showTabSlides(i); 
                    }
                })
            }
        });

        /////////////////////////// ТАБЫ ////////////////////////////
        const itemsArr = [];
        itemsArr.push(item1, item2, item3, item4, item5);

        const contentsArr = [];
        contentsArr.push(itemBlock1, itemBlock2, itemBlock3, itemBlock4, itemBlock5);

        function hideTabContent() { // скрыть все контенты
            contentsArr.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('show', 'fade');
            });
            itemsArr.forEach(item => {
                item.classList.remove('modalCard__item-active');
            });
        }

        function showTabContent(i) {  // открыть первый контент
            contentsArr[i].classList.add('show', 'fade');
            contentsArr[i].classList.remove('hide');
            itemsArr[i].classList.add('modalCard__item-active');
        }
    
        hideTabContent();
        showTabContent(0);

        items.addEventListener('click', (event) => {
            if(event.target && event.target.classList.contains('modalCard__item')) {
                itemsArr.forEach((item, i) => {
                    if(event.target == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });

        /////////////////////////// ТАБЫ (Частые вопросы) ////////////////////////////

        const crossArr = [];
        crossArr.push(questionsCross1, questionsCross2, questionsCross3,questionsCross4,questionsCross5, questionsCross6);

        const descrArr = [];
        descrArr.push(questionsDescr1, questionsDescr2, questionsDescr3, questionsDescr4, questionsDescr5, questionsDescr6);

        const questionsBlockArr = [];
        questionsBlockArr.push(questionsBlock1, questionsBlock2, questionsBlock3, questionsBlock4, questionsBlock5, questionsBlock6);

        questionsBlockArr.forEach(item => {
            item.classList.add('staticHeight');
        });

        function openDescr(i) {
            crossArr[i].classList.add('modalCard__questions-cross__active');
            descrArr[i].classList.add('modalCard__questions-descr__active');
            questionsBlockArr[i].classList.remove('staticHeight');
        }

        function closeDescr(i) {
            crossArr[i].classList.remove('modalCard__questions-cross__active');
            descrArr[i].classList.remove('modalCard__questions-descr__active');
            questionsBlockArr[i].classList.add('staticHeight');
        }

        questionsWrapper.addEventListener('click', (event) => {
            if(event.target && event.target.classList.contains('modalCard__questions-cross')) {
                crossArr.forEach((item, i) => {
                    if(event.target === item) {
                        if(!crossArr[i].classList.contains('modalCard__questions-cross__active') && !descrArr[i].classList.contains('modalCard__questions-descr__active')) {
                            openDescr(i);
                        } else {
                            closeDescr(i);
                        }
                    }                  
                });
            }
        });

        /////////////////////////// modal ////////////////////////////    

        const modalCardArr = document.querySelectorAll('.modalCard');

        function hideModalCard() {
            modalCardArr.forEach(item => {
                item.classList.add('hide');
            });
            modalCardArr.forEach(item => {
                item.classList.remove('show', 'fade');
            });
            document.body.style.overflow = '';
            document.querySelector('.header-top').style.display = '';
            document.querySelector('.header-bottom__right').style.display = '';
        }
        hideModalCard();

        function showModalCard(i) {
            modalCardArr[i].classList.remove('hide');
            modalCardArr[i].classList.add('show', 'fade');
            document.body.style.overflow = 'hidden';
            document.querySelector('.header-top').style.display = 'none';
            document.querySelector('.header-bottom__right').style.display = 'none';
        }

        document.querySelector('.hits__content-children').addEventListener('click', (event) => {
            if(event.target && event.target.classList.contains('hits__item-bottom__btn')) {
                document.querySelectorAll('.hits__item-bottom__btn').forEach((item, i) => {
                    if(event.target === item) {
                        hideModalCard();
                        showModalCard(i);
                    }
                });
            }
        });

        close.addEventListener('click', hideModalCard);

        modalCard.addEventListener('click', (event) => {
            if(event.target === modalCard) {
                hideModalCard();
            }
        });
    
        document.addEventListener('keydown', (event) => {
            if(event.code === 'Escape' && modalCard.classList.contains('show')) {
                hideModalCard();
            }
        }); 
    }

    modalCardRender(
        'img/cards/children/wonlex/KT17/black.jpeg',
        'img/cards/children/wonlex/KT17/pink.jpeg',
        'img/cards/children/wonlex/KT17/blue.jpeg',
        'Детские смарт-часы KT17 «4G',
        'Черные',
        'Розовые', 
        'Голубые',
        'Wonlex',
        'Для детей',
        5,
        6,
        '8490',
        '6900',
        'Есть',
    );

    modalCardRender(
        'img/cards/children/wonlex/KT15/black.jpg',
        'img/cards/children/wonlex/KT15/pink.jpg',
        'img/cards/children/wonlex/KT15/blue.jpg',
        'Детские смарт-часы KT15 «4G»',
        'Черные',
        'Розовые', 
        'Голубые',
        'Wonlex',
        'Для детей',
        5,
        13,
        '9490',
        '7490',
        'Есть',
    );

    modalCardRender(
        'img/cards/children/wonlex/KT12/black.jpg',
        'img/cards/children/wonlex/KT12/pink.jpg',
        'img/cards/children/wonlex/KT12/blue.jpg',
        'Детские смарт-часы KT12 «4G»',
        'Черные',
        'Розовые', 
        'Голубые',
        'Wonlex',
        'Для детей',
        5,
        11,
        '8490',
        '6490',
        'Есть',
    );

    modalCardRender(
        'img/cards/children/wonlex/GW500s/black.jpg',
        'img/cards/children/wonlex/GW500s/pink.jpg',
        'img/cards/children/wonlex/GW500s/blue.jpg',
        'Детские смарт-часы GW500s',
        'Черные',
        'Розовые', 
        'Голубые',
        'Wonlex',
        'Для детей',
        3,
        37,
        '5490',
        '3490',
        'Есть',
    );

    modalCardRender(
        'img/cards/children/wonlex/KT22/black.jpg',
        'img/cards/children/wonlex/KT22/pink.jpg',
        'img/cards/children/wonlex/KT22/blue.jpg',
        'Детские смарт-часы KT22 «4G»',
        'Черные',
        'Розовые', 
        'Голубые',
        'Wonlex',
        'Для детей',
        5,
        25,
        '8490',
        '6490',
        'Есть',
    );
}



/***/ }),

/***/ "./src/js/modules/modalCardElderly.js":
/*!********************************************!*\
  !*** ./src/js/modules/modalCardElderly.js ***!
  \********************************************/
/*! exports provided: modalCardElderly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalCardElderly", function() { return modalCardElderly; });
function modalCardElderly() {
    function modalCardRender(image1, image2, image3, titleModal, color1, color2, color3, firm, forWhom, numberStars, numberReviews, priceOld, priceNew, availability, opacity) {
        const modalCard = document.createElement('div');
        modalCard.classList.add('modalCard');
        document.querySelector('.hits__content-elderly').append(modalCard);

        const container = document.createElement('div');
        container.classList.add('container');
        container.classList.add('container__relative');
        modalCard.append(container);

        const close = document.createElement('div');
        close.classList.add('modalCard__close');
        close.textContent = '×';
        container.append(close);

        const wrapper = document.createElement('div');
        wrapper.classList.add('modalCard__wrapper');
        container.append(wrapper);

        const flex = document.createElement('div');
        flex.classList.add('modalCard__flex');
        wrapper.append(flex);

        const slider = document.createElement('div');
        slider.classList.add('modalCard__left');
        flex.append(slider);

        const img1 = document.createElement('img');
        img1.classList.add('modalCard__slide');
        slider.append(img1);

        const img2 = document.createElement('img');
        img2.classList.add('modalCard__slide');
        slider.append(img2);

        const img3 = document.createElement('img');
        img3.classList.add('modalCard__slide');
        slider.append(img3);

        const sliderImg = [image1, image2, image3];

        img1.src = sliderImg[0];
        img2.src = sliderImg[1];
        img3.src = sliderImg[2];

        img1.alt = 'icon';
        img2.alt = 'icon';
        img3.alt = 'icon';

        const right = document.createElement('div');
        right.classList.add('modalCard__right');
        flex.append(right);

        const title = document.createElement('div');
        title.classList.add('modalCard__title');
        title.textContent = `${titleModal}`;
        right.append(title);

        const subtitle = document.createElement('div');
        subtitle.classList.add('modalCard__subtitle');
        right.append(subtitle);

        const tabsTextColorArr = [color1, color2, color3];
        
        const tabsTextColor1 = document.createElement('div');
        tabsTextColor1.classList.add('modalCard__subtitle-tab');
        tabsTextColor1.textContent = tabsTextColorArr[0];
        subtitle.append(tabsTextColor1);

        const tabsTextColor2 = document.createElement('div');
        tabsTextColor2.classList.add('modalCard__subtitle-tab');
        tabsTextColor2.textContent = tabsTextColorArr[1];
        subtitle.append(tabsTextColor2);

        const tabsTextColor3 = document.createElement('div');
        tabsTextColor3.classList.add('modalCard__subtitle-tab');
        tabsTextColor3.textContent = tabsTextColorArr[2];
        subtitle.append(tabsTextColor3);

        const textCompanyCatalog = document.createElement('span');
        textCompanyCatalog.textContent = `/ ${firm} / ${forWhom}`;
        subtitle.append(textCompanyCatalog);

        const modalRating = document.createElement('div');
        modalRating.classList.add('modalCard__right-wrapper');
        right.append(modalRating);

        const ratingBlock = document.createElement('div');
        ratingBlock.classList.add('hits__item-rating');
        modalRating.append(ratingBlock);

        const ratingList = document.createElement('ul');
        ratingList.classList.add('hits__item-rating__list');
        ratingBlock.append(ratingList);

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
        modalRating.append(reviewsWrapper);

        const textColor = document.createElement('div');
        textColor.classList.add('modalCard__textColor');
        textColor.textContent = 'Цвет:';
        right.append(textColor);

        const tabsWrapper = document.createElement('div');
        tabsWrapper.classList.add('modalCard__tabs');
        right.append(tabsWrapper);

        const tab1 = document.createElement('div');
        tab1.classList.add('modalCard__tab');
        tabsWrapper.append(tab1);

        const tabImg1 = document.createElement('img');
        tabImg1.classList.add('modalCard__tab-img');
        tab1.append(tabImg1);

        const tab2 = document.createElement('div');
        tab2.classList.add('modalCard__tab');
        tab2.classList.add(opacity);
        tabsWrapper.append(tab2);

        const tabImg2 = document.createElement('img');
        tabImg2.classList.add('modalCard__tab-img');
        tab2.append(tabImg2);

        const tab3 = document.createElement('div');
        tab3.classList.add('modalCard__tab');
        tab3.classList.add(opacity);
        tabsWrapper.append(tab3);

        const tabImg3 = document.createElement('img');
        tabImg3.classList.add('modalCard__tab-img');
        tab3.append(tabImg3);

        const tabsImg = [image1, image2, image3];

        tabImg1.src = tabsImg[0];
        tabImg2.src = tabsImg[1];
        tabImg3.src = tabsImg[2];

        tabImg1.alt = 'icon';
        tabImg2.alt = 'icon';
        tabImg3.alt = 'icon';

        const price = document.createElement('div');
        price.classList.add('modalCard__price');
        price.innerHTML = `
            <div class="modalCard__price-old">${priceOld}₽</div>
            <div class="modalCard__price-new">${priceNew}₽</div>
        `;
        right.append(price);

        const warehouse = document.createElement('div');
        warehouse.classList.add('modalCard__warehouse');
        warehouse.textContent = `${availability} в наличии`;
        right.append(warehouse);

        const connection = document.createElement('div');
        connection.classList.add('modalCard__connection');
        connection.innerHTML = `
            <div class="modalCard__connection-wrapper">
                <div class="modalCard__connection-title">Связаться по телефону:</div>
                <img src="icons/consultation/phone.svg" alt="phone" class="modalCard__connection-img">
                <a href="#" class="modalCard__connection-link">8-800-77-07-999</a>
            </div>
            <div class="modalCard__connection-wrapper">
                <div class="modalCard__connection-title">Мессенждеры:</div>                           
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="modalCard__connection-img"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" fill="#cb11ab"></path></svg>
                <a href="#" class="modalCard__connection-link">WhatsApp</a>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-telegram" viewBox="0 0 24 24" class="modalCard__connection-img"><path d="M9.78,18.65L10.06,14.42L17.74,7.5C18.08,7.19 17.67,7.04 17.22,7.31L7.74,13.3L3.64,12C2.76,11.75 2.75,11.14 3.84,10.7L19.81,4.54C20.54,4.21 21.24,4.72 20.96,5.84L18.24,18.65C18.05,19.56 17.5,19.78 16.74,19.36L12.6,16.3L10.61,18.23C10.38,18.46 10.19,18.65 9.78,18.65Z" fill="#cb11ab"></path></svg>
                <a href="#" class="modalCard__connection-link">Telegramm</a>
            </div>
        `;
        right.append(connection);

        const advantages = document.createElement('div');
        advantages.classList.add('modalCard__advantages');
        advantages.innerHTML = `
            <div class="modalCard__advantages-flex">
                <img src="icons/advantages/guarantee.svg" alt="" class="modalCard__advantages-img">
                <div class="modalCard__advantages-descr">Полная гарантия 1 год</div>
            </div>
            <div class="modalCard__advantages-flex">
                <img src="icons/advantages/wallet.svg" alt="" class="modalCard__advantages-img">
                <div class="modalCard__advantages-descr">Оплата при получении после проверки</div>
            </div>
            <div class="modalCard__advantages-flex">
                <img src="icons/advantages/service.svg" alt="" class="modalCard__advantages-img">
                <div class="modalCard__advantages-descr">Техподдержка 7 дней в неделю</div>
            </div>
            <div class="modalCard__advantages-flex">
                <img src="icons/advantages/return.svg" alt="" class="modalCard__advantages-img">
                <div class="modalCard__advantages-descr">Возврат/обмен 14 дней</div>
            </div>
            <div class="modalCard__advantages-flex">
                <img src="icons/advantages/certificate.svg" alt="" class="modalCard__advantages-img">
                <div class="modalCard__advantages-descr">Сертифицированный товар</div>
            </div>
        `;
        right.append(advantages);

        const titleCenter = document.createElement('div');
        titleCenter.classList.add('modalCard__title', 'modalCard__title-center');
        titleCenter.textContent = `О товаре`;
        wrapper.append(titleCenter);

        const items = document.createElement('div');
        items.classList.add('modalCard__items');
        wrapper.append(items);

        const item1 = document.createElement('div');
        item1.classList.add('modalCard__item');
        item1.textContent = 'Описание';
        items.append(item1);

        const item2 = document.createElement('div');
        item2.classList.add('modalCard__item');
        item2.textContent = 'характеристики';
        items.append(item2);

        const item3 = document.createElement('div');
        item3.classList.add('modalCard__item');
        item3.textContent = `отзывы (${numberReviews})`;
        items.append(item3);

        const item4 = document.createElement('div');
        item4.classList.add('modalCard__item');
        item4.textContent = 'доставка и оплата';
        items.append(item4);

        const item5 = document.createElement('div');
        item5.classList.add('modalCard__item');
        item5.textContent = 'Частые вопросы';
        items.append(item5);

        const stripe = document.createElement('div');
        stripe.classList.add('modalCard__stripe');
        wrapper.append(stripe);

        const itemBlock1 = document.createElement('div');
        itemBlock1.classList.add('modalCard__item-block');
        itemBlock1.innerHTML = `
            <div class="modalCard__item-title">Особенности модели:</div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Поддержка видеозвонков (входящие и исходящие) и 4G LTE
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Датчик снятия с руки
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Фотокамера (для съёмки и удалённого мониторинга с приложения);
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Водонепроницаемость стандарта IP67* (можно ненадолго погружать на глубину до 1 м)
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Wi-Fi (помогает определять более точное местоположение в помещении)
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    GOOGLE-переводчик
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Увеличенный объем батареи (680 mA*h, что позволяет пользоваться часами несколько суток без зарядки).
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Секундомер
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Технология Face ID
                </div>
            </div>
            <div class="modalCard__stripe"></div>
            <div class="modalCard__item-title modalCard__item-title__mt">Основные функции:</div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Входящие и исходящие звонки
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Определение местоположения ребёнка на смартфоне родителей (по GPS, Wi-Fi и LBS)
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Скрытый звонок (функция прослушки в целях безопасности)
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Кнопка SOS (экстренный вызов на 1-3 номера)
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    История перемещений
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Телефонная книга на 15 номеров
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Прямой набор номера (с возможностью блокировки)
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Обмен голосовыми сообщениями
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Установка гео-зон (школа/дом) с оповещениями на смартфоне родителей
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Подсчёт активности, арифметическая игра, установка расписания
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Будильник и другие функции
                </div>
            </div>
        `;
        wrapper.append(itemBlock1);

        const itemBlock2 = document.createElement('div');
        itemBlock2.classList.add('modalCard__item-block');
        itemBlock2.innerHTML = `
            <div class="modalCard__specifications">
                <div class="modalCard__specifications-title">Основные</div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Производитель</div>
                    <div class="modalCard__specifications-descr">
                        Wonlex - крупнейший производитель оригинальных детских смарт часов с GPS, качество которых кардинально превосходит более дешёвые аналоги.
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Название модели</div>
                    <div class="modalCard__specifications-descr">
                        KT17
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Для кого</div>
                    <div class="modalCard__specifications-descr">
                        Смарт часы для детей
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Возраст</div>
                    <div class="modalCard__specifications-descr">
                        От 4-х лет
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Назначение</div>
                    <div class="modalCard__specifications-descr">
                        Для связи, контроля и безопасности
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Описание</div>
                    <div class="modalCard__specifications-descr">
                        С помощью детских умных часов Вы всегда сможете оставаться на связи со своим ребёнком, также знать, где находится ваш ребёнок и что происходит рядом с ним.
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Приложение</div>
                    <div class="modalCard__specifications-descr">
                        SeTracker 2 (Бесплатное для iOS и Android. Рекомендованное производителем. Устанавливают родители себе на телефон для настройки и контроля за ребёнком)
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Срок гарантии</div>
                    <div class="modalCard__specifications-descr">
                        1 год
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Тип сим-карты</div>
                    <div class="modalCard__specifications-descr">
                        Нано-SIM (в комплект не входит)
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Батарея</div>
                    <div class="modalCard__specifications-descr">
                        Литиевая батарея 680mAh, до 150 часов в режиме ожидания
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Совместимость</div>
                    <div class="modalCard__specifications-descr">
                        Android, iOS
                    </div>
                </div>
                <div class="modalCard__specifications-title border-radius">Водонепроницаемость</div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Класс влагозащиты</div>
                    <div class="modalCard__specifications-descr">
                        IP67 (недолгое погружение в воду)
                    </div>
                </div>
                <div class="modalCard__specifications-title border-radius">Функции</div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Видеозвонки</div>
                    <div class="modalCard__specifications-descr">
                        Есть
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Виброзвонок</div>
                    <div class="modalCard__specifications-descr">
                        -
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Входящие и исходящие звонки</div>
                    <div class="modalCard__specifications-descr">
                        Есть
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Определение местоположения</div>
                    <div class="modalCard__specifications-descr">
                        GPS + AGPS + LBS + Wi-Fi
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Скрытый звонок</div>
                    <div class="modalCard__specifications-descr">
                        Есть
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">История перемещений</div>
                    <div class="modalCard__specifications-descr">
                        Есть
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Голосовые сообщения</div>
                    <div class="modalCard__specifications-descr">
                        Есть
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Кнопка SOS</div>
                    <div class="modalCard__specifications-descr">
                        Есть
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Установка гео-зон</div>
                    <div class="modalCard__specifications-descr">
                        Есть
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Будильник</div>
                    <div class="modalCard__specifications-descr">
                        Есть
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Отправка фото с часов родителям</div>
                    <div class="modalCard__specifications-descr">
                        Есть
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Удалённый мониторинг по фото</div>
                    <div class="modalCard__specifications-descr">
                        Есть
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Google-переводчик</div>
                    <div class="modalCard__specifications-descr">
                        Есть
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Секундомер</div>
                    <div class="modalCard__specifications-descr">
                        Есть
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Арифметическая игра</div>
                    <div class="modalCard__specifications-descr">
                        Есть
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Установка расписания</div>
                    <div class="modalCard__specifications-descr">
                        Есть
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Прочие функции</div>
                    <div class="modalCard__specifications-descr">
                        Датчик снятия с руки, журнал истории звонков, технология Face ID
                    </div>
                </div>
                <div class="modalCard__specifications-title border-radius">Дисплей</div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Диагональ</div>
                    <div class="modalCard__specifications-descr">
                        1.4
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Экран</div>
                    <div class="modalCard__specifications-descr">
                        цветной
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Тип управления</div>
                    <div class="modalCard__specifications-descr">
                        сенсорный
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Матрица</div>
                    <div class="modalCard__specifications-descr">
                        IPS
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Разрешение</div>
                    <div class="modalCard__specifications-descr">
                        240x240
                    </div>
                </div>
                <div class="modalCard__specifications-title border-radius">Размеры</div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Корпус</div>
                    <div class="modalCard__specifications-descr">
                        46 X 42 X 15 мм
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Обхват запястья</div>
                    <div class="modalCard__specifications-descr">
                        от 130мм до 205мм
                    </div>
                </div>
                <div class="modalCard__specifications-title border-radius">Параметры</div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Встроенная память</div>
                    <div class="modalCard__specifications-descr">
                        4092 MB
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Оперативная память</div>
                    <div class="modalCard__specifications-descr">
                        2048 MB
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Камера</div>
                    <div class="modalCard__specifications-descr">
                        2 Мп
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Телефонная книга</div>
                    <div class="modalCard__specifications-descr">
                        на 15 номеров
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Поддержка сетей</div>
                    <div class="modalCard__specifications-descr">
                        2G, 3G, 4G LTE
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Беспроводная связь</div>
                    <div class="modalCard__specifications-descr">
                        Wi-Fi, Bluetooth
                    </div>
                </div>
                <div class="modalCard__specifications-title border-radius">Прочее</div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Комплектация</div>
                    <div class="modalCard__specifications-descr">
                        Детские умные часы, коробка, зарядное устройство, инструкция на русском, руководство пользователя SmartPresent
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Вес</div>
                    <div class="modalCard__specifications-descr">
                        54г
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Дизайн</div>
                    <div class="modalCard__specifications-descr">
                        Универсальный
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Процессор</div>
                    <div class="modalCard__specifications-descr">
                        9820E
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Операционная система</div>
                    <div class="modalCard__specifications-descr">
                        Android 6.0
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Стандарты связи</div>
                    <div class="modalCard__specifications-descr">
                        GSM 850/900/1800/1900 МГц
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Материал ремешка</div>
                    <div class="modalCard__specifications-descr">
                        Гипоаллергенный силикон
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Материал корпуса</div>
                    <div class="modalCard__specifications-descr">
                        Высококачественный антиаллергенный пластик
                    </div>
                </div>
            </div>
        `;
        wrapper.append(itemBlock2);

        const itemBlock3 = document.createElement('div');
        itemBlock3.classList.add('modalCard__item-block');
        itemBlock3.innerHTML = `
            <div class="modalCard__item-reviews">
                <div class="modalCard__item-reviews__img">
                    <img src="icons/reviews/sergey.png" alt="sergey">
                </div>
                <div class="modalCard__item-reviews__title">
                    Сергей В.
                </div>
                <div class="modalCard__item-reviews__text">
                    Достоинства:
                    <span>Lorem ipsum dolor sit amet consectetur</span>
                </div>
                <div class="modalCard__item-reviews__text">
                    Недостатки:
                    <span>Lorem ipsum dolor</span>
                </div>
                <div class="modalCard__item-reviews__text">
                    Опыт пользования:
                    <span>Lorem ipsum dolor</span>
                </div>
                <div class="reviews__descr modalCard__descr-adaptiv">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorem aliquid ex 
                </div>
                <div class="reviews__bottom">
                    <div class="reviews__bottom-time modalCard__reviews-time">
                        21.12.2021
                    </div>
                    <div class="reviews__bottom-location">
                        <div class="reviews__bottom-img">
                            <svg fill="#cb11ab" id="Layer_1" style="enable-background:new 0 0 91 91;" version="1.1" viewBox="0 0 91 91" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M66.9,41.8c0-11.3-9.1-20.4-20.4-20.4c-11.3,0-20.4,9.1-20.4,20.4c0,11.3,20.4,32.4,20.4,32.4S66.9,53.1,66.9,41.8z    M37,41.4c0-5.2,4.3-9.5,9.5-9.5c5.2,0,9.5,4.2,9.5,9.5c0,5.2-4.2,9.5-9.5,9.5C41.3,50.9,37,46.6,37,41.4z"/></g></svg>
                        </div>
                        <div class="reviews__bottom-city modalCard__reviews-city">
                            Москва
                        </div>
                    </div>
                </div>
            </div>
        `;
        wrapper.append(itemBlock3);

        const itemBlock4 = document.createElement('div');
        itemBlock4.classList.add('modalCard__item-block');
        itemBlock4.innerHTML = `
            <div class="modalCard__delivery">
                <div class="modalCard__delivery-title">
                    Способы доставки и оплаты
                </div>
                <div class="modalCard__delivery-subtitle">
                    Мы сотрудничаем со многими курьерскими службами для наиболее оперативного и удобного способа доставки.
                </div>
                <div class="modalCard__delivery-wrapper">
                    <div class="modalCard__delivery-block">
                        <div class="modalCard__delivery-top">
                            <div class="modalCard__delivery-location">
                                <svg class="modalCard__delivery-svg" fill="#cb11ab" id="Layer_1" style="enable-background:new 0 0 91 91;" version="1.1" viewBox="0 0 91 91" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M66.9,41.8c0-11.3-9.1-20.4-20.4-20.4c-11.3,0-20.4,9.1-20.4,20.4c0,11.3,20.4,32.4,20.4,32.4S66.9,53.1,66.9,41.8z    M37,41.4c0-5.2,4.3-9.5,9.5-9.5c5.2,0,9.5,4.2,9.5,9.5c0,5.2-4.2,9.5-9.5,9.5C41.3,50.9,37,46.6,37,41.4z"></path></g></svg>
                            </div>
                            <div class="modalCard__delivery-text">
                                Доставка по г. Владимир и области
                            </div>
                        </div>
                        <div class="modalCard__delivery-flex">
                            <div class="modalCard__delivery-name">
                                По Владимиру
                            </div>
                            <div class="modalCard__delivery-price">
                                290-350 ₽ - 1 день
                            </div>
                        </div>
                        <div class="modalCard__delivery-flex">
                            <div class="modalCard__delivery-name">
                                По Владимирской области
                            </div>
                            <div class="modalCard__delivery-price">
                                от 450 ₽ - 1 день
                            </div>
                        </div>
                    </div>

                    <div class="modalCard__delivery-block">
                        <div class="modalCard__delivery-top">
                            <div class="modalCard__delivery-location">
                                <svg class="modalCard__delivery-svg" fill="#cb11ab" id="Layer_1" style="enable-background:new 0 0 91 91;" version="1.1" viewBox="0 0 91 91" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M66.9,41.8c0-11.3-9.1-20.4-20.4-20.4c-11.3,0-20.4,9.1-20.4,20.4c0,11.3,20.4,32.4,20.4,32.4S66.9,53.1,66.9,41.8z    M37,41.4c0-5.2,4.3-9.5,9.5-9.5c5.2,0,9.5,4.2,9.5,9.5c0,5.2-4.2,9.5-9.5,9.5C41.3,50.9,37,46.6,37,41.4z"></path></g></svg>
                            </div>
                            <div class="modalCard__delivery-text">
                                Доставка в другие города России
                            </div>
                        </div>
                        <div class="modalCard__delivery-flex">
                            <div class="modalCard__delivery-name">
                                Пункты выдачи (ТК СДЭК)
                            </div>
                            <div class="modalCard__delivery-price">
                                290 ₽ - 2-5 дней
                            </div>
                        </div>
                        <div class="modalCard__delivery-flex">
                            <div class="modalCard__delivery-name">
                                Курьером (ТК СДЭК)
                            </div>
                            <div class="modalCard__delivery-price">
                                450 ₽ - 2-5 дней
                            </div>
                        </div>
                        <div class="modalCard__delivery-flex">
                            <div class="modalCard__delivery-name">
                                Почта России (удаленные регионы)
                            </div>
                            <div class="modalCard__delivery-price">
                                от 290 ₽
                            </div>
                        </div>
                    </div>

                    <div class="modalCard__delivery-block">
                        <div class="modalCard__delivery-top">
                            <img src="icons/bag.svg" alt="bag" class="modalCard__delivery-svg margin-right">
                            <div class="modalCard__delivery-text">
                                Самовывоз
                            </div>
                        </div>
                        <div class="modalCard__delivery-descr">
                            Вы так же можете приехать к нам в офис и выбрать товары на месте, предварительно оформив заказ на нашем сайте. Наш адрес:
                        </div>
                        <div class="modalCard__delivery-address">
                            <div class="modalCard__delivery-location">
                                <svg class="modalCard__delivery-svg" fill="#cb11ab" id="Layer_1" style="enable-background:new 0 0 91 91;" version="1.1" viewBox="0 0 91 91" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M66.9,41.8c0-11.3-9.1-20.4-20.4-20.4c-11.3,0-20.4,9.1-20.4,20.4c0,11.3,20.4,32.4,20.4,32.4S66.9,53.1,66.9,41.8z    M37,41.4c0-5.2,4.3-9.5,9.5-9.5c5.2,0,9.5,4.2,9.5,9.5c0,5.2-4.2,9.5-9.5,9.5C41.3,50.9,37,46.6,37,41.4z"></path></g></svg>
                            </div>
                            <div class="modalCard__delivery-city">г. Владимир:
                                <span>Большая Московская ул., 19А, 2 этаж</span>
                            </div>
                        </div>
                        <div class="modalCard__delivery-descr">
                            При себе необходимо иметь электорнный чек, если вы уже оплатили через наш сайт
                        </div>
                    </div>
                    <div class="modalCard__delivery-block">
                        <div class="modalCard__delivery-top">
                            <img src="icons/advantages/wallet.svg" alt="wallet" class="modalCard__delivery-svg margin-right">
                            <div class="modalCard__delivery-text">
                                Способы оплаты
                            </div>
                        </div>
                        <div class="modalCard__delivery-payment">
                            <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__delivery-svg">
                            <div class="modalCard__delivery-descr">Наличными при получении (курьеру или в пункте выдачи)</div>
                        </div>
                        <div class="modalCard__delivery-payment">
                            <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__delivery-svg">
                            <div class="modalCard__delivery-descr">Картой при получении (курьеру или в пункте выдачи</div>
                        </div>
                        <div class="modalCard__delivery-payment">
                            <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__delivery-svg">
                            <div class="modalCard__delivery-descr">Онлайн по карте после оформления заказа</div>
                        </div>
                        <div class="modalCard__delivery-payment">
                            <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__delivery-svg">
                            <div class="modalCard__delivery-descr">На расчетный счет компании</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        wrapper.append(itemBlock4);

        const itemBlock5 = document.createElement('div');
        itemBlock5.classList.add('modalCard__item-block');
        wrapper.append(itemBlock5);

        const questions = document.createElement('div');
        questions.classList.add('modalCard__questions');
        questions.innerHTML = `
            <div class="modalCard__questions-title">
                Частые вопросы
            </div>
            <div class="modalCard__questions-subtitle">
                Если Вы не нашли ответа на вопрос, то для Вас ежедневно работает тех. поддержка - мы будем рады помочь:
            </div>
            <div class="modalCard__questions-phone">
                <img src="icons/consultation/phone.svg" alt="phone" class="modalCard__questions-img">
                <a href="#" class="modalCard__questions-link">8-800-77-07-999</a>
            </div>
        `;
        itemBlock5.append(questions);

        const questionsWrapper = document.createElement('div');
        questionsWrapper.classList.add('modalCard__questions-wrapper');
        questions.append(questionsWrapper);
        
        const questionsBlock1 = document.createElement('div');
        questionsBlock1.classList.add('modalCard__questions-block');

        const questionsFlex1 = document.createElement('div');
        questionsFlex1.classList.add('modalCard__questions-flex');
        questionsFlex1.innerHTML = `
            <div class="modalCard__questions-text">Какое приложение использовать?</div>
        `;

        const questionsCross1 = document.createElement('div');
        questionsCross1.classList.add('modalCard__questions-cross');
        questionsCross1.textContent = `×`;
        questionsBlock1.append(questionsFlex1);
        questionsFlex1.append(questionsCross1);

        const questionsDescr1 = document.createElement('div');
        questionsDescr1.classList.add('modalCard__questions-descr');
        questionsDescr1.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa magni laborum earum porro perferendis repudiandae, aliquam sint dolor. Beatae numquam ipsam veniam obcaecati, voluptate sit. Error similique aliquid odio illo.';
        questionsBlock1.append(questionsDescr1);

        questionsWrapper.append(questionsBlock1);

        const questionsBlock2 = document.createElement('div');
        questionsBlock2.classList.add('modalCard__questions-block');

        const questionsFlex2 = document.createElement('div');
        questionsFlex2.classList.add('modalCard__questions-flex');
        questionsFlex2.innerHTML = `
            <div class="modalCard__questions-text">Сколько человек могут пользоваться приложением?</div>
        `;

        const questionsCross2 = document.createElement('div');
        questionsCross2.classList.add('modalCard__questions-cross');
        questionsCross2.textContent = `×`;
        questionsBlock2.append(questionsFlex2);
        questionsFlex2.append(questionsCross2);

        const questionsDescr2 = document.createElement('div');
        questionsDescr2.classList.add('modalCard__questions-descr');
        questionsDescr2.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa magni laborum earum porro perferendis repudiandae, aliquam sint dolor. Beatae numquam ipsam veniam obcaecati, voluptate sit. Error similique aliquid odio illo.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa magni laborum earum porro perferendis repudiandae, aliquam sint dolor. Beatae numquam ipsam veniam obcaecati, voluptate sit. Error similique aliquid odio illo.';
        questionsBlock2.append(questionsDescr2);

        questionsWrapper.append(questionsBlock2);

        const questionsBlock3 = document.createElement('div');
        questionsBlock3.classList.add('modalCard__questions-block');

        const questionsFlex3 = document.createElement('div');
        questionsFlex3.classList.add('modalCard__questions-flex');
        questionsFlex3.innerHTML = `
            <div class="modalCard__questions-text">Как выбрать оператора и тариф для смарт-часов?</div>
        `;

        const questionsCross3 = document.createElement('div');
        questionsCross3.classList.add('modalCard__questions-cross');
        questionsCross3.textContent = `×`;
        questionsBlock3.append(questionsFlex3);
        questionsFlex3.append(questionsCross3);

        const questionsDescr3 = document.createElement('div');
        questionsDescr3.classList.add('modalCard__questions-descr');
        questionsDescr3.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa magni laborum earum porro perferendis repudiandae, aliquam sint dolor. Beatae numquam ipsam veniam obcaecati, voluptate sit. Error similique aliquid odio illo.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa magni laborum earum porro perferendis repudiandae, aliquam sint dolor. Beatae numquam ipsam veniam obcaecati, voluptate sit. Error similique aliquid odio illo.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa magni laborum earum porro perferendi';
        questionsBlock3.append(questionsDescr3);

        questionsWrapper.append(questionsBlock3);

        const questionsBlock4 = document.createElement('div');
        questionsBlock4.classList.add('modalCard__questions-block');

        const questionsFlex4 = document.createElement('div');
        questionsFlex4.classList.add('modalCard__questions-flex');
        questionsFlex4.innerHTML = `
            <div class="modalCard__questions-text">Как установить сим-карту?</div>
        `;

        const questionsCross4 = document.createElement('div');
        questionsCross4.classList.add('modalCard__questions-cross');
        questionsCross4.textContent = `×`;
        questionsBlock4.append(questionsFlex4);
        questionsFlex4.append(questionsCross4);

        const questionsDescr4 = document.createElement('div');
        questionsDescr4.classList.add('modalCard__questions-descr');
        questionsDescr4.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa magni laborum earum porro perferendis repudiandae, aliquam sint dolor. Beatae numquam ipsam veniam obcaecati, voluptate sit.';
        questionsBlock4.append(questionsDescr4);

        questionsWrapper.append(questionsBlock4);

        const questionsBlock5 = document.createElement('div');
        questionsBlock5.classList.add('modalCard__questions-block');

        const questionsFlex5 = document.createElement('div');
        questionsFlex5.classList.add('modalCard__questions-flex');
        questionsFlex5.innerHTML = `
            <div class="modalCard__questions-text">Как точно определяется местоположение?</div>
        `;

        const questionsCross5 = document.createElement('div');
        questionsCross5.classList.add('modalCard__questions-cross');
        questionsCross5.textContent = `×`;
        questionsBlock5.append(questionsFlex5);
        questionsFlex5.append(questionsCross5);

        const questionsDescr5 = document.createElement('div');
        questionsDescr5.classList.add('modalCard__questions-descr');
        questionsDescr5.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa magni laborum earum porro perferendis repudiandae, aliquam sint dolor. Beatae numquam ipsam veniam obcaecati, voluptate sit.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa magni laborum earum porro perferendis repudiandae, aliquam sint dolor. Beatae numquam ipsam veniam obcaecati, voluptate sit.';
        questionsBlock5.append(questionsDescr5);

        questionsWrapper.append(questionsBlock5);

        const questionsBlock6 = document.createElement('div');
        questionsBlock6.classList.add('modalCard__questions-block');

        const questionsFlex6 = document.createElement('div');
        questionsFlex6.classList.add('modalCard__questions-flex');
        questionsFlex6.innerHTML = `
            <div class="modalCard__questions-text">Сколько держит аккумулятор?</div>
        `;

        const questionsCross6 = document.createElement('div');
        questionsCross6.classList.add('modalCard__questions-cross');
        questionsCross6.textContent = `×`;
        questionsBlock6.append(questionsFlex6);
        questionsFlex6.append(questionsCross6);

        const questionsDescr6 = document.createElement('div');
        questionsDescr6.classList.add('modalCard__questions-descr');
        questionsDescr6.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa magni laborum earum porro perferendis repudiandae, aliquam sint dolor. Beatae numquam ipsam veniam obcaecati, voluptate sit.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa magni laborum earum porro perferendis repudiandae, aliquam sint dolor. Beatae numquam ipsam veniam obcaecati, voluptate sit.';
        questionsBlock6.append(questionsDescr6);

        questionsWrapper.append(questionsBlock6);

        /////////////////////////// slider ////////////////////////////
        const imgArr = []
        imgArr.push(img1, img2, img3);

        const tabsImgArr = [];
        tabsImgArr.push(tabImg1, tabImg2, tabImg3);

        const tabsArr = [];
        tabsArr.push(tab1, tab2, tab3);

        const tabsTextColorArray = [];
        tabsTextColorArray.push(tabsTextColor1, tabsTextColor2, tabsTextColor3);

        function hideTabSlides() {  // Скрыть всё
            imgArr.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('show', 'fade');
            });
            tabsArr.forEach(item => {
                item.classList.remove('modalCard__tab-active');
            });
            tabsImgArr.forEach(item => {
                item.classList.remove('modalCard__tab-img__active');
            });
            tabsTextColorArray.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('show');
            });    
        }
        
        function showTabSlides(i) {  // Показать слайд (Первый)
            imgArr[i].classList.add('show', 'fade');
            imgArr[i].classList.remove('hide');
            tabsArr[i].classList.add('modalCard__tab-active');
            tabsImgArr[i].classList.add('modalCard__tab-img__active');
            tabsTextColorArray[i].classList.add('show');
            tabsTextColorArray[i].classList.remove('hide');
        }
        hideTabSlides();
        showTabSlides(0);

        tabsWrapper.addEventListener('click', (event) => {
            if(event.target && event.target.classList.contains('modalCard__tab')) {
                tabsArr.forEach((item, i) => {
                    if(event.target === item) {
                        hideTabSlides();
                        showTabSlides(i); 
                    }
                });
            }
        });

        tabsWrapper.addEventListener('click', (event) => {
            if(event.target && event.target.classList.contains('modalCard__tab-img')) {
                tabsImgArr.forEach((item, i) => {
                    if(event.target === item) {
                        hideTabSlides();
                        showTabSlides(i); 
                    }
                })
            }
        });

        /////////////////////////// ТАБЫ ////////////////////////////
        const itemsArr = [];
        itemsArr.push(item1, item2, item3, item4, item5);

        const contentsArr = [];
        contentsArr.push(itemBlock1, itemBlock2, itemBlock3, itemBlock4, itemBlock5);

        function hideTabContent() { // скрыть все контенты
            contentsArr.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('show', 'fade');
            });
            itemsArr.forEach(item => {
                item.classList.remove('modalCard__item-active');
            });
        }

        function showTabContent(i) {  // открыть первый контент
            contentsArr[i].classList.add('show', 'fade');
            contentsArr[i].classList.remove('hide');
            itemsArr[i].classList.add('modalCard__item-active');
        }
    
        hideTabContent();
        showTabContent(0);

        items.addEventListener('click', (event) => {
            if(event.target && event.target.classList.contains('modalCard__item')) {
                itemsArr.forEach((item, i) => {
                    if(event.target == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });

        /////////////////////////// ТАБЫ (Частые вопросы) ////////////////////////////

        const crossArr = [];
        crossArr.push(questionsCross1, questionsCross2, questionsCross3,questionsCross4,questionsCross5, questionsCross6);

        const descrArr = [];
        descrArr.push(questionsDescr1, questionsDescr2, questionsDescr3, questionsDescr4, questionsDescr5, questionsDescr6);

        const questionsBlockArr = [];
        questionsBlockArr.push(questionsBlock1, questionsBlock2, questionsBlock3, questionsBlock4, questionsBlock5, questionsBlock6);

        questionsBlockArr.forEach(item => {
            item.classList.add('staticHeight');
        });

        function openDescr(i) {
            crossArr[i].classList.add('modalCard__questions-cross__active');
            descrArr[i].classList.add('modalCard__questions-descr__active');
            questionsBlockArr[i].classList.remove('staticHeight');
        }

        function closeDescr(i) {
            crossArr[i].classList.remove('modalCard__questions-cross__active');
            descrArr[i].classList.remove('modalCard__questions-descr__active');
            questionsBlockArr[i].classList.add('staticHeight');
        }

        questionsWrapper.addEventListener('click', (event) => {
            if(event.target && event.target.classList.contains('modalCard__questions-cross')) {
                crossArr.forEach((item, i) => {
                    if(event.target === item) {
                        if(!crossArr[i].classList.contains('modalCard__questions-cross__active') && !descrArr[i].classList.contains('modalCard__questions-descr__active')) {
                            openDescr(i);
                        } else {
                            closeDescr(i);
                        }
                    }                  
                });
            }
        });

        /////////////////////////// modal ////////////////////////////    

        const modalCardArr = document.querySelectorAll('.modalCard');

        function hideModalCard() {
            modalCardArr.forEach(item => {
                item.classList.add('hide');
            });
            modalCardArr.forEach(item => {
                item.classList.remove('show', 'fade');
            });
            document.body.style.overflow = '';
            document.querySelector('.header-top').style.display = '';
            document.querySelector('.header-bottom__right').style.display = '';
        }
        hideModalCard();

        function showModalCard(i) {
            modalCardArr[i].classList.remove('hide');
            modalCardArr[i].classList.add('show', 'fade');
            document.body.style.overflow = 'hidden';
            document.querySelector('.header-top').style.display = 'none';
            document.querySelector('.header-bottom__right').style.display = 'none';
        }

        document.querySelector('.hits__content-elderly').addEventListener('click', (event) => {
            if(event.target && event.target.classList.contains('hits__item-bottom__btn')) {
                document.querySelectorAll('.hits__item-bottom__btn').forEach((item, i) => {
                    if(event.target === item) {
                        hideModalCard();
                        showModalCard(i);
                    }
                });
            }
        });

        close.addEventListener('click', hideModalCard);

        modalCard.addEventListener('click', (event) => {
            if(event.target === modalCard) {
                hideModalCard();
            }
        });
    
        document.addEventListener('keydown', (event) => {
            if(event.code === 'Escape' && modalCard.classList.contains('show')) {
                hideModalCard();
            }
        }); 
    }

    modalCardRender(
        'img/cards/elderly/wonlex/GW700s/black.jpg',
        '',
        '',
        'Cмарт-часы GW700s',
        'Черный',
        '', 
        '',
        'Wonlex',
        'Для пожилых',
        1,
        2,
        '7490',
        '5490',
        'Есть',
        'opacity'
    );

    modalCardRender(
        'img/cards/elderly/wonlex/GW700/golden.jpg',
        '',
        '',
        'Cмарт-часы GW700',
        'Золотистый',
        '', 
        '',
        'Wonlex',
        'Для пожилых',
        0,
        0,
        '5990',
        '4490',
        'Есть',
        'opacity'
    );
}



/***/ }),

/***/ "./src/js/modules/modalCardGrown.js":
/*!******************************************!*\
  !*** ./src/js/modules/modalCardGrown.js ***!
  \******************************************/
/*! exports provided: modalCardGrown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalCardGrown", function() { return modalCardGrown; });
function modalCardGrown() {
    function modalCardRender(image1, image2, image3, titleModal, color1, color2, color3, firm, forWhom, numberStars, numberReviews, priceOld, priceNew, availability, opacity) {
        const modalCard = document.createElement('div');
        modalCard.classList.add('modalCard');
        document.querySelector('.hits__content-grown').append(modalCard);

        const container = document.createElement('div');
        container.classList.add('container');
        container.classList.add('container__relative');
        modalCard.append(container);

        const close = document.createElement('div');
        close.classList.add('modalCard__close');
        close.textContent = '×';
        container.append(close);

        const wrapper = document.createElement('div');
        wrapper.classList.add('modalCard__wrapper');
        container.append(wrapper);

        const flex = document.createElement('div');
        flex.classList.add('modalCard__flex');
        wrapper.append(flex);

        const slider = document.createElement('div');
        slider.classList.add('modalCard__left');
        flex.append(slider);

        const img1 = document.createElement('img');
        img1.classList.add('modalCard__slide');
        slider.append(img1);

        const img2 = document.createElement('img');
        img2.classList.add('modalCard__slide');
        slider.append(img2);

        const img3 = document.createElement('img');
        img3.classList.add('modalCard__slide');
        slider.append(img3);

        const sliderImg = [image1, image2, image3];

        img1.src = sliderImg[0];
        img2.src = sliderImg[1];
        img3.src = sliderImg[2];

        img1.alt = 'icon';
        img2.alt = 'icon';
        img3.alt = 'icon';

        const right = document.createElement('div');
        right.classList.add('modalCard__right');
        flex.append(right);

        const title = document.createElement('div');
        title.classList.add('modalCard__title');
        title.textContent = `${titleModal}`;
        right.append(title);

        const subtitle = document.createElement('div');
        subtitle.classList.add('modalCard__subtitle');
        right.append(subtitle);

        const tabsTextColorArr = [color1, color2, color3];
        
        const tabsTextColor1 = document.createElement('div');
        tabsTextColor1.classList.add('modalCard__subtitle-tab');
        tabsTextColor1.textContent = tabsTextColorArr[0];
        subtitle.append(tabsTextColor1);

        const tabsTextColor2 = document.createElement('div');
        tabsTextColor2.classList.add('modalCard__subtitle-tab');
        tabsTextColor2.textContent = tabsTextColorArr[1];
        subtitle.append(tabsTextColor2);

        const tabsTextColor3 = document.createElement('div');
        tabsTextColor3.classList.add('modalCard__subtitle-tab');
        tabsTextColor3.textContent = tabsTextColorArr[2];
        subtitle.append(tabsTextColor3);

        const textCompanyCatalog = document.createElement('span');
        textCompanyCatalog.textContent = `/ ${firm} / ${forWhom}`;
        subtitle.append(textCompanyCatalog);

        const modalRating = document.createElement('div');
        modalRating.classList.add('modalCard__right-wrapper');
        right.append(modalRating);

        const ratingBlock = document.createElement('div');
        ratingBlock.classList.add('hits__item-rating');
        modalRating.append(ratingBlock);

        const ratingList = document.createElement('ul');
        ratingList.classList.add('hits__item-rating__list');
        ratingBlock.append(ratingList);

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
        modalRating.append(reviewsWrapper);

        const textColor = document.createElement('div');
        textColor.classList.add('modalCard__textColor');
        textColor.textContent = 'Цвет:';
        right.append(textColor);

        const tabsWrapper = document.createElement('div');
        tabsWrapper.classList.add('modalCard__tabs');
        right.append(tabsWrapper);

        const tab1 = document.createElement('div');
        tab1.classList.add('modalCard__tab');
        tabsWrapper.append(tab1);

        const tabImg1 = document.createElement('img');
        tabImg1.classList.add('modalCard__tab-img');
        tab1.append(tabImg1);

        const tab2 = document.createElement('div');
        tab2.classList.add('modalCard__tab');
        tabsWrapper.append(tab2);

        const tabImg2 = document.createElement('img');
        tabImg2.classList.add('modalCard__tab-img');
        tab2.append(tabImg2);

        const tab3 = document.createElement('div');
        tab3.classList.add('modalCard__tab');
        tab3.classList.add(opacity);
        tabsWrapper.append(tab3);

        const tabImg3 = document.createElement('img');
        tabImg3.classList.add('modalCard__tab-img');
        tab3.append(tabImg3);

        const tabsImg = [image1, image2, image3];

        tabImg1.src = tabsImg[0];
        tabImg2.src = tabsImg[1];
        tabImg3.src = tabsImg[2];

        tabImg1.alt = 'icon';
        tabImg2.alt = 'icon';
        tabImg3.alt = 'icon';

        const price = document.createElement('div');
        price.classList.add('modalCard__price');
        price.innerHTML = `
            <div class="modalCard__price-old">${priceOld}₽</div>
            <div class="modalCard__price-new">${priceNew}₽</div>
        `;
        right.append(price);

        const warehouse = document.createElement('div');
        warehouse.classList.add('modalCard__warehouse');
        warehouse.textContent = `${availability} в наличии`;
        right.append(warehouse);

        const connection = document.createElement('div');
        connection.classList.add('modalCard__connection');
        connection.innerHTML = `
            <div class="modalCard__connection-wrapper">
                <div class="modalCard__connection-title">Связаться по телефону:</div>
                <img src="icons/consultation/phone.svg" alt="phone" class="modalCard__connection-img">
                <a href="#" class="modalCard__connection-link">8-800-77-07-999</a>
            </div>
            <div class="modalCard__connection-wrapper">
                <div class="modalCard__connection-title">Мессенждеры:</div>                           
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="modalCard__connection-img"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" fill="#cb11ab"></path></svg>
                <a href="#" class="modalCard__connection-link">WhatsApp</a>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-telegram" viewBox="0 0 24 24" class="modalCard__connection-img"><path d="M9.78,18.65L10.06,14.42L17.74,7.5C18.08,7.19 17.67,7.04 17.22,7.31L7.74,13.3L3.64,12C2.76,11.75 2.75,11.14 3.84,10.7L19.81,4.54C20.54,4.21 21.24,4.72 20.96,5.84L18.24,18.65C18.05,19.56 17.5,19.78 16.74,19.36L12.6,16.3L10.61,18.23C10.38,18.46 10.19,18.65 9.78,18.65Z" fill="#cb11ab"></path></svg>
                <a href="#" class="modalCard__connection-link">Telegramm</a>
            </div>
        `;
        right.append(connection);

        const advantages = document.createElement('div');
        advantages.classList.add('modalCard__advantages');
        advantages.innerHTML = `
            <div class="modalCard__advantages-flex">
                <img src="icons/advantages/guarantee.svg" alt="" class="modalCard__advantages-img">
                <div class="modalCard__advantages-descr">Полная гарантия 1 год</div>
            </div>
            <div class="modalCard__advantages-flex">
                <img src="icons/advantages/wallet.svg" alt="" class="modalCard__advantages-img">
                <div class="modalCard__advantages-descr">Оплата при получении после проверки</div>
            </div>
            <div class="modalCard__advantages-flex">
                <img src="icons/advantages/service.svg" alt="" class="modalCard__advantages-img">
                <div class="modalCard__advantages-descr">Техподдержка 7 дней в неделю</div>
            </div>
            <div class="modalCard__advantages-flex">
                <img src="icons/advantages/return.svg" alt="" class="modalCard__advantages-img">
                <div class="modalCard__advantages-descr">Возврат/обмен 14 дней</div>
            </div>
            <div class="modalCard__advantages-flex">
                <img src="icons/advantages/certificate.svg" alt="" class="modalCard__advantages-img">
                <div class="modalCard__advantages-descr">Сертифицированный товар</div>
            </div>
        `;
        right.append(advantages);

        const titleCenter = document.createElement('div');
        titleCenter.classList.add('modalCard__title', 'modalCard__title-center');
        titleCenter.textContent = `О товаре`;
        wrapper.append(titleCenter);

        const items = document.createElement('div');
        items.classList.add('modalCard__items');
        wrapper.append(items);

        const item1 = document.createElement('div');
        item1.classList.add('modalCard__item');
        item1.textContent = 'Описание';
        items.append(item1);

        const item2 = document.createElement('div');
        item2.classList.add('modalCard__item');
        item2.textContent = 'характеристики';
        items.append(item2);

        const item3 = document.createElement('div');
        item3.classList.add('modalCard__item');
        item3.textContent = `отзывы (${numberReviews})`;
        items.append(item3);

        const item4 = document.createElement('div');
        item4.classList.add('modalCard__item');
        item4.textContent = 'доставка и оплата';
        items.append(item4);

        const item5 = document.createElement('div');
        item5.classList.add('modalCard__item');
        item5.textContent = 'Частые вопросы';
        items.append(item5);

        const stripe = document.createElement('div');
        stripe.classList.add('modalCard__stripe');
        wrapper.append(stripe);

        const itemBlock1 = document.createElement('div');
        itemBlock1.classList.add('modalCard__item-block');
        itemBlock1.innerHTML = `
            <div class="modalCard__item-title">Особенности модели:</div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Поддержка видеозвонков (входящие и исходящие) и 4G LTE
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Датчик снятия с руки
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Фотокамера (для съёмки и удалённого мониторинга с приложения);
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Водонепроницаемость стандарта IP67* (можно ненадолго погружать на глубину до 1 м)
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Wi-Fi (помогает определять более точное местоположение в помещении)
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    GOOGLE-переводчик
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Увеличенный объем батареи (680 mA*h, что позволяет пользоваться часами несколько суток без зарядки).
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Секундомер
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Технология Face ID
                </div>
            </div>
            <div class="modalCard__stripe"></div>
            <div class="modalCard__item-title modalCard__item-title__mt">Основные функции:</div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Входящие и исходящие звонки
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Определение местоположения ребёнка на смартфоне родителей (по GPS, Wi-Fi и LBS)
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Скрытый звонок (функция прослушки в целях безопасности)
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Кнопка SOS (экстренный вызов на 1-3 номера)
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    История перемещений
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Телефонная книга на 15 номеров
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Прямой набор номера (с возможностью блокировки)
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Обмен голосовыми сообщениями
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Установка гео-зон (школа/дом) с оповещениями на смартфоне родителей
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Подсчёт активности, арифметическая игра, установка расписания
                </div>
            </div>
            <div class="modalCard__item-flex">
                <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__item-img">
                <div class="modalCard__item-descr">
                    Будильник и другие функции
                </div>
            </div>
        `;
        wrapper.append(itemBlock1);

        const itemBlock2 = document.createElement('div');
        itemBlock2.classList.add('modalCard__item-block');
        itemBlock2.innerHTML = `
            <div class="modalCard__specifications">
                <div class="modalCard__specifications-title">Основные</div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Производитель</div>
                    <div class="modalCard__specifications-descr">
                        Wonlex - крупнейший производитель оригинальных детских смарт часов с GPS, качество которых кардинально превосходит более дешёвые аналоги.
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Название модели</div>
                    <div class="modalCard__specifications-descr">
                        KT17
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Для кого</div>
                    <div class="modalCard__specifications-descr">
                        Смарт часы для детей
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Возраст</div>
                    <div class="modalCard__specifications-descr">
                        От 4-х лет
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Назначение</div>
                    <div class="modalCard__specifications-descr">
                        Для связи, контроля и безопасности
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Описание</div>
                    <div class="modalCard__specifications-descr">
                        С помощью детских умных часов Вы всегда сможете оставаться на связи со своим ребёнком, также знать, где находится ваш ребёнок и что происходит рядом с ним.
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Приложение</div>
                    <div class="modalCard__specifications-descr">
                        SeTracker 2 (Бесплатное для iOS и Android. Рекомендованное производителем. Устанавливают родители себе на телефон для настройки и контроля за ребёнком)
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Срок гарантии</div>
                    <div class="modalCard__specifications-descr">
                        1 год
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Тип сим-карты</div>
                    <div class="modalCard__specifications-descr">
                        Нано-SIM (в комплект не входит)
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Батарея</div>
                    <div class="modalCard__specifications-descr">
                        Литиевая батарея 680mAh, до 150 часов в режиме ожидания
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Совместимость</div>
                    <div class="modalCard__specifications-descr">
                        Android, iOS
                    </div>
                </div>
                <div class="modalCard__specifications-title border-radius">Водонепроницаемость</div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Класс влагозащиты</div>
                    <div class="modalCard__specifications-descr">
                        IP67 (недолгое погружение в воду)
                    </div>
                </div>
                <div class="modalCard__specifications-title border-radius">Функции</div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Видеозвонки</div>
                    <div class="modalCard__specifications-descr">
                        Есть
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Виброзвонок</div>
                    <div class="modalCard__specifications-descr">
                        -
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Входящие и исходящие звонки</div>
                    <div class="modalCard__specifications-descr">
                        Есть
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Определение местоположения</div>
                    <div class="modalCard__specifications-descr">
                        GPS + AGPS + LBS + Wi-Fi
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Скрытый звонок</div>
                    <div class="modalCard__specifications-descr">
                        Есть
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">История перемещений</div>
                    <div class="modalCard__specifications-descr">
                        Есть
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Голосовые сообщения</div>
                    <div class="modalCard__specifications-descr">
                        Есть
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Кнопка SOS</div>
                    <div class="modalCard__specifications-descr">
                        Есть
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Установка гео-зон</div>
                    <div class="modalCard__specifications-descr">
                        Есть
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Будильник</div>
                    <div class="modalCard__specifications-descr">
                        Есть
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Отправка фото с часов родителям</div>
                    <div class="modalCard__specifications-descr">
                        Есть
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Удалённый мониторинг по фото</div>
                    <div class="modalCard__specifications-descr">
                        Есть
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Google-переводчик</div>
                    <div class="modalCard__specifications-descr">
                        Есть
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Секундомер</div>
                    <div class="modalCard__specifications-descr">
                        Есть
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Арифметическая игра</div>
                    <div class="modalCard__specifications-descr">
                        Есть
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Установка расписания</div>
                    <div class="modalCard__specifications-descr">
                        Есть
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Прочие функции</div>
                    <div class="modalCard__specifications-descr">
                        Датчик снятия с руки, журнал истории звонков, технология Face ID
                    </div>
                </div>
                <div class="modalCard__specifications-title border-radius">Дисплей</div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Диагональ</div>
                    <div class="modalCard__specifications-descr">
                        1.4
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Экран</div>
                    <div class="modalCard__specifications-descr">
                        цветной
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Тип управления</div>
                    <div class="modalCard__specifications-descr">
                        сенсорный
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Матрица</div>
                    <div class="modalCard__specifications-descr">
                        IPS
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Разрешение</div>
                    <div class="modalCard__specifications-descr">
                        240x240
                    </div>
                </div>
                <div class="modalCard__specifications-title border-radius">Размеры</div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Корпус</div>
                    <div class="modalCard__specifications-descr">
                        46 X 42 X 15 мм
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Обхват запястья</div>
                    <div class="modalCard__specifications-descr">
                        от 130мм до 205мм
                    </div>
                </div>
                <div class="modalCard__specifications-title border-radius">Параметры</div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Встроенная память</div>
                    <div class="modalCard__specifications-descr">
                        4092 MB
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Оперативная память</div>
                    <div class="modalCard__specifications-descr">
                        2048 MB
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Камера</div>
                    <div class="modalCard__specifications-descr">
                        2 Мп
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Телефонная книга</div>
                    <div class="modalCard__specifications-descr">
                        на 15 номеров
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Поддержка сетей</div>
                    <div class="modalCard__specifications-descr">
                        2G, 3G, 4G LTE
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Беспроводная связь</div>
                    <div class="modalCard__specifications-descr">
                        Wi-Fi, Bluetooth
                    </div>
                </div>
                <div class="modalCard__specifications-title border-radius">Прочее</div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Комплектация</div>
                    <div class="modalCard__specifications-descr">
                        Детские умные часы, коробка, зарядное устройство, инструкция на русском, руководство пользователя SmartPresent
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Вес</div>
                    <div class="modalCard__specifications-descr">
                        54г
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Дизайн</div>
                    <div class="modalCard__specifications-descr">
                        Универсальный
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Процессор</div>
                    <div class="modalCard__specifications-descr">
                        9820E
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Операционная система</div>
                    <div class="modalCard__specifications-descr">
                        Android 6.0
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Стандарты связи</div>
                    <div class="modalCard__specifications-descr">
                        GSM 850/900/1800/1900 МГц
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Материал ремешка</div>
                    <div class="modalCard__specifications-descr">
                        Гипоаллергенный силикон
                    </div>
                </div>
                <div class="modalCard__specifications-flex">
                    <div class="modalCard__specifications-subtitle">Материал корпуса</div>
                    <div class="modalCard__specifications-descr">
                        Высококачественный антиаллергенный пластик
                    </div>
                </div>
            </div>
        `;
        wrapper.append(itemBlock2);

        const itemBlock3 = document.createElement('div');
        itemBlock3.classList.add('modalCard__item-block');
        itemBlock3.innerHTML = `
            <div class="modalCard__item-reviews">
                <div class="modalCard__item-reviews__img">
                    <img src="icons/reviews/sergey.png" alt="sergey">
                </div>
                <div class="modalCard__item-reviews__title">
                    Сергей В.
                </div>
                <div class="modalCard__item-reviews__text">
                    Достоинства:
                    <span>Lorem ipsum dolor sit amet consectetur</span>
                </div>
                <div class="modalCard__item-reviews__text">
                    Недостатки:
                    <span>Lorem ipsum dolor</span>
                </div>
                <div class="modalCard__item-reviews__text">
                    Опыт пользования:
                    <span>Lorem ipsum dolor</span>
                </div>
                <div class="reviews__descr modalCard__descr-adaptiv">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorem aliquid ex 
                </div>
                <div class="reviews__bottom">
                    <div class="reviews__bottom-time modalCard__reviews-time">
                        21.12.2021
                    </div>
                    <div class="reviews__bottom-location">
                        <div class="reviews__bottom-img">
                            <svg fill="#cb11ab" id="Layer_1" style="enable-background:new 0 0 91 91;" version="1.1" viewBox="0 0 91 91" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M66.9,41.8c0-11.3-9.1-20.4-20.4-20.4c-11.3,0-20.4,9.1-20.4,20.4c0,11.3,20.4,32.4,20.4,32.4S66.9,53.1,66.9,41.8z    M37,41.4c0-5.2,4.3-9.5,9.5-9.5c5.2,0,9.5,4.2,9.5,9.5c0,5.2-4.2,9.5-9.5,9.5C41.3,50.9,37,46.6,37,41.4z"/></g></svg>
                        </div>
                        <div class="reviews__bottom-city modalCard__reviews-city">
                            Москва
                        </div>
                    </div>
                </div>
            </div>
        `;
        wrapper.append(itemBlock3);

        const itemBlock4 = document.createElement('div');
        itemBlock4.classList.add('modalCard__item-block');
        itemBlock4.innerHTML = `
            <div class="modalCard__delivery">
                <div class="modalCard__delivery-title">
                    Способы доставки и оплаты
                </div>
                <div class="modalCard__delivery-subtitle">
                    Мы сотрудничаем со многими курьерскими службами для наиболее оперативного и удобного способа доставки.
                </div>
                <div class="modalCard__delivery-wrapper">
                    <div class="modalCard__delivery-block">
                        <div class="modalCard__delivery-top">
                            <div class="modalCard__delivery-location">
                                <svg class="modalCard__delivery-svg" fill="#cb11ab" id="Layer_1" style="enable-background:new 0 0 91 91;" version="1.1" viewBox="0 0 91 91" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M66.9,41.8c0-11.3-9.1-20.4-20.4-20.4c-11.3,0-20.4,9.1-20.4,20.4c0,11.3,20.4,32.4,20.4,32.4S66.9,53.1,66.9,41.8z    M37,41.4c0-5.2,4.3-9.5,9.5-9.5c5.2,0,9.5,4.2,9.5,9.5c0,5.2-4.2,9.5-9.5,9.5C41.3,50.9,37,46.6,37,41.4z"></path></g></svg>
                            </div>
                            <div class="modalCard__delivery-text">
                                Доставка по г. Владимир и области
                            </div>
                        </div>
                        <div class="modalCard__delivery-flex">
                            <div class="modalCard__delivery-name">
                                По Владимиру
                            </div>
                            <div class="modalCard__delivery-price">
                                290-350 ₽ - 1 день
                            </div>
                        </div>
                        <div class="modalCard__delivery-flex">
                            <div class="modalCard__delivery-name">
                                По Владимирской области
                            </div>
                            <div class="modalCard__delivery-price">
                                от 450 ₽ - 1 день
                            </div>
                        </div>
                    </div>

                    <div class="modalCard__delivery-block">
                        <div class="modalCard__delivery-top">
                            <div class="modalCard__delivery-location">
                                <svg class="modalCard__delivery-svg" fill="#cb11ab" id="Layer_1" style="enable-background:new 0 0 91 91;" version="1.1" viewBox="0 0 91 91" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M66.9,41.8c0-11.3-9.1-20.4-20.4-20.4c-11.3,0-20.4,9.1-20.4,20.4c0,11.3,20.4,32.4,20.4,32.4S66.9,53.1,66.9,41.8z    M37,41.4c0-5.2,4.3-9.5,9.5-9.5c5.2,0,9.5,4.2,9.5,9.5c0,5.2-4.2,9.5-9.5,9.5C41.3,50.9,37,46.6,37,41.4z"></path></g></svg>
                            </div>
                            <div class="modalCard__delivery-text">
                                Доставка в другие города России
                            </div>
                        </div>
                        <div class="modalCard__delivery-flex">
                            <div class="modalCard__delivery-name">
                                Пункты выдачи (ТК СДЭК)
                            </div>
                            <div class="modalCard__delivery-price">
                                290 ₽ - 2-5 дней
                            </div>
                        </div>
                        <div class="modalCard__delivery-flex">
                            <div class="modalCard__delivery-name">
                                Курьером (ТК СДЭК)
                            </div>
                            <div class="modalCard__delivery-price">
                                450 ₽ - 2-5 дней
                            </div>
                        </div>
                        <div class="modalCard__delivery-flex">
                            <div class="modalCard__delivery-name">
                                Почта России (удаленные регионы)
                            </div>
                            <div class="modalCard__delivery-price">
                                от 290 ₽
                            </div>
                        </div>
                    </div>

                    <div class="modalCard__delivery-block">
                        <div class="modalCard__delivery-top">
                            <img src="icons/bag.svg" alt="bag" class="modalCard__delivery-svg margin-right">
                            <div class="modalCard__delivery-text">
                                Самовывоз
                            </div>
                        </div>
                        <div class="modalCard__delivery-descr">
                            Вы так же можете приехать к нам в офис и выбрать товары на месте, предварительно оформив заказ на нашем сайте. Наш адрес:
                        </div>
                        <div class="modalCard__delivery-address">
                            <div class="modalCard__delivery-location">
                                <svg class="modalCard__delivery-svg" fill="#cb11ab" id="Layer_1" style="enable-background:new 0 0 91 91;" version="1.1" viewBox="0 0 91 91" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M66.9,41.8c0-11.3-9.1-20.4-20.4-20.4c-11.3,0-20.4,9.1-20.4,20.4c0,11.3,20.4,32.4,20.4,32.4S66.9,53.1,66.9,41.8z    M37,41.4c0-5.2,4.3-9.5,9.5-9.5c5.2,0,9.5,4.2,9.5,9.5c0,5.2-4.2,9.5-9.5,9.5C41.3,50.9,37,46.6,37,41.4z"></path></g></svg>
                            </div>
                            <div class="modalCard__delivery-city">г. Владимир:
                                <span>Большая Московская ул., 19А, 2 этаж</span>
                            </div>
                        </div>
                        <div class="modalCard__delivery-descr">
                            При себе необходимо иметь электорнный чек, если вы уже оплатили через наш сайт
                        </div>
                    </div>
                    <div class="modalCard__delivery-block">
                        <div class="modalCard__delivery-top">
                            <img src="icons/advantages/wallet.svg" alt="wallet" class="modalCard__delivery-svg margin-right">
                            <div class="modalCard__delivery-text">
                                Способы оплаты
                            </div>
                        </div>
                        <div class="modalCard__delivery-payment">
                            <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__delivery-svg">
                            <div class="modalCard__delivery-descr">Наличными при получении (курьеру или в пункте выдачи)</div>
                        </div>
                        <div class="modalCard__delivery-payment">
                            <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__delivery-svg">
                            <div class="modalCard__delivery-descr">Картой при получении (курьеру или в пункте выдачи</div>
                        </div>
                        <div class="modalCard__delivery-payment">
                            <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__delivery-svg">
                            <div class="modalCard__delivery-descr">Онлайн по карте после оформления заказа</div>
                        </div>
                        <div class="modalCard__delivery-payment">
                            <img src="icons/checkmark.svg" alt="checkmark" class="modalCard__delivery-svg">
                            <div class="modalCard__delivery-descr">На расчетный счет компании</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        wrapper.append(itemBlock4);

        const itemBlock5 = document.createElement('div');
        itemBlock5.classList.add('modalCard__item-block');
        wrapper.append(itemBlock5);

        const questions = document.createElement('div');
        questions.classList.add('modalCard__questions');
        questions.innerHTML = `
            <div class="modalCard__questions-title">
                Частые вопросы
            </div>
            <div class="modalCard__questions-subtitle">
                Если Вы не нашли ответа на вопрос, то для Вас ежедневно работает тех. поддержка - мы будем рады помочь:
            </div>
            <div class="modalCard__questions-phone">
                <img src="icons/consultation/phone.svg" alt="phone" class="modalCard__questions-img">
                <a href="#" class="modalCard__questions-link">8-800-77-07-999</a>
            </div>
        `;
        itemBlock5.append(questions);

        const questionsWrapper = document.createElement('div');
        questionsWrapper.classList.add('modalCard__questions-wrapper');
        questions.append(questionsWrapper);
        
        const questionsBlock1 = document.createElement('div');
        questionsBlock1.classList.add('modalCard__questions-block');

        const questionsFlex1 = document.createElement('div');
        questionsFlex1.classList.add('modalCard__questions-flex');
        questionsFlex1.innerHTML = `
            <div class="modalCard__questions-text">Какое приложение использовать?</div>
        `;

        const questionsCross1 = document.createElement('div');
        questionsCross1.classList.add('modalCard__questions-cross');
        questionsCross1.textContent = `×`;
        questionsBlock1.append(questionsFlex1);
        questionsFlex1.append(questionsCross1);

        const questionsDescr1 = document.createElement('div');
        questionsDescr1.classList.add('modalCard__questions-descr');
        questionsDescr1.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa magni laborum earum porro perferendis repudiandae, aliquam sint dolor. Beatae numquam ipsam veniam obcaecati, voluptate sit. Error similique aliquid odio illo.';
        questionsBlock1.append(questionsDescr1);

        questionsWrapper.append(questionsBlock1);

        const questionsBlock2 = document.createElement('div');
        questionsBlock2.classList.add('modalCard__questions-block');

        const questionsFlex2 = document.createElement('div');
        questionsFlex2.classList.add('modalCard__questions-flex');
        questionsFlex2.innerHTML = `
            <div class="modalCard__questions-text">Сколько человек могут пользоваться приложением?</div>
        `;

        const questionsCross2 = document.createElement('div');
        questionsCross2.classList.add('modalCard__questions-cross');
        questionsCross2.textContent = `×`;
        questionsBlock2.append(questionsFlex2);
        questionsFlex2.append(questionsCross2);

        const questionsDescr2 = document.createElement('div');
        questionsDescr2.classList.add('modalCard__questions-descr');
        questionsDescr2.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa magni laborum earum porro perferendis repudiandae, aliquam sint dolor. Beatae numquam ipsam veniam obcaecati, voluptate sit. Error similique aliquid odio illo.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa magni laborum earum porro perferendis repudiandae, aliquam sint dolor. Beatae numquam ipsam veniam obcaecati, voluptate sit. Error similique aliquid odio illo.';
        questionsBlock2.append(questionsDescr2);

        questionsWrapper.append(questionsBlock2);

        const questionsBlock3 = document.createElement('div');
        questionsBlock3.classList.add('modalCard__questions-block');

        const questionsFlex3 = document.createElement('div');
        questionsFlex3.classList.add('modalCard__questions-flex');
        questionsFlex3.innerHTML = `
            <div class="modalCard__questions-text">Как выбрать оператора и тариф для смарт-часов?</div>
        `;

        const questionsCross3 = document.createElement('div');
        questionsCross3.classList.add('modalCard__questions-cross');
        questionsCross3.textContent = `×`;
        questionsBlock3.append(questionsFlex3);
        questionsFlex3.append(questionsCross3);

        const questionsDescr3 = document.createElement('div');
        questionsDescr3.classList.add('modalCard__questions-descr');
        questionsDescr3.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa magni laborum earum porro perferendis repudiandae, aliquam sint dolor. Beatae numquam ipsam veniam obcaecati, voluptate sit. Error similique aliquid odio illo.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa magni laborum earum porro perferendis repudiandae, aliquam sint dolor. Beatae numquam ipsam veniam obcaecati, voluptate sit. Error similique aliquid odio illo.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa magni laborum earum porro perferendi';
        questionsBlock3.append(questionsDescr3);

        questionsWrapper.append(questionsBlock3);

        const questionsBlock4 = document.createElement('div');
        questionsBlock4.classList.add('modalCard__questions-block');

        const questionsFlex4 = document.createElement('div');
        questionsFlex4.classList.add('modalCard__questions-flex');
        questionsFlex4.innerHTML = `
            <div class="modalCard__questions-text">Как установить сим-карту?</div>
        `;

        const questionsCross4 = document.createElement('div');
        questionsCross4.classList.add('modalCard__questions-cross');
        questionsCross4.textContent = `×`;
        questionsBlock4.append(questionsFlex4);
        questionsFlex4.append(questionsCross4);

        const questionsDescr4 = document.createElement('div');
        questionsDescr4.classList.add('modalCard__questions-descr');
        questionsDescr4.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa magni laborum earum porro perferendis repudiandae, aliquam sint dolor. Beatae numquam ipsam veniam obcaecati, voluptate sit.';
        questionsBlock4.append(questionsDescr4);

        questionsWrapper.append(questionsBlock4);

        const questionsBlock5 = document.createElement('div');
        questionsBlock5.classList.add('modalCard__questions-block');

        const questionsFlex5 = document.createElement('div');
        questionsFlex5.classList.add('modalCard__questions-flex');
        questionsFlex5.innerHTML = `
            <div class="modalCard__questions-text">Как точно определяется местоположение?</div>
        `;

        const questionsCross5 = document.createElement('div');
        questionsCross5.classList.add('modalCard__questions-cross');
        questionsCross5.textContent = `×`;
        questionsBlock5.append(questionsFlex5);
        questionsFlex5.append(questionsCross5);

        const questionsDescr5 = document.createElement('div');
        questionsDescr5.classList.add('modalCard__questions-descr');
        questionsDescr5.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa magni laborum earum porro perferendis repudiandae, aliquam sint dolor. Beatae numquam ipsam veniam obcaecati, voluptate sit.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa magni laborum earum porro perferendis repudiandae, aliquam sint dolor. Beatae numquam ipsam veniam obcaecati, voluptate sit.';
        questionsBlock5.append(questionsDescr5);

        questionsWrapper.append(questionsBlock5);

        const questionsBlock6 = document.createElement('div');
        questionsBlock6.classList.add('modalCard__questions-block');

        const questionsFlex6 = document.createElement('div');
        questionsFlex6.classList.add('modalCard__questions-flex');
        questionsFlex6.innerHTML = `
            <div class="modalCard__questions-text">Сколько держит аккумулятор?</div>
        `;

        const questionsCross6 = document.createElement('div');
        questionsCross6.classList.add('modalCard__questions-cross');
        questionsCross6.textContent = `×`;
        questionsBlock6.append(questionsFlex6);
        questionsFlex6.append(questionsCross6);

        const questionsDescr6 = document.createElement('div');
        questionsDescr6.classList.add('modalCard__questions-descr');
        questionsDescr6.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa magni laborum earum porro perferendis repudiandae, aliquam sint dolor. Beatae numquam ipsam veniam obcaecati, voluptate sit.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa magni laborum earum porro perferendis repudiandae, aliquam sint dolor. Beatae numquam ipsam veniam obcaecati, voluptate sit.';
        questionsBlock6.append(questionsDescr6);

        questionsWrapper.append(questionsBlock6);

        /////////////////////////// slider ////////////////////////////
        const imgArr = []
        imgArr.push(img1, img2, img3);

        const tabsImgArr = [];
        tabsImgArr.push(tabImg1, tabImg2, tabImg3);

        const tabsArr = [];
        tabsArr.push(tab1, tab2, tab3);

        const tabsTextColorArray = [];
        tabsTextColorArray.push(tabsTextColor1, tabsTextColor2, tabsTextColor3);

        function hideTabSlides() {  // Скрыть всё
            imgArr.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('show', 'fade');
            });
            tabsArr.forEach(item => {
                item.classList.remove('modalCard__tab-active');
            });
            tabsImgArr.forEach(item => {
                item.classList.remove('modalCard__tab-img__active');
            });
            tabsTextColorArray.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('show');
            });    
        }
        
        function showTabSlides(i) {  // Показать слайд (Первый)
            imgArr[i].classList.add('show', 'fade');
            imgArr[i].classList.remove('hide');
            tabsArr[i].classList.add('modalCard__tab-active');
            tabsImgArr[i].classList.add('modalCard__tab-img__active');
            tabsTextColorArray[i].classList.add('show');
            tabsTextColorArray[i].classList.remove('hide');
        }
        hideTabSlides();
        showTabSlides(0);

        tabsWrapper.addEventListener('click', (event) => {
            if(event.target && event.target.classList.contains('modalCard__tab')) {
                tabsArr.forEach((item, i) => {
                    if(event.target === item) {
                        hideTabSlides();
                        showTabSlides(i); 
                    }
                });
            }
        });

        tabsWrapper.addEventListener('click', (event) => {
            if(event.target && event.target.classList.contains('modalCard__tab-img')) {
                tabsImgArr.forEach((item, i) => {
                    if(event.target === item) {
                        hideTabSlides();
                        showTabSlides(i); 
                    }
                })
            }
        });

        /////////////////////////// ТАБЫ ////////////////////////////
        const itemsArr = [];
        itemsArr.push(item1, item2, item3, item4, item5);

        const contentsArr = [];
        contentsArr.push(itemBlock1, itemBlock2, itemBlock3, itemBlock4, itemBlock5);

        function hideTabContent() { // скрыть все контенты
            contentsArr.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('show', 'fade');
            });
            itemsArr.forEach(item => {
                item.classList.remove('modalCard__item-active');
            });
        }

        function showTabContent(i) {  // открыть первый контент
            contentsArr[i].classList.add('show', 'fade');
            contentsArr[i].classList.remove('hide');
            itemsArr[i].classList.add('modalCard__item-active');
        }
    
        hideTabContent();
        showTabContent(0);

        items.addEventListener('click', (event) => {
            if(event.target && event.target.classList.contains('modalCard__item')) {
                itemsArr.forEach((item, i) => {
                    if(event.target == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });

        /////////////////////////// ТАБЫ (Частые вопросы) ////////////////////////////

        const crossArr = [];
        crossArr.push(questionsCross1, questionsCross2, questionsCross3,questionsCross4,questionsCross5, questionsCross6);

        const descrArr = [];
        descrArr.push(questionsDescr1, questionsDescr2, questionsDescr3, questionsDescr4, questionsDescr5, questionsDescr6);

        const questionsBlockArr = [];
        questionsBlockArr.push(questionsBlock1, questionsBlock2, questionsBlock3, questionsBlock4, questionsBlock5, questionsBlock6);

        questionsBlockArr.forEach(item => {
            item.classList.add('staticHeight');
        });

        function openDescr(i) {
            crossArr[i].classList.add('modalCard__questions-cross__active');
            descrArr[i].classList.add('modalCard__questions-descr__active');
            questionsBlockArr[i].classList.remove('staticHeight');
        }

        function closeDescr(i) {
            crossArr[i].classList.remove('modalCard__questions-cross__active');
            descrArr[i].classList.remove('modalCard__questions-descr__active');
            questionsBlockArr[i].classList.add('staticHeight');
        }

        questionsWrapper.addEventListener('click', (event) => {
            if(event.target && event.target.classList.contains('modalCard__questions-cross')) {
                crossArr.forEach((item, i) => {
                    if(event.target === item) {
                        if(!crossArr[i].classList.contains('modalCard__questions-cross__active') && !descrArr[i].classList.contains('modalCard__questions-descr__active')) {
                            openDescr(i);
                        } else {
                            closeDescr(i);
                        }
                    }                  
                });
            }
        });

        /////////////////////////// modal ////////////////////////////    

        const modalCardArr = document.querySelectorAll('.modalCard');

        function hideModalCard() {
            modalCardArr.forEach(item => {
                item.classList.add('hide');
            });
            modalCardArr.forEach(item => {
                item.classList.remove('show', 'fade');
            });
            document.body.style.overflow = '';
            document.querySelector('.header-top').style.display = '';
            document.querySelector('.header-bottom__right').style.display = '';
        }
        hideModalCard();

        function showModalCard(i) {
            modalCardArr[i].classList.remove('hide');
            modalCardArr[i].classList.add('show', 'fade');
            document.body.style.overflow = 'hidden';
            document.querySelector('.header-top').style.display = 'none';
            document.querySelector('.header-bottom__right').style.display = 'none';
        }

        document.querySelector('.hits__content-grown').addEventListener('click', (event) => {
            if(event.target && event.target.classList.contains('hits__item-bottom__btn')) {
                document.querySelectorAll('.hits__item-bottom__btn').forEach((item, i) => {
                    if(event.target === item) {
                        hideModalCard();
                        showModalCard(i);
                    }
                });
            }
        });

        close.addEventListener('click', hideModalCard);

        modalCard.addEventListener('click', (event) => {
            if(event.target === modalCard) {
                hideModalCard();
            }
        });
    
        document.addEventListener('keydown', (event) => {
            if(event.code === 'Escape' && modalCard.classList.contains('show')) {
                hideModalCard();
            }
        }); 
    }

    modalCardRender(
        'img/cards/grown/LinWear/LW07/golden.jpg',
        'img/cards/grown/LinWear/LW07/silver.jpg',
        '',
        'Cмарт-часы Smart Watch LW07',
        'Золотистый',
        'Серебристый', 
        '',
        'LinWear',
        'Для взрослых',
        4,
        7,
        '8490',
        '6900',
        'Есть',
        'opacity'
    );

    modalCardRender(
        'img/cards/grown/LinWear/LA10/black.jpg',
        'img/cards/grown/LinWear/LA10/brown.png',
        '',
        'Cмарт-часы Smart Watch LA10',
        'Черный',
        'Коричневый', 
        '',
        'LinWear',
        'Для взрослых',
        5,
        14,
        '6900',
        '7490',
        'Есть',
        'opacity'
    );

    modalCardRender(
        'img/cards/grown/LinWear/LW12/black.jpg',
        'img/cards/grown/LinWear/LW12/red.jpg',
        'img/cards/grown/LinWear/LW12/darkBlue.jpg',
        'Cмарт-часы Smart Watch LW12',
        'Черный',
        'Красный', 
        'Синий',
        'LinWear',
        'Для взрослых',
        5,
        21,
        '8490',
        '6900',
        'Есть',
        'visible'
    );

    modalCardRender(
        'img/cards/grown/LinWear/LW09/black.jpg',
        'img/cards/grown/LinWear/LW09/golden.jpg',
        'img/cards/grown/LinWear/LW09/silver.jpg',
        'Cмарт-часы Smart Watch LW09',
        'Черный',
        'Золотистый',
        'Серебристый', 
        'LinWear',
        'Для взрослых',
        5,
        2,
        '8490',
        '6900',
        'Есть',
        'visible'
    );

    modalCardRender(
        'img/cards/grown/LinWear/LW36/black.jpg',
        'img/cards/grown/LinWear/LW36/pink.jpg',
        '',
        'Cмарт-часы Smart Watch LW36',
        'Черный',
        'Розовый',
        '', 
        'LinWear',
        'Для взрослых',
        5,
        5,
        '8490',
        '5490',
        'Есть',
        'opacity'
    );

    modalCardRender(
        'img/cards/grown/LinWear/LA08/black.jpg',
        'img/cards/grown/LinWear/LA08/silver.jpg',
        'img/cards/grown/LinWear/LA08/pink.jpeg',
        'Cмарт-часы Smart Watch LA08',
        'Черный',
        'Серебристый',
        'Розовый', 
        'LinWear',
        'Для взрослых',
        5,
        3,
        '8490',
        '5490',
        'Есть',
        'visible'
    );

    modalCardRender(
        'img/cards/grown/LinWear/LW06/golden.jpg',
        'img/cards/grown/LinWear/LW06/silver.jpg',
        '',
        'Cмарт-часы Smart Watch LW06',
        'Золотистый',
        'Серебристый',
        '', 
        'LinWear',
        'Для взрослых',
        5,
        11,
        '8490',
        '6900',
        'Есть',
        'opacity'
    );

    modalCardRender(
        'img/cards/grown/LinWear/DT1/black.jpg',
        'img/cards/grown/LinWear/DT1/silver.jpg',
        '',
        'Cмарт-часы Smart Watch DT1',
        'Черный',
        'Серебристый',
        '', 
        'LinWear',
        'Для взрослых',
        5,
        9,
        '8490',
        '4900',
        'Есть',
        'opacity'
    );
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

/***/ "./src/js/modules/modalComparison.js":
/*!*******************************************!*\
  !*** ./src/js/modules/modalComparison.js ***!
  \*******************************************/
/*! exports provided: modalComparison */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalComparison", function() { return modalComparison; });
function modalComparison() {
    const btn = document.querySelector('#modalComparison'),
        close = document.querySelector('.modalComparison__close'),
        modal = document.querySelector('.modalComparison');

    function hideModalComparison() {
        modal.classList.add('hide');
        modal.classList.remove('show', 'fade');
        document.body.style.overflow = '';
    }
    hideModalComparison();
    function showModalComparison() {
        modal.classList.add('show', 'fade');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }

    btn.addEventListener('click', showModalComparison);
    close.addEventListener('click', hideModalComparison);

    modal.addEventListener('click', (event) => {
        if(event.target === modal) {
            hideModalComparison();
        }
    });

    document.addEventListener('keydown', (event) => {
        if(event.code === 'Escape' && modal.classList.contains('show')) {
            hideModalComparison();
        }
    }); 

    const btnComparison = document.createElement('button');
    btnComparison.classList.add('btn', 'modalComparison__btn-bottom');
    btnComparison.textContent = 'Сравнить';
    document.querySelector('.modalComparison__wrapper').append(btnComparison);

}



/***/ }),

/***/ "./src/js/modules/modalFavourites.js":
/*!*******************************************!*\
  !*** ./src/js/modules/modalFavourites.js ***!
  \*******************************************/
/*! exports provided: modalFavourites */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalFavourites", function() { return modalFavourites; });
function modalFavourites() {
    const btn = document.querySelector('#modalFavourites'),
        close = document.querySelector('.modalFavourites__close'),
        modal = document.querySelector('.modalFavourites');

    function hideModalFavourites() {
        modal.classList.add('hide');
        modal.classList.remove('show', 'fade');
        document.body.style.overflow = '';
    }
    hideModalFavourites();
    function showModalFavourites() {
        modal.classList.add('show', 'fade');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }

    btn.addEventListener('click', showModalFavourites);
    close.addEventListener('click', hideModalFavourites);

    modal.addEventListener('click', (event) => {
        if(event.target === modal) {
            hideModalFavourites();
        }
    });

    document.addEventListener('keydown', (event) => {
        if(event.code === 'Escape' && modal.classList.contains('show')) {
            hideModalFavourites();
        }
    }); 

    const btnFavourites = document.createElement('button');
    btnFavourites.classList.add('btn', 'modalFavourites__btn-bottom');
    btnFavourites.textContent = 'Добавить в коризину';
    document.querySelector('.modalFavourites__wrapper').append(btnFavourites);

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

    function nextSlider() {
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
    }

    function prewSlider() {
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
    }

    next.addEventListener('click', nextSlider);
    prev.addEventListener('click', prewSlider);

    dots.forEach(dot => {
        dot.addEventListener('click', (event) => {
            const slideTo = event.target.getAttribute('data-slide-to');
            slideIndex = slideTo;

            offset = deleteNotDigits(width) * (slideTo - 1);
            sliderField.style.transform = `translateX(-${offset}px)`;

            setActiveDot();
        });
    });

    setInterval(() => {
        nextSlider();
    }, 5000)
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
    const deadline = '2022-12-14';    // время в будущем

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

    setInterval(() => {
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
    }, 5000);

}



/***/ }),

/***/ "./src/js/modules/scrolling.js":
/*!*************************************!*\
  !*** ./src/js/modules/scrolling.js ***!
  \*************************************/
/*! exports provided: scrolling */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrolling", function() { return scrolling; });
function scrolling() {

    let links = document.querySelectorAll('[href^="#"]'),
        speed = 0.3;
    
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            let widthTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top,
                start = null;

            requestAnimationFrame(step);

            function step(time) {
                if (start === null) {
                    start = time;
                }

                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock));

                    document.documentElement.scrollTo(0, r);

                if (r != widthTop + toBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }
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

/***/ "./src/js/modules/validationInputs.js":
/*!********************************************!*\
  !*** ./src/js/modules/validationInputs.js ***!
  \********************************************/
/*! exports provided: validationInputs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validationInputs", function() { return validationInputs; });
function validationInputs() {
    const inputName = document.querySelector('[name="name"]'),
         inputPhone = document.querySelector('[name="phone"]');

    inputName.addEventListener('keypress', (e) => {
        if(e.key.match(/[^а-яё]/ig)) {
            e.preventDefault();
        }
    });
    // 'keypress' - отслеживание, пользователь нажал на определенную клавишу
    // [] диапазон, ^ - начало строки, i - любой регистр, g - все знаки

    inputName.addEventListener('input', () => {
        if(inputName.value.length < 4) {
            inputName.style.border = '1px solid red';
        } else {
            inputName.style.border = 'none';
        }
    });

    inputPhone.addEventListener('input', () => {
        if(inputPhone.value.length <= 17) {
            inputPhone.style.border = '1px solid red';
        } else {
            inputPhone.style.border = 'none';
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
/* harmony import */ var _modules_modalCardChildren__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/modalCardChildren */ "./src/js/modules/modalCardChildren.js");
/* harmony import */ var _modules_menuCardGrown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menuCardGrown */ "./src/js/modules/menuCardGrown.js");
/* harmony import */ var _modules_modalCardGrown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/modalCardGrown */ "./src/js/modules/modalCardGrown.js");
/* harmony import */ var _modules_menuCardElderly__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/menuCardElderly */ "./src/js/modules/menuCardElderly.js");
/* harmony import */ var _modules_modalCardElderly__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/modalCardElderly */ "./src/js/modules/modalCardElderly.js");
/* harmony import */ var _modules_tabsCards__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/tabsCards */ "./src/js/modules/tabsCards.js");
/* harmony import */ var _modules_modalComparison__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/modalComparison */ "./src/js/modules/modalComparison.js");
/* harmony import */ var _modules_modalFavourites__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/modalFavourites */ "./src/js/modules/modalFavourites.js");
/* harmony import */ var _modules_modalBasket__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/modalBasket */ "./src/js/modules/modalBasket.js");
/* harmony import */ var _modules_consultationForm__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/consultationForm */ "./src/js/modules/consultationForm.js");
/* harmony import */ var _modules_maskPhone__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/maskPhone */ "./src/js/modules/maskPhone.js");
/* harmony import */ var _modules_validationInputs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/validationInputs */ "./src/js/modules/validationInputs.js");
/* harmony import */ var _modules_scrolling__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/scrolling */ "./src/js/modules/scrolling.js");
/* harmony import */ var _modules_hamburger__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/hamburger */ "./src/js/modules/hamburger.js");






















window.addEventListener('DOMContentLoaded', () => {
    Object(_modules_modalCatalog__WEBPACK_IMPORTED_MODULE_0__["modalCatalog"])();
    Object(_modules_modalBuyer__WEBPACK_IMPORTED_MODULE_1__["modalBuyer"])();
    Object(_modules_offerSlider__WEBPACK_IMPORTED_MODULE_2__["offerSlider"])();
    Object(_modules_offerTimer__WEBPACK_IMPORTED_MODULE_3__["offerTimer"])();
    Object(_modules_reviewsSlider__WEBPACK_IMPORTED_MODULE_4__["reviewsSlider"])();
    Object(_modules_modalComparison__WEBPACK_IMPORTED_MODULE_12__["modalComparison"])();
    Object(_modules_modalFavourites__WEBPACK_IMPORTED_MODULE_13__["modalFavourites"])();
    Object(_modules_modalBasket__WEBPACK_IMPORTED_MODULE_14__["modalBasket"])();
    Object(_modules_menuCardChildren__WEBPACK_IMPORTED_MODULE_5__["menuCardChildren"])();
    Object(_modules_modalCardChildren__WEBPACK_IMPORTED_MODULE_6__["modalCardChildren"])();
    Object(_modules_menuCardGrown__WEBPACK_IMPORTED_MODULE_7__["menuCardGrown"])();
    Object(_modules_modalCardGrown__WEBPACK_IMPORTED_MODULE_8__["modalCardGrown"])();
    Object(_modules_menuCardElderly__WEBPACK_IMPORTED_MODULE_9__["menuCardElderly"])();
    Object(_modules_modalCardElderly__WEBPACK_IMPORTED_MODULE_10__["modalCardElderly"])();
    Object(_modules_tabsCards__WEBPACK_IMPORTED_MODULE_11__["tabsCards"])();
    Object(_modules_consultationForm__WEBPACK_IMPORTED_MODULE_15__["consultationForm"])();
    Object(_modules_maskPhone__WEBPACK_IMPORTED_MODULE_16__["mask"])();
    Object(_modules_validationInputs__WEBPACK_IMPORTED_MODULE_17__["validationInputs"])();
    Object(_modules_scrolling__WEBPACK_IMPORTED_MODULE_18__["scrolling"])();
    Object(_modules_hamburger__WEBPACK_IMPORTED_MODULE_19__["hamburger"])();
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map
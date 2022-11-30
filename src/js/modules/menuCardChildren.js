
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
    
export {menuCardChildren};
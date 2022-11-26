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
                <div class="reviews__descr">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorem aliquid ex 
                </div>
                <div class="reviews__bottom">
                    <div class="reviews__bottom-time">
                        21.12.2021
                    </div>
                    <div class="reviews__bottom-location">
                        <div class="reviews__bottom-img">
                            <svg fill="#cb11ab" id="Layer_1" style="enable-background:new 0 0 91 91;" version="1.1" viewBox="0 0 91 91" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M66.9,41.8c0-11.3-9.1-20.4-20.4-20.4c-11.3,0-20.4,9.1-20.4,20.4c0,11.3,20.4,32.4,20.4,32.4S66.9,53.1,66.9,41.8z    M37,41.4c0-5.2,4.3-9.5,9.5-9.5c5.2,0,9.5,4.2,9.5,9.5c0,5.2-4.2,9.5-9.5,9.5C41.3,50.9,37,46.6,37,41.4z"/></g></svg>
                        </div>
                        <div class="reviews__bottom-city">
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
        }
        hideModalCard();

        function showModalCard(i) {
            modalCardArr[i].classList.remove('hide');
            modalCardArr[i].classList.add('show', 'fade');
            document.body.style.overflow = 'hidden';
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

export {modalCardElderly};
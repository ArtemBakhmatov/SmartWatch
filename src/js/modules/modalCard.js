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

    /////////////////////////// slider ////////////////////////////
    const slides = document.querySelectorAll('.modalCard__slide'),          // все слайды
       tabsSlide = document.querySelectorAll('.modalCard__tab'),            // все табы слайдов
         tabsImg = document.querySelectorAll('.modalCard__tab-img'),        // вса картинки в табах
      tabWrapper = document.querySelector('.modalCard__tabs'),              // обертка табов
        subtitle = document.querySelectorAll('.modalCard__subtitle-tab');   // все описания цвета

    function hideTabSlides() {  // Скрыть всё
        slides.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabsSlide.forEach(item => {
            item.classList.remove('modalCard__tab-active');
        });
        tabsImg.forEach(item => {
            item.classList.remove('modalCard__tab-img__active');
        });
        subtitle.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');
        });    
    }

    function showTabSlides(i) {  // Показать слайд (Первый)
        slides[i].classList.add('show', 'fade');
        slides[i].classList.remove('hide');
        tabsSlide[i].classList.add('modalCard__tab-active');
        tabsImg[i].classList.add('modalCard__tab-img__active');
        subtitle[i].classList.add('show');
        subtitle[i].classList.remove('hide');
    }
    hideTabSlides();
    showTabSlides(0);

    tabWrapper.addEventListener('click', (event) => {
        if(event.target && event.target.classList.contains('modalCard__tab')) {
            tabsSlide.forEach((item, i) => {
                if(event.target === item) {
                    hideTabSlides();
                    showTabSlides(i); 
                }
            })
        }
    });

    tabWrapper.addEventListener('click', (event) => {
        if(event.target && event.target.classList.contains('modalCard__tab-img')) {
            tabsImg.forEach((item, i) => {
                if(event.target === item) {
                    hideTabSlides();
                    showTabSlides(i); 
                }
            })
        }
    });
}

export {modalCard};
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

export {cardSliderColor};
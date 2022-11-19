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

export {modalCard};
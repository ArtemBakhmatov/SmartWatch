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

export {tabsCards};
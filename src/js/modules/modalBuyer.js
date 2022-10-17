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

export {modalBuyer};
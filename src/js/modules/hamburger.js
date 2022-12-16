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
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        btnCatalog.classList.remove('header-bottom__catalog-active');
        menu.classList.remove('header-top__wrapper-active');
        hamburger.classList.remove('header__hamburger-active');
        headerCatalog.classList.remove('header-catalog__active');
        btnHamburger.classList.remove('header-bottom__hamburger-active');
        linkIconArrow.classList.remove('header-top__link-open');
        headerTopModal.classList.remove('header-top__modal-active');
        document.body.style.overflow = '';
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

export {hamburger};
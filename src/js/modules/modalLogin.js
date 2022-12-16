function modalLogin() {
    const btn = document.querySelector('#modalLogin'),
    close = document.querySelector('.modalLogin__close'),
    modal = document.querySelector('.modalLogin');

    function hideModalLogin() {
        modal.classList.add('hide');
        modal.classList.remove('show', 'fade');
        document.body.style.overflow = '';
    }
    hideModalLogin();
    function showModalLogin() {
        modal.classList.add('show', 'fade');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }

    btn.addEventListener('click', showModalLogin);
    close.addEventListener('click', hideModalLogin);

    modal.addEventListener('click', (event) => {
        if(event.target === modal) {
            hideModalLogin();
        }
    });

    document.addEventListener('keydown', (event) => {
        if(event.code === 'Escape' && modal.classList.contains('show')) {
            hideModalLogin();
        }
    }); 
}

export {modalLogin};
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
    btnBasket.classList.add('btn', 'modalFavourites__btn-bottom');
    btnBasket.textContent = 'Купить';
    document.querySelector('.modalBasket__wrapper').append(btnBasket);

}

export {modalBasket};
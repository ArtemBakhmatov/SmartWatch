function modalFavourites() {
    const btn = document.querySelector('#modalFavourites'),
        close = document.querySelector('.modalFavourites__close'),
        modal = document.querySelector('.modalFavourites');

    function hideModalFavourites() {
        modal.classList.add('hide');
        modal.classList.remove('show', 'fade');
        document.body.style.overflow = '';
    }
    hideModalFavourites();
    function showModalFavourites() {
        modal.classList.add('show', 'fade');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }

    btn.addEventListener('click', showModalFavourites);
    close.addEventListener('click', hideModalFavourites);

    modal.addEventListener('click', (event) => {
        if(event.target === modal) {
            hideModalFavourites();
        }
    });

    document.addEventListener('keydown', (event) => {
        if(event.code === 'Escape' && modal.classList.contains('show')) {
            hideModalFavourites();
        }
    }); 

    const btnFavourites = document.createElement('button');
    btnFavourites.classList.add('btn', 'modalFavourites__btn-bottom');
    btnFavourites.textContent = 'Добавить в коризину';
    document.querySelector('.modalFavourites__wrapper').append(btnFavourites);

}

export {modalFavourites};
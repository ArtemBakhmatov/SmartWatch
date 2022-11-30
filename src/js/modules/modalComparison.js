function modalComparison() {
    const btn = document.querySelector('#modalComparison'),
        close = document.querySelector('.modalComparison__close'),
        modal = document.querySelector('.modalComparison');

    function hideModalComparison() {
        modal.classList.add('hide');
        modal.classList.remove('show', 'fade');
        document.body.style.overflow = '';
    }
    hideModalComparison();
    function showModalComparison() {
        modal.classList.add('show', 'fade');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }

    btn.addEventListener('click', showModalComparison);
    close.addEventListener('click', hideModalComparison);

    modal.addEventListener('click', (event) => {
        if(event.target === modal) {
            hideModalComparison();
        }
    });

    document.addEventListener('keydown', (event) => {
        if(event.code === 'Escape' && modal.classList.contains('show')) {
            hideModalComparison();
        }
    }); 

    const btnComparison = document.createElement('button');
    btnComparison.classList.add('btn', 'modalComparison__btn-bottom');
    btnComparison.textContent = 'Сравнить';
    document.querySelector('.modalComparison__wrapper').append(btnComparison);

}

export {modalComparison};
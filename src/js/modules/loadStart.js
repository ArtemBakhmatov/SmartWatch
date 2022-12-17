function loadStart() {
    const loadStart = document.querySelector('.loadStart'),
        body = document.querySelector('body');
    setTimeout(() => {
        loadStart.classList.add('hide', 'fade');
        body.classList.add('overflowTrue');
    },3000);
}

export {loadStart};
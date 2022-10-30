function reviewsSlider() {
    const slides = document.querySelectorAll('.reviews__slide'),   // все слайды
         reviews = document.querySelector('.reviews .container'),  // весь блок в контейнере
   sliderWrapper = document.querySelector('.reviews__wrapper'),    // обёртка всех слайдов
     sliderField = document.querySelector('.reviews__inner'),      // гориз-е поле всех слайдов
           width = window.getComputedStyle(sliderWrapper).width;   // ширина обёртки (sliderWrapper)

    let slideIndex = 1,
        offset = 0;                                                // смещение

    sliderField.style.width = 100 * slides.length + '%';

    const indicators = document.createElement('div'),
                dots = [];
    indicators.classList.add('reviews__indicators');
    reviews.append(indicators);

    for(let i = 0; i < slides.length; i++) {
        const dot = document.createElement('div');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('reviews__indicators-dot');

        indicators.append(dot);
        dots.push(dot);

        if(i == 0) {
            dot.classList.add('reviews__indicators-dot__active');
        }
    }

    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.classList.add('reviews__btn');
    btn.textContent = 'Все отзывы';
    reviews.append(btn);

    function setActiveDot() {
        dots.forEach(dot => dot.classList.remove('reviews__indicators-dot__active'));
        dots[slideIndex - 1].classList.add('reviews__indicators-dot__active');
    }

    function deleteNotDigits() {                // удалить не цифры
        return +width.replace(/\D/g, '');       // \D - нецифры, g - для всех знаков
    }

    dots.forEach(dot => {
        dot.addEventListener('click', (event) => {
            const slideTo = event.target.getAttribute('data-slide-to');
            slideIndex = slideTo;

            offset = deleteNotDigits(width) * (slideTo - 1);
            sliderField.style.transform = `translateX(-${offset}px)`;

            setActiveDot();
        });
    });

}

export {reviewsSlider};
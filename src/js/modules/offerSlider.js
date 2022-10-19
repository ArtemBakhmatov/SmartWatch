function offerSlider() {
    const slides = document.querySelectorAll('.offer__slide'),        // все слайды
          slider = document.querySelector('.offer__slider'),          // весь блок в контейнере
            prev = document.querySelector('.offer__slider-prev'),     // стрелка назад
            next = document.querySelector('.offer__slider-next'),     // стрелка вперед
   sliderWrapper = document.querySelector('.offer__slider-wrapper'),  // обёртка всех слайдов
     sliderField = document.querySelector('.offer__slider-inner'),    // гориз-е поле всех слайдов
           width = window.getComputedStyle(sliderWrapper).width;      // ширина обёртки (sliderWrapper)

    let slideIndex = 1,
            offset = 0;

    sliderField.style.width = 100 * slides.length + '%';

    //slides.forEach(slide => slide.style.width = width);

    function deleteNotDigits() {                // удалить не цифры
        return +width.replace(/\D/g, '');       // \D - нецифры, g - для всех знаков
    }

    next.addEventListener('click', () => {
        if(offset == deleteNotDigits() * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += deleteNotDigits();
        }

        sliderField.style.transform = `translateX(-${offset}px)`;

        // if(slideIndex == slides.length) {
        //     slideIndex = 1;
        // } else {
        //     slideIndex++;
        // }
    });

    prev.addEventListener('click', () => {
        if(offset == 0) {
            offset = deleteNotDigits() * (slides.length - 1);
        } else {
            offset -= deleteNotDigits();
        }

        sliderField.style.transform = `translateX(-${offset}px)`;
    });


}

export {offerSlider};
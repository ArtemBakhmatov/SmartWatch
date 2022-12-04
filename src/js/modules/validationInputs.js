function validationInputs() {
    const inputName = document.querySelector('[name="name"]'),
         inputPhone = document.querySelector('[name="phone"]');

    inputName.addEventListener('keypress', (e) => {
        if(e.key.match(/[^а-яё]/ig)) {
            e.preventDefault();
        }
    });
    // 'keypress' - отслеживание, пользователь нажал на определенную клавишу
    // [] диапазон, ^ - начало строки, i - любой регистр, g - все знаки

    inputName.addEventListener('input', () => {
        if(inputName.value.length < 4) {
            inputName.style.border = '1px solid red';
        } else {
            inputName.style.border = 'none';
        }
    });

    inputPhone.addEventListener('input', () => {
        if(inputPhone.value.length <= 17) {
            inputPhone.style.border = '1px solid red';
        } else {
            inputPhone.style.border = 'none';
        }
    });
}

export {validationInputs};
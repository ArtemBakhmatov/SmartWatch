function consultationForm() {
    const form = document.querySelector('.consultation__form'),
      checkbox = document.querySelector('[type="checkbox"]'),
         modal = document.querySelector('.consultation__modal');

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show', 'fide');
    }
    closeModal();

    function openModal() {
        modal.classList.add('show', 'fide');
        modal.classList.remove('hide');
    }

    const message = {
        loading: 'icons/spinner.svg',
        success: 'Спасибо, скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...',
        imgThanks: 'icons/thanks.gif',
        imgError: 'icons/error.gif'
    };

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });
        return await res.json();
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const statusMessage = document.createElement('img');
        statusMessage.src = message.loading;
        statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
        `;
        form.insertAdjacentElement('afterend', statusMessage);

        const formData = new FormData(form);

        const json = JSON.stringify(Object.fromEntries(formData.entries()));
        // entries() -> превращает в массив массивов ([['a', 5]])
        // Object.fromEntries() -> превращает в объект {a: 5}

        postData('http://localhost:3000/consultation', json)
        .then(data => {
            console.log(data);
            showThanksModal(message.success, message.imgThanks);
            statusMessage.remove();
        }).catch(() => {
            showThanksModal(message.failure, message.imgError);
            statusMessage.remove();
        }).finally(() => {
            form.reset();
        });
    });

    function showThanksModal(message, img) {
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('consultation__modal-wrapper');
        thanksModal.innerHTML = `
            <div class="consultation__modal-title">${message}</div>
        `;
        modal.append(thanksModal);
        
        const thanksGif = document.querySelector('div');
        thanksGif.classList.add('consultation__modal-img');
        thanksGif.classList.remove('header-top');
        thanksGif.innerHTML = `
            <img src=${img} alt="thanks">
        `;
        thanksModal.append(thanksGif);

        setTimeout(() => {
            thanksModal.remove();
            closeModal();
        }, 3000);
    }

    // fetch('https://jsonplaceholder.typicode.com/posts/1', {
    //     method: 'POST',                         // метод
    //     body: JSON.stringify({name: 'Alex'}),   // что отправляем
    //     Headers: {                              // заголовок
    //         'Content-type': 'application/json'
    //     }
    // })
    // .then(response => response.json()) // response -> ответ в json // response.json()) -> переводит в объект
    // .then(json => console.log(json));  // объект выводится в консоли

    fetch('http://localhost:3000/menu')
        .then(data => data.json())
        .then(res => console.log(res));

}

export {consultationForm};
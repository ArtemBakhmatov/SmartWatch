function mask() {
    
    let setCursorPosition = (pos, elem) => {
        elem.focus(); // установили фокус на элементе

        if(elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            let range = elem.createTextRange(); // диапазон

            range.corange.collapse(true); //объединять граничные точки диапазона 
            range.moveEnd('character', pos); // где будет конечная точка нашего выделения
            range.moveStart('character', pos); // с какого символа будет начинаться выделение
            range.select(); // объеденяет сразу moveStart и moveEnd
           
        }
        // setSelectionRange() устанавливает начальное и конечное положение выделения текста в элементе
        // createTextRange()  текстовый диапазон нулевой и более длины 
    };

    function createMask(event) {
        let matrix = '+7 (___) ___ __ __',
                 i = 0,
               def = matrix.replace(/\D/g, ''),     // если не цифры то будет путстая строка// cтатичная
               val = this.value.replace(/\D/g, ''); // если не цифры то будет путстая строка// динам-я
        
        if(def.length >= val.length) {
            val = def;
        }

        this.value = matrix.replace(/./g, function(a) {  // перебирает каждый символ
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        });
        // charAt возвращает символ, стоящий на указанной позиции в строке 

        if(event.type === 'blur') { // пользователь перестал что то вводить
            if(this.value.length == 2) {
                this.value == '';
            }
        } else {
            setCursorPosition(this.value.length, this);  
            // устанавливать позицию курсора (кол-во символов в инпуте, ссылка на тот элемент который в работе)  
        }
    }

    const inputPhone = document.querySelector('[name="phone"]');

    inputPhone.addEventListener('input', createMask);
    inputPhone.addEventListener('focus', createMask);
    inputPhone.addEventListener('blur', createMask);

}

export {mask};
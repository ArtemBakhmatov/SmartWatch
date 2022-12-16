function scrolling() {

    let links = document.querySelectorAll('[href^="#"]'),
        speed = 0.3;
    
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            let widthTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top,
                start = null;

            requestAnimationFrame(step);

            function step(time) {
                if (start === null) {
                    start = time;
                }

                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock));

                    document.documentElement.scrollTo(0, r);

                if (r != widthTop + toBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }
        });

        function hideHeaderBottom() {
            if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1) {
                document.querySelector('.header-bottom__right').style.display = 'none';
            } else {
                document.querySelector('.header-bottom__right').style.display = '';
            }
            // скролл + окно браузера >= весь скролл // -1 -> добавил чтобы не было багов на др. мониторах
        }
    
        window.addEventListener('scroll', hideHeaderBottom);
    });


    
}

export {scrolling};
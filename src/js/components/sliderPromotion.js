export function initSlider() {
    const arrowNext = document.querySelector(".promotion__arrow--next");
    const arrowPrev = document.querySelector(".promotion__arrow--prev");
    const promotionSlides = document.querySelectorAll(".promotion__banner");
    const promotionWrap = document.querySelector(".promotion__banners");
    let i = 0;

    arrowNext.addEventListener("click", nextSlide);
    arrowPrev.addEventListener("click", prevSlide);
    if (window.innerWidth <= 769) {
        promotionWrap.addEventListener("click", event => {
            let widthDevice = window.innerWidth;
            let halfWidth = widthDevice / 2;
            if (event.clientX >= halfWidth) {
                nextSlide();
            } else {
                prevSlide();
            }
        });
    }

    function prevSlide() {  
        promotionSlides[i].classList.remove("active");
        i--;
        if (i < 0) {
            i = promotionSlides.length - 1;
        } 
        promotionSlides[i].classList.add("active");
    }

    function nextSlide() {
        promotionSlides[i].classList.remove("active");
        i++;
        if (i == promotionSlides.length) {
            i = 0;
        }
        promotionSlides[i].classList.add("active");
    }
}
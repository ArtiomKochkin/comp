export function initSlider() {
    document.addEventListener("DOMContentLoaded", () => {
        const slider = document.querySelector(".reviews__slider");
        const sliderItems = document.querySelectorAll(".reviews__item");
    
        $(slider).slick({
            arrows: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            appendArrows: $(".reviews__transition"),
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        autoplay: false,
                        centerMode: true,
                        centerPadding: 80
                    }
                }
            ]
        });
    
        let arrowPrev = document.querySelector(".slick-prev");
        let arrowNext = document.querySelector(".slick-next");
        arrowPrev.addEventListener("click", event => {
            $(slider).slick("slickPrev");
        });
        arrowNext.addEventListener("click", event => {
            $(slider).slick("slickNext");
        });
    
        $(slider).on("beforeChange", function(event, slick, currentSlide, nextSlide) {
            arrowPrev = sliderItems[currentSlide].querySelector(".slick-prev");
            arrowNext = sliderItems[currentSlide].querySelector(".slick-next");
            arrowPrev.addEventListener("click", event => {
                $(slider).slick("slickPrev");
            });
            arrowNext.addEventListener("click", event => {
                $(slider).slick("slickNext");
            });
        });
    });
}
export function initSlider() {
    const promotionSlider = document.querySelectorAll(".promotion__slider");

    $(promotionSlider).slick({
        arrows: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 700,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    });
}
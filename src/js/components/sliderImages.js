export function initSlider() {
    document.addEventListener("DOMContentLoaded", () => {
        const slider = document.querySelector(".product-page__photo-slider");

        $(slider).slick({
            infinite: true,
            arrows: true,
            speed: 300,
            vertical: true,
            verticalSwiping: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        vertical: false,
                        verticalSwiping: false,
                        autoplay: true,
                    }
                }
            ]
        });
    });
}
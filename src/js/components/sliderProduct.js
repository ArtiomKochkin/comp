export function initSlider() {
    const slider = document.querySelector(".product-page__feedback-list");

    if (window.innerWidth <= 768) {
        $(slider).slick({
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
        });
    }
}
export function initSlider() {
    document.addEventListener("DOMContentLoaded", () => {
        const slider = document.querySelector(".cart__kit-slider");

        $(slider).slick({
            arrows: true,
            infinite: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnFocus: true,
            pauseOnHover: true,
            pauseOnDotsHover: true,
        });
    });
}
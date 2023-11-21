export function initSlider() {
    document.addEventListener("DOMContentLoaded", () => {
        const slider = document.querySelector(".intro__slider");

        $(slider).slick({
            arrows: false,
            dots: true,
            autoplay: true,
            infinite: true,
            autoplaySpeed: 4000,
            speed: 1000,
            pauseOnFocus: true,
            pauseOnHover: true,
            pauseOnDotsHover: true,
        });
    });
}
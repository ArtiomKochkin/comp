export function initSlider() {
    const slider = document.querySelector(".cart__slider");

    $(slider).slick({
        arrows: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
    });
}
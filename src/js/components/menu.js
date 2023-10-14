export function toggleMenu() {
    const body = document.body;
    const burgerButton = document.querySelector(".burger");
    const menu = document.querySelector(".menu");
    const closeButton = document.querySelector(".menu__close");

    burgerButton.addEventListener("click", showMenu);
    closeButton.addEventListener("click", hideMenu);

    function showMenu() {
        menu.classList.add("show");
        body.classList.add("no-scroll");
    }
    function hideMenu() {
        menu.classList.remove("show");
        body.classList.remove("no-scroll");
    }
}
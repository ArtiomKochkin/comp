export function toggleMenu() {
    const body = document.body;
    const burgerButton = document.querySelector(".burger");
    const menu = document.querySelector(".menu");
    const closeButton = document.querySelector(".menu__close");
    let mask = document.createElement("div");
    

    burgerButton.addEventListener("click", showMenu);
    closeButton.addEventListener("click", hideMenu);
    mask.addEventListener("click", hideMenu);

    function showMenu() {
        menu.classList.add("show");
        body.classList.add("no-scroll");
        body.appendChild(mask);
        mask.classList.add("mask");
    }
    function hideMenu() {
        menu.classList.remove("show");
        body.classList.remove("no-scroll");
        mask.remove();
    }
}
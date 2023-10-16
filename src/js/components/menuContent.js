export function menuContent() {
    const menuUser = document.querySelector(".menu__user");
    const menuActions = document.getElementById("menuActions");
    const menuUserActions = document.getElementById("menuUserActions");
    const menuAccordionButton = document.querySelectorAll(".menu__accordion");

    checkUser();
    function checkUser() {
        if (menuUser.classList.contains("show")) {
            menuUserActions.classList.add("show");
            menuActions.classList.add("show");
        }
    }

    menuAccordionButton.forEach(function(item) {
        item.addEventListener("click", () => {
            let arrow = item.querySelector(".menu__arrow-img");
            let parentItem = item.parentNode;
            let navMenu = parentItem.querySelector(".nav--menu");
            
            if (!navMenu.classList.contains("show")) {
                setTimeout(() => {
                    arrow.setAttribute("src", "../img/svg/arrow/arrow-up-white-l.svg");
                    navMenu.classList.add("show");
                }, 10);
            } else {
                setTimeout(() => {
                    arrow.setAttribute("src", "../img/svg/arrow/arrow-down-white-l.svg");
                    navMenu.classList.remove("show");
                }, 50);
            }
        });
    });
}
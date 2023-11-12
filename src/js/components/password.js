export function switchVisibility() {
    const buttonEyes = document.querySelectorAll(".modal__eye-img");

    buttonEyes.forEach(toggleVisibilityPassword);

    function toggleVisibilityPassword(item) {
        item.addEventListener("click", () => {
            let input = item.nextElementSibling;
            let typeInput = input.getAttribute("type");
            
            if (typeInput == "password") {
                input.setAttribute("type", "text");
                item.setAttribute("src", "../img/svg/eye-off.svg");
            } else {
                input.setAttribute("type", "password");
                item.setAttribute("src", "../img/svg/eye-on.svg");
            }
        });
    }
}
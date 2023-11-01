export function openFavorites() {
    const buttonFav = document.getElementById("buttonFavorites");

    buttonFav.addEventListener("click", () => {
        window.location.href = "../../account.html?autoclick=true";
    });
}
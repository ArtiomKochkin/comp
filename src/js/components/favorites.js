export function openFavorites() {
    const buttonFav = document.getElementById("buttonFavorites");

    buttonFav.addEventListener("click", () => {
        const relativePath = "account.html?autoclick=true";
        window.location.href = new URL(relativePath, window.location.href).toString();
    });
}
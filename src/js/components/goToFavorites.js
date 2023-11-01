export function onClick() {
    document.addEventListener("DOMContentLoaded", () => {
        const urlParams = new URLSearchParams(window.location.search);
        const autoclick = urlParams.get("autoclick");

        if (autoclick === "true") {
            const tabFavorites = document.querySelector("[data-tab='wishlist']");
            tabFavorites.click();
        }
    });
}
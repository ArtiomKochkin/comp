export function insertProductsToWishlist() {
    document.addEventListener("DOMContentLoaded", () => {
        let wishlistWrap = document.querySelector(".account__product-list--wishlist");

        wishlistWrap.outerHTML = localStorage.getItem("wishlistWrap");
    });
}
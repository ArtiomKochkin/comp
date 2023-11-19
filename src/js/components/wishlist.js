export function insertProductsToWishlist() {
    let wishlistWrap = document.querySelector(".account__product-list--wishlist");

    wishlistWrap.outerHTML = localStorage.getItem("wishlistWrap");
}
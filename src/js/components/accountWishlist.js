export function wishlistConfiguration() {
    const wishlist = document.getElementById("wishlist");
    const wishlistItems = document.querySelectorAll(".account__product-list--wishlist");
    const pagination = wishlist.querySelector(".pagination");
    const buttonRemove = document.querySelectorAll(".product__addition-btn");
    const countWishlist = document.getElementById("numFavorites");
    const countWishlistWrap = countWishlist.closest(".header__actions-count");

    buttonRemove.forEach(removeFromWishlist);

    function removeFromWishlist(item) {
        item.addEventListener("click", () => {
            let product = item.closest(".product");
            product.remove();
            countWishlist.innerText = +countWishlist.innerText - 1;
            if (countWishlist.innerText <= 0) {
                countWishlistWrap.classList.remove("active");
            }
            checkCountProduct();
        });
    }

    function checkCountProduct() {
        wishlistItems.forEach(item => {
            let products = item.querySelectorAll(".product");
            if (products.length < 3) {
                pagination.querySelector(".pagination__show-more").click();
            }
        });
    }
}
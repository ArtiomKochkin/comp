export function wishlistConfiguration() {
    const wishlist = document.getElementById("wishlist");
    const wishlistItems = document.querySelectorAll(".account__product-list--wishlist");
    const pagination = wishlist.querySelector(".pagination");
    const buttonRemove = document.querySelectorAll(".product__addition-btn");

    buttonRemove.forEach(removeFromWishlist);

    function removeFromWishlist(item) {
        item.addEventListener("click", () => {
            let product = item.closest(".product");
            product.remove();
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
export function applyActions() {
    const numComparison = document.getElementById("comparisonNum");
    const numFavorites = document.getElementById("numFavorites");
    const numCartMobile = document.getElementById("numCartMobile");
    const numCart = document.getElementById("numCart");

    document.addEventListener("DOMContentLoaded", applyComparison);
    document.addEventListener("DOMContentLoaded", applyFavorites);
    document.addEventListener("DOMContentLoaded", applyCart(numCart));
    document.addEventListener("DOMContentLoaded", applyCart(numCartMobile));

    function applyComparison() {
        let comparisonItems = document.querySelectorAll(".header__comparison-item");
        let comparisonCounter = numComparison.closest(".header__actions-count");

        if (comparisonItems.length != 0) {
            comparisonCounter.classList.add("active");
            numComparison.innerText = comparisonItems.length;
        } else {
            comparisonCounter.classList.remove("active");
        }
    }

    function applyCart(num) {
        let cartCounter = num.closest(".header__actions-count");
        let cartSets = document.querySelectorAll(".card__set-products");
        let cartProducts = document.querySelectorAll(".cart__product");
        
        if (cartSets.length == 0 && cartProducts.length == 0) {
            cartCounter.classList.remove("active");
        } else if (cartSets.length != 0 || cartProducts.length != 0){
            cartCounter.classList.add("active");
            num.innerText = cartSets.length + cartProducts.length;
        }
    }

    function applyFavorites() {
        let favoritesCounter = numFavorites.closest(".header__actions-count");
        let accountPageURL = "../../account.html";
        let productsLength;

        fetch(accountPageURL)
            .then(response => response.text())
            .then(html => {
                let parser = new DOMParser();
                let doc = parser.parseFromString(html, "text/html");
                let products = doc.querySelectorAll(".product");
                productsLength = products.length - 4;
                
                if (productsLength != 0) {
                    favoritesCounter.classList.add("active");
                    numFavorites.innerText = productsLength;
                } else {
                    favoritesCounter.classList.remove("active");
                }
            })
            .catch(error => {
                console.error(error);
            }
        );
    }
}
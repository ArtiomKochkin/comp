export function sortProducts() {
    const productItems = document.querySelectorAll(".product__items");
    const select = document.querySelector(".select__element");

    select.addEventListener("change", () => {
        let selected = select.options[select.selectedIndex].value;

        switch (selected) {
            case "popularity" : {
                sortAndRenderProducts(sortByPopularity);
            } break;
            case "rating" : {
                sortAndRenderProducts(sortByRating);
            } break;
            case "high-price" : {
                sortAndRenderProducts(sortByHighPrice);
            } break;
            case "low-price" : {
                sortAndRenderProducts(sortByLowPrice);
            } break;
        }
    });
    document.addEventListener("DOMContentLoaded", sortAndRenderProducts(sortByRating));

    function sortByPopularity(items) {
        return Array.from(items).sort((a, b) => {
            let counterA = a.querySelector(".product__reviews-counter").innerText;
            let counterB = b.querySelector(".product__reviews-counter").innerText;
            return parseInt(counterB) - parseInt(counterA);
        });
    }

    function sortByRating(items) {
        return Array.from(items).sort((a, b) => {            
            function ratingConfiguration(element) {
                let ratingImages = element.querySelectorAll(".rating-img");
                let counter = 0;
                ratingImages.forEach(img => {
                    let imgSrc = img.getAttribute("src");
                    if (imgSrc == "./img/svg/rating-true.svg") { counter++; }
                });
                return counter;
            }

            return ratingConfiguration(b) - ratingConfiguration(a);
        });
    }

    function sortByHighPrice(items) {
        return Array.from(items).sort((a, b) => {
            let priceA = a.querySelector(".product__price").innerText;
            let priceB = b.querySelector(".product__price").innerText;
            console.log(priceA, priceB);
            return parseInt(priceB) - parseInt(priceA);
        });
    }

    function sortByLowPrice(items) {
        return Array.from(items).sort((a, b) => {
            let priceA = a.querySelector(".product__price").innerText;
            let priceB = b.querySelector(".product__price").innerText;
            return parseInt(priceA) - parseInt(priceB);
        });
    }

    function sortAndRenderProducts(sortFunction) {
        productItems.forEach(item => {
            const products = item.querySelectorAll(".product");
            const sortedProducts = sortFunction(products);
            item.innerHTML = "";

            sortedProducts.forEach(product => {
                item.append(product);
            });
        });
    }
}
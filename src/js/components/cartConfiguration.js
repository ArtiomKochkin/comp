export function cartManager() {
    const continueShopping = document.getElementById("continueShopping");
    const totalPrice = document.querySelectorAll(".cart__buy-total");
    const products = document.querySelectorAll(".cart-product");
    let sum = 0;

    continueShopping.addEventListener("click", closeCart);
    products.forEach(cartOperations);
    totalPrice.forEach(item => {
        item.innerText = sum;
    });

    function closeCart(event) {
        let modal = event.target.closest(".modal");
        let modalContent = modal.querySelector(".modal__content");

        modalContent.removeAttribute("style");
        setTimeout(() => {
            document.body.classList.remove("no-scroll");
            modal.classList.remove("show");
        }, 250);
    }

    function cartOperations(item) {
        let countProduct = item.querySelector(".input--cart");
        let countMinus = countProduct.previousElementSibling;
        let countPlus = countProduct.nextElementSibling;
        let bins = item.querySelectorAll(".cart__product-bin");
        let price = item.querySelector(".cart__product-cost");

        countPlus.addEventListener("click", () => {
            countProduct.value = +countProduct.value + 1;
            sum += +price.innerText;
            
            totalPrice.forEach(item => {
                item.innerText = sum;
            });
        });
        countMinus.addEventListener("click", () => {
            if (+countProduct.value > 1) {
                countProduct.value = +countProduct.value - 1;
                sum -= +price.innerText;
            
                totalPrice.forEach(item => {
                    item.innerText = sum;
                });
            }
        });

        bins.forEach(bin => {
            bin.addEventListener("click", () => {
                sum -= +countProduct.value * +price.innerText;
            
                totalPrice.forEach(item => {
                    item.innerText = sum;
                });
                bin.closest(".cart-product").remove();
            });
        }); 
        sum += +countProduct.value * +price.innerText;
    }
}
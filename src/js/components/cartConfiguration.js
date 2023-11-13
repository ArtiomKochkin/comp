export function cartManager() {
    const continueShopping = document.getElementById("continueShopping");
    const totalPrice = document.querySelectorAll(".cart__buy-total");
    const products = document.querySelectorAll(".cart-product");
    const buttons = document.querySelectorAll(".product__button");
    const cartCounter = document.querySelectorAll(".header__actions-num--cart");
    const cartProductsWrap = document.querySelector(".cart__products-wrap");
    let sum = 0;

    document.addEventListener("DOMContentLoaded", () => {
        continueShopping.addEventListener("click", closeCart);
        products.forEach(cartOperations);
        totalPrice.forEach(item => {
            item.innerText = sum;
        });
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

    function calculateCartCounter(product, operation) {
        cartCounter.forEach(item => {
            let counter = +item.innerText;
            if (operation == "add") {
                counter++;
                product.classList.add("cart");
            } else {
                counter--;
                product.classList.remove("cart");
            }
            item.innerText = counter;
        });
    }

    if (buttons.length != 0) {
        buttons.forEach(button => {
            button.addEventListener("click", () => {
                let product = button.closest(".product");
                let productInfo = {
                    id: product.getAttribute("data-product-id"),
                    imgSrc: product.querySelector(".product__img").getAttribute("src"),
                    imgAlt: product.querySelector(".product__img").getAttribute("alt"),
                    name: product.querySelector(".product__name").innerText,
                    price: product.querySelector(".product__price").innerText,
                };
                let productHTML = `
                <div class="cart__product cart-product" id="${productInfo.id}">
                    <div class="cart__product-img-box">
                        <img src="${productInfo.imgSrc}" alt="${productInfo.imgAlt}" class="cart__product-img" width="70" height="70">
                    </div>
                    <div class="cart__product-content">
                        <div class="cart__product-info">
                            <div class="cart__product-name">
                                ${productInfo.name}
                            </div>
                            <img src="../img/svg/bin-dark-12.svg" alt="" class="cart__product-bin cart__product-bin--mobile">
                        </div>
                        <div class="cart__product-footer">
                            <div class="cart__product-counter">
                                <div class="cart__product-action">
                                    <img src="../img/svg/minus.svg" alt="" class="cart__product-action-img">
                                </div>
                                <input type="text" class="input input--cart" value="1">
                                <div class="cart__product-action">
                                    <img src="../img/svg/plus.svg" alt="" class="cart__product-action-img">
                                </div>
                            </div>
                            <div class="cart__product-price">
                                <span class="cart__product-cost">${productInfo.price}</span> 
                                <span class="cart__product-price-curency">грн</span>
                            </div>
                        </div>
                        <div class="cart__product-bin-box">
                            <img src="../img/svg/bin-red.svg" alt="" class="cart__product-bin">
                        </div>
                    </div>
                </div>
                `;

                if (!product.classList.contains("cart")) {
                    calculateCartCounter(product, "add");
                    cartProductsWrap.insertAdjacentHTML("beforeend", productHTML);
                    button.classList.add("cart");
                } else {
                    calculateCartCounter(product, "remove");
                    document.getElementById(productInfo.id).remove();
                    button.classList.remove("cart");
                }
                let productsCart = document.querySelectorAll(".cart-product");
                productsCart.forEach(cartOperations); //проходится по всем нажатым кнопкам а надо 1 раз
            });
        });
    }
}
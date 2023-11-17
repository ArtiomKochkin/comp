export function cartManager() {
    const continueShopping = document.getElementById("continueShopping");
    const totalPrice = document.querySelectorAll(".cart__buy-total");
    const buttons = document.querySelectorAll(".product__button");
    const buttonsSet = document.querySelectorAll(".button--set");
    const cartCounter = document.querySelectorAll(".header__actions-num--cart");
    const cartProductsWrap = document.querySelector(".cart__products-wrap");
    let sum = 0;

    document.addEventListener("DOMContentLoaded", () => {
        continueShopping.addEventListener("click", closeCart);
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

    function cartOperations(id) {
        let item = document.getElementById(id);
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

        // sum += +countProduct.value * +price.innerText;
    }

    function calculateCartCounter(product, operation) {
        cartCounter.forEach(item => {
            let parentItem = item.closest(".header__actions-count");
            let counter = +item.innerText;

            if (!parentItem.classList.contains("active")) {
                parentItem.classList.add("active");
            }

            if (operation == "add") {
                counter++;
                product.classList.add("cart");
            } else {
                counter--;
                product.classList.remove("cart");
                if (counter == 0) {
                    parentItem.classList.remove("active");
                }
            }
            item.innerText = counter;
        });
    }

    function toggleProduct(button, product, productInfo, productHTML) {
        if (!product.classList.contains("cart")) {
            calculateCartCounter(product, "add");
            cartProductsWrap.insertAdjacentHTML("beforeend", productHTML);
            button.classList.add("cart");
            sum += +(productInfo.price);
            totalPrice.forEach(item => {
                item.innerText = sum;
            });
        } else {
            calculateCartCounter(product, "remove");
            document.getElementById(productInfo.id).remove();
            button.classList.remove("cart");
            sum -= +(productInfo.price);
            totalPrice.forEach(item => {
                item.innerText = sum;
            });
        }
        cartOperations(productInfo.id);
    }

    if (buttons.length != 0) {
        let product, productInfo, productHTML;
        buttons.forEach(button => {
            button.addEventListener("click", () => {
                product = button.closest(".product");
                productInfo = {
                    id: product.getAttribute("data-product-id"),
                    imgSrc: product.querySelector(".product__img").getAttribute("src"),
                    imgAlt: product.querySelector(".product__img").getAttribute("alt"),
                    name: product.querySelector(".product__name").innerText,
                    price: product.querySelector(".product__price").innerText,
                };
                productHTML = `
                <div class="cart__product cart-product cart-product-added" id="${productInfo.id}">
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
                toggleProduct(button, product, productInfo, productHTML);
            });
        });
        buttonsSet.forEach(button => {
            button.addEventListener("click", () => {
                product = button.closest(".cart__kit-card");
                productInfo = {
                    id: product.getAttribute("data-product-id"),
                    name_1: product.querySelectorAll(".cart__kit-product-name")[0].innerText,
                    name_2: product.querySelectorAll(".cart__kit-product-name")[1].innerText,
                    price_1: product.querySelectorAll(".product__price")[0].innerText,
                    price_2: product.querySelectorAll(".product__price")[1].innerText,
                    price: product.querySelector(".cart__kit-general-price").innerText,
                    imgSrc_1: product.querySelectorAll(".cart__kit-product-img")[0].getAttribute("src"),
                    imgAlt_1: product.querySelectorAll(".cart__kit-product-img")[0].getAttribute("alt"),
                    imgSrc_2: product.querySelectorAll(".cart__kit-product-img")[1].getAttribute("src"),
                    imgAlt_2: product.querySelectorAll(".cart__kit-product-img")[1].getAttribute("alt"),
                };
                productHTML = `
                    <div class="cart__set cart-product" id="${productInfo.id}">
                        <h6 class="cart__set-name">Комлект</h6>
                        <div class="card__set-products">
                            <div class="cart__set__product">
                                <div class="card__set-info">
                                    <img src="${productInfo.imgSrc_1}" alt="${productInfo.imgAlt_1}" class="card__set-img" width="70" height="70">
                                    <div class="cart__set-product-name">${productInfo.name_1}</div>
                                </div>
                                <div class="cart__product-price">
                                    ${productInfo.price_1} 
                                    <span class="cart__product-price-curency">грн</span>
                                </div>
                            </div>
                            <div class="cart__set__product">
                                <div class="card__set-info">
                                    <img src="${productInfo.imgSrc_2}" alt="${productInfo.imgAlt_2}" class="card__set-img" width="70" height="70">
                                    <div class="cart__set-product-name">${productInfo.name_2}</div>
                                </div>
                                <div class="cart__product-price">
                                    ${productInfo.price_2}  
                                    <span class="cart__product-price-curency">грн</span>
                                </div>
                            </div>
                        </div>
                        <div class="cart__product-footer cart__product-footer--set">
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
                                <span class="cart__product-cost">${productInfo.price} </span> 
                                <span class="cart__product-price-curency">грн</span>
                            </div>
                            <div class="cart__product-bin-box cart__product-bin-box--set">
                                <img src="../img/svg/bin-red.svg" alt="" class="cart__product-bin">
                            </div>
                        </div>
                    </div>
                `;
                toggleProduct(button, product, productInfo, productHTML);
            });
        });
    }
}
export function calculateOrderDetails() {
    const productsCount = document.getElementById("amountProducts");
    const wordEnding = document.getElementById("wordEnding");
    const priceProducts = document.getElementById("priceProducts");
    const shippingCost = document.getElementById("shippingCost");
    const totalCost = document.querySelectorAll(".totalCost");
    const orderDelivery = document.querySelectorAll(".order__method");
    const orderDeliveryRadio = document.getElementsByName("methods");
    const orderButton = document.getElementById("orderButton");
    const productsWrap = document.querySelector(".order__making-products");
    const body = document.body;
    const modalCart = document.getElementById("cartModal");
    const modalCartContent = modalCart.querySelector(".modal__content");
    let sum = 0;
    let count = 0;
    let shipping;

    orderDeliveryRadio.forEach(calculateShippingCost);
    orderButton.addEventListener("click", handleProducts);

    function handleProducts(event) {
        event.preventDefault();
        orderButton.closest(".modal").click();
        productsWrap.innerHTML = "";
        sum = 0;
        count = 0;
        
        let productsCart = document.querySelectorAll(".cart-product-added");
        if (productsCart.length > 0) {
            productsCart.forEach(item => {
                let itemInfo = {
                    imgSrc: item.querySelector(".cart__product-img").getAttribute("src"),
                    imgAlt: item.querySelector(".cart__product-img").getAttribute("alt"),
                    name: item.querySelector(".cart__product-name").innerText,
                    quantity: item.querySelector(".input--cart").value,
                    cost: item.querySelector(".cart__product-cost").innerText,
                };
                let itemHTML = `
                <div class="order__making-product">
                    <div class="order__making-product-img-box">
                        <img src="${itemInfo.imgSrc}" alt="${itemInfo.imgAlt}" class="order__making-product-img" width="70" height="70">
                    </div>
                    <div class="order__making-product-content">
                        <div class="order__making-product-up">
                            <div class="order__making-product-name">
                                ${itemInfo.name}
                            </div>
                            <img src="./img/svg/edit.svg" alt="" class="order__making-product-edit order__making-product-edit--icon">
                        </div>
                        <div class="order__making-product-info">
                            <div class="order__making-product-column">
                                <div class="order__making-product-desc">
                                    Количество
                                </div>
                                <div class="order__making-product-value">
                                    ${itemInfo.quantity}
                                </div>
                            </div>
                            <div class="order__making-product-column">
                                <div class="order__making-product-desc">
                                    Цена
                                </div>
                                <div class="order__price">
                                    <span class="order__price-product">${itemInfo.cost}</span>
                                    <span class="order__price-currency">
                                        грн.
                                    </span>
                                </div>
                            </div>
                            <div class="order__making-product-column">
                                <div class="order__making-product-desc">
                                    Сумма
                                </div>
                                <div class="order__price">
                                    <span class="order__price-sum">${itemInfo.quantity * itemInfo.cost}</span>
                                    <span class="order__price-currency">
                                        грн.
                                    </span>
                                </div>
                            </div>
                            <div class="order__making-product-edit">
                                <button class="order__making-product-button">Редактировать</button>
                            </div>
                        </div>
                    </div>
                </div>
                `;
                productsWrap.insertAdjacentHTML("beforeend", itemHTML);
                
            });
            let products = document.querySelectorAll(".order__making-product");
            let editOrder = document.querySelectorAll(".order__making-product-edit");
            calculateProductCount(products);
            calculateProductCost(products);
            calculateTotalCost();
            editOrder.forEach(showOrder);
        }
    }

    function calculateProductCount(products) {
        products.forEach(item => {
            let productCount = item.querySelector(".order__making-product-value");
            count += +productCount.innerText;
        });
        count = String(count);
        let countStr = count.split("");
        let lastChar = countStr[countStr.length - 1];
        switch (lastChar) {
            case "0" :
            case "5" :
            case "6" :
            case "7" :
            case "8" :
            case "9" : {
                wordEnding.innerText = "товаров";
            } break;
            case "1" : {
                wordEnding.innerText = "товар";
            } break;
            case "2" :
            case "3" :
            case "4" : {
                wordEnding.innerText = "товара";
            } break;            
        }
        productsCount.innerText = count;
    }

    function calculateProductCost(products) {
        products.forEach(item => {
            let productCount = item.querySelector(".order__making-product-value");
            let priceProduct = item.querySelector(".order__price-product");
            let sumProduct =  item.querySelector(".order__price-sum");

            sumProduct.innerText = +productCount.innerText * +priceProduct.innerText;
            sum += +sumProduct.innerText;
        });
        priceProducts.innerText = sum;
    }

    function calculateShippingCost(radio) {
        radio.addEventListener("change", () => {
            orderDelivery.forEach(item => {
                if (item.classList.contains("active")) {
                    shipping = item.querySelector(".order__method-price-span");
                    if (shipping.innerText == "Бесплатно") {
                        shipping = shipping.innerText;
                    } else {
                        shipping = +shipping.innerText + " грн.";
                    }
                }
            });
            shippingCost.innerText = shipping;
            calculateTotalCost();
        });
    }

    function calculateTotalCost() {
        totalCost.forEach(item => {
            if (shippingCost.innerText == "Бесплатно") {
                shipping = 0;
                item.innerText = +priceProducts.innerText + shipping;
            } else {
                item.innerText = +priceProducts.innerText + parseInt(shippingCost.innerText);
            }
        });
    }

    function showOrder(item) {
        item.addEventListener("click", () => {
            modalCart.classList.add("show");
            body.classList.add("no-scroll");
            setTimeout(() => {
                modalCartContent.style.opacity = "1";
            }, 1);
        });
    }
}
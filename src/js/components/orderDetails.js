export function calculateOrderDetails() {
    const productsCount = document.getElementById("amountProducts");
    const wordEnding = document.getElementById("wordEnding");
    const priceProducts = document.getElementById("priceProducts");
    const shippingCost = document.getElementById("shippingCost");
    const totalCost = document.querySelectorAll(".totalCost");
    const products = document.querySelectorAll(".order__making-product");
    const orderDelivery = document.querySelectorAll(".order__method");
    const orderDeliveryRadio = document.getElementsByName("methods");
    let sum = 0;
    let count = 0;

    document.addEventListener("DOMContentLoaded", calculateProductCount);
    document.addEventListener("DOMContentLoaded", calculateProductCost);
    document.addEventListener("DOMContentLoaded", calculateTotalCost);

    orderDeliveryRadio.forEach(calculateShippingCost);

    function calculateProductCount() {
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

    function calculateProductCost() {
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
            let shipping;
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
        });
    }

    function calculateTotalCost() {
        totalCost.forEach(item => {
            if (shippingCost.innerText == "Бесплатно") {
                let shipping = 0;
                item.innerText = +priceProducts.innerText + shipping;
            } else {
                item.innerText = +priceProducts.innerText + +shippingCost.innerText;
            }
        });
    }
}
export function comparisonManager() {
    const emptyPage = document.querySelector(".comparison__empty");
    const contentPage = document.querySelector(".comparison__content");
    const products = document.querySelectorAll(".comparison__content-product");
    const productsDetails = document.querySelectorAll(".comparison__content-main-product");
    const closeButtons = document.querySelectorAll(".comparison__content-close");
    const buttonAdd = document.getElementById("buttonAdd");
    const buttonClear = document.getElementById("buttonClear");
    const buttonClearPic = buttonClear.querySelector(".comparison__pic");
    const buttonAddPic = buttonAdd.querySelector(".comparison__pic");
    const comparisonHeaderCounter = document.querySelector(".header__actions-num");
    const comparisonPageCounter = document.querySelector(".comparison__counter");
    const comparisonHeaderItems = document.querySelectorAll(".header__comparison-item");
    let productCount = products.length;

    document.addEventListener("DOMContentLoaded", checkContent);
    buttonClear.addEventListener("click", removeList);
    closeButtons.forEach(closeItem);
    checkProductCount();

    function checkContent() {
        if (products.length == 0) {
            emptyPage.classList.add("show");
            contentPage.classList.add("hidden");
            buttonClear.classList.add("disabled");
            buttonClearPic.setAttribute("src", "./img/comparison/bin-disabled.svg");
            buttonAdd.classList.remove("disabled");
        } else {
            emptyPage.classList.remove("show");
            contentPage.classList.remove("hidden");
            buttonClear.classList.remove("disabled");
            buttonClearPic.setAttribute("src", "./img/comparison/bin.svg");
        }
    } 

    function removeList() {
        products.forEach(item => {
            item.remove();
        });
        productsDetails.forEach(item => {
            item.remove();
        })
        contentPage.classList.add("hidden");
        emptyPage.classList.add("show");
        buttonClear.classList.add("disabled");
        buttonClearPic.setAttribute("src", "./img/comparison/bin-disabled.svg");

        let random = Math.round(Math.random() + 1);
        comparisonHeaderItems[random].remove();
        --comparisonHeaderCounter.innerText;
        --comparisonPageCounter.innerText;
    }

    function checkProductCount(productCount = products.length) {
        switch (productCount) {
            case 0 : {
                contentPage.classList.add("hidden");
                emptyPage.classList.add("show");
                buttonClear.classList.add("disabled");
                buttonClearPic.setAttribute("src", "./img/comparison/bin-disabled.svg");

                let random = Math.round(Math.random() + 1);
                comparisonHeaderItems[random].remove();
                --comparisonHeaderCounter.innerText;
                --comparisonPageCounter.innerText;
            } break;
            case 4 : {
                buttonAdd.classList.add("disabled");
                buttonAddPic.setAttribute("src", "./img/comparison/add-disabled.svg");
                buttonAdd.addEventListener("click", event => {
                    event.preventDefault();
                });
            } break;
            default : {
                buttonAdd.classList.remove("disabled");
                buttonAddPic.setAttribute("src", "./img/comparison/add.svg");
            } break;
        }
    }

    function closeItem(item) {
        let product = item.closest(".comparison__content-product");
        let productID = product.getAttribute("data-comparison-product");
        let productDetails = document.getElementById(productID);

        item.addEventListener("click", () => {
            product.remove();
            productDetails.remove();
            --productCount;
            checkProductCount(productCount);
        });
        
    }
}
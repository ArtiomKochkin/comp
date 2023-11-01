export function showMore() {
    const buttons = document.querySelectorAll("[data-show-more]");
    const reviews = document.querySelectorAll(".product-page__feedback-item--main-tab");
    
    buttons.forEach(showTab);
    reviews.forEach(toggleReview);
    toggleDescription();

    function showTab(item) {
        item.addEventListener("click", () => {
            let itemID = item.getAttribute("data-show-more");
            let currentTab = document.querySelector(`[data-product-tab=${itemID}]`);

            window.scrollTo({
                top: 0,
                behavior: "instant"
            });
            currentTab.click();
        });
    }

    function toggleReview(item) {
        let text = item.querySelector(".product-page__feedback-text");
        let textContent = item.querySelector(".product-page__feedback-text-content");
        let showMore = item.querySelector(".product-page__feedback-show-more");

        if (textContent.scrollHeight < 206) {
            showMore.classList.add("hidden");
        } else {
            showMore.addEventListener("click", () => {
                if (!showMore.classList.contains("active")) {
                    showMore.classList.add("active");
                    showMore.textContent = "Скрыть";
                    text.style.height = text.scrollHeight + "px";
                } else {
                    showMore.classList.remove("active");
                    showMore.textContent = "Показать полностью";
                    text.style.height = "206px";
                }
            });
        }
    }

    function toggleDescription() {
        let text = document.querySelector(".product-page__description-content");
        let showMore = document.querySelector(".product-page__show-more");
        let showMoreText = document.querySelector(".product-page__show-more-text");
        let showMoreImg = document.querySelector(".product-page__show-more-img");

        showMore.addEventListener("click", () => {
            if (!showMore.classList.contains("active")) {
                showMore.classList.add("active");
                showMoreText.textContent = "Скрыть";
                showMoreImg.setAttribute("src", "./img/product/svg/arrow-up-blue-24.svg");
                text.style.height = text.scrollHeight + "px";
            } else {
                showMore.classList.remove("active");
                showMoreText.textContent = "Показать полностью";
                showMoreImg.setAttribute("src", "./img/product/svg/arrow-down-blue-24.svg");
                text.style.height = "306px";
            }
        });
    }
}
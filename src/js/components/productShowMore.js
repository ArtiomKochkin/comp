export function showMore() {
    const buttons = document.querySelectorAll("[data-show-more]");
    
    buttons.forEach(showTab);

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
}
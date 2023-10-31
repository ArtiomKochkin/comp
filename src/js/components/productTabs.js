export function toggleTabs() {
    const tabButtons = document.querySelectorAll("[data-product-tab]");
    const tabItems = document.querySelectorAll(".product-page__tab-content");

    tabButtons.forEach(onTabClick);

    function onTabClick(item) {
        item.addEventListener("click", () => {
            let tabId = item.getAttribute("data-product-tab");
            let currentTab = document.getElementById(tabId);

            if (!item.classList.contains("active")) {
                tabButtons.forEach(item => {
                    item.classList.remove("active");
                });
                tabItems.forEach(item => {
                    item.classList.remove("active");
                });
                item.classList.add("active");
                currentTab.classList.add("active");
            }
        });
    }
}
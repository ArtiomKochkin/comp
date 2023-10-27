export function toggleTabs() {
    const buttonTabs = document.querySelectorAll(".account__menu-item");
    const tabItems = document.querySelectorAll(".account__right-item");

    buttonTabs.forEach(onTabClick);

    function onTabClick(item) {
        item.addEventListener("click", () => {
            let tabID = item.getAttribute("data-tab");
            let currentTab = document.getElementById(tabID);
            
            if (!item.classList.contains("active")) {
                buttonTabs.forEach(btn => {
                    btn.classList.remove("active");
                });
                tabItems.forEach(tab => {
                    tab.classList.remove("active");
                });
                item.classList.add("active");
                currentTab.classList.add("active");
            }
        });
    }
}
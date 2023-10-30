export function historyConfiguration() {
    const historyItems = document.querySelectorAll(".account__history-preview");

    historyItems.forEach(historyAccordion);

    function historyAccordion(item) {
        item.addEventListener("click", () => {
            let historyItem = item.parentNode;
            let accordionIcon = item.querySelector(".account__history-toggle-img");
            if (historyItem.classList.contains("active")) {
                accordionIcon.setAttribute("src", "./img/svg/arrow/arrow-down-dark-24.svg");
            } else {
                accordionIcon.setAttribute("src", "./img/svg/arrow/arrow-up-dark-24.svg");
            }
            historyItem.classList.toggle("active");
        });
    }
}
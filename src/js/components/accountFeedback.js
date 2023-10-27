export function feedbackConfiguration() {
    const feedback = document.getElementById("feedback");
    const feedbackItems = document.querySelectorAll(".account__feedback-item");

    feedbackItems.forEach(feedbackAccordion);

    function feedbackAccordion(item) {
        item.addEventListener("click", () => {
            let accordionIcon = item.querySelector(".account__feedback-preview-toggle");
            if (item.classList.contains("active")) {
                accordionIcon.setAttribute("src", "./img/svg/arrow/arrow-down-dark-24.svg");
            } else {
                accordionIcon.setAttribute("src", "./img/svg/arrow/arrow-up-dark-24.svg");
            }
            item.classList.toggle("active");
        });
    }
}
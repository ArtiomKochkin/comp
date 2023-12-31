export function toggleComparisonList() {
    const comparisonButton = document.getElementById("comparisonButton");
    const comparisonList = document.getElementById("comparisonList");
    const comparisonItems = document.querySelectorAll(".header__comparison-item");
    const comparisonCounter = document.querySelector(".header__actions-num");
    const comparisonPageButton = document.querySelector(".comparison__icon--counter");
    const comparisonPageCounter = document.querySelector(".comparison__counter");

    comparisonButton.addEventListener("click", toggleComparison);
    (comparisonPageButton != null) ? (comparisonPageButton.addEventListener("click", toggleComparison)) : false;

    function toggleComparison() {
        let counter = +comparisonCounter.innerText;

        comparisonList.classList.toggle("show");
        removeComparisonItem();

        function removeComparisonItem() {
            comparisonItems.forEach(function(item) {
                let closeButton = item.querySelector(".header__comparison-icon");
                closeButton.addEventListener("click", () => {
                    item.remove();
                    counter--;
                    if (comparisonPageCounter != null) {
                        comparisonPageCounter.innerText = counter;
                    }
                    if (counter == 0) {
                        comparisonCounter.parentNode.classList.remove("active");
                        comparisonList.classList.remove("show");
                    } else {
                        comparisonCounter.innerText = counter;
                    }
                });
            });
        }
    }
}
export function filterProducts () {
    const filterLineItemClose = document.querySelectorAll(".filter__line-item-img");
    const buttonReset = document.querySelector(".filter__reset");

    let counterClose = filterLineItemClose.length / 2;

    filterLineItemClose.forEach(removeFilter);
    buttonReset.addEventListener("click", removeAllFilters);

    function removeFilter(close) {
        close.addEventListener("click", () => {
            let filterItem = close.closest(".filter__line-item");
            filterItem.remove();
            counterClose--;
            if (counterClose <= 0) {
                buttonReset.classList.add("hidden");
            }
        });
    }

    function removeAllFilters() {
        let filterLineItems = document.querySelectorAll(".filter__line-item");
        filterLineItems.forEach(item => {
            item.remove();
        });
        buttonReset.classList.add("hidden");
    }
}
export function filterProducts () {
    const filter = document.querySelector(".filter");
    const filterItem = document.querySelectorAll(".filter__item--characteristic");
    const filterLineItemClose = document.querySelectorAll(".filter__line-item-img");
    const buttonsReset = document.querySelectorAll(".filter__reset");
    const buttonClose = document.querySelector(".filter__close");
    const buttonOpen = document.getElementById("filterOpen");

    let counterClose = filterLineItemClose.length / 2;

    filterLineItemClose.forEach(removeFilter);
    filterItem.forEach(toggleItem);
    filterItem.forEach(showMore);
    buttonsReset.forEach(removeAllFilters);
    buttonOpen.addEventListener("click", () => {
        filter.classList.add("mobile");
    });
    buttonClose.addEventListener("click", () => {
        filter.classList.remove("mobile");
    });

    function removeFilter(close) {
        close.addEventListener("click", () => {
            let filterItem = close.closest(".filter__line-item");
            filterItem.remove();
            counterClose--;
            if (counterClose <= 0) {
                buttonsReset.forEach(item => {
                    item.classList.add("hidden");
                });
            }
        });
    }

    function removeAllFilters(item) {
        item.addEventListener("click", () => {
            let filterLineItems = document.querySelectorAll(".filter__line-item");
            filterLineItems.forEach(item => {
                item.remove();
            });
            item.classList.add("hidden");
        });

    }

    function toggleItem(item) {
        let title = item.querySelector(".filter__title");
        let content = item.querySelector(".filter__content");

        title.addEventListener("click", () => {
            if (!content.classList.contains("hidden")) {
                content.classList.add("hidden");
                title.style.background = 'url("../../img/svg/arrow/arrow-down-gray-16.svg") no-repeat 100% center';
            } else {
                content.classList.remove("hidden");
                title.style.background = 'url("../../img/svg/arrow/arrow-up-gray-16.svg") no-repeat 100% center';
            }
        });
    }

    function showMore(item) {
        let checboxes = item.querySelectorAll(".checkbox");

        if (checboxes.length > 5) {
            let buttonShowMore = item.querySelector(".filter__view-all");

            for (let i = 5; i < checboxes.length; i++) {
                checboxes[i].classList.add("hidden");
            }

            buttonShowMore.addEventListener("click", () => {
                if (!buttonShowMore.classList.contains("opened")) {
                    buttonShowMore.classList.add("opened");
                    buttonShowMore.innerText = "Скрыть";
                    for (let i = 5; i < checboxes.length; i++) {
                        checboxes[i].classList.remove("hidden");
                    }
                } else {
                    buttonShowMore.classList.remove("opened");
                    buttonShowMore.innerText = "Показать все";
                    for (let i = 5; i < checboxes.length; i++) {
                        checboxes[i].classList.add("hidden");
                    }
                }
            });
        }
    }
}
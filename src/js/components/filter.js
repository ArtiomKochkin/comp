export function filterProducts () {
    const filter = document.querySelector(".filter");
    const filterItem = document.querySelectorAll(".filter__item--characteristic");
    const filterLineList = document.querySelectorAll(".filter__line-list");
    const priceMin = document.getElementById("priceMin");
    const priceMax = document.getElementById("priceMax");
    const buttonsReset = document.querySelectorAll(".filter-reset");
    const buttonClose = document.querySelector(".filter__close");
    const buttonOpen = document.getElementById("filterOpen");
    const buttonFilterApply = document.getElementById("applyFilter");
    let rangeWidth, rangeValues;
    document.addEventListener("DOMContentLoaded", () => {
        rangeWidth = document.querySelector(".ui-slider-range");
        rangeValues = document.querySelectorAll(".ui-state-default");
    });

    filterItem.forEach(toggleItem);
    filterItem.forEach(showMore);
    buttonsReset.forEach(removeAllFilters);
    buttonFilterApply.addEventListener("click", applyFilter);
    buttonOpen.addEventListener("click", () => {
        filter.classList.add("mobile");
    });
    buttonClose.addEventListener("click", () => {
        filter.classList.remove("mobile");
    });

    function removeFilter() {
        const filterLineItems = document.querySelectorAll(".filter__line-item");

        if (filterLineItems != undefined) {
            let counter = filterLineItems.length / 2;

            filterLineItems.forEach(item => {
                let close = item.querySelector(".filter__line-item-img");
                
                close.addEventListener("click", () => {
                    let id = item.getAttribute("data-id");
                    let itemByID = document.getElementById(id);
                    let checkboxes = itemByID.querySelectorAll(".checkbox__input");
                    item.remove();
                    counter--;
                    filterLineItems.forEach(item2 => {
                        if (item2.dataset.id == id) {
                            item2.remove();
                        }
                    });

                    if (counter <= 0) {
                        buttonsReset.forEach(btn => {
                            btn.classList.add("hidden");
                        });
                        resetFilterSettings();
                    }

                    if (checkboxes != undefined) {
                        checkboxes.forEach(checkbox => {
                            checkbox.checked = false;
                        });
                    }
                    if (itemByID.id == "filterPrice") {
                        priceMin.value = "0";
                        priceMax.value = "15000";
                        rangeWidth.style.left = "0%";
                        rangeWidth.style.width = "100%";
                        rangeValues[0].style.left = "0%";
                        rangeValues[1].style.left = "100%";
                    }
                });
            });
        }
    }

    function removeAllFilters(item) {
        item.addEventListener("click", () => {
            let filterLineItems = document.querySelectorAll(".filter__line-item");
            
            filterLineItems.forEach(item => {
                item.remove();
            });

            resetFilterSettings();

            buttonsReset.forEach(btn => {
                btn.classList.add("hidden");
            });
        });
    }

    function resetFilterSettings() {
        priceMin.value = "0";
        priceMax.value = "15000";
        rangeWidth.style.left = "0%";
        rangeWidth.style.width = "100%";
        rangeValues[0].style.left = "0%";
        rangeValues[1].style.left = "100%";
        filterItem.forEach(item => {
            let characteristics = item.querySelectorAll(".checkbox__input");
            for (let characteristic of characteristics) {
                characteristic.checked = false;
            }
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

    function applyFilter() {
        let titlePrice = document.querySelector(".filter__title--without-arrow");
        let titlePriceValue = titlePrice.innerText;
        let id = titlePrice.closest(".filter__item").getAttribute("id");
        let priceMinValue = +priceMin.value;
        let priceMaxValue = +priceMax.value;
        let filterLineItems = document.querySelectorAll(".filter__line-item");
            
        if (filterLineItems != undefined) {
            filterLineItems.forEach(item => {
                item.remove();
            });
        }
        
        if (priceMinValue != 0 || priceMaxValue != 15000) {
            addFilter(titlePriceValue, id);
        }
        filterItem.forEach(item => {
            let titleItem = item.querySelector(".filter__title").innerText;
            let characteristics = item.querySelectorAll(".checkbox__input");
            let id = item.getAttribute("id");
            let checked = 0;

            for (let characteristic of characteristics) {
                if (characteristic.checked) {
                    checked++;
                }
            }
            if (checked > 0) {
                addFilter(titleItem, id);
            }
        });
        removeFilter();
    }

    function addFilter(title, id) {
        let lineItemHTML = `
            <li class="filter__line-item " data-id="${id}">
                <span class="filter__line-item-text">${title}</span>
                <img src="./img/filter/close.svg" alt="" class="filter__line-item-img">
            </li>
        `;
        filterLineList.forEach(item => {
            item.insertAdjacentHTML("beforeend", lineItemHTML);
        });

        buttonsReset.forEach(item => {
            item.classList.remove("hidden");
        });
    }
}
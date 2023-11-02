export function filterByCategories() {
    const filterItems = document.querySelectorAll(".filter__item--category");
    const buttonShowMore = document.getElementById("viewAllCategories");

    document.addEventListener("DOMContentLoaded", showMoreItems);
    filterItems.forEach(showMoreSubcategory);

    function showMoreItems() {
        if (filterItems.length > 4) {
            for (let i = 4; i < filterItems.length; i++) {
                filterItems[i].classList.add("hidden");
            }

            buttonShowMore.addEventListener("click", () => {
                if (!buttonShowMore.classList.contains("opened")) {
                    buttonShowMore.classList.add("opened");
                    buttonShowMore.innerText = "Скрыть";
                    buttonShowMore.style.background = 'url("../../img/svg/arrow/arrow-up-blue-12.svg") no-repeat 100% center';
                    for (let i = 4; i < filterItems.length; i++) {
                        filterItems[i].classList.remove("hidden");
                    }
                } else {
                    buttonShowMore.classList.remove("opened");
                    buttonShowMore.innerText = "Все категории";
                    buttonShowMore.style.background = 'url("../../img/svg/arrow/arrow-down-blue-12.svg") no-repeat 100% center';
                    for (let i = 4; i < filterItems.length; i++) {
                        filterItems[i].classList.add("hidden");
                    }
                }
            });
        }
    }

    function showMoreSubcategory(item) {
        let subcategories = item.querySelectorAll(".filter__category-item");
        let buttonShowMore = item.querySelector(".filter__view-all");

        if (subcategories.length > 3) {
            for (let i = 3; i < subcategories.length; i++) {
                subcategories[i].classList.add("hidden");
            }

            buttonShowMore.addEventListener("click", () => {
                if (!buttonShowMore.classList.contains("opened")) {
                    buttonShowMore.classList.add("opened");
                    buttonShowMore.innerText = "Скрыть";
                    buttonShowMore.style.background = 'url("../../img/svg/arrow/arrow-up-blue-12.svg") no-repeat 100% center';
                    for (let i = 3; i < subcategories.length; i++) {
                        subcategories[i].classList.remove("hidden");
                    }
                } else {
                    buttonShowMore.classList.remove("opened");
                    buttonShowMore.innerText = "Все категории";
                    buttonShowMore.style.background = 'url("../../img/svg/arrow/arrow-down-blue-12.svg") no-repeat 100% center';
                    for (let i = 3; i < subcategories.length; i++) {
                        subcategories[i].classList.add("hidden");
                    }
                }
            });
        }
    }
}
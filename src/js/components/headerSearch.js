export function handleSearch() {
    const searchButton = document.getElementById("searchButton");
    const catalogButton = document.getElementById("catalogButton");
    const searchInput  = searchButton.previousElementSibling;
    const searchImg = searchButton.querySelector(".header__search-img");

    if (window.innerWidth < 500) {
        searchButton.addEventListener("click", event => {
            if (!searchInput.classList.contains("search-active")) {
                searchInput.classList.add("search-active");
                catalogButton.classList.add("search-active");
            } else {
                if (event.target == searchImg) {
                    searchInput.classList.remove("search-active");
                    catalogButton.classList.remove("search-active");
                }
            }
        });
    }
}
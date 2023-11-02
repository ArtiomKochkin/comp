export function changeViewProducts() {
    const viewItems = document.querySelectorAll(".filter__view-item");

    viewItems.forEach(changeView);

    function changeView(item) {
        item.addEventListener("click", () => {
            viewItems.forEach(item => {
                item.classList.remove("active");
            });
            if (!item.classList.contains("active")) {
                item.classList.add("active");
            }
        });
    }
}
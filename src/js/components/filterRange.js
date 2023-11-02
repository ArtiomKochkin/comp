export function applyRange() {
    const range = document.querySelector(".filter__range");
    const priceMin = document.getElementById("priceMin");
    const priceMax = document.getElementById("priceMax");

    $(range).slider({
        range: true,
        min: 0,
        max: 15000,
        values: [0, 15000],
        slide: function(event, ui) {
            priceMin.value = ui.values[0];
            priceMax.value = ui.values[1];
        }
    });
}
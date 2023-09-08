// проверка поддержки webp, добавление соотв. классов для HTML
export function isWebp() {
    // проверка поддержки webp
    function testWebp(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    // добавление класса _webp или _no-webp для HTML
    testWebp(function (support) {
        if (support == true) {
            document.querySelector('body').classList.add('webp');
            }else{
            document.querySelector('body').classList.add('no-webp');
        }
    });
}
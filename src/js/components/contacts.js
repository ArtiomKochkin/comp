export function map() {
    ymaps.ready(init);

    function init() {
        let myMap = new ymaps.Map("map", {
            center: [48.466736, 35.049055],
            zoom: 12
        });

        myMap.geoObjects
            .add(new ymaps.Placemark([48.466736, 35.049055], {
                balloonContent: 'Интернет-магазин V-Comp. Ул. Европейская, 8',
                iconCaption: 'Интернет-магазин V-Comp'
            }, {
                preset: 'islands#icon',
                iconColor: '#0095b6',
                iconCaptionMaxWidth: '200'
            }));
    }
}
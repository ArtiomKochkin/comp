export function changeViewProducts() {
    const viewItems = document.querySelectorAll(".filter__view-item");
    const listView = document.getElementById("listView");
    const productItems = document.querySelectorAll(".product__items");

    viewItems.forEach(changeView);

    function changeView(item) {
        item.addEventListener("click", event => {
            viewItems.forEach(item => {
                item.classList.remove("active");
            });
            if (!item.classList.contains("active")) {
                item.classList.add("active");
                (event.currentTarget == listView) ? setListView() : setTableView(); 
            }
        });
    }

    function setListView() {
        productItems.forEach(productItem => {
            let products = productItem.querySelectorAll(".product--with-filter");
            
            products.forEach(item => {
                let productInfo = {
                    link: item.querySelector(".product__link").getAttribute("href"),
                    imgSrc: item.querySelector(".product__img").getAttribute("src"),
                    imgAlt: item.querySelector(".product__img").getAttribute("alt"),
                    name: item.querySelector(".product__name").innerText,
                    counterReviews: item.querySelector(".product__reviews-counter").innerText,
                    oldPrice: item.querySelector(".product__price-old").innerText,
                    price: item.querySelector(".product__price").innerText,
                    visibilityOldPrice: item.querySelector(".product__price-old").getAttribute("class"),
                    visibilityPrice: item.querySelector(".product__price-actual").getAttribute("class"),
                };  
                let productHTML = `
                    <div class="product product--with-filter list">
                    <a href="${productInfo.link}" class="product__link"></a>
                    <div class="product__header">
                        <div class="product__new active">Новинка</div>
                        <div class="product__actions">
                            <img src="./img/svg/comparison.svg" alt="" class="product__icon">
                            <img src="./img/svg/favorite.svg" alt="" class="product__icon">
                        </div>
                    </div>
                    <div class="product__main">
                        <div class="product__img-box">
                            <img src="${productInfo.imgSrc}" alt="${productInfo.imgAlt}" class="product__img">
                        </div> 
                        <div class="product__right">
                            <div class="product__line">
                                <div class="product__name">
                                    ${productInfo.name}
                                </div>
                                <div class="product__number">
                                    Код товара: 1234567890
                                </div>
                            </div>
                            <div class="product__row">
                                <div class="product__content">
                                    <div class="product__reviews">
                                        <div class="rating">
                                            <div class="rating-item">
                                                <img src="./img/svg/rating-true.svg" alt="" class="rating-img">
                                            </div>
                                            <div class="rating-item">
                                                <img src="./img/svg/rating-true.svg" alt="" class="rating-img">
                                            </div>
                                            <div class="rating-item">
                                                <img src="./img/svg/rating-true.svg" alt="" class="rating-img">
                                            </div>
                                            <div class="rating-item">
                                                <img src="./img/svg/rating-true.svg" alt="" class="rating-img">
                                            </div>
                                            <div class="rating-item">
                                                <img src="./img/svg/rating-true.svg" alt="" class="rating-img">
                                            </div>
                                        </div>
                                        Отзывов: <span class="product__reviews-counter">${productInfo.counterReviews}</span>
                                        <div class="product__actions product__actions--rating">
                                            <img src="./img/svg/comparison.svg" alt="" class="product__icon">
                                            <img src="./img/svg/favorite.svg" alt="" class="product__icon">
                                        </div>
                                    </div>
                                    <div class="product__info">
                                        <h6 class="product__info-title">Характеристики</h6>
                                        <div class="product__info-content">
                                            <div class="product__info-item">
                                                <div class="product__info-feature">Форм-фактор</div>
                                                <div class="product__info-value">Micro-ATX</div>
                                            </div>
                                            <div class="product__info-item">
                                                <div class="product__info-feature">Сокет</div>
                                                <div class="product__info-value">LGA 1700</div>
                                            </div>
                                            <div class="product__info-item">
                                                <div class="product__info-feature">Количество слотов памяти</div>
                                                <div class="product__info-value">2</div>
                                            </div>
                                            <div class="product__info-item">
                                                <div class="product__info-feature">Тип поддерживаемой памяти</div>
                                                <div class="product__info-value">DDR4</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="product__footer">
                                    <div class="product__prices">
                                        <div class="${productInfo.visibilityOldPrice}">${productInfo.oldPrice}</div>
                                        <div class="${productInfo.visibilityPrice}">
                                            <span class="product__price">${productInfo.price}</span> грн.
                                        </div>
                                    </div>
                                    <button class="product__button" type="button">
                                        <span class="product__button-text">Купить</span>
                                        <img src="./img/svg/cart-product.svg" alt="" class="product__button-img">
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `;

                item.remove();
                productItem.insertAdjacentHTML("beforeend", productHTML);
            });
        });
    }

    function setTableView() {
        productItems.forEach(productItem => {
            let products = productItem.querySelectorAll(".product--with-filter");

            products.forEach(item => {
                let productInfo = {
                    link: item.querySelector(".product__link").getAttribute("href"),
                    imgSrc: item.querySelector(".product__img").getAttribute("src"),
                    imgAlt: item.querySelector(".product__img").getAttribute("alt"),
                    name: item.querySelector(".product__name").innerText,
                    counterReviews: item.querySelector(".product__reviews-counter").innerText,
                    oldPrice: item.querySelector(".product__price-old").innerText,
                    price: item.querySelector(".product__price").innerText,
                    visibilityOldPrice: item.querySelector(".product__price-old").getAttribute("class"),
                    visibilityPrice: item.querySelector(".product__price-actual").getAttribute("class"),
                }; 
                let productHTML = `
                    <div class="product product--with-filter">
                    <a href="${productInfo.link}" class="product__link"></a>
                    <div class="product__header">
                        <div class="product__new active">Новинка</div>
                        <div class="product__actions">
                            <img src="./img/svg/comparison.svg" alt="" class="product__icon">
                            <img src="./img/svg/favorite.svg" alt="" class="product__icon">
                        </div>
                    </div>
                    <div class="product__main">
                        <img src="${productInfo.imgSrc}" alt="${productInfo.imgAlt}" class="product__img">
                        <div class="product__name">
                            ${productInfo.name}
                        </div>
                        <div class="product__reviews">
                            <div class="rating">
                                <div class="rating-item">
                                    <img src="./img/svg/rating-true.svg" alt="" class="rating-img">
                                </div>
                                <div class="rating-item">
                                    <img src="./img/svg/rating-true.svg" alt="" class="rating-img">
                                </div>
                                <div class="rating-item">
                                    <img src="./img/svg/rating-true.svg" alt="" class="rating-img">
                                </div>
                                <div class="rating-item">
                                    <img src="./img/svg/rating-true.svg" alt="" class="rating-img">
                                </div>
                                <div class="rating-item">
                                    <img src="./img/svg/rating-true.svg" alt="" class="rating-img">
                                </div>
                            </div>
                            Отзывов: <span class="product__reviews-counter">${productInfo.counterReviews}</span>
                            <div class="product__actions product__actions--rating">
                                <img src="./img/svg/comparison.svg" alt="" class="product__icon">
                                <img src="./img/svg/favorite.svg" alt="" class="product__icon">
                            </div>
                        </div>
                    </div>
                    <div class="product__footer">
                        <div class="product__prices">
                            <div class="${productInfo.visibilityOldPrice}">${productInfo.oldPrice}</div>
                            <div class="${productInfo.visibilityPrice}">
                                <span class="product__price ">${productInfo.price}</span> грн.
                            </div>
                        </div>
                        <button class="product__button" type="button">
                            <span class="product__button-text">Купить</span>
                            <img src="./img/svg/cart-product.svg" alt="" class="product__button-img">
                        </button>
                    </div>
                    <div class="product__info">
                        <h6 class="product__info-title">Характеристики</h6>
                        <div class="product__info-content">
                            <div class="product__info-item">
                                <div class="product__info-feature">Форм-фактор</div>
                                <div class="product__info-value">Micro-ATX</div>
                            </div>
                            <div class="product__info-item">
                                <div class="product__info-feature">Сокет</div>
                                <div class="product__info-value">LGA 1700</div>
                            </div>
                            <div class="product__info-item">
                                <div class="product__info-feature">Количество слотов памяти</div>
                                <div class="product__info-value">2</div>
                            </div>
                            <div class="product__info-item">
                                <div class="product__info-feature">Тип поддерживаемой памяти</div>
                                <div class="product__info-value">DDR4</div>
                            </div>
                        </div>
                    </div>
                </div>
                `;

                item.remove();
                productItem.insertAdjacentHTML("beforeend", productHTML);
            });
        });
    }
}
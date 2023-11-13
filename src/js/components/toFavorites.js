export function addToFavorites() {
    // const buttonsFav = document.querySelectorAll(".product__icon-favorites");
    // const numFavorites = document.getElementById("numFavorites");

    // buttonsFav.forEach(onClick);

    // function onClick(button) {
    //     button.addEventListener("click", () => {
    //         let product = button.closest(".product");
    //         let productID = product.getAttribute("data-product-id");
    //         addToWishlist(productID);
    //     });      
    // }
    
    // function addToWishlist(id) {
    //     const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    //     if (!wishlist.includes(id)) {
    //         wishlist.push(id);
    //         localStorage.setItem("wishlist", JSON.stringify(wishlist));
    //         +(numFavorites.innerText)++;
    //         console.log("add");
    //     } else {

    //         console.log("exist");
    //     }
    // }

}

// function updateWishlist(product) {
//     fetch(accountPageURL)
//         .then(response => response.text())
//         .then(html => {
//             let parser = new DOMParser();
//             let doc = parser.parseFromString(html, "text/html");
//             let wishlistWrap = doc.querySelector(".account__product-list--wishlist");

//             if (!product.classList.contains("favorite")) {
//                 let productInfo = {
//                     link: product.querySelector(".product__link").getAttribute("href"),
//                     imgSrc: product.querySelector(".product__img").getAttribute("src"),
//                     imgAlt: product.querySelector(".product__img").getAttribute("alt"),
//                     name: product.querySelector(".product__name").innerText,
//                     counterReviews: product.querySelector(".product__reviews-counter").innerText,
//                     oldPrice: product.querySelector(".product__price-old").innerText,
//                     price: product.querySelector(".product__price").innerText,
//                     visibilityOldPrice: product.querySelector(".product__price-old").getAttribute("class"),
//                     visibilityPrice: product.querySelector(".product__price-actual").getAttribute("class"),
//                 };  
//                 let productHTML = `
//                     <div class="product product--with-filter list">
//                     <a href="${productInfo.link}" class="product__link"></a>
//                     <div class="product__header">
//                         <div class="product__new active">Новинка</div>
//                     </div>
//                     <div class="product__main">
//                         <div class="product__img-box">
//                             <img src="${productInfo.imgSrc}" alt="${productInfo.imgAlt}" class="product__img">
//                         </div> 
//                         <div class="product__right">
//                             <div class="product__line">
//                                 <div class="product__name">
//                                     ${productInfo.name}
//                                 </div>
//                                 <div class="product__number">
//                                     Код товара: 1234567890
//                                 </div>
//                             </div>
//                             <div class="product__row">
//                                 <div class="product__content">
//                                     <div class="product__reviews">
//                                         <div class="rating">
//                                             <div class="rating-item">
//                                                 <img src="./img/svg/rating-true.svg" alt="" class="rating-img">
//                                             </div>
//                                             <div class="rating-item">
//                                                 <img src="./img/svg/rating-true.svg" alt="" class="rating-img">
//                                             </div>
//                                             <div class="rating-item">
//                                                 <img src="./img/svg/rating-true.svg" alt="" class="rating-img">
//                                             </div>
//                                             <div class="rating-item">
//                                                 <img src="./img/svg/rating-true.svg" alt="" class="rating-img">
//                                             </div>
//                                             <div class="rating-item">
//                                                 <img src="./img/svg/rating-true.svg" alt="" class="rating-img">
//                                             </div>
//                                         </div>
//                                         Отзывов: <span class="product__reviews-counter">${productInfo.counterReviews}</span>
//                                         <div class="product__actions product__actions--rating">
//                                             <img src="./img/svg/comparison.svg" alt="" class="product__icon">
//                                         </div>
//                                     </div>
//                                     <div class="product__info">
//                                         <h6 class="product__info-title">Характеристики</h6>
//                                         <div class="product__info-content">
//                                             <div class="product__info-item">
//                                                 <div class="product__info-feature">Форм-фактор</div>
//                                                 <div class="product__info-value">Micro-ATX</div>
//                                             </div>
//                                             <div class="product__info-item">
//                                                 <div class="product__info-feature">Сокет</div>
//                                                 <div class="product__info-value">LGA 1700</div>
//                                             </div>
//                                             <div class="product__info-item">
//                                                 <div class="product__info-feature">Количество слотов памяти</div>
//                                                 <div class="product__info-value">2</div>
//                                             </div>
//                                             <div class="product__info-item">
//                                                 <div class="product__info-feature">Тип поддерживаемой памяти</div>
//                                                 <div class="product__info-value">DDR4</div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div class="product__footer">
//                                     <div class="product__prices">
//                                         <div class="${productInfo.visibilityOldPrice}">${productInfo.oldPrice}</div>
//                                         <div class="${productInfo.visibilityPrice}">
//                                             <span class="product__price">${productInfo.price}</span> грн.
//                                         </div>
//                                     </div>
//                                     <button class="product__button" type="button">
//                                         <span class="product__button-text">Купить</span>
//                                         <img src="./img/svg/cart-product.svg" alt="" class="product__button-img">
//                                     </button>
//                                 </div>
//                             </div>
//                             <button class="product__addition-btn" type="button">Удалить из списка</button>
//                         </div>
//                     </div>
//                 </div>
//                 `;
//                 wishlistWrap.insertAdjacentHTML("afterbegin", productHTML);
//             }
//         })
//         .catch(error => {
//             console.error(error);
//         }
//     );
// }
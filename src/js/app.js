import * as functions from "./modules/functions.js";
import * as menu from "./components/menu.js";
import * as menuContent from "./components/menuContent.js";
import * as catalog from "./components/catalog.js";
import * as modalGeneral from "./components/modalGeneral.js";
import * as comparisonHeader from "./components/comparisonHeader.js";
import * as contacts from "./components/contacts.js";
import * as sliderPromotion from "./components/sliderPromotion.js";
import * as sliderIntro from "./components/sliderIntro.js";
import * as sliderReviews from "./components/sliderReviews.js";
import * as sliderProduct from "./components/sliderProduct.js";
import * as pagination from "./components/pagination.js";
import * as countdown from "./components/countdown.js";

functions.isWebp();
menu.toggleMenu();
menuContent.menuContent();
comparisonHeader.toggleComparisonList();
modalGeneral.toggleModalGeneral();
catalog.toggleCatalog();

switch (window.location.pathname) {
    case "/index.html" : {   
        sliderIntro.initSlider();
        sliderReviews.initSlider();
    } break;
    case "/contacts.html" : {
        contacts.map();
    } break;
    case "/promotion.html" : {
        sliderPromotion.initSlider();
    } break;
    case "/product.html" : {
        let pages = document.querySelectorAll(".product-page__feedback-items"); 
        pagination.initPagination(pages);
        sliderProduct.initSlider();
    } break;
    case "/news.html" : {
        let pages = document.querySelectorAll(".news__wrap"); 
        pagination.initPagination(pages);
    } break;
    case "/promo.html" : {
        let pages = document.querySelectorAll(".product__items"); 
        pagination.initPagination(pages);
        countdown.initCountdown();
    } break;
    case "/products.html" : {
        let pages = document.querySelectorAll(".product__items"); 
        pagination.initPagination(pages);
    } break;
    case "/subcategory.html" : {
        let pages = document.querySelectorAll(".product__items"); 
        pagination.initPagination(pages);
    } break;
    case "/search.html" : {
        let pages = document.querySelectorAll(".product__items"); 
        pagination.initPagination(pages);
    } break;
}
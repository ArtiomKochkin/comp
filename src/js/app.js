import * as functions from "./modules/functions.js";
import * as menu from "./components/menu.js";
import * as menuContent from "./components/menuContent.js";
import * as catalog from "./components/catalog.js";
import * as modal from "./components/modal.js";
import * as comparisonHeader from "./components/comparisonHeader.js";
import * as sliderPromotion from "./components/sliderPromotion.js";
import * as sliderIntro from "./components/sliderIntro.js";
import * as sliderReviews from "./components/sliderReviews.js";
import * as sliderProduct from "./components/sliderProduct.js";
import * as sliderCart from "./components/sliderCart.js";
import * as pagination from "./components/pagination.js";
import * as countdown from "./components/countdown.js";
import * as orderConfiguration from "./components/orderConfiguration.js";
import * as orderDetails from "./components/orderDetails.js";
import * as cartConfiguration from "./components/cartConfiguration.js";
import * as comparisonConfiguration from "./components/comparisonConfiguration.js";
import * as accountTabs from "./components/accountTabs.js";
import * as accountWishlist from "./components/accountWishlist.js";
import * as accountFeedback from "./components/accountFeedback.js";
import * as accountHistory from "./components/accountHistory.js";

functions.isWebp();
menu.toggleMenu();
menuContent.menuContent();
comparisonHeader.toggleComparisonList();
modal.toggleModal();
catalog.toggleCatalog();
cartConfiguration.cartManager();
sliderCart.initSlider();

switch (window.location.pathname) {
    case "/index.html" : {   
        sliderIntro.initSlider();
        sliderReviews.initSlider();
    } break;
    case "/promotion.html" : {
        sliderPromotion.initSlider();
    } break;
    case "/order.html" : {
        orderConfiguration.makeOrder();
        orderDetails.calculateOrderDetails();
    } break;
    case "/comparison.html" : {
        comparisonConfiguration.comparisonManager();
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
    case "/account.html" : {
        let wishlistPages =  document.querySelectorAll(".account__product-list--wishlist");
        let viewedPages =  document.querySelectorAll(".account__product-list--viewed");
        let feedbackPages =  document.querySelectorAll(".account__feedback-list");
        let pages = [wishlistPages, viewedPages, feedbackPages];
        pages.forEach(function(page) {
            pagination.initPagination(page);
        });
        accountTabs.toggleTabs();
        accountWishlist.wishlistConfiguration();
        accountFeedback.feedbackConfiguration();
        accountHistory.historyConfiguration();
    } break;
}
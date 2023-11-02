import * as functions from "./modules/functions.js";
import * as menu from "./components/menu.js";
import * as menuContent from "./components/menuContent.js";
import * as catalog from "./components/catalog.js";
import * as modal from "./components/modal.js";
import * as comparisonHeader from "./components/comparisonHeader.js";
import * as headerActions from "./components/headerActions.js";
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
import * as accountPersonalDataModal from "./components/accountPersonalDataModal.js";
import * as productTabs from "./components/productTabs.js";
import * as productModal from "./components/productModal.js";
import * as productShowMore from "./components/productShowMore.js";
import * as productReviews from "./components/productReviews.js";
import * as sliderImages from "./components/sliderImages.js";
import * as favorites from "./components/favorites.js";
import * as goToFavorites from "./components/goToFavorites.js";
import * as filter from "./components/filter.js";
import * as sort from "./components/sort.js";
import * as filterView from "./components/filterView.js";
import * as filterRange from "./components/filterRange.js";
import * as filterCategories from "./components/filterCategories.js";

functions.isWebp();
menu.toggleMenu();
menuContent.menuContent();
comparisonHeader.toggleComparisonList();
headerActions.applyActions();
modal.toggleModal();
catalog.toggleCatalog();
cartConfiguration.cartManager();
sliderCart.initSlider();
favorites.openFavorites();

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
        sliderImages.initSlider();
        productTabs.toggleTabs();
        productModal.showModalWindows();
        productShowMore.showMore();
        productReviews.likeConfiguration();
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
        filter.filterProducts();
        sort.sortProducts();
        filterView.changeViewProducts();
        filterRange.applyRange();
    } break;
    case "/search.html" : {
        let pages = document.querySelectorAll(".product__items"); 
        pagination.initPagination(pages);
        filter.filterProducts();
        sort.sortProducts();
        filterView.changeViewProducts();
        filterRange.applyRange();
        filterCategories.filterByCategories();
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
        goToFavorites.onClick();
        accountWishlist.wishlistConfiguration();
        accountFeedback.feedbackConfiguration();
        accountHistory.historyConfiguration();
        accountPersonalDataModal.accountModal();
    } break;
}
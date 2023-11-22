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
import * as accountAvatar from "./components/accountAvatar.js";
import * as productTabs from "./components/productTabs.js";
import * as productModal from "./components/productModal.js";
import * as productShowMore from "./components/productShowMore.js";
import * as productReviews from "./components/productReviews.js";
import * as sliderImages from "./components/sliderImages.js";
import * as sliderProductKit from "./components/sliderProductKit.js";
import * as favorites from "./components/favorites.js";
import * as goToFavorites from "./components/goToFavorites.js";
import * as filter from "./components/filter.js";
import * as sort from "./components/sort.js";
import * as filterView from "./components/filterView.js";
import * as filterRange from "./components/filterRange.js";
import * as filterCategories from "./components/filterCategories.js";
import * as orderForm from "./components/orderForm.js";
import * as form from "./components/form.js";
import * as accountRating from "./components/accountRating.js";
import * as password from "./components/password.js";
import * as toFavorites from "./components/toFavorites.js";
import * as wishlist from "./components/wishlist.js";

functions.isWebp();
menu.toggleMenu();
menuContent.menuContent();
headerActions.applyActions();
modal.toggleModal();
catalog.toggleCatalog();
cartConfiguration.cartManager();
favorites.openFavorites();
sliderCart.initSlider();
// comparisonHeader.toggleComparisonList();
// toFavorites.addToFavorites();

switch (true) {
    // данный код полезен только если проект запущен в режиме разработки
    // case "/" : {
    //     sliderIntro.initSlider();
    //     sliderReviews.initSlider();
    // }
    case window.location.pathname.includes("/index.html") : {
        sliderIntro.initSlider();
        sliderReviews.initSlider();
    } break;
    case window.location.pathname.includes("/promotion.html")  : {
        sliderPromotion.initSlider();
    } break;
    case window.location.pathname.includes("/order.html")  : {
        orderConfiguration.makeOrder();
        orderDetails.calculateOrderDetails();
        orderForm.checkOrderData();
    } break;
    case window.location.pathname.includes("/comparison.html")  : {
        // comparisonConfiguration.comparisonManager();
    } break;
    case window.location.pathname.includes("/product.html")  : {
        let pages = document.querySelectorAll(".product-page__feedback-items"); 
        pagination.initPagination(pages);
        sliderProduct.initSlider();
        sliderImages.initSlider();
        sliderProductKit.initSlider();
        productTabs.toggleTabs();
        productModal.showModalWindows();
        productShowMore.showMore();
        productReviews.likeConfiguration();
        form.checkAccountData();
    } break;
    case window.location.pathname.includes("/news.html")  : {
        let pages = document.querySelectorAll(".news__wrap"); 
        pagination.initPagination(pages);
    } break;
    case window.location.pathname.includes("/promo.html")  : {
        let pages = document.querySelectorAll(".product__items"); 
        pagination.initPagination(pages);
        countdown.initCountdown();
        filter.filterProducts();
        sort.sortProducts();
        filterView.changeViewProducts();
        filterRange.applyRange();
        filterCategories.filterByCategories();
    } break;
    case window.location.pathname.includes("/products.html")  : {
        let pages = document.querySelectorAll(".product__items"); 
        pagination.initPagination(pages);
        filter.filterProducts();
        sort.sortProducts();
        filterView.changeViewProducts();
        filterRange.applyRange();
        filterCategories.filterByCategories();
    } break;
    case window.location.pathname.includes("/subcategory.html")  : {
        let pages = document.querySelectorAll(".product__items"); 
        pagination.initPagination(pages);
        filter.filterProducts();
        sort.sortProducts();
        filterView.changeViewProducts();
        filterRange.applyRange();
    } break;
    case window.location.pathname.includes("/search.html")  : {
        let pages = document.querySelectorAll(".product__items"); 
        pagination.initPagination(pages);
        filter.filterProducts();
        sort.sortProducts();
        filterView.changeViewProducts();
        filterRange.applyRange();
        filterCategories.filterByCategories();
    } break;
    case window.location.pathname.includes("/account.html")  : {
        password.switchVisibility();
        accountRating.chooseRating();
        accountTabs.toggleTabs();
        goToFavorites.onClick();
        accountWishlist.wishlistConfiguration();
        accountFeedback.feedbackConfiguration();
        accountHistory.historyConfiguration();
        accountPersonalDataModal.accountModal();
        accountAvatar.chooseAvatar();
        form.checkAccountData();
        // wishlist.insertProductsToWishlist();
    } break;
    default : {
        sliderIntro.initSlider();
        sliderReviews.initSlider();
    }
}
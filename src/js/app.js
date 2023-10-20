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
        sliderProduct.initSlider();
    }
}
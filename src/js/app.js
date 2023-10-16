import * as functions from "./modules/functions.js";
import * as menu from "./components/menu.js";
import * as menuContent from "./components/menuContent.js";
import * as catalog from "./components/catalog.js";
import * as modalGeneral from "./components/modalGeneral.js";
import * as comparisonHeader from "./components/comparisonHeader.js";
import * as header from "./components/header.js";

functions.isWebp();
menu.toggleMenu();
menuContent.menuContent();
header.scrollHeader();
comparisonHeader.toggleComparisonList();
modalGeneral.toggleModalGeneral();
catalog.toggleCatalog();
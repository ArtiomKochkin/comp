export function toggleCatalog() {
    const body = document.body;
    const catalog = document.querySelector(".header__catalog");
    const catalogButton = document.getElementById("catalogButton");
    const catalogButtonIntro = document.querySelectorAll(".intro__slider-btn");
    const catalogButtonComparison = document.querySelector(".comparison__empty-button");
    const catalogWrap = document.querySelector(".header__catalog-wrap");
    const catalogClose = document.querySelector(".catalog__close");
    const catalogItems = document.querySelectorAll(".catalog__item");
    
    catalogWrap.addEventListener("click", closeCatalog);
    catalogClose.addEventListener("click", closeCatalog);
    (catalogButtonComparison != null) ? (catalogButtonComparison.addEventListener("click", showCatalog)) : false;
    catalogButton.addEventListener("click", () => {
        (!catalogWrap.classList.contains("show")) ? showCatalog() : closeCatalog();
    });
    if (catalogButtonIntro.length != 0) {
        catalogButtonIntro.forEach(item => {
            item.addEventListener("click", showCatalog);
        });
    }
    
    function showCatalog() {
        catalog.addEventListener("click", event => {
            event.stopPropagation();
        });
        catalogWrap.classList.add("show");
        body.classList.add("no-scroll");
        setTimeout(() => {
            catalog.style.opacity = "1";
        }, 10);
    }

    function closeCatalog() {
        catalogWrap.classList.remove("show");
        body.classList.remove("no-scroll");
        setTimeout(() => {
            catalog.style.opacity = "0";
        }, 100);
    }

    if (window.innerWidth <= 768) {
        catalogItems.forEach(function(item) {
            item.addEventListener("click", event => {
                let arrow = item.querySelector(".catalog__arrow");
                let catalogContent = item.querySelector(".catalog__content");
                let heightContent = catalogContent.offsetHeight;
                let target = event.target;

                if (catalogContent.style.display != "flex") {
                    showCatalogContent();
                } else if (target.classList.contains("catalog__title")) {
                    let catalogList = target.nextElementSibling;
                    let catalogLink = target.previousElementSibling;
                    let columnItem = target.parentNode;
                    
                    if (catalogList.style.display != "block") {
                        catalogList.style.display = "block";
                        catalogLink.classList.add("hidden");
                        columnItem.style.background = 'url("../img/svg/arrow-down.svg") 100% 0% no-repeat';
                        catalog.style.minHeight = (catalog.offsetHeight + catalogList.offsetHeight) + "px";
                    } else {
                        catalogList.style.display = "none";
                        catalogLink.classList.remove("hidden");
                        columnItem.style.background = 'url("../img/svg/arrow-right.svg") 100% 0% no-repeat';
                        catalog.style.minHeight = (catalog.offsetHeight - catalogList.offsetHeight) + "px";
                    }
                } else {
                    closeCatalogContent();
                }

                function showCatalogContent() {
                    arrow.setAttribute("src", "./img/svg/arrow-down.svg");
                    catalogContent.style.display = "flex";
                    catalog.style.minHeight = (catalog.offsetHeight + heightContent) + "px"; 
                }
                function closeCatalogContent() {
                    arrow.setAttribute("src", "./img/svg/arrow-right.svg");
                    catalogContent.style.display = "none";
                    catalog.style.minHeight = (catalog.offsetHeight - heightContent) + "px"; 
                }
            });
        });
    }
}
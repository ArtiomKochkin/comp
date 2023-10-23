export function initPagination() {
    const pagination = document.querySelector(".pagination");
    const buttonShowMore = document.querySelector(".pagination__show-more");
    const buttonPrev = document.querySelector(".pagination__link-page--prev");
    const buttonNext = document.querySelector(".pagination__link-page--next");
    const pagintationItems = document.querySelectorAll(".news__wrap");  // !!!!!!!!!!!!!!!!!!!
    const paginationLinks = document.querySelectorAll(".pagination__link--active");
    const lastLink = document.querySelector(".pagination__link--last");
    let i = 0;

    pagintationItems[i].classList.add("active");
    buttonShowMore.addEventListener("click", showMore);
    buttonNext.addEventListener("click", showNext);
    buttonPrev.addEventListener("click", showPrev);
    lastLink.addEventListener("click", showLastItem);
    showItem();

    function showItem() {
        for (let j = 0; j < paginationLinks.length; j++) {
            paginationLinks[j].addEventListener("click", () => {
                paginationLinks.forEach(function(item) {
                    item.classList.remove("active");
                });
                pagintationItems[i].classList.remove("active");
                i = +paginationLinks[j].innerText - 1;
                if (i > 0) {
                    buttonPrev.classList.remove("hidden");
                    buttonNext.classList.remove("hidden");
                } else if (i == pagintationItems.length - 1) {
                    buttonNext.classList.add("hidden");
                } else if (i == 0) {
                    buttonPrev.classList.add("hidden");
                    buttonNext.classList.remove("hidden");
                }
                if (paginationLinks[j] == paginationLinks[2]) {
                    if (i < 5) {
                        i = +paginationLinks[j].innerText - 1;
                        scrollForward();
                        paginationLinks[j - 1].classList.add("active");
                    } else if (i == 5) {
                        paginationLinks[j].classList.add("active");
                        buttonNext.classList.add("hidden");
                    }
                } else if (paginationLinks[j] == paginationLinks[0]) {
                    if (i > 0) {
                        if (i == 1) {
                            buttonPrev.classList.add("hidden");
                        }
                        i = +paginationLinks[j].innerText - 1;
                        scrollBack();
                        paginationLinks[j + 1].classList.add("active");
                    } else {
                        paginationLinks[j].classList.add("active");
                    }
                } else if (paginationLinks[j] == paginationLinks[1]) {
                    if (i == 1) {
                        buttonPrev.classList.add("hidden");
                    }
                    paginationLinks[j].classList.add("active");
                }
                pagintationItems[i].classList.add("active");
            });
        }
    }
    
    function showMore() {
        i++;
        if (i < pagintationItems.length - 1) {
            pagintationItems[i].classList.add("active");
        } else if (i == pagintationItems.length - 1) {
            pagintationItems[i].classList.add("active");
            pagination.classList.add("hidden");
        }
        if (i < pagintationItems.length - 2) {
            scrollForward();
        }
        checkActiveLink(i);
    }

    function showNext() {
        pagintationItems[i].classList.remove("active");
        i++;
        if (i < pagintationItems.length - 1) {
            buttonPrev.classList.remove("hidden");
        } else if (i == pagintationItems.length - 1) {
            buttonNext.classList.add("hidden");
        }
        if (i < pagintationItems.length - 2) {
            scrollForward();
        }
        checkActiveLink(i);
        pagintationItems[i].classList.add("active");
    }

    function showPrev() {
        pagintationItems[i].classList.remove("active");
        i--;
        if (i <= 0) {
            buttonPrev.classList.add("hidden");
        } else if (i < pagintationItems.length - 1) {
            buttonNext.classList.remove("hidden");
        } else {
            pagintationItems[i].classList.add("active");
        }
        if (i < pagintationItems.length - 3) {
            scrollBack();
        }
        checkActiveLink(i);
        pagintationItems[i].classList.add("active");
    }

    function showLastItem() {
        let indexPrevItem = i;
        pagintationItems[i].classList.remove("active");
        i = pagintationItems.length - 1;
        buttonNext.classList.add("hidden");
        buttonPrev.classList.remove("hidden");
        paginationLinks.forEach(function(item) {
            item.classList.remove("active");
        });
        pagintationItems[i].classList.add("active");
        paginationLinks[paginationLinks.length - 1].classList.add("active");
        scrollToLastItem(indexPrevItem);

    }

    function scrollForward() {
        paginationLinks.forEach(function(item) {
            let number = +item.innerText;
            item.innerText = ++number;
        });
    }
    
    function scrollBack() {
        paginationLinks.forEach(function(item) {
            let number = +item.innerText;
            item.innerText = --number;
        });
    }

    function scrollToLastItem(i) {
        let j;
        switch (i) {
            case 0 : { j = 0 } break;
            case 1 : { j = 1 } break;
            case 2 : { j = 2 } break;
        }
        for ( ; j < pagintationItems.length - 3; j++) {
            scrollForward();
        }
    }

    function checkActiveLink(i) {
        paginationLinks.forEach(function(item) {
            item.classList.remove("active");
        });
        paginationLinks.forEach(function(item) {
            if (i + 1 == +item.innerText) {
                item.classList.add("active");
            }
        });
    }
}
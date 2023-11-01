export function showModalWindows() {
    const buttons = document.querySelectorAll("[data-modal]");
    const credit = document.getElementById("creditModal");
    const images = document.getElementById("images");
    const feedback = document.getElementById("add-feedback");
    const report = document.getElementById("report-an-appearance");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            let modalID = button.getAttribute("data-modal");
            let modal = document.getElementById(modalID);
            
            (modal == credit && credit.classList.contains("show")) ? settingsCredit(modal) : false;
            (modal == report && report.classList.contains("show")) ? settingsReport(modal) : false;
            (modal == feedback && feedback.classList.contains("show")) ? settingsFeedback(modal) : false;
            (modal == images && images.classList.contains("show")) ? settingsImages(modal) : false;
        });
    });

    function settingsCredit(modal) {
        let buttonClose = modal.querySelector(".button");
        let modalContent = modal.querySelector(".modal__content");

        buttonClose.addEventListener("click", () => {
            modal.click();
            modalContent.scrollTop = 0;
        });
    }

    function settingsReport(modal) {
        let cancelButton = modal.querySelector(".button--transparent");
        let saveButton = modal.querySelector(".button--secondary");
        let email = modal.querySelector("[type='email']");

        email.focus();
        saveButton.addEventListener("click", () => {
            if (email.value != "" && email.value.length > 8) {
                modal.click();
            }
        });

        cancelButton.addEventListener("click", () => {
            email.value = "";
            modal.click();
        });
    }

    function settingsFeedback(modal) {
        let rating = modal.querySelectorAll(".rating-img");
        let cancelButton = modal.querySelector(".button--transparent");
        let saveButton = modal.querySelector(".button--secondary");
        let name = document.getElementById("feedbackName");
        let email = document.getElementById("feedbackEmail");
        let advantages = document.getElementById("feedbackAdvantages");
        let disadvantages = document.getElementById("feedbackDisadvantages");
        let comment = document.getElementById("feedbackComment");

        for (let i = 0; i < rating.length; i++) {
            rating[i].addEventListener("click", () => {
                if (!rating[i].classList.contains("rating-img--true")) {
                    for (let j = 0; j <= i; j++) {
                        rating[j].setAttribute("src", "./img/product/svg/rating-true.svg");
                        rating[j].classList.add("rating-img--true");
                    }
                } else {
                    for (let j = i; j >= 0; j--) {
                        rating[j].setAttribute("src", "./img/product/svg/rating-false.svg");
                        rating[j].classList.remove("rating-img--true");
                    }
                }
            });
        }

        cancelButton.addEventListener("click", () => {
            rating.forEach(item => {
                item.classList.remove("rating-img--true");
                item.setAttribute("src", "./img/product/svg/rating-false.svg");
            });
            name.value = "";
            email.value = "";
            advantages.value = "";
            email.value = "";
            disadvantages.value = "";
            modal.click();
        });

        saveButton.addEventListener("click", () => {
            if ((rating[0].classList.contains("rating-img--true")) && name.value != "" && comment.value != "" && advantages.value != "" && disadvantages.value != "") {
                modal.click();
            }
        });
    }

    function settingsImages(modal) {
        let slider = modal.querySelector(".modal__slider");

        $(slider).slick({
            dots: true,
            arrows: true,
            speed: 1000,
            slidesToShow: 1,
            infinite: true,
        });
    }
}
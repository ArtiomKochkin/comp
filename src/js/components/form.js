export function checkAccountData() {
    const rating = document.getElementById("rating");
    const buttonRefund = document.getElementById("buttonRefund");
    const buttonFeedback = document.getElementById("buttonFeedback");
    const buttonReport = document.getElementById("buttonReport");
    const refundReason = document.getElementById("refundReason");
    const refundTel = document.getElementById("refundTel");
    const feedbackName = document.getElementById("feedbackName");
    const feedbackEmail = document.getElementById("feedbackEmail");
    const feedbackRating = document.querySelectorAll(".rating-img--modal");
    const reportEmail = document.getElementById("reportEmail");
    let allCharsRegexp = /\w/;
    let letterRegexp = /[A-Za-zА-Яа-я']/;
    let emailRegexp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i;
    let telRegexp = /(\+7[0-9]{10})|(8[0-9]{10})|(\+7\([0-9]{3}\)[0-9]{7})/;
    let errorSubstr = "необходимые данные";
    let errorMessage = "";
    let shouldSuccess = true;

    checkData(buttonRefund, refundTel, telRegexp, errorSubstr);
    checkData(buttonRefund, refundReason, allCharsRegexp, errorSubstr);
    checkData(buttonFeedback, feedbackName, letterRegexp, errorSubstr);
    checkData(buttonFeedback, feedbackEmail, emailRegexp, errorSubstr);
    checkData(buttonReport, reportEmail, emailRegexp, errorSubstr);

    buttonFeedback.addEventListener("click", checkRating);

    function checkData(button, element, regExp, str) {
        if (button) {
            let modal = button.closest(".modal");

            button.addEventListener("click", () => {
                if (element.value == "" || element.value == " ") {
                    errorMessage = `Пожалуйста, введите ${str}.`;
                    shouldSuccess = false;
                } else if (!regExp.test(element.value)) {
                    errorMessage = `Пожалуйста, укажите корректные ${str}.`;
                    shouldSuccess = false;
                } else {
                    errorMessage = "";
                    shouldSuccess = true;
                }
                getError(element, errorMessage); 
                if (modal.querySelectorAll(".input__text").length == 0) {
                    modal.click();
                }
            });
        }
    }

    function getError(element, str) {
        if (str != "") {
            if (!element.nextElementSibling) {
                let errorHTML = `
                    <div class="input__text input__text--modal">${str}</div>
                `;
                element.insertAdjacentHTML("afterend", errorHTML);
                element.classList.add("errored");
            } else {
                let errorHTML = `
                    <div class="input__text input__text--modal">${str}</div>
                `;
                element.nextElementSibling.remove();
                element.insertAdjacentHTML("afterend", errorHTML);
            }
        } else {
            if (element.nextElementSibling) {
                element.classList.remove("errored");
                element.nextElementSibling.remove();
            }
        }
    }

    function checkRating() {
        let modal = rating.closest(".modal");
        if (Array.from(feedbackRating).some(item => item.classList.contains("rating-img--true"))) {
            shouldSuccess = true;
            errorMessage = "";
        } else {
            errorMessage = `Пожалуйста, укажите оценку`;
            shouldSuccess = false;
        }

        if (errorMessage != "") {
            if (!rating.nextElementSibling) {
                let errorHTML = `
                    <div class="input__text input__text--modal">${errorMessage}</div>
                `;
                rating.insertAdjacentHTML("afterend", errorHTML);
            } else {
                let errorHTML = `
                    <div class="input__text input__text--modal">${errorMessage}</div>
                `;
                rating.nextElementSibling.remove();
                rating.insertAdjacentHTML("afterend", errorHTML);
            }
        } else {
            if (rating.nextElementSibling) {
                rating.nextElementSibling.remove();
            }
        }

        if (shouldSuccess === true && modal.querySelectorAll(".input__text").length == 0) {
            modal.click();
        }
    }
}
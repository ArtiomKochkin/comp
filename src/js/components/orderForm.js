export function checkOrderData() {
    const successPage = document.querySelector(".success");
    const orderPage = document.querySelector(".order");
    const confirmButtons = document.querySelectorAll(".confirm-button");
    const products = document.querySelectorAll(".order__making-product");
    const switcher = document.getElementById("switch");
    const cashless = document.getElementById("cashless");
    const courier = document.getElementById("courier");
    const deliveryCourier = document.getElementById("delivery-courier");
    const name = document.getElementById("name");
    const surname = document.getElementById("surname");
    const email = document.getElementById("email");
    const tel = document.getElementById("tel");
    const recipientName = document.getElementById("recipientName");
    const recipientSurname = document.getElementById("recipientSurname");
    const recipientEmail = document.getElementById("recipientEmail");
    const recipientTel = document.getElementById("recipientTel");
    const cardNumber = document.getElementById("cardNumber");
    const cardMM = document.getElementById("cardMM");
    const cardYY = document.getElementById("cardYY");
    const cardCVV = document.getElementById("cardCVV");
    const street = document.getElementById("street");
    const house = document.getElementById("house");
    const apartment = document.getElementById("apartment");
    const streetDelivery = document.getElementById("streetDelivery");
    const houseDelivery = document.getElementById("houseDelivery");
    const apartmentDelivery = document.getElementById("apartmentDelivery");

    confirmButtons.forEach(checkData);

    function checkData(button) {
        button.addEventListener("click", () => {
            let shouldSuccess = true;
            let errorMessage = "";
            let errorSubstr = "";
            let letterRegexp = /[A-Za-zА-Яа-я']/;
            let emailRegexp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i;
            let telRegexp = /(\+7[0-9]{10})|(8[0-9]{10})|(\+7\([0-9]{3}\)[0-9]{7})/;
            let cardNumberRegexp = /[0-9]{16}/;
            let cardMMRegexp = /(0[1-9])|(1[012])/;
            let cardYYRegexp = /[0-9]{2}/;
            let cardCVVRegexp = /[0-9]{3}/;
            let streetRegexp = /^[A-Za-zА-Яа-я]+$/i;
            let houseRegexp = /(^[1-9]{1,}[A-Za-zА-Яа-я])|(^[0-9])/;
            let apartmentRegexp = /^[0-9]+$/;

            if (products == undefined) {
                shouldSuccess = false;
            } else {
                errorSubstr = "данные";
                if (!switcher.checked) {
                    checkSettings(name, letterRegexp, errorSubstr);
                    checkSettings(surname, letterRegexp, errorSubstr);
                    checkSettings(email, emailRegexp, errorSubstr);;
                    checkSettings(tel, telRegexp, errorSubstr);
                } else {
                    checkSettings(recipientName, letterRegexp, errorSubstr);
                    checkSettings(recipientSurname, letterRegexp, errorSubstr);
                    checkSettings(recipientEmail, emailRegexp, errorSubstr);
                    checkSettings(recipientTel, telRegexp, errorSubstr);
                }

                if (cashless.checked) {
                    errorSubstr = "данные карты"
                    checkSettings(cardNumber, cardNumberRegexp, errorSubstr);
                    checkSettings(cardMM, cardMMRegexp, errorSubstr);
                    checkSettings(cardYY, cardYYRegexp, errorSubstr);
                    checkSettings(cardCVV, cardCVVRegexp, errorSubstr);
                }

                if (courier.checked) {
                    checkSettings(street, streetRegexp, errorSubstr);
                    checkSettings(house, houseRegexp, errorSubstr);
                    checkSettings(apartment, apartmentRegexp, errorSubstr);
                }
                if (deliveryCourier.checked) {
                    checkSettings(streetDelivery, streetRegexp, errorSubstr);
                    checkSettings(houseDelivery, houseRegexp, errorSubstr);
                    checkSettings(apartmentDelivery, apartmentRegexp, errorSubstr);
                }
            }

            if (shouldSuccess === true) {
                orderPage.classList.add("hidden");
                successPage.classList.add("show");
            }

            function checkSettings(element, regExp, str) {
                if (element.value == "" || element.value == " ") {
                    errorMessage = `Пожалуйста, введите ${str}.`;
                    shouldSuccess = false;
                } else if (!regExp.test(element.value)) {
                    errorMessage = `Пожалуйста, укажите корректные ${str}.`;
                    shouldSuccess = false;
                } else {
                    errorMessage = "";
                }
                getError(element, errorMessage); 
            }
        });
    }

    function getError(element, str) {
        if (str != "") {
            if (!element.nextElementSibling) {
                let errorHTML = `
                    <div class="input__text">${str}</div>
                `;
                element.insertAdjacentHTML("afterend", errorHTML);
                element.classList.add("errored");
            } else {
                let errorHTML = `
                    <div class="input__text">${str}</div>
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
}
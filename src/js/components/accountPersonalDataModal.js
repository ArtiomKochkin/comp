export function accountModal() {
    const body = document.body;
    const buttons = document.querySelectorAll("[data-modal]");
    const welcome = document.getElementById("welcome");
    const addName = document.getElementById("add-name");
    const editName = document.getElementById("edit-name");
    const editTel = document.getElementById("edit-tel");
    const addEmail = document.getElementById("add-email");
    const editEmail = document.getElementById("edit-email");
    const editDelivery = document.getElementById("edit-delivery");
    const editPassword = document.getElementById("edit-password");
    const recoveryPassword = document.getElementById("recovery-password");
    const codeRecoveryPassword = document.getElementById("code-recovery-password");
    const newPassword = document.getElementById("new-password");

    const successEmail = document.getElementById("success-email");
    const failureEmail = document.getElementById("failure-email");
    const successTel = document.getElementById("success-tel");
    const failureTel = document.getElementById("failure-tel");
    const successPassword = document.getElementById("success-password");
    const failurePassword = document.getElementById("failure-password");
    const successDelivery = document.getElementById("success-delivery");
    const failureDelivery = document.getElementById("failure-delivery");

    const nameText = document.getElementById("nameText");
    const addNameButton = document.getElementById("addName");
    const telText = document.getElementById("telText");
    const addTelButton = document.getElementById("addTelButton");
    const emailText = document.getElementById("emailText");
    const addEmailButton = document.getElementById("addEmailButton");
    const confrimationEmail = document.querySelector(".account__confirmation");
    const confirmationEmailButton = document.querySelector(".account__btn--confirmation");
    const deliveryText = document.getElementById("deliveryText");
    const addDeliveryButton = document.getElementById("addDeliveryButton");
    const select = document.getElementById("cityModal");
    const selectMail = document.getElementById("delivery-departament-select");
    const radioCourier = document.getElementById("courier-modal");
    const radioCourierDelivery = document.getElementById("delivery-courier-modal");

    let errorMessage = "";
    let allCharsRegexp = /\w/;
    let letterRegexp = /[A-Za-zА-Яа-я']/;
    let emailRegexp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i;
    let telRegexp = /(\+7[0-9]{10})|(8[0-9]{10})|(\+7\([0-9]{3}\)[0-9]{7})/;
    let passwordRegexp = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g;
    let streetRegexp = /^[A-Za-zА-Яа-я]+$/i;
    let houseRegexp = /(^[1-9]{1,}[A-Za-zА-Яа-я])|(^[0-9])/;
    let numRegexp = /^[0-9]+$/;
    let shouldSuccess = true;

    // document.addEventListener("DOMContentLoaded", openModal(welcome));
    buttons.forEach(item => {
        item.addEventListener("click", () => {
            let modalID = item.getAttribute("data-modal");
            let modal = document.getElementById(modalID);

            (modal == addName && addName.classList.contains("show")) ? checkName(addName) : false;
            (modal == editName && editName.classList.contains("show")) ?  checkName(editName) : false;
            (modal == editTel && editTel.classList.contains("show")) ?  checkTel(editTel) : false;
            (modal == addEmail && addEmail.classList.contains("show")) ?  checkEmail(addEmail) : false;
            (modal == editEmail && editEmail.classList.contains("show")) ?  checkEmailWithCode(editEmail) : false;
            (modal == editDelivery && editDelivery.classList.contains("show")) ?  checkDelivery() : false;
            (modal == editPassword && editPassword.classList.contains("show")) ?  checkPassword(editPassword) : false;
            (modal == newPassword && newPassword.classList.contains("show")) ?  checkNewPassword(newPassword) : false;
            (modal == recoveryPassword && recoveryPassword.classList.contains("show")) ?  checkRecoveryPassword(recoveryPassword) : false;
            (modal == codeRecoveryPassword && codeRecoveryPassword.classList.contains("show")) ?  checkRecoveryCode(codeRecoveryPassword) : false;
        });
    });

    function openModal(modal) {
        let modalContent = modal.querySelector(".modal__content");
        body.classList.add("no-scroll");
        modal.classList.add("show");
        setTimeout(() => {
            modalContent.style.opacity = "1";
        }, 1);
    }

    function checkName(action) {
        let saveButton = action.querySelector(".button--secondary");
        let name = action.querySelector(".input");

        name.focus();
        saveButton.addEventListener("click", () => {
            if (name.value == "" || name.value == " ") {
                errorMessage = `Пожалуйста, введите ФИО.`;
                nameText.classList.add("disabled");
                addNameButton.classList.add("show");
            } else if (!letterRegexp.test(name.value)) {
                errorMessage = `Пожалуйста, укажите корректные данные ФИО.`;
            } else {
                nameText.textContent = name.value;
                nameText.classList.remove("disabled");
                addNameButton.classList.remove("show");
                name.value = "";
                errorMessage = "";
                action.click();
            }
            getError(name, errorMessage);
        });
    }

    function checkTel(action) {
        let cancelButton = action.querySelector(".button--transparent");
        let saveButton = action.querySelector(".button--secondary");
        let tel = action.querySelector(".input");

        tel.focus();
        saveButton.addEventListener("click", () => {
            if (tel.value == "" || tel.value == " ") {
                telText.classList.add("disabled");
                addTelButton.classList.add("show");
                errorMessage = `Пожалуйста, введите номер телефона.`;
            } else if (!telRegexp.test(tel.value)) {
                errorMessage = `Пожалуйста, укажите корректный номер телефона.`;
            } else {
                telText.textContent = tel.value;
                telText.classList.remove("disabled");
                addTelButton.classList.remove("show");
                action.click();
                errorMessage = "";
                openModal(successTel);
            }
            getError(tel, errorMessage);
        });

        cancelButton.addEventListener("click", () => {
            tel.value = "";
            action.click();
        });
    }

    function checkEmail(action) {
        let cancelButton = action.querySelector(".button--transparent");
        let saveButton = action.querySelector(".button--secondary");
        let email = action.querySelector("[type='email']");

        email.focus();
        saveButton.addEventListener("click", () => {
            if (email.value == "" || email.value == " ") {
                emailText.classList.add("disabled");
                addEmailButton.classList.add("show");
                errorMessage = `Пожалуйста, введите адрес электронной почты.`;
            } else if (!emailRegexp.test(email.value)) {
                errorMessage = `Пожалуйста, укажите корректный адрес электронной почты.`;
            } else {
                emailText.textContent = email.value;
                emailText.classList.remove("disabled");
                addEmailButton.classList.remove("show");
                confrimationEmail.classList.remove("disabled");
                confirmationEmailButton.classList.remove("disabled");
                action.click();
                errorMessage = "";
                openModal(successEmail);
            }
            getError(email, errorMessage);
        });

        cancelButton.addEventListener("click", () => {
            email.value = "";
            action.click();
        });
    }

    function checkEmailWithCode(action) {
        let cancelButton = action.querySelector(".button--transparent");
        let saveButton = action.querySelector(".button--secondary");
        let email = action.querySelector("[type='email']");
        let code = action.querySelector("[type='text']");

        email.focus();
        saveButton.addEventListener("click", () => {
            checkSettings(email, emailRegexp);
            checkSettings(code, numRegexp);
            
            if (shouldSuccess) {
                emailText.textContent = email.value;
                emailText.classList.remove("disabled");
                addEmailButton.classList.remove("show");
                confrimationEmail.classList.add("disabled");
                confirmationEmailButton.classList.add("disabled");
                action.click();
                email.value = "";
                code.value = "";
                openModal(successEmail);
            }
        });

        cancelButton.addEventListener("click", () => {
            email.value = "";
            code.value = "";
            action.click();
        });
    }

    function checkPassword(action) {
        let saveButton = action.querySelector(".button--secondary");
        let newPassword = action.querySelector(".new-password");
        let oldPassword = action.querySelector(".old-password");
        let recoveryButton = action.querySelector(".modal__btn");
        let message1 = "Пожалуйста, введите необходимые данные."
        let message2 = "Пароль должен содержать как минимум 8 символов, строчные и заглавные буквы, цифры и спецсимволы";

        oldPassword.focus();
        saveButton.addEventListener("click", () => {
            checkSettings(oldPassword, passwordRegexp, message1, message2);
            checkSettings(newPassword, passwordRegexp, message1, message2);
            
            if (shouldSuccess) {
                action.click();
                oldPassword.value = "";
                newPassword.value = "";
                openModal(successPassword);
            }
        });

        recoveryButton.addEventListener("click", () => {
            oldPassword.value = "";
            newPassword.value = "";
            action.click();
        });
    }

    function checkNewPassword(action) {
        let saveButton = action.querySelector(".button--secondary");
        let password = action.querySelector("[type='password']");

        password.focus();
        saveButton.addEventListener("click", () => {
            if (password.value == "" || password.value == " ") {
                errorMessage = `Пожалуйста, введите пароль.`;
            } else if (password.value.length < 8) {
                errorMessage = "Пароль должен быть длиной не менее 8 символов";
            } else if ( !passwordRegexp.test(password.value)) {
                errorMessage = "Пароль должен быть содержать прописные, строчные буквы латинского алфавита, а также цифры и спецсимволы";
            } else {
                errorMessage = "";
                action.click();
                openModal(successPassword);
            }
            getError(password, errorMessage);
        });
    }

    function checkRecoveryPassword(action) {
        let saveButton = action.querySelector(".button--secondary");
        let tel = action.querySelector(".input");

        tel.focus();
        saveButton.addEventListener("click", () => {
            if (tel.value == "" || tel.value == " ") {
                errorMessage = `Пожалуйста, введите номер телефона.`;
            } else if (!telRegexp.test(tel.value)) {
                errorMessage = `Пожалуйста, укажите корректный номер телефона.`;
            } else {
                errorMessage = "";
                action.click();
                document.querySelector('[data-modal="code-recovery-password"]').click();
            }
            getError(tel, errorMessage);
        });
        
    }

    function checkRecoveryCode(action) {
        let saveButton = action.querySelector(".button--secondary");
        let code = action.querySelector(".input");

        code.focus();
        saveButton.addEventListener("click", () => { 
            if (code.value == "" || code.value == " ") {
                errorMessage = `Пожалуйста, введите необходимые данные.`;
            } else if (!numRegexp.test(code.value)) {
                errorMessage = `Пожалуйста, укажите верный код из СМС`;
            } else {
                errorMessage = "";
                action.click();
                document.querySelector('[data-modal="new-password"]').click();
            }
            getError(code, errorMessage);
        });
    }

    function checkDelivery() {
        let saveButton = editDelivery.querySelector(".button--secondary");
        let methods = editDelivery.querySelectorAll(".modal__delivery");
        let methodsMail = editDelivery.querySelectorAll(".modal__delivery-item");

        methods.forEach(item => {
            let radio = item.querySelector(".radio__input");

            radio.addEventListener("change", () => {
                methods.forEach((method) => {
                    method.classList.remove("active");
                });
                item.classList.add("active");
                if (radio.id == "mail-modal") {
                    let mailItems = document.querySelectorAll(".modal__delivery-item");

                    mailItems.forEach(item => {
                        let mailRadio = item.querySelector(".radio__input");
    
                        mailRadio.addEventListener("change", () => {
                            mailItems.forEach(method => {
                                method.classList.remove("active");
                            });
                            item.classList.add("active");
                        });
                    }); 
                }
            });
        });

        saveButton.addEventListener("click", () => {
            let city = select.options[select.selectedIndex].value;
            let street = document.getElementById("modalStreet");
            let house = document.getElementById("modalHouse");
            let apartament = document.getElementById("modalApartament");
            let streetMail = document.getElementById("modalStreetMail");
            let houseMail = document.getElementById("modalHouseMail");
            let apartamentMail = document.getElementById("modalApartamentMail");
            let nameP = document.createElement("p");
            let addressP = document.createElement("p");
            nameP.classList.add("account__paragraph");
            addressP.classList.add("account__paragraph");
            deliveryText.innerHTML = "";

            if (methods[0].classList.contains("active")) {
                nameP.textContent = "Самовывоз из магазина";
                addressP.textContent = "г. Днепр, ул. Европейская, 8";
                deliveryText.classList.remove("disabled");
                addDeliveryButton.classList.remove("show");
            } else if (methods[1].classList.contains("active")) {
                if (street.value != "" && house.value != "" && apartament.value != "") {
                    nameP.textContent = "Доставка курьером";
                    addressP.textContent = "г. " + city + ", ул " + street.value + ", д. " + house.value + ", кв. " + apartament.value;
                    deliveryText.classList.remove("disabled");
                    addDeliveryButton.classList.remove("show");
                } else {
                    deliveryText.classList.add("disabled");
                    addDeliveryButton.classList.add("show");
                }
            } else if (methods[2].classList.contains("active")) {
                let departament = selectMail.options[selectMail.selectedIndex].innerText;
                nameP.textContent = "Самовывоз из отделения Почты";
                if (methodsMail[0].classList.contains("active")) {
                    addressP.textContent = "Доставка в отделение, " + departament;
                    deliveryText.classList.remove("disabled");
                    addDeliveryButton.classList.remove("show");
                } else if (streetMail.value != "" && houseMail.value != "" && apartamentMail.value != "") {
                    addressP.textContent = "Доставка курьером, " + "г. " + city + ", ул " + streetMail.value + ", д. " + houseMail.value + ", кв. " + apartamentMail.value;
                    deliveryText.classList.remove("disabled");
                    addDeliveryButton.classList.remove("show");
                } else {
                    deliveryText.classList.add("disabled");
                    addDeliveryButton.classList.add("show");
                }
            }

            if (radioCourier.checked) {
                checkSettings(street, streetRegexp);
                checkSettings(house, houseRegexp);
                checkSettings(apartament, numRegexp);
            }
            if (radioCourierDelivery.checked) {
                checkSettings(streetMail, streetRegexp);
                checkSettings(houseMail, houseRegexp);
                checkSettings(apartamentMail, numRegexp);
            }
            
            if (shouldSuccess) {
                deliveryText.appendChild(nameP);
                deliveryText.appendChild(addressP);
                editDelivery.click();
                openModal(successDelivery);
            }
        });
    }

    function checkSettings(element, regExp, message1 = "Пожалуйста, введите необходимые данные.", message2 = "Пожалуйста, укажите корректные данные.") {
        if (element.value == "" || element.value == " ") {
            errorMessage = message1;
            shouldSuccess = false;
        } else if (!regExp.test(element.value)) {
            errorMessage = message2;
            shouldSuccess = false;
        } else {
            errorMessage = "";
            shouldSuccess = true;
        }
        getError(element, errorMessage); 
        shouldSuccess = false;
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
    
}
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

    document.addEventListener("DOMContentLoaded", openModal(welcome));
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
            if (name.value == "") {
                nameText.classList.add("disabled");
                addNameButton.classList.add("show");
                action.click();
            } else if (name.value != "" && name.value.length > 10) {
                nameText.textContent = name.value;
                nameText.classList.remove("disabled");
                addNameButton.classList.remove("show");
                name.value = "";
                action.click();
            }
        });
    }

    function checkTel(action) {
        let cancelButton = action.querySelector(".button--transparent");
        let saveButton = action.querySelector(".button--secondary");
        let tel = action.querySelector(".input");

        tel.focus();
        saveButton.addEventListener("click", () => {
            if (tel.value == "") {
                telText.classList.add("disabled");
                addTelButton.classList.add("show");
                action.click();
            } else if (tel.value != "" && tel.value.length > 10) {
                telText.textContent = tel.value;
                telText.classList.remove("disabled");
                addTelButton.classList.remove("show");
                action.click();
                openModal(successTel);
            }
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
            if (email.value == "") {
                emailText.classList.add("disabled");
                addEmailButton.classList.add("show");
                action.click();
            } else if (email.value != "" && email.value.length > 8) {
                emailText.textContent = email.value;
                emailText.classList.remove("disabled");
                addEmailButton.classList.remove("show");
                confrimationEmail.classList.remove("disabled");
                confirmationEmailButton.classList.remove("disabled");
                action.click();
                openModal(successEmail);
            }
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
            if (email.value == "" || code.value == "") {
                emailText.classList.add("disabled");
                addEmailButton.classList.add("show");
                action.click();
            } else if (email.value != "" && email.value.length > 8) {
                emailText.textContent = email.value;
                emailText.classList.remove("disabled");
                addEmailButton.classList.remove("show");
                confrimationEmail.classList.add("disabled");
                confirmationEmailButton.classList.add("disabled");
                action.click();
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

        oldPassword.focus();
        saveButton.addEventListener("click", () => {
            if (oldPassword.value == newPassword.value && oldPassword.value.length > 8) {
                action.click();
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
        let newPassword = action.querySelector("[type='password']");

        newPassword.focus();
        saveButton.addEventListener("click", () => {
            if (newPassword.value.length > 8) {
                action.click();
                openModal(successPassword);
            }
        });
    }

    function checkRecoveryPassword(action) {
        let saveButton = action.querySelector(".button--secondary");
        let tel = action.querySelector(".input");

        tel.focus();
        saveButton.addEventListener("click", () => {
            if (tel.value == "") {
                action.click();
            } else if (tel.value != "" && tel.value.length > 10) {
                action.click();
            }
        });

    }

    function checkRecoveryCode(action) {
        let saveButton = action.querySelector(".button--secondary");
        let code = action.querySelector(".input");

        code.focus();
        saveButton.addEventListener("click", () => {
            if (code.value == "") {
                action.click();
            } else if (code.value != "" && code.value.length > 4) {
                action.click();
            }
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
            deliveryText.appendChild(nameP);
            deliveryText.appendChild(addressP);
            editDelivery.click();
            openModal(successDelivery);
        });
    }
}
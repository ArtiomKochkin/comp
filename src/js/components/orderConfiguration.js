export function makeOrder() {
    const body = document.body;
    const successPage = document.querySelector(".success");
    const orderPage = document.querySelector(".order");
    const modalCart = document.getElementById("cartModal");
    const modalCartContent = modalCart.querySelector(".modal__content");
    const editOrder = document.querySelectorAll(".order__making-product-edit");
    const orderRecipient = document.querySelector(".switch__input");
    const orderRecipientContacts = document.querySelector(".order__recipient-contact-details");
    const orderPayment = document.querySelectorAll(".order__radios-item");
    const orderDeliveryItems = document.querySelectorAll(".order__method");
    const buttonsConfirm = document.querySelectorAll(".order__making-button");
    const amountProducts = document.getElementById("amountProducts");

    buttonsConfirm.forEach(confirmOrder);
    orderRecipient.addEventListener("change", toggleSwitch);
    orderDeliveryItems.forEach(handleDeliveryChange);
    orderPayment.forEach(handlePaymentChange);
    editOrder.forEach(showOrder);

    function showOrder(item) {
        item.addEventListener("click", () => {
            modalCart.classList.add("show");
            body.classList.add("no-scroll");
            setTimeout(() => {
                modalCartContent.style.opacity = "1";
            }, 1);
        });
    }

    function toggleSwitch() {
        if (orderRecipient.checked == true) {
            orderRecipientContacts.classList.add("show");
        } else {
            orderRecipientContacts.classList.remove("show");
        }
    }

    function handlePaymentChange(item) {
        let radioPayment = item.querySelector(".radio__input");

        radioPayment.addEventListener("change", () => {
            orderPayment.forEach(payment => {
                payment.classList.remove("active");
            });
            if (radioPayment.id == "cashless") {
                item.classList.add("active");
            }
        });
    }

    function handleDeliveryChange(item) {
        let orderDeliveryRadio = item.querySelector(".radio__input");

        orderDeliveryRadio.addEventListener("change", () => {
            orderDeliveryItems.forEach((method) => {
                method.classList.remove("active");
            });
            item.classList.add("active");

            if (orderDeliveryRadio.id == "mail") {
                let orderMailItems = document.querySelectorAll(".order__method-addition-mail");

                orderMailItems.forEach(item => {
                    let orderMailRadio = item.querySelector(".radio__input");

                    orderMailRadio.addEventListener("change", () => {
                        orderMailItems.forEach(method => {
                            method.classList.remove("active");
                        });
                        item.classList.add("active");
                    });
                }); 
            }
        });
    }

    function confirmOrder(item) {
        item.addEventListener("click", () => {
            if (amountProducts.innerText != "0") {
                orderPage.classList.add("hidden");
                successPage.classList.add("show");
            }
        });
    }
}
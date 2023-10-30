export function toggleModal() {
    const modalButtons = document.querySelectorAll("[data-modal]");
    const modalClose = document.querySelectorAll(".modal__close");
    const modal = document.querySelectorAll(".modal");
    const menu = document.querySelector(".menu");
    const body = document.body;
    let lastModal = "";

    modalButtons.forEach(function(item) {
        item.addEventListener("click", showModal);

        function showModal() {
            let modalID = item.getAttribute("data-modal");
            let modal = document.getElementById(modalID);
            let modalContent = modal.querySelector(".modal__content");

            modalContent.addEventListener("click", event => {
                event.stopPropagation();
            });
            
            if (document.querySelector(".mask") != null) {
                document.querySelector(".mask").remove();
            }
            if (lastModal != "") {
                lastModal.classList.remove("show");
            }
            menu.classList.remove("show");
            body.classList.add("no-scroll");
            modal.classList.add("show");
            lastModal = modal;

            setTimeout(() => {
                modalContent.style.opacity = "1";
            }, 1);
        }
    });

    modalClose.forEach(function(item) {
        item.addEventListener("click", event => {
            let currentModal = event.currentTarget.closest(".modal");
            closeModal(currentModal);
        });
    });

    modal.forEach(function(item) {
        item.addEventListener("click", event => {
            let currentModal = event.currentTarget;
            closeModal(currentModal);
        });
    });

    function closeModal(currentModal) {
        let modalContent = currentModal.querySelector(".modal__content");

        modalContent.removeAttribute("style");
        setTimeout(() => {
            body.classList.remove("no-scroll");
            currentModal.classList.remove("show");
        }, 250);
    }
}
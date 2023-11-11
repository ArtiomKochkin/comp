export function chooseRating() {
    const feedbackRating = document.querySelectorAll(".rating-img--modal");
    
    for (let i = 0; i < feedbackRating.length; i++) {
        feedbackRating[i].addEventListener("click", () => {
            if (!feedbackRating[i].classList.contains("rating-img--true")) {
                for (let j = 0; j <= i; j++) {
                    feedbackRating[j].setAttribute("src", "./img/product/svg/rating-true.svg");
                    feedbackRating[j].classList.add("rating-img--true");
                }
            } else {
                for (let j = i; j >= 0; j--) {
                    feedbackRating[j].setAttribute("src", "./img/product/svg/rating-false.svg");
                    feedbackRating[j].classList.remove("rating-img--true");
                }
            }
        });
    }
}
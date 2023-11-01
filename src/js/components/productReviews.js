export function likeConfiguration() {
    const likes = document.querySelectorAll(".product-page__feedback-icon");

    likes.forEach(toggleLike);

    function toggleLike(like) {
        like.addEventListener("click", () => {
            let reviewItem = like.closest(".product-page__feedback-item");
            let likeCounter = reviewItem.querySelector(".product-page__feedback-like-counter");

            if (!like.classList.contains("liked")) {
                like.classList.add("liked");
                like.setAttribute("src", "./img/product/svg/like-true.svg");
                if (+likeCounter.innerText == 0) {
                    likeCounter.classList.remove("hidden");
                }
                likeCounter.innerText = +likeCounter.innerText + 1;
            } else {
                like.classList.remove("liked");
                like.setAttribute("src", "./img/product/svg/like-false.svg");
                if (+likeCounter.innerText > 0) {
                    likeCounter.innerText = +likeCounter.innerText - 1;
                    if (+likeCounter.innerText == 0) {
                        likeCounter.classList.add("hidden");
                    }
                }
            }
        });

    }
}
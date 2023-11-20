export function chooseAvatar() {
    const avatarInput = document.getElementById("avatar");
    const avatarImg = document.querySelector(".account__avatar-img");
    const avatarImgWrap = document.querySelector(".account__avatar-img-box");
    const avatarText = document.querySelector(".account__avatar-text");

    avatarInput.addEventListener("change", loadImage);
    
    if (localStorage.getItem("avatar")) {
        avatarImg.src = localStorage.getItem("avatar");
        avatarText.classList.add("hidden");
        avatarImgWrap.classList.add("selected");
    }

    function loadImage() {
        let file = avatarInput.files[0];
        
        if (file) {
            let reader = new FileReader();
            
            reader.onload = function(event) {
                avatarImg.src = event.target.result;
                avatarText.classList.add("hidden");
                avatarImgWrap.classList.add("selected");
                localStorage.setItem("avatar", avatarImg.src);
            };
            reader.onerror = function(event) {
                avatarImg.src = "";
                avatarImgWrap.classList.remove("selected");
                avatarText.classList.remove("hidden");
            }
            reader.readAsDataURL(file);
        }
    }
}
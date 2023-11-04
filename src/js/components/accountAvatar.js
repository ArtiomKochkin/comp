export function chooseAvatar() {
    const avatarInput = document.getElementById("avatar");
    const avatarImg = document.querySelector(".account__avatar-img");
    const avatarText = document.querySelector(".account__avatar-text");

    avatarInput.addEventListener("change", loadImage);

    function loadImage() {
        let file = avatarInput.files[0];
        
        if (file) {
            let reader = new FileReader();
            
            reader.onload = function(event) {
                avatarImg.src = event.target.result;
                avatarText.classList.add("hidden");
            };
            reader.onerror = function(event) {
                avatarImg.src = "";
                avatarText.classList.remove("hidden");
            }
            reader.readAsDataURL(file);
        }
    }
}
export function scrollHeader() {
    const header = document.querySelector("header");
    

    window.onscroll = () => {
        let scrollPosition = window.scrollY;
        
        if (scrollPosition > 50) {
            header.classList.add("fixed");
        } else {
            header.classList.remove("fixed");
        }
    }
} 
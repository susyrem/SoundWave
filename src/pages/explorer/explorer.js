
const loader = document.querySelector(".preloader");

window.addEventListener("load", function(){
    setTimeout(() => {
        loader.style.opacity = "0";
    }, 1000);
    setTimeout(() => {
        loader.style.display = "none";
    }, 1300);
    
});




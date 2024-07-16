import { navmenuApp } from './src/components/navmenu/navmenu-app.js';

document.querySelector("#navmenu-app").innerHTML =  navmenuApp();

const loader = document.querySelector(".preloader");

window.addEventListener("load", function(){
    setTimeout(() => {
        loader.style.opacity = "0";
    }, 1000);
    setTimeout(() => {
        loader.style.display = "none";
    }, 1300);
    
})

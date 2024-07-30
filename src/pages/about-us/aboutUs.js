import {navmenuApp} from '../../components/navmenu/navmenu-app.js'

document.getElementById('navmenu-app').innerHTML =  navmenuApp();

// Loader

const loader = document.querySelector(".preloader");

window.addEventListener("load", function(){
    setTimeout(() => {
        loader.style.opacity = "0";
    }, 1000);
    setTimeout(() => {
        loader.style.display = "none";
    }, 1300);
    
});
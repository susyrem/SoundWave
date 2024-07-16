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

function saveData(){    
    let inputName = document.getElementById("name").value;
    let inputMessage = document.getElementById("message").value;
    
    let data =
{
  userName: inputName,
  post: inputMessage,

};

window.localStorage.setItem("data", JSON.stringify(data));

}

document.addEventListener("DOMContentLoaded", function (e) {
    let feedPost = JSON.parse(localStorage.getItem("data"));
 console.log(localStorage.getItem("data"));
    document.getElementById("inputName").value = feedPost.userName;
    document.getElementById("inputMessage").value = feedPost.post;

 });
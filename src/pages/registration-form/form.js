let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn");
let nameInput = document.getElementById("nameInput");
let title = document.getElementById("title");

signIn.onclick = function() {
   nameInput.style.maxHeight ="0"; 
   title.innerHTML = "Login";
   signUp.classList.add("disable");
   signIn.classList.remove("disable");
}

signUp.onclick = function() {
  nameInput.style.maxHeight ="60px"; 
  title.innerHTML = "Registro";
  signUp.classList.remove("disable");
  signIn.classList.add("disable");
}
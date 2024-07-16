

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
function sendEmail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
        phone : document.getElementById("phone").value,

    }
    emailjs.send("service_nao4sns","template_hc4na4l", parms).then(alert("Message was sent succesfully."));
}
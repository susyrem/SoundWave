// script.js
document.getElementById('follow-button').addEventListener('click', function () {
    alert('Solicitud de amistad enviada!');

    fetch('/addFriend', {
        method: 'POST',
        body: JSON.stringify({ friendId: '12345' }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Solicitud de amistad enviada!');
        } else {
            alert('Hubo un error al enviar la solicitud de amistad.');
        }
    }).catch(error => {
        console.error('Error:', error);
    });
});

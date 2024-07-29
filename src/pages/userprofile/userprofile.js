function updateProfile() {
    // Obtener valores del formulario
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const profilePic = document.getElementById('profile-pic').files[0];

    // Actualizar perfil
    if (name) {
        document.getElementById('profile-name').innerText = name;
        document.getElementById('post-profile-name').innerText = name;
    }
    if (description) {
        document.getElementById('profile-description').innerText = description;
        document.getElementById('post-profile-description').innerText = description;
    }
    if (profilePic) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profile-image').src = e.target.result;
            document.getElementById('post-profile-image').src = e.target.result;
        }
        reader.readAsDataURL(profilePic);
    }
    }

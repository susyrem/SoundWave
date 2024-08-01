<<<<<<< HEAD
function updateProfile() {
    // Obtén los valores de los campos del formulario
    const profilePic = document.getElementById('profile-pic').files[0];
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;

    // Muestra los datos en la consola (puedes cambiar esto para hacer algo más útil)
    console.log('Profile Picture:', profilePic ? profilePic.name : 'No file selected');
    console.log('Name:', name);
=======
function updateProfile() {
    // Obtén los valores de los campos del formulario
    const profilePic = document.getElementById('profile-pic').files[0];
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;

    // Muestra los datos en la consola (puedes cambiar esto para hacer algo más útil)
    console.log('Profile Picture:', profilePic ? profilePic.name : 'No file selected');
    console.log('Name:', name);
>>>>>>> abc33b5065eac62995e32dfd82a9a1556cb80b3d
    console.log('Description:', description);
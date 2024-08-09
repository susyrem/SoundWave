document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-button');
    const suggestionsDiv = document.getElementById('suggestions');
    const friendsListDiv = document.getElementById('friends-list');

    const modal = document.getElementById('suggestions-modal');
    const closeModal = document.querySelector('.close');

    let friendsList = []; // Lista interna para almacenar amigos

    // Función para obtener sugerencias de amigos
    function getSuggestions() {
        fetch('https://reqres.in/api/users?delay=3&page=1')
            .then(response => response.json())
            .then(data => {
                displaySuggestions(data.data);
                modal.style.display = 'block'; // Mostrar el modal
            })
            .catch(error => console.error('Error fetching suggestions:', error));
    }

    // Función para mostrar las sugerencias en el modal
    function displaySuggestions(users) {
        suggestionsDiv.innerHTML = ''; // Limpiar el contenedor de sugerencias
        users.forEach(user => {
            const userDiv = document.createElement('div');
            userDiv.classList.add('user-item');
            
            const avatar = document.createElement('img');
            avatar.src = user.avatar;
            avatar.alt = `${user.first_name} ${user.last_name}'s avatar`;
            avatar.style.width = '50px'; // Ajustar el tamaño del avatar
            avatar.style.height = '50px'; // Ajustar el tamaño del avatar
            avatar.style.borderRadius = '50%'; // Hacer el avatar redondo
            avatar.style.marginRight = '25px'; // Espacio entre el avatar y el nombre

            const textDiv = document.createElement('div');
            textDiv.textContent = `${user.first_name} ${user.last_name}`;
            
            const addButton = document.createElement('button');
            addButton.textContent = 'Add';
            addButton.addEventListener('click', () => addFriend(user));
            
            userDiv.appendChild(avatar);
            userDiv.appendChild(textDiv);
            userDiv.appendChild(addButton);
            suggestionsDiv.appendChild(userDiv);
        });
    }

    // Función para agregar un amigo a la lista
    function addFriend(user) {
        if (!friendsList.some(friend => friend.id === user.id)) {
            friendsList.push(user);
            updateFriendsList();
            modal.style.display = 'none'; // Ocultar el modal después de agregar
        } else {
            alert('This user is already on your friends list..');
        }
    }

    // Función para eliminar un amigo de la lista
    function removeFriend(userId) {
        friendsList = friendsList.filter(friend => friend.id !== userId);
        updateFriendsList();
    }

    // Función para mostrar la lista de amigos en el DOM
    function updateFriendsList() {
        friendsListDiv.innerHTML = '';
        friendsList.forEach(friend => {
            const friendDiv = document.createElement('div');
            friendDiv.classList.add('friend-item');

            const avatar = document.createElement('img');
            avatar.src = friend.avatar;
            avatar.alt = `${friend.first_name} ${friend.last_name}'s avatar`;
            avatar.style.width = '50px'; // Ajustar el tamaño del avatar
            avatar.style.height = '50px'; // Ajustar el tamaño del avatar
            avatar.style.borderRadius = '50%'; // Hacer el avatar redondo
            avatar.style.marginRight = '10px'; // Espacio entre el avatar y el nombre
          
            
        

            const textDiv = document.createElement('div');
            textDiv.textContent = `${friend.first_name} ${friend.last_name}`;
            
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => removeFriend(friend.id));
            
            friendDiv.appendChild(avatar);
            friendDiv.appendChild(textDiv);
            friendDiv.appendChild(removeButton);
            friendsListDiv.appendChild(friendDiv);
        });
    }

    // Manejar el clic en el botón +add
    addButton.addEventListener('click', getSuggestions);

    // Cerrar el modal cuando se hace clic en la 'x'
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Cerrar el modal cuando se hace clic fuera del contenido del modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
6
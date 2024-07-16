

document.addEventListener('DOMContentLoaded', (event) => {
    const lista = document.getElementById("sharedPost");
    const formulario = document.forms["postingform"];
    const clearPostsButton = document.getElementById('clearPosts');

    // Función para cargar los posts desde localStorage
    const cargarPosts = () => {
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        lista.innerHTML = ''; // Limpiar la lista antes de renderizar los posts

        posts.forEach(post => {
            renderizarPost(post);
        });
    };

    // Función para guardar los posts en localStorage
    const guardarPosts = (posts) => {
        localStorage.setItem('posts', JSON.stringify(posts));
    };

    // Función para renderizar un post en la interfaz
    const renderizarPost = (post, index) => {
        // Crear elementos HTML para el post
        const elementPost = document.createElement("div");
        elementPost.className = "container mt-5 d-flex justify-content-center post-item";
        elementPost.dataset.index = index; // Guardar el índice del post en el dataset

        const rowDiv = document.createElement("div");
        rowDiv.className = "row justify-content-center w-100";

        const colDiv = document.createElement("div");
        colDiv.className = "col-12 col-md-6 col-lg-4";

        const cardDiv = document.createElement("div");
        cardDiv.className = "card mb-3 card-custom";

        const cardBody1 = document.createElement("div");
        cardBody1.className = "card-body d-flex flex-row";

        const imgAvatar = document.createElement("img");
        imgAvatar.src = "https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg";
        imgAvatar.className = "rounded-circle me-3";
        imgAvatar.setAttribute("height", "50");
        imgAvatar.setAttribute("width", "50");
        imgAvatar.alt = "avatar";
        cardBody1.appendChild(imgAvatar);

        const divText = document.createElement("div");
        const cardTitle = document.createElement("h5");
        cardTitle.className = "card-title font-weight-bold mb-2";
        cardTitle.textContent = "Username: " + post.nombre;
        divText.appendChild(cardTitle);

        const cardText1 = document.createElement("p");
        cardText1.className = "card-text";
        cardText1.innerHTML = '<i class="far fa-clock pe-2"></i>' + post.fecha;
        divText.appendChild(cardText1);

        cardBody1.appendChild(divText);
        cardDiv.appendChild(cardBody1);

        const bgImage = document.createElement("div");
        bgImage.className = "bg-image hover-overlay ripple rounded-0";
        bgImage.setAttribute("data-mdb-ripple-color", "light");

        const imgFood = document.createElement("img");
        imgFood.className = "img-fluid";
        imgFood.src = post.imagen;
        imgFood.alt = "Card image cap";
        bgImage.appendChild(imgFood);

        cardDiv.appendChild(bgImage);

        const cardBody2 = document.createElement('div');
        cardBody2.className = 'card-body';

        const cardText2 = document.createElement('p');
        cardText2.className = 'card-text';
        cardText2.textContent = post.mensaje;
        cardBody2.appendChild(cardText2);

        const divFlex = document.createElement('div');
        divFlex.className = 'd-flex justify-content-end align-items-center';

        const botonBorrar = document.createElement("button");
        botonBorrar.className = "btn-borrar btn btn-danger me-2";
        botonBorrar.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
            </svg>
        `;
        botonBorrar.addEventListener("click", function () {
            // Obtener el índice del post desde el dataset
            const index = parseInt(elementPost.dataset.index);
            // Eliminar el post del array y de localStorage
            if (index !== -1) {
                let posts = JSON.parse(localStorage.getItem('posts')) || [];
                posts.splice(index, 1);
                guardarPosts(posts); // Guardar los cambios en localStorage
                elementPost.remove(); // Eliminar el post del DOM
            }
        });

        divFlex.appendChild(botonBorrar);
        cardBody2.appendChild(divFlex);
        cardDiv.appendChild(cardBody2);
        colDiv.appendChild(cardDiv);
        rowDiv.appendChild(colDiv);
        elementPost.appendChild(rowDiv);
        lista.appendChild(elementPost);
    };

    // Función para agregar un nuevo post
    const agregarPost = (name, message) => {
        const nuevoPost = {
            nombre: name,
            mensaje: message,
            fecha: new Date().toLocaleDateString(),
            imagen: "https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg"
        };

        let posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push(nuevoPost); // Agrega el nuevo post al array
        guardarPosts(posts); // Guarda los posts en localStorage
        renderizarPost(nuevoPost, posts.length - 1); // Renderiza el nuevo post en la interfaz de usuario
    };

    // Cargar los posts al iniciar la aplicación
    cargarPosts();

    // Manejar el envío del formulario para agregar posts
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = formulario.elements[0].value;
        const message = formulario.elements[1].value;

        // Validar campos antes de agregar el post
        if (name.trim().length === 0 || message.trim().length === 0) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        agregarPost(name, message);

        // Resetear el formulario después de agregar el post
        formulario.reset();
    });

    // Manejar el borrado de todos los posts
    clearPostsButton.addEventListener('click', () => {
        localStorage.removeItem('posts');
        lista.innerHTML = ''; // Limpiar la lista en el DOM
    });
});
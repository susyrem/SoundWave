document.addEventListener('DOMContentLoaded', (event) => {
    const lista = document.getElementById("sharedPost");
    const formulario = document.forms["postingform"];
    const notificationList = document.getElementById("notificationList");
   
    // Función para cargar los datos desde localStorage
    const cargarDatos = () => {
        const data = JSON.parse(localStorage.getItem('data')) || { posts: [], notifications: [] };
        lista.innerHTML = ''; // Limpiar la lista antes de renderizar los posts
        notificationList.innerHTML = ''; // Limpiar la lista antes de renderizar las notificaciones

        // Renderizar posts
        data.posts.forEach((post, index) => {
            renderizarPost(post, index);
        });

        // Renderizar notificaciones
        data.notifications.forEach((notification, index) => {
            renderizarNotification(notification, index);
        });
    };

    // Función para guardar los datos en localStorage
    const guardarDatos = (data) => {
        localStorage.setItem('data', JSON.stringify(data));
    };

    // Función para renderizar una notificación en la interfaz
    const renderizarNotification = (notification, index) => {
        const li = document.createElement('li');
        li.textContent = notification;
        li.dataset.index = index;
        notificationList.appendChild(li);
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

         // Crear el reproductor de Spotify si hay un enlace de canción
         if (post.spotifyUrl) {
            const spotifyPlayer = document.createElement('div');
            spotifyPlayer.className = 'spotify-player';
            
            const iframe = document.createElement('iframe');
            iframe.src = `https://open.spotify.com/embed/track/${getSpotifyTrackId(post.spotifyUrl)}`;
            iframe.width = "300";
            iframe.height = "80";
            iframe.frameBorder = "0";
            iframe.allow = "encrypted-media";
            
            spotifyPlayer.appendChild(iframe);
            cardBody2.appendChild(spotifyPlayer);
        }

        
        const comentFlex=document.createElement('div');
        comentFlex.classList.add('input-group' ,'mb-3');
        const buttonComents=document.createElement('button');
        buttonComents.classList.add('btn', 'btn-outline-secondary');
        buttonComents.type="button";
        buttonComents.id='btnComments';
        buttonComents.textContent='Comment';
    

        // para el boton borrar 
        const divFlex = document.createElement('div');
        divFlex.className = 'd-flex justify-content-end align-items-center';

        const botonBorrar = document.createElement("button");
        botonBorrar.className = "btn-borrar btn btn-danger me-2";
        botonBorrar.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
            </svg>
        `;

        const botonLike = document.createElement("button");
        botonLike.className = "btn-like btn btn-danger me-2";
        botonLike.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
            </svg>
            <p >${post.likes}</p>
        `;

        // boton para likes
        botonLike.addEventListener("click",function(){
            let data = JSON.parse(localStorage.getItem('data')) || { posts: []};
            let postIndex = index;
            let post = data.posts[postIndex];
            post.likes += 1;
            data.posts[postIndex] = post;
            localStorage.setItem('data', JSON.stringify(data));
            location.reload(); 

        })

        botonBorrar.addEventListener("click", function () {
            // Obtener el índice del post desde el dataset
            const index = parseInt(elementPost.dataset.index);
            // Eliminar el post del array y de localStorage
            if (index !== -1) {
                let data = JSON.parse(localStorage.getItem('data')) || { posts: [], notifications: [] };
                data.posts.splice(index, 1);
                data.notifications.splice(index, 1); // Eliminar la notificación correspondiente
                guardarDatos(data); // Guardar los cambios en localStorage
                elementPost.remove(); // Eliminar el post del DOM
                cargarDatos(); // Volver a cargar los datos
                const notify=document.querySelector('.notify');
                const newCount =data.notifications.length;
                notify.setAttribute('data-count',newCount);
                if(newCount>0){
                    notify.classList.add('add-numb');
                }
                    }
                });

        divFlex.appendChild(botonLike);
        divFlex.appendChild(botonBorrar);
        cardBody2.appendChild(divFlex);
        cardDiv.appendChild(cardBody2);
        colDiv.appendChild(cardDiv);
        rowDiv.appendChild(colDiv);
        
        //para los comentarios
        const inputElement = document.createElement('input');
        inputElement.type = 'text';  
        inputElement.classList.add('form-control');
        inputElement.placeholder=("");
        inputElement.name='commentPost';
        inputElement.id='commentPost';
        inputElement.placeholder = 'Enter your comment'; 
        comentFlex.appendChild(buttonComents);
        comentFlex.appendChild(inputElement);
        cardBody2.appendChild(comentFlex); 

        const comments = document.createElement('div');
        comments.id="commentsList";
        const ol = document.createElement('ol');
        ol.classList.add("list-group-numbered");
        post.comments.forEach(comment => {
            const li = document.createElement('li');
            li.classList.add("list-group-item", "text-content-center");
            li.textContent = comment; // Asigna el comentario al contenido de `li`
            ol.appendChild(li); // Agrega `li` a `ol`
        });


        buttonComents.addEventListener("click", function () {
            const input=inputElement.value;
            addComment(index, input);
            inputElement.value = ""; 
            location.reload(); 
        });

        
        comments.appendChild(ol); // Agrega `li` a `comments`
        cardBody2.appendChild(comments); // Luego agrega `comments` a `cardBody2`


        elementPost.appendChild(rowDiv);






        lista.prepend(elementPost);
    };

     // Función para obtener el ID de la pista de Spotify desde la URL
     const getSpotifyTrackId = (url) => {
        const match = url.match(/track\/([a-zA-Z0-9]{22})/);
        return match ? match[1] : '';
    };

    // Función para agregar un nuevo post
    const agregarPost = (name, message,spotifyUrl) => {
        const nuevoPost = {
            nombre: name,
            mensaje: message,
            spotifyUrl:spotifyUrl || '',
            notification: `${name} ha compartido una publicación`, // Usar la variable `name`
            fecha: new Date().toLocaleString(),
            imagen: "https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg",
            likes:0,
            comments:[]
        };

        let data = JSON.parse(localStorage.getItem('data')) || { posts: [], notifications: [] };
        data.posts.push(nuevoPost); // Agrega el nuevo post al array
        data.notifications.push(nuevoPost.notification); // Agrega la notificación al array
        guardarDatos(data); // Guarda los datos en localStorage
        renderizarPost(nuevoPost, data.posts.length - 1); // Renderiza el nuevo post en la interfaz
        renderizarNotification(nuevoPost.notification, data.notifications.length - 1); // Renderiza la nueva notificación en la interfaz

        const notify=document.querySelector('.notify');
        const newCount =data.notifications.length;
        notify.setAttribute('data-count',newCount);
        if(newCount>0){
            notify.classList.add('add-numb');
        }
    };

    // Cargar los datos al iniciar la aplicación
    cargarDatos();

    // Manejar el envío del formulario para agregar posts
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = formulario.elements[0].value;
        const message = formulario.elements[1].value;
        const spotifyUrl=formulario.elements[2].value;

        // Validar campos antes de agregar el post
        if (name.trim().length === 0 || message.trim().length === 0) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        agregarPost(name, message,spotifyUrl);

        // Resetear el formulario después de agregar el post
        formulario.reset();
    });

    function addComment(postIndex, comment) {
        // Recuperar datos desde localStorage
        const data = JSON.parse(localStorage.getItem('data')) || { posts: [] };
    
        // Verificar que `data` y `data.posts` existan y sean arrays
        if (Array.isArray(data.posts) && data.posts[postIndex]) {
            // Asegúrate de que el `postIndex` sea un índice válido
            if (postIndex >= 0 && postIndex < data.posts.length) {
                // Acceder al post específico
                const post = data.posts[postIndex];
                
                // Asegúrate de que `post.comments` sea un array
                if (!Array.isArray(post.comments)) {
                    post.comments = [];
                }
                
                // Añadir el comentario al post
                post.comments.push(comment);
                
                // Guardar los datos actualizados en localStorage
                localStorage.setItem('data', JSON.stringify(data));
            } else {
                console.error('Índice de post inválido');
            }
        } else {
            console.error('Datos inválidos o post no encontrado');
        }
    }

    
});

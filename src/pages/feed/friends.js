const cargarDatos= async()=>{
    try{
        const respuesta=await fetch(`https://reqres.in/api/users?delay=3&page=1`);
        const data=await respuesta.json();
        const allDataUsers=data.data.map(user => {
           return `
            <div class="cardfriends mb-3" style="max-width: 600px;">
            <div class="row no-gutters">
                <div class="col-md-4">
                <img src="${user.avatar}" alt="Foto de usuario" class="rounded-circle">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${user.first_name} ${user.last_name}</h5>
                    <p class="card-text">Me gustaria ser tu amig@.</p>
                    <a href="#" class="btn btn-primary btnFriends" data-friend="false">Accept</a>
                    <span class="friendStatus d-none">Amigo</span>
                </div>
                </div>
            </div>
            </div>
            `
        });

        document.getElementById('addfriends').innerHTML = allDataUsers;

        // Seleccionar todos los botones y agregarles el event listener
        document.querySelectorAll('.btnFriends').forEach(btn => {
          btn.addEventListener('click', event => {
            event.preventDefault();
            const btn = event.target;
            const status = btn.nextElementSibling;
    
            btn.dataset.friend = 'true';
            btn.classList.add('d-none');
            status.classList.remove('d-none');
            const nameFriend=btn.closest('.card-body').querySelector('.card-title').textContent;
            const statusfriend= btn.dataset.friend;
            saveFriend(nameFriend,statusfriend);
          });
        });

        const saveFriend = (name,statusfriend) => {
            const newUser = {
                nameFriend:name,
                status:statusfriend
            };
            const prueba=JSON.parse(localStorage.getItem('datafriend'))
            console.log(prueba);
            let datasignin =prueba  || [];
            console.log(datasignin);
            datasignin.push(newUser);
            localStorage.setItem('datafriend', JSON.stringify(datasignin));
        };
        

    }catch(error){
        console.log(error);
    }

    
}

cargarDatos();
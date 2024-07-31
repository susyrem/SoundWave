const cargarDatos= async(page)=>{
    try{
        $('body').addClass('hidden'); // Ocultar el contenido principal
        const respuesta=await fetch(`https://reqres.in/api/users?delay=3&page=${page}`);
        await $('#onload').fadeOut();
        await $('body').removeClass('hidden');
        const data=await respuesta.json();
        const allDataUsers=data.data.map(user => {
           return `
            <tr>
                <th scope="row" class="text-center">${user.id}</th>
                <td class="text-center">${user.first_name}</td>
                <td class="text-center">${user.last_name}</td>
                <td class="text-center">${user.email}</td>
                <td class="text-center"><img src="${user.avatar}" alt="Foto de usuario" class="rounded-circle"></td>
            </tr>
            `
        });

        document.getElementById('add-users').innerHTML = allDataUsers;
        

    }catch(error){
        console.log(error);
    }

    
}
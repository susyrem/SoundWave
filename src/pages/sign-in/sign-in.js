document.addEventListener('DOMContentLoaded', (event) => {
const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const expressions = {
	user: /^[a-zA-Z0-9\_\-]{4,16}$/,
	password: /^.{8,12}$/, // 8 a 12 digitos.
}

const campos = {
	user: false,
	password: false,
}



const validateForm = (e) => {
	switch (e.target.name) {

        case "user":
			validateInput(expressions.user, e.target, 'user');
		break;
		case "password":
			validateInput(expressions.password, e.target, 'password');
			
		break;

	}
}

const validateInput = (expressions, input, campo) => {
	if(expressions.test(input.value)){
		document.getElementById(`group__${campo}`).classList.remove('form__incorrect-group');
		document.getElementById(`group__${campo}`).classList.add('form__correct-group');
		document.querySelector(`#group__${campo} .form__input-error`).classList.remove('form__input-error-active');
		campos[campo] = true;
	} else {
		document.getElementById(`group__${campo}`).classList.add('form__incorrect-group');
		document.getElementById(`group__${campo}`).classList.remove('form__correct-group');
		document.querySelector(`#group__${campo} .form__input-error`).classList.add('form__input-error-active');
		campos[campo] = false;
	}
}


inputs.forEach((input) => {
	input.addEventListener('keyup', validateForm);
	input.addEventListener('blur', validateForm);
});

// Esto ya funciona :'D
const saveUser = (user, password) => {
	const newUser = {
		nameUser: user,
		passwordUser: password
	};
	const prueba=JSON.parse(localStorage.getItem('datasignin'))
	console.log(prueba);
	let datasignin =prueba  || [];
	console.log(datasignin);
	datasignin.push(newUser);
	localStorage.setItem('datasignin', JSON.stringify(datasignin));
};

form.addEventListener('submit', (e) => {
	e.preventDefault();
	if(campos.user && campos.password){
		const userInput = document.getElementById('user').value;
		const passwordInput = document.getElementById('password').value;
		saveUser(userInput, passwordInput);
		document.getElementById('form__succesful-message').classList.add('form__active-succesful-message');
		setTimeout(() => {
			document.getElementById('form__succesful-message').classList.remove('form__active-succesful-message');
		}, 5000);

		document.querySelectorAll('.form__correct-group').forEach((icono) => {
			icono.classList.remove('form__correct-group');
		});
		
	} else {
		document.getElementById('form__message').classList.add('form__active-message');
	}

	
	form.reset();
	window.location.href = "/src/pages/feed/feed.html";
	
});

});
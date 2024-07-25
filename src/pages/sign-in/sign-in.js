const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const expressions = {
	user: /^[a-zA-Z0-9\_\-]{4,16}$/,
	password: /^.{8,12}$/, // 8 a 12 digitos.
}

const campos = {
	user: false,
	password: false
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
		document.querySelector(`#group__${campo} i`).classList.add('fa-check-circle');//revisar librería
		document.querySelector(`#group__${campo} i`).classList.remove('fa-times-circle');//revisar librería
		document.querySelector(`#group__${campo} .form__input-error`).classList.remove('form__input-error-active');
		campos[campo] = true;
	} else {
		document.getElementById(`group__${campo}`).classList.add('form__incorrect-group');
		document.getElementById(`group__${campo}`).classList.remove('form__correct-group');
		document.querySelector(`#group__${campo} i`).classList.add('fa-times-circle');//revisar librería
		document.querySelector(`#group__${campo} i`).classList.remove('fa-check-circle');//revisar librería
		document.querySelector(`#group__${campo} .form__input-error`).classList.add('form__input-error-active');
		campos[campo] = false;
	}
}


inputs.forEach((input) => {
	input.addEventListener('keyup', validateForm);
	input.addEventListener('blur', validateForm);
});

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const userInput = document.getElementById('user').value;
	const passwordInput = document.getElementById('password').value;
	if(campos.user && campos.password){
		saveUser(userInput, passwordInput);
		form.reset();

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
});

const saveUser = (user, password) => {
	const newUser = {
		nameUser: user,
		passwordUser: password
	};

	let data = JSON.parse(localStorage.getItem('data')) || { users: [] };
	data.users.push(newUser);
	localStorage.setItem('data', JSON.stringify(data));
};

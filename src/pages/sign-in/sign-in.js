const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const expressions = {
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	password: /^.{8,12}$/, // 8 a 12 digitos.
}

const campos = {
	email: false,
	password: false
}

const validateForm = (e) => {
	switch (e.target.name) {

        case "email":
			validateInput(expressions.email, e.target, 'email');
		break;
		case "password":
			validateInput(expressions.password, e.target, 'password');
			validatePassword2();
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

const validatePassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`group__password2`).classList.add('form__incorrect-group');
		document.getElementById(`group__password2`).classList.remove('form__correct-group');
		document.querySelector(`#group__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#group__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#group__password2 .form__input-error`).classList.add('form__input-error-active');
		campos['password'] = false;
	} else {
		document.getElementById(`group__password2`).classList.remove('form__incorrect-group');
		document.getElementById(`group__password2`).classList.add('form__correct-group');
		document.querySelector(`#group__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#group__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#group__password2 .form__input-error`).classList.remove('form__input-error-active');
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validateForm);
	input.addEventListener('blur', validateForm);
});

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const therms = document.getElementById('therms');
	if(campos.user && campos.name && campos.password && campos.email && campos.phone && therms.checked ){
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
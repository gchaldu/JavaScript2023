
const formulario = document.getElementById('form');
const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');
const edadInput = document.getElementById('edad');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

let nombreError = document.getElementById('nombreError');
let apellidoError = document.getElementById('apellidoError');
let edadError = document.getElementById('edadError');
let emailError = document.getElementById('emailError');
let passwordError = document.getElementById('passwordError');

const regexLetras = /[a-zA-Z]/g;
const regexPass= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
const regexNumerosYCaracteresEspeciales = /[-\d!@#$%^&*()_+{}\[\]:;<>,.?~\\|'"\-]+/g;
const regexCaracteresEspeciales = /[-!@#$%^&*()_+{}\[\]:;<>,.?~\\|'"\-]+/g;
const regexEmail = /^[a-zA-Z0-9._%+-]+@(google|outlook|icloud)\.(com|es)$/i;

nombreInput.addEventListener('blur', function() {
    validarNombre(nombreInput, nombreError);
});

apellidoInput.addEventListener('blur', function() {
    validarNombre(apellidoInput, apellidoError);
});

edadInput.addEventListener('blur', function() {
    validarEdad(edadError);
});

emailInput.addEventListener('blur', function() {
    validarEmail(emailInput, emailError);
});

passwordInput.addEventListener('blur', function() {
    validarPassword(passwordInput, passwordError);
});



function validarNombre(nombre,nombreError) {
    
    nombreError.style.display = 'none';
    nombre.value = nombre.value.trim();

    if (nombre.value.length > 20) {
        nombreError.innerHTML = 'El nombre no puede exceder los 30 caracteres';
        nombreError.style.display = 'block';
    }
    else if (nombre.value.match(regexNumerosYCaracteresEspeciales)) {
        nombreError.innerHTML = 'El nombre no puede contener numeros ni caracteres especiales';
        nombreError.style.display = 'block';
    }

    else if (nombre.value == '') {
        nombreError.innerHTML = 'El nombre no puede estar vacio';
        nombreError.style.display = 'block';
    }

}

function validarEdad(edadError) {
    edadError.style.display = 'none';
    edad.value = edadInput.value.trim();

    if (edad.value.match(regexLetras) || edad.value.match(regexCaracteresEspeciales)) {
        edadError.innerHTML = 'La edad no puede contener letras ni caracteres especiales';
        edadError.style.display = 'block';

    }
}

function validarEmail(email,emailError) {

    emailError.style.display = 'none';
    email.value = emailInput.value.trim();
    console.log(regexEmail.test(email.value) == false);
    if (email.value == '') {
        emailError.innerHTML = 'El email no puede estar vacio';
        emailError.style.display = 'block';
    }
    
    else if (!regexEmail.test(email.value)) {
        console.log(regexEmail.test(email.value));
        emailError.innerHTML = 'El email debe contener un nombre antes de la arroba y un dominio despues del punto';
        emailError.style.display = 'block';
    }
}

function validarPassword(password,passwordError) {

    passwordError.style.display = 'none';
    password.value = passwordInput.value.trim();

    if (password.value == '') {
        passwordError.innerHTML = 'La contraseña no puede estar vacia';
        passwordError.style.display = 'block';
    }

    else if (password.value.length < 9 || password.value.length > 20) {
        passwordError.innerHTML = 'La contraseña debe tener entre 9 y 20 caracteres';
        passwordError.style.display = 'block';
    }

    else if (!password.value.match(regexPass)) {
            passwordError.innerHTML = 'La contraseña debe contener al menos una letra mayuscula y una minuscula, y un numero';
            passwordError.style.display = 'block';
        }

    }


    

















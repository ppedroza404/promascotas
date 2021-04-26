'use strict';
const inputCorreo = document.querySelector('#txt-correo');
const inputContrasenna = document.querySelector('#txt-contrasenna');
const btnIniciar = document.querySelector('#btn-iniciar');
const inputCorreoRecuperar = document.querySelector('#txt-correoRecuperar');
const btnEnviarCorreo = document.querySelector('#btn-enviarCorreo');


///conexión con el back-end
const obtener_datos = async() => {
    let correo = inputCorreo.value;
    let contrasenna = inputContrasenna.value;
    iniciar_sesion(correo, contrasenna);
};


//Función de validar

const validar = () => {
    let error = false;

    let regexCorreo = /^[a-zA-Z.0-9]+\@{1}[a-zA-Z.]+$/;


    if (regexCorreo.test(inputCorreo.value) == false) {
        error = true;
        inputCorreo.classList.add('error');

    } else {
        inputCorreo.classList.remove('error');
    }

    if (inputContrasenna.value == '') {
        error = true;
        inputContrasenna.classList.add('error');
    } else {
        inputContrasenna.classList.remove('error');
    }


    if (error == false) {
        obtener_datos();
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo iniciar sesión',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });
    }

};


btnIniciar.addEventListener('click', validar);



// Modal
let modal1 = document.querySelector('#modal1');
let botonModal1 = document.querySelector('#recuperarContraseña')
let cerrar1 = document.querySelector("#modal1 .close");
botonModal1.addEventListener('click', () => {
    modal1.style.display = 'block';
});

cerrar1.addEventListener('click', () => {
    modal1.style.display = 'none';
});

//Generador de password genérico
function generadorPassword(passwordLength) {
    var variablesNumeros = "0123456789";
    var VariablesMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var VariablesMinusculas = "abcdefghijklmnopqrstuvwxyz";
    var VariablesEspeciales = "@#/.$+";
    var VariablesJuntas = variablesNumeros + VariablesMayusculas + VariablesMinusculas + VariablesEspeciales;
    var randomPass = Array(passwordLength);
    randomPass[0] = variablesNumeros;
    randomPass[1] = VariablesMayusculas;
    randomPass[2] = VariablesMinusculas;
    randomPass[3] = VariablesEspeciales;
    randomPass = randomPass.fill(VariablesJuntas, 4);
    return variableArreglo(randomPass.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('');
}

function variableArreglo(arreglo) {
    for (var i = arreglo.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arreglo[i];
        arreglo[i] = arreglo[j];
        arreglo[j] = temp;
    }
    return arreglo;
}

//Validación de recuperar contraseña
const validarRecuperarContrasenna = () => {
    let error = false;
    let regexCorreo = /^[a-zA-Z.0-9]+\@{1}[a-zA-Z.]+$/;

    if (regexCorreo.test(inputCorreoRecuperar.value) == false) {
        error = true;
        inputCorreoRecuperar.classList.add('error');
    } else {
        inputCorreoRecuperar.classList.remove('error');
    }
    if (error == false) {
        datosContrasenna();
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'Parece que el correo no está bien escrito',
            'text': 'Por favor escribilo de nuevo',
            'confirmButtonText': 'Entendido'
        });
    }
};

//Datos pedir contraseña nueva
const datosContrasenna = () => {
    let correoRecuperar = inputCorreoRecuperar.value;
    let contrasennaRandom = generadorPassword(9);

    recuperar_contrasenna(correoRecuperar, contrasennaRandom);
}

btnEnviarCorreo.addEventListener('click', validarRecuperarContrasenna)
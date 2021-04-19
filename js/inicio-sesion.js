'use strict';
const inputCorreo = document.querySelector('#txt-correo');
const inputContrasenna = document.querySelector('#txt-contrasenna');
const btnIniciar = document.querySelector('#btn-iniciar');

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
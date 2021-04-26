'use strict';

const btnCambiarContrasenna = document.querySelector('#btn-cambiar');
const inputCorreoCambioContrasenna = document.querySelector('#txt-correoCambiarContrasenna');
const inputContrasennaTemporal = document.querySelector('#txt-contrasennaTemporal');
const inputContrasennaNueva = document.querySelector('#txt-contrasennaNueva');
const inputContrasennaNuevaCorroborar = document.querySelector('#txt-contrasennaNuevaCorroborar');



////Cambiar contraseña
const validarNuevaContrasenna = () => {
    let error = false;
    let regexCorreo = /^[a-zA-Z.0-9]+\@{1}[a-zA-Z.]+$/;

    if (regexCorreo.test(inputCorreoCambioContrasenna.value) == false) {
        error = true;
        inputCorreoCambioContrasenna.classList.add('error');
    } else {
        inputCorreoCambioContrasenna.classList.remove('error');
    }

    if (inputContrasennaTemporal.value == '') {
        error = true;
        inputContrasennaTemporal.classList.add('error');
    } else {
        inputContrasennaTemporal.classList.remove('error');
    }

    if (inputContrasennaNueva.value == '') {
        error = true;
        inputContrasennaNueva.classList.add('error');
    } else {
        inputContrasennaNueva.classList.remove('error');
    }

    if (inputContrasennaNuevaCorroborar.value == '') {
        error = true;
        inputContrasennaNuevaCorroborar.classList.add('error');
    } else {
        inputContrasennaNuevaCorroborar.classList.remove('error');
    }

    if (inputContrasennaNueva.value == inputContrasennaNuevaCorroborar.value) {
        inputContrasennaNueva.classList.remove('error');
        inputContrasennaNuevaCorroborar.classList.remove('error');
    } else {
        error = true;
        inputContrasennaNueva.classList.add('error');
        inputContrasennaNuevaCorroborar.classList.add('error');
    }


    if (error == false) {
        datosContrasennaNueva();
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'Parece que alguno de los datos no corresponde o no está bien escrito',
            'text': 'Por favor rellená los campos de nuevo',
            'confirmButtonText': 'Entendido'
        });
    }
};

//Datos cambiar contraseña nueva
const datosContrasennaNueva = () => {
    let correoNuevaContrasenna = inputCorreoCambioContrasenna.value;
    let contrasennaTemporal = inputContrasennaTemporal.value;
    let contrasennaNueva = inputContrasennaNueva.value;

    cambiar_contrasenna_nueva(correoNuevaContrasenna, contrasennaTemporal, contrasennaNueva);
}

btnCambiarContrasenna.addEventListener('click', validarNuevaContrasenna)
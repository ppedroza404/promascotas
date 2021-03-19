'use strict';

/* Función para habilitar o deshabilitar los campos de Cantón y Distrito */

const provincia = document.querySelector('#slt-provincia');
const canton = document.querySelector('#slt-canton');
const distrito = document.querySelector('#slt-distrito');

const habilitarCanton = () => {
    if (provincia != '') {
        canton.disabled = false;
    } else {
        canton.disabled = true;
    }
}
const habilitarDistrito = () => {
    if (canton != '') {
        distrito.disabled = false;
    } else {
        distrito.disabled = true;
    }

}
provincia.addEventListener('change', habilitarCanton);
canton.addEventListener('change', habilitarDistrito);


const btnRegistrarCliente = document.querySelector('#btn-registrarCliente');
const inputNombreCliente = document.querySelector('#txt-nombreCliente');
const inputPrimApellidoCliente = document.querySelector('#txt-primerApellidoCliente');
const inputSegApellidoCliente = document.querySelector('#txt-segApellidoCliente');
const sltGenero = document.querySelector('#slt-generoCliente');
const sltTipoId = document.querySelector('#slt-tipoID');
const inputNumId = document.querySelector('#txt-numID');
const inputNacimiento = document.querySelector('#txt-nacimiento');
const inputCorreo = document.querySelector('#txt-correo');
const inputCantMascotas = document.querySelector('#txt-cantMascotas');
const sltProvincia = document.querySelector('#slt-provincia');
const sltCanton = document.querySelector('#slt-canton');
const sltDistrito = document.querySelector('#slt-distrito');
const inputOtrasSenias = document.querySelector('#txt-otrasSenias');


const validarEdad = (inputNacimiento) => {
    const edadMin = 18;
    let edad = calcularEdad(inputNacimiento)

    if (edad >= edadMin) {
        validarInfo();
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No es posible registrar un menor de edad',
            'text': 'Muchas gracias por la comprensión',
            'confirmButtonText': 'Entendido'
        });
    }
};

const calcularEdad = (nacimiento) => {
    let fechaActual = new Date();
    let edad = fechaActual.getFullYear() - inputNacimiento.getFullYear();

    if (fechaActual.getMonth() < inputNacimiento.getMonth()) {
        edad = edad - 1;
    } else {
        if ((fechaActual.getMonth() == inputNacimiento.getMonth()) && (fechaActual.getUTCDate() < inputNacimiento.getUTCDate())) {
            edad = edad - 1;
        }
    }
    return edad;
};
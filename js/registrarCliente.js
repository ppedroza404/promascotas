'use strict';

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

/* Inicio: Función para validar los campos requeridos */

const validar = () => {
    let error = false;

    if (inputNombreCliente.value == '') {
        error = true;
        inputNombreCliente.classList.add('error');
    } else {
        inputNombreCliente.classList.remove('error');
    }

    if (inputPrimApellidoCliente.value == '') {
        error = true;
        inputPrimApellidoCliente.classList.add('error');
    } else {
        inputPrimApellidoCliente.classList.remove('error');
    }
    if (inputSegApellidoCliente.value == '') {
        error = true;
        inputSegApellidoCliente.classList.add('error');
    } else {
        inputSegApellidoCliente.classList.remove('error');
    }
    if (sltGenero.value == '') {
        error = true;
        sltGenero.classList.add('error');
    } else {
        sltGenero.classList.remove('error');
    }
    if (sltTipoId.value == '') {
        error = true;
        sltTipoId.classList.add('error');
    } else {
        sltTipoId.classList.remove('error');
    }
    if (inputNumId.value == '') {
        error = true;
        inputNumId.classList.add('error');
    } else {
        inputNumId.classList.remove('error');
    }
    if (inputNacimiento.value == '') {
        error = true;
        inputNacimiento.classList.add('error');
    } else {
        inputNacimiento.classList.remove('error');
    }
    if (inputCorreo.value == '') {
        error = true;
        inputCorreo.classList.add('error');
    } else {
        inputCorreo.classList.remove('error');
    }
    if (inputCantMascotas.value == '') {
        error = true;
        inputCantMascotas.classList.add('error');
    } else {
        inputCantMascotas.classList.remove('error');
    }
    if (sltProvincia.value == '') {
        error = true;
        sltProvincia.classList.add('error');
    } else {
        sltProvincia.classList.remove('error');
    }
    if (sltCanton.value == '') {
        error = true;
        sltCanton.classList.add('error');
    } else {
        sltCanton.classList.remove('error');
    }
    if (sltDistrito.value == '') {
        error = true;
        sltDistrito.classList.add('error');
    } else {
        sltDistrito.classList.remove('error');
    }

    if (error == false) {
        //obtenerDatos();
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se ha registrado',
            'text': 'Por favor revise los campos resaltados'
        });
    }
}

/* Inicio: Función de obtención de datos*/

const obtenerDatos = () => {
    let nombreCliente = inputNombreCliente.value;
    let primerApellidoCliente = inputPrimApellidoCliente.value;
    let segApellidoCliente = inputSegApellidoCliente.value;
    let generoCliente = sltGenero.value;
    let tipoId = sltTipoId.value;
    let numId = inputNumId.value;
    let fechaNacimiento = new Date(inputNacimiento.value);
    let correo = inputCorreo.value;
    let cantMascotas = inputCantMascotas.value;
    let provincia = sltProvincia.value;
    let canton = sltCanton.value;
    let distrito = sltDistrito.value;
    let otrasSenias = inputOtrasSenias.value;

    let dia = Number(fechaNacimiento.getUTCDate());
    let mes = Number(fechaNacimiento.getMonth() + 1);
    let annio = Number(fechaNacimiento.getUTCFullYear());
    let formatoFecha = `${dia}/${mes}/${annio}`;

    registrarCliente(nombreCliente, primerApellidoCliente, segApellidoCliente, generoCliente, tipoId, numId, formatoFecha, correo, cantMascotas, provincia, canton, distrito, otrasSenias);

    console.log(nombreCliente)
}

/* Fin: Función de obtención de datos*/

/* Inicio: Función para habilitar selects de dirección */
/*
$('#slt-canton').click(function() {
    if (sltProvincia != '') {
        console.log(nombreCliente);
    }
})
*/
/* Inicio: Función para habilitar selects de dirección */

btnRegistrarCliente.addEventListener('click', validar);
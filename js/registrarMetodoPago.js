'use strict';

/* Declaración de variables */


const btnRegistrarCC = document.querySelector('#btn-registrarCC');
const tarjetaVisa = document.querySelector('#img-tarjetaVisa');
const tarjetaMasterC = document.querySelector('#img-tarjetaMasterC');
const tarjetaAmex = document.querySelector('#img-tarjetaAmex');
const numTarjeta = document.querySelector('#txt-numeroTarjeta');
const inputNombreTarjeta = document.querySelector('#txt-nombreTarjeta');
const inputExpiracionMes = document.querySelector('#slt-mesExpiracion');
const inputExpiracionAnnio = document.querySelector('#slt-annioExpiracion');
const inputCodigoSeguridad = document.querySelector('#txt-codigoSeguridad');

let tipoTarjeta;

/* Inicio: Validación de tipo de tarjeta */
const validarTipoTarjeta = () => {
    let amex = new RegExp('^3[47][0-9]{13}$');
    let visa = new RegExp('^4[0-9]{12}(?:[0-9]{3})?$');
    let mastercard = new RegExp('^5[1-5][0-9]{14}$');
    let mastercard2 = new RegExp('^2[2-7][0-9]{14}$');

    if (visa.test(numTarjeta.value) == true) {
        tipoTarjeta = "Visa";
        tarjetaVisa.src = "../img/visa_logo_color.jpg";

        tarjetaMasterC.src = "../img/mastercard_logo_no_color.jpg";

        tarjetaAmex.src = "../img/amex_logo_no_color.jpg";

        numTarjeta.classList.remove('error');

    } else if ((mastercard.test(numTarjeta.value) == true) || (mastercard2.test(numTarjeta.value) == true)) {
        tipoTarjeta = "Mastercard";
        tarjetaMasterC.src = "../img/mastercard_logo_color.jpg";

        tarjetaVisa.src = "../img/visa_logo_no_color.jpg";

        tarjetaAmex.src = "../img/amex_logo_no_color.jpg";

        numTarjeta.classList.remove('error');

    } else if (amex.test(numTarjeta.value) == true) {
        tipoTarjeta = "Amex";
        tarjetaAmex.src = "../img/amex_logo_color.jpg";

        tarjetaVisa.src = "../img/visa_logo_no_color.jpg";

        tarjetaMasterC.src = "../img/mastercard_logo_no_color.jpg";

        numTarjeta.classList.remove('error');
    }
    //Amex: 378282246310005
    //Visa: 4222222222222
    //Visa: 4012888888881881
    //Mastercard: 5555555555554444
    //Mastercard: 5105105105105100

    return tipoTarjeta;

}

tipoTarjeta = validarTipoTarjeta();

// Función para cambiar length del input del CVC - Amex

// --------- TBD ---------- //

/* Inicio: Función para validar la fecha de expiración */

const validarExpiracion = () => {
    let fechaActual = new Date();
    let mesTarjeta = inputExpiracionMes.value;
    let annioTarjeta = inputExpiracionAnnio.value;

    let mesActual = fechaActual.getMonth();
    let annioActual = fechaActual.getFullYear();

    if (annioTarjeta <= annioActual) {
        if (mesTarjeta < mesActual) {
            inputExpiracionMes.classList.add('error');
            inputExpiracionAnnio.classList.add('error');
            Swal.fire({
                'icon': 'warning',
                'title': 'Favor revisar',
                'text': 'Fecha de expiración incorrecta',
                'confirmButtonText': 'Entendido'
            });
        }
    } else {
        imprimirDatos();
    }
}

/* Fin: Función para validar la fecha de expiración */

/* Inicio: Función para obtener solamente los últimos 4 dígitos de la tarjeta */

const obtenerSubStr = (pnumeroTarjeta) => {
    const n = 4;
    const digitos = (pnumeroTarjeta.substring(pnumeroTarjeta.length - 4));

    return digitos;
}

/* Fin: Función para obtener solamente los últimos 4 dígitos de la tarjeta */

const validar = () => {
    let error = false;

    if (numTarjeta.value == "") {
        error = true;
        numTarjeta.classList.add('error');
    } else {
        numTarjeta.classList.remove('error');
    }
    if (inputNombreTarjeta.value == "") {
        error = true;
        inputNombreTarjeta.classList.add('error');
    } else {
        inputNombreTarjeta.classList.remove('error');
    }
    if (inputExpiracionMes.value == "") {
        error = true;
        inputExpiracionMes.classList.add('error');
    } else {
        inputExpiracionMes.classList.remove('error');
    }
    if (inputExpiracionAnnio.value == "") {
        error = true;
        inputExpiracionAnnio.classList.add('error');
    } else {
        inputExpiracionAnnio.classList.remove('error');
    }
    if (inputCodigoSeguridad.value == "") {
        error = true;
        inputCodigoSeguridad.classList.add('error');
    } else {
        inputCodigoSeguridad.classList.remove('error');
    }

    if (error == false) {
        validarExpiracion();
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo registrar su solicitud',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    }
};

/* Fin: Función para validar que se encuentren los datos requeridos */

/* Inicio: Función para limpiar el formulario una vez que se registra el método de pago */

const limpiarFormulario = () => {
    let nuim = 1 + 1;
}


/* Fin: Función para limpiar el formulario una vez que se registra el método de pago */


/* Inicio: Función para imprimir los datos del método de pago registrado */

const imprimirDatos = () => {

    const btnRegistrarCC = document.querySelector('#btn-registrarCC');
    const tarjetaVisa = document.querySelector('#img-tarjetaVisa');
    const tarjetaMasterC = document.querySelector('#img-tarjetaMasterC');
    const tarjetaAmex = document.querySelector('#img-tarjetaAmex');
    const numTarjeta = document.querySelector('#txt-numeroTarjeta');
    const inputNombreTarjeta = document.querySelector('#txt-nombreTarjeta');
    const inputExpiracionMes = document.querySelector('#slt-mesExpiracion');
    const inputExpiracionAnnio = document.querySelector('#slt-annioExpiracion');
    const inputCodigoSeguridad = document.querySelector('#txt-codigoSeguridad');

    let subStrTarjeta = obtenerSubStr(numTarjeta.value);
    let nombreTarjeta = inputNombreTarjeta.value;
    let mes = inputExpiracionMes.value;
    let annio = inputExpiracionAnnio.value;

    console.log('Método de pago');
    console.log('=====================');
    console.log(`Tipo de tarjeta ${tipoTarjeta}`);
    console.log(`Tarjeta termina en ${subStrTarjeta}`);
    console.log(`Nombre en la tarjeta ${nombreTarjeta}`);
    console.log(`Fecha de expiración: 0${mes}/${annio}`);

    limpiarFormulario();

}

/* Fin: Función para imprimir los datos del método de pago registrado */

btnRegistrarCC.addEventListener('click', validar);
numTarjeta.addEventListener('input', validarTipoTarjeta);
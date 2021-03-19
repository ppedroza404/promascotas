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


/* Inicio: Validación de tipo de tarjeta */
const validarTipoTarjeta = () => {
        let amex = new RegExp('^3[47][0-9]{13}$');
        let visa = new RegExp('^4[0-9]{12}(?:[0-9]{3})?$');
        let mastercard = new RegExp('^5[1-5][0-9]{14}$');
        let mastercard2 = new RegExp('^2[2-7][0-9]{14}$');

        if (visa.test(numTarjeta.value) == true) {
            tarjetaVisa.src = "../img/visa_logo_color.jpg";

            document.getElementById('txt-codigoVerificacion').setAttribute('maxlength', 3);

            tarjetaMasterC.src = "../img/mastercard_logo_no_color.jpg";

            tarjetaAmex.src = "../img/amex_logo_no_color.jpg";

            numTarjeta.classList.remove('error');

        } else if ((mastercard.test(numTarjeta.value) == true) || (mastercard2.test(numTarjeta.value) == true)) {
            tarjetaMasterC.src = "../img/mastercard_logo_color.jpg";

            document.getElementById('txt-codigoVerificacion').setAttribute('maxlength', 3);

            tarjetaVisa.src = "../img/visa_logo_no_color.jpg";

            tarjetaAmex.src = "../img/amex_logo_no_color.jpg";

            numTarjeta.classList.remove('error');

        } else if (amex.test(numTarjeta.value) == true) {
            tarjetaAmex.src = "../img/amex_logo_color.jpg";

            document.getElementById('txt-codigoVerificacion').setAttribute('maxlength', 4);

            tarjetaVisa.src = "../img/visa_logo_no_color.jpg";

            tarjetaMasterC.src = "../img/mastercard_logo_no_color.jpg";

            numTarjeta.classList.remove('error');
        }
    }
    /* Fin: Validación de tipo de tarjeta */

/* Inicio: Función para validar que se encuentren los datos requeridos */

const validarDatos = () => {
    let error = false;

    if (numTarjeta == '') {
        error = true;
        numTarjeta.classList.add('error');
    } else {
        numTarjeta.classList.remove('error');
    }

    if (inputNombreTarjeta == '') {
        error = true;
        inputNombreTarjeta.classList.add('error');
    } else {
        inputNombreTarjeta.classList.remove('error');
    }

    if (inputExpiracionMes == '') {
        error = true;
        inputExpiracionMes.classList.add('error');
    } else {
        inputExpiracionMes.classList.remove('error');
    }

    if (inputExpiracionAnnio == '') {
        error = true;
        inputExpiracionAnnio.classList.add('error');
    } else {
        inputExpiracionAnnio.classList.remove('error');
    }

    if (inputCodigoSeguridad == '') {
        error = true;
        inputCodigoSeguridad.classList.add('error');
    } else {
        error = true;
        inputCodigoSeguridad.classList.remove('error');
    }
    if (error == false) {
        obtenerDatos();
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'Tarjeta no',
            'text': 'Por favor revise los campos resaltados'
        });
    }
}


/* Inicio: Función para validar que se encuentren los datos requeridos */


/* Inicio: Validar información de la tarjeta */

const obtenerDatos = () => {
    let fechaActual = new Date();

    let dia = fechaActual.getUTCDate();
    let mes = fechaActual.getMonth() + 1;
    let annio = fechaActual.getFullYear();

    let numeroTarjeta = numTarjeta.value;
    let nombreTarjeta = inputNombreTarjeta.value;
    let mesExpiracion = inputExpiracionMes.value;
    let annioExpiracion = inputExpiracionAnnio.value;
    let codigoSeguridad = inputCodigoSeguridad.value;

    // console.log(numeroTarjeta, nombreTarjeta, mesExpiracion, annioExpiracion, dia, mes, annio);
}

/* Fin: Validar información de la tarjeta */



btnRegistrarCC.addEventListener('click', validarDatos);
numTarjeta.addEventListener('input', validarTipoTarjeta);
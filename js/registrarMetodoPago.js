'use strict';

/* Declaración de variables */


const btnRegistrarCC = document.querySelector('#btn-registrarCC');
const tarjetaVisa = document.querySelector('#img-tarjetaVisa');
const tarjetaMasterC = document.querySelector('#img-tarjetaMasterC');
const tarjetaAmex = document.querySelector('#img-tarjetaAmex');
const numTarjeta = document.querySelector('#txt-numeroTarjeta');
const inputNombreTarjeta = document.querySelector('#txt-nombreTarjeta');
const inputExpiracionMes = document.querySelector('#txt-mesExpiracion');
const inputCodigoSeguridad = document.querySelector('#txt-codigoSeguridad');
let mesTarjeta;

let tipoTarjeta;

/* Inicio: Función para mostrar los datos del método de pago en una tabla */

const tabla = document.querySelector('#tbl-metodosPago');
const tablabody = document.querySelector('#tbl-metodosPago tbody');

const mostrarTabla = () => {
    tablabody.innerHTML = '';
    let fila = tablabody.insertRow();

    fila.insertCell().innerHTML = tipoTarjeta;
    fila.insertCell().innerHTML = numTarjeta;
    fila.insertCell().innerHTML = inputNombreTarjeta;
    fila.insertCell().innerHTML = inputExpiracionMes.value;
    fila.insertCell().innerHTML = inputCodigoSeguridad;
}



/* Inicio: Función para mostrar los datos del método de pago en una tabla */


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

        inputCodigoSeguridad.setAttribute('maxlength', 3);

    } else if ((mastercard.test(numTarjeta.value) == true) || (mastercard2.test(numTarjeta.value) == true)) {
        tipoTarjeta = "Mastercard";

        tarjetaMasterC.src = "../img/mastercard_logo_color.jpg";
        tarjetaVisa.src = "../img/visa_logo_no_color.jpg";
        tarjetaAmex.src = "../img/amex_logo_no_color.jpg";

        numTarjeta.classList.remove('error');
        inputCodigoSeguridad.setAttribute('maxlength', 3);


    } else if (amex.test(numTarjeta.value) == true) {
        tipoTarjeta = "Amex";


        tarjetaAmex.src = "../img/amex_logo_color.jpg";
        tarjetaVisa.src = "../img/visa_logo_no_color.jpg";
        tarjetaMasterC.src = "../img/mastercard_logo_no_color.jpg";
        inputCodigoSeguridad.setAttribute('maxlength', 4);
        numTarjeta.classList.remove('error');
    }
    //Amex: 378282246310005
    //Visa: 4222222222222
    //Visa: 4012888888881881
    //Mastercard: 5555555555554444
    //Mastercard: 5105105105105100

    //Validación para placeholder


}

numTarjeta.addEventListener('change', validarTipoTarjeta);

/* Inicio: Función para imprimir los datos del método de pago registrado */

const imprimirDatos = () => {

    const numTarjeta = document.querySelector('#txt-numeroTarjeta');
    const inputNombreTarjeta = document.querySelector('#txt-nombreTarjeta');

    let subStrTarjeta = obtenerSubStr(numTarjeta.value);
    let nombreTarjeta = inputNombreTarjeta.value;

    console.log('Método de pago');
    console.log('=====================');
    console.log(`Tipo de tarjeta ${tipoTarjeta}`);
    console.log(`Tarjeta termina en ${subStrTarjeta}`);
    console.log(`Nombre en la tarjeta ${nombreTarjeta}`);

    Swal.fire({
        'icon': 'success',
        'title': 'Su solicitud se proceso con éxito',
        'text': 'La tarjeta ha sido registrada satisfactoriamente',
        'confirmButtonText': 'Entendido'
    }).then(() => {
        window.location.href = 'registrarMetodoPago.html';
    });
    mostrarTabla();

};

const probarInfo = () => {
    console.log('exp date');
    mesTarjeta = inputExpiracionMes.value.split("-");
}

/* Fin: Función para imprimir los datos del método de pago registrado */



/* Inicio: Función para validar la fecha de expiración */

const validarExpiracion = () => {
    let fechaActual = new Date();

    let mesActual = fechaActual.getMonth();
    let annioActual = fechaActual.getFullYear();

    if (mesTarjeta[0] >= annioActual) {
        if (mesTarjeta[1] - 1 >= mesActual) {
            imprimirDatos();

        } else {
            inputExpiracionMes.classList.add('error');
            Swal.fire({
                'icon': 'warning',
                'title': 'Favor revisar',
                'text': 'Fecha de expiración incorrecta',
                'confirmButtonText': 'Entendido'
            });
        }
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

const validar = (ptipoTarjeta) => {
    let tipoDeTarjeta = ptipoTarjeta;
    let error = false;
    let regexCodigoAmex = new RegExp('^[0-9]{4}');
    let regexCodigoVisaMC = new RegExp('^[0-9]{3}');


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
    if (inputCodigoSeguridad.value == "") {
        error = true;
        inputCodigoSeguridad.classList.add('error');
    } else {
        inputCodigoSeguridad.classList.remove('error');
    }
    if (tipoDeTarjeta == "Amex") {
        if (regexCodigoAmex.test(inputCodigoSeguridad.value) == false) {
            error = true;
            inputCodigoSeguridad.classList.add('error');
        } else {
            inputCodigoSeguridad.classList.remove('error');
        }
    }

    if (tipoDeTarjeta == "Visa" || tipoDeTarjeta == "Mastercard") {
        if (regexCodigoVisaMC.test(inputCodigoSeguridad.value) == false) {
            error = true;
            inputCodigoSeguridad.classList.add('error');
        } else {
            inputCodigoSeguridad.classList.remove('error');
        }
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
inputExpiracionMes.addEventListener('change', probarInfo)
btnRegistrarCC.addEventListener('click', validar);


/*numTarjeta.addEventListener('input', validarTipoTarjeta);*/
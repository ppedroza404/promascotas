'use strict';

/* Declaración de variables */


const btnRegistrarCC = document.querySelector('#btn-registrarCC');
const tarjetaVisa = document.querySelector('#img-tarjetaVisa');
const tarjetaMasterC = document.querySelector('#img-tarjetaMasterC');
const tarjetaAmex = document.querySelector('#img-tarjetaAmex');
const inputNumTarjeta = document.querySelector('#txt-numeroTarjeta');
const inputNombreTarjeta = document.querySelector('#txt-nombreTarjeta');
const inputExpiracionMes = document.querySelector('#txt-mesExpiracion');
const inputCodigoSeguridad = document.querySelector('#txt-codigoSeguridad');
const duennoMascota = JSON.parse(sessionStorage.getItem('usuarioConectado'));
let mesTarjeta;
let correo = duennoMascota.correo;
let tipoTarjeta;
let listaDeMetodosDePago = [];

/* Inicio: Función para mostrar los datos del método de pago en una tabla */

const tabla = document.querySelector('#tbl-metodosPago');
const tablabody = document.querySelector('#tbl-metodosPago tbody');

const mostrarTabla = () => {
    tablabody.innerHTML = '';

    listaDeMetodosDePago.lista_metodosDepago.forEach(element => {
        let fila = tablabody.insertRow();
        fila.insertCell().innerHTML = element.tipo;
        fila.insertCell().innerHTML = obtenerSubStr(element.numTarjeta);
        fila.insertCell().innerHTML = element.nombreTarjeta;
        fila.insertCell().innerHTML = element.expiracion;
        let celda = fila.insertCell();
        let listaBtnEditarItem = document.createElement('i');
        listaBtnEditarItem.classList.add('fa');
        listaBtnEditarItem.classList.add('fa-trash');
        celda.appendChild(listaBtnEditarItem);
        const eliminarMetodoDePagoCons = () => {
            let _id = element._id;
            eliminarMetodoDePago(_id);
        }
        listaBtnEditarItem.addEventListener('click', eliminarMetodoDePagoCons);
    });


}



/* Inicio: Función para mostrar los datos del método de pago en una tabla */


/* Inicio: Validación de tipo de tarjeta */
const validarTipoTarjeta = () => {
    let amex = new RegExp('^3[47][0-9]{13}$');
    let visa = new RegExp('^4[0-9]{12}(?:[0-9]{3})?$');
    let mastercard = new RegExp('^5[1-5][0-9]{14}$');
    let mastercard2 = new RegExp('^2[2-7][0-9]{14}$');

    if (visa.test(inputNumTarjeta.value) == true) {
        tipoTarjeta = "Visa";

        tarjetaVisa.src = "../img/visa_logo_color.jpg";
        tarjetaMasterC.src = "../img/mastercard_logo_no_color.jpg";
        tarjetaAmex.src = "../img/amex_logo_no_color.jpg";
        inputNumTarjeta.classList.remove('error');

        inputCodigoSeguridad.setAttribute('maxlength', 3);

    } else if ((mastercard.test(inputNumTarjeta.value) == true) || (mastercard2.test(inputNumTarjeta.value) == true)) {
        tipoTarjeta = "Mastercard";

        tarjetaMasterC.src = "../img/mastercard_logo_color.jpg";
        tarjetaVisa.src = "../img/visa_logo_no_color.jpg";
        tarjetaAmex.src = "../img/amex_logo_no_color.jpg";

        inputNumTarjeta.classList.remove('error');
        inputCodigoSeguridad.setAttribute('maxlength', 3);


    } else if (amex.test(inputNumTarjeta.value) == true) {
        tipoTarjeta = "Amex";


        tarjetaAmex.src = "../img/amex_logo_color.jpg";
        tarjetaVisa.src = "../img/visa_logo_no_color.jpg";
        tarjetaMasterC.src = "../img/mastercard_logo_no_color.jpg";
        inputCodigoSeguridad.setAttribute('maxlength', 4);
        inputNumTarjeta.classList.remove('error');
    }
    //Amex: 378282246310005
    //Visa: 4222222222222
    //Visa: 4012888888881881
    //Mastercard: 5555555555554444
    //Mastercard: 5105105105105100

    //Validación para placeholder


}

const listarMetodosDePagoAsync = async(correo) => {

    await axios({
            method: 'get',
            url: `http://localhost:3000/api/listar-metododepago?cliente=${correo}`,
            responseType: 'json'
        })
        .then((response) => {
            listaDeMetodosDePago = response.data;
        })
        .catch((error) => {
            console.log(error)
        });

    return listaDeMetodosDePago;
};

const obtenermetodos = async() => {
    listaDeMetodosDePago = await listarMetodosDePagoAsync(correo);
    mostrarTabla();
}

/* Inicio: Función para imprimir los datos del método de pago registrado */

const imprimirDatos = () => {

    const inputNumTarjeta = document.querySelector('#txt-numeroTarjeta');
    const inputNombreTarjeta = document.querySelector('#txt-nombreTarjeta');

    let subStrTarjeta = obtenerSubStr(inputNumTarjeta.value);
    let nombreTarjeta = inputNombreTarjeta.value;

    console.log('Método de pago');
    console.log('=====================');
    console.log(`Tipo de tarjeta ${tipoTarjeta}`);
    console.log(`Tarjeta termina en ${subStrTarjeta}`);
    console.log(`Nombre en la tarjeta ${nombreTarjeta}`);

    mostrarTabla();

};

const probarInfo = () => {
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
    let digitos = pnumeroTarjeta.toString().split("");

    for (let i = 0; i < digitos.length - n; i++) {
        digitos[i] = "*";
    }

    digitos = digitos.join('');

    return digitos;
}

/* Fin: Función para obtener solamente los últimos 4 dígitos de la tarjeta */

const validar = (ptipoTarjeta) => {
    let tipoDeTarjeta = ptipoTarjeta;
    let error = false;
    let regexCodigoAmex = new RegExp('^[0-9]{4}');
    let regexCodigoVisaMC = new RegExp('^[0-9]{3}');


    if (inputNumTarjeta.value == "") {
        error = true;
        inputNumTarjeta.classList.add('error');
    } else {
        inputNumTarjeta.classList.remove('error');
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


    registrarMetodoDePago();

};

const registrarMetodoDePagoAsync = async(correo, tipo, numTarjeta, nombreTarjeta, expiracion, cvc) => {


    await axios({

            method: 'post',
            url: 'http://localhost:3000/api/registrar-metododepago',
            responseType: 'json',
            data: {

                cliente: correo,
                numTarjeta: numTarjeta,
                nombreTarjeta: nombreTarjeta,
                cvc: cvc,
                expiracion: expiracion,
                tipo: tipo,

            }

        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'Su solicitud se proceso con éxito',
                'text': 'La tarjeta ha sido registrada satisfactoriamente',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'registrarMetodoPago.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo registrar un nuevo metodo de pago',
                'text': `Ocurrió el siguiente error {error}`,
                'icon': 'error'
            })
        });
};




/* Fin: Función para validar que se encuentren los datos requeridos */

const registrarMetodoDePago = () => {
    let numTarjeta = inputNumTarjeta.value;
    let nombreTarjeta = inputNombreTarjeta.value;
    let expiracion = inputExpiracionMes.value;
    let cvc = inputCodigoSeguridad.value;
    let tipo = tipoTarjeta;

    registrarMetodoDePagoAsync(correo, tipo, numTarjeta, nombreTarjeta, expiracion, cvc);

}

obtenermetodos();

const eliminarMetodoDePago = async(metodoID) => {
    await axios({
            method: 'delete',
            url: 'http://localhost:3000/api/eliminar-metododepago',
            responseType: 'json',
            data: {
                _id: metodoID
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'Metodo de pago Eliminado',
                'text': 'El metodo de pago fue eliminado',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'registrarMetodoPago.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se Eliminar el metodo de pago',
                'text': `Ocurrió el siguiente error {error}`,
                'icon': 'error'
            })
        });
};

inputExpiracionMes.addEventListener('change', probarInfo)
btnRegistrarCC.addEventListener('click', validar);
inputNumTarjeta.addEventListener('change', validarTipoTarjeta);

/*inputNumTarjeta.addEventListener('input', validarTipoTarjeta);*/
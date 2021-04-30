const nombreUsuarioSpan = document.querySelector('#usuarioSpan');
//Obtiene información del proveedor cuando es cliente
let urlID = window.location.hash;
let urlIDModificado = urlID.slice(1);
let btnPagarServicio = document.querySelector('#btn-pagarServicio');
let cliente = JSON.parse(sessionStorage.getItem('usuarioConectado'));
let proveedor = JSON.parse(sessionStorage.getItem('usuarioSeleccionado'));
let nombreServicio = JSON.parse(sessionStorage.getItem('nombreServicio'));


//Obtiene información del modal
let modal = document.querySelector('#modalPagoServicio');
let abrirModal = document.querySelector('#btn-abrirModalPagoServicio')
let cerrarModal = document.querySelector("#modalPagoServicio .close");


const nombreUsuarioConectadoSpan = () => {
    let nombreUsuarioConectado = cliente.nombre;

    nombreUsuarioSpan.textContent = nombreUsuarioConectado

};

nombreUsuarioConectadoSpan();


// ------------------ Funciones del modal ------------------ //

abrirModal.addEventListener('click', () => {
    modal.style.display = 'block';
});

cerrarModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// ------------------ Métodos de pago ------------------ //

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

/* Inicio: Función para crear radio button de seleccion de mp */

// const crearRadio = () => {
//     const radioList = document.createElement("input");
//     radioList.setAttribute('type', 'radio');

//     //Create and append the options

//     }
//     return selectList
// }


const mostrarTabla = () => {
    tablabody.innerHTML = '';

    listaDeMetodosDePago.lista_metodosDepago.forEach(element => {
        let fila = tablabody.insertRow();
        fila.insertCell().innerHTML = element.tipo;
        fila.insertCell().innerHTML = obtenerSubStr(element.numTarjeta);
        fila.insertCell().innerHTML = element.nombreTarjeta;
        fila.insertCell().innerHTML = element.expiracion;

        /////////////////////////////////////////
        let celdaSeleccion = fila.insertCell();
        let radioList = document.createElement("input");
        radioList.setAttribute('type', 'radio');
        radioList.setAttribute('name', `seleccionMP`);
        radioList.setAttribute('value', `${element._id}`);
        celdaSeleccion.appendChild(radioList);

        const obtenerIdMetodoPago = async() => {

            let metodoSeleccionado = await listarMetodosDePagoDefault(radioList.value);
            inputNumTarjeta.value = metodoSeleccionado.lista_metodosDepago.numTarjeta;
            inputNombreTarjeta.value = metodoSeleccionado.lista_metodosDepago.nombreTarjeta;
            inputExpiracionMes.value = metodoSeleccionado.lista_metodosDepago.expiracion;
            inputCodigoSeguridad.value = metodoSeleccionado.lista_metodosDepago.cvc;

            inputNumTarjeta.setAttribute('disabled', true);
            inputNombreTarjeta.setAttribute('disabled', true);
            inputExpiracionMes.setAttribute('disabled', true);
            inputCodigoSeguridad.setAttribute('disabled', true);
            validarTipoTarjeta();
        }


        /////////////////////////////////////////
        let celdaEliminar = fila.insertCell();
        let listaBtnEditarItem = document.createElement('i');
        listaBtnEditarItem.classList.add('fa');
        listaBtnEditarItem.classList.add('fa-trash');
        celdaEliminar.appendChild(listaBtnEditarItem);
        const eliminarMetodoDePagoCons = () => {
            let _id = element._id;
            eliminarMetodoDePago(_id);

        }
        listaBtnEditarItem.addEventListener('click', eliminarMetodoDePagoCons);
        radioList.addEventListener('click', obtenerIdMetodoPago);
    });
}

//const obtenerDatosTarjeta 

const listarMetodosDePagoDefault = async(id) => {

    await axios({
            method: 'get',
            url: `http://localhost:3000/api/listar_metodo_pago_default?_id=${id}`,
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

let allDisabled = document.querySelectorAll("input");

const removerDisable = () => {
    allDisabled.forEach(elelemto => {

    })
};








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



/////////


const registrarSolicitudServicio = async(pcliente, pproveedor, pnombreServicio, pprovincia, pcanton, pdistrito, pfechaServicio, pcomentario) => {

    await axios({

            method: 'post',
            url: 'http://localhost:3000/api/registrar-solicitudServicio',
            responseType: 'json',
            data: {

                cliente: pcliente,
                proveedor: pproveedor,
                nombreServicio: pnombreServicio,
                provincia: pprovincia,
                canton: pcanton,
                distrito: pdistrito,
                calificacion: '0',
                fechaServicio: pfechaServicio,
                comentario: pcomentario,
                estadoSolicitud: 'pendiente'
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



const obtenerdatosSolicitudServ = () => {

    //registrarSolicitudServicio(cliente.nombre, proveedor.correo, nombreServicio, proveedor.provincia, proveedor.canton, proveedor.distrito, fechaServicio, comentario);

    registrarSolicitudServicio(cliente.nombre, 'Rob', 'Rob', 'Rob', 'Rob', 'Rob', '2021-06-30', 'comentario');
}

btnPagarServicio.addEventListener('click', obtenerdatosSolicitudServ);


////////


// const registrarMetodoDePagoAsync = async(correo, tipo, numTarjeta, nombreTarjeta, expiracion, cvc) => {


//     await axios({

//             method: 'post',
//             url: 'http://localhost:3000/api/registrar-metododepago',
//             responseType: 'json',
//             data: {

//                 cliente: correo,
//                 numTarjeta: numTarjeta,
//                 nombreTarjeta: nombreTarjeta,
//                 cvc: cvc,
//                 expiracion: expiracion,
//                 tipo: tipo,

//             }

//         })
//         .then((response) => {
//             Swal.fire({
//                 'icon': 'success',
//                 'title': 'Su solicitud se proceso con éxito',
//                 'text': 'La tarjeta ha sido registrada satisfactoriamente',
//                 'confirmButtonText': 'Entendido'
//             }).then(() => {
//                 window.location.href = 'registrarMetodoPago.html';
//             });
//         })
//         .catch((error) => {
//             Swal.fire({
//                 'title': 'No se pudo registrar un nuevo metodo de pago',
//                 'text': `Ocurrió el siguiente error {error}`,
//                 'icon': 'error'
//             })
//         });
// };


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
inputNumTarjeta.addEventListener('change', validarTipoTarjeta);

/*inputNumTarjeta.addEventListener('input', validarTipoTarjeta);*/
'use strict';

//Función para habilitar o deshabilitar el input de la cédula jurídica
const tipoId = document.querySelector('#slt-tipoId');
const juridica = document.querySelector('#txt-cedulaJuridica');
const nombreRepresentante = document.querySelector('#txt-nombreRepresentante');
const primerApellidoRepresentante = document.querySelector('#txt-primerApellidoRepresentante');
const segundoApellidoRepresentante = document.querySelector('#txt-segundoApellidoRepresentante');
const tipoIdRepresentante = document.querySelector('#slt-tipoIdRepresentante');
const numeroIdRepresentante = document.querySelector('#txt-numeroIdRepresentante');
const fechaNacimientoRepresentante = document.querySelector('#txt-fechaNacimientoRepresentante');
const correoRepresentante = document.querySelector('#txt-correoRepresentante');

const enableSelect = () => {
    if (tipoId.value == 'Jurídica') {
        juridica.disabled = false;
        nombreRepresentante.disabled = false;
        primerApellidoRepresentante.disabled = false;
        segundoApellidoRepresentante.disabled = false;
        tipoIdRepresentante.disabled = false;
        numeroIdRepresentante.disabled = false;
        fechaNacimientoRepresentante.disabled = false;
        correoRepresentante.disabled = false;
    } else {
        juridica.disabled = true;
        nombreRepresentante.disabled = true;
        primerApellidoRepresentante.disabled = true;
        segundoApellidoRepresentante.disabled = true;
        tipoIdRepresentante.disabled = true;
        numeroIdRepresentante.disabled = true;
        fechaNacimientoRepresentante.disabled = true;
        correoRepresentante.disabled = true;

    }

};

tipoId.addEventListener('change', enableSelect);

//Declaración de variables

const btnRegistrarProveedor = document.querySelector('#btn-registrarProveedor');
const inputImagen = document.querySelector('#input-imagen');
const inputNombreNegocio = document.querySelector('#txt-nombreNegocio');
const inputTipoId = document.querySelector('#slt-tipoId');
const inputCedulaJuridica = document.querySelector('#txt-cedulaJuridica');
const inputNombreSolicitante = document.querySelector('#txt-nombreSolicitante');
const inputPrimeApellidoSolicitante = document.querySelector('#txt-primeApellidoSolicitante');
const inputSegundoApellidoSolicitante = document.querySelector('#txt-segundoApellidoSolicitante');
const inputNumeroId = document.querySelector('#txt-numeroID');
const inputTipoIdSolicitante = document.querySelector('#slt-tipoIdSolicitante');
const inputFechaNacimiento = document.querySelector('#txt-fechaNacimiento');
const inputCorreoSolicitante = document.querySelector('#txt-correoSolicitante');
const inputNombreRepresentante = document.querySelector('#txt-nombreRepresentante');
const inputPrimerApellidoRepresentante = document.querySelector('#txt-primerApellidoRepresentante');
const inputSegundoApellidoRepresentante = document.querySelector('#txt-segundoApellidoRepresentante');
const inputTipoIdRepresentante = document.querySelector('#slt-tipoIdRepresentante');
const inputNumeroIdRepresentante = document.querySelector('#txt-numeroIdRepresentante');
const inputFechaNacimientoRepresentante = document.querySelector('#txt-fechaNacimientoRepresentante');
const inputCorreoRepresentante = document.querySelector('#txt-correoRepresentante');
const inputProvincia = document.querySelector('#slt-provincia');
const inputCanton = document.querySelector('#slt-canton');
const inputDistrito = document.querySelector('#slt-distrito');
const inputOtrasSennas = document.getElementById('txt-otrasSennas');
const inputDescripcion = document.getElementById('txt-descripcion');



//Validación 


const validar = () => {
    let error = false;

    let regexCorreo = /^[a-zA-Z.0-9]+\@{1}[a-zA-Z.]+$/;

    if (inputNombreNegocio.value == '') {
        error = true;
        inputNombreNegocio.classList.add('error');
    } else {
        inputNombreNegocio.classList.remove('error');
    }

    if ((inputCedulaJuridica.value == '') && (juridica.disabled == false)) {
        error = true;
        inputCedulaJuridica.classList.add('error');
    } else {
        inputCedulaJuridica.classList.remove('error');
    }
    if (inputImagen.value == '') {
        error = true;
        inputImagen.classList.add('error');
    } else {
        inputImagen.classList.remove('error');
    }
    if (inputTipoId.value == '') {
        error = true;
        inputTipoId.classList.add('error');
    } else {
        inputTipoId.classList.remove('error');
    }

    if (inputNombreSolicitante.value == '') {
        error = true;
        inputNombreSolicitante.classList.add('error');
    } else {
        inputNombreSolicitante.classList.remove('error');
    }
    if (inputPrimeApellidoSolicitante.value == '') {
        error = true;
        inputPrimeApellidoSolicitante.classList.add('error');
    } else {
        inputPrimeApellidoSolicitante.classList.remove('error');
    }
    if (inputSegundoApellidoSolicitante.value == '') {
        error = true;
        inputSegundoApellidoSolicitante.classList.add('error');
    } else {
        inputSegundoApellidoSolicitante.classList.remove('error');
    }
    if (inputTipoIdSolicitante.value == '') {
        error = true;
        inputTipoIdSolicitante.classList.add('error');
    } else {
        inputTipoIdSolicitante.classList.remove('error');
    }
    if (inputNumeroId.value == '') {
        error = true;
        inputNumeroId.classList.add('error');
    } else {
        inputNumeroId.classList.remove('error');
    }

    if (inputFechaNacimiento.value == '') {
        error = true;
        inputFechaNacimiento.classList.add('error');
    } else {
        inputFechaNacimiento.classList.remove('error');
    }
    if (regexCorreo.test(inputCorreoSolicitante.value) == false) {
        error = true;
        inputCorreoSolicitante.classList.add('error');
    } else {
        inputCorreoSolicitante.classList.remove('error');
    }

    if ((inputNombreRepresentante.value == '') && (inputNombreRepresentante.disabled == false)) {
        error = true;
        inputNombreRepresentante.classList.add('error');
    } else {
        inputNombreRepresentante.classList.remove('error');
    }
    if ((inputPrimerApellidoRepresentante.value == '') && (primerApellidoRepresentante.disabled == false)) {
        error = true;
        inputPrimerApellidoRepresentante.classList.add('error');
    } else {
        inputPrimerApellidoRepresentante.classList.remove('error');
    }
    if ((inputSegundoApellidoRepresentante.value == '') && (segundoApellidoRepresentante.disabled == false)) {
        error = true;
        inputSegundoApellidoRepresentante.classList.add('error');
    } else {
        inputSegundoApellidoRepresentante.classList.remove('error');
    }
    if ((inputTipoIdRepresentante.value == '') && (tipoIdRepresentante.disabled == false)) {
        error = true;
        inputTipoIdRepresentante.classList.add('error');
    } else {
        inputTipoIdRepresentante.classList.remove('error');
    }
    if ((inputNumeroIdRepresentante.value == '') && (numeroIdRepresentante.disabled == false)) {
        error = true;
        inputNumeroIdRepresentante.classList.add('error');
    } else {
        inputNumeroIdRepresentante.classList.remove('error');
    }
    if ((inputFechaNacimientoRepresentante.value == '') && (fechaNacimientoRepresentante.disabled == false)) {
        error = true;
        inputFechaNacimientoRepresentante.classList.add('error');
    } else {
        inputFechaNacimientoRepresentante.classList.remove('error');
    }
    if ((regexCorreo.test(inputCorreoRepresentante.value) == false) && (correoRepresentante.disabled == false)) {
        error = true;
        inputCorreoRepresentante.classList.add('error');
    } else {
        inputCorreoRepresentante.classList.remove('error');
    }

    if (inputProvincia.value == '') {
        error = true;
        inputProvincia.classList.add('error');
    } else {
        inputProvincia.classList.remove('error');
    }
    if (inputCanton.value == '') {
        error = true;
        inputCanton.classList.add('error');
    } else {
        inputCanton.classList.remove('error');
    }
    if (inputDistrito.value == '') {
        error = true;
        inputDistrito.classList.add('error');
    } else {
        inputDistrito.classList.remove('error');
    }
    if (inputOtrasSennas.value == '') {
        error = true;
        inputOtrasSennas.classList.add('error');
    } else {
        inputOtrasSennas.classList.remove('error');
    }

    if (inputDescripcion.value == '') {
        error = true;
        inputDescripcion.classList.add('error');
    } else {
        inputDescripcion.classList.remove('error');
    }

    if (error == false) {
        imprimir();
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo registrar su solicitud',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    }

};

const calcularEdad = (nacimiento) => {
    let fechaActual = new Date();
    let edad = fechaActual.getFullYear() - nacimiento.getFullYear();

    if (fechaActual.getMonth() < nacimiento.getMonth()) {
        edad = edad - 1;
    } else {
        if ((fechaActual.getMonth() == nacimiento.getMonth()) && (fechaActual.getUTCDate() < nacimiento.getUTCDate())) {
            edad = edad - 1;
        }
    }
    return edad;
};

const imprimir = () => {
    let imagen = inputImagen.value;
    let nombreNegocio = inputNombreNegocio.value;
    let tipoId = inputTipoId.value;
    let cedulaJuridica = inputCedulaJuridica.value;
    let nombreSolicitante = inputNombreSolicitante.value;
    let primeApellidoSolicitante = inputPrimeApellidoSolicitante.value;
    let segundoApellidoSolicitante = inputSegundoApellidoSolicitante.value;
    let tipoIdSolicitante = inputTipoIdSolicitante.value;
    let numeroID = inputNumeroId.value;
    let fechaNacimiento = inputFechaNacimiento.value;
    //let edad = calcularEdad(fechaNacimiento);
    let correoSolicitante = inputCorreoSolicitante.value;
    let nombreRepresentante = inputNombreRepresentante.value;
    let primerApellidoRepresentante = inputPrimerApellidoRepresentante.value;
    let segundoApellidoRepresentante = inputSegundoApellidoRepresentante.value;
    let tipoIdRepresentante = inputTipoIdRepresentante.value;
    let numeroIdRepresentante = inputNumeroIdRepresentante.value;
    let fechaNacimientoRepresentante = inputFechaNacimientoRepresentante.value;
    //let edadRepresentante = calcularEdad(fechaNacimientoRepresentante);
    let correoRepresentante = inputCorreoRepresentante.value;
    let provincia = inputProvincia.value;
    let canton = inputCanton.value;
    let distrito = inputDistrito.value;
    let otrasSennas = inputOtrasSennas.value;
    let descripcion = inputDescripcion.value;


    console.log(imagen);
    console.log(nombreNegocio);
    console.log(tipoId);
    console.log(cedulaJuridica);
    console.log(nombreSolicitante);
    console.log(primeApellidoSolicitante);
    console.log(segundoApellidoSolicitante);
    console.log(tipoIdSolicitante);
    console.log(numeroID);
    console.log(fechaNacimiento);
    //console.log(edad);
    console.log(correoSolicitante);
    console.log(nombreRepresentante);
    console.log(primerApellidoRepresentante);
    console.log(segundoApellidoRepresentante);
    console.log(tipoIdRepresentante);
    console.log(numeroIdRepresentante);
    console.log(fechaNacimientoRepresentante);
    //console.log(edadRepresentante);
    console.log(correoRepresentante);
    console.log(provincia);
    console.log(canton);
    console.log(distrito);
    console.log(otrasSennas);
    console.log(descripcion);


    Swal.fire({
        'icon': 'success',
        'title': 'Su solicitud se proceso con éxito',
        'text': 'Pronto recibirá un correo electrónico',
        'confirmButtonText': 'Entendido'
    }).then(() => {
        window.location.href = 'inicio-sesion.html';
    });

};
btnRegistrarProveedor.addEventListener('click', validar);
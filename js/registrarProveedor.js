'use strict';

//Función para habilitar o deshabilitar el input de la cédula jurídica
const tipoId = document.querySelector('#slt-tipoId');
const Jurídica = document.querySelector('#txt-CédulaJurídica');
const nombreRepresentante = document.querySelector('#txt-nombreRepresentante');
const primerApellidoRepresentante = document.querySelector('#txt-primerApellidoRepresentante');
const segundoApellidoRepresentante = document.querySelector('#txt-segundoApellidoRepresentante');
const tipoIdRepresentante = document.querySelector('#slt-tipoIdRepresentante');
const numeroIdRepresentante = document.querySelector('#txt-numeroIdRepresentante');
const fechaNacimientoRepresentante = document.querySelector('#txt-fechaNacimientoRepresentante');
const correoRepresentante = document.querySelector('#txt-correoRepresentante');
const telefonoRep = document.querySelector('#txt-telefonoRepresentante');
const telefonoCliente = document.querySelector('#txt-telefono');
const tipoServicio = document.querySelector('#slt-tipoServicio');
const divRepreLega = document.querySelector('#div-repreLegal');
const divCedJuridica = document.querySelector('#div-cedJuridica');
//Imagen
//const divFoto = document.querySelector('#foto-usuario');


const enableSelect = () => {
    if (tipoId.value == 'Jurídica') {
        Jurídica.disabled = false;
        nombreRepresentante.disabled = false;
        primerApellidoRepresentante.disabled = false;
        segundoApellidoRepresentante.disabled = false;
        tipoIdRepresentante.disabled = false;
        numeroIdRepresentante.disabled = false;
        fechaNacimientoRepresentante.disabled = false;
        correoRepresentante.disabled = false;
        telefonoRep.disabled = false;
        divRepreLega.classList.add('mostrar');
        divRepreLega.classList.remove('ocultar');
        divCedJuridica.classList.add('mostrar');
        divCedJuridica.classList.remove('ocultar');


    } else {
        divRepreLega.classList.remove('mostrar');
        divRepreLega.classList.add('ocultar');
        divCedJuridica.classList.remove('mostrar');
        divCedJuridica.classList.add('ocultar');

        Jurídica.disabled = true;
        nombreRepresentante.disabled = true;
        primerApellidoRepresentante.disabled = true;
        segundoApellidoRepresentante.disabled = true;
        tipoIdRepresentante.disabled = true;
        numeroIdRepresentante.disabled = true;
        fechaNacimientoRepresentante.disabled = true;
        correoRepresentante.disabled = true;
        telefonoRep.disabled = true;

    }

};



enableSelect();
tipoId.addEventListener('change', enableSelect);

//Declaración de variables

const btnRegistrarProveedor = document.querySelector('#btn-registrarProveedor');
// const divFoto = document.querySelector('#input-imagen');
const inputNombreNegocio = document.querySelector('#txt-nombreNegocio');
const inputTipoId = document.querySelector('#slt-tipoId');
const inputCédulaJurídica = document.querySelector('#txt-CédulaJurídica');
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



const inputOtrasSennas = document.getElementById('txt-otrasSennas');
const inputDescripcion = document.getElementById('txt-descripcion');
const inputTelefonoRep = document.querySelector('#txt-telefonoRepresentante');
const inputTelefonoCliente = document.querySelector('#txt-telefono');
const inputTipoServicio = document.querySelector('#slt-tipoServicio');

const campoInputFacebook = document.querySelector('#txt-inputFacebook');
const campoInputInstagram = document.querySelector('#txt-inputInstagram');
const campoInputTwitter = document.querySelector('#txt-inputTwitter');

/* Inicio: Funciones para habilitar o desabilitar las opciones de cantón y distrito */



const habilitarCanton = () => {
    if (sltProvincia.value != '') {
        sltCanton.disabled = false;
        if (sltCanton.value != '') {
            sltDistritos.disabled = false;
        }
    } else {
        sltCanton.disabled = true;
        sltDistritos.disabled = true;
    }

};

const habilitarDistrito = () => {
    if (sltCanton.value != '') {
        sltDistritos.disabled = false;
    } else {
        sltDistritos.disabled = true;
    }

};

//Validación 





const boton_foto = document.querySelector('#btn-foto');
const imagenUsusario = document.querySelector('#foto-usuario');


let widget_cloudinary = cloudinary.createUploadWidget({
    cloudName: 'promascotascloudinary',
    uploadPreset: 'r17qodvl'
}, (err, result) => {
    if (!err && result && result.event === 'success') {
        console.log('Imagen subida con éxito', result.info);
        imagenUsusario.src = result.info.secure_url;
    }
});
boton_foto.addEventListener('click', () => {
    widget_cloudinary.open();
}, false);






// Tipos de servicio
let tiposdeServicios = [];

const obtenerTipodeServicios = async() => {
    tiposdeServicios = await listarTipoServicio();
}

const listarTipoServicio = async() => {
    let listaTipoDeServicio;
    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar-tipodeservicios',
            responseType: 'json'
        })
        .then((response) => {
            listaTipoDeServicio = response.data.ListaDeTipoDeServicio;
        })
        .catch((error) => {
            console.log(error)
        });

    return listaTipoDeServicio;
};

obtenerTipodeServicios();

// tipoServicio ; elemento

const llenarSelectTipoServicio = () => {


    tiposdeServicios.forEach(servicio => {
        let option = document.createElement("option");
        option.text = servicio.nombre;
        option.value = servicio._id;
        tipoServicio.add(option);
    });

};



// Fin Tipos de servicio

const validar = () => {
    let error = false;

    let regexCorreo = /^[a-zA-Z.0-9]+\@{1}[a-zA-Z.]+$/;

    if (inputNombreNegocio.value == '') {
        error = true;
        inputNombreNegocio.classList.add('error');
    } else {
        inputNombreNegocio.classList.remove('error');
    }

    if (inputTipoServicio.value == '') {
        error = true;
        inputTipoServicio.classList.add('error');
    } else {
        inputTipoServicio.classList.remove('error');
    }


    if ((inputCédulaJurídica.value == '') && (Jurídica.disabled == false)) {
        error = true;
        inputCédulaJurídica.classList.add('error');
    } else {
        inputCédulaJurídica.classList.remove('error');
    }
    if (imagenUsusario.value == '') {
        error = true;
        imagenUsusario.classList.add('error');
    } else {
        imagenUsusario.classList.remove('error');
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
    if (inputTelefonoCliente.value == '') {
        error = true;
        inputTelefonoCliente.classList.add('error');
    } else {
        inputTelefonoCliente.classList.remove('error');
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

    if ((inputTelefonoRep.value == '') && (inputTelefonoRep.disabled == false)) {
        error = true;
        inputTelefonoRep.classList.add('error');
    } else {
        inputTelefonoRep.classList.remove('error');
    }
    if ((regexCorreo.test(inputCorreoRepresentante.value) == false) && (correoRepresentante.disabled == false)) {
        error = true;
        inputCorreoRepresentante.classList.add('error');
    } else {
        inputCorreoRepresentante.classList.remove('error');
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
    if (sltDistritos.value == '') {
        error = true;
        sltDistritos.classList.add('error');
    } else {
        sltDistritos.classList.remove('error');
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





    if (campoInputFacebook.value == '') {
        error = true;
        campoInputFacebook.classList.add('error');
    } else {
        campoInputFacebook.classList.remove('error');
    }

    if (campoInputInstagram.value == '') {
        error = true;
        campoInputInstagram.classList.add('error');
    } else {
        campoInputInstagram.classList.remove('error');
    }

    if (campoInputTwitter.value == '') {
        error = true;
        campoInputTwitter.classList.add('error');
    } else {
        campoInputTwitter.classList.remove('error');
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

/////  inicio Funcion para generar password Random //////
function generadorPassword(passwordLength) {
    var variablesNumeros = "0123456789";
    var VariablesMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var VariablesMinusculas = "abcdefghijklmnopqrstuvwxyz";
    var VariablesEspeciales = "@#/.$+";
    var VariablesJuntas = variablesNumeros + VariablesMayusculas + VariablesMinusculas + VariablesEspeciales;
    var randomPass = Array(passwordLength);
    randomPass[0] = variablesNumeros;
    randomPass[1] = VariablesMayusculas;
    randomPass[2] = VariablesMinusculas;
    randomPass[3] = VariablesEspeciales;
    randomPass = randomPass.fill(VariablesJuntas, 4);
    return variableArreglo(randomPass.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('');
}


function variableArreglo(arreglo) {
    for (var i = arreglo.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arreglo[i];
        arreglo[i] = arreglo[j];
        arreglo[j] = temp;
    }
    return arreglo;
}

/////  Final Funcion para generar password Random //////


const imprimir = () => {

    let correo = inputCorreoSolicitante.value;
    let nombre = inputNombreSolicitante.value;
    let primerApellido = inputPrimeApellidoSolicitante.value;
    let segundoApellido = inputSegundoApellidoSolicitante.value;
    let genero = 'Proveedor Sin Genero';
    let tipoIdProveedor = inputTipoIdSolicitante.value;
    let numeroId = inputNumeroId.value;
    let nacimiento = inputFechaNacimiento.value;
    let cantidadMascotas = '';
    let contrasenna = generadorPassword(9);
    let provincia = sltProvincia.options[sltProvincia.selectedIndex].text;
    let canton = sltCanton.options[sltCanton.selectedIndex].text;
    let distrito = sltDistritos.options[sltDistritos.selectedIndex].text;
    let sennas = inputOtrasSennas.value;
    let tipoUsuario = 'proveedor';
    let estado = 'pendiente';
    let _Idservicio = '60791e45bf865d3a08577b3c'; // Arreglo Servicio Null 
    let avatar = imagenUsusario.src;
    let nombreNegocio = inputNombreNegocio.value;
    let tipoIdNegocio = inputTipoId.value;
    let juridicaId = Jurídica.value;
    let telefono = telefonoCliente.value;
    let descNegocio = inputDescripcion.value;
    let _IdtipoDeServicio = tipoServicio.value;
    let repLegalCorreo = correoRepresentante.value;
    let repLegalNombre = nombreRepresentante.value;
    let repLegalPrimerApell = primerApellidoRepresentante.value;
    let repLegalSegundoApel = segundoApellidoRepresentante.value;
    let repLegalTipoId = tipoIdRepresentante.value;
    let repLegalNumeroId = numeroIdRepresentante.value;
    let repLegalNacimiento = fechaNacimientoRepresentante.value;
    let repLegalTelefono = telefonoRep.value;
    let inputFacebook = campoInputFacebook.value;
    let inputInstagram = campoInputInstagram.value;
    let inputTwitter = campoInputTwitter.value;





    registrar_usuario(correo, nombre, primerApellido, segundoApellido, genero, tipoIdProveedor, numeroId, nacimiento, cantidadMascotas, contrasenna, provincia, canton, distrito, sennas, tipoUsuario, estado, _Idservicio, avatar, nombreNegocio, tipoIdNegocio, juridicaId, telefono, descNegocio, _IdtipoDeServicio, repLegalCorreo, repLegalNombre, repLegalPrimerApell, repLegalSegundoApel, repLegalTipoId, repLegalNumeroId, repLegalNacimiento, repLegalTelefono, inputFacebook, inputInstagram, inputTwitter);

    //let edad = calcularEdad(fechaNacimiento);

    Swal.fire({
        'icon': 'success',
        'title': 'Su solicitud se proceso con éxito',
        'text': 'Pronto recibirá un correo electrónico',
        'confirmButtonText': 'Entendido'
    }).then(() => {
        window.location.href = 'index.html';
    });

};


//cambiar imagen
// //const imgPerfil = document.querySelector('#img-proveedor');
// const archivoCambiado = (evento) => {
//     let elArchivo = evento.target.files[0];
//     let reader = new FileReader();

//     reader.onload = function(evt) {
//         let datosImagen = evt.target.result;

//         imgPerfil.src = event.target.result;
//     }
//     reader.readAsDataURL(elArchivo);

// }
// const readUrl = () => {
//     let tieneArchivoApi = (window.File && window.FileReader);

//     if (!tieneArchivoApi) {
//         console.log('El browser no soporta API');
//         return;
//     }
//     inputImagen.addEventListener('change', archivoCambiado)
// }


sltProvincia.addEventListener('change', habilitarCanton);
sltCanton.addEventListener('change', habilitarDistrito);
btnRegistrarProveedor.addEventListener('click', validar);
//window.addEventListener('load', readUrl);
window.addEventListener('load', llenarSelectTipoServicio);
window.addEventListener('load', habilitarCanton);
window.addEventListener('load', habilitarDistrito);
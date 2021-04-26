'use strict';


const btnRegistrarCliente = document.querySelector('#btn-registrarCliente');
const inputImagen = document.querySelector('#input-imagen');

const inputNombreCliente = document.querySelector('#txt-nombreCliente');
const inputPrimApellidoCliente = document.querySelector('#txt-primerApellidoCliente');
const inputSegApellidoCliente = document.querySelector('#txt-segApellidoCliente');
const sltGenero = document.querySelector('#slt-generoCliente');
const sltTipoId = document.querySelector('#slt-tipoID');
const inputNumId = document.querySelector('#txt-numID');
const inputNacimiento = document.querySelector('#txt-nacimiento');
const inputCorreo = document.querySelector('#txt-correo');
const inputCantMascotas = document.querySelector('#txt-cantMascotas');
//const sltProvincia = document.querySelector('#slt-provincia');
//const sltCanton = document.querySelector('#slt-canton');
//const sltDistritos = document.querySelector('#slt-distrito');
const inputOtrasSenias = document.querySelector('#txt-otrasSenias');

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

sltProvincia.addEventListener('change', habilitarCanton);

const habilitarDistrito = () => {
    if (sltCanton.value != '') {
        sltDistritos.disabled = false;
    } else {
        sltDistritos.disabled = true;
    }

};

sltCanton.addEventListener('change', habilitarDistrito);

/* Inicio: Funciones para habilitar o desabilitar las opciones de cantón y distrito */

/* Inicio: Función para validar la edad */

const validarEdad = () => {
    let nacimiento = new Date(inputNacimiento.value);
    const edadMin = 18;

    let edad = new Date(calcularEdad(nacimiento));

    if (edad >= edadMin) {
        validarDatos();
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No es posible registrar un menor de edad',
            'text': 'Muchas gracias por la comprensión',
            'confirmButtonText': 'Entendido'
        });
    }
};

/* Fin: Función para validar la edad */


/* Inicio: Función para calcular la edad */

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

/* Fin: Función para calcular la edad */

/* Inicio: Función para definir formato del tipo de ID */

/*
if (sltTipoId.value == 'nacional') {
if (regexCedNacional.test(inputNumId.value) == false) {
    error = true;
    inputNumId.classList.add('error');
} else {
    inputNumId.classList.remove('error');
}
} else if (sltTipoId.value == 'Dimex') {
if ((regexDimex1.test(inputNumId.value) == false) || (regexDimex2.test(inputNumId.value) == false)) {
    error = true;
    inputNumId.classList.add('error');
} else {
    inputNumId.classList.remove('error');
}
} else if (sltTipoId.value == 'pasaporte') {
if (regexPasaporte.test(inputNumId.value) == false) {
    error = true;
    inputNumId.classList.add('error');
} else {
    inputNumId.classList.remove('error');
}
} else {
sltTipoId.classList.remove('error');
}
*/

/* Fin: Función para definir formato del tipo de ID */

/* Inicio: Función para obtener la prevista de la imagen o avatar */



/* Fin: Función para obtener la prevista de la imagen o avatar */

/* Inicio: Función para validar los datos del cliente */

const validarDatos = () => {
    let error = false;

    let regexCorreo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let regexCedNacional = /^[1-9]-?\d{4}-?\d{4}$/;
    let regexDimex1 = /^\d{11}$/;
    let regexDimex2 = /^\d{12}$/;

    //Validación por núm de ID(regex) por tipo de ID

    if (inputImagen.value == '') {
        error = true;
        inputImagen.classList.add('error');
    } else {
        inputImagen.classList.remove('error');
    }
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
    if (regexCorreo.test(inputCorreo.value) == false) {
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
    if (sltDistritos.value == '') {
        error = true;
        sltDistritos.classList.add('error');
    } else {
        sltDistritos.classList.remove('error');
    }
    if (inputOtrasSenias.value == '') {
        error = true;
        inputOtrasSenias.classList.add('error');
    } else {
        inputOtrasSenias.classList.remove('error');
    }

    if (error == false) {
        imprimirDatos();
        /* SE NECESITA AGREGAR LA FUNCIÓN PARA ENVIAR LA CONTRASEÑA TEMPORAL*/
        // enviarClaveTemporal();
        Swal.fire({
            'icon': 'success',
            'title': 'Su solicitud se proceso con éxito',
            'text': 'Pronto recibirá un correo electrónico',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            window.location.href = 'index.html';
        });
    };
};
/* fin: Función para validar los datos del cliente */


let pass = '';

let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
    'abcdefghijklmnopqrstuvwxyz0123456789@#$';

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


/* Inicio: Función para imprimir los datos del cliente */

const imprimirDatos = () => {

    let correo = inputCorreo.value;
    let nombre = inputNombreCliente.value;
    let primerApellido = inputPrimApellidoCliente.value;
    let segundoApellido = inputSegApellidoCliente.value;
    let genero = sltGenero.value;
    let tipoIdProveedor = sltTipoId.value;
    let numeroId = inputNumId.value;
    let nacimiento = inputNacimiento.value;
    let cantidadMascotas = inputCantMascotas.value;
    let contrasenna = generadorPassword(9);
    let provincia = sltProvincia.options[sltProvincia.selectedIndex].text;
    let canton = sltCanton.options[sltCanton.selectedIndex].text;
    let distrito = sltDistritos.options[sltDistritos.selectedIndex].text;
    let sennas = inputOtrasSenias.value;
    let tipoUsuario = 'cliente';
    let estado = 'pendiente';
    let _Idservicio = '60791e45bf865d3a08577b3c'; // Arreglo Servicio Null 
    let avatar = 'inputImagen.value.Imagen';
    let nombreNegocio = '';
    let tipoIdNegocio = '';
    let juridicaId = '';
    let telefono = '';
    let descNegocio = '';
    let _IdtipoDeServicio = '607dbb107fa24051fcbfaafe';
    let repLegalCorreo = '';
    let repLegalNombre = '';
    let repLegalPrimerApell = '';
    let repLegalSegundoApel = '';
    let repLegalTipoId = '';
    let repLegalNumeroId = '';
    let repLegalNacimiento = '';
    let repLegalTelefono = '';


    registrar_usuario(correo, nombre, primerApellido, segundoApellido, genero, tipoIdProveedor, numeroId, nacimiento, cantidadMascotas, contrasenna, provincia, canton, distrito, sennas, tipoUsuario, estado, _Idservicio, avatar, nombreNegocio, tipoIdNegocio, juridicaId, telefono, descNegocio, _IdtipoDeServicio, repLegalCorreo, repLegalNombre, repLegalPrimerApell, repLegalSegundoApel, repLegalTipoId, repLegalNumeroId, repLegalNacimiento, repLegalTelefono);



}

/* Fin: Función para obtener los datos del cliente */

btnRegistrarCliente.addEventListener('click', validarEdad);
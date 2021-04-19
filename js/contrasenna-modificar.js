'use strict';
//Modal
let modal = document.querySelector('#modalModificarContrasenna');
let abrirModal = document.querySelector('#abrirModalContrasenna')
let cerrarModal = document.querySelector("#modalModificarContrasenna .close");
const contrasennaActual = document.querySelector('#contraseñaActual');
const contrasennaNueva = document.querySelector('#contraseñaNueva');
const contrasennaConfirmada = document.querySelector('#contraseñaConfirmacion');
const btnGuardarContrasenna = document.querySelector('#btn-guardar-nuevaCont');


abrirModal.addEventListener('click', () => {
    modal.style.display = 'block';
});

cerrarModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

/* Inicio: Validaciones de contraseñas */

const validarContrasennas = () => {

    console.log(cliente.contrasenna);
    console.log(cliente.nombre);
    console.log(contrasennaActual.value);

    let error = false;
    let regexNuevaContrasenna = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){6,12}$/;

    if (contrasennaActual.value === cliente.contrasenna) {
        console.log('si entró');
        if (contrasennaActual.value !== contrasennaNueva.value) {
            if (regexNuevaContrasenna.test(contrasennaNueva.value) == false) {
                error = true;
                contrasennaNueva.classList.add('error');
                Swal.fire({
                    'icon': 'warning',
                    'title': 'No se pudo registrar su solicitud',
                    'text': 'Las contraseña no cumple el estándar requerido',
                    'confirmButtonText': 'Entendido'
                });
            } else {
                contrasennaNueva.classList.remove('error');
                if (contrasennaNueva.value === contrasennaConfirmada.value) {
                    Swal.fire({
                        'icon': 'success',
                        'title': 'Su solicitud se proceso con éxito',
                        'text': 'Muchas gracias',
                        'confirmButtonText': 'Entendido'
                    }).then(() => {
                        window.location.href = 'perfilCliente.html';
                    });
                } else {
                    error = true;
                    Swal.fire({
                        'icon': 'warning',
                        'title': 'No se pudo registrar su solicitud',
                        'text': 'Las contraseñas nuevas no coinciden, favor revisar.',
                        'confirmButtonText': 'Entendido'
                    });
                }
            }
        } else {
            error = true;
            Swal.fire({
                'icon': 'warning',
                'title': 'No se pudo registrar su solicitud',
                'text': 'Las contraseña nueva debe ser diferente a la actual.',
                'confirmButtonText': 'Entendido'
            });
        }
    } else {
        error = true;
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo registrar su solicitud',
            'text': 'La contraseña actual no es correcta.',
            'confirmButtonText': 'Entendido'
        });
    }
};

/* Fin: Validaciones de contraseñas */


/* Inicio: Validaciones de formulario */

const validarDatos = () => {
    let error = false;



    //Validación por núm de ID(regex) por tipo de ID

    if (contrasennaActual.value == '') {
        error = true;
        contrasennaActual.classList.add('error');
    } else {
        contrasennaActual.classList.remove('error');
    }

    if (contrasennaNueva.value == '') {
        error = true;
        contrasennaNueva.classList.add('error');
    } else {
        contrasennaNueva.classList.remove('error');
    }

    if (contrasennaConfirmada.value == '') {
        error = true;
        contrasennaConfirmada.classList.add('error');
    } else {
        contrasennaConfirmada.classList.remove('error');
    }

    if (error == false) {
        validarContrasennas();
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo registrar su solicitud',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    }
};

/* Fin: Validaciones de formulario */

btnGuardarContrasenna.addEventListener('click', validarDatos);
'use strict';
//Modal
let modal = document.querySelector('#modalModificarContrasenna');
let abrirModal = document.querySelector('#abrirModalContrasenna')
let cerrarModal = document.querySelector("#modalModificarContrasenna .close");
const contrasennaActual = document.querySelector('#contrasennaActual');
const contrasennaNueva = document.querySelector('#contrasennaNueva');
const contrasennaConfirmada = document.querySelector('#contrasennaConfirmacion');
const btnGuardarContrasenna = document.querySelector('#btn-guardar-nuevaCont');


abrirModal.addEventListener('click', () => {
    modal.style.display = 'block';
});

cerrarModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

/* Inicio: Validaciones de contraseñas */

const obtenerDatos = () => {
    let claveActual = contrasennaActual.value;
    let claveNueva = contrasennaNueva.value;
    let claveConfirmada = contrasennaConfirmada.value;
    let correo = proveedor.correo;

    validarContrasennas(claveActual, claveNueva, claveConfirmada, correo);
}

const validarContrasennas = (claveActual, claveNueva, claveConfirmada, correo) => {

    let error = false;
    let regexNuevaContrasenna = /^(?:(?=.*[a-z])(?:(?=.*[A-Z])(?=.*[\d\W])|(?=.*\W)(?=.*\d))|(?=.*\W)(?=.*[A-Z])(?=.*\d)).{8,}$/;



    if (claveActual === proveedor.contrasenna) {
        console.log('si entró')
        if (claveActual !== claveNueva) {
            if (regexNuevaContrasenna.test(claveNueva) == false) {
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
                if (claveNueva === claveConfirmada) {
                    modificarContrasennaP(correo, claveNueva);
                    Swal.fire({
                        'icon': 'success',
                        'title': 'Solicitud completada',
                        'text': 'La contraseña se actualizó',
                        'confirmButtonText': 'Entendido'
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
        obtenerDatos();
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
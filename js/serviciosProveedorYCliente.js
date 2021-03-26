'use strict';

let servicioSeleccionado = document.querySelector('#slt-seleccionarServicio');
let tamanoSeleccionado = document.querySelector('#slt-seleccionarTamanno');
let fechaSeleccionada = document.querySelector('#txt-fechaServicio');
let provinciaSeleccionada = document.querySelector('#provincias');
let cantonSeleccionada = document.querySelector('#cantones');
let distritoSeleccionado = document.querySelector('#distritos');
let comentarioSeleccionado = document.querySelector('#txt-Comentarios');
let botonEnviar = document.querySelector('#btn-solicitar');


const validarCamposUsuario = () => {
    let error = false;


    if (servicioSeleccionado.value == '') {
        error = true;
        servicioSeleccionado.classList.add('error');
    } else {
        servicioSeleccionado.classList.remove('error');
    }
    if (tamanoSeleccionado.value == '') {
        error = true;
        tamanoSeleccionado.classList.add('error');
    } else {
        tamanoSeleccionado.classList.remove('error');
    }
    if (fechaSeleccionada.value == '') {
        error = true;
        fechaSeleccionada.classList.add('error');
    } else {
        fechaSeleccionada.classList.remove('error');
    }
    if (provinciaSeleccionada.value == '') {
        error = true;
        provinciaSeleccionada.classList.add('error');
    } else {
        provinciaSeleccionada.classList.remove('error');
    }
    if (cantonSeleccionada.value == '') {
        error = true;
        cantonSeleccionada.classList.add('error');
    } else {
        cantonSeleccionada.classList.remove('error');
    }
    if (distritoSeleccionado.value == '') {
        error = true;
        distritoSeleccionado.classList.add('error');
    } else {
        distritoSeleccionado.classList.remove('error');
    }
    if (comentarioSeleccionado.value == '') {
        error = true;
        comentarioSeleccionado.classList.add('error');
    } else {
        comentarioSeleccionado.classList.remove('error');
    }
    if (error == false) {
        imprimirCamposUsuario();
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo solicitar el servicio',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });
    }

};






const imprimirCamposUsuario = () => {
    let servicio = servicioSeleccionado.value;
    let tamanno = tamanoSeleccionado.value;
    let fecha = new Date(fechaSeleccionada.value);
    let provincia = provinciaSeleccionada.value;
    let canton = cantonSeleccionada.value;
    let distrito = distritoSeleccionado.value;
    let comentario = comentarioSeleccionado.value;


    console.log("Solicitar servicio");
    console.log("------------------");
    console.log("Servicio:", servicio);
    console.log("Tamaño:", tamanno);
    console.log("Fecha:", fecha);
    console.log("Provincia:", provincia);
    console.log("Cantón:", canton);
    console.log("Distrito:", distrito);
    console.log("Comentario:", comentario);

    Swal.fire({
        'icon': 'success',
        'title': 'Se ha enviado con éxito la solicitud de servicio',
        'confirmButtonText': 'Excelente'
    }).then(() => {
        window.location.href = 'compraServicio.html';
    });


};


botonEnviar.addEventListener('click', validarCamposUsuario);







//Acordeon
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}



// UsuarioProveedor
const corroborarTipoUsuario = () => {
    let usuario = JSON.parse(sessionStorage.getItem('usuarioConectado'));
    switch (usuario.tipo) {
        case 'Proveedor':
            if (document.querySelector('body').classList.contains('duennoBody')) {
                document.querySelector('body').classList.remove('duennoBody');
                document.querySelector('body').classList.add('proveedorBody');
            }
            if (document.querySelector('#logoProveedor').classList.contains('ocultar')) {
                document.querySelector('#logoProveedor').classList.remove('ocultar');
                document.querySelector('#logoProveedor').classList.add('activo');
            }
            if (document.querySelector('#logoCliente').classList.contains('activo')) {
                document.querySelector('#logoCliente').classList.remove('activo');
                document.querySelector('#logoCliente').classList.add('ocultar');
            }
            break;
        case 'Cliente':

            if (document.querySelector('body').classList.contains('proveedorBody')) {
                document.querySelector('body').classList.remove('proveedorBody');
                document.querySelector('body').classList.add('duennoBody');
            }
            if (document.querySelector('#logoCliente').classList.contains('ocultar')) {
                document.querySelector('#logoCliente').classList.remove('ocultar');
                document.querySelector('#logoCliente').classList.add('activo');
            }
            if (document.querySelector('#logoProveedor').classList.contains('activo')) {
                document.querySelector('#logoProveedor').classList.remove('activo');
                document.querySelector('#logoProveedor').classList.add('ocultar');
            }

            break;
    }
};

corroborarTipoUsuario();
// form proveedor
const botonAgregarServicio = document.querySelector('#btn-agregarServicio');
//variables de contenedores y botones de mas y menos de sercivios
const btnMasNuevoServicio0 = document.querySelector('#btn-masAgregarServicio0');
const contenedorNuevoServicio1 = document.querySelector('#agregarServicioContenedor1');
const btnMenosNuevoServicio1 = document.querySelector('#btn-menosAgregarServicio1');
const btnMasNuevoServicio1 = document.querySelector('#btn-masAgregarServicio1');
const contenedorNuevoServicio2 = document.querySelector('#agregarServicioContenedor2');
const btnMenosNuevoServicio2 = document.querySelector('#btn-menosAgregarServicio2');
const btnMasNuevoServicio2 = document.querySelector('#btn-masAgregarServicio2');
const contenedorNuevoServicio3 = document.querySelector('#agregarServicioContenedor3');
const btnMenosNuevoServicio3 = document.querySelector('#btn-menosAgregarServicio3');
const btnMasNuevoServicio3 = document.querySelector('#btn-masAgregarServicio3');
const contenedorNuevoServicio4 = document.querySelector('#agregarServicioContenedor4');
const btnMenosNuevoServicio4 = document.querySelector('#btn-menosAgregarServicio4');
const btnMasNuevoServicio4 = document.querySelector('#btn-masAgregarServicio4');

//variables de inputs de servicios
const inputNombreServicio0 = document.querySelector('#agregarServicioNombreServicio0');
const textareaDescripcionServicio0 = document.querySelector('#agregarServicioDescripcionServicio0');
const selectDomicilioServicio0 = document.querySelector('#agregarServicioADomicilio0');
const selectMonedaServicio0 = document.querySelector('#agregarServicioTipoMoneda0');
const inputMontoServicio0 = document.querySelector('#agregarServicioMonto0');
//
const inputNombreServicio1 = document.querySelector('#agregarServicioNombreServicio1');
const textareaDescripcionServicio1 = document.querySelector('#agregarServicioDescripcionServicio1');
const selectDomicilioServicio1 = document.querySelector('#agregarServicioADomicilio1');
const selectMonedaServicio1 = document.querySelector('#agregarServicioTipoMoneda1');
const inputMontoServicio1 = document.querySelector('#agregarServicioMonto1');
//
const inputNombreServicio2 = document.querySelector('#agregarServicioNombreServicio2');
const textareaDescripcionServicio2 = document.querySelector('#agregarServicioDescripcionServicio2');
const selectDomicilioServicio2 = document.querySelector('#agregarServicioADomicilio2');
const selectMonedaServicio2 = document.querySelector('#agregarServicioTipoMoneda2');
const inputMontoServicio2 = document.querySelector('#agregarServicioMonto2');
//
const inputNombreServicio3 = document.querySelector('#agregarServicioNombreServicio3');
const textareaDescripcionServicio3 = document.querySelector('#agregarServicioDescripcionServicio3');
const selectDomicilioServicio3 = document.querySelector('#agregarServicioADomicilio3');
const selectMonedaServicio3 = document.querySelector('#agregarServicioTipoMoneda3');
const inputMontoServicio3 = document.querySelector('#agregarServicioMonto3');
//
const inputNombreServicio4 = document.querySelector('#agregarServicioNombreServicio4');
const textareaDescripcionServicio4 = document.querySelector('#agregarServicioDescripcionServicio4');
const selectDomicilioServicio4 = document.querySelector('#agregarServicioADomicilio4');
const selectMonedaServicio4 = document.querySelector('#agregarServicioTipoMoneda4');
const inputMontoServicio4 = document.querySelector('#agregarServicioMonto4');
//
const validarServicio0 = () => {
        let error = false;

        if (inputNombreServicio0.value == '') {
            error = true;
            inputNombreServicio0.classList.add('error');
        } else {
            inputNombreServicio0.classList.remove('error');
        }

        if (textareaDescripcionServicio0.value == '') {
            error = true;
            textareaDescripcionServicio0.classList.add('error');
        } else {
            textareaDescripcionServicio0.classList.remove('error');
        }

        if (selectDomicilioServicio0.value == '') {
            error = true;
            selectDomicilioServicio0.classList.add('error');
        } else {
            selectDomicilioServicio0.classList.remove('error');
        }

        if (selectMonedaServicio0.value == '') {
            error = true;
            selectMonedaServicio0.classList.add('error');
        } else {
            selectMonedaServicio0.classList.remove('error');
        }

        if (inputMontoServicio0.value == '') {
            error = true;
            inputMontoServicio0.classList.add('error');
        } else {
            inputMontoServicio0.classList.remove('error');
        }

        if (error == false) {
            cargarNuevoServicio1()
        } else {
            Swal.fire({
                'icon': 'warning',
                'title': 'No se puede agregar un servicio nuevo',
                'text': 'Faltan campos por rellenar. Por favor revise los campos resaltados',
                'confirmButtonText': 'Entendido'
            });
        }
    }
    //
const validarServicio1 = () => {
        let error = false;

        if (inputNombreServicio1.value == '') {
            error = true;
            inputNombreServicio1.classList.add('error');
        } else {
            inputNombreServicio1.classList.remove('error');
        }

        if (textareaDescripcionServicio1.value == '') {
            error = true;
            textareaDescripcionServicio1.classList.add('error');
        } else {
            textareaDescripcionServicio1.classList.remove('error');
        }

        if (selectDomicilioServicio1.value == '') {
            error = true;
            selectDomicilioServicio1.classList.add('error');
        } else {
            selectDomicilioServicio1.classList.remove('error');
        }

        if (selectMonedaServicio1.value == '') {
            error = true;
            selectMonedaServicio1.classList.add('error');
        } else {
            selectMonedaServicio1.classList.remove('error');
        }

        if (inputMontoServicio1.value == '') {
            error = true;
            inputMontoServicio1.classList.add('error');
        } else {
            inputMontoServicio1.classList.remove('error');
        }

        if (error == false) {
            //imprimirCamposUsuario();
            cargarNuevoServicio2()
        } else {
            Swal.fire({
                'icon': 'warning',
                'title': 'No se puede agregar un servicio nuevo',
                'text': 'Faltan campos por rellenar. Por favor revise los campos resaltados',
                'confirmButtonText': 'Entendido'
            });
        }
    }
    //
const validarServicio2 = () => {
    let error = false;

    if (inputNombreServicio2.value == '') {
        error = true;
        inputNombreServicio2.classList.add('error');
    } else {
        inputNombreServicio2.classList.remove('error');
    }

    if (textareaDescripcionServicio2.value == '') {
        error = true;
        textareaDescripcionServicio2.classList.add('error');
    } else {
        textareaDescripcionServicio2.classList.remove('error');
    }

    if (selectDomicilioServicio2.value == '') {
        error = true;
        selectDomicilioServicio2.classList.add('error');
    } else {
        selectDomicilioServicio2.classList.remove('error');
    }

    if (selectMonedaServicio2.value == '') {
        error = true;
        selectMonedaServicio2.classList.add('error');
    } else {
        selectMonedaServicio2.classList.remove('error');
    }

    if (inputMontoServicio2.value == '') {
        error = true;
        inputMontoServicio2.classList.add('error');
    } else {
        inputMontoServicio2.classList.remove('error');
    }

    if (error == false) {
        //imprimirCamposUsuario();
        cargarNuevoServicio3()
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se puede agregar un servicio nuevo',
            'text': 'Faltan campos por rellenar. Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });
    }
}

const validarServicio3 = () => {
    let error = false;

    if (inputNombreServicio3.value == '') {
        error = true;
        inputNombreServicio3.classList.add('error');
    } else {
        inputNombreServicio3.classList.remove('error');
    }

    if (textareaDescripcionServicio3.value == '') {
        error = true;
        textareaDescripcionServicio3.classList.add('error');
    } else {
        textareaDescripcionServicio3.classList.remove('error');
    }

    if (selectDomicilioServicio3.value == '') {
        error = true;
        selectDomicilioServicio3.classList.add('error');
    } else {
        selectDomicilioServicio3.classList.remove('error');
    }

    if (selectMonedaServicio3.value == '') {
        error = true;
        selectMonedaServicio3.classList.add('error');
    } else {
        selectMonedaServicio3.classList.remove('error');
    }

    if (inputMontoServicio3.value == '') {
        error = true;
        inputMontoServicio3.classList.add('error');
    } else {
        inputMontoServicio3.classList.remove('error');
    }

    if (error == false) {
        //imprimirCamposUsuario();
        cargarNuevoServicio4()
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se puede agregar un servicio nuevo',
            'text': 'Faltan campos por rellenar. Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });
    }
}

const validarServicio4 = () => {
    let error = false;

    if (inputNombreServicio4.value == '') {
        error = true;
        inputNombreServicio4.classList.add('error');
    } else {
        inputNombreServicio4.classList.remove('error');
    }

    if (textareaDescripcionServicio4.value == '') {
        error = true;
        textareaDescripcionServicio4.classList.add('error');
    } else {
        textareaDescripcionServicio4.classList.remove('error');
    }

    if (selectDomicilioServicio4.value == '') {
        error = true;
        selectDomicilioServicio4.classList.add('error');
    } else {
        selectDomicilioServicio4.classList.remove('error');
    }

    if (selectMonedaServicio4.value == '') {
        error = true;
        selectMonedaServicio4.classList.add('error');
    } else {
        selectMonedaServicio4.classList.remove('error');
    }

    if (inputMontoServicio4.value == '') {
        error = true;
        inputMontoServicio4.classList.add('error');
    } else {
        inputMontoServicio4.classList.remove('error');
    }

    if (error == false) {
        //imprimirCamposUsuario();
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se puede agregar un servicio nuevo',
            'text': 'Faltan campos por rellenar. Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });
    }
}

const cargarNuevoServicio1 = () => {
    if (contenedorNuevoServicio1.classList.contains('ocultar')) {
        contenedorNuevoServicio1.classList.remove('ocultar');
        contenedorNuevoServicio1.classList.add('activo');
    }
};
const cerrarNuevoServicio1 = () => {
    contenedorNuevoServicio1.classList.add('ocultar');
    contenedorNuevoServicio1.classList.remove('activo');
    inputNombreServicio1.value = '';
    textareaDescripcionServicio1.value = '';
    selectDomicilioServicio1.value = '';
    selectMonedaServicio1.value = '';
    inputMontoServicio1.value = '';
};

const cargarNuevoServicio2 = () => {
    if (contenedorNuevoServicio2.classList.contains('ocultar')) {
        contenedorNuevoServicio2.classList.remove('ocultar');
        contenedorNuevoServicio2.classList.add('activo');
    }
};
const cerrarNuevoServicio2 = () => {
    contenedorNuevoServicio2.classList.add('ocultar');
    contenedorNuevoServicio2.classList.remove('activo');
    inputNombreServicio2.value = '';
    textareaDescripcionServicio2.value = '';
    selectDomicilioServicio2.value = '';
    selectMonedaServicio2.value = '';
    inputMontoServicio2.value = '';
};

const cargarNuevoServicio3 = () => {
    if (contenedorNuevoServicio3.classList.contains('ocultar')) {
        contenedorNuevoServicio3.classList.remove('ocultar');
        contenedorNuevoServicio3.classList.add('activo');
    }
};
const cerrarNuevoServicio3 = () => {
    contenedorNuevoServicio3.classList.add('ocultar');
    contenedorNuevoServicio3.classList.remove('activo');
    inputNombreServicio3.value = '';
    textareaDescripcionServicio3.value = '';
    selectDomicilioServicio3.value = '';
    selectMonedaServicio3.value = '';
    inputMontoServicio3.value = '';
};


const cargarNuevoServicio4 = () => {
    if (contenedorNuevoServicio4.classList.contains('ocultar')) {
        contenedorNuevoServicio4.classList.remove('ocultar');
        contenedorNuevoServicio4.classList.add('activo');
    }
};
const cerrarNuevoServicio4 = () => {
    contenedorNuevoServicio4.classList.add('ocultar')
    contenedorNuevoServicio4.classList.remove('activo');
    inputNombreServicio4.value = '';
    textareaDescripcionServicio4.value = '';
    selectDomicilioServicio4.value = '';
    selectMonedaServicio4.value = '';
    inputMontoServicio4.value = '';
};


const cargarNuevoServicio5 = () => {
    if (contenedorNuevoServicio5.classList.contains('ocultar')) {
        contenedorNuevoServicio5.classList.remove('ocultar');
        contenedorNuevoServicio5.classList.add('activo');
        Swal.fire({
            'icon': 'warning',
            'title': 'Máximo de servicios',
            'text': 'Puede agregar un máximo de cinco servicios por vez',
            'confirmButtonText': 'Entendido'
        });
    }
};
const cerrarNuevoServicio5 = () => {
    contenedorNuevoServicio5.classList.add('ocultar');
    contenedorNuevoServicio5.classList.remove('activo');
    inputNombreServicio5.value = '';
    textareaDescripcionServicio5.value = '';
    selectDomicilioServicio5.value = '';
    selectMonedaServicio5.value = '';
    inputMontoServicio5.value = '';
};


btnMasNuevoServicio0.addEventListener('click', validarServicio0);
btnMenosNuevoServicio1.addEventListener('click', cerrarNuevoServicio1);
btnMasNuevoServicio1.addEventListener('click', validarServicio1);
btnMenosNuevoServicio2.addEventListener('click', cerrarNuevoServicio2);
btnMasNuevoServicio2.addEventListener('click', validarServicio2);
btnMenosNuevoServicio3.addEventListener('click', cerrarNuevoServicio3);
btnMasNuevoServicio3.addEventListener('click', validarServicio3);
btnMenosNuevoServicio4.addEventListener('click', cerrarNuevoServicio4);


//Validación final e impresión de datos
const validarServicioAgregado0 = () => {
    let error = false;

    if (inputNombreServicio0.value == '') {
        error = true;
        inputNombreServicio0.classList.add('error');
    } else {
        inputNombreServicio0.classList.remove('error');
    }
    if (textareaDescripcionServicio0.value == '') {
        error = true;
        textareaDescripcionServicio0.classList.add('error');
    } else {
        textareaDescripcionServicio0.classList.remove('error');
    }
    if (selectDomicilioServicio0.value == '') {
        error = true;
        selectDomicilioServicio0.classList.add('error');
    } else {
        selectDomicilioServicio0.classList.remove('error');
    }
    if (selectMonedaServicio0.value == '') {
        error = true;
        selectMonedaServicio0.classList.add('error');
    } else {
        selectMonedaServicio0.classList.remove('error');
    }
    if (inputMontoServicio0.value == '') {
        error = true;
        inputMontoServicio0.classList.add('error');
    } else {
        inputMontoServicio0.classList.remove('error');
    }

    if (error == false) {
        imprimirServicioAgregado0();
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se puede agregar un servicio nuevo',
            'text': 'Faltan campos por rellenar. Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });
    }
};

const imprimirServicioAgregado0 = () => {
    let nombreServicioAgregado = inputNombreServicio0.value;
    let descripcionServicioAgregado = textareaDescripcionServicio0.value;
    let servicioDomicilioAgregado = selectDomicilioServicio0.value;
    let tipoMonedaServicioAgregado = selectMonedaServicio0.value;
    let montoServicioAgregado = inputMontoServicio0.value;


    console.log("Servicio agregado número 1");
    console.log("------------------");
    console.log("Nombre del servicio:", nombreServicioAgregado);
    console.log("Tamaño:", descripcionServicioAgregado);
    console.log("¿Cuenta con servicio a domicilio?:", servicioDomicilioAgregado);
    console.log("Tipo de moneda:", tipoMonedaServicioAgregado);
    console.log("Monto por servicio:", montoServicioAgregado);
    console.log("------------------");
    console.log("------------------");

    Swal.fire({
        'icon': 'success',
        'title': 'Se ha agregado con éxito el o los servicios',
        'confirmButtonText': 'Excelente'
    }).then(() => {
        window.location.href = 'perfilProveedor.html';
    });
};

///
const validarServicioAgregado1 = () => {
    let error = false;

    if (inputNombreServicio1.value == '') {
        error = true;
        inputNombreServicio1.classList.add('error');
    } else {
        inputNombreServicio1.classList.remove('error');
    }
    if (textareaDescripcionServicio1.value == '') {
        error = true;
        textareaDescripcionServicio1.classList.add('error');
    } else {
        textareaDescripcionServicio1.classList.remove('error');
    }
    if (selectDomicilioServicio1.value == '') {
        error = true;
        selectDomicilioServicio1.classList.add('error');
    } else {
        selectDomicilioServicio1.classList.remove('error');
    }
    if (selectMonedaServicio1.value == '') {
        error = true;
        selectMonedaServicio1.classList.add('error');
    } else {
        selectMonedaServicio1.classList.remove('error');
    }
    if (inputMontoServicio1.value == '') {
        error = true;
        inputMontoServicio1.classList.add('error');
    } else {
        inputMontoServicio1.classList.remove('error');
    }
    if (error == false) {
        imprimirServicioAgregado1();
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se puede agregar un servicio nuevo',
            'text': 'Faltan campos por rellenar. Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });
    }
};


const imprimirServicioAgregado1 = () => {
    let nombreServicioAgregado = inputNombreServicio1.value;
    let descripcionServicioAgregado = textareaDescripcionServicio1.value;
    let servicioDomicilioAgregado = selectDomicilioServicio1.value;
    let tipoMonedaServicioAgregado = selectMonedaServicio1.value;
    let montoServicioAgregado = inputMontoServicio1.value;


    console.log("Servicio agregado número 2");
    console.log("------------------");
    console.log("Nombre del servicio:", nombreServicioAgregado);
    console.log("Tamaño:", descripcionServicioAgregado);
    console.log("¿Cuenta con servicio a domicilio?:", servicioDomicilioAgregado);
    console.log("Tipo de moneda:", tipoMonedaServicioAgregado);
    console.log("Monto por servicio:", montoServicioAgregado);
    console.log("------------------");
    console.log("------------------");

    Swal.fire({
        'icon': 'success',
        'title': 'Se ha agregado con éxito el o los servicios',
        'confirmButtonText': 'Excelente'
    }).then(() => {
        window.location.href = 'perfilProveedor.html';
    });


};

///
const validarServicioAgregado2 = () => {
    let error = false;

    if (inputNombreServicio2.value == '') {
        error = true;
        inputNombreServicio2.classList.add('error');
    } else {
        inputNombreServicio2.classList.remove('error');
    }
    if (textareaDescripcionServicio2.value == '') {
        error = true;
        textareaDescripcionServicio2.classList.add('error');
    } else {
        textareaDescripcionServicio2.classList.remove('error');
    }
    if (selectDomicilioServicio2.value == '') {
        error = true;
        selectDomicilioServicio2.classList.add('error');
    } else {
        selectDomicilioServicio2.classList.remove('error');
    }
    if (selectMonedaServicio2.value == '') {
        error = true;
        selectMonedaServicio2.classList.add('error');
    } else {
        selectMonedaServicio2.classList.remove('error');
    }
    if (inputMontoServicio2.value == '') {
        error = true;
        inputMontoServicio2.classList.add('error');
    } else {
        inputMontoServicio2.classList.remove('error');
    }
    if (error == false) {
        imprimirServicioAgregado2();
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se puede agregar un servicio nuevo',
            'text': 'Faltan campos por rellenar. Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });
    }
};

const imprimirServicioAgregado2 = () => {
    let nombreServicioAgregado = inputNombreServicio2.value;
    let descripcionServicioAgregado = textareaDescripcionServicio2.value;
    let servicioDomicilioAgregado = selectDomicilioServicio2.value;
    let tipoMonedaServicioAgregado = selectMonedaServicio2.value;
    let montoServicioAgregado = inputMontoServicio2.value;


    console.log("Servicio agregado número 3");
    console.log("------------------");
    console.log("Nombre del servicio:", nombreServicioAgregado);
    console.log("Tamaño:", descripcionServicioAgregado);
    console.log("¿Cuenta con servicio a domicilio?:", servicioDomicilioAgregado);
    console.log("Tipo de moneda:", tipoMonedaServicioAgregado);
    console.log("Monto por servicio:", montoServicioAgregado);
    console.log("------------------");
    console.log("------------------");

    Swal.fire({
        'icon': 'success',
        'title': 'Se ha agregado con éxito el o los servicios',
        'confirmButtonText': 'Excelente'
    }).then(() => {
        window.location.href = 'perfilProveedor.html';
    });
};

///
const validarServicioAgregado3 = () => {
    let error = false;

    if (inputNombreServicio3.value == '') {
        error = true;
        inputNombreServicio3.classList.add('error');
    } else {
        inputNombreServicio3.classList.remove('error');
    }
    if (textareaDescripcionServicio3.value == '') {
        error = true;
        textareaDescripcionServicio3.classList.add('error');
    } else {
        textareaDescripcionServicio3.classList.remove('error');
    }
    if (selectDomicilioServicio3.value == '') {
        error = true;
        selectDomicilioServicio3.classList.add('error');
    } else {
        selectDomicilioServicio3.classList.remove('error');
    }
    if (selectMonedaServicio3.value == '') {
        error = true;
        selectMonedaServicio3.classList.add('error');
    } else {
        selectMonedaServicio3.classList.remove('error');
    }
    if (inputMontoServicio3.value == '') {
        error = true;
        inputMontoServicio3.classList.add('error');
    } else {
        inputMontoServicio3.classList.remove('error');
    }
    if (error == false) {
        imprimirServicioAgregado3();
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se puede agregar un servicio nuevo',
            'text': 'Faltan campos por rellenar. Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });
    }
};

const imprimirServicioAgregado3 = () => {
    let nombreServicioAgregado = inputNombreServicio3.value;
    let descripcionServicioAgregado = textareaDescripcionServicio3.value;
    let servicioDomicilioAgregado = selectDomicilioServicio3.value;
    let tipoMonedaServicioAgregado = selectMonedaServicio3.value;
    let montoServicioAgregado = inputMontoServicio3.value;


    console.log("Servicio agregado número 4");
    console.log("------------------");
    console.log("Nombre del servicio:", nombreServicioAgregado);
    console.log("Tamaño:", descripcionServicioAgregado);
    console.log("¿Cuenta con servicio a domicilio?:", servicioDomicilioAgregado);
    console.log("Tipo de moneda:", tipoMonedaServicioAgregado);
    console.log("Monto por servicio:", montoServicioAgregado);
    console.log("------------------");
    console.log("------------------");

    Swal.fire({
        'icon': 'success',
        'title': 'Se ha agregado con éxito el o los servicios',
        'confirmButtonText': 'Excelente'
    }).then(() => {
        window.location.href = 'perfilProveedor.html';
    });
};

///
const validarServicioAgregado4 = () => {
    let error = false;

    if (inputNombreServicio4.value == '') {
        error = true;
        inputNombreServicio4.classList.add('error');
    } else {
        inputNombreServicio4.classList.remove('error');
    }
    if (textareaDescripcionServicio4.value == '') {
        error = true;
        textareaDescripcionServicio4.classList.add('error');
    } else {
        textareaDescripcionServicio4.classList.remove('error');
    }
    if (selectDomicilioServicio4.value == '') {
        error = true;
        selectDomicilioServicio4.classList.add('error');
    } else {
        selectDomicilioServicio4.classList.remove('error');
    }
    if (selectMonedaServicio4.value == '') {
        error = true;
        selectMonedaServicio4.classList.add('error');
    } else {
        selectMonedaServicio4.classList.remove('error');
    }
    if (inputMontoServicio4.value == '') {
        error = true;
        inputMontoServicio4.classList.add('error');
    } else {
        inputMontoServicio4.classList.remove('error');
    }
    if (error == false) {
        imprimirServicioAgregado4();
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se puede agregar un servicio nuevo',
            'text': 'Faltan campos por rellenar. Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });
    }
};

const imprimirServicioAgregado4 = () => {
    let nombreServicioAgregado = inputNombreServicio4.value;
    let descripcionServicioAgregado = textareaDescripcionServicio4.value;
    let servicioDomicilioAgregado = selectDomicilioServicio4.value;
    let tipoMonedaServicioAgregado = selectMonedaServicio4.value;
    let montoServicioAgregado = inputMontoServicio4.value;


    console.log("Servicio agregado número 5");
    console.log("------------------");
    console.log("Nombre del servicio:", nombreServicioAgregado);
    console.log("Tamaño:", descripcionServicioAgregado);
    console.log("¿Cuenta con servicio a domicilio?:", servicioDomicilioAgregado);
    console.log("Tipo de moneda:", tipoMonedaServicioAgregado);
    console.log("Monto por servicio:", montoServicioAgregado);
    console.log("------------------");
    console.log("------------------");

    Swal.fire({
        'icon': 'success',
        'title': 'Se ha agregado con éxito el o los servicios',
        'confirmButtonText': 'Excelente'
    }).then(() => {
        window.location.href = 'perfilProveedor.html';
    });
};

const validarServiciosAgregados = () => {
    validarServicioAgregado0()
    if (contenedorNuevoServicio1.classList.contains('activo')) {
        validarServicioAgregado1()
    }
    if (contenedorNuevoServicio2.classList.contains('activo')) {
        validarServicioAgregado2()
    }
    if (contenedorNuevoServicio3.classList.contains('activo')) {
        validarServicioAgregado3()
    }
    if (contenedorNuevoServicio4.classList.contains('activo')) {
        validarServicioAgregado3()
    }
};

//validar todo el form de proveedor
botonAgregarServicio.addEventListener('click', validarServiciosAgregados);
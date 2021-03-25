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
        window.location.href = 'perfilCliente.html';
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
            break;
        case 'Cliente':

            if (document.querySelector('body').classList.contains('proveedorBody')) {
                document.querySelector('body').classList.remove('proveedorBody');
                document.querySelector('body').classList.add('duennoBody');
            }

            break;
    }
};

corroborarTipoUsuario();

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

const cargarNuevoServicio1 = () => {
    if (contenedorNuevoServicio1.classList.contains('ocultar')) {
        contenedorNuevoServicio1.classList.remove('ocultar')
    }
};
const cerrarNuevoServicio1 = () => {
    contenedorNuevoServicio1.classList.add('ocultar')
};

const cargarNuevoServicio2 = () => {
    if (contenedorNuevoServicio2.classList.contains('ocultar')) {
        contenedorNuevoServicio2.classList.remove('ocultar')
    }
};
const cerrarNuevoServicio2 = () => {
    contenedorNuevoServicio2.classList.add('ocultar')
};

const cargarNuevoServicio3 = () => {
    if (contenedorNuevoServicio3.classList.contains('ocultar')) {
        contenedorNuevoServicio3.classList.remove('ocultar')
    }
};
const cerrarNuevoServicio3 = () => {
    contenedorNuevoServicio3.classList.add('ocultar')
};


const cargarNuevoServicio4 = () => {
    if (contenedorNuevoServicio4.classList.contains('ocultar')) {
        contenedorNuevoServicio4.classList.remove('ocultar');
        Swal.fire({
            'icon': 'warning',
            'title': 'Máximo de servicios',
            'text': 'Puede agregar un máximo de cinco servicios por vez',
            'confirmButtonText': 'Entendido'
        });
    }
};
const cerrarNuevoServicio4 = () => {
    contenedorNuevoServicio4.classList.add('ocultar')
};


const cargarNuevoServicio5 = () => {
    if (contenedorNuevoServicio5.classList.contains('ocultar')) {
        contenedorNuevoServicio5.classList.remove('ocultar')




    }
};
const cerrarNuevoServicio5 = () => {
    contenedorNuevoServicio5.classList.add('ocultar')
};


btnMasNuevoServicio0.addEventListener('click', cargarNuevoServicio1);
btnMenosNuevoServicio1.addEventListener('click', cerrarNuevoServicio1);
btnMasNuevoServicio1.addEventListener('click', cargarNuevoServicio2);
btnMenosNuevoServicio2.addEventListener('click', cerrarNuevoServicio2);
btnMasNuevoServicio2.addEventListener('click', cargarNuevoServicio3);
btnMenosNuevoServicio3.addEventListener('click', cerrarNuevoServicio3);
btnMasNuevoServicio3.addEventListener('click', cargarNuevoServicio4);
btnMenosNuevoServicio4.addEventListener('click', cerrarNuevoServicio4);
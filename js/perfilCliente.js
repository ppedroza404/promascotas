'use strict';


const btnEditarDatosCliente = document.querySelector('#btn-editarDatosCliente');
const btnGuardarInfoCliente = document.querySelector('#btn-guardar-infoCliente');
const cliente = JSON.parse(sessionStorage.getItem('usuarioConectado'));
const elementoContrasenna = document.getElementById('cliente-modificarContrasenna');
//const fotoMascota = document.querySelector('#imagen-prev');
//const fotoMascota = document.getElementById('imagen-prev');

const vacunasMascota = document.querySelector('#tbl-vacunasMascota tbody');

// Variables para datos del cliente
// const pNombreCliente = document.querySelector('#txt-nombreCliente');
// const pCorreoCliente = document.querySelector('#txt-correo');
// const pNumIdCliente = document.querySelector('#txt-numId');
// const pDireccionCliente = document.querySelector('#txt-direccion');
// const pOtrasSenias = document.querySelector('#txt-otrasSenias');
// const pGeneroCliente = document.querySelector('#txt-genero');


const pNombreCliente = document.querySelector('#txt-nombreCliente');
const pPrimerApellido = document.querySelector('#txt-primerApellido');
const pSegundoApellido = document.querySelector('#txt-segundoApellido');
const pCorreo = document.querySelector('#txt-correo');
const pNumId = document.querySelector('#txt-numId');
const pProvincia = document.querySelector('#txt-provincia');
const pCanton = document.querySelector('#txt-canton');
const pDistrito = document.querySelector('#txt-distrito');
const pOtrasSennas = document.querySelector('#txt-otrasSennas');

// Variables para datos de la mascota
const pNombreMascota = document.querySelector('#txt-nombreMascota');
const pRazaMascota = document.querySelector('#txt-raza');
const pGeneroMascota = document.querySelector('#txt-generoMascota');
const pTipoMascota = document.querySelector('#txt-tipoMascota');
const pEdadMascota = document.querySelector('#txt-edadMascota');
const pPadecimientosMascota = document.querySelector('#txt-padecimientos');

/* Inicio: Función para desplegar la información de las mascotas en un click a la foto */

function mostrarInfoMascota() {

    let infoMascota = document.getElementById('seccion-infoMascota');
    let infoVacunas = document.getElementById('seccion-tablaMascotas');
    if (infoMascota.style.display === "none") {
        infoMascota.style.display = "block";
    } else {
        infoMascota.style.display = "none";
    }
    if (infoVacunas.style.display === "none") {
        infoVacunas.style.display = "block";
    } else {
        infoVacunas.style.display = "none";
    }
    obtenerMascotaCliente();
    mostrarTablaVacunas();
};

// No está haciendo nada!
//fotoMascota.addEventListener('click', mostrarInfoMascota);

/* Fin: Función para desplegar la información de las mascotas en un click a la foto */

/* Inicio: Variables que muestran la información del usuario conectado en el perfil */

// pNombreCliente.value = `${cliente.nombre} ${cliente.primerApellido} ${cliente.segundoApellido}`;
// pCorreoCliente.value = cliente.correo;
// pNumIdCliente.value = cliente.numeroId;
// pDireccionCliente.value = `${cliente.provincia}, ${cliente.canton}, ${cliente.distrito}`;
// pOtrasSenias.value = cliente.sennas;
// pGeneroCliente.value = cliente.genero;


pNombreCliente.value = cliente.nombre;
pPrimerApellido.value = cliente.primerApellido;
pSegundoApellido.value = cliente.segundoApellido;
pCorreo.value = cliente.correo;
pNumId.value = cliente.numeroId;
pProvincia.value = cliente.provincia;
pCanton.value = cliente.canton;
pDistrito.value = cliente.distrito;
pOtrasSennas.value = cliente.sennas;


/* Fin: Variables que muestran la información del usuario conectado en el perfil */


/* Inicio: Función para acomodar los proveedores mejor calificados según calificación */

let lista_calificadosOrdenada = [];

const acomodarLista = (lista_proveedoresCalificados) => {
        return lista_proveedoresCalificados.sort(function(a, b) {
            return ((a.calificacion < b.calificacion) ? 1 : ((a.calificacion > b.calificacion) ? -1 : 0));
        });
    }
    //lista_calificadosOrdenada = acomodarLista(lista_proveedoresCalificados, 'calificacion').slice(0, 20);

/* Inicio: Función para acomodar los proveedores mejor calificados según calificación */

/* Inicio: Función para ingresar cada valor de la lista acomodada en un OL LI*/

lista_calificadosOrdenada.forEach(proveedor => {
    let listaOrdenada = document.getElementById('lista-proveedoresCalificados');
    let informacion = `${proveedor.n_negocio}`;
    let entrada = document.createElement('li');
    entrada.appendChild(document.createTextNode(informacion));
    listaOrdenada.appendChild(entrada);
})

// Sección derecha
lista_calificadosOrdenada.forEach(proveedor => {
    let listaOrdenadaCalificaciones = document.getElementById('lista-proveedoresCalificadosDer');
    let calificaciones = `${proveedor.calificacion}`;
    let entrada2 = document.createElement('li');
    entrada2.appendChild(document.createTextNode(calificaciones));
    listaOrdenadaCalificaciones.appendChild(entrada2);
})

/* Fin: Función para ingresar cada valor de la lista acomodada en un OL LI*/


/* Inicio: Función que obtiene la información de la mascota que pertenece al usuario conectado */

// const obtenerMascotaCliente = () => {
//         mascotasCliente.forEach(mascota => {
//             if (cliente.correo == mascota.correo) {
//                 pNombreMascota.value = mascota.nombre;
//                 pRazaMascota.value = mascota.raza;
//                 pGeneroMascota.value = mascota.genero;
//                 pTipoMascota.value = mascota.tipo;
//                 pEdadMascota.value = mascota.edad;
//                 pPadecimientosMascota.value = mascota.padecimientos;

//             }
//         });
//     }
/* Fin: Función que obtiene la información de la mascota que pertenece al usuario conectado */

/* Inicio: Función para mostrar datos de vacunas en la tabla */

// const mostrarTablaVacunas = () => {

//     mascotasCliente.forEach(mascota => {
//         if (cliente.correo == mascota.correo) {


//             mascota.vacunas.forEach(vacuna => {

//                 let fila = vacunasMascota.insertRow();
//                 fila.insertCell().innerHTML = vacuna.nombre;
//                 fila.insertCell().innerHTML = vacuna.fecha;
//                 fila.insertCell().innerHTML = vacuna.fabricante;

//             })

//         }

//     });
//     limpiarTabla();

// }

const limpiarTabla = () => {
    for (var i = vacunasMascota.rows.length - 4; i >= 0; i--) {
        vacunasMascota.deleteRow(i);
    }
}

//mostrarTablaVacunas();

/* Fin: Función para mostrar datos de vacunas en la tabla */

/* Inicio: Función para habilitar campos a editar del cliente */

const habilitarCamposCliente = () => {
    btnGuardarInfoCliente.classList.remove('ocultarInfoMascota');
    elementoContrasenna.classList.remove('ocultar');

    pNombreCliente.disabled = false;
    pPrimerApellido.disabled = false;
    pSegundoApellido.disabled = false;
    pProvincia.disabled = false;
    pCanton.disabled = false;
    pDistrito.disabled = false;
    pOtrasSennas.disabled = false;
}

/* fin: Función para habilitar campos a editar del cliente */

const modificarCliente1 = () => {
    modificarCliente(pNombreCliente.value, pPrimerApellido.value, pSegundoApellido.value, pCorreo.value, pNumId.value, pProvincia.value, pCanton.value, pDistrito.value, pOtrasSennas.value);



    sessionStorage.setItem("autosave", cliente.value, cliente.primerApellido, cliente.segundoApellido);



};

btnEditarDatosCliente.addEventListener('click', habilitarCamposCliente);

btnGuardarInfoCliente.addEventListener('click', modificarCliente1);


// update session storage
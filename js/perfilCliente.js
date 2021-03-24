'use strict';


const btnEditarDatosCliente = document.querySelector('#btn-editarDatosCliente');
const cliente = JSON.parse(sessionStorage.getItem('usuarioConectado'));
const fotoMascota = document.querySelector('#imagen-prev');
const vacunasMascota = document.querySelector('#tbl-vacunasMascota tbody');

// Variables para datos del cliente
const pNombreCliente = document.querySelector('#txt-nombreCliente');
const pCorreoCliente = document.querySelector('#txt-correo');
const pNumIdCliente = document.querySelector('#txt-numId');
const pDireccionCliente = document.querySelector('#txt-direccion');
const pOtrasSenias = document.querySelector('#txt-otrasSenias');
const pGeneroCliente = document.querySelector('#txt-genero');

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

fotoMascota.addEventListener('onclick', mostrarInfoMascota);

/* Fin: Función para desplegar la información de las mascotas en un click a la foto */

/* Inicio: Variables que muestran la información del usuario conectado en el perfil */

pNombreCliente.value = `${cliente.nombre} ${cliente.primerApellido} ${cliente.segundoApellido}`;
pCorreoCliente.value = cliente.correo;
pNumIdCliente.value = cliente.id;
pDireccionCliente.value = `${cliente.provincia}, ${cliente.canton}, ${cliente.distrito}`;
pOtrasSenias.value = cliente.sennas;
pGeneroCliente.value = cliente.sexo;

/* Fin: Variables que muestran la información del usuario conectado en el perfil */

/* Inicio: Función que obtiene la información de la mascota que pertenece al usuario conectado */

const obtenerMascotaCliente = () => {
        mascotasCliente.forEach(mascota => {
            if (cliente.correo == mascota.correo) {
                pNombreMascota.value = mascota.nombre;
                pRazaMascota.value = mascota.raza;
                pGeneroMascota.value = mascota.genero;
                pTipoMascota.value = mascota.tipo;
                pEdadMascota.value = mascota.edad;
                pPadecimientosMascota.value = mascota.padecimientos;

            }
        });
    }
    /* Fin: Función que obtiene la información de la mascota que pertenece al usuario conectado */

/* Inicio: Función para mostrar datos de vacunas en la tabla */

const mostrarTablaVacunas = () => {

    mascotasCliente.forEach(mascota => {
        if ('adeblas@gmail.com' == mascota.correo) {


            mascota.vacunas.forEach(vacuna => {

                let fila = vacunasMascota.insertRow();
                fila.insertCell().innerHTML = vacuna.nombre;
                fila.insertCell().innerHTML = vacuna.fecha;
                fila.insertCell().innerHTML = vacuna.fabricante;

            })

        }

    });
    limpiarTabla();

}

const limpiarTabla = () => {
    for (var i = vacunasMascota.rows.length - 4; i >= 0; i--) {
        vacunasMascota.deleteRow(i);
    }
}

mostrarTablaVacunas();

/* Fin: Función para mostrar datos de vacunas en la tabla */


//btnEditarDatosCliente.addEventListener('click', );
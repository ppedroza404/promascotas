'use strict';

const tabla = document.querySelector('#tbl-solicitudespendientes tbody');
const inputFiltro = document.querySelector('#txt-filtro');
let solicitud = JSON.parse(sessionStorage.getItem('usuarioConectado'));


const mostrarTabla = async() => {

    let listaSolicitudesPendientes2 = [];

    listaSolicitudesPendientes2 = await listarSolicitudes();

    let filtro = inputFiltro.value.toLowerCase();
    tabla.innerHTML = '';


    listaSolicitudesPendientes2.forEach(solicitudes => {

        if (solicitudes.proveedor.toLowerCase().includes(solicitud.correo)) {
            let fila = tabla.insertRow();

            /*fila.insertCell().innerHTML = proveedor.estado;*/
            fila.insertCell().innerHTML = solicitudes.nombreServicio;
            fila.insertCell().innerHTML = solicitudes.cliente;
            fila.insertCell().innerHTML = solicitudes.fechaServicio;


            let celdaAcciones = fila.insertCell();

            let botonAprobar = document.createElement('button');
            botonAprobar.classList.add('btn');
            botonAprobar.innerHTML = '<i class="fa fa-check"></i>';
            botonAprobar.addEventListener('click', () => {
                /*sessionStorage.setItem('usuarioSeleccionado', JSON.stringify(usuario));*/
                botonAprobar.classList.add('btn-aprobar');
                botonModificar.classList.add('ocultar');
            });

            celdaAcciones.appendChild(botonAprobar);

            let celdaAcciones2 = fila.insertCell();
            let botonModificar = document.createElement('button');
            botonModificar.classList.add('btn');
            botonModificar.innerHTML = '<i class="fa fa-ban"></i>';
            botonModificar.addEventListener('click', () => {
                botonModificar.classList.add('btn-denegar');
                botonAprobar.classList.add('ocultar');
            });

            celdaAcciones2.appendChild(botonModificar);
        }

    });
};


mostrarTabla();
inputFiltro.addEventListener('keyup', mostrarTabla);
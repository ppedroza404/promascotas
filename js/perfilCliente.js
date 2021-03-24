'use strict';

const fotoMascota = document.querySelector('#imagen-prev');
const cliente = JSON.parse(sessionStorage.getItem('usuarioConectado'))
const pNombreCliente = document.querySelector('#txt-nombreCliente');
const pCorreoCliente = document.querySelector('#txt-correo');
const pNumIdCliente = document.querySelector('#txt-numId');
const pDireccionCliente = document.querySelector('#txt-direccion');
const pOtrasSenias = document.querySelector('#txt-otrasSenias');
const pGeneroCliente = document.querySelector('#txt-genero');







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
}
fotoMascota.addEventListener('onclick', mostrarInfoMascota);
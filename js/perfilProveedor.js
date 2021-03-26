'use strict';

const proveedor = JSON.parse(sessionStorage.getItem('usuarioConectado'));
const seccionRep = document.querySelector('.seccion-representante');
// Variables para datos del Proveedor
const pnombreProv = document.querySelector('#txt-nombreProveedor');
const pnegocioProv = document.querySelector('#txt-nombreNegocio');
const pcorreoProv = document.querySelector('#txt-correoProveedor');
const ptelProv = document.querySelector('#txt-telProveedor');
const pidProv = document.querySelector('#txt-idProveedor');
const pgeneroProv = document.querySelector('#txt-generoProveedor');
const pdireccionProv = document.querySelector('#txt-direccionProv');
const potrasSeniasProv = document.querySelector('#txt-otrasSeniasProv');



// Variables para datos del Representante
const pnombreRep = document.querySelector('#txt-nombreRep');
const ptipoIdRep = document.querySelector('#txt-tipoIdRep');
const pidRep = document.querySelector('#txt-idRep');
const pcorreoRep = document.querySelector('#txt-correoRep');
const ptelRep = document.querySelector('#txt-telRep');

/* Inicio: Variables que muestran la información del usuario conectado en el perfil */

pnombreProv.value = `${proveedor.nombre} ${proveedor.primerApellido} ${proveedor.segundoApellido}`;
pnegocioProv.value = proveedor.n_negocio;
pcorreoProv.value = proveedor.provincia;
ptelProv.value = proveedor.telefono;
pidProv.value = proveedor.id;
pgeneroProv.value = proveedor.sexo;
pdireccionProv.value = `${proveedor.provincia}, ${proveedor.canton}, ${proveedor.distrito}`;
potrasSeniasProv.value = proveedor.sennas;

/* Fin: Variables que muestran la información del usuario conectado en el perfil */


/* Inicio: Variables que muestran la información del representante de proveedor */

if (proveedor.tipoID != "JURIDICA") {
    seccionRep.classList.add('ocultar');
} else {
    pnombreRep.value = `${proveedor.r_legal_Nombre} ${proveedor.r_legalaPapellido} ${proveedor.r_legalaSapellido}`;
    ptipoIdRep.value = proveedor.r_legalatipoid;
    pidRep.value = proveedor.r_legalanid;
    pcorreoRep.value = proveedor.r_legacorreo_email;
    ptelRep.value = proveedor.telefono;
}

/* Fin: Variables que muestran la información del representante de proveedor */
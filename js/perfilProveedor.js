'use strict';

const proveedor = JSON.parse(sessionStorage.getItem('usuarioConectado'));
const seccionRep = document.querySelector('.seccion-representante');
// Variables para datos del Proveedor
const pnombreProv = document.querySelector('#txt-nombreProveedor'); // nombre
const pnegocioProv = document.querySelector('#txt-nombreNegocio'); // nombre negocio
const pcorreoProv = document.querySelector('#txt-correoProveedor'); // correo
const ptelProv = document.querySelector('#txt-telProveedor'); // telefono
const ptipoId = document.querySelector('#txt-tipoIdProveedor'); // TipoID
const pidProv = document.querySelector('#txt-idProveedor'); // Numero ID
const pdireccionProv = document.querySelector('#txt-direccionProv'); // Direccion
const potrasSeniasProv = document.querySelector('#txt-otrasSeniasProv'); // Otras sennas
const spanNombreNegocio = document.querySelector('#spanNombreNegocio');


// Variables para datos del Representante
const pnombreRep = document.querySelector('#txt-nombreRep');
const ptipoIdRep = document.querySelector('#txt-tipoIdRep');
const pidRep = document.querySelector('#txt-idRep');
const pcorreoRep = document.querySelector('#txt-correoRep');
const ptelRep = document.querySelector('#txt-telRep');
const modificarRepLegal = document.querySelector('#btn-modificar-representante-legal');

/* Inicio: Variables que muestran la información del usuario conectado en el perfil */

pnombreProv.value = `${proveedor.nombre} ${proveedor.primerApellido} ${proveedor.segundoApellido}`;
pnegocioProv.value = proveedor.n_negocio;
pcorreoProv.value = proveedor.correo;
ptelProv.value = proveedor.telefono;
pidProv.value = proveedor.id;
ptipoId.value = proveedor.r_legalatipoid;
pdireccionProv.value = `${proveedor.provincia}, ${proveedor.canton}, ${proveedor.distrito}`;
potrasSeniasProv.value = proveedor.sennas;
spanNombreNegocio.innerHTML = proveedor.n_negocio;

/* Fin: Variables que muestran la información del usuario conectado en el perfil */


/* Inicio: Variables que muestran la información del representante de proveedor */

if (proveedor.tipoID != "Jurídica") {
    seccionRep.classList.add('ocultar');
} else {
    pnombreRep.value = `${proveedor.r_legal_Nombre} ${proveedor.r_legalaPapellido} ${proveedor.r_legalaSapellido}`;
    ptipoIdRep.value = proveedor.r_legalatipoid;
    pidRep.value = proveedor.r_legalanid;
    pcorreoRep.value = proveedor.r_legacorreo_email;
    ptelRep.value = proveedor.telefono;
}

/* Fin: Variables que muestran la información del representante de proveedor */


modificarRepLegal.addEventListener('click', modificarRepresentanteLegal(pnombreRep.value, ptipoIdRep.value, pidRep.value, pcorreoRep.value, ptelRep.value));
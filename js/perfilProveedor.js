'use strict';
const btnEditarDatosProveedor = document.querySelector('#btn-editarDatosProveedor');
const btnGuardarInfoProveedor = document.querySelector('#btn-guardar-infoProveedor');
const proveedor = JSON.parse(sessionStorage.getItem('usuarioConectado'));
const seccionRep = document.querySelector('.seccion-representante');
const elementoContrasenna = document.getElementById('proveedor-modificarContrasenna');
const btnModificarRepresentanteLegal = document.querySelector('#btn-modificar-representante-legal');
const btnGuardarInfoRepLegal = document.querySelector('#btn-guardar-info-repLegal');


// Variables para datos del Proveedor
const pNombreProv = document.querySelector('#txt-nombreProveedor'); // nombre
const pPrimerApellidoProveedor = document.querySelector('#txt-primerApellidoProveedor'); //1apellido
const pSegundoApellidoProveedor = document.querySelector('#txt-segundoApellidoProveedor'); //2apellido
const pNombreNegocio = document.querySelector('#txt-nombreNegocio'); // nombre negocio
const pCorreoProveedor = document.querySelector('#txt-correoProveedor'); // numero ID
const pNumeroIdProveedor = document.querySelector('#txt-numeroIdProveedor'); // numero ID
const pTelProveedor = document.querySelector('#txt-telProveedor'); // telefono
const pTipoIdProveedor = document.querySelector('#txt-tipoIdProveedor'); // numero ID
const pProvinciaProveedor = document.querySelector('#txt-provinciaProveedor'); // provincia
const pCantonProveedor = document.querySelector('#txt-cantonProveedor'); //canton
const pDistritoProveedor = document.querySelector('#txt-distritoProveedor'); // distrito
const pOtrasSeniasProv = document.querySelector('#txt-otrasSeniasProv'); // sennas

/* Inicio: Variables que muestran la información del usuario conectado en el perfil */

pNombreProv.value = proveedor.nombre;
pPrimerApellidoProveedor.value = proveedor.primerApellido;
pSegundoApellidoProveedor.value = proveedor.segundoApellido;
pNombreNegocio.value = proveedor.nombreNegocio;
pCorreoProveedor.value = proveedor.correoproveedor;
pNumeroIdProveedor.value = proveedor.numeroIdProveedor;
pTelProveedor.value = proveedor.telefonoProveedor
pTipoIdProveedor.value = proveedor.tipoIdProveedor
pProvinciaProveedor.value = proveedor.provinciaProveedor;
pCantonProveedor.value = proveedor.cantonProveedor;
pDistritoProveedor.value = proveedor.distritoProveedor;
pOtrasSeniasProv.value = proveedor.sennasProveedor;


/* Fin: Variables que muestran la información del usuario conectado en el perfil */

// Variables para datos del Representante
const pnombreRep = document.querySelector('#txt-nombreRep');
const pprimerApellidoRep = document.querySelector('#txt-primerApellidoRep');
const psegundoApellidoRep = document.querySelector('#txt-segundoApellidoRep');
const ptipoIdRep = document.querySelector('#txt-tipoIdRep');
const pcorreoRep = document.querySelector('#txt-correoRep');
const pidRep = document.querySelector('#txt-idRep');
const ptelRep = document.querySelector('#txt-telRep');

/* Inicio: Variables que muestran la información del usuario conectado en el perfil */

pnombreRep.value = proveedor.nombreRep;
pprimerApellidoRep.value = proveedor.primerApellidoRep;
psegundoApellidoRep.value = proveedor.segundoApellidoRep;
ptipoIdRep.value = proveedor.tipoIdRep;
pidRep.value = proveedor.idRep;
pcorreoRep.value = proveedor.correoRep;
ptelRep.value = proveedor.telRep;

/* FIN: Variables que muestran la información del usuario conectado en el perfil */

const habilitarCamposRepLegal = () => {

    btnGuardarInfoRepLegal.classList.remove('ocultarInfoMascota');
    elementoContrasenna.classList.remove('ocultar');

    pnombreRep.disabled = false;
    pprimerApellidoRep.disabled = false;
    psegundoApellidoRep.disabled = false;
    ptipoIdRep.disabled = false;
    pidRep.disabled = false;
    pcorreoRep.disabled = false;
    ptelRep.disabled = false;
}

const modificarRepLegal1 = () => {

    const usuario = JSON.parse(sessionStorage.getItem('usuarioConectado'));

    let nombreRepresentante = pnombreRep.value;
    let primerApellidoRep = pprimerApellidoRep.value;
    let segundoApellidoRep = psegundoApellidoRep.value;
    let tipoIdRep = ptipoIdRep.value;
    let idRep = pidRep.value;
    let correoRep = pcorreoRep.value;
    let telefonoRep = ptelRep.value;

    modificarRepresentanteLegal(nombreRepresentante, primerApellidoRep, segundoApellidoRep, tipoIdRep, idRep, correoRep, telefonoRep);

    // setTimeout(() => { iniciarSesion(pcorreo.value, pcontrasenna.value); }, 5000);
};


/* Inicio: Variables que muestran la información del representante de proveedor */

if (proveedor.tipoIdNegocio != "Jurídica") {
    seccionRep.classList.add('ocultar');
} else {

    pnombreRep.value = proveedor.repLegalNombre;
    pprimerApellidoRep.value = proveedor.repLegalPrimerApell;
    psegundoApellidoRep.value = proveedor.repLegalSegundoApel;
    ptipoIdRep.value = proveedor.repLegalTipoId;
    pidRep.value = proveedor.repLegalNumeroId;
    pcorreoRep.value = proveedor.repLegalCorreo;
    ptelRep.value = proveedor.repLegalTelefono;
}

/* Fin: Variables que muestran la información del representante de proveedor */





const habilitarCamposProveedor = () => {
    btnGuardarInfoProveedor.classList.remove('ocultarInfoMascota');
    elementoContrasenna.classList.remove('ocultar');

    pNombreProv.disabled = false;
    pPrimerApellidoProveedor.disabled = false;
    pSegundoApellidoProveedor.disabled = false;
    pNombreNegocio.disabled = false;
    pCorreoProveedor.disabled = false;
    // pNumeroIdProveedor.disabled = false;
    pTelProveedor.disabled = false;
    pTipoIdProveedor.disabled = false;
    // pProvinciaProveedor.disabled = false;
    // pCantonProveedor.disabled = false;
    // pDistritoProveedor.disabled = false;
    // pOtrasSeniasProv.disabled = false;

}

let imagenProveedor = document.querySelector('#foto-usuario')
const UsuarioConectadoInformacion = () => {
    let usuario = JSON.parse(sessionStorage.getItem('usuarioConectado'));
    let imagenUsuarioConectado = usuario.avatar;

    imagenProveedor.setAttribute('src', `${imagenUsuarioConectado}`);

};
UsuarioConectadoInformacion();


const modificarProveedor = () => {
    const usuario = JSON.parse(sessionStorage.getItem('usuarioConectado'));

    let nombreProveedor = pNombreProv.value;
    let primerApellido = pPrimerApellidoProveedor.value;
    let segundoApellido = pSegundoApellidoProveedor.value;
    let nombreDelNegocio = pNombreNegocio.value;

    let correoProveedor = pCorreoProveedor.value;

    let numeroIdProveedor = pNumeroIdProveedor.value;
    let telProveedor = pTelProveedor.value;
    let tipoIdProveedor = pTipoIdProveedor.value;
    let provinciaProveedor = pProvinciaProveedor.value;
    let cantonProveedor = pCantonProveedor.value;
    let distritoProveedor = pDistritoProveedor.value;
    let sennasProveedor = pOtrasSeniasProv.value;

    let avatar = imagenProveedor.src

    modificarInfoProveedor(nombreProveedor, primerApellido, segundoApellido, nombreDelNegocio, correoProveedor, numeroIdProveedor, telProveedor, tipoIdProveedor, provinciaProveedor, cantonProveedor, distritoProveedor, sennasProveedor, avatar);


    // Swal.fire({
    //     'icon': 'success',
    //     'title': 'Se ha agregado con éxito el o los servicios',
    //     'confirmButtonText': 'Excelente'
    // }).then(() => {
    //     window.location.href = 'perfilProveedor.html';
    // });

    // setTimeout(() => { iniciarSesion(pcorreo.value, pcontrasenna.value); }, 5000);

};

btnGuardarInfoProveedor.addEventListener('click', modificarProveedor);
btnEditarDatosProveedor.addEventListener('click', habilitarCamposProveedor);




btnGuardarInfoRepLegal.addEventListener('click', modificarRepLegal1);
btnModificarRepresentanteLegal.addEventListener('click', habilitarCamposRepLegal);
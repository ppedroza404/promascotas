'use strict';

// Inicio Variables para Informacion del Proveedor Conectado//
const usuario = JSON.parse(sessionStorage.getItem('usuarioConectado'));
const txtNombreProveedor = document.querySelector('#txt-nombreProveedor');
const pApellidoUsuario = document.querySelector('#txt-apellido1Proveedor');
const sApellidoUsuario = document.querySelector('#txt-apellido2Proveedor');
const correoUsuario = document.querySelector('#txt-email');
const generoUsuario = document.querySelector('#txt-genero');
const telefonoUsuario = document.querySelector('#txt-telefono');
const tipoIdUsuario = document.querySelector('#txt-tipoId');
const numIdUsuario = document.querySelector('#txt-numId');
const provinciaUsuario = document.querySelector('#txt-provincia');
const cantonUsuario = document.querySelector('#txt-canton');
const distritoUsuario = document.querySelector('#txt-distrito');
const direccionUsuario = document.querySelector('#txt-direccion');
const tipoUsuarioPerfil = document.querySelector('#txt-tipoUsuario');
// Fin Variables para Informacion del Proveedor Conectado//

//Inicio Variables para Informacion del Representante Legal del Proveedor Conectado //
const rLegalNombre = document.querySelector('#txt-nombreRlegal');
const rLegalApellido1 = document.querySelector('#txt-apellido1Rlegal');
const rLegalApellido2 = document.querySelector('#txt-apellido2Rlegal');
const rLegalCorreo = document.querySelector('#txt-emailRlegal');
const rLegalGenero = document.querySelector('#txt-generoRlegal');
const rLegalTelefono = document.querySelector('#txt-telefonoRlegal');
const rLegalTipoId = document.querySelector('#txt-tipoIdRlegal');
const rLegalId = document.querySelector('#txt-numIdRlegal');
const rLegalProvincia = document.querySelector('#txt-provinciaRlegal');
const rLegalCanton = document.querySelector('#txt-cantonRlegal');
const rLegalDistrito = document.querySelector('#txt-distritoRlegal');
const rLegalSennas = document.querySelector('#txt-direccionRlegal');
const rLegalEmpresa = document.querySelector('#txt-empresa');
//fin Variables para Informacion del Representante Legal del Proveedor Conectado //


// Inicio LLena el perfil del proveedor Dinamicamente//

txtNombreProveedor.innerText = usuario.nombre;
pApellidoUsuario.innerText = usuario.primerApellido;
sApellidoUsuario.innerText = usuario.segundoApellido;
correoUsuario.innerText = usuario.correo;
generoUsuario.innerText = usuario.sexo;
telefonoUsuario.innerText = usuario.telefono;
tipoUsuarioPerfil.innerText = usuario.tipo;
tipoIdUsuario.innerText = usuario.tipoID;
numIdUsuario.innerText = usuario.id;
provinciaUsuario.innerText = usuario.provincia;
cantonUsuario.innerText = usuario.canton;
distritoUsuario.innerText = usuario.distrito;
direccionUsuario.innerText = usuario.sennas;
// Fin LLena el perfil del proveedor Dinamicamente //
const perfilProveedorRepLegal = document.querySelector('#perfilProveedorRepLegal');


const mostarRepLegal = () => {

    if (usuario.r_legal_Nombre != "") {
        perfilProveedorRepLegal.classList.remove('ocultar');
        rLegalNombre.innerText = usuario.r_legal_Nombre;
        rLegalApellido1.innerText = usuario.r_legalaPapellido;
        rLegalApellido2.innerText = usuario.r_legalaSapellido;
        rLegalCorreo.innerText = usuario.r_legacorreo_email;
        rLegalGenero.innerText = usuario.sexo;
        rLegalTelefono.innerText = usuario.telefono;
        rLegalTipoId.innerText = usuario.r_legalatipoid;
        rLegalId.innerText = usuario.r_legalanid;
        rLegalProvincia.innerText = usuario.provincia;
        rLegalCanton.innerText = usuario.canton;
        rLegalDistrito.innerText = usuario.distrito;
        rLegalSennas.innerText = usuario.sennas;
        rLegalEmpresa.innerText = usuario.n_negocio;
    } else {
        perfilProveedorRepLegal.classList.add('ocultar');
    }


}

//
// Inicio LLena el perfil con la info del rep legal si existe Dinamicamente//


mostarRepLegal();

// Fin LLena el perfil con la info del rep legal si existe Dinamicamente//
console.log(usuario);

console.log(usuario.r_legal_Nombre);
console.log(usuario.r_legalaPapellido);
console.log(usuario.r_legalaSapellido);
console.log(usuario.r_legacorreo_email);
console.log(usuario.sexo);
console.log(usuario.telefono);
console.log(usuario.r_legalatipoid);
console.log(usuario.r_legalanid);
console.log(usuario.provincia);
console.log(usuario.canton);
console.log(usuario.distrito);
console.log(usuario.sennas);
// Inicio
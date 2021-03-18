'use strict';

const usuario = JSON.parse(sessionStorage.getItem('usuarioConectado'));
const nombreUsuario = document.querySelector('#txt-nombreProveedor');
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
const tipoUsuario = document.querySelector('#txt-tipoUsuario');








nombreUsuario.innerText = usuario.nombre;
pApellidoUsuario.innerText = usuario.primerApellido;
sApellidoUsuario.innerText = usuario.segundoApellido;
correoUsuario.innerText = usuario.correo;
generoUsuario.innerText = usuario.sexo;
telefonoUsuario.innerText = usuario.telefono;
tipoUsuario.innerText = usuario.tipo;
tipoIdUsuario.innerText = usuario.tipoID;
numIdUsuario.innerText = usuario.id;
provinciaUsuario.innerText = usuario.provincia;
cantonUsuario.innerText = usuario.canton;
distritoUsuario.innerText = usuario.distrito;
direccionUsuario.innerText = usuario.sennas;








console.log(usuario);
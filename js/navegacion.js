'use strict';

const bntCerrarSesion = document.querySelector('#btn-cerrar-sesion');
const itemsCliente = document.querySelector('#menuUlCliente');
const itemsProveedor = document.querySelector('#menuUlProveedor');
const itemsAdministrador = document.querySelector('#menuUlAdministrador');
const itemsSinAutenticar = document.querySelector('#menuUlSinAutenticar');

const mostrarOpcionesMenu = () => {
    let usuario = JSON.parse(sessionStorage.getItem('usuarioConectado'));
    switch (usuario.tipo) {
        case 'Administrador':
            itemsCliente.classList.add('ocultar');
            itemsProveedor.classList.add('ocultar');
            itemsSinAutenticar.classList.add('ocultar');
            break;
        case 'Proveedor':
            itemsCliente.classList.add('ocultar');
            itemsAdministrador.classList.add('ocultar');
            itemsSinAutenticar.classList.add('ocultar');
            break;
        case 'Cliente':
            itemsProveedor.classList.add('ocultar');
            itemsAdministrador.classList.add('ocultar');
            itemsSinAutenticar.classList.add('ocultar');

            break;
    }
};
const menuSinAutenticar = () => {
    itemsCliente.classList.add('ocultar');
    itemsProveedor.classList.add('ocultar');
    itemsAdministrador.classList.add('ocultar');
};

const cerrarSesion = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = 'index.html';
};

if (sessionStorage.getItem('usuarioConectado')) {
    let usuario = JSON.parse(sessionStorage.getItem('usuarioConectado'));
    mostrarOpcionesMenu();
} else {
    menuSinAutenticar();
}

bntCerrarSesion.addEventListener('click', () => {
    cerrarSesion();
});
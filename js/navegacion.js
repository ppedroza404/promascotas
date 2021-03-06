'use strict';
const bntCerrarSesion = document.querySelector('#btn-cerrar-sesion');
const itemsCliente = document.querySelector('#menuUlCliente');
const itemsProveedor = document.querySelector('#menuUlProveedor');
const itemsAdministrador = document.querySelector('#menuUlAdministrador');
const itemsSinAutenticar = document.querySelector('#menuUlSinAutenticar');
const nombreUsuario = document.querySelector('#nombreClienteMenu');


// Nombre de usuario
const nombreUsuarioConectadoHeader = () => {
    let usuario = JSON.parse(sessionStorage.getItem('usuarioConectado'));
    let nombreUsuarioConectado = usuario.nombre;
    //alert(nombreUsuarioConectado)

};


const mostrarOpcionesMenu = () => {
    let usuario = JSON.parse(sessionStorage.getItem('usuarioConectado'));
    switch (usuario.tipoUsuario) {
        case 'administrador':
            itemsCliente.classList.add('ocultar');
            itemsProveedor.classList.add('ocultar');
            itemsSinAutenticar.classList.add('ocultar');
            nombreUsuarioConectadoHeader();
            break;
        case 'proveedor':
            itemsCliente.classList.add('ocultar');
            itemsAdministrador.classList.add('ocultar');
            itemsSinAutenticar.classList.add('ocultar');
            nombreUsuarioConectadoHeader();
            break;
        case 'cliente':
            itemsProveedor.classList.add('ocultar');
            itemsAdministrador.classList.add('ocultar');
            itemsSinAutenticar.classList.add('ocultar');
            nombreUsuarioConectadoHeader();
            break;
    }
};

const nombreUsuarioConectado = () => {
    let usuario = JSON.parse(sessionStorage.getItem('usuarioConectado'));
    nombreUsuario.innerHTML = usuario.nombre
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
    mostrarOpcionesMenu();
} else {
    menuSinAutenticar();
    //window.location.href = 'index.html';
}

bntCerrarSesion.addEventListener('click', () => {
    cerrarSesion();
});
'use strict';

const tablaCompleta = document.querySelector('table');
const tablaTipoUsuario = document.querySelector('#tbl-usuarios tbody');
const selectTipoUsuario = document.querySelector('#slt-tipoUsuario');
const thCantidadMacotas = document.querySelector('.th-cantidadmascotas');


const limpiarTabla = () => {
    for (var i = tablaTipoUsuario.rows.length - 1; i > 0; i--) {
        tablaTipoUsuario.deleteRow(i);
    }
}

const ocultaTabla = () => {
    tablaCompleta.classList.add('ocultar');
}

const mostrarTablaUsuario = () => {
    tablaCompleta.classList.remove('ocultar');
    limpiarTabla();

    listaUsuarios.forEach(usuario => {
        let fila = tablaTipoUsuario.insertRow();

        if (selectTipoUsuario.value == 'Nulo') {
            tablaCompleta.classList.add('ocultar');
        } else if (usuario.tipo == selectTipoUsuario.value && usuario.tipo == 'Cliente') {
            thCantidadMacotas.classList.remove('ocultar');
            fila.insertCell().innerHTML = usuario.nombre;
            fila.insertCell().innerHTML = usuario.primerApellido;
            fila.insertCell().innerHTML = usuario.segundoApellido;
            fila.insertCell().innerHTML = usuario.correo;
            fila.insertCell().innerHTML = usuario.cantidadmascotas;
            fila.insertCell().innerHTML = usuario.telefono;
            fila.insertCell().innerHTML = usuario.tipoID;
            fila.insertCell().innerHTML = usuario.id;
            fila.insertCell().innerHTML = usuario.provincia;
            fila.insertCell().innerHTML = usuario.canton;
            fila.insertCell().innerHTML = usuario.distrito;

        } else if (usuario.tipo == selectTipoUsuario.value && usuario.tipo == 'Proveedor') {
            thCantidadMacotas.classList.add('ocultar');
            fila.insertCell().innerHTML = usuario.nombre;
            fila.insertCell().innerHTML = usuario.primerApellido;
            fila.insertCell().innerHTML = usuario.segundoApellido;
            fila.insertCell().innerHTML = usuario.correo;
            fila.insertCell().innerHTML = usuario.telefono;
            fila.insertCell().innerHTML = usuario.tipoID;
            fila.insertCell().innerHTML = usuario.id;
            fila.insertCell().innerHTML = usuario.provincia;
            fila.insertCell().innerHTML = usuario.canton;
            fila.insertCell().innerHTML = usuario.distrito;

        }
    });
};

ocultaTabla();
selectTipoUsuario.addEventListener('change', mostrarTablaUsuario);
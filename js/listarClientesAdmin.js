'use strict';

const tablaTipoUsuario = document.querySelector('#tbl-usuarios tbody');
const selectTipoUsuario = document.querySelector('#slt-tipoUsuario');


const limpiarTabla = () => {
    for (var i = tablaTipoUsuario.rows.length - 1; i > 0; i--) {
        tablaTipoUsuario.deleteRow(i);
    }
}

const mostrarTablaUsuario = () => {

    limpiarTabla();

    listaUsuarios.forEach(usuario => {
        let fila = tablaTipoUsuario.insertRow();
        if (usuario.tipo == selectTipoUsuario.value) {
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



        }

    });
};

mostrarTablaUsuario();
selectTipoUsuario.addEventListener('change', mostrarTablaUsuario);
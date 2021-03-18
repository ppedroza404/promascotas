'use strict';

const tabla2 = document.querySelector('#tbl-usuarios tbody');


const mostrarTabla = () => {

    listaUsuarios.forEach(usuario => {
        let fila = tabla2.insertRow();
        if (usuario.tipo == 'Cliente') {
            fila.insertCell().innerHTML = usuario.nombre;
            fila.insertCell().innerHTML = usuario.primerApellido;
            fila.insertCell().innerHTML = usuario.segundoApellido;
            fila.insertCell().innerHTML = usuario.correo;
            fila.insertCell().innerHTML = usuario.CANTIDADMASCOTAS;
            fila.insertCell().innerHTML = usuario.telefono;
            fila.insertCell().innerHTML = usuario.tipoID;
            fila.insertCell().innerHTML = usuario.id;
            fila.insertCell().innerHTML = usuario.provincia;
            fila.insertCell().innerHTML = usuario.canton;
            fila.insertCell().innerHTML = usuario.distrito;
        }

    });


};


mostrarTabla();
'use strict';

const tabla = document.querySelector('#tbl-bitacora tbody');
const inputFiltro = document.querySelector('#txt-filtro');

const mostrarTabla = () => {
    let filtro = inputFiltro.value.toLowerCase();
    tabla.innerHTML = '';
    listaBitacora.forEach(bitacora => {
        let fila = tabla.insertRow();
        if (bitacora.nombre.toLowerCase().includes(filtro) || bitacora.tipoUsuario.toLowerCase().includes(filtro) || bitacora.accion.toLowerCase().includes(filtro)) {
            fila.insertCell().innerHTML = bitacora.nombre;
            fila.insertCell().innerHTML = bitacora.tipoUsuario;
            fila.insertCell().innerHTML = bitacora.accion;
            fila.insertCell().innerHTML = bitacora.fecha;
        }
    });
};
mostrarTabla();
inputFiltro.addEventListener('keyup', mostrarTabla);
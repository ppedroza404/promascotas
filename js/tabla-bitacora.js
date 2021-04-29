'use strict';

const tabla = document.querySelector('#tbl-bitacora tbody');
const inputFiltro = document.querySelector('#txt-filtro');

const mostrarTabla = async() => {
    let listaBitacora = [];
    listaBitacora = await listarBitacora();

    let filtro = inputFiltro.value.toLowerCase();
    tabla.innerHTML = '';
    listaBitacora.forEach(bitacora => {



        let fila = tabla.insertRow();
        // if (bitacora.nombre.toLowerCase().includes(filtro) || bitacora.tipoUsuario.toLowerCase().includes(filtro) || bitacora.accion.toLowerCase().includes(filtro)) {
        fila.insertCell().innerHTML = bitacora.fecha;
        fila.insertCell().innerHTML = bitacora.accion;
        fila.insertCell().innerHTML = bitacora.mensaje;

        // }
    });
};
mostrarTabla();
inputFiltro.addEventListener('keyup', mostrarTabla);
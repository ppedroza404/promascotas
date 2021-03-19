'use strict';

const tablaCatalogo = document.querySelector('#tbl-catalogos tbody');
const selectCatalogo = document.querySelector('#slt-catalogo');

const limpiarTabla = () => {
    for (var i = tablaCatalogo.rows.length - 1; i > 0; i--) {
        tablaCatalogo.deleteRow(i);
    }
}

const mostrarCatalogoSeleccionado = () => {

    limpiarTabla();

    if (selectCatalogo.value == 'enfermedades') {
        monstrarTablaEnfermedades()
    } else if (selectCatalogo.value == 'razas') {
        monstrarTablaRazas()
    } else if (selectCatalogo.value == 'vacunas') {
        mostrarTablaVacunas()
    }
};

const monstrarTablaEnfermedades = () => {

    limpiarTabla();

    enfermedadesAdmin.forEach(item => {
        let fila = tablaCatalogo.insertRow();
        fila.insertCell().innerHTML = item.enfermedades;
    })
}

const monstrarTablaRazas = () => {

    limpiarTabla();

    razasAdmin.forEach(item => {
        let fila = tablaCatalogo.insertRow();
        fila.insertCell().innerHTML = item.razas;
    })
}

const mostrarTablaVacunas = () => {

    limpiarTabla();

    vacunasAdmin.forEach(item => {
        let fila = tablaCatalogo.insertRow();
        fila.insertCell().innerHTML = item.vacunas;
    })
}

selectCatalogo.addEventListener('change', mostrarCatalogoSeleccionado);
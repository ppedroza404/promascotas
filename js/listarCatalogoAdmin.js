'use strict';


const tablaCatalogo = document.querySelector('#tbl-catalogos');
const selectCatalogo = document.querySelector('#slt-catalogo');

const limpiarTabla = () => {
    for (var i = tablaCatalogo.rows.length - 1; i > 0; i--) {
        tablaCatalogo.deleteRow(i);
    }
}

const mostrarCatalogoSeleccionado = () => {

    limpiarTabla();
    if (selectCatalogo.value == 'enfermedades') {
        monstrartablaenfermedades()
    } else if (selectCatalogo.value == 'razas') {
        monstrartablarazas()
    } else if (selectCatalogo.value == 'vacunas') {
        mostrartablavacunas()
    }


};

const monstrartablaenfermedades = () => {
    limpiarTabla();
    enfermedades_admin.forEach(item => {
        let fila = tablaCatalogo.insertRow();
        fila.insertCell().innerHTML = item.enfermedad;

    })

}

const monstrartablarazas = () => {
    limpiarTabla();
    razas_admin.forEach(item => {
        let fila = tablaCatalogo.insertRow();
        fila.insertCell().innerHTML = item.razas;

    })

}

const mostrartablavacunas = () => {
    limpiarTabla();
    vacunas_admin.forEach(item => {
        let fila = tablaCatalogo.insertRow();
        fila.insertCell().innerHTML = item.vacunas;

    })

}



selectCatalogo.addEventListener('change', mostrarCatalogoSeleccionado);
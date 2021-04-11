'use strict';
const tablaCompleta = document.querySelector('table');
const btnCatalogo = document.querySelector('#btn-irRegistrarCatalogo');
const btnModificarCatalogo = document.querySelector('#btn-irModificarCatalogo');
const tablaCatalogo = document.querySelector('#tbl-catalogos tbody');
const selectCatalogo = document.querySelector('#slt-catalogo');

const limpiarTabla = () => {
    for (var i = tablaCatalogo.rows.length - 1; i >= 0; i--) {
        tablaCatalogo.deleteRow(i);
    }
}

const ocultaTabla = () => {
    tablaCompleta.classList.add('ocultar');
}

const mostrarCatalogoSeleccionado = () => {
    tablaCompleta.classList.remove('ocultar');
    limpiarTabla();

    if (selectCatalogo.value == 'enfermedades') {
        mostrarTablaEnfermedades()
    } else if (selectCatalogo.value == 'tiposMascota') {
        mostrarTablaTiposMascota()
    } else if (selectCatalogo.value == 'razas') {
        mostrarTablaRazas()
    } else if (selectCatalogo.value == 'vacunas') {
        mostrarTablaVacunas()
    } else if (selectCatalogo.value == 'Nulo') {
        ocultaTabla()
    }
};

const mostrarTablaEnfermedades = () => {

    limpiarTabla();

    enfermedadesAdmin.forEach(item => {
        let fila = tablaCatalogo.insertRow();
        fila.insertCell().innerHTML = item.enfermedades;
    })
}

const mostrarTablaRazas = () => {

    limpiarTabla();

    razasAdmin.forEach(item => {
        let fila = tablaCatalogo.insertRow();
        fila.insertCell().innerHTML = item.razas;
    })
}

const mostrarTablaTiposMascota = () => {

    limpiarTabla();

    tiposMascotaAdmin.forEach(item => {
        let fila = tablaCatalogo.insertRow();
        fila.insertCell().innerHTML = item.tiposMascota;
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


const registrarCatalogo = () => {
    window.location.href = 'registrarCatalogoAdmin.html';
};

btnCatalogo.addEventListener('click', () => {
    registrarCatalogo();
});

const modificarCatalogo = () => {
    window.location.href = 'modificarCatalogoAdmin.html';
};

btnModificarCatalogo.addEventListener('click', () => {
    modificarCatalogo();
});

ocultaTabla();
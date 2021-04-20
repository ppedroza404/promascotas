'use strict';
const tablaCompleta = document.querySelector('table');
const btnCatalogo = document.querySelector('#btn-irRegistrarCatalogo');
const btnModificarCatalogo = document.querySelector('#btn-irModificarCatalogo');
const tablaCatalogo = document.querySelector('#tbl-catalogos tbody');
const selectCatalogo = document.querySelector('#slt-catalogo');
const filtroEnfermedadesContenedor = document.querySelector('#filtroEnfermedadesContenedor');
const filtroTipoContenedor = document.querySelector('#filtroTipoContenedor');
const filtroRazasContenedor = document.querySelector('#filtroRazasContenedor');
const filtroVacunasContenedor = document.querySelector('#filtroVacunasContenedor');

const inputFiltroEnfermedades = document.querySelector('#txt-filtroEnfermedades');
const inputFiltroTipos = document.querySelector('#txt-filtroTipo');
const inputFiltroRazas = document.querySelector('#txt-filtroRazas');
const inputFiltroVacunas = document.querySelector('#txt-filtroVacunas');

const limpiarTabla = () => {
    for (var i = tablaCatalogo.rows.length - 1; i >= 0; i--) {
        tablaCatalogo.deleteRow(i);
    }
}

const ocultarTabla = () => {
    tablaCompleta.classList.add('ocultar');
    filtroEnfermedadesContenedor.classList.add('ocultar');
    filtroTipoContenedor.classList.add('ocultar');
    filtroRazasContenedor.classList.add('ocultar');
    filtroVacunasContenedor.classList.add('ocultar');
}

const mostrarCatalogoSeleccionado = () => {
    tablaCompleta.classList.remove('ocultar');
    limpiarTabla();

    if (selectCatalogo.value == 'enfermedades') {
        filtroEnfermedadesContenedor.classList.remove('ocultar');
        filtroTipoContenedor.classList.add('ocultar');
        filtroRazasContenedor.classList.add('ocultar');
        filtroVacunasContenedor.classList.add('ocultar');
        mostrarTablaEnfermedades()
    } else if (selectCatalogo.value == 'tiposMascota') {
        filtroTipoContenedor.classList.remove('ocultar');
        filtroEnfermedadesContenedor.classList.add('ocultar');
        filtroRazasContenedor.classList.add('ocultar');
        filtroVacunasContenedor.classList.add('ocultar');
        mostrarTablaTiposMascota()
    } else if (selectCatalogo.value == 'razas') {
        filtroRazasContenedor.classList.remove('ocultar');
        filtroEnfermedadesContenedor.classList.add('ocultar');
        filtroTipoContenedor.classList.add('ocultar');
        filtroVacunasContenedor.classList.add('ocultar');
        mostrarTablaRazas()
    } else if (selectCatalogo.value == 'vacunas') {
        filtroVacunasContenedor.classList.remove('ocultar');
        filtroEnfermedadesContenedor.classList.add('ocultar');
        filtroTipoContenedor.classList.add('ocultar');
        filtroRazasContenedor.classList.add('ocultar');
        mostrarTablaVacunas()
    } else if (selectCatalogo.value == 'Nulo') {
        ocultarTabla()
    }
};

const mostrarTablaEnfermedades = () => {
    let filtro = inputFiltroEnfermedades.value.toLowerCase();

    limpiarTabla();

    enfermedadesAdmin.forEach(item => {
        let fila = tablaCatalogo.insertRow();
        fila.insertCell().innerHTML = item.enfermedades;

    })

    inputFiltroEnfermedades.addEventListener('keyup', mostrarTablaEnfermedades);
}

const mostrarTablaRazas = () => {
    let filtro = inputFiltroRazas.value.toLowerCase();

    limpiarTabla();

    razasAdmin.forEach(item => {
        if (item.razas.toLowerCase().includes(filtro)) {
            let fila = tablaCatalogo.insertRow();
            fila.insertCell().innerHTML = item.razas;
        }
    })
    inputFiltroRazas.addEventListener('keyup', mostrarTablaRazas);
}

const mostrarTablaTiposMascota = () => {
    let filtro = inputFiltroTipos.value.toLowerCase();

    limpiarTabla();

    tiposMascotaAdmin.forEach(item => {
        if (item.tiposMascota.toLowerCase().includes(filtro)) {
            let fila = tablaCatalogo.insertRow();
            fila.insertCell().innerHTML = item.tiposMascota;
        }
    })
    inputFiltroTipos.addEventListener('keyup', mostrarTablaTiposMascota);
}

const mostrarTablaVacunas = () => {
    let filtro = inputFiltroVacunas.value.toLowerCase();

    limpiarTabla();

    vacunasAdmin.forEach(item => {
        if (item.vacunas.toLowerCase().includes(filtro)) {
            let fila = tablaCatalogo.insertRow();
            fila.insertCell().innerHTML = item.vacunas;
        }
    })
    inputFiltroVacunas.addEventListener('keyup', mostrarTablaVacunas);
}

selectCatalogo.addEventListener('change', mostrarCatalogoSeleccionado);


const registrarCatalogo = () => {
    window.location.href = 'registrarCatalogoAdmin.html';
};
const modificarCatalogo = () => {
    window.location.href = 'modificarCatalogoAdmin.html';
};

btnCatalogo.addEventListener('click', () => {
    registrarCatalogo();
});

btnModificarCatalogo.addEventListener('click', () => {
    modificarCatalogo();
});
ocultarTabla();
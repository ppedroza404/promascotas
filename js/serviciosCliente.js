'use strict';

const tablaUsuarios = document.querySelector('#tbl-usuarios tbody');
const tipoBuscador = document.querySelector('#slt-tipoBuscador');
const ubicacionServicio = document.querySelector('#slt-ubicacionServicio');
const tipoServicio = document.querySelector('#slt-tipoServicio');




/////////////////////


const limpiarTabla = () => {
    for (var i = tablaUsuarios.rows.length - 1; i >= 0; i--) {
        tablaUsuarios.deleteRow(i);
    }
}

const mostrarTabla = () => {
    tablaUsuarios.innerHTML = '';
    informacionProveedor.forEach(proveedor => {

        let fila = tablaUsuarios.insertRow();
        fila.insertCell().innerHTML = proveedor.proveedor;
        fila.insertCell().innerHTML = proveedor.tipoServicio;
        fila.insertCell().innerHTML = proveedor.telefonoProveedor;
        fila.insertCell().innerHTML = proveedor.correoElectronicoProveedor;
        fila.insertCell().innerHTML = proveedor.provincia;
    });
}
const mostrarTablaFiltros = () => {
    let ubicacionServicioSeleccionado = ubicacionServicio.value;
    let tipoServicioSeleccionado = tipoServicio.value;
    tablaUsuarios.innerHTML = '';

    informacionProveedor.forEach(proveedor => {


        if (proveedor.tipoServicio == tipoServicioSeleccionado) {

            let fila = tablaUsuarios.insertRow();
            fila.insertCell().innerHTML = proveedor.proveedor;
            fila.insertCell().innerHTML = proveedor.tipoServicio;
            fila.insertCell().innerHTML = proveedor.telefonoProveedor;
            fila.insertCell().innerHTML = proveedor.correoElectronicoProveedor;
            fila.insertCell().innerHTML = proveedor.provincia;
        } else if (proveedor.provincia == ubicacionServicioSeleccionado) {

            let fila = tablaUsuarios.insertRow();
            fila.insertCell().innerHTML = proveedor.proveedor;
            fila.insertCell().innerHTML = proveedor.tipoServicio;
            fila.insertCell().innerHTML = proveedor.telefonoProveedor;
            fila.insertCell().innerHTML = proveedor.correoElectronicoProveedor;
            fila.insertCell().innerHTML = proveedor.provincia;
        } else if ((proveedor.provincia == ubicacionServicioSeleccionado) && (proveedor.tipoServicio == tipoServicioSeleccionado)) {

            let fila = tablaUsuarios.insertRow();
            fila.insertCell().innerHTML = proveedor.proveedor;
            fila.insertCell().innerHTML = proveedor.tipoServicio;
            fila.insertCell().innerHTML = proveedor.telefonoProveedor;
            fila.insertCell().innerHTML = proveedor.correoElectronicoProveedor;
            fila.insertCell().innerHTML = proveedor.provincia;
        }

    });
}

mostrarTabla();
ubicacionServicio.addEventListener('click', function(e) {
    mostrarTablaFiltros(e.target.value)
});

tipoServicio.addEventListener('click', function(i) {
    mostrarTablaFiltros(i.target.value)
});
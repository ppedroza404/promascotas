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


        let agregarVerServicioBtn = fila.insertCell();

        let botonVerServicio = document.createElement('button');
        botonVerServicio.innerText = 'Ver servicio';
        botonVerServicio.classList.add('btnPrincipal');
        botonVerServicio.addEventListener('click', () => {
            window.location.href = 'serviciosProveedor.html';
        });

        agregarVerServicioBtn.appendChild(botonVerServicio);
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


            let agregarVerServicioBtn = fila.insertCell();

            let botonVerServicio = document.createElement('button');
            botonVerServicio.innerText = 'Ver servicio';
            botonVerServicio.classList.add('btnPrincipal');
            botonVerServicio.addEventListener('click', () => {
                window.location.href = 'serviciosProveedor.html';
            });

            agregarVerServicioBtn.appendChild(botonVerServicio);
        } else if (proveedor.provincia == ubicacionServicioSeleccionado) {

            let fila = tablaUsuarios.insertRow();
            fila.insertCell().innerHTML = proveedor.proveedor;
            fila.insertCell().innerHTML = proveedor.tipoServicio;
            fila.insertCell().innerHTML = proveedor.telefonoProveedor;
            fila.insertCell().innerHTML = proveedor.correoElectronicoProveedor;
            fila.insertCell().innerHTML = proveedor.provincia;


            let agregarVerServicioBtn = fila.insertCell();

            let botonVerServicio = document.createElement('button');
            botonVerServicio.innerText = 'Ver servicio';
            botonVerServicio.classList.add('btnPrincipal');
            botonVerServicio.addEventListener('click', () => {
                window.location.href = 'serviciosProveedor.html';
            });

            agregarVerServicioBtn.appendChild(botonVerServicio);
        } else if ((proveedor.provincia == ubicacionServicioSeleccionado) && (proveedor.tipoServicio == tipoServicioSeleccionado)) {

            let fila = tablaUsuarios.insertRow();
            fila.insertCell().innerHTML = proveedor.proveedor;
            fila.insertCell().innerHTML = proveedor.tipoServicio;
            fila.insertCell().innerHTML = proveedor.telefonoProveedor;
            fila.insertCell().innerHTML = proveedor.correoElectronicoProveedor;
            fila.insertCell().innerHTML = proveedor.provincia;


            let agregarVerServicioBtn = fila.insertCell();

            let botonVerServicio = document.createElement('button');
            botonVerServicio.innerText = 'Ver servicio';
            botonVerServicio.classList.add('btnPrincipal');
            botonVerServicio.addEventListener('click', () => {
                window.location.href = 'serviciosProveedor.html';
            });

            agregarVerServicioBtn.appendChild(botonVerServicio);
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
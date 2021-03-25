'use strict';

const tablaUsuarios = document.querySelector('#tbl-usuarios tbody');
const inputFiltro = document.querySelector('#txt-filtro');




/////////////////////



const mostrarTabla = () => {
    let filtro = inputFiltro.value.toLowerCase();
    tablaUsuarios.innerHTML = '';
    informacionProveedor.forEach(proveedor => {
        if (proveedor.provincia.toLowerCase().includes(filtro) || proveedor.tipoServicio.toLowerCase().includes(filtro)) {
            //if (proveedor.provincia || (proveedor.provincia & proveedor.tipoServicio) || proveedor.tipoServicio) {
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
                sessionStorage.setItem('usuarioSeleccionado', JSON.stringify(usuario));
                window.location.href = 'serviciosProveedorYCliente.html';
            });

            agregarVerServicioBtn.appendChild(botonVerServicio);

        }

    });
}


mostrarTabla();
inputFiltro.addEventListener('keyup', mostrarTabla);
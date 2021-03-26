'use strict';

const tabla = document.querySelector('#tbl-mascotas tbody');
const inputFiltro = document.querySelector('#txt-filtro');

const mostrarTabla = () => {
    let filtro = inputFiltro.value.toLowerCase();
    tabla.innerHTML = '';

    informacionProveedor.forEach(mascota => {
        if (mascota.proveedor.toLowerCase().includes(filtro) || mascota.provincia.toLowerCase().includes(filtro)) {
            let fila = tabla.insertRow();
            fila.insertCell().innerHTML = mascota.proveedor;
            fila.insertCell().innerHTML = mascota.tipoServicio;
            fila.insertCell().innerHTML = mascota.telefonoProveedor;
            fila.insertCell().innerHTML = mascota.correoElectronicoProveedor;
            fila.insertCell().innerHTML = mascota.provincia;
            fila.insertCell().innerHTML = mascota.canton;


            let celdaAcciones = fila.insertCell();

            let botonModificar = document.createElement('button');
            botonModificar.classList.add('btn');
            botonModificar.innerText = 'Ver servicio';
            botonModificar.addEventListener('click', () => {
                /*sessionStorage.setItem('usuarioSeleccionado', JSON.stringify(usuario));*/
                window.location.href = 'serviciosProveedorYCliente.html';
            });

            celdaAcciones.appendChild(botonModificar);

            /* let botonEliminar = document.createElement('button');
             botonEliminar.innerText = 'Eliminar';

             botonEliminar.addEventListener('click', () => {
                 Swal.fire({
                     'icon': 'warning',
                     'text': '¿Está seguro que desea borrar el usuario?',
                     'showCancelButton': true,
                     'confirmButtonText': '¡Sí!, estoy seguro',
                     'cancelButtonColor': '#d33',
                     'cancelButtonText': 'Cancelar',
                     'reverseButtons': true
                 }).then((result) => {
                     if (result.isConfirmed) {
                         Swal.fire(
                             '',
                             'El usuario ha sido eliminado',
                             'success'
                         )
                     }
                 })
             });
             // Agregarle los botones a la celda

             celdaAcciones.appendChild(botonModificar);
             celdaAcciones.appendChild(botonEliminar);*/
        }
    });
};


mostrarTabla();
inputFiltro.addEventListener('keyup', mostrarTabla);
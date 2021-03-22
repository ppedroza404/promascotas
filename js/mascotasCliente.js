'use strict';

const tabla = document.querySelector('#tbl-usuarios tbody');

const mostrarTabla = () => {
    mascotasCliente.forEach(mascota => {
        let fila = tabla.insertRow();
        fila.insertCell().innerHTML = mascota.nombre;
        fila.insertCell().innerHTML = mascota.raza;
        fila.insertCell().innerHTML = mascota.vacunas;
        fila.insertCell().innerHTML = mascota.servicios;

        let celdaAcciones = fila.insertCell();

        let botonModificar = document.createElement('button');
        botonModificar.classList.add('btn-mascota');
        botonModificar.innerText = 'Ver / Editar';
        botonModificar.addEventListener('click', () => {
            /*sessionStorage.setItem('usuarioSeleccionado', JSON.stringify(usuario));*/
            window.location.href = 'perfilMascota.html';
        });

        celdaAcciones.appendChild(botonModificar);

        /*let celdaAcciones = fila.insertCell();*/

        /*let botonModificar = document.createElement('button');
        botonModificar.innerText = 'Editar';
        botonModificar.addEventListener('click', () => {
            sessionStorage.setItem('usuarioSeleccionado', JSON.stringify(usuario));
            window.location.href = 'mascotas-modificar.html';
        });*/


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

    });
};


mostrarTabla();
'use strict';

const tabla = document.querySelector('#tbl-solicitudespendientes tbody');
const inputFiltro = document.querySelector('#txt-filtro');

const mostrarTabla = () => {
    let filtro = inputFiltro.value.toLowerCase();
    tabla.innerHTML = '';

    informacionProveedor.forEach(proveedor => {

        if (proveedor.estado.toLowerCase().includes(filtro)) {
            let fila = tabla.insertRow();

            /*fila.insertCell().innerHTML = proveedor.estado;*/
            fila.insertCell().innerHTML = proveedor.estado;
            fila.insertCell().innerHTML = proveedor.proveedor;
            fila.insertCell().innerHTML = proveedor.tipoIdProveedor;
            fila.insertCell().innerHTML = proveedor.numeroIdProveedor;
            fila.insertCell().innerHTML = proveedor.nombreProveedor;
            fila.insertCell().innerHTML = proveedor.primerApellidoProveedor;
            fila.insertCell().innerHTML = proveedor.telefonoProveedor;
            fila.insertCell().innerHTML = proveedor.tipoServicio;
            fila.insertCell().innerHTML = proveedor.provincia;

            fila.insertCell().innerHTML = proveedor.descripcion;



            /* let celdaAcciones = fila.insertCell();

             let botonAprobar = document.createElement('button');
             botonAprobar.classList.add('btn');
             botonAprobar.innerText = 'Aprobar';
             botonAprobar.addEventListener('click', () => {
                 /*sessionStorage.setItem('usuarioSeleccionado', JSON.stringify(usuario));
                 botonAprobar.classList.add('btn-aprobar');
                 botonModificar.classList.add('ocultar');
                 botonAprobar.innerText = 'Aprobado';
             });

             celdaAcciones.appendChild(botonAprobar);

             let celdaAcciones2 = fila.insertCell();

             let botonModificar = document.createElement('button');
             botonModificar.classList.add('btn');
             botonModificar.innerText = 'Denegar';
             botonModificar.addEventListener('click', () => {
                 botonModificar.classList.add('btn-denegar');
                 botonAprobar.classList.add('ocultar');
                 botonModificar.innerText = 'Denegado';
             });

             celdaAcciones2.appendChild(botonModificar);


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
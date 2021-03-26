'use strict';

let informacionServiciosPorAprobar = [{
        "nombre": "Clhoe",
        "tipo": "grooming",
        "precio": "15000",
        "nombreCliente": "Carlos Alberto Diaz",
        "telefono": "7154-5868"
    },
    {
        "nombre": "Petsi",
        "tipo": "grooming",
        "precio": "15000",
        "nombreCliente": "Juan Roberto Cruz",
        "telefono": "7154-4857"
    },
    {
        "nombre": "Ratsi",
        "tipo": "Corte de pelo",
        "precio": "12000",
        "nombreCliente": "Roberto Angel Ruiz",
        "telefono": "7587-7777"
    },
    {
        "nombre": "Orus",
        "tipo": "Corte de pelo",
        "precio": "12000",
        "nombreCliente": "Carlos Alberto Diaz",
        "telefono": "8154-8878"
    },
    {
        "nombre": "Garfield",
        "tipo": "corte de uñas",
        "precio": "5000",
        "nombreCliente": "Sigifredo Rosales",
        "telefono": "7154-5868"
    },
    {
        "nombre": "Carrito",
        "tipo": "Corte de pelo",
        "precio": "15000",
        "nombreCliente": "Roberto Rosando",
        "telefono": "7154-7774"
    },



]
const tabla = document.querySelector('#tbl-solicitudespendientes tbody');
const inputFiltro = document.querySelector('#txt-filtro');

const mostrarTabla = () => {
    let filtro = inputFiltro.value.toLowerCase();
    tabla.innerHTML = '';

    informacionServiciosPorAprobar.forEach(proveedor => {

        if (proveedor.nombreCliente.toLowerCase().includes(filtro)) {
            let fila = tabla.insertRow();

            /*fila.insertCell().innerHTML = proveedor.estado;*/
            fila.insertCell().innerHTML = proveedor.nombre;
            fila.insertCell().innerHTML = proveedor.tipo;
            fila.insertCell().innerHTML = proveedor.precio;
            fila.insertCell().innerHTML = proveedor.nombreCliente;
            fila.insertCell().innerHTML = proveedor.telefono;



            let celdaAcciones = fila.insertCell();

            let botonAprobar = document.createElement('button');
            botonAprobar.classList.add('btn');
            botonAprobar.innerText = 'Aprobar';
            botonAprobar.addEventListener('click', () => {
                /*sessionStorage.setItem('usuarioSeleccionado', JSON.stringify(usuario));*/
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
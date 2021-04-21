'use strict';

const tabla = document.querySelector('#tbl-solicitudespendientes tbody');
const inputFiltro = document.querySelector('#txt-filtro');

const mostrarTabla = async() => {
    let filtro = inputFiltro.value.toLowerCase();


    let lista_usuarios_cliente = [];

    lista_usuarios_cliente = await listar_usuarios_proveedor();
    tabla.innerHTML = '';
    lista_usuarios_cliente.forEach(cliente => {

        if (cliente.tipoUsuario.toLowerCase().includes('cliente')) {
            if (cliente.estado.toLowerCase().includes(filtro) || cliente.provincia.toLowerCase().includes(filtro) || cliente.canton.toLowerCase().includes(filtro) || cliente.distrito.toLowerCase().includes(filtro)) {
                let fila = tabla.insertRow();


                fila.insertCell().innerHTML = cliente.nombre + " " + cliente.primerApellido;
                fila.insertCell().innerHTML = cliente.correo;
                fila.insertCell().innerHTML = cliente.provincia;
                fila.insertCell().innerHTML = cliente.canton;
                fila.insertCell().innerHTML = cliente.distrito;
                fila.insertCell().innerHTML = cliente.tipoUsuario;


                /* let celdaAcciones = fila.insertCell();

                 let botonAprobar = document.createElement('button');
                 botonAprobar.classList.add('btn');
                 botonAprobar.innerText = 'Aprobar';
                 botonAprobar.addEventListener('click', () => {*/
                /*sessionStorage.setItem('usuarioSeleccionado', JSON.stringify(usuario));*/
                /* botonAprobar.classList.add('btn-aprobar');
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

                celdaAcciones2.appendChild(botonModificar);*/


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
        }
    });
};


mostrarTabla();
inputFiltro.addEventListener('keyup', mostrarTabla);
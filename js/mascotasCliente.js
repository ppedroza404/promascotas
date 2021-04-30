'use strict';

const tabla = document.querySelector('#tbl-usuarios tbody');
const inputFiltro = document.querySelector('#txt-filtro');
let usuarioStorage = JSON.parse(sessionStorage.getItem('usuarioConectado'));



const mostrarTabla = async() => {
    let filtro = inputFiltro.value.toLowerCase();
    tabla.innerHTML = '';

    let listaMascotasCliente = [];
    listaMascotasCliente = await listar_mascotas_cliente();

    listaMascotasCliente.forEach(mascota => {
        if (mascota.correo.toLowerCase().includes(usuarioStorage.correo)) {
            if (mascota.nombre.toLowerCase().includes(filtro) || mascota.raza.toLowerCase().includes(filtro)) {
                let fila = tabla.insertRow();
                fila.insertCell().innerHTML = mascota.nombre;
                fila.insertCell().innerHTML = mascota.raza;
                fila.insertCell().innerHTML = mascota.tipoMascota;
                fila.insertCell().innerHTML = mascota.edad;
                fila.insertCell().innerHTML = mascota.estado;

                let celdaAcciones = fila.insertCell();

                let botonModificar = document.createElement('button');
                botonModificar.classList.add('btn');
                botonModificar.innerText = 'Ver / Editar';
                botonModificar.addEventListener('click', () => {
                    sessionStorage.setItem('mascotaSeleccionada', JSON.stringify(mascota));
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


                let celdaAcciones2 = fila.insertCell()

                let botonEliminar = document.createElement('button');
                botonEliminar.innerText = 'Eliminar';
                botonEliminar.classList.add('btn');

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
                            eliminarMascotaCliente(mascota.nombre)
                            Swal.fire(
                                '',
                                'El usuario ha sido eliminado',
                                'success'
                            )
                        }
                    })
                });

                let celdaAcciones3 = fila.insertCell();

                let botonModificarEstado = document.createElement('button');
                botonModificarEstado.classList.add('btn');
                botonModificarEstado.innerText = 'Activar';
                botonModificarEstado.addEventListener('click', () => {



                    activarMascota(mascota.nombre);




                    //window.location.href = 'listarMascotasCliente.html';
                });

                celdaAcciones3.appendChild(botonModificarEstado);
                // Agregarle los botones a la celda


                let celdaAcciones4 = fila.insertCell();

                let botonModificarEstadoInactivo = document.createElement('button');
                botonModificarEstadoInactivo.classList.add('btn');
                botonModificarEstadoInactivo.innerText = 'Inactivar';
                botonModificarEstadoInactivo.addEventListener('click', () => {

                    desactivarMascota(mascota.nombre);


                    /*sessionStorage.setItem('usuarioSeleccionado', JSON.stringify(usuario));*/
                    //window.location.href = 'listarMascotasCliente.html';
                });

                celdaAcciones4.appendChild(botonModificarEstadoInactivo);
                // Agregarle los botones a la celda

                celdaAcciones.appendChild(botonModificar);
                celdaAcciones2.appendChild(botonEliminar);
            }
        }

    });
};


mostrarTabla();
inputFiltro.addEventListener('keyup', mostrarTabla);
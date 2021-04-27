'use strict';

const tabla = document.querySelector('#tbl-mascotas tbody');
const inputFiltro = document.querySelector('#txt-filtro');


// const mostrarTabla = () => {
//     let filtro = inputFiltro.value.toLowerCase();
//     tabla.innerHTML = '';

//     informacionProveedor.forEach(mascota => {
//         if (mascota.proveedor.toLowerCase().includes(filtro) || mascota.provincia.toLowerCase().includes(filtro)) {
//             let fila = tabla.insertRow();
//             fila.insertCell().innerHTML = mascota.proveedor;
//             fila.insertCell().innerHTML = mascota.tipoServicio;
//             fila.insertCell().innerHTML = mascota.telefonoProveedor;
//             fila.insertCell().innerHTML = mascota.correoElectronicoProveedor;
//             fila.insertCell().innerHTML = mascota.provincia;
//             fila.insertCell().innerHTML = mascota.canton;


//             let celdaAcciones = fila.insertCell();

//             let botonModificar = document.createElement('button');
//             botonModificar.classList.add('btn');
//             botonModificar.innerText = 'Ver servicio';
//             botonModificar.addEventListener('click', () => {
//                 /*sessionStorage.setItem('usuarioSeleccionado', JSON.stringify(usuario));*/
//                 window.location.href = 'serviciosProveedorYCliente.html';
//             });

//             celdaAcciones.appendChild(botonModificar);

//             /* let botonEliminar = document.createElement('button');
//              botonEliminar.innerText = 'Eliminar';

//              botonEliminar.addEventListener('click', () => {
//                  Swal.fire({
//                      'icon': 'warning',
//                      'text': '¿Está seguro que desea borrar el usuario?',
//                      'showCancelButton': true,
//                      'confirmButtonText': '¡Sí!, estoy seguro',
//                      'cancelButtonColor': '#d33',
//                      'cancelButtonText': 'Cancelar',
//                      'reverseButtons': true
//                  }).then((result) => {
//                      if (result.isConfirmed) {
//                          Swal.fire(
//                              '',
//                              'El usuario ha sido eliminado',
//                              'success'
//                          )
//                      }
//                  })
//              });
//              // Agregarle los botones a la celda

//              celdaAcciones.appendChild(botonModificar);
//              celdaAcciones.appendChild(botonEliminar);*/
//         }
//     });
// };

const mostrarTabla = async() => {
    let filtro = inputFiltro.value.toLowerCase();

    let lista_proveedores_activos = [];

    lista_proveedores_activos = await listar_usuarios_proveedor();
    tabla.innerHTML = '';

    lista_proveedores_activos.forEach(usuario => {


        if (usuario.tipoUsuario.toLowerCase().includes('proveedor')) {
            if (usuario.estado.toLowerCase().includes('pendiente')) {

                usuario.servicios.forEach(servicio => {
                    //Falta probar el filtro
                    if (servicio.nombre.toLowerCase().includes(filtro) || usuario.provincia.toLowerCase().includes(filtro) || usuario.canton.toLowerCase().includes(filtro)) {

                        let fila = tabla.insertRow();

                        if (servicio.nombre !== 'Agregue un servicio') {
                            fila.insertCell().innerHTML = usuario.nombreNegocio;
                            fila.insertCell().innerHTML = servicio.nombre;
                            fila.insertCell().innerHTML = usuario.telefono;
                            fila.insertCell().innerHTML = usuario.correo;
                            fila.insertCell().innerHTML = usuario.provincia;
                            fila.insertCell().innerHTML = usuario.canton;
                            fila.insertCell().innerHTML = usuario.distrito;

                            let celdaAcciones = fila.insertCell();

                            let botonVerServicio = document.createElement('button');
                            botonVerServicio.classList.add('btn');
                            botonVerServicio.innerText = 'Ver servicio';
                            botonVerServicio.addEventListener('click', () => {
                                sessionStorage.setItem('usuarioSeleccionado', JSON.stringify(usuario));
                                window.location.href = 'serviciosProveedorYCliente.html';
                            });
                            celdaAcciones.appendChild(botonVerServicio);
                        }
                    }
                });
            }
        }

    })

}




mostrarTabla();
inputFiltro.addEventListener('keyup', mostrarTabla);
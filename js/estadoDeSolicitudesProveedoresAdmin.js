'use strict';

const tabla = document.querySelector('#tbl-solicitudespendientes tbody');
const inputFiltro = document.querySelector('#txt-filtro');

const mostrarTabla = async() => {




    let filtro = inputFiltro.value.toLowerCase();


    let lista_usuarios_prov = [];

    lista_usuarios_prov = await listar_usuarios_proveedor();
    tabla.innerHTML = '';
    lista_usuarios_prov.forEach(proveedor => {



        if (proveedor.tipoUsuario.toLowerCase().includes('proveedor')) {
            if (proveedor.estado.toLowerCase().includes('pendiente')) {
                if (proveedor.provincia.toLowerCase().includes(filtro) || proveedor.canton.toLowerCase().includes(filtro) || proveedor.distrito.toLowerCase().includes(filtro)) {
                    let fila = tabla.insertRow();

                    fila.insertCell().innerHTML = proveedor.estado;
                    fila.insertCell().innerHTML = proveedor.nombre;
                    fila.insertCell().innerHTML = proveedor.correo;
                    fila.insertCell().innerHTML = proveedor.provincia;
                    fila.insertCell().innerHTML = proveedor.canton;
                    fila.insertCell().innerHTML = proveedor.distrito;
                    fila.insertCell().innerHTML = proveedor.descripcion;

                    let celdaAcciones = fila.insertCell();

                    let botonAprobar = document.createElement('button');
                    botonAprobar.classList.add('btn');
                    botonAprobar.innerText = 'Aprobar';

                    botonAprobar.addEventListener('click', () => {
                        /*sessionStorage.setItem('usuarioSeleccionado', JSON.stringify(usuario));*/
                        //botonAprobar.setAttribute('id', `activarProveedor${proveedor._id}`);
                        activarProveedor(proveedor._id);


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
                        desactivarProveedor(proveedor._id);
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

                    //const desactivarProveedor = () => {
                    //  let _id = proveedor._id;
                    //  desactivarProveedor(_id);
                    //}

                    //const activarProveedor = () => {
                    // let _id = proveedor._id;
                    //activarProveedor(_id);
                    // }
                }
            }
            /*const desactivarProveedor = () => {
                let _id = proveedor._id;
                desactivarProveedor(_id);
            }

            const activarProveedor = () => {
                let _id = proveedor._id;
                activarProveedor(_id);
            }*/
        }
    });
};


mostrarTabla();
inputFiltro.addEventListener('keyup', mostrarTabla);
'use strict';
const tablaCompleta = document.querySelector('table');
const tablaCatalogo = document.querySelector('#tbl-catalogos tbody');
const selectCatalogo = document.querySelector('#slt-catalogo');
let tipodeservicios;
let listaPadecimientos;
let tiposMascotaAdmin;
let razasAdmin;
let vacunasAdmin;

const obtenerVacunas = async() => {
    vacunasAdmin = await listarVacunas();
}

const obtenerRaza = async() => {
    razasAdmin = await listarRazas();
}


const obtenerTiposDeServicios = async() => {
    tipodeservicios = await listarTipoServicio();
}


const limpiarTabla = () => {
    for (var i = tablaCatalogo.rows.length - 1; i >= 0; i--) {
        tablaCatalogo.deleteRow(i);
    }
}

const ocultaTabla = () => {
    tablaCompleta.classList.add('ocultar');
}

const mostrarCatalogoSeleccionado = () => {
    tablaCompleta.classList.remove('ocultar');
    limpiarTabla();

    if (selectCatalogo.value == 'tipoServicio') {
        mostrarTablaTipoServicio()
    } else if (selectCatalogo.value == 'padecimientos') {
        mostrarTablapadecimientos()
    } else if (selectCatalogo.value == 'tiposMascota') {
        mostrarTablaTiposMascota()
    } else if (selectCatalogo.value == 'razas') {
        mostrarTablaRazas()
    } else if (selectCatalogo.value == 'vacunas') {
        mostrarTablaVacunas()
    } else if (selectCatalogo.value == 'Nulo') {
        ocultaTabla()
    }
};


const mostrarTablaTipoServicio = () => {

    limpiarTabla();

    tipodeservicios.forEach(servicio => {
        let fila = tablaCatalogo.insertRow();
        fila.classList.add(`${servicio.estado}`);
        fila.insertCell().innerHTML = servicio.nombre;
        let celdaAcciones1 = fila.insertCell();


        let botonActivar = document.createElement('i');
        botonActivar.classList.add('fa');
        botonActivar.classList.add('fa-toggle-off');
        botonActivar.setAttribute('id', `activarTipoServicio${servicio._id}`);
        botonActivar.addEventListener('click', () => {
            console.log('activado')
            activarTipoServicioConst();
        });


        celdaAcciones1.appendChild(botonActivar);
        celdaAcciones1.classList.add('ActivarContenedor');

        let celdaAcciones2 = fila.insertCell();

        let botonDesactivar = document.createElement('i')
        botonDesactivar.classList.add('fa');
        botonDesactivar.classList.add('fa-toggle-on');
        botonDesactivar.setAttribute('id', `desactivarTipoServicio${servicio._id}`);
        botonDesactivar.addEventListener('click', () => {
            console.log('desactivado');
            desactivarTipoServicioConst();
        });

        celdaAcciones2.appendChild(botonDesactivar);
        celdaAcciones2.classList.add('DesactivarContenedor');

        let celdaAcciones3 = fila.insertCell();

        let botonModificar = document.createElement('i');
        botonModificar.classList.add('fa');
        botonModificar.classList.add('fa-edit');
        botonModificar.setAttribute('id', `abrirModal${servicio._id}`);
        // botonModificar.addEventListener('click', () => {
        //     console.log('modificado')
        // });

        //modal
        let ModalContenedor;
        let ModalContent;
        ModalContenedor = document.createElement('div');
        ModalContenedor.setAttribute('id', `modal${servicio._id}`);
        ModalContenedor.classList.add('modal');
        ModalContenedor.classList.add('modalModificar');
        ModalContent = document.createElement('div');
        ModalContent.classList.add('modal-content');
        ModalContenedor.appendChild(ModalContent);
        //modal header
        let ModalHeader;
        let ModalCerrar;
        let ModalTitulo;
        ModalHeader = document.createElement('div');
        ModalHeader.classList.add('modal-header');
        ModalContent.appendChild(ModalHeader);
        ModalCerrar = document.createElement('span');
        ModalCerrar.setAttribute('id', `cerrar${servicio._id}`);
        ModalCerrar.classList.add('close');
        ModalHeader.appendChild(ModalCerrar);
        ModalCerrar.innerText = 'x';
        ModalTitulo = document.createElement('h3');
        ModalTitulo.innerText = `${servicio.nombre} (${servicio.estado})`;
        ModalHeader.appendChild(ModalTitulo);
        //modal body
        let ModalBody;
        let ModalContenido;
        ModalBody = document.createElement('div');
        ModalBody.classList.add('modal-body');
        ModalContent.appendChild(ModalBody);
        ModalContenido = document.createElement('div');
        ModalContenido.classList.add('centrarBloque');
        ModalBody.appendChild(ModalContenido);
        //modal nombre
        let ModalContenidoNombre;
        let ModalContenidoNombreLabel;
        let ModalContenidoNombreInput;
        ModalContenidoNombre = document.createElement('div');
        ModalContenido.appendChild(ModalContenidoNombre);
        ModalContenidoNombreLabel = document.createElement('label');
        ModalContenidoNombreLabel.setAttribute('for', `modificarServicioNombreServicio${servicio._id}`);
        ModalContenidoNombreLabel.innerText = 'Nombre que desea modificar';
        ModalContenidoNombre.appendChild(ModalContenidoNombreLabel);
        ModalContenidoNombreInput = document.createElement('input');
        ModalContenidoNombreInput.setAttribute('id', `modificarServicioNombreServicio${servicio._id}`);
        ModalContenidoNombre.appendChild(ModalContenidoNombreInput);
        //modal footer
        let ModalFooter;
        ModalFooter = document.createElement('div');
        ModalFooter.classList.add('modal-footer');
        ModalContent.appendChild(ModalFooter);
        //modal footer btn modificar
        let ModalFooterModificarBtn;
        let BtnModificarItem;
        ModalFooterModificarBtn = document.createElement('a');
        ModalFooterModificarBtn.setAttribute('id', `modificarServicio${servicio._id}`);
        ModalFooter.appendChild(ModalFooterModificarBtn);
        BtnModificarItem = document.createElement('i');
        BtnModificarItem.classList.add('fa');
        BtnModificarItem.classList.add('fa-edit');
        ModalFooterModificarBtn.appendChild(BtnModificarItem);

        celdaAcciones3.appendChild(botonModificar);
        celdaAcciones3.appendChild(ModalContenedor);

        //Levanta y cierra el modal
        let modal = document.querySelector(`#modal${servicio._id}`);
        let botonModal = document.querySelector(`#abrirModal${servicio._id}`);
        let cerrarModal = document.querySelector(`#cerrar${servicio._id}`);
        botonModal.addEventListener('click', () => {
            modal.style.display = 'block';
        });
        cerrarModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        const datosModificacionTipoServicio = () => {
            let NombreModificado = document.querySelector(`#modificarServicioNombreServicio${servicio._id}`).value;
            let _id = servicio._id;

            modificarTipoServicio(NombreModificado, _id);

            Swal.fire({
                'icon': 'success',
                'title': 'El servicio se ha modificado con éxito',
                'confirmButtonText': 'Excelente'
            }).then(() => {
                window.location.href = '/modificarCatalagoAdmin.html';
            });
        }
        let btnModificarTipoServicio = document.querySelector(`#modificarServicio${servicio._id}`);
        btnModificarTipoServicio.addEventListener('click', datosModificacionTipoServicio);


        let celdaAcciones4 = fila.insertCell();

        let botonEliminar = document.createElement('i');
        botonEliminar.classList.add('fa');
        botonEliminar.classList.add('fa-trash');
        botonEliminar.addEventListener('click', () => {
            console.log('eliminado');
            eliminarTipoServicioConst();
        });

        celdaAcciones4.appendChild(botonEliminar);


        //Activar servicio
        const activarTipoServicioConst = () => {
                let _id = servicio._id;

                activarTipoServicio(_id);

                Swal.fire({
                    'icon': 'success',
                    'title': 'El servicio se ha activado con éxito',
                    'confirmButtonText': 'Excelente'
                }).then(() => {
                    window.location.href = '/listarCatalogoAdmin.html';
                });

            }
            //Desactivar servicio
        const desactivarTipoServicioConst = () => {
                let _id = servicio._id;

                desactivarTipoServicio(_id);

                Swal.fire({
                    'icon': 'success',
                    'title': 'El servicio se ha desactivado con éxito',
                    'confirmButtonText': 'Excelente'
                }).then(() => {
                    window.location.href = '/listarCatalogoAdmin.html';
                });

            }
            //Eliminar servicio
        const eliminarTipoServicioConst = () => {
            let _id = servicio._id;

            eliminarTipoServicio(_id);

            Swal.fire({
                'icon': 'success',
                'title': 'El tipo de servicio se ha eliminado con éxito',
                'confirmButtonText': 'Excelente'
            }).then(() => {
                window.location.href = '/serviciosProveedorYCliente.html';
            });

        }
    })
}

const obtenerPadecimientos = async() => {
    listaPadecimientos = await listarPadecimientos();
}


const mostrarTablapadecimientos = () => {

    limpiarTabla();

    listaPadecimientos.forEach(padecimiento => {
        let fila = tablaCatalogo.insertRow();
        fila.insertCell().innerHTML = padecimiento.padecimiento;
        fila.classList.add(`${padecimiento.estado}`);
        let celdaAcciones1 = fila.insertCell();


        let botonActivar = document.createElement('i');
        botonActivar.classList.add('fa');
        botonActivar.classList.add('fa-toggle-on');
        botonActivar.addEventListener('click', () => {
            console.log('activado')
        });


        celdaAcciones1.appendChild(botonActivar);

        let celdaAcciones2 = fila.insertCell();

        let botonDesactivar = document.createElement('i')
        botonDesactivar.classList.add('fa');
        botonDesactivar.classList.add('fa-toggle-off');
        botonDesactivar.addEventListener('click', () => {
            console.log('desactivado')
        });

        celdaAcciones2.appendChild(botonDesactivar);

        let celdaAcciones3 = fila.insertCell();

        let botonModificar = document.createElement('i');
        botonModificar.classList.add('fa');
        botonModificar.classList.add('fa-edit');
        botonModificar.addEventListener('click', () => {
            console.log('modificado')
        });

        celdaAcciones3.appendChild(botonModificar);

        let celdaAcciones4 = fila.insertCell();

        let botonEliminar = document.createElement('i');
        botonEliminar.classList.add('fa');
        botonEliminar.classList.add('fa-trash');
        botonEliminar.addEventListener('click', () => {
            console.log('eliminado')
        });

        celdaAcciones4.appendChild(botonEliminar);
    })
}

const mostrarTablaRazas = () => {

    limpiarTabla();

    razasAdmin.forEach(item => {
        let fila = tablaCatalogo.insertRow();
        fila.insertCell().innerHTML = item.raza;
        fila.classList.add(`${item.estado}`);
        let celdaAcciones1 = fila.insertCell();

        let botonActivar = document.createElement('i');
        botonActivar.classList.add('fa');
        botonActivar.classList.add('fa-toggle-on');
        botonActivar.addEventListener('click', () => {
            console.log('activado')
        });

        celdaAcciones1.appendChild(botonActivar);

        let celdaAcciones2 = fila.insertCell();

        let botonDesactivar = document.createElement('i')
        botonDesactivar.classList.add('fa');
        botonDesactivar.classList.add('fa-toggle-off');
        botonDesactivar.addEventListener('click', () => {
            console.log('desactivado')
        });

        celdaAcciones2.appendChild(botonDesactivar);

        let celdaAcciones3 = fila.insertCell();

        let botonModificar = document.createElement('i');
        botonModificar.classList.add('fa');
        botonModificar.classList.add('fa-edit');
        botonModificar.addEventListener('click', () => {
            console.log('modificado')
        });

        celdaAcciones3.appendChild(botonModificar);

        let celdaAcciones4 = fila.insertCell();

        let botonEliminar = document.createElement('i');
        botonEliminar.classList.add('fa');
        botonEliminar.classList.add('fa-trash');
        botonEliminar.addEventListener('click', () => {
            console.log('eliminado')
        });

        celdaAcciones4.appendChild(botonEliminar);
    })
}

const obtenerTiposMascota = async() => {
    tiposMascotaAdmin = await listarTipoMascota();
}


const mostrarTablaTiposMascota = () => {

    limpiarTabla();

    tiposMascotaAdmin.forEach(tipo => {
        let fila = tablaCatalogo.insertRow();
        fila.insertCell().innerHTML = tipo.tipo;
        fila.classList.add(`${tipo.estado}`);
        let celdaAcciones1 = fila.insertCell();

        let botonActivar = document.createElement('i');
        botonActivar.classList.add('fa');
        botonActivar.classList.add('fa-toggle-on');
        botonActivar.addEventListener('click', () => {
            console.log('activado')
        });

        celdaAcciones1.appendChild(botonActivar);

        let celdaAcciones2 = fila.insertCell();

        let botonDesactivar = document.createElement('i')
        botonDesactivar.classList.add('fa');
        botonDesactivar.classList.add('fa-toggle-off');
        botonDesactivar.addEventListener('click', () => {
            console.log('desactivado')
        });

        celdaAcciones2.appendChild(botonDesactivar);

        let celdaAcciones3 = fila.insertCell();

        let botonModificar = document.createElement('i');
        botonModificar.classList.add('fa');
        botonModificar.classList.add('fa-edit');
        botonModificar.addEventListener('click', () => {
            console.log('modificado')
        });

        celdaAcciones3.appendChild(botonModificar);

        let celdaAcciones4 = fila.insertCell();

        let botonEliminar = document.createElement('i');
        botonEliminar.classList.add('fa');
        botonEliminar.classList.add('fa-trash');
        botonEliminar.addEventListener('click', () => {
            console.log('eliminado')
        });

        celdaAcciones4.appendChild(botonEliminar);
    })
}

const mostrarTablaVacunas = () => {

    limpiarTabla();

    vacunasAdmin.forEach(item => {
        let fila = tablaCatalogo.insertRow();
        fila.insertCell().innerHTML = item.nombre;
        fila.classList.add(`${item.estado}`);
        let celdaAcciones1 = fila.insertCell();

        let botonActivar = document.createElement('i');
        botonActivar.classList.add('fa');
        botonActivar.classList.add('fa-toggle-on');
        botonActivar.addEventListener('click', () => {
            console.log('activado')
        });

        celdaAcciones1.appendChild(botonActivar);

        let celdaAcciones2 = fila.insertCell();

        let botonDesactivar = document.createElement('i')
        botonDesactivar.classList.add('fa');
        botonDesactivar.classList.add('fa-toggle-off');
        botonDesactivar.addEventListener('click', () => {
            console.log('desactivado')
        });

        celdaAcciones2.appendChild(botonDesactivar);

        let celdaAcciones3 = fila.insertCell();

        let botonModificar = document.createElement('i');
        botonModificar.classList.add('fa');
        botonModificar.classList.add('fa-edit');
        botonModificar.addEventListener('click', () => {
            console.log('modificado')
        });

        celdaAcciones3.appendChild(botonModificar);

        let celdaAcciones4 = fila.insertCell();

        let botonEliminar = document.createElement('i');
        botonEliminar.classList.add('fa');
        botonEliminar.classList.add('fa-trash');
        botonEliminar.addEventListener('click', () => {
            console.log('eliminado')
        });

        celdaAcciones4.appendChild(botonEliminar);
    })
}

selectCatalogo.addEventListener('change', mostrarCatalogoSeleccionado);

obtenerVacunas();
obtenerRaza();
obtenerTiposMascota();
obtenerPadecimientos();
obtenerTiposDeServicios();
ocultaTabla();



// const btnRegistrarCatalogo = document.querySelector('#btn-registrarNuevoCatalogo');
// const txtNombreCatalogo = document.querySelector('#txt-nombreCatalogo');

// let validar = () => {
//     let inputs_requeridos = document.querySelectorAll('#frm-contacto [required]');
//     let error = false;

//     for (let i = 0; i < inputs_requeridos.length; i++) {
//         if (inputs_requeridos[i].value == '') {
//             inputs_requeridos[i].classList.add('error');
//             error = true;
//         } else {
//             inputs_requeridos[i].classList.remove('error');
//         }
//     }

//     return error;

// };
// let limpiar = () => {
//     txtNombreCatalogo.value = "";
// };

// let obtener_datos = () => {
//     let error = validar();

//     if (error) {
//         Swal.fire({
//             'title': 'Sus datos no se pudieron enviar',
//             'text': 'Por favor revise los campos resaltados',
//             'icon': 'warning'
//         });
//     } else {
//         console.log('Informacion del catálogo registrado');
//         console.log('=========================================================');
//         console.log(`Se agregó: ${txtNombreCatalogo.value} al catálogo del administrador`);


//         Swal.fire({
//             'title': 'Proceso realizado con éxito',
//             'text': 'Sus datos se enviaron adecuadamente',
//             'icon': 'success'
//         }).then(() => {
//             limpiar();
//         });
//     }
// };

// btnRegistrarCatalogo.addEventListener('click', obtener_datos);
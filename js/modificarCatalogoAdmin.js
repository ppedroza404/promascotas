'use strict';
const tablaCompleta = document.querySelector('table');
const tablaCatalogo = document.querySelector('#tbl-catalogos tbody');
const selectCatalogo = document.querySelector('#slt-catalogo');
//filtros de buscador
const filtroTipoServicioContenedor = document.querySelector('#filtroTipoServicioContenedor');
const filtroPadecimientosContenedor = document.querySelector('#filtroPadecimientosContenedor');
const filtroTipoContenedor = document.querySelector('#filtroTipoContenedor');
const filtroRazasContenedor = document.querySelector('#filtroRazasContenedor');
const filtroVacunasContenedor = document.querySelector('#filtroVacunasContenedor');

const inputFiltroTipoServicio = document.querySelector('#txt-filtroTipoServicio');
const inputFiltroPadecimientos = document.querySelector('#txt-filtroPadecimientos');
const inputFiltroTipos = document.querySelector('#txt-filtroTipo');
const inputFiltroRazas = document.querySelector('#txt-filtroRazas');
const inputFiltroVacunas = document.querySelector('#txt-filtroVacunas');




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
    filtroTipoServicioContenedor.classList.add('ocultar');
    filtroPadecimientosContenedor.classList.add('ocultar');
    filtroTipoContenedor.classList.add('ocultar');
    filtroRazasContenedor.classList.add('ocultar');
    filtroVacunasContenedor.classList.add('ocultar');
}

const mostrarCatalogoSeleccionado = () => {
    tablaCompleta.classList.remove('ocultar');
    limpiarTabla();

    if (selectCatalogo.value == 'tipoServicio') {
        filtroTipoServicioContenedor.classList.remove('ocultar');
        filtroPadecimientosContenedor.classList.add('ocultar');
        filtroTipoContenedor.classList.add('ocultar');
        filtroRazasContenedor.classList.add('ocultar');
        filtroVacunasContenedor.classList.add('ocultar');
        mostrarTablaTipoServicio()
    } else if (selectCatalogo.value == 'padecimientos') {
        filtroTipoServicioContenedor.classList.add('ocultar');
        filtroPadecimientosContenedor.classList.remove('ocultar');
        filtroTipoContenedor.classList.add('ocultar');
        filtroRazasContenedor.classList.add('ocultar');
        filtroVacunasContenedor.classList.add('ocultar');
        mostrarTablapadecimientos()
    } else if (selectCatalogo.value == 'tiposMascota') {
        filtroTipoServicioContenedor.classList.add('ocultar');
        filtroPadecimientosContenedor.classList.add('ocultar');
        filtroTipoContenedor.classList.remove('ocultar');
        filtroRazasContenedor.classList.add('ocultar');
        filtroVacunasContenedor.classList.add('ocultar');
        mostrarTablaTiposMascota()
    } else if (selectCatalogo.value == 'razas') {
        filtroTipoServicioContenedor.classList.add('ocultar');
        filtroPadecimientosContenedor.classList.add('ocultar');
        filtroTipoContenedor.classList.add('ocultar');
        filtroRazasContenedor.classList.remove('ocultar');
        filtroVacunasContenedor.classList.add('ocultar');
        mostrarTablaRazas()
    } else if (selectCatalogo.value == 'vacunas') {
        filtroTipoServicioContenedor.classList.add('ocultar');
        filtroPadecimientosContenedor.classList.add('ocultar');
        filtroTipoContenedor.classList.add('ocultar');
        filtroRazasContenedor.classList.add('ocultar');
        filtroVacunasContenedor.classList.remove('ocultar');
        mostrarTablaVacunas()
    } else if (selectCatalogo.value == 'Nulo') {
        ocultaTabla()
    }
};


const mostrarTablaTipoServicio = () => {
    let filtro = inputFiltroTipoServicio.value.toLowerCase();

    limpiarTabla();

    tipodeservicios.forEach(servicio => {
        if (servicio.nombre.toLowerCase().includes(filtro)) {
            let fila = tablaCatalogo.insertRow();
            fila.classList.add(`${servicio.estado}`);
            fila.setAttribute('id', `idTipoServicio${servicio._id}`);
            fila.insertCell().innerHTML = servicio.nombre;

            let celdaAcciones1 = fila.insertCell();
            let botonActivar = document.createElement('i');
            botonActivar.classList.add('fa');
            botonActivar.classList.add('fa-toggle-off');
            botonActivar.setAttribute('id', `activarTipoServicio${servicio._id}`);
            botonActivar.addEventListener('click', () => {
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
                desactivarTipoServicioConst();
            });
            celdaAcciones2.appendChild(botonDesactivar);
            celdaAcciones2.classList.add('DesactivarContenedor');

            let celdaAcciones3 = fila.insertCell();
            let botonModificar = document.createElement('i');
            botonModificar.classList.add('fa');
            botonModificar.classList.add('fa-edit');
            botonModificar.setAttribute('id', `abrirModal${servicio._id}`);

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
            }
            let btnModificarTipoServicio = document.querySelector(`#modificarServicio${servicio._id}`);
            btnModificarTipoServicio.addEventListener('click', datosModificacionTipoServicio);


            let celdaAcciones4 = fila.insertCell();
            let botonEliminar = document.createElement('i');
            botonEliminar.classList.add('fa');
            botonEliminar.classList.add('fa-trash');
            botonEliminar.setAttribute('id', `abrirModalEliminar${servicio._id}`);
            //modal
            let ModalContenedorEliminar;
            let ModalContentEliminar;
            ModalContenedorEliminar = document.createElement('div');
            ModalContenedorEliminar.setAttribute('id', `modalEliminar${servicio._id}`);
            ModalContenedorEliminar.classList.add('modal');
            ModalContenedorEliminar.classList.add('modalModificar');
            ModalContentEliminar = document.createElement('div');
            ModalContentEliminar.classList.add('modal-content');
            ModalContenedorEliminar.appendChild(ModalContentEliminar);
            //modal header
            let ModalHeaderEliminar;
            let ModalCerrarEliminar;
            let ModalTituloEliminar;
            ModalHeaderEliminar = document.createElement('div');
            ModalHeaderEliminar.classList.add('modal-header');
            ModalContentEliminar.appendChild(ModalHeaderEliminar);
            ModalCerrarEliminar = document.createElement('span');
            ModalCerrarEliminar.setAttribute('id', `cerrarEliminar${servicio._id}`);
            ModalCerrarEliminar.classList.add('close');
            ModalHeaderEliminar.appendChild(ModalCerrarEliminar);
            ModalCerrarEliminar.innerText = 'x';
            ModalTituloEliminar = document.createElement('h3');
            ModalTituloEliminar.innerText = `Eliminar ${servicio.nombre} (${servicio.estado})`;
            ModalHeaderEliminar.appendChild(ModalTituloEliminar);
            //modal body
            let ModalBodyEliminar;
            let ModalContenidoEliminar;
            ModalBodyEliminar = document.createElement('div');
            ModalBodyEliminar.classList.add('modal-body');
            ModalContentEliminar.appendChild(ModalBodyEliminar);
            ModalContenidoEliminar = document.createElement('div');
            ModalContenidoEliminar.classList.add('centrarBloque');
            ModalContenidoEliminar.classList.add('centrarTexto');
            ModalBodyEliminar.appendChild(ModalContenidoEliminar);
            //modal nombre
            let ModalContenidoBotonesEliminar;
            let ModalContenidoBotonSiEliminar;
            ModalContenidoBotonesEliminar = document.createElement('div');
            ModalContenidoEliminar.appendChild(ModalContenidoBotonesEliminar);
            ModalContenidoBotonSiEliminar = document.createElement('button');
            ModalContenidoBotonSiEliminar.setAttribute('type', `button`);
            ModalContenidoBotonSiEliminar.setAttribute('id', `aceptoBorrar${servicio._id}`);
            ModalContenidoBotonSiEliminar.classList.add('btn')
            ModalContenidoBotonSiEliminar.innerText = 'Eliminar';
            ModalContenidoBotonesEliminar.appendChild(ModalContenidoBotonSiEliminar);
            //modal footer
            let ModalFooterEliminar;
            ModalFooterEliminar = document.createElement('div');
            ModalFooterEliminar.classList.add('modal-footer');
            ModalContentEliminar.appendChild(ModalFooterEliminar);
            //modal footer btn modificar
            celdaAcciones4.appendChild(botonEliminar);
            celdaAcciones4.appendChild(ModalContenedorEliminar);
            //Levanta y cierra el modal
            let modalEliminar = document.querySelector(`#modalEliminar${servicio._id}`);
            let botonModalEliminar = document.querySelector(`#abrirModalEliminar${servicio._id}`);
            let cerrarModalEliminar = document.querySelector(`#cerrarEliminar${servicio._id}`);
            botonModalEliminar.addEventListener('click', () => {
                modalEliminar.style.display = 'block';
            });
            cerrarModalEliminar.addEventListener('click', () => {
                modalEliminar.style.display = 'none';
            });
            //Eliminar servicio
            const eliminarTipoServicioConst = () => {
                let _id = servicio._id;
                eliminarTipoServicio(_id);
            }
            let btnAceptoBorrar = document.querySelector(`#aceptoBorrar${servicio._id}`);
            btnAceptoBorrar.addEventListener('click', eliminarTipoServicioConst);


            //Activar servicio
            const activarTipoServicioConst = () => {
                    let _id = servicio._id;
                    activarTipoServicio(_id);
                }
                //Desactivar servicio
            const desactivarTipoServicioConst = () => {
                let _id = servicio._id;
                desactivarTipoServicio(_id);
            }
        }
    })

    inputFiltroTipoServicio.addEventListener('keyup', mostrarTablaTipoServicio);
}

const obtenerPadecimientos = async() => {
    listaPadecimientos = await listarPadecimientos();
}


const mostrarTablapadecimientos = () => {
    let filtro = inputFiltroPadecimientos.value.toLowerCase();

    limpiarTabla();

    listaPadecimientos.forEach(padecimiento => {
        if (padecimiento.padecimiento.toLowerCase().includes(filtro)) {
            let fila = tablaCatalogo.insertRow();
            fila.classList.add(`${padecimiento.estado}`);
            fila.insertCell().innerHTML = padecimiento.padecimiento;

            let celdaAcciones1 = fila.insertCell();
            let botonActivar = document.createElement('i');
            botonActivar.classList.add('fa');
            botonActivar.classList.add('fa-toggle-off');
            botonActivar.setAttribute('id', `activarPadecimiento${padecimiento._id}`);
            botonActivar.addEventListener('click', () => {
                activarPadecimientoConst();
            });
            celdaAcciones1.appendChild(botonActivar);
            celdaAcciones1.classList.add('ActivarContenedor');

            let celdaAcciones2 = fila.insertCell();
            let botonDesactivar = document.createElement('i')
            botonDesactivar.classList.add('fa');
            botonDesactivar.classList.add('fa-toggle-on');
            botonActivar.setAttribute('id', `desactivarPadecimiento${padecimiento._id}`);
            botonDesactivar.addEventListener('click', () => {
                desactivarPadecimientoConst();
            });
            celdaAcciones2.appendChild(botonDesactivar);
            celdaAcciones2.classList.add('DesactivarContenedor');

            let celdaAcciones3 = fila.insertCell();
            let botonModificar = document.createElement('i');
            botonModificar.classList.add('fa');
            botonModificar.classList.add('fa-edit');
            botonModificar.setAttribute('id', `abrirModal${padecimiento._id}`);

            //modal
            let ModalContenedor;
            let ModalContent;
            ModalContenedor = document.createElement('div');
            ModalContenedor.setAttribute('id', `modal${padecimiento._id}`);
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
            ModalCerrar.setAttribute('id', `cerrar${padecimiento._id}`);
            ModalCerrar.classList.add('close');
            ModalHeader.appendChild(ModalCerrar);
            ModalCerrar.innerText = 'x';
            ModalTitulo = document.createElement('h3');
            ModalTitulo.innerText = `${padecimiento.padecimiento} (${padecimiento.estado})`;
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
            ModalContenidoNombreLabel.setAttribute('for', `modificarPadecimiento${padecimiento._id}`);
            ModalContenidoNombreLabel.innerText = 'Nombre que desea modificar';
            ModalContenidoNombre.appendChild(ModalContenidoNombreLabel);
            ModalContenidoNombreInput = document.createElement('input');
            ModalContenidoNombreInput.setAttribute('id', `modificarPadecimiento${padecimiento._id}`);
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
            ModalFooterModificarBtn.setAttribute('id', `btnModificarPadecimiento${padecimiento._id}`);
            ModalFooter.appendChild(ModalFooterModificarBtn);
            BtnModificarItem = document.createElement('i');
            BtnModificarItem.classList.add('fa');
            BtnModificarItem.classList.add('fa-edit');
            ModalFooterModificarBtn.appendChild(BtnModificarItem);
            celdaAcciones3.appendChild(botonModificar);
            celdaAcciones3.appendChild(ModalContenedor);

            //Levanta y cierra el modal
            let modal = document.querySelector(`#modal${padecimiento._id}`);
            let botonModal = document.querySelector(`#abrirModal${padecimiento._id}`);
            let cerrarModal = document.querySelector(`#cerrar${padecimiento._id}`);
            botonModal.addEventListener('click', () => {
                modal.style.display = 'block';
            });
            cerrarModal.addEventListener('click', () => {
                modal.style.display = 'none';
            });
            const datosModificacionPadecimiento = () => {
                let NombreModificado = document.querySelector(`#modificarPadecimiento${padecimiento._id}`).value;
                let _id = padecimiento._id;
                modificarPadecimiento(NombreModificado, _id);
            }
            let btnModificarPadecimiento = document.querySelector(`#btnModificarPadecimiento${padecimiento._id}`);
            btnModificarPadecimiento.addEventListener('click', datosModificacionPadecimiento);


            let celdaAcciones4 = fila.insertCell();
            let botonEliminar = document.createElement('i');
            botonEliminar.classList.add('fa');
            botonEliminar.classList.add('fa-trash');

            botonEliminar.setAttribute('id', `abrirModalEliminar${padecimiento._id}`);
            //modal
            let ModalContenedorEliminar;
            let ModalContentEliminar;
            ModalContenedorEliminar = document.createElement('div');
            ModalContenedorEliminar.setAttribute('id', `modalEliminar${padecimiento._id}`);
            ModalContenedorEliminar.classList.add('modal');
            ModalContenedorEliminar.classList.add('modalModificar');
            ModalContentEliminar = document.createElement('div');
            ModalContentEliminar.classList.add('modal-content');
            ModalContenedorEliminar.appendChild(ModalContentEliminar);
            //modal header
            let ModalHeaderEliminar;
            let ModalCerrarEliminar;
            let ModalTituloEliminar;
            ModalHeaderEliminar = document.createElement('div');
            ModalHeaderEliminar.classList.add('modal-header');
            ModalContentEliminar.appendChild(ModalHeaderEliminar);
            ModalCerrarEliminar = document.createElement('span');
            ModalCerrarEliminar.setAttribute('id', `cerrarEliminar${padecimiento._id}`);
            ModalCerrarEliminar.classList.add('close');
            ModalHeaderEliminar.appendChild(ModalCerrarEliminar);
            ModalCerrarEliminar.innerText = 'x';
            ModalTituloEliminar = document.createElement('h3');
            ModalTituloEliminar.innerText = `Eliminar ${padecimiento.padecimiento} (${padecimiento.estado})`;
            ModalHeaderEliminar.appendChild(ModalTituloEliminar);
            //modal body
            let ModalBodyEliminar;
            let ModalContenidoEliminar;
            ModalBodyEliminar = document.createElement('div');
            ModalBodyEliminar.classList.add('modal-body');
            ModalContentEliminar.appendChild(ModalBodyEliminar);
            ModalContenidoEliminar = document.createElement('div');
            ModalContenidoEliminar.classList.add('centrarBloque');
            ModalContenidoEliminar.classList.add('centrarTexto');
            ModalBodyEliminar.appendChild(ModalContenidoEliminar);
            //modal nombre
            let ModalContenidoBotonesEliminar;
            let ModalContenidoBotonSiEliminar;
            ModalContenidoBotonesEliminar = document.createElement('div');
            ModalContenidoEliminar.appendChild(ModalContenidoBotonesEliminar);
            ModalContenidoBotonSiEliminar = document.createElement('button');
            ModalContenidoBotonSiEliminar.setAttribute('type', `button`);
            ModalContenidoBotonSiEliminar.setAttribute('id', `aceptoBorrar${padecimiento._id}`);
            ModalContenidoBotonSiEliminar.classList.add('btn')
            ModalContenidoBotonSiEliminar.innerText = 'Eliminar';
            ModalContenidoBotonesEliminar.appendChild(ModalContenidoBotonSiEliminar);
            //modal footer
            let ModalFooterEliminar;
            ModalFooterEliminar = document.createElement('div');
            ModalFooterEliminar.classList.add('modal-footer');
            ModalContentEliminar.appendChild(ModalFooterEliminar);
            //modal footer btn modificar
            celdaAcciones4.appendChild(botonEliminar);
            celdaAcciones4.appendChild(ModalContenedorEliminar);
            //Levanta y cierra el modal
            let modalEliminar = document.querySelector(`#modalEliminar${padecimiento._id}`);
            let botonModalEliminar = document.querySelector(`#abrirModalEliminar${padecimiento._id}`);
            let cerrarModalEliminar = document.querySelector(`#cerrarEliminar${padecimiento._id}`);
            botonModalEliminar.addEventListener('click', () => {
                modalEliminar.style.display = 'block';
            });
            cerrarModalEliminar.addEventListener('click', () => {
                modalEliminar.style.display = 'none';
            });
            //Eliminar padecimiento
            const eliminarPadecimientoConst = () => {
                let _id = padecimiento._id;
                eliminarPadecimiento(_id);
            }
            let btnAceptoBorrar = document.querySelector(`#aceptoBorrar${padecimiento._id}`);
            btnAceptoBorrar.addEventListener('click', eliminarPadecimientoConst);


            //Activar padecimiento
            const activarPadecimientoConst = () => {
                    let _id = padecimiento._id;
                    activarPadecimiento(_id);
                }
                //Desactivar padecimiento
            const desactivarPadecimientoConst = () => {
                let _id = padecimiento._id;
                desactivarPadecimiento(_id);
            }

        }
        inputFiltroPadecimientos.addEventListener('keyup', mostrarTablapadecimientos);
    })
}

const mostrarTablaRazas = () => {
    let filtro = inputFiltroRazas.value.toLowerCase();

    limpiarTabla();

    razasAdmin.forEach(item => {
        let tipomascotaNombre;
        item.tipomascota.forEach(tipo => {
            tipomascotaNombre = tipo.tipo;
        });
        ////Averiguar como se hace un doble filtro
        if (item.raza.toLowerCase().includes(filtro)) {

            let fila = tablaCatalogo.insertRow();
            fila.classList.add(`${item.estado}`);
            fila.insertCell().innerHTML = (` ${tipomascotaNombre} -- ${item.raza}`);


            let celdaAcciones1 = fila.insertCell();
            let botonActivar = document.createElement('i');
            botonActivar.classList.add('fa');
            botonActivar.classList.add('fa-toggle-off');
            botonActivar.setAttribute('id', `activarRaza${item._id}`);
            botonActivar.addEventListener('click', () => {
                activarRazaConst();
            });
            celdaAcciones1.appendChild(botonActivar);
            celdaAcciones1.classList.add('ActivarContenedor');

            let celdaAcciones2 = fila.insertCell();
            let botonDesactivar = document.createElement('i')
            botonDesactivar.classList.add('fa');
            botonDesactivar.classList.add('fa-toggle-on');
            botonDesactivar.setAttribute('id', `desactivarRaza${item._id}`);
            botonDesactivar.addEventListener('click', () => {
                desactivarRazaConst();
            });
            celdaAcciones2.appendChild(botonDesactivar);
            celdaAcciones2.classList.add('DesactivarContenedor');

            let celdaAcciones3 = fila.insertCell();
            let botonModificar = document.createElement('i');
            botonModificar.classList.add('fa');
            botonModificar.classList.add('fa-edit');
            botonModificar.setAttribute('id', `abrirModal${item._id}`);

            //modal
            let ModalContenedor;
            let ModalContent;
            ModalContenedor = document.createElement('div');
            ModalContenedor.setAttribute('id', `modal${item._id}`);
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
            ModalCerrar.setAttribute('id', `cerrar${item._id}`);
            ModalCerrar.classList.add('close');
            ModalHeader.appendChild(ModalCerrar);
            ModalCerrar.innerText = 'x';
            ModalTitulo = document.createElement('h3');
            ModalTitulo.innerText = `${item.raza} (${item.estado})`;
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
            ModalContenidoNombreLabel.setAttribute('for', `modificarRazaInput${item._id}`);
            ModalContenidoNombreLabel.innerText = 'Nombre que desea modificar';
            ModalContenidoNombre.appendChild(ModalContenidoNombreLabel);
            ModalContenidoNombreInput = document.createElement('input');
            ModalContenidoNombreInput.setAttribute('id', `modificarRazaInput${item._id}`);
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
            ModalFooterModificarBtn.setAttribute('id', `modificarRaza${item._id}`);
            ModalFooter.appendChild(ModalFooterModificarBtn);
            BtnModificarItem = document.createElement('i');
            BtnModificarItem.classList.add('fa');
            BtnModificarItem.classList.add('fa-edit');
            ModalFooterModificarBtn.appendChild(BtnModificarItem);
            celdaAcciones3.appendChild(botonModificar);
            celdaAcciones3.appendChild(ModalContenedor);

            //Levanta y cierra el modal
            let modal = document.querySelector(`#modal${item._id}`);
            let botonModal = document.querySelector(`#abrirModal${item._id}`);
            let cerrarModal = document.querySelector(`#cerrar${item._id}`);
            botonModal.addEventListener('click', () => {
                modal.style.display = 'block';
            });
            cerrarModal.addEventListener('click', () => {
                modal.style.display = 'none';
            });
            const datosModificacionRaza = () => {
                let NombreModificado = document.querySelector(`#modificarRazaInput${item._id}`).value;
                let _id = item._id;
                modificarRaza(NombreModificado, _id);
            }
            let btnModificarRaza = document.querySelector(`#modificarRaza${item._id}`);
            btnModificarRaza.addEventListener('click', datosModificacionRaza);


            let celdaAcciones4 = fila.insertCell();
            let botonEliminar = document.createElement('i');
            botonEliminar.classList.add('fa');
            botonEliminar.classList.add('fa-trash');

            botonEliminar.setAttribute('id', `abrirModalEliminar${item._id}`);
            //modal
            let ModalContenedorEliminar;
            let ModalContentEliminar;
            ModalContenedorEliminar = document.createElement('div');
            ModalContenedorEliminar.setAttribute('id', `modalEliminar${item._id}`);
            ModalContenedorEliminar.classList.add('modal');
            ModalContenedorEliminar.classList.add('modalModificar');
            ModalContentEliminar = document.createElement('div');
            ModalContentEliminar.classList.add('modal-content');
            ModalContenedorEliminar.appendChild(ModalContentEliminar);
            //modal header
            let ModalHeaderEliminar;
            let ModalCerrarEliminar;
            let ModalTituloEliminar;
            ModalHeaderEliminar = document.createElement('div');
            ModalHeaderEliminar.classList.add('modal-header');
            ModalContentEliminar.appendChild(ModalHeaderEliminar);
            ModalCerrarEliminar = document.createElement('span');
            ModalCerrarEliminar.setAttribute('id', `cerrarEliminar${item._id}`);
            ModalCerrarEliminar.classList.add('close');
            ModalHeaderEliminar.appendChild(ModalCerrarEliminar);
            ModalCerrarEliminar.innerText = 'x';
            ModalTituloEliminar = document.createElement('h3');
            ModalTituloEliminar.innerText = `Eliminar ${item.raza} (${item.estado})`;
            ModalHeaderEliminar.appendChild(ModalTituloEliminar);
            //modal body
            let ModalBodyEliminar;
            let ModalContenidoEliminar;
            ModalBodyEliminar = document.createElement('div');
            ModalBodyEliminar.classList.add('modal-body');
            ModalContentEliminar.appendChild(ModalBodyEliminar);
            ModalContenidoEliminar = document.createElement('div');
            ModalContenidoEliminar.classList.add('centrarBloque');
            ModalContenidoEliminar.classList.add('centrarTexto');
            ModalBodyEliminar.appendChild(ModalContenidoEliminar);
            //modal nombre
            let ModalContenidoBotonesEliminar;
            let ModalContenidoBotonSiEliminar;
            ModalContenidoBotonesEliminar = document.createElement('div');
            ModalContenidoEliminar.appendChild(ModalContenidoBotonesEliminar);
            ModalContenidoBotonSiEliminar = document.createElement('button');
            ModalContenidoBotonSiEliminar.setAttribute('type', `button`);
            ModalContenidoBotonSiEliminar.setAttribute('id', `aceptoBorrar${item._id}`);
            ModalContenidoBotonSiEliminar.classList.add('btn')
            ModalContenidoBotonSiEliminar.innerText = 'Eliminar';
            ModalContenidoBotonesEliminar.appendChild(ModalContenidoBotonSiEliminar);
            //modal footer
            let ModalFooterEliminar;
            ModalFooterEliminar = document.createElement('div');
            ModalFooterEliminar.classList.add('modal-footer');
            ModalContentEliminar.appendChild(ModalFooterEliminar);
            //modal footer btn modificar
            celdaAcciones4.appendChild(botonEliminar);
            celdaAcciones4.appendChild(ModalContenedorEliminar);
            //Levanta y cierra el modal
            let modalEliminar = document.querySelector(`#modalEliminar${item._id}`);
            let botonModalEliminar = document.querySelector(`#abrirModalEliminar${item._id}`);
            let cerrarModalEliminar = document.querySelector(`#cerrarEliminar${item._id}`);
            botonModalEliminar.addEventListener('click', () => {
                modalEliminar.style.display = 'block';
            });
            cerrarModalEliminar.addEventListener('click', () => {
                modalEliminar.style.display = 'none';
            });
            //Eliminar raza
            const eliminarRazaConst = () => {
                let _id = item._id;
                eliminarRaza(_id);
            }
            let btnAceptoBorrar = document.querySelector(`#aceptoBorrar${item._id}`);
            btnAceptoBorrar.addEventListener('click', eliminarRazaConst);


            //Activar raza
            const activarRazaConst = () => {
                    let _id = item._id;
                    activarRaza(_id);
                }
                //Desactivar raza
            const desactivarRazaConst = () => {
                let _id = item._id;
                desactivarRaza(_id);
            }
        }
        inputFiltroRazas.addEventListener('keyup', mostrarTablaRazas);
    })
}

const obtenerTiposMascota = async() => {
    tiposMascotaAdmin = await listarTipoMascota();
}


const mostrarTablaTiposMascota = () => {
    let filtro = inputFiltroTipos.value.toLowerCase();

    limpiarTabla();

    tiposMascotaAdmin.forEach(tipo => {
        if (tipo.tipo.toLowerCase().includes(filtro)) {
            let fila = tablaCatalogo.insertRow();
            fila.classList.add(`${tipo.estado}`);
            fila.insertCell().innerHTML = tipo.tipo;

            let celdaAcciones1 = fila.insertCell();
            let botonActivar = document.createElement('i');
            botonActivar.classList.add('fa');
            botonActivar.classList.add('fa-toggle-off');
            botonActivar.setAttribute('id', `activarTipoMascota${tipo._id}`);
            botonActivar.addEventListener('click', () => {
                activarTipoMascotaConst();
            });
            celdaAcciones1.appendChild(botonActivar);
            celdaAcciones1.classList.add('ActivarContenedor');

            let celdaAcciones2 = fila.insertCell();
            let botonDesactivar = document.createElement('i')
            botonDesactivar.classList.add('fa');
            botonDesactivar.classList.add('fa-toggle-on');
            botonDesactivar.setAttribute('id', `desactivarTipoMascota${tipo._id}`);
            botonDesactivar.addEventListener('click', () => {
                desactivarTipoMascotaConst();
            });
            celdaAcciones2.appendChild(botonDesactivar);
            celdaAcciones2.classList.add('DesactivarContenedor');

            let celdaAcciones3 = fila.insertCell();
            let botonModificar = document.createElement('i');
            botonModificar.classList.add('fa');
            botonModificar.classList.add('fa-edit');
            botonModificar.setAttribute('id', `abrirModal${tipo._id}`);

            //modal
            let ModalContenedor;
            let ModalContent;
            ModalContenedor = document.createElement('div');
            ModalContenedor.setAttribute('id', `modal${tipo._id}`);
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
            ModalCerrar.setAttribute('id', `cerrar${tipo._id}`);
            ModalCerrar.classList.add('close');
            ModalHeader.appendChild(ModalCerrar);
            ModalCerrar.innerText = 'x';
            ModalTitulo = document.createElement('h3');
            ModalTitulo.innerText = `${tipo.tipo} (${tipo.estado})`;
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
            ModalContenidoNombreLabel.setAttribute('for', `modificarNombreTipoMascota${tipo._id}`);
            ModalContenidoNombreLabel.innerText = 'Nombre que desea modificar';
            ModalContenidoNombre.appendChild(ModalContenidoNombreLabel);
            ModalContenidoNombreInput = document.createElement('input');
            ModalContenidoNombreInput.setAttribute('id', `modificarNombreTipoMascota${tipo._id}`);
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
            ModalFooterModificarBtn.setAttribute('id', `modificarTipoMascota${tipo._id}`);
            ModalFooter.appendChild(ModalFooterModificarBtn);
            BtnModificarItem = document.createElement('i');
            BtnModificarItem.classList.add('fa');
            BtnModificarItem.classList.add('fa-edit');
            ModalFooterModificarBtn.appendChild(BtnModificarItem);
            celdaAcciones3.appendChild(botonModificar);
            celdaAcciones3.appendChild(ModalContenedor);

            //Levanta y cierra el modal
            let modal = document.querySelector(`#modal${tipo._id}`);
            let botonModal = document.querySelector(`#abrirModal${tipo._id}`);
            let cerrarModal = document.querySelector(`#cerrar${tipo._id}`);
            botonModal.addEventListener('click', () => {
                modal.style.display = 'block';
            });
            cerrarModal.addEventListener('click', () => {
                modal.style.display = 'none';
            });
            const datosModificacionTipoMascota = () => {
                let NombreModificado = document.querySelector(`#modificarNombreTipoMascota${tipo._id}`).value;
                let _id = tipo._id;
                modificarTipoMascota(NombreModificado, _id);
            }
            let btnModificarTipoMascota = document.querySelector(`#modificarTipoMascota${tipo._id}`);
            btnModificarTipoMascota.addEventListener('click', datosModificacionTipoMascota);


            let celdaAcciones4 = fila.insertCell();
            let botonEliminar = document.createElement('i');
            botonEliminar.classList.add('fa');
            botonEliminar.classList.add('fa-trash');
            botonEliminar.setAttribute('id', `abrirModalEliminar${tipo._id}`);
            //modal
            let ModalContenedorEliminar;
            let ModalContentEliminar;
            ModalContenedorEliminar = document.createElement('div');
            ModalContenedorEliminar.setAttribute('id', `modalEliminar${tipo._id}`);
            ModalContenedorEliminar.classList.add('modal');
            ModalContenedorEliminar.classList.add('modalModificar');
            ModalContentEliminar = document.createElement('div');
            ModalContentEliminar.classList.add('modal-content');
            ModalContenedorEliminar.appendChild(ModalContentEliminar);
            //modal header
            let ModalHeaderEliminar;
            let ModalCerrarEliminar;
            let ModalTituloEliminar;
            ModalHeaderEliminar = document.createElement('div');
            ModalHeaderEliminar.classList.add('modal-header');
            ModalContentEliminar.appendChild(ModalHeaderEliminar);
            ModalCerrarEliminar = document.createElement('span');
            ModalCerrarEliminar.setAttribute('id', `cerrarEliminar${tipo._id}`);
            ModalCerrarEliminar.classList.add('close');
            ModalHeaderEliminar.appendChild(ModalCerrarEliminar);
            ModalCerrarEliminar.innerText = 'x';
            ModalTituloEliminar = document.createElement('h3');
            ModalTituloEliminar.innerText = `Eliminar ${tipo.tipo} (${tipo.estado})`;
            ModalHeaderEliminar.appendChild(ModalTituloEliminar);
            //modal body
            let ModalBodyEliminar;
            let ModalContenidoEliminar;
            ModalBodyEliminar = document.createElement('div');
            ModalBodyEliminar.classList.add('modal-body');
            ModalContentEliminar.appendChild(ModalBodyEliminar);
            ModalContenidoEliminar = document.createElement('div');
            ModalContenidoEliminar.classList.add('centrarBloque');
            ModalContenidoEliminar.classList.add('centrarTexto');
            ModalBodyEliminar.appendChild(ModalContenidoEliminar);
            //modal nombre
            let ModalContenidoBotonesEliminar;
            let ModalContenidoBotonSiEliminar;
            ModalContenidoBotonesEliminar = document.createElement('div');
            ModalContenidoEliminar.appendChild(ModalContenidoBotonesEliminar);
            ModalContenidoBotonSiEliminar = document.createElement('button');
            ModalContenidoBotonSiEliminar.setAttribute('type', `button`);
            ModalContenidoBotonSiEliminar.setAttribute('id', `aceptoBorrar${tipo._id}`);
            ModalContenidoBotonSiEliminar.classList.add('btn')
            ModalContenidoBotonSiEliminar.innerText = 'Eliminar';
            ModalContenidoBotonesEliminar.appendChild(ModalContenidoBotonSiEliminar);
            //modal footer
            let ModalFooterEliminar;
            ModalFooterEliminar = document.createElement('div');
            ModalFooterEliminar.classList.add('modal-footer');
            ModalContentEliminar.appendChild(ModalFooterEliminar);
            //modal footer btn modificar
            celdaAcciones4.appendChild(botonEliminar);
            celdaAcciones4.appendChild(ModalContenedorEliminar);
            //Levanta y cierra el modal
            let modalEliminar = document.querySelector(`#modalEliminar${tipo._id}`);
            let botonModalEliminar = document.querySelector(`#abrirModalEliminar${tipo._id}`);
            let cerrarModalEliminar = document.querySelector(`#cerrarEliminar${tipo._id}`);
            botonModalEliminar.addEventListener('click', () => {
                modalEliminar.style.display = 'block';
            });
            cerrarModalEliminar.addEventListener('click', () => {
                modalEliminar.style.display = 'none';
            });
            const BorrarTipoMascota = () => {
                let _id = tipo._id;
                eliminarTipoMascota(_id);
            }
            let btnAceptoBorrar = document.querySelector(`#aceptoBorrar${tipo._id}`);
            btnAceptoBorrar.addEventListener('click', BorrarTipoMascota);

            //Activar mascota
            const activarTipoMascotaConst = () => {
                    let _id = tipo._id;
                    activarTipoMascota(_id);
                }
                //Desactivar Mascota
            const desactivarTipoMascotaConst = () => {
                let _id = tipo._id;
                desactivarTipoMascota(_id);
            }
        }
        inputFiltroTipos.addEventListener('keyup', mostrarTablaTiposMascota);
    })
}

const mostrarTablaVacunas = () => {
    let filtro = inputFiltroVacunas.value.toLowerCase();

    limpiarTabla();

    vacunasAdmin.forEach(item => {
        if (item.nombre.toLowerCase().includes(filtro)) {
            let fila = tablaCatalogo.insertRow();
            fila.classList.add(`${item.estado}`);
            fila.insertCell().innerHTML = item.nombre;

            let celdaAcciones1 = fila.insertCell();
            let botonActivar = document.createElement('i');
            botonActivar.classList.add('fa');
            botonActivar.classList.add('fa-toggle-off');
            botonActivar.setAttribute('id', `activarVacuna${item._id}`);
            botonActivar.addEventListener('click', () => {
                activarVacunaConst();
            });
            celdaAcciones1.appendChild(botonActivar);
            celdaAcciones1.classList.add('ActivarContenedor');

            let celdaAcciones2 = fila.insertCell();
            let botonDesactivar = document.createElement('i')
            botonDesactivar.classList.add('fa');
            botonDesactivar.classList.add('fa-toggle-on');
            botonDesactivar.setAttribute('id', `desactivarVacuna${item._id}`);
            botonDesactivar.addEventListener('click', () => {
                desactivarVacunaConst();
            });
            celdaAcciones2.appendChild(botonDesactivar);
            celdaAcciones2.classList.add('DesactivarContenedor');

            let celdaAcciones3 = fila.insertCell();
            let botonModificar = document.createElement('i');
            botonModificar.classList.add('fa');
            botonModificar.classList.add('fa-edit');



            botonModificar.setAttribute('id', `abrirModal${item._id}`);

            //modal
            let ModalContenedor;
            let ModalContent;
            ModalContenedor = document.createElement('div');
            ModalContenedor.setAttribute('id', `modal${item._id}`);
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
            ModalCerrar.setAttribute('id', `cerrar${item._id}`);
            ModalCerrar.classList.add('close');
            ModalHeader.appendChild(ModalCerrar);
            ModalCerrar.innerText = 'x';
            ModalTitulo = document.createElement('h3');
            ModalTitulo.innerText = `${item.nombre} (${item.estado})`;
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
            ModalContenidoNombreLabel.setAttribute('for', `modificarServicioVacuna${item._id}`);
            ModalContenidoNombreLabel.innerText = 'Nombre que desea modificar';
            ModalContenidoNombre.appendChild(ModalContenidoNombreLabel);
            ModalContenidoNombreInput = document.createElement('input');
            ModalContenidoNombreInput.setAttribute('id', `modificarServicioVacuna${item._id}`);
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
            ModalFooterModificarBtn.setAttribute('id', `modificarVacuna${item._id}`);
            ModalFooter.appendChild(ModalFooterModificarBtn);
            BtnModificarItem = document.createElement('i');
            BtnModificarItem.classList.add('fa');
            BtnModificarItem.classList.add('fa-edit');
            ModalFooterModificarBtn.appendChild(BtnModificarItem);
            celdaAcciones3.appendChild(botonModificar);
            celdaAcciones3.appendChild(ModalContenedor);

            //Levanta y cierra el modal
            let modal = document.querySelector(`#modal${item._id}`);
            let botonModal = document.querySelector(`#abrirModal${item._id}`);
            let cerrarModal = document.querySelector(`#cerrar${item._id}`);
            botonModal.addEventListener('click', () => {
                modal.style.display = 'block';
            });
            cerrarModal.addEventListener('click', () => {
                modal.style.display = 'none';
            });
            const datosModificacionVacuna = () => {
                let NombreModificado = document.querySelector(`#modificarServicioVacuna${item._id}`).value;
                let _id = item._id;
                modificarVacuna(NombreModificado, _id);
            }
            let btnModificarVacuna = document.querySelector(`#modificarVacuna${item._id}`);
            btnModificarVacuna.addEventListener('click', datosModificacionVacuna);


            let celdaAcciones4 = fila.insertCell();

            let botonEliminar = document.createElement('i');
            botonEliminar.classList.add('fa');
            botonEliminar.classList.add('fa-trash');

            botonEliminar.setAttribute('id', `abrirModalEliminar${item._id}`);
            //modal
            let ModalContenedorEliminar;
            let ModalContentEliminar;
            ModalContenedorEliminar = document.createElement('div');
            ModalContenedorEliminar.setAttribute('id', `modalEliminar${item._id}`);
            ModalContenedorEliminar.classList.add('modal');
            ModalContenedorEliminar.classList.add('modalModificar');
            ModalContentEliminar = document.createElement('div');
            ModalContentEliminar.classList.add('modal-content');
            ModalContenedorEliminar.appendChild(ModalContentEliminar);
            //modal header
            let ModalHeaderEliminar;
            let ModalCerrarEliminar;
            let ModalTituloEliminar;
            ModalHeaderEliminar = document.createElement('div');
            ModalHeaderEliminar.classList.add('modal-header');
            ModalContentEliminar.appendChild(ModalHeaderEliminar);
            ModalCerrarEliminar = document.createElement('span');
            ModalCerrarEliminar.setAttribute('id', `cerrarEliminar${item._id}`);
            ModalCerrarEliminar.classList.add('close');
            ModalHeaderEliminar.appendChild(ModalCerrarEliminar);
            ModalCerrarEliminar.innerText = 'x';
            ModalTituloEliminar = document.createElement('h3');
            ModalTituloEliminar.innerText = `Eliminar ${item.nombre} (${item.estado})`;
            ModalHeaderEliminar.appendChild(ModalTituloEliminar);
            //modal body
            let ModalBodyEliminar;
            let ModalContenidoEliminar;
            ModalBodyEliminar = document.createElement('div');
            ModalBodyEliminar.classList.add('modal-body');
            ModalContentEliminar.appendChild(ModalBodyEliminar);
            ModalContenidoEliminar = document.createElement('div');
            ModalContenidoEliminar.classList.add('centrarBloque');
            ModalContenidoEliminar.classList.add('centrarTexto');
            ModalBodyEliminar.appendChild(ModalContenidoEliminar);
            //modal nombre
            let ModalContenidoBotonesEliminar;
            let ModalContenidoBotonSiEliminar;
            ModalContenidoBotonesEliminar = document.createElement('div');
            ModalContenidoEliminar.appendChild(ModalContenidoBotonesEliminar);
            ModalContenidoBotonSiEliminar = document.createElement('button');
            ModalContenidoBotonSiEliminar.setAttribute('type', `button`);
            ModalContenidoBotonSiEliminar.setAttribute('id', `aceptoBorrar${item._id}`);
            ModalContenidoBotonSiEliminar.classList.add('btn')
            ModalContenidoBotonSiEliminar.innerText = 'Eliminar';
            ModalContenidoBotonesEliminar.appendChild(ModalContenidoBotonSiEliminar);
            //modal footer
            let ModalFooterEliminar;
            ModalFooterEliminar = document.createElement('div');
            ModalFooterEliminar.classList.add('modal-footer');
            ModalContentEliminar.appendChild(ModalFooterEliminar);
            //modal footer btn modificar
            celdaAcciones4.appendChild(botonEliminar);
            celdaAcciones4.appendChild(ModalContenedorEliminar);
            //Levanta y cierra el modal
            let modalEliminar = document.querySelector(`#modalEliminar${item._id}`);
            let botonModalEliminar = document.querySelector(`#abrirModalEliminar${item._id}`);
            let cerrarModalEliminar = document.querySelector(`#cerrarEliminar${item._id}`);
            botonModalEliminar.addEventListener('click', () => {
                modalEliminar.style.display = 'block';
            });
            cerrarModalEliminar.addEventListener('click', () => {
                modalEliminar.style.display = 'none';
            });
            //Eliminar Vacuna
            const eliminarVacunaConst = () => {
                let _id = item._id;
                eliminarVacuna(_id);
            }
            let btnAceptoBorrar = document.querySelector(`#aceptoBorrar${item._id}`);
            btnAceptoBorrar.addEventListener('click', eliminarVacunaConst);


            //Activar Vacuna
            const activarVacunaConst = () => {
                    let _id = item._id;
                    activarVacuna(_id);
                }
                //Desactivar Vacuna
            const desactivarVacunaConst = () => {
                let _id = item._id;
                desactivarVacuna(_id);
            }

        }
        inputFiltroVacunas.addEventListener('keyup', mostrarTablaVacunas);
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
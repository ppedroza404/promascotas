'use strict';
let servicioSeleccionado = document.querySelector('#slt-seleccionarServicio');
let tamanoSeleccionado = document.querySelector('#slt-seleccionarTamanno');
let fechaSeleccionada = document.querySelector('#txt-fechaServicio');
let provinciaSeleccionada = document.querySelector('#provincias');
let cantonSeleccionada = document.querySelector('#cantones');
let distritoSeleccionado = document.querySelector('#distritos');
let comentarioSeleccionado = document.querySelector('#txt-Comentarios');
let botonEnviar = document.querySelector('#btn-solicitar');
//Obtiene información del proveedor cuando es cliente
let urlID = window.location.hash;
let urlIDModificado = urlID.slice(1);


const validarCamposUsuario = () => {
    let error = false;


    if (servicioSeleccionado.value == '') {
        error = true;
        servicioSeleccionado.classList.add('error');
    } else {
        servicioSeleccionado.classList.remove('error');
    }
    // if (tamanoSeleccionado.value == '') {
    //     error = true;
    //     tamanoSeleccionado.classList.add('error');
    // } else {
    //     tamanoSeleccionado.classList.remove('error');
    // }
    if (fechaSeleccionada.value == '') {
        error = true;
        fechaSeleccionada.classList.add('error');
    } else {
        fechaSeleccionada.classList.remove('error');
    }
    // if (provinciaSeleccionada.value == '') {
    //     error = true;
    //     provinciaSeleccionada.classList.add('error');
    // } else {
    //     provinciaSeleccionada.classList.remove('error');
    // }
    // if (cantonSeleccionada.value == '') {
    //     error = true;
    //     cantonSeleccionada.classList.add('error');
    // } else {
    //     cantonSeleccionada.classList.remove('error');
    // }
    // if (distritoSeleccionado.value == '') {
    //     error = true;
    //     distritoSeleccionado.classList.add('error');
    // } else {
    //     distritoSeleccionado.classList.remove('error');
    // }
    if (comentarioSeleccionado.value == '') {
        error = true;
        comentarioSeleccionado.classList.add('error');
    } else {
        comentarioSeleccionado.classList.remove('error');
    }
    if (error == false) {
        imprimirCamposUsuario();
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo solicitar el servicio',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });
    }

};






const imprimirCamposUsuario = () => {
    let servicio = servicioSeleccionado.value;
    // let tamanno = tamanoSeleccionado.value;
    let fecha = new Date(fechaSeleccionada.value);
    // let provincia = provinciaSeleccionada.value;
    // let canton = cantonSeleccionada.value;
    // let distrito = distritoSeleccionado.value;
    let comentario = comentarioSeleccionado.value;


    // console.log("Solicitar servicio");
    // console.log("------------------");
    // console.log("Servicio:", servicio);
    // console.log("Tamaño:", tamanno);
    // console.log("Fecha:", fecha);
    // console.log("Provincia:", provincia);
    // console.log("Cantón:", canton);
    // console.log("Distrito:", distrito);
    // console.log("Comentario:", comentario);

    Swal.fire({
        'icon': 'success',
        'title': 'Se ha enviado con éxito la solicitud de servicio',
        'confirmButtonText': 'Excelente'
    }).then(() => {
        window.location.href = `compraServicio.html#${urlIDModificado}`;
    });


};


botonEnviar.addEventListener('click', validarCamposUsuario);













// form proveedor
const botonAgregarServicio = document.querySelector('#btn-agregarServicio');
//variables de contenedores y botones de mas y menos de sercivios
const btnMasNuevoServicio0 = document.querySelector('#btn-masAgregarServicio0');


//variables de inputs de servicios
const inputNombreServicio0 = document.querySelector('#agregarServicioNombreServicio0');
const textareaDescripcionServicio0 = document.querySelector('#agregarServicioDescripcionServicio0');
const selectDomicilioServicio0 = document.querySelector('#agregarServicioADomicilio0');
const selectMonedaServicio0 = document.querySelector('#agregarServicioTipoMoneda0');
const inputMontoServicio0 = document.querySelector('#agregarServicioMonto0');

//
const validarServicio0 = () => {
    let error = false;

    if (inputNombreServicio0.value == '') {
        error = true;
        inputNombreServicio0.classList.add('error');
    } else {
        inputNombreServicio0.classList.remove('error');
    }

    if (textareaDescripcionServicio0.value == '') {
        error = true;
        textareaDescripcionServicio0.classList.add('error');
    } else {
        textareaDescripcionServicio0.classList.remove('error');
    }

    if (selectDomicilioServicio0.value == '') {
        error = true;
        selectDomicilioServicio0.classList.add('error');
    } else {
        selectDomicilioServicio0.classList.remove('error');
    }

    if (selectMonedaServicio0.value == '') {
        error = true;
        selectMonedaServicio0.classList.add('error');
    } else {
        selectMonedaServicio0.classList.remove('error');
    }

    if (inputMontoServicio0.value == '') {
        error = true;
        inputMontoServicio0.classList.add('error');
    } else {
        inputMontoServicio0.classList.remove('error');
    }

    if (error == false) {
        cargarNuevoServicio1()
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se puede agregar un servicio nuevo',
            'text': 'Faltan campos por rellenar. Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });
    }
}



//Validación final e impresión de datos
const validarServicioAgregado0 = () => {
    let error = false;

    if (inputNombreServicio0.value == '') {
        error = true;
        inputNombreServicio0.classList.add('error');
    } else {
        inputNombreServicio0.classList.remove('error');
    }
    if (textareaDescripcionServicio0.value == '') {
        error = true;
        textareaDescripcionServicio0.classList.add('error');
    } else {
        textareaDescripcionServicio0.classList.remove('error');
    }
    if (selectDomicilioServicio0.value == '') {
        error = true;
        selectDomicilioServicio0.classList.add('error');
    } else {
        selectDomicilioServicio0.classList.remove('error');
    }
    if (selectMonedaServicio0.value == '') {
        error = true;
        selectMonedaServicio0.classList.add('error');
    } else {
        selectMonedaServicio0.classList.remove('error');
    }
    if (inputMontoServicio0.value == '') {
        error = true;
        inputMontoServicio0.classList.add('error');
    } else {
        inputMontoServicio0.classList.remove('error');
    }

    if (error == false) {
        imprimirServicioAgregado0();
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se puede agregar un servicio nuevo',
            'text': 'Faltan campos por rellenar. Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });
    }
};

// Listar servicios
let idServicioAgregadoProveedor = [];

const imprimirServicioAgregado0 = () => {
    let usuario = JSON.parse(sessionStorage.getItem('usuarioConectado'));
    let nombreServicioAgregado = inputNombreServicio0.value;
    let descripcionServicioAgregado = textareaDescripcionServicio0.value;
    let servicioDomicilioAgregado = selectDomicilioServicio0.value;
    let tipoMonedaServicioAgregado = selectMonedaServicio0.value;
    let montoServicioAgregado = inputMontoServicio0.value;
    let correoUsuarioConectado = usuario.correo;


    registrarServicioProveedor(correoUsuarioConectado, nombreServicioAgregado, descripcionServicioAgregado, servicioDomicilioAgregado, tipoMonedaServicioAgregado, montoServicioAgregado);



    let idServicioAgregado = idServicioAgregadoProveedor._id;
    console.log(idServicioAgregado);



    Swal.fire({
        'icon': 'success',
        'title': 'Se ha agregado con éxito el o los servicios',
        'confirmButtonText': 'Excelente'
    }).then(() => {
        window.location.href = 'perfilProveedor.html';
    });


};


const validarServiciosAgregados = () => {
    validarServicioAgregado0()
};

//validar todo el form de proveedor
botonAgregarServicio.addEventListener('click', validarServiciosAgregados);


// Listar servicios
let informacionProveedor = [];
let informacionServiciosProveedor = [];
let campoNombreProveedor = document.querySelector('#nombreProveedor');
let campoDescripcionProveedor = document.querySelector('#descripcionProveedor');
let campoNombreProveedorInformacion = document.querySelector('#nombreProveedorInformacion');
let campoProvinciaProveedorInformacion = document.querySelector('#provinciaProveedorInformacion');
let campoCantonPoveedorInformacion = document.querySelector('#cantonProveedorInformacion');
let campoDistritoPoveedorInformacion = document.querySelector('#distritoProveedorInformacion');
let campoSennasPoveedorInformacion = document.querySelector('#sennasProveedorInformacion');
let campoTelefonoPoveedorInformacion = document.querySelector('#telefonoProveedorInformacion');
let campoHrefCorreoPoveedorInformacion = document.querySelector('#hrefCorreoInformacionProveedor');
let campoCorreoPoveedorInformacion = document.querySelector('#CorreoInformacionProveedor');

const buscarProveedor = async() => {
    informacionProveedor = await obtenerInformacionProveedor(urlIDModificado);
    mostrarProveedor();
    informacionServiciosProveedor = await obtenerInformacionServiciosProveedor(urlIDModificado);
    mostrarServiciosProveedor();
};

// información del proveedor para el proveedor
const mostrarInformacionUsuarioConectado = () => {
    let usuario = JSON.parse(sessionStorage.getItem('usuarioConectado'));
    campoNombreProveedor.innerText = usuario.nombreNegocio;
    campoDescripcionProveedor.innerText = usuario.descNegocio;
    campoNombreProveedorInformacion.innerText = usuario.nombreNegocio;
    campoProvinciaProveedorInformacion.innerText = usuario.provincia;
    campoCantonPoveedorInformacion.innerText = usuario.canton;
    campoDistritoPoveedorInformacion.innerText = usuario.distrito;
    campoSennasPoveedorInformacion.innerText = usuario.sennas;
    campoTelefonoPoveedorInformacion.innerText = usuario.telefono;
    campoHrefCorreoPoveedorInformacion.setAttribute('href', `mailto:${usuario.correo}`);
    campoCorreoPoveedorInformacion.innerText = usuario.correo;
};

// información del proveedor para el cliente
const mostrarProveedor = async() => {
    informacionProveedor.forEach(datos => {
        campoNombreProveedor.innerText = datos.nombreNegocio;
        campoDescripcionProveedor.innerText = datos.descNegocio;
        campoNombreProveedorInformacion.innerText = datos.nombreNegocio;
        campoProvinciaProveedorInformacion.innerText = datos.provincia;
        campoCantonPoveedorInformacion.innerText = datos.canton;
        campoDistritoPoveedorInformacion.innerText = datos.distrito;
        campoSennasPoveedorInformacion.innerText = datos.sennas;
        campoTelefonoPoveedorInformacion.innerText = datos.telefono;
        campoHrefCorreoPoveedorInformacion.setAttribute('href', `mailto:${datos.correo}`);
        campoCorreoPoveedorInformacion.innerText = datos.correo;
    });
};

//Buscador de servicios
let buscadorServiciosFiltro = document.querySelector('#txt-buscadorServicios');
let buscadorServiciosUl = document.querySelector('#serviciosUl');

const buscarServicios = () => {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("txt-buscadorServicios");
    filter = input.value.toUpperCase();
    ul = document.getElementById("serviciosUl");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
};

buscadorServiciosFiltro.addEventListener('keyup', buscarServicios);

// creación de acordeones
let contendeorListaServiciosProveedor = document.querySelector('#contenedorListaServicios');
let listaContenedor = document.createElement('div');
let listaUlElemento = document.createElement('ul');
let listaItem;
let listaItemButton;
let listaItemButtonA;
let listaDivItem;
let listaContenedorEditarItem;
let listaFlotadorEditarItem;
let listaBtnEditarItem;
let listaPItem;
let listaDomicilioItem;
let listaCostoItem;
let listaModalContenedor;
let listaModalContent;
let listaModalHeader;
let listaModalCerrar;
let listaModalTitulo;
let listaModalBody;
let listaModalContenido;
let listaModalContenido1;
let listaModalContenidoColumnaNombre;
let listaModalContenidoColumnaNombreLabel;
let listaModalContenidoColumnaNombreInput;
let listaModalContenidoColumnaDescripcionLabel;
let listaModalContenidoColumnaDescripcionInput;
let listaModalContenidoColumnaDescripcion;
let listaModalContenido2;
let listaModalContenidoColumnaDomicilio;
let listaModalContenidoColumnaDomicilioLabel;
let listaModalContenidoColumnaDomicilioInput;
let listaModalContenidoColumnaDomicilioInputOptionSi;
let listaModalContenidoColumnaDomicilioInputOptionNo;
let listaModalContenidoColumnaMoneda;
let listaModalContenidoColumnaMonedaLabel;
let listaModalContenidoColumnaMonedaInput;
let listaModalContenidoColumnaMonedaInputOptionColones;
let listaModalContenidoColumnaMonedaInputOptionDolares;
let listaModalContenidoColumnaMonto;
let listaModalContenidoColumnaMontoLabel;
let listaModalContenidoColumnaMontoInput;
let listaModalFooter;
let listaModalFooterFlex;
let listaModalFooterModificarBtn;
let listaBtnModificarItem;
let listaModalFooterActivarBtn;
let listaBtnActivarItem;
let listaModalFooterDesactivarBtn;
let listaBtnDesactivarItem;
let listaModalFooterEliminarBtn;
let listaBtnEliminarItem;
let listarServiciosProveedor = [];

// servicios del proveedor para el proveedor
const mostrarServiciosUsuarioConectado = async() => {
    let informacionServiciosProveedor = JSON.parse(sessionStorage.getItem('usuarioConectado'));
    let correoProvedorConectado = informacionServiciosProveedor.correo;
    listarServiciosProveedor = await obtenerInformacionServiciosProveedorConectado(correoProvedorConectado);
    mostrarListaServiciosProveedor();
    completarSelectServicios();
};

// Listar servicios
let listaServiciosProveedor = [];

//populacion para que el cliente seleccione un servicio
const listarServiciosProveedorParaCliente = async() => {
    listarServiciosProveedor = await obtenerInformacionServiciosProveedor(urlIDModificado);
    completarSelectServicios();
};












const completarSelectServicios = async() => {
    listarServiciosProveedor.forEach(datos => {
        datos.servicios.forEach(servicio => {
            let opcion = document.createElement("option");
            console.log(`Prueba de option${servicio.nombre}`);
            opcion.text = servicio.nombre;
            opcion.setAttribute('value', `idServicio${servicio._id}`);
            servicioSeleccionado.appendChild(opcion);
        });
    });
};










//Populación de servicios para el proveedor
const llenarListaServiciosProveedor = async() => {
    let informacionServiciosProveedor = JSON.parse(sessionStorage.getItem('usuarioConectado'));
    let correoProvedorConectado = informacionServiciosProveedor.correo;
    mostrarListaServiciosProveedor();
};

// servicios del proveedor para el proveedor
const mostrarListaServiciosProveedor = async() => {
    contendeorListaServiciosProveedor.appendChild(listaContenedor);
    listaContenedor.appendChild(listaUlElemento);
    listaUlElemento.setAttribute('id', 'serviciosUl');
    listarServiciosProveedor.forEach(datos => {
        datos.servicios.forEach(servicio => {
            //button
            listaItem = document.createElement('li');
            listaItem.classList.add(`${servicio.estado}`)
            listaItem.setAttribute('id', `id${servicio._id}`)
            listaUlElemento.appendChild(listaItem);
            listaItemButton = document.createElement('button');
            listaItemButton.classList.add('accordion');
            listaItem.appendChild(listaItemButton);
            listaItemButtonA = document.createElement('a');
            //listaItemButtonA.setAttribute('href', '#');
            listaItemButtonA.innerHTML = servicio.nombre;
            listaItemButton.appendChild(listaItemButtonA);
            //panel
            listaDivItem = document.createElement('div');
            listaItem.appendChild(listaDivItem);
            listaDivItem.classList.add('panel');
            //botón para editar
            listaContenedorEditarItem = document.createElement('div');
            listaDivItem.appendChild(listaContenedorEditarItem);
            listaContenedorEditarItem.classList.add('contenedorClasesFlotantes');
            listaContenedorEditarItem.classList.add('abrirModalContenedor');
            listaFlotadorEditarItem = document.createElement('div');
            listaContenedorEditarItem.appendChild(listaFlotadorEditarItem);
            listaFlotadorEditarItem.classList.add('flotar-der');
            listaFlotadorEditarItem.classList.add('abrirModal');
            listaFlotadorEditarItem.classList.add('morada');
            listaFlotadorEditarItem.setAttribute('id', `abrirModal${servicio._id}`);
            listaBtnEditarItem = document.createElement('i');
            listaBtnEditarItem.classList.add('fa');
            listaBtnEditarItem.classList.add('fa-edit');
            listaFlotadorEditarItem.appendChild(listaBtnEditarItem);
            //p con la descripción
            listaPItem = document.createElement('p');
            listaPItem.innerHTML = servicio.descripcion;
            listaDivItem.appendChild(listaPItem);
            //p con servicio a domicilio
            listaDomicilioItem = document.createElement('p');
            listaDomicilioItem.innerHTML = `Este servicio ${servicio.servicioDomicilio} cuenta con servicio a domicilio.`;
            listaDivItem.appendChild(listaDomicilioItem);
            //p con servicio a tipo de moneda y monto
            listaCostoItem = document.createElement('p');
            listaCostoItem.innerHTML = `Este servicio tiene un valor de ${servicio.monto} ${servicio.tipoMoneda}.`;
            listaDivItem.appendChild(listaCostoItem);
            //modal
            listaModalContenedor = document.createElement('div');
            listaModalContenedor.setAttribute('id', `modal${servicio._id}`);
            listaModalContenedor.classList.add('modal');
            listaDivItem.appendChild(listaModalContenedor);
            listaModalContent = document.createElement('div');
            listaModalContent.classList.add('modal-content');
            listaModalContenedor.appendChild(listaModalContent);
            //modal header
            listaModalHeader = document.createElement('div');
            listaModalHeader.classList.add('modal-header');
            listaModalContent.appendChild(listaModalHeader);
            listaModalCerrar = document.createElement('span');
            listaModalCerrar.setAttribute('id', `cerrar${servicio._id}`);
            listaModalCerrar.classList.add('close');
            listaModalHeader.appendChild(listaModalCerrar);
            listaModalCerrar.innerText = 'x';
            listaModalTitulo = document.createElement('h3');
            listaModalTitulo.innerText = `${servicio.nombre} (${servicio.estado})`;
            listaModalHeader.appendChild(listaModalTitulo);
            //modal body
            listaModalBody = document.createElement('div');
            listaModalBody.classList.add('modal-body');
            listaModalContent.appendChild(listaModalBody);
            listaModalContenido = document.createElement('div');
            listaModalContenido.classList.add('centrarBloque');
            listaModalContenido.classList.add('w75');
            listaModalBody.appendChild(listaModalContenido);
            //modal 1 columna
            listaModalContenido1 = document.createElement('div');
            listaModalContenido1.classList.add('unicaColumna');
            listaModalContenido1.classList.add('contenedorColumna');
            listaModalContenido.appendChild(listaModalContenido1);
            //modal nombre del servicio
            listaModalContenidoColumnaNombre = document.createElement('div');
            listaModalContenidoColumnaNombre.classList.add('columna');
            listaModalContenido1.appendChild(listaModalContenidoColumnaNombre);
            listaModalContenidoColumnaNombreLabel = document.createElement('label');
            listaModalContenidoColumnaNombreLabel.setAttribute('for', `modificarServicioNombreServicio${servicio._id}`);
            listaModalContenidoColumnaNombreLabel.innerText = 'Nombre del servicio';
            listaModalContenidoColumnaNombre.appendChild(listaModalContenidoColumnaNombreLabel);
            listaModalContenidoColumnaNombreInput = document.createElement('input');
            listaModalContenidoColumnaNombreInput.setAttribute('id', `modificarServicioNombreServicio${servicio._id}`);
            listaModalContenidoColumnaNombre.appendChild(listaModalContenidoColumnaNombreInput);
            //modal descripción del servicio
            listaModalContenidoColumnaDescripcion = document.createElement('div');
            listaModalContenidoColumnaDescripcion.classList.add('columna');
            listaModalContenido1.appendChild(listaModalContenidoColumnaDescripcion);
            listaModalContenidoColumnaDescripcionLabel = document.createElement('label');
            listaModalContenidoColumnaDescripcionLabel.setAttribute('for', `modificarServicioDescripcionServicio${servicio._id}`);
            listaModalContenidoColumnaDescripcionLabel.innerText = 'Descripción del servicio';
            listaModalContenidoColumnaDescripcion.appendChild(listaModalContenidoColumnaDescripcionLabel);
            listaModalContenidoColumnaDescripcionInput = document.createElement('textarea');
            listaModalContenidoColumnaDescripcionInput.setAttribute('id', `modificarServicioDescripcionServicio${servicio._id}`);
            listaModalContenidoColumnaDescripcion.appendChild(listaModalContenidoColumnaDescripcionInput);
            //modal 3 columnas
            listaModalContenido2 = document.createElement('div');
            listaModalContenido2.classList.add('simpleColumna');
            listaModalContenido2.classList.add('contenedorColumna');
            listaModalContenido.appendChild(listaModalContenido2);
            //modal domicilio del servicio
            listaModalContenidoColumnaDomicilio = document.createElement('div');
            listaModalContenidoColumnaDomicilio.classList.add('columna');
            listaModalContenido2.appendChild(listaModalContenidoColumnaDomicilio);
            listaModalContenidoColumnaDomicilioLabel = document.createElement('label');
            listaModalContenidoColumnaDomicilioLabel.setAttribute('for', `modificarServicioDomicilioServicio${servicio._id}`);
            listaModalContenidoColumnaDomicilioLabel.innerText = '¿Cuenta con servicio a domicilio?';
            listaModalContenidoColumnaDomicilio.appendChild(listaModalContenidoColumnaDomicilioLabel);
            listaModalContenidoColumnaDomicilioInput = document.createElement('select');
            listaModalContenidoColumnaDomicilioInput.setAttribute('id', `modificarServicioDomicilioServicio${servicio._id}`);
            listaModalContenidoColumnaDomicilioInputOptionSi = document.createElement('option');
            listaModalContenidoColumnaDomicilioInputOptionSi.setAttribute('value', 'sí');
            listaModalContenidoColumnaDomicilioInputOptionSi.innerText = 'Sí';
            listaModalContenidoColumnaDomicilioInput.appendChild(listaModalContenidoColumnaDomicilioInputOptionSi);
            listaModalContenidoColumnaDomicilioInputOptionNo = document.createElement('option');
            listaModalContenidoColumnaDomicilioInputOptionNo.setAttribute('value', 'no');
            listaModalContenidoColumnaDomicilioInputOptionNo.innerText = 'No';
            listaModalContenidoColumnaDomicilioInput.appendChild(listaModalContenidoColumnaDomicilioInputOptionNo);
            listaModalContenidoColumnaDomicilio.appendChild(listaModalContenidoColumnaDomicilioInput);
            //modal moneda del servicio
            listaModalContenidoColumnaMoneda = document.createElement('div');
            listaModalContenidoColumnaMoneda.classList.add('columna');
            listaModalContenido2.appendChild(listaModalContenidoColumnaMoneda);
            listaModalContenidoColumnaMonedaLabel = document.createElement('label');
            listaModalContenidoColumnaMonedaLabel.setAttribute('for', `modificarServicioMonedaServicio${servicio._id}`);
            listaModalContenidoColumnaMonedaLabel.innerText = 'Tipo de moneda';
            listaModalContenidoColumnaMoneda.appendChild(listaModalContenidoColumnaMonedaLabel);
            listaModalContenidoColumnaMonedaInput = document.createElement('select');
            listaModalContenidoColumnaMonedaInput.setAttribute('id', `modificarServicioMonedaServicio${servicio._id}`);
            listaModalContenidoColumnaMonedaInputOptionColones = document.createElement('option');
            listaModalContenidoColumnaMonedaInputOptionColones.setAttribute('value', 'colones');
            listaModalContenidoColumnaMonedaInputOptionColones.innerText = 'Colones';
            listaModalContenidoColumnaMonedaInput.appendChild(listaModalContenidoColumnaMonedaInputOptionColones);
            listaModalContenidoColumnaMonedaInputOptionDolares = document.createElement('option');
            listaModalContenidoColumnaMonedaInputOptionDolares.setAttribute('value', 'dólares');
            listaModalContenidoColumnaMonedaInputOptionDolares.innerText = 'Dólares';
            listaModalContenidoColumnaMonedaInput.appendChild(listaModalContenidoColumnaMonedaInputOptionDolares);
            listaModalContenidoColumnaMoneda.appendChild(listaModalContenidoColumnaMonedaInput);
            //modal monto del servicio
            listaModalContenidoColumnaMonto = document.createElement('div');
            listaModalContenidoColumnaMonto.classList.add('columna');
            listaModalContenido2.appendChild(listaModalContenidoColumnaMonto);
            listaModalContenidoColumnaMontoLabel = document.createElement('label');
            listaModalContenidoColumnaMontoLabel.setAttribute('for', `modificarServicioMontoServicio${servicio._id}`);
            listaModalContenidoColumnaMontoLabel.innerText = 'Monto por servicio';
            listaModalContenidoColumnaMonto.appendChild(listaModalContenidoColumnaMontoLabel);
            listaModalContenidoColumnaMontoInput = document.createElement('input');
            listaModalContenidoColumnaMontoInput.setAttribute('id', `modificarServicioMontoServicio${servicio._id}`);
            listaModalContenidoColumnaMontoInput.setAttribute('type', 'number');
            listaModalContenidoColumnaMonto.appendChild(listaModalContenidoColumnaMontoInput);
            //modal footer
            listaModalFooter = document.createElement('div');
            listaModalFooter.classList.add('modal-footer');
            listaModalContent.appendChild(listaModalFooter);
            listaModalFooterFlex = document.createElement('div');
            listaModalFooterFlex.classList.add('flexContenedor');
            listaModalFooterFlex.classList.add('centrarFlex');
            listaModalFooter.appendChild(listaModalFooterFlex);
            //modal footer btn modificar
            listaModalFooterModificarBtn = document.createElement('a');
            listaModalFooterModificarBtn.classList.add('margen-right');
            listaModalFooterModificarBtn.setAttribute('id', `modificarServicio${servicio._id}`);
            listaModalFooterFlex.appendChild(listaModalFooterModificarBtn);
            listaBtnModificarItem = document.createElement('i');
            listaBtnModificarItem.classList.add('fa');
            listaBtnModificarItem.classList.add('fa-edit');
            listaModalFooterModificarBtn.appendChild(listaBtnModificarItem);
            //modal footer btn activar
            listaModalFooterActivarBtn = document.createElement('a');
            listaModalFooterActivarBtn.classList.add('margen-right');
            listaModalFooterActivarBtn.setAttribute('id', `activarServicio${servicio._id}`);
            listaModalFooterFlex.appendChild(listaModalFooterActivarBtn);
            listaBtnActivarItem = document.createElement('i');
            listaBtnActivarItem.classList.add('fa');
            listaBtnActivarItem.classList.add('fa-toggle-on');
            listaModalFooterActivarBtn.appendChild(listaBtnActivarItem);
            //modal footer btn desactivar
            listaModalFooterDesactivarBtn = document.createElement('a');
            listaModalFooterDesactivarBtn.classList.add('margen-right');
            listaModalFooterDesactivarBtn.setAttribute('id', `desactivarServicio${servicio._id}`);
            listaModalFooterFlex.appendChild(listaModalFooterDesactivarBtn);
            listaBtnDesactivarItem = document.createElement('i');
            listaBtnDesactivarItem.classList.add('fa');
            listaBtnDesactivarItem.classList.add('fa-toggle-off');
            listaModalFooterDesactivarBtn.appendChild(listaBtnDesactivarItem);
            //modal footer btn eliminar
            listaModalFooterEliminarBtn = document.createElement('a');
            listaModalFooterEliminarBtn.setAttribute('id', `eliminarServicio${servicio._id}`);
            listaModalFooterFlex.appendChild(listaModalFooterEliminarBtn);
            listaBtnEliminarItem = document.createElement('i');
            listaBtnEliminarItem.classList.add('fa');
            listaBtnEliminarItem.classList.add('fa-trash');
            listaModalFooterEliminarBtn.appendChild(listaBtnEliminarItem);
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
            //Modificar servicio
            const datosModificacionServicio = () => {
                let NombreModificado = document.querySelector(`#modificarServicioNombreServicio${servicio._id}`).value;
                let DescripcionModificada = document.querySelector(`#modificarServicioDescripcionServicio${servicio._id}`).value;
                let ServicioDomiciolioModificado = document.querySelector(`#modificarServicioDomicilioServicio${servicio._id}`).value;
                let ServicioMonedaModificado = document.querySelector(`#modificarServicioMonedaServicio${servicio._id}`).value;
                let ServicioMontoModificado = document.querySelector(`#modificarServicioMontoServicio${servicio._id}`).value;
                let _id = servicio._id;
                modificarServicioProveedor(NombreModificado, DescripcionModificada, ServicioDomiciolioModificado, ServicioMonedaModificado, ServicioMontoModificado, _id);
                Swal.fire({
                    'icon': 'success',
                    'title': 'El servicio se ha modificado con éxito',
                    'confirmButtonText': 'Excelente'
                }).then(() => {
                    window.location.href = '/serviciosProveedorYCliente.html';
                });
            }
            let btnModificarServicio = document.querySelector(`#modificarServicio${servicio._id}`);
            //Activar servicio
            const activarServicio = () => {
                let _id = servicio._id;
                activarServicioProveedor(_id);
                Swal.fire({
                    'icon': 'success',
                    'title': 'El servicio se ha activado con éxito',
                    'confirmButtonText': 'Excelente'
                }).then(() => {
                    window.location.href = '/serviciosProveedorYCliente.html';
                });
            }
            let btnActivarServicio = document.querySelector(`#activarServicio${servicio._id}`);
            //Desactivar servicio
            const desactivarServicio = () => {
                let _id = servicio._id;
                desactivarServicioProveedor(_id);
                Swal.fire({
                    'icon': 'success',
                    'title': 'El servicio se ha desactivado con éxito',
                    'confirmButtonText': 'Excelente'
                }).then(() => {
                    window.location.href = '/serviciosProveedorYCliente.html';
                });
            }
            let btnDesactivarServicio = document.querySelector(`#desactivarServicio${servicio._id}`);
            //Eliminar servicio
            const eliminarServicio = () => {
                let _id = servicio._id;
                eliminarServicioProveedor(_id);
                Swal.fire({
                    'icon': 'success',
                    'title': 'El servicio se ha eliminado con éxito',
                    'confirmButtonText': 'Excelente'
                }).then(() => {
                    window.location.href = '/serviciosProveedorYCliente.html';
                });
            }
            let btnEliminarServicio = document.querySelector(`#eliminarServicio${servicio._id}`);
            btnModificarServicio.addEventListener('click', datosModificacionServicio);
            btnActivarServicio.addEventListener('click', activarServicio);
            btnDesactivarServicio.addEventListener('click', desactivarServicio);
            btnEliminarServicio.addEventListener('click', eliminarServicio);
        });
    });
    //Acordeon
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
};

// servicios del proveedor para el cliente
const mostrarServiciosProveedor = async() => {
    contendeorListaServiciosProveedor.appendChild(listaContenedor);
    listaContenedor.appendChild(listaUlElemento);
    listaUlElemento.setAttribute('id', 'serviciosUl');

    informacionServiciosProveedor.forEach(datos => {
        datos.servicios.forEach(servicio => {
            //button
            listaItem = document.createElement('li');
            listaItem.classList.add(`${servicio.estado}`)
            listaItem.setAttribute('id', `id${servicio._id}`)
            listaUlElemento.appendChild(listaItem);
            listaItemButton = document.createElement('button');
            listaItemButton.classList.add('accordion');
            listaItem.appendChild(listaItemButton);
            listaItemButtonA = document.createElement('a');
            //listaItemButtonA.setAttribute('href', '#');
            listaItemButtonA.innerHTML = servicio.nombre;
            listaItemButton.appendChild(listaItemButtonA);
            //panel
            listaDivItem = document.createElement('div');
            listaItem.appendChild(listaDivItem);
            listaDivItem.classList.add('panel');

            //p con la descripción
            listaPItem = document.createElement('p');
            listaPItem.innerHTML = servicio.descripcion;
            listaDivItem.appendChild(listaPItem);
            //p con servicio a domicilio
            listaDomicilioItem = document.createElement('p');
            listaDomicilioItem.innerHTML = `Este servicio ${servicio.servicioDomicilio} cuenta con servicio a domicilio.`;
            listaDivItem.appendChild(listaDomicilioItem);
            //p con servicio a tipo de moneda y monto
            listaCostoItem = document.createElement('p');
            listaCostoItem.innerHTML = `Este servicio tiene un valor de ${servicio.monto} ${servicio.tipoMoneda}.`;
            listaDivItem.appendChild(listaCostoItem);
        });
    });
    //Acordeon
    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
};



// UsuarioProveedor
const corroborarTipoUsuario = () => {
    let usuario = JSON.parse(sessionStorage.getItem('usuarioConectado'));
    switch (usuario.tipoUsuario) {
        case 'proveedor':
            if (document.querySelector('body').classList.contains('duennoBody')) {
                document.querySelector('body').classList.remove('duennoBody');
                document.querySelector('body').classList.add('proveedorBody');
            }
            if (document.querySelector('#logoProveedor').classList.contains('ocultar')) {
                document.querySelector('#logoProveedor').classList.remove('ocultar');
                document.querySelector('#logoProveedor').classList.add('activo');
            }
            if (document.querySelector('#logoCliente').classList.contains('activo')) {
                document.querySelector('#logoCliente').classList.remove('activo');
                document.querySelector('#logoCliente').classList.add('ocultar');
            }
            mostrarInformacionUsuarioConectado();
            mostrarServiciosUsuarioConectado();
            llenarListaServiciosProveedor();
            break;
        case 'cliente':

            if (document.querySelector('body').classList.contains('proveedorBody')) {
                document.querySelector('body').classList.remove('proveedorBody');
                document.querySelector('body').classList.add('duennoBody');
            }
            if (document.querySelector('#logoCliente').classList.contains('ocultar')) {
                document.querySelector('#logoCliente').classList.remove('ocultar');
                document.querySelector('#logoCliente').classList.add('activo');
            }
            if (document.querySelector('#logoProveedor').classList.contains('activo')) {
                document.querySelector('#logoProveedor').classList.remove('activo');
                document.querySelector('#logoProveedor').classList.add('ocultar');
            }
            buscarProveedor();
            listarServiciosProveedorParaCliente();
            break;
    }
};


corroborarTipoUsuario();
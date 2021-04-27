'use strict';

let Estados = ["Activo", "Suspendido", "Pendiente", "Rechazado", "Denunciado"];

const tablaSolicitudesPendientes = document.querySelector('#tbl-solicitudespendientes tbody');
const tablaRepresentanteLegal = document.querySelector('#tbl-solicitudespendientes');
const inputfiltrarSolicitudes = document.querySelector('#txt-filtrarSolicitudes');
const btnEditar = document.querySelector('#btn-editarSolic');
const btnActializar = document.querySelector('#btn-actualizarSolic');


const validar = () => {

}


const editarEstadosON = () => {
    const estadostabla = document.querySelectorAll('.slt-estado');
    estadostabla.forEach(estado => {
        if (estado.disabled = true) {
            estado.disabled = false;
        }
    })
}



const editarEstadosOFF = () => {
    const estadostabla = document.querySelectorAll('.slt-estado');
    estadostabla.forEach(estado => {
        estado.disabled = true;
    })
}




const crearSelect = () => {
    const selectList = document.createElement("select");
    selectList.classList.add('slt-estado');
    selectList.disabled = true;


    //Create and append the options
    for (let i = 0; i < Estados.length; i++) {
        let option = document.createElement("option");
        option.value = Estados[i];
        option.text = Estados[i];
        selectList.appendChild(option);
    }
    return selectList
}

const obtenerDireccionCompleta = () => {
    let provinciaCliente = usuario.provincia;
    let cantonCliente = usuario.canton;
    let distritoCliente = usuario.distrito;
    let direccionCompleta = `${provinciaCliente}, ${cantonCliente}, ${distritoCliente}`;

    return direccionCompleta;
};

const generarTablaRepLegal = () => {
    let fila = tablaRepresentanteLegal.insertRow();
    fila.className = 'autogen titulo ocultar';
    fila.insertCell().innerHTML = 'Nombre';
    fila.insertCell().innerHTML = 'Primer Apellido';
    fila.insertCell().innerHTML = 'Segundo Apellido';
    fila.insertCell().innerHTML = 'Tipo Id';
    fila.insertCell().innerHTML = 'Id';
    fila.insertCell().innerHTML = 'Fecha';
    fila.insertCell().innerHTML = 'Teléfono';
    fila.insertCell().innerHTML = 'Correo';
}

const mostrarTablaUsuariosReportados = () => {
    let filtro = inputfiltrarSolicitudes.value.toLowerCase();
    tablaSolicitudesPendientes.innerHTML = '';
    usuariosDenunciados.forEach(usuario => {

        if (usuario.Estado.toLowerCase().includes(filtro) || usuario.Correo.toLowerCase().includes(filtro) || usuario.Tipo.toLowerCase().includes(filtro)) {

            let fila = tablaSolicitudesPendientes.insertRow();

            fila.insertCell().appendChild(crearSelect()).value = usuario.Estado;

            fila.insertCell().innerHTML = usuario.Tipo;
            fila.insertCell().innerHTML = usuario.Denuncias;
            fila.insertCell().innerHTML = usuario.Correo;
            fila.insertCell().innerHTML = usuario.Nombre;
            fila.insertCell().innerHTML = usuario.Primer_apellido;
            fila.insertCell().innerHTML = usuario.Idenficacion;
            fila.insertCell().innerHTML = usuario.Teléfono;
        }


    })


}

mostrarTablaUsuariosReportados();

inputfiltrarSolicitudes.addEventListener('keyup', mostrarTablaUsuariosReportados);

btnEditar.addEventListener('click', editarEstadosON);
btnActializar.addEventListener('click', editarEstadosOFF);
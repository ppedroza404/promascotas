'use strict';
const tablaSolicitudesPendientes = document.querySelector('#tbl-solicitudespendientes tbody');
const tablaRepresentanteLegal = document.querySelector('#tbl-solicitudespendientes');

const limpiarTabla = () => {
    for (var i = tablaSolicitudesPendientes.rows.length - 1; i > 0; i--) {
        tablaTipoUsuario.deleteRow(i);
    }
}

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

const mostrarTablaSolicitudesPendientes = () => {
    limpiarTabla();
    listaUsuarios.forEach(usuario => {
        if (usuario.tipo == 'Proveedor') {
            let fila = tablaSolicitudesPendientes.insertRow();
            fila.insertCell().innerHTML = usuario.Estado;
            fila.insertCell().innerHTML = usuario.n_negocio;
            fila.insertCell().innerHTML = usuario.negocio_tipo;
            fila.insertCell().innerHTML = usuario.id_negocio;
            fila.insertCell().innerHTML = usuario.nombre;
            fila.insertCell().innerHTML = usuario.primerApellido;
            fila.insertCell().innerHTML = usuario.tipoID;
            fila.insertCell().innerHTML = usuario.id;
            fila.insertCell().innerHTML = usuario.telefono;
            fila.insertCell().innerHTML = `${usuario.provincia}, ${usuario.canton},${usuario.distrito}`;
            if (usuario.n_negocio = 'Juridica') {
                generarTablaRepLegal();
                let fila = tablaRepresentanteLegal.insertRow();
                fila.className = 'autogen contenido ocultar';
                fila.insertCell().innerHTML = usuario.r_legal_Nombre;
                fila.insertCell().innerHTML = usuario.r_legalaPapellido;
                fila.insertCell().innerHTML = usuario.r_legalaSapellido;
                fila.insertCell().innerHTML = usuario.r_legalatipoid;
                fila.insertCell().innerHTML = usuario.r_legalanid;
                fila.insertCell().innerHTML = usuario.r_legalanacimiento;
                fila.insertCell().innerHTML = usuario.telefono;
                fila.insertCell().innerHTML = usuario.r_legacorreo_email;
            }
        }

    })


}

mostrarTablaSolicitudesPendientes();


const obtenerDireccionCompleta = () => {
    let provinciaCliente = usuario.provincia;
    let cantonCliente = usuario.canton;
    let distritoCliente = usuario.distrito;
    let direccionCompleta = `${provinciaCliente}, ${cantonCliente}, ${distritoCliente}`;

    return direccionCompleta;
};
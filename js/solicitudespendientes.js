'use strict';
const tablaSolicitudesPendientes = document.querySelector('#tbl-solicitudespendientes tbody');
const tablaRepresentanteLegal = document.querySelector('#tbl-solicitudespendientes');

const limpiarTabla = () => {
    for (var i = tablaSolicitudesPendientes.rows.length - 1; i > 0; i--) {
        tablaTipoUsuario.deleteRow(i);
    }
}
const mostrarTablaRepresentanteLegal = () => {
    let fila = tablaRepresentanteLegal.insertRow();
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
'use strict';
let estados = ["activo", "suspendido", "pendiente", "rechazado", "denunciado"];

const tabla = document.querySelector('#tbl-solicitudespendientes tbody');
const inputFiltro = document.querySelector('#txt-filtro');
let lista_usuarios_cliente = [];
let id_select;


const crearSelect = () => {
    const selectList = document.createElement("select");
    selectList.classList.add('slt-estado');
    selectList.setAttribute('id', `slt-${id_select}`);
    selectList.disabled = true;

    //Create and append the options
    for (let i = 0; i < estados.length; i++) {
        let option = document.createElement("option");
        option.value = estados[i];
        option.text = estados[i];
        selectList.appendChild(option);
    }
    return selectList
}

const mostrarTabla = async() => {
    let filtro = inputFiltro.value.toLowerCase();


    lista_usuarios_cliente = await listar_usuarios_proveedor();
    tabla.innerHTML = '';
    lista_usuarios_cliente.forEach(cliente => {

        if (cliente.estado.toLowerCase().includes('denunciado')) {
            if (cliente.estado.toLowerCase().includes(filtro) || cliente.provincia.toLowerCase().includes(filtro) || cliente.canton.toLowerCase().includes(filtro) || cliente.distrito.toLowerCase().includes(filtro)) {
                let fila = tabla.insertRow();
                id_select = cliente._id;

                fila.insertCell().innerHTML = cliente.nombre + " " + cliente.primerApellido;
                fila.insertCell().innerHTML = cliente.tipoUsuario;
                fila.insertCell().innerHTML = cliente.correo;
                fila.insertCell().innerHTML = cliente.provincia;
                fila.insertCell().innerHTML = cliente.canton;
                fila.insertCell().innerHTML = cliente.distrito;
                let celda = fila.insertCell();
                let select = crearSelect();
                celda.appendChild(select).value = cliente.estado;

                let testselect = document.querySelector(`#slt-${id_select}`);

                const editarEstadosOnOff = () => {
                    if (testselect.disabled == true) {
                        testselect.disabled = false;
                    } else {
                        testselect.disabled = true;
                    }
                }

                celda.addEventListener('dblclick', editarEstadosOnOff);

            }
        }
    });
};


mostrarTabla();
inputFiltro.addEventListener('keyup', mostrarTabla);
'use strict';
let estados = ["activo", "suspendido", "pendiente", "rechazado", "denunciado"];

const tabla = document.querySelector('#tbl-solicitudespendientes tbody');
const inputFiltro = document.querySelector('#txt-filtro');
let lista_usuarios_cliente = [];
let id_select;


const crearSelect = () => {
    const selectList = document.createElement("select");
    selectList.classList.add('slt-estado');
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
                console.log(id_select);
                fila.insertCell().innerHTML = cliente.nombre + " " + cliente.primerApellido;
                fila.insertCell().innerHTML = cliente.tipoUsuario;
                fila.insertCell().innerHTML = cliente.correo;
                fila.insertCell().innerHTML = cliente.provincia;
                fila.insertCell().innerHTML = cliente.canton;
                fila.insertCell().innerHTML = cliente.distrito;
                let celda = fila.insertCell();
                let select = crearSelect();
                select.setAttribute('id', `${id_select}`);
                celda.appendChild(select).value = cliente.estado;


                const editarEstadosOnOff = () => {
                    if (select.disabled == true) {
                        select.disabled = false;
                    } else {
                        select.disabled = true;
                    }
                }

                const modificarUsuarioEstadoConst = () => {
                    modificarUsuarioEstado(select.id, select.options[select.selectedIndex].text);
                }

                celda.addEventListener('dblclick', editarEstadosOnOff);
                select.addEventListener('change', modificarUsuarioEstadoConst);



            }
        }
    });
};


const modificarUsuarioEstado = async(p_id, pestado) => {
    console.log(p_id, pestado)
    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/modificar-estadoUsuario',
            responseType: 'json',
            data: {
                _id: p_id,
                estado: pestado,
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'Usuario modificado',
                'text': 'La información del estado fue actualizada correctamente',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'listarUsuariosDenunciados.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo actualizar el estado',
                'text': `Ocurrió el siguiente error {error}`,
                'icon': 'error'
            })
        });
};



mostrarTabla();
inputFiltro.addEventListener('keyup', mostrarTabla);
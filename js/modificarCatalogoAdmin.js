'use strict';
const tablaCompleta = document.querySelector('table');
const tablaCatalogo = document.querySelector('#tbl-catalogos tbody');
const selectCatalogo = document.querySelector('#slt-catalogo');
let tipodeservicios;

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
        fila.insertCell().innerHTML = servicio.nombre;
        let celdaAcciones1 = fila.insertCell();


        let botonActivar = document.createElement('i');
        botonActivar.classList.add('fa');
        botonActivar.classList.add('fa-toggle-on');
        botonActivar.addEventListener('click', () => {
            console.log('activado')
        });


        celdaAcciones1.appendChild(botonActivar);

        let celdaAcciones2 = fila.insertCell();

        let botonDesactivar = document.createElement('button');
        botonDesactivar.classList.add('btn');
        botonDesactivar.innerText = 'Desactivar';
        botonDesactivar.addEventListener('click', () => {
            console.log('desactivado')
        });

        celdaAcciones2.appendChild(botonDesactivar);

        let celdaAcciones3 = fila.insertCell();

        let botonModificar = document.createElement('button');
        botonModificar.classList.add('btn');
        botonModificar.innerText = 'Modificar';
        botonModificar.addEventListener('click', () => {
            console.log('modificado')
        });

        celdaAcciones3.appendChild(botonModificar);

        let celdaAcciones4 = fila.insertCell();

        let botonEliminar = document.createElement('button');
        botonEliminar.classList.add('btn');
        botonEliminar.innerText = 'Eliminar';
        botonEliminar.addEventListener('click', () => {
            console.log('eliminado')
        });

        celdaAcciones4.appendChild(botonEliminar);
    })
}



const mostrarTablapadecimientos = () => {

    limpiarTabla();

    padecimientosAdmin.forEach(item => {
        let fila = tablaCatalogo.insertRow();
        fila.insertCell().innerHTML = item.padecimientos;
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
        fila.insertCell().innerHTML = item.razas;

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

const mostrarTablaTiposMascota = () => {

    limpiarTabla();

    tiposMascotaAdmin.forEach(item => {
        let fila = tablaCatalogo.insertRow();
        fila.insertCell().innerHTML = item.tiposMascota;
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
        fila.insertCell().innerHTML = item.vacunas;
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
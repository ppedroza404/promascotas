'use strict';
const btnRegistrarCliente = document.querySelector('#btn-registrarCliente');
const txtNombreProveedor = document.querySelector('#txt-nombreProveedor');
const txtNombreServicio = document.querySelector('#txt-nombreServicio');
const txtDescripcionServicio = document.querySelector('#txt-descripcionServicio');
const txtMetodoPago = document.querySelector('#txt-metodoPago');
const txtPagoTotal = document.querySelector('#txt-pagoTotal');

let validar = () => {
    let inputs_requeridos = document.querySelectorAll('#frm-contacto [required]');
    let error = false;

    for (let i = 0; i < inputs_requeridos.length; i++) {
        if (inputs_requeridos[i].value == '') {
            inputs_requeridos[i].classList.add('error');
            error = true;
        } else {
            inputs_requeridos[i].classList.remove('error');
        }
    }

    return error;

};
let limpiar = () => {
    txtNombreProveedor.value = "";
    txtNombreServicio.value = "";
    txtDescripcionServicio.value = "";
    txtMetodoPago.value = "";
    txtPagoTotal.value = "";
};

let obtener_datos = () => {
    let error = validar();

    if (error) {
        Swal.fire({
            'title': 'Sus datos no se pudieron enviar',
            'text': 'Por favor revise los campos resaltados',
            'icon': 'warning'
        });
    } else {
        console.log('Información del servicio registrado');
        console.log('=====================================================');
        console.log('Nombre del proveedor: ' + txtNombreProveedor.value);
        console.log('Nombre del servicio: ' + txtNombreServicio.value);
        console.log('Descripción: ' + txtDescripcionServicio.value);
        console.log('Método de pago utilizado: ' + txtMetodoPago.value);
        console.log('Costo total del servicio: ' + txtPagoTotal.value);

        Swal.fire({
            'title': 'Proceso realizado con éxito',
            'text': 'Sus datos se enviaron adecuadamente',
            'icon': 'success'
        }).then(() => {
            limpiar();
        });
    }
};

btnRegistrarCliente.addEventListener('click', obtener_datos);
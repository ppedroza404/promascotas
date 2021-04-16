'use strict';

const registrarServicioProveedor = async(pnombre, pdescripcion, pservicioDomicilio, ptipoMoneda, pmonto) => {

    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/registrar-servicio',
            responseType: 'json',
            data: {
                nombreServicioAgregado: pnombre,
                descripcionServicioAgregado: pdescripcion,
                servicioDomicilioAgregado: pservicioDomicilio,
                tipoMonedaServicioAgregado: ptipoMoneda,
                montoServicioAgregado: pmonto,

            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'Su servicio se registró con éxito',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'serviciosProveedorYCliente.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo registrar el servicio',
                'text': 'Ocurrió el siguiente error {error}',
                'icon': 'error'
            })
        });
};

const obtenerServiciosProveedor = async() => {
    let listaServiciosProveedor;

    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar-serviciosProveedor',
            responseType: 'json'
        })
        .then((response) => {
            listaServiciosProveedor = response.data.serviciosProveedor;
        })
        .catch((error) => {
            console.log(error)
        });

    return listaServiciosProveedor;
};
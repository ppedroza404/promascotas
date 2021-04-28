'use strict';

const obtenerInformacionProveedor = async(urlIDModificado) => {
    try {
        const response = await axios({
            method: 'get',
            url: `http://localhost:3000/api/mostrar-informacionProveedor/${urlIDModificado}`,
            responseType: 'json'
        })
        return response.data.usuario;
    } catch (error) {
        console.log(error);
    }
};




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

const modificarServicioProveedor = async(pNombreModificado, pDescripcionModificada, pServicioDomiciolioModificado, pServicioMonedaModificado, pServicioMontoModificado, p_id) => {

    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/modificar-servicioProveedor',
            responseType: 'json',
            data: {
                _id: p_id,
                nombre: pNombreModificado,
                descripcion: pDescripcionModificada,
                servicioDomicilio: pServicioDomiciolioModificado,
                tipoMoneda: pServicioMonedaModificado,
                monto: pServicioMontoModificado,

            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'Su servicio se modificó con éxito',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'serviciosProveedorYCliente.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo modificar el servicio',
                'text': 'Ocurrió el siguiente error {error}',
                'icon': 'error'
            })
        });
};

const activarServicioProveedor = async(p_id) => {

    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/activar-servicioProveedor',
            responseType: 'json',
            data: {
                _id: p_id,
                estado: 'Activo'
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'Su servicio se activó con éxito',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'serviciosProveedorYCliente.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo activar el servicio',
                'text': 'Ocurrió el siguiente error {error}',
                'icon': 'error'
            })
        });
};

const desactivarServicioProveedor = async(p_id) => {

    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/desactivar-servicioProveedor',
            responseType: 'json',
            data: {
                _id: p_id,
                estado: 'Inactivo'
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'Su servicio se desactivó con éxito',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'serviciosProveedorYCliente.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo desactivar el servicio',
                'text': 'Ocurrió el siguiente error {error}',
                'icon': 'error'
            })
        });
};

const eliminarServicioProveedor = async(p_id) => {

    await axios({
            method: 'delete',
            url: 'http://localhost:3000/api/eliminar-serviciosProveedor',
            responseType: 'json',
            data: {
                _id: p_id
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'Su servicio se eliminó con éxito',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'serviciosProveedorYCliente.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo eliminar el servicio',
                'text': 'Ocurrió el siguiente error {error}',
                'icon': 'error'
            })
        });
};
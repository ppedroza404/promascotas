'use strict';

const desactivarProveedor = async(p_id) => {
    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/desactivar-proveedor',
            responseType: 'json',
            data: {
                _id: p_id,
                estado: 'Inactivo'
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'El proveedor se desactivó con éxito',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'solicitudesPendientesAprobar.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo desactivar el proveedor',
                'text': 'Ocurrió el siguiente error {error}',
                'icon': 'error'
            })
        });
}

const activarProveedor = async(p_id) => {
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/activar-proveedor',
            responseType: 'json',
            data: {
                _id: p_id,
                estado: 'Activo'
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'El usuario se activó con éxito',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'solicitudesPendientesAprobar.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo activar el usuario',
                'text': 'Ocurrió el siguiente error {error}',
                'icon': 'error'
            })
        });
}
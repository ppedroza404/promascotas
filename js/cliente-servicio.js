'use strict';

const modificarContrasenna = async(pcorreo, pclaveNueva) => {

    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/modificar-cliente',
            responseType: 'json',
            data: {
                correo: pcorreo,
                contrasenna: pclaveNueva
            }

        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'Contraseña actualizada',
                'text': 'Muchas gracias',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'perfilCliente.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo modificar la contraseña',
                'text': `Ocurrió el siguiente error {error}`,
                'icon': 'error'
            })
        });

};
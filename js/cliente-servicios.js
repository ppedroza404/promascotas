'use strict';

const modificarCliente = async(pnombrerepresentante, pprimerapellido, psegundoapellido, pcorreo, pnumeroid, pprovincia, pcanton, pdistrito, psennas, ) => {

    await axios({
            method: 'put',
            url: 'http://localhost:3000/api//modificar-usuarios',
            responseType: 'json',
            data: {

                nombre: pnombrerepresentante,
                primerApellido: pprimerapellido,
                segundoApellido: psegundoapellido,
                correo: pcorreo,
                numeroId: pnumeroid,
                provincia: pprovincia,
                canton: pcanton,
                distrito: pdistrito,
                sennas: psennas,
            }

        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'Cliente actualizado con éxito',
                'text': 'Muchas gracias',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'perfilCliente.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo modificar el Cliente',
                'text': `Ocurrió el siguiente error {error}`,
                'icon': 'error'
            })
        });
};
'use strict';

const registrarCliente = async(pcorreo, pnombre, pprimerApellido, psegundoApellido, pgenero, ptipoId, pnumeroId, pnacimiento, pcantidadMascotas, pcontrasenna, pprovincia, pcanton, pdistrito, psennas, pestado) => {

    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/registrar-cliente',
            responseType: 'json',
            data: {
                sCorreo: pcorreo,
                sNombre: pnombre,
                sPrimApellido: pprimerApellido,
                sSegApellido: psegundoApellido,
                sGenero: pgenero,
                sTipoId: ptipoId,
                sNumId: pnumeroId,
                sFechaNac: pnacimiento,
                sCantMasc: pcantidadMascotas,
                sContrasenna: pcontrasenna,
                sProvincia: pprovincia,
                sCanton: pcanton,
                sDistrito: pdistrito,
                sOtrasSennias: psennas,
                sEstado: pestado,
            }
        })
        .then((response) => {
            Swal.fire({
                    'icon': 'success',
                    'title': 'Su cuenta se registro con éxito',
                    'text': 'Por favor revise su correo electrónico',
                    'confirmButtonText': 'Entendido'
                })
                // .then(() => {
                //     window.location.href = 'inicio-sesion.html';
                // });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo registrar el usuario',
                'text': `Ocurrió el siguiente error {error}`,
                'icon': 'error'
            })
        });
};
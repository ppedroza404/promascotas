'use strict';

const registrar_cliente = async(pcorreo, pnombre, pprimerApellido, psegundoApellido, pgenero, ptipoId, pnumeroId, pnacimiento, pcantidadMascotas, pcontrasenna, pprovincia, pcanton, pdistrito, psennas) => {
    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrar-usuario',
        responseType: 'json',
        data: {
            correo: pcorreo, //unique
            nombre: pnombre,
            primerApellido: pprimerApellido,
            segundoApellido: psegundoApellido,
            genero: pgenero,
            tipoId: ptipoId,
            numeroId: pnumeroId,
            nacimiento: pnacimiento, //formato fecha de postman YYYY-MM-DD
            cantidadMascotas: pcantidadMascotas,
            contrasenna: pcontrasenna,
            provincia: pprovincia,
            canton: pcanton,
            distrito: pdistrito,
            sennas: psennas,
            tipoUsuario: 'cliente'
        }
    }).then((response) => {
        Swal.fire({
            'title': 'Se ha registrado exitosamente como cliente',
            'icon': 'success',
            'text': response.msj
        }).then(() => {
            window.location.href = 'index.html';
        });
    }).catch((response) => {
        Swal.fire({
            'title': response.msj,
            'icon': 'error',
            'text': response.err
        })
    });

};
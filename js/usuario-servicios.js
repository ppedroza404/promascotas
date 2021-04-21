'use strict';

const iniciar_sesion = async(pcorreo, pcontrasenna) => {
    try {
        const response = await axios({
            method: 'get',
            params: { correo: pcorreo, contrasenna: pcontrasenna },
            url: `http://localhost:3000/api/iniciar-sesion`,
            responseType: 'json'
        });
        if (response.data.acceso == true) {
            Swal.fire({
                'icon': 'success',
                'title': 'Bienvenido',
                'text': 'Ha iniciado sesión correctamente'
            }).then(() => {
                sessionStorage.setItem('tipo_usuario', response.data.tipoUsuario);
                sessionStorage.setItem('nombre_usuario', response.data.nombre);

                sessionStorage.setItem('usuarioConectado', JSON.stringify(response.data));


                //redirige al perfil respectivo segun el tipo de id
                if (sessionStorage.getItem('tipo_usuario') == 'cliente') {
                    window.location.href = 'perfilCliente.html';
                } else if (sessionStorage.getItem('tipo_usuario') == 'proveedor') {
                    window.location.href = 'perfilProveedor.html';
                } else {
                    window.location.href = 'paginaInicioAdmin.html';
                }
            });
        } else {
            if (response.data.cambio_contrasenna == 'si') {
                sessionStorage.setItem('correo_usuario', correo);
                window.location.href = 'modificar-contrasenna.html';
            } else {
                Swal.fire({
                    'icon': 'error',
                    'title': 'No ha podido iniciar sesión',
                    'text': 'Usuario o contraseña incorrectos'
                })
            }

        }
    } catch (error) {
        console.log(error);
    }
};

const modificarContrasennaC = async(pcorreoCliente, pclaveNueva) => {

    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/modificar-contrasennaC',
            responseType: 'json',
            data: {
                correo: pcorreoCliente,
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

const modificarContrasennaP = async(pcorreoProveedor, pclaveNueva) => {

    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/modificar-contrasennaP',
            responseType: 'json',
            data: {
                correo: pcorreoProveedor,
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

const listar_usuarios_proveedor = async() => {
    let lista_usuarios_proveedor = [];
    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-usuarios-proveedor',
        responseType: 'json'
    }).then((response) => {
        lista_usuarios_proveedor = response.data.lista_usuario;
    }).catch((response) => {

    });

    return lista_usuarios_proveedor;
};
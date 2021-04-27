'use strict';

const registrar_usuario = async(correo, nombre, primerApellido, segundoApellido, genero, tipoIdProveedor, numeroId, nacimiento, cantidadMascotas, contrasenna, provincia, canton, distrito, sennas, tipoUsuario, estado, _Idservicio, avatar, nombreNegocio, tipoIdNegocio, juridicaId, telefono, descNegocio, _IdtipoDeServicio, repLegalCorreo, repLegalNombre, repLegalPrimerApell, repLegalSegundoApel, repLegalTipoId, repLegalNumeroId, repLegalNacimiento, repLegalTelefono, inputFacebook, inputInstagram, inputTwitter) => {
    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrar-usuario',
        responseType: 'json',
        data: {
            correo: correo, //unique
            nombre: nombre,
            primerApellido: primerApellido,
            segundoApellido: segundoApellido,
            genero: genero,
            tipoId: tipoIdProveedor,
            numeroId: numeroId,
            nacimiento: nacimiento, //formato fecha de postman YYYY-MM-DD
            cantidadMascotas: cantidadMascotas,
            contrasenna: contrasenna,
            provincia: provincia,
            canton: canton,
            distrito: distrito,
            sennas: sennas,
            tipoUsuario: tipoUsuario,
            estado: estado,
            _Idservicio: _Idservicio,
            avatar: avatar,
            nombreNegocio: nombreNegocio,
            tipoIdNegocio: tipoIdNegocio,
            juridicaId: juridicaId,
            telefono: telefono,
            descNegocio: descNegocio,
            _IdtipoDeServicio: _IdtipoDeServicio,
            repLegalCorreo: repLegalCorreo,
            repLegalNombre: repLegalNombre,
            repLegalPrimerApell: repLegalPrimerApell,
            repLegalSegundoApel: repLegalSegundoApel,
            repLegalTipoId: repLegalTipoId,
            repLegalNumeroId: repLegalNumeroId,
            repLegalNacimiento: repLegalNacimiento,
            repLegalTelefono: repLegalTelefono,
            facebook: inputFacebook,
            twitter: inputTwitter,
            instagram: inputInstagram,
        }
    }).then((response) => {

        Swal.fire({
            'title': 'Se ha registrado exitosamente como Cliente',
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
                    window.location.href = 'paginaInicioProveedor.html';
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

const recuperar_contrasenna = async(pcorreoRecuperar, pcontrasennaRandom) => {

    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/recuperar-contrasenna',
            responseType: 'json',
            data: {
                correo: pcorreoRecuperar,
                contrasenna: pcontrasennaRandom
            }

        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'Contraseña actualizada',
                'text': 'Muchas gracias',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'inicioSesion.html';
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

const cambiar_contrasenna_nueva = async(pcorreoNuevaContrasenna, pcontrasennaTemporal, pcontrasennaNueva) => {
    try {
        const response = await axios({
            method: 'get',
            params: { correo: pcorreoNuevaContrasenna, contrasenna: pcontrasennaTemporal },
            url: `http://localhost:3000/api/modificar-contrasennaNuevaGenerica`,
            responseType: 'json'
        });
        if (response.data.validacion == true) {
            modificar_contrasenna_nueva(pcorreoNuevaContrasenna, pcontrasennaNueva);
        }
    } catch (error) {
        console.log(error);
    }

};

const modificar_contrasenna_nueva = async(nuevoPcorreoNuevaContrasenna, nuevoPcontrasennaNueva) => {
    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/modificar-contrasennaNueva',
            responseType: 'json',
            data: {
                correo: nuevoPcorreoNuevaContrasenna,
                contrasenna: nuevoPcontrasennaNueva
            }

        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'Contraseña actualizada',
                'text': 'Muchas gracias',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'inicioSesion.html';
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


const modificarRepresentanteLegal = async(pnombreRepresentante, pprimerApellidoRepresentante, psegundoApellidoRepresentante, ptipoIdRepresentante, pnumeroIdRepresentante, pfechaNacimientoRepresentante, pcorreoRepresentante, ptelefonoRep) => {

    await axios({
            method: 'put',
            url: 'http://localhost:3000/api//modificar-representanteLegal',
            responseType: 'json',
            data: {
                nombreRepresentante: pnombreRepresentante,
                primerApellidoRepresentante: pprimerApellidoRepresentante,
                segundoApellidoRepresentante: psegundoApellidoRepresentante,
                tipoIdRepresentante: ptipoIdRepresentante,
                numeroIdRepresentante: pnumeroIdRepresentante,
                fechaNacimientoRepresentante: pfechaNacimientoRepresentante,
                correoRepresentante: pcorreoRepresentante,
                telefonoRep: ptelefonoRep,

            }

        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'Representante legal actualizado con éxito',
                'text': 'Muchas gracias',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'paginaInicioProveedor.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo modificar el representante legal',
                'text': `Ocurrió el siguiente error {error}`,
                'icon': 'error'
            })
        });
};

//inicio lista de proveedores

let lista_proveedores;

const obtenerProveedores = async() => {
    lista_proveedores = await listar_usuarios_proveedor();
}
obtenerProveedores();

//fin lista de proveedores
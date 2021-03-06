'use strict';

const inputSelectCatalogo = document.querySelector('#slt-catalogo');
const btnGuardarCatalogo = document.querySelector('#btn-registrarNuevoCatalogo');

// Inicio de sesión

const iniciarSesion = async(pcorreo, pcontrasenna) => {
    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/validar-credenciales',
            responseType: 'json',
            data: {
                correo: pcorreo,
                contrasenna: pcontrasenna
            }
        })
        .then((response) => {
            if (response.data.estado == 'No encontrado') {
                Swal.fire({
                    'icon': 'warning',
                    'title': 'No ha podido iniciar sesión',
                    'text': 'Usuario o contraseña incorrectos',
                    'confirmButtonText': 'Entendido'
                });
            } else {

                Swal.fire({
                    'icon': 'success',
                    'title': 'Bienvenido',
                    'text': 'Ha iniciado sesión correctamente',
                    'confirmButtonText': 'Entendido'
                }).then(() => {
                    if (response.data.usuario.estado == 'Cambio contraseña') {
                        window.location.href = 'modificar-contrasenna.html';
                    } else {
                        sessionStorage.setItem('usuarioConectado', JSON.stringify(response.data.usuario));
                        window.location.href = 'dashboard.html';
                    }
                });
            }
        })
        .catch((error) => {
            console.log(error)
        });
};

// Usuarios

const modificarUsuario = async(pcorreo, pnombre, pnacimiento, psexo, ptipo, pestado) => {

    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/modificar-usuario',
            responseType: 'json',
            data: {
                correo: pcorreo,
                nombre: pnombre,
                nacimiento: pnacimiento,
                sexo: psexo,
                tipo: ptipo,
                estado: pestado
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'Usuario modificado',
                'text': 'La información fue actualizada correctamente',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'usuarios.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo registrar el usuario',
                'text': `Ocurrió el siguiente error {error}`,
                'icon': 'error'
            })
        });
};

const eliminarUsuario = async(pcorreo) => {
    await axios({
            method: 'delete',
            url: 'http://localhost:3000/api/eliminar-usuario',
            responseType: 'json',
            data: {
                correo: pcorreo
            }
        })
        .then((response) => {
            Swal.fire(
                '',
                'El usuario ha sido eliminado',
                'success'
            ).then(() => {
                window.location.href = 'usuarios.html';
            });
        })
        .catch((error) => {
            console.log(error)
        });
};

// Registros

const registrarTipoServicio = async(ptxtInputCatalogo, psltestado, pnombreUsuario, ptipoUsuario) => {


    await axios({

            method: 'post',
            url: 'http://localhost:3000/api/registrar-tipodeservicios',
            responseType: 'json',
            data: {

                nombre: ptxtInputCatalogo,
                estado: psltestado,
                nombreUsuario: pnombreUsuario,
                tipoUsuario: ptipoUsuario

            }

        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'Su registró el tipo de servicio',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'registrarCatalogoAdmin.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo registrar el padecimiento',
                'text': `Ocurrió el siguiente error {error}`,
                'icon': 'error'
            })
        });
};

const registrarRaza = async(pinputcatalogo, psltestado, psltTipodemascota, pnombre, ptipoUsuario) => {

    await axios({

            method: 'post',
            url: 'http://localhost:3000/api/registrar-razas',
            responseType: 'json',
            data: {

                raza: pinputcatalogo,
                estado: psltestado,
                _Idtipomascota: psltTipodemascota,
                nombreUsuario: pnombre,
                tipoUsuario: ptipoUsuario,

            }

        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'Se registró la raza con éxito',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'registrarCatalogoAdmin.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo registrar la raza',
                'text': `Ocurrió el siguiente error ${error}`,
                'icon': 'error'
            })
        });
};

const registrarVacuna = async(ptxtInputCatalogo, ptxtInputfabricante, pnombre, ptipoUsuario) => {


    await axios({

            method: 'post',
            url: 'http://localhost:3000/api/registrar-vacunas',
            responseType: 'json',
            data: {

                nombre: ptxtInputCatalogo,
                fabricante: ptxtInputfabricante,
                nombreUsuario: pnombre,
                tipoUsuario: ptipoUsuario
            }

        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'Su vacuna se registró con exito',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'registrarCatalogoAdmin.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo registrar la vacuna',
                'text': `Ocurrió el siguiente error ${error}`,
                'icon': 'error'
            })
        });
};

const registrarTipoMascota = async(ptxtInputCatalogo, psltestado, pnombre, ptipoUsuario) => {

    await axios({

            method: 'post',
            url: 'http://localhost:3000/api/registrar-tipodemascotas',
            responseType: 'json',
            data: {

                tipo: ptxtInputCatalogo,
                estado: psltestado,
                nombreUsuario: pnombre,
                tipoUsuario: ptipoUsuario

            }

        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'Su tipo de mascota se registró con éxito',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'registrarCatalogoAdmin.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo registrar el tipo de mascota',
                'text': `Ocurrió el siguiente error ${error}`,
                'icon': 'error'
            })
        });
};

const registrarPadecimiento = async(ptxtInputCatalogo, psltestado, pnombre, ptipoUsuario) => {


    await axios({

            method: 'post',
            url: 'http://localhost:3000/api/registrar-padecimiento',
            responseType: 'json',
            data: {

                padecimiento: ptxtInputCatalogo,
                estado: psltestado,
                nombreUsuario: pnombre,
                tipoUsuario: ptipoUsuario

            }

        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'Su registró el padecimiento con éxito',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'registrarCatalogoAdmin.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo registrar el padecimiento',
                'text': `Ocurrió el siguiente error {error}`,
                'icon': 'error'
            })
        });
};

// Listares

const listarTipoServicio = async() => {
    let listaTipoDeServicio;
    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar-tipodeservicios',
            responseType: 'json'
        })
        .then((response) => {
            listaTipoDeServicio = response.data.ListaDeTipoDeServicio;
        })
        .catch((error) => {
            console.log(error)
        });

    return listaTipoDeServicio;
};

const listarRazas = async() => {
    let listaRazas;
    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar-razas',
            responseType: 'json'
        })
        .then((response) => {
            listaRazas = response.data.ListaDeRazas;
        })
        .catch((error) => {
            console.log(error)
        });

    return listaRazas;
};

const listarVacunas = async() => {
    let listaVacunas;
    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar-vacunas',
            responseType: 'json'
        })
        .then((response) => {
            listaVacunas = response.data.ListaDeVacunas;
        })
        .catch((error) => {
            console.log(error)
        });

    return listaVacunas;
};

const listarTipoMascota = async() => {
    let TipoMascota;
    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar-tipodemascotas',
            responseType: 'json'
        })
        .then((response) => {
            TipoMascota = response.data.tipodemascotas;
        })
        .catch((error) => {
            console.log(error)
        });

    return TipoMascota;
};

const listarPadecimientos = async() => {
    let listaPadecimientos;
    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar-padecimientos',
            responseType: 'json'
        })
        .then((response) => {
            listaPadecimientos = response.data.ListaDePadecimientos;
        })
        .catch((error) => {
            console.log(error)
        });

    return listaPadecimientos;
};

// Obtención de datos

const obtenerTiposDeMascota = async() => {
    let listaTipoDeMascota;
    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar-tipodemascotas',
            responseType: 'json'
        })
        .then((response) => {
            listaTipoDeMascota = response.data.tipodemascotas;
        })
        .catch((error) => {
            console.log(error)
        });

    return listaTipoDeMascota;
};

const obtenerUsuarios = async() => {
    let listaUsuarios;

    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar-usuarios',
            responseType: 'json'
        })
        .then((response) => {
            listaUsuarios = response.data.usuarios;
        })
        .catch((error) => {
            console.log(error)
        });

    return listaUsuarios;
};

//---------------------------Mantenimientos---------------------------//

///Tipo de servicio
const desactivarTipoServicio = async(p_id, pnombre, ptipoUsuario) => {
    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/desactivar-tipoServicio',
            responseType: 'json',
            data: {
                _id: p_id,
                estado: 'Inactivo',
                nombreUsuario: pnombre,
                tipoUsuario: ptipoUsuario
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'El tipo de servicio se desactivó con éxito',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'modificarCatalogoAdmin.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo desactivar el servicio',
                'text': 'Ocurrió el siguiente error {error}',
                'icon': 'error'
            })
        });
}

const activarTipoServicio = async(p_id, pnombre, ptipoUsuario) => {
    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/activar-tipoServicio',
            responseType: 'json',
            data: {
                _id: p_id,
                estado: 'Activo',
                nombreUsuario: pnombre,
                tipoUsuario: ptipoUsuario
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'El tipo de servicio se activó con éxito',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'modificarCatalogoAdmin.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo activar el servicio',
                'text': 'Ocurrió el siguiente error {error}',
                'icon': 'error'
            })
        });
}

const modificarTipoServicio = async(pNombreModificado, p_id, pnombre, ptipoUsuario) => {

    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/modificar-tipoServicio',
            responseType: 'json',
            data: {
                _id: p_id,
                nombre: pNombreModificado,
                nombreUsuario: pnombre,
                tipoUsuario: ptipoUsuario

            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'El tipo de servicio se modificó con éxito',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'modificarCatalogoAdmin.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo modificar el tipo de servicio',
                'text': 'Ocurrió el siguiente error {error}',
                'icon': 'error'
            })
        });
};

const eliminarTipoServicio = async(p_id, pnombre, ptipoUsuario) => {

    await axios({
            method: 'delete',
            url: 'http://localhost:3000/api/eliminar-TipoServicio',
            responseType: 'json',
            data: {
                _id: p_id,
                nombreUsuario: pnombre,
                tipoUsuario: ptipoUsuario
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'El tipo de servicio se eliminó con éxito',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'modificarCatalogoAdmin.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo eliminar el tipo de servicio',
                'text': 'Ocurrió el siguiente error {error}',
                'icon': 'error'
            })
        });
};

///Razas

const desactivarRaza = async(p_id, pnombre, ptipoUsuario) => {
    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/desactivar-raza',
            responseType: 'json',
            data: {
                _id: p_id,
                estado: 'Inactivo',
                nombreUsuario: pnombre,
                tipoUsuario: ptipoUsuario
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'La raza se desactivó con éxito',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'modificarCatalogoAdmin.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo desactivar la raza',
                'text': 'Ocurrió el siguiente error {error}',
                'icon': 'error'
            });
        });
}

const activarRaza = async(p_id, pnombre, ptipoUsuario) => {
    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/activar-raza',
            responseType: 'json',
            data: {
                _id: p_id,
                estado: 'Activo',
                nombreUsuario: pnombre,
                tipoUsuario: ptipoUsuario
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'La raza se activó con éxito',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'modificarCatalogoAdmin.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo activar la raza',
                'text': 'Ocurrió el siguiente error {error}',
                'icon': 'error'
            })
        });
}

const modificarRaza = async(pNombreModificado, p_id, pnombre, ptipoUsuario) => {

    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/modificar-raza',
            responseType: 'json',
            data: {
                _id: p_id,
                raza: pNombreModificado,
                nombreUsuario: pnombre,
                tipoUsuario: ptipoUsuario

            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'La raza se modificó con éxito',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'modificarCatalogoAdmin.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo modificar la raza',
                'text': 'Ocurrió el siguiente error {error}',
                'icon': 'error'
            })
        });
};

const eliminarRaza = async(p_id, pnombre, ptipoUsuario) => {

    await axios({
            method: 'delete',
            url: 'http://localhost:3000/api/eliminar-raza',
            responseType: 'json',
            data: {
                _id: p_id,
                nombreUsuario: pnombre,
                tipoUsuario: ptipoUsuario
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'La raza se eliminó con éxito',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'modificarCatalogoAdmin.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo eliminar la raza',
                'text': 'Ocurrió el siguiente error {error}',
                'icon': 'error'
            })
        });
};


///Padecimiento

const desactivarPadecimiento = async(p_id, pnombre, ptipoUsuario) => {
    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/desactivar-padecimientos',
            responseType: 'json',
            data: {
                _id: p_id,
                estado: 'Inactivo',
                nombreUsuario: pnombre,
                tipoUsuario: ptipoUsuario
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'El padecimiento se desactivó con éxito',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'modificarCatalogoAdmin.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo desactivar el padecimiento',
                'text': 'Ocurrió el siguiente error {error}',
                'icon': 'error'
            })
        });
}

const activarPadecimiento = async(p_id, pnombre, ptipoUsuario) => {
    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/activar-padecimientos',
            responseType: 'json',
            data: {
                _id: p_id,
                estado: 'Activo',
                nombreUsuario: pnombre,
                tipoUsuario: ptipoUsuario
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'El padecimiento se activó con éxito',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'modificarCatalogoAdmin.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo activar el padecimiento',
                'text': 'Ocurrió el siguiente error {error}',
                'icon': 'error'
            })
        });
}

const modificarPadecimiento = async(pNombreModificado, p_id, pnombre, ptipoUsuario) => {

    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/modificar-padecimientos',
            responseType: 'json',
            data: {
                _id: p_id,
                padecimiento: pNombreModificado,
                nombreUsuario: pnombre,
                tipoUsuario: ptipoUsuario

            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'El padecimiento se modificó con éxito',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'modificarCatalogoAdmin.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo modificar el padecimiento',
                'text': 'Ocurrió el siguiente error {error}',
                'icon': 'error'
            })
        });
};

const eliminarPadecimiento = async(p_id, pnombre, ptipoUsuario) => {

    await axios({
            method: 'delete',
            url: 'http://localhost:3000/api/eliminar-padecimiento',
            responseType: 'json',
            data: {
                _id: p_id,
                nombreUsuario: pnombre,
                tipoUsuario: ptipoUsuario
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'El padecimiento se eliminó con éxito',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'modificarCatalogoAdmin.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo eliminar el padecimiento',
                'text': 'Ocurrió el siguiente error {error}',
                'icon': 'error'
            })
        });
};

///Tipo Mascota

const desactivarTipoMascota = async(p_id, pnombre, ptipoUsuario) => {
    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/desactivar-tipoMascota',
            responseType: 'json',
            data: {
                _id: p_id,
                estado: 'Inactivo',
                nombreUsuario: pnombre,
                tipoUsuario: ptipoUsuario
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'El tipo de mascota se desactivó con éxito',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'modificarCatalogoAdmin.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo desactivar el tipo de mascota',
                'text': 'Ocurrió el siguiente error {error}',
                'icon': 'error'
            })
        });
}

const activarTipoMascota = async(p_id, pnombre, ptipoUsuario) => {
    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/activar-tipoMascota',
            responseType: 'json',
            data: {
                _id: p_id,
                estado: 'Activo',
                nombreUsuario: pnombre,
                tipoUsuario: ptipoUsuario
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'El tipo de mascota se activó con éxito',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'modificarCatalogoAdmin.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo activar el tipo de mascota',
                'text': 'Ocurrió el siguiente error {error}',
                'icon': 'error'
            })
        });
}

const modificarTipoMascota = async(pNombreModificado, p_id, pnombre, ptipoUsuario) => {

    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/modificar-tipoMascota',
            responseType: 'json',
            data: {
                _id: p_id,
                tipo: pNombreModificado,
                nombreUsuario: pnombre,
                tipoUsuario: ptipoUsuario

            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'El tipo de mascota se modificó con éxito',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'modificarCatalogoAdmin.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo modificar el tipo de mascota',
                'text': 'Ocurrió el siguiente error {error}',
                'icon': 'error'
            })
        });
};

const eliminarTipoMascota = async(p_id, pnombre, ptipoUsuario) => {

    await axios({
            method: 'delete',
            url: 'http://localhost:3000/api/eliminar-tipoMascota',
            responseType: 'json',
            data: {
                _id: p_id,
                nombreUsuario: pnombre,
                tipoUsuario: ptipoUsuario
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'El tipo de mascota se eliminó con éxito',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'modificarCatalogoAdmin.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo eliminar el tipo de mascota',
                'text': 'Ocurrió el siguiente error {error}',
                'icon': 'error'
            })
        });
};

///Vacuna

const desactivarVacuna = async(p_id, pnombre, ptipoUsuario) => {
    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/desactivar-Vacuna',
            responseType: 'json',
            data: {
                _id: p_id,
                estado: 'Inactivo',
                nombreUsuario: pnombre,
                tipoUsuario: ptipoUsuario
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'La vacuna se desactivó con éxito',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'modificarCatalogoAdmin.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo desactivar la vacuna',
                'text': 'Ocurrió el siguiente error {error}',
                'icon': 'error'
            })
        });
}

const activarVacuna = async(p_id, pnombre, ptipoUsuario) => {
    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/activar-Vacuna',
            responseType: 'json',
            data: {
                _id: p_id,
                estado: 'Activo',
                nombreUsuario: pnombre,
                tipoUsuario: ptipoUsuario
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'La vacuna se activó con éxito',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'modificarCatalogoAdmin.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo activar la vacuna',
                'text': 'Ocurrió el siguiente error {error}',
                'icon': 'error'
            })
        });
}

const modificarVacuna = async(pNombreModificado, p_id, pnombre, ptipoUsuario) => {

    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/modificar-Vacuna',
            responseType: 'json',
            data: {
                _id: p_id,
                nombre: pNombreModificado,
                nombreUsuario: pnombre,
                tipoUsuario: ptipoUsuario

            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'La vacuna se modificó con éxito',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'modificarCatalogoAdmin.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo modificar la vacuna',
                'text': 'Ocurrió el siguiente error {error}',
                'icon': 'error'
            })
        });
};

const eliminarVacuna = async(p_id, pnombre, ptipoUsuario) => {

    await axios({
            method: 'delete',
            url: 'http://localhost:3000/api/eliminar-Vacuna',
            responseType: 'json',
            data: {
                _id: p_id,
                nombreUsuario: pnombre,
                tipoUsuario: ptipoUsuario
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'La vacuna se eliminó con éxito',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'modificarCatalogoAdmin.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo eliminar la vacuna',
                'text': 'Ocurrió el siguiente error {error}',
                'icon': 'error'
            })
        });
};
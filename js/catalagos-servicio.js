'use strict';

const inputSelectCatalogo = document.querySelector('#slt-catalogo');
const btnGuardarCatalogo = document.querySelector('#btn-registrarNuevoCatalogo');

const registrarPadecimiento = async(ptxtInputCatalogo) => {


    await axios({

            method: 'post',
            url: 'http://localhost:3000/api/registrar-padecimiento',
            responseType: 'json',
            data: {

                padecimiento: ptxtInputCatalogo


            }

        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'Su registró el padecimiento con éxito',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'modificarCatalogoAdmin.html';
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

const registrarVacuna = async(ptxtInputCatalogo, psltCatalogo) => {


    await axios({

            method: 'post',
            url: 'http://localhost:3000/api/registrar-vacunas',
            responseType: 'json',
            data: {

                nombre: ptxtInputCatalogo,
                esencial: psltCatalogo

            }

        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'Su vacuna se registro con exito',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'modificarCatalogoAdmin.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo registrar la vacuna',
                'text': `Ocurrió el siguiente error {error}`,
                'icon': 'error'
            })
        });
};


const registrarRaza = async(pinputcatalogo) => {

    await axios({

            method: 'post',
            url: 'http://localhost:3000/api/registrar-razas',
            responseType: 'json',
            data: {

                raza: pinputcatalogo


            }

        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'Su registró la raza con éxito',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'modificarCatalogoAdmin.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo registrar la raza',
                'text': `Ocurrió el siguiente error {error}`,
                'icon': 'error'
            })
        });
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


const selectCatalogos = () => {
    switch (inputSelectCatalogo.value) {
        case 'padecimientos':
            registrarPadecimiento();
            break;
        case 'razas':
            registrarRaza();
            break;
        case 'vacunas':
            registrarVacuna;
            break;
        default:
            console.log('Error default');

    }
}

//btnGuardarCatalogo.addEventListener('click', selectCatalogos);
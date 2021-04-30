'use strict';

const registrarMascota = async(pcorreo, pnombre, ptipoMascota, praza, pnacimiento, pedad) => {

    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/registrar-mascota',
            responseType: 'json',
            data: {
                correo: pcorreo,
                nombre: pnombre,
                tipoMascota: ptipoMascota,
                raza: praza,
                nacimiento: pnacimiento,
                edad: pedad,
                estado: 'activo'
            }
        })
        .then((response) => {
            Swal.fire({
                    'icon': 'success',
                    'title': 'Su mascota fue registrada con exito',
                    'confirmButtonText': 'Entendido'
                })
                .then(() => {
                    window.location.href = 'listarMascotasCliente.html';
                });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo registrar la mascota',
                'text': `Ocurrió el siguiente error {error}`,
                'icon': 'error'
            })
        });
};

const registrarVacunaMascota = async(pvacuna, pfechaAplicacion, pcorreo, pnombreMascota) => {

    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/registrar-vacuna-mascota',
            responseType: 'json',
            data: {
                vacuna: pvacuna,
                fechaAplicacion: pfechaAplicacion,
                correo: pcorreo,
                nombreMascota: pnombreMascota

            }
        })
        /*.then((response) => {
            Swal.fire({
                    'icon': 'success',
                    'title': 'Su cuenta mascota fue registrada con exito',
                    'confirmButtonText': 'Entendido'
                })
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo registrar la mascota',
                'text': `Ocurrió el siguiente error {error}`,
                'icon': 'error'
            })
        });*/
};


const registrarPadecimientoMascota = async(ppadecimiento, pcorreo, pnombreMascota) => {

    await axios({
            method: 'post',
            url: 'http://localhost:3000/api/registrar-padecimiento-mascota',
            responseType: 'json',
            data: {
                padecimiento: ppadecimiento,
                correo: pcorreo,
                nombreMascota: pnombreMascota

            }
        })
        /*.then((response) => {
            Swal.fire({
                    'icon': 'success',
                    'title': 'Su cuenta mascota fue registrada con exito',
                    'confirmButtonText': 'Entendido'
                })
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo registrar la mascota',
                'text': `Ocurrió el siguiente error {error}`,
                'icon': 'error'
            })
        });*/
};

const listar_mascotas_cliente = async() => {
    let lista_mascotas = [];
    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-mascotas-cliente',
        responseType: 'json'
    }).then((response) => {
        lista_mascotas = response.data.lista_Mascotas;
    }).catch((response) => {

    });

    return lista_mascotas;
};

const eliminarMascotaCliente = async(pnombre) => {

    await axios({
            method: 'delete',
            url: 'http://localhost:3000/api/eliminar-mascota-cliente',
            responseType: 'json',
            data: {
                nombre: pnombre
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'Su mascota se eliminó con éxito',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'listarMascotasCliente.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo eliminar la mascota',
                'text': 'Ocurrió el siguiente error {error}',
                'icon': 'error'
            })
        });
};

const desactivarMascota = async(pnombre) => {
    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/desactivar-mascota-cliente',
            responseType: 'json',
            data: {
                nombre: pnombre,
                estado: 'Inactivo'
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'La mascota se desactivó con éxito',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'listarMascotasCliente.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo desactivar la mascota',
                'text': 'Ocurrió el siguiente error {error}',
                'icon': 'error'
            })
        });
};

const activarMascota = async(pnombre) => {
    await axios({
            method: 'put',
            url: 'http://localhost:3000/api/activar-mascota-cliente',
            responseType: 'json',
            data: {
                nombre: pnombre,
                estado: 'Activo'
            }
        })
        .then((response) => {
            Swal.fire({
                'icon': 'success',
                'title': 'El usuario se activó con éxito',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                window.location.href = 'listarMascotasCliente.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                'title': 'No se pudo activar el usuario',
                'text': 'Ocurrió el siguiente error {error}',
                'icon': 'error'
            })
        });
};
'use strict';

const listar_vacunas_cliente = async() => {
    let lista_vacunas;
    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-vacunas-mascota',
        responseType: 'json'
    }).then((response) => {
        lista_vacunas = response.data.lista_vacunasMascotas;
    }).catch((response) => {

    });

    return lista_vacunas;
};
const listar_padecimientos_cliente = async() => {
    let lista_pade;
    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-padecimientos-mascota',
        responseType: 'json'
    }).then((response) => {
        lista_pade = response.data.lista_padecimientosMascotas;
    }).catch((response) => {

    });

    return lista_pade;
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
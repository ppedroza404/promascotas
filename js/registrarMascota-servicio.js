'use strict';
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
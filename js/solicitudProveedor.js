'use strict';

const listarSolicitudes = async() => {
    let listaSolicitudes = [];
    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar-solicitudesServicio',
            responseType: 'json'
        })
        .then((response) => {
            listaSolicitudes = response.data.resp;
        })
        .catch((error) => {
            console.log(error)
        });

    return listaSolicitudes;
};
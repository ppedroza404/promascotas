'use strict';

const listarBitacora = async() => {
    let listaBitacoraTransaccional = [];
    await axios({
            method: 'get',
            url: 'http://localhost:3000/api/listar-bitacora',
            responseType: 'json'
        })
        .then((response) => {
            listaBitacoraTransaccional = response.data.res;
        })
        .catch((error) => {
            console.log(error)
        });

    return listaBitacoraTransaccional;
};
'use strict';

//Función para habilitar o deshabilitar el input de la cédula jurídica
const tipoId = document.querySelector('#slt-tipoId');
const inputJuridica = document.querySelector('#txt-cedulaJuridica');

const enableSelect = () => {
    if (tipoId.value == 'Jurídica') {
        inputJuridica.disabled = false;
    } else {
        inputJuridica.disabled = true;
    }

};

tipoId.addEventListener('change', enableSelect);
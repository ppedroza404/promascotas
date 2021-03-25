'use strict';
const btnProveedoresPendientes = document.querySelector('#btn-proveedoresPendientes');

const irProveedoresPendientes = () => { 
    window.location.href  = 'solicitudesPendientesAdmin.html';
};
btnProveedoresPendientes.addEventListener('click', () => {  
    irProveedoresPendientes();
});
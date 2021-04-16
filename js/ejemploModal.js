'use strict';
//Modal
let modal2 = document.querySelector('#modal2');
let botonModal2 = document.querySelector('#abrirModal2')
let cerrar2 = document.querySelector("#modal2 .close");


botonModal2.addEventListener('click', () => {
    modal2.style.display = 'block';
});

cerrar2.addEventListener('click', () => {
    modal2.style.display = 'none';
});
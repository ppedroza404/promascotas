'use strict';
//Modal
let modal = document.querySelector('#modalModificarContrasenna');
let abrirModal = document.querySelector('#abrirModalContrasenna')
let cerrarModal = document.querySelector("#modalModificarContrasenna .close");


abrirModal.addEventListener('click', () => {
    modal.style.display = 'block';
});

cerrarModal.addEventListener('click', () => {
    modal.style.display = 'none';
});
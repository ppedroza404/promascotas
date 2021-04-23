'use strict';
const inputEjercicio = document.querySelector("#txt-ejercicio");
const inputZona = document.querySelector("#txt-zona");
const divFoto = document.querySelector("#foto-ejercicio");
const btnRegistrar = document.querySelector("#btn-registrar");


const obtenerDatos = () => {
    registrar_ejercicio(inputEjercicio.value, inputZona.value, divFoto.src)

};

btnRegistrar.addEventListener("click", obtenerDatos);
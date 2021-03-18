'use strict';

const tabla = document.querySelector('#tbl-enfermedades');

const mostrarTabla = () => {
    enfermedades_admin.forEach(enfermedades => {
        let fila = tabla.insertRow();
        fila.insertCell().innerHTML = enfermedades.enfermedad;

    });
};
mostrarTabla();


const tabla2 = document.querySelector('#tbl-razas');

const mostrarTabla2 = () => {
    razas_admin.forEach(razas => {
        let fila = tabla2.insertRow();
        fila.insertCell().innerHTML = razas.razas;

    });
};
mostrarTabla2();


const tabla3 = document.querySelector('#tbl-vacunas');

const mostrarTabla3 = () => {
    vacunas_admin.forEach(vacunas => {
        let fila = tabla3.insertRow();
        fila.insertCell().innerHTML = vacunas.vacunas;

    });
};
mostrarTabla3();
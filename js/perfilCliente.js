'use strict';

const fotoMascota = document.querySelector('#imagen-prev');
//

function mostrarInfo() {
    let infoMascota = document.getElementById('seccion-infoMascota');
    let infoVacunas = document.getElementById('seccion-tablaMascotas');
    if (infoMascota.style.display === "none") {
        infoMascota.style.display = "block";
    } else {
        infoMascota.style.display = "none";
    }
    if (infoVacunas.style.display === "none") {
        infoVacunas.style.display = "block";
    } else {
        infoVacunas.style.display = "none";
    }
}

fotoMascota.addEventListener('onclick', mostrarInfo);
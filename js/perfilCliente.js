'use strict';

const fotoMascota = document.querySelector('#imagen-prev');
//

function mostrarInfo() {
    let infoMascota = document.getElementById('seccion-infoMascota');
    if (infoMascota.style.display === "none") {
        infoMascota.style.display = "block";
    } else {
        infoMascota.style.display = "none";
    }
}

fotoMascota.addEventListener('onclick', mostrarInfo);
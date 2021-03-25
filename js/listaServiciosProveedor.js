'use strict';
let lista_proveedoresPropia = [
    { "nombre": "Cortico", "tipo": "Corte de pelo", "descripcion": "Corte para perro pequeño" },
    { "nombre": "Peinatico", "tipo": "Corte de pelo", "descripcion": "Peinado y bañado de mascota" },
    { "nombre": "Supercorte", "tipo": "Corte de pelo", "descripcion": "Corte, peinado, bañado y uñas" },
    { "nombre": "Masajito", "tipo": "Corte de pelo", "descripcion": "Masaje relajante para perros" },
    { "nombre": "Uñitas", "tipo": "Corte de uñas", "descripcion": "Corte de uñas" }
]


const tabla = document.querySelector('#tbl-usuarios tbody');
const inputFiltro = document.querySelector('#txt-filtro');

const mostrarTabla = () => {
    let filtro = inputFiltro.value.toLowerCase();
    tabla.innerHTML = '';

    lista_proveedoresPropia.forEach(servicio => {

        if (servicio.nombre.toLowerCase().includes(filtro) || servicio.tipo.toLowerCase().includes(filtro)) {
            let fila = tabla.insertRow();
            fila.insertCell().innerHTML = servicio.nombre;
            fila.insertCell().innerHTML = servicio.tipo;
            fila.insertCell().innerHTML = servicio.descripcion;



        }

    });
};


mostrarTabla();
inputFiltro.addEventListener('keyup', mostrarTabla);
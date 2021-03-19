'use strict';


const tablaCatalogo = document.querySelector('#tbl-catalogos');
const selectCatalogo = document.querySelector('#slt-catalogo');

const limpiarTabla = () => {
    for (var i = tablaCatalogo.rows.length - 1; i > 0; i--) {
        tablaCatalogo.deleteRow(i);
    }
}

const mostrarCatalogoSeleccionado = () => {

    limpiarTabla();



    lista_catalogo.forEach(catalogo => {
        let fila = tablaCatalogo.insertRow();


        if (catalogo.tipo == selectCatalogo.value) {
            fila.insertCell().innerHTML = catalogo.enfermedades;
            fila.insertCell().innerHTML = catalogo.razas;
            fila.insertCell().innerHTML = catalogo.vacunas;
        }

    });
};
mostrarCatalogoSeleccionado();
selectCatalogo.addEventListener('change', mostrarCatalogoSeleccionado);
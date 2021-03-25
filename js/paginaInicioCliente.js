'use strict';

/* Inicio: Función para acomodar los proveedores mejor calificados según calificación */

let lista_calificadosOrdenada = [];

const acomodarLista = (lista_proveedoresCalificados) => {
    return lista_proveedoresCalificados.sort(function(a, b) {
        return ((a.calificacion < b.calificacion) ? 1 : ((a.calificacion > b.calificacion) ? -1 : 0));
    });
}
lista_calificadosOrdenada = acomodarLista(lista_proveedoresCalificados, 'calificacion').slice(0, 20);

/* Inicio: Función para acomodar los proveedores mejor calificados según calificación */

/* Inicio: Función para ingresar cada valor de la lista acomodada en un OL LI*/

lista_calificadosOrdenada.forEach(proveedor => {
    let listaOrdenada = document.getElementById('lista-provCalificadosPagInicio');
    let informacion = `${proveedor.n_negocio}`;
    let entrada = document.createElement('li');
    entrada.appendChild(document.createTextNode(informacion));
    listaOrdenada.appendChild(entrada);
})

// Sección derecha
lista_calificadosOrdenada.forEach(proveedor => {
    let listaOrdenadaCalificaciones = document.getElementById('lista-provCalificadosPagInicioDer');
    let calificaciones = `${proveedor.calificacion}`;
    let entrada2 = document.createElement('li');
    entrada2.appendChild(document.createTextNode(calificaciones));
    listaOrdenadaCalificaciones.appendChild(entrada2);
})

/* Fin: Función para ingresar cada valor de la lista acomodada en un OL LI*/
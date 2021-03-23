'use strict';

let listaProvincias = [{
        "Provincia": "1",
        "Nombre": "San José"
    },
    {
        "Provincia": "2",
        "Nombre": "Alajuela"
    },
    {
        "Provincia": "3",
        "Nombre": "Cartago"
    },
    {
        "Provincia": "4",
        "Nombre": "Heredia"
    },
    {
        "Provincia": "5",
        "Nombre": "Guanacaste"
    },
    {
        "Provincia": "6",
        "Nombre": "Puntarenas"
    },
    {
        "Provincia": "7",
        "Nombre": "Limón"
    }
]
let listaCantones = [{
        "Id": "101",
        "Provincia": "1",
        "Nombre": "San José"
    },
    {
        "Id": "201",
        "Provincia": "2",
        "Nombre": "Escazú"
    },
    {
        "Id": "301",
        "Provincia": "3",
        "Nombre": "Desamparados"
    },
    {
        "Id": "401",
        "Provincia": "4",
        "Nombre": "Puriscal"
    },
    {
        "Id": "501",
        "Provincia": "5",
        "Nombre": "Tarrazú"
    },
    {
        "Id": "601",
        "Provincia": "6",
        "Nombre": "Aserrí"
    },
    {
        "Id": "701",
        "Provincia": "7",
        "Nombre": "Mora"
    },
]

let listaDistritos = [{
        "Id": "10101",
        "Canton": "101",
        "Nombre": "Carmen"
    },
    {
        "Id": "10102",
        "Canton": "201",
        "Nombre": "Merced"
    },
    {
        "Id": "10102",
        "Canton": "301",
        "Nombre": "Merced"
    },
    {
        "Id": "10102",
        "Canton": "401",
        "Nombre": "Merced"
    },
    {
        "Id": "10102",
        "Canton": "501",
        "Nombre": "Merced"
    },
    {
        "Id": "10102",
        "Canton": "601",
        "Nombre": "Merced"
    },
    {
        "Id": "10102",
        "Canton": "701",
        "Nombre": "Merced"
    },
]


/* Inicio: Función para habilitar o deshabilitar los campos de Cantón y Distrito */

const selectProvincia = document.querySelector('#slt-provincia');
const selectCanton = document.querySelector('#slt-canton');
const selectDistrito = document.querySelector('#slt-distrito');

const mostrarProvincia = () => {

    listaProvincias.forEach(provincia => {
        let option = document.createElement('option');
        option.text = provincia.Nombre;
        option.value = provincia.Provincia;
        selectProvincia.add(option);
    });
}

const mostrarCanton = () => {
    limpiarCanton();
    limpiarDistrito();
    listaCantones.forEach(canton => {
        if (selectProvincia.value == canton.Provincia) {
            let option = document.createElement('option');
            option.text = canton.Nombre;
            option.value = canton.Canton;
            selectCanton.add('option')
        }
    });
}

const mostrarDistrito = () => {
    limpiarDistrito();
    listaDistritos.forEach(distrito => {
        if (selectCanton.value == distrito.Canton) {
            let option = document.createElement('option');
            option.text = distrito.Nombre;
            option.value = distrito.Distrito;
        }
    });
}

const limpiarCanton = () => {
    while (selectProvincia.options.length > 1) {
        sltCanton.options[1] = null;
    }
}

const limpiarDistrito = () => {
    while (sltDistrito.options.length > 1) {
        sltDistrito.options[1] = null;
    }
}

mostrarProvincia();
selectProvincia.addEventListener('change', mostrarCanton);
selectCanton.addEventListener('change', mostrarDistrito);


/* Inicio: Función para habilitar o deshabilitar los campos de Cantón y Distrito */
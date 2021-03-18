'use strict';
let mascotas = [{
        'nombre': 'Cloe',
        'raza': 'Chihuahua',
        'tipo': 'Perro',
        'cliente': 'Elon Musk',
        'fechaIngreso': '2020-09-20',
        'servicios': '15'
    },
    {
        'nombre': 'Papi',
        'raza': 'Chihuahua',
        'tipo': 'Perro',
        'cliente': 'Isaac Newton',
        'fechaIngreso': '2020-09-25',
        'servicios': '13'
    },
    {
        'nombre': 'Oreo',
        'raza': 'Persa',
        'tipo': 'Gato',
        'cliente': 'Albert Einstein',
        'fechaIngreso': '2020-12-27',
        'servicios': '5'
    },
    {
        'nombre': 'Corchito',
        'raza': 'Esfinge',
        'tipo': 'Gato',
        'cliente': 'Elon Musk',
        'fechaIngreso': '2021-01-07',
        'servicios': '35'
    },
    {
        'nombre': 'Figaro',
        'raza': 'Bengala',
        'tipo': 'Gato',
        'cliente': 'James Watt',
        'fechaIngreso': '2021-02-10',
        'servicios': '15'
    },
    {
        'nombre': 'Cosmo',
        'raza': 'Siberiano',
        'tipo': 'Gato',
        'cliente': 'Allan Turing',
        'fechaIngreso': '2021-02-13',
        'servicios': '27'
    },
    {
        'nombre': 'Kitty',
        'raza': 'Angola',
        'tipo': 'Gato',
        'cliente': 'Nikola Tesla',
        'fechaIngreso': '2021-02-15',
        'servicios': '23'
    },
    {
        'nombre': 'Orus',
        'raza': 'Standford',
        'tipo': 'Perro',
        'cliente': 'Osman Kara',
        'fechaIngreso': '2021-02-20',
        'servicios': '3'
    },
    {
        'nombre': 'Max',
        'raza': 'Standford',
        'tipo': 'Perro',
        'cliente': 'Joel Campbell',
        'fechaIngreso': '2020-03-01',
        'servicios': '7'
    },
    {
        'nombre': 'Terry',
        'raza': 'Golden',
        'tipo': 'Perro',
        'cliente': 'Bryan Ruiz',
        'fechaIngreso': '2020-03-03',
        'servicios': '8'
    }
]


let mascotasCliente = [{
        'nombre': 'Cloe',
        'raza': 'Chihuahua',
        'vacunas': 'hepatitis, estemper',
        'servicios': '15'
    },
    {
        'nombre': 'Papi',
        'raza': 'Chihuahua',
        'vacunas': 'hepatitis, rabia',
        'servicios': '13'
    },
    {
        'nombre': 'Oreo',
        'raza': 'Persa',
        'vacunas': 'rabia, leucemia felina',
        'servicios': '5'
    },
    {
        'nombre': 'Corchito',
        'raza': 'Esfinge',
        'vacunas': 'herpesvirus, calicivirus, rabia',
        'servicios': '35'
    },
    {
        'nombre': 'Figaro',
        'raza': 'Bengala',
        'vacunas': 'leucemia felina, calicivirus',
        'servicios': '15'
    },
    {
        'nombre': 'Cosmo',
        'raza': 'Siberiano',
        'vacunas': 'rabia, leucemia felina',
        'servicios': '27'
    },
    {
        'nombre': 'Kitty',
        'raza': 'Angola',
        'vacunas': 'herpesvirus, rabia',
        'servicios': '23'
    },
    {
        'nombre': 'Orus',
        'raza': 'Standford',
        'vacunas': 'rabia, estemper',
        'servicios': '3'
    },
    {
        'nombre': 'Max',
        'raza': 'Standford',
        'vacunas': 'estemper, hepatitis',
        'servicios': '7'
    },
    {
        'nombre': 'Terry',
        'raza': 'Golden',
        'vacunas': 'hepatitis, rabia',
        'servicios': '8'
    }
]

let lista_clientes = [];

let listaUsuarios = [{
        "correo": "admin@promascotas.com",
        "tipo": "Administrador",
        "nombre": "Admin",
        "primerApellido": "Admin",
        "segundoApellido": "Admin",
        "nacimiento": "'10-12-1987'",
        "cantidadmascotas": "0",
        "contrasenna": "123Abc!",
        "sexo": "Otro",
        "telefono": "5555-5555-5555",
        "tipoID": "JURIDICA",
        "id": "999999999",
        "provincia": "San José",
        "canton": "Escazú",
        "distrito": "Escazú",
        "sennas": "casa 1"
    },
    {
        "correo": "mmatamoro@gmail.com",
        "tipo": "Proveedor",
        "nombre": "Maria",
        "primerApellido": "Trivez",
        "segundoApellido": "Matamoro",
        "nacimiento": "'09-20-1973'",
        "cantidadmascotas": "0",
        "contrasenna": "123Abc!",
        "sexo": "Femenino",
        "telefono": "2233-1234-5678",
        "tipoID": "CEDULA",
        "id": "925069023",
        "provincia": "Heredia",
        "canton": "Santo Domingo",
        "distrito": "Santa Rosa",
        "sennas": "casa 2"
    },
    {
        "correo": "rcargua@gmail.com",
        "tipo": "Proveedor",
        "nombre": "Rosa",
        "primerApellido": "Ripado",
        "segundoApellido": "Cargua",
        "nacimiento": "'03-11-1991'",
        "cantidadmascotas": "0",
        "contrasenna": "123Abc!",
        "sexo": "Femenino",
        "telefono": "2233-5784-4433",
        "tipoID": "JURIDICA",
        "id": "934480785",
        "provincia": "San José",
        "canton": "Puriscal",
        "distrito": "Mercedes sur",
        "sennas": "casa 3"
    },
    {
        "correo": "jsarsa@gamil.com",
        "tipo": "Proveedor",
        "nombre": "Jose",
        "primerApellido": "Baldor",
        "segundoApellido": "Sarsa",
        "nacimiento": "'10-12-1987'",
        "cantidadmascotas": "0",
        "contrasenna": "123Abc!",
        "sexo": "Masculino",
        "telefono": "5566-1234-5679",
        "tipoID": "JURIDICA",
        "id": "459378283",
        "provincia": "Alajuela",
        "canton": "Central",
        "distrito": "Alajuela",
        "sennas": "casa 4"
    },
    {
        "correo": "ldanus@gmail.com",
        "tipo": "Proveedor",
        "nombre": "Luisa",
        "primerApellido": "Danus",
        "segundoApellido": "Albite",
        "nacimiento": "'10-12-1987'",
        "cantidadmascotas": "0",
        "contrasenna": "123Abc!",
        "sexo": "Femenino",
        "telefono": "2233-5784-4434",
        "tipoID": "DIMEX",
        "id": "488010919",
        "provincia": "Alajuela",
        "canton": "Central",
        "distrito": "Carrizal",
        "sennas": "casa 5"
    },
    {
        "correo": "cboher@gmail.com",
        "tipo": "Cliente",
        "nombre": "Carmen",
        "primerApellido": "Boher",
        "segundoApellido": "Chantrero",
        "nacimiento": "'7-2-1985'",
        "cantidadmascotas": "3",
        "contrasenna": "123Abc!",
        "sexo": "Femenino",
        "telefono": "5566-1234-5680",
        "tipoID": "CEDULA",
        "id": "684171892",
        "provincia": "Heredia",
        "canton": "Belén",
        "distrito": "La ribera",
        "sennas": "casa 6"
    },
    {
        "correo": "adeblas@gmail.com",
        "tipo": "Cliente",
        "nombre": "Ana",
        "primerApellido": "Deblas",
        "segundoApellido": "Soto",
        "nacimiento": "'09-20-1973'",
        "cantidadmascotas": "2",
        "contrasenna": "123Abc!",
        "sexo": "Femenino",
        "telefono": "2233-5784-4435",
        "tipoID": "DIMEX",
        "id": "501764518",
        "provincia": "San José",
        "canton": "Puriscal",
        "distrito": "San Rafael",
        "sennas": "casa 7"
    },
    {
        "correo": "epurti@gmail.com",
        "tipo": "Cliente",
        "nombre": "Elena",
        "primerApellido": "Santaolaya",
        "segundoApellido": "Purti",
        "nacimiento": "'03-11-1991'",
        "cantidadmascotas": "1",
        "contrasenna": "123Abc!",
        "sexo": "Femenino",
        "telefono": "5566-1234-5681",
        "tipoID": "CEDULA",
        "id": "857356263",
        "provincia": "San José",
        "canton": "Tibas",
        "distrito": "Colima",
        "sennas": "casa 8"
    },
    {
        "correo": "jortiz@gmail.com",
        "tipo": "Cliente",
        "nombre": "Juana",
        "primerApellido": "Ortiz",
        "segundoApellido": "Muset",
        "nacimiento": "'10-12-1987'",
        "cantidadmascotas": "1",
        "contrasenna": "123Abc!",
        "sexo": "Masculino",
        "telefono": "2233-5784-9835",
        "tipoID": "DIMEX",
        "id": "936317414",
        "provincia": "Heredia",
        "canton": "Sarapiquí",
        "distrito": "Las Horquetas",
        "sennas": "casa 9"
    },
    {
        "correo": "ediaz@gmail.com",
        "tipo": "Cliente",
        "nombre": "Esther",
        "primerApellido": "Diaz",
        "segundoApellido": "Fernadez",
        "nacimiento": "'10-12-1987'",
        "cantidadmascotas": "2",
        "contrasenna": "123Abc!",
        "sexo": "Femenino",
        "telefono": "5566-1234-5682",
        "tipoID": "CEDULA",
        "id": "456586961",
        "provincia": "Heredia",
        "canton": "Central",
        "distrito": "Mercedes",
        "sennas": "casa 10"
    },
    {
        "correo": "agoitiz@gmail.com",
        "tipo": "Cliente",
        "nombre": "Antonio",
        "primerApellido": "Goitiz",
        "segundoApellido": "Abejaro",
        "nacimiento": "'7-2-1985'",
        "cantidadmascotas": "4",
        "contrasenna": "123Abc!",
        "sexo": "Masculino",
        "telefono": "2233-5784-9854",
        "tipoID": "DIMEX",
        "id": "341870214",
        "provincia": "San José",
        "canton": "Alajuelita",
        "distrito": "San felipe",
        "sennas": "casa 11"
    }
];

let enfermedades_admin = [{
        "enfermedad": "Sarna",
    },
    {
        "enfermedad": "Rabia",
    },
    {
        "enfermedad": "Mastitis",
    },
    {
        "enfermedad": "Parvovirus",
    },
    {
        "enfermedad": "Moquillo",
    },
];


let razas_admin = [{
        "razas": "Pastor Aleman",
    },
    {
        "razas": "Siberiano",
    },
    {
        "razas": "Standford",
    },
    {
        "razas": "Chihuahua",
    },
    {
        "razas": "Golden",
    },
];


let vacunas_admin = [{
        "vacunas": "Vacuna trivalente",
    },
    {
        "vacunas": "Vacuna contra la leptospirosis",
    },
    {
        "vacunas": "Vacuna contra la rabia",
    },
    {
        "vacunas": "Vacuna contra el moquillo canino",
    },
    {
        "vacunas": "Vacuna contra la parvovirosis	",
    },
];


const registrarCliente = (pnombreCliente, pprimerApellidoCliente, psegApellidoCliente, pgeneroCliente, ptipoId, pnumId, pformatoFecha, pcorreo, pcantMascotas, pprovincia, pcanton, pdistrito, potrasSenias) => {
    let nuevoCliente = [];

    nuevoCliente.push(pnombreCliente, pprimerApellidoCliente, psegApellidoCliente, pgeneroCliente, ptipoId, pnumId, pformatoFecha, pcorreo, pcantMascotas, pprovincia, pcanton, pdistrito, potrasSenias);

    lista_clientes.push(nuevoCliente);
}

const tipoUsuario = () => {
    let usuario = JSON.parse(sessionStorage.getItem('usuarioConectado'));
    switch (usuario.tipo) {
        case 'Administrador':
            window.location.href = 'paginaInicioAdmin.html';
            break;
        case 'Proveedor':
            window.location.href = 'paginaInicioProveedor.html';
            break;
        case 'Cliente':
            window.location.href = 'paginaInicioCliente.html';
            break;
    }
};




const iniciarSesion = (correo, contrasenna) => {
    let credencialesCorrectas = false;
    listaUsuarios.forEach(usuario => {
        if (usuario.correo == correo) {
            if (usuario.contrasenna == contrasenna) {
                credencialesCorrectas = true;
                sessionStorage.setItem('usuarioConectado', JSON.stringify(usuario));
            }
        }
    });

    if (credencialesCorrectas == true) {
        Swal.fire({
            'icon': 'success',
            'title': 'Bienvenido',
            'text': 'Ha iniciado sesión correctamente',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            tipoUsuario();
        });
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No ha podido iniciar sesión',
            'text': 'Usuario o contraseña incorrectos',
            'confirmButtonText': 'Entendido'
        });
    }
};
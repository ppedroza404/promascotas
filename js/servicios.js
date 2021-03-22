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

let mascotasClientePerfil = [{
    'nombre': 'Cloe',
    'tipo': 'Perro',
    'raza': 'Chihuahua',
    'edad': 3,
    'padecimientos': 'estreñimiento, zarna',
    'vacunas': [
        { 'nombre': 'Estemper', 'fecha': '2019-02-15', 'fabricante': 'Moderna' },
        { 'nombre': 'Rabia', 'fecha': '2019-03-23', 'fabricante': 'AstraZeneca' },
        { 'nombre': 'Hepatitis', 'fecha': '2019-05-15', 'fabricante': 'BioNTech' }
    ],
    'servicios': '15'
}]

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

let enfermedadesAdmin = [{
        "enfermedades": "Sarna",
    },
    {
        "enfermedades": "Rabia",
    },
    {
        "enfermedades": "Mastitis",
    },
    {
        "enfermedades": "Parvovirus",
    },
    {
        "enfermedades": "Moquillo",
    },
    {
        "enfermedades": "Calcivirosis",
    },
    {
        "enfermedades": "Rinotraqueitis",
    },
    {
        "enfermedades": "Leucemia",
    },
    {
        "enfermedades": "Leptospirosis",
    },
    {
        "enfermedades": "Bronquitis infecciosa	",
    },
];


let razasAdmin = [{
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
    {
        "razas": "Azul Ruso",
    },
    {
        "razas": "Birmano",
    },
    {
        "razas": "Bombay",
    },
    {
        "razas": "Balinés",
    },
    {
        "razas": "Bengalí",
    },
];


let vacunasAdmin = [{
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
    {
        "vacunas": "Vacuna leucemia",
    },
    {
        "vacunas": "Vacuna Distemper",
    },
    {
        "vacunas": "Vacuna parvovirus felino",
    },
    {
        "vacunas": "Vacuna Hepatitis infecciosa canina",
    },
    {
        "vacunas": "Vacuna calicivirus felino",
    },
];

let tiposMascotaAdmin = [{
        "tiposMascota": "Perro",
    },
    {
        "tiposMascota": "Gato",
    },
];

let informacionProveedor = [{
        "proveedor": "Pet salón",
        "tipoId": "física",
        "nombreProveedor": "Carmen",
        "primerApellidoProveedor": "Granados",
        "segundoApellidoProveedor": "Rojas",
        "tipoIdProveedor": "dimex",
        "numeroIdProveedor": "123000683974",
        "fechaNacimientoProveedor": "'7-2-1985'",
        "telefonoProveedor": "2777-3893",
        "correoElectronicoProveedor": "cagraro@gmail.com",
        "tipoServicio": "Grooming",
        "nombreRepresentanteLegal": "",
        "primerApellidoRepresentanteLegal": "",
        "segundoApellidoRepresentanteLegal": "",
        "tipoIdRepresentanteLegal": "",
        "numeroIdRepresentanteLegal": "",
        "fechaNacimientoRepresentanteLegal": "",
        "telefonoRepresentanteLegal": "",
        "correoElectronicoRepresentanteLegal": "",
        "Provincia": "San José",
        "Canton": "Montes de oca",
        "Distrito": "Sabanilla",
        "Otras señas": "De la choza del indio 600 metros al norte",
    },
    {
        "proveedor": "Petluquería",
        "tipoId": "física",
        "nombreProveedor": "Carlos",
        "primerApellidoProveedor": "Morales",
        "segundoApellidoProveedor": "Vanegas",
        "tipoIdProveedor": "física",
        "numeroIdProveedor": "1-1585-5479",
        "fechaNacimientoProveedor": "'8-10-1971'",
        "correoElectronicoProveedor": "contacto@petluqueria.com",
        "tipoServicio": "Grooming",
        "nombreRepresentanteLegal": "",
        "primerApellidoRepresentanteLegal": "",
        "segundoApellidoRepresentanteLegal": "",
        "tipoIdRepresentanteLegal": "",
        "numeroIdRepresentanteLegal": "",
        "fechaNacimientoRepresentanteLegal": "",
        "correoElectronicoRepresentanteLegal": "",
        "Provincia": "Alajuela",
        "Canton": "Alajuela",
        "Distrito": "Alajuela",
        "Otras señas": "En la calle ancha, barrio La Agonía",
    },
    {
        "proveedor": "Pet friends",
        "tipoId": "física",
        "nombreProveedor": "Claudia",
        "primerApellidoProveedor": "Carrillo",
        "segundoApellidoProveedor": "Robles",
        "tipoIdProveedor": "física",
        "numeroIdProveedor": "7-1685-1475",
        "fechaNacimientoProveedor": "'1-2-1987'",
        "correoElectronicoProveedor": "servicios@pet-friends.com",
        "tipoServicio": "Alimentos",
        "nombreRepresentanteLegal": "",
        "primerApellidoRepresentanteLegal": "",
        "segundoApellidoRepresentanteLegal": "",
        "tipoIdRepresentanteLegal": "",
        "numeroIdRepresentanteLegal": "",
        "fechaNacimientoRepresentanteLegal": "",
        "correoElectronicoRepresentanteLegal": "",
        "Provincia": "Heredia",
        "Canton": "Santo Domingo",
        "Distrito": "Santa Rosa",
        "Otras señas": "500 metros al oeste del INBio",
    },
    {
        "proveedor": "Caminantes",
        "tipoId": "física",
        "nombreProveedor": "Gertrudis",
        "primerApellidoProveedor": "Zapata",
        "segundoApellidoProveedor": "Rangel",
        "tipoIdProveedor": "dimex",
        "numeroIdProveedor": "145023698125",
        "fechaNacimientoProveedor": "'11-10-1983'",
        "correoElectronicoProveedor": "ger15za@hotmail.com",
        "tipoServicio": "Paseadores",
        "nombreRepresentanteLegal": "",
        "primerApellidoRepresentanteLegal": "",
        "segundoApellidoRepresentanteLegal": "",
        "tipoIdRepresentanteLegal": "",
        "numeroIdRepresentanteLegal": "",
        "fechaNacimientoRepresentanteLegal": "",
        "correoElectronicoRepresentanteLegal": "",
        "Provincia": "Cartago",
        "Canton": "Cartago",
        "Distrito": "Carmen",
        "Otras señas": "De la iglesia, 25 metros al oeste, calle sin salida",
    }
];

/* SIN USO

let lista_catalogo = [{


        "enfermedades": "Sarna",
        "tipo": "enfermedades",

    },
    {
        "enfermedades": "Rabia",
        "tipo": "enfermedades",

    },
    {
        "enfermedades": "Mastitis",
        "tipo": "enfermedades",

    },
    {
        "enfermedades": "Parvovirus",
        "tipo": "enfermedades",

    },
    {
        "enfermedades": "Moquillo",
        "tipo": "enfermedades",

    },
    {
        "razas": "Pastor Aleman",
        "tipo": "razas",


    },
    {
        "razas": "Siberiano",
        "tipo": "razas",

    },
    {
        "razas": "Standford",
        "tipo": "razas",

    },
    {
        "razas": "Chihuahua",
        "tipo": "razas",

    },
    {
        "razas": "Golden",
        "tipo": "razas",

    },
    {
        "vacunas": "Vacuna trivalente",
        "tipo": "vacunas",

    },
    {
        "vacunas": "Vacuna contra la leptospirosis",
        "tipo": "vacunas",

    },
    {
        "vacunas": "Vacuna contra la rabia",
        "tipo": "vacunas",

    },
    {
        "vacunas": "Vacuna contra el moquillo canino",
        "tipo": "vacunas",

    },
    {
        "vacunas": "Vacuna contra la parvovirosis	",
        "tipo": "vacunas",

    },
];
*/

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
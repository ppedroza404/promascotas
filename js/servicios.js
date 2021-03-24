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
        'tipo': 'Perro',
        'raza': 'Chihuahua',
        'edad': '3 meses',
        'servicios': '15',
        'correo': 'adeblas@gmail.com',
        'genero': 'Hembra',
        'padecimientos': 'estreñimiento, zarna',
        'vacunas': [
            { 'nombre': 'Estemper', 'fecha': '2019-02-15', 'fabricante': 'Moderna' },
            { 'nombre': 'Rabia', 'fecha': '2019-03-23', 'fabricante': 'AstraZeneca' },
            { 'nombre': 'Hepatitis', 'fecha': '2019-05-15', 'fabricante': 'BioNTech' }
        ],
    },
    {
        'nombre': 'Papi',
        'tipo': 'Perro',
        'raza': 'Chihuahua',
        'edad': '3 meses',
        'servicios': '13',
        'correo': 'cboher@gmail.com',
        'genero': 'Macho',
        'padecimientos': 'estreñimiento, zarna',
        'vacunas': [
            { 'nombre': 'Estemper', 'fecha': '2019-02-15', 'fabricante': 'Moderna' },
            { 'nombre': 'Rabia', 'fecha': '2019-03-23', 'fabricante': 'AstraZeneca' },
            { 'nombre': 'Hepatitis', 'fecha': '2019-05-15', 'fabricante': 'BioNTech' }
        ],
    },
    {
        'nombre': 'Oreo',
        'tipo': 'Gato',
        'raza': 'Persa',
        'edad': '3 meses',
        'servicios': '5',
        'correo': 'cboher@gmail.com',
        'genero': 'Hembra',
        'padecimientos': 'estreñimiento, zarna',
        'vacunas': [
            { 'nombre': 'Estemper', 'fecha': '2019-02-15', 'fabricante': 'Moderna' },
            { 'nombre': 'Rabia', 'fecha': '2019-03-23', 'fabricante': 'AstraZeneca' },
            { 'nombre': 'Hepatitis', 'fecha': '2019-05-15', 'fabricante': 'BioNTech' }
        ],
    },
    {
        'nombre': 'Corchito',
        'tipo': 'Gato',
        'raza': 'Esfinge',
        'edad': '3 meses',
        'servicios': '35',
        'correo': 'epurti@gmail.com',
        'genero': 'Macho',
        'vacunas': [
            { 'nombre': 'Estemper', 'fecha': '2019-02-15', 'fabricante': 'Moderna' },
            { 'nombre': 'Rabia', 'fecha': '2019-03-23', 'fabricante': 'AstraZeneca' },
            { 'nombre': 'Hepatitis', 'fecha': '2019-05-15', 'fabricante': 'BioNTech' }
        ],
    },
    {
        'nombre': 'Figaro',
        'tipo': 'Gato',
        'raza': 'Bengala',
        'edad': '3 meses',
        'servicios': '15',
        'correo': 'epurti@gmail.com',
        'genero': 'Hembra',
        'padecimientos': 'estreñimiento, zarna',
        'vacunas': [
            { 'nombre': 'Estemper', 'fecha': '2019-02-15', 'fabricante': 'Moderna' },
            { 'nombre': 'Rabia', 'fecha': '2019-03-23', 'fabricante': 'AstraZeneca' },
            { 'nombre': 'Hepatitis', 'fecha': '2019-05-15', 'fabricante': 'BioNTech' }
        ],
    },
    {
        'nombre': 'Cosmo',
        'tipo': 'Perro',
        'raza': 'Siberiano',
        'edad': '3 meses',
        'servicios': '27',
        'correo': 'epurti@gmail.com',
        'genero': 'Macho',
        'padecimientos': 'estreñimiento, zarna',
        'vacunas': [
            { 'nombre': 'Estemper', 'fecha': '2019-02-15', 'fabricante': 'Moderna' },
            { 'nombre': 'Rabia', 'fecha': '2019-03-23', 'fabricante': 'AstraZeneca' }
        ],
    },
    {
        'nombre': 'Kitty',
        'tipo': 'Gato',
        'raza': 'Angola',
        'edad': '3 meses',
        'servicios': '23',
        'correo': 'epurti@gmail.com',
        'genero': 'Hembra',
        'padecimientos': 'estreñimiento, zarna',
        'vacunas': [
            { 'nombre': 'Estemper', 'fecha': '2019-02-15', 'fabricante': 'Moderna' },
            { 'nombre': 'Rabia', 'fecha': '2019-03-23', 'fabricante': 'AstraZeneca' },
            { 'nombre': 'Hepatitis', 'fecha': '2019-05-15', 'fabricante': 'BioNTech' }
        ],
    },
    {
        'nombre': 'Orus',
        'tipo': 'Perro',
        'raza': 'Standford',
        'edad': '3 meses',
        'servicios': '3',
        'correo': 'epurti@gmail.com',
        'genero': 'Hembra',
        'padecimientos': 'estreñimiento, zarna',
        'vacunas': [
            { 'nombre': 'Estemper', 'fecha': '2019-02-15', 'fabricante': 'Moderna' },
            { 'nombre': 'Rabia', 'fecha': '2019-03-23', 'fabricante': 'AstraZeneca' },
            { 'nombre': 'Hepatitis', 'fecha': '2019-05-15', 'fabricante': 'BioNTech' }
        ],
    },
    {
        'nombre': 'Max',
        'tipo': 'Perro',
        'raza': 'Standford',
        'edad': '3 meses',
        'servicios': '7',
        'correo': 'jortiz@gmail.com',
        'genero': 'Macho',
        'padecimientos': 'estreñimiento, zarna',
        'vacunas': [
            { 'nombre': 'Estemper', 'fecha': '2019-02-15', 'fabricante': 'Moderna' },
            { 'nombre': 'Rabia', 'fecha': '2019-03-23', 'fabricante': 'AstraZeneca' },
            { 'nombre': 'Hepatitis', 'fecha': '2019-05-15', 'fabricante': 'BioNTech' }
        ],
    },
    {
        'nombre': 'Terry',
        'tipo': 'Perro',
        'raza': 'Golden',
        'edad': '3 meses',
        'servicios': '8',
        'correo': 'jortiz@gmail.com',
        'genero': 'Hembra',
        'padecimientos': 'estreñimiento, zarna',
        'vacunas': [
            { 'nombre': 'Estemper', 'fecha': '2019-02-15', 'fabricante': 'Moderna' },
            { 'nombre': 'Rabia', 'fecha': '2019-03-23', 'fabricante': 'AstraZeneca' },
            { 'nombre': 'Hepatitis', 'fecha': '2019-05-15', 'fabricante': 'BioNTech' }
        ],
    }
]


let listaUsuarios = [
    { "Estado": "Activo", "correo": "admin@promascotas.com", "tipo": "Administrador", "nombre": "Admin", "primerApellido": "Admin", "segundoApellido": "Admin", "nacimiento": "10-12-1987'", "cantidadmascotas": "0", "contrasenna": "123Abc!", "sexo": "Otro", "telefono": "5555-5555", "tipoID": "JURIDICA", "id": "999999999", "provincia": "San Jose", "canton": "Escazu", "distrito": "Escazu", "sennas": "casa 1", "n_negocio": "", "negocio_tipo": "", "id_negocio": "", "r_legal_Nombre": "", "r_legalaPapellido": "", "r_legalaSapellido": "", "r_legalatipoid": "", "r_legalanid": "", "r_legalanacimiento": "", "r_legacorreo_email": "", "n_descr": "" },
    { "Estado": "Activo", "correo": "mmatamoro@gmail.com", "tipo": "Proveedor", "nombre": "Maria", "primerApellido": "Trivez", "segundoApellido": "Matamoro", "nacimiento": "09-20-1973'", "cantidadmascotas": "0", "contrasenna": "123Abc!", "sexo": "Femenino", "telefono": "1234-5678", "tipoID": "CEDULA", "id": "925069023", "provincia": "San Jose", "canton": "Escazu", "distrito": "San atonio", "sennas": "casa 12", "n_negocio": "macotas y mas", "negocio_tipo": "Juridica", "id_negocio": "555555", "r_legal_Nombre": "karen", "r_legalaPapellido": "Kiros", "r_legalaSapellido": "Kalamaro", "r_legalatipoid": "Cedula", "r_legalanid": "1501764518", "r_legalanacimiento": "11/03/1980", "r_legacorreo_email": "mascotas@gmail.com", "n_descr": "Negocio enfocado en el servico a las mascotas" },
    { "Estado": "Activo", "correo": "rcargua@gmail.com", "tipo": "Proveedor", "nombre": "Rosa", "primerApellido": "Ripado", "segundoApellido": "Cargua", "nacimiento": "03-11-1991'", "cantidadmascotas": "0", "contrasenna": "123Abc!", "sexo": "Femenino", "telefono": "5784-4433", "tipoID": "CEDULA", "id": "934480785", "provincia": "Heredia", "canton": "Belen", "distrito": "La Ribera", "sennas": "casa 13", "n_negocio": "mercado mascotas", "negocio_tipo": "Juridica", "id_negocio": "666666", "r_legal_Nombre": "Rosa", "r_legalaPapellido": "Rosales", "r_legalaSapellido": "Reues", "r_legalatipoid": "Dimex", "r_legalanid": "1000064518", "r_legalanacimiento": "11/04/1980", "r_legacorreo_email": "mercadomascotas@gmail.com", "n_descr": "Negocio enfocado en el servico a las mascotas" },
    { "Estado": "Suspendido", "correo": "jsarsa@gamil.com", "tipo": "Proveedor", "nombre": "Jose", "primerApellido": "Baldor", "segundoApellido": "Sarsa", "nacimiento": "10-12-1987'", "cantidadmascotas": "0", "contrasenna": "123Abc!", "sexo": "Masculino", "telefono": "1234-5679", "tipoID": "CEDULA", "id": "459378283", "provincia": "San Jose", "canton": "Escazu", "distrito": "San Rafael", "sennas": "casa 14", "n_negocio": "juguete animal", "negocio_tipo": "", "id_negocio": "", "r_legal_Nombre": "", "r_legalaPapellido": "", "r_legalaSapellido": "", "r_legalatipoid": "", "r_legalanid": "", "r_legalanacimiento": "", "r_legacorreo_email": "", "n_descr": "" },
    { "Estado": "Pendiente", "correo": "ldanus@gmail.com", "tipo": "Proveedor", "nombre": "Luisa", "primerApellido": "Danus", "segundoApellido": "Albite", "nacimiento": "10-12-1987'", "cantidadmascotas": "0", "contrasenna": "123Abc!", "sexo": "Femenino", "telefono": "5784-4434", "tipoID": "DIMEX", "id": "488010919", "provincia": "Alajuela", "canton": "Alajuela", "distrito": "Carrizal", "sennas": "casa 15", "n_negocio": "la casa de la mascota", "negocio_tipo": "", "id_negocio": "", "r_legal_Nombre": "", "r_legalaPapellido": "", "r_legalaSapellido": "", "r_legalatipoid": "", "r_legalanid": "", "r_legalanacimiento": "", "r_legacorreo_email": "", "n_descr": "" },
    { "Estado": "Pendiente", "correo": "cboher@gmail.com", "tipo": "Proveedor", "nombre": "Carmen", "primerApellido": "Boher", "segundoApellido": "Chantrero", "nacimiento": "7-2-1985'", "cantidadmascotas": "3", "contrasenna": "123Abc!", "sexo": "Femenino", "telefono": "1234-5680", "tipoID": "CEDULA", "id": "684171892", "provincia": "Heredia", "canton": "Heredia", "distrito": "Ullola", "sennas": "casa 16", "n_negocio": "perros y gatos", "negocio_tipo": "Juridica", "id_negocio": "777777", "r_legal_Nombre": "Carmen", "r_legalaPapellido": "Cerdas", "r_legalaSapellido": "Corrales", "r_legalatipoid": "Dimex", "r_legalanid": "1000064519", "r_legalanacimiento": "11/07/1980", "r_legacorreo_email": "perrosygatos@gmail.com", "n_descr": "Negocio enfocado en el servico a las mascotas" },
    { "Estado": "Activo", "correo": "adeblas@gmail.com", "tipo": "Cliente", "nombre": "Ana", "primerApellido": "Deblas", "segundoApellido": "Soto", "nacimiento": "09-20-1973'", "cantidadmascotas": "2", "contrasenna": "123Abc!", "sexo": "Femenino", "telefono": "5784-4435", "tipoID": "DIMEX", "id": "501764518", "provincia": "San Jose", "canton": "Puriscal", "distrito": "San Rafael", "sennas": "casa 7", "n_negocio": "", "negocio_tipo": "", "id_negocio": "", "r_legal_Nombre": "", "r_legalaPapellido": "", "r_legalaSapellido": "", "r_legalatipoid": "", "r_legalanid": "", "r_legalanacimiento": "", "r_legacorreo_email": "", "n_descr": "" },
    { "Estado": "Activo", "correo": "epurti@gmail.com", "tipo": "Cliente", "nombre": "Elena", "primerApellido": "Santaolaya", "segundoApellido": "Purti", "nacimiento": "03-11-1991'", "cantidadmascotas": "1", "contrasenna": "123Abc!", "sexo": "Femenino", "telefono": "1234-5681", "tipoID": "CEDULA", "id": "857356263", "provincia": "San Jose", "canton": "Tibas", "distrito": "Colima", "sennas": "casa 8", "n_negocio": "", "negocio_tipo": "", "id_negocio": "", "r_legal_Nombre": "", "r_legalaPapellido": "", "r_legalaSapellido": "", "r_legalatipoid": "", "r_legalanid": "", "r_legalanacimiento": "", "r_legacorreo_email": "", "n_descr": "" },
    { "Estado": "Suspendido", "correo": "jortiz@gmail.com", "tipo": "Cliente", "nombre": "Juana", "primerApellido": "Ortiz", "segundoApellido": "Muset", "nacimiento": "10-12-1987'", "cantidadmascotas": "1", "contrasenna": "123Abc!", "sexo": "Masculino", "telefono": "5784-9835", "tipoID": "DIMEX", "id": "936317414", "provincia": "Heredia", "canton": "Sarapiqui", "distrito": "Las Horquetas", "sennas": "casa 9", "n_negocio": "", "negocio_tipo": "", "id_negocio": "", "r_legal_Nombre": "", "r_legalaPapellido": "", "r_legalaSapellido": "", "r_legalatipoid": "", "r_legalanid": "", "r_legalanacimiento": "", "r_legacorreo_email": "", "n_descr": "" },
    { "Estado": "Suspendido", "correo": "ediaz@gmail.com", "tipo": "Cliente", "nombre": "Esther", "primerApellido": "Diaz", "segundoApellido": "Fernadez", "nacimiento": "10-12-1987'", "cantidadmascotas": "2", "contrasenna": "123Abc!", "sexo": "Femenino", "telefono": "1234-5682", "tipoID": "CEDULA", "id": "456586961", "provincia": "Heredia", "canton": "Central", "distrito": "Mercedes", "sennas": "casa 10", "n_negocio": "", "negocio_tipo": "", "id_negocio": "", "r_legal_Nombre": "", "r_legalaPapellido": "", "r_legalaSapellido": "", "r_legalatipoid": "", "r_legalanid": "", "r_legalanacimiento": "", "r_legacorreo_email": "", "n_descr": "" },
    { "Estado": "Activo", "correo": "agoitiz@gmail.com", "tipo": "Cliente", "nombre": "Antonio", "primerApellido": "Goitiz", "segundoApellido": "Abejaro", "nacimiento": "7-2-1985'", "cantidadmascotas": "4", "contrasenna": "123Abc!", "sexo": "Masculino", "telefono": "5784-9854", "tipoID": "DIMEX", "id": "341870214", "provincia": "San Jose", "canton": "Alajuelita", "distrito": "San felipe", "sennas": "casa 11", "n_negocio": "", "negocio_tipo": "", "id_negocio": "", "r_legal_Nombre": "", "r_legalaPapellido": "", "r_legalaSapellido": "", "r_legalatipoid": "", "r_legalanid": "", "r_legalanacimiento": "", "r_legacorreo_email": "", "n_descr": "" }

]

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
        "provincia": "San José",
        "canton": "Montes de oca",
        "distrito": "Sabanilla",
        "otras señas": "De la choza del indio 600 metros al norte",
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
        "telefonoProveedor": "2787-3863",
        "correoElectronicoProveedor": "contacto@petluqueria.com",
        "tipoServicio": "Grooming",
        "nombreRepresentanteLegal": "",
        "primerApellidoRepresentanteLegal": "",
        "segundoApellidoRepresentanteLegal": "",
        "tipoIdRepresentanteLegal": "",
        "numeroIdRepresentanteLegal": "",
        "fechaNacimientoRepresentanteLegal": "",
        "correoElectronicoRepresentanteLegal": "",
        "provincia": "Alajuela",
        "canton": "Alajuela",
        "distrito": "Alajuela",
        "otras señas": "En la calle ancha, barrio La Agonía",
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
        "telefonoProveedor": "8587-3893",
        "correoElectronicoProveedor": "servicios@pet-friends.com",
        "tipoServicio": "Alimentos",
        "nombreRepresentanteLegal": "",
        "primerApellidoRepresentanteLegal": "",
        "segundoApellidoRepresentanteLegal": "",
        "tipoIdRepresentanteLegal": "",
        "numeroIdRepresentanteLegal": "",
        "fechaNacimientoRepresentanteLegal": "",
        "correoElectronicoRepresentanteLegal": "",
        "provincia": "Heredia",
        "canton": "Santo Domingo",
        "distrito": "Santa Rosa",
        "otras señas": "500 metros al oeste del INBio",
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
        "telefonoProveedor": "2511-3893",
        "correoElectronicoProveedor": "ger15za@hotmail.com",
        "tipoServicio": "Paseadores",
        "nombreRepresentanteLegal": "",
        "primerApellidoRepresentanteLegal": "",
        "segundoApellidoRepresentanteLegal": "",
        "tipoIdRepresentanteLegal": "",
        "numeroIdRepresentanteLegal": "",
        "fechaNacimientoRepresentanteLegal": "",
        "correoElectronicoRepresentanteLegal": "",
        "provincia": "Cartago",
        "canton": "Cartago",
        "distrito": "Carmen",
        "otras señas": "De la iglesia, 25 metros al oeste, calle sin salida",
    },
    {
        "proveedor": "Ropa peluditos",
        "tipoId": "física",
        "nombreProveedor": "Allan",
        "primerApellidoProveedor": "Jimenez",
        "segundoApellidoProveedor": "Calderón",
        "tipoIdProveedor": "física",
        "numeroIdProveedor": "1-6598-2325",
        "fechaNacimientoProveedor": "'12-12-1980'",
        "telefonoProveedor": "8877-3523",
        "correoElectronicoProveedor": "contactenos@peluditos.com",
        "tipoServicio": "Ropa",
        "nombreRepresentanteLegal": "",
        "primerApellidoRepresentanteLegal": "",
        "segundoApellidoRepresentanteLegal": "",
        "tipoIdRepresentanteLegal": "",
        "numeroIdRepresentanteLegal": "",
        "fechaNacimientoRepresentanteLegal": "",
        "correoElectronicoRepresentanteLegal": "",
        "provincia": "San José",
        "canton": "Vasquez de Coronado",
        "distrito": "Patalillo",
        "otras señas": "Del bar el pará, 25 metros al oeste, 50 metros al sur calle con rotonda al final",
    }
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
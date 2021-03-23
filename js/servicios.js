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

let listaUsuarios = [
    { "Estado": "Activo", "correo": "admin@promascotas.com", "tipo": "Administrador", "nombre": "Admin", "primerApellido": "Admin", "segundoApellido": "Admin", "nacimiento": "10-12-1987'", "cantidadmascotas": "0", "contrasenna": "123Abc!", "sexo": "Otro", "telefono": "5555-5555", "tipoID": "JURIDICA", "id": "999999999", "provincia": "San Jose", "canton": "Escazu", "distrito": "Escazu", "sennas": "casa 1", "n_negocio": "", "negocio_tipo": "", "id_negocio": "", "r_legal_Nombre": "", "r_legalaPapellido": "", "r_legalaSapellido": "", "r_legalatipoid": "", "r_legalanid": "", "r_legalanacimiento": "", "r_legacorreo_email": "", "n_descr": "" },
    { "Estado": "Activo", "correo": "mmatamoro@gmail.com", "tipo": "Proveedor", "nombre": "Maria", "primerApellido": "Trivez", "segundoApellido": "Matamoro", "nacimiento": "09-20-1973'", "cantidadmascotas": "0", "contrasenna": "123Abc!", "sexo": "Femenino", "telefono": "1234-5678", "tipoID": "CEDULA", "id": "925069023", "provincia": "San Jose", "canton": "Escazu", "distrito": "San atonio", "sennas": "casa 12", "n_negocio": "macotas y mas", "negocio_tipo": "Juridica", "id_negocio": "555555", "r_legal_Nombre": "karen", "r_legalaPapellido": "Kiros", "r_legalaSapellido": "Kalamaro", "r_legalatipoid": "Cedula", "r_legalanid": "1501764518", "r_legalanacimiento": "11/03/1980", "r_legacorreo_email": "mascotas@gmail.com", "n_descr": "Negocio enfocado en el servico a las mascotas" },
    { "Estado": "Activo", "correo": "rcargua@gmail.com", "tipo": "Proveedor", "nombre": "Rosa", "primerApellido": "Ripado", "segundoApellido": "Cargua", "nacimiento": "03-11-1991'", "cantidadmascotas": "0", "contrasenna": "123Abc!", "sexo": "Femenino", "telefono": "5784-4433", "tipoID": "JURIDICA", "id": "934480785", "provincia": "Heredia", "canton": "Belen", "distrito": "La Ribera", "sennas": "casa 13", "n_negocio": "mercado mascotas", "negocio_tipo": "Juridica", "id_negocio": "666666", "r_legal_Nombre": "Rosa", "r_legalaPapellido": "Rosales", "r_legalaSapellido": "Reues", "r_legalatipoid": "Dimex", "r_legalanid": "1000064518", "r_legalanacimiento": "11/04/1980", "r_legacorreo_email": "mercadomascotas@gmail.com", "n_descr": "Negocio enfocado en el servico a las mascotas" },
    { "Estado": "Suspendido", "correo": "jsarsa@gamil.com", "tipo": "Proveedor", "nombre": "Jose", "primerApellido": "Baldor", "segundoApellido": "Sarsa", "nacimiento": "10-12-1987'", "cantidadmascotas": "0", "contrasenna": "123Abc!", "sexo": "Masculino", "telefono": "1234-5679", "tipoID": "JURIDICA", "id": "459378283", "provincia": "San Jose", "canton": "Escazu", "distrito": "San Rafael", "sennas": "casa 14", "n_negocio": "juguete animal", "negocio_tipo": "", "id_negocio": "", "r_legal_Nombre": "", "r_legalaPapellido": "", "r_legalaSapellido": "", "r_legalatipoid": "", "r_legalanid": "", "r_legalanacimiento": "", "r_legacorreo_email": "", "n_descr": "" },
    { "Estado": "Pendiente", "correo": "ldanus@gmail.com", "tipo": "Proveedor", "nombre": "Luisa", "primerApellido": "Danus", "segundoApellido": "Albite", "nacimiento": "10-12-1987'", "cantidadmascotas": "0", "contrasenna": "123Abc!", "sexo": "Femenino", "telefono": "5784-4434", "tipoID": "DIMEX", "id": "488010919", "provincia": "Alajuela", "canton": "Alajuela", "distrito": "Carrizal", "sennas": "casa 15", "n_negocio": "la casa de la mascota", "negocio_tipo": "", "id_negocio": "", "r_legal_Nombre": "", "r_legalaPapellido": "", "r_legalaSapellido": "", "r_legalatipoid": "", "r_legalanid": "", "r_legalanacimiento": "", "r_legacorreo_email": "", "n_descr": "" },
    { "Estado": "Pendiente", "correo": "cboher@gmail.com", "tipo": "Cliente", "nombre": "Carmen", "primerApellido": "Boher", "segundoApellido": "Chantrero", "nacimiento": "7-2-1985'", "cantidadmascotas": "3", "contrasenna": "123Abc!", "sexo": "Femenino", "telefono": "1234-5680", "tipoID": "CEDULA", "id": "684171892", "provincia": "Heredia", "canton": "Heredia", "distrito": "Ullola", "sennas": "casa 16", "n_negocio": "perros y gatos", "negocio_tipo": "Juridica", "id_negocio": "777777", "r_legal_Nombre": "Carmen", "r_legalaPapellido": "Cerdas", "r_legalaSapellido": "Corrales", "r_legalatipoid": "Dimex", "r_legalanid": "1000064519", "r_legalanacimiento": "11/07/1980", "r_legacorreo_email": "perrosygatos@gmail.com", "n_descr": "Negocio enfocado en el servico a las mascotas" },
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
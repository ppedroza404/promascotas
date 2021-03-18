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
        "nombre": "admin",
        "primerApellido": "admin",
        "segundoApellido": "admin",
        "nacimiento": "'10-12-1987'",
        "cantidadmascotas": "0",
        "contrasenna": "123Abc!",
        "sexo": "OTRO",
        "telefono": "5555-5555-5555",
        "tipoID": "JURIDICA",
        "id": "999999999",
        "provincia": "San José",
        "canton": "Escazú",
        "distrito": "Escazú",
        "sennas": "casa 1"
    },
    {
        "correo": "MMATAMORO@GMAIL.COM",
        "tipo": "Proveedor",
        "nombre": "Maria",
        "primerApellido": "TRIVEZ",
        "segundoApellido": "MATAMORO",
        "nacimiento": "'09-20-1973'",
        "cantidadmascotas": "0",
        "contrasenna": "123Abc!",
        "sexo": "FEMENINO",
        "telefono": "2233-1234-5678",
        "tipoID": "CEDULA",
        "id": "925069023",
        "provincia": "Heredia",
        "canton": "Santo Domingo",
        "distrito": "Santa Rosa",
        "sennas": "casa 2"
    },
    {
        "correo": "RCARGUA@GMAIL.COM",
        "tipo": "Proveedor",
        "nombre": "Rosa",
        "primerApellido": "RIPADO",
        "segundoApellido": "CARGUA",
        "nacimiento": "'03-11-1991'",
        "cantidadmascotas": "0",
        "contrasenna": "123Abc!",
        "sexo": "FEMENINO",
        "telefono": "2233-5784-4433",
        "tipoID": "JURIDICA",
        "id": "934480785",
        "provincia": "San José",
        "canton": "Puriscal",
        "distrito": "Mercedes sur",
        "sennas": "casa 3"
    },
    {
        "correo": "JSARSA@GAMIL.COM",
        "tipo": "Proveedor",
        "nombre": "Jose",
        "primerApellido": "BALDOR",
        "segundoApellido": "SARSA",
        "nacimiento": "'10-12-1987'",
        "cantidadmascotas": "0",
        "contrasenna": "123Abc!",
        "sexo": "MASCULINO",
        "telefono": "5566-1234-5679",
        "tipoID": "JURIDICA",
        "id": "459378283",
        "provincia": "Alajuela",
        "canton": "Central",
        "distrito": "Alajuela",
        "sennas": "casa 4"
    },
    {
        "correo": "LDANUS@GMAIL.COM",
        "tipo": "Proveedor",
        "nombre": "Luisa",
        "primerApellido": "DANUS",
        "segundoApellido": "ALBITE",
        "nacimiento": "'10-12-1987'",
        "cantidadmascotas": "0",
        "contrasenna": "123Abc!",
        "sexo": "FEMENINO",
        "telefono": "2233-5784-4434",
        "tipoID": "DIMEX",
        "id": "488010919",
        "provincia": "Alajuela",
        "canton": "Central",
        "distrito": "Carrizal",
        "sennas": "casa 5"
    },
    {
        "correo": "CBOHER@GMAIL.COM",
        "tipo": "Cliente",
        "nombre": "Carmen",
        "primerApellido": "BOHER",
        "segundoApellido": "CHANTRERO",
        "nacimiento": "'7-2-1985'",
        "cantidadmascotas": "3",
        "contrasenna": "123Abc!",
        "sexo": "FEMENINO",
        "telefono": "5566-1234-5680",
        "tipoID": "CEDULA",
        "id": "684171892",
        "provincia": "Heredia",
        "canton": "Belén",
        "distrito": "La Ribera",
        "sennas": "casa 6"
    },
    {
        "correo": "ADEBLAS@GMAIL.COM",
        "tipo": "Cliente",
        "nombre": "Ana",
        "primerApellido": "DEBLAS",
        "segundoApellido": "SOTO",
        "nacimiento": "'09-20-1973'",
        "cantidadmascotas": "2",
        "contrasenna": "123Abc!",
        "sexo": "FEMENINO",
        "telefono": "2233-5784-4435",
        "tipoID": "DIMEX",
        "id": "501764518",
        "provincia": "San José",
        "canton": "Puriscal",
        "distrito": "San Rafael",
        "sennas": "casa 7"
    },
    {
        "correo": "EPURTI@GMAIL.COM",
        "tipo": "Cliente",
        "nombre": "Elena",
        "primerApellido": "SANTAOLAYA",
        "segundoApellido": "PURTI",
        "nacimiento": "'03-11-1991'",
        "cantidadmascotas": "1",
        "contrasenna": "123Abc!",
        "sexo": "FEMENINO",
        "telefono": "5566-1234-5681",
        "tipoID": "CEDULA",
        "id": "857356263",
        "provincia": "San José",
        "canton": "Tibas",
        "distrito": "Colima",
        "sennas": "casa 8"
    },
    {
        "correo": "JORTIZ@GMAIL.COM",
        "tipo": "Cliente",
        "nombre": "Juana",
        "primerApellido": "ORTIZ",
        "segundoApellido": "MUSET",
        "nacimiento": "'10-12-1987'",
        "cantidadmascotas": "1",
        "contrasenna": "123Abc!",
        "sexo": "MASCULINO",
        "telefono": "2233-5784-9835",
        "tipoID": "DIMEX",
        "id": "936317414",
        "provincia": "Heredia",
        "canton": "Sarapiquí",
        "distrito": "Las Horquetas",
        "sennas": "casa 9"
    },
    {
        "correo": "EDIAZ@GMAIL.COM",
        "tipo": "Cliente",
        "nombre": "Esther",
        "primerApellido": "DIAZ",
        "segundoApellido": "FERNADEZ",
        "nacimiento": "'10-12-1987'",
        "cantidadmascotas": "2",
        "contrasenna": "123Abc!",
        "sexo": "FEMENINO",
        "telefono": "5566-1234-5682",
        "tipoID": "CEDULA",
        "id": "456586961",
        "provincia": "Heredia",
        "canton": "Central",
        "distrito": "Mercedes",
        "sennas": "casa 10"
    },
    {
        "correo": "AGOITIZ@GMAIL.COM",
        "tipo": "Cliente",
        "nombre": "Antonio",
        "primerApellido": "GOITIZ",
        "segundoApellido": "ABEJARO",
        "nacimiento": "'7-2-1985'",
        "cantidadmascotas": "4",
        "contrasenna": "123Abc!",
        "sexo": "MASCULINO",
        "telefono": "2233-5784-9854",
        "tipoID": "DIMEX",
        "id": "341870214",
        "provincia": "San José",
        "canton": "Alajuelita",
        "distrito": "San felipe",
        "sennas": "casa 11"
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
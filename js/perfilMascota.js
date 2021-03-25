'use strict';
/*const btnRegistrarMascota = document.querySelector('#btn-registrar');

//Función para habilitar o deshabilitar el select de razas según el tipo 
const tipoMascota = document.querySelector('#slt-tipoMascota');
const gatoDiv = document.querySelector('#div-razaGato');
const perroDiv = document.querySelector('#div-razaPerro');

const enableSelect = () => {
    if (tipoMascota.value !== 'Perro') {

        gatoDiv.classList.add('mostrar');
        gatoDiv.classList.remove('ocultar');
        perroDiv.classList.add('ocultar');
        perroDiv.classList.remove('mostrar');
        console.log('Gato');

    } else {
        gatoDiv.classList.add('ocultar');
        gatoDiv.classList.remove('mostrar');
        perroDiv.classList.add('mostrar');
        perroDiv.classList.remove('ocultar');
        console.log('Perro');
    }

};

enableSelect();
tipoMascota.addEventListener('change', enableSelect);*/

//Vacunas

const tabla = document.querySelector('#tbl-mascotas tbody');
const inputTipoMascota1 = document.querySelector('#txt-tipoMascota');
const inputNombreMascota1 = document.querySelector('#h3-nombreMascota');
const inputRaza1 = document.querySelector('#txt-raza');
const inputEdad1 = document.querySelector('#txt-edad');
const inputPadecimientos1 = document.querySelector('#txt-padecimientos');


const mostrarTabla = () => {
    mascotasCliente3.forEach(mascota => {

        inputNombreMascota1.innerHTML = mascota.nombre;
        inputTipoMascota1.value = mascota.tipo;
        inputRaza1.value = mascota.raza;
        inputEdad1.value = mascota.edad;
        inputPadecimientos1.value = mascota.padecimientos;


        mascota.vacunas.forEach(vacuna => {


            let fila = tabla.insertRow();
            fila.insertCell().innerHTML = vacuna.nombre;
            fila.insertCell().innerHTML = vacuna.fecha;
            fila.insertCell().innerHTML = vacuna.fabricante;

        });


    });
};
mostrarTabla();

//Variables validación
const btnGuardarMascota = document.querySelector('#btn-guardarMascota');

const inputTipoMascota = document.querySelector('#txt-tipoMascota');
const inputRaza = document.querySelector('#txt-raza');
const inputPadecimientos = document.querySelector('#txt-padecimientos');
const inputEdad = document.querySelector('#txt-edad');
const inputNombreVacuna = document.querySelector('#txt-nombreVacuna');
const inputFechaVacuna = document.querySelector('#txt-fechaVacuna');
const inputFabricante = document.querySelector('#txt-fabricante');
const inputNombreVacuna1 = document.querySelector('#txt-nombreVacuna1');
const inputFechaVacuna1 = document.querySelector('#txt-fechaVacuna1');
const inputFabricante1 = document.querySelector('#txt-fabricante1');



//funcion para agregar vacunas
const btnVacuna = document.querySelector('#btn-vacuna1');
const btnVacuna1Mas = document.querySelector('#btn-vacuna1Mas');
const btnVacuna1Menos = document.querySelector('#btn-vacuna1Menos');
const vacuna1 = document.querySelector('#div-vacuna1');




vacuna1.classList.add('ocultar');

btnVacuna1Menos.classList.add('ocultar');





const mostrarVacuna = () => {

    vacuna1.classList.remove('ocultar');

    btnVacuna1Menos.classList.remove('ocultar');
};

btnVacuna.addEventListener('click', mostrarVacuna);


const ocultarVacuna1 = () => {

    vacuna1.classList.add('ocultar');

    btnVacuna1Menos.classList.add('ocultar');
    inputNombreVacuna1.value = '';
    inputFechaVacuna1.value = '';
    inputFabricante1.value = '';

};

btnVacuna1Menos.addEventListener('click', ocultarVacuna1);


//Validar el form

const validar = () => {
    let error = false;





    if (inputTipoMascota.value == '') {
        error = true;
        inputTipoMascota.classList.add('error');
    } else {
        inputTipoMascota.classList.remove('error');
    }
    if (inputRaza.value == '') {
        error = true;
        inputRaza.classList.add('error');

    } else {
        inputRaza.classList.remove('error');
    }

    if (inputPadecimientos.value == '') {
        error = true;
        inputPadecimientos.classList.add('error');
    } else {
        inputPadecimientos.classList.remove('error');
    }
    if (inputEdad.value == '') {
        error = true;
        inputEdad.classList.add('error');
    } else {
        inputEdad.classList.remove('error');
    }
    if ((inputNombreVacuna.value == '') && ((inputFechaVacuna.value !== '') || (inputFabricante.value !== ''))) {
        error = true;
        inputNombreVacuna.classList.add('error');
    } else {
        inputNombreVacuna.classList.remove('error');
    }

    if ((inputFechaVacuna.value == '') && ((inputNombreVacuna.value !== '') || (inputFabricante.value !== ''))) {
        error = true;
        inputFechaVacuna.classList.add('error');
    } else {
        inputFechaVacuna.classList.remove('error');
    }

    if ((inputFabricante.value == '') && ((inputNombreVacuna.value !== '') || (inputFechaVacuna.value !== ''))) {
        error = true;
        inputFabricante.classList.add('error');
    } else {
        inputFabricante.classList.remove('error');
    }

    if ((inputNombreVacuna1.value == '') && ((inputFechaVacuna1.value !== '') || (inputFabricante1.value !== ''))) {
        error = true;
        inputNombreVacuna1.classList.add('error');
    } else {
        inputNombreVacuna1.classList.remove('error');
    }

    if ((inputFechaVacuna1.value == '') && ((inputNombreVacuna1.value !== '') || (inputFabricante1.value !== ''))) {
        error = true;
        inputFechaVacuna1.classList.add('error');
    } else {
        inputFechaVacuna1.classList.remove('error');
    }

    if ((inputFabricante1.value == '') && ((inputNombreVacuna1.value !== '') || (inputFechaVacuna1.value !== ''))) {
        error = true;
        inputFabricante1.classList.add('error');
    } else {
        inputFabricante1.classList.remove('error');
    }

    if (error == false) {
        imprimir();
    } else {
        Swal.fire({
            'icon': 'warning',
            'title': 'No se pudo registrar su solicitud',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    }

};



const imprimir = () => {


    let tipoMascota = inputTipoMascota.value;
    let raza = inputRaza.value;
    let padecimientos = inputPadecimientos.value;
    let nombreVacuna = inputNombreVacuna.value;
    let fechaVacuna = inputFechaVacuna.value;
    let fabricante = inputFabricante.value;
    let nombreVacuna1 = inputNombreVacuna1.value;
    let fechaVacuna1 = inputFechaVacuna1.value;
    let fabricante1 = inputFabricante1.value;
    let edad = inputEdad.value;

    console.log('Información de la mascota');
    console.log('=====================');

    console.log('Tipo: ' + tipoMascota);
    console.log('Raza: ' + raza);
    console.log('Edad: ' + edad);
    console.log('Padecimientos: ' + padecimientos);

    if (inputNombreVacuna.value != '') {
        console.log('');
        console.log('Vacunas nuevas');
        console.log('=====================');

        console.log('Nombre: ' + nombreVacuna);
        console.log('Fecha de aplicación: ' + fechaVacuna);
        console.log('Fabricante: ' + fabricante);
    }
    if (inputNombreVacuna1.value != '') {
        console.log('Nombre: ' + nombreVacuna1);
        console.log('Fecha de aplicación: ' + fechaVacuna1);
        console.log('Fabricante: ' + fabricante1);
    }



    Swal.fire({
        'icon': 'success',
        'title': 'Su solicitud se proceso con éxito',
        'text': 'Pronto recibirá un correo electrónico',
        'confirmButtonText': 'Entendido'
    }).then(() => {
        window.location.href = 'listarMascotasCliente.html';
    });

};

btnGuardarMascota.addEventListener('click', validar);
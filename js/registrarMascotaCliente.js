'use strict';
const btnRegistrarMascota = document.querySelector('#btn-registrar');

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


    } else {
        gatoDiv.classList.add('ocultar');
        gatoDiv.classList.remove('mostrar');
        perroDiv.classList.add('mostrar');
        perroDiv.classList.remove('ocultar');

    }

};

enableSelect();
tipoMascota.addEventListener('change', enableSelect);

//Variables validación
const inputImagen = document.querySelector('#input-imagen');
const inputNombreMascota = document.querySelector('#txt-nombreMascota');
const inputTipoMascota = document.querySelector('#slt-tipoMascota');
const inputRazaGato = document.querySelector('#slt-razaGato');
const inputRazaPerro = document.querySelector('#slt-razaPerro');
const inputPadecimientos = document.querySelector('#txt-padecimientos');
const inputNombreVacuna = document.querySelector('#txt-nombreVacuna');
const inputFechaVacuna = document.querySelector('#txt-fechaVacuna');
const inputFabricante = document.querySelector('#txt-fabricante');


//Validar el form

const validar = () => {
    let error = false;


    if (inputImagen.value == '') {
        error = true;
        inputImagen.classList.add('error');
    } else {
        inputImagen.classList.remove('error');
    }
    if (inputNombreMascota.value == '') {
        error = true;
        inputNombreMascota.classList.add('error');
    } else {
        inputNombreMascota.classList.remove('error');
    }

    if (inputTipoMascota.value == '') {
        error = true;
        inputTipoMascota.classList.add('error');
    } else {
        inputTipoMascota.classList.remove('error');
    }
    if (inputRazaGato.value == '') {
        if (tipoMascota.value !== 'Gato') {

        } else {
            error = true;
            inputRazaGato.classList.add('error');
        }


    } else {
        inputRazaGato.classList.remove('error');
    }
    if (inputRazaPerro.value == '') {
        if (tipoMascota.value !== 'Perro') {

        } else {
            error = true;
            inputRazaPerro.classList.add('error');
        }

    } else {
        inputRazaPerro.classList.remove('error');
    }
    /*if (inputPadecimientos.value == '') {
        error = true;
        inputPadecimientos.classList.add('error');
    } else {
        inputPadecimientos.classList.remove('error');
    }*/
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
    let imagen = inputImagen.value;
    let nombreMascota = inputNombreMascota.value;
    let tipoMascota = inputTipoMascota.value;
    let razaGato = inputRazaGato.value;
    let razaPerro = inputRazaPerro.value;
    //let padecimientos = inputPadecimientos.value;
    //let nombreVacuna = nombreVacuna.value;
    //let fechaVacuna = fechaVacuna.value;
    //let fabricante = fabricante.value;
    //let edad = calcularEdad(fechaNacimiento);


    console.log(imagen);
    console.log(nombreMascota);
    console.log(tipoMascota);
    console.log(razaGato);
    console.log(razaPerro);
    //console.log(padecimientos);
    //console.log(nombreVacuna);
    //console.log(fechaVacuna);
    //console.log(fabricante);



    Swal.fire({
        'icon': 'success',
        'title': 'Su solicitud se proceso con éxito',
        'text': 'Pronto recibirá un correo electrónico',
        'confirmButtonText': 'Entendido'
    }).then(() => {
        window.location.href = 'inicio-sesion.html';
    });

};

btnRegistrarMascota.addEventListener('click', validar);
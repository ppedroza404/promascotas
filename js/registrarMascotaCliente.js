'use strict';
const btnRegistrarMascota = document.querySelector('#btn-registrar');
const tipoMascota = document.querySelector('#slt-tipoMascota');
const gatoDiv = document.querySelector('#div-razaGato');
const perroDiv = document.querySelector('#div-razaPerro');
const selectGato = document.querySelector('#slt-razaGato');
const selectPerro = document.querySelector('#slt-razaPerro');
const selectPadecimiento1 = document.querySelector('#slt-padecimiento1');
const selectPadecimiento2 = document.querySelector('#slt-padecimiento2');
const selectPadecimiento3 = document.querySelector('#slt-padecimiento3');
const btnPadecimientos = document.querySelector('#btn-padecimientos');
const selectVacuna1 = document.querySelector('#slt-vacuna1');
const selectVacuna2 = document.querySelector('#slt-vacuna2');
const selectVacuna3 = document.querySelector('#slt-vacuna3');
let usuarioStorage = JSON.parse(sessionStorage.getItem('usuarioConectado'));


const enableSelectRazas = () => {
    selectGato.disabled = false;
    selectPerro.disabled = false;
}

tipoMascota.addEventListener('change', enableSelectRazas);

//funcion para llenar las razas según su tipo
let razasAdmin2 = [];
const obtenerRaza = async() => {
    razasAdmin2 = await listarRazas();
};

obtenerRaza();

const llenarSelectRazas = async() => {


    razasAdmin2.forEach(item => {

        item.tipomascota.forEach(tipo => {
            if (tipo.tipo === 'Gato') {
                let option = document.createElement("option");
                option.text = item.raza;
                option.value = item.raza;
                selectGato.add(option);
            } else {
                let option = document.createElement("option");
                option.text = item.raza;
                option.value = item.raza;
                selectPerro.add(option);
            }
        });
    });
}
tipoMascota.addEventListener('change', llenarSelectRazas);


let padecimientos2 = [];
const obtenerPadecimientos = async() => {
    padecimientos2 = await listarPadecimientos();
    llenarSelectPadecimientos2();
};

obtenerPadecimientos();



const llenarSelectPadecimientos2 = async() => {


    padecimientos2.forEach(item => {

        let option = document.createElement("option");
        option.text = item.padecimiento;
        option.value = item.padecimiento;
        selectPadecimiento1.add(option);
    });

    padecimientos2.forEach(item => {

        let option = document.createElement("option");
        option.text = item.padecimiento;
        option.value = item.padecimiento;
        selectPadecimiento2.add(option);
    });

    padecimientos2.forEach(item => {

        let option = document.createElement("option");
        option.text = item.padecimiento;
        option.value = item.padecimiento;
        selectPadecimiento3.add(option);
    });
};

let vacunas2 = [];
const obtenerVacunas = async() => {
    vacunas2 = await listarVacunas();
    llenarSelectVacunas2();
};

obtenerVacunas();
const llenarSelectVacunas2 = async() => {


    vacunas2.forEach(item => {

        let option = document.createElement("option");
        option.text = item.nombre;
        option.value = item.nombre;
        selectVacuna1.add(option);
    });

    vacunas2.forEach(item => {

        let option = document.createElement("option");
        option.text = item.nombre;
        option.value = item.nombre;
        selectVacuna2.add(option);
    });

    vacunas2.forEach(item => {

        let option = document.createElement("option");
        option.text = item.nombre;
        option.value = item.nombre;
        selectVacuna3.add(option);
    });
};


//Función para habilitar o deshabilitar el select de razas según el tipo 

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
const inputFechaNacimiento = document.querySelector('#txt-fechaNacimiento');
const inputNombreVacuna = document.querySelector('#txt-nombreVacuna');
const inputFechaVacuna = document.querySelector('#txt-fechaVacuna');
const inputFabricante = document.querySelector('#txt-fabricante');
const inputNombreVacuna1 = document.querySelector('#txt-nombreVacuna1');
const inputFechaVacuna1 = document.querySelector('#txt-fechaVacuna1');
const inputFabricante1 = document.querySelector('#txt-fabricante1');
const inputNombreVacuna2 = document.querySelector('#txt-nombreVacuna2');
const inputFechaVacuna2 = document.querySelector('#txt-fechaVacuna2');
const inputFabricante2 = document.querySelector('#txt-fabricante2');
const inputNombreVacuna3 = document.querySelector('#txt-nombreVacuna3');
const inputFechaVacuna3 = document.querySelector('#txt-fechaVacuna3');
const inputFabricante3 = document.querySelector('#txt-fabricante3');
const inputNombreVacuna4 = document.querySelector('#txt-nombreVacuna4');
const inputFechaVacuna4 = document.querySelector('#txt-fechaVacuna4');
const inputFabricante4 = document.querySelector('#txt-fabricante4');


/*
//funcion para agregar vacunas
const btnVacuna = document.querySelector('#btn-vacuna1');
const btnVacuna1Mas = document.querySelector('#btn-vacuna1Mas');
const btnVacuna1Menos = document.querySelector('#btn-vacuna1Menos');
const vacuna1 = document.querySelector('#div-vacuna1');
const btnVacuna2Mas = document.querySelector('#btn-vacuna2Mas');
const btnVacuna2Menos = document.querySelector('#btn-vacuna2Menos');
const vacuna2 = document.querySelector('#div-vacuna2');
const btnVacuna3Mas = document.querySelector('#btn-vacuna3Mas');
const btnVacuna3Menos = document.querySelector('#btn-vacuna3Menos');
const vacuna3 = document.querySelector('#div-vacuna3');
const btnVacuna4Menos = document.querySelector('#btn-vacuna4Menos');
const vacuna4 = document.querySelector('#div-vacuna4');



vacuna1.classList.add('ocultar');
btnVacuna1Mas.classList.add('ocultar');
btnVacuna1Menos.classList.add('ocultar');
vacuna4.classList.add('ocultar');
btnVacuna4Menos.classList.add('ocultar');




const mostrarVacuna = () => {

    vacuna1.classList.remove('ocultar');
    btnVacuna1Mas.classList.remove('ocultar');
    btnVacuna1Menos.classList.remove('ocultar');
};

btnVacuna.addEventListener('click', mostrarVacuna);

const mostrarVacuna3 = () => {

    vacuna4.classList.remove('ocultar');
    btnVacuna4Menos.classList.remove('ocultar');
};

btnVacuna3Mas.addEventListener('click', mostrarVacuna3);

const ocultarVacuna1 = () => {

    vacuna1.classList.add('ocultar');
    btnVacuna1Mas.classList.add('ocultar');
    btnVacuna1Menos.classList.add('ocultar');
    inputNombreVacuna1.value = '';
    inputFechaVacuna1.value = '';
    inputFabricante1.value = '';

};

btnVacuna1Menos.addEventListener('click', ocultarVacuna1);

const ocultarVacuna2 = () => {

    vacuna2.classList.add('ocultar');
    btnVacuna2Mas.classList.add('ocultar');
    btnVacuna2Menos.classList.add('ocultar');
    inputNombreVacuna2.value = '';
    inputFechaVacuna2.value = '';
    inputFabricante2.value = '';
};

btnVacuna2Menos.addEventListener('click', ocultarVacuna2);

const ocultarVacuna3 = () => {

    vacuna3.classList.add('ocultar');
    btnVacuna3Mas.classList.add('ocultar');
    btnVacuna3Menos.classList.add('ocultar');
    inputNombreVacuna3.value = '';
    inputFechaVacuna3.value = '';
    inputFabricante3.value = '';
};

btnVacuna3Menos.addEventListener('click', ocultarVacuna3);

const ocultarVacuna4 = () => {

    vacuna4.classList.add('ocultar');
    btnVacuna4Menos.classList.add('ocultar');
    inputNombreVacuna4.value = '';
    inputFechaVacuna4.value = '';
    inputFabricante4.value = '';
};

btnVacuna4Menos.addEventListener('click', ocultarVacuna4);

*/

//Validar el form

const validar2 = () => {
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
        if ((inputTipoMascota.value == 'Gato') || (inputTipoMascota.value == '')) {
            error = true;
            inputRazaGato.classList.add('error');
        }
    } else {
        inputRazaGato.classList.remove('error');
    }
    if (inputRazaPerro.value == '') {
        if ((inputTipoMascota.value == 'Perro') || (inputTipoMascota.value == '')) {
            error = true;
            inputRazaPerro.classList.add('error');
        }
    } else {
        inputRazaPerro.classList.remove('error');
    }

    if (inputFechaNacimiento.value == '') {
        error = true;
        inputFechaNacimiento.classList.add('error');
    } else {
        inputFechaNacimiento.classList.remove('error');
    }
    /*if ((inputNombreVacuna.value == '')) {
        error = true;
        inputNombreVacuna.classList.add('error');
    } else {
        inputNombreVacuna.classList.remove('error');
    }

    if ((inputFechaVacuna.value == '')) {
        error = true;
        inputFechaVacuna.classList.add('error');
    } else {
        inputFechaVacuna.classList.remove('error');
    }


    if ((inputNombreVacuna1.value == '') && ((inputFechaVacuna1.value !== ''))) {
        error = true;
        inputNombreVacuna1.classList.add('error');
    } else {
        inputNombreVacuna1.classList.remove('error');
    }

    if ((inputFechaVacuna1.value == '') && ((inputNombreVacuna1.value !== ''))) {
        error = true;
        inputFechaVacuna1.classList.add('error');
    } else {
        inputFechaVacuna1.classList.remove('error');
    }


    if ((inputNombreVacuna2.value == '') && ((inputFechaVacuna2.value !== ''))) {
        error = true;
        inputNombreVacuna2.classList.add('error');
    } else {
        inputNombreVacuna2.classList.remove('error');
    }

    if ((inputFechaVacuna2.value == '') && ((inputNombreVacuna2.value !== ''))) {
        error = true;
        inputFechaVacuna2.classList.add('error');
    } else {
        inputFechaVacuna2.classList.remove('error');
    }



    if ((inputNombreVacuna3.value == '') && ((inputFechaVacuna3.value !== ''))) {
        error = true;
        inputNombreVacuna3.classList.add('error');
    } else {
        inputNombreVacuna3.classList.remove('error');
    }

    if ((inputFechaVacuna3.value == '') && ((inputNombreVacuna3.value !== ''))) {
        error = true;
        inputFechaVacuna3.classList.add('error');
    } else {
        inputFechaVacuna3.classList.remove('error');
    }


    if ((inputNombreVacuna4.value == '') && ((inputFechaVacuna4.value !== ''))) {
        error = true;
        inputNombreVacuna4.classList.add('error');
    } else {
        inputNombreVacuna4.classList.remove('error');
    }

    if ((inputFechaVacuna4.value == '') && ((inputNombreVacuna4.value !== ''))) {
        error = true;
        inputFechaVacuna4.classList.add('error');
    } else {
        inputFechaVacuna4.classList.remove('error');
    }

*/


};

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
        if ((inputTipoMascota.value == 'Gato') || (inputTipoMascota.value == '')) {
            error = true;
            inputRazaGato.classList.add('error');
        }
    } else {
        inputRazaGato.classList.remove('error');
    }
    if (inputRazaPerro.value == '') {
        if ((inputTipoMascota.value == 'Perro') || (inputTipoMascota.value == '')) {
            error = true;
            inputRazaPerro.classList.add('error');
        }
    } else {
        inputRazaPerro.classList.remove('error');
    }

    if (inputFechaNacimiento.value == '') {
        error = true;
        inputFechaNacimiento.classList.add('error');
    } else {
        inputFechaNacimiento.classList.remove('error');
    }

    if (selectVacuna1.value !== '' && inputFechaVacuna.value == '') {
        error = true;
        inputFechaVacuna.classList.add('error');
    } else {
        inputFechaVacuna.classList.remove('error');
    }

    if (selectVacuna2.value !== '' && inputFechaVacuna1.value == '') {
        error = true;
        inputFechaVacuna1.classList.add('error');
    } else {
        inputFechaVacuna1.classList.remove('error');
    }

    if (selectVacuna3.value !== '' && inputFechaVacuna4.value == '') {
        error = true;
        inputFechaVacuna4.classList.add('error');
    } else {
        inputFechaVacuna4.classList.remove('error');
    }


    /*if ((inputNombreVacuna.value == '')) {
        error = true;
        inputNombreVacuna.classList.add('error');
    } else {
        inputNombreVacuna.classList.remove('error');
    }

    if ((inputFechaVacuna.value == '')) {
        error = true;
        inputFechaVacuna.classList.add('error');
    } else {
        inputFechaVacuna.classList.remove('error');
    }


    if ((inputNombreVacuna1.value == '') && ((inputFechaVacuna1.value !== ''))) {
        error = true;
        inputNombreVacuna1.classList.add('error');
    } else {
        inputNombreVacuna1.classList.remove('error');
    }

    if ((inputFechaVacuna1.value == '') && ((inputNombreVacuna1.value !== ''))) {
        error = true;
        inputFechaVacuna1.classList.add('error');
    } else {
        inputFechaVacuna1.classList.remove('error');
    }


    if ((inputNombreVacuna2.value == '') && ((inputFechaVacuna2.value !== ''))) {
        error = true;
        inputNombreVacuna2.classList.add('error');
    } else {
        inputNombreVacuna2.classList.remove('error');
    }

    if ((inputFechaVacuna2.value == '') && ((inputNombreVacuna2.value !== ''))) {
        error = true;
        inputFechaVacuna2.classList.add('error');
    } else {
        inputFechaVacuna2.classList.remove('error');
    }



    if ((inputNombreVacuna3.value == '') && ((inputFechaVacuna3.value !== ''))) {
        error = true;
        inputNombreVacuna3.classList.add('error');
    } else {
        inputNombreVacuna3.classList.remove('error');
    }

    if ((inputFechaVacuna3.value == '') && ((inputNombreVacuna3.value !== ''))) {
        error = true;
        inputFechaVacuna3.classList.add('error');
    } else {
        inputFechaVacuna3.classList.remove('error');
    }


    if ((inputNombreVacuna4.value == '') && ((inputFechaVacuna4.value !== ''))) {
        error = true;
        inputNombreVacuna4.classList.add('error');
    } else {
        inputNombreVacuna4.classList.remove('error');
    }

    if ((inputFechaVacuna4.value == '') && ((inputNombreVacuna4.value !== ''))) {
        error = true;
        inputFechaVacuna4.classList.add('error');
    } else {
        inputFechaVacuna4.classList.remove('error');
    }

*/

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

const calcularEdad = (nacimiento) => {
    let fechaActual = new Date();
    let edad = fechaActual.getFullYear() - nacimiento.getFullYear();

    if (fechaActual.getMonth() < nacimiento.getMonth()) {
        edad = edad - 1;
    } else {
        if ((fechaActual.getMonth() == nacimiento.getMonth()) && (fechaActual.getUTCDate() < nacimiento.getUTCDate())) {
            edad = edad - 1;
        }
    }
    return edad;
};


const imprimir = () => {
    let imagen = inputImagen.value;
    let nombreMascota = inputNombreMascota.value;
    let tipoMascota = inputTipoMascota.value;
    let razaGato;
    let razaPerro;
    if (inputTipoMascota.value == 'Gato') {
        razaGato = inputRazaGato.value;
    } else {
        razaPerro = inputRazaPerro.value;
    }


    let fechaVacuna = inputFechaVacuna.value;


    let fechaVacuna1 = inputFechaVacuna1.value;


    let fechaVacuna4 = inputFechaVacuna4.value;

    let nacimiento = new Date(inputFechaNacimiento.value);
    let edad = calcularEdad(nacimiento);
    let razaFinal;

    console.log('Información de la mascota');
    console.log('=====================');
    console.log('Imagen pefil: ' + imagen);
    console.log('Nombre: ' + nombreMascota);
    console.log('Tipo: ' + tipoMascota);
    if (inputTipoMascota.value == 'Gato') {
        console.log('Raza: ' + razaGato);
        razaFinal = razaGato;
    } else {
        console.log('Raza: ' + razaPerro);
        razaFinal = razaPerro;
    }

    console.log('Fecha de nacimiento: ' + nacimiento);
    console.log('Edad: ' + edad);
    console.log('');
    console.log('Información de las vacunas');
    console.log('=====================');



    if (selectPadecimiento1.value !== '') {
        registrarPadecimientoMascota(selectPadecimiento1.value, usuarioStorage.correo, nombreMascota);
    }
    if (selectPadecimiento2.value !== '') {
        registrarPadecimientoMascota(selectPadecimiento2.value, usuarioStorage.correo, nombreMascota);
    }
    if (selectPadecimiento3.value !== '') {
        registrarPadecimientoMascota(selectPadecimiento3.value, usuarioStorage.correo, nombreMascota);
    }

    if (selectVacuna1.value !== '') {
        registrarVacunaMascota(selectVacuna1.value, fechaVacuna, usuarioStorage.correo, nombreMascota);
    }
    if (selectVacuna2.value !== '') {
        registrarVacunaMascota(selectVacuna2.value, fechaVacuna1, usuarioStorage.correo, nombreMascota);
    }
    if (selectVacuna3.value !== '') {
        registrarVacunaMascota(selectVacuna3.value, fechaVacuna4, usuarioStorage.correo, nombreMascota);
    }



    registrarMascota(usuarioStorage.correo, inputNombreMascota.value, inputTipoMascota.value, razaFinal, inputFechaNacimiento.value, edad);

    //registrarMascota('123@gmail.com', 'doky2', 'perro', 'Chihuahua', '2018-03-20', 10);

    console.log(usuarioStorage.correo);
    console.log(inputNombreMascota.value);
    console.log(inputTipoMascota.value);
    console.log(razaFinal);
    console.log(inputFechaNacimiento.value);
    console.log(edad);


    Swal.fire({
        'icon': 'success',
        'title': 'Su solicitud se proceso con éxito',
        'confirmButtonText': 'Entendido'
    }).then(() => {
        //registrarMascota('123@gmail.com', 'doky2', 'perro', 'Chihuahua', '2018-03-20', 10);
        // window.location.href = 'inicio-sesion.html';
    });

};

btnRegistrarMascota.addEventListener('click', validar);

//cambiar imagen
const imgPerfil = document.querySelector('#img-proveedor');
const archivoCambiado = (evento) => {
    let elArchivo = evento.target.files[0];
    let reader = new FileReader();

    reader.onload = function(evt) {
        let datosImagen = evt.target.result;

        imgPerfil.src = event.target.result;
    }
    reader.readAsDataURL(elArchivo);

}
const readUrl = () => {
    let tieneArchivoApi = (window.File && window.FileReader);

    if (!tieneArchivoApi) {
        console.log('El browser no soporta API');
        return;
    }
    inputImagen.addEventListener('change', archivoCambiado)
}
window.addEventListener('load', readUrl);
'use strict';
//Menu
let headerContenedor = document.querySelector('#header');
let botonActivador = document.querySelector('#btn-menuPricipal');

botonActivador.addEventListener('click', () => {
    headerContenedor.classList.toggle('Activado')
});


//Header con clase fixed
window.onscroll = function() { funcionScroll() };
let header = document.querySelector('#header');
let headerFixed = header.offsetTop;

const funcionScroll = () => {
    if (window.pageYOffset > headerFixed) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
};




//Slider
let sliderIndice = 0;

const funcionSlider = () => {
    let i;
    let slides = document.getElementsByClassName('slide');
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    sliderIndice++;
    if (sliderIndice > slides.length) { sliderIndice = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[sliderIndice - 1].style.display = "block";

    setTimeout(funcionSlider, 8000);
};
funcionSlider();

//Validacion de Contactenos
const btn_enviar = document.querySelector('#btn-contactenos');
const txt_nombre = document.querySelector('#txt-contactenosnombre');
const txt_correo = document.querySelector('#txt-contactenoscorreo');
//const txt_telefono = document.querySelector('#txt-contactenostel');
const txt_mesaje = document.querySelector('#txt-contactenosMensaje');

let validar = () => {
    let inputs_requeridos = document.querySelectorAll('#frm-contacto [required]');
    let regexCorreo = /^[a-zA-Z.0-9]+\@{1}[a-zA-Z.]+$/;
    //let regextelefono = /^(|\d{3})(-|\s)?(\d{4})(-|\s)?(\d{4})$/;
    let error = false;

    //Ini un array con todos los objetos de clase required (todos los campos del form)
    //Valida que no esten en blanco
    for (let i = 0; i < inputs_requeridos.length; i++) {
        if (inputs_requeridos[i].value == '') {
            inputs_requeridos[i].classList.add('error');
            error = true;
        } else {
            inputs_requeridos[i].classList.remove('error');
        }
    }

    //Ini Validacion campo Correo
    if (regexCorreo.test(txt_correo.value) == false) {
        error = true;
        txt_correo.classList.add('error');
    } else {
        txt_correo.classList.remove('error');
    }
    //fin Validacion campo Correo

    //Ini Validacion campo telefono formato correcto 0000-0000
    //if (regextelefono.test(txt_telefono.value) == false) {
    //    error = true;
    //    txt_telefono.classList.add('error');
    //} else {
    //    txt_telefono.classList.remove('error');
    //}
    //fin Validacion campo Correo
    return error;
};

let limpiar = () => {
    txt_nombre.value = "";
    txt_correo.value = "";
    txt_telefono.value = "";
    txt_mesaje.value = "";
};

let obtener_datos = () => {
    let error = validar();

    if (error) {
        Swal.fire({
            'title': 'El formulario no se pudo enviar',
            'text': 'Por favor revise los campos resaltados',
            'icon': 'warning'
        });
    } else {
        console.log(txt_nombre.value);
        console.log(txt_correo.value);
        console.log(txt_mesaje.value);

        Swal.fire({
            'title': 'Proceso realizado con éxito',
            'text': 'Sus datos se enviaron adecuadamente',
            'icon': 'success'
        }).then(() => {
            limpiar();
        });
    }
};

btn_enviar.addEventListener('click', obtener_datos);

//Validacion de Contactenos
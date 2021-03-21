'use strict';
//Menu
let headerContenedor = document.querySelector('#header')
let botonActivador = document.querySelector('#btn-menuPricipal');

botonActivador.addEventListener('click', () => {
    //sessionStorage.setItem('usuarioSeleccionado', JSON.stringify(usuario));
    headerContenedor.classList.toggle('Activado')
});


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
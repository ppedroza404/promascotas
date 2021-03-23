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
'use strict';
// Inicio del header
const btnIcono = document.querySelector('#iconoId');

const mostrarNav = () => {
    let leerNav = document.getElementById('nav-colossus');
    if (leerNav.className === 'navigation') {
        leerNav.className += " responsive";
    } else {
        leerNav.className = 'navigation';
    }
};

btnIcono.addEventListener('click', mostrarNav);

// final del header
// inicio del slider
const dot1 = document.querySelector('#dot1');
const dot2 = document.querySelector('#dot2');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

const showSlides = (n) => {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
const plusSlides = (n) => {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
const currentSlide = (n) => {
    showSlides(slideIndex = n);
}



dot1.addEventListener('click', () => {
    currentSlide(1);
});
dot2.addEventListener('click', () => {
    currentSlide(2);
});
dot3.addEventListener('click', () => {
    currentSlide(3);
});
prev.addEventListener('click', () => {
    plusSlides(-1);
});
next.addEventListener('click', () => {
    plusSlides(1);
});

//final del slider

// contactenos
const btn_enviar = document.querySelector('#btn-enviar');
const txt_nombre = document.querySelector('#txt-nombre');
const txt_apellido = document.querySelector('#txt-apellido');
const txt_correo = document.querySelector('#txt-correo');
const slt_tipo_servicio = document.querySelector('#slt-tipo-servicio');
const txt_telefono = document.querySelector('#txt-tel');
const txt_fecha_proyecto = document.querySelector('#txt-fecha-proyecto');
const txt_comentario = document.querySelector('#coment');

let validar = () => {
    let inputs_requeridos = document.querySelectorAll('#frm-contacto [required]');
    let error = false;

    for (let i = 0; i < inputs_requeridos.length; i++) {
        if (inputs_requeridos[i].value == '') {
            inputs_requeridos[i].classList.add('input-error');
            error = true;
        } else {
            inputs_requeridos[i].classList.remove('input-error');
        }
    }
    if (txt_fecha_proyecto.value < new Date()) {
        txt_fecha_proyecto.classList.add('input-error');
        error = true;
    }

    return error;
};

let limpiar = () => {
    txt_nombre.value = "";
    txt_apellido.value = "";
    txt_correo.value = "";
    slt_tipo_servicio.value = "";
    txt_telefono.value = "";
    txt_fecha_proyecto.value = "";
    txt_comentario.value = "";

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
        console.log(txt_apellido.value);
        console.log(txt_correo.value);
        console.log(slt_tipo_servicio.value);
        console.log(txt_telefono.value);
        console.log(txt_fecha_proyecto.value);
        console.log(txt_comentario.value);

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

//fin de contactenos

// back to top
const btnVolverTop = document.querySelector('#btn-volverTop');

window.onscroll = function() { funcionScroll() };

const funcionScroll = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        btnVolverTop.style.display = "block";
    } else {
        btnVolverTop.style.display = "none";
    }
}

const funcionSubir = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

btnVolverTop.addEventListener('click', funcionSubir);
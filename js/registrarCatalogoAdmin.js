'use strict';



const btnRegistrarCatalogo = document.querySelector('#btn-registrarNuevoCatalogo');
const txtNombreCatalogo = document.querySelector('#txt-nombreCatalogo');

let validar = () => {
    let inputs_requeridos = document.querySelectorAll('#frm-contacto [required]');
    let error = false;

    for (let i = 0; i < inputs_requeridos.length; i++) {
        if (inputs_requeridos[i].value == '') {
            inputs_requeridos[i].classList.add('error');
            error = true;
        } else {
            inputs_requeridos[i].classList.remove('error');

        }
    }

    return error;

};
let limpiar = () => {
    txtNombreCatalogo.value = "";
};

let obtener_datos = () => {
    let error = validar();

    if (error) {
        Swal.fire({
            'title': 'Sus datos no se pudieron enviar',
            'text': 'Por favor revise los campos resaltados',
            'icon': 'warning'
        });
    } else {


        console.log('Informacion del catálogo registrado');
        console.log('=========================================================');
        console.log(`Se agregó: ${txtNombreCatalogo.value} al catálogo del administrador`);


        /*Swal.fire({
            'title': 'Proceso realizado con éxito',
            'text': 'Sus datos se enviaron adecuadamente',
            'icon': 'success'
        }).then(() => {
            limpiar();
           
        });*/

        registrarPadecimiento();
    }
};

btnRegistrarCatalogo.addEventListener('click', obtener_datos);
'use strict';

const btnRegistrarCatalogo = document.querySelector('#btn-registrarNuevoCatalogo');
const txtSlt = document.querySelector('#slt-catalogo');
const txtDivFormAutomatico = document.querySelector('#div-formAutomatico');
let inputCatalogoNuevo;


let mistica = () => {
    let autoInput = document.querySelector('#txt-nombreCatalogo').value;
    return autoInput;
}

let crearformulario = () => {
    txtDivFormAutomatico.innerHTML = "";
    if (txtSlt.value == 'vacunas') {
        txtDivFormAutomatico.appendChild(crearLable("txt-nombreCatalogo", "Nombre"));
        inputCatalogoNuevo = crearInput("text", "txt-nombreCatalogo", ["input-dobleColumna"], "si");
        txtDivFormAutomatico.appendChild(inputCatalogoNuevo);
        txtDivFormAutomatico.appendChild(crearLable("slt-catalogo", "Esencial"));
        txtDivFormAutomatico.appendChild(crearSelect("slt-esencial", ["1"], "si"));
        txtDivFormAutomatico.appendChild(crearOpciones("slt-esencial", ["Seleccione una opción del catálogo", "Si", "No"], ["", "Si", "No"]));
    } else if (txtSlt.value == 'enfermedades') {
        txtDivFormAutomatico.appendChild(crearLable("txt-nombreCatalogo", "Nombre"));
        inputCatalogoNuevo = crearInput("text", "txt-nombreCatalogo", ["input-dobleColumna"], "si");
        txtDivFormAutomatico.appendChild(inputCatalogoNuevo);
    } else if (txtSlt.value == 'razas') {
        txtDivFormAutomatico.appendChild(crearLable("txt-nombreCatalogo", "Nombre"));
        inputCatalogoNuevo = crearInput("text", "txt-nombreCatalogo", ["input-dobleColumna"], "si");
        txtDivFormAutomatico.appendChild(inputCatalogoNuevo);
    } else if (txtSlt.value == 'tipoMascota') {
        txtDivFormAutomatico.appendChild(crearLable("txt-nombreCatalogo", "Nombre"));
        inputCatalogoNuevo = crearInput("text", "txt-nombreCatalogo", ["input-dobleColumna"], "si");
        txtDivFormAutomatico.appendChild(inputCatalogoNuevo);
    } else if (txtSlt.value == 'padecimientos') {
        txtDivFormAutomatico.appendChild(crearLable("txt-nombreCatalogo", "Nombre"));
        inputCatalogoNuevo = crearInput("text", "txt-nombreCatalogo", ["input-dobleColumna"], "si");
        txtDivFormAutomatico.appendChild(inputCatalogoNuevo);
    } else {
        txtDivFormAutomatico.innerHTML = "";
        txtDivFormAutomatico.appendChild(crearLable("txt-nombreCatalogo", "Seleccione Un catalogo"));
    }

};

// Crea label (for="elfor" innherHTML="elinnertxt" 
let crearLable = (elfor, elinnertxt) => {

    let nuevoLable = document.createElement('label');
    nuevoLable.setAttribute('for', elfor);
    nuevoLable.innerHTML = elinnertxt;
    return nuevoLable;
};

// Crea imput (type="tipo" id"elid" class=["clase1","clase2","clase3"] required "si"/"no"
let crearInput = (tipo, elid, clases, requerido) => {

    let nuevoInput = document.createElement('Input');
    nuevoInput.setAttribute("type", tipo);
    nuevoInput.setAttribute("name", elid);
    nuevoInput.setAttribute("id", elid);

    for (let index = 0; index < clases.length; index++) {
        const clase = clases[index];
        nuevoInput.classList.add(clase);
    }

    if (requerido == "si") {
        nuevoInput.setAttribute("required", "");
    }

    return nuevoInput;
};

// Crea select (Id="" lass=["clase1","clase2","clase3"] required "si"/"no"
let crearSelect = (elid, clases, requerido) => {
    let nuevoSelect = document.createElement('select');
    nuevoSelect.setAttribute("name", elid);
    nuevoSelect.setAttribute("id", elid);

    for (let index = 0; index < clases.length; index++) {
        const clase = clases[index];
        nuevoSelect.classList.add(clase);
    }

    if (requerido == "si") {
        nuevoSelect.setAttribute("required", "");
    }
    return nuevoSelect;
}

// Crea Option (Id="igual que ID del select" values=["valu1","value2","value3"] test=["HTMLtext1","HTMLtext2","HTMLtext3"]"
let crearOpciones = (select, valores, innertext) => {
    let nuevoOption = document.createElement("option");
    let selector = document.querySelector("#" + select);

    for (let index = 0; index < valores.length; index++) {
        const option = document.createElement("option");
        option.text = valores[index];
        option.value = innertext[index];
        selector.add(option);

    }



    return nuevoOption;
}


let validar = () => {
    let inputs_requeridos = document.querySelectorAll('#frm-Catalogo [required]');
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
    let inputs_requeridos = document.querySelectorAll('#frm-Catalogo [required]');
    let error = false;

    for (let i = 0; i < inputs_requeridos.length; i++) {
        inputs_requeridos[i].value = '';
    }


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
        //console.log(`Se agregó: ${txtNombreCatalogo.value} al catálogo del administrador`);


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
crearformulario();
btnRegistrarCatalogo.addEventListener('click', obtener_datos);
txtSlt.addEventListener('change', crearformulario);
txtSlt.addEventListener('change', mistica);
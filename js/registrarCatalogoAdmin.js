'use strict';

const btnRegistrarCatalogo = document.querySelector('#btn-registrarNuevoCatalogo');
const txtSlt = document.querySelector('#slt-catalogo');
const txtDivFormAutomatico = document.querySelector('#div-formAutomatico');
let labelInputCatalogo;
let txtInputCatalogo;
let sltCatalogo;
let txtLabelfabricante;
let txtInputfabricante;
let sltestado;
let txtlabeltipodemascota;
let sltTipodemascota;
const usuario = JSON.parse(sessionStorage.getItem('usuarioConectado'));


//Array de tipo de mascotas
let arrarTipoDeMascotas = [];

const llenarArregloTipoDeMascotas = async() => {
    arrarTipoDeMascotas = await obtenerTiposDeMascota();
};

//Creamos los Arreglos de Values y innerHTML para el select de tipo de mascota
let valuesSltTipoDeMascota = [""];
let innerHTMLSltTipoDeMascota = ["Seleccione el tipo de mascota"];

const llenarArreglosOpcionsTipoDeMascotaValues = () => {
    valuesSltTipoDeMascota = [""];
    arrarTipoDeMascotas.forEach(TipoDeMascota => {
        valuesSltTipoDeMascota.push(TipoDeMascota._id);

    });
};

const llenarArreglosOpcionsTipoDeMascotainnerHTML = () => {
    innerHTMLSltTipoDeMascota = ["Seleccione el tipo de mascota"];
    arrarTipoDeMascotas.forEach(TipoDeMascota => {
        innerHTMLSltTipoDeMascota.push(TipoDeMascota.tipo);

    });
};




let crearformulario = () => {
    txtDivFormAutomatico.innerHTML = "";
    llenarArregloTipoDeMascotas();
    labelInputCatalogo = crearLable("txt-nombreCatalogo", "Nombre");
    txtInputCatalogo = crearInput("text", "txt-nombreCatalogo", ["input-dobleColumna"], "required");
    sltCatalogo = crearSelect("slt-esencial", ["1"], "required");
    txtLabelfabricante = crearLable("txt-fabricante", "Fabricante");
    txtInputfabricante = crearInput("text", "txt-fabricante", ["input-dobleColumna"], "required");
    sltestado = crearSelect("slt-estado", ["input-dobleColumna"], "required", "");
    txtlabeltipodemascota = crearLable("txt-tipodemascota", "Tipo de mascota");
    sltTipodemascota = crearSelect("txt-tipodemascota", ["input-dobleColumna"], "required", "");
    if (txtSlt.value == 'vacunas') {
        txtDivFormAutomatico.appendChild(labelInputCatalogo);
        txtDivFormAutomatico.appendChild(txtInputCatalogo);
        txtDivFormAutomatico.appendChild(txtLabelfabricante);
        txtDivFormAutomatico.appendChild(txtInputfabricante);

    } else if (txtSlt.value == 'tipodeservicio') {
        txtDivFormAutomatico.appendChild(labelInputCatalogo);
        txtDivFormAutomatico.appendChild(txtInputCatalogo);
        txtDivFormAutomatico.appendChild(crearLable("slt-estado", "Estado"));
        txtDivFormAutomatico.appendChild(sltestado);
        crearOpciones(sltestado, ["activo", "inactivo"], ["Activo", "Inactivo"]);
    } else
    if (txtSlt.value == 'razas') {
        llenarArreglosOpcionsTipoDeMascotaValues();
        llenarArreglosOpcionsTipoDeMascotainnerHTML();
        txtDivFormAutomatico.appendChild(txtlabeltipodemascota);
        txtDivFormAutomatico.appendChild(sltTipodemascota);
        crearOpciones(sltTipodemascota, innerHTMLSltTipoDeMascota, valuesSltTipoDeMascota);
        txtDivFormAutomatico.appendChild(labelInputCatalogo);
        txtDivFormAutomatico.appendChild(txtInputCatalogo);
        txtDivFormAutomatico.appendChild(crearLable("slt-estado", "Estado"));
        txtDivFormAutomatico.appendChild(sltestado);
        crearOpciones(sltestado, ["activo", "inactivo"], ["Activo", "Inactivo"]);
    } else if (txtSlt.value == 'tipoMascota') {
        txtDivFormAutomatico.appendChild(labelInputCatalogo);
        txtDivFormAutomatico.appendChild(txtInputCatalogo);
        txtDivFormAutomatico.appendChild(sltestado);
        crearOpciones(sltestado, ["activo", "inactivo"], ["Activo", "Inactivo"]);

    } else if (txtSlt.value == 'padecimientos') {
        txtDivFormAutomatico.appendChild(labelInputCatalogo);
        txtDivFormAutomatico.appendChild(txtInputCatalogo);
        txtDivFormAutomatico.appendChild(sltestado);
        crearOpciones(sltestado, ["activo", "inactivo"], ["Activo", "Inactivo"]);
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

// Crea imput (type="tipo" id"elid" class=["clase1","clase2","clase3"] required "required"/"no"
let crearInput = (tipo, elid, clases, requerido) => {

    let nuevoInput = document.createElement('Input');
    nuevoInput.setAttribute("type", tipo);
    nuevoInput.setAttribute("name", elid);
    nuevoInput.setAttribute("id", elid);

    for (let index = 0; index < clases.length; index++) {
        const clase = clases[index];
        nuevoInput.classList.add(clase);
    }

    if (requerido == "required") {
        nuevoInput.setAttribute("required", "");
    }

    return nuevoInput;
};

// Crea select (Id="" class=["clase1","clase2","clase3"] required "required"/"no" disabled "required"/"no"
let crearSelect = (elid, clases, requerido, disabled) => {
    let nuevoSelect = document.createElement('select');
    nuevoSelect.setAttribute("name", elid);
    nuevoSelect.setAttribute("id", elid);

    for (let index = 0; index < clases.length; index++) {
        let clase = clases[index];
        nuevoSelect.classList.add(clase);
    }

    if (requerido == "required") {
        nuevoSelect.setAttribute("required", "");
    }
    if (disabled == "disabled") {
        nuevoSelect.setAttribute("disabled", "");
    }
    return nuevoSelect;
}

// Crea Option (values=["valu1","value2","value3"] text=["HTMLtext1","HTMLtext2","HTMLtext3"]"
let crearOpciones = (selectElement, valores, innertext) => {

    for (let index = 0; index < valores.length; index++) {
        let option = document.createElement("option");
        option.text = valores[index];
        option.value = innertext[index];
        selectElement.add(option);

    }

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
        let ptxtInputCatalogo = txtInputCatalogo.value;
        let ptxtInputfabricante = txtInputfabricante.value;
        let psltestado = sltestado.value;
        let psltTipodemascota = sltTipodemascota.value;

        switch (inputSelectCatalogo.value) {
            case 'tipodeservicio':
                console.log("tipodeservicio");
                registrarTipoServicio(ptxtInputCatalogo, psltestado, usuario.nombre, usuario.tipoUsuario);
                break;
            case 'razas':
                registrarRaza(ptxtInputCatalogo, psltestado, psltTipodemascota, usuario.nombre, usuario.tipoUsuario);
                break;
            case 'vacunas':
                console.log("vacunas");
                registrarVacuna(ptxtInputCatalogo, ptxtInputfabricante, usuario.nombre, usuario.tipoUsuario);
                break;
            case 'tipoMascota':
                console.log("tipoMascota");
                registrarTipoMascota(ptxtInputCatalogo, psltestado);
                break;
            case 'padecimientos':
                console.log("padecimientos");
                registrarPadecimiento(ptxtInputCatalogo, psltestado);
                break;
            default:
                console.log('Error default');
        }
    }
};






crearformulario();
btnRegistrarCatalogo.addEventListener('click', obtener_datos);
txtSlt.addEventListener('change', crearformulario);
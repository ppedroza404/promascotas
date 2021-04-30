'use strict';
const boton_foto = document.querySelector('#btn-foto');
const imagenUsusario = document.querySelector('#foto-usuario');


let widget_cloudinary = cloudinary.createUploadWidget({
    cloudName: 'promascotascloudinary',
    uploadPreset: 'r17qodvl'
}, (err, result) => {
    if (!err && result && result.event === 'success') {
        console.log('Imagen subida con éxito', result.info);
        imagenUsusario.src = result.info.secure_url;
    }
});
boton_foto.addEventListener('click', () => {
    widget_cloudinary.open();
}, false);
const nombreUsuarioSpan = document.querySelector('#usuarioSpan');
//Obtiene información del proveedor cuando es cliente
let urlID = window.location.hash;
let urlIDModificado = urlID.slice(1);


const nombreUsuarioConectadoSpan = () => {
    let usuario = JSON.parse(sessionStorage.getItem('usuarioConectado'));
    let nombreUsuarioConectado = usuario.nombre;

    nombreUsuarioSpan.textContent = nombreUsuarioConectado

};

nombreUsuarioConectadoSpan();
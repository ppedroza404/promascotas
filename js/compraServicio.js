const nombreUsuarioSpan = document.querySelector('#usuarioSpan');

const nombreUsuarioConectadoSpan = () => {
    let usuario = JSON.parse(sessionStorage.getItem('usuarioConectado'));
    let nombreUsuarioConectado = usuario.nombre;

    nombreUsuarioSpan.textContent = nombreUsuarioConectado

};

nombreUsuarioConectadoSpan();
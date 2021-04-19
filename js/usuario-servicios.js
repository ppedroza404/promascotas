'use strict';

const iniciar_sesion = async(correo, contrasenna) => {
    try {
        const response = await axios({
            method: 'get',
            params: { correo: correo, contrasenna: contrasenna },
            url: `http://localhost:3000/api/iniciar-sesion`,
            responseType: 'json'
        });
        if (response.data.estado == true) {
            Swal.fire({
                'icon': 'succes',
                'title': 'Bienvenido',
                'text': 'Ha iniciado sesión correctamente'
            }).then(() => {
                sessionStorage.setItem('tipo_usuario', response.data.tipoUsuario);
                sessionStorage.setItem('nombre_usuario', response.data.nombre);

                //redirige al perfil respectivo segun el tipo de id
                if (sessionStorage.getItem('tipo_usuario') == 'cliente') {
                    window.location.href = 'perfilCliente.html';
                } else if (sessionStorage.getItem('tipo_usuario') == 'proveedor') {
                    window.location.href = 'perfilProveedor.html';
                } else {
                    window.location.href = 'paginaInicioAdmin.html';
                }
            });
        } else {
            if (response.data.cambio_contrasenna == 'si') {
                sessionStorage.setItem('correo_usuario', correo);
                window.location.href = 'modificar-contrasenna.html';
            } else {
                Swal.fire({
                    'icon': 'error',
                    'title': 'No ha podido iniciar sesión',
                    'text': 'Usuario o contraseña incorrectos'
                })
            }

        }
    } catch (error) {
        console.log(error);
    }
};
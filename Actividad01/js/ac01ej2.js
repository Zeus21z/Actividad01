/*
Descripción: Programa que solicita un usuario, contraseña y luego valida esa constraseña con distintos
usuarios.
Desarrollador: Zeus Inti Villarroel Garcia
Fecha: 21/04/2024
Cambios: Ninguno
*/

// Función para validar el nombre de usuario
function validarUsuario(usuario) {
    var usuariosValidos = ["juan", "pedro", "maria", "raul"];
    return usuariosValidos.includes(usuario);
}

// Función para validar la contraseña
function validarContrasena(contrasena) {
    return contrasena === "D153n0W3b2";
}

// Solicitar al usuario que ingrese su nombre de usuario
var usuario = prompt("Por favor, ingresa tu nombre de usuario:");

// Validar el nombre de usuario
if (validarUsuario(usuario)) {
    // Solicitar al usuario que ingrese su contraseña
    var contrasena = prompt("Por favor, ingresa tu contraseña:");
    // Validar la contraseña
    if (validarContrasena(contrasena)) {
        // Si el usuario y la contraseña son válidos
        alert("Inicio de sesión exitoso. ¡Bienvenido, " + usuario + "!");
    } else {
        // Si la contraseña no es válida
        alert("Contraseña incorrecta. Por favor, inténtalo de nuevo.");
    }
} else {
    // Si el usuario no es válido
    alert("Nombre de usuario incorrecto. Por favor, inténtalo de nuevo.");
}


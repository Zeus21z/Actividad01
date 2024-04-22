/*
Descripción: Este es un programa simple en JavaScript que da la bienvenida al usuario y muestra
en qué navegador se está ejecutando.
Desarrollador: Zeus Inti Villarroel Garcia
Fecha: 21/04/2024
Cambios: Ninguno
*/

// Validar si el navegador dunciona con navigator
if (navigator) {
    // Función para obtener el nombre del navegador
    function ObtNomNav() {
        if (navigator.userAgent.indexOf("Chrome") !== -1)
            return "Google Chrome";
        else if (navigator.userAgent.indexOf("Firefox") !== -1)
            return "Mozilla Firefox";
        else if (navigator.userAgent.indexOf("Edg") !== -1)
            return "Microsoft Edge";
        else if (navigator.userAgent.indexOf("OPR") !== -1 || navigator.userAgent.indexOf("Opera") !== -1)
            return "Opera";
        else if (navigator.userAgent.indexOf("Safari") !== -1)
            return "Apple Safari";
        else if (navigator.userAgent.indexOf("MSIE") !== -1 || navigator.appVersion.indexOf("Trident/") > -1)
            return "Internet Explorer";
        else
            return "Navegador desconocido";
    }

    // Variable para almacenar el nombre del navegador
    var NavUsa = ObtNomNav();

    // Mostrar mensaje de bienvenida y el nombre del navegador
    alert("¡Bienvenido! Estás utilizando " + NavUsa + ".");
} else {
    // Si el objeto navigator no está disponible, mostrar un mensaje de error
    alert("Lo siento, este navegador no es compatible con el objeto Navigator.");
}


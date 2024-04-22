/*
Descripción: Este programa en JavaScript solicita una frase al usuario y muestra:
- Cuántas veces aparece la letra "o".
- Las vocales que aparecen en la frase.
- Cuántas veces aparece cada una de las vocales.
Desarrollador: Zeus Inti Villarroel Garcia
Fecha: 21/04/2024
Cambios: Ninguno
*/

// Función para contar las ocurrencias de la letra "o" en una frase
function contarLetraO(frase) {
    var contador = 0;
    for (var i = 0; i < frase.length; i++) {
        if (frase[i].toLowerCase() === 'o') {
            contador++;
        }
    }
    return contador;
}

// Función para determinar si un carácter es una vocal
function esVocal(caracter) {
    var vocales = 'aeiou';
    return vocales.includes(caracter.toLowerCase());
}

// Función para obtener las vocales únicas que aparecen en una frase
function obtenerVocales(frase) {
    var vocalesUnicas = '';
    for (var i = 0; i < frase.length; i++) {
        if (esVocal(frase[i]) && !vocalesUnicas.includes(frase[i].toLowerCase())) {
            vocalesUnicas += frase[i].toLowerCase();
        }
    }
    return vocalesUnicas;
}

// Función para contar las ocurrencias de cada vocal en una frase
function contarVocales(frase) {
    var contadorVocales = {};
    var vocales = 'aeiou';
    for (var i = 0; i < frase.length; i++) {
        var caracter = frase[i].toLowerCase();
        if (esVocal(caracter)) {
            if (contadorVocales[caracter] === undefined) {
                contadorVocales[caracter] = 1;
            } else {
                contadorVocales[caracter]++;
            }
        }
    }
    return contadorVocales;
}

// Solicitar al usuario que ingrese una frase
var frase = prompt("Por favor, ingresa una frase:");

// Calcular los resultados
var cantidadLetraO = contarLetraO(frase);
var vocales = obtenerVocales(frase);
var cantidadVocales = contarVocales(frase);

// Construir el mensaje con saltos de línea
var mensaje = "Número de veces que aparece la letra 'o': " + cantidadLetraO + "\n";
mensaje += "Vocales que aparecen en la frase: " + vocales + "\n";
mensaje += "Número de veces que aparece cada vocal:\n";
for (var vocal in cantidadVocales) {
    mensaje += vocal + ": " + cantidadVocales[vocal] + "\n";
}

// Mostrar el mensaje en un cuadro de diálogo alert
alert(mensaje);

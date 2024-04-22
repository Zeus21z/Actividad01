/*
Descripción: Programa para imrprimir "N" cantidad de numeros primos generados aleatoriamente
cargados en un array que sean menores a 110.
Desarrollador: Zeus Inti Villarroel Garcia
Fecha: 21/04/2024
Cambios: Ninguno
*/

// Función para verificar si un número es primo
function esPrimo(numero) {
    for (var i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return numero > 1;
}

// Función para generar N números primos aleatorios menores que 110
function generarNumerosPrimos(N) {
    var numerosPrimos = [];
    var contador = 0;
    
    while (contador < N) {
        // Genera un número aleatorio entre 0 y 109
        var numeroAleatorio = Math.floor(Math.random() * 110);
        if (esPrimo(numeroAleatorio)) {
            numerosPrimos.push(numeroAleatorio);
            contador++;
        }
    }
    
    return numerosPrimos;
}

// Validar la entrada del usuario para el número de primos a generar
var cantidadNumeros = parseInt(prompt("Por favor, ingresa la cantidad de números primos que deseas generar:"));

// Validar la entrada del usuario
if (isNaN(cantidadNumeros) || cantidadNumeros <= 0) {
    alert("Por favor, ingresa un número entero positivo válido.");
} else {
    // Generar y mostrar los números primos aleatorios
    var numerosPrimosGenerados = generarNumerosPrimos(cantidadNumeros);
    alert("Los " + cantidadNumeros + " números primos generados son: " + numerosPrimosGenerados.join(", "));
}

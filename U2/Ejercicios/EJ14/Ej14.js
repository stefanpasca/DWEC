/*
Crea una aplicación que pida un número al usuario y determine si es primo o no. Un número primo
es aquel que solo es divisible por 1 y por sí mismo. Muestra el resultado en alert() y console.log().
Usa un bucle for y una variable booleana. 
*/

let numero = parseInt(prompt("Dame un numero"));
let esPrimo = true;

if (numero < 2) {
    esPrimo = false;
}

for (let i = 2; i < numero && esPrimo; i++) {
    if (numero % i === 0) {
        esPrimo = false;
    }
}

if (esPrimo) {
    alert("El numero " + numero + " es primo");
    console.log("El numero " + numero + " es primo");
} else {
    alert("El numero " + numero + " no es primo");
    console.log("El numero " + numero + " no es primo");
}

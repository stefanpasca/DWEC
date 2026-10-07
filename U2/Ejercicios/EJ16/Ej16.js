/*
Pide al usuario un número entero positivo y calcula su factorial (n!). El factorial de un número se
obtiene multiplicando todos los enteros desde 1 hasta ese número. Muestra el proceso paso a paso
en consola y el resultado final en un alert().
*/

let numero = parseInt(prompt("Dame un numero entero positivo"));

if (numero < 0) {
    alert("El numero tiene que ser positivo");
} else {
    let factorial = 1;

    for (let i = 1; i <= numero; i++) {
        console.log(factorial + " x " + i + " = " + (factorial * i));
        factorial = factorial * i;
    }

    alert("El factorial de " + numero + " es " + factorial);
}

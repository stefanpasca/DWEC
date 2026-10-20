/*
Realizar una aplicación web que muestre por consola el valor máximo y el valor más cercano a 0
que sea posible representar con JavaScript y muestra un valor infinito.
Ayuda: Number.MAX_VALUE y Number.MIN_VALUE.
*/

let maximo = Number.MAX_VALUE;
let minimo = Number.MIN_VALUE;
let infinito = maximo * 2;

console.log("El valor máximo que se puede representar es " + maximo);
console.log("El valor más cercano a 0 que se puede representar es " + minimo);
console.log("Si nos pasamos del máximo obtenemos " + infinito);

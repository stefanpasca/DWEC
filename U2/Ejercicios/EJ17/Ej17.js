/*
Realizar una aplicación web que, mediante JavaScript, haga la división en binario de 40 / 16.
*/

let num1 = 40;
let num2 = 16;

// Pasamos los números a binario con toString(2)
let bin1 = num1.toString(2);
let bin2 = num2.toString(2);

// Volvemos a pasar de binario a decimal con parseInt(..., 2) y dividimos
let division = parseInt(bin1, 2) / parseInt(bin2, 2);
let binDivision = division.toString(2);

console.log(num1 + " en binario es " + bin1);
console.log(num2 + " en binario es " + bin2);
console.log(bin1 + " / " + bin2 + " = " + binDivision + " (en decimal " + division + ")");

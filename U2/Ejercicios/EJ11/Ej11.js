/*
Crea una aplicación que pida un número al usuario y genere su tabla de multiplicar (del 1 al 10) en
formato tabla HTML o con console.log(). Usa un bucle for y muestra los resultados en cada iteración.
*/

let numero = Number(prompt("Dame un número para ver su tabla de multiplicar"));

let tabla = "<table border='1'>";
tabla += "<tr><th colspan='5'>Tabla del " + numero + "</th></tr>";

for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
    tabla += "<tr><td>" + numero + "</td><td>x</td><td>" + i + "</td><td>=</td><td>" + resultado + "</td></tr>";
}

tabla += "</table>";
document.write(tabla);

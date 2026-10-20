/*
Realizar una aplicación web que pida al usuario dos números para multiplicarlos en binario.
Validar que los valores introducidos estén dentro del rango permitido.
*/

let num1 = Number(prompt("Dame el primer número"));
let num2 = Number(prompt("Dame el segundo número"));

let maximo = Number.MAX_SAFE_INTEGER;
let minimo = Number.MIN_SAFE_INTEGER;

if (isNaN(num1) || isNaN(num2)) {
    alert("Tienes que introducir números válidos");
} else if (num1 > maximo || num1 < minimo || num2 > maximo || num2 < minimo) {
    alert("Los números tienen que estar entre " + minimo + " y " + maximo);
} else {
    let bin1 = num1.toString(2);
    let bin2 = num2.toString(2);

    let multiplicacion = parseInt(bin1, 2) * parseInt(bin2, 2);

    if (multiplicacion > maximo || multiplicacion < minimo) {
        alert("El resultado se sale del rango permitido");
    } else {
        let binMultiplicacion = multiplicacion.toString(2);

        console.log(num1 + " en binario es " + bin1);
        console.log(num2 + " en binario es " + bin2);
        alert(bin1 + " x " + bin2 + " = " + binMultiplicacion + " (en decimal " + multiplicacion + ")");
    }
}

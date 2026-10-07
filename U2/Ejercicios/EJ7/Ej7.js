/*
Crea un programa que pida al usuario dos números y muestre la resta del primero menos el segundo
utilizando prompt() y alert(). Asegúrate de convertir los valores introducidos a tipo numérico y
mostrar el resultado formateado.
*/

let num1 = Number(prompt("Dame el primer número"));
let num2 = Number(prompt("Dame el segundo número"));

if (isNaN(num1) || isNaN(num2)) {
    alert("Tienes que introducir números válidos");
} else {
    let resta = num1 - num2;
    alert("La resta de " + num1 + " - " + num2 + " es " + resta);
}

/*
Solicita al usuario su edad y muestra un mensaje diferente en función del rango:
- Menor de edad
- Adulto
- Jubilado
Usa if, else if, else y comprueba que la entrada sea numérica.
*/

let edad = prompt("Dime tu edad");

if (edad == null || isNaN(edad) || Number(edad) < 0) {
    alert("Tienes que introducir una edad numérica válida");
} else {
    edad = Number(edad);
    if (edad < 18) {
        alert("Eres menor de edad");
    } else if (edad < 65) {
        alert("Eres adulto");
    } else {
        alert("Estás jubilado");
    }
}

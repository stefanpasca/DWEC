/*
Crea una aplicación que pida un número al usuario y muestre todos los números primos desde 1
hasta ese número. Un número primo es aquel que solo es divisible por 1 y por sí mismo. Muestra los
números primos separados por el símbolo " | " en un párrafo del documento HTML. Usa una función
esPrimo() y un bucle for para generar los resultados.
*/

function esPrimo(n) {
    let primo = true;

    if (n < 2) {
        primo = false;
    }

    for (let i = 2; i < n && primo; i++) {
        if (n % i === 0) {
            primo = false;
        }
    }

    return primo;
}

let numero = parseInt(prompt("Dame un numero"));
let resultado = "";

for (let i = 1; i <= numero; i++) {
    if (esPrimo(i)) {
        if (resultado === "") {
            resultado = resultado + i;
        } else {
            resultado = resultado + " | " + i;
        }
    }
}

document.write("<p>" + resultado + "</p>");

/*
Pide al usuario un número de teléfono con prefijo (por ejemplo, +34 o +44). Analiza los primeros
caracteres y muestra de qué país es el prefijo (España, Reino Unido, Francia,etc.). Usa métodos de
cadena (substring(), startsWith()) y condicionales.
*/

let numerotlf = prompt("Dame tu numero con prefijo (ej: +34 600123456)");

if (numerotlf.startsWith("+")) {
    let prefijo = numerotlf.substring(1, 3);

    if (prefijo === "34") {
        alert("El prefijo " + prefijo + " es de España");
    } else if (prefijo === "44") {
        alert("El prefijo " + prefijo + " es de Reino Unido");
    } else if (prefijo === "33") {
        alert("El prefijo " + prefijo + " es de Francia");
    } else if (prefijo === "49") {
        alert("El prefijo " + prefijo + " es de Alemania");
    } else if (prefijo === "39") {
        alert("El prefijo " + prefijo + " es de Italia");
    } else {
        alert("No conozco el prefijo " + prefijo);
    }
} else {
    alert("El numero tiene que empezar por + seguido del prefijo");
}

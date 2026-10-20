/*
Dadas las dos siguientes cadenas:
OVNI = "OBJETO VOLADOR NO IDENTIFICADO"
Info = "En un lugar de la Mancha"
Realizar una aplicación web que, mediante JavaScript, compruebe si las cadenas están escritas en
minúsculas, en mayúsculas o en una combinación de ambas.
Ayuda: toUpperCase() y toLowerCase().
*/

let OVNI = "OBJETO VOLADOR NO IDENTIFICADO";
let Info = "En un lugar de la Mancha";

function comprobar(cadena) {
    if (cadena === cadena.toUpperCase()) {
        console.log('"' + cadena + '" está escrita en mayúsculas');
    } else if (cadena === cadena.toLowerCase()) {
        console.log('"' + cadena + '" está escrita en minúsculas');
    } else {
        console.log('"' + cadena + '" está escrita con mayúsculas y minúsculas');
    }
}

comprobar(OVNI);
comprobar(Info);

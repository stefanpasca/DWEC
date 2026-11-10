function generarNumerosAleatorios(cantidad, max) {
    let resultado = [];

    while (resultado.length < cantidad) {
        let numeroAleatorio = Math.floor(Math.random() * max) + 1;

        if (!resultado.includes(numeroAleatorio)) {
            resultado.push(numeroAleatorio);
        }
    }

    resultado.sort((a, b) => a - b);
    return resultado;
}

function arrayATexto(array) {
    let texto = "";
    for (let i = 0; i < array.length; i++) {
        texto += array[i];
        if (i < array.length - 1) {
            texto += ", ";
        }
    }
    return texto;
}
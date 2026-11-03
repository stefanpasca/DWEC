function darNumerosAleatorios() {
    return Math.floor(Math.random() * 6) + 5;
}

function pulsar() {
    let divPalabras = document.getElementById("palabras");
    let divCalificaciones = document.getElementById("calificaciones");
    let textarea = document.getElementsByName("mitexto")[0];
    let palabras = textarea.value.trim().split(/\s+/);

    divPalabras.innerHTML =
        "Numero de palabras: " + palabras.length +
        "<br>Primera palabra: " + palabras[0] +
        "<br>Ultima palabra: " + palabras[palabras.length - 1];

    divCalificaciones.innerHTML = "";
    let notas = new Array(4.5, 4, 6, 1, 7.5, 10, 5.25, 4.5, 2, 1, 8, 7.5, 1, 7.5, 8);

    let aprobados = 0;
    for (let nota of notas) {
        if (nota >= 5) {
            aprobados++;
        }
    }
    divCalificaciones.innerHTML += "Numero de aprobados: " + aprobados;

    for (let i = 0; i < notas.length; i++) {
        if (notas.indexOf(notas[i]) === notas.lastIndexOf(notas[i])) {
            divCalificaciones.innerHTML += "<br>Nota no repetida: " + notas[i];
        }
    }

    function obtenerNotasSuspensas() {
        let notasSuspensas = [];
        for (let i = 0; i < notas.length; i++) {
            if (notas[i] < 5) {
                notasSuspensas.push(notas[i]);
            }
        }
        return notasSuspensas;
    }

    let suspensas = obtenerNotasSuspensas();
    for (let i = 0; i < suspensas.length; i++) {
        if (i % 2 === 0) {
            divCalificaciones.innerHTML += "<br>Suspensa en posición par: " + suspensas[i];
        }
    }

    let mayoresQueSiete = [];
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] >= 7) {
            mayoresQueSiete.push(notas[i]);
        }
    }
    for (let i = 0; i < mayoresQueSiete.length; i++) {
        if (i % 2 !== 0) {
            divCalificaciones.innerHTML += "<br>Nota >= 7 en posición impar: " + mayoresQueSiete[i];
        }
    }

    for (let i = notas.length - 1; i >= 0; i--) {
        if (notas[i] < 5) {
            notas.splice(i, 1);
        }
    }

    while (notas.length < 15) {
        notas.push(darNumerosAleatorios());
    }

    notas.sort((a, b) => b - a);
    divCalificaciones.innerHTML += "<br>Notas finales: " + notas.join(", ");
}

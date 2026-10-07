/*
El programa genera un número aleatorio entre 1 y 10. El usuario debe adivinarlo escribiendo su
respuesta en un prompt(). Muestra si ha acertado o no mediante alert() e indica el número correcto
al final. Utiliza Math.random() y Math.floor().
*/

let secreto = Math.floor(Math.random() * 10) + 1;
let respuesta = Number(prompt("Adivina el número (entre 1 y 10)"));

if (respuesta === secreto) {
    alert("¡Has acertado!");
} else {
    alert("No has acertado");
}

alert("El número correcto era " + secreto);

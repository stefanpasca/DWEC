let numeros = [10,5,32,346,4,23466,257,346352,345,1919];
document.write(numeros + "<br>");
numeros.sort((a, b) => a - b);
let numeroMayor = numeros[numeros.length - 1];
let numeroMenor = numeros[0];
document.write("Número mayor: " + numeroMayor + "<br>");
document.write("Número menor: " + numeroMenor + "<br>");

/*Ahora pidiendo por teclado los numeros*/
let boton = document.getElementById("pedirNumeros");
boton.addEventListener("click", function() {
    let numerosTeclado = [];
    for(let i = 0; i < 10; i++){
        let numero = Number(prompt("Introduce un número:"));
        numerosTeclado.push(numero);
    }

    document.write("AMPLIACION: pedidos por teclado<br>")
    document.write(numerosTeclado + "<br>");
    numerosTeclado.sort((a,b) => {return a - b});
    let numeroMayorTeclado = numerosTeclado[numerosTeclado.length - 1];
    let numeroMenorTeclado = numerosTeclado[0];
    document.write("Número mayor: " + numeroMayorTeclado + "<br>");
    document.write("Número menor: " + numeroMenorTeclado + "<br>");
});


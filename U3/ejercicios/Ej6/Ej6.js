let numeros = Array ("uno", "dos", "tres", "cuatro", 5, "seis");
document.write("Array original: " + numeros + "<br>");
let longitudNumeros = numeros.length;
document.write("Longitud del array: " + longitudNumeros + "<br>");
document.write(numeros[4] + "<br>");
numeros.pop();
document.write("Array después de eliminar el último elemento: " + numeros + "<br>");
numeros.unshift("menos uno","cero");
document.write("Array después de agregar elementos al inicio: " + numeros + "<br>");

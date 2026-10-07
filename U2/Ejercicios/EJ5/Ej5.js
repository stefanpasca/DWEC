let base = parseInt(prompt("Dame una base"));
let exponente = parseInt(prompt("Dame un exponente"));
if(base == null || exponente == null){
alert("No puedes dejar datos en blanco")
}
else{ 
    let resultado = base ** exponente;
    console.log("El resultado es " + resultado);
    }
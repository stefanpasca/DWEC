/*
Crea una aplicación que pida al usuario un color (rojo, verde o azul). Muestra un mensaje
personalizado en función del color introducido utilizando una estructura switch. Si el color no
coincide con ninguno, muestra un mensaje de error.
*/

let color = prompt("Dime un color (rojo, verde o azul)");

if (color != null) {
    color = color.trim().toLowerCase();
}

switch (color) {
    case "rojo":
        alert("Has elegido rojo, el color de la pasión");
        break;
    case "verde":
        alert("Has elegido verde, el color de la naturaleza");
        break;
    case "azul":
        alert("Has elegido azul, el color del mar y del cielo");
        break;
    default:
        alert("Error: el color introducido no es rojo, verde ni azul");
}

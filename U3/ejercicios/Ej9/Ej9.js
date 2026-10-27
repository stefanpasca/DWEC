let tallasEuropeas=["XXS", "XS", "S", "M", "L", "XL", "XXL"];
let tallasPequeñas=tallasEuropeas.slice(0, 3);
let tallasMedianas=tallasEuropeas.slice(3, 4);
let tallasGrandes=tallasEuropeas.slice(4);
let tamaño = document.getElementById("talla");
let boton = document.getElementById("mostrarTallas");

boton.addEventListener("click", function() {
    let resultado = document.getElementById("resultado");
    let valor = tamaño.value.toLowerCase();
    if (valor === "pequeña") {
        resultado.textContent = "Tallas pequeñas: " + tallasPequeñas;
    } else if (valor === "mediana") {
        resultado.textContent = "Tallas medianas: " + tallasMedianas;
    } else if (valor === "grande") {
        resultado.textContent = "Tallas grandes: " + tallasGrandes;
    } else {
        resultado.textContent = "Talla no reconocida";
    }
});
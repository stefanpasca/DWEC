let radio = document.getElementById("radio");
let boton = document.getElementById("calcular");
let resultado = document.getElementById("resultado");

boton.addEventListener("click", function() {
    let valor = parseFloat(radio.value);
    
        let area = Math.PI * (valor * valor);
        resultado.textContent = "El área de la circunferencia es: " + area;
    
});
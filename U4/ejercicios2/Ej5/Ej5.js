let precio = document.getElementById("Precio");
let resultado = document.getElementById("resultado");
function aplicarDescuento(precio){
    const descuento = 0.2;
    if(precio <= 0 || isNaN(precio)){
        resultado.innerHTML = "El precio debe ser válido";
        return false;
    } else{
        let precioFinal = (precio - (precio * descuento));
        resultado.innerHTML = precioFinal + "€";
        return true;
    }
    
}
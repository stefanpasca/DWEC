let resultado = document.getElementsByClassName("resultado")[0];
const conversion = 1.1;
function convertirMoneda(cantidad){
    if(cantidad < 0){
       return "ERROR: no se puede usar cantidades negativas de dinero";

    } else{
        let dolares = cantidad * conversion;
        return cantidad+" euros equivalen a "+ dolares + " dólares";
    }
}
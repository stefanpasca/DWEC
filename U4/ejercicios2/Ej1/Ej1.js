
function calcularAreaRectangulo(base, altura){
    if(base < 0 || altura < 0){
        return "Error: base y altura deben ser mayores o iguales a 0";
    }
    return base * altura;
}
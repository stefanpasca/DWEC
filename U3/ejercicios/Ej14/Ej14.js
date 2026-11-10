function crearMatriz(filas,columnas){
    let matriz = [];
    for(let i = 1; i<(filas+1); i++){
        matriz[i] = [];
        for(let j = 1; j<(columnas+1); j++){
            matriz[i][j] = "("+i+","+j+")";
        }
    }
    return matriz;                      
}
function mostrarPosicionConAmbasCoordenadas(matriz, fila, columna) {
    let texto = "";
    for (let i = 1; i < matriz.length; i++) {
        for (let j = 1; j < matriz[i].length; j++) {
            if (i === fila || j === columna) {
                 texto += matriz[i][j] + " ";
            }
        }
    }
    return texto;
}
function mostrarMatriz(matriz) {
    let texto = "";
    for (let i = 1; i < matriz.length; i++) {
        for (let j = 1; j < matriz[i].length; j++) {
            texto += matriz[i][j] + " ";
        }
        texto += "<br>";
    }
    return texto;
}
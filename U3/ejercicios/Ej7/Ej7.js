
let numeroDePrimos = 0;
for(let i = 0; i < 500; i++){
    if(i%3==0){
        document.write(i + "<br>");
    };
    
    let esPrimo = true;
    if(i < 2){
        esPrimo = false;
    } else {
        for(let j = 2; j <= Math.sqrt(i); j++){
            if(i % j == 0){
                esPrimo = false;
                break;
            }
        }
    }
    if(esPrimo){
        numeroDePrimos++;
    }
    
}
document.write("Número de no primos hasta 500: " + (500 - numeroDePrimos) + "<br>");
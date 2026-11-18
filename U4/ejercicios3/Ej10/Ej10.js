function Ascensor(){
    this.pisoActual = 0;
    this.limitePisos = 10;
    this.irAlPiso = function(...args){
        for(let i = 0; i < args.length; i++){
            let numeroPiso = args[i];
            if(numeroPiso >= 0 && numeroPiso <= this.limitePisos){
                if(numeroPiso > this.pisoActual){
                    alert("Subiendo al piso " + numeroPiso);
                } else if(numeroPiso < this.pisoActual){
                    alert("Bajando al piso " + numeroPiso);
                }
                this.pisoActual = numeroPiso;
            } else{
                alert("Error: piso no existente");
            }
        }
    }
    this.llamarEmergencia = function(){
        alert("Contactando con soporte técnico");
    }
}
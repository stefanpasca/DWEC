function Nave(){
    this.nivelCombustible = 100;
    
    this.explorarEspacio = function(){
        if(this.nivelCombustible > 0){
            this.nivelCombustible -= 10;
            alert("Explorando sector... Combustible restante " + this.nivelCombustible);
        } else {
            alert("No hay suficiente combustible");
        }
    }

    this.repostar = function(){
        this.nivelCombustible = 100;
        alert("Repostando... Combustible al máximo");
    }
    this.consultarCombustible = function(){
        alert("Combustible actual: " + this.nivelCombustible);
    }
}
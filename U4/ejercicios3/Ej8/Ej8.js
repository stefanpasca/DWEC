function cliente(){
    this.puntos = 0;
    this.compra = function(){
        this.puntos += 50;
    }
    this.canjearRegalo = function(){
        if(this.puntos >= 100){
            this.puntos -= 100;
        }else{
            alert("Saldo insuficiente para canjear regalo");
        }
    }
    this.verSaldo = function(){
        alert("Saldo actual: " + this.puntos);
    }

}
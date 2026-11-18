let termostato = {
    temperatura: 20,
    subirTemperatura: function(){
        this.temperatura += 1;
    },
    bajarTemperatura: function(){
        this.temperatura -= 1;
    },
    consultarEstado: function(){
        alert("Temperatura actual: " + this.temperatura);
    }
}
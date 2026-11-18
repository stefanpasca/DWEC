function JugadorEsports(rol, nickname, email, horasEntrenadas){
    this.rol = rol;
    this.nickname = nickname;
    this.email = email;
    this.horasEntrenadas = horasEntrenadas;
}

function mediaHorasPorEquipo(equipo){
    let totalHoras = 0;
    let contador = 0;
    for (let jugador of equipo){
        totalHoras += jugador.horasEntrenadas;
        contador++;
    }
    let media = totalHoras / contador;
    return media;
}
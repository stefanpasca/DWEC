let alumnos = ["Juan", "María", "Pedro", "Ana", "Luis", "Carlos", "Lucía", "Miguel", "Sofía", "Javier", "Elena", "Diego", "Marta",
    "Alberto", "Isabel", "Fernando", "Carmen", "Raúl", "Patricia", "Andrés", "Laura", "David", "Silvia", "Pablo", "Beatriz",
    "Antonio", "Rosa", "Jorge", "Natalia", "Ricardo", "Verónica"];

let disponibles = [];
for (let i = 0; i < alumnos.length; i++) {
    disponibles.push(i);
}

let ganadorAnterior = -1;

function crearTabla(alumnos) {
    let tabla = "<table border='1'><tr><th>Nombre</th></tr>";
    for (let i = 0; i < alumnos.length; i++) {
        tabla += "<tr><td>" + alumnos[i] + "</td></tr>";
    }
    tabla += "</table>";
    document.getElementById("tablaAlumnos").innerHTML = tabla;
}

function sorteo() {
    let filas = document.getElementById("tablaAlumnos").getElementsByTagName("tr");

    if (ganadorAnterior !== -1) {
        filas[ganadorAnterior + 1].style.backgroundColor = "black";
        filas[ganadorAnterior + 1].style.color = "white";
    }

    if (disponibles.length === 0) {
        document.getElementById("ganadorSorteo").innerHTML = "Ya han salido todos los alumnos";
        return;
    }

    let posicion = Math.floor(Math.random() * disponibles.length);
    let indiceGanador = disponibles[posicion];
    disponibles.splice(posicion, 1);

    filas[indiceGanador + 1].style.backgroundColor = "red";
    document.getElementById("ganadorSorteo").innerHTML = "Ganador: " + alumnos[indiceGanador];

    ganadorAnterior = indiceGanador;
}

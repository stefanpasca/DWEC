let input = document.getElementById("fecha");
let button = document.getElementById("calcular");
let resultado = document.getElementById("resultado");

button.addEventListener("click", function() {
  let fecha = new Date(input.value);
  let diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  let diaSemana = diasSemana[fecha.getDay()];
  resultado.textContent = "El día de la semana es: " + diaSemana;
});
let dia = document.getElementById("dia");
let cantidad = document.getElementById("cantidad");
let pulsar = document.getElementById("pulsar");
let resultado = document.getElementById("resultado");
pulsar.disabled = true;

cantidad.addEventListener("input", () => {
  let n = Number(cantidad.value);
  if (!Number.isInteger(n) || n <= 0) {
    pulsar.disabled = true;
    return;
  }
  pulsar.disabled = false;
});

pulsar.addEventListener("click", () => {
  let diaBuscado = Number(dia.value);
  let n = Number(cantidad.value);
  let fecha = new Date();
  let lista = "<ol>";
  let encontrados = Number(0);

  while (encontrados < n) {
    fecha.setDate(fecha.getDate() + 1);
    if (fecha.getDay() === diaBuscado) {
      lista += '<li>' + fecha.getDate() + '/' + (fecha.getMonth() + 1) + '/' + fecha.getFullYear() + '</li>';
      encontrados++;
    }
  }

  lista += "</ol>";
  resultado.innerHTML = lista;
});
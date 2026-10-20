let tiempo = document.getElementById("tiempo");
let segundos = 0;

setInterval(() => {
  segundos++;
  tiempo.textContent = segundos;
}, 1000);
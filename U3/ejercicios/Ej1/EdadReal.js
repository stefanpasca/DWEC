let nombre = prompt("Dime tu nombre");
let apellido = prompt("Dime tu apellido");
let nombreCompleto = nombre + " " + apellido;
let fechaNacimiento = prompt("Dime tu fecha de nacimiento (dd/mm/aaaa)");
let fechaNacimientoArray = fechaNacimiento.split("/");
let diaNacimiento = parseInt(fechaNacimientoArray[0], 10);
let mesNacimiento = parseInt(fechaNacimientoArray[1], 10);
let anioNacimiento = parseInt(fechaNacimientoArray[2], 10);

let fechaActual = new Date();
let anioActual = fechaActual.getFullYear();
let mesActual = fechaActual.getMonth() + 1;
let diaActual = fechaActual.getDate();

let años = anioActual - anioNacimiento;
if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
  años--;
}
let meses = mesActual - mesNacimiento;
if (meses < 0 || (meses === 0 && diaActual < diaNacimiento)) {
  meses += 12;
}
let dias = diaActual - diaNacimiento;
if (dias < 0) {
  meses--;
  dias += new Date(anioActual, mesActual - 1, 0).getDate();
}

alert("Hola " + nombreCompleto + ". Tienes " + años + " años y " + meses + " meses y " + dias + " días.");

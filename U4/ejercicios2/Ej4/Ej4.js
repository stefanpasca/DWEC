function generarNombreUsuario(nombre, apellido=""){
let nombreUsuario = "";
for (let i = 0; i < 3; i++) {
  nombreUsuario += nombre.charAt(i);
}
for (let i = 0; i < 3; i++) {
  nombreUsuario += apellido.charAt(i);
}

let numeroAleatorio = Math.floor(Math.random() * 90 + 10);
nombreUsuario += numeroAleatorio;
return nombreUsuario;
}
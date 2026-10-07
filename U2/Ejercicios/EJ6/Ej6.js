/*
Crea una aplicación que al solicitar el nombre del usuario lo guarde en una variable denominada
nombre. Solicitar el primer apellido al usuario y lo guardara en una variable denominada apellido.
Almacenaremos en una nueva variable denominada fullName el nombre y el primer apellido
registrado separados por espacio.
Solicitar la edad al usuario y lo guardas en una variable denominada edad. Calcular y asignar a una
nueva variable Nacimiento, el año de nacimiento del usuario (sin mes)
Mostrar en el cuadro de resultados del editor la siguiente información (una en cada línea)
Nombre completo
Año de nacimiento
*/

let nombre = prompt("Dame tu nombre");
let apellido = prompt("Dame tu apellido");
let fullName = nombre + " " + apellido;
let edad = prompt("Dame tu edad");
const anioActual = new Date().getFullYear();
let nacimiento = anioActual - edad;

console.log("Tu nombre es " + fullName + "\n" +
            "Tu año de nacimiento es" + nacimiento
);
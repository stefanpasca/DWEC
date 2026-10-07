/*
Solicita una nota numérica entre 0 y 10 e indica su calificación textual:
• <5: Suspenso
• 5–6: Aprobado
• 7–8: Notable
• 9–10:Sobresaliente
Valida que el valor introducido esté dentro del rango permitido. 
*/

let nota = Number(prompt("Dime tu nota"));

if (nota < 0 || nota > 10) {
    alert("La nota introducida debe estar entre 0 y 10.");
} else if (nota < 5) {
    alert("Suspenso");
} else if (nota < 7) {
    alert("Aprobado");
} else if (nota < 9) {
    alert("Notable");
} else {
    alert("Sobresaliente");
}
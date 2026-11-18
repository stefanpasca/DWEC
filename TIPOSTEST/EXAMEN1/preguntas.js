// Banco de preguntas tipo test · DWEC (UD2 + UD3)
// Formato de cada pregunta:
//   t: tema · e: enunciado · c: código (opcional) · o: opciones · r: índice de la correcta · x: explicación
// Para añadir preguntas basta con copiar un bloque y cambiarlo.

const TE = "⚠ TypeError (se detiene la ejecución)";
const RE = "⚠ ReferenceError (se detiene la ejecución)";
const CONSOLA = "Se ejecuta el siguiente código en el navegador. ¿Qué muestra la consola, línea por línea?";

const PREGUNTAS = [

// ───────────────────────── Cuestionario de clase ─────────────────────────
{ t: "Strings", v: "c",
  e: "Se ejecuta el siguiente código en el navegador. Si la condición del if se cambia por str.indexOf('Widget') != -1, ¿qué muestra la consola, línea por línea?",
  c: `let str = 'Widget con id';
if (str.indexOf('Widget')) {
  console.log('encontrado');
} else {
  console.log('no encontrado');
}
console.log(str.indexOf('id'), str.indexOf('id', 2), str.includes('id', 12));

let w = "stringify";
console.log(w.slice(2, 6), w.slice(6, 2) === "", w.substring(6, 2), w.substr(-4, 2), w.slice(-4, -1));`,
  vc: `let str = 'Widget con id';
if (str.indexOf('Widget') != -1) { console.log('encontrado'); } else { console.log('no encontrado'); }
console.log(str.indexOf('id'), str.indexOf('id', 2), str.includes('id', 12));
let w = "stringify";
console.log(w.slice(2, 6), w.slice(6, 2) === "", w.substring(6, 2), w.substr(-4, 2), w.slice(-4, -1));`,
  o: ["encontrado\n1 11 false\nring true ring gi gif",
      "encontrado\n1 11 false\nring true ring st gif",
      "no encontrado\n1 11 false\nring true ring gi gif",
      "encontrado\n1 11 false\nring false ring gi gif",
      "encontrado\n1 11 true\nring true ring gi gif",
      "encontrado\n1 1 false\nring true ring gi gif"], r: 0,
  x: "Con el código original indexOf('Widget') devuelve 0, que es falsy (saldría \"no encontrado\"). Con != -1 la condición es true. indexOf('id', 2) salta la primera aparición y devuelve 11; includes('id', 12) solo ve \"d\" → false. slice(6, 2) devuelve \"\", pero substring(6, 2) intercambia los argumentos → \"ring\". substr(-4, 2) toma 2 caracteres desde el 4.º por el final → \"gi\"." },

{ t: "Iterables", v: "c", e: CONSOLA,
  c: `let range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },
  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};

for (let num of range) {
  if (num == 3) break;
  console.log(num);
}

console.log(Array.from(range, n => n * n).join());
console.log(range.current);`,
  o: ["1\n2\n1,4,9,16,25\n6", "1\n2\n3\n1,4,9,16,25\n6", "1\n2\n1,4,9,16,25\n5", "1\n2\n1,4,9,16,25\n4", "1\n2\n16,25\n6", "1\n2\n1,2,3,4,5\n6"], r: 0,
  x: "El bucle muestra 1 y 2 y se detiene con break al llegar a 3. Array.from vuelve a llamar a [Symbol.iterator](), que reinicia current, recorre 1..5 y aplica el mapeo (cuadrados). Al agotarse, current queda en 6." },

{ t: "Map y Set", v: "c", e: CONSOLA,
  c: `let john = { name: "John" };
let ben = { name: "Ben" };

let visitsObj = {};
visitsObj[ben] = 234;
visitsObj[john] = 123;
console.log(Object.keys(visitsObj).length, visitsObj["[object Object]"]);

let visitsMap = new Map();
visitsMap.set(ben, 234).set(john, 123);
console.log(visitsMap.size, visitsMap.get(john), visitsMap.get({ name: "John" }));`,
  o: ["1 123\n2 123 undefined", "1 234\n2 123 undefined", "1 123\n1 123 undefined", TE, "1 123\n2 123 123", "2 123\n2 123 undefined"], r: 0,
  x: "En un objeto normal las claves se convierten a string: ben y john pasan a ser \"[object Object]\" → 1 propiedad con el último valor (123). En un Map los objetos son claves por referencia: 2 entradas, y get({ name: \"John\" }) usa otra referencia → undefined." },

{ t: "Arrays", v: "c",
  e: "Se ejecuta el siguiente código en el navegador. ¿Qué ocurre al ejecutarlo? Indica lo que muestra la consola y si la ejecución se interrumpe.",
  c: `let names = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);
console.log(names.length, names.join(';'));

console.log([1, 2, 3, 4, 5].reduce((sum, current) => sum + current));

console.log([].reduce((sum, current) => sum + current));

console.log(Array.isArray([]));`,
  o: ["2 Bilbo;Gandalf\n15\n" + TE, "2 Bilbo;Gandalf\n15\n" + TE + "\ntrue", "4 Bilbo;Gandalf;Nazgul;Saruman\n15\n" + TE, "2 Bilbo;Gandalf\n15\n0\ntrue", "2 Bilbo;Gandalf\n15\nNaN\ntrue", "2 Bilbo;Gandalf\n15\nundefined\ntrue"], r: 0,
  x: "split(', ', 2) limita a 2 elementos. reduce sin valor inicial usa el primer elemento como acumulador → 15. En un array vacío, reduce sin valor inicial lanza TypeError y la ejecución se detiene: Array.isArray nunca se muestra." },

{ t: "Date", v: "w", e: "Se ejecuta el siguiente script en un navegador. ¿Qué se escribe en la página?",
  c: `let f = new Date(2026, 9, 28);
document.write(f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear());`,
  o: ["28/10/2026", "28/11/2026", "9/28/2026", "28/9/2026", "10/28/2026", "28/10/26"], r: 0,
  x: "Los meses empiezan en 0 (enero = 0), así que 9 es octubre. getMonth() devuelve 9 y se le suma 1 → 10." },

{ t: "Promesas y asincronía", e: "Se ejecuta el siguiente script. ¿Qué muestra la consola y en qué orden?",
  c: `console.log("A");
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Listo!"), 1000);
});
promesa.then(resultado => console.log(resultado));
console.log("B");`,
  o: ["Primero A, luego B y, un segundo después, «Listo!».", "Error: resolve is not defined.", "Primero «Listo!», luego A y luego B.", "Primero A, luego «Listo!» y por último B.", "A y B, y «Listo!» nunca aparece porque falta el catch.", "A, B y «Listo!» seguidos y sin espera, porque then es síncrono."], r: 0,
  x: "El código síncrono se ejecuta primero (A y B). La promesa se resuelve a los 1000 ms y entonces se ejecuta el then. No hace falta catch para que then funcione." },

// ───────────────────────── Variables, ámbito y hoisting ─────────────────────────
{ t: "Variables y ámbito", v: "c", e: CONSOLA,
  c: `console.log(a);
var a = 5;
console.log(a);`,
  o: ["undefined\n5", "5\n5", RE, "null\n5", "undefined\nundefined", "NaN\n5"], r: 0,
  x: "Hoisting: la declaración var se eleva al principio con valor undefined; la asignación se queda en su sitio." },

{ t: "Variables y ámbito", v: "c", e: CONSOLA,
  c: `console.log(typeof b);
console.log(b);
let b = 3;`,
  o: [RE, "undefined\n" + RE, "undefined\nundefined", "undefined\n3", "\"undefined\"\nnull", "number\n3"], r: 0,
  x: "Con let la variable está en la TDZ (Temporal Dead Zone) hasta su declaración. Incluso typeof lanza ReferenceError en la TDZ, así que la ejecución se detiene en la primera línea." },

{ t: "Variables y ámbito", v: "c", e: CONSOLA,
  c: `for (var i = 0; i < 3; i++) {}
console.log(i);
for (let j = 0; j < 3; j++) {}
console.log(typeof j);`,
  o: ["3\nundefined", "2\nundefined", "3\n" + RE, "undefined\nundefined", "3\nnumber", RE], r: 0,
  x: "var ignora el bloque y \"se desborda\" fuera del for (vale 3 al terminar). let respeta el bloque; fuera j no existe, y typeof de una variable no declarada devuelve \"undefined\" sin error." },

{ t: "Variables y ámbito", v: "c", e: CONSOLA,
  c: `for (var i = 0; i < 3; i++) setTimeout(() => console.log("var", i), 0);
for (let k = 0; k < 3; k++) setTimeout(() => console.log("let", k), 0);`,
  o: ["var 3\nvar 3\nvar 3\nlet 0\nlet 1\nlet 2", "var 0\nvar 1\nvar 2\nlet 0\nlet 1\nlet 2", "var 0\nlet 0\nvar 1\nlet 1\nvar 2\nlet 2", "var 2\nvar 2\nvar 2\nlet 0\nlet 1\nlet 2", "var 3\nvar 3\nvar 3\nlet 3\nlet 3\nlet 3", "var 0\nvar 1\nvar 2\nlet 3\nlet 3\nlet 3"], r: 0,
  x: "Los setTimeout se ejecutan cuando el bucle ya ha terminado. Con var hay una única i compartida (vale 3). Con let cada iteración tiene su propia k." },

{ t: "Variables y ámbito", v: "c", e: CONSOLA,
  c: `const persona = { nombre: "Ana" };
persona.nombre = "Luis";
console.log(persona.nombre);
persona = {};
console.log("fin");`,
  o: ["Luis\n" + TE, TE, "Ana\n" + TE, "Luis\nfin", "Ana\nfin", "Luis\n" + RE], r: 0,
  x: "const impide reasignar la variable, no modificar el objeto. Cambiar una propiedad es válido; asignar un objeto nuevo lanza TypeError (Assignment to constant variable)." },

{ t: "Variables y ámbito", e: "¿Cuál de estos nombres de variable NO es válido en JavaScript?",
  o: ["2nombre", "_nombre", "$nombre", "nombre2", "miNombreLargo", "NOMBRE"], r: 0,
  x: "Un identificador debe empezar por letra, _ o $, nunca por un número. Además JS distingue mayúsculas: nombre ≠ NOMBRE." },

{ t: "Variables y ámbito", e: "Según la tabla de var / let / const, ¿qué afirmación es correcta?",
  o: ["let se puede reasignar pero no redeclarar en el mismo ámbito.", "const se puede reasignar pero no redeclarar.", "var tiene ámbito de bloque.", "let tiene ámbito de función.", "var no se puede redeclarar.", "const sufre hoisting y vale undefined antes de su declaración."], r: 0,
  x: "var: ámbito de función, se puede reasignar y redeclarar. let: bloque, reasignable, no redeclarable. const: bloque, ni reasignable ni redeclarable. let y const están en la TDZ antes de declararse." },

// ───────────────────────── Tipos, coerción y operadores ─────────────────────────
{ t: "Tipos y coerción", v: "c", e: CONSOLA,
  c: `console.log(typeof null, typeof undefined, typeof NaN, typeof [], typeof function () {});`,
  o: ["object undefined number object function", "null undefined NaN array function", "object undefined NaN object function", "null undefined number array object", "object undefined number array function", "undefined undefined number object function"], r: 0,
  x: "typeof null es \"object\" (bug histórico). NaN es de tipo number. Los arrays son objetos (para distinguirlos se usa Array.isArray). Las funciones devuelven \"function\"." },

{ t: "Tipos y coerción", v: "c", e: CONSOLA,
  c: `console.log("5" + 3, "5" - 3, "5" * "2", true + 1, "3" + 4 + 5, 3 + 4 + "5");`,
  o: ["53 2 10 2 345 75", "8 2 10 2 12 12", "53 2 52 2 345 345", "53 53 10 true1 345 75", "53 2 10 2 39 75", "8 2 10 2 345 75"], r: 0,
  x: "+ con un string concatena; -, * convierten a número. true se convierte en 1. Se evalúa de izquierda a derecha: \"3\"+4 = \"34\" → \"345\"; 3+4 = 7 → \"75\"." },

{ t: "Tipos y coerción", v: "c", e: CONSOLA,
  c: `console.log("5" == 5, "5" === 5, null == undefined, null === undefined, NaN == NaN);`,
  o: ["true false true false false", "true false false false false", "true true true true true", "true false true true false", "false false true false true", "true false true false true"], r: 0,
  x: "== convierte tipos (\"5\" == 5 es true), === no. null == undefined es true pero con === no (tipos distintos). NaN no es igual a nada, ni a sí mismo." },

{ t: "Tipos y coerción", v: "c", e: CONSOLA,
  c: `console.log(parseInt("42px"), parseFloat("3.14abc"), Number("42px"), +"", parseInt("abc"));`,
  o: ["42 3.14 NaN 0 NaN", "42 3.14 42 0 NaN", "NaN NaN NaN 0 NaN", "42 3 NaN NaN NaN", "42 3.14 NaN NaN 0", "42 3.14 NaN undefined NaN"], r: 0,
  x: "parseInt/parseFloat leen desde el principio hasta el primer carácter no válido. Number() exige que todo el texto sea numérico. +\"\" convierte la cadena vacía en 0." },

{ t: "Tipos y coerción", v: "c", e: CONSOLA,
  c: `let valores = [0, "0", "", [], null, "false", NaN, {}];
let n = 0;
for (const v of valores) if (v) n++;
console.log(n);`,
  o: ["4", "3", "2", "5", "6", "1"], r: 0,
  x: "Falsy: 0, \"\", null, NaN (y false, undefined). Truthy: \"0\", [], \"false\" y {} → 4." },

{ t: "Tipos y coerción", v: "c", e: CONSOLA,
  c: `let b = new Boolean(false);
if (b) console.log("truthy"); else console.log("falsy");
console.log(typeof b, b.valueOf());`,
  o: ["truthy\nobject false", "falsy\nboolean false", "falsy\nobject false", "truthy\nboolean true", "truthy\nobject true", "falsy\nobject true"], r: 0,
  x: "new Boolean(false) crea un OBJETO, y todo objeto es truthy en un if. Su valor primitivo sigue siendo false. Por eso se recomienda usar los primitivos true/false." },

{ t: "Tipos y coerción", e: "Sobre undefined y null, ¿qué afirmación es correcta?",
  o: ["undefined lo asigna el motor de JS; null lo asigna el programador para indicar vacío intencionado.", "null lo asigna JavaScript automáticamente a las variables sin inicializar.", "typeof null devuelve \"null\".", "typeof undefined devuelve \"object\".", "null === undefined devuelve true.", "undefined y null son exactamente el mismo valor."], r: 0,
  x: "Una variable declarada sin valor vale undefined (lo pone JS). null lo pone quien programa. typeof null es \"object\" (bug histórico). null == undefined es true, pero === es false." },

{ t: "Tipos y coerción", v: "c", e: CONSOLA,
  c: `console.log(Number.MAX_VALUE * 2, -Number.MAX_VALUE * 2, Infinity - Infinity, 0 / 0 === NaN);`,
  o: ["Infinity -Infinity NaN false", "Infinity -Infinity 0 true", "NaN NaN NaN false", "Infinity Infinity NaN true", "Infinity -Infinity 0 false", "⚠ RangeError (se detiene la ejecución)"], r: 0,
  x: "Al desbordar el máximo se obtiene Infinity / -Infinity (no hay error). Infinity - Infinity es NaN. Ninguna comparación con NaN es true; se usa Number.isNaN()." },

// ───────────────────────── Condicionales y bucles ─────────────────────────
{ t: "Estructuras de control", v: "c", e: CONSOLA,
  c: `let dia = 6;
switch (dia) {
  case 6:
  case 0:
    console.log("Fin de semana");
  case 1:
    console.log("Lunes");
    break;
  default:
    console.log("Laborable");
}`,
  o: ["Fin de semana\nLunes", "Fin de semana", "Fin de semana\nLunes\nLaborable", "Laborable", "Lunes", "Fin de semana\nLaborable"], r: 0,
  x: "case 6 no tiene instrucciones y cae en case 0. Como falta el break tras \"Fin de semana\", continúa (fall-through) con case 1 hasta su break." },

{ t: "Estructuras de control", v: "c", e: CONSOLA,
  c: `let x = "1";
switch (x) {
  case 1: console.log("número"); break;
  case "1": console.log("texto"); break;
  default: console.log("ninguno");
}`,
  o: ["texto", "número", "número\ntexto", "ninguno", "texto\nninguno", RE], r: 0,
  x: "switch compara con igualdad estricta (===). \"1\" no es === 1, así que entra en case \"1\"." },

{ t: "Estructuras de control", v: "c", e: CONSOLA,
  c: `let nota = 4.5;
let r = nota >= 5 ? "Aprobado" : nota >= 4.5 ? "Compensable" : "Suspenso";
console.log(r);`,
  o: ["Compensable", "Aprobado", "Suspenso", "true", "undefined", "⚠ SyntaxError (se detiene la ejecución)"], r: 0,
  x: "Ternario anidado: 4.5 >= 5 es false → se evalúa la segunda condición, 4.5 >= 4.5 es true → \"Compensable\"." },

{ t: "Estructuras de control", v: "c", e: CONSOLA,
  c: `let nota = 7;
switch (true) {
  case nota >= 9: console.log("Sobresaliente"); break;
  case nota >= 7: console.log("Notable"); break;
  case nota >= 5: console.log("Aprobado"); break;
  default: console.log("Suspenso");
}`,
  o: ["Notable", "Notable\nAprobado", "Sobresaliente", "Aprobado", "Suspenso", "No muestra nada"], r: 0,
  x: "switch(true) compara true === cada expresión. La primera que vale true es nota >= 7, y el break evita seguir." },

{ t: "Estructuras de control", v: "c", e: CONSOLA,
  c: `let i = 5;
do {
  console.log(i);
  i++;
} while (i < 3);
console.log("fin", i);`,
  o: ["5\nfin 6", "fin 5", "5\nfin 5", "fin 6", "5\n6\nfin 7", "Bucle infinito"], r: 0,
  x: "do...while ejecuta el bloque al menos una vez, porque la condición se evalúa al final." },

{ t: "Estructuras de control", v: "c", e: CONSOLA,
  c: `let arr = [10, 20, 30];
let s = "";
for (let i in arr) s += i + 1;
console.log(s);`,
  o: ["011121", "123", "112131", "102030", "60", "1121131"], r: 0,
  x: "for...in recorre los ÍNDICES como strings (\"0\", \"1\", \"2\"). \"0\" + 1 = \"01\", etc. Por eso for...in no se recomienda para arrays." },

{ t: "Estructuras de control", v: "c", e: CONSOLA,
  c: `[1, 2, 3, 4].forEach(n => {
  if (n === 2) return;
  console.log(n);
});`,
  o: ["1\n3\n4", "1", "1\n2\n3\n4", "⚠ SyntaxError (se detiene la ejecución)", "3\n4", "1\n3"], r: 0,
  x: "En forEach, return solo sale del callback de ESE elemento (equivale a continue). forEach no se puede detener: recorre todos los elementos." },

{ t: "Estructuras de control", v: "c", e: CONSOLA,
  c: `let s = "";
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  if (i > 7) break;
  s += i;
}
console.log(s);`,
  o: ["1357", "13579", "02468", "135", "0246", "16"], r: 0,
  x: "continue salta los pares. Con los impares se concatena 1, 3, 5, 7; al llegar a 9 (> 7) break termina el bucle." },

{ t: "Estructuras de control", v: "c", e: CONSOLA,
  c: `for (const [i, letra] of ["a", "b"].entries()) {
  console.log(i, letra);
}`,
  o: ["0 a\n1 b", "1 a\n2 b", "a 0\nb 1", "0,a\n1,b", TE, "a\nb"], r: 0,
  x: "entries() devuelve pares [índice, valor] y la desestructuración del for...of los separa. Es la forma de tener el índice en un for...of." },

{ t: "Estructuras de control", e: "¿Qué bucle es el adecuado para recorrer las propiedades de un objeto plano como { nombre: 'Ana', edad: 20 }?",
  o: ["for...in", "for...of", "forEach()", "do...while", "for clásico con length", "Ninguno, los objetos no se pueden recorrer"], r: 0,
  x: "for...in recorre las claves de un objeto. for...of y forEach necesitan un iterable/array; un objeto plano no es iterable (for...of daría TypeError)." },

{ t: "Estructuras de control", e: "¿En qué bucle NO funcionan break ni continue para detener el recorrido?",
  o: ["forEach()", "for...of", "for clásico", "while", "do...while", "for...in"], r: 0,
  x: "forEach ejecuta un callback por elemento y no se puede detener. Si necesitas break, usa for...of." },

{ t: "Estructuras de control", v: "c", e: CONSOLA,
  c: `function esPrimo(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false;
  return true;
}
let primos = [];
for (let i = 1; i <= 20; i++) if (esPrimo(i)) primos.push(i);
console.log(primos.length, primos.at(-1));`,
  o: ["8 19", "9 19", "8 20", "9 20", "7 19", "8 17"], r: 0,
  x: "Primos hasta 20: 2, 3, 5, 7, 11, 13, 17, 19 → 8 números. at(-1) devuelve el último elemento." },

{ t: "Estructuras de control", v: "c", e: CONSOLA,
  c: `function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}
console.log(factorial(5), factorial(0), factorial(-3));`,
  o: ["120 1 1", "120 0 0", "120 1 NaN", "24 1 1", "120 0 " + "⚠ RangeError", "15 1 1"], r: 0,
  x: "5! = 120. Con n <= 1 se devuelve 1, así que tanto 0 como -3 devuelven 1 directamente (sin recursión infinita)." },

// ───────────────────────── Strings ─────────────────────────
{ t: "Strings", v: "c", e: CONSOLA,
  c: `let s = "JavaScript";
console.log(s.length, s.charAt(4), s[20], s.toUpperCase().indexOf("S"), s.lastIndexOf("a"));`,
  o: ["10 S undefined 4 3", "10 S  4 3", "10 c undefined 4 3", "10 S undefined -1 3", "9 S undefined 4 3", "10 S undefined 4 1"], r: 0,
  x: "Índices desde 0: charAt(4) = \"S\". Acceder a una posición inexistente con [] da undefined (charAt daría \"\"). lastIndexOf(\"a\") es la última \"a\" (posición 3)." },

{ t: "Strings", v: "c", e: CONSOLA,
  c: `let t = "a-b-c";
console.log(t.replace("-", "+"), t.replaceAll("-", ""), t.split("-").reverse().join(""));`,
  o: ["a+b-c abc cba", "a+b+c abc cba", "a+b-c abc abc", "a+b+c a-b-c cba", "a+b-c abc c-b-a", "a-b-c abc cba"], r: 0,
  x: "replace con un string solo cambia la PRIMERA aparición; replaceAll las cambia todas. split → array, reverse lo invierte y join(\"\") lo une sin separador." },

{ t: "Strings", v: "c", e: CONSOLA,
  c: `console.log("[" + "  hola ".trim() + "]", "7".padStart(3, "0"), "ab".repeat(3));`,
  o: ["[hola] 007 ababab", "[  hola ] 007 ababab", "[hola] 700 ababab", "[hola ] 007 ab3", "[hola] 007 aaabbb", "[hola] 0007 ababab"], r: 0,
  x: "trim() quita espacios al principio y al final. padStart(3, \"0\") rellena por la izquierda hasta longitud 3. repeat(3) repite la cadena." },

{ t: "Strings", v: "c", e: CONSOLA,
  c: `console.log("A".charCodeAt(0), String.fromCharCode(98), "a" < "B", "a".localeCompare("b"));`,
  o: ["65 b false -1", "65 b true -1", "97 b false -1", "65 B false 1", "65 b true 1", "1 b false -1"], r: 0,
  x: "\"A\" tiene código 65 y 98 es \"b\". Los strings se comparan por código Unicode: \"a\" (97) no es menor que \"B\" (66). localeCompare devuelve negativo si va antes." },

{ t: "Strings", v: "c", e: CONSOLA,
  c: `let s = "hola";
s[0] = "H";
s.toUpperCase();
console.log(s);`,
  o: ["hola", "Hola", "HOLA", TE, "Hhola", "undefined"], r: 0,
  x: "Los strings son inmutables: s[0] = \"H\" se ignora (sin error en modo no estricto) y toUpperCase() devuelve una cadena NUEVA que no se guarda." },

{ t: "Strings", v: "c", e: CONSOLA,
  c: `console.log("Línea1\\nLínea2".length, 'It\\'s'.length, "\\\\".length);`,
  o: ["13 4 1", "14 5 2", "12 4 1", "13 5 2", "14 4 1", "13 4 2"], r: 0,
  x: "Cada secuencia de escape (\\n, \\', \\\\) cuenta como UN solo carácter: 6 + 1 + 6 = 13; It's = 4; \\\\ es una sola barra = 1." },

{ t: "Strings", v: "c", e: CONSOLA,
  c: `let t = "Hola Mundo";
let r = "";
for (const ch of t) {
  r += ch === ch.toUpperCase() ? ch.toLowerCase() : ch.toUpperCase();
}
console.log(r);`,
  o: ["hOLA mUNDO", "HOLA MUNDO", "hola mundo", "Hola Mundo", "hOLAmUNDO", "HoLa MuNdO"], r: 0,
  x: "Si el carácter ya está en mayúscula se pasa a minúscula y viceversa. El espacio no cambia." },

{ t: "Strings", v: "c", e: CONSOLA,
  c: `let tel = "+34 600 123 456";
console.log(tel.startsWith("+34"), tel.endsWith("456"), tel.slice(0, 3), tel.replaceAll(" ", "").length);`,
  o: ["true true +34 12", "true true +34 15", "true false +3 12", "false true +34 12", "true true +34  12", "true true 34 12"], r: 0,
  x: "startsWith/endsWith comprueban el principio/final. slice(0, 3) toma los índices 0, 1 y 2. Sin espacios quedan 12 caracteres." },

{ t: "Strings", v: "c", e: CONSOLA,
  c: `let seg = 125;
let m = Math.floor(seg / 60), s = seg % 60;
console.log(String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0"));`,
  o: ["02:05", "2:5", "02:5", "2:05", "02:50", "2.08:05"], r: 0,
  x: "125 s = 2 min y 5 s (resto de dividir entre 60). padStart añade ceros a la izquierda, como en un cronómetro." },

{ t: "Strings", v: "c", e: CONSOLA,
  c: `let s = "a😀b";
console.log(s.length, [...s].length);`,
  o: ["4 3", "3 3", "3 4", "4 4", "5 3", "4 2"], r: 0,
  x: "El emoji ocupa 2 unidades UTF-16, así que length cuenta 4. El spread (y for...of) recorre por caracteres reales → 3." },

{ t: "Strings", v: "c", e: CONSOLA,
  c: `let s = "Desarrollo";
console.log(s.substring(3), s.substring(-2, 3), s.slice(-3), s.at(-1), s.indexOf("z"));`,
  o: ["arrollo Des llo o -1", "arrollo  llo o -1", "arrollo Des llo o undefined", "sarrollo Des llo o -1", "arrollo De llo o -1", "arrollo Des oll o -1"], r: 0,
  x: "substring trata los negativos como 0: substring(-2, 3) = substring(0, 3) = \"Des\". slice sí acepta negativos (cuenta desde el final). indexOf devuelve -1 si no lo encuentra." },

// ───────────────────────── Arrays ─────────────────────────
{ t: "Arrays", v: "c", e: CONSOLA,
  c: `let a = [1, 2, 3];
console.log(a.push(4), a.pop(), a.shift(), a.unshift(0), a.join());`,
  o: ["4 4 1 3 0,2,3", "1,2,3,4 4 1 0 0,2,3", "4 4 1 4 0,2,3", "4 3 1 3 0,2,3", "4 4 1 3 0,1,2,3", "3 4 1 3 0,2,3"], r: 0,
  x: "push y unshift devuelven la NUEVA longitud; pop y shift devuelven el elemento eliminado. Tras todo, a = [0, 2, 3]." },

{ t: "Arrays", v: "c", e: CONSOLA,
  c: `let a = [1, 2, 3, 4, 5];
let b = a.slice(1, 3);
let c = a.splice(1, 2, "x");
console.log(b.join(), c.join(), a.join());`,
  o: ["2,3 2,3 1,x,4,5", "2,3 2,3 1,2,3,4,5", "2,3,4 2,3 1,x,4,5", "2,3 1,x,4,5 1,x,4,5", "2,3 2,3 1,x,2,3,4,5", "2 2,3 1,x,4,5"], r: 0,
  x: "slice(1, 3) copia los índices 1 y 2 sin modificar el array. splice(1, 2, \"x\") elimina 2 elementos desde el índice 1, los devuelve e inserta \"x\" MODIFICANDO el original." },

{ t: "Arrays", v: "c", e: CONSOLA,
  c: `let n = [10, 1, 5, 100];
console.log(n.sort().join());
console.log(n.sort((a, b) => a - b).join());`,
  o: ["1,10,100,5\n1,5,10,100", "1,5,10,100\n1,5,10,100", "1,10,100,5\n100,10,5,1", "10,1,5,100\n1,5,10,100", "1,5,10,100\n100,10,5,1", "100,10,5,1\n1,5,10,100"], r: 0,
  x: "sort() sin función compara como TEXTO (\"100\" va antes que \"5\"). Para números hay que pasar (a, b) => a - b." },

{ t: "Arrays", v: "c", e: CONSOLA,
  c: `let r = [1, 2, 3, 4, 5, 6]
  .filter(n => n % 2 === 0)
  .map(n => n * 10)
  .reduce((acc, n) => acc + n, 0);
console.log(r);`,
  o: ["120", "210", "90", "12", "20,40,60", "0"], r: 0,
  x: "filter deja los pares [2, 4, 6], map los multiplica por 10 [20, 40, 60] y reduce los suma desde 0 → 120." },

{ t: "Arrays", v: "c", e: CONSOLA,
  c: `let a = [1, NaN, 3];
console.log(a.indexOf(NaN), a.includes(NaN), a.find(x => x > 1), a.findIndex(x => x > 5));`,
  o: ["-1 true 3 -1", "1 true 3 -1", "-1 false 3 -1", "1 true 3 undefined", "-1 true NaN -1", "-1 true 3 undefined"], r: 0,
  x: "indexOf usa === y NaN !== NaN → -1; includes sí detecta NaN. find devuelve el primer elemento que cumple (NaN > 1 es false). findIndex devuelve -1 si ninguno cumple." },

{ t: "Arrays", v: "c", e: CONSOLA,
  c: `let a = [1, 2, 3];
a[5] = 6;
console.log(a.length, a[4]);
a.length = 2;
console.log(a.join());`,
  o: ["6 undefined\n1,2", "4 undefined\n1,2", "6 null\n1,2", "6 undefined\n1,2,3,,,6", "4 6\n1,2", RE], r: 0,
  x: "Asignar en el índice 5 deja huecos (undefined) y length pasa a 6. Reducir length trunca el array." },

{ t: "Arrays", v: "c", e: CONSOLA,
  c: `let a = [1, 2];
let b = a;
let c = [...a];
b.push(3);
console.log(a.length, c.length, a === b, a == c);`,
  o: ["3 2 true false", "2 2 false false", "3 3 true true", "3 2 true true", "2 2 true false", "3 3 true false"], r: 0,
  x: "b = a copia la REFERENCIA (es el mismo array). [...a] crea una copia nueva. Los arrays se comparan por referencia, nunca por contenido." },

{ t: "Arrays", v: "c", e: CONSOLA,
  c: `console.log(Array.from("hola").reverse().join(""), new Array(3).fill(0).join("-"), Array.of(3).length);`,
  o: ["aloh 0-0-0 1", "aloh 0-0-0 3", "hola 0-0-0 1", "aloh 000 1", "aloh 0-0-0-0 1", "a,l,o,h 0-0-0 1"], r: 0,
  x: "Array.from(\"hola\") crea [\"h\",\"o\",\"l\",\"a\"]. new Array(3) crea 3 huecos que fill(0) rellena. Array.of(3) crea [3] (un elemento), a diferencia de new Array(3)." },

{ t: "Arrays", v: "c", e: CONSOLA,
  c: `let tablero = [];
for (let f = 0; f < 3; f++) {
  tablero[f] = [];
  for (let c = 0; c < 3; c++) {
    tablero[f][c] = (f + c) % 2 === 0 ? "B" : "N";
  }
}
console.log(tablero[1].join(""), tablero[2][2], tablero.length);`,
  o: ["NBN B 3", "BNB B 3", "NBN N 3", "NBN B 9", "BNB N 3", "NBN B 2"], r: 0,
  x: "Como en el tablero de ajedrez, una casilla es blanca si (fila + columna) es par. Fila 1: 1, 2, 3 → N B N. [2][2]: 4 → B. tablero.length es el número de filas." },

{ t: "Arrays", v: "c", e: CONSOLA,
  c: `let [x, , y = 5, ...resto] = [1, 2, undefined, 4, 5];
console.log(x, y, resto.length);`,
  o: ["1 5 2", "1 2 3", "1 undefined 2", "1 5 3", "2 5 2", "1 4 1"], r: 0,
  x: "Desestructuración: x = 1, el hueco salta el 2, y recibe undefined y toma su valor por defecto (5), y resto recoge [4, 5]." },

{ t: "Arrays", v: "c", e: CONSOLA,
  c: `let edades = [15, 22, 30];
console.log(edades.some(e => e < 18), edades.every(e => e < 18), edades.indexOf(22), edades.join(" | "));`,
  o: ["true false 1 15 | 22 | 30", "false false 1 15 | 22 | 30", "true true 1 15 | 22 | 30", "true false 2 15 | 22 | 30", "true false 1 15,22,30", "true false 22 15 | 22 | 30"], r: 0,
  x: "some: ¿alguno cumple? (15 < 18 → true). every: ¿todos cumplen? → false. indexOf devuelve la posición (1). join usa el separador indicado." },

{ t: "Arrays", v: "c", e: CONSOLA,
  c: `let nums = [3, 8, 1];
let dobles = nums.map(n => n * 2);
let res = nums.forEach(n => n * 2);
console.log(nums.join(), dobles.join(), res);`,
  o: ["3,8,1 6,16,2 undefined", "6,16,2 6,16,2 undefined", "3,8,1 6,16,2 6,16,2", "3,8,1 6,16,2 null", "6,16,2 6,16,2 6,16,2", "3,8,1 3,8,1 undefined"], r: 0,
  x: "map devuelve un array NUEVO sin modificar el original. forEach siempre devuelve undefined." },

// ───────────────────────── Math y Number ─────────────────────────
{ t: "Math y Number", v: "c", e: CONSOLA,
  c: `console.log(Math.round(2.5), Math.round(-2.5), Math.floor(-2.5), Math.ceil(2.1), Math.trunc(-2.9));`,
  o: ["3 -2 -3 3 -2", "3 -3 -3 3 -2", "2 -2 -3 3 -3", "3 -2 -2 3 -2", "3 -3 -2 2 -3", "3 -2 -3 2 -2"], r: 0,
  x: "round redondea .5 hacia arriba (hacia +∞): -2.5 → -2. floor siempre hacia abajo (-3), ceil hacia arriba (3), trunc quita los decimales (-2)." },

{ t: "Math y Number", e: "¿Qué expresión devuelve un número entero aleatorio entre 1 y 6, ambos incluidos (como un dado)?",
  o: ["Math.floor(Math.random() * 6) + 1", "Math.round(Math.random() * 6)", "Math.random() * 6 + 1", "Math.floor(Math.random() * 5) + 1", "Math.floor(Math.random() * 7)", "Math.ceil(Math.random()) * 6"], r: 0,
  x: "Math.random() da [0, 1). × 6 → [0, 6); floor → 0..5; + 1 → 1..6, todos con la misma probabilidad. round daría 0..6 con extremos menos probables." },

{ t: "Math y Number", v: "c", e: CONSOLA,
  c: `console.log(Math.max(), Math.min(), Math.max(...[3, 9, 2]), Math.max(1, "5"), Math.max(1, "a"));`,
  o: ["-Infinity Infinity 9 5 NaN", "0 0 9 5 NaN", "undefined undefined 9 5 1", "-Infinity Infinity 9 1 NaN", "Infinity -Infinity 9 5 NaN", "-Infinity Infinity NaN 5 NaN"], r: 0,
  x: "Sin argumentos, max devuelve -Infinity y min Infinity. El spread pasa los elementos sueltos. \"5\" se convierte a número; \"a\" da NaN y contamina el resultado." },

{ t: "Math y Number", v: "c", e: CONSOLA,
  c: `let n = 3.14159;
console.log(n.toFixed(2), typeof n.toFixed(2), (0.1 + 0.2).toFixed(2) == 0.3, 0.1 + 0.2 === 0.3);`,
  o: ["3.14 string true false", "3.14 number true true", "3.14 string false false", "3.14 number true false", "3.15 string true false", "3.14 string true true"], r: 0,
  x: "toFixed devuelve un STRING. 0.1 + 0.2 = 0.30000000000000004 (coma flotante), por eso === 0.3 es false; redondeado a 2 decimales y comparado con == sí da true." },

{ t: "Math y Number", v: "c", e: CONSOLA,
  c: `console.log(Number.isInteger(5.0), Number.isNaN("abc"), isNaN("abc"), 1 / 0, -1 / 0);`,
  o: ["true false true Infinity -Infinity", "false false true Infinity -Infinity", "true true true Infinity -Infinity", "true false true NaN NaN", "true false false Infinity -Infinity", "true false true " + "⚠ Error"], r: 0,
  x: "5.0 es entero. Number.isNaN no convierte (\"abc\" no es el valor NaN → false); isNaN global sí convierte → true. Dividir entre 0 da Infinity, no error." },

{ t: "Math y Number", v: "c", e: CONSOLA,
  c: `console.log(Math.pow(2, 10), 2 ** 3 ** 2, Math.sqrt(-1), Math.PI.toFixed(4));`,
  o: ["1024 512 NaN 3.1416", "1024 64 NaN 3.1416", "1024 512 -1 3.1415", "20 512 NaN 3.1416", "1024 64 i 3.1416", "1024 512 NaN 3.14"], r: 0,
  x: "** es asociativo por la derecha: 2 ** (3 ** 2) = 2 ** 9 = 512. La raíz de un negativo es NaN. toFixed(4) redondea: 3.1416." },

{ t: "Math y Number", v: "c", e: CONSOLA,
  c: `console.log((10).toString(2), parseInt("1010", 2), (255).toString(16), parseInt("ff", 16) + 1);`,
  o: ["1010 10 ff 256", "1010 1010 ff 256", "10 10 ff 256", "1010 10 FF 256", "1010 10 ff ff1", "0101 10 ff 256"], r: 0,
  x: "toString(base) convierte un número a texto en esa base; parseInt(texto, base) hace lo contrario. ff en hexadecimal es 255." },

{ t: "Math y Number", e: "¿Cuál de estos objetos NO se puede instanciar con new porque es estático?",
  o: ["Math", "Date", "Map", "Promise", "Array", "Set"], r: 0,
  x: "Math (igual que JSON) es un objeto estático: se usa directamente, p. ej. Math.random(). new Math() lanza TypeError." },

{ t: "Math y Number", v: "c", e: CONSOLA,
  c: `console.log("2" + 2 * "3", ("2" + 2) * "3", "10" / "4", "abc" * 1);`,
  o: ["26 66 2.5 NaN", "12 66 2.5 NaN", "26 12 2.5 NaN", "26 66 2 NaN", "8 66 2.5 0", "26 66 2.5 abc"], r: 0,
  x: "* tiene prioridad: 2 * \"3\" = 6 y \"2\" + 6 = \"26\". (\"2\" + 2) = \"22\" y \"22\" * \"3\" = 66. / convierte a número: 2.5." },

// ───────────────────────── Date ─────────────────────────
{ t: "Date", v: "c", e: CONSOLA,
  c: `let d = new Date(2026, 0, 31);
d.setDate(d.getDate() + 1);
console.log(d.getDate(), d.getMonth());`,
  o: ["1 1", "32 0", "1 2", "32 1", "1 0", "31 1"], r: 0,
  x: "Date ajusta solo el desbordamiento: 31 de enero + 1 día = 1 de febrero. getMonth() devuelve 1 (febrero, porque enero es 0)." },

{ t: "Date", v: "c", e: CONSOLA,
  c: `let d = new Date(2026, 10, 10);
console.log(d.getDay(), ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"][d.getDay()]);`,
  o: ["2 Mar", "10 Mar", "1 Lun", "3 Mié", "2 Lun", "10 undefined"], r: 0,
  x: "new Date(2026, 10, 10) es el 10 de noviembre de 2026 (martes). getDay() devuelve el día de la semana: 0 = domingo … 2 = martes. getDate() sería el día del mes." },

{ t: "Date", v: "c", e: CONSOLA,
  c: `let d = new Date(2026, 12, 1);
console.log(d.getFullYear(), d.getMonth() + 1, d.getDate());`,
  o: ["2027 1 1", "2026 13 1", "2026 12 1", "2027 0 1", "2026 1 1", "Invalid Date"], r: 0,
  x: "El mes 12 no existe (van de 0 a 11): se desborda al mes 0 del año siguiente → enero de 2027." },

{ t: "Date", v: "c", e: CONSOLA,
  c: `let a = new Date(2026, 0, 1);
let b = new Date(2026, 0, 11);
console.log((b - a) / (1000 * 60 * 60 * 24), typeof (b - a));`,
  o: ["10 number", "11 number", "10 object", "864000000 number", "NaN number", "10 string"], r: 0,
  x: "Restar dos fechas da la diferencia en milisegundos (un number). Dividiendo entre los ms de un día se obtienen 10 días." },

{ t: "Date", v: "c", e: CONSOLA,
  c: `let d = new Date(2026, 2, 0);
console.log(d.getDate());`,
  o: ["28", "0", "29", "31", "1", "30"], r: 0,
  x: "El día 0 de un mes es el último día del mes anterior. new Date(2026, 2, 0) es el último día de febrero de 2026 (no bisiesto) → 28." },

{ t: "Date", v: "w", e: "Se ejecuta el siguiente script en un navegador. ¿Qué se escribe en la página?",
  c: `let hoy = new Date(2026, 11, 25);
document.write(hoy.getDate() + "-" + hoy.getMonth() + "-" + hoy.getDay());`,
  o: ["25-11-5", "25-12-5", "25-11-25", "25-12-4", "5-11-25", "25-11-4"], r: 0,
  x: "getMonth() devuelve 11 (diciembre) y no se le suma 1. El 25/12/2026 es viernes → getDay() = 5." },

// ───────────────────────── Objetos, Function y JSON ─────────────────────────
{ t: "Objetos y JSON", v: "c", e: CONSOLA,
  c: `let coche = { marca: "Seat", modelo: "Ibiza", año: 2020 };
console.log(Object.keys(coche).length, Object.values(coche)[2], Object.entries(coche)[0].join("="));`,
  o: ["3 2020 marca=Seat", "3 Ibiza marca=Seat", "3 2020 marca,Seat", "2 2020 marca=Seat", "3 año marca=Seat", "3 2020 Seat=marca"], r: 0,
  x: "keys da los nombres, values los valores y entries los pares [clave, valor]." },

{ t: "Objetos y JSON", v: "c", e: CONSOLA,
  c: `const o = Object.freeze({ x: 1, y: { z: 2 } });
o.x = 10;
o.y.z = 20;
console.log(o.x, o.y.z);`,
  o: ["1 20", "10 20", "1 2", "10 2", TE, "undefined 20"], r: 0,
  x: "Object.freeze es superficial: impide cambiar x, pero el objeto anidado y no está congelado. (En un script normal, no estricto, la asignación a x se ignora sin error)." },

{ t: "Objetos y JSON", v: "c", e: CONSOLA,
  c: `let a = { x: 1, y: 2 };
let b = Object.assign({}, a, { y: 5, z: 6 });
console.log(a.y, b.y, Object.keys(b).join());`,
  o: ["2 5 x,y,z", "5 5 x,y,z", "2 2 x,y,z", "2 5 x,y,y,z", "2 5 y,z", "2 5 x,z,y"], r: 0,
  x: "Object.assign copia en el destino ({}) las propiedades de cada origen en orden; la última y gana. a no se modifica." },

{ t: "Objetos y JSON", v: "c", e: CONSOLA,
  c: `let prop = "color";
let obj = { color: "rojo", prop: "azul" };
console.log(obj[prop], obj.prop, obj["col" + "or"], obj.tamaño);`,
  o: ["rojo azul rojo undefined", "azul azul rojo undefined", "rojo rojo rojo undefined", "rojo azul undefined undefined", "rojo azul rojo null", "rojo azul rojo " + RE], r: 0,
  x: "Con corchetes se usa el VALOR de la expresión (prop vale \"color\"). Con punto se usa el nombre literal (\"prop\"). Una propiedad inexistente es undefined, no error." },

{ t: "Objetos y JSON", v: "c", e: CONSOLA,
  c: `let o = { nombre: "Ana", edad: undefined, saludar() {}, notas: [7, 8] };
let s = JSON.stringify(o);
console.log(s);
console.log(typeof s, JSON.parse(s).notas[1]);`,
  o: ['{"nombre":"Ana","notas":[7,8]}\nstring 8', '{"nombre":"Ana","edad":undefined,"notas":[7,8]}\nstring 8', '{"nombre":"Ana","edad":null,"notas":[7,8]}\nstring 8', '{nombre:"Ana",notas:[7,8]}\nobject 8', '{"nombre":"Ana","notas":[7,8]}\nobject 8', '{"nombre":"Ana","saludar":{},"notas":[7,8]}\nstring 8'], r: 0,
  x: "JSON.stringify omite las propiedades con valor undefined y las funciones. Devuelve un string; JSON.parse lo vuelve a convertir en objeto." },

{ t: "Objetos y JSON", v: "c", e: CONSOLA,
  c: `let a = { d: new Date(2026, 0, 1) };
let b = JSON.parse(JSON.stringify(a));
console.log(typeof a.d, typeof b.d);`,
  o: ["object string", "object object", "string string", "date date", "object undefined", "date string"], r: 0,
  x: "JSON no tiene tipo fecha: al hacer stringify la Date se convierte en texto ISO y parse la deja como string." },

{ t: "Objetos y JSON", e: "¿Qué hace JSON.parse(cadena)?",
  o: ["Convierte un string con formato JSON en un objeto/array de JavaScript.", "Convierte un objeto de JavaScript en un string JSON.", "Crea una instancia con new JSON().", "Envía el objeto al servidor.", "Comprueba si un objeto tiene formato JSON y devuelve true/false.", "Copia las propiedades de un objeto a otro."], r: 0,
  x: "JSON.stringify: objeto → texto. JSON.parse: texto → objeto. JSON es estático, no se puede hacer new JSON()." },

{ t: "Funciones", v: "c", e: CONSOLA,
  c: `function suma(a, b, c = 0) { return a + b + c; }
console.log(suma.length, suma.name, suma(1, 2), suma(1));`,
  o: ["2 suma 3 NaN", "3 suma 3 NaN", "2 suma 3 1", "3 suma 3 1", "2 function 3 NaN", "2 suma 3 " + TE], r: 0,
  x: "length cuenta los parámetros ANTES del primero con valor por defecto (2). suma(1): b es undefined → 1 + undefined + 0 = NaN." },

{ t: "Funciones", v: "c", e: CONSOLA,
  c: `function presentar(saludo, signo) {
  return saludo + ", " + this.nombre + signo;
}
let p = { nombre: "Eva" };
console.log(presentar.call(p, "Hola", "!"));
console.log(presentar.apply(p, ["Adiós", "."]));
let f = presentar.bind(p, "Hey");
console.log(f("?"));`,
  o: ["Hola, Eva!\nAdiós, Eva.\nHey, Eva?", "Hola, Eva!\nAdiós,Eva, .\nHey, Eva?", "Hola, undefined!\nAdiós, undefined.\nHey, undefined?", "Hola, Eva!\nAdiós, Eva.\nHey, Evaundefined", "Hola, Eva!\n" + TE, "Hola, Eva!\nAdiós, Eva.\n?, Eva" + "undefined"], r: 0,
  x: "call pasa los argumentos sueltos, apply en un array. bind crea una función nueva con this fijado (y aquí también el primer argumento)." },

{ t: "Funciones", v: "c", e: CONSOLA,
  c: `console.log(doble(4));
function doble(n) { return n * 2; }
console.log(triple(4));
var triple = function (n) { return n * 3; };`,
  o: ["8\n" + TE, "8\n12", RE, "8\n" + RE, "8\nundefined", TE], r: 0,
  x: "Las declaraciones de función se elevan completas. Con una expresión de función en var solo se eleva la variable (vale undefined) y llamar a undefined() lanza TypeError." },

{ t: "Funciones", v: "c", e: CONSOLA,
  c: `function contador() {
  let c = 0;
  return () => ++c;
}
let a = contador(), b = contador();
a(); a();
console.log(a(), b());`,
  o: ["3 1", "3 4", "1 1", "2 1", "3 0", "4 1"], r: 0,
  x: "Cada llamada a contador() crea su propia variable c (closure). a ya se ha llamado 2 veces, la tercera devuelve 3; b es independiente y devuelve 1." },

// ───────────────────────── Map y Set ─────────────────────────
{ t: "Map y Set", v: "c", e: CONSOLA,
  c: `let s = new Set([1, 2, 2, "2", 3, 1]);
s.add(3).add(4);
console.log(s.size, s.has("2"), [...s].join());`,
  o: ["5 true 1,2,2,3,4", "4 false 1,2,3,4", "4 true 1,2,3,4", "6 true 1,2,2,3,4", "5 false 1,2,2,3,4", "7 true 1,2,2,2,3,1,4"], r: 0,
  x: "Set elimina duplicados usando igualdad estricta: 2 y \"2\" son distintos. 3 ya existía. Quedan 1, 2, \"2\", 3, 4." },

{ t: "Map y Set", v: "c", e: CONSOLA,
  c: `let s = new Set();
s.add({ a: 1 });
s.add({ a: 1 });
s.add(NaN).add(NaN);
console.log(s.size);`,
  o: ["3", "2", "4", "1", "0", TE], r: 0,
  x: "Dos objetos literales son referencias distintas → 2 elementos. En un Set, NaN se considera igual a NaN → solo se añade una vez." },

{ t: "Map y Set", v: "c", e: CONSOLA,
  c: `let m = new Map();
m.set(1, "num").set("1", "str").set(true, "bool");
console.log(m.size, m.get(1), m.get("1"), m.has(false));
m.delete(1);
console.log([...m.keys()].join());`,
  o: ["3 num str false\n1,true", "2 str str false\n1,true", "3 num str false\ntrue", "3 num num false\n1,true", "3 num str true\n1,true", "2 num str false\n1"], r: 0,
  x: "En un Map la clave conserva su tipo: 1, \"1\" y true son 3 claves distintas. Al borrar la clave numérica 1 quedan \"1\" y true." },

{ t: "Map y Set", v: "c", e: CONSOLA,
  c: `let o = { b: 1, 2: "x", a: 2, 1: "y" };
console.log(Object.keys(o).join());
let m = new Map([["b", 1], [2, "x"], ["a", 2], [1, "y"]]);
console.log([...m.keys()].join());`,
  o: ["1,2,b,a\nb,2,a,1", "b,2,a,1\nb,2,a,1", "1,2,a,b\nb,2,a,1", "b,2,a,1\n1,2,b,a", "1,2,b,a\n1,2,b,a", "a,b,1,2\nb,2,a,1"], r: 0,
  x: "En un objeto las claves numéricas se ordenan primero de menor a mayor y luego van las de texto en orden de inserción. Un Map mantiene SIEMPRE el orden de inserción." },

{ t: "Map y Set", e: "Necesitas guardar pares clave-valor donde las claves son objetos (por ejemplo, elementos del DOM) y el orden de inserción importa. ¿Qué estructura usarías?",
  o: ["Map", "Object {}", "Set", "Array []", "JSON", "String"], r: 0,
  x: "Map admite claves de cualquier tipo y mantiene el orden de inserción. En un Object las claves se convierten a string." },

// ───────────────────────── Promesas y temporizadores ─────────────────────────
{ t: "Promesas y asincronía", v: "c", e: CONSOLA,
  c: `console.log(1);
setTimeout(() => console.log(2), 0);
Promise.resolve().then(() => console.log(3));
console.log(4);`,
  o: ["1\n4\n3\n2", "1\n2\n3\n4", "1\n4\n2\n3", "1\n3\n4\n2", "1\n2\n4\n3", "4\n1\n3\n2"], r: 0,
  x: "Primero el código síncrono (1 y 4). Después las microtareas (then de las promesas → 3) y por último las macrotareas como setTimeout, aunque sea de 0 ms (2)." },

{ t: "Promesas y asincronía", v: "c", e: CONSOLA,
  c: `new Promise((res, rej) => rej("fallo"))
  .then(() => console.log("ok"))
  .catch(e => console.log("error:", e))
  .finally(() => console.log("fin"));
console.log("inicio");`,
  o: ["inicio\nerror: fallo\nfin", "error: fallo\nfin\ninicio", "inicio\nok\nerror: fallo\nfin", "inicio\nerror: fallo", "ok\nerror: fallo\nfin\ninicio", "inicio\nfin\nerror: fallo"], r: 0,
  x: "Los manejadores siempre son asíncronos, así que \"inicio\" sale primero. Al rechazarse se salta el then, se ejecuta catch y finally se ejecuta siempre." },

{ t: "Promesas y asincronía", v: "c", e: CONSOLA,
  c: `let p = new Promise((resolve, reject) => {
  resolve("A");
  resolve("B");
  reject("C");
});
p.then(v => console.log(v)).catch(e => console.log("err", e));`,
  o: ["A", "B", "err C", "A\nB", "A\nerr C", "A\nB\nerr C"], r: 0,
  x: "Una promesa solo cambia de estado UNA vez (pending → fulfilled o rejected). Las llamadas posteriores a resolve/reject se ignoran." },

{ t: "Promesas y asincronía", v: "c", e: CONSOLA,
  c: `Promise.resolve(2)
  .then(x => x * 3)
  .then(x => { console.log(x); return x + 1; })
  .then(x => console.log(x));`,
  o: ["6\n7", "2\n3", "6\n6", "6\nundefined", "5\n6", "2\n7"], r: 0,
  x: "Cada then recibe lo que devolvió el anterior: 2 → 6 → se muestra 6 y devuelve 7 → se muestra 7." },

{ t: "Promesas y asincronía", v: "c", e: CONSOLA,
  c: `let n = 0;
let id = setInterval(() => {
  n++;
  console.log("tick", n);
  if (n === 3) clearInterval(id);
}, 10);`,
  o: ["tick 1\ntick 2\ntick 3", "tick 1", "tick 1\ntick 2", "tick 0\ntick 1\ntick 2", "tick 1\ntick 2\ntick 3\ntick 4 (y no para)", "No muestra nada porque setInterval necesita un nombre de función"], r: 0,
  x: "setInterval repite la función cada 10 ms hasta que clearInterval(id) la detiene con el identificador que devolvió." },

{ t: "Promesas y asincronía", e: "¿Cuáles son los tres estados posibles de una Promise?",
  o: ["pending, fulfilled y rejected", "start, running y end", "then, catch y finally", "waiting, done y error", "resolve, reject y finally", "open, closed y failed"], r: 0,
  x: "Una promesa empieza en pending y pasa una sola vez a fulfilled (cumplida) o rejected (rechazada). then/catch/finally son métodos, no estados." },

// ───────────────────────── BOM: objetos de alto nivel ─────────────────────────
{ t: "Objetos del navegador (BOM)", e: "¿Cuál es el objeto de más alto nivel del BOM, del que cuelgan document, location, history, navigator y screen?",
  o: ["window", "document", "navigator", "Object", "body", "screen"], r: 0,
  x: "window es el objeto global. Por eso alert() equivale a window.alert() (y también a self.alert())." },

{ t: "Objetos del navegador (BOM)", e: "Para la URL https://tienda.com:8080/productos/ver.html?id=7#fotos, ¿qué devuelve location.search?",
  o: ["\"?id=7\"", "\"#fotos\"", "\"/productos/ver.html\"", "\"tienda.com:8080\"", "\"id=7#fotos\"", "\"https:\""], r: 0,
  x: "search es la parte de consulta (con ?). hash = \"#fotos\", pathname = \"/productos/ver.html\", host = \"tienda.com:8080\", hostname = \"tienda.com\", port = \"8080\", protocol = \"https:\"." },

{ t: "Objetos del navegador (BOM)", e: "Para la URL https://tienda.com:8080/productos/ver.html?id=7#fotos, ¿cuál es la diferencia entre location.host y location.hostname?",
  o: ["host = \"tienda.com:8080\" y hostname = \"tienda.com\"", "host = \"tienda.com\" y hostname = \"tienda.com:8080\"", "Son iguales: \"tienda.com\"", "host = \"https://tienda.com\" y hostname = \"tienda.com\"", "host = \"8080\" y hostname = \"tienda.com\"", "host = la IP del servidor y hostname = el dominio"], r: 0,
  x: "host incluye el puerto; hostname es solo el nombre de dominio (o IP)." },

{ t: "Objetos del navegador (BOM)", e: "¿Qué diferencia hay entre location.assign(url) y location.replace(url)?",
  o: ["replace sustituye la entrada actual del historial, así que el botón Atrás no vuelve a la página anterior.", "assign recarga la página actual y replace abre una ventana nueva.", "Son idénticos.", "replace solo cambia el hash de la URL.", "assign no añade entrada al historial y replace sí.", "replace cambia el texto de la URL sin cargar la página."], r: 0,
  x: "assign carga el documento y añade una entrada al historial. replace carga el documento reemplazando la entrada actual." },

{ t: "Objetos del navegador (BOM)", e: "¿Qué instrucción equivale a pulsar el botón Atrás del navegador?",
  o: ["history.back()", "history.forward()", "location.reload()", "history.go(1)", "window.close()", "location.back()"], r: 0,
  x: "history.back() equivale a history.go(-1). forward() y go(1) avanzan; reload() recarga la página actual." },

{ t: "Objetos del navegador (BOM)", e: "Un usuario guarda datos con sessionStorage y cierra la pestaña. Al volver a abrir la web en otra pestaña nueva, ¿qué ocurre con esos datos?",
  o: ["Se han borrado: sessionStorage solo dura mientras la pestaña está abierta.", "Siguen ahí porque sessionStorage no caduca.", "Se han enviado al servidor en la última petición.", "Se pasan automáticamente a localStorage.", "Solo se conservan si eran números.", "Se conservan 24 horas."], r: 0,
  x: "localStorage persiste sin caducidad (incluso cerrando el navegador). sessionStorage se borra al cerrar la pestaña. Ninguno se envía al servidor en cada petición (a diferencia de las cookies)." },

{ t: "Objetos del navegador (BOM)", v: "c", e: CONSOLA,
  c: `localStorage.clear();
localStorage.setItem("n", 5);
localStorage.setItem("obj", { a: 1 });
console.log(typeof localStorage.getItem("n"), localStorage.getItem("obj"), localStorage.getItem("nada"));`,
  o: ["string [object Object] null", "number [object Object] undefined", "string {\"a\":1} null", "number {a: 1} null", "string [object Object] undefined", TE], r: 0,
  x: "Web Storage solo guarda strings: el 5 se convierte en \"5\" y el objeto en \"[object Object]\" (habría que usar JSON.stringify). getItem de una clave inexistente devuelve null." },

{ t: "Objetos del navegador (BOM)", v: "c",
  e: "Se ejecuta el siguiente código. El usuario escribe 20 en el cuadro de diálogo y pulsa Aceptar. ¿Qué muestra la consola?",
  c: `let edad = prompt("¿Cuántos años tienes?");
console.log(edad + 1, typeof edad, Number(edad) + 1);`,
  o: ["201 string 21", "21 number 21", "201 number 21", "21 string 21", "201 string 201", "NaN string 21"], r: 0,
  x: "prompt() siempre devuelve un string (o null si se pulsa Cancelar). \"20\" + 1 concatena → \"201\". Hay que convertirlo con Number/parseInt." },

{ t: "Objetos del navegador (BOM)", e: "¿Qué devuelve confirm(\"¿Eres mayor de edad?\") si el usuario pulsa Cancelar?",
  o: ["false", "null", "undefined", "\"\" (cadena vacía)", "0", "\"Cancelar\""], r: 0,
  x: "confirm devuelve true (Aceptar) o false (Cancelar). prompt devuelve null al cancelar; alert devuelve undefined." },

{ t: "Objetos del navegador (BOM)", e: "Has abierto una ventana con let v = window.open('ayuda.html', 'ayuda', 'width=400,height=300'). ¿Cómo la cierras desde el script original?",
  o: ["v.close()", "window.close('ayuda')", "close(ayuda.html)", "document.close()", "v.closed = true", "history.back()"], r: 0,
  x: "window.open devuelve una referencia a la nueva ventana; se guarda en una variable para controlarla. v.closed solo indica (true/false) si ya está cerrada." },

{ t: "Objetos del navegador (BOM)", e: "¿Qué objeto del BOM usarías para saber si el navegador tiene las cookies habilitadas?",
  o: ["navigator (navigator.cookieEnabled)", "screen", "location", "history", "document.cookie", "window.opener"], r: 0,
  x: "navigator contiene información del navegador: userAgent, platform, cookieEnabled, appName… document.cookie devuelve las cookies, no si están habilitadas." },

{ t: "Objetos del navegador (BOM)", e: "¿Qué propiedad devuelve la anchura total de la pantalla del usuario (no de la ventana)?",
  o: ["screen.width", "window.innerWidth", "document.width", "navigator.width", "screen.colorDepth", "location.width"], r: 0,
  x: "screen describe el monitor (width, height, availWidth, availHeight, colorDepth, pixelDepth). innerWidth es el área visible de la ventana." },

{ t: "Objetos del navegador (BOM)", e: "¿Qué propiedad de window devuelve una referencia a la ventana que abrió la ventana actual?",
  o: ["opener", "parent", "self", "top", "history", "frames"], r: 0,
  x: "opener apunta a la ventana que hizo window.open (null si no la abrió otra). parent es la ventana padre de un iframe; self es la propia ventana." },

{ t: "Objetos del navegador (BOM)", e: "¿Qué método del objeto document devuelve una colección con todos los elementos <p> de la página?",
  o: ["document.getElementsByTagName(\"p\")", "document.getElementById(\"p\")", "document.getElementsByName(\"p\")", "document.write(\"p\")", "document.links", "document.forms(\"p\")"], r: 0,
  x: "getElementsByTagName busca por etiqueta; getElementById por atributo id (un único elemento); getElementsByName por atributo name." },

// ───────────────────────── Integración y entorno ─────────────────────────
{ t: "Integración y entorno", e: "Tu index.html está en /proyecto/html/ y el script en /proyecto/js/app.js. ¿Qué src es correcto con una ruta relativa?",
  o: ["../js/app.js", "./js/app.js", "js/app.js", "/js/app.js", "../../js/app.js", "https://js/app.js"], r: 0,
  x: "../ sube a la carpeta superior (/proyecto/) y desde ahí se entra en js/. ./ sería la misma carpeta (html/)." },

{ t: "Integración y entorno", e: "¿Cuál es la principal ventaja de enlazar JavaScript con un archivo externo (<script src=\"app.js\">) frente a incrustarlo en el HTML?",
  o: ["Mejor caché, reutilización y organización del código.", "El código se vuelve invisible para el usuario.", "Se ejecuta sin necesidad de navegador.", "Permite usar onclick en las etiquetas.", "No hace falta escribir la etiqueta <script>.", "Hace que JavaScript se compile antes de ejecutarse."], r: 0,
  x: "El archivo .js externo se cachea y separa contenido de comportamiento. El código sigue siendo accesible para el usuario y JS no se compila: el navegador lo interpreta." },

{ t: "Integración y entorno", e: "En las DevTools del navegador (F12), ¿en qué pestaña colocas puntos de interrupción (breakpoints) para ejecutar el código paso a paso?",
  o: ["Sources", "Console", "Elements", "Network", "Application", "Performance"], r: 0,
  x: "En Sources se ven los archivos, se ponen breakpoints y se inspeccionan las variables en tiempo real. En Console se ven los console.log y errores." },

{ t: "Integración y entorno", e: "Según el modelo de las tres capas de una página web, ¿de qué se encarga JavaScript?",
  o: ["Del comportamiento / interactividad.", "Del contenido / estructura.", "Del aspecto / presentación.", "De la base de datos del servidor.", "De compilar el HTML.", "Del enrutamiento del servidor web."], r: 0,
  x: "HTML = contenido/estructura, CSS = aspecto/presentación, JavaScript = comportamiento. Se ejecuta en el cliente (navegador)." },

{ t: "Objetos y JSON", e: "¿Cuál de estos es un método ESTÁTICO (se llama sobre el nombre del objeto, sin crear una instancia)?",
  o: ["Math.random()", "\"hola\".toUpperCase()", "new Date().getFullYear()", "[1, 2].push(3)", "(3.14).toFixed(1)", "miMapa.get(\"x\")"], r: 0,
  x: "Los métodos estáticos se usan con el nombre del objeto (Math.random(), Object.keys(), JSON.parse()). Los de instancia necesitan un valor concreto." },
];

if (typeof module !== "undefined") module.exports = PREGUNTAS;

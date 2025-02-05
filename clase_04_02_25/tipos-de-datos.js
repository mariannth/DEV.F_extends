//Este es un comentario en JavaScript

//Console.log es una función que imprime en la consola
console.log("Hola mundo");

//Declaración de variables

var nombre = "Ana"; //String
var edad = 23; //Number
var sueldo = 1.234; //Number
var casada = false; //Boolean
var vacunas = true; //Boolean
var hijos = null; //Null
var dato; //Undefined

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof sueldo);
console.log(typeof casada);
console.log(typeof vacunas);
console.log(typeof hijos);
console.log(typeof dato);

//La semántica es importante, significado de las palabras
var nombre = "Francia";
var pais = 20;

//NaN (Not a Number) es un valor especial que indica que una operación matemática no es un número
console.log(10 * "Ana");

/*Si ponemos typeof de null dira que es un objeto, pero en realidad es ausencia intencional de valor. Esto es debido a un error en JavaScript que no se ha corregido por compatibilidad con versiones anteriores.

Comentarios en bloque o multilinea*/

//Ejercicios de CAMPUS

// Ejemplos de tipos de datos en JavaScript
console.log(typeof 42);        // number
console.log(typeof 'Veinticinco'); // string
console.log(typeof -666);      // number
console.log(typeof true);      // boolean
console.log(typeof 0);         // number
console.log(typeof '');        // string, si fuera una sola comilla da error pues la sintaxis es incorrecta
console.log(typeof "");        // string,si fuera una sola comilla da error pues la sintaxis es incorrecta
console.log(typeof null);      // object
console.log(typeof undefined); // undefined
console.log(typeof false);     // boolean

// Agrega tus propios ejemplos
console.log(typeof 3.14);      // number
console.log(typeof [1, 2, 3]); // object (arrays son objetos en JS)
console.log(typeof {name: 'Juan', age: 25}); // object (los objetos son del tipo 'object')


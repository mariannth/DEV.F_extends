// //Declaro 2 valores
// let valor_1 = 27;
// let valor_2 = 4;

// //Operaciones básicas
// let suma = valor_1 + valor_2;
// console.log(suma);

// let resta = valor_1 - valor_2;
// console.log(resta);

// let multiplicacion = valor_1 * valor_2;
// console.log(multiplicacion);

// let division = valor_1 / valor_2;
// console.log(division);

// let modulo = valor_1 % valor_2;
// console.log(modulo);

// let exponencial = valor_1 ** valor_2;
// console.log(exponencial);

// //Operadores de comparación
// let numero_1 = 3; //Number
// let numero_2 = "3"; //String

// console.log(numero_1 == numero_2); //comparación debil

// console.log(numero_1 === numero_2); //comparación estricta

// console.log("Operadores y de comparacion");

// console.log(10 > 4); //Mayor que 
// console.log(2 < 1); //Menor que
// console.log(10 >= 10); //Mayor o igual que
// console.log(10 <= 10); //Menor o igual que

// //La respuesta es un valor booleano

// console.log("Diferente de: ");
// console.log(15 != 15); //False, porque es el mismo valor

// console.log("AND: &&");
// //Para poder entrar al antro
// let edad = 17;
// let tieneINE = true;

// console.log(edad >= 18 && tieneINE);

// console.log("OR: ||");
// //Para aprender a programar
// let esMayorDeEdad = false
// let esEstudiante = true;

// console.log(esMayorDeEdad || esEstudiante);

// console.log("NOT: !");
// let esFinDeSemana = false; 

// console.log(!esFinDeSemana);

// let calificación = 9;
// let calificación1 = 10;
// let calificación2 = 3;
// let calificación3 = 7;
// let calificación4 = 8;

let outputJS2 = document.getElementById("output-js2");
let resultadoJS2 = "";

// Operaciones básicas
let valor_1 = 27, valor_2 = 4;
resultadoJS2 += `Suma: ${valor_1 + valor_2}<br>`;
resultadoJS2 += `Resta: ${valor_1 - valor_2}<br>`;
resultadoJS2 += `Multiplicación: ${valor_1 * valor_2}<br>`;
resultadoJS2 += `División: ${valor_1 / valor_2}<br>`;
resultadoJS2 += `Módulo: ${valor_1 % valor_2}<br>`;
resultadoJS2 += `Exponencial: ${valor_1 ** valor_2}<br>`;

// Comparaciones
let numero_1 = 3, numero_2 = "3";
resultadoJS2 += `Comparación débil (==): ${numero_1 == numero_2}<br>`;
resultadoJS2 += `Comparación estricta (===): ${numero_1 === numero_2}<br>`;

outputJS2.innerHTML = resultadoJS2;

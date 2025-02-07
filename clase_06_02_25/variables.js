//var es una forma antigua de declarar variables, let es la forma moderna de declarar variables.

var nombre = "Ana";

var nombre = "Fernanda";

var nombre = "Victor";

console.log(nombre);

// let no permite redeclarar variables, lo que signidica que mo úedes declarar la misma varible dos veces.

let apellido1 = "Gutierrez";

let apellido2 = "Lopez";

//let si permite cambiar el valor de una variable.
//Reasignación de valor
apellido1 = "Perez";

console.log(apellido1);

//const es una constante, no se puede cambiar el valor de una constante.
const PI = 3.1416;

PI = 6; //Esto no se puede hacer
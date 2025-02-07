// Comparaciones y decisiones en JavaScript

/*Problema: Evaluador de Notas con Mensajes Personalizados
Crea un programa en JavaScript que evalúe la nota de un estudiante y genere un mensaje personalizado basado en la nota. Las notas se asignan de la siguiente manera:

Si la nota es 90 o más, el estudiante aprueba con "Excelente".
Si la nota está entre 75 y 89, el estudiante aprueba con "Bien".
Si la nota está entre 60 y 74, el estudiante aprueba con "Suficiente".
Si la nota es menor de 60, el estudiante no aprueba.*/

let nota = 75;
let mensaje;

if (nota >= 90) {
    mensaje = "Excelente";
} else if (nota >= 75 && nota < 90) {
    mensaje = "Bien";
} else if (nota >= 60 && nota < 75) {
    mensaje = "Suficiente";
} else {
    mensaje = "No aprueba";
}   

console.log("El estudiante aprueba con: " + mensaje);

// //Tipo de mascotas = Gato, Perro, Hamster

// //Condicionales (Jaula mediana, Jaula grande, Jaula pequena)

// let tipoMascota = "Perro";

// if (tipoMascota === "Perro") {
//     console.log("Si tienes un perro, necesitas una jaula grande");
// } else if (tipoMascota === "Gato") {
//     console.log("Si tienes un gato, necesitas una jaula mediana");
// } else if(tipoMascota === "Hamster") {
//     console.log("Si tienes un hamster, necesitas una jaula pequeña");
// }else{
//     console.log("No contaos con jaulas para esa mascota");
// }

// //Semaforo color = Rojo, Amarillo, Verde
// //Rojo = Alto, Amarillo = Detente, Verde = Siga

// let colorSemaforo = "Verde";

// if (colorSemaforo === "Rojo") {
//     console.log("Alto");
// } else if (colorSemaforo === "Amarillo") {  
//     console.log("Detente");
// } else if (colorSemaforo === "Verde") {
//     console.log("Siga");
// } else {
//     console.log("El semáforo no funciona, ten cuidado");
// }

// let edad = 17;
// let tieneLicencia = true;

// if (edad >= 18 && tieneLicencia) {
//     console.log("Puedes conducir");
// } else {
//     console.log("No puedes conducir");
// }

// //Para poder obtener una beca
// let creditos = 10;
// let promedio = 8.5;

// if (creditos >= 10 && promedio >= 8.5) {
//     console.log("Tienes derecho a una beca");
// } else {
//     console.log("No tienes derecho a una beca");
// }

// //Agregar el mensaje de: Te hacen falta creditos
// // Agregar el mensaje de: Tu promedio debe subir

// if (creditos >= 10 && promedio >= 8.5) {
//     console.log("Tienes derecho a una beca");
// } else {
//     console.log("No tienes derecho a una beca");

//     if (creditos < 10) {
//         console.log("Te hacen falta créditos");
//     }

//     if (promedio < 8.5) {
//         console.log("Tu promedio debe subir");
//     }
// }

let outputJS1 = document.getElementById("output-js1");
let resultadoJS1 = "";

// Mascotas
let tipoMascota = "Perro";
if (tipoMascota === "Perro") {
    resultadoJS1 += "Si tienes un perro, necesitas una jaula grande.<br>";
} else if (tipoMascota === "Gato") {
    resultadoJS1 += "Si tienes un gato, necesitas una jaula mediana.<br>";
} else if (tipoMascota === "Hamster") {
    resultadoJS1 += "Si tienes un hamster, necesitas una jaula pequeña.<br>";
} else {
    resultadoJS1 += "No contamos con jaulas para esa mascota.<br>";
}

// Semáforo
let colorSemaforo = "Verde";
if (colorSemaforo === "Rojo") {
    resultadoJS1 += "Semáforo: Alto.<br>";
} else if (colorSemaforo === "Amarillo") {  
    resultadoJS1 += "Semáforo: Detente.<br>";
} else if (colorSemaforo === "Verde") {
    resultadoJS1 += "Semáforo: Siga.<br>";
} else {
    resultadoJS1 += "El semáforo no funciona, ten cuidado.<br>";
}

// Conducción
let edad = 17;
let tieneLicencia = true;
resultadoJS1 += (edad >= 18 && tieneLicencia) ? "Puedes conducir.<br>" : "No puedes conducir.<br>";

// Beca
let creditos = 10;
let promedio = 8.5;
if (creditos >= 10 && promedio >= 8.5) {
    resultadoJS1 += "Tienes derecho a una beca.<br>";
} else {
    resultadoJS1 += "No tienes derecho a una beca.<br>";
    if (creditos < 10) resultadoJS1 += "Te hacen falta créditos.<br>";
    if (promedio < 8.5) resultadoJS1 += "Tu promedio debe subir.<br>";
}

outputJS1.innerHTML = resultadoJS1;



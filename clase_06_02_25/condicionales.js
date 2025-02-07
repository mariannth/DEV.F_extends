//Tipo de mascotas = Gato, Perro, Hamster

//Condicionales (Jaula mediana, Jaula grande, Jaula pequena)

let tipoMascota = "Perro";

if (tipoMascota === "Perro") {
    console.log("Si tienes un perro, necesitas una jaula grande");
} else if (tipoMascota === "Gato") {
    console.log("Si tienes un gato, necesitas una jaula mediana");
} else if(tipoMascota === "Hamster") {
    console.log("Si tienes un hamster, necesitas una jaula pequeña");
}else{
    console.log("No contaos con jaulas para esa mascota");
}

//Semaforo color = Rojo, Amarillo, Verde
//Rojo = Alto, Amarillo = Detente, Verde = Siga

let colorSemaforo = "Verde";

if (colorSemaforo === "Rojo") {
    console.log("Alto");
} else if (colorSemaforo === "Amarillo") {  
    console.log("Detente");
} else if (colorSemaforo === "Verde") {
    console.log("Siga");
} else {
    console.log("El semáforo no funciona, ten cuidado");
}

let edad = 17;
let tieneLicencia = true;

if (edad >= 18 && tieneLicencia) {
    console.log("Puedes conducir");
} else {
    console.log("No puedes conducir");
}

//Para poder obtener una beca
let creditos = 10;
let promedio = 8.5;

if (creditos >= 10 && promedio >= 8.5) {
    console.log("Tienes derecho a una beca");
} else {
    console.log("No tienes derecho a una beca");
}

//Agregar el mensaje de: Te hacen falta creditos
// Agregar el mensaje de: Tu promedio debe subir

if (creditos >= 10 && promedio >= 8.5) {
    console.log("Tienes derecho a una beca");
} else {
    console.log("No tienes derecho a una beca");

    if (creditos < 10) {
        console.log("Te hacen falta créditos");
    }

    if (promedio < 8.5) {
        console.log("Tu promedio debe subir");
    }
}



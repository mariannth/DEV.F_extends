// Declarar un arreglo de frutas
let frutas = ['manzana', 'plátano', 'manzana', 'naranja', 'plátano', 'pera', 'manzana'];

// Crear un objeto para almacenar las cantidades de cada tipo de fruta
let conteoFrutas = {};

// Usar un ciclo for para recorrer el arreglo y contar las frutas
for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i]; // Obtener la fruta actual del arreglo

    // Si la fruta ya existe en el objeto, incrementamos el contador
    if (conteoFrutas[fruta]) {
        conteoFrutas[fruta]++;
    } else {
        // Si la fruta no existe en el objeto, la agregamos con un contador inicial de 1
        conteoFrutas[fruta] = 1;
    }
}

// Imprimir el conteo de cada tipo de fruta
console.log(conteoFrutas);


console.log("Fin del programa");


// Declarar un arreglo de frutas
let fruta = ['manzana', 'plátano', 'manzana', 'naranja', 'plátano', 'pera', 'manzana'];

// Crear un objeto para almacenar las cantidades de cada tipo de fruta
let conteoFruta = {};

//  Usar un ciclo while para recorrer el arreglo y contar las frutas
let i = 0;
while (i < fruta.length) {
    let fruta1 = fruta[i]; // Obtener la fruta actual del arreglo

    // Si la fruta ya existe en el objeto, incrementamos el contador
    if (conteoFruta[fruta1]) {
        conteoFruta[fruta1]++;
    } else {
        // Si la fruta no existe en el objeto, la agregamos con un contador inicial de 1
        conteoFruta[fruta1] = 1;
    }

    i++; // Incrementar el índice para avanzar al siguiente elemento
}

// Imprimir el conteo de cada tipo de fruta
console.log(conteoFruta);

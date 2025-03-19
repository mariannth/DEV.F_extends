let persona = []; //Arreglo vacio

let verduras = ['Lechuga', 'Papas', 'Cebolla', 'Tomate', 'Zanahoria']; //Arrego con datos

console.log(verduras [2]);
console.log(verduras.length);

console.log("Imprimiendo verduras con ciclo for");
for(let i = 0; i < verduras.length; i++){
    console.log(verduras[i]);
}

console.log("Metodos de arreglos");
let personas = [];

personas.push("Liset"); //Agrega un elemento al final del arreglo
personas.push("Victor");
personas.push("Fernando");
personas.push("Ana");

console.log(personas);

personas.pop(); //Elimina el ultimo elemento del arreglo
console.log(personas);

personas.unshift("Juan"); //Agrega un elemento al inicio del arreglo
personas.unshift("Pedro");

console.log(personas);

personas.shift(); //Elimina el primer elemento del arreglo
console.log(personas);

personas[1] = "Monica"; //Reemplaza un elemento del arreglo
console.log(personas);
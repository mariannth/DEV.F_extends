const numbers = [9,3,5,6,7,2];

console.log(numbers);

const newArray = numbers.sort();

console.log(newArray);

const copyOfNumbers = Array.from(numbers);

console.log(copyOfNumbers);

let nombres = ["Diego", "Liset", "Victor", "Fernando"];

console.log(nombres);

nombres = [true, false, true, true];

console.log(nombres);

for(let nombre of nombres) {
    console.log(nombre);
}

const persona = {
    nombre: "Diego",
    edad : 23,
    ciudad: "Ciudad de Mexico",
    saludar: () => {
        console.log("Hola");
    }
}
console.log(persona);

const clavesObjeto = Object.keys(persona);

console.log(clavesObjeto);

const miObjeto = Object.create(persona);

console.log(miObjeto);

miObjeto.saludar();
persona.saludar();

const frutas = ["manzana", "banana", "pera", "naranja", "kiwi"];

console.log(frutas);

frutas.shift();

frutas.unshift("mango");

frutas.push("uva");

frutas.pop();

frutas.push("sandia");

const miFrutaFavorita = frutas.find((element) => element ==="pera");

console.log(miFrutaFavorita);

console.log(frutas, frutas.length);

const numbers2 = [1,3,6,8];

const doubles = numbers2.map((item, index) => {
    const doubledNumber = item * 2;
    console.log(`El numero ${item} en el indice: ${index} al multiplicarlo por 2 su resultado es: ${doubledNumber}`);
    return doubledNumber;
});

console.log(doubles);

const filteredNumers = numbers2.filter((element) => element > 5);

console.log(filteredNumers);
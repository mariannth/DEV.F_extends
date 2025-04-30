console.log("a");

setTimeout(() => {
    console.log("b");
}, 0)

Promise.resolve().then(() => {
    console.log("c");
});

console.log("d");

fetch("https://pokeapi.co/api/v2/pokemon/Pikachu")
    .then(response => response.json())
    .then(data => console.log(data));
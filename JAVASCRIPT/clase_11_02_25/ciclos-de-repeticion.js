//Programa para mostrar los múltiplos de 5 hasta un número dado por el usuario
console.log("Ciclo While");

let numero = 999;

let contador = 1;

while (contador <= numero) {
  //Código a iterar
  if (contador % 5 === 0) {
    console.log(contador);
  }
  contador++; //Incrementar el contador
}
console.log("Fin del programa");

//Numeros impares

console.log("Ciclo For");

let numero2 = 35;
for(let indice = 0; indice <= numero2; indice++){
    if(indice % 2 !== 0){
        console.log(indice);
    }
}

console.log("Fin del programa");

//imprimir los numeros del 1 al 10
let inicio = 0;

console.log("Ciclo While para imprimir los numeros del 1 al 10");
while(inicio <= 10){
    console.log(inicio);
    inicio++;
}

console.log("Fin del programa");

console.log("Ciclo For para imprimir los numeros del 1 al 10");
for(let i = 1; i <= 10; i++){
    console.log(i);
}
//Programa para mostrar los múltiplos de 5 hasta un número dado por el usuario

let numero = 999;

let contador = 1;

while (contador <= numero) {
  //Código a iterar
  if (contador % 5 === 0) {
    console.log(contador);
  }
  contador++; //Incrementar el contador
}

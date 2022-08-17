// Dada una matriz de enteros.

// Devuelve una matriz, donde el primer elemento es el recuento de números positivos y el segundo elemento es la suma de números negativos. 0 no es ni positivo ni negativo.

// Si la entrada es una matriz vacía o es nula, devuelve una matriz vacía.

// Ejemplo
// Para la entrada [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], debe volver [10, -65].

const numbers = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];

function countPositivesSumNegatives(input) {
  // your code here

  let sumaPositiva = [];
  let sumaNegativa = 0;

  for (let i = 0; i < input.length; i++) {
    input[i] > 0;
    if (input[i] > 0) {
      sumaPositiva.push(input[i]);
    } else {
      sumaNegativa += input[i];
    }
  }
  return [sumaPositiva.length, sumaNegativa];
}

console.log("Ejercicio 2 ---------------");
console.log(countPositivesSumNegatives(numbers));

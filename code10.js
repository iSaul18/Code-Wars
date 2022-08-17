// En este kata, se le dará una secuencia de las dimensiones de los rectángulos (secuencia con ancho y largo) y círculos (radio, solo un número).
// Su tarea es devolver una nueva secuencia de dimensiones, ordenadas de forma ascendente por área.

// Por ejemplo,

// const array = [ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ]; // [ rectangle, circle, circle, rectangle ]
// sortByArea(array) => [ [ 1.342, 3.212 ], 1.23, [ 4.23, 6.43 ], 3.444 ]
// Este kata está inspirado en Ordenar rectángulos y círculos por área .

function sortByArea(array) {
  array = array.slice();
  function circ(a) {
    if (Array.isArray(a)) {
      return a.reduce((a, b) => ab, 1);
    }
    return Math.PI(Math.pow(a, 2));
  }
  return array.sort((a, b) => circ(a) - circ(b));
}

// Tenemos el número 12385. Queremos saber el valor del cubo más cercano pero mayor a 12385. La respuesta será 13824.

// Ahora, otro caso. Tenemos el número 1245678. Queremos saber la quinta potencia, más cercana y más alta que ese número. El valor será 1419857.

// Necesitamos una función find_next_power( findNextPoweren JavaScript, CoffeeScript y Haskell), que recibe dos argumentos, un valor valy el exponente de la potencia,  pow_y genera el valor que queremos encontrar.

// Veamos algunos casos:

// findNextPower(12385, 3) == 13824

// findNextPower(1245678, 5) == 1419857
// El valor, valserá siempre un entero positivo.

// El poder, pow_, siempre superior a 1.

// ¡Feliz codificación!
function findNextPower(val, pow_) {
  let respuesta = 0;
  for (let i = 2; i > 1; i++) {
    if (i ** pow_ > val) {
      respuesta = i ** pow_;
      break;
    }
  }
  return respuesta;
}

// findNextPower(1245678, 5);

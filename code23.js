function towerBuilder(nFloors) {
  let asteriscos = [];
  let espacio = " ";
  let ast = "*";

  debugger;

  for (let i = 1; i <= nFloors; i++) {
    if (nFloors === 1) asteriscos.push("*");
    else if (nFloors > 1) {
      if (i === 1)
        asteriscos.push(
          espacio.repeat(nFloors - i) + ast + espacio.repeat(nFloors - i)
        );
      asteriscos.push(
        espacio.repeat(nFloors - i) +
          asteriscos[asteriscos.length - 1] +
          ast.repeat(i + 1) +
          espacio.repeat(nFloors - i)
      );
    }
  }

  return asteriscos;
}

console.log(towerBuilder(2));

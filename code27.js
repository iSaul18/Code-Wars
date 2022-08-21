function getLengthOfMissingArray(arrayOfArrays) {
  if (arrayOfArrays === false) return 0;

  const arraysLength = arrayOfArrays
    .map((x) => {
      return x.length;
    })
    .sort((a, b) => (a > b ? 1 : -1));

  console.log(arraysLength);

  let respuesta = 0;

  for (let i = 0; i < arraysLength.length; i++) {
    if (i === 0) continue;
    if (i === arraysLength.length - 1) break;
    else if (arraysLength[i] + 1 !== arraysLength[i + 1]) {
      respuesta = arraysLength[i] + 1;
    }
    if (arraysLength[i] - 1 !== arraysLength[i - 1]) {
      respuesta = arraysLength[i] - 1;
    }
  }

  return respuesta;
}

// 3
console.log(
  getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])
);

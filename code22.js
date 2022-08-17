var uniqueInOrder = function (iterable) {
  const contenedor = [];

  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] === iterable[i + 1]) continue;
    contenedor.push(iterable[i]);
  }

  return contenedor;
};

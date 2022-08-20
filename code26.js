function collatz(n) {
  const container = [n];

  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
      container.push(n);
    } else {
      n = n * 3 + 1;
      container.push(n);
    }
  }

  return container.length;
}

console.log(collatz(20));

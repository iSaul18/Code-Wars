function highAndLow(numbers) {
  console.log(
    numbers.sort((a, b) => {
      return a - b;
    })
  );
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

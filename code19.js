function longest(s1, s2) {
  let arrays1 = [];
  arrays1.push(s1);
  arrays1.push(s2);
  const unir = arrays1.join("");
  return unir.sort((a, b) => (a > b ? 1 : -1));
}

console.log(longest([1, 2, 3, 2], [1, 2, 3, 5]));

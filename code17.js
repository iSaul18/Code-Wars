var countSheep = function (num) {
  //your code here
  if (num === 0) return "";

  let almacenamiento = [];

  for (let i = 1; i <= num; i++) {
    almacenamiento.push(`${i} sheep...`);
  }

  return almacenamiento.join("");
};

console.log(countSheep(2));

function countPhotos(road) {
  let array = road.split("");
  let container = [];

  array.forEach((a, b) => {
    a === "<" && container.push(...array.slice(0, b).filter((x) => x === "."));
    a === ">" && container.push(...array.slice(b, array.length).filter((x) => x === "."));
  });
  return container.length;
}

console.log(countPhotos("><<<>.<>.<"));
function alphabetPosition(text) {
  text = text.toLowerCase();
  let alphaObject = {};
  let respuesta = [];

  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < 26; i++) {
    alphaObject[`${alphabet[i]}`] = i + 1;
  }

  for (let i = 0; i < text.length; i++) {
    let actual = text[i];
    if (text[i] === " ") continue;
    respuesta.push(alphaObject[text[i]]);
  }
  const juntar = respuesta.join(" ").trim();

  return juntar;
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition("abcd sasa"));

function howMuchILoveYou(nbPetals) {
  if (nbPetals === 0) return 0;

  const petalos = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];

  while (nbPetals >= 7) {
    nbPetals = nbPetals - 6;
  }

  return petalos[nbPetals - 1];
}

console.log(howMuchILoveYou(2));

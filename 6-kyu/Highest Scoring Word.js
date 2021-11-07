function high(char) {
  let highestScore = 0;
  let highestLetter = "";

  for (let str of char.split(" ")) {
    let currentLetter = 0;
    for (let word of str) {
      currentLetter += word.charCodeAt() - 96;
    }
    if (currentLetter > highestScore) {
      highestScore = currentLetter;
      highestLetter = str;
    }
  }
  return highestLetter;
}

console.log(high("man i need a taxi up to ubud")); //taxi

function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function titleCase(title, minorWords) {
  if (title.trim() === "") return "";

  const minorReducedWords = minorWords.split(" ").reduce((words, word) => {
    words[word.toLowerCase()] = true;
    return words;
  }, {});
  minorReducedWords;

  return title
    .split(" ")
    .map((word, i) => {
      if (i === 0) return capitalizeWord(word);
      if (minorReducedWords[word.toLowerCase()]) return word.toLowerCase();
      return capitalizeWord(word);
    })
    .join(" ");
}

console.log(titleCase("a clash of KINGS", "a an the of"));

console.log(titleCase("THE WIND IN THE WILLOWS", "The In"));

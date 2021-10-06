function correct(string) {
  return string.replace(/5|0|1/g, (char) => {
    switch (char) {
      case "5":
        return "S";
      case "0":
        return "O";
      case "1":
        return "I";
      default:
        return char;
    }
  });
}

console.log(correct("L0ND0N"));

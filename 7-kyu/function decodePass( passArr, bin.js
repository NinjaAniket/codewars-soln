function decodePass(passArr, bin) {
  //convert string to binary
  const result = bin
    .split(" ")
    .map((item) => String.fromCharCode(parseInt(item, 2)))
    .join("");
  if (passArr.includes(result)) return result;
  else return false;
}

console.log(
  decodePass(
    ["oju2ubHr4z96k1BMfUG", "sTmHRNF7FKBML1O", "2TJfOyl2L2f", "4Hz8LecqTA"],
    "1110011 1010100 1101101 1001000 1010010 1001110 1000110 110111 1000110 1001011 1000010 1001101 1001100 110001 1001111"
  )
);

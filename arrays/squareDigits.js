function squareDigits(num) {
  //may the code be with you

  let result = [];
  const arr = Array.from(String(num), Number);

  for (let x of arr) {
    result.push(x * x);
  }

  return Number(result.join(""));
}

squareDigits(9414);

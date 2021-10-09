function sumDigits(number) {
  let sum = 0;

  let result = String(number)
    .split('')
    .filter((item) => item !== '-');

  for (let x of result) {
    sum += Number(x);
  }
  return sum;
}

console.log(sumDigits(-15));

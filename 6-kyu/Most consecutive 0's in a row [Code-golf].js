function nonZeros(n) {
  return Math.max(...("" + n).match(/(0+)/g).map((z) => z.length));
}

console.log(nonZeros(1002000));

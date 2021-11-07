function grow(num) {
  return num.reduce((a, b) => a * b);
}

console.log(grow([1, 2, 3]));

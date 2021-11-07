function descendingOrder(n) {
  //...
  const result = n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");

  return parseInt(result);
}

console.log(descendingOrder(1021));

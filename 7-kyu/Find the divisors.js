function divisors(integer) {
  let items = [];
  for (i = 2; i < integer; i++) {
    if (integer % i === 0) {
      items.push(i);
    }
  }

  if (items.length === 0) return "Not Prime";

  return items;
}

console.log(divisors(4));

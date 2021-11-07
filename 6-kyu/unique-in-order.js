function uniqueInOrder(iterable) {
  const temp = typeof iterable === "string" ? iterable.split("") : iterable;
  let finalArr = [];
  //loop through the arry
  for (let i = 0; i < temp.length; i++) {
    if (iterable[i] !== iterable[i + 1]) {
      finalArr.push(iterable[i]);
    }
  }
  return finalArr;
}

console.log(uniqueInOrder(["AAAABBBCCDAABBB"]));

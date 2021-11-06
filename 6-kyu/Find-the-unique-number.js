function findUniq(arr) {
  // do magic

  const sortedArr = arr.sort((a, b) => a - b);

  if (sortedArr[0] == sortedArr[1]) return sortedArr.pop();
  else return sortedArr[0];
}

console.log(findUniq([0, 1, 1, 2, 4, 0]));

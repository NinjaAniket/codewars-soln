//TODO : calculate the downward rounded average of the marks array
function getAverage(marks) {
  let sum = 0;
  for (let x of marks) {
    sum += x;
  }
  return parseInt(sum / marks.length);
}

console.log(getAverage([2, 2, 2, 2]));

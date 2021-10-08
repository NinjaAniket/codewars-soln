function arrayPlusArray(arr1, arr2) {
  let sum = 0;
  for (let x of arr1) sum += x;
  for (let y of arr2) sum += y;
  return sum;
}

console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]));

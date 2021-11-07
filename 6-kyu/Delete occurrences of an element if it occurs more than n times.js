function deleteNth(arr, n) {
  // ...

  let hashMap = {};
  let temp = [];

  for (let x of arr) {
    if (hashMap[x]) {
      hashMap[x] += 1;
    } else {
      hashMap[x] = 1;
    }
    if (hashMap[x] <= n) {
      temp.push(x);
    }
  }
  temp;

  hashMap;
}
console.log(deleteNth([20, 37, 20, 21], 1));

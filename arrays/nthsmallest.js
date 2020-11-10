
// Nth Smallest Element (Array Series #4)
//TAG: ARRAYS
function nthSmallest(arr, pos) {
  //your code here

    const sortedArr = arr.sort((a, b) => a - b);
    return sortedArray[pos - 1];
}
nthSmallest([15, 20, 7, 10, 4, 3], 5);


https://www.codewars.com/kata/5a512f6a80eba857280000fc/train/javascript
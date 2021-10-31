function spinWords(string) {
  //TODO Have fun :)

  const strArr = string.split(" ");

  let temp = [];
  let result;
  for (let x of strArr) {
    if (x.length >= 5) result = x.split("").reverse().join("");
    else result = x;
    temp.push(result);
  }

  return temp.join(" ");
}

console.log(spinWords("Just gniddik there is still one more"));

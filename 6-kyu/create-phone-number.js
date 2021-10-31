function createPhoneNumber(numbers) {
  let format = "(xxx) xxx-xxxx";
  for (let x of numbers) format = format.replace("x", x);

  return format;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// (123) 456-7890

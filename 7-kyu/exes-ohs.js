function XO(str) {
  const lowerCaseStr = str.toLowerCase();

  let xCount = 0;
  let oCount = 0;

  for (let x of lowerCaseStr.split("")) {
    if (x.includes("x")) xCount += 1;
    else if (x.includes("o")) oCount += 1;
  }

  return xCount === oCount ? true : false;
}

console.log(XO("zzoo"));

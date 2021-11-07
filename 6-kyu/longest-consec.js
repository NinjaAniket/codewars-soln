// function longestConsec(strarr, k) {
//     // your code

//     if(k <= 0) return "";

//     let maxLength = 0;
//     let letter = '';

//     //loop through entire array
//    for(let i = 0; i<strarr.length ; i++) {
//     if(k > strarr.length) return "";

//        const result = strarr[i] + strarr[i + k];
//        for(let item of result.split(' ')) {

//         if(maxLength < item.length) {
//             maxLength = item.length
//             letter = item
//         }
//        }

//    }
//    return letter

//     //concat items based on k
//     //place store the new arr
//     // max length of stored array

// }

// console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2));
// // console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15));

function longestConsec(strarr, k) {
  // your c   ode

  let maxLength = 0;
  let letter = "";
  for (let i = 0; i < strarr.length; i++) {
    const result = strarr.slice(i, i + k);

    const longestString = result.join("").length;

    if (longestString > maxLength) {
      maxLength = longestString;
      letter = result.join("");
    }
  }
  return letter;
}

console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3));

function isPangram(string) {
    const result = new Set(string.toLowerCase().match(/[a-z]/g)).size === 26;
    return result
  }
  
  console.log(isPangram("How quickly daft jumping zebras vex."));
  
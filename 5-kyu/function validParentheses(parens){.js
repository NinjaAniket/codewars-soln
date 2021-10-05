function validParentheses(parens) {
  if (parens.length === 0) return true;

  let hashMap = {
    "(": ")",
  };
  const stack = [];

  for (let i = 0; i < parens.length; i++) {
    if (hashMap[parens[i]]) {
      stack.push(parens[i]);
    } else {
      const leftBracket = stack.pop();
      const correctBracket = hashMap[leftBracket];

      if (parens[i] !== correctBracket) return false;
    }
  }

  return stack.length === 0;
}

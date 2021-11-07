function printerError(s) {
  // your code

  console.log(s.length);

  return `${s.replace(/[a-m]/gi, "").length} / ${s.length}`;
}

console.log(
  printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")
);

function toUnderscore(string) {
  if (typeof string !== "string") return string.toString();
  return string
    .match(/[A-Z0-9][a-z0-9]+/g)
    .map((item) => item.toLowerCase())
    .join("_");
}

console.log(toUnderscore(5));

function list(names) {
  if (names.length === 0) return "";

  return (
    names
      .slice(0, names.length - 1)
      .map((item) => item.name)
      .join(",") +
    (names.length > 1 ? " & " : " ") +
    names[names.length - 1].name
  );
}

console.log(
  list([
    { name: "Bart" },
    { name: "Lisa" },
    { name: "Maggie" },
    { name: "Homer" },
    { name: "Marge" },
  ])
);

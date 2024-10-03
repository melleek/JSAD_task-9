function containsWord(str) {
  return /(cat|dog|bird)/i.test(str);
}
const strings = [
  "I have a cat.",
  "The dog is barking.",
  "A bird is flying.",
  "There is a fish.",
  "The catalog is huge.",
  ""
];

strings.forEach((s) => {
  console.log(`Строка: "${s}", Содержит одно из слов: ${containsWord(s)}`);
});

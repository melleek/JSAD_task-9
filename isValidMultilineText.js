function isValidMultilineText(text) {
  const str = text.trim().split("\n");
  return str.every((line) => /^#.*\.$/.test(line.trim()));
}

const text1 = `
# Заголовок 1.
# Заголовок 2.
# Заголовок 3.
`;

const text2 = `
# Заголовок 1
# Заголовок 2.
Заголовок 3.
`;

console.log(isValidMultilineText(text1));
console.log(isValidMultilineText(text2));

function containsOnlyDigits(str) {
  return /^[0-9]+$/.test(str);
}

const strings = ["123456", "123abc", "12.34", "000123", ""];

strings.forEach((s) => {
  console.log(
    `Строка: "${s}", Содержит только цифры: ${containsOnlyDigits(s)}`
  );
});

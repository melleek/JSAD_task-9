function checkHelloWorld(str) {
  return /Hello(?= World)|Hello,(?= World)|Hello there,(?= World)/.test(str);
}

const strings = [
  "Hello World!",
  "Hello, World!",
  "Hello there, World!",
  "Hi there, World!",
  "Hello to the World.",
  "World says Hello."
];

strings.forEach((s) => {
  console.log(`Строка: "${s}", Соответствует условиям: ${checkHelloWorld(s)}`);
});

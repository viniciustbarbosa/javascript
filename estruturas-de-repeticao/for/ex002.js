const text = "JavaScript é uma linguagem de programação";
const letter = "a";
let count = 0;

for (const char of text.toLowerCase()) {
    if (char === letter) count++;
}
console.log(`A letra "${letter}" se repete ${count} vezes na frase "${text}".`)
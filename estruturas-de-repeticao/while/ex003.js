// Programa que gera um array de números aleatórios entre 0 e 3, e identifica a posição do número 3 no array.

let number;
let position = 0;
let i = 0;
let array = [];

while(i <= 10) {
    number = Math.floor(Math.random() * (3+1)); // Gerar número aleatório entre 0 e 3
    array.push(number)
    i++;

    if (number === 3) {
        position = i;
        break;
    }
}

console.log(`Array gerado: ${array}`);
console.log(`Número 3 encontrado na posição ${position} do array.`);




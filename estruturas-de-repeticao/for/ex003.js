// Programa que exibe a tabuada do número solicitado

const rl = require("node:readline");

const prompt = rl.createInterface({
    input: process.stdin, output: process.stdout
});

prompt.question("Digite o número desejado para ver a tabuada: ", answer => {
    const number = Number.parseInt(answer);

    if(Number.isNaN(number)) {
        console.log("Valor inválido. Por favor, digite um número inteiro.");
    } else {
        console.log(`Tabuada do número ${number}:`);
        for (let i = 1; i <= 10; i++) {
            setTimeout(() => console.log(`${number} x ${i} = ${number * i}`), 400 * i)}  
          }
          prompt.close();
})
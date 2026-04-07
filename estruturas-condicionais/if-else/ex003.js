// Programa que simula uma transferência bancária

// Declaração das variáveis
const rl = require('readline');
const prompt = rl.createInterface({input: process.stdin, output: process.stdout});
let saldo = 3500; // Saldo atual da conta

// Exibe o saldo atual
console.log(`Saldo atual: R$ ${saldo.toFixed(2)}`);

// Solicita o valor da transferência
prompt.question("Digite o valor da transferência: ", answer => {
    const valorTransferencia = Number.parseInt(answer);

    // Verificação se o valor da transferência é maior que o saldo
    if (Number.isNaN(valorTransferencia)) {
        console.log("Valor inválido. Por favor, digite um número.");
    } else if (valorTransferencia > saldo) {
        console.log("Saldo insuficiente para realizar a transferência.");
    } else if (valorTransferencia <= 0) {
        console.log("Valor da transferência deve ser maior que zero.");
    } else {
        saldo -= valorTransferencia; // Atualiza o saldo após a transferência
        console.log("Transferência realizada com sucesso!");
        console.log( `Valor transferido: R$ ${valorTransferencia.toFixed(2)}`);
        console.log(`Novo Saldo: R$ ${saldo.toFixed(2)}`);
    }
    prompt.close();
})
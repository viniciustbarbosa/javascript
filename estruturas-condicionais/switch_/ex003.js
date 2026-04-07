// Programa que, a partir do número (1 a 12), exibe o nome do mês correspondente e quantos dias ele tem

// Declaração das variáveis

let numeroMes = 0;
let nomeMes = '';
let diasMes = 0;

const rl = require("node:readline");

const prompt = rl.createInterface({
    input: process.stdin, output: process.stdout
});

console.log("Digite um número de 1 a 12 para saber o nome do mês correspondente e quantos dias ele tem (2026):"); // Inicio do programa

prompt.question("> Digite o número do mês: ", answer => {
    // Estrutura de decisão para determinar o nome do mês
    switch(answer) {
        case "1": {
            nomeMes = "Janeiro";
            break;
        }
        case "2": {
            nomeMes = "Fevereiro";
            break;
        }   
        case "3": {
            nomeMes = "Março";
            break;
        }
        case "4": {
            nomeMes = "Abril";
            break;
        }
        case "5": {
            nomeMes = "Maio";
            break;
        }
        case "6": {
            nomeMes = "Junho";
            break;
        }
        case "7": {
            nomeMes = "Julho";
            break;
        }
        case "8": {
            nomeMes = "Agosto";
            break;
        }
        case "9": {
            nomeMes = "Setembro";
            break;
        }
        case "10": {
            nomeMes = "Outubro";
            break;
        }
        case "11": {
            nomeMes = "Novembro";
            break;
        }
        case "12": {
            nomeMes = "Dezembro";
            break;
        }
    }
    switch(true) {
        // Estrutura de decisão para determinar a quantidade de dias do mês
        case answer === "4" || answer === "6" || answer === "9" || answer === "11": {
            diasMes = 30;
            break;
        }
        case answer === "2": {
            diasMes = 28;
            break;
        }
        default: {
            diasMes = 31;
        }
    }
    prompt.close();
    // Exibição do resultado
    console.log(`O mês correspondente ao número ${answer} é ${nomeMes} e ele tem ${diasMes} dias.`)
})
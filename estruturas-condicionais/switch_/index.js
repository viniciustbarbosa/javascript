/*
    switch (valor) {
        case "string": {
            código a ser executado
            break;
        }
        case 1: {
            código a ser executado
            break;
        }
    }
*/ 

console.log("Vamos descobrir a categoria do termo selecionado da seguinte frase:")

console.log("O gato branco comeu o rato cinza.");

const palavra = "rato";

switch (palavra) {
    case "gato":
    case "rato": {
        console.log(`O termo "${palavra}" é um substantivo.`);
        break;
    }
    case "O":
    case "o": {
        console.log(`O termo "${palavra}" é um artigo.`);
        break;
    }
    case "branco":
    case "cinza": {
        console.log(`O termo "${palavra}" é um adjetivo.`);
        break;
    }
    case "comeu": {
        console.log(`O termo "${palavra}" é um verbo.`);
        break;
    }
    default: {
        console.log("Nenhum termo encontrado.");
    }
}
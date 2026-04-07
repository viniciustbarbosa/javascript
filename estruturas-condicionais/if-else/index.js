/* 
    if (expressão) {
        código a ser executado se a expressão for verdadeira
    } else {
        código a ser executado se a expressão for falsa
        }
    }
*/

/*
    if (expressão) {
        código a ser executado se a expressão for verdadeira
    } else if (outra expressão) {
        código a ser executado se a outra expressão for verdadeira
    } else {
        código a ser executado se nenhuma das expressões anteriores for verdadeira
    }
*/

const idade = 17;

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else if (18 - idade === 1) {
    console.log(`Daqui 1 ano você será maior de idade.`);
} else {
    console.log(`Daqui ${18 - idade} anos você será maior de idade.`);
}
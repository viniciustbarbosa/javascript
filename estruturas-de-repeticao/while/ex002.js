// Programa que imprime os números de 1 a 100 e informe se são pares ou ímpares.

let i = 0;

while(i < 100) {
    i++;
    if (i%2 === 0) {
        console.log(i, "é par");
        continue;
    } else {
        console.log(i, "é ímpar");
    }
}
// while(condição) {}

/*
    do {
        // código a ser executado
        } while (condição);
*/

// comandos importantes dentro do while: "break" e "continue"

let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}

console.log('Fim do loop');
i = 10;

do {
    console.log(i);
    i--;
} while(i >= 1);
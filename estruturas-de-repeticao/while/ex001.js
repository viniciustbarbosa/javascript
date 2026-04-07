let number;
let times = 0;
const condition = 10;

while (number !== condition) {
    number = Math.floor(Math.random() * (15+1)); // Gerar número aleatório entre 0 e 15
    times++;
    console.log(`Número aleatório gerado: ${number}`);
}

console.log(`Número ${condition} encontrado após ${times} execuções do loop.`);
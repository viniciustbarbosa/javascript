// Programa para verificar o tipo de triângulo com base nos seus lados

// Declaração dos lados do triângulo
const ladoA = 4;
const ladoB = 4;
const ladoC = 5;

// Verificação do tipo de triângulo
if (ladoA === ladoB && ladoB === ladoC) {
    console.log("O triângulo é equilátero.");
} else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    console.log("O triângulo é isósceles.");
} else {
    console.log("O triângulo é escaleno.");
}

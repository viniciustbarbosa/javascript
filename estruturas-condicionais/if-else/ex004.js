// Programa para calcular comissão de vendas

// Declaração das variáveis
const valorProduto = 28500;
let percentualComissao = 0;
let valorComissao = valorProduto;

// Verificação do valor do produto para determinar a comissão
if (valorProduto < 5000) {
    percentualComissao = 0.05;
} else if (valorProduto >= 5000 && valorProduto <10000) {
    percentualComissao = 0.1;
} else {
    percentualComissao = 0.2;
}
// Cálculo da comissão
valorComissao *= percentualComissao;

// Condição de limite máximo de comissão
if (valorComissao > 5000) {
    valorComissao = 5000;
}

// Exibição do resultado
console.log(`Valor do produto: R$${valorProduto}`);
console.log(`Percentual de comissão: ${(percentualComissao * 100)}% (Lembrando que o valor da comissão é limitado a R$5000)`);
console.log(`Valor da comissão: R$${valorComissao.toFixed(2)}`);

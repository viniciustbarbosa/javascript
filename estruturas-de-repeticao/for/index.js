// for(inicialização, condição, execução) {}

for (let i =1; i <= 10; i++) {
    setTimeout(() =>console.log(i), 200 * i); // O setTimeout é usado para criar um atraso na execução do console.log(i). O tempo de atraso é calculado em milissegundos * i. Os números são exibidos com um atraso crescente.
}

console.log("-------------------");

for (i = 10; i >= 1; i--) {
    (console.log(i));
}
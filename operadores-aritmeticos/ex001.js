console.log("ESTAMOS COM 25% DE DESCONTO EM NOSSOS PRODUTOS!");

const priceFone = 250;
const discount = 25 / 100;
let finalPrice = priceFone - (priceFone * discount);

console.log("Preço original do fone: R$" + priceFone);
console.log("Preço final do fone com desconto: R$" + finalPrice);

const priceComputer = 3200;
finalPrice = priceComputer - (priceComputer * discount);

console.log("Preço original do computador: R$" + priceComputer);
console.log("Preço final do computador com desconto: R$" + finalPrice);
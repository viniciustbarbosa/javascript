/*
    && // AND (E)
    || // OR (OU)
    !  // NOT (NÃO)
*/

const a = true;
const b = false;

console.log("[Tabela verdade && - AND (E)]");
console.log(`|true  && true = ${a && a}       |`);
console.log(`|true  && false = ${a && b}     |`);
console.log(`|false && true = ${b && a}      |`);
console.log(`|false && false = ${b && b}     |`);
console.log("=============================");

console.log("[Tabela verdade || - OR (OU)]");
console.log(`|true  || true = ${a || a}       |`);
console.log(`|true  || false = ${a || b}      |`);
console.log(`|false || true = ${b || a}       |`);
console.log(`|false || false = ${b || b}     |`);
console.log("=============================");

console.log("Como funciona o operador NOT (!)");
console.log(`!true = ${!a}`);
console.log(`!false = ${!b}`);

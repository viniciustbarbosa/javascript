// Programa que mostra o cronograma de estudos de acordo com o dia da semana

const rl = require("node:readline");

const prompt = rl.createInterface({
    input: process.stdin, output: process.stdout
});

console.log("Escolha um dia da semana para ver o cronograma de estudos:"); // Inicio do programa

// Opções

console.log("[1] Segunda-feira");
console.log("[2] Terça-feira");
console.log("[3] Quarta-feira");
console.log("[4] Quinta-feira");
console.log("[5] Sexta-feira");
console.log("[6] Sábado");
console.log("[7] Domingo");

prompt.question("> Selecione o dia para saber o cronograma: ", answer => {
    switch(answer) {
        case "1": {
            console.log("Segunda-feira: Língua Portuguesa), Língua Inglesa");
            console.log("Método de estudo (1h30 por disciplina): 15 minutos de revisão, 45 minutos de estudos e 30 minutos de exercícios.")
            break;
        }
        case "2": {
            console.log("Tecnologia - Programação, Banco de Dados");
            console.log("Método de estudo (1h30 por disciplina): 15 minutos de revisão, 45 minutos de estudos e 30 minutos de exercícios.")
            break;
        }
        case "3": {
            console.log("Probabilidade e Estatística, Conhecimentos Bancários");
            console.log("Método de estudo (1h30 por disciplina): 15 minutos de revisão, 45 minutos de estudos e 30 minutos de exercícios.")
            break;
        }
        case "4": {
            console.log("Matemática, atualidades");
            console.log("Método de estudo (1h30 por disciplina): 15 minutos de revisão, 45 minutos de estudos e 30 minutos de exercícios.")
            break;
        }
        case "5": {
            console.log("Tecnologia - Machine Learning, Estruturas de Dados, Infraestrutura");
            console.log("Método de estudo (1h30 por disciplina): 15 minutos de revisão, 45 minutos de estudos e 30 minutos de exercícios.")
            break;
        }
        case "6": {
            console.log("Revisão geral de todas as disciplinas");
            console.log("Método de estudo: 1 h de revisão geral + 1h de exercícios (simulado) + 1 redação.");
            break;
        }
        case "7": {
            console.log("Descanso e lazer");
            console.log("O que fazer: Aproveite para descansar, praticar atividades físicas, passar tempo com amigos e familiares, ou se dedicar a hobbies e interesses pessoais. Essaé a parte fundamental para a recuperação mental e física, garantindo que você esteja renovado para a próxima semana de estudos.");
            break;
        }
    }
    prompt.close();
})
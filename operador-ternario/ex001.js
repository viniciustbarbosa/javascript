const hour = 9;

console.log(`Saudação quando for ${hour} horas:
${hour > 0 && hour < 6 ? "Boa madrugada!" : hour >= 6 && hour < 12 ? "Bom dia!" : hour >= 12 && hour < 18 ? "Boa tarde!" : "Boa noite!"}`);
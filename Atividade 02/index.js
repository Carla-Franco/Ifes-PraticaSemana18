const prompt = require("prompt-sync")();

const data = prompt("Informe uma data seguindo o padrão DD/MM/AAAA: ");

const [dia, mes, ano] = data.split('/');

const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

console.log(`${dia} de ${meses[mes - 1]} de ${ano}`);
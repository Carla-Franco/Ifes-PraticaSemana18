const prompt = require('prompt-sync')();

const num1 = Number(prompt('Digite o primeiro número: '));
const num2 = Number(prompt('Digite o segundo número: '));

try {
    if (num2 === 0) {
        throw new Error('Divisão por zero');
    }

    const resultado = num1 / num2;
    console.log(`Resultado: ${resultado}`);

} catch (erro) { 
    console.log(`Erro: ${erro.message}`);
}

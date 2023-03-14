const prompt = require("prompt-sync")();

const placa = prompt("Digite a placa do veículo: ");

if (!placa || placa.length !== 7) {
    console.log('Placa inválida');
} else {
    const diaSemana = new Date().getDay();
    const finalPlaca = parseInt(placa.charAt(6));

    if (diaSemana === 0 || diaSemana === 6) {
        console.log('Veículo pode circular');
    } else if ((diaSemana === 1 && (finalPlaca === 1 || finalPlaca === 2)) ||
        (diaSemana === 2 && (finalPlaca === 3 || finalPlaca === 4)) ||
        (diaSemana === 3 && (finalPlaca === 5 || finalPlaca === 6)) ||
        (diaSemana === 4 && (finalPlaca === 7 || finalPlaca === 8)) ||
        (diaSemana === 5 && (finalPlaca === 9 || finalPlaca === 0))) {
        const horaAtual = new Date().getHours();
        if ((horaAtual >= 7 && horaAtual < 10) || (horaAtual >= 17 && horaAtual < 20)) {
            console.log('Veículo não pode circular');
        } else {
            console.log('Veículo pode circular');
        }
    } else {
        console.log('Veículo pode circular');
    }
}

const fs = require('fs');

var pessoas = fs.readFileSync('Dados.json', 'utf-8');
var dados = JSON.parse(pessoas);
console.log(dados);

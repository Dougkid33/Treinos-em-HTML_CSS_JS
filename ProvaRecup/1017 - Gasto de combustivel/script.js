var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

var tempo = parseInt(valores.shift());
var velocidade = parseInt(valores.shift());

var soma = ( tempo * velocidade) / 12;
parseFloat(soma);


console.log(soma.toFixed(3));
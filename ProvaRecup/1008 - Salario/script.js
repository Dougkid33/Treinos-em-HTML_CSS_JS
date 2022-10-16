var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

var A = parseInt(valores.shift());
var B = parseInt(valores.shift());
var C = parseFloat(valores.shift());

var salario = B*C ;

console.log("NUMBER = " + A);
console.log("SALARY = U$ " + salario.toFixed(2));
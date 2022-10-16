var input =  require("fs").readFileSync("stdin", "utf-8");
var entrada = input.split("\n");

//incio da resolucao do exercicio
//variavel de entrada
var saque = parseFloat(entrada);
if (saque <=0) {
    console.log("Valor baixo de zero, insira outro");

} else if (saque > 1000000.00) {
    console.log("Valor acima de 1000000,00 insira outro");

} else {
    var notas100 = 0;
var notas50 = 0;
var notas20 = 0;
var notas10 = 0;
var notas05 = 0;
var notas02 = 0;
var moeda01 = 0;
var moeda050 = 0;
var moeda025 = 0;
var moeda010 = 0;
var moeda005 = 0;
var moeda001 = 0;




//calculo das notas
notas100 = saque / 100;
saque = saque % 100;

notas50 = saque / 50;
saque = saque % 50;

notas20 = saque / 20;
saque = saque % 20;

notas10 = saque / 10;
saque = saque % 10;

notas05 = saque / 5;
saque = saque % 5;

notas02 = saque / 2;
saque = saque % 2;

//Calculo das Moedas
moeda01 = saque / 1;
saque = saque % 1;

moeda050 = saque / 0.50;
saque = saque % 0.50;

moeda025 = saque / 0.25;
saque = saque % 0.25;

moeda010 = saque / 0.10;
saque = saque % 0.10;

moeda005 = saque / 0.05;
saque = saque % 0.05;

moeda001 = saque / 0.01;
saque = saque % 0.01;

//amostragem
console.log("============== Notas ==============");
console.log("Nota de 100 = "+ Math.trunc(notas100));
console.log("Nota de 50 = "+ Math.trunc(notas50));
console.log("Nota de 20 = "+ Math.trunc(notas20));
console.log("Nota de 10 = "+ Math.trunc(notas10));
console.log("Nota de 05 = "+ Math.trunc(notas05));
console.log("Nota de 02 = "+ Math.trunc(notas02));
console.log("============== Moedas ==============");
console.log("Moeda de 1 = "+ Math.trunc(moeda01));
console.log("Moeda de 0,50 = "+ Math.trunc(moeda050));
console.log("Moeda de 0,25 = "+ Math.trunc(moeda025));
console.log("Moeda de 0,10 = "+ Math.trunc(moeda010));
console.log("Moeda de 0,05 = "+ Math.trunc(moeda005));
console.log("Moeda de 0,01 = "+ Math.trunc(moeda001));

}

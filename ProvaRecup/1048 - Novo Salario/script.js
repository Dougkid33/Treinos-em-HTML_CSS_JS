var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

var salario = parseFloat(valores.shift());
var reajuste = 0;
var percent = 0;

if (salario >= 0 && salario <= 400)
{
    reajuste = salario*0.15;
    salario = salario + reajuste;
    percent = (reajuste/salario) *100;

    console.log("Novo salario: " + salario.toFixed(2));
    console.log("Reajuste ganho: " + reajuste.toFixed(2));
    console.log("Em percentual: " +percent.toFixed()," %");
}
else if (salario > 400 && salario <= 800)
{
    reajuste = salario*0.12;
    salario = salario + reajuste;
    percent = (reajuste/salario) *100;
    console.log("Novo salario: " + salario.toFixed(2));
    console.log("Reajuste ganho: " + reajuste.toFixed(2));
    console.log("Em percentual: " +percent.toFixed()," %");
}
else if (salario > 800 && salario <= 1200)
{
    reajuste = salario*0.1;
    percent = (reajuste/salario) *100;
    salario = salario + reajuste;
    console.log("Novo salario: " + salario.toFixed(2));
    console.log("Reajuste ganho: " + reajuste.toFixed(2));
    console.log("Em percentual: " +percent.toFixed()," %");
}
else if (salario > 1200 && salario <= 2000)
{
    reajuste = salario*0.07;
    percent = (reajuste/salario) *100;
    salario = salario + reajuste;
    console.log("Novo salario: " + salario.toFixed(2));
    console.log("Reajuste ganho: " + reajuste.toFixed(2));
    console.log("Em percentual: " +percent.toFixed()," %");
}
else if (salario > 2000)
{
    reajuste = salario*0.04;
    percent = (reajuste/salario) *100;
    salario = salario + reajuste;
    console.log("Novo salario: " + salario.toFixed(2));
    console.log("Reajuste ganho: " + reajuste.toFixed(2));
    console.log("Em percentual: " +percent.toFixed()," %");
}
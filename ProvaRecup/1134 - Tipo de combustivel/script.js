var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');




var cont1 = 0;
var cont2 = 0;
var cont3 = 0;

while( entrada != 4)
{

    var entrada = parseInt(valores.shift());
    if( entrada === 1)
    {
        cont1++;
    }
    else if( entrada === 2)
    {
        cont2++;
    }
    else if( entrada === 3)
    {
        cont3++;
    }
}

console.log("MUITO OBRIGADO");
console.log("Alcool: " + cont1);
console.log("Gasolina: " + cont2);
console.log("Diesel: " + cont3);
//console.log(entrada);
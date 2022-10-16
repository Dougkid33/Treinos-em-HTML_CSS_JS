var input = require('fs').readFileSync('stdin', 'utf8');
var valor = input.split(' ');

var hra_inicio = parseInt(valor.shift());
var hra_fim = parseInt(valor.shift());

var cont = 0;

do
{
   hra_inicio++;
   if( hra_inicio === 24)
   {
       hra_inicio =0;
   } 
   cont++;
}while (hra_inicio != hra_fim);

console.log("O JOGO DUROU " +cont , "HORA(S)");
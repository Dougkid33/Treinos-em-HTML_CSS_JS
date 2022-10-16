var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split(' ');

var A = parseFloat(valores.shift());
var B = parseFloat(valores.shift());
var C = parseFloat(valores.shift());

if( A<0 && B<0 && C<0)
{
    
}
else 
{
    var maior = 0.0;
    var seg_valor = 0.0;
    var terc_valor = 0.0;
    if (A > B && A > C) {
        maior = A;
        seg_valor = B;
        terc_valor = C;

    }
    else if (B > C && B > A)
    {
        maior = B;
        seg_valor = A;
        terc_valor = C;
    }
    else
    {
        maior = C;
        seg_valor = A;
        terc_valor = B;
    }

    var A2 = maior**2
    var B2 = seg_valor**2
    var C2 = terc_valor**2
    //comparação e racioncinio
    if( maior >= seg_valor + terc_valor)
    {
        console.log("NAO FORMA TRIANGULO ");
    }
    
    else if ( A2 === B2+ C2)
    {
        console.log("TRIANGULO RETANGULO");
    }
    else if (A2 > B2 + C2)
    {
        console.log("TRIANGULO OBTUSANGULO");
    }
    else if (A2< B2 + C2)
    {
        console.log("TRIANGULO ACUTANGULO");
    }
    
    if (A2 === B2 && A2 ===C2 && B2=== C2)
    {
        console.log("TRIANGULO EQUILATERO");
    }
    else if (B2 === C2)
    {
        console.log("TRIANGULO ISOSCELES");
    }

}
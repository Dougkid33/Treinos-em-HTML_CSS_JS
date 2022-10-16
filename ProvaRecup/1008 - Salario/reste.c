#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>

int main()
{
    //criação de vars e inicalização
    int vetor[10];
    int i;
    int soma, media, maior,menor;

    for(i = 0; i<10; i++)
    {
        vetor[i] = 0;
    }



    //entrada de dados
    for (i = 0; i<10; i++)
    {
        printf("\n Insira o vetor de indice [%i] ...:",i+1);
        fflush(stdin);
        scanf("%i", &vetor[i]);

        soma = soma + vetor[i];// soma para calculo da media

    }
    for (i = 0; i < 10; i++)
    {
        if (i == 0)
        {
            maior = vetor[i];
            menor = vetor[i];
        }
        if (vetor[i] > maior)
        {

            maior = vetor[i];
        }
        else
        {
            if ( vetor[i]<menor)
            {
                menor = vetor[i];
            }
        }

    }
    media = soma /10;



    //amostragem inversa
    for ( i = 10; i>=0; i--)
    {
        printf("%i ", vetor[i]);
    }

    printf("\n A media dos vetores eh = %i", media);
    printf("\n O menor dos vetores eh = %i", menor);
    printf("\n O maior dos vetores eh = %i", maior);


    printf("\n\n Hello world!\n");
    return 0;
}

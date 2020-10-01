#include <stdio.h>

#define N 5
int main()
{

    /*
        * Array: Guarda um conjunto de dados do mesmo tipo, precisa determinar sempre o tamanho dele, recomendado uma constante global
     */

    float notas[N], media = 0.0;
    int i;

    for (i = 0; i < N; i++)
    {
        printf("Digite a nota do aluno %d ", i);
        scanf("%f", &notas[i]);
        media += notas[i];
    }

    media /= N;

    for (i = 0; i < N; i++)
    {

        if (notas[i] > media)
        {
            printf("Aluno %d: %f\n", i, notas[i]);
        }

    }

    return 0;
}
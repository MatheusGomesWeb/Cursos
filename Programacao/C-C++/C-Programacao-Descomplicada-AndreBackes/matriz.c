#include <stdio.h>

#define INDICE 3
#define VALORES 2

int main()
{

    /*
    * Matriz: é uma estrutura com o mesmo valor onde possui linhas ( indices ) e colunas (valores), funciona como uma tabela
    * int matriz[indice][valores]
    * matriz[0][1]
    * linha 0 coluna 1 - tamanho 2 - indice 0 e 1
 */
    int matriz[INDICE][VALORES];
    int qtdIndice, qtdVal;

    for (int i = 0; i < INDICE; i++)
    {
        for (int v = 0; v < VALORES; v++)
        {
            /*   printf("Digite mat[%d][%d]:", i,v);
            scanf("%d", &matriz[i][v]);*/

            qtdVal = v;
        }

        qtdIndice = i;
    }

    if (qtdVal < VALORES && qtdIndice < INDICE)
    {
        printf("Linhas: %d\n Colunas: %d \n", qtdIndice + 1, qtdVal + 1);
    }


// soma array

int numeros[INDICE] = {2,4,6};

int soma = 0;

for(int i = 0; i < INDICE; i++) {
    soma += numeros[i];
}

printf("\nA soma do array é: %d\n", soma);

    return 0;
}
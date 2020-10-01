#include <stdio.h>
#include <stdlib.h>

/*
    Na alocação da memória, deve-se levar em conta o tamanho do tipo.
    Exemplo: criar um array de tamanho 50;

    função free(): sempre que alocamos memoria é necessario libera-la quando ela não for mais necessaria
 */

int main()
{   
   /* int *v = malloc(200);
    char *c = malloc(50);

    int *v = (int*) malloc(50 * sizeof(int));
    char *c = (char*) malloc(50 * sizeof(char));
*/
    int *p;

    p = (int*) malloc(5 * sizeof(int));

    if(p == NULL)
    {
        printf("Erro: Sem memória\n");
        exit(1);
    }
    
    int i;

    for(i = 0; i < 5; i++)
    {
        printf("Digite p[%d]: ", i);
        scanf("%d", &p[i]);
    }

    free(p);   

    return 0;
}
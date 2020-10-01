#include <stdio.h>
#include <stdlib.h>

// fprintf(), escreve em arquivos de forma formatada

int main()
{
    char nome[20] = "Matheus";
    int i = 31;
    float a = 1.74;

    FILE *arq;
    arq = fopen("arquivo.txt", "w");

    if(arq == NULL)
    {
        printf("eror na leitura do arquivo\n");
        exit(1);
    }

    printf("Nome: %s \n Idade: %d \n Altura: %f\n", nome, i, a);
    fprintf(arq, "Nome: %s \n Idade: %d \n Altura: %f\n", nome, i, a);

    fclose(arq);

    return 0;

}


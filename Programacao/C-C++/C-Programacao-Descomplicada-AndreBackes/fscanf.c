#include <stdio.h>
#include <stdlib.h>

// fscanf(), ler uma lista de variaveis formatadas do arquivo

int main()
{

    FILE *arq;
    arq = fopen("arquivo.txt", "r");

    if(arq == NULL)
    {
        printf("Erro na leitura do arquivo\n");
        exit(1);
    }

    char texto[20], nome[20];
    int id;
    float h;

    fscanf(arq,"%s %s",texto,nome);
    printf("%s %s\n",texto,nome);
    fscanf(arq,"%s %d",texto,&id);
    printf("%s %d\n",texto,id);
    fscanf(arq,"%s %f", texto, &h);
    printf("%s %f\n", texto, h);

    fclose(arq);

    return 0;
}
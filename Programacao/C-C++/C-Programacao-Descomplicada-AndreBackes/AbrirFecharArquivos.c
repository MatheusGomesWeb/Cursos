#include <stdio.h>
#include <stdlib.h>

// Abrir e fechar arquivos com a função fopen()
/*
    Para o "nome" do arquivo, podemos usar o caminho 
        - relativo: (relativo a pasta do programa)
        - absoluto: (endereço completo da localização do arquivo)

    O modo de abertura determina que tipo de uso será feito do arquivo
        - r: leitura
        - w: escrita
        - rb: leitura de arquivos binarios
        - wb: escrita de arquivos binarios
        existem outros modos na linguagem, sendo esses os principais.

    Sempre que terminamos de usar um arquivo, devemos fecha-lo. Para realizar
    essa tarefa, usa-se a função fclose()
 */

int main()
{
    FILE *f;

    f = fopen("teste.txt", "r");

    if(f == NULL)
    {
        printf("Erro na abertura!\n");
        exit(1);
    }


    fclose(f);

    return 0;
}
#include <stdio.h>
#include <string.h>

int main()
{

    /*
    * biblioteca de manipulação de strings - string.h
    * 
    * contem métodos para manipulação de string (array de caracteres)
    * ao inves de fazer um for para percorrer os caracteres do array de char, a biblioteca string.h contem métodos
    * definidos para manipulação de strings
    * 
    * strlen = pega a quantidade de caracteres armazenados no array char ( string ) e não o tamanho do array de char
    * strcpy = copia o valor de um array de char (string) para uma nova variavel
    * ex: strcpy(recebeValor, destaVariavel) - esta variavel recebe o valor desta variavel
    * strcat(recebeValor, destaVariavel) - concatena o valor de duas variaveis. 
    * O primeiro parametro(var1) recebe o valor do segundo parametro (var 2).
    * strcmp: compara duas strings(array de char) e retorna 0 para true e 1 para false
 */

    char palavra[20] = "Matheus";
    char novaPalavra[30] = "Gomes";

   /* strcpy(novaPalavra, palavra);
    strcat(palavra, novaPalavra);*/

    int tamanho = strlen(palavra);

    if (strcmp(palavra, novaPalavra) == 0)
    {
        printf("As palavras são iguais\n");
    }
    else
    {
        printf("Diferentes\n");
    }
    printf("Tamanho: %d\n", tamanho);
    printf("Tamanho: %s\n", palavra);

    return 0;
}
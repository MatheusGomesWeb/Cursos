#include <stdio.h>

int main() {


 /*
    * string: é um array do tipo CHAR onde cada posição do array representa um caractere, que forma uma palavra
    * '\0' zero, finaliza a utilização do array, caso a palavra não ocupe todas as posições do array, para gerenciar memória.
  */
    char str[20] = "Matheus";

   /* printf("Digite o nome:\n");
    scanf("%s", str);   

    printf("%s", str);*/

    str[7] = '\0';

    printf("%s\n", str);
    return 0;
}
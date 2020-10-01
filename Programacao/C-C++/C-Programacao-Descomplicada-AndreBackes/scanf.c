#include <stdio.h>

int main() {

    int num;
    float f;

    /*
        * scanf = faz a leitura dos dados digitados no teclado e armazena nas variaveis 
     */

    printf("Digite um numero \n");
    scanf("%d,%f", &num,&f);
    printf("%d, %f", num, f);

    return 0;
}
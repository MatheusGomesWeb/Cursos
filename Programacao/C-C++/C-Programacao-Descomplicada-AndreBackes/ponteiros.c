#include <stdio.h>

int main()
{
    /*
        * o operador asterisco (*) permite modificar o conteudo da posição de memoria apontada 
        * 
     */
    int x = 10;
    int *p;

    p = &x;

    printf("%d\n", x);
    *p = 12;
    printf("%d\n", *p);
    printf("%d\n", x);

    return 0;
}
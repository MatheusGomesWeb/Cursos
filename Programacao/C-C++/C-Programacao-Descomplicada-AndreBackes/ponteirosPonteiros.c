#include <stdio.h>

/*
    * A linguagem C permite criar ponteiros com diferentes niveis de apontamento:
    * ponteiros que apontam para outros ponteiros
    * não existe limite para niveis de ponteiros (*********************)
 */

int main()
{
    int x = 10;
    int *p  = &x;   
    int **p2 = &p;

    printf("%d\n", p2);
    printf("%d\n", *p2);
    printf("%d\n", **p2);

    return 0;
}
#include <stdio.h>

int main()
{

    /*
        * break: para a execução do laço e sai do loop
        * continue: continue a iteração do laço
        * Respeita a precedencia (qual vem primeiro)
     */

    for (int i = 0; i <= 5; i++)
    {

        if(i == 2) {
            printf("\nContinue: 2 \n");
            continue;
        }

         if (i == 2)
        {
            printf("\nAchou num: 2 \n");
            break;
        }

        printf("\n%d ", i);
    }

    return 0;
}
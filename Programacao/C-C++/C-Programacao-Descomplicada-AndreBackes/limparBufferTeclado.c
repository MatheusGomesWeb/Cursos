#include <stdio.h>
#include <stdlib.h>

// setbuf(stdin, NULL): limpa o buffer do teclado

int main()
{
    char ch;
    int i;
    
    for(i = 0; i < 5; i++)
    {
        printf("Digite o %do caracter: ", i+1);
        scanf("%c", &ch);
        setbuf(stdin, NULL);
    }

    return 0;
}
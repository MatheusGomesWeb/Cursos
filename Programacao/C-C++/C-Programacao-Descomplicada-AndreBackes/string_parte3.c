#include <stdio.h>
#include <string.h>

int main() {

    // Invertendo uma string (array de char)

    char str[20] = "Linguagem C";
    char c;
    int i, tam = strlen(str);

    for (i = 0; i < tam/2; i++)
    {
        c = str[i];
        str[i] = str[tam-1-i];
        str[tam-1-i] = c;
    }
    
    printf("str = %s\n", str);

    return 0;
}
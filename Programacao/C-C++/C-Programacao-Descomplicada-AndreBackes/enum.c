#include <stdio.h>
#include <string.h>

/* enum: cria uma lista (array) de CONSTANTES 
    * lista numerica identificada por um nome CONSTANTE
    * enum organiza em ordem automaticamente pelo valor
*/

enum DiasSemana {Segunda = 1, Terca = 3, Quarta, Quinta, Sexta, Sabado, Domingo};

int main() {

    enum DiasSemana s1,s2,s3;

    s1 = Segunda;
    s2 = Terca;
    s3 = Quarta;

    if(s1 == 1) {
        printf("S1: Segunda\n");
    }
     if(s2 == 3) {
        printf("S2: Terça\n");
    }
     if(s3 == 4) {
        printf("S3: Quarta\n");
    }

    return 0;
}
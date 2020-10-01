#include <stdio.h>

int main() {

    int lista[5] = {5,78,145,98,2};
    int maior, menor = lista[0];

// maior numero do array
    for(int i = 0; i < 5; i++) {
        if(maior < lista[i]) {
            maior = lista[i];
        }
    }

    printf("Maior: %d\n", maior);

// menor numero do array

for(int i = 0; i < 5; i++) {
    if(menor > lista[i]) {
        menor = lista[i];
    }
}
    printf("Menor: %d\n", menor);

    return 0;
}
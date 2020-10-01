#include <stdio.h>

// Funcionamento de funções com recursão ( chama ela mesmo ).

int fatorial(int n) {
    if(n == 0) {
        return 1;
    }else {
        return n*fatorial(n-1);
    }
}

int main() {

//int x = fatorial(4);

printf("%d: ", fatorial(4));

    return 0;
}
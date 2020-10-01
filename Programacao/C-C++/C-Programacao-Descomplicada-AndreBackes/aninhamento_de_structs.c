#include <stdio.h>
#include <string.h>

/* aninhamento de structs: uma struct que contem uma ou mais estruturas dentro dela, mesmo conceito de Herança em OO 
    * Obs. struct é um tipo de variavel, ela só encherga oque está acima dela. ( declarada )
*/

struct Endereco {
    char rua[100];
    int numero;
};

struct Pessoa {
   char nome[50];
   int idade;
   struct Endereco end;
};


int main() {

    struct Pessoa p = {"Matheus", 25, "Pres. Castel Branco", 250};
    //strcpy(p.end.rua, "Av. Pres. Castelo Branco");   

    printf("%s \t %d \n", p.end.rua, p.end.numero);
    printf("%s\n", p.nome);
    printf("%d\n", p.idade);

    return 0;
}
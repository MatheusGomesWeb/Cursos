	#include <stdio.h>
	
	// Recursão: quando uma função chama ela mesma para resolver um problema. 
	
	void esvaziarVazo(int flores) {
		if(flores > 0) {
		 esvaziarVazo(flores-1);	
		 printf("%d: ", flores);
		 
		}
		if(flores == 1) {
			 printf("O vazo está vazio");
		 }
	}

	int main() {
		
	int flores = 5;
	
	esvaziarVazo(flores);

	return 0;
	}

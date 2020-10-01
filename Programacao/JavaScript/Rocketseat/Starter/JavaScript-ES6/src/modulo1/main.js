/* Classes */

class List {
    constructor() {
        this.data = [];
    }
}

class Carro extends List {
    constructor() {
        super();  

        this.nome = "";
    }

    add(data) {
        this.data.push(data);
    }

    mostrar() {
        console.log(this.data);
    }

}

const carro = new Carro();
carro.add(carro.nome = "Uno");

document.getElementById('MostrarCarro').onclick = function () {
    carro.mostrar();
};

// Escopo com let e const

const usuarios = "Matheus";
//usuarios = "Silvana"; // Constantes não variam o valor, são fixos - Error: read-only

const users = {nome: "Matheus"};
users.nome = "Silvana"; // É possivel alterar o valor de constantes através de "MUTAÇÃO", onde a constante recebe um array ou um objeto como valor.
console.log(users.nome);

function soma(x) {
    let y = 2;

    if(x > 5) {
        y = 4; // esta no escopo local, e é visivel neste condicional.

        console.log(x, y);
    }
}

//y = 4; // variavel esta no escopo local, e não é visivel no escopo global

soma(10);

// Operações em Arrays

const arr = [1,2,3,4];

// percorre um array e recebe dois parametros, (valor, posição)
const newArr = arr.map(function(item,index) {
   // console.log(item, index);
});

// percorre um array e recebe dois parametos, (valor, posição)
arr.forEach(function(item, index) {
    //console.log(item, index);
});

// retorna o resultado de uma operação com todos os valores de um array
const redu_ce = arr.reduce(function(total, next) {
    return total + next;

    // total: 0, total: 1, total:2, total: 3
    // next: 1, next: 2, next: 4, next: 7
});

//console.log(redu_ce);

// filtra o array e retorna o valor true ou false se encontrou ou nao
const filter = arr.filter(function(item) {
    //return item %2 === 0;
});

// retorna o valor procurado caso exista no array, senão retorna undefined

const find = arr.find(function(item) {
    //console.log(item === 1);
});


// Arrow Functions

// quando possui apenas um parametro, pode retirar o ( )
const novoArr = arr.map(item => {
    //console.log(item);
});

// quando retorna apenas um valor pode retornar direto depois da flexa
const novoArr2 = arr.map(item => item);
console.log(novoArr2);

// quando retornar objetos precisa colocar () em volta da chamada
const novo3 = () => ({nome: "Matheus"});
console.log(novo3());

// Desestruturação

const desestruturacao = {
    nome: "Matheus",
    idade: 26,
    endereco: {
        cidade: "Praia Grande",
        estado: "SP"
    }
};

console.log(desestruturacao.nome + desestruturacao.idade + desestruturacao.endereco.cidade + desestruturacao.endereco.estado);

console.log("-----DESESTRUTURAÇÃO-------");

const {nome, idade, endereco: {cidade, estado}} = desestruturacao;

console.log(nome, idade, cidade, estado);

// Operadores REST e SPREAD

const usr = {
    nomer: "Matheus", 
    idade: 26,
    estado: "SP"
};

/* o valor nome foi recebido, e o resto dos dados está no objeto ...resto
    Tambem é permitido utilizar o ...rest em arrays 
    e tambem em parametros de funcoes (a, b, ...params)
*/
const {nomer, ...resto} = usr;

console.log(nomer, resto);

/* SPREAD: junta os dados, ou cria um copia para substituir, 
    ex: ...usuario1, nome: "novonome" - fez uma copia do objeto e mudou o atributo nome para o novo objeto gerado
    ex: arr = [...arr1, ...arr2] - junta os 2 arrays na variavel arr
*/

// Template Literals

const user12 = {
    nome12: "Matheus",
    idade12: 26
}

// desestruturação
const {nome12, idade12} = user12;

console.log("Meu nome é: " + nome12 + ", idade: " + idade12);

// template literals

console.log(`Meu nome é ${nome12}, idade: ${idade12}`);
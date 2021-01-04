/*
  Propriedades e métodos do Protótipo
    Já que tudo em JavaScript é objeto, as propriedades abaixo estão disponíveis em todos os objetos criados apartir de funções construtoras.
      
      {}.constructor 
        retorna a função construtora do objeto.

      {}.hasOwnProperty('prop')
        verifica se possui a propriedade e retorna true.  

      {}.propertyIsEnumerable("prop")  
        verifica se a propriedade é Enumeravel.
*/

const carro = {
  test: 'test'
}

console.log(carro.constructor.prototype);
console.log(carro.hasOwnProperty('test'));
console.log(carro.propertyIsEnumerable('test'));
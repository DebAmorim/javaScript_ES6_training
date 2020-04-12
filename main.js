/**
 * Manipulando Arrays
 * ES6 trás funcionalidades para simplificar a manipulação
 * de arrays.
 */

const arr = [1,3,4,5,8,9];

/**
 * Map:
 * 
 * Percorre um vetor
 * Retorna uma informação
 * 
 * Pode receber, além do item do vetor a ser percorrido,
 * o index (que é a posição do item no vetor)
 */

const newArr = arr.map(function(item, index) {
    return item + index;
});

console.log('Map result: ');
console.log(newArr);


/**
 * Reduce:
 * 
 * Percorre um vetor
 * Retorna uma informação única (uma variável)
 */
 
//neste exemplo todos os itens do vetor serão somados
 const sum = arr.reduce(function(total, next) {
    return total + next;
 });

console.log('Reduce result: ');
console.log(sum);

/**
 * Filter:
 * 
 * Percorre um vetor
 * Faz uma comparação para o item
 * Se retornar true, o item é adicionado ao novo vetor
 */

 const filter = arr.filter(function(item){
    //comparação que retorna true ou false 
    return item % 2 === 0;
 });

 console.log('Filter result: ');
console.log(filter);

/**
 * Find:
 * 
 * Percorre um vetor em busca de informação específica
 * Se encontrar, retorna a própria informação buscada
 * Se não encontrar, retorna undefined
 */

const find = arr.filter(function(item){
    //comparação que retorna true ou false 
    return item === 4;
 });

 console.log('Find result: ');
console.log(find);
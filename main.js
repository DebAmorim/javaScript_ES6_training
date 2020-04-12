/**
 * Operadores REST/Spread
 * 
 * Esses operadores ainda não foram acoplados ao Babel,
 * então são utilizados em forma de plugins pelo comando:
 * 
 * yarn add @babel/plugin-proposal-object-rest-spread
 * 
 */


 /**
 * REST: serve para pegar o resto das propriedades uma vez que a primeira parte
 * foi salva em algum lugar.
 * 
 * Exemplo
 * 
 */

const usuario = {
    nome: 'Deb',
    idade: 23,
    empresa: 'PiButtons'
};

//aqui a variável nome guarda o nome e resto guarda todas as outras informações do objeto
const { nome, ...resto } = usuario;


console.log('REST operator - objeto usuário:');
console.log(nome);
console.log(resto);


//aplicação de rest em vetores

const arr = [1, 2, 3, 4];

const [a, b, ...c] = arr;

console.log('REST operator - vetor:');
console.log(a);
console.log(b);
console.log(c);

//rest operator para parâmetros de funções

//forma tradicional de escrever a soma
// function soma(a, b){
//     return a + b;
// }

//caso quisesse adicionar mais parâmetros para a soma, normalmente se faria:
// function soma(a, b, c){
//     return a + b + c;
// }
//e assim por diante

//com REST operator

//o REST operator recebeu todos os parâmetros como um vetor na função, com nome params
function soma(...params){
    return params.reduce((total, next) => total + next);
}

//também poderia ser: soma(a, b, ...params) onde params receberia todos os parâmetros do terceiro em diante

console.log('REST operator - parâmetros da função:');
console.log(soma(1,3,5));

/**
 * SPREAD: (espalha) - tem a função de repassar as informações de um objeto ou 
 * array para outro objeto ou array
 * 
 * Exemplos
 * 
 */


 const arr1 = [1,2,3];
 const arr2 = [4,5,6];

 const arr3 = [...arr1, ...arr2];

 console.log('SPREAD operator - juntando vetores:');
console.log(arr1);
console.log(arr2);
console.log(arr3);

const usuario1 = {
    nome: 'Debora',
    idade: 28,
    empresa: 'PiButtons'
};

const usuario2 = { ...usuario1, nome: 'Eric'};

console.log('SPREAD operator - aproveitando informações de um objeto em outro:');
console.log(usuario1);
console.log(usuario2);




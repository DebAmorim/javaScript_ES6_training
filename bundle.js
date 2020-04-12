"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
var usuario = {
  nome: 'Deb',
  idade: 23,
  empresa: 'PiButtons'
}; //aqui a variável nome guarda o nome e resto guarda todas as outras informações do objeto

var nome = usuario.nome,
    resto = _objectWithoutProperties(usuario, ["nome"]);

console.log('REST operator - objeto usuário:');
console.log(nome);
console.log(resto); //aplicação de rest em vetores

var arr = [1, 2, 3, 4];
var a = arr[0],
    b = arr[1],
    c = arr.slice(2);
console.log('REST operator - vetor:');
console.log(a);
console.log(b);
console.log(c); //rest operator para parâmetros de funções
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

function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
} //também poderia ser: soma(a, b, ...params) onde params receberia todos os parâmetros do terceiro em diante


console.log('REST operator - parâmetros da função:');
console.log(soma(1, 3, 5));
/**
 * SPREAD: (espalha) - tem a função de repassar as informações de um objeto ou 
 * array para outro objeto ou array
 * 
 * Exemplos
 * 
 */

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [].concat(arr1, arr2);
console.log('SPREAD operator - juntando vetores:');
console.log(arr1);
console.log(arr2);
console.log(arr3);
var usuario1 = {
  nome: 'Debora',
  idade: 28,
  empresa: 'PiButtons'
};

var usuario2 = _objectSpread({}, usuario1, {
  nome: 'Eric'
});

console.log('SPREAD operator - aproveitando informações de um objeto em outro:');
console.log(usuario1);
console.log(usuario2);

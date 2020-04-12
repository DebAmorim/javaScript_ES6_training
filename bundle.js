"use strict";

/**
 * Manipulando Arrays
 * ES6 trás funcionalidades para simplificar a manipulação
 * de arrays.
 */
var arr = [1, 3, 4, 5, 8, 9];
/**
 *
 * Sem uso de arrow function e tem-se dentro do map uma função
 * anônima
 */

var newArr = arr.map(function (item, index) {
  return item * 2;
});
console.log('Map result: ');
console.log(newArr);
/**
 * Arrow Function:
 * 
 * Requisito: funções anônimas, ex: callback
 * 
 * Recebendo um único parâmetro
 * Retornando um único parâmetro
 * 
 */

var arrow = arr.map(function (item) {
  return item * 2;
});
console.log('Arrow function result: ');
console.log(arrow);

"use strict";

/**
 * Template Literals
 * 
 * Uma forma de incluir variáveis dentro de strings no JS ES6
 * 
 */
var nome = 'Deb';
var idade = 28; //essa forma exige muitas concatenações

console.log('Meu nome é ' + nome + ' e tenho' + idade + ' anos.');
console.log("Meu nome \xE9 ".concat(nome, " e tenho ").concat(idade, " anos."));

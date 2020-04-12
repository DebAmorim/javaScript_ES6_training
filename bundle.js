"use strict";

/**
 * variáveis constantes não tem seu valor reatribuído,
 * ou seja, elas são "read only"
 */
var a = 1; // fazer a = 3 retornaria um erro

/**
 * Mutação de variável:
 * Trabalhamos com o mesmo formato do objeto, mesmas informações,
 * mas o valor é diferente.
 */

var usuario = {
  nome: 'Deb'
};
usuario.nome = 'Amorim';
console.log(usuario.nome);
/**
 * Variáveis de escopo
 * O escopo do let é definido pelas {} onde a variável foi declarada
 *
 */

function teste(x) {
  var y = 2;

  if (x > 5) {
    console.log(x, y);
  }
}

teste(10);

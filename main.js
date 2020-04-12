/**
 * Valores Padrão
 * 
 * Funções podem ter valores padrões de parâmetros declarados
 * para evitar erros caso não recebam todos os parâmetros.
 * 
 */

 //escrito da forma tradicional
//  function soma (a = 3, b = 6){
//      return a + b;
//  }

 //escrito como arrowfunction
 const soma = (a = 3, b = 7) => a + b;

 console.log('Soma sem parâmetros result: ');
 console.log(soma());

 console.log('Soma com 1 parâmetro (2) result: ');
 console.log(soma(2));

 console.log('Soma com 2 parâmetros (2, 15) result: ');
 console.log(soma(2, 15));



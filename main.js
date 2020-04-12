/**
 * Object Short Syntax
 * 
 * Uma forma de replicar dados de um objeto em outro
 */


const nome = 'Deb';
const idade = 28;

//como seria feito
// const usuario = {
//     nome: nome,
//     idade: idade,
//     empresa: 'PiButtons',
// };

//como pode ser feito
const usuario = {
    nome,
    idade,
    empresa: 'PiButtons',
};

console.log(usuario);
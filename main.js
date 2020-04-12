/**
 * Desestruturação
 * 
 * Recurso para obter valores de um objeto no JS
 * 
 */


 const usuario = {
     nome: 'Deb',
     idade: 28,
     endereco: {
         cidade: 'Uberlândia',
         estado: 'MG',
     },
 };

 console.log(usuario);


 //como normalmente se dá o acesso às informações do usuário:

//  const nome = usuario.nome;
//  const idade = usuario.idade;
//  const cidade = usuario.endereco.cidade;

 //o que torna muito verboso o código.


 /**
 * Aplicando conceitos de desestruturação:
 */


 const { nome, idade, endereco: { cidade } } = usuario;

 console.log(nome);
 console.log(idade);
 console.log(cidade);

 /**
 * Aplicando desestruturação em funções:
 */

 function mostraNome({nome, idade}){
    console.log(nome, idade);
 }

 mostraNome(usuario);
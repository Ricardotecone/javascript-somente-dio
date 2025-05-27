//EXEMPLO 1:
// let pessoa = {
//     nome: "José Ricardo Onorato",
//     idade: 41,
//     profissao: "funcionario público",
//     //metódo:
//     descrever: function(){
//         console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`);    
//     }
// }
//  //eu posso invocar essa função/metodo descrever:
//  pessoa.descrever();



//EXEMPLO 2
//se eu tiver outra pessoa:
//  let pessoa = {
//     nome: "José Ricardo Onorato",
//     idade: 41,
//     profissao: "funcionario público",
//     //metódo:
//     descrever: function(){
//         console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`);    
//     }
// } 
// pessoa.nome = 'Rafael';
// pessoa.idade = 39;
// pessoa.nome = "thaìs"
// pessoa.profissao = "períta"
// pessoa.descrever();



//EXEMPLO 3
//posso substituir/sobrescrever a função/metodo de dentro do objeto:
// let pessoa = {
//     nome: "José Ricardo Onorato",
//     idade: 41,
//     profissao: "funcionario público",
//     //metódo:
//     descrever: function(){
//         console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`);    
//     }
// }
//lembrando que esse modo de acesso aos conteúdos do objeto é direto, mas tem também o modo dinamico.
//Ao transcrever ou substituir a função, atençao para colocar o (=) antes de function:
// pessoa.descrever = function(){
//     console.log(`Meu nome ${this.nome}`);
// }
// pessoa.descrever()




//EXEMPLO 3.1
//acesso aos conteúdos do objeto de modo dinamico atravez de uma strig por exemplo:
// let pessoa = {
//     nome: "José Ricardo Onorato",
//     idade: 41,
//     profissao: "funcionario público",
//     //metódo:
//     descrever: function(){
//         console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`);    
//     }
// }
// const atributo = "idade"
// console.log(pessoa[atributo]);


//EXEMPLO 3.2:
// let pessoa = {
//     nome: "José Ricardo Onorato",
//     idade: 41,
//     profissao: "funcionario público",
//     //metódo:
//     descrever: function(){
//         console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`);    
//     }
// }
// console.log(pessoa['nome']);



// NO EXEMPLO 3.3, POSSO ACESSAR DE DUAS FORMAS:
let pessoa = {
    nome: "José Ricardo Onorato",
    idade: 41,
    profissao: "funcionario público",
    //metódo:
    descrever: function(){
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`);    
    }
}
//DESSE JEITO:
pessoa['nome'] = 'teste';
console.log(pessoa);
//E DESSE JEITO:
pessoa.nome = 'teste';
console.log(pessoa);
//RESUMO:
// - É A MESMA COISA, A MESMA FORMA DE ACESSO.
// - A PRIMEIRA É UM ACESSO DINÂMICO
//QUE NÃO PRECISA SABER QUAL O NOME DO ATRIBUTO(NOME)QUE PODE VIM DE OUTRO LUGAR OU PARÂMETRO
// - A SEGUNDA É ACESSO DIRETO ONDE PRECISO SABER O NOME DO ATRIBUTO (NOME)

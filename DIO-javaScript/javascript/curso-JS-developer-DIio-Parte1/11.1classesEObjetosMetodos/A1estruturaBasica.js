//Estrutura básica

// let ricardo = {
//     nome: "José Ricardo Onorato",
//     idade: 41,
//     profissao: "funcionario público",
// }
// console.log(ricardo.nome);
// console.log(ricardo.idade);
// console.log(ricardo.profissao);



// Adicionando/incrementando objeto dinamicamente/isoladamente fora do escolpo:

// let ricardo = {
//     nome: "José Ricardo Onorato",
//     idade: 41,
//     profissao: "funcionario público",
// }
// ricardo.altura = 1.75; //a diferença de declarar aqui é que ao invez de (:), coloca-se (=) e ';' e não (,)
// console.log(ricardo);



//Deletando/removendo objeto dinamicamente/isoladamente fora do escolpo:

let ricardo = {
    nome: "José Ricardo Onorato",
    idade: 41,
    profissao: "funcionario público",
}
ricardo.altura = 1.75; //a diferença de declarar aqui é que ao invez de (:), coloca-se (=) e ';' e não (,)
delete ricardo.profissao;
console.log(ricardo);
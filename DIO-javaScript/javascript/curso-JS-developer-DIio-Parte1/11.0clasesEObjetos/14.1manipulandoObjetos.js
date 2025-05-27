// Objetos
// Dados que possuem propriedades e valores que definem suas
// características. Deve ser declarado entre chaves “{}”.
// Ex.: imagine uma xícara azul. Ela tem cor, pode ter vários
// tamanhos e funções(quero cafééé). Pode ser declarada assim:
// var xicara = {
//     cor: ‘azul’,
//     tamanho: ‘p’,
//     funcao: tomarCafe()
// }

// Manipulando objetos
// As propriedades de ojbetos podem ser atribuídas à variáveis,
// facilitando a manipulação do objeto. Chamamos isso de
// desestruturação.
// Ex.: var xicara = {cor: ‘azul’, tamanho: ‘p’, funcao: tomarCafe()}
// var cor = xicara.cor;
// var tamanho = xicara.tamanho;
// var funcao = tomarCafe();

// Manipulando objetos
// Outra forma de fazer a desestruturação é utilizando chaves ao
// declarar a variável:
// Ex.: var xicara = {cor: ‘azul’, tamanho: ‘p’, funcao: tomarCafe()}
// var { cor, tamanho, funcao } = xicara;


let object = {string: "string", number: 1, boolean: true, array: ["array"], objectInterno: {objectInterno: "objeto interno"}}
console.log(object)
console.log(object.boolean)
console.log(object.objectInterno)

//formas de desestruturação
var string = object.string
console.log(string)

var arrayIterno = object.array
console.log(arrayIterno)

//desestruturação com chaves{}
var{string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);

// Laços de repetição:
// -for;
// -for/in;
// -for/of;
// -while;
// -Do/while.

// For:  executa uma função até que ela seja falsa
let array = ["valor1","valor2", "valor3", "valor4", "valor5"];

let object = {propriedade1: "valor1", propriedade2: "valor2", propriedade3: "valor3"}

for(let indice = 0; indice < array.length; indice ++){
    console.log(indice)
}

// For/in: funciona com uma repetição a partir de uma propriedade.
//  for([indice] in [objeto ou array]){
//     declaração
// }

// exemplo: var array = ["valar1", "valar2", "valar3", "valar4"]
//     for(i in array){
//         console.log(i);
// }

for (let i in array){
    console.log(i)
}

//não precisa mais escrever o let porque o "i" já foi declarado
for (i in object ){
    console.log(i);
}

// For/of: funciona como uma repetição a partir de um valor:
// for([indice] of [array]){
//     for(i of array)
//         console.log(i)
// }

//nesse caso só vai ser imprsso o valor
for(i of array){
    console.log(i)
}

// while: executa uma instrução enquanto a condição for verdadeira
//        e a verificação é feita antes da execução exemplo

var a = 0
    while (a<10){
    a++;
    console.log(a);
}


// Do/while: executa até que a condução seja falsa;
// a verificação é feita depois de execução exemplo:

var a = 0;
    do{
        a++
        console.log(a)
    } while (a < 10)

//a variavél "a" recebe mais um e imprime 
//no console até que seu valor chegue a 10
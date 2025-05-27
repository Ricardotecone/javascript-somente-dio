// //EXEMPLO 1
// const alunos =['João', 'Vitor', 'Marina'];
// //adicionar 1º modo dinamicamente com push:
// alunos.push('Renan');
// //adicionar 2º modo diretamente a posição:
// alunos[4] = 'Vinícios';
// console.log(alunos);
// //substituir:
// alunos[3] = 'Mateus'; //aqui matheus substitui renam quue estava na posiçáo [3]
// console.log(alunos);

// //EXEMPLO 2
// //a lista pode começar sem nada pra depois ir adicionando elementos via push:
// const alunos = [];
// alunos.push('testes'); // nesse tipo de adição atentar para o uso de parêntese()
// alunos.push(10);        
// console.log(alunos);



//EXEMPLO 3
//REMOVENDO ITÉM COM O POP:
// const alunos = ['1', '2', '3'];// nessa operaçõ, ele tira o ultimo elemento
// console.log(alunos);           // e o imprime separado nesse caso o numero 3
// console.log(alunos.pop());        
// console.log(alunos);



// //EXEMPLO 4
// // usando o shift, retira-se o primeiro elemento
// // e o imprime separado nesse caso o numero 1
// const alunos = ['1', '2', '3'];
// console.log(alunos);          
// console.log(alunos.shift());        
// console.log(alunos);


//EXEMPLO 5
//length diz quak é o tamanho da lista
// const notas=[];

// notas.push(5);
// notas.push(7);
// notas.push(8);
// notas.push(2);
// notas.push(5);

// console.log(notas.length);


//tirando a média:
const notas=[];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

const soma = + notas[0] +  notas[1] + notas[2] +  notas[3] + notas[4]

//console.log(soma / notas.length); //poe ser assim
console.log(soma / 5); //ou pode ser assim
//OBS. essa operação fica melhor com FOR.
// // EXMPLO 3 tirando a média:
// const notas=[];

// notas.push(5);
// notas.push(7);
// notas.push(8);
// notas.push(2);
// notas.push(5);

// const soma = + notas[0] +  notas[1] + notas[2] +  notas[3] + notas[4]

// //console.log(soma / notas.length); //poe ser assim
// console.log(soma / 5); //ou pode ser assim


// tirando a média com FOR:
const notas=[];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8)

let soma = 0; //tem que colocar essa variavel pra fazer a operação(?fiquei na duvida?)

console.log(`Tamanho da lista: ${notas.length} elementos`); //O (.length) me dá o tamanho da lista
console.log('-----------------------------------------------');
for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota; 
}

console.log(`soma de todas as notas: ${soma}`); //soma das notas

const media = soma / notas.length;
console.log(`Média das notas: ${media}`); //média das notas

//OBS. PODERIA ITERAR DE 2 EM 2, 3 EM 3... BASTA PRA ISSO ADICIONAR A SEGUINTE NOTAÇÃO AO i:
//for (let i = 0; i < notas.length; i = i+2)
//for (let i = 0; i < notas.length; i = i+3)
//for (let i = 0; i < notas.length; i = i+4)
//e por aí vai...
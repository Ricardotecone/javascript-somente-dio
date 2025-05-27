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
console.log(`Média das notas: ${media}`);
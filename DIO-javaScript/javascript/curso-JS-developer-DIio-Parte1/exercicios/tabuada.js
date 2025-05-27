// //crie um programa que dado numero imprima sua tabuada
// const numero = 5
// for (let i = 1; i < 10; i++) {
//     console.log(i * numero);  
// }



//crie um programa que seja capaz de percorrer uma lista de numero e imprima cada numero par
const lista = [7,12,24,25];

for (let i = 0; i < lista.length; i++) {
    const numero = lista[i];
    if (numero % 2 === 0) {
        console.log(numero);    
    }  
}
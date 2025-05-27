//EXEMPLO 1
// for (let i = 0; i <= 10; i++){
//     console.log(i);   
// }


//EXEMPLO 2
//OBS. for (let i = 0; i < array.length; i++) atentar para trocar o nome do array(array.length) para o nome da variavel que está em const (const nome = 'jose ricardo onorato') ficando de da seguinte forma: i < nome.length;
// const nome = 'jose ricardo onorato';
// for (let i = 0; i < nome.length; i++) {
//     //OBS 2 se botar só o (i) no console, só será impresso numeros até o final da condição( i < nome.length) tem que adicionar a variavel que tá em const (que é nome)para imprimir as letras
//     console.log(nome[i]); //tenho que adicionar a variavel nome que estaá no( const nome)
// }

const localidade = 'Recife Pernamcuco';
for(i =0; i< localidade.length; i++){
    //posso imprimir assim guardando numa vcariável
    const letras = localidade[i];
    console.log(letras);
       
    //ou posso imprimir só assim
    // console.log(localidade[i]);
}


// const escola = 'santa maria mazzarelo';
// for (let i = 0; i < escola.length; i++) {
//     console.log(escola[i]);
// }
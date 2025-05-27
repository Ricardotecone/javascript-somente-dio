let nota1 = 10;
let nota2 = 6;
let nota3 = 6;

media = (nota1 + nota2 + nota3) / 3;
console.log(media.toFixed(2))

if(media < 5){
    console.log("Reprovação");
}
else if(media >= 5 && media <= 7){
    console.log("Recuperação");
}
else{
    console.log("passou de semestre");
}
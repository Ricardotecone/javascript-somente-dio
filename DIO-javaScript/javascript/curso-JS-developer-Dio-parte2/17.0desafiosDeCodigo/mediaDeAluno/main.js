const {gets, print} = require('./mediaDeAluno')

const media = gets();

if(media >= 0 && media < 5){
    print('reprovado');
}
else if (media >= 5 && media < 7){
    print('recuperação');
}

else if(media >= 7){
    print('aprovado');
}
else{
    print('numero inválido');
}
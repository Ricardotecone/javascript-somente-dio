var jogador1 = 0;
var jogador2 = -2;
var placar;

if(jogador1 >= 0 && jogador2 >= 0){
    console.log(`jogador 1 marcou ${jogador1} pontos`);
    console.log(`jogador 2 marcou ${jogador2} pontos`);
}
else if(jogador2 >= 0 && jogador1 >= 0){
    console.log(`jogador 1 marcou ${jogador1} pontos`);
    console.log(`jogador 2 marcou ${jogador2} pontos`);
}

else{
    console.log("placar inválido");
    console.log("ninguém marcou pontos");
}


//aninhamento de if - um if dentro do outro aqui se jogar o -1 dá valor invalido (forma de verificação/validação da condição)
if(jogador1 >= 0 && jogador2 >= 0){
    if(jogador1 >= 0){
        console.log(`jogador 1 marcou ${jogador1} pontos`);
        console.log(`jogador 2 marcou ${jogador2} pontos`);
    }
    else if(jogador2 >= 0){
        console.log(`jogador 1 marcou ${jogador1} pontos`);
        console.log(`jogador 2 marcou ${jogador2} pontos`);
    }
    else{
        console.log("placar inválido");
        console.log("ninguém marcou pontos");
    }
}


//if ternário de uma linha só (forma de verificação/validação da condição)
jogador1 < 0 && jogador2 < 0 ? console.log("os jogadores são válidos"): console.log("jogadores inválidos");

if(jogador1 > 0){
    console.log(`jogador 1 marcou ${jogador1} pontos`);
    console.log(`jogador 2 marcou ${jogador2} pontos`);
}
else if(jogador2 > 0){
    console.log(`jogador 1 marcou ${jogador1} pontos`);
    console.log(`jogador 2 marcou ${jogador2} pontos`);
}
else{
    console.log("placar inválido");
    console.log("ninguém marcou pontos");
}

//outras verificações
jogador1 >= 0 && jogador2 >= 0 ? console.log("os jogadores são válidos"): console.log("jogadores inválidos");

if(jogador1 >= 0 && jogador2 <= jogador1 && jogador2 >=0){
    console.log(`jogador 1 marcou ${jogador1} pontos`);
    console.log(`jogador 2 marcou ${jogador2} pontos`);
    placar = jogador1 >= jogador2;
}
else if(jogador2 >= 0 || jogador1 <= jogador2){
    console.log(`jogador 2 marcou ${jogador2} pontos`);
    console.log(`jogador 1 marcou ${jogador1} pontos`);
    placar = jogador2 >= jogador1
}
else{
    console.log("placar inválido");
    console.log("ninguém marcou pontos");
}

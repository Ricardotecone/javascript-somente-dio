var jogador1 = 12;
var jogador2 = 2;
var placar = (jogador1 > jogador2 || jogador1 < jogador2) || (jogador1 == jogador2)

//resolução com switch case
switch(placar){
    case placar = jogador1 < 0:
        console.log("placar inválido")
        break

    case placar = jogador2 < 0:
        console.log("placar inválido")
        break

    case placar = jogador1 > jogador2:
        console.log("o jogador 1 ganhou")
        break

    case placar = jogador2 > jogador1:
        console.log("o jogador 2 ghanhou")
        break

    

    default:
        console.log("ninguém ganhou")

}

rankear("Ricardo", 10, 1, )
rankear("Matheus", 15)

function rankear(name = "jogador", vitorias = 0, derrotas = 0) {

    let nivel = vitorias
    let saldo = vitorias - derrotas

    if(vitorias <= 10){
        nivel = "ferro"
    }
    else if(vitorias >= 11 && vitorias <= 20){
        nivel = "bronze"
    }
    else if(vitorias >= 21 && vitorias <= 50){
        nivel = "prata"
    }
    else if(vitorias >= 51 && vitorias <= 80){
        nivel = "ouro"
    }
    else if(vitorias >= 81 && vitorias <= 90){
        nivel = "diamante"
    }
    else if(vitorias >= 91 && vitorias <= 100){
        nivel = "lendário"
    }
    else {
        vitorias >= 101; nivel = "imortal"
    }
    
    console.log("O herói " + name + " tem um saldo de " + saldo + " vitórias e está no nível " + nivel)
    return saldo
}
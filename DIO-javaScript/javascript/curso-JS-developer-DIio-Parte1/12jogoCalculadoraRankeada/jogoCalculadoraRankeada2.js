function calcularRanking(name = "jogador", vitorias = 0, derrotas = 0) {
    let saldo = vitorias - derrotas
    let nivel = vitorias
    return saldo
    
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

    return 'O Herói tem um saldo de ${saldo} e está no nível de ${nível}'   
}
    calcularRanking("Ricardo", 10, 1)

    let vitorias = parseInt(prompt("Digite a quantidade de vitórias: "))
    let derrotas = parseInt(prompt("Digite a quantidade de derrotas: "))

    let resultado = calcularRanking("Ricardo", vitorias, derrotas)
    console.log(resultado)
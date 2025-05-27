let total = analizar(15, 5)

function analizar(vitorias, derrotas){
    let saldo = vitorias - derrotas
    return saldo
}

let vitorias = 100
let derrotas = 5
let saldo = vitorias - derrotas
let nivel = ["ferro", "bronze", "prata", "ouro", "diamante", "lendário", "imortal"]

if(vitorias <= 10){
    console.log("Nível " + nivel[0])
}
else if (vitorias >= 11 && vitorias <= 20){
    console.log("Nível " + nivel[1])
}
else if(vitorias >= 21 && vitorias <= 50){
    console.log("Nível " + nivel[2])
}
else if(vitorias >= 51 && vitorias <= 80){
    console.log("Nível " + nivel[3])
}
else if(vitorias >= 81 && vitorias <= 90){
    console.log("Nível " + nivel[4])
}
else if(vitorias >= 91 && vitorias <= 100){
    console.log("Nível " + nivel[5])
}
else if(vitorias >= 101){
    console.log("Nível " + nivel[6])
}

else{
    console.log( "Nível iniciante")
}
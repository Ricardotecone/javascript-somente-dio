// let libararJogo = "depositar"
// let depositar = "dinheiro"
// if(depositar)

// let sacar = "dinheiroNaConta"
// let dinheiro = "dinheiroNaConta" >= 20
// let saldo = 

// let sacar = true
// if(sacar){
//     console.log("Por favor, digite o valor ")
// }

// let saque = true
// let saldo = ""
// if(saque){
//     saldo > 0
// }
// console.log("Saldo em conta:\n" + "Digite o valor: " + saldo)


let valorSaque = 110
let saldoEmConta = 100

if (valorSaque <= 100){
    console.log("Saldo em conta: " + saldoEmConta + "\nDigite o valor: ")
} 
else {
    console.log("saldo insuficiente!")
}



let totalSaque = 230
let totalEmConta = 100

if (totalSaque <= 100){
    console.log("Saldo em conta: " + totalEmConta + "\nDigite o valor: ")
}
else if((totalSaque > 100) && (totalSaque < 120)){
    console.log("saldo em conta: " + totalEmConta + "\nSeu saldo é insuficiente, você entrará no cheque especial" + "\nDigite o valor: ")
}
else if(totalSaque >= 120){
    console.log("saldo insuficiente!")
}
else {
    console.log("procure seu gerente!")
}
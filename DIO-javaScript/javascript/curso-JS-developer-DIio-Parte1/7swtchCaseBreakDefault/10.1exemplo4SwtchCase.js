// let valorSaque = 110
// let saldoEmConta = 100
// resultado = saldoEmConta >= valorSaque

let tiposDeIngresso = ["camarote", "open bar", "pista"]
let entrada = tiposDeIngresso[2]

switch(entrada){
    case tiposDeIngresso[0]:
        console.log("entrada pelo portão 1")
        break
    case tiposDeIngresso[1]:
        console.log("entrada pelo portão 2")
        break
    case tiposDeIngresso[2]:
        console.log("entrada pelo protão 3")
    break
    default:
        console.log("você não tem acesso")
}

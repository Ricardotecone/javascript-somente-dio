let numero = "1"
console.log(numero = 1)

numero = "1"
console.log(numero == 1)

numero = "1"
console.log( numero === 1)

numero = "1"
console.log(numero !== "1")

numero = "1"
console.log(numero !== 1)

// No javascript:
// = é atribuição
// == é para comparar o valor
// === é para o valor e o formato do conteúdo só tem no JS
// !== é diferente

// situação de validação:
let cpfBloqueado = "123.456.789-00"
let cpfUsuario = "123.456.789-01"

let cpfBloqueadoSim = cpfBloqueado === cpfUsuario
console.log("O usuário está bloqueado? " + cpfBloqueadoSim)

let cpfPermitido = "123.456.789-00"
let cpfDoCliente = "123.456.789-01"

let cpfNaoPermitido = cpfPermitido !== cpfDoCliente
console.log("é cpf invalido? " + cpfNaoPermitido)


let cpfPermitido1= "123.456.789-01"
let cpfDoCliente1 = "123.456.789-01"

let cpfNaoPermitido1 = cpfPermitido1 !== cpfDoCliente1
console.log("é cpf invalido? " + cpfNaoPermitido1)


// let cpfPermitido2 = "123.456.789-01"
// let cpfDoCliente2 = "123.456.789-01"

// let cpfNaoPermitido2 = cpfPermitido !== cpfDoCliente2
// console.log("é cpf invalido? " + cpfNaoPermitido2)
let idadeMinima = 18
let idadeUsuario = 17
let idadePermitida = idadeUsuario >= idadeMinima
console.log(idadePermitida)


let notaDeCorte = 7
let notaDoCandidato = 6.35
aprovacao = notaDoCandidato >= notaDeCorte
console.log(aprovacao)


let idadeLimite = 50
let idadeCandidato = 41
let idadeHabilitada = idadeCandidato <= idadeLimite
console.log("Candidato habilitado? " + idadeHabilitada )


let nome = "Rafael"
let nome2 = "Ricardo"
resultado = nome != nome2
if (nome == "Rafael") {
    console.log("Meu nome é Rafael? " + nome)
}
else if (nome2 == "Ricardo") {
    console.log("meu nome é Ricardo " + nome2)
}
else if (nome != nome2) {
    console.log("seu nome não está na lista")
}
else {
    console.log("procurar a diireçaõ")
}
// console.log("mau nome é Rafael? " + nome === nome2)

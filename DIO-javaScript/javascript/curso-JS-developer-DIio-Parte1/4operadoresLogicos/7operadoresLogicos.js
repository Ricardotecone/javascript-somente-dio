// && AND - (e) as duas tem que ser verdadeiras V V
// || OR - (ou) pelo menos uma verdadeira V F - F V
// !  NOT - é a negação

// exemplo1 &&
let idade = 18
let localEscolhido = true
let Viagem = ((idade >= 18) && (localEscolhido === true)) 
console.log(Viagem)

// exemplo2 &&
let notaMinimaDiscursiva = 5
let notaMinimaObjetiva = 7
let Habilitacao = notaMinimaDiscursiva + notaMinimaObjetiva
let aprovacao = ((notaMinimaDiscursiva >= 5) && (notaMinimaObjetiva >= 7) && (Habilitacao ===  notaMinimaDiscursiva + notaMinimaObjetiva))
console.log(aprovacao)

// exemplo3 && - um jogo com as seguintes condições: pra vecer, tem que coletar 100 moedas e 1 item que tem ser estrela
let MinimoDeMoedas = 10
let item = "estrela"
let PraVencer = ((MinimoDeMoedas >= 100) && (item === "estrela"))
console.log(PraVencer)

// exemplo4 OR || - só pode sair se tiver sem chuva ou com guarda chuva
let tempo = "chuva"
let objeto = "guarda chuva"
let podeSair = ((tempo !== "chuva") || (objeto === "guarda chuva"))
console.log(podeSair)

// exemplo5 OR || peixe betta só come ração ou ração prêmio
let alimento = "racao"
let tipo = "premio"
let bettaAlimentacao = ((alimento === "racao") || (tipo === "premio"))
console.log(bettaAlimentacao)

// exemplo6 NOT ! - negação
let dia = "chuvoso"
let hoje = dia !== "chuvoso"
console.log(hoje)

// exemplo7 NOT ! - negação
let caixaDagua = "cheia"
let desligarBomba = caixaDagua === "cheia"
console.log(desligarBomba)

let tanque = "vazio"
let ligarMotor = tanque !== "vazio"
console.log(ligarMotor)

let cisterna = "encheu"
let acionarBoia = cisterna === "encheu"
console.log(!acionarBoia)

//exemplo8 NOT ! - negação
let estacaoDagua = "ligada"
let HoraDefechar = "08:00"
let abastecimento = (estacaoDagua === "ligada") && (HoraDefechar < "08:00")
console.log(abastecimento)
// exemplo 1 com parâmetros

torrar("pão de forma", "Ricardo")
torrar("pão integral", "Rafael")
torrar("pão francês", "Matheus")

function torrar(pao, nome){
    console.log("torrada feita com " + pao)
    console.log("esse é um pedido de " + nome)
}

// exemplo 2 com parâmetros e com parâmetros opcional/fixos( ex nome = "cliente", valor = 10.99)

// o bom é deixar esses valore fixos/opcionais para o final ex. fuction torrar(pao, nome = "cliente")
// ou funtion torrar(pao, nome, valor = 70)

// lembrando que quando atribuinmos um valor dentro da função chamada, na declação dessa função existir
// uma declaração padrão, ira prevalecer o valor dentro da função chamada se caso no chamamento da função
// não exista nenhum valor, ai entra o valor padrão dentro da declaração da função conforme exemplo abaixo:

// exemplo 1 aqui está sem o segundo valor que seria um nome
torrar("pão integral") 

function torrar(pao, nome = "cliente"){
    console.log("torrada feita com " + pao)
    console.log("é um pedido de " + nome)

}


// exemplo 2 aqui está com segundo valor nome atribuido a Ricardo nesse caso prevalece o parâmetro do chmamanto da função
torrar("pão integral", "Ricardo") 

function torrar(pao, nome = "cliente"){
    console.log("torrada feita com " + pao)
    console.log("é um pedido de " + nome)

}


// exemplo 3 se o terceiro parâmtro que seria valor prevalecendo o fixo
torrar("pão integral", "Ricardo") 

function torrar(pao, nome = "cliente", valor = 9.99){
    console.log("torrada feita com " + pao)
    console.log("é um pedido de " + nome)
    console.log("o valor total é " + valor)

}

// colocando um parametro no chamamento, prevalece ele mesmo que na função exista um parâmetro fixo
torrar("pão integral", "Ricardo", 10.99) 

function torrar(pao, nome = "cliente", valor = 9.99){
    console.log("torrada feita com " + pao)
    console.log("é um pedido de " + nome)
    console.log("o valor total é " + valor)

}

// usando o underfined para os valores que faltam de forma intercala sem se preocupar com a posição dos valores
// mas não é uma boa prática ex:
torrar("pão integral", undefined, "Ricardo")

function torrar(pao, valor = 9.99, nome = "cliente"){
    console.log("torrada feita com " + pao)
    console.log("é um pedido de " + nome)
    console.log("o valor total é " + valor)

}
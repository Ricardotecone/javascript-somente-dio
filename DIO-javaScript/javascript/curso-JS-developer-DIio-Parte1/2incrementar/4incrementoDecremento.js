let contador = 1
contador++
contador++
console.log("primeiro contador " + contador)
contador--
contador--
console.log("segundo contador " + contador)

let preco1 = 10
preco1 += 5
preco1 -= 5
console.log("preço 1 é " + preco1)

let preco2 = 10
preco2 *= 2
console.log("preço 2 multiplicação é " + preco2)
preco2 /= 2
console.log("preço 2 divisão é " + preco2)
preco2 %= 2
console.log("preço 2 resto é " + preco2)

let preco3 = 30
preco3 *= 2
preco3 /= 2
preco3 %= 2
console.log("preço 3 com todas operações é " + preco3)

// expressões aritméticas (escopos)
let expressao = 2 * ((5+5)-10)
console.log("O resultado da expressão é " + expressao)
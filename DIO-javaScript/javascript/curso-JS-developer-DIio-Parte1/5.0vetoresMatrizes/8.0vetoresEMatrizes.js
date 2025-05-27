let familia = ["mainha", "painho", "ricardo", "rafael", "matheus", "thais",]

let membroDaFamilia = [
    ["mainha", " março", " 1959", " F", " recife", " pernambuco", " catolica"],
    ["painho"," setembro", " 1955", " M", " timbauba", " pernambuco", " catolica"],
    ["ricardo", " setembro", " 1983", " M", " recife", " pernambuco", " catolica"],
    ["rafael", " julho", " 1985", " M", " recife", " pernambuco", " catolica"],
    [" matheus", " maio", " 2018", " M", " recife", " pernambuco", " catolica"],
    [" thais", " novembro", " 1983", " F", " recife", " pernambuco", " catolica"],
]

console.log("primeiro membro: " + membroDaFamilia[0])
console.log("o segundo membro: " + membroDaFamilia[1][0],", nasceu em " + membroDaFamilia[1][4])
console.log("terceiro membro: " + membroDaFamilia[2])
console.log("o quarto menbro: " + membroDaFamilia[3][0], ", nasceu no mês de " + membroDaFamilia[3][1])
console.log("já" + membroDaFamilia[4][0] + " é o quinto membro", ", nasceu no ano de" + membroDaFamilia[4][2], "em" + membroDaFamilia[4][4], "estado de" + membroDaFamilia[4][5])
console.log("todos os membros são da religião" + membroDaFamilia[0][6])
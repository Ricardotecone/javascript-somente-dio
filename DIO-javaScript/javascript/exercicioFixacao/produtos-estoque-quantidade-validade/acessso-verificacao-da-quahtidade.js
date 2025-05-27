let Produtos = ['feijão', 'arroz', 'macarrão', 'farinaha', 'café', 'leite', 'açucar', 'fuba', 'trigo','ovo',]

let ProdutosQtdValid = [
    ['feijão', 50, 'maio', 2027],
    ['arroz', 80, 'janeiro', 2025],
    ['macarrão', 150, 'maio', 2028],
    ['farinaha',  50, 'dezembro', 2025],
    ['café', 50, 'maio', 2026],
    ['leite', 50, 'agosto', 2025],
    ['açucar', 50, 'junho', 2026],
    ['fuba', 50, 'outubro', 2025],
    ['trigo', 50, 'março', 2026],
    ['ovo', 50, 'julho', 2025],
]

for (let i = 0; i < ProdutosQtdValid.length; i++) {
    const produto = ProdutosQtdValid[i][0];
    const quantidade = ProdutosQtdValid[i][1];

    if (quantidade > 0) {
        console.log(`O produto ${produto} ainda tem ${quantidade} unidades em estoque.`);
    } else {
        console.log(`O produto ${produto} está fora de estoque.`);
    }
}


/*Explicação:

Iterando através de ProdutosQtdValid:

Usamos um forloop para iterar por cada array interno da ProdutosQtdValidmatriz. A variável do loop i varia de 0 até o comprimento de ProdutosQtdValid menos 1.
Acessando informações do produto:

Dentro do loop, para cada array interno no índice i:
ProdutosQtdValid[i][0]acessa o nome do produto (ex.: 'feijão').
ProdutosQtdValid[i][1]acessa a quantidade daquele produto (por exemplo, 50).
Verificando a quantidade em estoque:

A if (quantidade > 0)condição verifica se o quantidadedo produto atual é maior que zero.
Se a quantidade for maior que 0, significa que o produto está em estoque, e o console.log()extrato imprime uma mensagem indicando o nome do produto e sua quantidade disponível.
Se a quantidade não for maior que 0 (ou seja, 0 ou negativa, embora estoque negativo normalmente não seja realista), o elsebloco é executado e uma mensagem indicando que o produto está fora de estoque é impressa.
Saída do código:

O produto feijão ainda tem 50 unidades em estoque.
O produto arroz ainda tem 80 unidades em estoque.
O produto macarrão ainda tem 150 unidades em estoque.
O produto farinaha ainda tem 50 unidades em estoque.
O produto café ainda tem 50 unidades em estoque.
O produto leite ainda tem 50 unidades em estoque.
O produto açucar ainda tem 50 unidades em estoque.
O produto fuba ainda tem 50 unidades em estoque.
O produto trigo ainda tem 50 unidades em estoque.
O produto ovo ainda tem 50 unidades em estoque.
Esta saída mostra que, para cada produto em sua ProdutosQtdValidmatriz, o código verifica corretamente sua quantidade e imprime uma mensagem indicando se ele está em estoque e, em caso afirmativo, quantas unidades estão disponíveis.*/
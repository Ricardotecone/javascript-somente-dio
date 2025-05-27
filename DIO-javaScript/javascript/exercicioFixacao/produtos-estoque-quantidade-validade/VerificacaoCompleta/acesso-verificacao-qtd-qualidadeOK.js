let ProdutosQtdValid = [
    ['feijão', 50, 'maio', 2020],
    ['arroz', 80, 'janeiro', 2025],
    ['macarrão', 150, 'maio', 2028],
    ['farinaha',  50, 'dezembro', 2025],
    ['café', 50, 'maio', 2026],
    ['leite', 50, 'agosto', 2025],
    ['açucar', 50, 'junho', 2026],
    ['fuba', 50, 'outubro', 2025],
    ['trigo', 50, 'março', 2026],
    ['ovo', 50, 'julho', 2025],
];

const mesAtual = 'maio';
const anoAtual = 2025;

for (let i = 0; i < ProdutosQtdValid.length; i++) {
    const produto = ProdutosQtdValid[i][0];
    const quantidade = ProdutosQtdValid[i][1];
    
    const mesDeVencimento = ProdutosQtdValid[i][2];
    const anoDevencimento = ProdutosQtdValid[i][3];

    if (quantidade > 0) {
        console.log(`O produto ${produto} ainda tem ${quantidade} unidades em estoque com vencimanto para ${mesDeVencimento} de ${anoDevencimento}`);
        if ((mesDeVencimento != mesAtual || mesDeVencimento == mesAtual) && anoAtual > anoDevencimento){
            console.log(`O item ${produto} está vencido`);    
        }
    } else {
        console.log(`O produto ${produto} está fora de estoque.`);
    }
}

/*EXPLICAÇÂO
- criei uma matriz com produtos contendo: produto, quatidade, data e ano de validade
- criei dua variáveis: uma contendo o mês atual: (Const mesAtual = 'maio'), e outra 
contendo o ano atual: (const anoAtual = 2025)
- criei um for que acessa toda a matriz do produtos depois duas const: uma para acessar
toda coluna de produtos (const produto = ProdutosQtdValid[i][0]) , outra para acessar 
toda coluna da quantidade dos produtos (const quantidade = ProdutosQtdValid[i][1])
-criei o if encadeado o primeiro pra vericar a quantidade de produtos em estoque: (if (quantidade > 0))
o segundo para verificar a validade dos produto:
(if ((mesDeVencimento != mesAtual || mesDeVencimento == mesAtual) && anoAtual > anoDevencimento))
e o else caso o produto esteja fora de estoque */
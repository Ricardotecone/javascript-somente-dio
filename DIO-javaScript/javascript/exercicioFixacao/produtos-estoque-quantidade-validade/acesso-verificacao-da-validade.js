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
];

const mesesEmNumero = {
    'janeiro': 0,
    'fevereiro': 1,
    'março': 2,
    'abril': 3,
    'maio': 4,
    'junho': 5,
    'julho': 6,
    'agosto': 7,
    'setembro': 8,
    'outubro': 9,
    'novembro': 10,
    'dezembro': 11
};

const hoje = new Date();
const anoAtual = hoje.getFullYear();
const mesAtual = hoje.getMonth(); // 0 = Janeiro, 1 = Fevereiro, ...

for (let i = 0; i < ProdutosQtdValid.length; i++) {
    const produto = ProdutosQtdValid[i][0];
    const mesValidadeStr = ProdutosQtdValid[i][2].toLowerCase();
    const anoValidade = ProdutosQtdValid[i][3];

    const mesValidadeNum = mesesEmNumero[mesValidadeStr];

    if (anoValidade < anoAtual || (anoValidade === anoAtual && mesValidadeNum < mesAtual)) {
        console.log(`O produto ${produto} está vencido desde ${mesValidadeStr} de ${anoValidade}.`);
    } else if (anoValidade === anoAtual && mesValidadeNum === mesAtual) {
        console.log(`O produto ${produto} vence neste mês de ${mesValidadeStr} de ${anoValidade}.`);
    } else if (anoValidade === anoAtual && mesValidadeNum === mesAtual + 1) {
        console.log(`O produto ${produto} vence no próximo mês (${mesValidadeStr} de ${anoValidade}).`);
    } else if (anoValidade > anoAtual || (anoValidade === anoAtual && mesValidadeNum > mesAtual)) {
        console.log(`O produto ${produto} ainda está dentro do prazo de validade (vence em ${mesValidadeStr} de ${anoValidade}).`);
    }
}



/* Explicação:

mesesEmNumeroObjeto:

Criamos um objeto mesesEmNumeropara mapear os nomes dos meses (em letras minúsculas) para sua representação numérica correspondente (0 para janeiro, 1 para fevereiro, etc.). Isso facilita a comparação de meses.
Obtendo a data atual:

const hoje = new Date();cria um novo Dateobjeto que representa a data e hora atuais.
const anoAtual = hoje.getFullYear();extrai o ano atual.
const mesAtual = hoje.getMonth();extrai o mês atual (como um índice de base zero, então janeiro é 0, fevereiro é 1 e assim por diante).
Iterando através de ProdutosQtdValid:

O forloop itera pelas informações de cada produto na ProdutosQtdValidmatriz.
Extraindo informações de expiração:

Dentro do loop:
produtoobtém o nome do produto.
mesValidadeStrobtém o mês de expiração como uma string e o converte para letras minúsculas .toLowerCase()para garantir a correspondência sem distinção entre maiúsculas e minúsculas com o mesesEmNumeroobjeto.
anoValidadeobtém o ano de expiração.
Convertendo mês em número:

const mesValidadeNum = mesesEmNumero[mesValidadeStr];usa o mesValidadeStrpara procurar o valor numérico correspondente do mês no mesesEmNumeroobjeto.
Comparando a data de validade com a data atual:

if (anoValidade < anoAtual || (anoValidade === anoAtual && mesValidadeNum < mesAtual)): Esta condição verifica se o ano de validade é anterior ao ano atual OU se o ano de validade é igual ao ano atual E se o mês de validade é anterior ao mês atual. Se qualquer uma dessas condições for verdadeira, o produto está vencido.
else if (anoValidade === anoAtual && mesValidadeNum === mesAtual): Esta condição verifica se o ano e o mês de validade são iguais ao ano e mês atuais, indicando que o produto expira neste mês.
else if (anoValidade === anoAtual && mesValidadeNum === mesAtual + 1): Esta condição verifica se o ano de expiração é o mesmo que o ano atual e o mês de expiração é o mês seguinte.
else if (anoValidade > anoAtual || (anoValidade === anoAtual && mesValidadeNum > mesAtual)): Esta condição verifica se o ano de validade é posterior ao ano atual OU se o ano de validade é o mesmo que o ano atual E se o mês de validade é posterior ao mês atual. Se qualquer uma dessas condições for verdadeira, o produto ainda está dentro do prazo de validade.
Imprimindo os Resultados:

Com base na comparação, uma console.log()declaração imprime uma mensagem indicando o nome do produto e seu status de expiração.
Saída do código (com base na data atual de 9 de maio de 2025):

O produto feijão ainda está dentro do prazo de validade (vence em maio de 2027).
O produto arroz está vencido desde janeiro de 2025.
O produto macarrão ainda está dentro do prazo de validade (vence em maio de 2028).
O produto farinaha ainda está dentro do prazo de validade (vence em dezembro de 2025).
O produto café ainda está dentro do prazo de validade (vence em maio de 2026).
O produto leite vence neste mês de agosto de 2025.
O produto açucar ainda está dentro do prazo de validade (vence em junho de 2026).
O produto fuba ainda está dentro do prazo de validade (vence em outubro de 2025).
O produto trigo ainda está dentro do prazo de validade (vence em março de 2026).
O produto ovo vence neste mês de julho de 2025.
Observação importante: este código depende da precisão dos nomes dos meses na ProdutosQtdValidmatriz. Certifique-se de que estejam escritos corretamente. */
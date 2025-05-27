//let debito = preco*(10/100)
// let aVista = preco * (15/100)
// let duasVezes = preco
// let acimaDeDuasVezes = preco * 10/100

// let desconto1 = 100*(10/100);
// let desconto2 = 100 * (15/100)
// let juros = 100 * 10/100

// let valor = 100;
// let formaDePagar = "acimaDeDuasVezes";
// let debito = valor - valor*10/100;
// let aVista =  valor - valor*15/100;
// let duasVezes = valor;
// let acimaDeDuasVezes = valor + valor*10/100;

// function pagar(valor, formaDePagamento){
//     formaDePagamento = ["debito", "aVista", "parceladoEnDuasVezes", "parceladoMaisDeDuasVezes"]
//     debito = valor - valor * 10/100
//     return debito;    
// }
// const formaDePagamento = pagar(100, "debito")
// console.log(formaDePagamento);

// let valor = 100;
// let formaDePagar = "acimaDeDuasVezes";
// let debito = valor - valor*10/100;
// let aVista =  valor - valor*15/100;
// let duasVezes = valor;
// let acimaDeDuasVezes = valor + valor*10/100;

// function pagarAVista(){
//     valorComDesconto = valor - valor * 10 / 100
// }

function pagar(valor, formaDePagamento){
    debito = valor - valor*10/100;
    aVista = valor - valor*15/100;
    parceladoDuasVezes = valor;
    parceladoMaisDeDuas = valor + valor*10/100;
    formaDePagamento = debito, aVista, parceladoDuasVezes, parceladoMaisDeDuas;
    console.log("Preço do produto: R$ " + valor);
    console.log("Preço com desconto no débito: R$ " + debito);
    console.log("Preço com desconto a vista(dinheiro/pix): R$ " + aVista);
    console.log("Preço sem juros em até 2 vezes: R$ " + parceladoDuasVezes);
    console.log("Preço com juros parcelado em mais de 2 vezes: R$ " + parceladoMaisDeDuas);   
}
pagar(160);



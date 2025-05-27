let valor = 100;
let formaDePagar = "acimaDeDuasVezes";
let debito = valor - valor*10/100;
let aVista =  valor - valor*15/100;
let duasVezes = valor;
let acimaDeDuasVezes = valor + valor*10/100;

if(formaDePagar === "debito"){
    console.log("Valor com desconto, pagando no débito: " + "R$ " + debito + " reais" + ", desconto de 10% em cima de: " + "R$" + valor + " reais");   
}
else if(formaDePagar === "aVista"){
    console.log("Valor com desconto, pagando a vista(dinheiro/pix): " + "R$ " + aVista + " reais" +  ", desconto de 15% em cima de: " + "R$" + valor + " reais");   aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
}
else if(formaDePagar === "duasVezes"){
    console.log("Valor sem juros parcelando em 2 vezes: " + "R$ " + duasVezes + " reais");
}
// else if(formaDePagar === "acimaDeDuasVezes"){
//     console.log("Valor com juros de 10% parcelando em mais de 2 vezes: " + "R$ " + acimaDeDuasVezes + " reais" + ", valor calculado em cima de: " + "R$" + valor + " reais"); 
// }
else{
    console.log("Valor com juros de 10% parcelando em mais de 2 vezes: " + "R$ " + acimaDeDuasVezes + " reais" + ", valor calculado em cima de: " + "R$" + valor + " reais"); 
}

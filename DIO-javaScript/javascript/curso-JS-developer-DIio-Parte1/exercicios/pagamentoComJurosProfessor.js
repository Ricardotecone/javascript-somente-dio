function pagar(valor, formaDePagamento) {
    let precoFinal;
  
    if (formaDePagamento === 'debito') {
      precoFinal = valor - valor * 0.10; // 10% de desconto
      console.log("Preço do produto: R$ " + valor);
      console.log("Preço com desconto no débito: R$ " + precoFinal);
    } else if (formaDePagamento === 'avista' || formaDePagamento === 'dinheiro' || formaDePagamento === 'pix') {
      precoFinal = valor - valor * 0.15; // 15% de desconto
      console.log("Preço do produto: R$ " + valor);
      console.log("Preço com desconto à vista (dinheiro/pix): R$ " + precoFinal);
    } else if (formaDePagamento === 'parceladoDuasVezes') {
      precoFinal = valor;
      console.log("Preço do produto: R$ " + valor);
      console.log("Preço sem juros em até 2 vezes: R$ " + precoFinal);
    } else if (formaDePagamento === 'parceladoMaisDeDuas') {
      precoFinal = valor + valor * 0.10; // 10% de juros
      console.log("Preço do produto: R$ " + valor);
      console.log("Preço com juros parcelado em mais de 2 vezes: R$ " + precoFinal);
    } else {
      console.log("Forma de pagamento inválida.");
    }
  }
  
  pagar(100, 'debito');
//   pagar(100, 'avista');
//   pagar(100, 'parceladoDuasVezes');
//   pagar(100, 'parceladoMaisDeDuas');
//   pagar(100, 'credito'); // Exemplo de forma de pagamento inválida
//EXEMPLO 1:
// class pessoa {
//     idade;
//     nome;
//     profissao;

//     constructor(){
//         this.nome = 'teste';
//         this.idade = 20;
//         this.profissao = 'funcionario';
//     }
    
//     descrever() {
//         console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`);    
//     }
// }
// const Ricardo = new pessoa();

// const Maria = new pessoa();

// const Rafael = new pessoa();

// const Thais = new pessoa();

// Ricardo.descrever();
// Maria.descrever();
// Thais.descrever();
// Rafael.descrever();



//EXEMPLO 2 COM PARAMETROS NO CONSTRUCTOR:
// class pessoa {
//     nome;
//     idade;
//     profissao;

//     constructor(nome, idade, profissao){
//         this.nome = nome;
//         this.idade = idade;
//         this.profissao = profissao;
//     }
    
//     descrever() {
//         console.log(`meu nome é ${this.nome}, minha idade é ${this.idade} e minha profissão é ${this.profissao}`);    
//     }
// }
// const Ricardo = new pessoa('Ricardo', 41, 'funcionário público');

// const Maria = new pessoa('Maria das V. de Melo Onorato', 66, 'aposdntada');

// const Rafael = new pessoa('Rafael Onorato', 39, 'iniciativa privada');

// const Thais = new pessoa('Thais Onorato', 41, 'funcionária publica');

// Ricardo.descrever();
// Maria.descrever();
// Thais.descrever();
// Rafael.descrever();




//EXEMPLO 3:
//acrecentando dados no constructor
class pessoa {
    nome;
    idade;
    profissao;

    constructor(nome, idade, profissao){
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
        this.nascimento = 2025 - idade;//acrecentou-se data de nascimento aqui diretamente que não estavam antes, são deduções. eu posso acrescenter coisas que não estavam aqui.
    }
    
    descrever() {
        console.log(`meu nome é ${this.nome}, minha idade é ${this.idade} e minha profissão é ${this.profissao}`);    
    }
}
const Ricardo = new pessoa('Ricardo', 42, 'funcionário público');

const Maria = new pessoa('Maria das V. de Melo Onorato', 66, 'aposdntada');

const Rafael = new pessoa('Rafael Onorato', 40, 'iniciativa privada');

const Thais = new pessoa('Thais Onorato', 42, 'funcionária publica');

console.log(Ricardo);//
console.log(Maria);  // AQUI DIFERENTE DA CHAMADA DO CÓDIGO ANTERIOR, USA-SE O CONSOLE.LOG()
console.log(Rafael); // PARA INCREMENTAR A NOVA INFORMAÇÃO/DADO ACRESCENTADO NO CONSTRUCTOR.
console.log(Thais);  //


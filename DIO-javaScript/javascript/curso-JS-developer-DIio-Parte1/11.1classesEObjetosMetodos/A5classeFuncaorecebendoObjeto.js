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

function compararPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);    
    }

    else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);    
    }
    else{
        console.log(`${p1.nome} e ${p1.nome} tem a mesma idade`);
    }
}

const Ricardo = new pessoa('Ricardo', 42, 'funcionário público');
const Maria = new pessoa('Maria das V. de Melo Onorato', 66, 'aposdntada');

compararPessoas(Ricardo, Maria);

                                            
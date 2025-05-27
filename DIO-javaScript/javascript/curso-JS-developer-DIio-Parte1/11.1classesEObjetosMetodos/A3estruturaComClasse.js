//CLASSE É A DEFINIÇÃO DO QUE DEVE SER O OBJETO E A INSTACIA É UMA OCORRENCIO DO OBJETO

//CLASSE(INICIO)
class pessoa {
    idade;
    nome;
    profissao;
    
    descrever() {
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`);
        
    }
}//(FINAL) DA CLASSE

//INICIO DAS INSTANCIAS DETERMINADAS PELA CLASSE DE CIMA:
//INSTÂCIA 1:
const Ricardo = new pessoa();
Ricardo.nome = 'Ricardo Onorato';
Ricardo.idade = 41;
Ricardo.profissao = 'funcionário publico';

//INSTÂNCIA 2:
const Maria = new pessoa();
Maria.nome = 'Maria das V. de Melo Onorato';
Maria.idade = 66;
Maria.profissao = 'aposdntada';

//INSTÂNCIA 3:
const Rafael = new pessoa();
Rafael.nome = 'Rafael Onorato';
Rafael.idade = 39;
Rafael.profissao = 'iniciativa privada';

//INSTÂNCIA 4:
const Thais = new pessoa();
Thais.nome = 'Thais Onorato';
Thais.idade = 41;
Thais.profissao = 'funcionária publico';

//chamamento:
Ricardo.descrever();
Maria.descrever();
Thais.descrever();
Rafael.descrever();

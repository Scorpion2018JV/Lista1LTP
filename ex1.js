class Pessoa {
    constructor(nome, idade, email){
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }
    
    apresentar() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
    
    fazerAniversario() {
        this.idade +=1
    }
}

pessoa1 = new Pessoa('João', 16, 'aaaaaaaaaa@bbbb.com')

console.log(pessoa1)
pessoa1.apresentar()
pessoa1.fazerAniversario()
pessoa1.apresentar()
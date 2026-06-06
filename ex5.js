class Usuario {
    #senha;

    constructor (nome,senha) {
        this.nome = nome;
        this.#senha = senha
    }

    autenticar (senha) {
        return this.#senha == senha
    }

    alterarSenha(senhaAtual, novaSenha) {
        if (senhaAtual == this.#senha){
            this.#senha = novaSenha
            console.log('senha alterada com sucesso')
        }
            
        else
            console.log("Sua senha atual está incorreta")
    }
}

const usuario1 = new Usuario('Pedro', 123)

console.log(usuario1.autenticar(123))
console.log(usuario1.autenticar(1234))
usuario1.alterarSenha(123, 1234)
usuario1.alterarSenha(1235, 1237)
console.log(usuario1.autenticar(1234))
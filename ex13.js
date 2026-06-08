class Endereco {
    constructor(rua, cidade, cep) {
        this.rua = rua;
        this.cidade = cidade;
        this.cep = cep;
    }
}

class Contato {
    constructor(telefone, email) {
        this.telefone = telefone;
        this.email = email;
    }
}

class PerfilUsuario {
    constructor(nome, endereco, contato) {
        this.nome = nome;
        this.endereco = endereco;
        this.contato = contato;
    }

    exibirPerfil() {
        console.log(
            `Dados do usuário:
            Nome: ${this.nome}

            Endereço:
            Rua: ${this.endereco.rua}
            Cidade: ${this.endereco.cidade}
            CEP: ${this.endereco.cep}

            Contato:
            Telefone: ${this.contato.telefone}
            Email: ${this.contato.email}`
        );
    }
}

let perfil1 = new PerfilUsuario(
    "Joao",
    new Endereco("Rua Um", "Batayporã", "4598-000"),
    new Contato("(12) 94371-0129", "JJJ@gmail.com")
);

perfil1.exibirPerfil();
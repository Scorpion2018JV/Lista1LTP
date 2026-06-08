class Pagamento {
    constructor(valor) {
        this.valor = valor;
    }

    processar() {}
}

class CartaoDeCredito extends Pagamento {
    constructor(valor, parcelas) {
        super(valor);
        this.parcelas = parcelas;
    }

    processar() {
        return `Pagamento de R$${this.valor} no cartão em ${this.parcelas} parcelas.`;
    }
}

class Pix extends Pagamento {
    constructor(valor, chavePix) {
        super(valor);
        this.chavePix = chavePix;
    }

    processar() {
        return `Pagamento de R$${this.valor} via Pix para a chave ${this.chavePix}.`;
    }
}

class Boleto extends Pagamento {
    constructor(valor, codigoDeBarras) {
        super(valor);
        this.codigoDeBarras = codigoDeBarras;
    }

    processar() {
        return `Pagamento de R$${this.valor} via boleto. Código: ${this.codigoDeBarras}.`;
    }
}

function processarTodos(pagamentos) {
    for (let i = 0; i < pagamentos.length; i++) {
        console.log(pagamentos[i].processar());
    }
}

let pagamentos = [
    new CartaoDeCredito(1000, 10),
    new Pix(250, "pedro@gmail.com"),
    new Boleto(500, "12345678901234567890")
];

processarTodos(pagamentos);
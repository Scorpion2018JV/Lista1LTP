class ContaBancaria {
    constructor(titular, saldo, numeroConta) {
        this.titular = titular;
        this.saldo = saldo;
        this.numeroConta = numeroConta;
    }
    
    depositar(valor) {
        return this.saldo += valor
    }

    sacar(valor) {
        if (this.saldo >= valor)
            this.saldo -= valor
        else
            console.log('Seu saldo é insuficiente, tente novamente.')
    }

    exibirSaldo() {
        console.log(`Seu saldo é R$ ${this.saldo}`)
    }
}

const conta1 = new ContaBancaria('João', 100, 1234)

conta1.exibirSaldo()
conta1.sacar(20)
conta1.depositar(70)
conta1.exibirSaldo()
conta1.sacar(200)
conta1.exibirSaldo()
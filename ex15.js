class ContaBancaria {
    #saldo;

    constructor(saldo) {
        this.#saldo = saldo;
    }

    get saldo() {
        return this.#saldo;
    }

    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
        }

        return this.#saldo;
    }

    sacar(valor) {
        if (valor > 0 && valor <= this.#saldo) {
            this.#saldo -= valor;
        }

        return this.#saldo;
    }

    static converterParaDolarCanadense(valorReais) {
        return valorReais / 3.72;
    }
}

const conta1 = new ContaBancaria(1000);

console.log(conta1.saldo);

console.log(conta1.depositar(500));

console.log(conta1.sacar(300));

console.log(conta1.sacar(2000));

console.log(conta1.saldo);

console.log(ContaBancaria.converterParaDolarCanadense(410));
class Veiculo {
    constructor (marca, modelo, velocidade) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidade = velocidade;
    }

    acelerar (vel) {
        this.velocidade += vel

        return this.velocidade
    }

    frear (valor) {
        this.velocidade -= valor

        return this.velocidade
    }
}

class Carro extends Veiculo {
    constructor (marca, modelo, velocidade, combustivel, litrosNoTanque) {
        super(marca, modelo, velocidade)
        this.combustivel = combustivel;
        this.litrosNoTanque = litrosNoTanque;
    }

    acelerar (consumo, vel) {
        this.litrosNoTanque -= consumo;
        return super.acelerar(vel)
    }
}

class CarroEletrico extends Veiculo {
    constructor (marca, modelo, velocidade, bateriaKwh) {
        super(marca, modelo, velocidade)
        this.bateriaKwh = bateriaKwh
    }

    acelerar (consumoBateria, vel) {
        this.bateriaKwh -= consumoBateria
        return super.acelerar(vel)
    }
}

const v1 = new Veiculo ('Ferrari', 'laFerrari', 0)
const c1 = new Carro ('Lamborghini', 'Aventador', 0, 'gasolina', 40)
const ce1 = new CarroEletrico ('Fiat', 'Uno', 0, 10000)

console.log(v1.acelerar(300))
console.log(v1.frear(260))
console.log(c1.acelerar(2, 330))
console.log(c1.frear(220))
console.log(ce1.acelerar(100, 400))
console.log(ce1.frear(40))
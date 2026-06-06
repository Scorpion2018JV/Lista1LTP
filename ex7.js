class Animal {
    constructor (nome, som) {
        this.nome = nome;
        this.som = som; 
    }

    emitirSom () {
        console.log(this.som)
    }
}

class Cachorro extends Animal {
    constructor (nome, raca) {
        super(nome, 'latido');
        this.raca = raca;
    }
    emitirSom () {
        console.log(`${this.nome} está emitindo o som ${this.som}`)
    }
}

const a1 = new Animal('tiranossaurorex', 'rugido');
const c1 = new Cachorro('mel','pinscher');
a1.emitirSom()
c1.emitirSom()
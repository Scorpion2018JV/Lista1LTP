class Temperatura {
    #celsius;

    constructor(temp) {
        this.#celsius = temp;
    }

    get cels() {
        return this.#celsius;
    }

    set cels(valor) {
        this.#celsius = valor;
    }

    get fahrenheit() {
        return this.#celsius * 1.8 + 32
    }

    set fahrenheit(valor) {
        this.#celsius = (valor - 32) / 1.8
    }

    get kelvin() {
        return this.#celsius + 273.15
    }

    set kelvin(valor) {
        this.#celsius = valor - 273.15
    }
}

const temp1 = new Temperatura(15)
console.log(temp1.cels)
temp1.cels = 10
console.log(temp1.cels)
console.log(temp1.fahrenheit)
console.log(temp1.kelvin)
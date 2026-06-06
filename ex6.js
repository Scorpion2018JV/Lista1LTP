class Pilha {
    #itens;

    constructor () {
        this.#itens = []
    }

    empilhar (item) {
        this.#itens.push(item)
    }

    desempilhar () {
        this.#itens.pop()
    }

    estaVazia () {
        return this.#itens.length == 0
    }

    topo () {
        return this.#itens[this.#itens.length - 1]
    }

    get tamanho () {
        return this.#itens.length
    }
}

const p1 = new Pilha ()

console.log(p1.estaVazia())
p1.empilhar("arroz")
console.log(p1.topo())
console.log(p1.estaVazia())
p1.desempilhar()
p1.empilhar("arroz")
p1.empilhar("carne")
console.log(p1.tamanho)
console.log(p1.topo())
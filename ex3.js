class Produto {
    static totalProdutos = 0;
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
        Produto.totalProdutos++;
    }

    calcularValorEstoque() {
        console.log(`O valor do estoque é ${this.preco * this.quantidade}`)
    }
}
console.log(Produto.totalProdutos)
const produto1 = new Produto('Óleo', 15, 50)
console.log(Produto.totalProdutos)
const produto2 = new Produto('água', 20, 70)
console.log(Produto.totalProdutos)
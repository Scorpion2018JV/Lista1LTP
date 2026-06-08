class Aluno {
    #nota;

    constructor(nota) {
        this.#nota = nota;
    }

    get nota() {
        return this.#nota;
    }

    set nota(valor) {
        if (valor >= 0 && valor <= 10) {
            this.#nota = valor;
        }
    }

    static calcularMedia(nota1, nota2) {
        return (nota1 + nota2) / 2;
    }
}

const aluno1 = new Aluno(8);

console.log(aluno1.nota);

aluno1.nota = 9;
console.log(aluno1.nota);

aluno1.nota = 15;
console.log(aluno1.nota);

console.log(Aluno.calcularMedia(8, 6));
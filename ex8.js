class Funcionario {
    constructor (nome, salario, cargo) {
        this.nome = nome;
        this.salario = salario;
        this.cargo = cargo;
    }
}

class Gerente extends Funcionario {
    constructor (nome, salario, bonus) {
        super(nome, salario, 'Gerente');
        this.equipe = [];
        this.bonus = bonus;
    }

    adicionarMembro (func) {
        this.equipe.push(func)
    }

    calcularSalarioTotal() {
        return this.salario + this.bonus
    }
}

const f1 = new Funcionario('Junim', "1 pastel", "padeiro")
const g1 = new Gerente('Pedrão', 20, 10)

console.log (f1)
console.log (g1.calcularSalarioTotal())
g1.adicionarMembro('cleberson')
console.log(g1.equipe)
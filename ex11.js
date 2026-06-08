class Midia {
    toString() {}
}

class Livro extends Midia {
    constructor(titulo, autor) {
        super();
        this.titulo = titulo;
        this.autor = autor;
    }

    toString() {
        return `Livro: ${this.titulo} - Autor: ${this.autor}`;
    }
}

class Filme extends Midia {
    constructor(titulo, diretor) {
        super();
        this.titulo = titulo;
        this.diretor = diretor;
    }

    toString() {
        return `Filme: ${this.titulo} - Diretor: ${this.diretor}`;
    }
}

class Musica extends Midia {
    constructor(titulo, artista) {
        super();
        this.titulo = titulo;
        this.artista = artista;
    }

    toString() {
        return `Música: ${this.titulo} - Artista: ${this.artista}`;
    }
}

let midias = [
    new Livro("Dom Casmurro", "Machado de Assis"),
    new Filme("Interestelar", "Christopher Nolan"),
    new Musica("Bohemian Rhapsody", "Queen")
];

for (let i = 0; i < midias.length; i++) {
    console.log(midias[i].toString());
}
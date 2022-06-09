/*class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`meu nome é ${this.nome}`)
    }
}*/

function Pessoa (nome) {
    this.nome = nome 
    this.falar = () => {
        console.log(`meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Hugo')
p1.falar()   
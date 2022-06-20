//notação literal
const obj1 = {}
console.log(obj1)

//Object em JS
const obj2 = new Object
console.log(obj2)

//Funções construtoras
function Produto (nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto ('Caneta', 7.99, 0.15)
const p2 = new Produto ('notebook', 2343, 0.50)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Função factory

function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('joao', 7980, 4)
const f2 = criarFuncionario('maria', 11400, 1)

//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// FromJSON

const FromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(FromJSON.info)
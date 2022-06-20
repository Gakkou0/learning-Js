const produto = new Object
produto.nome =  'Cadeira'
produto['marca do produto'] = 'Avs'
produto.preco = 202

console.log(produto)
delete produto.nome
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 321321,
    proprietario: {
        nome: 'hugo',
        idade: 41,
        endereco: { 
            logradouro: 'Rua as',
            numero: 123
        }
    },
    condutores: [{
        nome: 'junior',
        idade: 23
    },{
        nome: 'Joana',
        idade: 43
    }], 
    calcularValorSeguro: function () {

    }
}
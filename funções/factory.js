const prod1 = {
    nome: 'sabão',
    preco: 43
}

//factory simples
function criarPesso() {
    return{
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

function criarProduto(nome, preco){
    return {
        nome, 
        preco, 
        desconto: preco - preco * 0.1
    }
}

console.log(criarProduto("iphone", 2000))
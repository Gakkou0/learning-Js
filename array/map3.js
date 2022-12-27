Array.prototype.map2 = function(callback){
    const array = []
    
    for(let i = 0; i < this.length; i ++){
        array.push(callback(this[i], i, this))
    }

    return array
}

const carrinho = [
    '{"nome": "Borracha", "preco": 42}',
    '{"nome": "Borracha", "preco": 23}',
    '{"nome": "Borracha", "preco": 53}',
    '{"nome": "Borracha", "preco": 54}',
]

const toObject = e => JSON.parse(e)
const getPrice = e => e.preco

resultado = carrinho.map2(toObject).map(getPrice)
console.log(resultado)
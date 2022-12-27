const carrinho = [
    '{"nome": "Borracha", "preco": 42}',
    '{"nome": "Borracha", "preco": 23}',
    '{"nome": "Borracha", "preco": 53}',
    '{"nome": "Borracha", "preco": 54}',
]

const toObject = e => JSON.parse(e)
const getPrice = e => e.preco

resultado = carrinho.map(toObject).map(getPrice)
console.log(resultado)
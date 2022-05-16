let valor //não inicializada
console.log(valor)

valor = null //ausência de valor
console.log(valor)

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 2.50
console.log(produto.preco)

produto.preco = null 
console.log(!!produto.preco)
console.log(produto)
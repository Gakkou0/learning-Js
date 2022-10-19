const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção'
})

const produto2 = Object.create(produto)

console.log(Object.isExtensible(produto))
console.log(Object.isExtensible(produto2))
delete produto.tag

console.log(produto)

//Object.seal

const pessoa = {nome: 'juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'silva'
delete pessoa.nome
pessoa.idade = 23
console.log(pessoa)
// função sem retorno

function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma (2, 3)
imprimirSoma (2)
imprimirSoma (2, 3, 4, 5, 6)
imprimirSoma ()

// função sem retorno

function soma(a, b = 0) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))

//Armazendando uma função em uma variavel
const imprimirSom = function (a, b){
    console.log(a + b)
}

imprimirSom(2, 3)

//Armazenando uma função arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

//retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))
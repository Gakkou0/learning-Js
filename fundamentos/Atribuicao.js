const a = 7
let b = 3

b += a
b -= 4
b *= 2
b /= 2

b %= 2

//Destructuring 

const pessoa = {
    nome: 'ana', 
    idade: 5, 
    endereco: {
        logradouro: 'Rua A',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(nome, idade)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

//Destructuring Array

const [d] = [10]
console.log(d)

const [n1, , n3, ,n5, n6 = 0] = [10, 7, 9, 8]

//Destructuring funções

function rand({ min = 0, max = 1000 }){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand({min: 0, max: 100}))

//Destructuring função Array

function rand1([min = 0, max = 1000]){
    if (min>max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(rand1([90, 12]))
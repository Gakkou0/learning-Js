//par nome/valor
const saudacao = 'Opa' //contexto léxico 1

function exec() {
    const saudacao = 'fala' //conteto léxico 2
    return saudacao
}

const Cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua a',
        numero: 213
    }
}

console.log(saudacao)
console.log(exec())
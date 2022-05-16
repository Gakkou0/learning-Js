const nome = "joão"
const cancatenacao = "Olá " + nome +"!"
const template =`
    Olá
    ${nome}!`
console.log(cancatenacao, template)

const up = s => s.toUpperCase()
console.log(`bom dia ${up(nome)}!`)
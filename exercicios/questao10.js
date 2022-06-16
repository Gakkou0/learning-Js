/* Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false. */ 

function multiTres (num) {
    if (Number.isInteger(num)){
        const resultado = num / 3
        if (Number.isInteger(resultado)){
            return true
        }else {
            return false
        }
    } else {
        return false
    } 
}

console.log(multiTres(3))
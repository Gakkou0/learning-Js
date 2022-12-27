const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(function(e) {
    if (e%2 != 0){
        return e * 2
    } else {
        return e
    }    
})
console.log(resultado, nums)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `RS ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Segura o pai'.reverse())

Array.prototype.first = function () {
    return this[0]
}

console.log([1, 3, 4, 5].first())

//faz isso aqui não
String.prototype.toString = function () {
    return 'Lascou meu irmão'
}
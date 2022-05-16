const valores = [5.6, 6.3, 8.5, 9.6]
console.log(valores[3])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id:3}, false, null, "teste")
console.log(valores)

console.log(valores.pop()) //retira do array o ultimo valor
console.log(valores)

delete valores[0]

console.log(typeof valores)
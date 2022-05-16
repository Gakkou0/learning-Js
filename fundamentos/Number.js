const peso1 = 1.0
const peso2 = Number(2.0)

console.log(peso1)
console.log(Number.isInteger(peso2))

const avaliocao1 = 9.342
const avaliocao2 = 4.754

const total = avaliocao1 * peso1 * avaliocao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString(2))
console.log(typeof media)

console.log(7 / 0)
console.log("10" / 2)
const pilotos = ['piloto1', 'piloto2', 'piloto3', 'piloto4']
pilotos.pop()

console.log(pilotos)

pilotos.push('piloto5')
console.log(pilotos)

pilotos.shift()
console.log(pilotos)

pilotos.unshift('piloto0')
console.log(pilotos)

pilotos.splice(2, 0, 'piloto8')
console.log(pilotos)

pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos = pilotos.slice(2)
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
const notas = [7.7, 6.5, 5.3, 8.9, 3.6]

//sem callback
let notasBaixas = []
for (let i in notas){
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//com callback
const notasBaixas2 = notas.filter((nota) => nota < 7)
/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

const jurosSimples = (capitaInicial, taxaJuros, tempoApli) => {
    taxaJuros /= 100
    valorAplica = capitaInicial + (capitaInicial * taxaJuros) * tempoApli
    return valorAplica
}

console.log(jurosSimples(1000, 10, 1))

const jurosComposto = (capitaInicial, taxaJuros, tempoApli) => {
    taxaJuros /= 100
    for(let i = 0; i < tempoApli; i ++){
        if (i == 0){ 
        valorAplica = capitaInicial + (capitaInicial * taxaJuros)
        } else {
        valorAplica = valorAplica + (valorAplica * taxaJuros)
    }
    }
    return valorAplica
}

console.log(jurosComposto(1000, 10, 3))
const soma = function (x, y){
    return x + y 
}

const imprimirResultado = (a, b, operacao = soma) => console.log(operacao(a, b))

imprimirResultado(3, 4)

const pessoa = {
    falar: function(){
        console.log("opa")
    }
}

pessoa.falar()
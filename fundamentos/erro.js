function imprimirNome(obj) {
   try{
        console.log(obj.name.toUpperCase() + '!!!')
   } catch (e) {
        tratarErroELancar(e)
   } finally {
        console.log('final')
   }
}

const obj = { nome: 'Roberto'}
imprimirNome(obj)
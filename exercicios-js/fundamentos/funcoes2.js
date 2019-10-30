//Armazenando uma função em uma variavel

const ImprimiSoma = function (a,b){
    return a + b
}

console.log('Resultado do ImrpimeSOma '+ ImprimiSoma(2,3))

//Armazenando uma função arrow (=>) em uma variavel
const soma = (a,b) => {
    return a + b
}
console.log('Resultado da Soma ' + soma(12,3))

// retorno implicito , mais curto
const subtracao = (a, b) => a - b
console.log('Resultado da subtracao é '+ subtracao(10,8))
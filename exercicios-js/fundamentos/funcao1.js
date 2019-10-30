// função sem retorno
function imprimirSoma(a,b){
    console.log('Resultado ' + (a+b))
}

imprimirSoma(2,10)
imprimirSoma(2)
imprimirSoma(0,10,10,4,5)
imprimirSoma()

//funcao com retorno
function soma(a, b = 0){
    return a + b
}

console.log('Resultado da soma de ' + soma(1500,200))
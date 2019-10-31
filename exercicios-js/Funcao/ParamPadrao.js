// estrategia 1 para gerar valor padrao
function soma(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma())
console.log(soma(2,2,2))
console.log(soma(0,0,0)) // vai dar um BUG na funcao, pois é vai retornar False e pegar o valor padrao..

// estrategia 2, 3, 4 para gerar valor padrao
function soma2(a, b, c){
    a = a ==! undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c // mais recomendada
    return a + b + c
}
console.log(soma2())
console.log(soma2(2,2,2))
console.log(soma2(0,0,0))

// valor padrao EC2015 - usar sempre esse
function soma3(a=1 , b=1, c=1){
     return a + b + c
}
console.log(soma3())
console.log(soma3(2,2,2))
console.log(soma3(0,0,0))
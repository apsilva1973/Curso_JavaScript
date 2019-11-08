const soma = function(x,y){
    return x + y
}

const imprimeResultado =  function(a, b, operacao = soma){
    console.log(operacao(a,b))
}

imprimeResultado(3,4)
imprimeResultado(3,4, function(x,y){
    return x -y
})

imprimeResultado(3,4, (x, y)=>x * y)

const pessoa = {
    falar : function (acao){
        console.log(acao)
    }
}

pessoa.falar('Olá Galera')
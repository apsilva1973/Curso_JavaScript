const ImprimiResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10: case 9:
            console.log('Quadro de Honta')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota Invalida!')
            break
    }

}

ImprimiResultado(10)
ImprimiResultado(8.9)
ImprimiResultado(6.55)
ImprimiResultado(2.99)
ImprimiResultado(-9)

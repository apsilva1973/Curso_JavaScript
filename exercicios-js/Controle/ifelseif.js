function TratarErroLancer(erro) {

    throw new Error('Valor não é um Numero')
    //throw 10
    //throw true
}

Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const ImprimiResultado = function (nota) {
    try {
        if (nota.entre(9, 10)) {
            console.log('Quadro de Honta')
        } else if (nota.entre(7, 8.99)) {
            console.log('Aprovado')
        } else if (nota.entre(4, 6.99)) {
            console.log('Recuperação')
        } else if (nota.entre(0, 3.99)) {
            console.log('Reprovado')
        } else {
            console.log('Nota Invalida!')
        }
    } catch (e) {
        TratarErroLancer(e)
    } finally {
        console.log('Final')
    }
}

ImprimiResultado('nas')
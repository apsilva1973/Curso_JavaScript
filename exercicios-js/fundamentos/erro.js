function TratarErroLancer(erro) {

    //throw new Error('...')
    //throw 10
    //throw true
    throw{
        nome: erro.name,
        msg:  erro.message,
        date: new Date
    }
}

function ImprimeNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        TratarErroLancer(e)
    } finally{
        console.log('Final')
    }
}   

const obj = {
 nome: 'Alexandre'
}

ImprimeNomeGritado(obj)
const notas = [6.7, 4.5, 7.9, 6.6, 3.5, 7.1, 9.1]

//sem callback

let notasbaixas = []
for(let i in notas){
    if(notas[i] < 7){
        notasbaixas.push(notas[i])
    }
}

console.log(notasbaixas)

//com callback
notasbaixas = notas.filter(nota => nota < 7)

console.log(notasbaixas)



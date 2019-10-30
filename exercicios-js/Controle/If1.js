function SoBoaNoticia(nota){
    if (nota >= 7){
        console.log('Aprovado com ',nota)
    }
}
SoBoaNoticia(7.6)

function SeForVerdadeeuFalo(valor){
  if (valor){
      console.log('É verdade...',valor)
  }
}

SeForVerdadeeuFalo()
SeForVerdadeeuFalo('')
SeForVerdadeeuFalo(0)
SeForVerdadeeuFalo(-1)
SeForVerdadeeuFalo(null)
SeForVerdadeeuFalo(undefined)
SeForVerdadeeuFalo(NaN)
SeForVerdadeeuFalo({})
SeForVerdadeeuFalo([])
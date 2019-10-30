let isAtivo = false
let nome = 'Ale'

console.log(isAtivo)

isAtivo = true

console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)


console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-3)
console.log(!![])
console.log(!!{})
console.log(!!(isAtivo = 1))

console.log('os falsos...')
console.log(!!'')
console.log(!!0)
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = 0))

console.log('Pra Finalizar...')

console.log(!!('' || null || 0 || ' '))

console.log(nome || 'Desconhecido')


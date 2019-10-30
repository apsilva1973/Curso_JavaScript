const nome = 'Rebeca'
const concatenacao = 'olá ' + nome + '!'

const up = texto => texto.toUpperCase()

const template = `
Ola
${nome}!`

console.log(concatenacao,template)


// expressoes com templates de string....
console.log(`25 + 25 = ${25+25}`)

console.log(`Ei... ${up('cuidado')}!`)

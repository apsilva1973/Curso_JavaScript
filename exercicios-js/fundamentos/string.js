const escola = "Cod3r"
const parentes = 'Alex,Vivi,Bruno,Rick,Malu'.split('*')

console.log(escola.charAt(4)) // retorna o caracter do indice especifico.

console.log(escola.charAt(5)) // Retorna NULL quando não acha o Indice

console.log(escola.charCodeAt(4)) // pegando valor da tabela UNICODE

console.log(escola.indexOf('3')) // pegando o Indice da palavra 

console.log(escola.substring(1)) // pega parte da string

console.log(escola.substring(1,2)) // pega parte da string

console.log( 'Escola '.concat(escola).concat("!"))// Concatenar 

console.log( escola.replace(3,'e'))// Replace na string

console.log( parentes)// chamando um array

console.log( 'Alex,Vivi,Bruno,Rick,Maluuuuu'.split('-'))// Convertendo para array

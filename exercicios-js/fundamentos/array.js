const valores = [8.77,9.15,10.00,6.45]
console.log(valores[0],valores[3])

valores[4] = 10;
console.log(valores)
console.log(valores.length)

valores.push({id:3},null,false,'teste')
console.log(valores)
console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)
console.log(typeof valores)
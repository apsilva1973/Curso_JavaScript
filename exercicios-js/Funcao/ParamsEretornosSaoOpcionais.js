function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Vaor acima do permitido: ${area}m2`)
    } else {
        return area
    }
}

console.log(area(6, 4))
console.log(area(6))
console.log(area(2,3))
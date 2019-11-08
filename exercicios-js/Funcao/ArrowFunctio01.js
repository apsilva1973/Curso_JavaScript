let dobro = function(a){
    return a * 2
}

dobro = (a) => {
    return a * 2
}
dobro = a => a * 2 // return implicito
console.log(dobro(Math.PI))

let ola = function(){
    console.log(`Olá`)
}
ola = () => `Olá`
console.log(ola())
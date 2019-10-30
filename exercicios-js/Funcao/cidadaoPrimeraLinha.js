// junção em JS é First-Class Object (Citizens)
//Higher-order function

// criar de forma literal
function fun(){return 'Sou a fun' }

// armazenar em uma variavel
// além de ser uma função anonima
const fun2 = function(){return 'Sou a fun2'}

// armazenar em um Array
const array = [function (a,b){return a + b},fun,fun2]

console.log( array[0] (2 ,3) )
console.log( array[1] ())
console.log( array[2] ())

// armazena em um atributo de um objecto
const obj = {}
obj.falar = function(){return `Opa!!`}
console.log(obj.falar())

// passar uma função como param
function run(funtotal) {
    return funtotal()
}
console.log(run(fun2))

//Uma função pode retornar / conter uma função

function soma(a,b){
    return function (c){
        console.log(a+b+c)
    }
}
soma(3,2)(5)
const ret = soma(3,2)
ret(6)
 
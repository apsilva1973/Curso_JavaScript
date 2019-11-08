let ComparacomThis = function(param){
    console.log(this === param)
}
ComparacomThis(global)

const obj = {}

ComparacomThis = ComparacomThis.bind(obj)
ComparacomThis(global)
ComparacomThis(obj)

let ComparacomThisarrow = param => console.log(this === param)
ComparacomThisarrow(global)
ComparacomThisarrow(module.exports)
ComparacomThisarrow = ComparacomThisarrow.bind(obj)
ComparacomThisarrow(obj)
ComparacomThisarrow(module.exports)
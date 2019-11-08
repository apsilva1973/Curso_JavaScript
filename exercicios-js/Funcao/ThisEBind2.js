function Pessoa() {
    this.idade = 0
    const Sef = this

    setInterval(function () {
        Sef.idade++
        console.log(Sef.idade)
    }/*.bind(this)*/,1000 )
}

new Pessoa
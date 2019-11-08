let calc = function() {
    return {
      sum: this.sum,
      mult: this.mult,
      div: this.div,
    }
  }

  let Sentidos = function() {
    return {
      andar: this.andar,
      falar: this.falar,
      comer: this.comer,
    }
  }
  
  let methods = {
    andar: function(x, y) {
      return `Andei quase, ${x+y} km/h`
    },
    falar: function(x, y) {
      return `Falei quase, ${x*y} p/h na palestra`      
    },
    comer: function(x, y) {
        return `Comi quase, ${x/y} lanches p/h`
    }
  }
  //calcBound = calc.bind(methods);

  SentidosBound = Sentidos.bind(methods);
  
  /*console.log(calcBound().sum(2,2)); // => 4
  console.log(calcBound().mult(2,3)); // => 6
  console.log(calcBound().div(6,3)); // => 2*/

  console.log(SentidosBound().andar(2,2)); // 
  console.log(SentidosBound().falar(2,3)); // 
  console.log(SentidosBound().comer(6,3)); // 


  let car = {
    sound: 'Vrrrrummm',
    startEngine: function() {
      console.log(this.sound)
    }
  }
  
  let bike = {
    sound: "Papapapapapapraprap"
  }
  
  car.startEngine.bind(bike)()
  car.startEngine()
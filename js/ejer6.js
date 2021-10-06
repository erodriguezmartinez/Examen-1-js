'use strict'
//Esperanza Rodríguez Martínez

//Construir una clase base genérica llamada edificio que almacene el número de plantas que
// tiene el edificio, el número de habitaciones y su superficie total. Crear una clase derivada
// llamada casa que herede edificio y que almacene también lo siguiente: el número de dormitorios y de baños.
// Crear también otra clase derivada llamada oficina que herede edificio y que almacene además el nombre
// de la empresa, el número de extintores y de teléfonos.
//Luego, haz un programa que instancie al menos dos objetos de cada clase.


class Ejercicio6{
constructor(){
   this.edificio1 = new Edificio(5,10, 1000);
   this.edificio2 = new Edificio(10,15, 10000);

  this.casa1 = new Casa(2,5,100,4,2)

   this.iniciar()
}
  iniciar(){
    document.write(`<p>Edificio 1 tiene ${this.edificio1.num_plantas} plantas,${this.edificio1.num_habitaciones} habitaciones y una superficie de ${this.edificio1.superficie_total}.</p>`)
    document.write(`<p>Edificio 2 tiene ${this.edificio2.num_plantas} plantas,${this.edificio2.num_habitaciones} habitaciones y una superficie de ${this.edificio2.superficie_total}.</p>`)

    document.write(`<p>Edificio 3 tiene ${this.casa1.num_plantas} plantas,${this.casa1.num_habitaciones} habitaciones y una superficie de ${this.casa1.superficie_total}, su casa tienen ${this.casa1.num_dormitorios} dormitorios   y  ${this.casa1.num_banos}baños.</p>`)
  }
}

/////////Clase edificio//////////////
class Edificio{
  constructor(num_plantas,num_habitaciones,superficie_total){
    this.num_plantas = num_plantas
    this.num_habitaciones = num_habitaciones
    this.superficie_total = superficie_total

  }
}

class Casa extends Edificio{
  constructor(num_dormitorios,num_banos){
    super()
    this.num_dormitorios = num_dormitorios
    this.num_banos = num_banos

  }

}

class Oficina extends Edificio{
  constructor(){
    super()
    this.nomb_empresa = nomb_empresa
    this.num_extintores = num_extintores
    this.num_telefonos = num_telefonos

  }

}

new Ejercicio6()  //Instacio objeto Ejercicio6, se llama al constructior

'use strict'
//Esperanza Rodríguez Martínez
//Realiza un script que pida números hasta que se pulse “cancelar”. Si no se introduce un número deberá indicarse con un «alert» y seguir pidiendo. 
//Al salir con “cancelar” deberá indicarse la suma total y la media con tres decimales de los números introducidos.

let suma= 0;
let cont=0;
let numero = prompt('Número: ');

let decimales=3;

while(numero!=undefined){  //Preguntamos si no se ha pulsado cancelar
  if(isNaN(numero) || numero=="" || numero==" "){
    alert("ERROR.Ha introducido texto");
  }else{
    suma+=Number(numero);   //Convertimos en contenido de numero en integer
    cont++
  }
  numero = prompt('Número: ');

}

console.log("Ha pulsado cancelar");
console.log("Suma total de los números introducidos: "+suma);
console.log("Media de números introducidos: "+(suma/cont).toFixed(decimales));

//Información de las decimas:
//https://tecnonucleous.com/2018/03/24/como-limitar-los-numeros-decimales-es-javascript/

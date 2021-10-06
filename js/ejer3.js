'use strict'
//Esperanza Rodríguez Martínez
//Realiza un programa que genere una lista de 10 números enteros aleatorios entre -150 y 150. El programa deberá:
//Mostrar la lista por pantalla.
//Indicar el número de valores negativos.
//La cantidad de valores positivos ingresados mayores de 15.
//La cantidad de múltiplos de 15.
//El valor acumulado de los números ingresados que son pares.


let lista = new Array();  //Declaración de array
let negativos=0;
let positivos=0;

let min=-150;
let max=150;

//Introdución de valores en la lista
for(let i=0;i<10;i++){
  lista[i]=Math.round(Math.random() * (max - min) + min);
  if(lista[i]<0){
    negativos++;
  }else{
    if(lista[i]>15){
          positivos++;
    }
  }
}

//Visualización de valores de la lista
console.log("Lista: ");
for(let i=0;i<10;i++){
  console.log(lista[i]);
}

//Indicar el número de valores negativos de la Lista
console.log("Cantidad de valores negativos: "+negativos);
//Indicar el número de valores positivos de la Lista
console.log("Cantidad de valores positivos: "+positivos);

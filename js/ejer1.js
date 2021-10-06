'use strict'
//Esperanza Rodríguez Martínez
//Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 y 7 (hay que comprobar todos)

let numero = introducir();

if (numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0) {

  if (numero % 2 === 0 ) {
     console.log(numero+' Es divisible por 2');
  }
  if(numero % 3 === 0){
    console.log(numero+' Es divisible por 3');
  }
  if(numero % 5 === 0){
    console.log(numero+' Es divisible por 5');
  }
  if(numero % 7 === 0){
    console.log(numero+' Es divisible por 7');
  }
}else{
    console.log(numero+' NO es divisible por 2, 3, 5 ni 7.');
}

function introducir(){
  let num =0;
  do{

    num = prompt('Introduce número: ');

  }while(isNaN(num) || num==" " || num=="" || num<=0 || num % 1 != 0);  //validamos entrada de numeros positivos enterios

  return num;
}

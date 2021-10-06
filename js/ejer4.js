'use strict'
//Esperanza Rodríguez Martínez
//Realiza una función que reciba como parámetro un entero (longitud) y una lista de caracteres prohibidos y devuelva
//un array de caracteres aleatorios no repetidos, con la longitud indicada y sin ninguno de los caracteres prohibidos.

let lista = new Array();  //Declaración de array
let longitud=introducirn();
let prohibidos=new Array();

//Introducir caracteres en array de prohibidos
for(let a=0;a<5;a++){
  prohibidos[a]=introducirc();
}


lista=caracteres(longitud,prohibidos)

//Visualizar lista de caracteres aleatorios
for(let b=0;b<longitud;b++){
  console.log(lista[b]);
}

//Generar array de caracteres aleatorios sin los caracteres prohibidos
function caracteres(longitud,prohibidos){

  let  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;

  for(let i=0;i<longitud;i++){
        lista[i]=characters.charAt(Math.floor(Math.random() * charactersLength));
        for(let y=0;y<5;y++){
          if(lista[i]==prohibidos[y]){
              lista[i]=characters.charAt(Math.floor(Math.random() * charactersLength));
          }
        }
  }

  return(lista);

}

//Función de introducir caracter
function introducirc(){
  let caracter =" ";
  do{

    caracter = prompt('Introduce caracter prohibido: ');

  }while(!isNaN(caracter));
  return caracter;
}
//Función de introducir número
function introducirn(){
  let num =0;
  do{

    num = prompt('Introduce longitud: ');

  }while(isNaN(num) || num==" " || num=="" || num<=0 || num % 1 != 0);  //validamos entrada de numeros positivos enterios

  return num;
}

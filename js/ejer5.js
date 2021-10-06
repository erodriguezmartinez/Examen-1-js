'use strict'
//Esperanza Rodríguez Martínez
//Realiza un programa en JavaScript que muestre la hora actualizada cada segundo. Utiliza para ello la función setTimeout.

Reloj();

function Reloj(){
    //Obteniendo datos del tiempo
    let laHora = new Date();
    let horario = laHora.getHours();
    let minutero = laHora.getMinutes();
    let segundero = laHora.getSeconds();

    if(minutero<10)
        minutero = "0" + minutero;
    if(segundero<10)
        segundero = "0" + segundero;

    //escribiendo sobre el campo de texto la hora actual
    console.log(horario+":"+minutero+":"+segundero);

    //Actualizando la hora cada 1 segundo
    let ahoraSonLas = setTimeout(Reloj,1000);
}

//https://codesandbox.io/s/settimeout-3-8nu2c?from-embed=&file=/index.html:32-725

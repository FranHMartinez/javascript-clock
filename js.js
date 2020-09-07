"use strict";

var segundosU = 0;
var segundosD = 0;

var minutosU = 0;
var minutosD = 0;

var horasU = 0;
var horasD = 0;

var centesimasU = 0;
var centesimasD = 0;

var getMsec = document.getElementById("mSec");
var getmsec = document.getElementById("mseg");
var getSec = document.getElementById("seg");
var getMin = document.getElementById("min");
var getH = document.getElementById("h");
var getDay = document.getElementById("dia");
var dayCont = document.getElementById("diacont");
//start & pause button
var btn = document.getElementById("btnStart");
var btnStop = document.getElementById("btnStop");
//boton reloj
var btnReloj = document.getElementById("btn_reloj");

var btn_cronometro = document.getElementById("btn_cronometro");
var icono = document.getElementById("icon");



//var setInterval
var timer;
//var setInterval Reloj
var timerClock;

getmsec.innerHTML = centesimasD.toString() + centesimasU.toString();
getSec.innerHTML = segundosD.toString() + segundosU.toString();
getMin.innerHTML = minutosD.toString() + minutosU.toString();
getH.innerHTML = horasD.toString() + horasU.toString();


btn.addEventListener("click", cronometro);
btnStop.addEventListener("click", Stop);
btnReloj.addEventListener("click", mostrarReloj)

btn_cronometro.addEventListener("click",botonesCrono);

icono.addEventListener("click", botonesCronoClose);

mostrarReloj();



function botonesCrono(){
    
    
    clearInterval(timerClock);
    timerClock = undefined;
    
    Stop();
    
    btn.style.display = "inline-block";
    btnStop.style.display = "inline-block";
    icono.style.display = "inline-block";
    getMsec.style.display = "flex";

    btn_cronometro.style.display = "none";
    
    dayCont.style.display = "none";
    

}

function botonesCronoClose(){
    btn.style.display = "none";
    btnStop.style.display = "none";
    icono.style.display = "none";
    getMsec.style.display = "none";

    
    btn_cronometro.style.display = "flex";
    dayCont.style.display = "flex";

    //Stop();
    mostrarReloj();
}

function cronometro(){
    
    
    if (btn.className === "pause") {
        
        
        timer = setInterval(startCount, 10);
        
        
        btn.className = "";
        btn.innerHTML = "Pause";
 
        //fin Start.
        } else {
            
            //parar cronometro
            clearInterval(timer);
            
    
            btn.className = "pause";
            btn.innerHTML = "Start";

            getmsec.innerHTML = centesimasD.toString() + centesimasU.toString();
            getSec.innerHTML = segundosD.toString() + segundosU.toString();
            getMin.innerHTML = minutosD.toString() + minutosU.toString();
            getH.innerHTML = horasD.toString() + horasU.toString();
                              
        }

}

 //cada segundo comprueba los numeros para ir incrementando el tiempo
//funcion para las cuentas del cronometro
function startCount(){


        var sumaMin = (minutosD*10) + minutosU;
        var sumaSec = (segundosD*10) + segundosU;
        
        var sumacents = (centesimasD*10) + (centesimasU);
    
        if (horasD == 9 && horasU == 9) {
            segundosU = 0;
            segundosD = 0;
            minutosU = 0;
            minutosD = 0;
            horasD = 0;
            horasU = 0;
        } else if (sumaMin == 59 && sumaSec == 59 && horasU == 9) {
            segundosU = 0;
            segundosD = 0;
            minutosU = 0;
            minutosD = 0;
            horasD += 1;
        } else if (sumaMin == 59 && sumaSec == 59) {
            segundosU = 0;
            segundosD = 0;
            minutosU = 0;
            minutosD = 0;
            horasU += 1;
        } else if (minutosU == 9 && sumaSec == 59) {   
            segundosU = 0;
            segundosD = 0;
            minutosU = 0;
            minutosD += 1;        
        } else if (sumaSec == 59) {   
            segundosU = 0;
            segundosD = 0;
            minutosU += 1;   
        } else if (segundosU == 9) {   
            segundosU = 0;
            segundosD += 1;
        }else if (sumacents == 99){ 
            centesimasU = 0;
            centesimasD = 0; 
            segundosU += 1;
        }else if (centesimasU == 9){
            centesimasU = 0;
            centesimasD += 1;
         }else{
             centesimasU += 1;
         }
           

            getmsec.innerHTML =  centesimasD.toString() + centesimasU.toString();
            getSec.innerHTML = segundosD.toString() + segundosU.toString();
                //varia cada segundo que es la unidad minima
            getMin.innerHTML = minutosD.toString() + minutosU.toString();
            getH.innerHTML = horasD.toString() + horasU.toString();
             
                };

//PARAR EL CRONOMETRO
function Stop(){
        

    btn.className = "pause";
    btn.innerHTML = "Start";

    centesimasU = 0;
    centesimasD = 0;
    segundosU = 0;
    segundosD = 0;
    minutosU = 0;
    minutosD = 0;
    horasD = 0;
    horasU = 0;
                
   clearInterval(timer);

   getmsec.innerHTML = centesimasD.toString() + centesimasU.toString();
   getSec.innerHTML = segundosD.toString() + segundosU.toString();
   getMin.innerHTML = minutosD.toString() + minutosU.toString();
   getH.innerHTML = horasD.toString() + horasU.toString();
}


//MOSTRAR RELOJ

function mostrarReloj(){
    
    Stop();
    
    btn.style.display = "none";
    btnStop.style.display = "none";
    icono.style.display = "none";
    
    getMsec.style.display = "none";

    dayCont.style.display = "flex";

    
    mostrarHora();
    btn_cronometro.style.display = "inline-block";
    
     //previene que al pulsar varias veces tenga una salida erronea   
  if(timerClock == undefined){
    timerClock = setInterval(mostrarHora, 1000);
  }
}

function mostrarHora(){
    var actualTime = new Date();

    let hora = actualTime.getHours();
    let minuto = actualTime.getMinutes();
    let segundo = actualTime.getSeconds();
    let dia = actualTime.getDay();
    
    var dias = ["L", "M", "X", "J", "V", "S", "D"];
    
    if(segundo < 10){
        getSec.innerHTML = "0" + segundo;
    }else {
        getSec.innerHTML = segundo;
    }
    
     if(minuto < 10){
        getMin.innerHTML = "0" + minuto;
    }else {
        getMin.innerHTML = minuto;
    }
    
     if(hora < 10){
        getH.innerHTML = "0" + hora;
    }else {
        getH.innerHTML = hora;
    }
    
       getDay.innerHTML = dias[dia-1];

}
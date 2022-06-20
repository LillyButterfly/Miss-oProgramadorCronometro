//variaveis que pegam os elementos no html pelo id
let horas = document.getElementById('horas');
let minutos = document.getElementById('minutos');
let segundos = document.getElementById('segundos');
let milisegundos = document.getElementById('milisegundos');

//variaveis 
let hora = 0;
let minuto = 0;
let segundo = 0;
let milisegundo = 0;

let cronometro;

//variaveis botoes html
let botaoStart = document.getElementById('btnStart').onclick = () => start();
let botaoPause = document.getElementById('btnPause').onclick = () => pause();  
let botaoReset = document.getElementById('btnReset').onclick = () => reset();

//evento que pega o click no botao
botaoStart.addEventListener("click", start);
botaoPause.addEventListener("click", pause);
botaoReset.addEventListener("click", reset);
  
//função que inicia o cronometro
function start() {
    cronometro = setInterval( function(){
        timer()
        atualizaValor()
    }, 30); // a função será chamdade de 30 em 30 milisegundos

    btnStart.classList.add("ativo");
    btnPause.classList.remove("ativo");
    btnReset.classList.remove("ativo");
}

//função que atualiza os valores do cronometro
function atualizaValor(){
    milisegundos.innerHTML = returnData(milisegundo);
    segundos.innerHTML = returnData(segundo);
    minutos.innerHTML = returnData(minuto);
    horas.innerHTML = returnData(hora);
    
}

function returnData(input) {
    return input > 10 ? input : `0${input}`
}

//função que pausa o cronometro
function pause() {
    clearInterval(cronometro)
    atualizaValor();

    btnPause.classList.add("ativo");
    btnStart.classList.remove("ativo");
    btnReset.classList.remove("ativo");
}

//função que zera o cronometro
function reset(){
    pause()
    hora = 0;
    minuto = 0;
    segundo = 0;
    milisegundo = 0;
    document.getElementById('horas').innerText = '00';
    document.getElementById('minutos').innerText = '00';
    document.getElementById('segundos').innerText = '00';
    document.getElementById('milisegundos').innerText = '00';
    
    btnStart.classList.remove("ativo");
    btnPause.classList.remove("ativo");
}

//função que executa o timer
function timer() {
    if ((milisegundo += 10) == 100) {
        milisegundo = 0;
        segundo++;
    }
    if (segundo == 60) {
        segundo = 0;
        minuto++;
    }
    if (minuto == 60) {
        minuto = 0;
        hora++;
    }
}


/*"use strict"; 

let horas = document.getElementById('horas');
let minutos = document.getElementById('minutos');
let segundos = document.getElementById('segundos');
let milisegundos = document.getElementById('milisegundos');

let botaoStart = document.getElementById('start').onclick = () => start();
let botaoPause = document.getElementById('pause').onclick = () => pause();  
let botaoReset = document.getElementById('reset').onclick = () => reset();

let hora = 0;
let minuto = 0;
let segundo = 0;
let milisegundo = 0;

let cronometro;


  
botaoStart.addEventListener("click", start());
botaoPause.addEventListener("click", pause());
botaoReset.addEventListener("click", reset());



function start() {
    pause();
    cronometro = setInteval(() => {timer()} , 10);
}

function pause() {
    clearInterval(cronometro);
}

function reset() {
    hora = 0;
    minuto = 0;
    segundo = 0;
    milisegundo = 0;
    document.getElementById('horas').innerText = '00';
    document.getElementById('minutos').innerText = '00';
    document.getElementById('segundos').innerText = '00';
    document.getElementById('milisegundos').innerText = '00';

}

function timer() {
    if ((milisegundo += 10) == 1000) {
        milisegundo = 0;
        segundo++;
    }
    if (segundo == 60) {
        segundo = 0;
        minuto++;
    }
    if (minuto == 60) {
        minuto = 0;
        hora++;
    }
    document.getElementById('horas').innerText = returnData(hora);
    document.getElementById('minutos').innerText = returnData(minuto);
    document.getElementById('segundos').innerText = returnData(segundo);
    document.getElementById('milisegundos').innerText = returnData(milisegundo);
}

function returnData(input) {
    return input > 10 ? input : `0${input}`
}*/
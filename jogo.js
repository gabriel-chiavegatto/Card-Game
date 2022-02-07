let numeroDeCartas = null;
const cartas = [];
const gifs = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"]
let pares;
let encontradas = 0;
let carta1 = null;
let carta2 = null;
let teste = true;
let tempo = 0;
const relogio = document.querySelector("footer");





function quantidadeDeCartas() {

    const qntCartas = prompt("Bem Vindo ao Parrot! \nPor favor digite com quantas cartas você deseja jogar. \nAtenção!! Deve ser um número PAR entre 4 e 14.");
    if (qntCartas >= 4 && qntCartas <= 14 && qntCartas % 2 == 0) {
        numeroDeCartas = qntCartas;
        pares = (numeroDeCartas / 2);
    } else {
        quantidadeDeCartas();
    }
}


function aplicarQuantidadeDeCartas() {
    const main = document.querySelector("main");

    let asCartas;
    for (let i = 0; i < pares; i++) {
        asCartas = gifs[i];
        cartas[i] = `<div onclick="virarCarta(this)">

        <img class="verso" src="front.png" alt="papagaio">
        <img class="frente escondido" src=${asCartas} alt="gif">
    </div>`
    }


    for (let j = 0; j < pares; j++) {
        cartas.push(cartas[j]);
    }

    cartas.sort(comparador);
    // Fazer o random aqui antes do inner HTML

    for (let k = 0; k < cartas.length; k++) {
        main.innerHTML += (cartas[k]);
    }
}

function comparador() {
    return Math.random() - 0.5;
}




function virarCarta(clique) {
    const temCartaVirada = document.querySelector(".clicked");

    if (temCartaVirada == null) {
        clique.classList.add("clicked");
        clique.classList.add("rotacao");
        const clicada = clique.querySelector(".frente");
        carta1 = clicada;
    }
    else{
            clique.classList.add("clicked2");
            clique.classList.add("rotacao");
            const clicada2 = clique.querySelector(".frente");
            carta2 = clicada2;
        }
        setTimeout(colocaGif, 1000);
        contadorJogadas();
        tempo = setInterval(aumentaSegundos, 1000);

    
}

function colocaGif() {
    const trocarImg1 = document.querySelector(".clicked .verso");
    if (trocarImg1 !== null) {
        trocarImg1.classList.add("escondido");
        // const pai = trocarImg1.parentNode;
        // pai.classList.add("rotacao");
        const gifIn = document.querySelector(".clicked .frente");
        gifIn.classList.remove("escondido");
    }
    const trocarImg2 = document.querySelector(".clicked2 .verso");
    if (trocarImg2 !== null) {
        trocarImg2.classList.add("escondido");
        // const pai = trocarImg2.parentNode;
        // pai.classList.add("rotacao");
        const gifIn = document.querySelector(".clicked2 .frente");
        gifIn.classList.remove("escondido");
        setTimeout(verificarPar, 2500)
    }
    // verificarPar();
}

function verificarPar(){
    if(carta1.isEqualNode(carta2)){
        console.log("deu");
        let achouOPar1 = document.querySelector(".clicked");
        achouOPar1.classList.add("encontrada");
        achouOPar1.classList.remove("clicked");
        let achouOPar2 = document.querySelector(".clicked2");
        achouOPar2.classList.add("encontrada");
        achouOPar2.classList.remove("clicked2");
        encontradas += 2;
        
    } else {
        console.log("fold");
        //carta1
        let errou1 = document.querySelector(".clicked .frente");
        errou1.classList.add("escondido");
        let pai1 = errou1.parentNode;
        pai1.classList.remove("rotacao");
        pai1.classList.remove("clicked");
        let voltaPpg1 = pai1.querySelector(".verso");
        voltaPpg1.classList.remove("escondido");
        // carta2
        let errou2 = document.querySelector(".clicked2 .frente");
        errou2.classList.add("escondido");
        let pai2 = errou2.parentNode;
        pai2.classList.remove("rotacao");
        pai2.classList.remove("clicked2");
        let voltaPpg2 = pai2.querySelector(".verso");
        voltaPpg2.classList.remove("escondido");   
    }
    carta1 = null;
    carta2 = null;
}

function aumentaSegundos(){
    // if( encontradas == cartas.length){
    //     clearInterval(tempo);
    // }
    // else{
        // relogio.innerHTML = parseInt(relogio.innerHTML) + 1;
    
}



// }
// function jogarMaisUmaVez (){
//     if{paresEncontrados=pares}{

//     }
// }

let jogadas = 0;

function contadorJogadas() {
    jogadas += 1;
}


//Chamando as funções: 

quantidadeDeCartas();
aplicarQuantidadeDeCartas();
let numeroDeCartas = null;
const cartas = [];
const gifs = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"]

let paresEncontrados = 0;





function quantidadeDeCartas() {

    const qntCartas = prompt("Bem Vindo ao Parrot! \nPor favor digite com quantas cartas você deseja jogar. \nAtenção!! Deve ser um número PAR entre 4 e 14.");
    if (qntCartas >= 4 && qntCartas <= 14 && qntCartas % 2 == 0) {
        numeroDeCartas = qntCartas;
    } else {
        quantidadeDeCartas();
    }
}


function aplicarQuantidadeDeCartas() {
    const main = document.querySelector("main");
    const pares = (numeroDeCartas / 2);
    
    let gifNaCarta;
    for (let i = 0; i < pares; i++) {
        gifNaCarta = gifs[i];
        cartas[i] = `<div onclick="virarCarta(this)">

        <img class ="verso" src="front.png" alt="papagaio">
        <img class="frente escondido" src=${gifNaCarta} alt="gif">
    </div>`
    }
    for (let j = 0; j < pares; j++) {
        cartas.push(cartas[j]);
    }
    
    // Fazer o random aqui antes do inner HTML

    for (let k = 0; k < cartas.length; k++) {
        main.innerHTML += (cartas[k]);
    }
}

// function myFunction() {
//     cartas.sort(function ( ) { return 0.5 - Math.random() });
    
// }


function virarCarta(clique) {
    clique.classList.add("clicked");
    const trocarImg = clique.querySelector(".verso");
    if (trocarImg !== null) {
        trocarImg.classList.add("escondido");
        const colocaGif = clique.querySelector(".frente");
        colocaGif.classList.remove("escondido");
    }
    contadorJogadas();
    // verificarCartasViradas();
}

// function verificarCartasViradas(){
//     const procuraPares = document.querySelectorAll(".cliked")
//     if(a carta for igualzinha){
//         paresEncontrados += 1;
        

//     }
// }

// contador de jogadas
let jogadas = 0;
function contadorJogadas() {
    jogadas += 1;
}


//Chamando as funções: 

quantidadeDeCartas();
aplicarQuantidadeDeCartas();
// myFunction();

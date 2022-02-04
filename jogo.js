let numeroDeCartas = null;
const cartas = [];
const gifs = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"]

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
    main.innerHTML = cartas;
}


function virarCarta(clique) {
    clique.classList.add("clicked");
    const trocarImg = document.querySelector(".clicked .verso");
    if (trocarImg !== null) {
        trocarImg.classList.add("escondido");
        const colocaGif = document.querySelector(".clicked .frente");
        colocaGif.classList.remove("escondido");
    }




    contadorJogadas();
}
// contador de jogadas
let jogadas = 0;
function contadorJogadas() {
    jogadas += 1;
}


//Chamando as funções: 
quantidadeDeCartas();
aplicarQuantidadeDeCartas();

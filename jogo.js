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
        cartas[i] = ` <div class="frente verso" onclick="contadorJogadas()"><img src=${gifNaCarta} alt="gif"></div>
        <div class="frente verso" onclick="contadorJogadas()"><img src=${gifNaCarta} alt="gif"></div> `;
        main.innerHTML += `${cartas[i]}`;
    }

}

// contador de jogadas
let jogadas = 0;
function contadorJogadas() {
    jogadas += 1;
}


//Chamando as funções: 
quantidadeDeCartas();
aplicarQuantidadeDeCartas();

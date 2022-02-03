let numeroDeCartas = null;
const cartas = [];

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
    
    for (let i = 0; i < numeroDeCartas; i++) {
        cartas[i]=` <div class="carta" onclick="contadorJogadas()"><img src="bobrossparrot.gif" alt="gif"></div>`;
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
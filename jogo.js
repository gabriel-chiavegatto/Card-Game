 let numeroDeCartas = null;

 function quantidadeDeCartas(){

     const qntCartas = prompt("Bem Vindo ao Parrot! \nPor favor digite com quantas cartas você deseja jogar. \nAtenção!! Deve ser um número PAR entre 4 e 14.");
     if( qntCartas >= 4 && qntCartas <= 14 && qntCartas%2 == 0) {
         numeroDeCartas = qntCartas;
     } else { 
         quantidadeDeCartas();
    }
 }
 quantidadeDeCartas()


let jogadas = 0;
function contadorJogadas(){
    jogadas += 1;
}

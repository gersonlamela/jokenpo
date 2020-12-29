var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var pontosplayer1 = 0;
var pontosplayer2 = 0;
var rondaganha = 0;
var pedra = 0;
var papel = 0;
var tesoura = 0;


function start() {
    document.getElementById("jogar").innerHTML += "<p class=palco1 > <b> Jogador 1:  </b>" + player1.value + "</p><p class=palco2 ><b> Jogador 2: </b> " + player2.value + "<button align=center class=play onclick=jogar()>Play</button><p>";
}

function jogar() {

    var random = [
        "Pedra", "Papel", "Tesoura"
    ];


    var vitoria1 = 1;
    var vitoria2 = 1;

    while (vitoria1 <= 3 && vitoria2 <= 3) {
        var escolha1 = random[Math.floor(Math.random() * random.length)];
        var escolha2 = random[Math.floor(Math.random() * random.length)];
        if (escolha1 === "Pedra") {
            if (escolha2 === "Pedra") {
                document.getElementById("jogo").innerHTML += "<span>" + player1.value + " : </span> Pedra &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <span>" + player2.value + " : </span>  Papel <p>";
            } else if (escolha2 === "Tesoura") {
                document.getElementById("jogo").innerHTML += "<span>" + player1.value + " : </span> Pedra &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>" + player2.value + " : </span> Tesoura <p>";
                rondaganha = rondaganha + 1;
                pedra = pedra + 1;
                vitoria1 = vitoria1 + 1;
                pontosplayer1 = pontosplayer1 + 1;
            } else if (escolha2 === "Papel") {
                document.getElementById("jogo").innerHTML += "<span>" + player1.value + " : </span> Pedra &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>" + player2.value + " : </span> Papel <p>";
                vitoria2 = vitoria2 + 1;
                rondaganha = rondaganha + 1;
                papel = papel + 1;
                pontosplayer2 = pontosplayer2 + 1;
            }
        } else if (escolha1 === "Papel") {
            if (escolha2 === "Papel") {
                document.getElementById("jogo").innerHTML += "<span>" + player1.value + " : </span> Papel &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>" + player2.value + " : </span> Papel <p>";
            } else if (escolha2 === "Pedra") {
                document.getElementById("jogo").innerHTML += "<span>" + player1.value + " : </span> Papel &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>" + player2.value + " : </span> Pedra <p>";
                vitoria1 = vitoria1 + 1;
                rondaganha = rondaganha + 1;
                papel = papel + 1;
                pontosplayer1 = pontosplayer1 + 1;
            } else if (escolha2 === "Tesoura") {
                document.getElementById("jogo").innerHTML += "<span>" + player1.value + " : </span> Papel &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>" + player2.value + " : </span> Tesoura <p>";
                vitoria2 = vitoria2 + 1;
                pontosplayer2 = pontosplayer2 + 1;
                rondaganha = rondaganha + 1;
                tesoura = tesoura + 1;
            }
        } else if (escolha1 === "Tesoura") {
            if (escolha2 === "Tesoura") {

                document.getElementById("jogo").innerHTML += "<span>" + player1.value + " : </span> Tesoura &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>" + player2.value + " : </span> Tesoura <p>";
            } else if (escolha2 === "Papel") {
                document.getElementById("jogo").innerHTML += "<span>" + player1.value + " : </span> Tesoura &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>" + player2.value + " : </span> Papel <p>";
                vitoria1 = vitoria1 + 1;
                rondaganha = rondaganha + 1;
                tesoura = tesoura + 1;
                pontosplayer1 = pontosplayer1 + 1;
            } else if (escolha2 === "Pedra") {
                document.getElementById("jogo").innerHTML += "<span>" + player1.value + " : </span> Tespura &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>" + player2.value + " : </span> Pedra <p>";
                vitoria2 = vitoria2 + 1;
                pedra = pedra + 1;
                pontosplayer2 = pontosplayer2 + 1;
                rondaganha = rondaganha + 1;

            }
        }
    }
    var pedrapercentagem = pedra * 100 / rondaganha
    var papelpercentagem = papel * 100 / rondaganha
    var tesourapercentagem = tesoura * 100 / rondaganha

    if (vitoria1 >= 3) {

        document.getElementById("resultados").innerHTML += player1.value + "<p class=ganho>Venceu!</p>" +

            "Pedra : " + pedrapercentagem + "%\nPapel :  " + papelpercentagem + "%\nTesoura : " + tesourapercentagem + "%\n";
        document.getElementById("pontosplayer1").innerHTML += player1.value + " : " + pontosplayer1 + "<p class=ganho></p>";
        document.getElementById("pontosplayer2").innerHTML += player2.value + " : " + pontosplayer2 + "<p class=ganho></p>";
    } else if (vitoria2 >= 3) {
        document.getElementById("resultados").innerHTML += player2.value + "<p class=ganho>Venceu!</p>" +
            "Pedra : " + pedrapercentagem + "%\nPapel :  " + papelpercentagem + "%\nTesoura : " + tesourapercentagem + "%\n";
        document.getElementById("pontosplayer1").innerHTML += "<p class=pontos></p>" + player1.value + " : " + pontosplayer1 + "";
        document.getElementById("pontosplayer2").innerHTML += "<p class=pontos></p>" + player2.value + " : " + pontosplayer2 + "";
    }
    document.getElementById("reiniciar").innerHTML += "<button class=inicio onclick=reiniciar()>Restart</button>";


    document.body.scrollTop = 1000;
    document.documentElement.scrollTop = 1000;
}

function reiniciar() {
    location.reload();
}
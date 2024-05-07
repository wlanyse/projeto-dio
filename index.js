
let nomeXmen = "Tempestade";

let quantXp = 8665;


switch (true) {
    case quantXp < 1000:
        console.log("O Herói de nome " + nomeXmen + " está no nível Ferro");
        break;

    case quantXp >= 1001 && quantXp <= 2000:
        console.log("O Herói de nome " + nomeXmen + " está no nível Bronze");
        break;

    case quantXp >= 2001 && quantXp <= 5000:
        console.log("O Herói de nome " + nomeXmen + " está no nível Prata");
        break;

    case quantXp >= 5001 && quantXp <= 7000:
        console.log("O Herói de nome " + nomeXmen + " está no nível Ouro");
        break;

    case quantXp >= 7001 && quantXp <= 8000:
        console.log("O Herói de nome " + nomeXmen + " está no nível Platina");
        break;

    case quantXp >= 8001 && quantXp <= 9000:
        console.log("O Herói de nome " + nomeXmen + " está no nível Ascendente");
        break;

    case quantXp >= 9001 && quantXp <= 10000:
        console.log("O Herói de nome " + nomeXmen + " está no nível Imortal");
        break;

    default:
        console.log("O Herói de nome " + nomeXmen + " está no nível Radiante");
        break;
}
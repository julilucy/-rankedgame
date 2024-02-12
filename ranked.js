function calcularNivel(victory, derrot) {
    let numberVictory = victory - derrot;
    let rank;

    switch (true) {
        case victory < 10:
            rank = "Ferro";
            break;
        case victory <= 20:
            rank = "Bronze";
            break;
        case victory <= 50:
            rank = "Prata";
            break;
        case victory <= 80:
            rank = "Ouro";
            break;
        case victory <= 90:
            rank = "Diamante";
            break;
        case victory <= 100:
            rank = "Lendário";
            break;
        default:
            rank = "Imortal";
            break;
    }


    return `O Herói tem saldo de ${numberVictory} está no nível de ${rank}`;
}


let victory = 85;
let derrot = 20;
let result = calcularNivel(victory, derrot);
console.log(result);

function calcularNivel(victory, derrot) {
    let numberVictory = victory - derrot;
    let rank;

    switch (true) {
        case numberVictory < 10:
            rank = "Ferro";
            break;
        case numberVictory <= 20:
            rank = "Bronze";
            break;
        case numberVictory <= 50:
            rank = "Prata";
            break;
        case numberVictory <= 80:
            rank = "Ouro";
            break;
        case numberVictory <= 90:
            rank = "Diamante";
            break;
        case numberVictory <= 100:
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

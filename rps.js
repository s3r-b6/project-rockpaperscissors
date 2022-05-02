let finalscore
let compPick
let userPick
let results 
let round

function GameRPS(){
finalscore=0
    //Bucle y contador de rondas. El límite de rondas es 5. Los empates cuentan como ronda.
    for(round = 1; round <6; round++){
        userSelection();
        computerSelection();
        getResults();
    //si alguien llega a 3 puntos antes de las 5 rondas, la partida termina.
        if(finalscore == -3|| finalscore == +3) {
            break;
        }
    }

    //BO5: el primero en ganar 3 gana || casos: 2-3 3-2 || -1 ó +1 
    //si el resultado es positivo, gana el player, si no, gana el ordenador.

    if(finalscore > 0) {
        document.body.append('Tú ganas la partida!')
        }
    else if (finalscore < 0) {
        document.body.append('Tú pierdes la partida!')
        }
    else {
        document.body.append('Vaya, habéis empatado!')
        }
    }

function computerSelection(){
    let PickValue;
    PickValue = Math.floor(Math.random() * 10)
        if (PickValue >= 0 && PickValue < 3) {
            compPick = 'piedra';
        }
        if (PickValue >= 3 && PickValue < 6) {
            compPick = 'papel';
        }
        if (PickValue >= 6 && PickValue <= 9) {
            compPick = 'tijera';
    }
}

function userSelection(){
    userPick = prompt('Piedra, papel o tijera?');
    userPick = userPick.toLowerCase();
    if(!userPick.match(/^(piedra|papel|tijera)$/)){
        userSelection();
    }
}

function getResults(){
    results = compPick+userPick
    //esta es la verdadera chapuza de la iteración
    switch (results) {
        case 'tijeratijera':
            document.body.append('\nResultado de la ronda '+round+': empate! ');
            break;
        case 'piedrapiedra':
            document.body.append('\n Resultado de la ronda '+round+': empate! ');
            break;
        case 'papelpapel':
            document.body.append('\n Resultado de la ronda '+round+': empate! ');
            break;

        case 'piedratijera':
            document.body.append('\n Resultado de la ronda '+round+': Tú pierdes! ');
            finalscore = finalscore - 1
            break;
        case 'tijerapapel':
            document.body.append('\n Resultado de la ronda '+round+': Tú pierdes! ');
            finalscore = finalscore - 1
            break;
        case 'papelpiedra':
            document.body.append('\nResultado de la ronda '+round+': Tú pierdes! ');
            finalscore = finalscore - 1
            break;

        case 'tijerapiedra':
            document.body.append('\nResultado de la ronda '+round+': Tú ganas! ');
            finalscore = finalscore + 1
            break;
        case 'papeltijera':
            document.body.append('\nResultado de la ronda '+round+': Tú ganas! ');
            finalscore = finalscore + 1
            break;
        case 'piedrapapel':
            document.body.append('\nResultado de la ronda '+round+': Tú ganas! ');
            finalscore = finalscore + 1
            break;
    }
}


//moraleja: habría sido mejor trabajar con ints todo el rato en lugar de strings.
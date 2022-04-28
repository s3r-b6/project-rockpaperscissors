function GameRPS(){
    let compPick
    let userPick
    userSelection();
    computerSelection();
    //Empates
    let results 
    getResults();
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
    switch (results) {
        case 'tijeratijera':
            document.body.append('Empate! ');
            break;
        case 'piedrapiedra':
            document.body.append('Empate! ');
            break;
        case 'papelpapel':
            document.body.append('Empate! ');
            break;

        case 'piedratijera':
            document.body.append('Tú pierdes! ');
            break;
        case 'tijerapapel':
            document.body.append('Tú pierdes! ');
            break;
        case 'papelpiedra':
            document.body.append('Tú pierdes! ');
            break;

        case 'tijerapiedra':
            document.body.append('Tú ganas! ');
            break;
        case 'papeltijera':
            document.body.append('Tú ganas! ');
            break;
        case 'piedrapapel':
            document.body.append('Tú ganas! ');
            break;
    }
}


//moraleja: habría sido mejor trabajar con ints todo el rato en lugar de strings.
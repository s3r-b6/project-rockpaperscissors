// Piedra:0 | Papel:1 | Tijera: 2
// 2>1 => gana 1 (piedra)
// 3>2 => gana 2 (tijera)
// 1>3 ?????
function PlayRPS(){
  let CompChoice;
  function computerPick() {
    let random = Math.floor(Math.random() * 10);
    console.log(random);
    if (random <= 3) {
      CompChoice = 0;
    } else if (random > 3 && random <= 6) {
      CompChoice = 1;
    } else if (random > 6 && random <= 10) {
      CompChoice = 2;
    }
  }

  /*
    tests
    console.log(CompChoice)
    userChoice = 2

    console.log((userChoice+1)%3)
    console.log(CompChoice % 3)
  */
  /*
    no entiendo bien el concepto, pero funciona; esta es la demostración más fácil pero  (https://math.stackexchange.com/q/391185):
    % 3, option k beats option k+1 and is beaten by option k−1

    muy interesante: https://en.wikipedia.org/wiki/Modular_arithmetic
  */

  function GameRPS(userChoice) {
    computerPick();
    if (userChoice == CompChoice) {
      document.body.append("Empate!");
    } else if ((userChoice + 1) % 3 == CompChoice % 3) {
      document.body.append("Gana el PC!");
    } else {
      document.body.append("Tú ganas!");
    }
  }

  const piedra = document.getElementById("piedra-b");
  const papel = document.getElementById("papel-b");
  const tijera = document.getElementById("tijera-b");

//(https://stackoverflow.com/a/24050476) Para pasarle un argumento al eventhandler inline hay que usar una función anónima
//Tb esta es la razón por la que el addEventListener no estaba funcionando 

  piedra.onclick = function () {GameRPS(0);};
  papel.onclick = function () {GameRPS(1);};
  tijera.onclick = function () {GameRPS(2);};
  
// Tb se puede usar el bind (pasa a la función un array con parámetros):
//tijera.onclick = GameRPS.bind(this, [2]);

}
window.onload = PlayRPS;